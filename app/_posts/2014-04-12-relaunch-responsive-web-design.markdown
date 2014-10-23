---
layout: post
language: "de"
title: "Relaunch mit Responsive Web Design"
author: "Stefan Imhoff"
date: 2014-04-12 15:00
comments: false
categories:
- Design
- Code
- Website
tags:
- design
- relaunch
- typographie
- rwd
- octopress
- jekyll
---

Alles neu macht der Mai! Zwar ist es erst Mitte April, aber trotzdem erscheint diese Website ab heute in komplett neuem Design. Und nicht nur das, auch technisch ist alles neu. Keine einzige Zeile des alten Codes habe ich übernommen.

Selbstverständlich ist die komplette Website jetzt auch mit *Responsive Web Design* gebaut, etwas anderes sollte man 2014 nicht mehr abliefern.

## Gestaltung der Website

### Typographie
Beim Design habe ich dieses Mal besonders viel Wert auf die Typographie gelegt. Während der Design-Phase hatte ich monatelang nichts weiter fertiggestellt, als die Typographie und den Inhalt. Diesen Ansatz, bei dem von **innen nach aussen** gestaltet wird, wollte ich unbedingt ausprobieren.

Eine Menge Zeit ist in die Auswahl der richtigen Schriften geflossen, und daher setze ich auf Webfonts, die ich durch [Google Fonts](https://www.google.com/fonts) ausliefern lasse.

Ich setzte fast durchgängig die Technik des **vertikalen Rhythmus** bei meiner Typographie ein. Dabei wird die Zeilenhöhe immer gleich gehalten, egal wie groß die Schriftart ist. Eine mathematische Formel gleicht die Abstände der verschieden großen Schriften so aus, dass sie optisch auf der gleichen Höhe stehen, was besonders harmonisch wirkt.

Außerdem wollte ich von Anfang an gleich mit einer **Skala** arbeiten. Dies ist eine uralte Technik, die seit Jahrhunderten im Schriftsatz eingesetzt wird. Dabei wird ein besonderes Harmonieverhältnis ausgewählt und daran dann alle Breiten und Größen festgelegt. Ich verwende den *Goldenen Schnitt* als Grundlage für meine Skala.

### Design und Layout
Ich verwende ein **responsives, semantisches Gridsystem**, zuerst hatte ich das Gridsystem [Susy](http://susy.oddbird.net/) für [Compass](http://compass-style.org/) verwendet, doch während der Entwicklung auf [Singularity.gs](http://singularity.gs/) gewechselt, da dieses System weitaus ausgefeilter, mächtiger und zukunftsfähiger aussieht. Ausserdem wird das GitHub-Repository vom SASS-Team gepflegt.

Die Grids sind komplett mit **variablen Breiten** gebaut und mehrere **Breakpoint**s (durch Media Queries gesteuert) sorgen dafür, dass Lesebreite und Layout der Seite auf jeder Auflösung – vom Smartphone bis zum Desktop – immer optimal bleiben.

Für das Design wollte ich eine einfache, klare Anmutung, ein wenig japanisch und von Zen inspiriert. Auch wenn gerade überall flache Designs aus dem Boden sprießen, wollte ich eher eine Mischung aus [Skeumorphismus](http://de.wikipedia.org/wiki/Skeuomorphismus) und flachem Design. Die wirkliche Welt ist auch nie komplett flach und beim Betrachten von Oberflächen, die sich nicht an die Regeln der echten Welt halten (Schatten/Licht, Transluzenz, Struktur, Haptik, …) hat unser Gehirn immer das Gefühl, dass etwas *nicht stimmt*.

### Vektor-Icons
Da sich hochauflösende Displays – also Monitore mit Pixel-Dichten, die so hoch sind, dass das menschliche Auge sie nicht mehr erkennen kann (Apple nutzt dafür den Begriff *Retina*) – immer weiter durchsetzen, habe ich gleich darauf Wert gelegt, dass die Website auch auf hochauflösenden Displays, wie einem iPad, iPhone oder Android-Gerät klar und scharf aussieht.

Für Fotos bedeutet dies, dass sie in einer Auflösung vorliegen müssen, die am besten doppelt so hoch ist, wie sie angezeigt werden. Der Nachteil dieser Lösung ist eine größere Datenmenge. Da ich relativ wenige Bilder in den Artikeln verwende, habe ich mich entschieden vorerst keine gesonderten Bilder für niedrig auflösende Geräte auszuliefern. Das Design der Seite und ausgewählte Fotos werden jedoch auch in verschiedenen Qualitätsstufen ausgeliefert.

Für alle Piktogramme und Icons setze ich komplett auf **Vektorfonts**. Dabei wird die SVG-Grafik in eine Schriftart konvertiert. Vorteil dieser Technik ist, dass für eine große Anzahl an Icons nur ein Server-Request benötigt wird, wodurch die Seite schneller lädt.

### Logo und Icons
Mein Logo, das ich komplett neu gestaltet habe wird ebenfalls als Vektorfont ausgeliefert und lässt sich daher auf jede beliebige Größe skalieren und bleibt immer glasklar.

Aber auch ein komplett neues Favicon, Apple Touch Icons und ein Windows&nbsp;8-Tile gibt es jetzt.

### Off-Canvas-Menü
Da auf meiner Seite wenig bis gar keine Navigation benötigt wird, habe ich von Anfang an entschieden, keine immer sichtbare, eigenständige Navigation zu gestalten, sondern das Menü – wie auf kleinen Displays üblich – zu verbergen. Dies wird aber auch auf großen Monitoren beibehalten und die Navigation wird durch ein Off-Canvas-Menü verborgen und wird bei Bedarf eingeblendet.

### Styleguide
Damit auch jeder mögliche Inhalt optimal gestaltet ist, habe ich von Anfang an mit einem Styleguide gearbeitet. Dieser Styleguide ist auch [online für jeden verfügbar](/styleguide/). So können andere gerne schauen, wie ich einzelne Elemente technisch umgesetzt habe.

## Programmierung der Website

### Octopress und Jekyll
Da ich den Pflegeaufwand eines Content-Management-Systems in Zukunft nicht mehr ertragen wollte, habe ich dieses Mal auf eine Lösung gesetzt, die komplett statische Seiten generiert: [Octopress](http://octopress.org/).

Octopress sieht sich selbst als <q lang="en">A blogging framework for hackers</q>. Technisch basiert es auf [Jekyll](http://jekyllrb.com/), einem in Ruby geschriebenen Tool, das auch von GitHub für seine *Pages* eingesetzt wird. Da ich auch beruflich jeden Tag mit Ruby und *Ruby on Rails* zu tun habe, war dies für mich eine gute Wahl.

Im Vergleich zu Jekyll liefert Octopress schon einige vorgefertigte Tools und Lösungen, die man für einen Blog nicht missen möchte. Darunter gibt es auch diverse Importer für bekannte Blog-Systeme wie z. B. WordPress.

Octopress bietet von Haus aus schon Unterstützung für Atom-Feeds, Suchmaschinen-Sitemaps, Syntax-Highlighting an und kommt mit einer Vielzahl von Tags und Filtern.

Ich setze noch Octopress 2.x ein, auch wenn in Kürze [Octopress 3.0](https://github.com/octopress/octopress) komplett neugeschrieben und als Ruby-Gem extrahiert, erscheinen wird. Sobald Dokumentation und Gem final sind, werde ich dann bei Gelegenheit meinen Blog migrieren.

### Plugins
Da Octopress (und Jekyll) neben einer einfachen Templatesprache ([Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)) auch die Möglichkeit der [Erweiterung](https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers) durch Tags, Blocktags und Filter bietet, lassen sich mit einigen *Ruby*-Kenntnissen eigene Plugins erstellen.

Neben einigen Plugins, die es bereits für  Jekyll und Octopress gab, habe ich auch einige eigene Erweiterungen geschrieben, z. B. ein Plugin, das [Akronyme und Akürzungen](https://github.com/kogakure/jekyll-plugin-abbr) automatisch ersetzt und ein einfaches Plugin, mit dem sich der [Ampersand](https://github.com/kogakure/jekyll-plugin-ampersand) (&amp;) gesondert stylen lässt.

### Asset-Pipeline
Für eine optimale Performance wollte ich von Anfang an, dass alle meine Assets (Bilder, Stylesheets, JavaScript, …) gecached, minimiert und optimiert werden. Für Rails ist die [Asset-Pipeline](http://guides.rubyonrails.org/asset_pipeline.html) seit einiger Zeit der Standard. Diese kombiniert mehrere Dateien zusammen, minimiert und komprimiert JavaScript und Stylesheets und versieht Bilder mit so genannten Cache-Keys, damit diese auch wieder invalidiert werden können. Dafür gibt es mehrere Projekte, die dieses für Jekyll portieren. Ich setze hierfür [Jekyll-Assets](https://github.com/ixti/jekyll-assets/) ein.

## Fazit
Ich hoffe das neue Design gefällt und lässt sich auch auf mobilen Geräten gut lesen. Zwar habe ich schon mit einer Vielzahl physischer Geräte (iPhone, iPad, Nexus 5, …) getestet und auch den mobilen Emulator von Google benutzt, um Geräte zu prüfen, die mir nicht zur Verfügung standen. Sollte euch etwas auffallen, könnt ihr gerne Fehler an mich schicken, dann versuche ich diese zu Beheben und die Ansicht zu optimieren.

In den nächsten Wochen und Monaten werde ich auf diesem Blog in einzelne Bereiche meines Redesigns einen tieferen Einblick geben, sowohl in die Gestaltung, als auch die Programmierung. Es lohnt sich also den News-Feed zu abonnieren oder öfter mal vorbeizuschauen.
