// This code is from https://github.com/getsentry/sentry-javascript/blob/531779300c186f89afff0c5bad9f802b2140a325/packages/utils/src/eventbuilder.ts
// We use a small subset of that file for now.
import { Exception, StackParser, StackFrame } from "@decipher-sdk/types";

/**
 * Extracts stack frames from the error.stack string
 */
export function parseStackFrames(
  stackParser: StackParser,
  error: Error
): StackFrame[] {
  return stackParser(error.stack || "", 1);
}

/**
 * Extracts stack frames from the error and builds a Sentry Exception
 */
export function exceptionFromError(
  stackParser: StackParser,
  error: Error
): Exception {
  const exception: Exception = {
    type: error.name || error.constructor.name,
    value: error.message,
  };

  const frames = parseStackFrames(stackParser, error);
  if (frames.length) {
    exception.stacktrace = { frames };
  }

  return exception;
}

