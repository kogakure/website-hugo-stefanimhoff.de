---
title: 'Introduction to Gulp.js 7: Base64 Encoded Images'
slug: gulp-tutorial-7-base64
author: Stefan Imhoff
date: 2014-10-24T07:30:00+02:00
description: 'The ultimative tutorial and guide for Gulp.js: How to replace small images with base64 encoded images.'
og_image: 'assets/images/articles/2014/gulp-tutorial-7-base64/gulp-tutorial-7.jpg'
download_url: 'https://github.com/kogakure/gulp-tutorial'
download_text: 'View Source on GitHub'
categories: ['code']
series: ['gulp']
---

This is the 7th part of my series _Introduction to Gulp.js_. Today I will use Gulp.js to replace a lot of my URLs to small images with Base64 encoded images.

<figure class="image-figure">
  <img src="/assets/images/articles/2014/gulp-tutorial-7-base64/gulp-tutorial-7.jpg" alt="Big Gulp at the beach">
  <figcaption>
  The HI Life w/ Lime, <a href="https://www.flickr.com/photos/bi11jon/445799182" target="_blank" rel="nofollow" rel="noopener">Big Gulp</a>
  </figcaption>
</figure>

## Base64 encoded images

The last task executed by my `build` task is one, which replaces the URLs of small images in my CSS files with Base64 encoded images. This way the images get embedded into the CSS file and don’t need an additional server request. If the images are not too large this will speed up loading my website a lot.

I use a lot of small size patterns on my website because I doesn’t like the _Flat Design_ approach a lot. The real world isn’t flat. Nowhere. There is always structure, pattern, shade and light. The patterns I use are from the fantastic website [Subtle Pattern](https://www.toptal.com/designers/subtlepatterns/). They have a few hundred really nice subtle patterns.

To load the background pattern I use SCSS like this:

```scss
%pattern-light-grey {
  background-color: $background-color;
  background-image: url(/assets/images/patterns/light_grey.png);
  background-size: 301px 621px;
}

body {
  @extend %pattern-light-grey;
}
```

The generated CSS looks like this:

```css
body {
  background-color: #fdfdfd;
  background-image: url(/assets/images/patterns/light_grey.png);
  background-size: 301px 621px;
}
```

After the task ran, the CSS will look like this:

```css
body {
  background-color: #fdfdfd;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAATaBAMAAAB4FdU7AAAA…);
  background-size: 301px 621px;
}
```

For this task I will need another Gulp.js plugin:

```bash
$ npm install --save-dev gulp-base64@0.1.2
```

I add a new configuration entry and create the task:

<p class="code-info">gulp/config.js</p>

```javascript
base64: {
  src: developmentAssets + '/css/*.css',
  dest: developmentAssets + '/css',
  options: {
    baseDir: build,
    extensions: ['png'],
    maxImageSize: 20 * 1024, // bytes
    debug: false
  }
}
```

I only replace images with the ending PNG and only if maximal 20 KB of size. This way my high resolution images don’t get embedded into the CSS file.

<p class="code-info">gulp/tasks/development/base64.js</p>

```javascript
var gulp = require('gulp');
var base64 = require('gulp-base64');
var config = require('../../config').base64;

/**
 * Replace urls in CSS fies with base64 encoded data
 */
gulp.task('base64', ['sass'], function() {
  return gulp
    .src(config.src)
    .pipe(base64(config.options))
    .pipe(gulp.dest(config.dest));
});
```

We are now finished with the development `build` task.

## Conclusion

This concludes the 7th part of my series _Introduction to Gulp.js_. We learned how to replace URLs to PNG images with Base64 encoded images. And we are now finished with our `build` task.
