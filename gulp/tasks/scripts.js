var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var uglify      = require('gulp-uglify');
var gulpif      = require('gulp-if');
var browserify  = require('gulp-browserify');
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
    .pipe(browserify({ debug: env === 'development' }))
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(config.dest))
});