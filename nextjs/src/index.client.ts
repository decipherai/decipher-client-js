import { DecipherFrontend } from "@decipher-sdk/frontend";
import { devErrorSymbolicationEventProcessor } from "./utils/stack_trace/devErrorStackParser";

export type DecipherNextJsClientOptions = {
  frontendCodebaseId: string;
  customerId: string;
};

export function init(options: DecipherNextJsClientOptions): void {
  const { customerId, frontendCodebaseId } = options;
  if (!customerId || !frontendCodebaseId) {
    console.error(
      "[Decipher] Please set customerId and frontendCodebaseId in the call to withDecipherConfig."
    );
    return;
  }
  if (process.env.NODE_ENV === "development") {
    DecipherFrontend.init({
      customerId,
      codebaseId: frontendCodebaseId,
      // Collect detailed local stack trace data via nextJS for development; sourcemaps handle it for prod.
      exceptionAnnotator: devErrorSymbolicationEventProcessor,
    });
  } else {
    DecipherFrontend.init({
      customerId,
      codebaseId: frontendCodebaseId,
    });
  }
}
