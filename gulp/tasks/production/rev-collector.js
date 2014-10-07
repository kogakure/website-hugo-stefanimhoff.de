var gulp = require('gulp');
var collect = require('gulp-rev-collector');

gulp.task('rev:collect', function() {

  return gulp.src([
    'build/production/assets/manifest.json',
    'build/production/**/*.{html,xml,txt,json,css,js}'
  ])
  .pipe(collect())
  .pipe(gulp.dest('build/production/'));
});


