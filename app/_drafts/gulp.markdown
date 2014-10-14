---
layout: post
language: "en"
title: "Gulp"
author: "Stefan Imhoff"
excerpt: ""
categories:
tags:
---

My website is running Jekyll now since the beginning of 2014. But I wasn’t quite happy with my build and development process.

{% include articles/gulp-toc.html %}

I started out with Rake tasks and chose later [Grunt.js](http://gruntjs.com/) as my build system, but parts of the process where left in Ruby. I used Compass a lot and Jekyll Asset Pipeline was handling my versioning. And Grunt.js and the Jekyll Asset Pipeline didn’t play well together. But then a new solution came along: [Gulp.js](http://gulpjs.com/).

## What is Gulp?
Gulp is *the streaming build system* and it’s main focus is speed, efficiency and simplicity. Where Grunt.js uses a lot of configuration with the actual process hidden in plugins, Gulp uses a simple and minimal API. You code your own build process by yourself and use JavaScript as the language. Of course you don’t have to program everything by yourself, there are nearly 800 plugins ready for Gulp. But even more Node.js modules can be used to build the perfect build and development process for **your** needs.

## Why do I want this at all?
As a front-end developer you will most likely need a lot of things to build a modern website. A development server, a preprocessor for your Sass, Less oder Stylus files, some automation to bundle your JavaScript, tools to optimize your code, to compress, compile or move things around. And if you change something, you want your files to update automatically, refresh the browser and so on. You don’t want to do this by hand, don’t you?

It’s 2014 and we don’t copy our files per drag-and-drop on a server via a FTP program, reload our browser by hitting continuously <kbd>F5</kbd> or crunch our images for a smaller filesize by hand. Right? **We don’t**!

## Node.js
Gulp and all plugins are written in JavaScript and use the Node.js® platform. You don’t have to know Node.js (but it will help a lot), but basic JavaScript skills are required to follow along. To start with my tutorial you need to install Node.js on your computer. This can be done by installing the package on the [Node.js website](http://nodejs.org/). Advanced users may install Node.js with their favorite package installer (Homebrew etc.).

## The Tutorial
This is the first part in a series of tutorials where I describe my whole build and development process step-by-step from start to finish. I am sick of all these *Hello World* tutorials spreading around the internet, describing just the basics and don’t show a whole process, go deeper or share learnings of the process.

Fortunately I stumbled upon a GitHub project called [gulp-starter](https://github.com/greypants/gulp-starter) which helped me a lot to structure my code and understand Gulp. So my process is partly derived from this fantastic project.

## Gulpfile
As with Grunt.js, all you need to start is a main file. In Gulp this file is called `gulpfile.js`. The first thing I learned from `gulp-starter` was to write my project in small parts and don’t use a large monolithic file with everything in it. This way I can easily share my Gulp files with other projects or just pass individual tasks around.

So my base `gulpfile.js` is very short:

{% figure code-figure "gulpfile.js" %}
{% highlight javascript %}
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
{% endhighlight %}
{% endfigure %}

All this task is doing is loading all tasks which live in `./gulp/tasks` or in any subfolder.

## First things first
The first thing to do is installing the required Node module `require-dir`.  But first we need a base installation file for Node.js. You may use the installation helper by typing the command `npm init`. But I find it faster to create a new file `package.json` and fill it with these values:

{% figure code-figure "package.json" %}
{% highlight json %}
{
  "name": "gulp-build",
  "version": "0.0.1",
  "description": "The build process of my website with Gulp.js",
  "private": true
}
{% endhighlight %}
{% endfigure %}

Now I am able to install Node modules and save them to this file for later reinstallation. Go ahead and install `require-dir`:

{% highlight sh %}
$ npm install --save-dev require-dir
{% endhighlight %}

This will install our first Node module and place it into a folder with the name `node_modules`. So don’t delete this folder or you will have to reinstall all modules again.

My Jekyll website lives in a folder called `app`. All our tasks will be placed in folder with the name `gulp`. Go a head and create a folder and within a subfolder with the name `tasks`. After installing our first module the structure of our project will look like this:

{% highlight sh %}
.
├── app
│   ├── _assets
│   ├── _data
│   ├── _drafts
│   ├── _includes
│   ├── _layouts
│   ├── _plugins
│   ├── _posts
│   └── index.html
├── gulp
│   └── tasks
├── gulpfile.js
├── node_modules
│   └── require-dir
└── package.json
{% endhighlight %}

You don’t need a [Jekyll](http://jekyllrb.com/) website to follow along, but if you want just follow along the installation process of Jekyll which is short and sweet:

{% highlight sh %}
$ gem install jekyll
$ jekyll new app
$ cd app
$ jekyll serve
{% endhighlight %}

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

## Watch task
Instead of calling a function and output some text to the console I can execute tasks. I decided to execute the watch task when running `gulp`. This tasks will later watch for changes in files and update my files.

{% figure code-figure "default.js" %}
{% highlight javascript %}
var gulp = require('gulp');

gulp.task('default', ['watch']);
{% endhighlight %}
{% endfigure %}

You may run multiple tasks at once, which is why I write our `watch` task in an Array. Be carefull: These tasks will run in parallel, not in a sequential order. Later I will show you how to run tasks in a predefined order.

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

But [BrowserSync](http://www.browsersync.io/) is even better: It does all LiveReload does, but you don’t need a browser plugin and it syncs your actions like scroll, click, refresh or filling out forms to all browsers conntected. This works even with mobile devices. And BrowserSync even has support for a build in development server. That’s why I will need nothing more than BrowserSync to get a development server with live reloading.

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

This code does needs some explanation: First I load Gulp and BrowserSync which are needed in this tasks. Then I load the config for BrowserSync. I will create this config file in a moment. Keeping all configuration out of our tasks will make it more usable and it can be easily shared between different projects.

The seconds thing worth mentioning is `['build']`. This does mean before starting BrowserSync it first will run the `build` Gulp task (which I will write later).

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

Jekyll wipes out all files on recreation and to speed up development I have to be creative, because I don’t want to recreate all assets on every Jekyll build. That’s why I serve more than one folder. I serve the folder `build/development` which will hold the files created by Jekyll. My assets I will generate into a different folder `build/assets` so they don’t get wiped out by Jekyll. And I serve the folder `app/_assets` to link source maps later.

## Build
Next I create a `build` task. This task will run all other tasks which are needed to create the site. By default Gulp runs all tasks in parallel. That’s why I will get a problem if a specific order is needed. I will need a node module which runs tasks in a sequence:

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

This tasks will first delete the assets folder (Jekyll is deleted by default), then create in parallel the Jekyll site, CSS files from SASS files, bundle the JavaScript files, copy images to the assets folder and copy vector fonts. After the `sass` task is finished I replace small PNG files with Base64 encoding to inline them in my CSS files.

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

## Sass/CSS
I use [Sass](http://sass-lang.com/) as preprocessor for my CSS files. If you like to use [Compass](http://compass-style.org/) you just have to set an option for this tasks.

Go ahead and install the npm modules needed:

{% highlight sh %}
$ npm install --save-dev gulp-plumber gulp-ruby-sass gulp-filter gulp-changed gulp-autoprefixer gulp-sourcemaps
{% endhighlight %}

That’s a lot, but this tasks will do a lot.

{% figure code-figure "config.js" %}
{% highlight javascript %}
sass: {
  src:  srcAssets + '/scss/**/*.{sass,scss}',
  dest: developmentAssets + '/css',
  options: {
    noCache: true,
    compass: false,
    bundleExec: true,
    sourcemap: true,
    sourcemapPath: '../../_assets/scss'
  }
},
autoprefixer: {
  browsers: [
    'last 2 versions',
    'safari 5',
    'ie 8',
    'ie 9',
    'opera 12.1',
    'ios 6',
    'android 4'
  ],
  cascade: true
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "sass.js" %}
{% highlight javascript %}
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browsersync  = require('browser-sync');
var sass         = require('gulp-ruby-sass');
var gulpFilter   = require('gulp-filter');
var changed      = require('gulp-changed');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function() {
  var sassConfig = {
    noCache: config.sass.options.noCache,
    compass: config.sass.options.compass,
    bundleExec: config.sass.options.bundleExec,
    sourcemap: config.sass.options.sourcemap,
    sourcemapPath: config.sass.options.sourcemapPath,
    onError: browsersync.notify
  };

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map']);

  browsersync.notify('Compiling Sass');

  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(changed(config.sass.dest)) // Ignore unchanged files
    .pipe(sass(sassConfig))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: config.autoprefixer.browsers,
      cascade: config.autoprefixer.cascade
    }))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write('.', { includeContent: false }))
    .pipe(filter.restore()) // Restore original files
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browsersync.reload({ stream: true }));
});
{% endhighlight %}
{% endfigure %}

