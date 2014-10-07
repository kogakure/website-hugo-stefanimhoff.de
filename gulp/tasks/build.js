var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  runSequence('delete', [
    'jekyll',
    'sass',
    'scripts',
    'images',
    'copy:fonts'
  ], callback);
});
