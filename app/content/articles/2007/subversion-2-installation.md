---
language: "de"
title: "Subversion 2: Installation"
description: "Ein umfangreiches Tutorial für Subversion: Wie wird Subversion installiert und was für Programmoberflächen gibt es?"
author: "Stefan Imhoff"
slug: "subversion-2-installation"
date: 2007-06-08T01:00:00+02:00
series:
- subversion
categories:
- vcs
---

Die Installation von Subversion ist relativ leicht und schnell erledigt, für die Bedienung kann man eine der zahllosen grafischen Oberflächen oder das Terminal benutzten. In diesem Teil der Reihe stelle ich ein paar Programme vor und zeige wie man Subversion aus dem Quellcode selber kompiliert.

{{% hint headline="Versionkontrolle mit Git" %}}
Der Inhalt dieses Artikels ist noch aktuell, doch kann ich nur dringend dazu raten, sich die fantastische Alternative zu Subversion anzusehen: [Git](/2007/versionskontrolle-mit-git/).
{{% /hint %}}

{{< toc_subversion >}}

## Installationsarten, Programmoberflächen

Subversion ist ein Programm, das in einer Befehlseingabebox bedient wird. Es gibt aber auch eine Vielzahl von grafischen Oberflächen, die Anfängern die Bedienung ermöglichen sollen. Jedes dieser Programme hat eine etwas andere Arbeitsweise, doch alle nutzen unter der Haube die gleichen Befehle.

Für Windows gibt es das fantastische [TortoiseSVN](https://tortoisesvn.net/), eine Explorer-Erweiterung, die sich mit lustigen, bunten Icons über Subversion-Dateien legt und ein Menü mit nützlichen Befehlen im Kontext-Menü einbaut.

Für Windows ist dies die beste Version, die verfügbar ist, und TortoiseSVN ist auch über alle Systeme betrachtet die beste Software. Irgendetwas muss ja auch mal auf Windows besser sein.

Für Mac OS X gibt es unter anderem die Programme [svnX](https://code.google.com/archive/p/svnx), [rapidsvn](http://rapidsvn.tigris.org/ "rapidsvn.tigris.org") und eine TortoiseSVN ähnliche Menüintegration durch das [SCPlugin](http://scplugin.tigris.org/ "scplugin.tigris.org"). Diese ist aber bei weitem nicht so intuitiv und mächtig wie die Windows-Variante.

Weiter gibt es noch eine Vielzahl anderer Programme für verschiedenste Plattformen und auch plattformübergreifende Programme, kostenlose und Profiversionen für teures Geld. Ein guter Anwärter für eine hübsche OS X Software scheint mir [Versions](https://www.versionsapp.com/) zu sein, das aber bislang nur angekündigt wurde.

Viele Editoren und Entwicklungsumgebungen für Programmierer und Webentwickler kommen schon mit Subversion eingebaut, wie z.B. [TextMate](http://macromates.com/ "TextMate — The Missing Editor for Mac OS X") oder [Aptana](http://www.aptana.com/ "Aptana: The Web IDE").

Doch das ist natürlich alles für später, hier soll ja der Umgang im Terminal gelernt werden. Das sieht vielleicht etwas komplizierter aus, aber in den meisten Fällen ist man im Terminal um einiges schneller, als vorher das grafische Programm zu starten und seine Optionen anzuklicken.

## Installation über das Terminal

**Anmerkung**: Ab Mac OS X 10.5 *Leopard* ist bereits Subversion 1.4.4 von Haus aus installiert.

Um Subversion zu installieren geht man zuerst mit seinem Browser auf die Website [http://subversion.tigris.org/](http://subversion.tigris.org/ "subversion.tigris.org") und wechselt auf den Menüpunkt *Downloads*.

Untereinander, unübersichtlich sortiert (so ist das immer auf Entwicklerseiten), findet man zuerst die Links zum Quellcode und darunter die binären Pakete für die verschiedenen Plattformen.

Wer etwas feige ist, kann sich jetzt eines der binären Pakete für sein System herunterladen und installieren. Alle mutigeren laden sich den Quellcode herunter.

Gut versteckt, mitten im Satz <q lang="en">The latest source release can always be found _in this directory_, […]</q>,  findet man den Link zu den Quellcode-Paketen.

Die aktuelle Version zum Zeitpunkt dieser Anleitung ist `Subversion 1.4.3`.
Genau dieses Paket lade ich als `tar.gz` auf meinen Desktop.

Um Quellcode selber kompilieren zu können, müssen unter Mac OS X die Xcode Tools installiert sein, diese findet man auf der Installations-CD von Mac OS X.

Dann öffnet man das Programm *Terminal* aus dem Anwendungsordner.

Ich gehe davon aus, dass der Download auf dem Desktop liegt, sonst muss dies entweder noch geschehen oder der Pfad muss angepasst werden. Mit dem folgenden Befehl wechselt man auf den Desktop:

```bash
$ cd ~/Desktop/
```

Jetzt wird die Datei entpackt, der Dateiname muss natürlich an die richtige Version angepasst werden.

Dazu noch ein kleiner Tipp für Anfänger: Man muss nicht immer alles komplett tippen, es reichen ein paar Buchstaben und dann kann man einfach die Tab-Taste betätigen, was den Rest des Pfades oder Dateinamens ergänzt.

```bash
$ tar -xzvf subversion-1.4.3.tar.gz
```

Wechsel in das Verzeichnis hinein:

```bash
$ cd subversion-1.4.3.tar.gz
```

Jetzt werden nacheinander, jeweils einem nach dem anderen,  die folgenden Befehle eingeben. Nach dem vierten Befehl muss man sein Passwort zur Authenzifizierung eingeben.
Wenn irgendeiner der Befehle mehrere schlimm-aussehende Fehler zurückgibt, lieber eine Binärdatei nehmen und installieren ;-)

```bash
$ ./autogen.sh
$ ./configure
$ make
$ sudo make install
$ make clean
```

Auf dem Terminal sollte man jetzt mit dem Befehl `svn --version` eine Rückgabe erhalten, dass Subversion in der Version 1.4.3 auf dem System installiert ist.
