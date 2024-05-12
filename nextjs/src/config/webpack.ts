/* eslint-disable complexity */
/* eslint-disable max-lines */

// Note: If you need to import a type from Webpack, do it in `types.ts` and export it from there. Otherwise, our
// circular dependency check thinks this file is importing from itself. See https://github.com/pahen/madge/issues/306.
import type {
  BuildContext,
  DecipherBuildOptions,
  NextConfigObject,
  WebpackConfigFunction,
  WebpackConfigObject,
  WebpackConfigObjectWithModuleRules,
} from "./types";
import { getWebpackPluginOptions } from "./webpackPluginOptions";
import { decipherWebpackPlugin } from "./decipherWebpackPlugin";
/**
 * Checks whether the given input is already an array, and if it isn't, wraps it in one.
 *
 * @param maybeArray Input to turn into an array, if necessary
 * @returns The input, if already an array, or an array with the input as the only element, if not
 */
export function arrayify<T = unknown>(maybeArray: T | T[]): T[] {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}

/**
 * Construct the function which will be used as the nextjs config's `webpack` value.
 *
 * Sets:
 *   - `devtool`, to ensure high-quality sourcemaps are generated
 *   - `plugins`, to add DecipherWebpackPlugin
 *
 * @param userNextConfig The user's existing nextjs config, as passed to `withDecipherConfig`
 * @returns The function to set as the nextjs config's `webpack` value
 */
export function constructWebpackConfigFunction(
  userNextConfig: NextConfigObject = {},
  decipherBuildOptions: DecipherBuildOptions
): WebpackConfigFunction {
  return function newWebpackFunction(
    incomingConfig: WebpackConfigObject,
    buildContext: BuildContext
  ): WebpackConfigObject {
    const { isServer, dev: isDev } = buildContext;
    let rawNewConfig = { ...incomingConfig };

    if (
      "webpack" in userNextConfig &&
      typeof userNextConfig.webpack === "function"
    ) {
      rawNewConfig = userNextConfig.webpack(rawNewConfig, buildContext);
    }

    const newConfig = setUpModuleRules(rawNewConfig);

    if (!isDev) {
      if (decipherWebpackPlugin) {
        newConfig.devtool = !isServer ? "hidden-source-map" : "source-map";

        newConfig.plugins = newConfig.plugins || [];
        const decipherWebpackPluginInstance = decipherWebpackPlugin(
          getWebpackPluginOptions(buildContext, decipherBuildOptions)
        );
        decipherWebpackPluginInstance._name = "decipher-webpack-plugin";
        newConfig.plugins.push(decipherWebpackPluginInstance);
      }
    }

    return newConfig;
  };
}
/**
 * Ensure that `newConfig.module.rules` exists. Modifies the given config in place but also returns it in order to
 * change its type.
 *
 * @param newConfig A webpack config object which may or may not contain `module` and `module.rules`
 * @returns The same object, with an empty `module.rules` array added if necessary
 */
function setUpModuleRules(
  newConfig: WebpackConfigObject
): WebpackConfigObjectWithModuleRules {
  newConfig.module = {
    ...newConfig.module,
    rules: [...(newConfig.module?.rules || [])],
  };
  // Surprising that we have to assert the type here, since we've demonstrably guaranteed the existence of
  // `newConfig.module.rules` just above, but ¯\_(ツ)_/¯
  return newConfig as WebpackConfigObjectWithModuleRules;
}
