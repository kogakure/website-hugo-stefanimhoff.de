---
layout: post
title: "Subversion (6) – Ein paar wichtige Befehle"
date: 2007-11-02 19:24
description: "Nützliche und Notwendige Befehle für den täglichen Gebrauch in Subversion."
categories: [Versionskontrolle]
tags: [subversion, tutorial]
---

Es gibt in Subversion noch ein paar nützliche und notwendige Befehle, die man im täglichen Umgang brauchen wird.

<div class="hinweis">
<p>Der Inhalt dieses Artikels ist noch aktuell, doch kann ich nur dringend dazu raten, sich die fantastische Alternative zu Subversion anzusehen: <a href="/versionskontrolle-mit-git/"><strong>Git</strong></a>.</p>
</div>

## Tags anlegen

Tags sind Lesezeichen oder Schlagworte, mit denen man sich eine bestimmte Versionsnummer durch einen leicht zu merkenden Namen, wie z. B. *version-1.2.5* oder *Finale-Version* markieren kann.

So kann man später beim erneuten Auschecken eines Standes einfach Bezug auf den *tag* nehmen, anstatt auf die Versionsnummer.

Der einfachste Weg einen *tag* anzulegen ist den aktuellen *trunk* im Repository zu kopieren. Keine Angst, dadurch verdoppelt sich nicht der Platz, der benötigt wird.

{% codeblock lang:sh %}
svn copy file:///Users/XYZ/Subversion/meinewebsite/trunk file:///Users/XYZ/Subversion/meinewebsite/tags/version_1.0 -m "Taggen der Version 1.0"
{% endcodeblock %}

## Probleme beheben

Manchmal kann es vorkommen, dass bestimmte Dateien gesperrt sind, und nicht weiter mit Subversion bearbeitet werden könnnen.

Um solche Probleme zu lösen, benutzt man den Befehl `svn cleanup`.

## Ignorieren

Eine wichtige Funktion in Subversion ist das Ignorieren von bestimmten Ordnern oder Dateien. Subversion nimmt keine Dateien von selbst mit ins Repository auf. Doch nach einiger Zeit kann sich eine Menge Dateien ansammeln, die man nicht mit ins Repository laden möchte (Cache-Ordner, Konfigurationsdateien, …). Diese werden mit einem `?` angezeigt, wenn man ein `svn status` eingibt. Um nicht mehr gefragt zu werden, ob man sie hinzufügen möchte, gibt man folgenden Befehl ein:

{% codeblock lang:sh %}
svn propedit svn:ignore .
{% endcodeblock %}

Darauf hin sollte sich ein TextEditor öffnen, in dem man die Dateien einfügen kann, die zukünftig ignoriert werden sollen. Also angenommen man hat einen Ordner *cache* und einige Logdateien mit der Endung .log, dann gibt man in die erste Zeile `cache` und in die zweite Zeile `*.log` ein.

Nun muss nur noch die Änderung an den Eigenschaften des Ordners ins Repository gespielt werden und man wird künftig nicht mehr nach den Dateien/Ordnern gefragt.

## Exportieren

Subversion-Verzeichnisse haben unsichtbare Ordner (.svn) in der Verzeichnisstruktur, die viele Informationen zu Subversion enthalten.

Manchmal möchte man diese jedoch nicht haben, wenn man z. B. ein fertiges Projekt an einen Kunden übergibt.

Für diesen Zweck exportiert man das Arbeitsverzeichnis mit diesem Befehl:

{% codeblock lang:sh %}
svn export . ~/Desktop/export
{% endcodeblock %}

Damit wird der Inhalt des aktuellen Ordners ins Verzeichnis *export* auf dem Desktop exportiert.
