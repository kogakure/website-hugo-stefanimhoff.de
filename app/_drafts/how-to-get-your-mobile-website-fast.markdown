---
layout: post
language: "en"
title: "How to get your Mobile Website fast"
author: "Stefan Imhoff"
categories:
tags:
---

In 2014 I relaunched my personal website with a Responsive Web Design. But having a Responsive Web Design with a good font size, without horizontal scrolling and pinch-zooming needed, where links can be clicked easily with a finger, is just the beginning.

When building a mobile website there are some best practices, which can be followed along. Google provides a lot of documentation on these topics, for example the [Webmasters Mobile Guide](https://developers.google.com/webmasters/mobile-sites/) or the [Mobile SEO](https://developers.google.com/webmasters/mobile-sites/mobile-seo/) documentation.

You can check your site with the [Mobile usability report](https://www.google.com/webmasters/tools/mobile-usability), in Google Webmaster Tools and with [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

There is an easy test for your website, which can check if your website already meets the basic features a good mobile experience should provide: [Mobile-Friendly Test](https://www.google.com/webmasters/tools/mobile-friendly/).

## But I thought my website is cool now!
You build your website, followed [Googles Web Fundamentals Guidelines](https://developers.google.com/web/fundamentals/getting-started/), wrote your semantic markup, made your Responsive Design, got rid of Flash, increased the font size and click areas for a finger, build it *Mobile First*.

You thought you’re done, you’re cool now. The website is running the latest shit. Build a Responsive Website. Check.

But still your website sucks on mobile. Why is that? You do your homework and execute best-practices of web performance: You crunch your images, minimize and gzip your CSS and JavaScript files added a Responsive Images solution. But it’s still slow on mobile.

Mobile phones and tablets are getting faster and faster, but some technical difficulties can’t be overcome easily and probably won't be solved in near future: Slow processors in phones, slow rendering in mobile browsers, bad mobile latency. Plus, [85% of mobile users expect pages to load as fast or faster than they load on the desktop](http://www.webperformancetoday.com/2013/08/06/8-mobile-performance-assumptions/). If your site doesn’t render in less than 5 seconds, 74% or mobile visitors will be gone. The may come back later at home or on the desktop, but maybe the won’t.

Your Website may look better now on a lot of devices, but it doesn’t make your site faster. Responsive Web Design is not mobile friendly by default. But it can be.

## Performance Optimization
There are a lot of things one can do, some are easy to achieve, some are really hard. You should start with some kind of performance budget, may it be *it should render in less than 3 seconds*, or *no more than 20 requests* or *no more than 1 MB of data*. Try to stick to this budget and keep it. You will have to make compromises or even say *no* to some wishes. Maybe it’s not possible to include 5 different web fonts, your design department wants you to include. Or maybe the large header image in retina resolution has to go. Or the slideshow of your products, the marketing department wants.

I didn’t optimize my content images (but my images, which are part of the design), instead I worked on the solution which was recommended by [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/):

**Eliminate render-blocking JavaScript and CSS in above-the-fold content**.

I did this by inlining critical CSS and deferring all other non-critical assets to avoid render blocking.

CSS and JavaScript assets will block the page from rendering other content (like all the nice images you are so proud of). If you have render blocking assets the page will be white and blank until these assets are loaded (the state after this is finished is called DOMContentLoaded).

[Screenshot]

The trick is to figure out what styles are needed to display the upper part of your website as it’s seen on a Smartphone or Tablet. There are automatic solutions to find the needed styles like [Grunt Critial CSS](https://github.com/filamentgroup/grunt-criticalcss) or [Critical](https://github.com/addyosmani/critical) by Addy Osmani. But for me, automatic tools didn’t work out. So I did this work manually with the help of a [bookmarklet](https://gist.github.com/PaulKinlan/6284142).

I created a new CSS file file (`critical.css`) with Sass and added all the styles, which where needed for the Grid, Header, Logo, Navigation, some Typography. I tried to load the page with just this one stylesheet until it looked good in the Viewport. And I provided good fallback solutions: background colors for boxes with patterns, which get loaded later and good font fallbacks, which show a similar font until the Webfonts are loaded. I looked into all available fonts on iOS, Android and Windows Phone and added a font stack like this: `font-family: 'Yanone Kaffeesatz', 'DIN Condensed', 'Roboto Condensed', 'Droid Sans', 'Segoe UI 8', Arial, Helvetica, sans-serif;`.  And I got rid of [Modernizr](http://modernizr.com/), as it should be loaded in the head and was blocking the rendering. Instead I build a nice fallback navigation for browsers without JavaScript.

The rest of my stylesheets are published in two CSS files: The `application.css` and the `homepage.css`. I use [loadCSS](https://github.com/filamentgroup/loadCSS) by the Filament Group to load these stylesheets asynchronously. Additionally I provide fallback links in `<noscript>` for browsers with disabled JavaScript.

The loadCSS JavaScript (`<script>`) and my minimized critical CSS  (`<style>`) I placed directly into the source code of my page (with a Jekyll `include`). This way all critical things are already available when the loading of the HTML file is finished.

My JavaScript file is down at the end of the closing `</body>` tag, thus is not blocking the rendering. Adding the `async` attribute is another option. The handle of my navigation menu is hidden by default. When JavaScript is loaded and executed it will become visible.

## Conclusion
Having a Responsive Design is not enough. You need to do your homework first and crunch, minimize, and optimize everything you can out of your website. But working on the optimization of the Critical Render Path will provide real speed. I brought down my speed for DOMContentLoaded on **EDGE** from over **4.11 s** to **2.37 s** and on **3G** from **1.65 s** to **1.07 s**. My result on Google PageSpeed Insights got from **79/100** to **98/100**. My website wasn’t bad before, but optimizing the critical render path nearly doubled the speed.
