// Forked and modified from https://github.com/getsentry/sentry-javascript/blob/531779300c186f89afff0c5bad9f802b2140a325/packages/nextjs/src/common/devErrorSymbolicationEventProcessor.ts.
// Updates stack frames with code for dev errors. Prod errors are handled via sourcemaps when building, but we don't do that for dev.

import { GLOBAL_OBJ } from "@decipher-sdk/utils";
import type { Exception } from "@decipher-sdk/types";
import type { StackFrame } from "stacktrace-parser";
import * as stackTraceParser from "stacktrace-parser";

type OriginalStackFrameResponse = {
  originalStackFrame: StackFrame;
  originalCodeFrame: string | null;
  sourcePackage?: string;
};

const globalWithInjectedValues = GLOBAL_OBJ as typeof GLOBAL_OBJ & {
  __decipherBasePath?: string;
};
let workingPort: number | undefined = undefined;

async function resolveStackFrame(
  frame: StackFrame,
  error: Error
): Promise<{
  originalCodeFrame: string | null;
  originalStackFrame: StackFrame | null;
} | null> {
  try {
    if (
      !(
        frame.file?.startsWith("webpack-internal:") ||
        frame.file?.startsWith("file:")
      )
    ) {
      return null;
    }

    const params = new URLSearchParams();
    params.append("isServer", String(false)); // doesn't matter since it is overwritten by isAppDirectory
    params.append("isEdgeServer", String(false)); // doesn't matter since it is overwritten by isAppDirectory
    params.append("isAppDirectory", String(true)); // will force server to do more thorough checking
    params.append("errorMessage", error.toString());
    Object.keys(frame).forEach((key) => {
      params.append(key, (frame[key as keyof typeof frame] ?? "").toString());
    });

    let basePath = globalWithInjectedValues.__decipherBasePath ?? "";

    // Prefix the basepath with a slash if it doesn't have one
    if (basePath !== "" && !basePath.match(/^\//)) {
      basePath = `/${basePath}`;
    }

    const portsToTry = workingPort
      ? [workingPort]
      : [
          Number(process.env.PORT) || 3000,
          3001,
          3002,
          3003,
          3004,
          3005,
          5000,
          5001,
          5002,
          5003,
          8000,
          8001,
          8002,
          8003,
        ];

    for (const port of portsToTry) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 1500);
        const res = await fetch(
          `${
            typeof window === "undefined" ? `http://localhost:${port}` : ""
          }${basePath}/__nextjs_original-stack-frame?${params.toString()}`,
          {
            signal: controller.signal,
          }
        ).finally(() => {
          clearTimeout(timer);
        });

        if (res.ok && res.status !== 204) {
          workingPort = port;
          const body: OriginalStackFrameResponse = await res.json();
          return {
            originalCodeFrame: body.originalCodeFrame,
            originalStackFrame: body.originalStackFrame,
          };
        }
      } catch (err) {
        // Continue to the next port
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

function parseOriginalCodeFrame(codeFrame: string): {
  contextLine: string | undefined;
  preContextLines: string[];
  postContextLines: string[];
} {
  const preProcessedLines = codeFrame
    // Remove ASCII control characters that are used for syntax highlighting
    .replace(
      // eslint-disable-next-line no-control-regex
      /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, // https://stackoverflow.com/a/29497680
      ""
    )
    .split("\n")
    // Remove line that is supposed to indicate where the error happened
    .filter((line) => !line.match(/^\s*\|/))
    // Find the error line
    .map((line) => ({
      line,
      isErrorLine: !!line.match(/^>/),
    }))
    // Remove the leading part that is just for prettier output
    .map((lineObj) => ({
      ...lineObj,
      line: lineObj.line.replace(/^.*\|/, ""),
    }));

  const preContextLines = [];
  let contextLine: string | undefined = undefined;
  const postContextLines = [];

  let reachedContextLine = false;

  for (const preProcessedLine of preProcessedLines) {
    if (preProcessedLine.isErrorLine) {
      contextLine = preProcessedLine.line;
      reachedContextLine = true;
    } else if (reachedContextLine) {
      postContextLines.push(preProcessedLine.line);
    } else {
      preContextLines.push(preProcessedLine.line);
    }
  }

  return {
    contextLine,
    preContextLines,
    postContextLines,
  };
}

/**
 * Event processor that will symbolicate errors by using the webpack/nextjs dev server that is used to show stack traces
 * in the dev overlay.
 */
export async function devErrorSymbolicationEventProcessor(
  exception: Exception,
  originalError: Error
): Promise<Exception | null> {
  // Due to changes across Next.js versions, there are a million things that can go wrong here so we just try-catch the
  // entire event processor.Symbolicated stack traces are just a nice to have.
  try {
    if (originalError instanceof Error && originalError.stack) {
      const frames = stackTraceParser.parse(originalError.stack);

      const resolvedFrames = await Promise.all(
        frames.map((frame) => resolveStackFrame(frame, originalError as Error))
      );

      if (exception.stacktrace?.frames) {
        exception.stacktrace.frames = exception.stacktrace.frames.map(
          (frame, i, frames) => {
            const resolvedFrame = resolvedFrames[frames.length - 1 - i];
            if (
              !resolvedFrame ||
              !resolvedFrame.originalStackFrame ||
              !resolvedFrame.originalCodeFrame
            ) {
              return {
                ...frame,
                platform: frame.filename?.startsWith("node:internal")
                  ? "nodejs"
                  : undefined, // simple hack that will prevent a source mapping error from showing up
                in_app: false,
              };
            }

            const { contextLine, preContextLines, postContextLines } =
              parseOriginalCodeFrame(resolvedFrame.originalCodeFrame);

            return {
              ...frame,
              pre_context: preContextLines,
              context_line: contextLine,
              post_context: postContextLines,
              function: resolvedFrame.originalStackFrame.methodName,
              filename: resolvedFrame.originalStackFrame.file || undefined,
              lineno: resolvedFrame.originalStackFrame.lineNumber || undefined,
              colno: resolvedFrame.originalStackFrame.column || undefined,
            };
          }
        );
      }
    }
  } catch (e) {
    return exception;
  }
  return exception;
}
