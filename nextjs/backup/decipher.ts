import { DecipherConsole } from "./utils/decipher-console";
const { AsyncLocalStorage } = require('node:async_hooks');
import type { DecipherHandlerConfig } from "./utils/handler-config";
import { withDecipher, wrapApiHandlerWithDecipher } from "./decipher-error-handler";
import type { DecipherContext } from "./types";
import type { AppRouterRequestHandler, AppRouterNextRequestHandler, PageRouterHandler } from "./types";

const asyncLocalStorage = new AsyncLocalStorage();

class Decipher {
  private static instance: Decipher;
  private _isProcessingLog: boolean = false;

  public settings: DecipherHandlerConfig = {
    codebaseId: "",
    customerId: "",
  };

  private constructor() {}

  public static getInstance(): Decipher {
    if (!Decipher.instance) {
      Decipher.instance = new Decipher();
    }
    return Decipher.instance;
  }

  public init(config: DecipherHandlerConfig): void {
    console.log("[Decipher] Initializing");
    this.settings = {
      ...this.settings,
      ...config,
    };
  }

  // Add logging to captureError to see when errors are captured
  public captureError(error: Error): void {
    const store = asyncLocalStorage.getStore();
    if (store) {
      store.capturedError = error;
    }
  }

  public setProcessingLogState(state: boolean): void {
    this._isProcessingLog = state;
  }

  public getProcessingLogState(): boolean {
    return this._isProcessingLog;
  }

  public updateContext(update: Partial<DecipherContext>): void {
    const store = asyncLocalStorage.getStore();
    if (store) {
      Object.assign(store, update);
    }
  }

  public runWithContext(context: DecipherContext, fn: () => void): void {
    console.log("[Decipher] Running with context");
    asyncLocalStorage.run(context, fn);
  }

  public getCurrentContext(): DecipherContext | undefined {
    console.log("[Decipher] Getting current context");
    const context = asyncLocalStorage.getStore();
    if (context) {
      return context as DecipherContext;
    } else {
      return undefined;
    }
  }

  public withDecipher(handler: AppRouterRequestHandler | AppRouterNextRequestHandler): typeof handler {
    console.log("[Decipher] Wrapping handler");
    return withDecipher(handler, this.settings);
  }

  // Method for page routers
  public wrapApiHandler<T>(handler: PageRouterHandler<T>): typeof handler {
    return wrapApiHandlerWithDecipher(handler, this.settings);
  }
}

export default Decipher.getInstance();