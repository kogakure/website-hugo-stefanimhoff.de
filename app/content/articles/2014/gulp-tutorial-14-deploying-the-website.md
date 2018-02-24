---
language: "en"
title: "Introduction to Gulp.js 14: Deploying the Website with Rsync"
date: 2014-10-31T08:00:00+02:00
author: "Stefan Imhoff"
slug: "gulp-tutorial-14-deploying-the-website"
og_image: "artikel/gulp-tutorial-14.jpg"
description: "The ultimative tutorial and guide for Gulp.js: How to deploy your website with rsync to your server."
series:
- gulp
categories:
- code
download_url: "https://github.com/kogakure/gulp-tutorial"
download_text: "View Source on GitHub"
---

This is the 14th of my series *Introduction to Gulp.js*. Today I will write a task to sync the files of my Jekyll site to my webserver.

{{< figure class="image-figure attribution" caption="" author="Jayanta Debnath" cite="BIG GULP!" url="https://www.flickr.com/photos/jkdsphotography/13786076413" cc="true" >}}
{{< image src="artikel/gulp-tutorial-14.jpg" alt="A fluffy bunny with a Big Gulp" >}}
{{< /figure >}}

{{< toc_gulp >}}

## Deploying the Website

There are a lot of possibilites to get a website on the server. You may use FTP, SFTP, SCP, SCP2, Rsync or Git. I use Rsync because it’s fast and easy to use.

I write another tasks as entry point: `deploy`

{{% figure class="code-figure" caption="gulp/tasks/deploy.js" %}}
```javascript
var gulp = require('gulp');

/**
 * Start rsync task
 */
gulp.task('deploy', ['rsync']);
```
{{% /figure %}}

This will just start the `rsync` task. But I could add more tasks, for example a task, which creates a zip archive of the build and copies it to a backup on my harddrive.

```bash
$ npm install --save-dev gulp-rsync@0.0.5
```

{{% figure class="code-figure" caption="gulp/config.js" %}}
```javascript
rsync: {
  src: production + '/**',
  options: {
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
}
```
{{% /figure %}}

This task will grab all files in my production folder, connect to my server and copy all files recursively to my website root. It will delete old files and just add changes to the server.

{{% figure class="code-figure" caption="gulp/tasks/production/rsync.js" %}}
```javascript
var gulp   = require('gulp');
var rsync  = require('gulp-rsync');
var config = require('../../config').rsync;

/**
 * Copy files and folder to server
 * via rsync
 */
gulp.task('rsync', function() {
  return gulp.src(config.src)
    .pipe(rsync(config.options));
});
```
{{% /figure %}}

## Conclusion

This concludes the series *Introduction to Gulp.js*. Developing and deploying with Gulp.js is fun.

I like the UNIX philosophy of Gulp.js: Having small files, which do one task and connect these to larger workflows. And because I kept my Gulp.js tasks small, pluggable and easily shareable, I was able to add Gulp.js to my second website in less than five minutes.
