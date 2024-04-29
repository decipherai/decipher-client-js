import { collectAndSend } from "../utils/collect-and-send";
import Decipher from "../utils/decipher"; // Importing the Decipher singleton from @decipher.ts
import {
  NextFunction,
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";
import { DecipherConsole } from "../utils/decipher-console"; // Importing the DecipherConsole for logging
import { DecipherContext } from "../types";

// Middleware to handle requests and initialize context
export function requestHandler() {
  return async function (
    req: ExpressRequest,
    res: ExpressResponse,
    next: NextFunction
  ): Promise<void> {
    try {
      // Check if Decipher has been initialized properly
      if (!Decipher.settings) {
        console.error("Decipher has not been initialized.");
        return next();
      }
      // Initialize context for the current request using Decipher.runWithContext
      Decipher.runWithContext(
        {
          method: req.method,
          url: req.url,
          headers: req.headers,
          decipherConsole: new DecipherConsole(), // Creating a new instance of DecipherConsole for this request
          capturedError: undefined,
          consoleMessages: [],
        },
        () => {
          const currentContext = Decipher.getCurrentContext(); // Retrieve the current context
          currentContext?.decipherConsole.instrumentConsole(); // Instrument the console for capturing logs
          currentContext?.decipherConsole.clearMessages(); // Clear any previous messages

          // Override res.send to handle non-200 responses and capture them
          const originalSend = res.send.bind(res);
          res.send = (body?: any) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
              handleNon200Response(req, body, res.statusCode, currentContext); // Handle non-200 responses
            }
            return originalSend(body);
          };

          res.on("finish", () => {
            const currentContext = Decipher.getCurrentContext();
            if (currentContext) {
              currentContext.decipherConsole.resetConsole(); // Reset the console to its original state
              currentContext.decipherConsole.clearMessages(); // Clear captured console messages
            }
          });

          next();
        }
      );
    } catch (error) {
      next(error);
    }
  };
}

// Middleware to handle errors
export const errorHandler = (
  err: Error,
  req: ExpressRequest,
  _res: ExpressResponse,
  next: NextFunction
) => {
  try {
    // Check if Decipher has been initialized properly
    if (!Decipher.settings) {
      console.error("Decipher has not been initialized.");
      return next();
    }

    const currentContext = Decipher.getCurrentContext(); // Retrieve the current context
    const errorToSend = currentContext?.capturedError || err; // Determine the error to send
    // Collect and send error information
    collectAndSend(
      req,
      {}, // responseBody
      500, // statusCode
      currentContext?.consoleMessages || [], // Collect console messages
      true, // isUncaughtException
      Decipher.settings.codebaseId ?? "",
      Decipher.settings.customerId ?? "",
      !!Decipher.settings.excludeRequestBody,
      errorToSend,
      currentContext?.endUser || undefined
    );
  } catch (error) {
  } finally {
    Decipher.getCurrentContext()?.decipherConsole.clearMessages(); // Clear messages after handling
  }
  next();
};

// Function to handle non-200 responses
function handleNon200Response(
  req: ExpressRequest,
  body: any,
  statusCode: number,
  context?: DecipherContext
) {

  // Check if Decipher has been initialized properly
  if (!Decipher.settings) {
    console.error("Decipher has not been initialized.");
    return;
  }

  const currentContext = Decipher.getCurrentContext(); // Retrieve the current context
  // Collect and send response information for non-200 responses
  collectAndSend(
    req,
    body,
    statusCode,
    currentContext?.consoleMessages || [], // Collect console messages
    false, // isUncaughtException
    Decipher.settings.codebaseId ?? "",
    Decipher.settings.customerId ?? "",
    !!Decipher.settings.excludeRequestBody,
    context?.capturedError,
    context?.endUser || undefined
  );
}
