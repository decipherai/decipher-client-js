import { DecipherConsole } from "./utils/decipher-console";

// Define the ConsoleMethod type
type ConsoleMethod = (...args: any[]) => void;

// Interface defining the structure of the context for each request
export interface DecipherContext {
  method: string;
  url: string;
  headers: NodeJS.Dict<string | string[]>;
  decipherConsole: DecipherConsole;
  capturedError?: Error;
  consoleMessages: any[];
}

export interface ConsoleMethods {
  log: ConsoleMethod;
  warn: ConsoleMethod;
  error: ConsoleMethod;
  info: ConsoleMethod;
  debug: ConsoleMethod;
  [key: string]: ConsoleMethod | undefined;
}

export interface DecipherHandlerConfig {
  codebaseId: string;
  customerId: string;
  excludeRequestBody?: boolean;
  environment?: string;
}