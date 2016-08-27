---
language: "en"
title: "Introduction to Gulp.js 12: Optimize CSS, JavaScript, Images and HTML"
date: 2014-10-29T08:00:00+02:00
author: "Stefan Imhoff"
slug: "gulp-tutorial-12-optimize-css-javascript-images-and-html"
og_image: "artikel/gulp-tutorial-12.jpg"
description: "The ultimative tutorial and guide for Gulp.js: How to optimize CSS, JavaScript, images and HTML to speed up your website."
series:
- gulp
categories:
- code
tags:
- gulp
- tutorial
- automation
- optimize
- minimize
---

This is the 12th part of my series *Introduction to Gulp.js*. Today I will write tasks to optimize the assets of my website: CSS, JavaScript, Images and HTML.

{{< figure class="image-figure attribution" author="Reed" cite="picnic" url="https://www.flickr.com/photos/ishatter/3614672744" cc="true" >}}
{{< image src="artikel/gulp-tutorial-12.jpg" alt="A woman with a Double Gulp" >}}
{{< /figure >}}

{{< toc_gulp >}}

Every Kilobyte, which has to be loaded will slow down the loading of my website. That’s why I will minimize all my CSS and JavaScript and run my images through an optimizer, to remove as many bytes as possible. I will also add a task for minimizing HTML, but I don’t use this task, because the reduction is minimal.

## CSS
First I will write a task, which will optimize the CSS. Compass is able to minimize the CSS for production, but this Gulp.js task squeezed another 6 KB out of my files.

I install the needed Gulp.js plugins:

```bash
$ npm install --save-dev gulp-minify-css@1.2.1 gulp-size@2.0.0
```

{{% figure class="code-figure" caption="gulp/config.js" %}}
```javascript
optimize: {
  css: {
    src:  developmentAssets + '/css/*.css',
    dest: productionAssets + '/css/',
    options: {
      keepSpecialComments: 0
    }
  }
}
```
{{% /figure %}}

{{% figure class="code-figure" caption="gulp/tasks/production/optimize-css.js" %}}
```javascript
var gulp      = require('gulp');
var minifycss = require('gulp-minify-css');
var size      = require('gulp-size');
var config    = require('../../config').optimize.css;

/**
 * Copy and minimize CSS files
 */
gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(minifycss(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
```
{{% /figure %}}

This task will copy the CSS files from the assets folder, minimize them, remove comments, output the size of the file and copy them to the production assets folder.

## JavaScript
Now the CSS is minimized and the same has to be done to the JavaScript files. I use UglifyJS for this task. If you don’t like it, go ahead and use a Google Closure or YUI compressor Gulp.js task.

```bash
$ npm install --save-dev gulp-uglify@1.0.1
```

{{% figure class="code-figure" caption="gulp/config.js" %}}
```javascript
optimize: {
  css: {
    ...
  },
  js: {
    src:  developmentAssets + '/js/*.js',
    dest: productionAssets + '/js/',
    options: {}
  }
}
```
{{% /figure %}}

{{% figure class="code-figure" caption="gulp/tasks/production/optimize-js.js" %}}
```javascript
var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var size   = require('gulp-size');
var config = require('../../config').optimize.js;

/**
 * Copy and minimize JS files
 */
gulp.task('optimize:js', function() {
  return gulp.src(config.src)
    .pipe(uglify(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
```
{{% /figure %}}

This task will take the JavaScript files, minimize and optimize them, put them to my production assets folder and output the size.

## Images
Next I will take care of the images. They need to be copied to the production assets folder and crunshed (reduce the size). This may take a while, depending on the size and amount of your images, that’s why I only optimize the images for production.

{{% hint headline="Show more details" %}}
To get a more detailed output in Gulp.js you may add a flag to your command:

`gulp publish --verbose`. It will list each individual image for the optimize task and how much it was compressed.
{{% /hint %}}

I’ll need `gulp-imagemin` for my task, which is able to minify PNG, JPG, GIF and SVG images:

```bash
$ npm install --save-dev gulp-imagemin@2.3.0
```

{{% figure class="code-figure" caption="gulp/config.js" %}}
```javascript
optimize: {
  css: {
    ...
  },
  js: {
    ...
  },
  images: {
    src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
    dest: productionAssets + '/images/',
    options: {
      optimizationLevel: 3,
      progessive: true,
      interlaced: true
    }
  }
}
```
{{% /figure %}}

{{% figure class="code-figure" caption="gulp/tasks/production/optimize-images.js" %}}
```javascript
var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var size     = require('gulp-size');
var config   = require('../../config').optimize.images;

/**
 * Copy and minimize image files
 */
gulp.task('optimize:images', function() {
  return gulp.src(config.src)
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
```
{{% /figure %}}

This task will take my images, optimize them, copy them to the assets folder and output the size.

## HTML
As said before I wrote this task, so you can see how to do it, but I don’t use it, because the reduction is minimal and not worth the messy markup. I like to keep it readable so other people can learn from it.

```bash
$ npm install --save-dev gulp-htmlmin@1.2.0
```

{{% figure class="code-figure" caption="gulp/config.js" %}}
```javascript
optimize: {
  css: {
    ...
  },
  js: {
    ...
  },
  images: {
    ...
  },
  html: {
    src: production + '/**/*.html',
    dest: production,
    options: {
      collapseWhitespace: true
    }
  }
}
```
{{% /figure %}}

{{% figure class="code-figure" caption="gulp/tasks/production/optimize-html.js" %}}
```javascript
var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');
var config  = require('../../config').optimize.html;

/**
 * Minimize HTML
 */
gulp.task('optimize:html', function() {
  return gulp.src(config.src)
    .pipe(htmlmin(config.options))
    .pipe(gulp.dest(config.dest));
});
```
{{% /figure %}}

### Source Code

{{< download url="https://github.com/kogakure/gulp-tutorial" text="View Source on GitHub" >}}

## Conclusion
This concludes the 12th part of my series *Introduction to Gulp.js*. Today we learned how to minimize CSS and JavaScript files and reduce the size of images.