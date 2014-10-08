var gulp        = require('gulp');
var changed     = require('gulp-changed');
var browsersync = require('browser-sync');
var size        = require('gulp-size');
var config      = require('../config').images;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browsersync.reload({ stream: true }));
});
