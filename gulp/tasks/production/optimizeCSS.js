var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var rev = require('gulp-rev');
var minifycss = require('gulp-minify-css');
var size      = require('gulp-size');
var del = require('del');
var config    = require('../../config');
var filter = require('gulp-filter');
var debug = require('gulp-debug');

/**
 * Copy and minimize CSS files
 */
gulp.task('optimizeCSS', function() {

  return gulp.src(config.optimize.css.src)
    .pipe(plumber())
    .pipe(minifycss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(config.optimize.css.dest))
    .pipe(size());
});
