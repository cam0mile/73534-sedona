"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var browserSync = require('browser-sync').create();
var svgSprite  = require('gulp-svg-sprite');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var minify = require("gulp-minify-css");
var uglify = require('gulp-uglify');
var imageop = require('gulp-image-optimization');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

var jsLibs = [
  './vendor/picturefill.js',
  './vendor/mustache.js',
  './source/js/*.js'
]

var imageArr = [
  './source/img/**/*.png',
  './source/img/**/*.jpg',
  './source/img/**/*.jpeg'
]


// gulp.task("start", ["server","style"], function() {
//   gulp.watch("sass/**/*.{sass,scss}", ["style"]);
//   gulp.watch("./*.html").on('change', browserSync.reload);
// });

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('sprite', function() {
  gulp.src('img/for-sprite/*.svg').pipe(svgSprite({
    mode: {
      symbol: {
        dest: './',
        dimensions: '-icon',
        sprite: 'img/svg_sprite.svg',
        example: true,
        render: {
            scss: {
            dest: 'sass/svg_sprite.scss'
          }
        }
      }
    },
    svg: {
      xmlDeclaration: false,
      doctypeDeclaration: false
    }
  })).pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
  return gulp.src('./build/*', {read: false})
    .pipe(clean());
});

gulp.task('copy', function () {
  gulp.src(['./source/img/svg/*.svg'])
    .pipe(gulp.dest('./build/img/svg/'))
  gulp.src('./source/*.html')
    .pipe(gulp.dest('./build/'))
  gulp.src('./source/font/*')
    .pipe(gulp.dest('./build/font'))
});

gulp.task('connect', function() {
  connect.server({
    root:'./build/',
    livereload: false,
    port: 8080
  })
});

gulp.task('html', function () {
  gulp.src('./source/*.html')
    .pipe(gulp.dest('./build/'))
 gulp.src('./build/*.html')
    .pipe(connect.reload());
});

gulp.task("style", function() {
  return gulp.src("./source/sass/style.{sass,scss}")
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: "last 2 versions"})
    ]))
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.stream())
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('./build/css'))
    .pipe(notify("hello world"));
});


gulp.task('scripts', function() {
  return gulp.src(jsLibs)
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(connect.reload());
});

gulp.task('images', function(cb) {
  gulp.src(imageArr).pipe(imageop({
    optimizationLevel: 3,
    progressive: true,
    interlaced: true
  }))
    .pipe(gulp.dest('./build/img')).on('end', cb).on('error', cb);
});

gulp.task('watch', function() {
  gulp.watch("./source/sass/**/*.{sass,scss}", ["style"]);
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch('./source/js/*.js', ['scripts']);
});

gulp.task('default', function() {
  runSequence(
    'clean',
    'copy',
    'style',
    'scripts',
    'images',
    'connect',
    'watch'
  );
});


// Оставьте эту строку в самом конце файла
require("./.gosha");
