var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('buildProduction', function(callback) {
  runSequence('delete', 'jekyllProduction', [
    'sass',
    'scripts',
    'images',
    'copyFonts'
  ], [
    'optimizeCSS',
    'optimizeJS',
    'optimizeImages',
    'copyFontsProduction'
  ], 'revision', callback);
});
