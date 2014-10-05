var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');

gulp.task('scsslint', function() {
  gulp.src('app/_assets/scss/**/*.scss')
    .pipe(scsslint());
});
