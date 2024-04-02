import fetch from "node-fetch";
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
    process.env.DECIPHER_SERVER_URL || "https://prod.getdecipher.com";
  try {
    // Validate the API key
    const validationResponse = await fetch(`${serverUrl}/api/validate_key`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    });
    const validationData: any = await validationResponse.json();

    if (!validationData.success) {
      console.error("API key validation failed.");
      return;
    }

    // Find all sourcemap files in the specified path
    const sourcemaps = glob.sync("**/*.{js,js.map}", {
      cwd: path,
      nodir: true,
      ignore: "**/node_modules/**/*",
    });

    if (sourcemaps.length === 0) {
      console.error(
        "No .js or .js.map files found in the specified directory. Please double check that you have generated sourcemaps for your app."
      );
      return;
    }

    if (sourcemaps.length === 0) {
      console.log("No sourcemaps found in the specified path.");
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

      if (uploadResponse.ok) {
        console.log(`Uploaded ${sourcemap} successfully.`);
      } else {
        console.error(`Failed to upload ${sourcemap}.`);
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
