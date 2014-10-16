---
layout: post
language: "en"
title: "Introduction to Gulp.js 12: Optimize CSS, JavaScript and Images"
author: "Stefan Imhoff"
excerpt: ""
categories:
- Code
tags:
- gulp
- tutorial
- automation
- optimize
- minimize
---

This is the 12th part of my series *Introduction to Gulp.js*. Today I will write tasks to optimize the assets of my website: CSS, JavaScript and Images.

[IMAGE]

{% include articles/gulp-toc.html %}

Every Kilobyte, which has to be loaded will slow down the loading of my website. That’s why I will minimize all my CSS and JavaScript and run my images through an optimizer, to remove as many bytes as possible. I will also add a task for minimizing HTML, but I don’t use this task, because the reduction is minimal.

## Optimize CSS
Next I will write a task, which will optimize the CSS. Compass is able to minimize the CSS for production, but this Gulp task squeezed another 6 KB out of my files.

I install the needed Gulp plugins:

{% highlight sh %}
$ npm install --save-dev gulp-minify-css gulp-size
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
optimize: {
  css: {
    src:  developmentAssets + '/css/*.css',
    dest: productionAssets + '/css/'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "optimize-css.js" %}
{% highlight javascript %}
var gulp      = require('gulp');
var minifycss = require('gulp-minify-css');
var size      = require('gulp-size');
var config    = require('../../config').optimize.css;

/**
 * Copy and minimize CSS files
 */
gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(minifycss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
{% endhighlight %}
{% endfigure %}

This task will copy the CSS files from the assets folder, minimize them, remove comments, output the size of the file and copy them to the production assets folder.

## Optimize JavaScript
Now the CSS is minimized and the same has to be done to the JavaScript files. I use UglifyJS for this task. If you don’t like it, go ahead and use a Google Closure or YUI compressor Gulp task.

{% highlight sh %}
$ npm install --save-dev gulp-uglify
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
optimize: {
  css: {
    ...
  },
  js: {
    src:  developmentAssets + '/js/*.js',
    dest: productionAssets + '/js/'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "optimize-js.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var size   = require('gulp-size');
var config = require('../../config').optimize.js;

/**
 * Copy and minimize JS files
 */
gulp.task('optimize:js', function() {
  return gulp.src(config.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
{% endhighlight %}
{% endfigure %}

This task will take the JavaScript files, minimize and optimize them, put them to my production assets folder and output the size.

## Optimize Images
Next I will take care of the images. They need to be copied to the production assets folder and crunshed (reduce the size). This may take a file, depending on the size and amount of your images, that’s why I only optimize the images for production.

{% aside aside-hint %}
<h4>Show more details</h4>
<p>To get a more detailed output in Gulp you may add a flag to your command:<br> <code>gulp publish --verbose</code>. It will list each individual image for the optimize task and how much it was compressed.</p>
{% endaside %}

I’ll need `gulp-imagemin` for my task, which is able to minify PNG, JPG, GIF and SVG images:

{% highlight sh %}
$ npm install --save-dev gulp-imagemin
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
optimize: {
  css: {
    ...
  },
  js: {
    ...
  },
  images: {
    src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
    dest: productionAssets + '/images/'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "optimize-images.js" %}
{% highlight javascript %}
var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var size     = require('gulp-size');
var config   = require('../../config').optimize.images;

/**
 * Copy and minimize image files
 */
gulp.task('optimize:images', function() {
  return gulp.src(config.src)
    .pipe(imagemin({
      optimizationLevel: 3,
      progessive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
{% endhighlight %}
{% endfigure %}

This task will take my images, optimize them, copy them to the assets folder and output the size.

## Minimize HTML
As said before I wrote this task but don’t use it, because the reduction is minimal and not worth the messy markup. I like to keep it readable so other people can learn from it.

{% highlight sh %}
$ npm install --save-dev gulp-htmlmin
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
htmlmin: {
  src: production + '/**/*.html',
  dest: production
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "htmlmin.js" %}
{% highlight javascript %}
var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');
var config  = require('../../config').htmlmin;

/**
 * Minimize HTML
 */
gulp.task('htmlmin', function() {
  return gulp.src(config.src)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(config.dest));
});
{% endhighlight %}
{% endfigure %}

## Conclusion
This concludes the 12th part of my series *Introduction to Gulp.js*. Today we learned how to minimize CSS and JavaScript files and reduce the size of images.
