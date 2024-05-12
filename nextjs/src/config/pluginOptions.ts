// Forked and modified from https://github.com/getsentry/sentry-javascript-bundler-plugins/blob/fd2a99c4ffb79974db1830ab59cd59a32433f60c/packages/bundler-plugin-core/src/types.ts#L1

export interface PluginOptions {
  /**
   * The slug of the Decipher organization associated with the app.
   *
   * This value can also be specified via the `DECIPHER_ORG` environment variable.
   */
  org?: string;

  /**
   * The slug of the Decipher project associated with the app.
   *
   * This value can also be specified via the `DECIPHER_PROJECT` environment variable.
   */
  project?: string;

  /**
   * The authentication token to use for all communication with Decipher.
   * Can be obtained from https://prod.getdecipher.com/settings.
   *
   * This value can also be specified via the `DECIPHER_AUTH_TOKEN` environment variable.
   */
  apiKey?: string;

  /**
   * The base URL of your Decipher instance. Use this if you are using a self-hosted
   * or Decipher instance other than prod.getdecipher.com.
   *
   * This value can also be set via the `DECIPHER_URL` environment variable.
   *
   * Defaults to https://prod.getdecipher.com/, which is the correct value for SaaS customers.
   */
  url?: string;

  /**
   * Headers added to every outgoing network request.
   */
  headers?: Record<string, string>;

  /**
   * Print useful debug information.
   *
   * Defaults to `false`.
   */
  debug?: boolean;

  /**
   * Suppresses all logs.
   *
   * Defaults to `false`.
   */
  silent?: boolean;

  /**
   * When an error occurs during release creation or sourcemaps upload, the plugin will call this function.
   *
   * By default, the plugin will simply throw an error, thereby stopping the bundling process.
   * If an `errorHandler` callback is provided, compilation will continue, unless an error is
   * thrown in the provided callback.
   *
   * To allow compilation to continue but still emit a warning, set this option to the following:
   *
   * ```js
   * (err) => {
   *   console.warn(err);
   * }
   * ```
   */
  errorHandler?: (err: Error) => void;

  /**
   * If set to true, internal plugin errors and performance data will be sent to Decipher.
   *
   * At Decipher we like to use Decipher ourselves to deliver faster and more stable products.
   * We're very careful of what we're sending. We won't collect anything other than error
   * and high-level performance data. We will never collect your code or any details of the
   * projects in which you're using this plugin.
   *
   * Defaults to `true`.
   */
  telemetry?: boolean;

  /**
   * Completely disables all functionality of the plugin.
   *
   * Defaults to `false`.
   */
  disable?: boolean;

  /**
   * Options for source maps uploading.
   */
  sourcemaps?: {
    /**
     * A glob or an array of globs that specifies the build artifacts that should be uploaded to Decipher.
     *
     * If this option is not specified, the plugin will try to upload all JavaScript files and source map files that are created during build.
     *
     * The globbing patterns follow the implementation of the `glob` package. (https://www.npmjs.com/package/glob)
     *
     * Use the `debug` option to print information about which files end up being uploaded.
     */
    assets?: string | string[];

    /**
     * A glob or an array of globs that specifies which build artifacts should not be uploaded to Decipher.
     *
     * Default: `[]`
     *
     * The globbing patterns follow the implementation of the `glob` package. (https://www.npmjs.com/package/glob)
     *
     * Use the `debug` option to print information about which files end up being uploaded.
     */
    ignore?: string | string[];

    /**
     * Hook to rewrite the `sources` field inside the source map before being uploaded to Decipher. Does not modify the actual source map.
     *
     * Defaults to making all sources relative to `process.cwd()` while building.
     */
    rewriteSources?: (source: string, map: any) => string;

    /**
     * A glob or an array of globs that specifies the build artifacts that should be deleted after the artifact upload to Decipher has been completed.
     *
     * The globbing patterns follow the implementation of the `glob` package. (https://www.npmjs.com/package/glob)
     *
     * Use the `debug` option to print information about which files end up being deleted.
     *
     * @deprecated Use `filesToDeleteAfterUpload` instead.
     */
    // TODO(v3): Remove this option.
    deleteFilesAfterUpload?: string | string[];

    /**
     * A glob or an array of globs that specifies the build artifacts that should be deleted after the artifact upload to Decipher has been completed.
     *
     * The globbing patterns follow the implementation of the `glob` package. (https://www.npmjs.com/package/glob)
     *
     * Use the `debug` option to print information about which files end up being deleted.
     */
    filesToDeleteAfterUpload?: string | string[];
  };

