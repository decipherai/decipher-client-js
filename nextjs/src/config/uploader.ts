// Inlined from our sourcemap uploader; TODO: use the actual library.

import { glob } from "glob";
import { readFile } from "fs/promises";
import { join } from "path";
import fetch from "cross-fetch";

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
    const files = glob.sync("**/*.{js,js.map}", {
      cwd: path,
      nodir: true,
      ignore: "**/node_modules/**/*",
    });

    if (files.length === 0) {
      console.error(
        "[Decipher] Unable to find sourcemaps; something went wrong when processing them."
      );
      return;
    }
    const sortedFiles = files.sort((a, b) => {
      if (
        a.endsWith(".js.map") &&
        b.endsWith(".js") &&
        a.slice(0, -7) === b.slice(0, -3)
      ) {
        return -1;
      } else if (
        b.endsWith(".js.map") &&
        a.endsWith(".js") &&
        b.slice(0, -7) === a.slice(0, -3)
      ) {
        return 1;
      }
      return a.localeCompare(b);
    });

    const timestamp = new Date().toISOString();
    for (const file of sortedFiles) {
      const filePath = join(path, file);
      const fileContent = await readFile(filePath);
      const uploadResponse = await fetch(`${serverUrl}/api/upload_sourcemap`, {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
          Authorization: `Bearer ${key}`,
          "X-Filename": encodeURIComponent(file),
          "X-Timestamp": timestamp,
        },
        body: fileContent,
      });
      if (!uploadResponse.ok) {
        console.error(`[Decipher] Failed to upload ${file}.`);
      }
    }
  } catch (error) {
    console.error("[Decipher] An error occurred during sourcmap upload:", error);
  }
}
