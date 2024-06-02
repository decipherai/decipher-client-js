import * as path from "path";
import { UnpluginOptions } from "unplugin";
import { v4 as uuidv4 } from "uuid";
import {
  getDebugIdSnippet,
  Options,
  decipherUnpluginFactory,
  stringToUUID,
} from "@decipher-sdk/bundler-plugin-core";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore webpack is a peer dep
import * as webback4or5 from "webpack";

interface BannerPluginCallbackArg {
  chunk?: {
    hash?: string;
  };
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
            const debugId = arg?.chunk?.hash
              ? stringToUUID(arg.chunk.hash)
              : uuidv4();
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
        (compilation:any, callback: () => void) => {
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
export const decipherWebpackPlugin: (options?: Options) => any =
  decipherUnplugin.webpack;
