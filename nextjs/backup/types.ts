import { DecipherConsole } from "./utils/decipher-console";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// Define the ConsoleMethod type
type ConsoleMethod = (...args: any[]) => void;

// Interface defining the structure of the context for each request
export interface DecipherContext {
  method: string;
  url: string;
  headers?: NodeJS.Dict<string | string[]>;
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

export type AppRouterRequestHandler = (
  request: Request
) => Response | Promise<Response> | NextResponse | Promise<NextResponse>;

export type AppRouterNextRequestHandler = (
  request: NextRequest
) => Response | Promise<Response> | NextResponse | Promise<NextResponse>;

export type PageRouterHandler<T> = (
  req: NextApiRequest,
  res: NextApiResponse<T>
) => void | NextApiResponse<T> | Promise<void | NextApiResponse<T>>;
