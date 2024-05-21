/* eslint-disable complexity */
/* eslint-disable max-lines */
// Forked and simplified from https://github.com/getsentry/sentry-javascript/blob/531779300c186f89afff0c5bad9f802b2140a325/packages/nextjs/src/config/webpack.ts.

import * as fs from "fs";
import * as path from "path";

// Note: If you need to import a type from Webpack, do it in `types.ts` and export it from there. Otherwise, our
// circular dependency check thinks this file is importing from itself. See https://github.com/pahen/madge/issues/306.
import type {
  BuildContext,
  DecipherBuildOptions,
  NextConfigObject,
  WebpackConfigFunction,
  WebpackConfigObject,
  WebpackConfigObjectWithModuleRules,
  WebpackEntryProperty,
  EntryPropertyObject,
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

    if (!isServer) {
      // Tell webpack to inject the client config files (containing the client-side `Decipher.init()` call) into the appropriate output
      // bundles. Store a separate reference to the original `entry` value to avoid an infinite loop. (If we don't do
      // this, we'll have a statement of the form `x.y = () => f(x.y)`, where one of the things `f` does is call `x.y`.
      // Since we're setting `x.y` to be a callback (which, by definition, won't run until some time later), by the time
      // the function runs (causing `f` to run, causing `x.y` to run), `x.y` will point to the callback itself, rather
      // than its original value. So calling it will call the callback which will call `f` which will call `x.y` which
      // will call the callback which will call `f` which will call `x.y`... and on and on. Theoretically this could also
      // be fixed by using `bind`, but this is way simpler.)
      const origEntryProperty = newConfig.entry;
      newConfig.entry = async () =>
        addDecipherToClientEntryProperty(
          origEntryProperty,
          buildContext,
          decipherBuildOptions
        );
    }

    return newConfig;
  };
}

/**
 * Modify the webpack `entry` property so that the code in `decipher.client.config.js` is
 * included in the the necessary bundles.
 *
 * @param currentEntryProperty The value of the property before Decipher code has been injected
 * @param buildContext Object passed by nextjs containing metadata about the build
 * @returns The value which the new `entry` property (which will be a function) will return (TODO: this should return
 * the function, rather than the function's return value)
 */
async function addDecipherToClientEntryProperty(
  currentEntryProperty: WebpackEntryProperty,
  buildContext: BuildContext,
  decipherBuildOptions: DecipherBuildOptions
): Promise<EntryPropertyObject> {
  // The `entry` entry in a webpack config can be a string, array of strings, object, or function. By default, nextjs
  // sets it to an async function which returns the promise of an object of string arrays. Because we don't know whether
  // someone else has come along before us and changed that, we need to check a few things along the way. The one thing
  // we know is that it won't have gotten *simpler* in form, so we only need to worry about the object and function
  // options. See https://webpack.js.org/configuration/entry-context/#entry.

  const { dir: projectDir, dev: isDevMode } = buildContext;

  const newEntryProperty =
    typeof currentEntryProperty === "function"
      ? await currentEntryProperty()
      : { ...currentEntryProperty };

  maybeCreateDecipherClientConfigFile(projectDir, decipherBuildOptions);

  const clientDecipherConfigFileName = getClientDecipherConfigFile(projectDir);

  // we need to turn the filename into a path so webpack can find it
  const filesToInject = clientDecipherConfigFileName
    ? [`./${clientDecipherConfigFileName}`]
    : [];

  // inject into all entry points which might contain user's code
  for (const entryPointName in newEntryProperty) {
    if (
      entryPointName === "pages/_app" ||
      // entrypoint for `/app` pages
      entryPointName === "main-app"
    ) {
      addFilesToWebpackEntryPoint(
        newEntryProperty,
        entryPointName,
        filesToInject,
        isDevMode
      );
    }
  }

  return newEntryProperty;
}

/**
 * Add files to a specific element of the given `entry` webpack config property.
 *
 * @param entryProperty The existing `entry` config object
 * @param entryPointName The key where the file should be injected
 * @param filesToInsert An array of paths to the injected files
 */
