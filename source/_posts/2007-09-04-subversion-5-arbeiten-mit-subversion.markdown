---
layout: post
title: "Subversion (5) – Arbeiten mit Subversion"
author: "Stefan Imhoff"
date: 2007-09-04 18:45
description: "Grundlegende Arbeitsschritte mit Subversion."
categories:
- Versionskontrolle
tags:
- subversion
- tutorial
---

Die eigentliche Arbeit mit Subversion ist relativ leicht erklärt und gelernt. Von größeren Aktionen wie `merge` mal abgesehen.

<div class="hinweis">
<p>Der Inhalt dieses Artikels ist noch aktuell, doch kann ich nur dringend dazu raten, sich die fantastische Alternative zu Subversion anzusehen: <a href="/2007/versionskontrolle-mit-git/">Git</a>.</p>
</div>

Zuerst lege ich mir ein Arbeitsverzeichnis an, in dem ich künftig meine Projekte bearbeiten will, z. B. einen Ordner `Arbeit` im Heimatverzeichnis.

{% codeblock lang:sh %}
cd ~
mkdir Arbeit
cd Arbeit
{% endcodeblock %}

Um jetzt an einem Projekt aus dem Repository arbeiten zu können, muss man es sich in einen Arbeitsordner *auschecken*, also eine Kopie der Dateien auf seine Festplatte holen.

Im Artikel <cite>[Subversion (4) – Importieren einer Projektstruktur](/2007/subversion-4-importieren-einer-projektstruktur/)</cite> hatte ich mir eine Beispielstruktur angelegt. Ich entscheide mich jetzt an der Website zu arbeiten und nur diesen Ordner und seine Unterordner auszuchecken. Natürlich könnte man genauso gut den kompletten `trunk` (die Hauptentwicklungslinie) in seinen Arbeitsordner holen.

{% codeblock lang:sh %}
mkdir meinewebsite
cd meinewebsite
svn co file:///Users/XYZ/Subversion/meinewebsite/trunk/Website .
{% endcodeblock %}

So wird der Inhalt des Ordners `Website` in mein Projektvereichnis `meinewebsite` entpackt. Wenn man auch noch den Ordner `Website` darin selber haben möchte lässt man einfach den `.` am Ende weg.

Der Befehl `svn status` bringt als Ergebnis, dass man die Version 1 ausgecheckt hat und sonst noch nichts weiter passiert ist.

## Datei anlegen

Im ersten Schritt lege ich jetzt eine Datei in meinem Hauptverzeichnis (index.html) an und kopiere ein Testbild in den Ordner `img` (test.jpg). Der Befehl `svn status` erzeugt jetzt zwei Zeilen, die die beiden neuen Dateien anzeigen, mit jeweils einem Fragezeichen davor. Das Fragezeichen zeigt an, dass diese Dateien unbekannt sind, sich also nicht im Repository befinden. Subversion überträgt keine Dateien automatisch ins Verzeichnis, außer man markiert sie dafür. Das mache ich jetzt:

{% codeblock lang:sh %}
svn add index.html img/test.jpg
{% endcodeblock %}

Wie gesehen kann man hier mehrere Dateien in einem Befehl hinzufügen, es funktioniert auch UNIX-Syntax, wie z. B. der *Asterisk* (Stern) für alle Dateien. In der Ausgabe dieses Befehls sieht man jetzt ein `A` neben der jeweiligen Datei, das steht für `Added` (hinzugefügt).

## Änderungen ins Repository zurückspielen

Diese Änderungen/Neueinfügungen spiele ich nun ins Repository zurück.

{% codeblock lang:sh %}
svn ci -m "Dateien hinzugefuegt"
{% endcodeblock %}

Die Zeichenkette nach dem Parameter `-m` ist für die Log-Datei gedacht. Hier sollte man seine Änderungen beschreiben. Wir bekommen die Meldung zurück, dass die Dateien hinzugefügt wurden und der Revisionsstand nun `2` ist.

## Datei löschen

In der täglichen Arbeit mit Subversion kommt es auch öfter vor, dass man eine Datei löschen möchte. Dabei muss man aber beachten, dass sie nur veschwindet, aber nicht aus dem Repository entfernt wird. Man kann sie also immer wieder herstellen. Auch die Dateigröße verbleibt im Repository, daher unbedingt *vorher* überlegen, welche Dateien man ins Repository spielt. Was drin ist, bleibt drin. Ein Entfernen von Dateien (und ist der Inhalt auch noch so peinlich) ist so gut wie unmöglich. Eine manuelle Manipulation mag für Profis möglich sein, doch damit wird die Historie zerstört und inkonsistent. Das Versionskontrollsystem Git ermöglicht es z. B. dank eines Hash-Schlüssels solche Veränderungen oder Fehler zu entdecken. Bei Subversion gibt es so etwas leider nicht.

Wenn man Dateien über die normale Löschfunktion des Computers entfernt, erfährt Subversion davon nichts. Beim nächsten `svn status` erscheint neben der Datei ein `!`. Dies bedeutet, dass eine Datei fehlt, die eigentlich da sein müsste. Diese muss nun manuell zum Löschen markiert werden oder wieder hergestellt werden.

Besser ist es also die Datei über Subversion zu löschen (das macht man aber in der Regel aus Faulheit nicht):

{% codeblock lang:sh %}
svn del img/test.jpg
{% endcodeblock %}

Das Ergebnis dieses Befehls ist ein `D` neben der Datei, was `Deleted` (gelöscht) bedeutet. Beim nächsten Commit wird diese Datei entfernt.

Doch vorher führe ich noch eine Änderung an der `index.html` durch, indem ich Text hineinschreibe. Ein `svn status` schreibt neben der geänderten Datei ein `M`, was von `Modified` (geändert) kommt.

Mit dem Commit-Befehl spiele ich jetzt die beiden Änderungen ins Repository:

{% codeblock lang:sh %}
svn ci -m "Bild geloescht, index.html bearbeitet"
{% endcodeblock %}

Im nächsten Teil der Reihe erkläre ich, wie man Dateien so markieren kann, dass sie nie ins Repository übertragen werden und wie man einige erweiterte Befehle benutzt.
