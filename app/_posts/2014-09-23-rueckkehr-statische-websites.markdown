---
layout: post
title: "Die Rückkehr der statischen Websites"
author: "Stefan Imhoff"
date: 2014-09-23T20:15:52+02:00
published: true
comments: false
categories:
- Code
- Empfehlung
tags:
- jekyll
- octopress
---

Seit kurzem arbeite ich am Redesign meiner Kampfkunst-Website [kogakure.de](http://kogakure.de). Wie die meisten Websites hat auch diese einmal als eine Sammlung von statischen HTML-Seiten begonnen.

{% figure image-figure-center %}
<img src="/assets/images/artikel/i-love-jekyll.jpg" alt="I ♥  Jekyll">
{% endfigure %}

Als ich 1999 die erste Version live gestellt habe, waren mir Web-Programmierung oder dynamische Seiten noch völlig fremd.

Auf meiner Website befinden sich neben einer Vielzahl von Artikeln auch ein Japanisch-Deutsches Lexikon mit Kampfkunst-Begriffen, eine Zitatensammlung und eine Reihe von Buch- und Film-Empfehlungen.

Einige Jahre später waren dann große  Teile der Website in PHP geschrieben. Die aktuelle Website habe ich mit dem Python-Webframework [Django](https://www.djangoproject.com/) [programmiert](https://github.com/kogakure/kogakure-de) und die Daten werden aus einer Datenbank geliefert.

Wie jede Webapplikation hat auch diese Website ein *nicht* unkompliziertes System für das Caching (mit [memcached](http://memcached.org/)) und einen automatisierten Deployment-Prozess. So ein Technologie-Stack läuft natürlich nicht bei jedem Hoster und  erfordert eine Menge Fachwissen und Wartungsaufwand.

Da ich beruflich nicht mit Python und Django arbeite, sondern mit [Ruby on Rails](http://rubyonrails.org/), wurde es für mich in den letzten Jahren immer aufwändiger, die Website am Laufen zu halten. Es macht wirklich wenig Spaß in der ohnehin kurz bemessenen Freizeit dafür zu sorgen, dass die Module und das MVC-Framework auf dem neusten Stand bleiben. Und wenn dies unterlassen wird, endet das Ganze schnell als Alptraum für  Sicherheit und Stabilität.

## Jekyll und andere statische Seitengeneratoren
Anfang des Jahres entschloss ich mich, dass es Zeit sei, an einer Aktualisierung zu arbeiten. Zum einen, weil die Website dringend für mobile Geräte optimiert werden muss (Responsive Web Design), zum anderen um die Python-Technologie zu Gunsten von Ruby zu wechseln. Ursprünglich hatte ich geplant, die Website in *Ruby in Rails* zu erstellen, was aber nur die Technologie, nicht die Komplexität des Projektes verändert hätte.

Jekyll oder andere statische Seitengeneratoren haben im Moment einen ziemlich starken Zulauf, doch aufgrund der Vielzahl von Daten auf meiner Kampfkunst-Website hatte ich diesen Gedanken zunächst verworfen. Doch dann lernte ich die *[Data Files](http://jekyllrb.com/docs/datafiles/)* von [Jekyll](http://jekylrb.com) kennen.

## Daten als YAML, JSON oder CSV
Im November 2013 wurde der Support für YAML-Dateien hinzugefügt, später in 2014 für JSON und diesen Monat für CSV. *Data Files* ermöglichen es, über Dateien dieser Formate zu iterieren und so Daten automatisch in die statischen Seiten zu laden. Ob es einfache Konfigurationsvariablen, wie z. B. ein Twitter-Benutzername sind, die Menüpunkte einer Navigation, oder wie bei mir ein Lexikon mit über 500 Einträgen, mit *Data Files* ist dies kein Problem mehr.

Ich hatte schon im April 2014 meine [eigene Website](http://stefanimhoff.de) mit Jekyll (0.12) und [Octopress](http://octopress.org/) (2.5) neu erstellt und war schon damals von der Einfachheit begeistert gewesen, mit der es mir möglich war, die Website neu zu erstellen. Ich musste mich nicht um die Programmierung und Wartung einer dynamischen Website kümmern, sondern konnte meine Aufmerksamkeit ganz auf die Dinge konzentrieren, die mir Spaß machen: eine moderne, responsive Website und ein ansprechendes Design zu erstellen.

## Besonderheiten von Jekyll
Durch [statische Seitengeneratoren](http://www.staticgen.com) habe ich meinen Spaß an Nebenprojekten wiederentdeckt. Es dauert nur wenige Minuten und schon hat man so ein Projekt aufgesetzt. Selbst jemand mit wenig Erfahrung kann so schnell einen Prototypen erstellen oder sich einen Blog selbst bauen:

{% highlight sh linenos %}
gem install jekyll
jekyll new myblog
cd myblog
jekyll serve
{% endhighlight %}

Statische Seitengeneratoren bieten so gut wie alles, was man sich wünschen kann: einen **Entwicklungsserver**, Unterstützung für **Markdown**, Textile und pures HTML. Seiten und Posts (wie bei einem Blog) mit einer Möglichkeit für Meta-Informationen (im YAML-Format).

Für Enwickler wichtig: **Syntax-Hervorhebung** für Code-Beispiele. Außerdem eine **Template**-Sprache (Liquid) mit Layouts, Includes, Tags und Filtern. Außerdem Pagination und volle Kontrolle über Permalinks (also die URL einer Website).

Von Haus aus gibt es bei Jekyll Unterstützung für SCSS, Sass und CoffeeScript und es gibt zahlreiche Migrationsskripte von anderen Systemen (z. B. WordPress) zu Jekyll.

Jekyll bietet auch ein robustes System für **Plugins**. Was immer man auch benötigt, es gibt höchstwahrscheinlich ein Plugin dafür. Wenn das nicht ausreichen sollte, können auch eigene Plugins mit Ruby programmiert werden - ich selbst habe mir ein halbes Dutzend einfache Plugins programmiert.

## Einfaches Hosting
Besonders beim Hosting glänzen statische Seitengeneratoren. Denn sie spucken am Ende (wie der Name schon nahelegt) statische HTML-Seiten aus. Und diese lassen sich überall für geringes Geld oder kostenlos hosten. Es ist sogar möglich die eigene Jekyll-Seite direkt und kostenlos auf GitHub zu hosten. Jeder billige Webspace für ein paar Cent im Monat ist ausreichend für eine statische Website.

Und statische Seiten sind sicher und ermöglichen eine sorgenfreie Freizeit. Es gibt nichts, was gehackt werden kann und keinen Teil der Website, der plötzlich nicht mehr läuft, weil irgendeine Software aktualisiert wurde.

## Spaß bei der Entwicklung
In seinem Vortrag <cite>[Dynamic Static Site Strategies (and other tongue twisters)](https://speakerdeck.com/philhawksworth/dynamic-static-site-strategies-smashing-conference)</cite> auf der [Smashing Conference 2014](http://smashingconf.com/) in Freiburg, erwähnte [Phil Hawksworth](http://hawksworx.com/), dass statische Seitengeneratoren einem wieder das Gefühl geben, das man vor vielen Jahren hatte, als man zum ersten Mal eine Website erstellte: man veränderte etwas und zog eine Datei in einen Ordner auf der Festplatte und schon war sie *magisch* im Internet zu sehen.

Alle diese zusätzlichen Dinge, wie dynamische Programmierung, Datenbanken, Caching, Deployment oder Content-Managment-Systeme, die einem eigentlich das Leben erleichtern sollten, sind eine doppelseitige  Klinge: sie erleichtern zwar vieles, ermöglichen spannende, aktuelle und dynamische Seiten, fügen aber gleichzeitig viel Komplexität hinzu. Und sehr viele Websites benötigen das gar nicht.

Es gab Zeiten, da haben wir unseren Kunden ein CMS für ihre Websites empfohlen, nur um später zu sehen, dass sie die Website einmal im Jahr oder seltener aktualisierten oder das Arbeiten mit dem CMS gleich der Agentur überließen. Ich habe viel zu oft Inhalte aus Word-Dokumenten von Kunden in irgendeinem CMS-Backend in eine dieser viel zu kleinen Textboxen kopiert und dann mühevoll mit einem WYSIWYG-Editor formatiert und dabei gedacht, ob nicht der Sinn des CMS gewesen war, dass der Kunde diese Arbeit selbst macht.

Natürlich soll das nicht heißen, dass dynamische Websites keine Berechtigung mehr haben - das wäre Blödsinn. Doch sollte man sich genau überlegen, ob der Einsatz von [füge hier eine tolle Technologie ein] gerechtfertigt ist.

Und statische Seitengeneratoren werden nicht mehr bloß als Spielzeug angesehen, da sie sich für viele Einsatzgebiete eignen. Ob für kleine Spaßprojekte wie den [#Beerclub](http://beerclub.hawksworx.com/), wo Phil Hawksworth mit seinen Kollegen Bier bewertet, den eigenen Blog, zum Rapid-Prototyping oder für Dokumentationen (Google setzt Jekyll z. B. für ihre Website [Web Fundamentals](https://developers.google.com/web/fundamentals/) ein). Und die GitHub-Pages laufen ebenfalls mit Jekyll.

## Automatisierung
Jekyll kommt zwar schon mit einem eigenen Webserver, der auch bei Änderungen automatisch die Seite und Assets neu generiert. Doch viele Webentwickler nehmen dafür [Grunt](http://gruntjs.com/) oder [Gulp](http://gulpjs.com/), um noch komfortabler zu arbeiten und neben der noch schnellen Generierung von Assets auch Livereload und andere komfortable Funktionalitäten. Darüber werde ich in einem gesonderten Artikel schreiben.

## Octopress und Jekyll
Im Zuge der Arbeiten an [kogakure.de](http://kogakure.de) habe ich auch gleich diese Website komplett auf die neuste Version von Jekyll (2.4.0) umgestellt. Octopress war ein aufgemotztes Jekyll mit zusätzlichen Plugins und für einen Blog typischer Ausstattung, war aber schon stark in die Jahre gekommen. Die Entwickler hatten sich entschlossen die besonderen Eigenschaften von Octopress (3.x) in ein [Gem](https://rubygems.org/gems/octopress) zu extrahieren und dieses als Zusatz für Jekyll anzubieten.

## Fazit
Mit Jekyll lassen sich Blogs, Portfolio-Websites oder ähnliche Projekte sehr schön und schnell umsetzen. Die Entwicklung macht sehr viel Spaß und Octopress kann jetzt zusätzlich zu einer normalen Installation von Jekyll verwendet werden. Dadurch bekommt man immer die neusten Features von Jekyll. Und da die Entwicklung an Jekyll sehr aktiv ist, sind das nicht wenige.
