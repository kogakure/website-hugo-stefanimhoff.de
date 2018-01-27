---
language: "de"
title: "Subversion 4: Importieren einer Projektstruktur"
description: "Ein umfangreiches Tutorial für Subversion: Mit Subversion eine Projektstruktur einrichten und ein bestehendes Projekt importieren."
author: "Stefan Imhoff"
slug: "subversion-4-importieren-einer-projektstruktur"
date: 2007-07-29T13:00:00+02:00
series:
- subversion
categories:
- vcs
---

Im nächsten Schritt erzeuge ich auf der Festplatte die Struktur meines Projektes. Diese Struktur ist nicht vorgegeben und kann nach beliebiger Struktur angelegt werden, wobei es ein paar Empfehlungen und Konventionen gibt.

{{% hint headline="Versionkontrolle mit Git" %}}
Der Inhalt dieses Artikels ist noch aktuell, doch kann ich nur dringend dazu raten, sich die fantastische Alternative zu Subversion anzusehen: [Git](/2007/versionskontrolle-mit-git/).
{{% /hint %}}

{{< toc_subversion >}}

Es wird grundsätzlich empfohlen mit den drei Ordnern `trunk`, `tags` und `branches` auf der obersten Ebene zu beginnen. Der Ordner `trunk` enthält den aktuellen Entwicklungsstand der Dateien. Der Ordner `tags` wird benutzt, um sich spezielle Stände mit sprechenden Namen zu merken (z. B. `Finale Version 1. Mai 2006`, `V1.02` etc.). Den Ordner `branches` lege ich normalerweise nicht an, dieser wird benutzt, um eine parallele Entwicklung eines Projektes zu entwickeln.

Zum Verständnis von `branches` eine kurze Erklärung (<em>Wen das nicht interessiert, der kann diesen Absatz getrost überspringen</em>):

Ein Programmierer hat eine Software entwickelt. Da er eigentlich nicht mal vor hatte diese richtig zu veröffentlichen, hat der (englischsprechende) Programmierer gar nicht daran gedacht, Mehrsprachigkeit in seine Software einzubauen. Eine andere Programmiererin bietet sich nun an, eine Mehrsprachigkeit für die Software zu programmieren. Also erzeugt sie einen Zweig (branch) der Hauptentwicklungslinie. Sie arbeitet an der Mehrsprachigkeit, bis diese fehlerfrei ist. Später werden Ihre Änderungen zurück in die Hauptentwicklungslinie (trunk) geführt. Das hört sich kompliziert an – und das ist es wohl auch.

**Update**: Einen Branch wieder zu *mergen* ist kompliziert, aber nur unter Subversion. Unter neueren Versionskontrollsystemen, wie z. B. Git, Mercurial oder Bazaar ist es im Bruchteil einer Sekunde (auch für absolute Laien) erledigt.

## Anlegen der Grundstruktur

```bash
$ cd ~
$ cd Desktop
$ mkdir Import
$ cd Import
$ mkdir trunk
$ mkdir tags
```

Dies erzeugt meine Grundstruktur, den Konventionen entsprechend. Der Ordner `Import` (frei gewählter Name) liegt auf dem Desktop und dient nur für den Importierungsvorgang. Danach kann er gelöscht werden. Innerhalb von `trunk` lege ich jetzt eine für mein Projekt passende Struktur an. Als Hilfe ist es wichtig zu erwähnen, dass mit Subversion nur Ordner ausgecheckt werden können, keine einzelnen Dateien. Daher ist es wichtig, die Struktur mit möglichst logischen und strukturierten Ordnern und Unterordnern anzulegen.

## Beispielstruktur meines Projektes

Hier ist mal eine Beispielstruktur, die ich überlicherweise verwende:

```bash
.
├── tags
└── trunk
    ├── Konzept      # Konzept des Projektes mit Mindmaps, Ideen etc.
    ├── Layout       # Die PSD und AI-Dateien
    ├── Preview      # Screenshots für den Kunden zur Voransicht
    ├── Vorlagen     # Alles, was vom Kunden kommt
    │   ├── Fotos
    │   ├── Grafiken
    │   ├── Logos
    │   └── Texte
    └── Website      # Die eigentliche Website
        ├── css      # Stylesheets
        │   └── img  # Grafiken für das Design
        ├── img      # Grafiken/Fotos für den Content
        └── js       # JavaScript-Dateien
```

Der Vorteil bei einer tiefen Ordnerstruktur liegt darin, dass man nur das holen muss, was man gerade braucht. Will also ein Designer am Layout etwas verändern, reicht es, wenn er sich den Ordner `Layout` aus dem Repository holt.

Überlicherweise lege ich auch schon einige Vorlagendateien (html, css) und alles, was ich schon vom Kunden habe, gleich mit in die Verzeichnisse.

## Importieren der Verzeichnisstruktur

Dieser Stand wird jetzt in das noch leere Repository importiert.

```bash
$ cd ~
$ cd Desktop
$ cd Import
$ svn import . file:///Users/XYZ/Subversion/meinewebsite/ -m "Import des Projektes"
```

An der Stelle, wo `XYZ` steht muss der Name eures Benutzerordners stehen. Der Parameter `-m` ist vorgeschrieben und erwartet eine Beschreibung dessen, was man gemacht hat.

Wenn als Meldung: <samp>Revision 1 übertragen</samp> ausgegeben wurde, hat der Importvorgang reibungslos funktioniert.

Im nächsten Teil dieser Reihe zeige ich, wie man Projekte zum Arbeiten auscheckt, Änderungen vornimmt und diese zurück ins Repository spielt.
