import { DecipherRecording } from "./session-replay/capture";
import { DecipherFrontendConfig } from "./types/decipher-types";

let isInitialized = false; // Flag to ensure init can't be called more than once

const DecipherFrontend = {
  init: (config: DecipherFrontendConfig) => {
    if (typeof window === "undefined") {
      console.warn("[Decipher] init called on the server. Ignoring.");
      return;
    }
    if (isInitialized) {
      console.warn(
        "[Decipher] init has already been set up. Ignoring subsequent calls."
      );
      return;
    }
    const { customerId, codebaseId, user, exceptionAnnotator } = config;
    if (!customerId || !codebaseId) {
      console.error(
        "[Decipher] DecipherFrontendConfig requires both customerId and codebaseId"
      );
      return;
    }

    window.addEventListener("load", () => {
      const decipherRecording = new DecipherRecording({
        customerId,
        codebaseId,
        user,
        exceptionAnnotator,
      });
      const stopRecording = decipherRecording.startRecording();

      const originalOnError = window.onerror;
      const originalOnUnhandledRejection = window.onunhandledrejection;

      window.onerror = (...args) => {
        originalOnError && originalOnError(...args);
      };
      window.onunhandledrejection = (...args) => {
        originalOnUnhandledRejection &&
          originalOnUnhandledRejection.apply(window, args);
      };

      window.addEventListener("beforeunload", () => {
        stopRecording?.();

        window.onerror = originalOnError;
        window.onunhandledrejection = originalOnUnhandledRejection;

        isInitialized = false;
      });
    });
  },
};

export { DecipherFrontend };
