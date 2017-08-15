"use strict";

const gulp = require("gulp");
const awspublish = require("gulp-awspublish");
const runSequence = require("run-sequence");
const config = require("../config");

gulp.task("publish", function() {

  let credentials = require(`${config.awsConf}`),
      publisher = awspublish.create(credentials);

  let headers = {
    "Cache-Control": "no-cache"
  };

  return gulp.src(`${config.dest}/**/*`)
    //.pipe( awspublish.gzip({ext: ".gz"}) ) )
    .pipe( publisher.publish(headers) )
    //.pipe( publisher.cache() )
    .pipe( publisher.sync() )
    .pipe( awspublish.reporter() );

});
