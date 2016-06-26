var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 *
 */
gulp.task('publish', function(callback) {
  runSequence('production:build', 'rsync', 'open-browser', callback);
});
