var gulp    = require('gulp');
var sass    = require('gulp-ruby-sass'); // @TODO: Try RubyLib
var plumber = require('gulp-plumber');
var config  = require('../config').sass;

gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(sass({
      noCache: true,
      compass: true,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: '../scss'
    }))
    .pipe(gulp.dest(config.dest));
});
