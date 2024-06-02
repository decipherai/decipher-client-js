/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
export function isThenable(wat: any): wat is PromiseLike<any> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return Boolean(wat && wat.then && typeof wat.then === "function");
}

import type {
  DecipherBuildOptions,
  ExportedNextConfig as NextConfig,
  NextConfigFunction,
  NextConfigObject,
} from "./types";

import { constructWebpackConfigFunction } from "./webpack";

// Forked and modified from https://github.com/getsentry/sentry-javascript/blob/deabca378365fffc99cefccfa47ba9d356d8ddb5/packages/nextjs/src/config/withSentryConfig.ts#L21.

/**
 * Modifies the passed in Next.js configuration with automatic build-time instrumentation and source map upload.
 *
 * @param nextConfig A Next.js configuration object, as usually exported in `next.config.js` or `next.config.mjs`.
 * @returns The modified config to be exported
 */
export function withDecipherConfig<C>(nextConfig: C, decipherBuildOptions: DecipherBuildOptions): C {
  const castNextConfig = (nextConfig as NextConfig) || {};
  if (typeof castNextConfig === "function") {
    return function (
      this: unknown,
      ...webpackConfigFunctionArgs: unknown[]
    ): ReturnType<NextConfigFunction> {
      const maybePromiseNextConfig: ReturnType<typeof castNextConfig> =
        castNextConfig.apply(this, webpackConfigFunctionArgs);

      if (isThenable(maybePromiseNextConfig)) {
        return maybePromiseNextConfig.then((promiseResultNextConfig) => {
          return getFinalConfigObject(promiseResultNextConfig, decipherBuildOptions);
        });
      }

      return getFinalConfigObject(maybePromiseNextConfig, decipherBuildOptions);
    } as C;
  } else {
    return getFinalConfigObject(castNextConfig, decipherBuildOptions) as C;
  }
}
// Modify the materialized object form of the user's next config by wrapping the`webpack` property
function getFinalConfigObject(
  incomingUserNextConfigObject: NextConfigObject,
  decipherBuildOptions: DecipherBuildOptions
): NextConfigObject {
  return {
    ...incomingUserNextConfigObject,
    webpack: constructWebpackConfigFunction(incomingUserNextConfigObject, decipherBuildOptions),
  };
}
