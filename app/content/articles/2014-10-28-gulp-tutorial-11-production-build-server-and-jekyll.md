---
language: "en"
title: "Introduction to Gulp.js 11: Production Build, Server and Jekyll"
date: 2014-10-28T07:30:00+02:00
author: "Stefan Imhoff"
slug: "gulp-tutorial-11-production-build-server-and-jekyll"
og_image: "artikel/gulp-tutorial-11.jpg"
description: "The ultimative tutorial and guide for Gulp.js: How to write the production task for Jekyll and BrowserSync."
series:
- gulp
categories:
- code
tags:
- gulp
- tutorial
- automation
- sprites
---

This is the 11th part of my series *Introduction to Gulp.js*. Today I will start writing the production build task, set up a server to view the production code and build the production site with Jekyll.

{{< figure class="image-figure attribution" author="Hannah" cite="118/365" url="https://www.flickr.com/photos/girlaphid/4570474834" cc="true" >}}
{{< image src="artikel/gulp-tutorial-11.jpg" alt="A Girl looking on a Double Gulp" >}}
{{< /figure >}}

{{< toc_gulp >}}

In development I used the `default` Gulp.js tasks to run the development server, building the assets and watching for changes. For production I will need another entry point.

I decided to name my task `publish`. Later I am able to get a production build with the command `gulp publish`.

{{% figure class="code-figure" caption="gulp/tasks/publish.js" %}}
```javascript
var gulp = require('gulp');

/**
 * Run task browsersync:production
 */
gulp.task('publish', ['browsersync:production']);
```
{{% /figure %}}

I put this file on same level as the `default.js` file. This task is short and sweet: It does only one thing. Start a BrowserSync tasks for production. This way I can have a look on the production site before deploying it to my server.

## BrowserSync for Production
All production tasks will live in a folder `production/` inside of `gulp/tasks/`. I name the tasks of development and production the same but put them in different folders.

{{% figure class="code-figure" caption="gulp/config.js" %}}
```javascript
browsersync: {
  development: {
    ...
  },
  production: {
    server: {
      baseDir: [production]
    },
    port: 9998
  }
}
```
{{% /figure %}}

The only differences to the `browsersync` of `development` are these: I serve only the production folder and use a different port for the server. This way I can run `development` and `production` in parallel.

{{% figure class="code-figure" caption="gulp/tasks/production/browser-sync.js" %}}
```javascript
var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../../config').browsersync.production;

/**
 * Start a server and watch changes with BrowserSync
 */
gulp.task('browsersync:production', ['build:production'], function() {
  browsersync(config);
});
```
{{% /figure %}}

This task is boring. It just starts the production build.

## Build Task for Production

{{% figure class="code-figure" caption="gulp/tasks/production/build.js" %}}
```javascript
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
    'optimize:html',
    'copy:fonts:production'
  ],
  'revision',
  'rev:collect',
  callback);
});
```
{{% /figure %}}

A lot is going on in this task: I run tasks in a specific order with `run-sequence`. First I delete the assets folder for a fresh creation. Then I run the Jekyll build for production, create the development assets like I did in development. And after this is finished I start with optimizing my assets and revisioning of the files.

## Jekyll for Production
The Jekyll task is quite similar except for two things: I create my site to the production folder and I add another config file `_config.build.yml` as an option (be carefull, add no space between two files).

My Jekyll production config just overwrites some values as the `url`, hide future posts (`future: false`) or hide drafts (`show_drafts: false`).

{{% hint headline="Speed up development with Jekyll" %}}
To speed up generation of your site in development, you may set `limit_post: 5`, which will only generate the last five posts. Additionally I set `future: true` and `show_drafts: true` to see Drafts and Posts with a future date.
{{% /hint %}}

{{% figure class="code-figure" caption="gulp/config.js" %}}
```javascript
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
```
{{% /figure %}}

{{% figure class="code-figure" caption="gulp/tasks/production/jekyll.js" %}}
```javascript
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
```
{{% /figure %}}

### Source Code

{{< download url="https://github.com/kogakure/gulp-tutorial" text="View Source on GitHub" >}}

## Conclusion
This concludes the 11th part of my series *Introduction to Gulp.js*. Today I started to work on the production part of my website, including a server to view the production site, and generate a production build of my Jekyll site.