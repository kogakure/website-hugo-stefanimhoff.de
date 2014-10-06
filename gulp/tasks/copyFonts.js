var gulp   = require('gulp');
var config = require('../config');

/**
 * Copy fonts to folder
 */
gulp.task('copyFonts', ['fontcustom'], function() {
  return gulp.src(config.copyFonts.development.src)
    .pipe(gulp.dest(config.copyFonts.development.dest));
});
