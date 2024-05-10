import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { collectAndSend, collectAndSendTrpc } from "./utils/collect-and-send";
import { DecipherConsole } from "./utils/decipher-console";
import { DecipherHandlerConfig } from "./utils/handler-config";
import Decipher from "./decipher";
import type {
  AppRouterRequestHandler,
  AppRouterNextRequestHandler,
  PageRouterHandler,
} from "./types";

/* App router wrapper: */
export function wrapAppRouter(
  handler: AppRouterRequestHandler | AppRouterNextRequestHandler,
  config: DecipherHandlerConfig
): typeof handler;

export function wrapAppRouter(
  handler: AppRouterRequestHandler | AppRouterNextRequestHandler,
  config: DecipherHandlerConfig
): typeof handler {
  const filledConfig = {
    ...Decipher.settings,
    excludeRequestBody: !!config.excludeRequestBody,
    environment: config.environment || "production",
  };
  return async (request: Request | NextRequest) => {
    let decipherRequest = request;
    let handlerInvoked = false;

    let responseBody: any;
    return await Decipher.runWithContext(
      {
        request: request,
        consoleMessages: [],
        decipherConsole: new DecipherConsole(),
        config: filledConfig,
      },
      async () => {
        try {
          const currentContext = Decipher.getCurrentContext(); // Retrieve the current context
          currentContext?.decipherConsole.instrumentConsole(); // Instrument the console for capturing logs
          currentContext?.decipherConsole.clearMessages(); // Clear any previous messages

          handlerInvoked = true;
          if (!filledConfig.excludeRequestBody) {
            // Clone the request if we're capturing body, so that we can
            // access the body stream without affecting the original request's stream.
            decipherRequest = request.clone();
            Decipher.updateContext({ request: decipherRequest });
          }
          const response = await handler(request as any); // Run the handler as normal.
          if (!response.ok) {
            const clonedResponse = response.clone();
            try {
              responseBody = await clonedResponse.json();
            } catch (jsonParseError) {
              responseBody = "Unknown error; json parsing failed.";
            }
            // Identified a non-2xx response, which may be an exception that the handler caught.
            // Collect the request/response data and send it to Decipher.
            collectAndSend(decipherRequest, {
              respBody: responseBody,
              statusCode: response.status,
              messages: currentContext?.decipherConsole.getMessages() || [],
              isUncaughtException: false,
              config: filledConfig,
              error: currentContext?.capturedError,
              endUser: currentContext?.endUser,
            });
          }
          return response;
        } catch (error) {
          if (handlerInvoked) {
            // This branch handles uncaught exceptions thrown by the handler; these have stack traces.
            // Collect the request/response data and send it to Decipher.
            if (error instanceof Error) {
              const currentContext = Decipher.getCurrentContext(); // Retrieve the current context
              const errorToSend = currentContext?.capturedError
                ? currentContext.capturedError
                : error;
              if (currentContext?.decipherConsole) {
                collectAndSend(decipherRequest, {
                  respBody: responseBody,
                  statusCode: 500,
                  messages: currentContext?.decipherConsole.getMessages() || [],
                  isUncaughtException: true,
                  config: filledConfig,
                  error: errorToSend,
                  endUser: currentContext?.endUser,
                });
              }
              throw error;
            } else {
              // This else condition is needed because it's possible to throw non-Error objects
              // e.g. `throw "error happened"` (string)
              const currentContext = Decipher.getCurrentContext(); // Retrieve the current context
              if (currentContext?.decipherConsole) {
                collectAndSend(decipherRequest, {
                  respBody: error,
                  statusCode: 500,
                  messages: currentContext?.decipherConsole.getMessages() || [],
                  isUncaughtException: true,
                  config: filledConfig,
                  error: currentContext?.capturedError,
                  endUser: currentContext?.endUser,
                });
              }
            }
          } else {
            // Something went wrong with Decipher's initialization logic; just run the handler as normal and
            // return the result.
            const result = await handler(request as any);
            return result;
          }
        } finally {
          const currentContext = Decipher.getCurrentContext();
          if (currentContext) {
            currentContext.decipherConsole.resetConsole(); // Reset the console to its original state
            currentContext.decipherConsole.clearMessages(); // Clear captured console messages
          }
        }
        return new Response();
      }
    );
  };
}

/* Page router wrapper: */
export function wrapPageRouter<T>(
  handler: PageRouterHandler<T>,
  config: DecipherHandlerConfig
): typeof handler;

export function wrapPageRouter<T>(
  handler: PageRouterHandler<T>,
  config: DecipherHandlerConfig
): typeof handler;

