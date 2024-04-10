import { DecipherErrorHandler, DecipherRequestHandler } from '../decipher-error-handler';
import { collectAndSend } from '../utils/collect-and-send';
import { Request, Response, NextFunction } from 'express';
import request from 'supertest';
import express from 'express';

jest.mock('../utils/collect-and-send', () => ({
  collectAndSend: jest.fn(),
}));


describe('Express application behavior', () => {
    let app: express.Application;
  
    beforeAll(() => {
      app = express();
  
      // Define a sample route that does not produce an error
      app.get('/no-error', (req, res) => {
        res.status(200).json({ message: 'No error here' });
      });
  
      // Attach the DecipherErrorHandler as it would be in the real app
      app.use(DecipherErrorHandler);
    });
  
    it('should not invoke DecipherErrorHandler for routes without errors', async () => {
      const response = await request(app).get('/no-error');
  
      // Check that the response is as expected, indicating no error handling was invoked
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'No error here' });
  
      // Ensure collectAndSend was not called, indirectly showing DecipherErrorHandler was not invoked
      expect(collectAndSend).not.toHaveBeenCalled();
    });
  });

  describe('Express application behavior with error', () => {
    let app: express.Application;
  
    beforeAll(() => {
      app = express();

      app.use(DecipherRequestHandler({ codebase_id: 'test-codebase', customer_id: 'test-customer' }))
  
      // Define a sample route that deliberately throws an error
      app.get('/error', (req, res) => {
        // Simulating a call to a nonexistent function to trigger an error
        throw new Error('Test error');
      });
  
      // Attach the DecipherErrorHandler as it would be in the real app
      app.use(DecipherErrorHandler);
    });
  
    it('should invoke DecipherErrorHandler for routes with errors', async () => {
      await request(app).get('/error');
  
      // Check that collectAndSend was called, indicating DecipherErrorHandler was invoked
      expect(collectAndSend).toHaveBeenCalled();

      expect(collectAndSend).toHaveBeenCalledWith(
        expect.anything(), // The request object
        {}, // The responseBody, which appears to be an empty object in this case
        500, // statusCode
        expect.anything(), // For messages, since it's an array and the exact content might not be important for this test
        true, // isUncaughtException
        'test-codebase', // codebaseId
        'test-customer', // customerId
        false, // excludeRequestBody
        expect.any(Error) // For the error object, we're checking if it's an instance of Error
      );
    })
  });





// describe('DecipherErrorHandler', () => {
//   const mockRequest = (): Partial<Request> => ({
//     method: 'GET',
//     url: '/uploadUser',
//     headers: {
//       host: 'localhost:3000',
//     },
//   });

//   const mockResponse = (): Partial<Response> => ({
//     status: jest.fn().mockReturnThis(),
//     json: jest.fn().mockReturnThis(),
//   });

//   const mockNext: NextFunction = jest.fn();

//   it('should not call collectAndSend when there is no error', async () => {
//     const req = mockRequest() as Request;
//     const res = mockResponse() as Response;
//     const next = mockNext;

//     // Simulate adding DecipherContext to the request
//     (req as any).decipherContext = {
//       config: {
//         codebase_id: 'test-codebase',
//         customer_id: 'test-customer',
//         exclude_request_body: false,
//       },
//       method: req.method,
//       url: req.url,
//       headers: req.headers,
//       decipherConsole: {
//         getMessages: () => [],
//         clearMessages: jest.fn(),
//       },
//     };

//     // Call the error handler without passing an error
//     DecipherErrorHandler(null, req, res, next);

//     // Check if collectAndSend was not called
//     expect(collectAndSend).not.toHaveBeenCalled();

//     // Optionally, verify that next() was called to continue the middleware chain
//     expect(next).toHaveBeenCalled();
//   });


//   it('should handle errors by calling collectAndSend', async () => {
//     const req = mockRequest() as Request;
//     const res = mockResponse() as Response;
//     const next = mockNext;
//     const error = new Error('Test error');

//     // Simulate adding DecipherContext to the request
//     (req as any).decipherContext = {
//       config: {
//         codebase_id: 'test-codebase',
//         customer_id: 'test-customer',
//         exclude_request_body: false,
//       },
//       method: req.method,
//       url: req.url,
//       headers: req.headers,
//       decipherConsole: {
//         getMessages: () => [],
//         clearMessages: jest.fn(),
//       },
//     };

//     // Call the error handler with a simulated error
//     DecipherErrorHandler(error, req, res, next);

//     // Check if collectAndSend was called with the correct parameters
//     expect(collectAndSend).toHaveBeenCalledWith(
//         req, // The request object
//         {}, // The responseBody, which appears to be an empty object in this case
//         500, // statusCode
//         expect.anything(), // For messages, since it's an array and the exact content might not be important for this test
//         true, // isUncaughtException
//         'test-codebase', // codebaseId
//         'test-customer', // customerId
//         false, // excludeRequestBody
//         expect.any(Error) // For the error object, we're checking if it's an instance of Error
//       );

//     // Optionally, verify that next() was called to continue the middleware chain
//     expect(next).toHaveBeenCalled();
//   });
// });
