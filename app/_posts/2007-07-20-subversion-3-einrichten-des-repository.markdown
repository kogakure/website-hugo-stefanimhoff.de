---
layout: post
language: "de"
title: "Subversion 3: Einrichten des Repository"
description: "Ein umfangreiches Tutorial für Subversion: Wie man ein Repository mit Subversion einrichtet."
author: "Stefan Imhoff"
date: 2007-07-20 09:00
updated: 2014-10-25 12:28
categories:
- Versionskontrolle
tags:
- subversion
- tutorial
---

Um mit Subversion zu arbeiten, muss man sich zuerst ein *Repository* (eine Ablage/Depot) erstellen, in dem das spätere Projekt liegt.

{% aside aside-hint  %}
<h4>Versionkontrolle mit Git</h4>
<p>Der Inhalt dieses Artikels ist noch aktuell, doch kann ich nur dringend dazu raten, sich die fantastische Alternative zu Subversion anzusehen: <a href="/2007/versionskontrolle-mit-git/">Git</a>.</p>
{% endaside %}

{% include articles/subversion-toc.html %}

Hier kann man auf verschiedene Möglichkeiten arbeiten: Entweder man legt ein Repository für alle seine Projekte an, oder man legt für jedes Projekt ein eigenes an.

Ich habe mich für die zweite Methode entschieden. Dies hat eine Menge Vorteile: Zum einen ist die Revisionsnummer, die ein Projekt hat, auch wirklich nur durch das eine Projekt erzeugt worden, zum anderen kann man ein nicht mehr gebrauchtes Projekt leicht löschen oder archivieren. Ein Projekt aus dem Repository zu löschen bringt nämlich nichts, die Daten der alten Stände verbleiben für immer darin.

## Ordner für die Repositories anlegen

Zuerst lege ich mir ein Verzeichnis an, das später meine Repositories enthalten wird. Dies lege ich in meinem Heimatverzeichnis an.

{% highlight sh %}
$ cd ~
$ mkdir Subversion
$ cd Subversion
{% endhighlight %}

## Repository für ein Projekt anlegen

Im nächsten Schritt lege ich für ein Projekt meiner Wahl das Repository an, hier im für Beispiel meine Website.

{% highlight sh %}
$ mkdir meinewebsite.de
$ cd meinewebsite.de
{% endhighlight %}

Jetzt wird mit einem Befehl das leere Repository erzeugt.

{% highlight sh %}
$ svnadmin create --fs-type fsfs .
{% endhighlight %}

## Anmerkungen

Der Parameter `--fs-type fsfs` sorgt dafür, dass ein Repository vom Typ *Filesystem* erzeugt wird. Es gibt noch das <cite>Berkeley DB</cite> Format, das aber in einigen Umgebungen und Netzwerken Probleme erzeugen kann. Wenn man mit tausenden Personen an einem solchen Projekt arbeitet ist es wahrscheinlich besser das Datenbankformat zu verwenden, aber nicht für sich selber oder ein paar dutzend Kollegen.

Der Punkt am Ende des Befehls ist übrigens wichtig, und darf nicht weggelassen werden, er sagt dem Programm wo das Repository angelegt werden soll, und zwar im aktuellen Verzeichnis (`.`). Hier kann man auch eine normale Pfadangabe benutzen.

Durch diesen Befehl wurden einige Verzeichnisse angelegt, die in allen Repositories so aussehen. Der Ordner `conf` enthält die Konfigurationsdateien für einen Server. Die anderen Ordner speichern die Stände, Status von Dateien, Sperrungen, u. s. w.

Wichtig ist, hier nichts zu verändern, mit Ausnahme der Konfigurationsdateien, doch dazu später mehr.

Im nächsten Schritt legen wir dann ein Projekt an und importieren es in das Repository.
