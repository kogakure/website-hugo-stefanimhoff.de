---
layout: post
language: "en"
title: "Introduction to Gulp.js 6: Images and Vector Fonts"
date: 2014-10-23T08:00:00+02:00
updated: 2015-03-09T12:45:00+02:00
author: "Stefan Imhoff"
og_image: "/assets/images/artikel/gulp-tutorial-6.jpg"
description: "The ultimative tutorial and guide for Gulp.js: How to move images and generate vector fonts from SVG."
categories:
- Code
tags:
- gulp
- tutorial
- automation
---

This is the 6th part of my series *Introduction to Gulp.js*. The last article was very long and complicated. This time it’s a easier one: I will show how I move my images and generate vector fonts.

{% figure image-figure attribution "Today we will only take a <strong>Mini Gulp</strong>" %}
<img src="/assets/images/artikel/gulp-tutorial-6.jpg" alt="A Mini Gulp with water">
<p class="attribution-text"><svg class="attribution-icon-cc"><use xlink:href="#cc"></use></svg> 世書 名付, <a href="https://www.flickr.com/photos/nseika/9477122568">Mini Gulp</a></p>
{% endfigure %}

{% include articles/gulp-toc.html %}

## Images
The image task is a simple one again. All it does for now is copying the images to the asset directory. I will optimize my images later during the production build.

{% figure code-figure "gulp/config.js" %}
{% highlight javascript %}
images: {
  src:  srcAssets + '/images/**/*',
  dest: developmentAssets + '/images'
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "gulp/tasks/development/images.js" %}
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


{% figure code-figure "gulp/config.js" %}
{% highlight javascript %}
copyfonts: {
  development: {
    src:  srcAssets + '/fonts/*',
    dest: developmentAssets + '/fonts'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "gulp/tasks/development/copy-fonts.js" %}
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
$ npm install --save-dev gulp-shell@0.2.10
{% endhighlight %}

{% figure code-figure "gulp/tasks/development/fontcustom.js" %}
{% highlight javascript %}
var gulp  = require('gulp');
var shell = require('gulp-shell');

/**
 * Generate fonts with Fontcustom
 * `brew install fontforge --with-python`
 * `brew install eot-utils`
 */
gulp.task('fontcustom', shell.task([
  'bundle exec fontcustom compile'
]));
{% endhighlight %}
{% endfigure %}

Fontcustom is a Ruby Gem and you’ll need to install the Gem either globally or in your Gemfile (if you install it globally you need to drop the `bundle exec` from your command). I choose to install it with my Gemfile:

{% figure code-figure "Gemfile" %}
{% highlight ruby %}
source "https://rubygems.org"

gem 'jekyll', '~> 2.5.2'
gem 'sass', '>= 3.3'
gem 'fontcustom', '~> 1.3.7'
{% endhighlight %}
{% endfigure %}

After you add the line for `fontcustom` you will need to run `bundle install` again.

{% include articles/gulp-code.html %}

## Conclusion
This concludes the 6th part of my series *Introduction to Gulp.js*. We learned how to move files with Gulp.js (and don’t even need a plugin for that), and how I create my vector fonts. Nothing special, but the next part will be more interesting again.
