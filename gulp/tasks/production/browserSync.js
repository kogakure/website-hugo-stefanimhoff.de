var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config      = require('../../config').browserSync.production;

/**
 * Start a server and watch changes with BrowserSync
 */
gulp.task('browserSyncProduction', ['buildProduction'], function() {
  browserSync(config);
});
