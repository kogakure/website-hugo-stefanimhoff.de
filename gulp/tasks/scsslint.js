var gulp     = require('gulp');
var scsslint = require('gulp-scss-lint');
var config   = require('../config');

// `gem install scss-lint` needed

/**
 * Lint SCSS files
 */
gulp.task('scsslint', function() {
  return gulp.src(config.sass.src)
    .pipe(scsslint());
});
