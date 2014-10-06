var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var rev = require('gulp-rev');
var minifycss = require('gulp-minify-css');
var size      = require('gulp-size');
var clean = require('gulp-clean');
var config    = require('../../config');

/**
 * Copy and minimize CSS files
 */
gulp.task('optimizeCSS', function() {

  return gulp.src(config.optimize.css.src)
    .pipe(plumber())
    .pipe(minifycss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(config.optimize.css.dest))
    .pipe(size());
});

gulp.task('testRev', function() {

  return gulp.src('build/production/assets/css/*.css')
    .pipe(rev())
    .pipe(clean())
    .pipe(gulp.dest('build/production/assets/css/'));
});

