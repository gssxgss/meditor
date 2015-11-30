"use strict";

const argv = require("yargs").argv;

const _isDebug = process.env.NODE_ENV !== "production"

module.exports = {
  isDebug: _isDebug,
  src: argv.src || "src",
  dest: argv.dest || (_isDebug ? "debug" : "public"),
  awsConf: "../../aws.json",
  siteConfig: require("require-dir")("../site-config"),
  uiFilename: "meditor-ui"
};
