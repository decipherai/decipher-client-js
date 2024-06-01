// Inspired by https://github.com/getsentry/sentry-javascript/blob/a87af789d95c943f7b70d8906e07739a257a0f8d/packages/core/src/trpc.ts.
import { DecipherHandlerConfig } from "./handler-config";
import { DecipherTrpcMiddlewareArguments } from "./types";
import { collectAndSendTrpc } from "./collect-and-send";

export function decipherTrpcMiddleware(config: DecipherHandlerConfig) {
  return function <T>(opts: DecipherTrpcMiddlewareArguments<T>): T {
    const { path, next } = opts;
    const filledConfig = {
      ...config,
      excludeRequestBody: !!config.excludeRequestBody,
      environment: config.environment || "production",
    };

    const baseCollectAndSendData = {
      respBody: {},
      statusCode: 500,
      messages: [], // currentContext?.consoleMessages ||  []
      isUncaughtException: true,
      config: filledConfig,
    };
    let newPath = `${path}`;
    function captureIfError(nextResult: unknown): void {
      // TODO: Set span status based on what TRPCError was encountered
      if (
        typeof nextResult === "object" &&
        nextResult !== null &&
        "ok" in nextResult &&
        !nextResult.ok &&
        "error" in nextResult
      ) {
        if (nextResult.error instanceof Error) {
          collectAndSendTrpc(
            opts,
            {
              ...baseCollectAndSendData,
              error: nextResult.error,
            },
            newPath
          );
        } else {
          collectAndSendTrpc(opts, baseCollectAndSendData, newPath);
        }
      }
    }

    let maybePromiseResult;
    try {
      maybePromiseResult = next();
    } catch (e) {
      // captureException(e, trpcCaptureContext);
      if (e instanceof Error) {
        collectAndSendTrpc(
          opts,
          { ...baseCollectAndSendData, error: e },
          newPath
        );
      } else {
        collectAndSendTrpc(opts, baseCollectAndSendData, newPath);
      }
      throw e;
    }

    if (isThenable(maybePromiseResult)) {
      return maybePromiseResult.then(
        (nextResult) => {
          captureIfError(nextResult);
          return nextResult;
        },
        (e) => {
          collectAndSendTrpc(
            opts,
            { ...baseCollectAndSendData, error: e },
            newPath
          );
          throw e;
        }
      ) as T;
    } else {
      captureIfError(maybePromiseResult);
      return maybePromiseResult;
    }
  };
}

/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat: any): wat is PromiseLike<any> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return Boolean(wat && wat.then && typeof wat.then === "function");
}
