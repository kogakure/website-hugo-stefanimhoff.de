---
layout: post
language: "en"
title: "Introduction to Gulp.js 15: Performance Improvements with WebP and Gzip"
date: 2014-12-21T11:15:00+01:00
updated: 2015-03-09T12:35:00+01:00
author: "Stefan Imhoff"
og_image: "/assets/images/artikel/gulp-tutorial-15.jpg"
description: "Gulp.js tutorial: How to improve the performance with WebP and Gzip"
categories:
- Code
tags:
- gulp
- tutorial
- automation
- performance
---

This is the 15th part of my series *Introduction to Gulp.js*. Today I’ll add some tasks for performance improvement of the website with WebP for images and Gzip for text files.

{% figure image-figure attribution %}
<img src="/assets/images/artikel/gulp-tutorial-15.jpg" alt="A oversized Captain America holding a Big Gulp">
<p class="attribution-text"><i class="icon-cc"></i> Jess, <a href="https://www.flickr.com/photos/lundgrenphotography/8050895411">CAPTAIN AMERCIA</a></p>
{% endfigure %}

{% include articles/gulp-toc.html %}

## Using WebP for images
[WebP](https://developers.google.com/speed/webp/) is a new image format developed by Google. With WebP it’s possible to achieve a much better compression with a better quality as with JPEG or PNG. Multiple browsers like **Google Chrome**, **Opera** or **Konquerer** already support this image format.

On my website I use a header image which is in JPEG format **69 KB** in size, the same image is in WebP only **44 KB**. WebP is able to reduce the size of images by **25-34%**, which is a lot.

That’s why I will create a task, which creates WebP images of my PNG and JPEG images and let the server deliver the smaller format to browsers, which support it.

First I install the Gulp.js module for WebP:

{% highlight sh %}
$ npm install --save-dev gulp-webp@2.1.1
{% endhighlight %}

I add an entry to the configuration file:

{% figure code-figure "gulp/config.js" %}
{% highlight javascript %}
webp: {
  src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
  dest: productionAssets + '/images/',
  options: {}
},
{% endhighlight %}
{% endfigure %}

The task is short and straight forward:

{% figure code-figure "gulp/tasks/production/webp.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var webp   = require('gulp-webp');
var config = require('../../config').webp;

/**
 * Convert images to WebP
 */
gulp.task('webp', function() {
  return gulp.src(config.src)
    .pipe(webp(config.options))
    .pipe(gulp.dest(config.dest));
});
{% endhighlight %}
{% endfigure %}

This task needs to be run only for production and has to be executed after the revisioning of the images is finished, because the server will just deliver a WebP image of the same name to the browser.

{% figure code-figure "gulp/tasks/production/build.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('delete', 'jekyll:production',
  // ...,
  'revision',
  'rev:collect',
  'webp',
  callback);
});
{% endhighlight %}
{% endfigure %}

It’s neccessary to tell the server to rewrite the URLs of our images. There are multiple techniques for this, but I’ll use a `.htaccess` file:

{% figure code-figure "app/htaccess" %}
{% highlight apache %}
---
layout: null
permalink: .htaccess
---

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP_ACCEPT} image/webp
  RewriteCond %{DOCUMENT_ROOT}/$1.webp -f
  RewriteRule (.+)\.(jpe?g|png)$ $1.webp [T=image/webp,E=accept:1]
</IfModule>

<IfModule mod_headers.c>
  Header append Vary Accept env=REDIRECT_accept
</IfModule>

AddType image/webp .webp
{% endhighlight %}
{% endfigure %}

It is possible to use an `.htaccess` file and include in the [configuration file](http://jekyllrb.com/docs/configuration/) as to be included. Otherwise Jekyll will ignore hidden files and don’t copy them to the target directory.

But I like it more to add [Yaml Front Matter](http://jekyllrb.com/docs/frontmatter/) and create the file this way. Another advantage is that the file isn’t invisible.

If you sync your production website to a server it will deliver to browsers, which support WebP the Webp format when requesting a JPEG or PNG.

{% aside aside-hint %}
<h4>It isn’t working …</h4>
<p>Don’t wonder: The <code>.htaccess</code> file won’t work with the development server. It will need a server with support for <code>mod_rewrite</code> and <code>mod_headers</code> and of course support <code>.htaccess</code> files.</p>
{% endaside %}

## Gzip text files
Many servers compress files by default with Gzip before sending them to the browser. But it is always good to pre-gzip the files because it will be faster, as the server doesn’t need to compress the file on every request, it will need less CPU and the compression rate will be much higher with pre-gzipped files, because most servers don’t use the maximum compression rate.

First I install the Gulp.js module:

{% highlight sh %}
$ npm install --save-dev gulp-gzip@0.0.8
{% endhighlight %}

I add an entry to the configuration file:

{% figure code-figure "gulp/config.js" %}
{% highlight javascript %}
gzip: {
  src: production + '/**/*.{html,xml,json,css,js}',
  dest: production,
  options: {}
},
{% endhighlight %}
{% endfigure %}

Next I create the task, which is short:

{% figure code-figure "gulp/tasks/production/gzip.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var gzip   = require('gulp-gzip');
var config = require('../../config').gzip;

/**
 * Gzip text files
 */
gulp.task('gzip', function() {
  return gulp.src(config.src)
    .pipe(gzip(config.options))
    .pipe(gulp.dest(config.dest));
});
{% endhighlight %}
{% endfigure %}

I add the task in my production build file to an JavaScript Array together with the `webp` task, because this task and the Gzip task may run in parallel; WebP works only with images and Gzip only with text files.

{% figure code-figure "gulp/tasks/production/build.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('delete', 'jekyll:production',
  // ...,
  'revision',
  'rev:collect',
  [
    'webp',
    'gzip'
  ],
  callback);
});
{% endhighlight %}
{% endfigure %}


{% include articles/gulp-code.html %}

## Conclusion
This concludes the 15th part of my series *Introduction to Gulp.js*. We learned how to convert images to the WebP format and how to compress text files with Gzip. Every byte we can reduce will increase the speed of the website.
