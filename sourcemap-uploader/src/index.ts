#!/usr/bin/env node
import { program } from "commander";
import figlet from "figlet";
import { validateAndUploadSourcemaps } from "./uploader.js";

program
  .name("@decipher-sdk/sourcemap-uploader")
  .usage("@decipher-sdk/sourcemap-uploader --path <path_to_sourcemaps>");

program
  .requiredOption(
    "-k, --api-key <string>",
    "Decipher API key, found in https://prod.getdecipher.com/settings"
  )
  .option("-p, --path [strin]", "Specifies location of sourcemaps", ".");

program.parse();

async function run(key: string, path: string) {
  console.info(
    "\x1b[35m\x1b[40m%s\x1b[0m",
    figlet.textSync("Decipher AI", { font: "Double" })
  );
  await validateAndUploadSourcemaps(key, path);
}

const options = program.opts();
const key = options.apiKey;
const path = options.path;
run(key, path);
