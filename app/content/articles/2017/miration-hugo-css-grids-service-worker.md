---
title: Migration to Hugo, CSS Grid Layout, and Service Worker
slug: "miration-hugo-css-grids-service-worker"
date: 2017-08-14T12:00:00+02:00
description: ""
author: "Stefan Imhoff"
language: "en"
og_image: "artikel/kogakure-2017.jpg"
categories:
- code
- design
- website
tags:
- hugo
- relaunch
- cssgrid
- serviceworker
---

4 month of work, 49 hours of coding, plus more hours for designing a new homepage, creating a new OTF font and polishing up some of my old 3D models. But now my martial arts website kogakure.de is online.

[![New Website kogakure.de 2017](/assets/images/artikel/kogakure-2017.jpg)](https://kogakure.de)

The old website still used Jekyll, and it took a long time to generate and deploy my website. For the same reasons I migrated this website to [Hugo] – which are speed and getting rid of Ruby – I decided to do the same for [kogakure.de].

CSS Grids
---------

But I had more in mind: I always wanted to create a website with the new [CSS Grid Layout Module Level 1], or in short *CSS Grids*. This spec landed in all modern browsers (including mobile browsers) this spring. CSS Grids are one of the coolest additions of last 15 years. Finally, Responsive Layout with CSS opens up possibilities to new layouts never seen before. Everything, which is possible in Print should be possible with CSS Grids, but much more, because of the responsiveness build into CSS Grids.

Technology
----------

I upgraded my tech stack, while doing the migration: JavaScript is written in [ES6], compiled with [Babel] and packaged with [Webpack]. I use a *Service Worker* to bring offline support for the website.

The build and development environment runs with [Gulp.js] and [Yarn].

For CSS I use as with this website [PostCSS], but removed *PreCss* and a lot of plugins, instead just use [CSSnext] (with support for CSS custom properties, custom media queries, `@apply` and more).

Mozilla Firefox CSS Grid Inspector
----------------------------------

Special thanks to [Mozilla] for their fantastic [Firefox] browser. The FireFox *Nightly* Edition includes already a **new** *CSS Grid Inspector*, which is **awesome**. And it was really needed, my homepage uses **12 different grids**. Yes, you read correctly. 12. CSS Grid Layout *can* be used for the overall page layout, but developers are encouraged to also use it on component basis.

![My grids inspected with the Mozilla Firefox CSS Grid Inspector](/assets/images/artikel/css-grid-inspector.jpg "My grids inspected with the Mozilla Firefox CSS Grid Inspector")

Hosting on Netlify
------------------

My new website is hosted on [Netlify]. A fantastic service, which comes with deployment via Git, build hooks, single page pre-rendering, asset optimization, forms, split testing, notifications and free SSL with [Let’s Encrypt], and you can set a custom domain. And they have a global CDN, which means assets are delivered much fast, wherever you live.

You can create unlimited sites, add unlimited collaborators and even use it for commercial projects. **For free**. And of course they have packages for users and companies, who need more control or reliability.

Source Code
-----------

The [source code] for my website is completely open, the content is as always provided with a [Creative Commons license]. The unique design is not free, but everybody is encouraged to learn from the code, and reuse code of the website.

  [Hugo]: https://gohugo.io/
  [kogakure.de]: https://kogakure.de/
  [CSS Grid Layout Module Level 1]: https://www.w3.org/TR/css-grid-1/
  [ES6]: http://es6-features.org/
  [Babel]: https://babeljs.io/
  [Webpack]: https://webpack.js.org/
  [Gulp.js]: https://gulpjs.com/
  [Yarn]: https://yarnpkg.com/
  [PostCSS]: http://postcss.org/
  [CSSnext]: http://cssnext.io/
  [Mozilla]: https://www.mozilla.org/
  [Firefox]: https://www.mozilla.org/firefox/
  [Netlify]: https://www.netlify.com/
  [Let’s Encrypt]: https://letsencrypt.org/
  [source code]: https://github.com/kogakure/website-hugo-kogakure.de
  [Creative Commons license]: https://creativecommons.org/licenses/by-nc/3.0/
