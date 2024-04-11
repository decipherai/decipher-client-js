import axios from "axios";

import type { Request as ExpressRequest } from "express";

export async function collectAndSend(
  req: Request | ExpressRequest,
  respBody: any,
  statusCode: number,
  messages: any,
  isUncaughtException: boolean,
  codebaseId: string,
  customerId: string,
  excludeRequestBody: boolean,
  error?: Error
): Promise<void> {
  try {
    console.log("Kicking off collect and send")
    console.log(error)
    const errorTimestamp = new Date().toISOString();
    const parsedData = await extractRequestData(req, excludeRequestBody);
    // Non-200s get logged; uncaught exceptions are caught below (in the `catch` block)
    sendErrorToService(
      error?.stack || "",
      errorTimestamp,
      parsedData.url,
      parsedData.endpoint,
      parsedData.headers,
      parsedData.body,
      respBody,
      statusCode,
      messages,
      isUncaughtException,
      codebaseId,
      customerId
    );
  } catch (error) {
    console.error("Failure sending to Decipher", error);
  }
}

async function extractRequestData(
  req: Request | ExpressRequest,
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
      "Request body not captured by Decipher due to `exclude_request_body` handler setting.";
  } else if (hasRequestBody) {
    try {
      if ("body" in req && "query" in req) {
        requestBody = await req.body;
      } else if ("json" in req) {
        requestBody = await (req as Request).json();
      }
    } catch (error) {
      console.log(error);
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
  if (requestEndpoint === "unknown" && "path" in req && req.path) {
    requestEndpoint = req.path;
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
  timestamp: string,
  requestURL: URL,
  requestEndpoint: string,
  requestHeaders: Record<string, string | string[]>,
  requestBody: string,
  respBody: any,
  statusCode: number,
  messages: any,
  isUncaughtException: boolean,
  codebaseId: string,
  customerId: string
) => {
  const payload = {
    codebase_id: codebaseId,
    timestamp: timestamp,
    error_stack: errorStack,
    customer_id: customerId,
    request_endpoint: requestEndpoint,
    request_headers: requestHeaders,
    request_url: requestURL,
    request_body: requestBody,
    response_body: respBody,
    status_code: statusCode,
    is_uncaught_exception: isUncaughtException,
    messages: messages,
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
      .catch((err) =>
        console.error("Axios error sending issue to Decipher backend", err)
      );
  } catch (err) {
    console.error("Failure sending issue to Decipher backend", err);
  }
};
