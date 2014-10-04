var gulp        = require('gulp');
var cp          = require('child_process');
var browserSync = require('browser-sync');
var config      = require('../config').jekyll;

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll', function(done) {
  browserSync.notify('Compiling Jekyll');

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], { stdio: 'inherit' })
  .on('close', done);
});