  /**
   * Options related to managing the Decipher releases for a build.
   *
   */
  release?: {
    /**
     * Unique identifier for the release you want to create.
     *
     * This value can also be specified via the `DECIPHER_RELEASE` environment variable.
     *
     * Defaults to automatically detecting a value for your environment.
     * This includes values for Cordova, Heroku, AWS CodeBuild, CircleCI, Xcode, and Gradle, and otherwise uses the git `HEAD`'s commit SHA.
     * (the latter requires access to git CLI and for the root directory to be a valid repository)
     *
     * If you didn't provide a value and the plugin can't automatically detect one, no release will be created.
     */
    name?: string;

    /**
     * Whether the plugin should inject release information into the build for the SDK to pick it up when sending events. (recommended)
     *
     * Defaults to `true`.
     */
    inject?: boolean;

    /**
     * Whether the plugin should create a release on Decipher during the build.
     * Note that a release may still appear in Decipher even if this is value is `false` because any Decipher event that has a release value attached will automatically create a release.
     * (for example via the `inject` option)
     *
     * Defaults to `true`.
     */
    create?: boolean;

    /**
     * Whether the Decipher release should be automatically finalized (meaning an end timestamp is added) after the build ends.
     *
     * Defaults to `true`.
     */
    finalize?: boolean;

    /**
     * Unique identifier for the distribution, used to further segment your release.
     * Usually your build number.
     */
    dist?: string;

    /**
     * Version control system remote name.
     *
     * This value can also be specified via the `DECIPHER_VSC_REMOTE` environment variable.
     *
     * Defaults to 'origin'.
     */
    vcsRemote?: string;

    //   /**
    //    * Associates the release with its commits in Decipher.
    //    */
    //   setCommits?: SetCommitsOptions;

    //   /**
    //    * Adds deployment information to the release in Decipher.
    //    */
    //   deploy?: DeployOptions;

    /**
     * Remove all previously uploaded artifacts for this release on Decipher before the upload.
     *
     * Defaults to `false`.
     *
     * @deprecated `cleanArtifacts` is deprecated and currently doesn't do anything. Historically it was needed
     * since uploading the same artifacts twice was not allowed. Nowadays, when uploading artifacts with the same name
     * more than once to the same release on Decipher, Decipher will prefer the most recent artifact for source mapping.
     */
    // TODO(v3): Remove this option
    cleanArtifacts?: boolean;

    /**
     * Legacy method of uploading source maps. (not recommended unless necessary)
     *
     * One or more paths that should be scanned recursively for sources.
     *
     * Each path can be given as a string or an object with more specific options.
     *
     * The modern version of doing source maps upload is more robust and way easier to get working but has to inject a very small snippet of JavaScript into your output bundles.
     * In situations where this leads to problems (e.g subresource integrity) you can use this option as a fallback.
     */
    uploadLegacySourcemaps?:
      | string
      | IncludeEntry
      | Array<string | IncludeEntry>;
  };

  /**
   * Options related to bundle size optimizations.
   */
  bundleSizeOptimizations?: {
    /**
     * If set to true, the plugin will try to tree-shake debug statements out.
     * Note that the success of this depends on tree shaking generally being enabled in your build.
     */
    excludeDebugStatements?: boolean;

    /**
     * If set to true, the plugin will try to tree-shake performance monitoring statements out.
     * Note that the success of this depends on tree shaking generally being enabled in your build.
     * Attention: DO NOT enable this when you're using any performance monitoring-related SDK features (e.g. Decipher.startTransaction()).
     * This flag is intended to be used in combination with packages like @decipher-sdk/nextjs,
     * which automatically include performance monitoring functionality.
     */
    excludePerformanceMonitoring?: boolean;

    /**
     * If set to true, the plugin will try to tree-shake Session Replay's Canvas recording functionality out.
     * You can safely do this when you do not want to capture any Canvas activity via Replay.
     * Note that the success of this depends on tree shaking generally being enabled in your build.
     *
     * @deprecated Versions v7.78.0 and later of the Decipher JavaScript SDKs do not include canvas support by default, making this option redundant.
     */
    excludeReplayCanvas?: boolean;

    /**
     * If set to true, the plugin will try to tree-shake Session Replay's Shadow DOM recording functionality out.
     * You can safely do this when you do not want to capture any Shadow DOM activity via Replay.
     * Note that the success of this depends on tree shaking generally being enabled in your build.
     */
    excludeReplayShadowDom?: boolean;

    /**
     * If set to true, the plugin will try to tree-shake Session Replay's IFrame recording functionality out.
     * You can safely do this when you do not want to capture any IFrame activity via Replay.
     * Note that the success of this depends on tree shaking generally being enabled in your build.
     */
    excludeReplayIframe?: boolean;

    /**
     * If set to true, the plugin will try to tree-shake Session Replay's Compression Web Worker out.
     * You should only do this if you manually host a compression worker and configure it in your Replay config via `workerUrl`.
     * Note that the success of this depends on tree shaking generally being enabled in your build.
     */
    excludeReplayWorker?: boolean;
  };

