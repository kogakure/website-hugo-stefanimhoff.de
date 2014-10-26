---
layout: post
language: "de"
title: "Subversion 1: Theorie und Funktionsweise"
author: "Stefan Imhoff"
date: 2007-05-28 18:04
updated: 2014-10-25 12:22
description: "Theorie und Funktionsweise von Subversion."
categories:
- Versionskontrolle
tags:
- tutorial
- subversion
---

Dieser erste Teil der Reihe *Subversion* beschäftigt sich mit der nötigen Theorie und Funktionsweise von Subversion.

{% aside aside-hint %}
<h4>Versionkontrolle mit Git</h4>
<p>Der Inhalt dieses Artikels ist noch aktuell, doch kann ich nur dringend dazu raten, sich die fantastische Alternative zu Subversion anzusehen: <a href="/2007/versionskontrolle-mit-git/">Git</a>.</p>
{% endaside %}

{% include articles/subversion-toc.html %}

## Was ist Versionskontrolle?

Versionskontrolle ermöglicht es alle Änderungen an Dateien, die im Laufe der Zeit gemacht wurden, zurückzuverfolgen und wiederherstellen zu können.

Das bedeutet vor allem, nie wieder irgendeinen Teil der eigenen Daten zu verlieren.

Doch seine besondere Stärke liegt in der Teamarbeit. Wenn mehr als eine Person an einer Datei arbeitet, führt dies immer zu Problemen. So ist es möglich, dass die eine Person Änderungen einer Anderen überspeichert.

## Sperren, Ändern, Freigeben

Modernere Systeme setzen immerhin schon einen Speicherschutz, solange jemand die Datei bearbeitet. Dies ist jedoch nicht effizient, da in der Zwischenzeit niemand anders an der Datei arbeiten kann. Gerade bei häufigen, kleineren Änderungen ist ein Projekt auf diese Weise kaum noch zu pflegen.

Denn in der Praxis werden viele Dateien oft über lange Zeit zur Bearbeitung gesperrt, und es wird vergessen, sie wieder freizugeben. Besonders ärgerlich, wenn man dringend etwas ändern muss und dies nicht kann, weil die Person z.B. krank, zu Mittag oder im Urlaub ist. Meisten hilft dann höchstens noch ein Anruf in der IT-Abteilung.

## Kopieren, Ändern, Zusammenführen

Subversion (oder auch kurz svn) hat hier einen komplett anderen Ansatz. Dieser führt meistens zu einer verunsicherten oder ablehnenden Reaktion, wenn man den Prozess erklärt. Doch legt sich diese Verunsicherung in der wirklichen Arbeit mit Subversion sehr schnell.

Bei Subversion lädt sich jede Person, die an der Datei arbeitet eine Kopie von einer zentralen Stelle auf den eigenen Computer. Sie nimmt Änderungen vor und lädt diese zurück.

Dabei kann natürlich passieren, dass jemand eine geänderte Version zuvor zurückgespielt hat. Wie geht Subversion in einem solchen Fall also vor?

Die Person, die versucht Ihre Datei zurückzuspielen, doch langsamer war, bekommt eine Meldung, dass die eigene Version nicht mehr aktuell sei. Sie muss ihre Datei nun also erst auf den neusten Stand bringen.

## Konflikte

Dabei kann folgendes passieren:

1. **Die Änderungen der anderen Person betrafen eine andere Stelle in der Datei:**

   Dann merkt man nicht einmal etwas, Subversion fügt die Änderungen in die  eigene Datei ein.

2. **Die Änderungen überschneiden sich:**

   In diesem Fall muss man entscheiden, was passieren soll. Es kann die Version der anderen Person benutzt werden oder die eigene. Viel besser aber ist, dass auch Teile beider Versionen benutzt werden können.

Hierbei will ich anmerken, dass Fall zwei selten eintritt, solange jede Person ihre Dateien hin- und wieder auf den aktuellen Stand bringt, jeder weiß, was er zu tun hat und die Kommunikation des Teams stimmt.

## Fazit

Subversion eignet sich aber auch wunderbar, wenn man nur alleine mit seinen Dateien arbeitet. Überspeicherungen, Verlust von wichtigen Änderungen oder die berühmte Einsicht, dass der Stand von vorgestern besser war, gehören damit der Vergangenheit an.
