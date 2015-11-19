"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

gulp.task("style", function() {
  return gulp.src("sass/style.{sass,scss}")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: "last 2 versions"})
    ]))
    .pipe(gulp.dest("css"));
});

gulp.task("start", ["style"], function() {
  gulp.watch("sass/**/*.{sass,scss}", ["style"]);
});



// Оставьте эту строку в самом конце файла
require("./.gosha");
