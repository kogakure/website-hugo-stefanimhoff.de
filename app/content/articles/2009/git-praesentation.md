---
language: "de"
title: "Git-Präsentation"
description: "Meine Git-Präsentation 'Sei (k)ein Blödmann und nimm Git!'. Meine 166 Folien lange und wunderschön gestaltete Präsentation über Git, die alle Vorteile, die Arbeitsweise und viele Tipps für die Arbeit mit Git aufzählt."
author: "Stefan Imhoff"
slug: "git-praesentation"
date: 2009-08-08T13:00:00+02:00
og_image: "assets/images/articles/2009/git-praesentation/git-praesentation.jpg"
categories: ["vcs", "presentation"]
---

Auf dem 4. Treffen der Django-UserGroup Hamburg habe ich eine Präsentation über Git vorgetragen, die ich hier als PDF zum Download anbiete.

<figure class="image-figure">
  <a href="http://www.slideshare.net/kogakure/sei-kein-bldmann-und-nimm-git-1830449">
    <img src="/assets/images/articles/2009/git-praesentation/git-praesentation.jpg" alt="Sei (k)ein Blödmann und nimm Git!">
  </a>
  <figcaption>
  Präsentation: <cite>Sei (k)ein Blödmann und nimm Git!</cite>
  </figcaption>
</figure>


Seit ungefähr 2 Jahren benutze ich jetzt bereits das Versionskontrollsystem <cite>Git</cite> und bin sehr zufrieden damit. Mittlerweile konnten wir unseren Arbeitgeber ebenfalls überzeugen, Git einzusetzen und seit ca. zwei Monaten haben wir jetzt einen Git-Server.

Meine Abteilung ist bereits mit mehreren hundert Kundenprojekten und einigen internen Projekten auf den neuen Server umgezogen, einige vom Versionskontrollsystem Subversion, andere waren noch gar nicht in Versionskontrollsystemen erfasst.

Die Migration meiner Abteilung ist bereits abgeschlossen und wir arbeiten seit einigen Wochen produktiv mit Git. In Kürze folgt noch eine weitere Abteilung nach.

Wir haben uns für eine Kombination aus [Git](https://git-scm.com/), [Gitosis](https://github.com/tv42/gitosis), [Gitweb](https://git.wiki.kernel.org/index.php/Gitweb) und [Redmine](http://www.redmine.org/ "Redmine") entschieden.

Dank Gitosis ist es leicht möglich neue Projekte auf dem Server anzulegen, und benötigt nicht einmal Zugriff auf den Server. Es werden einfach die öffenlichen SSH-Schlüssel der Benutzer in ein Git-Repository aufgenommen, und Projekte über eine Konfigurationsdatei von Gitosis angelegt. Sobald die Änderungen zurück auf den Server gepusht worden sind, kann man ein neues Projekt auf den Server pushen und hinterher als zugelassener Benutzer auch wieder klonen und die Änderungen zurück pushen.

Mit Gitweb kann man sich kurz einen visuellen Überblick über die Projekte verschaffen und im Browser die Änderungen verfolgen.

Redmine ist eine Webapplikation, die neben Ticket-System, Wiki, Dokumentenverwaltung, Benutzer- und Gruppenverwaltung, Forum, Stundenabrechnung und direkter Anbindung von Versionskontrollsystemen noch unzählige fantastische Möglichkeiten bietet. In Kürze möchten wir damit dem papierlosen Büro einen großen Schritt näher kommen.

Weil ich so begeistert von der Arbeit mit Git bin, und das Versionskontrollsystem auch anderen näher bringen möchte, habe ich eine Git-Präsentation erstellt, die ich am 4. August 2009 auf dem Django-UserGroup-Hamburg-Meeting zu Teilen vorgetragen hatte.

Ich habe jetzt die Folien als PDF bei [Slideshare](http://www.slideshare.net/kogakure/sei-kein-bldmann-und-nimm-git-1830449) hinterlegt.
