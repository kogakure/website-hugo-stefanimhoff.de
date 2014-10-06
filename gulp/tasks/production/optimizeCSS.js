var gulp      = require('gulp');
var minifycss = require('gulp-minify-css');
var size      = require('gulp-size');
var config    = require('../../config');

/**
 * Copy and minimize CSS files
 */
gulp.task('optimizeCSS', function() {

  return gulp.src(config.optimize.css.src)
    .pipe(minifycss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(config.optimize.css.dest))
    .pipe(size());
});
