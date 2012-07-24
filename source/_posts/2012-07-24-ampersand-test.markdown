---
layout: post
title: "Ampersand-Test"
date: 2012-07-24 08:29
categories: 
tags: 
---

### 1&1 und Peter & Paul

[√] 1&1, Peter & Paul, 1&amp;1 und Peter &amp; Paul

[√] Dies ist schon escaped &amp;, daher bitte nicht mehr doppelt.

[√] Normaler Link: <a href="http://www.amazon.de/?_encoding=UTF8&amp;camp=1638" title="Amazon & Peter &amp; Max">Amazon & Peter &amp; Max</a>

[√] Markdown Link [Amazon & Peter &amp; Max](http://www.amazon.de/?_encoding=UTF8&amp;camp=1638 "Amazon & Peter &amp; Max")

[√] Dies nicht: z.&nbsp;B.

[√] Max Payne – Payne &amp; Redemption.

[√] Ein Ampersand in einem Link: „<a href="http://www.amazon.de/gp/product/3492240607?ie=UTF8&amp;tag=kogakurede-21&amp;linkCode=as2&amp;camp=1638&amp;creative=6742&amp;creativeASIN=3492240607">Wie ich die Dinge &amp; geregelt kriege</a>

[√] Beide nicht: &shy; und &amp;shy;

[√] Ruby-Hash-Rockets nicht: =&gt; und =&lt;

[x] Besonders tricky, ein Amp zwischen zwei Links: Packaging: <a href="http://pip-installer.org/">Pip</a> &amp; <a href="http://virtualenv.openplans.org/">Virtualenv</a>
