import DecipherObj from './utils/decipher'
import {
    requestHandler,
    errorHandler,
} from './middleware/decipher-error-handler'
import type { DecipherHandlerConfig, User } from './types'

const Decipher = {
    init: (config: DecipherHandlerConfig) => {
        DecipherObj.init(config)
    },
    Handlers: {
        requestHandler,
        errorHandler,
    },
    captureError: (error: Error) => {
        DecipherObj.captureError(error)
    },
    setUser: (user: User) => {
        DecipherObj.setUser(user)
    },
}

module.exports = Decipher
