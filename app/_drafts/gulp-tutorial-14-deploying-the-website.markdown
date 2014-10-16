---
layout: post
language: "en"
title: "Introduction to Gulp.js 14: Deploying the Website with Rsync"
author: "Stefan Imhoff"
excerpt: ""
categories:
- Code
tags:
- gulp
- tutorial
- automation
---

This is the 14th and last part of my series *Introduction to Gulp.js*. Today I will write a task to sync the files of my website to my webserver.

[IMAGE]

{% include articles/gulp-toc.html %}

## Deploying the Website
There are a lot of possibilites to get a website on the server. You may use FTP, SFTP, SCP, SCP2, Rsync or Git. I use Rsync because it’s fast and easy to use.

I write another tasks as entry point: `deploy`

{% figure code-figure "deploy.js" %}
{% highlight javascript %}
var gulp = require('gulp');

/**
 * Start rsync task
 */
gulp.task('deploy', ['rsync']);
{% endhighlight %}
{% endfigure %}

This will just start the `rsync` task. But I could add more tasks, for example a task, which creates a zip archive of the build and copies it to a backup on my harddrive.

{% highlight sh %}
$ npm install --save-dev gulp-rsync
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
rsync: {
  src: 'build/production/**',
  destination: '~/path/to/my/website/root/',
  root: production,
  hostname: 'mydomain.com',
  username: 'user',
  incremental: true,
  progress: true,
  relative: true,
  emptyDirectories: true,
  recursive: true,
  clean: true,
  exclude: ['.DS_Store'],
  include: []
}
{% endhighlight %}
{% endfigure %}

This task will grab all files in my production folder, connect to my server and copy all files recursively to my website root. It will delete old files and just add changes to the server.

{% figure code-figure "rsync.js" %}
{% highlight javascript %}
var gulp = require('gulp');
var rsync = require('gulp-rsync');
var config = require('../../config').rsync;

/**
 * Copy files and folder to server
 * via rsync
 */
gulp.task('rsync', function() {
  return gulp.src(config.src)
    .pipe(rsync({
      destination: config.destination,
      root: config.root,
      hostname: config.hostname,
      username: config.username,
      incremental: config.incremental,
      progress: config.progress,
      emptyDirectories: config.emptyDirectories,
      recursive: config.recursive,
      clean: config.clean,
      exclude: config.exclude,
      include: config.include
    }));
});
{% endhighlight %}
{% endfigure %}

## Conclusion
This concludes the series *Introduction to Gulp.js*. Developing and deploying with Gulp is fun. I like the UNIX philosophy of Gulp: Having small files, which do one task and connect these to larger workflows. And because I keeped my Gulp tasks small, pluggable and easily shareable, I was able to add Gulp to my second website in less than five minutes.
