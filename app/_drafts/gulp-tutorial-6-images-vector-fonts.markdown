---
layout: post
language: "en"
title: "Introduction to Gulp.js 6: Images and Vector Fonts"
author: "Stefan Imhoff"
excerpt: "Gulp.js Tutorial - Moving Images and creating Vector Fonts"
categories:
- Code
tags:
- gulp
- tutorial
- automation
---

This is the 6th part of my series *Introduction to Gulp.js*. The last article was very long and complicated. This time it’s a easy one: I will show how I move my images and generate vector fonts.

{% figure image-figure attribution %}
<img src="/assets/images/artikel/gulp-tutorial-6.jpg" alt="A Mini Gulp with water">
<p class="attribution-text"><i class="icon-cc"></i> 世書 名付, <a href="https://www.flickr.com/photos/nseika/9477122568">Mini Gulp</a></p>
{% endfigure %}

{% include articles/gulp-toc.html %}

## Images
The image task is a simple one again. All it does for now is copying the images to the asset directory. I will optimize my images later during the production build.

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
    .pipe(gulp.dest(config.dest));
});
{% endhighlight %}
{% endfigure %}

## Vector Fonts
I use vector fonts for my website. Vector fonts are one option to include high quality icons on a website. Another option is using SVG directly or to use high resolution images.

I use [Font Custom](http://fontcustom.com/) to generate my vector fonts. There is a [gulp plugin](https://www.npmjs.org/package/gulp-fontcustom/) for this, but I couldn’t get it running. But I’m totally fine with running this task with a shell command (via Gulp.js). I will use Gulp.js later to watch the folder containing the SVG files and recreate the vector fonts if needed.


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

To execute a shell command I use the Gulp.js plugin `gulp-shell`:

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

## Conclusion
This concludes the 6th part of my series *Introduction to Gulp.js*. We learned how to move files with Gulp.js (and don’t even need a plugin for that), and how I create my vector fonts. Nothing special, but the next part will be more interesting again.
