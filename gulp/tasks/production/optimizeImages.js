var gulp     = require('gulp');
var plumber  = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var size     = require('gulp-size');
var config   = require('../../config');

/**
 * Copy and minimize image files
 */
gulp.task('optimizeImages', function() {

  return gulp.src(config.optimize.images.src)
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 3,
      progessive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.optimize.images.dest))
    .pipe(size());
});
