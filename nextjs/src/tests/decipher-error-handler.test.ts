import { NextRequest, NextResponse } from 'next/server';
import { withDecipher } from '../decipher-error-handler';
import { collectAndSend } from '../utils/collect-and-send';


jest.mock('../utils/collect-and-send');
jest.mock('../utils/decipher-console');
let mockHandler: jest.MockedFunction<(req: NextRequest) => Promise<NextResponse | any>>;
describe('withDecipher', () => {
    const mockConfig = {
      codebase_id: 'test-codebase',
      customer_id: 'test-customer',
      exclude_request_body: false,
    };
  
    beforeEach(() => {
      jest.clearAllMocks();
      // Reset mockHandler to a new jest.fn() for each test to implement custom logic
      mockHandler = jest.fn();
    });
  
    it('should handle successful requests with custom logic', async () => {
      const request = new NextRequest('http://test.com');
      const response = new Response('OK', { status: 200 });
      // Implementing custom logic for mockHandler
      mockHandler.mockImplementation(async (req) => {
        console.log("Handling request:", req.url);
        return response;
      });
  
      const wrappedHandler = withDecipher(mockHandler, mockConfig);
      const result = await wrappedHandler(request);
  
      expect(result).toBe(response);
      expect(collectAndSend).not.toHaveBeenCalled();
    });
  
    it('should handle errors with custom logic in the handler', async () => {
      const request = new NextRequest('http://test.com');
      const error = new Error('Test error');
      // Implementing custom logic for mockHandler
      mockHandler.mockImplementation(async (req) => {
        console.log("About to throw an error from the mock handler", req.url);
        throw error;
      });
  
      const wrappedHandler = withDecipher(mockHandler, mockConfig);
  
      await expect(wrappedHandler(request)).rejects.toThrow(error);
      expect(collectAndSend).toHaveBeenCalled();
    });
  
  });