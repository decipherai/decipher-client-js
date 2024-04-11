import DecipherObj from './utils/decipher';
import { requestHandler, errorHandler } from './middleware/decipher-error-handler';

const Decipher = {
  init: (config: { codebase_id: string; customer_id: string; exclude_request_body?: boolean; environment?: string }) => {
    DecipherObj.init(config);
  },
  Handlers: {
    requestHandler,
    errorHandler,
  },
  captureError: (error: Error) => {
    DecipherObj.captureError(error);
  },
};

module.exports = Decipher;