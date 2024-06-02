import { Options as UserOptions } from "./types";

export type NormalizedOptions = ReturnType<typeof normalizeUserOptions>;

export const DECIPHER_SAAS_URL = "https://prod.getdecipher.com";

export function normalizeUserOptions(userOptions: UserOptions) {
  const options = {
    org: userOptions.org ?? process.env["DECIPHER_ORG"],
    project: userOptions.project ?? process.env["DECIPHER_PROJECT"],
    apiKey: userOptions.apiKey ?? process.env["DECIPHER_API_KEY"],
    url: userOptions.url ?? process.env["DECIPHER_URL"] ?? DECIPHER_SAAS_URL,
    headers: userOptions.headers,
    debug: userOptions.debug ?? false,
    silent: userOptions.silent ?? false,
    errorHandler: userOptions.errorHandler,
    telemetry: userOptions.telemetry ?? true,
    disable: userOptions.disable ?? false,
    sourcemaps: userOptions.sourcemaps,
    release: {
      ...userOptions.release,
      name:
        userOptions.release?.name ??
        process.env["DECIPHER_RELEASE"] ??
        "Decipher release", // TODO update
      inject: userOptions.release?.inject ?? true,
      create: userOptions.release?.create ?? true,
      finalize: userOptions.release?.finalize ?? true,
      vcsRemote:
        userOptions.release?.vcsRemote ??
        process.env["DECIPHER_VSC_REMOTE"] ??
        "origin",
    },
    bundleSizeOptimizations: userOptions.bundleSizeOptimizations,
    reactComponentAnnotation: userOptions.reactComponentAnnotation,
    _experiments: userOptions._experiments ?? {},
  };

  return options;
}

// TODO: implement
export function validateOptions(
  // options: NormalizedOptions,
  // logger: Logger
): boolean {
  // TODO: implement
  return true;
}