function addFilesToWebpackEntryPoint(
  entryProperty: EntryPropertyObject,
  entryPointName: string,
  filesToInsert: string[],
  isDevMode: boolean
): void {
  // BIG FAT NOTE: Order of insertion seems to matter here. If we insert the new files before the `currentEntrypoint`s,
  // the Next.js dev server breaks. Because we generally still want the SDK to be initialized as early as possible we
  // still keep it at the start of the entrypoints if we are not in dev mode.

  // can be a string, array of strings, or object whose `import` property is one of those two
  const currentEntryPoint = entryProperty[entryPointName];
  let newEntryPoint = currentEntryPoint;

  if (
    typeof currentEntryPoint === "string" ||
    Array.isArray(currentEntryPoint)
  ) {
    newEntryPoint = arrayify(currentEntryPoint);
    if (newEntryPoint.some((entry) => filesToInsert.includes(entry))) {
      return;
    }

    if (isDevMode) {
      // Inserting at beginning breaks dev mode so we insert at the end
      newEntryPoint.push(...filesToInsert);
    } else {
      // In other modes we insert at the beginning so that the SDK initializes as early as possible
      newEntryPoint.unshift(...filesToInsert);
    }
  }
  // descriptor object (webpack 5+)
  else if (
    typeof currentEntryPoint === "object" &&
    "import" in currentEntryPoint
  ) {
    const currentImportValue = currentEntryPoint.import;
    const newImportValue = arrayify(currentImportValue);
    if (newImportValue.some((entry) => filesToInsert.includes(entry))) {
      return;
    }

    if (isDevMode) {
      // Inserting at beginning breaks dev mode so we insert at the end
      newImportValue.push(...filesToInsert);
    } else {
      // In other modes we insert at the beginning so that the SDK initializes as early as possible
      newImportValue.unshift(...filesToInsert);
    }

    newEntryPoint = {
      ...currentEntryPoint,
      import: newImportValue,
    };
  }
  // malformed entry point (use `console.error` rather than `logger.error` because it will always be printed, regardless
  // of SDK settings)
  else {
    // eslint-disable-next-line no-console
    console.error(
      "Decipher Logger [Error]:",
      `Could not inject SDK initialization code into entry point ${entryPointName}, as its current value is not in a recognized format.\n`,
      "Expected: string | Array<string> | { [key:string]: any, import: string | Array<string> }\n",
      `Got: ${currentEntryPoint}`
    );
  }

  entryProperty[entryPointName] = newEntryPoint;
}

function maybeCreateDecipherClientConfigFile(
  projectDir: string,
  decipherBuildOptions: DecipherBuildOptions
): void {
  const { customerId, frontendCodebaseId } = decipherBuildOptions;
  if (!customerId || !frontendCodebaseId) {
    console.error(
      "[Decipher] Please set both customerId AND frontendCodebaseId in the call to withDecipherConfig."
    );
    return;
  }
  const configFilePath = path.resolve(projectDir, "decipher.client.config.ts");

  const configContent = `/** DO NOT MODIFY THIS FILE! Update your next.config.[m]js instead */
import * as DecipherClient from "@decipher-sdk/nextjs";

DecipherClient.init({
  customerId: "${decipherBuildOptions.customerId}",
  frontendCodebaseId: "${frontendCodebaseId}",
});
`;
  fs.writeFileSync(configFilePath, configContent, { encoding: "utf8" });
}

/**
 * Searches for a `decipher.client.config.ts|js` file and returns its file name if it finds one. (ts being prioritized)
 *
 * @param projectDir The root directory of the project, where config files would be located
 */
export function getClientDecipherConfigFile(projectDir: string): string | void {
  const possibilities = [
    "decipher.client.config.ts",
    "decipher.client.config.js",
  ];

  for (const filename of possibilities) {
    if (fs.existsSync(path.resolve(projectDir, filename))) {
      return filename;
    }
  }
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
