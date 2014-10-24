---
layout: post
language: "en"
title: "Introduction to Gulp.js 7: Base64 Encoded Images"
date: 2014-10-24T07:30:00+02:00
author: "Stefan Imhoff"
categories:
- Code
tags:
- gulp
- tutorial
- automation
- css
- base64
---

This is the 7th part of my series *Introduction to Gulp.js*. Today I will use Gulp.js to replace a lot of my URLs to small images with Base64 encoded images.

{% figure image-figure attribution %}
<img src="/assets/images/artikel/gulp-tutorial-7.jpg" alt="Big Gulp at the beach">
<p class="attribution-text"><i class="icon-cc"></i> The HI Life w/ Lime, <a href="https://www.flickr.com/photos/bi11jon/445799182">Big Gulp</a></p>
{% endfigure %}

{% include articles/gulp-toc.html %}

## Base64 encoded images
The last task executed by my `build` task is one, which replaces the URLs of small images in my CSS files with Base64 encoded images. This way the images get embedded into the CSS file and don’t need an additional server request. If the images are not too large this will speed up loading my website a lot.

I use a lot of small size patterns on my website because I doesn’t like the *Flat Design* approach a lot. The real world isn’t flat. Nowhere. There is always structure, pattern, shade and light. The patterns I use are from the fantastic website [Subtle Pattern](http://subtlepatterns.com/). They have a few hundred really nice subtle patterns.

To load the background pattern I use SCSS like this:

{% highlight scss %}
%pattern-light-grey {
  background-color: $background-color;
  background-image: url('/assets/images/patterns/light_grey.png');
  background-size: 301px 621px;
}

body {
  @extend %pattern-light-grey;
}
{% endhighlight %}

The generated CSS looks like this:

{% highlight css %}
body {
  background-color: #fdfdfd;
  background-image: url("/assets/images/patterns/light_grey.png");
  background-size: 301px 621px;
}
{% endhighlight %}

After the task ran, the CSS will look like this:

{% highlight css %}
body {
  background-color: #fdfdfd;
  background-image: url(data:image/png;base64,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z5fny/Pl4zq+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF9ex5fny/Pl+fJ8eb68ji/Pl+fL8+X58oEdX54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X17Hl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfXseN58vz5fnyfHm+vI4vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz43ny/Pl+fJ8eb68ji/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vryOG8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+vI4bz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54bz5fny/Pl+fJ8eR1fni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfnhvPl+fL8+X58nx5HV+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHkdN54vz5fny/Pl+fI6vjxfni/Pl+fL53fceL48X54vz5fny+v48nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58tx4vjxfni/Pl+fL6/jyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5XV8eb48X54vz5fny+v48nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL67jxfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5bnxfHm+PF+eL8+X1/Hl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny//dceP58nx5vjxfni+v48vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58tz4/nyfHm+PF+eL6/jy/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vr+PG8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni+v48bz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58bz5fnyfHm+PF9ex5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fnxvPl+fJ8eb48X17Hl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfXseN58vz5fnyfHm+vI4vz5fny/Pl8315HTeeL8+X58vz5fnyOr48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48N54vz5fny/Pl+fI6vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5HV+eL8+X58vz5fnyOr48X54vz5fnyz/c8eX58nx5vjxfni/fXb3viKrmH85Fd7XWLaL3waVHdtn2AAAAAElFTkSuQmCC);
  background-size: 301px 621px;
}
{% endhighlight %}

For this task I will need another Gulp.js plugin:

{% highlight sh %}
$ npm install --save-dev gulp-base64
{% endhighlight %}

I add a new configuration entry and create the task:

{% figure code-figure "gulp/config.js" %}
{% highlight javascript %}
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
{% endhighlight %}
{% endfigure %}

I only replace images with the ending PNG and only if maximal 20 KB of size. This way my high resolution images don’t get embedded into the CSS file.

{% figure code-figure "gulp/tasks/development/base64.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var base64 = require('gulp-base64');
var config = require('../../config');

/**
 * Replace urls in CSS fies with base64 encoded data
 */
gulp.task('base64', ['sass'], function() {
  var base64Config = config.base64.options;

  return gulp.src(config.base64.src)
    .pipe(base64(base64Config))
    .pipe(gulp.dest(config.base64.dest));
});
{% endhighlight %}
{% endfigure %}

We are now finished with the development `build` task.

{% include articles/gulp-code.html %}

## Conclusion
This concludes the 7th part of my series *Introduction to Gulp.js*. We learned how to replace URLs to PNG images with Base64 encoded images. And we are now finished with our `build` task.
