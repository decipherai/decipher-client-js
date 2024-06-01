import axios from "axios";

import type { NextApiRequest } from "next";
import { DecipherHandlerConfig } from "./handler-config";
import { Exception } from "@decipher-sdk/types";
import { nodeStackParser } from "./node-stack-trace";
import { applyDebugIds, exceptionFromError } from "@decipher-sdk/utils";
import { devErrorSymbolicationEventProcessor } from "../client/devErrorStackParser";
import { DecipherTrpcMiddlewareArguments } from "./types";

export type User = {
  id?: number | string;
  username?: string;
  email?: string;
};

async function extractTrpcRequestData(opts: any): Promise<{
  url: string;
  endpoint: string;
  headers: Record<string, string | string[]>;
  body: string;
}> {
  const requestBody = opts.getRawInput && (await opts.getRawInput());

  return {
    url: "tRPC",
    endpoint: opts.path,
    headers: {}, // TODO: Fill if opts.ctx has this.
    body: requestBody,
  };
}

interface CollectAndSendData {
  respBody: any;
  statusCode?: number;
  messages: any;
  isUncaughtException: boolean;
  config: DecipherHandlerConfig;
  error?: Error;
  endUser?: User | null;
}

async function createFilledExceptionObject(error: Error): Promise<Exception> {
  var exception: Exception = exceptionFromError(nodeStackParser, error);
  if (process.env.NODE_ENV === "development") {
    const result = await devErrorSymbolicationEventProcessor(exception, error);
    if (result) {
      exception = result;
    }
  }
  if (exception.stacktrace?.frames?.length) {
    applyDebugIds(exception, nodeStackParser);
  }
  return exception;
}

export async function collectAndSend(
  req: NextApiRequest | Request,
  data: CollectAndSendData
): Promise<void> {
  try {
    const errorTimestamp = new Date().toISOString();
    const parsedData = await extractRequestData(
      req,
      !!data.config.excludeRequestBody
    );
    const exception = data.error
      ? await createFilledExceptionObject(data.error)
      : null;
    sendErrorToService(
      data.error?.stack || "",
      exception,
      errorTimestamp,
      parsedData.url,
      parsedData.endpoint,
      parsedData.headers,
      parsedData.body,
      data.respBody,
      data.statusCode || 0,
      data.messages,
      data.isUncaughtException,
      data.config,
      data.endUser
    );
  } catch (error) {
    //console.error("Failure sending to Decipher", error);
  }
}

export function collectAndSendTrpc<T>(
  opts: DecipherTrpcMiddlewareArguments<T>,
  data: CollectAndSendData,
  path: string
) {
  try {
    const errorTimestamp = new Date().toISOString();
    extractTrpcRequestData(opts).then((_parsedData) => {
      const exceptionPromise = data.error
        ? createFilledExceptionObject(data.error)
        : Promise.resolve(null);

      exceptionPromise.then((exception) => {
        sendErrorToService(
          data.error?.stack || "",
          exception,
          errorTimestamp,
          path,
          path, // parsedData.endpoint,
          {}, // parsedData.headers,
          "", // parsedData.body,
          data.respBody,
          data.statusCode || 0,
          data.messages,
          data.isUncaughtException,
          data.config,
          data.endUser
        );
      });
    });
  } catch (error) {}
}

async function extractRequestData(
  req: NextApiRequest | Request,
  excludeRequestBody: boolean
): Promise<{
  url: URL;
  endpoint: string;
  headers: Record<string, string | string[]>;
  body: string;
}> {
  let hasRequestBody = false;
  if (req.method && ["POST", "PUT", "PATCH"].includes(req.method)) {
    hasRequestBody = true;
  }
  let requestBody = "";
  if (excludeRequestBody) {
    requestBody =
      "Request body not captured by Decipher due to `excludeRequestBody` handler setting.";
  } else if (hasRequestBody) {
    try {
      if ("body" in req && "query" in req) {
        requestBody = await req.body;
      } else if ("json" in req) {
        requestBody = await (req as Request).json();
      }
    } catch (error) {
      //console.log(error);
      requestBody = "Error parsing body:" + error;
    }
  }

  const requestHeaders: Record<string, string | string[]> = {};
  if ("headers" in req) {
    Object.entries(req.headers).forEach(([key, value]) => {
      requestHeaders[key] = value;
    });
  }

  let requestURL: URL;
  let requestEndpoint = "unknown";
  const url = req.url ? req.url : "";
  const hostHeader = (req.headers as Record<string, string | string[]>).host;
  if (hostHeader) {
    requestURL = new URL(url, `http://${hostHeader}`);
  } else {
    requestURL = new URL(url, "about:blank");
  }

  if (requestURL) {
    requestEndpoint = requestURL.pathname.split("/api/")[1] || "unknown";
  }

  return {
    url: requestURL,
    endpoint: requestEndpoint,
    headers: requestHeaders,
    body: requestBody,
  };
}

const sendErrorToService = async (
  errorStack: string,
  exception: Exception | null, // This is preferred over errorStack as it contains a more useful stack trace including debug IDs etc. Older versions of the SDK don't have this.
  timestamp: string,
  requestURL: URL | string,
  requestEndpoint: string,
  requestHeaders: Record<string, string | string[]>,
  requestBody: string,
  respBody: any,
  statusCode: number,
  messages: any,
  isUncaughtException: boolean,
  config: DecipherHandlerConfig,
  endUser?: User | null
) => {
  const payload = {
    codebase_id: config.codebaseId,
    timestamp: timestamp,
    error_stack: errorStack,
    // parsedStack is preferred over errorStack as it contains a more useful stack trace including debug IDs etc. Older versions of the SDK don't have this.
    exception: exception,
    customer_id: config.customerId,
    request_endpoint: requestEndpoint,
    request_headers: requestHeaders,
    request_url: requestURL,
    request_body: requestBody,
    response_body: respBody,
    status_code: statusCode,
    is_uncaught_exception: isUncaughtException,
    messages,
    environment: config.environment,
    affected_user: endUser || null,
  };
  try {
    axios
      .post(
        `${
          process.env.DECIPHER_SERVER_URL || "https://prod.getdecipher.com"
        }/api/exception_upload`,
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch(() => {
        //console.error("Axios error sending issue to Decipher backend", err)
      });
  } catch (err) {
    //console.error("Failure sending issue to Decipher backend", err);
  }
};
