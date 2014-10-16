---
layout: post
language: "en"
title: "Introduction to Gulp.js 6: Images and Vector Fonts"
author: "Stefan Imhoff"
excerpt: ""
categories:
- Code
tags:
- gulp
- tutorial
- automation
- javascript
- browserify
- commonjs
---

This is the sixth part of my series *Introduction to Gulp.js*. The last article was very long...

[IMAGE]

{% include articles/gulp-toc.html %}

## Images
The image task is a simple one again. All it does for now is copying the images to the asset directory. We will optimize images later during the production build.

{% figure code-figure "config.js" %}
{% highlight javascript %}
images: {
  src:  srcAssets + '/images/**/*',
  dest: developmentAssets + '/images'
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "images.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var changed     = require('gulp-changed');
var browsersync = require('browser-sync');
var config      = require('../../config').images;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browsersync.reload({ stream: true }));
});
{% endhighlight %}
{% endfigure %}

## Vector Fonts
I use vector fonts for my website. Vector fonts are one option to include high quality icons on a website. Another option is using SVG directly or to use high resolution images.

I use [Font Custom](http://fontcustom.com/) to generate my vector fonts. There is a [gulp plugin](https://www.npmjs.org/package/gulp-fontcustom/) for this, but I couldn’t get it running. But because I generate not that often a new version of my vector fonts, I’m totally fine with running the shell command. I will use Gulp later to watch the folder containing the SVG files and recreate the vector fonts if needed.


{% figure code-figure "config.js" %}
{% highlight javascript %}
copyfonts: {
  development: {
    src:  srcAssets + '/fonts/*',
    dest: developmentAssets + '/fonts'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "copy-fonts.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var config = require('../../config').copyfonts.development;

/**
 * Copy fonts to folder
 */
gulp.task('copy:fonts', ['fontcustom'], function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
{% endhighlight %}
{% endfigure %}

As you may have seen, before copying the fonts to the asset folder another task gets executed: `fontcustom`.

Font Custom checks the files for changes and doesn’t generate anything if the files are still the same.

To execute a shell command I use the Gulp plugin `gulp-shell`:

{% highlight sh %}
$ npm install --save-dev gulp-shell
{% endhighlight %}

{% figure code-figure "fontcustom.js" %}
{% highlight javascript %}
var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('fontcustom', shell.task([
  'fontcustom compile'
]));
{% endhighlight %}
{% endfigure %}
