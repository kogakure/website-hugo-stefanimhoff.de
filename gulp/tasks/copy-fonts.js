var gulp   = require('gulp');
var config = require('../config');

/**
 * Copy fonts to folder
 */
gulp.task('copy:fonts', ['fontcustom'], function() {
  return gulp.src(config.copyfonts.development.src)
    .pipe(gulp.dest(config.copyfonts.development.dest));
});
