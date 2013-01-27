---
layout: post
title: "Automatisierung mit Keyboard Maestro"
date: 2011-03-27 12:58
description: 
categories:
tags: 
- software
- macosx
- automatisierung
---

Ich bin kein Freund von Wiederholungen. Eine gleichförmige, anspruchslose Arbeit mehr als zweimal machen zu müssen, ist in meinen Augen Zeitverschwendung und ein Ärgernis. Daher liebe ich z. B. auch das Terminal, Unix-Bash-Skripte, Cronjobs und andere Helfer, die solche anspruchslosen Arbeiten automatisieren.

<!-- more -->

Es gibt für den Mac zahlreiche Helfer, die tägliche, wiederkehrende Aufgaben automatisieren, so z. B. das beiliegende Programm "Automator". Das Problem bei Automator ist, dass die Leistungsfähigkeit schnell erschöpft ist und man auf AppleScript umsteigen muss, um mehr zu erreichen. Da mir aber sowohl die Zeit, als auch das Interesse fehlt diese Sprache zu lernen, ist dies für mich keine Option. Was den Unix-Teil von Mac OS X angeht, benutze ich eine große Anzahl von Aliasen und Skripten, um mir die Arbeit zu erleichtern. Um z. B. die Eingabe von Text zu erleichtern habe ich lange Textexpander genutzt, welches kurze Eingaben in lange Sätze umwandelt.

Vor wenigen Monaten bin ich dann über [Keyboard Maestro](http://www.keyboardmaestro.com/) gestolpert, ein fantastisches Tool, das von John Gruber (Daring Fireball) als seine Geheimwaffe bezeichnet wird. Und damit hat er Recht. Anfangs habe ich Keyboard Maestro nur verwendet, um TextExpander zu ersetzen, also um kurze Eingaben wie z. B. "mfg" in "Mit freundlichen Grüßen, …" umzuwandeln. Doch Keyboard Maestro kann so viel mehr. Es gibt unzählige Trigger, also Auslöser, die Befehle starten können:

* Hot Keys (eine bestimmte Tastenkombination)
* Zeichenketten (eine bestimmte Reihenfolge von Buchstaben getippt)
* Anwendungs-Trigger (wenn eine bestimmte Anwendung gestarte, gestoppt, aktiviert, … wird)
* System-Wake (wenn der Computer aus dem Ruhezustand aufwacht)
* Login (wenn man sich einloggt)
* Zeiten (zu bestimmten Zeiten oder Tagen)
* Regelmäßig wiederholend (in bestimmten Abständen, zu bestimmten Zeiten oder Tagen)
* Klick auf Macro-Palette
* Klick ins Statusmenü
* Aufruf über einen öffentlichen Server (Web/iOS-App)
* MIDI-Noten

Keyboard-Maestro lässt dabei so gut wie alles, was man sich vorstellen kann zu, die möglichen Aktionen sind in Gruppen zusammengefasst (z. B. Process-Kontrolle, Interface-Kontrolle, System-Kontrolle, …).

Es gibt die Möglichkeit einen bestimmten Ablauf aufzunehmen und später zu modifizieren, außerdem gibt es eine kostenlose iOS-App, mit der die Befehle ferngesteuert ausgeführt werden können. Ebenso kann über einen Webserver (mit Zugangskontrolle) ein Zugriff auf die Makros gewährt werden.

Für mich ist Keyboard Maestro ein tolles Werkzeug, um Prozesse zu automatisieren, auf die ich sonst keinen Zugriff hätte, hier zum Abschluss noch ein anschauliches Beispiel:

Seit einiger Zeit arbeite ich vermehrt mit Ruby on Rails. Um eine testgetriebene Entwicklung (TDD) zu ermöglichen, möchte ich in jeder meiner Anwendungen verschiedene Prozesse in verschiedenen Terminal-Tabs öffnen. Eine Lösung nur über Bash ist mir hier nicht möglich geblieben. Dank Keyboard Maestro kann ich mit einem Klick in jedem Rails-Projekt meine Testumgebung einrichten:

Ich lasse das Terminal aktivieren, dann lasse ich 4 Tabs im aktuellen Arbeitsverzeichnis von Keyboard Maestro öffnen. Im letzten Tab lasse ich den Rails-Server starten, im Tab davor den Prozess "spork", der die Test-Suite beschleunigt, im zweiten Tab "autotest", was meine Test startet, dann aktiviert Keyboard Maestro das erste Tab, in dem ich Rails-Befehle eingebe oder Git verwende. Ganz zum Schluss lasse ich noch Google Chrome öffnen und die Adresse des Testservers aufrufen. Das ganze dauert nur wenige Sekunden und erfordert für mich nicht eine einzige Eingabe.
