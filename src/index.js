#!/usr/bin/env node

import * as mume from "@shd101wyy/mume";
import * as fse from 'fs-extra';

var program = require('commander');
var filePath;
var outputFilePath;

/* Parse command parameters */
program
  .version(require('../package.json').version)
  .arguments('<input> <output>')
  .action(function (input, output) {
     filePath = input;
     outputFilePath = output;
  });
program.parse(process.argv);

/* Show help if no parameters are passed */
if ((typeof filePath == 'undefined') ||
    (typeof outputFilePath == 'undefined')) {
  program.help();
}

/* Ensure parameters are correct */
if (!filePath.includes(".md")) {
  console.error("File to convert must be a .md file");
  process.exit(1);
}

/* Convert md to html */
async function main() {
  console.info("File to convert: " + filePath);

  await mume.init();

  const engine = new mume.MarkdownEngine({
    filePath: filePath,
    config: {
      previewTheme: "github-light.css",
      codeBlockTheme: "default.css"
    }
  });

  await engine.htmlExport({offline: false, runAllCodeChunks: true});

  /* Move new file to destination path */
  let origin = filePath.replace(".md", ".html");
  console.info("Renamig file: " + origin);
  console.info("   to: " + outputFilePath);
  fse.moveSync(origin, outputFilePath, { overwrite: true });

  return process.exit();
}

main(filePath, outputFilePath).catch(function (reason) {
  console.error(reason);
  process.exit(1);
});
