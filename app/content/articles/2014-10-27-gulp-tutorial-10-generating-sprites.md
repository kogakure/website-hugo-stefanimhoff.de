---
title: Introduction to Gulp.js 10
subtitle: Generating CSS Image Sprites
slug: gulp-tutorial-10-generating-sprites
author: Stefan Imhoff
date: 2014-10-27T07:40:00+02:00
description: 'The ultimative tutorial and guide for Gulp.js: How to generate image sprite maps with Spritesmith.'
og_image: 'assets/images/articles/2014/gulp-tutorial-10-generating-sprites/gulp-tutorial-10.jpg'
download_url: 'https://github.com/kogakure/gulp-tutorial'
download_text: 'View Source on GitHub'
categories: ['code']
series: ['gulp']
---

This is the 10th part of my series _Introduction to Gulp.js_. Today I will use Gulp.js to create CSS image sprites.

<figure class="image-figure">
  <img src="/assets/images/articles/2014/gulp-tutorial-10-generating-sprites/gulp-tutorial-10.jpg" alt="A Double Gulp">
  <figcaption>
    Fabienne Wassermann, <a href="https://www.flickr.com/photos/fabi_k/5119690026" target="_blank" rel="nofollow" rel="noopener">double gulp</a>
  </figcaption>
</figure>

Just to be sure everybody knows what I’m talking about: A CSS image sprite is a collection of images put into a single image. This way fewer requests are needed and the website will load faster. The CSS file will move the image for each sprite to the correct position.

CSS images sprites are not used that often any more, because of SVG or vector fonts. But I still use them as a fallback for browsers incapable of displaying vector fonts.

I will need a Spritesmith plugin for Gulp.js:

```bash
$ npm install --save-dev gulp.spritesmith@4.1.1
```

<p class="code-info">gulp/config.js</p>

```javascript
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
```

I split my config into three subsections: The source files (individual icons for the sprite), the destination for the sprite and the css partial and the options for the image sprite. I use a custom `cssClass` which will generate `:hover` states by naming the hover sprites with `-hover`.

<p class="code-info">gulp/tasks/development/sprites.js</p>

```javascript
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var config = require('../../config').sprites;

/**
 * Generate sprite and css file from PNGs
 */
gulp.task('sprites', function() {
  var spriteData = gulp.src(config.src).pipe(spritesmith(config.options));

  spriteData.img.pipe(gulp.dest(config.dest.image));

  spriteData.css.pipe(gulp.dest(config.dest.css));
});
```

In the end I get two files: a partial `_sprites.scss` containing the class attributes and a sprite `icon-sprite.png` containing all images.

All development tasks are done now. We have got a running development server, tasks to create the Jekyll site and all assets and tasks for linting, sprite and vector font creation.

Next I will write the tasks needed to get production ready code.

## Conclusion

This concludes the 10th part of my series _Introduction to Gulp.js_. Today we learned how to create CSS image sprites with Gulp.js and Spritesmith.
