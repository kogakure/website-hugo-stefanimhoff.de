---
layout: post
language: "en"
title: "Introduction to Gulp.js (10) – Generating Sprites"
author: "Stefan Imhoff"
excerpt: ""
categories:
tags:
---

{% include articles/gulp-toc.html %}

## Generating Sprites
You don’t need Compass to create sprites, Gulp is totally capable of achieving this tasks.

{% highlight sh %}
$ npm install --save-dev gulp.spritesmith
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
sprites: {
  src: srcAssets + '/images/sprites/icon/*.png',
  css: {
    cssName: '_sprites.scss',
    cssFormat: 'css',
    cssOpts: {
      cssClass: function (item) {
        // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
        if (item.name.indexOf('-hover') !== -1) {
          return '.icon-' + item.name.replace('-hover', ':hover');
          // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
        } else {
          return '.icon-' + item.name;
        }
      }
    },
    dest: srcAssets + '/scss/base/',
  },
  image: {
    imgName: 'icon-sprite.png',
    imgPath: '/assets/images/sprites/icon-sprite.png',
    dest: srcAssets + '/images/sprites/'
  }
}
{% endhighlight %}
{% endfigure %}

I split my config into three subsections: The source files (individual icons for the sprite), the output of the CSS file and the output of the image sprite. I use a custom `cssClass` which will generate `:hover` states by naming the hover sprites with `-hover`.

{% figure code-figure "sprites.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');
var config      = require('../../config').sprites;

/**
 * Generate sprite and css file from PNGs
 */
gulp.task('sprites', function() {

  var spriteData = gulp.src(config.src).pipe(spritesmith({
    imgName: config.image.imgName,
    imgPath: config.image.imgPath,
    cssName: config.css.cssName,
    cssFormat: config.css.cssFormat,
    cssOpts: config.css.cssOpts
  }));

  spriteData.img
    .pipe(gulp.dest(config.image.dest));

  spriteData.css
    .pipe(gulp.dest(config.css.dest));
});
{% endhighlight %}
{% endfigure %}

In the end I get two files: a partial `_sprites.scss` containing the class attributes and a sprite `icon-sprite.png` containing all images.

All development tasks are done now. We have got a running development server, tasks to create the Jekyll site and all assets and tasks for linting, sprite and vector font creation.

Next I will write the tasks needed to get production ready code.
