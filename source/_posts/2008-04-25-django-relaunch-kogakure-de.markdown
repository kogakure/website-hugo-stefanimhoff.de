---
layout: post
title: "Django-Relaunch von kogakure.de"
date: 2008-04-25 18:00
description:
categories:
tags:
- django
- download
- git
- python
- relaunch
---

Es ist soweit! Mein erstes Django-Projekt ist online: das seit 1999 bestehende Kampfkunst-Magazin [kogakure.de](http://kogakure.de/ "kogakure.de – Ninja, Ninjutsu und Kampfkunst").

<!-- more -->

## Web-Entwicklung für Perfektionisten

Was ist Django? Django ist ein [Python](http://www.python.org/ "Python Programming Language -- Official Website")-Web-Framework, das schnelle, saubere Entwicklung von dynamischen Websites ermöglicht.

Django wurde nach dem Jazz-Gitarristen Django Reinhardt benannt und wird [so ausgesprochen](http://red-bean.com/~adrian/django_pronunciation.mp3).

Gegenüber anderen Web-Frameworks hat es einige Vorteile, vor allem ist es sehr *Designerfreundlich*.

Obwohl Django erst in Version 0.97x ist, kann man es schon ohne Probleme in normalen Projekten einsetzten. Bis zur Version 1.0 sollen noch bestimmte API-Schnittstellen eindeutig festgelegt werden. Es ist spannend zu sehen, was für interessante Branches (Entwicklungszweige) noch in Arbeit sind und in naher Zukunft mit der Hauptentwicklungslinie verschmolzen werden.

### Objektrelationales Mapping

Django liefert eine Datenbank-Schnittstelle, die es ermöglicht komplexe Tabellen zu erstellen, ohne auch nur eine einzige Zeile SQL schreiben zu müssen. Das hat den Vorteil, dass man auch in wenigen Minuten auf eine komplett andere Datenbank wechseln kann. Natürlich kann man aber SQL einsetzen, wenn man möchte.

### Automatische Administrationsoberfläche

Ein besonders starkes Argument für Django ist das automatische Admin-Interface. Wo man in anderen Web-Frameworks erst einmal Wochen damit beschäftigt ist eine Eingabe für seine Daten zu programmieren, können die Redakteure schon nach wenigen Minuten mit der Eingabe der Daten beginnen, selbst wenn noch nichts programmiert wurde. Und außerdem ist das Interface sehr hübsch und gut zu bedienen.

### Elegante URL-Konfiguration

Django hat saubere URLs. Das URL-Design ist ein essentieller Bestandteil der Entwicklung. Man schreibt und wählt sich seine URLs selber.

### Templates

Für Webdesigner besonders interessant: Django liefert gleich eine mächtige Template-Engine mit. Hier sind Python-Code und Markup streng getrennt. Kein wildes Vermischen von Programmiersprache und HTML bei Django. Das Template-System kommt mit einem unglaublich großen Repertoire an Filtern und Tags, die nach Belieben durch eigene erweitert werden können. Außerdem ist es das erste System, was ich kennengelernt habe, bei dem die Templates vererbt werden können.

### Cache

Django liefert gleich eine riesige Auswahl an Caching-Möglichkeiten mit, ob im Filesystem, in der Datenbank oder in verschiedenen RAM-Speichern – man hat die freie Wahl.

### Internationalisierung

Django unterstützt eine Vielzahl an Sprachen und bietet eine sehr gute Lokalisierung und Internationalisierung der Anwendungen. Kein Wunder, denn [laut Jacob Kaplan-Moss](http://jacobian.org/writing/arc/) hat Django einen Großteil seiner Benutzer aus nicht-englisch-sprechenden Ländern. Mittlerweile gibt es sogar Django-Entwickler in Nepal oder auf Fiji.

## Die Entwicklung von kogakure.de

### Warum ein Framework?

Die Seite kogakure.de lief vorher mit [ExpressionEngine](http://ellislab.com/expressionengine), einem Publishing-Tool, das ich auch weiterhin sehr empfehlen kann.

Doch jedes CMS (Content-Management-System) hat seine Begrenzungen, mit denen man leben muss oder sich mühsam nach Möglichkeiten umsehen muss, das System zu erweitern (Plugins, Extensions, Module). Da die meisten Erweiterungen einfach oben auf das CMS draufgesetzt werden, leidet darunter auch die Performance. So kann man nach dem Installieren eines Dutzend von [WordPress](http://wordpress.org/ "WordPress › Blog Tool and Weblog Platform")-Plugins leicht unzählige parallele Datenbankanfragen haben. Bei Django passiert so etwas nicht.

Dies hat auch noch andere Nachteile: Man benutzt die Plugins, weiß aber meist nicht wie sie funktionieren oder ob sie überhaupt gut programmiert sind. Plugins bieten für Hacker eine besonders gute Angriffsfläche.

Zu allem Unglück kam es in der Vergangenheit immer wieder vor, dass Plugins nicht weiterentwickelt wurden und mit neuen Versionen der CMS nicht mehr liefen.

Django benutzt Python-Module. Diese sind in Python programmiert und laufen auch außerhalb von Django. Und Python ist nebenbei bemerkt sehr leicht zu lernen, gut zu lesen und weitaus länger als z. B. PHP am Markt. Google und Yahoo benutzen Python – um nur einige zu nennen.

Ich habe schon eine Menge Content-Management-Systeme ausprobiert und jedes ist auf seine Art begrenzt und nur für einen einzigen Zweck geeignet (z. B. WordPress für einen Blog). Will man aber eine Website haben die nicht so einfach in eine Schublade gesteckt werden kann, oder die möglichst lange bestehen soll, hat man mit Content-Management-Systemen ein Problem. Zu oft hat man schon von diesen CMS-Hoppern gehört, die z. B. von [MovableType](http://www.movabletype.org/) zu [TextPattern](http://textpattern.com/ "Textpattern"), dann zu [WordPress](http://wordpress.org/ "WordPress › Blog Tool and Weblog Platform") und schließlich zu [ExpressionEngine](http://ellislab.com/expressionengine) gewechselt sind. Die haben einfach zu viel Zeit…

Frameworks haben mich bislang immer abgeschreckt, weil sie entweder mit PHP liefen (und ich hasse PHP) oder man einfach zu viel selber Programmieren musste. Bei Django halten sich Programmierung und Design (Template) immer schön im Gleichgewicht.

### Entwicklungsdauer

Mit der Entwicklung der Website habe ich zwar schon am 23. August 2007 begonnen, doch gab es zwischendurch einige Monate, wo ich nicht am Projekt gearbeitet habe, so z. B. im Januar und Februar, als ich bei der Übersetzung der Dokumentation der Deutschen Django-Community geholfen habe.

In meinem [Git](http://git-scm.com/)-Repository konnte ich ca. 35 Arbeitstage zählen, wobei ich an manchen Tagen 10 Minuten an anderen auch mal 11 Stunden gearbeitet habe. Alles in allem kann man aber sagen, dass die Entwicklung mit Django rasend schnell geht. Die Datenmodelle waren schon nach dem ersten Tag erstellt und einrichtet.

### Applikationen

Mein Projekt besteht aus sieben Applikationen:

* Artikel
* Kurzmeldungen
* Lexikon
* Spruchdatenbank
* Produktempfehlungen
* Kontaktformular
* Suche

Der Quellcode von kogakure.de ist übrigens (ohne Mediendateien) gerade mal 305 KB groß (35 KB Templates, 109 KB Apps, 161 KB Libs). In den Libs liegen bei mir z. B. Module wie Markdown. Natürlich ist da noch Django, das ist etwa 8 MB groß und kann von allen Django-Projekten benutzt werden.

Die Website kommt mit allem daher, was eine moderne Website so haben sollte: Feeds für alle möglichen Daten, XML-Sitemaps für die Suchmaschinen und Markdown-Unterstützung. Einzig Kommentare und User-Login habe ich vorerst weggelassen, wobei die Implementierung in Django sehr leicht ist.

### Technische Details

Die Website läuft auf einem [Apache 2 Server](http://httpd.apache.org/ "Welcome! - The Apache HTTP Server Project") mit [mod_python](http://www.modpython.org/ "Mod_python - Apache/Python Integration"), nutzt eine [PostgreSQL](http://www.postgresql.org/ "PostgreSQL")-Datenbank und [memcached](http://memcached.org/) zum Zwischenspeichern der Inhalte. Mit Hilfe von Git wird die Live-Website mit dem lokalen Entwicklungsserver abgeglichen. Der Einfachheit halber erledige ich das mit Hilfe von [Capistrano](http://capistranorb.com/) – ich bin halt faul.

Der Entwicklungsserver nutzt übrigens eine [sqlite](http://www.sqlite.org/ "SQLite Home Page")-Datenbank. Die Website nutzt den Django-Trunk der über Git direkt mit dem Subversion-Trunk abgeglichen wird.

Das Einrichten des Django-Projektes auf dem Apache-Server ging übrigens weitaus leichter, als befürchtet. Mit meinen [Rails](http://rubyonrails.org/ "Ruby on Rails")-Projekten hatte ich da schon mehr zu tun.

## Der Source-Code

Der Einstieg in Django ist (auch für Nichtprogrammierer) leicht, da es sehr gute Ressourcen kostenlos verfügbar gibt.

Da mir die Community von Django durch Hilfe im #IRC (#django oder #django-de), in Groups und Foren, mit wunderbaren Screencasts und Tutorials so viel geholfen hat, will ich meinen Source-Code auch frei zu Verfügung stellen. Der Code ist frei verfügbar und darf zu Lernzwecken oder für eigene Projekte gerne benutzt werden. Das Design der Seite liegt bei, doch dies ist natürlich rechtlich geschützt und darf nur für Schulungszwecke benutzt werden. Als Ninja fallen mir natürlich zahlreiche Möglichkeiten ein einen Dieb ins Jenseits zu befördern ;)

<div class="download">
    <ul>
        <li><a href="https://github.com/kogakure/kogakure-de">Source code (GitHub)</a> »</li>
        <li><a href="http://gitorious.org/projects/kogakure-de/">Source code (Gitorious)</a> »</li>
        <li><a href="https://bitbucket.org/kogakure/kogakure-de">Source code (Bitbucket)</a> »</li>
    </ul>
</div>

## Django-Ressourcen

Um den Einstieg in Django zu erleichtern, habe ich nachfolgend eine Liste von interessanten Ressourcen zusammengetragen, die mir beim Lernen oder bei Entscheidungen geholfen haben.

### Dokumentationen

* [The Django Book](http://www.djangobook.com/en/2.0/index.html) – Das kostenlose Django-Handbuch
* [Django Dokumentation](https://docs.djangoproject.com/en/1.4/) – Die offizielle Django-Dokumentation
* [Installation von Django](https://docs.djangoproject.com/en/dev/topics/install/) – Anleitung für die Installation von Django
* [Einsteiger-Tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/) – Offizielles 4-teiliges Einsteigertutorial

### Screencasts

* [Learn Django: Create a Wiki in 20 minutes](http://showmedo.com/videotutorials/video?name=1100000&amp;fromSeriesID=110) – Programmierung eines Wiki mit Django (1. Teil)
* [Learn Django: Extending the wiki with wikiwords and search](http://showmedo.com/videotutorials/video?name=1100010&amp;fromSeriesID=110) – Programmierung eines Wiki mit Django (2. Teil)
* [Learn Django: Adding tags to the wiki](http://showmedo.com/videotutorials/video?name=1100020&amp;fromSeriesID=110) – Programmierung eines Wiki mit Django (3. Teil)
* [Django Screencast: Writing a simple todo list](http://turriate.com/media/video/tiddlylist.htm "Django Screencast: Writing a simple todo list") – Programmieren einer Todo-Liste mit Django

### Video-Präsentationen

* [Django: Web Development for Perfectionists with Deadlines](http://www.youtube.com/watch?v=n8KnFywpXOE) – Jacob Kaplan-Moss stellt Django bei Google TechTalks vor (sehenswert!)
* [Snakes and Rubies](https://www.djangoproject.com/snakesandrubies/) – Die berühmte Diskussion von Ruby on Rails (David Heinemeier Hansson) und Django (Adrian Holovaty) über Gemeinsamkeiten und Unterschiede der beiden Frameworkds (sehenswert!)

### Folien

* [A fast-paced introduction to Django.](http://toys.jacobian.org/presentations/2007/pycon/tutorials/beginning/) – Folien von der PyCon2007, Jacob Kaplan-Moss
* [The Django Web Application Framework](http://www.slideshare.net/simon/the-django-web-application-framework "The Django Web Application Framework &raquo; SlideShare") – Folien von ACCU, Python Track 2006, Simon Willison
* [Doing Local Right](http://www.slideshare.net/simon/doing-local-right "Doing Local Right &raquo; SlideShare") – Folien von der @media 2007, Simon Willison

### Lernen und Hilfe

* [Google Groups Django users](http://groups.google.com/group/django-users "Django users | Google Groups") – Django Google Group, für Fragen und Antworten
* [Django snippets](http://djangosnippets.org/) – Nützliche Sammlung von Filtern, Tags und Code-Schnipseln
* [dpaste](http://dpaste.com/ "dpaste") – Zwischenablage für Code-Beispiele. Direkt in den IRC posten ist eine Todsünde.
* [Django Resources](https://code.djangoproject.com/wiki/DjangoResources) – Riesige Liste von Django-Ressourcen: Applikationen, Projekte, Anleitungen, Präsentationen …

### Tutorials

* [Django Tutorials](https://code.djangoproject.com/wiki/Tutorials) – Riesige Auswahl von Tutorials für Django

### Galerie

* [DjangoSites](http://www.djangosites.org/ "Latest Additions :: DjangoSites.org - Powered by Django") – Galerie mit Django-Websites

### Merchandising

* [Official Django Logos](https://www.djangoproject.com/community/logos/) – Das Django-Logo im Vektorformat
* [Django Badges](https://www.djangoproject.com/community/badges/) – Django-Plaketten für die eigene Website
* [Django Desktop Wallpaper](https://www.djangoproject.com/weblog/2005/nov/11/desktops/) – Desktop-Wallpaper
* [Django Cheat Sheet](http://www.mercurytide.co.uk/news/article/django-cheat-sheet/) – Django Cheat Sheet als PDF oder Wallpaper

### Django-Websites von Designern und Entwicklern

* [Adrian Holovarty](http://www.holovaty.com/ "Adrian Holovaty's Web site") – Entwickler von Django (Chicago, Illinois, US)
* [Bryan Veloso: Avalonstar](http://avalonstar.com/ "avalonstar:distortion") – Designer und Blogger (Seattle, Washington, US)
* [Jacob Kaplan-Moss](http://www.jacobian.org/ "jacobian.org : i got nothing") – Entwickler von Django (Lawrence, Kansas, US)
* [James Bennett: The B-List](http://www.b-list.org/ "The B-List: Latest entries") – Release Manager von Django (Lawrence, Kansas, US)
* [Jannis Leidel](http://jannisleidel.com/) – Programmierer, Deutsche Django-Community, eine Menge Django-Applikationen und Commits zum Trunk beigetragen (Berlin)
* [Jeff Croft](http://jeffcroft.com/ "JeffCroft.com: Homepage") – Designer und Python Programmierer (Seattle, Washington, US)
* [Nathan Borror](http://nthn.me/) – Designer (Lawrence, Kansas, US)
* [Paul Bissex: E-Scribe](http://news.e-scribe.com/ "E-Scribe News : a programmer&#39;s blog") – Entwickler, Lehrer und Autor (Northampton, Massachusetts, US)
* [Ross Poulton](http://www.rossp.org/ "rossp.org - Recent Updates") – Berater und Projektmanager, Entwickler von DjangoSites (Diamond Creek, Victoria, Australien)
* [Wilson Miner](http://wilsonminer.com/) – Designer von EveryBlock, dem Django-Admin-Interface und der Django-Website (San Francisco, Kalifornien, US)

### Sonstiges

* [Django Blog](https://www.djangoproject.com/weblog/) – Der offizielle Django-Blog
* [Django Community](https://www.djangoproject.com/community/) – Sammelt die Blogbeiträge von über 100 Django-Blogs
* [Django Search](http://djangosearch.com/ "Django web framework search engine") – Django-Suchmaschine

### Hosting

* [Django Friendly Webhosts](https://code.djangoproject.com/wiki/DjangoFriendlyWebHosts) – Liste von Hosts, die gut mit Django funktionieren
* [Djangofriendly](http://djangofriendly.com/hosts/) – Digg-Style-Voting für Django-Hoster
* [django-hosting.de](http://www.django-hosting.de/wiki/WikiIndex/) – Wiki mit verschiedenen Hosting-Anleitungen für Django
* [Slicehost](http://www.slicehost.com/ "Slicehost - VPS Hosting") – Hoster für Entwickler
* [Webfaction](http://www.webfaction.com/?affiliate=kogakure "Hosting for an agile web - WebFaction") – Hoster für Entwickler

### Django-Sourcecode

* [Git](https://github.com/django/django) – Offizielles GitHub-Repository von Django
