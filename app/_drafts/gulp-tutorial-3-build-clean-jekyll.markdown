---
layout: post
language: "en"
title: "Introduction to Gulp.js (3) – Build, Clean and Jekyll"
author: "Stefan Imhoff"
excerpt: ""
categories:
tags:
---

## Build
Next I create a `build` task. This task will run all other tasks, which are needed to create the site. By default Gulp runs all tasks in parallel. That’s why I will get a problem if a specific order is needed. I will need a node module which runs tasks in a sequence:

{% highlight sh %}
$ npm install --save-dev run-sequence
{% endhighlight %}

Next I create the task:

{% figure code-figure "build.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence('delete',
  [
    'jekyll',
    'sass',
    'scripts',
    'images',
    'copy:fonts'
  ],
  'base64',
  callback);
});
{% endhighlight %}
{% endfigure %}

This task will first delete the assets folder (Jekyll is deleted by default), then create in parallel the Jekyll site, CSS files from SASS files, bundle the JavaScript files, copy images to the assets folder and copy vector fonts. After the `sass` task is finished I replace small PNG files with Base64 encoding to inline them in my CSS files.

## Delete Assets
To wipe out all files in the asset folder I use the node module `del`.

{% highlight sh %}
$ npm install --save-dev del
{% endhighlight %}

I need to add a config for deleting:

{% figure code-figure "config.js" %}
{% highlight javascript %}
browsersync: {
...
},
delete: {
  src: [developmentAssets]
}
{% endhighlight %}
{% endfigure %}

I will shorten all configuration options from now on. Every task will have a own option section. These are JavaScript objects so don’t forget the trailing comma if you add a new configuration option.

The actuall task will look like this:

{% figure code-figure "delete.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var del    = require('del');
var config = require('../../config').delete;

/**
 * Delete folders and files
 */
gulp.task('delete', function(callback) {
  del(config.src, callback);
});
{% endhighlight %}
{% endfigure %}

## Jekyll
Next I will write the config and task to create the Jekyll site:

{% figure code-figure "config.js" %}
{% highlight javascript %}
jekyll: {
  development: {
    src:    src,
    dest:   development,
    config: '_config.yml'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "jekyll.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync');
var config      = require('../../config').jekyll.development;

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll', function(done) {
  browsersync.notify('Compiling Jekyll');

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], { stdio: 'inherit' })
  .on('close', done);
});
{% endhighlight %}
{% endfigure %}

There is a gulp plugin for Jekyll, but it’s alpha and was blacklisted, because it’s not needed as you can run shell tasks with node. But I have to send the `done` status, when the task is finished.

All this task is doing is running `jekyll build` with some options. I use `app` as the source folder, `build/development` as the target and point to my `_config.yml`.