  /**
   * Options related to react component name annotations.
   * Disabled by default, unless a value is set for this option.
   * When enabled, your app's DOM will automatically be annotated during build-time with their respective component names.
   * This will unlock the capability to search for Replays in Decipher by component name, as well as see component names in breadcrumbs and performance monitoring.
   * Please note that this feature is not currently supported by the esbuild bundler plugins, and will only annotate React components
   */
  reactComponentAnnotation?: {
    /**
     * Whether the component name annotate plugin should be enabled or not.
     */
    enabled?: boolean;
  };

  /**
   * Options that are considered experimental and subject to change.
   *
   * @experimental API that does not follow semantic versioning and may change in any release
   */
  _experiments?: {
    /**
     * If set to true, the plugin will inject an additional `DECIPHER_BUILD_INFO` variable.
     * This contains information about the build, e.g. dependencies, node version and other useful data.
     *
     * Defaults to `false`.
     */
    injectBuildInformation?: boolean;

    //   /**
    //    * Metadata associated with this module.
    //    *
    //    * The metadata is serialized and can be looked up at runtime by filename.
    //    *
    //    * Metadata can either be passed directly or alternatively a callback can be provided that will be
    //    * called with the following arguments:
    //    * - `org`: The organization slug.
    //    * - `project`: The project slug.
    //    * - `release`: The release name.
    //    */
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   moduleMetadata?: any | ModuleMetadataCallback;
  };

  /**
   * Options that are useful for building wrappers around the plugin. You likely don't need these options unless you
   * are distributing a tool that depends on this plugin
   */
  _metaOptions?: {
    /**
     * Overrides the prefix that come before logger messages. (e.g. `[some-prefix] Info: Some log message`)
     *
     * Example value: `[decipher-webpack-plugin (client)]`
     */
    loggerPrefixOverride?: string;
  };
}

export type IncludeEntry = {
  /**
   * One or more paths to scan for files to upload.
   */
  paths: string[];

  /**
   * One or more paths to ignore during upload.
   * Overrides entries in ignoreFile file.
   *
   * Defaults to `['node_modules']` if neither `ignoreFile` nor `ignore` is set.
   */
  ignore?: string | string[];

  /**
   * Path to a file containing list of files/directories to ignore.
   *
   * Can point to `.gitignore` or anything with the same format.
   */
  ignoreFile?: string;

  /**
   * Array of file extensions of files to be collected for the file upload.
   *
   * By default the following file extensions are processed: js, map, jsbundle and bundle.
   */
  ext?: string[];

  /**
   * URL prefix to add to the beginning of all filenames.
   * Defaults to '~/' but you might want to set this to the full URL.
   *
   * This is also useful if your files are stored in a sub folder. eg: url-prefix '~/static/js'.
   */
  urlPrefix?: string;

  /**
   * URL suffix to add to the end of all filenames.
   * Useful for appending query parameters.
   */
  urlSuffix?: string;

  /**
   * When paired with the `rewrite` option, this will remove a prefix from filename references inside of
   * sourcemaps. For instance you can use this to remove a path that is build machine specific.
   * Note that this will NOT change the names of uploaded files.
   */
  stripPrefix?: string[];

  /**
   * When paired with the `rewrite` option, this will add `~` to the `stripPrefix` array.
   *
   * Defaults to `false`.
   */
  stripCommonPrefix?: boolean;

  /**
   * Determines whether decipher-cli should attempt to link minified files with their corresponding maps.
   * By default, it will match files and maps based on name, and add a Sourcemap header to each minified file
   * for which it finds a map. Can be disabled if all minified files contain sourceMappingURL.
   *
   * Defaults to true.
   */
  sourceMapReference?: boolean;

  /**
   * Enables rewriting of matching source maps so that indexed maps are flattened and missing sources
   * are inlined if possible.
   *
   * Defaults to true
   */
  rewrite?: boolean;

  /**
   * When `true`, attempts source map validation before upload if rewriting is not enabled.
   * It will spot a variety of issues with source maps and cancel the upload if any are found.
   *
   * Defaults to `false` as this can cause false positives.
   */
  validate?: boolean;
};
