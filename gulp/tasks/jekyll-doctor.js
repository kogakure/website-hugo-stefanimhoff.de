var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync');
var config      = require('../config').jekyll;

/**
 * Check Jekyll configuration
 */
gulp.task('jekyll:doctor', function(done) {
  browsersync.notify('Checking Jekyll');

  return cp.spawn('bundle', ['exec', 'jekyll', 'doctor'], { stdio: 'inherit' })
  .on('close', done);
});
