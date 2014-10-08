var gulp     = require('gulp');
var scsslint = require('gulp-scss-lint');
var config   = require('../../config').sass;

/**
 * Lint SCSS files
 * `gem install scss-lint` needed
 */
gulp.task('scsslint', function() {
  return gulp.src(config.src)
    .pipe(scsslint());
});
