---
layout: post
language: "en"
title: "Introduction to Gulp.js (1) – Intro and Setup"
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
