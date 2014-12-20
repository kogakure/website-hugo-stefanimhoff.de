var gulp   = require('gulp');
var webp   = require('gulp-webp');
var config = require('../../config').webp;

gulp.task('webp', function() {
  return gulp.src(config.src)
    .pipe(webp(config.options))
    .pipe(gulp.dest(config.dest));
});
