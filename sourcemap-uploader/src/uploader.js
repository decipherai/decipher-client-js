var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
import { glob } from "glob";
import { readFile } from "fs/promises";
import { join } from "path";
export function validateAndUploadSourcemaps(key, path) {
    return __awaiter(this, void 0, void 0, function* () {
        const serverUrl = process.env.DECIPHER_SERVER_URL || "https://prod.getdecipher.com";
        try {
            const validationResponse = yield fetch(`${serverUrl}/api/validate_key`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${key}`,
                },
            });
            const validationData = yield validationResponse.json();
            if (!validationData.success) {
                console.error("API key validation failed.");
                return;
            }
            const sourcemaps = glob.sync("**/*.{js,js.map}", {
                cwd: path,
                nodir: true,
                ignore: "**/node_modules/**/*",
            });
            if (sourcemaps.length === 0) {
                console.error("No .js or .js.map files found in the specified directory. Please double check that you have generated sourcemaps for your app.");
                return;
            }
            if (sourcemaps.length === 0) {
                console.log("No sourcemaps found in the specified path.");
                return;
            }
            for (const sourcemap of sourcemaps) {
                const filePath = join(path, sourcemap);
                const fileContent = yield readFile(filePath);
                const uploadResponse = yield fetch(`${serverUrl}/api/upload_sourcemap`, {
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
                }
                else {
                    console.error(`Failed to upload ${sourcemap}.`);
                }
            }
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    });
}
