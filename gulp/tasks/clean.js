var gulp   = require('gulp');
var clean  = require('gulp-clean');
var config = require('../config').clean;

/**
 * Clean folders and files
 */
gulp.task('clean', function() {
  return gulp.src(config.src, { read: false })
    .pipe(clean());
});
