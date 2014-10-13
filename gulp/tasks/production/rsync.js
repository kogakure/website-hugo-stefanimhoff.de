var gulp = require('gulp');
var rsync = require('gulp-rsync');
var config = require('../../config').rsync;

/**
 * Copy files and folder to server
 * via rsync
 */
gulp.task('rsync', function() {
  return gulp.src(config.src)
    .pipe(rsync({
      destination: config.options.destination,
      root: config.options.root,
      hostname: config.options.hostname,
      username: config.options.username,
      incremental: config.options.incremental,
      progress: config.options.progress,
      emptyDirectories: config.options.emptyDirectories,
      recursive: config.options.recursive,
      clean: config.options.clean,
      exclude: config.options.exclude,
      include: config.options.include
    }));
});
