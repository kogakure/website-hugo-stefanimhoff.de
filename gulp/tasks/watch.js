var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.watch.jekyll,  ['jekyll'])
  gulp.watch(config.watch.sass,    ['sass']);
  gulp.watch(config.watch.scripts, ['scripts']);
  gulp.watch(config.watch.images,  ['images']);
  gulp.watch(config.watch.svg,     ['fontcustom']);
});
