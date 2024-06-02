import { Logger, createLogger } from "./logger";
import { createUnplugin, UnpluginOptions } from "unplugin";
import { createDebugIdUploadFunction } from "./debug-id-upload";
import { Options } from "./types";
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
  return createUnplugin<Options | undefined, true>(
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


export function getDebugIdSnippet(debugId: string): string {
  return `;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._decipherDebugIds=e._decipherDebugIds||{},e._decipherDebugIds[n]="${debugId}",e._decipherDebugIdIdentifier="decipher-dbid-${debugId}")}catch(e){}}();`;
}

export { stringToUUID } from "./utils";

export type { Options } from "./types";
export type { Logger } from "./logger";