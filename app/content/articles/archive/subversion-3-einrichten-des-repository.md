---
draft: true
language: de
title: 'Subversion 3: Einrichten des Repository'
description: 'Ein umfangreiches Tutorial für Subversion: Wie man ein Repository mit Subversion einrichtet.'
author: Stefan Imhoff
slug: subversion-3-einrichten-des-repository
date: 2007-07-20T09:00:00+02:00
series: ['subversion']
categories: ['vcs']
---

Um mit Subversion zu arbeiten, muss man sich zuerst ein _Repository_ (eine Ablage/Depot) erstellen, in dem das spätere Projekt liegt.

Hier kann man auf verschiedene Möglichkeiten arbeiten: Entweder man legt ein Repository für alle seine Projekte an, oder man legt für jedes Projekt ein eigenes an.

Ich habe mich für die zweite Methode entschieden. Dies hat eine Menge Vorteile: Zum einen ist die Revisionsnummer, die ein Projekt hat, auch wirklich nur durch das eine Projekt erzeugt worden, zum anderen kann man ein nicht mehr gebrauchtes Projekt leicht löschen oder archivieren. Ein Projekt aus dem Repository zu löschen bringt nämlich nichts, die Daten der alten Stände verbleiben für immer darin.

## Ordner für die Repositories anlegen

Zuerst lege ich mir ein Verzeichnis an, das später meine Repositories enthalten wird. Dies lege ich in meinem Heimatverzeichnis an.

```bash
$ cd ~
$ mkdir Subversion
$ cd Subversion
```

## Repository für ein Projekt anlegen

Im nächsten Schritt lege ich für ein Projekt meiner Wahl das Repository an, hier im für Beispiel meine Website.

```bash
$ mkdir meinewebsite.de
$ cd meinewebsite.de
```

Jetzt wird mit einem Befehl das leere Repository erzeugt.

```bash
$ svnadmin create --fs-type fsfs .
```

## Anmerkungen

Der Parameter `--fs-type fsfs` sorgt dafür, dass ein Repository vom Typ _Filesystem_ erzeugt wird. Es gibt noch das <cite>Berkeley DB</cite> Format, das aber in einigen Umgebungen und Netzwerken Probleme erzeugen kann. Wenn man mit tausenden Personen an einem solchen Projekt arbeitet ist es wahrscheinlich besser das Datenbankformat zu verwenden, aber nicht für sich selber oder ein paar dutzend Kollegen.

Der Punkt am Ende des Befehls ist übrigens wichtig, und darf nicht weggelassen werden, er sagt dem Programm wo das Repository angelegt werden soll, und zwar im aktuellen Verzeichnis (`.`). Hier kann man auch eine normale Pfadangabe benutzen.

Durch diesen Befehl wurden einige Verzeichnisse angelegt, die in allen Repositories so aussehen. Der Ordner `conf` enthält die Konfigurationsdateien für einen Server. Die anderen Ordner speichern die Stände, Status von Dateien, Sperrungen, u. s. w.

Wichtig ist, hier nichts zu verändern, mit Ausnahme der Konfigurationsdateien, doch dazu später mehr.

Im nächsten Schritt legen wir dann ein Projekt an und importieren es in das Repository.
