var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('watch', function() {
  gulp.watch(config.jekyll, ['jekyll'])
  gulp.watch(config.sass, ['sass']);
  gulp.watch(config.scripts, ['scripts']);
});
