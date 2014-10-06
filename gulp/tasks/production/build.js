var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('buildProduction', function(callback) {
  // runSequence('clean', 'jekyllProduction', [
  runSequence('clean', 'jekyll', [
    'sass',
    'scripts',
    // 'images',
    // 'copyFonts'
  ], [
    'optimizeCSS',
    'optimizeJS',
    // 'optimizeImages',
    // 'copyFontsProduction'
  ], 'revision', callback);
});
