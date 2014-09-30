var gulp        = require('gulp');
// var shell    = require('gulp-shell');
var cp          = require('child_process');
var browserSync = require('browser-sync');
var config      = require('../config').jekyll;

/**
 * Build the Jekyll Site
 */
// gulp.task('jekyll', shell.task([
//   'bundle exec jekyll build -q --source app --destination build --config _config.yml'
// ]));

gulp.task('jekyll', function (done) {
  browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build');
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], {stdio: 'inherit'})
  .on('close', done);
});
