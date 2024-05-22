"use client";
import * as rrweb from "rrweb";
import { uuid4 } from "../utils/uuid";
import {
  type eventWithTime,
  type listenerHandler,
  RecordPlugin,
} from "@rrweb/types";
import { DecipherFrontendConfig, User } from "../types/decipher-types";
import { Exception } from "@decipher-sdk/types";
import { exceptionFromError, applyDebugIds } from "@decipher-sdk/utils";
import { defaultStackParser } from "../utils/stack_trace/stack-parsers";

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

function createFilledExceptionObject(error: Error): Exception {
  const exception: Exception = exceptionFromError(defaultStackParser, error);
  if (exception.stacktrace?.frames?.length) {
    applyDebugIds(exception, defaultStackParser);
  }
  return exception;
}

class DecipherRecording {
  private buffer: EventBuffer = { data: [] };
  private flushTimer: ReturnType<typeof setTimeout> | null = null;
  private sessionId: string = "";
  private customerId: DecipherFrontendConfig["customerId"];
  private codebaseId: DecipherFrontendConfig["codebaseId"];
  private exceptionAnnotator:
    | DecipherFrontendConfig["exceptionAnnotator"]
    | undefined;
  private user: User | undefined;
  private plugins: RecordPlugin[];
  private stopRecording: listenerHandler | undefined;
  private isStopped: boolean = false;

  constructor({
    customerId,
    codebaseId,
    user,
    exceptionAnnotator,
  }: DecipherFrontendConfig) {
    this.customerId = customerId;
    this.codebaseId = codebaseId;
    if (exceptionAnnotator) {
      this.exceptionAnnotator = exceptionAnnotator;
    }
    this.user = undefined;
    if (user && (user.email || user.id !== 0 || user.username)) {
      this.user = user;
    }
    this.plugins = [
      rrweb.getRecordConsolePlugin({
        level: ["log", "info", "warn", "error"],
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
    this.sessionId = uuid4();
    this.buffer = { data: [] };
    const stopRecording =
      rrweb.record({
        emit: (event) => {
          this.handleEventBuffering(event);
        },
        plugins: this.plugins,
        maskInputOptions: {
          email: true,
          password: true,
        },
      }) || undefined;
    this.stopRecording = stopRecording;

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

    const originalOnUnhandledRejection = win.onunhandledrejection;
    win.onunhandledrejection = (event) => {
      this.captureException({
        ...promiseRejectionToErrorProperties(event),
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
    var exception = error ? createFilledExceptionObject(error) : {};
    // Currently only passed by the NextJS SDK to annotate errors with detailed stack trace info.
    if (this.exceptionAnnotator && error) {
      this.exceptionAnnotator(exception, error).then((result) => {
        if (result) {
          exception = result;
        }
        const customEvent = {
          message,
          exception,
        };
        rrweb.record.addCustomEvent("uncaught-error", customEvent);
      });
    } else {
      // Normal production path.
      const customEvent = {
        message,
        exception,
      };
      rrweb.record.addCustomEvent("uncaught-error", customEvent);
    }
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
          user: this.user,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            this.endRecording();
          }
        })
        .catch(() => {
          this.endRecording();
        });

      this.buffer.data = [];
    }
  }

  public endRecording() {
    this.isStopped = true;
    if (this.flushTimer) {
      clearTimeout(this.flushTimer);
      this.flushTimer = null;
    }
    this.stopRecording?.();
  }

  private handleEventBuffering(event: eventWithTime) {
    if (this.isStopped) {
      return;
    }
    this.buffer.data.push(event);

    if (!this.flushTimer) {
      this.flushTimer = setTimeout(() => {
        this.flushBuffer();
      }, RECORDING_BUFFER_TIMEOUT);
    }
  }
}

export { DecipherRecording };
