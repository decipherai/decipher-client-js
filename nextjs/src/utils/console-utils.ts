import { stringify, StringifyOptions } from "./stringify";

type LogRecordOptions = {
  level?: LogLevel[];
  lengthThreshold?: number;
  stringifyOptions?: StringifyOptions;
  logger?: Logger | "console";
};

const defaultLogOptions: LogRecordOptions = {
  level: [
    "assert",
    "clear",
    "count",
    "countReset",
    "debug",
    "dir",
    "dirxml",
    "error",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "table",
    "time",
    "timeEnd",
    "timeLog",
    "trace",
    "warn",
  ],
  lengthThreshold: 100,
  logger: "console",
};

export type LogData = {
  level: LogLevel;
  trace: string[];
  payload: string[]; // Ensure payload is an array of strings to match the processLog update
};

type logCallback = (p: LogData) => void;

/* fork from interface Console */
// all kinds of console functions
export type Logger = {
  assert?: typeof console.assert;
  clear?: typeof console.clear;
  count?: typeof console.count;
  countReset?: typeof console.countReset;
  debug?: typeof console.debug;
  dir?: typeof console.dir;
  dirxml?: typeof console.dirxml;
  error?: typeof console.error;
  group?: typeof console.group;
  groupCollapsed?: typeof console.groupCollapsed;
  groupEnd?: () => void;
  info?: typeof console.info;
  log?: typeof console.log;
  table?: typeof console.table;
  time?: typeof console.time;
  timeEnd?: typeof console.timeEnd;
  timeLog?: typeof console.timeLog;
  trace?: typeof console.trace;
  warn?: typeof console.warn;
};

export type LogLevel = keyof Logger;

// copy from https://github.com/getsentry/sentry-javascript/blob/b2109071975af8bf0316d3b5b38f519bdaf5dc15/packages/utils/src/object.ts
export function patch(
  source: { [key: string]: any },
  name: string,
  replacement: (...args: unknown[]) => unknown
): () => void {
  try {
    if (!(name in source)) {
      return () => {
        //
      };
    }

    const original = source[name] as () => unknown;
    const wrapped = replacement(original);

    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === "function") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __rrweb_original__: {
          enumerable: false,
          value: original,
        },
      });
    }

    source[name] = wrapped;

    return () => {
      source[name] = original;
    };
  } catch {
    return () => {
      //
    };
    // This can throw if multiple fill happens on a global object like XMLHttpRequest
    // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
  }
}

// Forked from https://github.com/rrweb-io/rrweb/blob/e96f668c86bd0ab5dc190bb2957a170271bb2ebc/packages/rrweb/src/plugins/console/record/index.ts#L91
// We make some changes to what's actually captured from the logs, e.g. currently we don't parse stack traces.
export function initLogObserver(
  cb: logCallback,
  options: LogRecordOptions
): () => void {
  const logOptions = (
    options ? Object.assign({}, defaultLogOptions, options) : defaultLogOptions
  ) as {
    level: LogLevel[];
    lengthThreshold: number;
    stringifyOptions?: StringifyOptions;
    logger: Logger | "console";
  };
  const loggerType = logOptions.logger;
  if (!loggerType) {
    return () => {
      //
    };
  }
  let logger: Logger;
  logger = console;
  let logCount = 0;
  let inStack = false;
  const cancelHandlers: (() => void)[] = [];
  // add listener to thrown errors
  for (const levelType of logOptions.level) {
    cancelHandlers.push(replace(logger, levelType));
  }
  return () => {
    cancelHandlers.forEach((h) => h());
  };

  /**
   * replace the original console function and record logs
   * @param logger - the logger object such as Console
   * @param level - the name of log function to be replaced
   */
  function replace(_logger: Logger, level: LogLevel) {
    if (!_logger[level]) {
      return () => {
        //
      };
    }
    // replace the logger.{level}. return a restore function
    return patch(
      _logger,
      level,
      (original) => {
        return (...args: Array<unknown>) => {
          // @ts-expect-error
          original.apply(console, args);
          if (inStack) {
            // If we are already in a stack this means something from the following code is calling a console method
            // likely a proxy method called from stringify. We don't want to log this as it will cause an infinite loop
            return;
          }
          inStack = true;
          try {
            // Commented code below is from the rrweb fork; we currently don't parse stacks.
            // const trace = ErrorStackParser.parse(new Error())
            //   .map((stackFrame: StackFrame) => stackFrame.toString())
            //   .splice(1); // splice(1) to omit the hijacked log function
            const payload = args.map((s) =>
              stringify(s, logOptions.stringifyOptions)
            );
            logCount++;
            if (logCount < logOptions.lengthThreshold) {
              cb({
                level,
                trace: [],
                payload,
              });
            } else if (logCount === logOptions.lengthThreshold) {
              // notify the user
              cb({
                level: "warn",
                trace: [],
                payload: [
                  stringify("[Decipher] The number of log records reached the threshold."),
                ],
              });
            }
          } catch (error) {
            // @ts-expect-error
            original("[Decipher] logger error:", error, ...args);
          } finally {
            inStack = false;
          }
        };
      },
    );
  }
}
