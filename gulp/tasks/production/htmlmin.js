var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var config = require('../../config').htmlmin;

/**
 * Minimize HTML
 */
gulp.task('html:minimize', function() {
  return gulp.src(config.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(config.dest));
});
