---
layout: post
language: "en"
title: "Introduction to Gulp.js 10: Generating CSS Image Sprites"
date: 2014-10-27T07:40:00+02:00
updated: 2015-03-09T12:30:00+02:00
author: "Stefan Imhoff"
categories:
- Code
tags:
- gulp
- tutorial
- automation
- sprites
---

This is the 10th part of my series *Introduction to Gulp.js*. Today I will use Gulp.js to create CSS image sprites.

{% figure image-figure attribution %}
<img src="/assets/images/artikel/gulp-tutorial-10.jpg" alt="A Double Gulp">
<p class="attribution-text"><i class="icon-cc"></i> Fabienne Wassermann, <a href="https://www.flickr.com/photos/fabi_k/5119690026">double gulp</a></p>
{% endfigure %}

{% include articles/gulp-toc.html %}

Just to be sure everybody knows what I’m talking about: A CSS image sprite is a collection of images put into a single image. This way fewer requests are needed and the website will load faster. The CSS file will move the image for each sprite to the correct position.

CSS images sprites are not used that often any more, because of SVG or vector fonts. But I still use them as a fallback for browsers incapable of displaying vector fonts.

I will need a Spritesmith plugin for Gulp.js:

{% highlight sh %}
$ npm install --save-dev gulp.spritesmith@1.4.0
{% endhighlight %}

{% figure code-figure "gulp/config.js" %}
{% highlight javascript %}
sprites: {
  src: srcAssets + '/images/sprites/icon/*.png',
  dest: {
    css: srcAssets + '/scss/base/',
    image: srcAssets + '/images/sprites/'
  },
  options: {
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
    imgName: 'icon-sprite.png',
    imgPath: '/assets/images/sprites/icon-sprite.png'
  }
}
{% endhighlight %}
{% endfigure %}

I split my config into three subsections: The source files (individual icons for the sprite), the destination for the sprite and the css partial and the options for the image sprite. I use a custom `cssClass` which will generate `:hover` states by naming the hover sprites with `-hover`.

{% figure code-figure "gulp/tasks/development/sprites.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');
var config      = require('../../config').sprites;

/**
 * Generate sprite and css file from PNGs
 */
gulp.task('sprites', function() {

  var spriteData = gulp.src(config.src).pipe(spritesmith(config.options));

  spriteData.img
    .pipe(gulp.dest(config.dest.image));

  spriteData.css
    .pipe(gulp.dest(config.dest.css));
});
{% endhighlight %}
{% endfigure %}

In the end I get two files: a partial `_sprites.scss` containing the class attributes and a sprite `icon-sprite.png` containing all images.

All development tasks are done now. We have got a running development server, tasks to create the Jekyll site and all assets and tasks for linting, sprite and vector font creation.

Next I will write the tasks needed to get production ready code.

{% include articles/gulp-code.html %}

## Conclusion
This concludes the 10th part of my series *Introduction to Gulp.js*. Today we learned how to create CSS image sprites with Gulp.js and Spritesmith.
