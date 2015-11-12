"use strict";

var path = require("path");
var gulp = require("gulp");
var eclint = require("eclint");

gulp.task("lint", function() {
  var hasErrors = false;

  var stream = gulp.src([
      "*.html",
      "{js,less,sass}/**/*.{js,less,sass,scss}"
    ])
    .pipe(eclint.check({
      reporter: function(file, message) {
        hasErrors = true;
        var relativePath = path.relative(".", file.path);
        console.error(relativePath + ":", message);
      }
    }));

    stream.on("finish", function() {
      if (hasErrors) {
        process.exit(1);
      }
    });

    return stream;
});
