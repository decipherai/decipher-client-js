// Forked from https://github.com/getsentry/sentry-javascript/blob/531779300c186f89afff0c5bad9f802b2140a325/packages/types/src/exception.ts.
import { Mechanism } from "./mechanism";
import { Stacktrace } from "./stacktrace";

export interface Exception {
  type?: string;
  value?: string;
  mechanism?: Mechanism;
  module?: string;
  thread_id?: number;
  stacktrace?: Stacktrace;
}
