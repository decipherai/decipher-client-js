import { DecipherConsole } from "./utils/decipher-console";

// Define the ConsoleMethod type
type ConsoleMethod = (...args: any[]) => void;

export interface DecipherHandlerConfig {
  /**
   * A codebase name of your choice to identify errors in Decipher.
   */
  codebase_id: string;
  /**
   * Your customer ID found on your dashboard.
   */
  customer_id: string;
  /**
   * Set to `true` if you want to avoid send over your request body.
   */
  exclude_request_body?: boolean;
}

export interface DecipherContext {
  config: DecipherHandlerConfig;
  method: string;
  url: string;
  headers: NodeJS.Dict<string | string[]>;
  decipherConsole: DecipherConsole;
}

export interface ConsoleMethods {
  log: ConsoleMethod;
  warn: ConsoleMethod;
  error: ConsoleMethod;
  info: ConsoleMethod;
  debug: ConsoleMethod;
  [key: string]: ConsoleMethod | undefined;
}
