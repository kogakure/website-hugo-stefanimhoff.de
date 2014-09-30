var gulp    = require('gulp');
var sass    = require('gulp-ruby-sass'); // @TODO: Try RubyLib
var plumber = require('gulp-plumber');
var config  = require('../config').sass;

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

  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(sass(sassConfig))
    .pipe(gulp.dest(config.dest));
});
