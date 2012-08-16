---
layout: post
title: "Plugin-Testseite"
date: 2012-07-25 14:00
categories:
tags:
---

# Abbreviations

{% codeblock lang:html %}
<html>
  <head>
    <title>Dies ist eine HTML-Datei</title>
  </head>
  <body>
    <h1>HTML</h1>
  </body>
</html>
{% endcodeblock %}


- Neue Features: DSL#1 und DSL#2 und HTML. Und noch mal DSL#2 und DSL#1. Und wie sieht es in einem Link aus?
- Ich schreibe in [HTML](http://www.google.de/webhp?sourceid=chrome-instant&ie=UTF-8#q=test&hl=de "HTML-Userguide") und [CSS](http://www.google.de/webhp?sourceid=chrome-instant&ie=UTF-8#q=test&hl=de "Guide über CSS").
- Außerdem: e.&nbsp;g. und etc., z.&nbsp;B., d.&nbsp;h.
- HTML, CSS, XML, NATO.
- <abbr title="Nicht ersetzen">HTML</abbr>, <abbr title="Nicht ersetzen">CSS</abbr> nicht, CSS ja, <abbr title="Nicht ersetzen">XML</abbr>, <abbr title="Nicht ersetzen">NATO</abbr>
- HTMLler, CSSler, XMLdings, NATObomber
- HTML-Tags, CSS-Syntax, Simple-XML, NATO-Bomber

# Ampersand

Wenn man einen Firmennamen schreibt, sollte dies ersetzt werden:

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Peter & Söhne. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

[√] Max Mustermann & Söhne

Wie sieht es mit Links aus?

[?] [Max Mustermann & Söhne](http://www.google.de/webhp?sourceid=chrome-instant&ie=UTF-8&q=test&hl=de "Max Mustermann & Söhne")

Und was ist mit diesem bizarren Link:

[?] [Scholz](http://www.google.de/webhp?sourceid=chrome-instant&ie=UTF-8&q=test&hl=de) & [Friends](http://www.google.de/webhp?sourceid=chrome-instant&ie=UTF-8#q=test&hl=de).

[x] Mustermann <span class="amp">&amp;</span> Söhne

[√] Peter & der Wolf

[√] Peter &amp; der Wolf

[x] 1&1

[√] <a href="http://google.de?test=1&lala=2&bubu=3">Peter & der Wolf</a>

[√] <a href="http://google.de?test=1&amp;lala=2&amp;bubu=3">Peter & der Wolf</a>

[√] Peter & der Wolf

[√] Peter &amp; der Wolf

[√] <a href="http://google.de?test=1&amp;lala=2&amp;bubu=3">Peter &amp; der Wolf sind in der NATO</a>

[√] Peter & der Wolf

[√] Peter &amp; der Wolf

[x|√] <a id="test" href="http://google.de?test=1&amp;lala=2&amp;bubu=3" title="Peter &amp; der Wolf" alt="Peter & der Wolf mögen CSS und HTML">Peter &amp; der Wolf mögen CSS und HTML auch</a>

[√] Peter & der Wolf

[√] Peter &amp; der Wolf

[x|√] <a href="http://google.de?test=1&amp;lala=2&amp;bubu=3" title="Peter & der Wolf">Peter & der Wolf</a>
