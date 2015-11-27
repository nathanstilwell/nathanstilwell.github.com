'use strict';

let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('autoprefixer');
let postcss = require('gulp-postcss');
let cssimport = require('postcss-import');
let nested = require('postcss-nested');

gulp.task('css', () => {
  gulp.src('css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 4 versions'],
        remove: false
      }),
      cssimport(),
      nested
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/dist'));
});
