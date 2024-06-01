
import { Logger, createLogger } from "./logger";
import { createUnplugin, UnpluginOptions } from "unplugin";
import { createDebugIdUploadFunction } from "./debug-id-upload";
import { PluginOptions } from "./pluginOptions";
import { normalizeUserOptions } from "./options-mapping";

interface DecipherUnpluginFactoryOptions {
  debugIdInjectionPlugin: (logger: Logger) => UnpluginOptions;
  debugIdUploadPlugin: (
    upload: (buildArtifacts: string[]) => Promise<void>
  ) => UnpluginOptions;
}

/**
 * The Decipher bundler plugin concerns itself with one thing:
 * - Sourcemaps upload
 *
 * Source maps upload:
 *
 * The Decipher bundler plugin will also take care of uploading source maps to Decipher. This
 * is all done in the `writeBundle` hook. In this hook the Decipher plugin will execute the
 * release creation pipeline (more later):
 *
 * 1. Upload sourcemaps based on `include` and source-map-specific options
 *
 * This release creation pipeline relies on Decipher CLI to execute the upload.
 */
export function decipherUnpluginFactory({
  debugIdInjectionPlugin,
  debugIdUploadPlugin,
}: DecipherUnpluginFactoryOptions) {
  return createUnplugin<PluginOptions | undefined, true>(
    (userOptions = {}, unpluginMetaContext) => {
      const logger = createLogger({
        prefix:
          userOptions._metaOptions?.loggerPrefixOverride ??
          `[decipher-${unpluginMetaContext.framework}-plugin]`,
        silent: userOptions.silent ?? false,
        debug: userOptions.debug ?? false,
      });


      const options = normalizeUserOptions(userOptions);
      const plugins: UnpluginOptions[] = [];
      plugins.push(debugIdInjectionPlugin(logger));
      plugins.push(
        debugIdUploadPlugin(
          createDebugIdUploadFunction({
            logger: logger,
            apiKey: options.apiKey || "UNKNOWN_DECIPHER_API_KEY",
            assets: options.sourcemaps?.assets,
            ignore: options.sourcemaps?.ignore,
            filesToDeleteAfterUpload:
              options.sourcemaps?.filesToDeleteAfterUpload ??
              options.sourcemaps?.deleteFilesAfterUpload,
            dist: options.release.dist,
            releaseName: options.release.name,
            rewriteSourcesHook: options.sourcemaps?.rewriteSources,
          })
        )
      );

      return plugins;
    }
  );
}
