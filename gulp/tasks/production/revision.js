var gulp = require('gulp');
var rev = require('gulp-rev');

gulp.task('revision', function() {

  return gulp.src([
    'build/production/assets/css/*.css',
    'build/production/assets/js/*.js'
  ], { base: 'build/production' })
    .pipe(gulp.dest('build/production'))
    .pipe(rev())
    .pipe(gulp.dest('build/production'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('build/production/assets'));
});
