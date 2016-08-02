---
layout: post
language: "de"
title: "Grundlagen von Python und Django für Anfänger"
description: "Wer mit Django arbeiten möchte, muss die Grundlangen von Python kennen. Eine Einführung in Python & Django für Anfänger."
author: "Stefan Imhoff"
date: 2008-08-01 15:00
updated: 2014-10-25 13:10
categories:
- code
tags:
- django
- python
---

Da in letzter Zeit anscheinend das Interesse an Django stark gestiegen ist, halte ich es für sinnvoll, die Grundlagen des Systems für Anfänger aufzuzeigen.

Es gibt verschiedene Möglichkeiten, Django auf dem eigenen Computer/Server zu installieren. Es kann sowohl als Paket geladen oder in der Entwicklerversion genutzt werden.

Für welche Variante man sich auch entscheidet, es ist ziemlich nützlich die Grundlagen von [Django](https://www.djangoproject.com/) und [Python](https://www.python.org/) zu verstehen.

## Python-Module

Django ist ein Python-Modul, in dem viele Submodule enthalten sind. Für die Programmiersprache Python gibt es weit über 4.000 Module von Drittanbietern, die fast jede gewünschte Funktion bieten.

Python selber wird schon mit über hundert Modulen geliefert, wie z. B. dem Mathe-Modul (math), das diverse Rechnungsarten, Rundungsfunktionen oder Konstanten wie z. B. PI liefert.

Ein Modul ist im Grunde genommen jede Datei mit der Dateiendung .py, in der Klassen und Methoden enthalten sind.

Es ist möglich Module in Unterordnern zu strukturieren. Damit Python einen Ordner als Modul erkennt muss eine Textdatei mit dem Namen `__init__.py` darin liegen. Diese ist in den meisten Fällen ohne Inhalt.

Um ein Modul eines Drittanbieters (wie z. B. Django) zu benutzen, muss es dem System bekannt sein. Dafür gibt es die Pfad-Variable `$PYTHONPATH`. Die meisten Betriebssysteme halten für solche Module einen zentralen Ort vor, an dem sie  abgelegt werden (unter meiner Mac OS X 10.5-Installation ist dies z. B. `/Library/Python/2.5/site-packages`).

## Python-Pfad

Um den genauen Pfad auf seinem Computer herauszubekommen, kann man im Terminal folgenden Befehl ausführen:

```sh
$ python -c "from distutils.sysconfig import get_python_lib; print get_python_lib()"
```

Für diesen Befehl muss Python auf dem Rechner installiert sein.

Wenn man also Django über das Installationsprogramm (wie in der Dokumentation angegeben) installiert, kopiert dieses das Modul "django" auf diesen Pfad.

Um zu überprüfen, ob ein Modul geladen werden kann, startet man die interaktive Python-Konsole durch Eingabe des Befehls `python`.

Dort gibt man einfach den Befehl `import django` ein. Wird der Befehl ohne Fehler ausgeführt, so ist das Modul installiert.

## Symlinks

Da dieser Pfad meistens in den Tiefen des Systems verborgen liegt, wählen viele Entwickler eine komfortablere Methode: Symlinks (symbolische Links). Dieses funktioniert aber nur bei Unix-Systemen, also Linux und Mac OS X. Windows-Benutzer schauen hier (mal wieder) in die Röhre. Ein Grund mehr ein Unix-System zu verwenden.

Ein symbolischer Link ist ein Zeiger auf einen anderen Ordner des Computers, ähnlich einer Verknüpfung, nur mit dem Unterschied, das der Rechner wirklich *denkt*, der Ordner würde an diesem Platz im System liegen – in Wirklichkeit zeigt der Ordner lediglich auf das Original.

Üblich ist es, dass man sich den Quellcode von Django mit dem Versionskontrollsystem *Subversion* in einen Ordner seiner Wahl holt:

```sh
$ svn co http://code.djangoproject.com/svn/django/trunk/ django-trunk
```

Der neu erzeugte Ordner `django-trunk` enthält neben dem Modul `django` noch Dokumentationen, Lizenzbedingungen, Test-Programme und einiges mehr.

Um das System jetzt glauben zu lassen, Django wäre im Python `site-packages`-Verzeichnis installiert, wird ein symbolischer Link dorthin erstellt.

Im gegebenen Beispiel liegt unser Ordner `django-trunk` auf dem Desktop (kein guter Ort im richtigen Fall!). Das `site-packages`-Verzeichnis liegt im Beispiel unter `/Library/Python/2.5/site-packages/`

```sh
$ cd /Library/Python/2.5/site-packages
$ ln -s ~/Desktop/django-trunk/django django
```

Damit ist das Modul Django installiert und kann benutzt werden. Mit einem Update des Subversion-Verzeichnisses kann man seine Version von Django immer auf dem aktuellsten Stand halten, ohne neue Installationspakete herunterladen und installieren zu müssen.

Genauso wie mit Django kann man mit fast allen Python-Modulen verfahren.

Es gibt einen [Screencast von Eric Florenzano](http://eflorenzano.com/blog/post/first-two-django-screencasts/) auf englischer Sprache, der durch diesen Installationsprozess führt.

## Fazit

Wer die Grundlagen um Module in Python verstanden hat, für den ist die Arbeit mit Django auch viel leichter zu verstehen.
