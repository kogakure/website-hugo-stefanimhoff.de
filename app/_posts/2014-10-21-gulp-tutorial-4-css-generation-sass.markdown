---
layout: post
language: "en"
title: "Introduction to Gulp.js 4: Creating CSS with Sass (and Compass)"
date: 2014-10-21T10:30:00+02:00
updated: 2015-10-29T16:22:00+02:00
author: "Stefan Imhoff"
og_image: "/assets/images/artikel/gulp-tutorial-4.jpg"
description: "The ultimative tutorial and guide for Gulp.js: How to create CSS and Source Maps with Sass and Compass."
categories:
- code
tags:
- gulp
- tutorial
- sass
- compass
- autoprefixer
- sourcemaps
---

This is the 4th part of my series *Introduction to Gulp.js*. Today I will show how to use Sass (and Compass if you want) to create CSS files. Furthermore I will add vendor prefixes with Autoprefixer and create Source Maps for easier debugging of the Sass files.

<figure class="image-figure attribution">
  <div class="figure-content">
    <img src="{{ site.url }}/assets/images/artikel/gulp-tutorial-4.jpg" alt="Sarah Palin holding a Big Gulp">
    <p class="attribution-text"><svg class="attribution-icon-cc"><use xlink:href="#cc"></use></svg> Gage Skidmore, <a href="https://www.flickr.com/photos/gageskidmore/8571336210">Sarah Palin</a></p>
  </div>
</figure>

{% include articles/gulp-toc.html %}

## Sass and Autoprefixer
I use [Sass](http://sass-lang.com/) as preprocessor for my CSS files. If you like to use [Compass](http://compass-style.org/), you just have to set an option for this task.

Go ahead and install the npm modules needed:


```sh
$ npm install --save-dev gulp-plumber@1.0.1 gulp-ruby-sass@2.0.4 gulp-filter@3.0.1 gulp-changed@1.0.0 gulp-autoprefixer@3.0.2 gulp-sourcemaps@1.6.0
```

That’s a lot, but this task will do a lot.

```javascript
sass: {
  src:  srcAssets + '/scss/**/*.{sass,scss}',
  dest: developmentAssets + '/css',
  options: {
    noCache: true,
    compass: false,
    bundleExec: true,
    sourcemap: true
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
```

<p class="code-meta">gulp/config.js</p>

```javascript
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browsersync  = require('browser-sync');
var sass         = require('gulp-ruby-sass');
var gulpFilter   = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function() {
  var sassConfig = config.sass.options;

  sassConfig.onError = browsersync.notify;

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map'], { restore: true });

  browsersync.notify('Compiling Sass');

  return sass(config.sass.src, sassConfig)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: 'app/_assets/scss' }))
    .pipe(filter.restore) // Restore original files
    .pipe(gulp.dest(config.sass.dest));
});
```

<p class="code-meta">gulp/task/development/sass.js</p>

I load all my files with the suffix of `*.sass` or `*.scss`. First I pipe the files through *Plumber*. It will keep Gulp.js running if I create a syntax error in one of my files. It would normally just crash with an error. The next step creates the CSS files, running the `sass` command. I create source maps and finally put the CSS files to it’s destination.

And I run the CSS files through Autoprefixer, which will add vendor prefixes. I used the Mixins of Compass a long time, but stopped now and write pure CSS. All vendor prefixes are added later for the browsers I want to support.

You might have guessed: If you want to use Compass, just set the option `compass` to `true`.

{% include articles/gulp-code.html %}

## Conclusion
This concludes the 4th part of my series *Introduction to Gulp.js*. We learned how to keep Gulp.js running, even when we produce errors, how to preprocess SCSS files with Sass, create Source Maps and add vendor prefixes to the CSS files.
