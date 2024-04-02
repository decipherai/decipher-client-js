#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { program } from "commander";
import figlet from "figlet";
import { validateAndUploadSourcemaps } from "./uploader.js";
program
    .name("@decipher-sdk/sourcemap-uploader")
    .usage("@decipher-sdk/sourcemap-uploader --path <path_to_sourcemaps>");
program
    .requiredOption("-k, --api-key <string>", "Decipher API key, found in https://prod.getdecipher.com/settings")
    .option("-p, --path [strin]", "Specifies location of sourcemaps", ".");
program.parse();
function run(key, path) {
    return __awaiter(this, void 0, void 0, function* () {
        console.info("\x1b[35m\x1b[40m%s\x1b[0m", figlet.textSync("Decipher AI", { font: "Double" }));
        yield validateAndUploadSourcemaps(key, path);
    });
}
const options = program.opts();
const key = options.apiKey;
const path = options.path;
run(key, path);
