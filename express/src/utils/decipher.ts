// Utilizing AsyncLocalStorage from Node.js to handle asynchronous context management
const { AsyncLocalStorage } = require('node:async_hooks')
import type { DecipherHandlerConfig } from '../types'
import { User } from '../types'
// Creating an instance of AsyncLocalStorage to store context specific to each request
const asyncLocalStorage = new AsyncLocalStorage()
// Defining the structure of the context stored in AsyncLocalStorage
import { DecipherContext } from '../types'

// Singleton class to manage Decipher configurations and context
class Decipher {
    private static instance: Decipher
    private _isProcessingLog: boolean = false

    public settings: DecipherHandlerConfig = {
        codebaseId: '',
        customerId: '',
    }

    private constructor() {}

    // Ensures a single instance of the Decipher class
    public static getInstance(): Decipher {
        if (!Decipher.instance) {
            Decipher.instance = new Decipher()
        }
        return Decipher.instance
    }

    // Add logging to init method to confirm settings are being initialized
    public init(config: DecipherHandlerConfig): void {
        this.settings = {
            ...this.settings,
            ...config,
        }
    }

    // Add logging to captureError to see when errors are captured
    public captureError(error: Error): void {
        const store = asyncLocalStorage.getStore()
        if (store) {
            store.capturedError = error
        }
    }

    // Function to access and change processingLog state
    public setProcessingLogState(state: boolean): void {
        this._isProcessingLog = state
    }

    public getProcessingLogState(): boolean {
        return this._isProcessingLog
    }

    // Add logging to updateContext to see updates being made
    public updateContext(update: Partial<DecipherContext>): void {
        const store = asyncLocalStorage.getStore()
        if (store) {
            Object.assign(store, update)
        } else {
            console.log('[Decipher] No active async local storage to update')
        }
    }

    // Add logging to runWithContext to see when a new context is being run
    public runWithContext(context: DecipherContext, fn: () => void): void {
        asyncLocalStorage.run(context, fn)
    }

    // Add logging to getCurrentContext to see when context is retrieved
    public getCurrentContext(): DecipherContext | undefined {
        const context = asyncLocalStorage.getStore()
        return context
    }

    public setUser(user: User): void {
        let context = this.getCurrentContext()
        if (!context) {
            return
        }
        if (!user) {
            context.endUser = null
        } else if (user.email || user.id || user.id === 0 || user.username) {
            context.endUser = { ...user }
        } else {
            context.endUser = {
                username:
                    'DECIPHER_EMPTY_USER_PROVIDED - check your call to Decipher.setUser.',
            }
        }
    }
}

export { asyncLocalStorage }

// Exports a singleton instance of the Decipher class
export default Decipher.getInstance()
