// Inlined from our sourcemap uploader; TODO: use the actual library.

import { glob } from "glob";
import { readFile } from "fs/promises";
import { join } from "path";

/**
 * Validates the API key and uploads sourcemaps to the server.
 *
 * @param {string} key - The API key for authentication.
 * @param {string} path - The directory path containing sourcemaps.
 */
export async function validateAndUploadSourcemaps(
  key: string,
  path: string
): Promise<void> {
  const serverUrl =
    process.env.DECIPHER_SERVER_URL || "https://www.prod.getdecipher.com";
  try {
    // Find all sourcemap files in the specified path
    const sourcemaps = glob.sync("**/*.{js,js.map}", {
      cwd: path,
      nodir: true,
      ignore: "**/node_modules/**/*",
    });

    if (sourcemaps.length === 0) {
      console.error(
        "No .js or .js.map files found in the specified directory. Please double check that you have generated sourcemaps for your app and specified the 'path' argument correctly."
      );
      return;
    }

    // Upload each sourcemap
    for (const sourcemap of sourcemaps) {
      const filePath = join(path, sourcemap);
      const fileContent = await readFile(filePath);

      const uploadResponse = await fetch(`${serverUrl}/api/upload_sourcemap`, {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
          Authorization: `Bearer ${key}`,
          "X-Filename": encodeURIComponent(sourcemap),
        },
        body: fileContent,
      });
      if (!uploadResponse.ok) {
        console.error(`Failed to upload ${sourcemap}.`);
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
