---
layout: post
title: "Volume reparieren unter Mac&nbsp;OS X"
author: "Stefan Imhoff"
date: 2007-05-23 11:40
description: "Wie man eine Boot-Festplatte unter Mac OS X ohne die Installations-CD repariert, im Single-User Modus und mit Terminalbefehlen."
categories:
- Hilfe
tags:
- tutorial
- macosx
---

Wie man eine Boot-Festplatte unter Mac OS X ohne die Installations-CD repariert, im Single-User Modus und mit Terminalbefehlen.

Überlicherweise muss man zum Reparieren eines Volumes (einer Festplatte) die Mac OS X Installations-CD beim Booten ins Laufwerk legen und dann den Installationsvorgang abbrechen und das Festplatten-Dienstprogramm aus dem Menü auswählen.

Schneller und komfortabler geht es so:

## Neustarten im Single-User Modus

Im Single-User Modus starten, die Tastenkombination <kbd>⌘</kbd> + <kbd>S</kbd> während des Bootens gedrückt halten.

Nach dem Booten im Single-User Modus gibt man im Terminal diese Befehle (nacheinander) ein. Jede Zeile mit <kbd>↩</kbd> bestätigen und warten bis der Befehl ausgeführt wurde.

{% highlight sh linenos %}
fsck -fy
mount -uw
reboot
{% endhighlight %}

Diese Befehle prüfen die Festplatte, verbinden sie wieder und starten den Rechner neu.
