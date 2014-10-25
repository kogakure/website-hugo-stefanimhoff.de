---
layout: post
language: "de"
title: "Die CSS-Architektur meiner Website"
author: "Stefan Imhoff"
date: 2014-05-27 18:00
updated: 2014-10-25 13:46
published: true
categories:
- Code
- Website
tags:
- compass
- sass
- smacss
---

Bei einem Webprojekt stellt insbesondere die Architektur der Stylesheets eine große Herausforderung dar. Denn CSS wird schnell unverständlich und ist schwer zu warten, wenn nicht von Anfang an eine saubere und modulare Struktur verwendet wird.

{% figure image-figure "Peter Griffin CSS-Meme. Das komplette GIF (ca. 2 MB) gibt es <a href='http://imgur.com/Q3cUg29'>hier</a>." %}
<img src="{{ site.url }}/assets/images/artikel/css-peter-griffin-meme.jpg" alt="Peter Griffin CSS-Meme">
{% endfigure %}

## Preprozessoren
Die Verwendung eines CSS-Preprozessors wie [SASS](http://sass-lang.com/) ist mittlerweile eigentlich fast selbstverständlich. Ein solcher Preprozessor ermöglicht z. B. die Verwendung von Variablen, die Verschachtelung des CSS oder die Nutzung von Funktionen und Helfern.

## Compass
Doch noch besser ist es ein CSS-Framework wie [Compass](http://compass-style.org/) zu verwenden. Der Vorteil liegt darin, dass diese schon mit einer großen Anzahl an fertigen Methoden kommen, und so verhindern, dass das Rad neu erfunden werden muss. Mit Compass lassen sich sehr einfach Sprites generieren und viele Methoden sorgen dafür, dass für die unterschiedlichen Browser die korrekte Implementierung verwendet wird. Außerdem werden für Compass zahlreiche Erweiterungen angeboten.

Ich verwende für meine Seite z. B. ein [Gridsystem](http://singularity.gs/), Helfer für Typographie, Farben und Responsive Breakpoints.

Doch auch Compass schlägt keine Strukturierung des SASS oder SCSS vor. Dafür gibt es aber einige Konzepte und Ideen, die bei der Architektur von Projekten helfen sollen. Eines dieser Konzepte ist [SMACSS](http://smacss.com/).

Ich verwende für meine Website dieses Konzept, habe es aber an meine Bedürfnisse angepasst.

## Dateistuktur des SCSS
Meine Dateistruktur sieht wie folgt aus:

{% highlight bash %}
├── application.scss
├── base
│   ├── _base.scss
│   ├── _iconfont.scss
│   ├── …
│   └── _sprites.scss
├── helpers
│   ├── _debug.scss
│   ├── _imports.scss
│   ├── _mixins.scss
│   ├── _placeholders.scss
│   └── _variables.scss
├── layout
│   ├── _content.scss
│   ├── _footer.scss
│   ├── _grids.scss
│   ├── _header.scss
│   └── _navigation.scss
├── module
│   ├── _aside.scss
│   ├── _attribution.scss
│   ├── …
│   └── _verse.scss
├── pages
│   ├── _archive.scss
│   ├── _error.scss
│   └── _home.scss
├── print.scss
├── state
│   └── _state.scss
├── theme
│   └── _bonsai.scss
└── vendor
    ├── _solarized.scss
    └── _syntax.scss
{% endhighlight %}

Die Hauptdatei ist die `application.scss`. Diese Datei lädt alle weiteren Dateien und wird von der Asset-Pipeline später minimiert.

Außerdem liegt auf der Hauptebene noch das Print-Stylesheet, das steuert, wie die Website im Ausdruck aussieht.

Im Ordner `base` befindet sich ein Partial, in dem die Basis-Stile definiert werden, also grundlegende Dinge zu Typographie, Überschriften, Absätzen, Listen etc.

Außerdem liegen hier noch Dateien für Sprites, Icon-Fonts und ähnliche Dinge.

Der Ordner `helpers` enthält Partials für Debugging, Import von Plugins, Mixins, Placeholder-Funktionen und Variablen, also z. B. Farben, Abstände, etc.

Grundlegendes Styling von Containern wie dem Header, Footer, der Navigation oder auch der Grids liegen im Ordner `layout`.

Eines der wichtigsten Konzepte von SMACSS ist das Schreiben von modularem SCSS. Diese Module liegen im Ordner `module`. Sobald sich ein Element als Modul identifizieren lässt wird es als eigene Datei abgelegt und alle Variationen des Moduls werden ebenfalls in der Datei des jeweiligen Moduls gepflegt. Module sollten eigenständig funktionieren und keine externen Abhängigkeiten zu anderen Teilen der Seite haben.

Kein Teil von SMACSS ist seitenspezifischer Code, doch für mich war das Konzept genau richtig. Einige wenige Seiten sind so spezifisch, dass ihr SCSS weder als Modul noch als Layout verwendet wird. Diese CSS-Deklarationen liegen im Ordner `pages`.

Das Konzept von `states` besagt, dort alle Stile abzulegen, die den Zustand eines Moduls anzeigen, insbesondere durch JavaScript gesteuerte Veränderungen.

Für meine Seite verwende ich auch Themes, die im Ordner `theme` abgelegt werden. Mit dem spezifischen Dateien in diesem Ordner überschreibe ich bestimmte Farben und Bilder, und kann so eine andere Anmutung meiner Seite erreichen. Durch den Aufruf einer anderen Theme-Datei sieht die Website dann plötzlich anders aus.

Im Ordner `vendor` wird aller Code abgelegt, der von Extern kommt, also das CSS von Plugins oder z. B. das [Solarized](http://ethanschoonover.com/solarized)-Farbschema, mit dem ich meine Codebeispiele einfärbe.
