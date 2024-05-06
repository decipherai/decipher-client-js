import * as rrweb from "rrweb";
import { v4 as uuidv4 } from "uuid";
import {
  type eventWithTime,
  type listenerHandler,
  RecordPlugin,
} from "@rrweb/types";
import { DecipherFrontendConfig } from "../types/decipher-types";

const BASE_URL = "https://www.prod.getdecipher.com";
const RECORDING_BUFFER_TIMEOUT = 7000;

const win: (Window & typeof globalThis) | undefined =
  typeof window !== "undefined" ? window : undefined;

interface EventBuffer {
  data: eventWithTime[];
}

interface ErrorEvent {
  message?: string | Event;
  source?: string;
  lineno?: number;
  colno?: number;
  error?: Error;
}

type ErrorLike = Error | string | Event | unknown;

const reactMinifiedRegexp = /Minified React error #\d+;/i;

function promiseRejectionToErrorProperties(
  promiseRejectionEvent: PromiseRejectionEvent
): ErrorEvent {
  let error: ErrorLike = promiseRejectionEvent;
  if ("reason" in promiseRejectionEvent) {
    error = promiseRejectionEvent.reason as ErrorLike;
  } else if (
    "detail" in promiseRejectionEvent &&
    "reason" in (promiseRejectionEvent as any).detail
  ) {
    error = ((promiseRejectionEvent as any).detail as any).reason as ErrorLike;
  }

  let exceptionMessage = "";
  if (typeof error === "string") {
    exceptionMessage = `Non-Error promise rejection captured with value: ${error}`;
  } else if (error instanceof Error) {
    exceptionMessage = error.message;
  } else {
    exceptionMessage = "UnhandledRejection";
  }

  // Ensure that the returned object conforms to the ErrorEvent interface
  const res: ErrorEvent = { message: exceptionMessage };
  if (error instanceof Error) {
    res.error = error;
  }
  return res;
}

class DecipherRecording {
  private buffer: EventBuffer = { data: [] };
  private flushTimer: ReturnType<typeof setTimeout> | null = null;
  private sessionId: string = "";
  private customerId: DecipherFrontendConfig["customerId"];
  private codebaseId: DecipherFrontendConfig["codebaseId"];
  private plugins: RecordPlugin[];

  constructor({ customerId, codebaseId }: DecipherFrontendConfig) {
    this.customerId = customerId;
    this.codebaseId = codebaseId;
    this.plugins = [
      rrweb.getRecordConsolePlugin({
        level: ["info", "warn", "error"],
        lengthThreshold: 10000,
        stringifyOptions: {
          stringLengthLimit: 1000,
          numOfKeysLimit: 100,
          depthOfLimit: 1,
        },
        logger: win?.console || window.console,
      }),
    ];
  }

  public startRecording(): listenerHandler | undefined {
    this.sessionId = uuidv4();
    this.buffer = { data: [] };
    const stopRecording =
      rrweb.record({
        emit: (event) => {
          this.handleEventBuffering(event);
        },
        plugins: this.plugins,
      }) || undefined;

    this.setupErrorHandlers();

    return stopRecording;
  }

  private setupErrorHandlers() {
    if (!win) {
      return;
    }
    const originalOnError = win.onerror;
    win.onerror = (message, source, lineno, colno, error) => {
      this.captureException({ message, source, lineno, colno, error });
      if (originalOnError) {
        return originalOnError(message, source, lineno, colno, error);
      }
      return false;
    };

    // TODO: Start handling onunhandled rejections
    const originalOnUnhandledRejection = win.onunhandledrejection;
    win.onunhandledrejection = (event) => {
      this.captureException({
        ...promiseRejectionToErrorProperties(event)
      });
      if (originalOnUnhandledRejection) {
        return originalOnUnhandledRejection.call(win, event);
      }
      return true;
    };
  }

  public captureException({
    message,
    source,
    lineno,
    colno,
    error,
  }: ErrorEvent) {
    rrweb.record.addCustomEvent("uncaught-error", {
      message,
      stackTraceString: JSON.stringify(error?.stack || ""),
    });
  }

  private flushBuffer() {
    if (this.flushTimer) {
      clearTimeout(this.flushTimer);
      this.flushTimer = null;
    }
    if (this.buffer.data.length > 0) {
      fetch(`${BASE_URL}/api/store_session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events: this.buffer.data,
          sessionId: this.sessionId,
          customerId: this.customerId,
          codebaseId: this.codebaseId,
        }),
      });

      this.buffer.data = [];
    }
  }

  private handleEventBuffering(event: eventWithTime) {
    this.buffer.data.push(event);

    if (!this.flushTimer) {
      this.flushTimer = setTimeout(() => {
        this.flushBuffer();
      }, RECORDING_BUFFER_TIMEOUT);
    }
  }
}

export { DecipherRecording };
