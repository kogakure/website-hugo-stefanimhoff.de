---
title: Introduction to Gulp.js 6
subtitle: Images and Vector Fonts
slug: gulp-tutorial-6-images-vector-fonts
author: Stefan Imhoff
date: 2014-10-23T08:00:00+02:00
description: "The ultimative tutorial and guide for Gulp.js: How to move images and generate vector fonts from SVG."
og: "assets/images/articles/2014/gulp-tutorial-6-images-vector-fonts/gulp-tutorial-6.jpg"
download_url: "https://github.com/kogakure/gulp-tutorial"
download_text: "View Source on GitHub"
categories:
  - "code"
series:
  - "gulp"
---

This is the 6th part of my series _Introduction to Gulp.js_. The last article was very long and complicated. This time it’s a easier one: I will show how I move my images and generate vector fonts.

<figure class="image-figure">
  <img src="/assets/images/articles/2014/gulp-tutorial-6-images-vector-fonts/gulp-tutorial-6.jpg" alt="A Mini Gulp with water">
  <figcaption>
    Today we will only take a <strong>Mini Gulp</strong> (世書 名付, <a href="https://www.flickr.com/photos/nseika/9477122568">Mini Gulp</a>)
  </figcaption>
</figure>

## Images

The image task is a simple one again. All it does for now is copying the images to the asset directory. I will optimize my images later during the production build.

<p class="code-info">gulp/config.js</p>

```javascript
images: {
  src:  srcAssets + '/images/**/*',
  dest: developmentAssets + '/images'
}
```

<p class="code-info">gulp/tasks/development/images.js</p>

```javascript
var gulp = require("gulp");
var changed = require("gulp-changed");
var config = require("../../config").images;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task("images", function () {
  return gulp
    .src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});
```

## Vector Fonts

I use vector fonts for my website. Vector fonts are one option to include high quality icons on a website. Another option is using SVG directly or to use high resolution images.

I use [Font Custom](http://fontcustom.github.io/fontcustom/) to generate my vector fonts. There is a [gulp plugin](https://www.npmjs.com/package/gulp-fontcustom/) for this, but I couldn’t get it running. But I’m totally fine with running this task with a shell command (via Gulp.js). I will use Gulp.js later to watch the folder containing the SVG files and recreate the vector fonts if needed.

First I need to install Font Custom (with Homebrew, you can find more installation methods on the Font Custom website):

```bash
$ brew install fontforge --with-python
$ brew install eot-utils
```

Next I run the command `bundle exec fontcustom config` inside my main projects directory, which will create a file `fontcustom.yml`. I adjust my file until it looks like this:

<p class="code-info">fontcustom.yml</p>

```yaml
# --------------------------------------------------------------------------- #
# Project Info
#   Default values shown. Learn more about these options by running
#   `fontcustom help` or visiting <http://fontcustom.com>.
# --------------------------------------------------------------------------- #

font_name: fontcustom
css_selector: .icon-{{glyph}}
css_prefix: icon-
preprocessor_path: "/assets/fonts"
autowidth: false
no_hash: false
force: false
debug: false
quiet: false

# --------------------------------------------------------------------------- #
# Project Paths
#   Relative paths are expanded from PROJECT_ROOT (defaults to the directory
#   where the fontcustom command is run). INPUT and OUTPUT can be strings or
#   hashes or file types / names.
# --------------------------------------------------------------------------- #

#project_root: some/other/place
#manifest: tmp/fontcustom

input:
  vectors: vectors # required
#  templates: app/assets/fonts/fontcustom/templates

output:
  fonts: app/_assets/fonts # required
  css: app/_assets/scss
  preview: docs
#  my-custom-template.yml: config

# --------------------------------------------------------------------------- #
# Templates
#   Included in Font Custom:
#     preview, css, scss, scss-rails, bootstrap, bootstrap-scss, bootstrap-ie7,
#     bootstrap-ie7-scss
#   Custom templates should be saved in the INPUT[:templates] directory and
#   referenced by their base file name.
# --------------------------------------------------------------------------- #

templates: [scss, preview]
```

Next I add configuration and the task to copy the fonts to their location:

<p class="code-info">gulp/config.js</p>

```javascript
copyfonts: {
  development: {
    src:  srcAssets + '/fonts/*',
    dest: developmentAssets + '/fonts'
  }
}
```

<p class="code-info">gulp/tasks/development/copy-fonts.js</p>

```javascript
var gulp = require("gulp");
var config = require("../../config").copyfonts.development;

/**
 * Copy fonts to folder
 */
gulp.task("copy:fonts", ["fontcustom"], function () {
  return gulp.src(config.src).pipe(gulp.dest(config.dest));
});
```

As you may have seen, before copying the fonts to the asset folder another task gets executed: `fontcustom`.

Font Custom checks the files for changes and doesn’t generate anything if the files are still the same.

To execute a shell command I use the Gulp.js plugin `gulp-shell`:

```bash
$ npm install --save-dev gulp-shell@0.5.0
```

<p class="code-info">gulp/tasks/development/fontcustom.js</p>

```javascript
var gulp = require("gulp");
var shell = require("gulp-shell");

/**
 * Generate fonts with Fontcustom
 * `brew install fontforge --with-python`
 * `brew install eot-utils`
 */
gulp.task("fontcustom", shell.task(["bundle exec fontcustom compile"]));
```

Fontcustom is a Ruby Gem and you’ll need to install the Gem either globally or in your Gemfile (if you install it globally you need to drop the `bundle exec` from your command). I choose to install it with my Gemfile:

<p class="code-info">Gemfile</p>

```ruby
source "https://rubygems.org"

gem 'jekyll', '~> 2.5.2'
gem 'sass', '>= 3.3'
gem 'fontcustom', '~> 1.3.7'
```

After you add the line for `fontcustom` you will need to run `bundle install` again.

## Conclusion

This concludes the 6th part of my series _Introduction to Gulp.js_. We learned how to move files with Gulp.js (and don’t even need a plugin for that), and how I create my vector fonts. Nothing special, but the next part will be more interesting again.
