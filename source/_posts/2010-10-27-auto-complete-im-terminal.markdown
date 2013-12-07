---
layout: post
title: "Auto-Complete im Terminal"
author: "Stefan Imhoff"
date: 2010-10-27 18:30
description: "Auto-Complete-Skripte für das Terminal selber schreiben."
categories:
- Code
tags:
- terminal
---

Für mich gehört ständige Verbesserung (<ruby>改善<rp>（</rp><rt>かいぜん</rt><rp>)<rp></ruby>, jap. Kaizen) zur täglichen Arbeit dazu. Was mich aber seit längerem gestört hat, ist wenn ich die Namen des zu klonenden Git-Repositorys per Hand tippen muss. Auto-Complete bietet hier eine Lösung.

Ich klone die Jobs meiner Kunden über Gitosis von unserem Git-Server. Um mir Schreibarbeit zu sparen habe ich mir schon vor zwei Jahren ein kleines Bash-Skript `gcl` geschrieben, das als Parameter den Namen eine Repositorys erwartet und dieses dann an die richtige Position klont und auch gleich noch den Ordner im Finder für mich öffnet.

So weit bin ich auch schon sehr zufrieden damit gewesen und glaube meine Arbeitsweise ist immer noch zehn mal so schnell, als über eine GUI. Doch was mich seit längerem schon gestört hat, ist die Tatsache, dass ich den Job-Namen als Parameter nach meinem Terminal-Befehl anhängen muss: `gcl domain.de`. Auch wenn ich recht schnell tippe, ermüdet es doch lange Domainnamen zu tippen oder sich die vielen hundert Kundenprojekte in Erinnerung zu rufen.

Doch damit ist jetzt Schluss. Ich habe schon seit längerem eine Completion-Datei für Git im Einsatz und mich daher zu Recht gefragt, ob das nicht auch möglich sein könnte, dass ich mir meine eigene Completion schreibe. Und nach einer halben Stunde Recherche wußte ich mehr über den ominösen Terminal-Befehl `complete`.

Es ist möglich Auto-Complete an beliebige Befehle anzuhängen. Die Details sind sehr komplex und ich habe gerade an der Oberfläche gekratzt, aber im Prinzip ist es möglich beliebige Strings als Auto-Complete zu liefern.

## Auto-Complete für SSH-Server

Mit dem Auto-Complete für die bekannten SSH-Server fing meine Recherche an, wozu ich in einem Forum einen Codeschnipsel gefunden habe:

{% codeblock Irgendwo in die .bashrc oder .bash_profile stellen lang:sh %}
SSH_COMPLETE=( $(cut -f1 -d' ' ~/.ssh/known_hosts |\
                  tr ',' '\n' |\
                  sort -u |\
                  grep -e '[:alpha:]') )

complete -o default -W "${SSH_COMPLETE[*]}" ssh
{% endcodeblock %}

Dieser Befehl schneidet aus der Datei mit dem bereits besuchten Hosts vom ersten Zeichen bis zum ersten Leerzeichen die Zeichenkette aus, der eigentliche Schlüssel wird also verworfen. Dann werden alle Kommata durch Zeilenumbrüche ersetzt, was dazu dient Kombinationen aus IP und Hostname zu trennen. Anschließend werden diese sortiert und Duplikate entfernt und im letzten Schritt werden alle Zeichenketten entfernt, die nur aus Zahlen oder Punkten bestehen, also die IPs. Zurück bleibt eine Liste, in der alle Hostnamen zeilenweise stehen. Der Abschließende Befehl registriert diese Zeichenkette mit dem Befehl `ssh`. Es reicht ab jetzt aus, wenn man den Befehl tippt und dann <kbd>⇥</kbd> drückt, um eine Liste aller Server zu sehen, oder einige Buchstaben um die Server zu vervollständigen.

## Auto-Complete für Git-Repositorys

Für mich reichte das als Denkanstoß, um eine Lösung für mein Problem zu erarbeiten. Wenn man Gitosis verwendet, um seine Git-Repositorys zu verwalten, dann hat man für jede Installation von Gitosis ein Admin-Repository, dass geklont wird. Darin befinden sich die Schlüssel aller Mitarbeiter, die mit Git arbeiten und eine Konfigurations-Datei: `gitosis.conf`.

In dieser definiert man, wer an welchem Job arbeiten darf. So ungefähr könnte eine Konfigurationsdatei von Gitosis aussehen:

{% codeblock %}
[gitosis]
gitweb = yes

[group gitosis-admin]
members = mustermann
writable = gitosis-admin

[group entwickler]
members = mueller meier schulze
writeable = repo1 repo2 repo3

[group praktikant]
members = max maria
writable = repo3
{% endcodeblock %}

Ich zeige den Aufbau nur, damit besser verstanden werden kann, was ich später erreichen will. Es werden Gruppen angelegt, in denen steht welche Person an welchem Job arbeiten darf. Die Repositorys müssen mit Leerzeichen getrennt sein und nacheinander folgend geschrieben werden.

Folgendes Skript habe ich mir für das Problem erstellt:

{% codeblock lang:sh %}
GIT_JOBS_COMPLETE=( $(grep -i "writable" ~/Projekte/Administration/**/gitosis.conf |\
                  cut -d = -f 2 |\
                  tr ' ' '\n' |\
                  sort -u) )

complete -o default -W "${GIT_JOBS_COMPLETE[*]}" gcl
{% endcodeblock %}


Ich suche mir alle Zeilen aus allen gitosis.conf-Dateien, die den String "writable" enthalten. Da ich mehre Gitosis-Instanzen verwalte, kann ich nicht nur in einer Datei suchen.

Im nächsten Schritt schneide ich mit `cut` vom Delimiter `=` an die Zeichenkette aus, ich verwerfe also alles was vor den eigentlichen Git-Repositorys steht.

Anschließend ersetze ich alle Leerzeichen durch Zeilenumbrüche. Dies ist hier möglich, da die Repository-Namen keine Leerzeichen enthalten dürfen, und daher nur zwischen den Namen Leerzeichen stehen.

Als letzten Schritt sortiere ich die Git-Repository-Namen und entferne Duplikate.

Die letzte Zeile registriert für meine Klon-Skript `gcl` die Zeichenkette für Auto-Complete. Wenn ich jetzt den Befehl eingebe und <kbd>⇥</kbd> drücke, fragt mich das Terminal, ob ich alle Jobs sehen möchte (weil es sehr viele sind, kommt diese Sicherheitsabfrage, bei geringen Anzahlen zeigt das Terminal gleich alle Ergebnisse). Oder ich tippe nach dem Befehl schon die ersten Zeichen eines Jobs und <kbd>⇥</kbd> vervollständigt diesen für mich.
