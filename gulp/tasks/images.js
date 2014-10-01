var gulp        = require('gulp');
var changed     = require('gulp-changed');
var imagemin    = require('gulp-imagemin');
var browserSync = require('browser-sync');
var gulpif      = require('gulp-if');
var size        = require('gulp-size');
var config      = require('../config').images;

var env = process.env.NODE_ENV || 'development'; // NODE_ENV=production gulp sass

/**
 * Copy images to build folder
 * and optimize if production
 */
gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulpif(env === 'production', imagemin({
      optimizationLevel: 3,
      progessive: true,
      interlaced: true
    }))) // Optimize
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({ stream: true }));
});
