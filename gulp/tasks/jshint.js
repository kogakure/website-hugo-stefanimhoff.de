var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');

/**
 * Check JavaScript sytax with JSHint
 */
gulp.task('jshint', function() {
  return gulp.src('app/_assets/javascripts/*.js') // @TODO: Extract to config
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
