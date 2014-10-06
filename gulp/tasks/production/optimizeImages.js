var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var size     = require('gulp-size');
var config   = require('../../config');

/**
 * Copy and minimize image files
 */
gulp.task('optimizeImages', function() {

  return gulp.src(config.optimize.images.src)
    .pipe(imagemin({
      optimizationLevel: 3,
      progessive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.optimize.images.dest))
    .pipe(size());
});
