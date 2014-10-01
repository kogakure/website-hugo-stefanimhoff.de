var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browserSync  = require('browser-sync');
var sass         = require('gulp-ruby-sass'); // @TODO: Try RubyLib
var filter       = require('gulp-filter');
var gulpif       = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var config       = require('../config');

var env = process.env.NODE_ENV || 'development'; // NODE_ENV=production gulp sass

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
    sourcemapPath: '../scss'
  };

  if (env === 'production') {
    sassConfig.style = 'compressed';
    sassConfig.sourcemap = false;
  }

  browserSync.notify('Compiling Sass');

  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sass(sassConfig))
    .pipe(autoprefixer({
      browsers: config.autoprefixer.browsers,
      cascade: config.autoprefixer.cascade
    }))
    .pipe(gulpif(env === 'production', minifycss({
      keepSpecialComments: 0
    })))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(filter('**/*.css'))
    .pipe(browserSync.reload({ stream: true }));
});
