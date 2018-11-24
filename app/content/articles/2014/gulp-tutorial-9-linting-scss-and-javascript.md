---
title: 'Introduction to Gulp.js 9: Checking the Syntax of SCSS and JavaScript'
slug: gulp-tutorial-9-linting-scss-and-javascript
author: Stefan Imhoff
date: 2014-10-26T08:10:00+02:00
description: 'The ultimative tutorial and guide for Gulp.js: How to check the syntax of SCSS and JavaScript files.'
og_image: 'assets/images/articles/2014/gulp-tutorial-9-linting-scss-and-javascript/gulp-tutorial-9.jpg'
download_url: 'https://github.com/kogakure/gulp-tutorial'
download_text: 'View Source on GitHub'
categories: ['code']
series: ['gulp']
---

This is the 9th part of my series _Introduction to Gulp.js_. Today I will use Gulp.js to automatically check my SCSS and JavaScript files for syntax errors and warnings.

<figure class="image-figure">
  <img src="/assets/images/articles/2014/gulp-tutorial-9-linting-scss-and-javascript/gulp-tutorial-9.jpg" alt="Girl drinking a Big Gulp">
  <figcaption>
  Shelly Munkberg, <a href="https://www.flickr.com/photos/zingersb/501372181" target="_blank" rel="nofollow" rel="noopener">5.16.07</a>
  </figcaption>
</figure>

I decided to lint my SCSS files and not the CSS files, because it’s kind of pointless to lint generated CSS. But you can do this with [gulp-csslint](https://www.npmjs.com/package/gulp-csslint/).

```bash
$ npm install --save-dev gulp-scss-lint@0.3.6 gulp-jshint@1.8.5 jshint-stylish@2.0.1
```

Additionally you’ll need to install the `scss-lint` Gem and run `bundle install`:

<p class="code-info">Gemfile</p>

```ruby
source "https://rubygems.org"

gem 'jekyll', '~> 2.5.2'
gem 'sass', '>= 3.3'
gem 'scss-lint', '~> 0.31.0'
gem 'fontcustom', '~> 1.3.7'
```

Add some options for `jshint` and `scss-lint`:

<p class="code-info">gulp/config.js</p>

```javascript
scsslint: {
  src: [
    srcAssets + '/scss/**/*.{sass,scss}',
    '!' + srcAssets + '/scss/base/_sprites.scss',
    '!' + srcAssets + '/scss/helpers/_meyer-reset.scss'
    ],
    options: {
      bundleExec: true
    }
},
jshint: {
  src: srcAssets + '/javascripts/*.js'
}
```

I ignore some files from checking (by adding a `!` in front of the path), because I didn’t write them or don’t have control over the syntax.

<p class="code-info">gulp/tasks/development/scss-lint.js</p>

```javascript
var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var config = require('../../config').scsslint;

/**
 * Lint SCSS files
 * `gem install scss-lint` needed
 */
gulp.task('scsslint', function() {
  return gulp.src(config.src).pipe(scsslint(config.options));
});
```

<p class="code-info">gulp/tasks/development/jshint.js</p>

```javascript
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config = require('../../config').jshint;

/**
 * Check JavaScript sytax with JSHint
 */
gulp.task('jshint', function() {
  return gulp
    .src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
```

<aside class="aside-hint" role="complementary">
  <h4>Configuration of Syntax Check Tools</h4>
  <p>You may change the rules for linting SCSS or JavaScript by adding a hidden file <code>.scss-lint.yml</code> for SCSS lint and <code>.jshintrc</code> for JSHint to your project root.</p>
  <p>To find out which options are available look into the documentation of <a href="https://github.com/brigade/scss-lint" target="_blank" rel="nofollow" rel="noopener">SCSS-Lint</a> and <a href="https://jshint.com/docs/" target="_blank" rel="nofollow" rel="noopener">JSHint</a>.</p>
</aside>

## Conclusion

This concludes the 9th part of my series _Introduction to Gulp.js_. Today we learned how to use Gulp.js to check the syntax of SCSS and JavaScript files. This task will run continuously while I write my files and print out errors to my console the moment I created them.
