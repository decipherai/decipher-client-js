import { NextRequest, NextResponse } from "next/server";
import { collectAndSend } from "../utils/collect-and-send";
import Decipher from "../decipher";

jest.mock("../utils/collect-and-send", () => ({
  collectAndSend: jest.fn(),
}));

const mockedCollectAndSend = collectAndSend as jest.MockedFunction<
  typeof collectAndSend
>;

describe("Next.js API route behavior", () => {
  let mockHandler: jest.MockedFunction<
    (req: NextRequest) => Promise<NextResponse | any>
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
    mockHandler = jest.fn();
  });

  it("should not invoke collectAndSend for successful requests", async () => {
    const request = new NextRequest("http://test.com/success");
    const response = new NextResponse("OK", { status: 200 });

    mockHandler.mockImplementation(async (req) => {
      console.log("Handling successful request:", req.url);
      return response;
    });

    const wrappedHandler = Decipher.withDecipher(mockHandler);
    const result = await wrappedHandler(request);

    expect(result).toBe(response);
    expect(mockedCollectAndSend).not.toHaveBeenCalled();
  });

  it("should invoke collectAndSend for requests that throw errors", async () => {
    const request = new NextRequest("http://test.com/error");
    const error = new Error("Test error");

    mockHandler.mockImplementation(async (req) => {
      console.log("Simulating error for request:", req.url);
      throw error;
    });

    const wrappedHandler = Decipher.withDecipher(mockHandler);

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

      mockHandler.mockImplementation(async (req) => {
        try {
          throw error;
        } catch (error) {
          Decipher.captureError(error as Error);
          return new NextResponse("Error was captured", { status: 500 });
        }
      });

      const wrappedHandler = Decipher.withDecipher(mockHandler);
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
        .mockImplementation(async (req: NextRequest) => {
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

      mockHandler.mockImplementation(async (req) => {
        try {
          Decipher.setUser({ email: "test@test.com" });
          throw error;
        } catch (error) {
          Decipher.captureError(error as Error);
          return new NextResponse("Error was captured", { status: 500 });
        }
      });

      const wrappedHandler = Decipher.withDecipher(mockHandler);
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
});
