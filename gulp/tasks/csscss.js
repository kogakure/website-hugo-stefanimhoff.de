var gulp   = require('gulp');
var csscss = require('gulp-csscss');
var config = require('../config');

// gem install csscss needed

/**
 * Check CSS syntax with CSSCSS
 */
gulp.task('csscss', function() {
  return gulp.src(config.css.src)
    .pipe(csscss());
})
