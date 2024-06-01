// Utilizing AsyncLocalStorage from Node.js to handle asynchronous context management
const { AsyncLocalStorage } = require("node:async_hooks");
import type { DecipherHandlerConfig } from "./handler-config";
import { wrapAppRouter, wrapPageRouter } from "./decipher-error-handler";
// import { handleCaptureError } from "./decipher-error-handler";
import type { NextApiRequest } from "next";
import { User } from "./collect-and-send";
import { LogData, maybeInitLogObserver } from "./console-utils";
// import type { AppRouterRequestHandler, AppRouterNextRequestHandler, PageRouterHandler } from "./types";
// Creating an instance of AsyncLocalStorage to store context specific to each request
const asyncLocalStorage = new AsyncLocalStorage();
// Defining the structure of the context stored in AsyncLocalStorage

export interface DecipherContext {
  requestId: string;
  consoleMessages: any[];
  config: DecipherHandlerConfig;
  opts?: any;
  request?: NextApiRequest | Request;
  endUser?: User | null;
  capturedError?: Error;
}

// Singleton class to manage Decipher configurations and context
class DecipherSingleton {
  private static instance: DecipherSingleton;
  private _isProcessingLog: boolean = false;

  public settings: DecipherHandlerConfig = {
    codebaseId: "",
    customerId: "",
  };

  private constructor() {}

  // Ensures a single instance of the Decipher class
  public static getInstance(): DecipherSingleton {
    if (!DecipherSingleton.instance) {
      DecipherSingleton.instance = new DecipherSingleton();
    }
    return DecipherSingleton.instance;
  }

  public init(config: DecipherHandlerConfig): void {
    this.settings = {
      ...this.settings,
      ...config,
    };
  }

  public captureError(error: Error): void {
    let context = this.getCurrentContext();
    if (context) {
      context.capturedError = error;
    }
  }

  // Function to access and change processingLog state
  public setProcessingLogState(state: boolean): void {
    this._isProcessingLog = state;
  }

  public getProcessingLogState(): boolean {
    return this._isProcessingLog;
  }

  // Add logging to updateContext to see updates being made
  public updateContext(
    update: Partial<DecipherContext>,
    context?: DecipherContext
  ): void {
    const store = context || asyncLocalStorage.getStore(); // Use provided context if available
    if (store) {
      Object.assign(store, update);
    }
  }

  public setUser(user: User): void {
    let context = this.getCurrentContext();
    if (!context) {
      return;
    }
    if (!user) {
      context.endUser = null;
    } else if (user.email || user.id || user.id === 0 || user.username) {
      context.endUser = { ...user };
    } else {
      context.endUser = {
        username:
          "DECIPHER_EMPTY_USER_PROVIDED - check your call to Decipher.setUser.",
      };
    }
  }

  public async runWithContext<T>(
    context: DecipherContext,
    fn: () => Promise<T>
  ): Promise<T> {
    return await asyncLocalStorage.run(context, async () => {
      const restoreConsole = maybeInitLogObserver(processLog, {});
      try {
        return await fn();
      } finally {
        context.consoleMessages = [];
        restoreConsole();
      }
    });
  }

  // Add logging to getCurrentContext to see when context is retrieved
  public getCurrentContext(): DecipherContext | undefined {
    const context = asyncLocalStorage.getStore();
    return context;
  }

  public withDecipher(handler: any): typeof handler {
    let response = wrapAppRouter(handler, this.settings);
    return response;
  }

  public withDecipherPage(handler: any): typeof handler {
    let response = wrapPageRouter(handler, this.settings);
    return response;
  }
}

function processLog(logData: LogData) {
  try {
    const timestamp = new Date().toISOString();
    const context = DecipherSingleton.getInstance().getCurrentContext();
    if (context) {
      const message = logData.payload.join(" ");
      const level = logData.level;
      DecipherSingleton.getInstance().updateContext(
        {
          consoleMessages: [
            ...context.consoleMessages,
            { message, level, timestamp },
          ],
        },
        context
      );
    }
  } finally {
  }
}

const Decipher = DecipherSingleton.getInstance();
export { Decipher };