I load all my files with the suffix of `*.sass` or `*.scss`. First I pipe the files through *Plumber*. It will keep Gulp running if I create a syntax error in one of my files. Gulp would normally just crash with an error. Then I pipe the files through a module which only processes files that where changed. The next step creates the CSS files, running the `sass` command. I create source maps and finally put the CSS files to it’s destination.

And I run the CSS files through Autoprefixer, which will add vendor prefixes. I used the Mixins of Compass a long time, but stopped now and write pure CSS. All vendor prefixes are added later for the Browsers I want to support.

You might have guessed: If you want to use Compass, just set the option `compass` to `true`.

## JavaScript
My scripts are a little more complex, because I uses [Browserify](http://browserify.org/) to bundle my JavaScript. If this is too complex for your needs you may just use [gulp-concat](https://www.npmjs.org/package/gulp-concat) to concatinate all your JavaScript files into one file.

Browserify is an awesome tool which allows you to use node modules in your browser. Over 70% of the node modules will run right away! And it will bundling up all of your dependencies. If you want to find out more about writing CommonJS modules for Browserify have a look into the documentation.

This task I saw in the [gulp-starter](https://github.com/greypants/gulp-starter). It’s quite long but clever. It allows to create multiple files with Browserify. I create two files. One file loaded in the head of my website containing Modernizr and one file with the rest of my JavaScript at the bottom.

Install the node modules needed for this task:

{% highlight sh %}
$ npm install --save-dev browserify vinyl-source-stream watchify gulp-util pretty-hrtime gulp-notify
{% endhighlight %}

Create the entry in the `config.js` file:

{% figure code-figure "config.js" %}
{% highlight javascript %}
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
{% endhighlight %}
{% endfigure %}

{% figure code-figure "scripts.js" %}
{% highlight javascript %}
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
      cache: {}, packageCache: {}, fullPaths: true,
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
{% endhighlight %}
{% endfigure %}

These tasks have some additional utilities for handling errors and logging the bundling process. Put these into a `utils` folder in your `gulp` folder:

{% figure code-figure "bundleLogger.js" %}
{% highlight javascript %}
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
{% endhighlight %}
{% endfigure %}

{% figure code-figure "handleErrors.js" %}
{% highlight javascript %}
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
{% endhighlight %}
{% endfigure %}
