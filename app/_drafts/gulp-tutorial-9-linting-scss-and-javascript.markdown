---
layout: post
language: "en"
title: "Introduction to Gulp.js (9) – Linting SCSS and JavaScript"
author: "Stefan Imhoff"
excerpt: ""
categories:
tags:
---

{% include articles/gulp-toc.html %}

## Linting SCSS and JavaScript
I decided to Lint my SCSS files and not the CSS files, because it’s kind of pointless to lint generated CSS. But you can do this with [gulp-csslint](https://www.npmjs.org/package/gulp-csslint/).

{% highlight sh %}
$ npm install --save-dev gulp-scss-lint gulp-jshint jshint-stylish
{% endhighlight %}

{% figure code-figure "config.js" %}
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

{% figure code-figure "scss-lint.js" %}
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

{% figure code-figure "jshint.js" %}
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
<p>You may change the rules for linting SCSS or JavaScript by adding a hidden file <code>.scss-lint.yml</code> for SCSS lint and <code>.jshintrc</code> for JSHint to your project root.</p>
<p>To find out which options are available look into the documentation of <a href="https://github.com/causes/scss-lint">SCSS-Lint</a> and <a href="http://jshint.com/docs/">JSHint</a>.</p>
{% endaside %}
