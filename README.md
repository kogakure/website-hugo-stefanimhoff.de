[![Netlify Status](https://api.netlify.com/api/v1/badges/fa475948-4bb1-4611-94fd-d874ad79cf88/deploy-status)](https://app.netlify.com/sites/stefanimhoff-de/deploys)
[![Live](https://img.shields.io/badge/live-stefanimhoff.de-green.svg)](https://www.stefanimhoff.de/)
![Maintenance](https://img.shields.io/maintenance/yes/2020.svg)

# stefanimhoff.de

This is the source of my [personal website and blog](https://www.stefanimhoff.de/) build with [Hugo](https://gohugo.io/) and [Gulp.js](https://gulpjs.com/).

## Installation

You will need [Hugo](https://gohugo.io/) to run this website (e. g. with Homebrew):

```bash
$ brew install hugo
```

You will also need [Node.js](http://nodejs.org/) to run the Gulp tasks and build process:

```bash
$ git clone https://github.com/creationix/nvm.git ~/.nvm
$ cd ~/.nvm
$ git checkout `git describe --abbrev=0 --tags`
$ nvm install 4.4.1
```

After cloning the repository run:

```bash
$ npm install
```

## Running the website

The development enviroment is driven by Gulp.js. I have written these npm run tasks:

```bash
$ yarn run dev     # Start development enviroment
$ yarn run preview # Build production and preview it
$ yarn run publish # Build production and sync to server
$ yarn run build   # Build production
$ yarn run deploy  # Sync to server
```

The developement server will run on [http://localhost:9999/](http://localhost:9999/).

The production server will run on [http://localhost:9998/](http://localhost:9998/).

## Stuff I use on my website

These are just some of the tools, packages, languages and stuff I used to build my website:

- [Hugo](https://gohugo.io/) to build the static website.
- [Node.js](http://nodejs.org/) to run Gulp.js.
- [Gulp.js](https://gulpjs.com/) to run the development enviroment and create builds.
- [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript)
- [Browserify](http://browserify.org/) to use CommonJS modules.
- [BrowserSync](http://www.browsersync.io/) to have live reload and syning of actions.
- [PostCSS](https://github.com/postcss/postcss)
- [LostGrid](https://github.com/corysimmons/lost) to build the awesome Grid of my website.

## Licence

All content is copyrighted by [Stefan Imhoff](https://stefanimhoff.de) unless otherwise stated. Feel free to learn from the source code and reuse code for your projects. The only thing which is not allowed is the usage of my design (the unique combination of layout, fonts, images), private photos and logo.

In easier words: **This is not a free theme**. Learn from it. Remix. Reuse. Build your own stuff.
