import Decipher from '../utils/decipher'; // Importing the Decipher singleton from @decipher.ts
import { ConsoleMethods } from "../types";

export class DecipherConsole {
  private originalConsoleMethods: ConsoleMethods;
  private isInstrumented: boolean = false;
  private consoleMessages: any[] = [];

  constructor() {
    this.originalConsoleMethods = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info,
      debug: console.debug,
    };
  }

  public resetConsole() {
    // Reset each console method to its original implementation
    Object.keys(this.originalConsoleMethods).forEach(methodKey => {
      const method = this.originalConsoleMethods[methodKey];
      if (method) {
        (console as any)[methodKey] = method;
      }
    });
  }

  private processLog(level: keyof ConsoleMethods, ...args: any[]) {
    if (Decipher.getProcessingLogState()) {
      this.originalConsoleMethods[level]?.apply(console, args);
      return; // Check if a log is already being processed to prevent recursion
    }
    Decipher.setProcessingLogState(true);

    try {
      const currentContext = Decipher.getCurrentContext(); // Retrieve the current context
      if (currentContext) {
        const timestamp = new Date().toISOString();
        const messageParts = args.map((arg) =>
          typeof arg === "object" ? safeStringify(arg) : String(arg)
        );
        const message = messageParts.join(" ");
        Decipher.updateContext({
          consoleMessages: [...currentContext.consoleMessages, { message, level, timestamp }]
        });
        this.originalConsoleMethods[level]?.apply(console, args);
      }
    } finally {
      Decipher.setProcessingLogState(false);    
    }
  }

  public instrumentConsole() {
    if (this.isInstrumented) return;

    const consoleMethods: Array<keyof ConsoleMethods> = [
      "log",
      "warn",
      "error",
      "info",
      "debug",
    ];

    consoleMethods.forEach((level) => {
      const originalMethod = this.originalConsoleMethods[level];
      if (originalMethod) {
        (console as any)[level] = (...args: any[]) => {
          this.processLog(level, ...args);
        };
      }
    });

    this.isInstrumented = true;
  }

  public getMessages() {
    return this.consoleMessages;
  }

  public clearMessages() {
    this.consoleMessages = [];
  }
}

function safeStringify(obj: unknown, indent = 2): string {

  try { 
    if (typeof obj !== "object" || obj === null) {
      return String(obj);
    }

    let cache: any[] | null = [];
    const retVal = JSON.stringify(
      obj,
      (key, value) =>
        typeof value === "object" && value !== null
          ? cache!.includes(value)
            ? undefined // Duplicate reference found, discard key
            : cache!.push(value) && value // Store value in our collection
          : value,
      indent
    );
      cache = null;
      return retVal;
  } catch (e) {
    return 'Error in stringification: ' + e;
  }
}
