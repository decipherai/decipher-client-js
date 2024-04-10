import { ConsoleMethods } from "../types";

export class DecipherConsole {
  private originalConsoleMethods: ConsoleMethods;
  private isInstrumented: boolean = false;
  private consoleMessages: any[] = [];
  private isProcessingLog: boolean = false;

  constructor() {
    this.originalConsoleMethods = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info,
      debug: console.debug,
    };
  }

  private processLog(level: keyof ConsoleMethods, ...args: any[]) {
    if (this.isProcessingLog) {
      this.originalConsoleMethods[level]?.apply(console, args);
      return; // Check if a log is already being processed to prevent recursion
    }
    this.isProcessingLog = true;

    const timestamp = new Date().toISOString();
    const messageParts = args.map((arg) =>
      typeof arg === "object" ? safeStringify(arg) : String(arg)
    );
    const message = messageParts.join(" ");
    this.consoleMessages.push({ message, level, timestamp });
    this.originalConsoleMethods[level]?.apply(console, args);
    this.isProcessingLog = false;
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
}
