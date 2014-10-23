---
layout: post
language: "en"
title: "Introduction to Gulp.js 9: Checking the Syntax of SCSS and JavaScript"
date: 2014-10-26T08:00:00+02:00
author: "Stefan Imhoff"
categories:
- Code
tags:
- gulp
- tutorial
- automation
- lint
- scss
- javascript
- syntax
---

This is the 9th part of my series *Introduction to Gulp.js*. Today I will use Gulp.js to automatically check my SCSS and JavaScript files for syntax errors and warnings.

{% figure image-figure attribution %}
<img src="/assets/images/artikel/gulp-tutorial-9.jpg" alt="Girl drinking a Big Gulp">
<p class="attribution-text"><i class="icon-cc"></i> Shelly Munkberg, <a href="https://www.flickr.com/photos/zingersb/501372181">5.16.07</a></p>
{% endfigure %}

{% include articles/gulp-toc.html %}

I decided to lint my SCSS files and not the CSS files, because it’s kind of pointless to lint generated CSS. But you can do this with [gulp-csslint](https://www.npmjs.org/package/gulp-csslint/).

{% highlight sh %}
$ npm install --save-dev gulp-scss-lint gulp-jshint jshint-stylish
{% endhighlight %}

{% figure code-figure "gulp/config.js" %}
{% highlight javascript %}
scsslint: {
  src: [
    srcAssets + '/scss/**/*.{sass,scss}',
    '!' + srcAssets + '/scss/base/_sprites.scss',
    '!' + srcAssets + '/scss/helpers/_meyer-reset.scss'
  ]
},
jshint: {
  src: srcAssets + '/javascripts/*.js'
}
{% endhighlight %}
{% endfigure %}

I ignore some files from checking (by adding a `!` in front of the path), because I didn’t write them or don’t have control over the syntax.

{% figure code-figure "gulp/tasks/development/scss-lint.js" %}
{% highlight javascript %}
var gulp     = require('gulp');
var scsslint = require('gulp-scss-lint');
var config   = require('../../config').scsslint;

/**
 * Lint SCSS files
 * `gem install scss-lint` needed
 */
gulp.task('scsslint', function() {
  return gulp.src(config.src)
    .pipe(scsslint());
});
{% endhighlight %}
{% endfigure %}

{% figure code-figure "gulp/tasks/development/jshint.js" %}
{% highlight javascript %}
var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config  = require('../../config').jshint;

/**
 * Check JavaScript sytax with JSHint
 */
gulp.task('jshint', function() {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
{% endhighlight %}
{% endfigure %}

{% aside aside-hint %}
<h4>Configuration of Syntax Check Tools</h4>
<p>You may change the rules for linting SCSS or JavaScript by adding a hidden file <code>.scss-lint.yml</code> for SCSS lint and <code>.jshintrc</code> for JSHint to your project root.</p>
<p>To find out which options are available look into the documentation of <a href="https://github.com/causes/scss-lint">SCSS-Lint</a> and <a href="http://jshint.com/docs/">JSHint</a>.</p>
{% endaside %}

{% include articles/gulp-code.html %}

## Conclusion
This concludes the 9th part of my series *Introduction to Gulp.js*. Today we learned how to use Gulp.js to check the syntax of SCSS and JavaScript files. This task will run continuously while I write my files and print out errors to my console the moment I created them.
