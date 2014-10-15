---
layout: post
language: "en"
title: "Introduction to Gulp.js (11) – Production Build, Server and Jekyll"
author: "Stefan Imhoff"
excerpt: ""
categories:
tags:
---


## Production
In development I used the `default` Gulp tasks to run the development server, building the assets and watching for changes. For production I will need another entry point.

I decided to name my task `publish`. So later I am able to get a production build with `gulp publish`. Name the task whatever you like.

{% figure code-figure "publish.js" %}
{% highlight javascript %}
var gulp = require('gulp');

/**
 * Run task browsersync:production
 */
gulp.task('publish', ['browsersync:production']);
{% endhighlight %}
{% endfigure %}

I put this file on same level as the `default.js` file. This task is short and sweet: It does only one thing. Start a BrowserSync tasks for production. This way I can have a look on the production site before deploying it to my server.

## BrowserSync for Production
All production tasks will live in a folder `production/` inside of `gulp/tasks/`. I name the tasks of development and production the same but put them in different folders. You are free to change this to whatever you like.

{% figure code-figure "config.js" %}
{% highlight javascript %}
browsersync: {
  development: {
    ...
  },
  production: {
    server: {
      baseDir: [production]
    },
    port: 9998,
    files: [
      production + '/**'
    ]
  }
}
{% endhighlight %}
{% endfigure %}

The only differences to the `browsersync` of `development` are these: I serve only the production folder and use a different port for the server. This way I can run `development` and `production` in parallel.

{% figure code-figure "browser-sync.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../../config').browsersync.production;

/**
 * Start a server and watch changes with BrowserSync
 */
gulp.task('browsersync:production', ['build:production'], function() {
  browsersync(config);
});
{% endhighlight %}
{% endfigure %}

This task is boring. It just starts the production build.

## Build for Production

{% figure code-figure "build.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('delete', 'jekyll:production',
  [
    'sass',
    'scripts',
    'images',
    'copy:fonts'
  ],
  'base64',
  [
    'optimize:css',
    'optimize:js',
    'optimize:images',
    'copy:fonts:production'
  ],
  'revision',
  'rev:collect',
  callback);
});
{% endhighlight %}
{% endfigure %}

A lot is going on in this task: I run tasks in a specific order with `run-sequence`. First I delete the assets folder for a fresh creation. Then I run the Jekyll build for production, create the development assets like I did in development. And after this is finished I start with optimizing my assets and revisioning of the files.

## Jekyll for Production
The Jekyll task is quite similar except for two things: I create my site to the production folder and I add another config file `_config.build.yml` as an option (be carefull, add no space between two files).

My Jekyll production config just overwrites some values as the `url`, hide future posts (`future: false`) or hide drafts (`show_drafts: false`).

{% aside aside-hint %}
<p>To speed up generation of your site in development, you may set <code>limit_post: 5</code>, which will only generate the last five posts. Additionally I set <code>future: true</code> and <code>show_drafts: true</code> to see Drafts and Posts with a future date.</p>
{% endaside %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
jekyll: {
  development: {
    ...
  },
  production: {
    src:    src,
    dest:   production,
    config: '_config.yml,_config.build.yml'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "jekyll.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync');
var config      = require('../../config').jekyll.production;

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll:production', function(done) {
  browsersync.notify('Compiling Jekyll (Production)');

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], { stdio: 'inherit' })
  .on('close', done);
});
{% endhighlight %}
{% endfigure %}
