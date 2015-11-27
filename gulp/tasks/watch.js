'use strict';

let gulp = require('gulp');

gulp.task('watch', function watchTask () {
  gulp.watch(['css/**/*.css'], ['css']);
});
