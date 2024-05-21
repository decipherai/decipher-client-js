import { Exception } from "@decipher-sdk/types";
/**
 * Configuration for Decipher frontend capturing.
 * @property {string} customerId - The customer ID from the /settings page (must be a non-empty string).
 * @property {string} codebaseId - The codebase ID of your choice (must be a non-empty string).
 */

export type User = {
  id?: number | string;
  username?: string;
  email?: string;
};

export interface DecipherFrontendConfig {
  customerId: string;
  codebaseId: string;
  user?: User;
  // Optional annotator function that can add extra context to the Exception object.
  exceptionAnnotator?: (
    exception: Exception,
    originalError: Error
  ) => Promise<Exception | null>;
}
