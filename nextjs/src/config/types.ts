// Forked and modified from https://github.com/getsentry/sentry-javascript/blob/255bf966d7471966b5f67704d1cbf069481a5c65/packages/nextjs/src/config/types.ts#L1

import type { DefinePlugin, WebpackPluginInstance } from 'webpack';

export type DecipherBuildOptions = {
    apiKey: string,
}

// Export this from here because importing something from Webpack (the library) in `webpack.ts` confuses the heck out of
// madge, which we use for circular dependency checking. We've manually excluded this file from the check (which is
// safe, since it only includes types), so we can import it here without causing madge to fail. See
// https://github.com/pahen/madge/issues/306.
export type { WebpackPluginInstance };

// The first argument to `withDecipherConfig` (which is the user's next config).
export type ExportedNextConfig = NextConfigObject | NextConfigFunction;

// Vendored from Next.js (this type is not complete - extend if necessary)
type NextRewrite = {
  source: string;
  destination: string;
};

export type NextConfigObject = {
  // Custom webpack options
  webpack?: WebpackConfigFunction | null;
  // Whether to build serverless functions for all pages, not just API routes. Removed in nextjs 12+.
  target?: 'server' | 'experimental-serverless-trace';
  // The output directory for the built app (defaults to ".next")
  distDir?: string;
  // URL location of `_next/static` directory when hosted on a CDN
  assetPrefix?: string;
  // The root at which the nextjs app will be served (defaults to "/")
  basePath?: string;
  // Config which will be available at runtime
  publicRuntimeConfig?: { [key: string]: unknown };
  // File extensions that count as pages in the `pages/` directory
  pageExtensions?: string[];
  // Whether Next.js should do a static export
  output?: string;
  // Paths to reroute when requested
  rewrites?: () => Promise<
    | NextRewrite[]
    | {
        beforeFiles?: NextRewrite[];
        afterFiles?: NextRewrite[];
        fallback?: NextRewrite[];
      }
  >;
  // Next.js experimental options
  experimental?: {
    instrumentationHook?: boolean;
  };
};

export type NextConfigFunction = (
  phase: string,
  defaults: { defaultConfig: NextConfigObject },
) => NextConfigObject | PromiseLike<NextConfigObject>;

/**
 * Webpack config
 */

// The two possible formats for providing custom webpack config in `next.config.js`
export type WebpackConfigFunction = (config: WebpackConfigObject, options: BuildContext) => WebpackConfigObject;
export type WebpackConfigObject = {
  devtool?: string;
  plugins?: Array<WebpackPluginInstance>;
  entry: WebpackEntryProperty;
  output: { filename: string; path: string };
  target: string;
  context: string;
  ignoreWarnings?: { module?: RegExp }[]; // Note: The interface for `ignoreWarnings` is larger but we only need this. See https://webpack.js.org/configuration/other-options/#ignorewarnings
  resolve?: {
    modules?: string[];
    alias?: { [key: string]: string | boolean };
  };
  module?: {
    rules: Array<WebpackModuleRule>;
  };
} & {
  // Other webpack options
  [key: string]: unknown;
};

// A convenience type to save us from having to assert the existence of `module.rules` over and over
export type WebpackConfigObjectWithModuleRules = WebpackConfigObject & Required<Pick<WebpackConfigObject, 'module'>>;

// Information about the current build environment
export type BuildContext = {
  dev: boolean;
  isServer: boolean;
  buildId: string;
  dir: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any;
  webpack: {
    version: string;
    DefinePlugin: typeof DefinePlugin;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultLoaders: any; // needed for type tests (test:types)
  totalPages: number; // needed for type tests (test:types)
  nextRuntime?: 'nodejs' | 'edge'; // Added in Next.js 12+
};

/**
 * Webpack `entry` config
 */

// For our purposes, the value for `entry` is either an object, or an async function which returns such an object
export type WebpackEntryProperty = EntryPropertyObject | EntryPropertyFunction;

export type EntryPropertyObject = {
  [key: string]: EntryPointValue;
};

export type EntryPropertyFunction = () => Promise<EntryPropertyObject>;

// Each value in that object is either a string representing a single entry point, an array of such strings, or an
// object containing either of those, along with other configuration options. In that third case, the entry point(s) are
// listed under the key `import`.
export type EntryPointValue = string | Array<string> | EntryPointObject;
export type EntryPointObject = { import: string | Array<string> };

/**
 * Webpack `module.rules` entry
 */

export type WebpackModuleRule = {
  test?: string | RegExp | ((resourcePath: string) => boolean);
  include?: Array<string | RegExp> | RegExp;
  exclude?: (filepath: string) => boolean;
  use?: ModuleRuleUseProperty | Array<ModuleRuleUseProperty>;
  oneOf?: Array<WebpackModuleRule>;
};

export type ModuleRuleUseProperty = {
  loader?: string;
  options?: Record<string, unknown>;
};

