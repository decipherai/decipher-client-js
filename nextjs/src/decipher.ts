import { DecipherConsole } from "./utils/decipher-console";
// Utilizing AsyncLocalStorage from Node.js to handle asynchronous context management
const { AsyncLocalStorage } = require('node:async_hooks');
import type { DecipherHandlerConfig } from './utils/handler-config';
import { withDecipher, wrapApiHandlerWithDecipher } from './decipher-error-handler';
import { handleCaptureError } from './decipher-error-handler';

import type { NextApiRequest } from "next";

// Creating an instance of AsyncLocalStorage to store context specific to each request
const asyncLocalStorage = new AsyncLocalStorage();
// Defining the structure of the context stored in AsyncLocalStorage

interface DecipherContext {
  opts?: any;
  request?: NextApiRequest | Request,
  decipherConsole: DecipherConsole,
  capturedError?: Error;
  consoleMessages: any[];
  config: DecipherHandlerConfig;
}

// Singleton class to manage Decipher configurations and context
class Decipher {
  private static instance: Decipher;
  private _isProcessingLog: boolean = false;
  
  public settings: DecipherHandlerConfig = {
    codebaseId: '',
    customerId: ''
  };

  private constructor() {}

  // Ensures a single instance of the Decipher class
  public static getInstance(): Decipher {
    if (!Decipher.instance) {
      Decipher.instance = new Decipher();
    }
    console.log("Decipher instance accessed:", Decipher.instance);
    return Decipher.instance;
  }

// Add logging to init method to confirm settings are being initialized
public init(config: DecipherHandlerConfig): void {
  this.settings = {
    ...this.settings,
    ...config
  };
}

// Add logging to captureError to see when errors are captured
public captureError(error: Error): void {
  let context = this.getCurrentContext();
  if (context) {
    context.capturedError = error;
  }
  
  try {
    handleCaptureError();
  } catch (e) {
    
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
public updateContext(update: Partial<DecipherContext>): void {
  const store = asyncLocalStorage.getStore();
  if (store) {
    Object.assign(store, update);
  } else {
    console.log("[Decipher] No active async local storage to update");
  }
}

// Add logging to runWithContext to see when a new context is being run
public async runWithContext(context: DecipherContext, fn: () => Promise<Response>): Promise<Response> {
  const result = await asyncLocalStorage.run(context, fn);
  return result;  // Returning the Response object obtained from fn
}

// Add logging to getCurrentContext to see when context is retrieved
public getCurrentContext(): DecipherContext | undefined {
  const context = asyncLocalStorage.getStore();
  return context;
}

public withDecipher(handler: any): typeof handler {
  let response = withDecipher(handler, this.settings);
  return response;
}

public wrapApiHandlerWithDecipher = wrapApiHandlerWithDecipher;

}

export { asyncLocalStorage };

// Exports a singleton instance of the Decipher class
export default Decipher.getInstance();

