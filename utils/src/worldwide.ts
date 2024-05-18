// Inspired by https://github.com/getsentry/sentry-javascript/blob/531779300c186f89afff0c5bad9f802b2140a325/packages/utils/src/worldwide.ts.

export interface InternalGlobal {
  console: Console;
  /**
   * Debug IDs are indirectly injected by Decipher's webpack plugin and used to correctly map files to sourcemaps.
   */
  _decipherDebugIds?: Record<string, string>;
}

export const GLOBAL_OBJ = globalThis as unknown as InternalGlobal;
