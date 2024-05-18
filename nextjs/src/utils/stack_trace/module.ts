// Forked from https://github.com/getsentry/sentry-javascript/blob/531779300c186f89afff0c5bad9f802b2140a325/packages/node/src/utils/module.ts#L1
// and related files.

import { posix, sep } from "path";

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
const splitPathRe =
  /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
/** JSDoc */
function splitPath(filename: string): string[] {
  // Truncate files names greater than 1024 characters to avoid regex dos
  // https://github.com/getsentry/sentry-javascript/pull/8737#discussion_r1285719172
  const truncated =
    filename.length > 1024 ? `<truncated>${filename.slice(-1024)}` : filename;
  const parts = splitPathRe.exec(truncated);
  return parts ? parts.slice(1) : [];
}

export function dirname(path: string): string {
  const result = splitPath(path);
  const root = result[0];
  let dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return ".";
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.slice(0, dir.length - 1);
  }

  return root + dir;
}
/** normalizes Windows paths */
function normalizeWindowsPath(path: string): string {
  return path
    .replace(/^[A-Z]:/, "") // remove Windows-style prefix
    .replace(/\\/g, "/"); // replace all `\` instances with `/`
}

/** Creates a function that gets the module name from a filename */
export function createGetModuleFromFilename(
  basePath: string = process.argv[1] ? dirname(process.argv[1]) : process.cwd(),
  isWindows: boolean = sep === "\\"
): (filename: string | undefined) => string | undefined {
  const normalizedBase = isWindows ? normalizeWindowsPath(basePath) : basePath;

  return (filename: string | undefined) => {
    if (!filename) {
      return;
    }

    const normalizedFilename = isWindows
      ? normalizeWindowsPath(filename)
      : filename;

    // eslint-disable-next-line prefer-const
    let { dir, base: file, ext } = posix.parse(normalizedFilename);

    if (ext === ".js" || ext === ".mjs" || ext === ".cjs") {
      file = file.slice(0, ext.length * -1);
    }

    if (!dir) {
      // No dirname whatsoever
      dir = ".";
    }

    const n = dir.lastIndexOf("/node_modules");
    if (n > -1) {
      return `${dir.slice(n + 14).replace(/\//g, ".")}:${file}`;
    }

    // Let's see if it's a part of the main module
    // To be a part of main module, it has to share the same base
    if (dir.startsWith(normalizedBase)) {
      let moduleName = dir.slice(normalizedBase.length + 1).replace(/\//g, ".");

      if (moduleName) {
        moduleName += ":";
      }
      moduleName += file;

      return moduleName;
    }

    return file;
  };
}
