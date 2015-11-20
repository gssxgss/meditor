"use strict";

const fs = require("fs");
const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const config = require("../config");

gulp.task("replace", () => {
  return gulp
  .src(`${config.dest}/index.html`)
  .pipe($.replace(`<!-- ${config.uiFilename}.css-->`, () => {
    console.log(2);
    let style = fs.readFileSync(`${config.dest}/css/${config.uiFilename}.css`, 'utf-8');
    return `<style id="${config.uiFilename}">${style}</style>`;
  }))
  .pipe(gulp.dest(config.dest));
});
