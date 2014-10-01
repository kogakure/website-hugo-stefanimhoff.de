var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.jekyll,  ['jekyll'])
  gulp.watch(config.sass,    ['sass']);
  gulp.watch(config.scripts, ['scripts']);
  gulp.watch(config.images,  ['images']);
  console.log(config.images);
});
