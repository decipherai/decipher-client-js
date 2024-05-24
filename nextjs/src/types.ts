import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export type PageRouterHandler<T> = (
  req: NextApiRequest,
  res: NextApiResponse<T>
) => void | NextApiResponse<T> | Promise<void | NextApiResponse<T>>;

export type AppRouterRequestHandler = (
  request: Request
) => Response | Promise<Response> | NextResponse | Promise<NextResponse>;

export type AppRouterNextRequestHandler = (
  request: NextRequest
) => Response | Promise<Response> | NextResponse | Promise<NextResponse>;

export interface DecipherTrpcMiddlewareArguments<T> {
  ctx?: any;
  path?: unknown;
  type?: unknown;
  next: () => T;
  rawInput?: unknown;
}
