"use strict";

const gulp = require("gulp");
const awspublish = require("gulp-awspublish");
const config = require("../config");

gulp.task("publish", ["build"], function() {

  let credentials = require(`${config.siteConfig}/aws.json`),
      publisher = awspublish.create(credentials);

  let headers = {
    "Cache-Control": "max-age=315360000, no-transform, public"
  };

  return gulp.src(`${config.dest}/**/*`)
    .pipe( awspublish.gzip({ext: ".gz"}) )
    .pipe( publisher.publish(headers) )
    .pipe( publisher.cache() )
    .pipe( publisher.sync() )
    .pipe( awspublish.reporter({states: ['create', 'update', 'delete']}) );

});
