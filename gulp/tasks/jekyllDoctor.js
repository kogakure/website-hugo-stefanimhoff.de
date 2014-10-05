var gulp        = require('gulp');
var cp          = require('child_process');
var browserSync = require('browser-sync');
var config      = require('../config').jekyll;

/**
 * Check Jekyll configuration
 */
gulp.task('jekyllDoctor', function(done) {
  browserSync.notify('Checking Jekyll');

  return cp.spawn('bundle', ['exec', 'jekyll', 'doctor'], { stdio: 'inherit' })
  .on('close', done);
});
