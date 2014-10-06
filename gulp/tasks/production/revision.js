var gulp = require('gulp');
var rev = require('gulp-rev');

gulp.task('revision', function() {

  return gulp.src([
    'build/production/assets/css/*.css',
    'build/production/assets/js/*.js',
    'build/production/assets/images/**/*'
  ], { base: 'build/production' })
    .pipe(gulp.dest('build/production'))
    .pipe(rev())
    .pipe(gulp.dest('build/production'))
    .pipe(rev.manifest({ path: 'manifest.json' }))
    .pipe(gulp.dest('build/production/assets'));
});
