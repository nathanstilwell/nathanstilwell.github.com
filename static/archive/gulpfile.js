'use strict';

/**
 * For reference only. Most likely, these dependencies have been taken out
 * of the package.json and won't work any longer. In case of emergancy, here
 * is what you would need.
 *
 *  "autoprefixer": "9.4.3",
 *  "gulp": "4.0.0",
 *  "gulp-postcss": "8.0.0",
 *  "gulp-sourcemaps": "2.6.4",
 *  "postcss-import": "12.0.1",
 *  "postcss-nested": "4.1.1",
 *  "postcss-simple-vars": "5.0.1"
 */
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

