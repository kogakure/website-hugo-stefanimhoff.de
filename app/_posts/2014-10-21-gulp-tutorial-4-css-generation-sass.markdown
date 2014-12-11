---
layout: post
language: "en"
title: "Introduction to Gulp.js 4: Creating CSS with Sass (and Compass)"
date: 2014-10-21T10:30:00+02:00
author: "Stefan Imhoff"
categories:
- Code
tags:
- gulp
- tutorial
- sass
- compass
- autoprefixer
- sourcemaps
---

This is the 4th part of my series *Introduction to Gulp.js*. Today I will show how to use Sass (and Compass if you want) to create CSS files. Furthermore I will add vendor prefixes with Autoprefixer and create Source Maps for easier debugging of the Sass files.

{% figure image-figure attribution %}
<img src="/assets/images/artikel/gulp-tutorial-4.jpg" alt="Sarah Palin holding a Big Gulp">
<p class="attribution-text"><i class="icon-cc"></i> Gage Skidmore, <a href="https://www.flickr.com/photos/gageskidmore/8571336210">Sarah Palin</a></p>
{% endfigure %}

{% include articles/gulp-toc.html %}

## Sass and Autoprefixer
I use [Sass](http://sass-lang.com/) as preprocessor for my CSS files. If you like to use [Compass](http://compass-style.org/) you just have to set an option for this task.

Go ahead and install the npm modules needed:

{% highlight sh %}
$ npm install --save-dev gulp-plumber gulp-ruby-sass gulp-filter gulp-changed gulp-autoprefixer gulp-sourcemaps
{% endhighlight %}

That’s a lot, but this task will do a lot.

{% figure code-figure "gulp/config.js" %}
{% highlight javascript %}
sass: {
  src:  srcAssets + '/scss/**/*.{sass,scss}',
  dest: developmentAssets + '/css',
  options: {
    noCache: true,
    compass: false,
    bundleExec: true,
    sourcemap: true,
    sourcemapPath: '../../_assets/scss'
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
{% endhighlight %}
{% endfigure %}

{% figure code-figure "gulp/task/development/sass.js" %}
{% highlight javascript %}
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
  var filter = gulpFilter(['*.css', '!*.map']);

  browsersync.notify('Compiling Sass');

  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sass(sassConfig))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write('.', { includeContent: false }))
    .pipe(filter.restore()) // Restore original files
    .pipe(gulp.dest(config.sass.dest));
});
{% endhighlight %}
{% endfigure %}

I load all my files with the suffix of `*.sass` or `*.scss`. First I pipe the files through *Plumber*. It will keep Gulp.js running if I create a syntax error in one of my files. It would normally just crash with an error. The next step creates the CSS files, running the `sass` command. I create source maps and finally put the CSS files to it’s destination.

{% aside aside-hint %}
<h4>F#*k!ng Source Maps</h4>
<p>Generating source maps, which actually work and point to the correct file is <em>a real pain</em>. There is a <a href="https://github.com/sindresorhus/gulp-ruby-sass/issues/17">known bug</a> in sass, which will mess up the paths. It took me literally hours to find out how to use <code>gulp-ruby-sass</code> and <code>gulp-sourcemaps</code> in combination to get working source maps.</p>
{% endaside %}

And I run the CSS files through Autoprefixer, which will add vendor prefixes. I used the Mixins of Compass a long time, but stopped now and write pure CSS. All vendor prefixes are added later for the browsers I want to support.

You might have guessed: If you want to use Compass, just set the option `compass` to `true`.

{% include articles/gulp-code.html %}

## Conclusion
This concludes the 4th part of my series *Introduction to Gulp.js*. We learned how to keep Gulp.js running, even when we produce errors, how to preprocess SCSS files with Sass, create Source Maps and add vendor prefixes to the CSS files.
