'use strict';

const { src, dest } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssimport = require('postcss-import');
const nested = require('postcss-nested');

exports.default = function () {
  return src('css/*.css')
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
    .pipe(dest('css/dist'));
};

