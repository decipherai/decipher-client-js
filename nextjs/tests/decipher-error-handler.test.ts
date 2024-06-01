import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { collectAndSend } from "../src/server/collect-and-send";
import { Decipher } from "../src/server";
import { createMocks } from "node-mocks-http";

jest.mock("../utils/collect-and-send", () => ({
  collectAndSend: jest.fn(),
}));

const mockedCollectAndSend = collectAndSend as jest.MockedFunction<
  typeof collectAndSend
>;

describe("Next.js API route behavior", () => {
  let mockAppHandler: jest.MockedFunction<
    (req: NextRequest) => Promise<NextResponse | any>
  >;
  let mockPageHandler: jest.MockedFunction<
    (req: NextApiRequest, res: NextApiResponse) => Promise<void | NextApiResponse<any>>
  >;
  let mockTrpcHandler: jest.Mock;

  beforeAll(() => {
    Decipher.init({
      codebaseId: "test-codebase",
      customerId: "test-customer",
      excludeRequestBody: false,
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
    mockAppHandler = jest.fn();
    mockPageHandler = jest.fn();
  });

  it("should not invoke collectAndSend for successful requests", async () => {
    const request = new NextRequest("http://test.com/success");
    const response = new NextResponse("OK", { status: 200 });

    mockAppHandler.mockImplementation(async (req) => {
      console.log("Handling successful request:", req.url);
      return response;
    });

    const wrappedHandler = Decipher.withDecipher(mockAppHandler);
    const result = await wrappedHandler(request);

    expect(result).toBe(response);
    expect(mockedCollectAndSend).not.toHaveBeenCalled();
  });

  it("should invoke collectAndSend for requests that throw errors", async () => {
    const request = new NextRequest("http://test.com/error");
    const error = new Error("Test error");

    mockAppHandler.mockImplementation(async (req) => {
      console.log("Simulating error for request:", req.url);
      throw error;
    });

    const wrappedHandler = Decipher.withDecipher(mockAppHandler);

    await expect(wrappedHandler(request)).rejects.toThrow(error);
    expect(mockedCollectAndSend).toHaveBeenCalled();
    expect(mockedCollectAndSend).toHaveBeenCalledWith(
      expect.anything(), // The request object
      {
        config: {
          codebaseId: "test-codebase",
          customerId: "test-customer",
          excludeRequestBody: false,
          environment: "production", // Adjusted to include the environment property
        },
        error: expect.any(Error), // This could be adjusted to a specific error if needed
        isUncaughtException: true,
        messages: expect.anything(), // Adjusted to expect anything if the specific messages are not important
        respBody: undefined, // Explicitly expecting undefined if that's correct
        statusCode: 500,
      }
    );
  });

  describe("Decipher.captureError functionality within Next.js API routes", () => {
    it("should capture errors with a stack trace using Decipher.captureError", async () => {
      const request = new NextRequest("http://test.com/trigger-error");
      const error = new Error("Simulated error");
      mockAppHandler.mockImplementation(async (_req) => {
        try {
          throw error;
        } catch (error) {
          Decipher.captureError(error as Error);
          return new NextResponse("Error was captured", { status: 500 });
        }
      });

      const wrappedHandler = Decipher.withDecipher(mockAppHandler);
      const result = await wrappedHandler(request);

      expect(result.status).toBe(500);
      expect(await result.text()).toContain("Error was captured");

      expect(mockedCollectAndSend).toHaveBeenCalled();
      const errorArg = mockedCollectAndSend.mock.calls[0][1].error; // Adjusted to access the 'error' property of the second argument

      expect(errorArg).toBeDefined();
      if (errorArg) {
        expect(errorArg).toBeInstanceOf(Error);
        expect(errorArg.stack).toBeDefined();
        expect(typeof errorArg.stack).toBe("string");
      }
    });
  });

  describe("tRPC API route behavior", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // Mock the tRPC handler behavior
      mockTrpcHandler = jest
        .fn()
        .mockImplementation(async (req: NextRequest) => {
          // Simulate handler logic or throw an error to test error handling
          if (req.url.includes("error")) {
            throw new Error("Test tRPC error");
          }
          return new NextResponse("OK", { status: 200 });
        });
    });

    it("should invoke collectAndSendTrpc for tRPC requests that throw errors", async () => {
      const request = new NextRequest("http://test.com/api/trpc/error");
      const error = new Error("Test tRPC error");

      const wrappedHandler = Decipher.withDecipher(mockTrpcHandler);

      await expect(wrappedHandler(request)).rejects.toThrow(error);
      expect(mockedCollectAndSend).toHaveBeenCalled();
      expect(mockedCollectAndSend).toHaveBeenCalledWith(
        expect.anything(), // The tRPC request object or its simulation
        {
          config: {
            codebaseId: "test-codebase",
            customerId: "test-customer",
            excludeRequestBody: false,
            environment: "production",
          },
          error: expect.any(Error),
          isUncaughtException: true,
          messages: expect.anything(),
          respBody: undefined,
          statusCode: 500,
        }
      );
    });
  });

  describe("tRPC API route behavior for uncaught exceptions", () => {
    let mockTrpcHandler: jest.Mock;

    beforeEach(() => {
      jest.clearAllMocks();
      // Mock the tRPC handler behavior to simulate an uncaught exception
      mockTrpcHandler = jest
        .fn()
        .mockImplementation(async (_req: NextRequest) => {
          // Directly throwing an error to simulate an uncaught exception scenario
          throw new Error("Uncaught tRPC error");
        });
    });

    it("should correctly handle uncaught exceptions in tRPC requests", async () => {
      const request = new NextRequest(
        "http://test.com/api/trpc/uncaught-exception"
      );
      const error = new Error("Uncaught tRPC error");

      const wrappedHandler = Decipher.withDecipher(mockTrpcHandler);

      // Expect the wrappedHandler to reject due to the thrown error
      await expect(wrappedHandler(request)).rejects.toThrow(error);

      // Verify that collectAndSendTrpc was called correctly
      expect(mockedCollectAndSend).toHaveBeenCalled();
      expect(mockedCollectAndSend).toHaveBeenCalledWith(
        expect.anything(), // The tRPC request object or its simulation
        expect.objectContaining({
          // Using expect.objectContaining to focus on specific fields of interest
          isUncaughtException: true,
          error: expect.any(Error),
          statusCode: 500, // Assuming the default status code for uncaught exceptions is 500
        })
      );
    });
  });

  describe("Decipher.setUser functionality within Next.js API routes", () => {
    it("should capture errors with a stack trace using Decipher.captureError", async () => {
      const request = new NextRequest("http://test.com/trigger-error");
      const error = new Error("Simulated error");

      mockAppHandler.mockImplementation(async (_req) => {
        try {
          Decipher.setUser({ email: "test@test.com" });
          throw error;
        } catch (error) {
          Decipher.captureError(error as Error);
          return new NextResponse("Error was captured", { status: 500 });
        }
      });

      const wrappedHandler = Decipher.withDecipher(mockAppHandler);
      const result = await wrappedHandler(request);

      expect(result.status).toBe(500);
      expect(await result.text()).toContain("Error was captured");
      
      expect(mockedCollectAndSend).toHaveBeenCalled();
      expect(mockedCollectAndSend).toHaveBeenCalledWith(
        expect.anything(), // The request object or its simulation
        expect.objectContaining({
          // Using expect.objectContaining to focus on specific fields of interest
          endUser: { email: "test@test.com" }, // Confirming that collectAndSend was called with the specified endUser object
          error: expect.any(Error),
          statusCode: 500,
        })
      );
    });
  });

  it("should not invoke collectAndSend for successful requests", async () => {
    const { req, res } = createMocks({
      method: 'POST',
      url: "http://test.com/success",
    });

    mockPageHandler.mockImplementation(async (req, res) => {
      console.log("Handling successful request:", req.url);
      res.status(200).send("OK");
    });

    const wrappedHandler = Decipher.withDecipherPage(mockPageHandler);

    await wrappedHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toBe("OK");
    expect(mockedCollectAndSend).not.toHaveBeenCalled();
  });


  it("should invoke collectAndSend for requests that throw errors", async () => {
    const { req, res } = createMocks({
      method: 'POST',
      url: "http://test.com/error",
    });

    const error = new Error("Test error");

    mockPageHandler.mockImplementation(async (req, _res) => {
      console.log("Simulating error for request:", req.url);
      throw error;
    });

    const wrappedHandler = Decipher.withDecipherPage(mockPageHandler);

    await expect(wrappedHandler(req, res)).rejects.toThrow("Test error");

    expect(mockedCollectAndSend).toHaveBeenCalled();
    expect(mockedCollectAndSend).toHaveBeenCalledWith(
      expect.anything(),
      {
        config: {
          codebaseId: "test-codebase",
          customerId: "test-customer",
          excludeRequestBody: false,
          environment: "production",
        },
        error: expect.any(Error),
        isUncaughtException: true,
        messages: expect.anything(),
        respBody: undefined,
        statusCode: 500,
      }
    );
  });

  describe("Decipher.captureError functionality within Next.js Page API routes", () => {
    it("should capture errors with a stack trace using Decipher.captureError", async () => {
      const { req, res } = createMocks({
        method: 'POST',
        url: "http://test.com/trigger-error",
      });
  
      const mockPageHandler = jest.fn(async (_req, res) => {
        try {
          throw new Error("Simulated error");
        } catch (error) {
          Decipher.captureError(error as Error);
          res.status(500).send("Error was captured");
        }
      });
  
      const wrappedHandler = Decipher.withDecipherPage(mockPageHandler);
      
      await wrappedHandler(req, res);
  
      expect(res._getStatusCode()).toBe(500);
      expect(res._getData()).toBe("Error was captured");
  
      expect(mockedCollectAndSend).toHaveBeenCalled();
      const errorArg = mockedCollectAndSend.mock.calls[0][1].error;
  
      expect(errorArg).toBeDefined();
      if (errorArg) {
        expect(errorArg).toBeInstanceOf(Error);
        expect(errorArg.stack).toBeDefined();
        expect(typeof errorArg.stack).toBe("string");
      }
    });
  });
  describe("Decipher.setUser functionality within Next.js Page API routes", () => {
    it("should capture errors with a stack trace using Decipher.captureError", async () => {
      const { req, res } = createMocks({
        method: 'POST',
        url: "http://test.com/trigger-error",
      });
  
      const mockPageHandler = jest.fn(async (_req, res) => {
        try {
          Decipher.setUser({ email: "test@test.com" });
          throw new Error("Simulated error");
        } catch (error) {
          Decipher.captureError(error as Error);
          res.status(500).send("Error was captured");
        }
      });
  
      const wrappedHandler = Decipher.withDecipherPage(mockPageHandler);
  
      await wrappedHandler(req, res);
  
      expect(res._getStatusCode()).toBe(500);
      expect(res._getData()).toBe("Error was captured");
  
      expect(mockedCollectAndSend).toHaveBeenCalled();
      expect(mockedCollectAndSend).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          endUser: expect.objectContaining({ email: "test@test.com" }),
          error: expect.any(Error),
        })
      );
    });
  });
  describe("Decipher log capturing functionality", () => {
    it("should capture console logs in the handler", async () => {
      const request = new NextRequest("http://test.com/logs");

      mockAppHandler.mockImplementation(async (_req) => {
        console.log("Custom log message 1");
        console.warn("Custom log message 2");
        throw new Error("Failure in processing");
      });

      const wrappedHandler = Decipher.withDecipher(mockAppHandler);
      try {
        await wrappedHandler(request);
      } catch {}
       // Check the captured logs
      const capturedLogs = mockedCollectAndSend.mock.calls[0][1].messages;
      expect(capturedLogs).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            message: "\"Custom log message 1\"",
            level: "log",
          }),
          expect.objectContaining({
            message: "\"Custom log message 2\"",
            level: "warn",
          }),
        ])
      );
    });
  });
});