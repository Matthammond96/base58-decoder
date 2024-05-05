#!/usr/bin/env node
import fs from "fs";
import { base58_to_binary } from "base58-js";

const [, , encodedString, outputPath] = process.argv;

/**
 * @param {string} encodedString
 * @param {string} outputPath
 */
function main(encodedString, outputPath) {
  if (!encodedString) return console.error("Error: No encoded string found.");

  const binaryResponse = [...base58_to_binary(encodedString)];
  const binaryString = `[${binaryResponse.join(",")}]`;

  if (!outputPath) return console.log(binaryString);

  try {
    // Check if folders exist and create when not to avoid writeFile errors
    const folderPath = outputPath.match("(.+)/([^/]+)");
    if (folderPath) {
      const folders = folderPath[1].split("/");

      let dir = "";

      for (let folder of folders) {
        dir = `${dir}${folder}/`;
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
      }
    }

    fs.writeFileSync(outputPath, Buffer.from(binaryString));

    console.log(`Successfully decoded and saved to ${outputPath}`);
  } catch (err) {
    if (err) return console.error(`${err}`);
  }
}

main(encodedString, outputPath);
