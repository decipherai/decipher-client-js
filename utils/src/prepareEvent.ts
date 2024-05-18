// Forked from https://github.com/getsentry/sentry-javascript/blob/531779300c186f89afff0c5bad9f802b2140a325/packages/core/src/utils/prepareEvent.ts.
// We use a small subset of that file for now.

import { Exception, StackParser, StackFrame } from "@decipher-sdk/types";
import { GLOBAL_OBJ } from "./worldwide";

const debugIdStackParserCache = new WeakMap<
  StackParser,
  Map<string, StackFrame[]>
>();

export function applyDebugIds(
  exception: Exception,
  stackParser: StackParser
): void {
  const debugIdMap = GLOBAL_OBJ._decipherDebugIds;

  if (!debugIdMap || !exception.stacktrace || !exception.stacktrace.frames) {
    return;
  }

  let debugIdStackFramesCache: Map<string, StackFrame[]>;
  const cachedDebugIdStackFrameCache = debugIdStackParserCache.get(stackParser);
  if (cachedDebugIdStackFrameCache) {
    debugIdStackFramesCache = cachedDebugIdStackFrameCache;
  } else {
    debugIdStackFramesCache = new Map<string, StackFrame[]>();
    debugIdStackParserCache.set(stackParser, debugIdStackFramesCache);
  }

  // Build a map of filename -> debug_id
  const filenameDebugIdMap = Object.keys(debugIdMap).reduce<
    Record<string, string>
  >((acc, debugIdStackTrace) => {
    let parsedStack: StackFrame[];
    const cachedParsedStack = debugIdStackFramesCache.get(debugIdStackTrace);
    if (cachedParsedStack) {
      parsedStack = cachedParsedStack;
    } else {
      parsedStack = stackParser(debugIdStackTrace);
      debugIdStackFramesCache.set(debugIdStackTrace, parsedStack);
    }

    for (let i = parsedStack.length - 1; i >= 0; i--) {
      const stackFrame = parsedStack[i];
      if (stackFrame.filename) {
        acc[stackFrame.filename] = debugIdMap[debugIdStackTrace];
        break;
      }
    }
    return acc;
  }, {});

  try {
    exception.stacktrace.frames.forEach((frame: any) => {
      if (frame.filename) {
        frame.debug_id = filenameDebugIdMap[frame.filename];
      }
    });
  } catch (e) {
    // To save bundle size we're just try catching here instead of checking for the existence of all the different objects.
  }
}
