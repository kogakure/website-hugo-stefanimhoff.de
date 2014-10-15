---
layout: post
language: "en"
title: "Introduction to Gulp.js (13) – Revisioning"
author: "Stefan Imhoff"
excerpt: ""
categories:
tags:
---

{% include articles/gulp-toc.html %}

## Copy Vector Fonts for Production
Another boring and short tasks, which is doing just one simple thing: Copy the fonts to the production assets folder. But that’s the way Gulp was build. Have small tasks that do small things.

{% figure code-figure "config.js" %}
{% highlight javascript %}
copyfonts: {
  development: {
    ...
  },
  production: {
    src:  developmentAssets + '/fonts/*',
    dest: productionAssets + '/fonts'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "copy-fonts.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var config = require('../../config').copyfonts.production;

/**
 * Copy fonts to folder
 */
gulp.task('copy:fonts:production', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
{% endhighlight %}
{% endfigure %}

## Revisioning
Optimizing of my assets is done. But one important thing is missing: Revisioning.

For better performance one should always cache the assets for a very long time. Hard drives are huge these days but speed for requesting assets isn’t still that awesome (escpecially on mobile). But one problem occurs if you cache the assets on a hard drive of a visitor. If you update a file, the browser will still serve the old file. And if you cache it for 10 years the user will never get the new asset, unless s/he deletes the browser cache manually. But which user does this?

That’s why we need to rename every file that has been changed to invalidate the cache. I remember the days when we had to add a number by hand to our assets like `image_r1.png`, `image_r2.png`. This sucks. Now reading the content of a file and generating a hash achieve this. This will be always the same, unless something gets changed.

My next tasks will rename all assets. This way the `application.css` will become `application-f084d03b.css`. If I change just one dot in this file it will get a new hash.

I install `gulp-rev`, which will handle this renaming of assets:

{% highlight sh %}
$ npm install --save-dev gulp-rev
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
revision: {
  src: {
    assets: [
      productionAssets + '/css/*.css',
      productionAssets + '/js/*.js',
      productionAssets + '/images/**/*'
    ],
    base: production
  },
  dest: {
    assets: production,
    manifest: {
      name: 'manifest.json',
      path: productionAssets
    }
  }
}
{% endhighlight %}
{% endfigure %}

This task will rename all assets and create a JSON file containing all files, which where renamed and their old and new file names.

{% figure code-figure "revision.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var rev    = require('gulp-rev');
var config = require('../../config').revision;

/**
 * Revision all asset files and
 * write a manifest file
 */
gulp.task('revision', function() {
  return gulp.src(config.src.assets, { base: config.src.base })
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev())
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev.manifest({ path: config.dest.manifest.name }))
    .pipe(gulp.dest(config.dest.manifest.path));
});
{% endhighlight %}
{% endfigure %}

## Replacing Paths to Assets
The last step of my production build is to replace all occurrences of assets with a revisioned file name in all files.

This task will need `gulp-rev-collector` to replace the paths names to assets:

{% highlight sh %}
$ npm install --save-dev gulp-rev-collector
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
collect: {
  src: {
    manifest: productionAssets + '/manifest.json',
    files:  production + '/**/*.{html,xml,txt,json,css,js}'
  },
  dest: production
}
{% endhighlight %}
{% endfigure %}

I replace these paths only in files I know they could contain paths to assets. Don’t include any images or binary files. Revision collector will try to open them and destroy most binary files.

{% figure code-figure "rev-collector.js" %}
{% highlight javascript %}
var gulp    = require('gulp');
var collect = require('gulp-rev-collector');
var config = require('../../config').collect;

/**
 * Replace all links to assets in files
 * from a manifest file
 */
gulp.task('rev:collect', function() {
  return gulp.src([
    config.src.manifest,
    config.src.files
  ])
  .pipe(collect())
  .pipe(gulp.dest(config.dest));
});
{% endhighlight %}
{% endfigure %}

This task will look into the `manifest.json` file and replace every path to one of the assets in every HTML, CSS, JavaScript, and Text etc.

Our production build is finished! Only one thing is missing to complete this series of tutorials about Gulp: Deploying the Website to my server.
