#!/usr/bin/env node
"use strict";

const commander = require("commander");

const routes = require("../index.js");

commander.version(require("../package.json").version)
  .option("-f, --file [file]", "The file to dump that includes routes information")
  .option("-e, --encode [encode]", "The encode of routes file. Defaults to utf8", "utf8")
  .parse(process.argv);

routes.dump(commander.file, commander.encode);