export function wrapPageRouter<T>(
  handler: PageRouterHandler<T>,
  config: DecipherHandlerConfig
): PageRouterHandler<T> {
  const filledConfig = {
    ...Decipher.settings,
    excludeRequestBody: !!config.excludeRequestBody,
    environment: config.environment || "production",
  };

  return async (req: NextApiRequest, res: NextApiResponse<T>) => {
    let handlerInvoked = false;
    let responseStatus: number = 200; // Default to 200, will be updated with actual response status
    let responseBody: any;
    return await Decipher.runWithContext(
      {
        request: req,
        consoleMessages: [],
        decipherConsole: new DecipherConsole(),
        config: filledConfig,
      },
      async () => {
        try {
          const currentContext = Decipher.getCurrentContext(); // Retrieve the current context
          currentContext?.decipherConsole.instrumentConsole(); // Instrument the console for capturing logs
          currentContext?.decipherConsole.clearMessages(); // Clear any previous messages
          handlerInvoked = true;

          const originalJson = res.json.bind(res);
          res.json = (body: any) => {
            responseBody = body;
            return originalJson(body);
          };
          const originalSend = res.send.bind(res);
          res.send = (body?: any) => {
            if (body) {
              responseBody = body;
            }
            return originalSend(body);
          };
          const originalEnd = res.end.bind(res);
          res.end = (body?: any) => {
            if (body) {
              responseBody = body;
            }
            return originalEnd(body);
          };

          const originalStatus = res.status.bind(res);
          res.status = (status: number) => {
            responseStatus = status;
            return originalStatus(status);
          };

          const result = await handler(req, res); // Run the handler as normal.

          // If an error has been captured, collect and send
          if (currentContext?.capturedError) {
            // Non-2xx/3xx status code detected
            collectAndSend(req, {
              respBody: responseBody,
              statusCode: responseStatus,
              messages: currentContext?.consoleMessages || [],
              isUncaughtException: false,
              config: filledConfig,
              error: currentContext.capturedError,
              endUser: currentContext.endUser,
            });
          }
          return result;
        } catch (error) {
          // If there's an uncaught error, collect and send
          if (handlerInvoked) {
            const currentContext = Decipher.getCurrentContext();
            if (error instanceof Error) {
              const errorToSend = currentContext?.capturedError
                ? currentContext.capturedError
                : error;
              if (currentContext?.decipherConsole) {
                collectAndSend(req, {
                  respBody: responseBody,
                  statusCode: 500,
                  messages: currentContext?.consoleMessages || [],
                  isUncaughtException: true,
                  config: filledConfig,
                  error: errorToSend,
                  endUser: currentContext?.endUser,
                });
              }
            } else {
              if (currentContext?.decipherConsole) {
                collectAndSend(req, {
                  respBody: error,
                  statusCode: 500,
                  messages: currentContext?.consoleMessages || [],
                  isUncaughtException: true,
                  config: filledConfig,
                  error: currentContext?.capturedError,
                  endUser: currentContext?.endUser,
                });
              }
            }
            throw error;
          } else {
            const result = await handler(req, res);
            return result;
          }
        } finally {
          const currentContext = Decipher.getCurrentContext();
          if (currentContext) {
            currentContext.decipherConsole.resetConsole(); // Reset the console to its original state
            currentContext.decipherConsole.clearMessages(); // Clear captured console messages
          }
        }
      }
    );
  };
}

export function decipherTrpcMiddleware(config: DecipherHandlerConfig) {
  return async (opts: any) => {
    let handlerInvoked = false;
    let result: any;
    const filledConfig = {
      ...config,
      excludeRequestBody: !!config.excludeRequestBody,
      environment: config.environment || "production",
    };
    try {
      return await Decipher.runWithContext(
        {
          opts: opts,
          consoleMessages: [],
          decipherConsole: new DecipherConsole(),
          config: filledConfig,
        },
        async () => {
          try {
            const currentContext = Decipher.getCurrentContext(); // Retrieve the current context
            currentContext?.decipherConsole.instrumentConsole(); // Instrument the console for capturing logs
            currentContext?.decipherConsole.clearMessages(); // Clear any previous messages

            // Proceed with the next middleware or the actual procedure
            result = await opts.next();

            if (!result.ok && result.error instanceof Error) {
              collectAndSendTrpc(opts, {
                respBody: {},
                statusCode: 500,
                messages: currentContext?.consoleMessages || [],
                isUncaughtException: true,
                config: filledConfig,
                error: result.error,
              });
            }
            return result;
          } catch (error) {
            if (!handlerInvoked) {
              // Caught an error in Decipher's logic BEFORE handler invocation above. The handler won't throw an error
              // if it was an invoked given tRPC's error-handling mechanism.
              return await opts.next();
            } else {
              // Caught an error in Decipher's logic AFTER handler invocation above. The handler won't throw an error
              // if it was an invoked given tRPC's error-handling mechanism.
              return result;
            }
          } finally {
            const currentContext = Decipher.getCurrentContext();
            if (currentContext) {
              currentContext.decipherConsole.resetConsole(); // Reset the console to its original state
              currentContext.decipherConsole.clearMessages(); // Clear captured console messages
            }
          }
        }
      );
    } catch {
      return new Response();
    }
  };
}

// export function handleCaptureError() {
//   const currentContext = Decipher.getCurrentContext(); // Retrieve the current context
//   // TRPC case
//   if (currentContext?.opts) {
//     collectAndSendTrpc(currentContext?.opts, {
//       respBody: {},
//       messages: currentContext?.consoleMessages || [],
//       isUncaughtException: false,
//       config: currentContext?.config,
//       error: currentContext?.capturedError,
//       endUser: currentContext?.endUser,
//     });
//   }

//   // Non TRPC
//   else if (currentContext?.capturedError && currentContext.request) {
//     collectAndSend(currentContext.request, {
//       respBody: {},
//       messages: currentContext.consoleMessages || [],
//       isUncaughtException: false,
//       config: currentContext.config,
//       error: currentContext.capturedError,
//       endUser: currentContext?.endUser,
//     });
//   }
// }
