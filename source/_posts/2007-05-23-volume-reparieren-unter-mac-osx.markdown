---
layout: post
title: "Volume reparieren unter Mac OS X"
date: 2007-05-23 11:40
categories:
tags: [tutorial, macosx]
---

Wie man eine Boot-Festplatte unter Mac OSX ohne die Installations-CD repariert, im Single-User Modus und mit Terminalbefehlen.

<!-- more -->

Überlicherweise muss man zum Reparieren eines Volumes (einer Festplatte) die Mac OSX Installations-CD beim Booten ins Laufwerk legen und dann den Installationsvorgang abbrechen und das Festplatten-Dienstprogramm aus dem Menü auswählen.

Schneller und komfortabler geht es so:

### Neustarten im Single-User Modus ###

Im Single-User Modus starten, die Tastenkombination <kbd>⌘</kbd> + <kbd>S</kbd> (Apfel/Command + S) während des Bootens gedrückt halten.

Nach dem Booten im Single-User Modus gibt man im Terminal diese Befehle (nacheinander) ein. Jede Zeile mit <kbd>↩</kbd> (Return) bestätigen und warten bis der Befehl ausgeführt wurde.

{% codeblock lang:sh %}
fsck -fy
mount -uw
reboot
{% endcodeblock %}

Diese Befehle prüfen die Festplatte, verbinden sie wieder und starten den Rechner neu.
