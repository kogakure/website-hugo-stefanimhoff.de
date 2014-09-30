var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config      = require('../config').browserSync;

/**
 * Start a server and watch changes with BrowserSync
 */
gulp.task('browserSync', function() {
  browserSync(config);
});
