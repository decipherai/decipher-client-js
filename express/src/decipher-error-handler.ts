import { DecipherContext, DecipherHandlerConfig } from "./types";
import { collectAndSend } from "./utils/collect-and-send";
import { DecipherConsole } from "./utils/decipher-console";
import {
  NextFunction,
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";

export function DecipherRequestHandler(config: DecipherHandlerConfig) {
  return async function (
    req: ExpressRequest,
    res: ExpressResponse,
    next: NextFunction
  ): Promise<void> {
    try {
      const decipherConsole = new DecipherConsole();
      decipherConsole.instrumentConsole();
      const decipherContext: DecipherContext = {
        config,
        method: req.method!,
        url: req.url!,
        headers: req.headers,
        decipherConsole,
      };
      (req as any).decipherContext = decipherContext;

      const handleNon200Response = (body?: any) => {
        if (res.statusCode !== 200) {
          collectAndSend(
            req,
            body,
            res.statusCode,
            decipherContext.decipherConsole.getMessages(),
            false /* isUncaughtException */,
            decipherContext.config.codebase_id,
            decipherContext.config.customer_id,
            !!decipherContext.config.exclude_request_body
          );
        }
      };

      const originalSend = res.send.bind(res);
      res.send = (body?: any) => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          handleNon200Response(body);
        }
        return originalSend(body);
      };
    } catch (error) {
      console.error(error);
    }

    next();
  };
}

export const DecipherErrorHandler = (
  err: Error,
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) => {
  try {
    const decipherContext = (req as any).decipherContext;
    if (!decipherContext) {
      console.error("Decipher context missing; continuing.");
      return next();
    }
    collectAndSend(
      req,
      {} /* responseBody */,
      500 /* statusCode */,
      decipherContext.decipherConsole.getMessages(),
      true /* isUncaughtException */,
      decipherContext.config.codebase_id,
      decipherContext.config.customer_id,
      !!decipherContext.config.exclude_request_body,
      err
    );
    decipherContext.decipherConsole.clearMessages();
  } catch (error) {
    console.error(error);
  }
  next();
};
