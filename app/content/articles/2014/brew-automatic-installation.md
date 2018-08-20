---
language: de
title: 'Automatisierte Installation für macOS *'
author: Stefan Imhoff
slug: brew-automatic-installation
date: 2014-04-04T21:09:00+02:00
description: 'Wie man mit Homebrew und Homebrew Cask automatisiert Software unter Mac OS X installiert. Mit Homebrew Cask lassen sich über 1300 Anwendungen installieren, darunter viele kommerzielle Produkte.'
categories: ['recommendation', 'software']
---

Die Installation von Software war unter Mac OS X schon immer wenig ausgereift. Es gibt einfach zu viele verschiedene Möglichkeiten der Installation.

Ob gepackte Archive (ZIP, TAR etc.), Disk Images, Application Bundles, Installer und jetzt auch noch der AppStore. Was als einfache Installation für Anfänger gedacht war, hat sich gerade für diese zum Albtraum entwickelt.

Auch fehlte es lange an einer Packet-Verwaltung, wie sie unter jeder Linux-Distributionen zu finden ist. Apple selbst hat hier niemals versucht eine Lösung anzubieten. MacPorts war eine Initiative, die dieses Problem beheben sollte. Doch installierte MacPorts seine Pakete an eine eigens dafür vorgesehene Position auf der Festplatte und machte die Paketverwaltung somit kaum besser.

## Homebrew

Dann trat [Homebrew] auf die Bühne, eine Software die sich selbst als <q lang="en">The missing package manager for OS X</q> bezeichnet. In kurzer Zeit wurde dieses Programm für Entwickler zum Standard unter Mac OS X. Mit einem einfachen einzeiligen Befehl wird Homebrew an eine feste Position auf dem System installiert und symbolische Links (Symlinks) an die Standardpositionen erstellt.

Mit _Homebrew_ lassen sich Pakete einfach über das Terminal installieren:

```bash
$ brew install vim
```

Doch neben Software-Packages verwendet man auch noch eine Vielzahl von _Programmen_, die sich nicht über _Homebrew_ installieren lassen (z. B. Browser, Grafik-, Sound- oder Videobearbeitungsprogramme, Hilfsprogramme etc.).

## Homebrew Cask

Hierzu wurde [Homebrew Cask] entwickelt. Diese Software lässt sich eben so einfach wie _Homebrew_ installieren und funktioniert sehr ähnlich, nur mit dem Unterschied, dass Programme damit installiert werden können, die dann in den Anwendungsordner von Mac OS X verlinkt werden.

```bash
$ brew cask install google-chrome
```

Unter den mittlerweile 1375 Software-Paketen, die sich mit _Cask_ installieren lassen ist so gut wie jede bekannte Software dabei, auch viele kommerzielle Produkte.

## Automatisierung

Solange man nur wenige Programme hat und vielleicht nur alle 5-6 Jahre einen neuen Rechner kauft, ist es kein Problem auf die Seiten der Hersteller zu gehen und dort die neuste Software herunter zu laden. Doch wenn man eine große Anzahl von Software-Produkten verwendet, oft oder viele Rechner installieren muss, ist dies eine zeitaufreibende Tätigkeit, die gerne 1-2 Tage in Anspruch nehmen kann.

_Homebrew_ und auch _Homebrew Cask_ bieten seit kurzem die Möglichkeit einer Automatisierung an. Wie auch in der Entwicklung mit _Ruby_ oder _Ruby on Rails_, bei denen es ein `Gemfile` gibt, in dem alle Abhängigkeiten definiert sind oder bei _Node.js_, wo eine `package.json` diese Aufgabe erledigt, gibt es die Möglichkeit ein `Brewfile` und `Caskfile` anzulegen und mit einem neuen Befehl automatisiert eine große Anzahl von Software zu installieren.

```bash
$ brew bundle Brewfile
$ brew bundle Caskfile
```

## Automatische Generierung einer Installationsdatei

Als besonderes Extra gibt es seit kurzem einen Generator, der diese Dateien automatisch erzeugt. Das Programm erzeugt von allen auf dem Rechner installierten _Brews_ und Anwendungen die nötigen Dateien, so dass diese auf einem frischen Rechner sofort wieder installiert werden können.

Die [Software] ist einfach zu installieren:

```bash
$ git clone https://github.com/seethroughtrees/homebrew-dotfile-generator.git
$ cd homebrew-dotfile-generator
$ npm install
```

Vor dem Erzeugen des Abbilds sollten natürlich alle Pakete auf dem neusten Stand gebracht werden:

```bash
$ brew update
```

Die in Node.js (`brew install node`) geschriebene App wird dann einfach so gestartet:

```bash
$ node app
```

---

Dabei werden drei Dateien erzeugt:

- **.brew**: Ein Skript durch das zuerst _Homebrew_ upgedatet werden kann, danach alle Programme upgegradet werden und danach alte Programme entfernt werden.
- **Brewfile**: Die Installationsdatei für _Homebrew_.
- **Caskfile**: Die Installationsdatei für _Homebrew Cask_.

Die `.brew`-Datei wird einfach in das Homeverzeichnis kopiert, das `Brewfile` und `Caskfile` können z. B. einer Software-Distribution oder Applikation beigelegt werden, um nötige Pakete zu installieren oder auf einen neuen Rechner kopiert werden.

## Fazit

Mit [Homebrew], [Homebrew Cask] und dem [homebrew-dotfile-generator] steht somit eine umfangreiche Anzahl an Hilfsprogrammen zur Verfügung, die es ermöglichen einen neuer Rechner relativ schnell und ohne viel Aufwand mit der gewünschten Software auszurüsten.

[homebrew cask]: https://github.com/caskroom
[homebrew]: https://brew.sh/
[software]: https://github.com/seethroughtrees/homebrew-dotfile-generator
[homebrew-dotfile-generator]: https://github.com/seethroughtrees/homebrew-dotfile-generator