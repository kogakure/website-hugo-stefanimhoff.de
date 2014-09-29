var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('jekyll', shell.task([
  'bundle exec jekyll build --source app --destination build --config _config.yml'
]));
