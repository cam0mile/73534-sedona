"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var browserSync = require('browser-sync').create();

gulp.task("style", function() {
  return gulp.src("sass/style.{sass,scss}")
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: "last 2 versions"})
    ]))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream())
    .pipe(notify("hi"));
});

gulp.task("start", ["server","style"], function() {
  gulp.watch("sass/**/*.{sass,scss}", ["style"]);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Оставьте эту строку в самом конце файла
require("./.gosha");
