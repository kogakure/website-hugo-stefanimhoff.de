var gulp   = require('gulp');
var config = require('../../config');

/**
 * Copy fonts to folder
 */
gulp.task('copyFontsProduction', function() {
  return gulp.src(config.copyFonts.production.src)
    .pipe(gulp.dest(config.copyFonts.production.dest));
});
