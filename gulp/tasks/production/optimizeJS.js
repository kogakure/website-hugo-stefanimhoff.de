var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var rev = require('gulp-rev');
var uglify    = require('gulp-uglify');
var size      = require('gulp-size');
var config    = require('../../config');

/**
 * Copy and minimize JS files
 */
gulp.task('optimizeJS', function() {

  return gulp.src(config.optimize.js.src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(config.optimize.js.dest))
    .pipe(size());
});
