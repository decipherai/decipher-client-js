"use client";
import { DecipherRecording } from "./session-replay/capture";
import { DecipherFrontendConfig } from "./types/decipher-types";

let isInitialized = false; // Flag to ensure init can't be called more than once

const Decipher = {
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
    const { customerId, codebaseId, user } = config;
    if (!customerId || !codebaseId) {
      console.error(
        "[Decipher] DecipherFrontendConfig requires both customerId and codebaseId"
      );
      return;
    }
    isInitialized = true;

    const decipherRecording = new DecipherRecording({
      customerId,
      codebaseId,
      user,
    });
    const stopRecording = decipherRecording.startRecording();

    // Set up exception capturing
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
  },
};

export default Decipher;
