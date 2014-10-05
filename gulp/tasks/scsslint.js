var gulp     = require('gulp');
var scsslint = require('gulp-scss-lint');
var config   = require('../config');

gulp.task('scsslint', function() {
  gulp.src(config.sass.src)
    .pipe(scsslint());
});
