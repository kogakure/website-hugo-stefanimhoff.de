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
Gulp is *the streaming build system* and its main focus is speed, efficiency and simplicity. Where Grunt.js uses a lot of configuration with the actual process hidden in plugins, Gulp uses a simple and minimal API. You code your own build process by yourself and use JavaScript as the language. Of course you don’t have to program everything by yourself, there are nearly 800 plugins ready for Gulp. But even more Node.js modules can be used to build the perfect build and development process for **your** needs.

## Why do I want this at all?
As a front-end developer you will most likely need a lot of things to build a modern website. A development server, a preprocessor for your Sass, Less or Stylus files, some automation to bundle your JavaScript, tools to optimize your code, to compress, compile or move things around. And if you change something, you want your files to update automatically, refresh the browser and so on. You don’t want to do this by hand, don’t you?

It’s 2014 and we don’t copy our files per drag-and-drop on a server via a FTP program, reload our browser by hitting continuously <kbd>F5</kbd> or crunch our images for a smaller file size by hand. Right? **We don’t**!

## Node.js
Gulp and all plugins are written in JavaScript and use the Node.js® platform. You don’t have to know Node.js (but it will help a lot), but basic JavaScript skills are required to follow along. To start with my tutorial you need to install Node.js on your computer. This can be done by installing the package on the [Node.js website](http://nodejs.org/). Advanced users may install Node.js with their favorite package installer (Homebrew etc.).

## The Tutorial
This is the first part in a series of tutorials where I describe my whole build and development process step-by-step from start to finish. I am sick of all these *Hello World* tutorials spreading around the Internet, describing just the basics and don’t show a whole process, go deeper or share things learned during the process.

Fortunately I stumbled upon a GitHub project called [gulp-starter](https://github.com/greypants/gulp-starter) that helped me a lot to structure my code and understand Gulp. So my process is partly derived from this fantastic project.

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

All this task is doing is loading all tasks that live in `./gulp/tasks` or in any subfolder.

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

You don’t need a [Jekyll](http://jekyllrb.com/) website to follow along, but if you want just follow along the installation process of Jekyll that is short and sweet:

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

## Sass/CSS
I use [Sass](http://sass-lang.com/) as preprocessor for my CSS files. If you like to use [Compass](http://compass-style.org/) you just have to set an option for this task.

Go ahead and install the npm modules needed:

{% highlight sh %}
$ npm install --save-dev gulp-plumber gulp-ruby-sass gulp-filter gulp-changed gulp-autoprefixer gulp-sourcemaps
{% endhighlight %}

That’s a lot, but this task will do a lot.

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
My scripts are a little more complex, because I use [Browserify](http://browserify.org/) to bundle my JavaScript. If this is too complex for your needs you may just use [gulp-concat](https://www.npmjs.org/package/gulp-concat) to concatenate all your JavaScript files into one file.

Browserify is an awesome tool, which allows you to use node modules in your browser. Over 70% of the node modules will run right away! And it will bundle up all of your dependencies. If you want to find out more about writing CommonJS modules for Browserify have a look into the documentation.

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

This task has some additional utilities for handling errors and logging the bundling process. Put these into a `utils` folder in your `gulp` folder:

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

## Images
The image task is a simple one again. All it does for now is copying the images to the asset directory. We will optimize images later during the production build.

{% figure code-figure "config.js" %}
{% highlight javascript %}
images: {
  src:  srcAssets + '/images/**/*',
  dest: developmentAssets + '/images'
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "images.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var changed     = require('gulp-changed');
var browsersync = require('browser-sync');
var config      = require('../../config').images;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browsersync.reload({ stream: true }));
});
{% endhighlight %}
{% endfigure %}

## Vector Fonts
I use vector fonts for my website. Vector fonts are one option to include high quality icons on a website. Another option is using SVG directly or to use high resolution images.

I use [Font Custom](http://fontcustom.com/) to generate my vector fonts. There is a [gulp plugin](https://www.npmjs.org/package/gulp-fontcustom/) for this, but I couldn’t get it running. But because I generate not that often a new version of my vector fonts, I’m totally fine with running the shell command. I will use Gulp later to watch the folder containing the SVG files and recreate the vector fonts if needed.


{% figure code-figure "config.js" %}
{% highlight javascript %}
copyfonts: {
  development: {
    src:  srcAssets + '/fonts/*',
    dest: developmentAssets + '/fonts'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "copy-fonts.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var config = require('../../config').copyfonts.development;

/**
 * Copy fonts to folder
 */
gulp.task('copy:fonts', ['fontcustom'], function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
{% endhighlight %}
{% endfigure %}

As you may have seen, before copying the fonts to the asset folder another task gets executed: `fontcustom`.

Font Custom checks the files for changes and doesn’t generate anything if the files are still the same.

To execute a shell command I use the Gulp plugin `gulp-shell`:

{% highlight sh %}
$ npm install --save-dev gulp-shell
{% endhighlight %}

{% figure code-figure "fontcustom.js" %}
{% highlight javascript %}
var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('fontcustom', shell.task([
  'fontcustom compile'
]));
{% endhighlight %}
{% endfigure %}

## Base64 encoded images
The last task executed by my `build` task is a task, which replaces the URLs of small images in my CSS files with Base64 encoded images. This way the image gets embedded into the CSS file and doesn’t need an additional server request. If the images are not to large this will speed up loading a lot.

I use a lot of small size patterns on my website because I doesn’t like the *Flat Design* approach a lot. The real world isn’t flat. Nowhere. There is always structure, pattern, shade and light. The patterns I use are from the fantastic website [Subtle Pattern](http://subtlepatterns.com/). The have a few hundred really nice subtle patterns.

To load the background pattern I use SCSS like this:

{% highlight scss %}
%pattern-light-grey {
  background-color: $content-background;
  background-image: url('/assets/images/css/patterns/light_grey_@2X.png');
  background-size: 301px 621px;
}

.container {
  @extend %pattern-light-grey;
}
{% endhighlight %}

The generated CSS looks like this:

{% highlight css %}
.container {
  background-color: #eeeeee;
  background-image: url("/assets/images/css/patterns/light_grey_@2X.png");
  background-size: 301px 621px;
}
{% endhighlight %}

After the task ran, the CSS will look like this:

{% highlight css %}
.container {
  background-color: #eeeeee;
  background-image: url(data:image/png;base64,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z5fny/Pl4zq+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF9ex5fny/Pl+fJ8eb68ji/Pl+fL8+X58oEdX54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X17Hl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfXseN58vz5fnyfHm+vI4vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz43ny/Pl+fJ8eb68ji/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vryOG8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+vI4bz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54bz5fny/Pl+fJ8eR1fni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfnhvPl+fL8+X58nx5HV+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHkdN54vz5fny/Pl+fI6vjxfni/Pl+fL53fceL48X54vz5fny+v48nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58tx4vjxfni/Pl+fL6/jyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5XV8eb48X54vz5fny+v48nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL67jxfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5bnxfHm+PF+eL8+X1/Hl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny//dceP58nx5vjxfni+v48vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58tz4/nyfHm+PF+eL6/jy/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vr+PG8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni+v48bz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58vz5fnyfHm+PF+eL8+X58bz5fnyfHm+PF9ex5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fnxvPl+fJ8eb48X17Hl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfXseN58vz5fnyfHm+vI4vz5fny/Pl8315HTeeL8+X58vz5fnyOr48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48X54vz5fny/Pl+fJ8eb48N54vz5fny/Pl+fI6vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5vjxfni/Pl+fL8+X58nx5HV+eL8+X58vz5fnyOr48X54vz5fnyz/c8eX58nx5vjxfni/fXb3viKrmH85Fd7XWLaL3waVHdtn2AAAAAElFTkSuQmCC);
  background-size: 301px 621px;
}
{% endhighlight %}

For this task I will need another Gulp plugin:

{% highlight sh %}
$ npm install --save-dev gulp-base64
{% endhighlight %}

I add a new configuration entry and create the task:

{% figure code-figure "config.js" %}
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

{% figure code-figure "base64.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var base64 = require('gulp-base64');
var config = require('../../config').base64;

/**
 * Replace URLs in CSS fies with base64 encoded data
 */
gulp.task('base64', ['sass'], function() {
  return gulp.src(config.src)
    .pipe(base64({
      baseDir: config.options.baseDir,
      extensions: config.options.extensions,
      debug: config.options.debug,
      maxImageSize: config.options.maxImageSize // bytes
    }))
    .pipe(gulp.dest(config.dest));
});
{% endhighlight %}
{% endfigure %}

We are now finished with the development `build` task. Lets rewind a bit and go back to the `watch` task.

## Watch (2)
Do you remember the `watch` task from the beginning? This just started BrowserSync and the development server, but didn’t watch for anything. I will write these watch tasks now.

`Watch` is part of the API of gulp. It will watch a folder or files for changes, addition or deletion and trigger tasks.

{% figure code-figure "config.js" %}
{% highlight javascript %}
watch: {
  jekyll: [
    '_config.yml',
    '_config.build.yml',
    'stopwords.txt',
    src + '/_data/**/*.{json,yml,csv}',
    src + '/_includes/**/*.{html,xml}',
    src + '/_layouts/*.html',
    src + '/_locales/*.yml',
    src + '/_plugins/*.rb',
    src + '/_posts/*.{markdown,md}',
    src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
    src + '/*'
  ],
  sass:    srcAssets + '/scss/**/*.{sass,scss}',
  scripts: srcAssets + '/javascripts/**/*.js',
  images:  srcAssets + '/images/**/*',
  sprites: srcAssets + '/images/**/*.png',
  svg:     'vectors/*.svg'
}
{% endhighlight %}
{% endfigure %}

For Jekyll I watch for changes in a lot of files. Changes in configuration files, data files, layouts, includes, plugin, posts etc.

The Sass task will watch for changes in files with the suffix `sass` or `scss`. JavaScript gets triggered if I change some JavaScript file. You get the point.

{% figure code-figure "watch.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.jekyll,   ['jekyll'])
  gulp.watch(config.sass,     ['sass', 'scsslint']);
  gulp.watch(config.scripts,  ['scripts', 'jshint']);
  gulp.watch(config.images,   ['images']);
  gulp.watch(config.svg,      ['copy:fonts']);
  gulp.watch(config.sprites,  ['sprites']);
});
{% endhighlight %}
{% endfigure %}

I set up six watch tasks. Whenever a file of the Jekyll watch gets changed, deleted or added, the `jekyll` task gets executed.

For `SCSS` files I run the `sass` tasks and additionally I run a `scsslint` task, which will check my files for syntax errors.

Changes on JavaScript files trigger the `scripts` tasks and a `jshint` task, which will check my files for syntax errors.

If I add, modify or delete a SVG file my vector fonts get recreated. And as a fallback for browsers without vector font support I create a PNG sprite map, whenever I change an image of the sprite. It would be possible to auto create the PNG files of the SVG files with [gulp-svg2png](https://www.npmjs.org/package/gulp-svg2png/), but I have some additional design on the sprite images, that’s why I didn’t use it.

I miss now three tasks for `watch`: `scsslint`, `jshint` and `sprites`.

## Linting SCSS and JavaScript
I decided to Lint my SCSS files and not the CSS files, because it’s kind of pointless to lint generated CSS. But you can do this with [gulp-csslint](https://www.npmjs.org/package/gulp-csslint/).

{% highlight sh %}
$ npm install --save-dev gulp-scss-lint gulp-jshint jshint-stylish
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
scsslint: {
  src: [
    srcAssets + '/scss/**/*.{sass,scss}',
    '!' + srcAssets + '/scss/base/_sprites.scss',
    '!' + srcAssets + '/scss/helpers/_meyer-reset.scss'
  ]
},
jshint: {
  src: srcAssets + '/javascripts/*.js'
}
{% endhighlight %}
{% endfigure %}

I ignore some files from checking (by adding a `!` in front of the path), because I didn’t write them or don’t have control over the syntax.

{% figure code-figure "scss-lint.js" %}
{% highlight javascript %}
var gulp     = require('gulp');
var scsslint = require('gulp-scss-lint');
var config   = require('../../config').scsslint;

/**
 * Lint SCSS files
 * `gem install scss-lint` needed
 */
gulp.task('scsslint', function() {
  return gulp.src(config.src)
    .pipe(scsslint());
});
{% endhighlight %}
{% endfigure %}

{% figure code-figure "jshint.js" %}
{% highlight javascript %}
var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config  = require('../../config').jshint;

/**
 * Check JavaScript sytax with JSHint
 */
gulp.task('jshint', function() {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
{% endhighlight %}
{% endfigure %}

{% aside aside-hint %}
<p>You may change the rules for linting SCSS or JavaScript by adding a hidden file <code>.scss-lint.yml</code> for SCSS lint and <code>.jshintrc</code> for JSHint to your project root.</p>
<p>To find out which options are available look into the documentation of <a href="https://github.com/causes/scss-lint">SCSS-Lint</a> and <a href="http://jshint.com/docs/">JSHint</a>.</p>
{% endaside %}

## Generating Sprites
You don’t need Compass to create sprites, Gulp is totally capable of achieving this tasks.

{% highlight sh %}
$ npm install --save-dev gulp.spritesmith
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
sprites: {
  src: srcAssets + '/images/sprites/icon/*.png',
  css: {
    cssName: '_sprites.scss',
    cssFormat: 'css',
    cssOpts: {
      cssClass: function (item) {
        // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
        if (item.name.indexOf('-hover') !== -1) {
          return '.icon-' + item.name.replace('-hover', ':hover');
          // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
        } else {
          return '.icon-' + item.name;
        }
      }
    },
    dest: srcAssets + '/scss/base/',
  },
  image: {
    imgName: 'icon-sprite.png',
    imgPath: '/assets/images/sprites/icon-sprite.png',
    dest: srcAssets + '/images/sprites/'
  }
}
{% endhighlight %}
{% endfigure %}

I split my config into three subsections: The source files (individual icons for the sprite), the output of the CSS file and the output of the image sprite. I use a custom `cssClass` which will generate `:hover` states by naming the hover sprites with `-hover`.

{% figure code-figure "sprites.js" %}
{% highlight javascript %}
var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');
var config      = require('../../config').sprites;

/**
 * Generate sprite and css file from PNGs
 */
gulp.task('sprites', function() {

  var spriteData = gulp.src(config.src).pipe(spritesmith({
    imgName: config.image.imgName,
    imgPath: config.image.imgPath,
    cssName: config.css.cssName,
    cssFormat: config.css.cssFormat,
    cssOpts: config.css.cssOpts
  }));

  spriteData.img
    .pipe(gulp.dest(config.image.dest));

  spriteData.css
    .pipe(gulp.dest(config.css.dest));
});
{% endhighlight %}
{% endfigure %}

In the end I get two files: a partial `_sprites.scss` containing the class attributes and a sprite `icon-sprite.png` containing all images.

All development tasks are done now. We have got a running development server, tasks to create the Jekyll site and all assets and tasks for linting, sprite and vector font creation.

Next I will write the tasks needed to get production ready code.

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


## Optimize CSS
Next I will write a task, which will optimize the CSS. Compass is able to minimize the CSS for production, but this Gulp task squeezed another 6 KB out of my files.

I install the needed Gulp plugins:

{% highlight sh %}
$ npm install --save-dev gulp-minify-css gulp-size
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
optimize: {
  css: {
    src:  developmentAssets + '/css/*.css',
    dest: productionAssets + '/css/'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "optimize-css.js" %}
{% highlight javascript %}
var gulp      = require('gulp');
var minifycss = require('gulp-minify-css');
var size      = require('gulp-size');
var config    = require('../../config').optimize.css;

/**
 * Copy and minimize CSS files
 */
gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(minifycss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
{% endhighlight %}
{% endfigure %}

This task will copy the CSS files from the assets folder, minimize them, remove comments, output the size of the file and copy them to the production assets folder.

## Optimize JavaScript
Now the CSS is minimized and the same has to be done to the JavaScript files. I use UglifyJS for this task. If you don’t like it, go ahead and use a Google Closure or YUI compressor Gulp task.

{% highlight sh %}
$ npm install --save-dev gulp-uglify
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
optimize: {
  css: {
    ...
  },
  js: {
    src:  developmentAssets + '/js/*.js',
    dest: productionAssets + '/js/'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "optimize-js.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var size   = require('gulp-size');
var config = require('../../config').optimize.js;

/**
 * Copy and minimize JS files
 */
gulp.task('optimize:js', function() {
  return gulp.src(config.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
{% endhighlight %}
{% endfigure %}

This task will take the JavaScript files, minimize and optimize them, put them to my production assets folder and output the size.

## Optimize Images
Next I will take care of the images. They need to be copied to the production assets folder and crunshed (reduce the size). This may take a file, depending on the size and amount of your images, that’s why I only optimize the images for production.

{% aside aside-hint %}
<p>To get a more detailed output in Gulp you may add a flag to your command:<br> <code>gulp publish --verbose</code>. It will list each individual image for the optimize task and how much it was compressed.</p>
{% endaside %}

I’ll need `gulp-imagemin` for my task, which is able to minify PNG, JPG, GIF and SVG images:

{% highlight sh %}
$ npm install --save-dev gulp-imagemin
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
optimize: {
  css: {
    ...
  },
  js: {
    ...
  },
  images: {
    src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
    dest: productionAssets + '/images/'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "optimize-images.js" %}
{% highlight javascript %}
var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var size     = require('gulp-size');
var config   = require('../../config').optimize.images;

/**
 * Copy and minimize image files
 */
gulp.task('optimize:images', function() {
  return gulp.src(config.src)
    .pipe(imagemin({
      optimizationLevel: 3,
      progessive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
{% endhighlight %}
{% endfigure %}

This task will take my images, optimize them, copy them to the assets folder and output the size.

## Copy Vector Fonts for Production
Another boring and short tasks, which is doing just one simple thing: Copy the fonts to the production assets folder. But that’s the way Gulp was build. Have small tasks that do small things.

{% figure code-figure "config.js" %}
{% highlight javascript %}
copyfonts: {
  development: {
    ...
  },
  production: {
    src:  developmentAssets + '/fonts/*',
    dest: productionAssets + '/fonts'
  }
}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "copy-fonts.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var config = require('../../config').copyfonts.production;

/**
 * Copy fonts to folder
 */
gulp.task('copy:fonts:production', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
{% endhighlight %}
{% endfigure %}

## Revisioning
Optimizing of my assets is done. But one important thing is missing: Revisioning.

For better performance one should always cache the assets for a very long time. Hard drives are huge these days but speed for requesting assets isn’t still that awesome (escpecially on mobile). But one problem occurs if you cache the assets on a hard drive of a visitor. If you update a file, the browser will still serve the old file. And if you cache it for 10 years the user will never get the new asset, unless s/he deletes the browser cache manually. But which user does this?

That’s why we need to rename every file that has been changed to invalidate the cache. I remember the days when we had to add a number by hand to our assets like `image_r1.png`, `image_r2.png`. This sucks. Now reading the content of a file and generating a hash achieve this. This will be always the same, unless something gets changed.

My next tasks will rename all assets. This way the `application.css` will become `application-f084d03b.css`. If I change just one dot in this file it will get a new hash.

I install `gulp-rev`, which will handle this renaming of assets:

{% highlight sh %}
$ npm install --save-dev gulp-rev
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
revision: {
  src: {
    assets: [
      productionAssets + '/css/*.css',
      productionAssets + '/js/*.js',
      productionAssets + '/images/**/*'
    ],
    base: production
  },
  dest: {
    assets: production,
    manifest: {
      name: 'manifest.json',
      path: productionAssets
    }
  }
}
{% endhighlight %}
{% endfigure %}

This task will rename all assets and create a JSON file containing all files, which where renamed and their old and new file names.

{% figure code-figure "revision.js" %}
{% highlight javascript %}
var gulp   = require('gulp');
var rev    = require('gulp-rev');
var config = require('../../config').revision;

/**
 * Revision all asset files and
 * write a manifest file
 */
gulp.task('revision', function() {
  return gulp.src(config.src.assets, { base: config.src.base })
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev())
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev.manifest({ path: config.dest.manifest.name }))
    .pipe(gulp.dest(config.dest.manifest.path));
});
{% endhighlight %}
{% endfigure %}

## Replacing Paths to Assets
The last step of my production build is to replace all occurrences of assets with a revisioned file name in all files.

This task will need `gulp-rev-collector` to replace the paths names to assets:

{% highlight sh %}
$ npm install --save-dev gulp-rev-collector
{% endhighlight %}

{% figure code-figure "config.js" %}
{% highlight javascript %}
collect: {
  src: {
    manifest: productionAssets + '/manifest.json',
    files:  production + '/**/*.{html,xml,txt,json,css,js}'
  },
  dest: production
}
{% endhighlight %}
{% endfigure %}

I replace these paths only in files I know they could contain paths to assets. Don’t include any images or binary files. Revision collector will try to open them and destroy most binary files.

{% figure code-figure "rev-collector.js" %}
{% highlight javascript %}
var gulp    = require('gulp');
var collect = require('gulp-rev-collector');
var config = require('../../config').collect;

/**
 * Replace all links to assets in files
 * from a manifest file
 */
gulp.task('rev:collect', function() {
  return gulp.src([
    config.src.manifest,
    config.src.files
  ])
  .pipe(collect())
  .pipe(gulp.dest(config.dest));
});
{% endhighlight %}
{% endfigure %}

This task will look into the `manifest.json` file and replace every path to one of the assets in every HTML, CSS, JavaScript, and Text etc.

Our production build is finished! Only one thing is missing to complete this series of tutorials about Gulp: Deploying the Website to my server.

## Deploying the Website
There are a lot of possibilites to get a website on the server. You may use FTP, SFTP, SCP, SCP2, Rsync or Git. I use Rsync because it’s fast and easy to use.

I write another tasks as entry point: `deploy`:

{% figure code-figure "deploy.js" %}
{% highlight javascript %}
var gulp = require('gulp');

/**
 * Start rsync task
 */
gulp.task('deploy', ['rsync']);
{% endhighlight %}
{% endfigure %}

This will just start the `rsync` task. But I could add more tasks, like creating a zip archive of the build and copying it to a backup on my harddrive.

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
Developing and deploying with Gulp is fun. I like the UNIX philosophy of Gulp, to have small files, which do one task and connect these to larger workflows. And because I keeped my Gulp tasks small, pluggable and easily shareable, I was able to add Gulp to my second website in less than five minutes.
