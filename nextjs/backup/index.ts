import DecipherObj from './decipher';
import type { DecipherHandlerConfig } from './types';
import type { AppRouterRequestHandler, AppRouterNextRequestHandler } from "./types";

console.log("Decipher is running")

const Decipher = {
  init: (config: DecipherHandlerConfig) => {
    console.log("[Decipher] Decipher init")
    DecipherObj.init(config);
  },
  withDecipher: (handler: AppRouterRequestHandler | AppRouterNextRequestHandler) => {
    console.log("[Decipher] withDecipher")
    DecipherObj.withDecipher(handler);
  },
  captureError: (error: Error) => {   
    DecipherObj.captureError(error);
  },
};

export default Decipher;