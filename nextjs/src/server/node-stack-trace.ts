// Forked and modified from https://github.com/getsentry/sentry-javascript/blob/531779300c186f89afff0c5bad9f802b2140a325/packages/utils/src/node-stack-trace.ts

import type { StackLineParser, StackLineParserFn, StackParser } from "@decipher-sdk/types";
import { createGetModuleFromFilename } from "./module";
import { createStackParser } from "@decipher-sdk/utils";

export const UNKNOWN_FUNCTION = "?";

export type GetModuleFn = (filename: string | undefined) => string | undefined;

/**
 * Does this filename look like it's part of the app code?
 */
export function filenameIsInApp(
  filename: string,
  isNative: boolean = false
): boolean {
  const isInternal =
    isNative ||
    (filename &&
      // It's not internal if it's an absolute linux path
      !filename.startsWith("/") &&
      // It's not internal if it's an absolute windows path
      !filename.match(/^[A-Z]:/) &&
      // It's not internal if the path is starting with a dot
      !filename.startsWith(".") &&
      // It's not internal if the frame has a protocol. In node, this is usually the case if the file got pre-processed with a bundler like webpack
      !filename.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)); // Schema from: https://stackoverflow.com/a/3641782

  // in_app is all that's not an internal Node function or a module within node_modules
  // note that isNative appears to return true even for node core libraries
  // see https://github.com/getsentry/raven-node/issues/176

  return (
    !isInternal && filename !== undefined && !filename.includes("node_modules/")
  );
}

/** Node Stack line parser */
export function node(getModule?: GetModuleFn): StackLineParserFn {
  const FILENAME_MATCH = /^\s*[-]{4,}$/;
  const FULL_MATCH =
    /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;

  // eslint-disable-next-line complexity
  return (line: string) => {
    const lineMatch = line.match(FULL_MATCH);

    if (lineMatch) {
      let object: string | undefined;
      let method: string | undefined;
      let functionName: string | undefined;
      let typeName: string | undefined;
      let methodName: string | undefined;

      if (lineMatch[1]) {
        functionName = lineMatch[1];

        let methodStart = functionName.lastIndexOf(".");
        if (functionName[methodStart - 1] === ".") {
          methodStart--;
        }

        if (methodStart > 0) {
          object = functionName.slice(0, methodStart);
          method = functionName.slice(methodStart + 1);
          const objectEnd = object.indexOf(".Module");
          if (objectEnd > 0) {
            functionName = functionName.slice(objectEnd + 1);
            object = object.slice(0, objectEnd);
          }
        }
        typeName = undefined;
      }

      if (method) {
        typeName = object;
        methodName = method;
      }

      if (method === "<anonymous>") {
        methodName = undefined;
        functionName = undefined;
      }

      if (functionName === undefined) {
        methodName = methodName || UNKNOWN_FUNCTION;
        functionName = typeName ? `${typeName}.${methodName}` : methodName;
      }

      let filename =
        lineMatch[2] && lineMatch[2].startsWith("file://")
          ? lineMatch[2].slice(7)
          : lineMatch[2];
      const isNative = lineMatch[5] === "native";

      // If it's a Windows path, trim the leading slash so that `/C:/foo` becomes `C:/foo`
      if (filename && filename.match(/\/[A-Z]:/)) {
        filename = filename.slice(1);
      }

      if (!filename && lineMatch[5] && !isNative) {
        filename = lineMatch[5];
      }

      return {
        filename,
        module: getModule ? getModule(filename) : undefined,
        function: functionName,
        lineno: parseInt(lineMatch[3], 10) || undefined,
        colno: parseInt(lineMatch[4], 10) || undefined,
        in_app: filenameIsInApp(filename, isNative),
      };
    }

    if (line.match(FILENAME_MATCH)) {
      return {
        filename: line,
      };
    }

    return undefined;
  };
}

/**
 * Node.js stack line parser
 */
export function nodeStackLineParser(getModule?: GetModuleFn): StackLineParser {
  return [90, node(getModule)];
}
export const nodeStackParser: StackParser = createStackParser(
  nodeStackLineParser(createGetModuleFromFilename())
);
