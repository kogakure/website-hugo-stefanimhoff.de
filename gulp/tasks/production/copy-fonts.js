var gulp   = require('gulp');
var config = require('../../config');

/**
 * Copy fonts to folder
 */
gulp.task('copy:fonts:production', function() {
  return gulp.src(config.copyfonts.production.src)
    .pipe(gulp.dest(config.copyfonts.production.dest));
});
