var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var uglify      = require('gulp-uglify');
var gulpif      = require('gulp-if');
var changed     = require('gulp-changed');
var browserify  = require('gulp-browserify');
var size        = require('gulp-size');
var config      = require('../config').scripts;

var env = process.env.NODE_ENV || 'development'; // NODE_ENV=production gulp scripts

/**
 * Run JavaScript through Browserify
 * Minimize them (if in production)
 */
gulp.task('scripts', function() {

  browserSync.notify('Compiling JavaScript');

  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(changed(config.scripts.dest)) // Ignore unchanged files
    .pipe(browserify({
      debug: env === 'development',
      onError: browserSync.notify
    }))
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
