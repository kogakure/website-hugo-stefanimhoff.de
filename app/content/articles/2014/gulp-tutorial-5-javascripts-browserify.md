---
language: "en"
title: "Introduction to Gulp.js 5: Bundling JavaScript with Browserify"
date: 2014-10-22T08:00:00+02:00
author: "Stefan Imhoff"
slug: "gulp-tutorial-5-javascripts-browserify"
og_image: "artikel/gulp-tutorial-5.jpg"
description: "The ultimative tutorial and guide for Gulp.js: How to bundle JavaScript files with Browserify and use CommonJS modules to structure and organize your code."
series:
- gulp
categories:
- code
tags:
- gulp
- tutorial
- automation
- javascript
- browserify
- commonjs
---

This is the 5th part of my series *Introduction to Gulp.js*. Today I will show how to use Browserify to bundle your JavaScript and use CommonJS modules to run node modules in the Browser.

{{< figure class="image-figure attribution attribution-caption" caption="If <em>Double Gulp</em> isn’t enough, try <strong>Ultimate Gulp</strong> or <strong>Xtreme Gulp</strong>" author="Keegan Berry" cite="DSCN8833" url="https://www.flickr.com/photos/superdeathsquid/" cc="true" >}}
{{< image src="artikel/gulp-tutorial-5.jpg" alt="Ultimate Gulp and X-Treme Gulp" >}}
{{< /figure >}}

{{< toc_gulp >}}

