var gulp       = require('gulp');
var uglify     = require('gulp-uglify');
var gulpif     = require('gulp-if');
var browserify = require('gulp-browserify');
var config     = require('../config').scripts;

var env = process.env.NODE_ENV || 'development'; // NODE_ENV=production gulp scripts

/**
 * Run JavaScript through Browserify
 * Minimize them (if in production)
 */
gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe(browserify({ debug: env === 'development' }))
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(config.dest))
});
