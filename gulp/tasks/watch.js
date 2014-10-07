var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.watch.jekyll,  ['jekyll'])
  gulp.watch(config.watch.sass,    ['sass', 'scsslint']);
  gulp.watch(config.watch.scripts, ['scripts', 'jshint']);
  gulp.watch(config.watch.images,  ['images']);
  gulp.watch(config.watch.svg,     ['copy:fonts']);
});
