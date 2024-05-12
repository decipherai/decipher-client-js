import { PluginOptions } from "./pluginOptions";
import * as path from "path";
import { UnpluginOptions } from "unplugin";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

import { decipherUnpluginFactory } from "./pluginFactory";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore webpack is a peer dep
import * as webback4or5 from "webpack";

export function getDebugIdSnippet(debugId: string): string {
  return `;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._decipherDebugIds=e._decipherDebugIds||{},e._decipherDebugIds[n]="${debugId}",e._decipherDebugIdIdentifier="decipher-dbid-${debugId}")}catch(e){}}();`;
}

interface BannerPluginCallbackArg {
  chunk?: {
    hash?: string;
  };
}

export function stringToUUID(str: string): string {
  const md5sum = crypto.createHash("md5");
  md5sum.update(str);
  const md5Hash = md5sum.digest("hex");

  // Position 16 is fixed to either 8, 9, a, or b in the uuid v4 spec (10xx in binary)
  // RFC 4122 section 4.4
  const v4variant = ["8", "9", "a", "b"][md5Hash.substring(16, 17).charCodeAt(0) % 4] as string;

  return (
    md5Hash.substring(0, 8) +
    "-" +
    md5Hash.substring(8, 12) +
    "-4" +
    md5Hash.substring(13, 16) +
    "-" +
    v4variant +
    md5Hash.substring(17, 20) +
    "-" +
    md5Hash.substring(20)
  ).toLowerCase();
}

function webpackDebugIdInjectionPlugin(): UnpluginOptions {
  return {
    name: "decipher-webpack-debug-id-injection-plugin",
    webpack(compiler) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore webpack version compatibility shenanigans
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const BannerPlugin =
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore webpack version compatibility shenanigans
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        compiler?.webpack?.BannerPlugin ||
        webback4or5?.BannerPlugin ||
        webback4or5?.default?.BannerPlugin;
      compiler.options.plugins = compiler.options.plugins || [];
      compiler.options.plugins.push(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call
        new BannerPlugin({
          raw: true,
          include: /\.(js|ts|jsx|tsx|mjs|cjs)$/,
          banner: (arg?: BannerPluginCallbackArg) => {
            const debugId = arg?.chunk?.hash ? stringToUUID(arg.chunk.hash) : uuidv4();
            return getDebugIdSnippet(debugId);
          },
        })
      );
    },
  };
}

function webpackDebugIdUploadPlugin(
  upload: (buildArtifacts: string[]) => Promise<void>
): UnpluginOptions {
  const pluginName = "decipher-webpack-debug-id-upload-plugin";
  return {
    name: pluginName,
    webpack(compiler) {
      compiler.hooks.afterEmit.tapAsync(
        pluginName,
        (compilation, callback: () => void) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          const outputPath =
            (compilation.outputOptions.path as string | undefined) ??
            path.resolve();
          const buildArtifacts = Object.keys(
            compilation.assets as Record<string, unknown>
          ).map((asset) => path.join(outputPath, asset));
          void upload(buildArtifacts).then(() => {
            callback();
          });
        }
      );
    },
  };
}

const decipherUnplugin = decipherUnpluginFactory({
  debugIdInjectionPlugin: webpackDebugIdInjectionPlugin,
  debugIdUploadPlugin: webpackDebugIdUploadPlugin,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decipherWebpackPlugin: (options?: PluginOptions) => any =
  decipherUnplugin.webpack;