## Browserify
This task is a little more complex, because I use [Browserify](http://browserify.org/) to bundle my JavaScript. If this is too complex for your needs you may just use [gulp-concat](https://www.npmjs.com/package/gulp-concat) to concatenate all your JavaScript files into one file.

Browserify is an awesome tool, which allows you to use node modules in your browser. Over 70% of the node modules will run right away! And it will bundle up all of your dependencies. If you want to find out more about writing CommonJS modules for Browserify have a look into the documentation.

This task I saw in the <del>gulp-starter</del> <ins>[blendid](https://github.com/vigetlabs/blendid)</ins>. It’s quite long but clever. It allows to create multiple files with Browserify. I create two files. One file is loaded in the head of my website containing [Modernizr](https://modernizr.com/) and one file with the rest of my JavaScript at the bottom.

## Creating JavaScript files with Browserify
Install the node modules needed for this task:

```bash
$ npm install --save-dev browserify@11.2.0 vinyl-source-stream@1.0.0 watchify@3.4.0 gulp-util@3.0.1 pretty-hrtime@1.0.1 gulp-notify@2.0.0
```

Create the entry in the `config.js` file:

{{% figure class="code-figure" caption="gulp/config.js" %}}
```javascript
browserify: {
  // Enable source maps
  debug: true,
  // Additional file extensions to make optional
  extensions: ['.coffee', '.hbs'],
  // A separate bundle will be generated for each
  // bundle config in the list below
  bundleConfigs: [{
    entries:    './' + srcAssets + '/javascripts/application.js',
    dest:       developmentAssets + '/js',
    outputName: 'application.js'
  }, {
    entries:    './' + srcAssets + '/javascripts/head.js',
    dest:       developmentAssets + '/js',
    outputName: 'head.js'
  }]
}
```
{{% /figure %}}

{{% figure class="code-figure" caption="gulp/tasks/development/scripts.js" %}}
```javascript
var gulp         = require('gulp');
var browsersync  = require('browser-sync');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var watchify     = require('watchify');
var bundleLogger = require('../../util/bundleLogger');
var handleErrors = require('../../util/handleErrors');
var config       = require('../../config').browserify;

/**
 * Run JavaScript through Browserify
 */
gulp.task('scripts', function(callback) {

  browsersync.notify('Compiling JavaScript');

  var bundleQueue = config.bundleConfigs.length;

  var browserifyThis = function(bundleConfig) {

    var bundler = browserify({
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: false,
      // Specify the entry point of your app
      entries: bundleConfig.entries,
      // Add file extentions to make optional in your requires
      extensions: config.extensions,
      // Enable source maps!
      debug: config.debug
    });

    var bundle = function() {
      // Log when bundling starts
      bundleLogger.start(bundleConfig.outputName);

      return bundler
        .bundle()
        // Report compile errors
        .on('error', handleErrors)
        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specifiy the
        // desired output filename here.
        .pipe(source(bundleConfig.outputName))
        // Specify the output destination
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    if(global.isWatching) {
      // Wrap with watchify and rebundle on changes
      bundler = watchify(bundler);
      // Rebundle on update
      bundler.on('update', bundle);
    }

    var reportFinished = function() {
      // Log when bundling completes
      bundleLogger.end(bundleConfig.outputName)

      if(bundleQueue) {
        bundleQueue--;
        if(bundleQueue === 0) {
          // If queue is empty, tell gulp the task is complete.
          // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
          callback();
        }
      }
    };

    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  config.bundleConfigs.forEach(browserifyThis);
});
```
{{% /figure %}}


This task has some additional utilities for handling errors and logging the bundling process. Put these into a `util` folder in your `gulp` folder:

{{% figure class="code-figure" caption="gulp/util/bundleLogger.js" %}}
```javascript
/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in browserify.js
*/

var gutil        = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
  start: function(filepath) {
    startTime = process.hrtime();
    gutil.log('Bundling', gutil.colors.green(filepath));
  },

  end: function(filepath) {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
  }
};
```
{{% /figure %}}

{{% figure class="code-figure" caption="gulp/util/handleErrors.js" %}}
```javascript
var notify = require("gulp-notify");

module.exports = function() {

  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};
```
{{% /figure %}}


## Using CommonJS Modules
Writing CommonJS modules is quite nice. You just export your function, object, string, integer or whatever you like to export as a module or just individually:

{{% figure class="code-figure" caption="math.js" %}}
```javascript
exports.add = function() {
  var sum = 0, i = 0, args = arguments, 1 = args.length;
  while (i < 1) {
    sum += args[i++];
  }
  return sum;
};
```
{{% /figure %}}

{{% figure class="code-figure" caption="navigation.js" %}}
```javascript
module.exports = {
  toggleNavigation: function() {
    ...
  }
};
```
{{% /figure %}}

Later you import your modules and use them:

{{% figure class="code-figure" caption="increment.js" %}}
```javascript
var add = require('./math').add;

exports.increment = function(val) {
  return add(val, 1);
};
```
{{% /figure %}}

{{% figure class="code-figure" caption="application.js" %}}
```javascript
var navigation = require('./navigation');
var triggerNavigation = document.querySelector('.toggle-navigation');

document.addEventListener('DOMContentLoaded', function() {
  triggerNavigation.addEventListener('click', navigation.toggleNavigation);
});
```
{{% /figure %}}

## Loading non-CommonJS files
But one problem remains: How do I use JavaScript files, which aren’t written in CommonJS syntax? Like Modernizr or jQuery?

I need to install `browserify-shim`:

```bash
$ npm install --save-dev browserify-shim@3.8.0
```

I open my `package.json` file and need to add a few lines:

{{% figure class="code-figure" caption="package.json" %}}
```json
{
  "...": "...",
  "browser": {
    "modernizr": "./app/_bower_components/modernizr/modernizr.js",
    "jquery": "./app/_bower_components/jquery/dist/jquery.js"
  },
  "browserify-shim": {
    "modernizr": "Modernizr",
    "jquery": "$"
  },
  "browserify": {
    "transform": [
      "browserify-shim"
    ]
  },
  "devDependencies": {
    "...": "..."
  }
}
```
{{% /figure %}}

In the section `"browser"` you point `browserify-shim` to the asset you want to shim. I use [Bower](https://bower.io/) and have installed my packages into `app/_bower_components/`. The name you choose is the name you have to require later in your JavaScripts.

Within `"browerify-shim"` you decide where to map this require to. To include jQuery or Modernizr later you would write:

{{% figure class="code-figure" caption="app/assets/javascripts/head.js" %}}
```javascript
require('modernizr');
```
{{% /figure %}}

{{% figure class="code-figure" caption="app/_assets/javascripts/application.js" %}}
```javascript
require('jquery');

$(function() {
  console.log("jQuery and Modernizr loaded");
});
```
{{% /figure %}}

You have to run `npm install` once you added a new entry to your `package.json` file.

### Source Code

{{< download url="https://github.com/kogakure/gulp-tutorial" text="View Source on GitHub" >}}

## Conclusion
This concludes the 5th part of my series *Introduction to Gulp.js*. We learned how to use Browserify to bundle JavaScript files, how to use CommonJS modules to run node in your Browser, and how to use non-CommonJS JavaScript files.
