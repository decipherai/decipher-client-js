import * as path from "path";
import type { BuildContext, DecipherBuildOptions, NextConfigObject } from "./types";

/**
 * Combine default and incoming user-provided options, accounting for whether we're building server files or
 * client files.
 */
export function getWebpackPluginOptions(buildContext: BuildContext, options: DecipherBuildOptions) {
  const { isServer, config: userNextConfig, dir: projectDir } = buildContext;

  const distDirAbsPath = path.join(
    projectDir,
    (userNextConfig as NextConfigObject).distDir || ".next"
  ); // `.next` is the default directory

  let sourcemapUploadAssets: string[] = [];
  const sourcemapUploadIgnore: string[] = [];

  if (isServer) {
    sourcemapUploadAssets.push(
      path.join(distDirAbsPath, "server", "**"), // This is normally where Next.js outputs things
      path.join(distDirAbsPath, "serverless", "**") // This was the output location for serverless Next.js
    );
  } else {
    sourcemapUploadAssets.push(
      path.join(distDirAbsPath, "static", "chunks", "**")
    );

    sourcemapUploadIgnore.push(
      path.join(distDirAbsPath, "static", "chunks", "framework-*"),
      path.join(distDirAbsPath, "static", "chunks", "framework.*"),
      path.join(distDirAbsPath, "static", "chunks", "main-*"),
      path.join(distDirAbsPath, "static", "chunks", "polyfills-*"),
      path.join(distDirAbsPath, "static", "chunks", "webpack-*")
    );
  }

  return {
    apiKey: options.apiKey, // Added to include the apiKey in the returned options
    sourcemaps: {
      rewriteSources(source: string) {
        if (source.startsWith("webpack://_N_E/")) {
          return source.replace("webpack://_N_E/", "");
        } else if (source.startsWith("webpack://")) {
          return source.replace("webpack://", "");
        } else {
          return source;
        }
      },
      assets: sourcemapUploadAssets,
      ignore: sourcemapUploadIgnore,
    },
  };
}