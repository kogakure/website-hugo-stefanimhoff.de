var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browsersync  = require('browser-sync');
var sass         = require('gulp-ruby-sass'); // @TODO: Try RubyLib
var gulpFilter   = require('gulp-filter');
var changed      = require('gulp-changed');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function() {
  var sassConfig = {
    noCache: true,
    compass: true,
    bundleExec: true,
    sourcemap: true,
    sourcemapPath: '../../_assets/scss',
    onError: browsersync.notify
  };

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map']);

  browsersync.notify('Compiling Sass');

  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(changed(config.sass.dest)) // Ignore unchanged files
    .pipe(sass(sassConfig))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: config.autoprefixer.browsers,
      cascade: config.autoprefixer.cascade
    }))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write('.', { includeContent: false }))
    .pipe(filter.restore()) // Restore original files
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browsersync.reload({ stream: true }));
});
