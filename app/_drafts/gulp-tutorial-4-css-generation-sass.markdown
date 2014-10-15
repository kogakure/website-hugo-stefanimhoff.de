---
layout: post
language: "en"
title: "Introduction to Gulp.js (4) – Sass"
author: "Stefan Imhoff"
excerpt: ""
categories:
tags:
---
{% include articles/gulp-toc.html %}

## Sass/CSS
I use [Sass](http://sass-lang.com/) as preprocessor for my CSS files. If you like to use [Compass](http://compass-style.org/) you just have to set an option for this task.

Go ahead and install the npm modules needed:

{% highlight sh %}
$ npm install --save-dev gulp-plumber gulp-ruby-sass gulp-filter gulp-changed gulp-autoprefixer gulp-sourcemaps
{% endhighlight %}

That’s a lot, but this task will do a lot.

{% figure code-figure "config.js" %}
{% highlight javascript %}
sass: {
  src:  srcAssets + '/scss/**/*.{sass,scss}',
  dest: developmentAssets + '/css',
  options: {
    noCache: true,
    compass: false,
    bundleExec: true,
    sourcemap: true,
    sourcemapPath: '../../_assets/scss'
  }
},
autoprefixer: {
  browsers: [
    'last 2 versions',
    'safari 5',
    'ie 8',
    'ie 9',
    'opera 12.1',
    'ios 6',
    'android 4'
  ],
  cascade: true
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "sass.js" %}
{% highlight javascript %}
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browsersync  = require('browser-sync');
var sass         = require('gulp-ruby-sass');
var gulpFilter   = require('gulp-filter');
var changed      = require('gulp-changed');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function() {
  var sassConfig = {
    noCache: config.sass.options.noCache,
    compass: config.sass.options.compass,
    bundleExec: config.sass.options.bundleExec,
    sourcemap: config.sass.options.sourcemap,
    sourcemapPath: config.sass.options.sourcemapPath,
    onError: browsersync.notify
  };

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map']);

  browsersync.notify('Compiling Sass');

  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(changed(config.sass.dest)) // Ignore unchanged files
    .pipe(sass(sassConfig))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: config.autoprefixer.browsers,
      cascade: config.autoprefixer.cascade
    }))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write('.', { includeContent: false }))
    .pipe(filter.restore()) // Restore original files
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browsersync.reload({ stream: true }));
});
{% endhighlight %}
{% endfigure %}

I load all my files with the suffix of `*.sass` or `*.scss`. First I pipe the files through *Plumber*. It will keep Gulp running if I create a syntax error in one of my files. Gulp would normally just crash with an error. Then I pipe the files through a module which only processes files that where changed. The next step creates the CSS files, running the `sass` command. I create source maps and finally put the CSS files to it’s destination.

And I run the CSS files through Autoprefixer, which will add vendor prefixes. I used the Mixins of Compass a long time, but stopped now and write pure CSS. All vendor prefixes are added later for the Browsers I want to support.

You might have guessed: If you want to use Compass, just set the option `compass` to `true`.

