"use strict";

var fs = require("fs-extra");
var gulp = require("gulp");

function copy() {
  return gulp.src(["*.html", "{css,img,js}/**"])
    .pipe(gulp.dest("gosha"));
}

if (gulp.tasks.style && gulp.tasks.style.fn) {
  gulp.task("gosha:copy", ["style"], copy);
} else {
  gulp.task("gosha:copy", copy);
}

gulp.task("gosha:clean", ["gosha:copy"], function(done) {
  fs.remove("./gosha/{img,js,css}/README", done);
});

gulp.task("gosha", ["gosha:clean"]);
