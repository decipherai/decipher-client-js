import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { collectAndSend, collectAndSendTrpc } from "./utils/collect-and-send";
import { DecipherConsole } from "./utils/decipher-console";
import { DecipherHandlerConfig } from "./utils/handler-config";
import type { AppRouterRequestHandler, AppRouterNextRequestHandler, PageRouterHandler } from "./types";
import Decipher from './decipher'; // Import the Decipher singleton

/* App router wrapper: */
export function withDecipher(
  handler: AppRouterRequestHandler | AppRouterNextRequestHandler,
  config: DecipherHandlerConfig
): typeof handler;

export function withDecipher(
  handler: AppRouterRequestHandler | AppRouterNextRequestHandler,
  config: DecipherHandlerConfig
): typeof handler {
  const filledConfig = {
    ...config,
    excludeRequestBody: !!config.excludeRequestBody,
    environment: config.environment || "production",
  };

  return async (request: Request | NextRequest) => {
    console.log("[Decipher] At top request");

    let decipherRequest = request;
    let handlerInvoked = false;

    let responseBody: any;

    try {
      console.log("[Decipher] Running with context");

      Decipher.runWithContext({
        method: request.method,
        url: request.url,
        // headers: new Headers(request.headers),
        decipherConsole: new DecipherConsole(),
        capturedError: undefined,
        consoleMessages: [],
      }, async () => {

        console.log("[Decipher] is in the block");

        const currentContext = Decipher.getCurrentContext(); // Retrieve the current context
        //currentContext?.decipherConsole.instrumentConsole(); // Instrument the console for capturing logs
        //currentContext?.decipherConsole.clearMessages(); // Clear any previous messages
        
        handlerInvoked = true;
        if (!filledConfig.excludeRequestBody) {
          // Clone the request if we're capturing body, so that we can
          // access the body stream without affecting the original request's stream.
          decipherRequest = request.clone();
        }
        const response = await handler(request as any); // Run the handler as normal.

        if (!response.ok) {
          console.log("[Decipher] Response not ok");
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
            messages: currentContext?.consoleMessages,
            isUncaughtException: false,
            config: filledConfig,
          });
        }
        console.log("[Decipher] Returning response", response);
        return response;
      });
    } catch (error) {
      console.log("[Decipher] Caught an error", error);
      const currentContext = Decipher.getCurrentContext(); // Retrieve the current context

      if (handlerInvoked) {
        // This branch handles uncaught exceptions thrown by the handler; these have stack traces.
        // Collect the request/response data and send it to Decipher.
        if (error instanceof Error) {
          if (currentContext?.decipherConsole) {
            collectAndSend(decipherRequest, {
              respBody: responseBody,
              statusCode: 500,
              messages: currentContext?.consoleMessages,
              isUncaughtException: true,
              config: filledConfig,
              error,
            });
          }
          throw error;
        } else {
          // This else condition is needed because it's possible to throw non-Error objects
          // e.g. `throw "error happened"` (string)
          if (currentContext?.decipherConsole) {
            collectAndSend(decipherRequest, {
              respBody: error,
              statusCode: 500,
              messages: currentContext?.consoleMessages,
              isUncaughtException: true,
              config: filledConfig,
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
      console.log("[Decipher] in the finally block");
      // After the request is handled, restore the original console methods
      const currentContext = Decipher.getCurrentContext();
      if (currentContext) {
        currentContext.decipherConsole.resetConsole(); // Reset the console to its original state
        currentContext.decipherConsole.clearMessages(); // Clear captured console messages
      }
    }
    console.log("[Decipher] returning new response");
    return new Response();
  };
}
/* Page router wrapper: */
export function wrapApiHandlerWithDecipher<T>(
  handler: PageRouterHandler<T>,
  config: DecipherHandlerConfig
): typeof handler;

export function wrapApiHandlerWithDecipher<T>(
  handler: PageRouterHandler<T>,
  config: DecipherHandlerConfig
): typeof handler {
  const filledConfig = {
    ...config,
    excludeRequestBody: !!config.excludeRequestBody,
    environment: config.environment || "production",
  };

  return async (req: NextApiRequest, res: NextApiResponse<T>) => {
    let originalConsole;
    let decipherConsole;
    let handlerInvoked = false;

    let responseBody: any;

    try {
      decipherConsole = new DecipherConsole();
      decipherConsole.instrumentConsole();
      originalConsole = console;

      const originalJson = res.json.bind(res);
      res.json = (body: any) => {
        // Capture the responseBody; only used in case of uncaught exceptions and non-200s.
        responseBody = body;
        return originalJson(body);
      };
      const originalSend = res.send.bind(res);
      res.send = (body?: any) => {
        // Capture the responseBody if body is provided; only used in case of uncaught exceptions and non-200s.
        if (body) {
          responseBody = body;
        }
        return originalSend(body);
      };
      const originalEnd = res.end.bind(res);
      res.end = (body?: any) => {
        // Capture the responseBody if body is provided; only used in case of uncaught exceptions and non-200s.
        if (body) {
          responseBody = body;
        }
        return originalEnd(body);
      };

      handlerInvoked = true;
      const result = await handler(req, res); // Run the handler as normal.
      // 200s are OK and get returned as normal.
      if (!res.statusCode || (res.statusCode >= 200 && res.statusCode < 300)) {
        return result;
      } else {
        // Identified a non-200 (which may be an exception that the handler caught).
        // Collect the request/response data and send it to Decipher.
        collectAndSend(req, {
          respBody: responseBody,
          statusCode: res.statusCode,
          messages: decipherConsole.getMessages(),
          isUncaughtException: false,
          config: filledConfig,
        });
        return result;
      }
    } catch (error) {
      if (handlerInvoked) {
        // This branch handles uncaught exceptions thrown by the handler; these have stack traces.
        // Collect the request/response data and send it to Decipher.
        if (error instanceof Error) {
          if (decipherConsole) {
            collectAndSend(req, {
              respBody: responseBody,
              statusCode: 500,
              messages: decipherConsole.getMessages(),
              isUncaughtException: true,
              config: filledConfig,
              error,
            });
          }
        } else {
          // This else condition is needed because it's possible to throw non-Error objects
          // e.g. `throw "error happened"` (string)
          if (decipherConsole) {
            collectAndSend(req, {
              respBody: error,
              statusCode: 500,
              messages: decipherConsole.getMessages(),
              isUncaughtException: true,
              config: filledConfig,
            });
          }
        }
        throw error;
      } else {
        // Something went wrong with Decipher's initialization logic; just run the handler as normal and
        // return the result.
        const result = await handler(req, res);
        return result;
      }
    } finally {
      // After the request is handled, restore the original console methods
      if (originalConsole) {
        console = originalConsole;
      }
      if (decipherConsole) {
        decipherConsole.clearMessages();
      }
    }
  };
}

export function decipherTrpcMiddleware(config: DecipherHandlerConfig) {
  return async (opts: any) => {
    let originalConsole;
    let decipherConsole;
    let handlerInvoked = false;
    let result;
    const filledConfig = {
      ...config,
      excludeRequestBody: !!config.excludeRequestBody,
      environment: config.environment || "production",
    };
    try {
      decipherConsole = new DecipherConsole();
      decipherConsole.instrumentConsole();
      handlerInvoked = true;

      // Proceed with the next middleware or the actual procedure
      result = await opts.next();

      if (!result.ok) {
        if (result.error instanceof Error) {
          collectAndSendTrpc(opts, {
            respBody: {},
            statusCode: 500,
            messages: decipherConsole.getMessages(),
            isUncaughtException: true,
            config: filledConfig,
            error: result.error,
          });
        } else {
          collectAndSendTrpc(opts, {
            respBody: result.error,
            statusCode: 500,
            messages: decipherConsole.getMessages(),
            isUncaughtException: true,
            config: filledConfig,
          });
        }
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
      if (originalConsole) {
        console = originalConsole;
      }
      if (decipherConsole) {
        decipherConsole.clearMessages();
      }
    }
  };
}