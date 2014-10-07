var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:production', function(callback) {
  runSequence('delete', 'jekyll:production', [
    'sass',
    'scripts',
    'images',
    'copy:fonts'
  ], [
    'optimize:css',
    'optimize:js',
    'optimize:images',
    'copy:fonts:production'
  ], 'revision', callback);
});
