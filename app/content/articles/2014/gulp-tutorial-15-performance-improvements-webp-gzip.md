---
language: "en"
title: "Introduction to Gulp.js 15: Performance Improvements with WebP and Gzip"
date: 2014-12-21T11:15:00+01:00
author: "Stefan Imhoff"
slug: "gulp-tutorial-15-performance-improvements-webp-gzip"
og_image: "artikel/gulp-tutorial-15.jpg"
description: "The ultimative tutorial and guide for Gulp.js: How to improve the speed and performance of your website with WebP and Gzip."
series:
- gulp
categories:
- code
---

This is the 15th part of my series *Introduction to Gulp.js*. Today I’ll add some tasks for performance improvement of the website with WebP for images and Gzip for text files.

{{< figure class="image-figure attribution" author="Jess" cite="CAPTAIN AMERCIA" cc="true" >}}
{{< image src="artikel/gulp-tutorial-15.jpg" alt="A oversized Captain America holding a Big Gulp" >}}
{{< /figure >}}

{{< toc_gulp >}}

## Using WebP for images
[WebP](https://developers.google.com/speed/webp/) is a new image format developed by Google. With WebP it’s possible to achieve a much better compression with a better quality as with JPEG or PNG. Multiple browsers like **Google Chrome**, **Opera** or **Konquerer** already support this image format.

On my website I use a header image which is in JPEG format **69 KB** in size, the same image is in WebP only **44 KB**. WebP is able to reduce the size of images by **25-34%**, which is a lot.

That’s why I will create a task, which creates WebP images of my PNG and JPEG images and let the server deliver the smaller format to browsers, which support it.

First I install the Gulp.js module for WebP:

```bash
$ npm install --save-dev gulp-webp@2.1.1
```

I add an entry to the configuration file:

{{% figure class="code-figure" caption="gulp/config.js" %}}
```javascript
webp: {
  src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
  dest: productionAssets + '/images/',
  options: {}
},
```
{{% /figure %}}

The task is short and straight forward:

{{% figure class="code-figure" caption="gulp/tasks/production/webp.js" %}}
```javascript
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
```
{{% /figure %}}

This task needs to be run only for production and has to be executed after the revisioning of the images is finished, because the server will just deliver a WebP image of the same name to the browser.

{{% figure class="code-figure" caption="gulp/tasks/production/build.js" %}}
```javascript
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
```
{{% /figure %}}

It’s neccessary to tell the server to rewrite the URLs of our images. There are multiple techniques for this, but I’ll use a `.htaccess` file:

{{% figure class="code-figure" caption="app/htaccess" %}}
```apacheconf
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
```
{{% /figure %}}

It is possible to use an `.htaccess` file and include in the [configuration file](https://jekyllrb.com/docs/configuration/) as to be included. Otherwise Jekyll will ignore hidden files and don’t copy them to the target directory.

But I like it more to add [Yaml Front Matter](https://jekyllrb.com/docs/frontmatter/) and create the file this way. Another advantage is that the file isn’t invisible.

If you sync your production website to a server it will deliver to browsers, which support WebP the Webp format when requesting a JPEG or PNG.

{{% hint headline="It isn’t working …" %}}
Don’t wonder: The `.htaccess` file won’t work with the development server. It will need a server with support for `mod_rewrite` and `mod_headers` and of course support `.htaccess` files.
{{% /hint %}}


## Gzip text files
Many servers compress files by default with Gzip before sending them to the browser. But it is always good to pre-gzip the files because it will be faster, as the server doesn’t need to compress the file on every request, it will need less CPU and the compression rate will be much higher with pre-gzipped files, because most servers don’t use the maximum compression rate.

First I install the Gulp.js module:

```bash
$ npm install --save-dev gulp-gzip@1.2.0
```

I add an entry to the configuration file:

{{% figure class="code-figure" caption="gulp/config.js" %}}
```javascript
gzip: {
  src: production + '/**/*.{html,xml,json,css,js}',
  dest: production,
  options: {}
},
```
{{% /figure %}}

Next I create the task, which is short:

{{% figure class="code-figure" caption="gulp/tasks/production/gzip.js" %}}
```javascript
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
```
{{% /figure %}}

I add the task in my production build file to an JavaScript Array together with the `webp` task, because this task and the Gzip task may run in parallel; WebP works only with images and Gzip only with text files.

{{% figure class="code-figure" caption="gulp/tasks/production/build.js" %}}
```javascript
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
```
{{% /figure %}}

### Source Code

{{< download url="https://github.com/kogakure/gulp-tutorial" text="View Source on GitHub" >}}

## Conclusion
This concludes the 15th part of my series *Introduction to Gulp.js*. We learned how to convert images to the WebP format and how to compress text files with Gzip. Every byte we can reduce will increase the speed of the website.
