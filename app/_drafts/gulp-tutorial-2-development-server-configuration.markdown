---
layout: post
language: "en"
title: "Introduction to Gulp.js (2) – Development Server and Configuration"
author: "Stefan Imhoff"
excerpt: ""
categories:
tags:
---

## Installing Gulp
To run our `gulpfile.js` I need to install gulp:

{% highlight sh %}
$ npm install --save-dev gulp
{% endhighlight %}

If you run the command `gulp` on you command line you’ll get an error message <samp>Task 'default' is not in your gulpfile</samp>. This is because I haven’t written a gulp task until now.

Create inside the `gulp/tasks` folder a file `default.js` and write this code:

{% figure code-figure "default.js" %}
{% highlight javascript %}
var gulp = require('gulp');

gulp.task('default', function() {
  console.log('Hello Gulp!');
});
{% endhighlight %}
{% endfigure %}

I know … I said I’m sick of *Hello World* tutorials, but this won’t last very long. I’ll soon replace it with some valuable code. So stay with me.

If you execute the command `gulp` this gulp task will output <samp>Hello Gulp!</samp> to the console.

I will speed up the pace a little bit from now on.

## Watch
Instead of calling a function and output some text to the console I can execute tasks. I decided to execute the watch task when running `gulp`. These tasks will later watch for changes in files and update my files.

{% figure code-figure "default.js" %}
{% highlight javascript %}
var gulp = require('gulp');

gulp.task('default', ['watch']);
{% endhighlight %}
{% endfigure %}

You may run multiple tasks at once, which is why I write our `watch` task in an Array. Be careful: These tasks will run in parallel, not in a sequential order. Later I will show you how to run tasks in a predefined order.

I will create another folder within my `tasks` folder with the name `development` and put all tasks needed for development in this folder. This is not necessary, but I did so:

{% figure code-figure "watch.js" %}
{% highlight javascript %}
var gulp = require('gulp');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {

});
{% endhighlight %}
{% endfigure %}

I will come back later to write the `watch` task. For now the function will be empty and just run another task before running the watch task: `browsersync`. All tasks within the Array will be executed *before* the task is executed.

## BrowserSync
You might have heard of [LiveReload](http://livereload.com/), a tool that is watching for changes in your files and automatically reloads the server. With Stylesheets even reloading is not needed. The page refreshes with the changes instantly.

But [BrowserSync](http://www.browsersync.io/) is even better: It does all LiveReload does, but you don’t need a browser plugin and it syncs your actions like scroll, click, refresh or filling out forms to all browsers connected. This works even with mobile devices. And BrowserSync even has support for a build in development server. That’s why I will need nothing more than BrowserSync to get a development server with live reloading.

But first I install Gulp and BrowserSync:

{% highlight sh %}
$ npm install --save-dev gulp browser-sync
{% endhighlight %}

I create a new file `browser-sync.js` in `gulp/tasks/development/`. This file will start BrowserSync and the development server.

{% figure code-figure "browser-sync.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../../config').browsersync.development;

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync', ['build'], function() {
  browsersync(config);
});
{% endhighlight %}
{% endfigure %}

This code does needs some explanation: First I load Gulp and BrowserSync which are needed in this tasks. Then I load the config for BrowserSync. I will create this config file in a moment. Keeping all configurations out of our tasks will make it more usable and it can be easily shared between different projects.

The second thing worth mentioning is `['build']`. This does mean before starting BrowserSync it first will run the `build` Gulp task (which I will write later).

## Configuration
I create a new file `config.js` in the main Gulp folder:

{% figure code-figure "config.js" %}
{% highlight javascript %}
var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'app/_assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      files: [
        development + '/**'
      ]
    }
  }
};
{% endhighlight %}
{% endfigure %}

First I extract some paths needed over and over again later to variables and then I create a CommonJS module and add a entry for BrowserSync. BrowserSync runs with default options, but I want to override the port and I tell BrowserSync which folders should be served.

Jekyll wipes out all files on recreation and to speed up development I have to be creative, because I don’t want to recreate all assets on every Jekyll build. That’s why I serve more than one folder. I serve the folder `build/development`, which will hold the files created by Jekyll. My assets I will generate into a different folder `build/assets` so Jekyll doesn’t wiped them out. And additionally the folder `app/_assets` to link source maps later.

