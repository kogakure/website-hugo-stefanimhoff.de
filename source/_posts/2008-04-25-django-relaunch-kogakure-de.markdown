---
layout: post
title: "Django-Relaunch von kogakure.de"
date: 2008-04-25 18:00
categories:
tags: [django, download, git, python, relaunch]
---

Es ist soweit! Mein erstes Django-Projekt ist online: das seit 1999 bestehende Kampfkunst-Magazin [kogakure.de](http://kogakure.de/ "kogakure.de – Ninja, Ninjutsu und Kampfkunst").

<!-- more -->

### Web-Entwicklung für Perfektionisten

Was ist Django? Django ist ein [Python](http://www.python.org/ "Python Programming Language -- Official Website")-Web-Framework, das schnelle, saubere Entwicklung von dynamischen Websites ermöglicht.

Django wurde nach dem Jazz-Gitarristen Django Reinhardt benannt und wird [so ausgesprochen](http://red-bean.com/~adrian/django_pronunciation.mp3).

Gegenüber anderen Web-Frameworks hat es einige Vorteile, vor allem ist es sehr *Designerfreundlich*.

Obwohl Django erst in Version 0.97x ist, kann man es schon ohne Probleme in normalen Projekten einsetzten. Bis zur Version 1.0 sollen noch bestimmte API-Schnittstellen eindeutig festgelegt werden. Es ist spannend zu sehen, was für interessante Branches (Entwicklungszweige) noch in Arbeit sind und in naher Zukunft mit der Hauptentwicklungslinie verschmolzen werden.

#### Objektrelationales Mapping

Django liefert eine Datenbank-Schnittstelle, die es ermöglicht komplexe Tabellen zu erstellen, ohne auch nur eine einzige Zeile SQL schreiben zu müssen. Das hat den Vorteil, dass man auch in wenigen Minuten auf eine komplett andere Datenbank wechseln kann. Natürlich kann man aber SQL einsetzen, wenn man möchte.

#### Automatische Administrationsoberfläche

Ein besonders starkes Argument für Django ist das automatische Admin-Interface. Wo man in anderen Web-Frameworks erst einmal Wochen damit beschäftigt ist eine Eingabe für seine Daten zu programmieren, können die Redakteure schon nach wenigen Minuten mit der Eingabe der Daten beginnen, selbst wenn noch nichts programmiert wurde. Und außerdem ist das Interface sehr hübsch und gut zu bedienen.

#### Elegante URL-Konfiguration

Django hat saubere URLs. Das URL-Design ist ein essentieller Bestandteil der Entwicklung. Man schreibt und wählt sich seine URLs selber.

#### Templates

Für Webdesigner besonders interessant: Django liefert gleich eine mächtige Template-Engine mit. Hier sind Python-Code und Markup streng getrennt. Kein wildes Vermischen von Programmiersprache und HTML bei Django. Das Template-System kommt mit einem unglaublich großen Repertoire an Filtern und Tags, die nach Belieben durch eigene erweitert werden können. Außerdem ist es das erste System, was ich kennengelernt habe, bei dem die Templates vererbt werden können.

#### Cache

Django liefert gleich eine riesige Auswahl an Caching-Möglichkeiten mit, ob im Filesystem, in der Datenbank oder in verschiedenen RAM-Speichern – man hat die freie Wahl.

#### Internationalisierung

Django unterstützt eine Vielzahl an Sprachen und bietet eine sehr gute Lokalisierung und Internationalisierung der Anwendungen. Kein Wunder, denn [laut Jacob Kaplan-Moss](http://www.jacobian.org/writing/2008/jan/30/arc/ "jacobian.org : A picture is worth a thousand words") hat Django einen Großteil seiner Benutzer aus nicht-englisch-sprechenden Ländern. Mittlerweile gibt es sogar Django-Entwickler in Nepal oder auf Fiji.

### Die Entwicklung von kogakure.de

#### Warum ein Framework?

Die Seite kogakure.de lief vorher mit [ExpressionEngine](http://expressionengine.com/ "ExpressionEngine - Publish Your Universe!"), einem Publishing-Tool, das ich auch weiterhin sehr empfehlen kann.

Doch jedes CMS (Content-Management-System) hat seine Begrenzungen, mit denen man leben muss oder sich mühsam nach Möglichkeiten umsehen muss, das System zu erweitern (Plugins, Extensions, Module). Da die meisten Erweiterungen einfach oben auf das CMS draufgesetzt werden, leidet darunter auch die Performance. So kann man nach dem Installieren eines Dutzend von [WordPress](http://wordpress.org/ "WordPress › Blog Tool and Weblog Platform")-Plugins leicht unzählige parallele Datenbankanfragen haben. Bei Django passiert so etwas nicht.

Dies hat auch noch andere Nachteile: Man benutzt die Plugins, weiß aber meist nicht wie sie funktionieren oder ob sie überhaupt gut programmiert sind. Plugins bieten für Hacker eine besonders gute Angriffsfläche.

Zu allem Unglück kam es in der Vergangenheit immer wieder vor, dass Plugins nicht weiterentwickelt wurden und mit neuen Versionen der CMS nicht mehr liefen.

Django benutzt Python-Module. Diese sind in Python programmiert und laufen auch außerhalb von Django. Und Python ist nebenbei bemerkt sehr leicht zu lernen, gut zu lesen und weitaus länger als z. B. PHP am Markt. Google und Yahoo benutzen Python – um nur einige zu nennen.

Ich habe schon eine Menge Content-Management-Systeme ausprobiert und jedes ist auf seine Art begrenzt und nur für einen einzigen Zweck geeignet (z. B. WordPress für einen Blog). Will man aber eine Website haben die nicht so einfach in eine Schublade gesteckt werden kann, oder die möglichst lange bestehen soll, hat man mit Content-Management-Systemen ein Problem. Zu oft hat man schon von diesen CMS-Hoppern gehört, die z. B. von [MovableType](http://www.movabletype.org/) zu [TextPattern](http://textpattern.com/ "Textpattern"), dann zu [WordPress](http://wordpress.org/ "WordPress › Blog Tool and Weblog Platform") und schließlich zu [ExpressionEngine](http://expressionengine.com/ "ExpressionEngine - Publish Your Universe!") gewechselt sind. Die haben einfach zu viel Zeit…

Frameworks haben mich bislang immer abgeschreckt, weil sie entweder mit PHP liefen (und ich hasse PHP) oder man einfach zu viel selber Programmieren musste. Bei Django halten sich Programmierung und Design (Template) immer schön im Gleichgewicht.

#### Entwicklungsdauer

Mit der Entwicklung der Website habe ich zwar schon am 23. August 2007 begonnen, doch gab es zwischendurch einige Monate, wo ich nicht am Projekt gearbeitet habe, so z. B. im Januar und Februar, als ich bei der Übersetzung der Dokumentation der [Deutschen Django-Community](http://www.django-de.org/ "Django-de | Das Python Web Framework für Perfektionisten") geholfen habe.

In meinem [Git](http://git.or.cz/ "Git - Fast Version Control System")-Repository konnte ich ca. 35 Arbeitstage zählen, wobei ich an manchen Tagen 10 Minuten an anderen auch mal 11 Stunden gearbeitet habe. Alles in allem kann man aber sagen, dass die Entwicklung mit Django rasend schnell geht. Die Datenmodelle waren schon nach dem ersten Tag erstellt und einrichtet.

#### Applikationen

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

#### Technische Details

Die Website läuft auf einem [Apache 2 Server](http://httpd.apache.org/ "Welcome! - The Apache HTTP Server Project") mit [mod_python](http://www.modpython.org/ "Mod_python - Apache/Python Integration"), nutzt eine [PostgreSQL](http://www.postgresql.org/ "PostgreSQL")-Datenbank und [memcached](http://danga.com/memcached/ "memcached: a distributed memory object caching system") zum Zwischenspeichern der Inhalte. Mit Hilfe von Git wird die Live-Website mit dem lokalen Entwicklungsserver abgeglichen. Der Einfachheit halber erledige ich das mit Hilfe von [Capistrano](http://www.capify.org/ "Capistrano") – ich bin halt faul.

Der Entwicklungsserver nutzt übrigens eine [sqlite](http://www.sqlite.org/ "SQLite Home Page")-Datenbank. Die Website nutzt den Django-Trunk der über Git direkt mit dem Subversion-Trunk abgeglichen wird.

Das Einrichten des Django-Projektes auf dem Apache-Server ging übrigens weitaus leichter, als befürchtet. Mit meinen [Rails](http://www.rubyonrails.org/ "Ruby on Rails")-Projekten hatte ich da schon mehr zu tun.

### Der Source-Code

Der Einstieg in Django ist (auch für Nichtprogrammierer) leicht, da es sehr gute Ressourcen kostenlos verfügbar gibt.

Da mir die Community von Django durch Hilfe im #IRC ([#django](irc://irc.freenode.net/django) oder [#django-de](irc://irc.freenode.net/django-de)), in Groups und Foren, mit wunderbaren Screencasts und Tutorials so viel geholfen hat, will ich meinen Source-Code auch frei zu Verfügung stellen. Der Code ist frei verfügbar und darf zu Lernzwecken oder für eigene Projekte gerne benutzt werden. Das Design der Seite liegt bei, doch dies ist natürlich rechtlich geschützt und darf nur für Schulungszwecke benutzt werden. Als Ninja fallen mir natürlich zahlreiche Möglichkeiten ein einen Dieb ins Jenseits zu befördern ;)

<div class="download">
    <ul>
        <li><a href="http://github.com/kogakure/kogakure-de/tree/master">Source code (GitHub)</a> »</li>
        <li><a href="http://gitorious.org/projects/kogakure-de/repos/mainline">Source code (Gitorious)</a> »</li>
        <li><a href="http://bitbucket.org/kogakure/kogakure-de">Source code (Bitbucket)</a> »</li>
    </ul>
</div>

### Django-Ressourcen

Um den Einstieg in Django zu erleichtern, habe ich nachfolgend eine Liste von interessanten Ressourcen zusammengetragen, die mir beim Lernen oder bei Entscheidungen geholfen haben.

#### Dokumentationen

* [The Django Book](http://www.djangobook.com/ "The Django Book") – Das kostenlose Django-Handbuch
* [Django Dokumentation](http://www.djangoproject.com/documentation/ "Django | Documentation") – Die offizielle Django-Dokumentation
* [Installation von Django](http://www.djangoproject.com/documentation/install/ "Django | How to install Django | Django Documentation") – Anleitung für die Installation von Django
* [Einsteiger-Tutorial](http://www.djangoproject.com/documentation/tutorial01/ "Django | Writing your first Django app, part 1 | Django Documentation") – Offizielles 4-teiliges Einsteigertutorial

#### Screencasts

* [Empty Thoughts Django Screencasts](http://blog.michaeltrier.com/screencasts "Empty Thoughts - Living on the Edge") – Fantastische Screencasts von Michael Trier
* [Django in Seven Minutes](http://www.throwingbeans.org/django_screencasts.html "Django Screencasts") – Einstieg in Django in 7 Minuten
* [Learn Django: Create a Wiki in 20 minutes](http://showmedo.com/videos/video?name=1100000&amp;fromSeriesID=110 "Learn Django: Create a Wiki in 20 minutes tutorial video") – Programmierung eines Wiki mit Django (1. Teil)
* [Learn Django: Extending the wiki with wikiwords and search](http://showmedo.com/videos/video?name=1100010&amp;fromSeriesID=110 "Learn Django: Extending the wiki with wikiwords and search tutorial video") – Programmierung eines Wiki mit Django (2. Teil)
* [Learn Django: Adding tags to the wiki](http://showmedo.com/videos/video?name=1100020&amp;fromSeriesID=110 "Learn Django: Adding tags to the wiki tutorial video") – Programmierung eines Wiki mit Django (3. Teil)
* [Django Screencast: Writing a simple todo list](http://turriate.com/media/video/tiddlylist.htm "Django Screencast: Writing a simple todo list") – Programmieren einer Todo-Liste mit Django
* [Django: a simple blog in a few minutes](http://www2.lamptraining.com/screencast/1) – Einen simplen Blog mit Django programmieren

#### Podcasts

* [This Week in Django](http://thisweekindjango.com/ "This Week in Django") – Wöchentlicher Django-Podcast, ein Muss für Djangonauten. Gute Interviews und Blick hinter die Kulissen

#### Video-Präsentationen

* [Django: Web Development for Perfectionists with Deadlines](http://video.google.com/videoplay?docid=-70449010942275062 "django: Web Development for Perfectionists with Deadlines") – Jacob Kaplan-Moss stellt Django bei Google TechTalks vor (sehenswert!)
* [Snakes and Rubies](http://www.djangoproject.com/snakesandrubies/ "Django | Snakes and Rubies downloads") – Die berühmte Diskussion von Ruby on Rails (David Heinemeier Hansson) und Django (Adrian Holovaty) über Gemeinsamkeiten und Unterschiede der beiden Frameworkds (sehenswert!)

#### Folien

* [A fast-paced introduction to Django.](http://toys.jacobian.org/presentations/2007/pycon/tutorials/beginning/) – Folien von der PyCon2007, Jacob Kaplan-Moss
* [The Django Web Application Framework](http://www.slideshare.net/simon/the-django-web-application-framework "The Django Web Application Framework &raquo; SlideShare") – Folien von ACCU, Python Track 2006, Simon Willison
* [Doing Local Right](http://www.slideshare.net/simon/doing-local-right "Doing Local Right &raquo; SlideShare") – Folien von der @media 2007, Simon Willison
* [Python Web Development with Django](http://itmaurer.com/clepy/htdocs/media/presentation/presentation.html "Python Web Development with Django") – Folien über Python Web-Entwicklung mit Django, Ian Maurer

#### Lernen und Hilfe

* [Google Groups Django users](http://groups.google.com/group/django-users "Django users | Google Groups") – Django Google Group, für Fragen und Antworten
* [Django snippets](http://www.djangosnippets.org/ "Django snippets") – Nützliche Sammlung von Filtern, Tags und Code-Schnipseln
* [dpaste](http://dpaste.com/ "dpaste") – Zwischenablage für Code-Beispiele. Direkt in den IRC posten ist eine Todsünde.
* [Django Resources](http://code.djangoproject.com/wiki/DjangoResources "DjangoResources - Django Code - Trac") – Riesige Liste von Django-Ressourcen: Applikationen, Projekte, Anleitungen, Präsentationen …

#### Tutorials

* [Django Tutorials](http://code.djangoproject.com/wiki/Tutorials "Tutorials - Django Code - Trac") – Riesige Auswahl von Tutorials für Django

#### Galerie

* [DjangoSites](http://www.djangosites.org/ "Latest Additions :: DjangoSites.org - Powered by Django") – Galerie mit Django-Websites

#### Merchandising

* [Django Shirts](http://django.spreadshirt.net/ "Django T-Shirts") – Ein Spreadshirt-Shop mit der nötigen Fan-Auswahl
* [Official Django Logos](http://www.djangoproject.com/community/logos/ "Django | Logos") – Das Django-Logo im Vektorformat
* [Django Badges](http://www.djangoproject.com/community/badges/ "Django | Badges") – Django-Plaketten für die eigene Website
* [Django Desktop Wallpaper](http://www.djangoproject.com/weblog/2005/nov/11/desktops/ "Django | Weblog | Django desktops") – Desktop-Wallpaper
* [Django Cheat Sheet](http://www.mercurytide.co.uk/whitepapers/django-cheat-sheet/ "Django cheat sheet (Mercurytide)") – Django Cheat Sheet als PDF oder Wallpaper

#### Django-Websites von Designern und Entwicklern

* [Adrian Holovarty](http://www.holovaty.com/ "Adrian Holovaty's Web site") – Entwickler von Django (Chicago, Illinois, US)
* [Brian Rosner](http://oebfare.com/ "oebfare") – Co-Host bei <cite>This Week in Django</cite> und Entwickler des newforms-admin Branch (Littleton, Colorado, US)
* [Bryan Veloso: Avalonstar](http://avalonstar.com/ "avalonstar:distortion") – Designer und Blogger (Seattle, Washington, US)
* [Jacob Kaplan-Moss](http://www.jacobian.org/ "jacobian.org : i got nothing") – Entwickler von Django (Lawrence, Kansas, US)
* [James Bennett: The B-List](http://www.b-list.org/ "The B-List: Latest entries") – Release Manager von Django (Lawrence, Kansas, US)
* [Jannis Leidel](http://jannisleidel.com/) – Programmierer, Deutsche Django-Community, eine Menge Django-Applikationen und Commits zum Trunk beigetragen (Berlin)
* [Jared Kuolt](http://superjared.com/ "SuperJared.com") – Entwickler für Slicehost (North Park, California, US)
* [Jeff Croft](http://jeffcroft.com/ "JeffCroft.com: Homepage") – Designer und Python Programmierer (Seattle, Washington, US)
* [Martin Geber](http://www.martin-geber.com/ "Martin Geber: Webdevelopment &middot; Economy &middot; Languages") – Programmierer und Blogger (Köln, Nordrhein-Westfalen)
* [Martin Mahner](http://www.mahner.org/ "mahner.org | zu Hause bei Martin Mahner") – Webdesigner und Programmierer (Putbus, Mecklenburg-Vorpomm)
* [Michael Trier: Empty Thoughts](http://blog.michaeltrier.com/ "Empty Thoughts - Living on the Edge") – Software Architekt, Unternehmer, Co-Host von <cite>This Week in Django</cite> (Louisville, Kentucky, US)
* [Nathan Borror: Playground Blues](http://www.playgroundblues.com/ "Playground Blues") – Designer (Lawrence, Kansas, US)
* [Paul Bissex: E-Scribe](http://news.e-scribe.com/ "E-Scribe News : a programmer&#39;s blog") – Entwickler, Lehrer und Autor (Northampton, Massachusetts, US)
* [Ross Poulton](http://www.rossp.org/ "rossp.org - Recent Updates") – Berater und Projektmanager, Entwickler von DjangoSites (Diamond Creek, Victoria, Australien)
* [Simon Willison](http://simonwillison.net/ "Simon Willison’s Weblog") – Berater für OpenID und Web Entwicklung, Co-Gründer von Django (Brighton, England)
* [Wilson Miner](http://www.wilsonminer.com/ "Wilson Miner Live") – Designer von EveryBlock, dem Django-Admin-Interface und der Django-Website (San Francisco, Kalifornien, US)

#### Sonstiges

* [Django People](http://djangopeople.net/ "Django People") – Suchmaschine und Social Network für Djangonauten
* [Django-de](http://www.django-de.org/ "Django-de | Das Python Web Framework für Perfektionisten") – Website der deutschen Community
* [Django Blog](http://www.djangoproject.com/weblog/ "Django | Weblog") – Der offizielle Django-Blog
* [Django Community](http://www.djangoproject.com/community/ "Django | Community") – Sammelt die Blogbeiträge von über 100 Django-Blogs
* [Django Search](http://djangosearch.com/ "Django web framework search engine") – Django-Suchmaschine
* [Django Plugables](http://djangoplugables.com/ "Django Pluggables &bull; Find reusable applications for your Django project, quickly and easily!") – Gute Übersicht über verfügbare Django-Applikationen

#### Hosting

* [Django Friendly Webhosts](http://code.djangoproject.com/wiki/DjangoFriendlyWebHosts "DjangoFriendlyWebHosts - Django Code - Trac") – Liste von Hosts, die gut mit Django funktionieren
* [Djangofriendly](http://djangofriendly.com/ "Hosts : Djangofriendly") – Digg-Style-Voting für Django-Hoster
* [django-hosting.de](http://www.django-hosting.de/ "WikiIndex - django-hosting.de") – Wiki mit verschiedenen Hosting-Anleitungen für Django
* [Slicehost](http://www.slicehost.com/ "Slicehost - VPS Hosting") – Hoster für Entwickler
* [Webfaction](http://www.webfaction.com/?affiliate=kogakure "Hosting for an agile web - WebFaction") – Hoster für Entwickler

#### Django-Trunk

* [Subversion](http://code.djangoproject.com/svn/django/ "Revision 7461: /django") – Offizieller Subversion-Trunk von Django
* [Git](http://github.com/django/django/tree/master) – Git-Mirror von Django
* [Mercurial](http://hg.dpaste.com/django/ "Mercurial repositories index") – Mercurial-Mirror von Django
