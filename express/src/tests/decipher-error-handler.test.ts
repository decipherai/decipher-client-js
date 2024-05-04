const Decipher = require('../index')
import { collectAndSend } from '../utils/collect-and-send'
import request from 'supertest'
import express from 'express'

jest.mock('../utils/collect-and-send', () => ({
    collectAndSend: jest.fn(),
}))

const mockedCollectAndSend = collectAndSend as jest.MockedFunction<
    typeof collectAndSend
>

describe('Express application behavior', () => {
    let app: express.Application

    beforeAll(() => {
        mockedCollectAndSend.mockReset()

        app = express()
        Decipher.init({
            codebaseId: 'test-codebase',
            customerId: 'test-customer',
        })

        // Define a sample route that does not produce an error
        app.get('/no-error', (_req, res) => {
            res.status(200).json({ message: 'No error here' })
        })

        // Attach the DecipherErrorHandler as it would be in the real app
        app.use(Decipher.Handlers.errorHandler)
    })

    it('should not invoke DecipherErrorHandler for routes without errors', async () => {
        const response = await request(app).get('/no-error')

        // Check that the response is as expected, indicating no error handling was invoked
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: 'No error here' })

        // Ensure collectAndSend was not called, indirectly showing DecipherErrorHandler was not invoked
        expect(mockedCollectAndSend).not.toHaveBeenCalled()
    })
})

describe('Express application behavior with error', () => {
    let app: express.Application

    beforeAll(() => {
        mockedCollectAndSend.mockReset()

        app = express()

        Decipher.init({
            codebaseId: 'test-codebase',
            customerId: 'test-customer',
        })

        app.use(Decipher.Handlers.requestHandler())

        // Define a sample route that deliberately throws an error
        app.get('/error', (_req, _res) => {
            // Simulating a call to a nonexistent function to trigger an error
            throw new Error('Test error')
        })

        // Attach the DecipherErrorHandler as it would be in the real app
        app.use(Decipher.Handlers.errorHandler)
    })

    it('should invoke DecipherErrorHandler for routes with errors', async () => {
        await request(app).get('/error')

        // Check that collectAndSend was called, indicating DecipherErrorHandler was invoked
        expect(mockedCollectAndSend).toHaveBeenCalled()

        expect(mockedCollectAndSend).toHaveBeenCalledWith(
            expect.anything(), // The request object
            {}, // The responseBody, which appears to be an empty object in this case
            500, // statusCode
            expect.anything(), // For messages, since it's an array and the exact content might not be important for this test
            true, // isUncaughtException
            'test-codebase', // codebaseId
            'test-customer', // customerId
            false, // excludeRequestBody
            expect.any(Error), // For the error object, we're checking if it's an instance of Error
            undefined
        )
    })
})

describe('Decipher.captureError functionality', () => {
    let app: express.Application

    beforeAll(() => {
        mockedCollectAndSend.mockReset()

        app = express()

        Decipher.init({
            codebaseId: 'test-codebase',
            customerId: 'test-customer',
        })

        app.use(Decipher.Handlers.requestHandler())

        app.get('/trigger-error', async (_req, res) => {
            try {
                throw new Error('Simulated error')
            } catch (error) {
                Decipher.captureError(error)
                res.status(500).send('Error was captured 2')
            }
        })

        app.use(Decipher.Handlers.errorHandler)
    })

    it('should capture errors with a stack trace using Decipher.captureError', async () => {
        const response = await request(app).get('/trigger-error')

        expect(response.status).toBe(500)
        expect(response.text).toContain('Error was captured')

        // Check that collectAndSend was called
        expect(mockedCollectAndSend).toHaveBeenCalled()

        // Get the error object passed to collectAndSend
        const errorArg = mockedCollectAndSend.mock.calls[0][8] // Assuming the error object is the 9th argument

        expect(errorArg).toBeDefined()

        if (errorArg) {
            // Check that the error object includes a stack trace
            expect(errorArg).toBeInstanceOf(Error)
            expect(errorArg.stack).toBeDefined()
            expect(typeof errorArg.stack).toBe('string')
        }
    })
})

describe('Decipher.setUser functionality within Express routes', () => {
    let app: express.Application

    beforeAll(() => {
        app = express()
        Decipher.init({
            codebaseId: 'test-codebase',
            customerId: 'test-customer',
        })
        app.use(Decipher.Handlers.requestHandler())

        app.get('/set-user-error', (_req, res) => {
            try {
                Decipher.setUser({ email: 'user@example.com' }) // Simulating setting the user
                throw new Error('Simulated error with user set')
            } catch (error) {
                Decipher.captureError(error)
                res.status(500).send('Error with user info was captured')
            }
        })

        app.use(Decipher.Handlers.errorHandler)
    })

    it('should call collectAndSend with the endUser object specified in setUser', async () => {
        const response = await request(app).get('/set-user-error')

        expect(response.status).toBe(500)
        expect(response.text).toContain('Error with user info was captured')

        expect(mockedCollectAndSend).toHaveBeenCalledWith(
            expect.anything(), // The request object
            expect.anything(), // The responseBody
            500, // statusCode
            expect.anything(), // messages
            expect.anything(), // isUncaughtException
            'test-codebase', // codebaseId
            'test-customer', // customerId
            expect.anything(), // excludeRequestBody
            expect.any(Error), // error object
            expect.objectContaining({ email: 'user@example.com' }) // endUser object
        )
    })
})
