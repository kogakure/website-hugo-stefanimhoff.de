---
layout: post
language: "de"
title: "Mein Setup 2013"
author: "Stefan Imhoff"
date: 2013-12-06 20:45
description: "Ein Einblick in meine Arbeitsumgebung: Wie sieht meine technische Ausstattung aus? Hardware, Software, die ich täglich einsetze, um zu programmieren, zu designen und mich zu organisieren. Außerdem Gadgets, die ich in meiner Wohnung einsetze."
categories:
- Empfehlung
- Technik
tags:
- macosx
- hardware
- software
---

Das Jahr neigt ist fast zu Ende und damit scheint es mir der richtige Zeitpunkt zu sein in diesem Blog-Artikel auf meine aktuelle Arbeitsumgebung einzugehen.

## Hardware

### Computer
Zuhause verwende ich einen **13" MacBook Pro**, 2.8 GHz Intel Core i7 mit 8 GB RAM (leider noch ohne Retina-Display). Auf meiner Arbeit verwende ich ein **15" MacBook Pro**, 2.4 GHz Intel Core i5 mit 8 GB RAM, das aber endlich zum Jahreswechsel abgeschrieben ist und durch ein Retina-MacBook ersetzt wird.

### Monitore
Zuhause setze ich seit einigen Jahren ein schönes **24" Cinema-Display** ein, was einfach nicht kaputt gehen will, sonst hätte ich sicherlich schon ein [27" Thunderbolt Display](http://www.apple.com/de/displays/). Vielleicht hält es ja noch so lange durch bis Apple Retina-Displays auf den Markt bringt. Auf der Arbeit gabs irgendeinen Dell-Monitor, deren Qualität ist so schlecht, dass ich mir nicht mal den Namen merken will. Aber für Entwickler reicht so was ja.

### Zubehör
Zuhause setze ich allerhand Festplatten ein, da ich seit einem Datenverlust irgendwann vor ca. 10 Jahren sehr paranoid bin. Ich sichere ständig mit TimeMachine auf eine externe Festplatte von Western Digial mit 2 TB. Einmal die Woche auf eine andere 2 TB Festplatte und einmal im Monat auf eine weitere 2 TB-Festplatte, die auch nicht bei mir in der Wohnung gelagert ist. Ich habe auch noch eine **Time Capsule**, die ich aber nur für Musik verwende und nicht darauf sichere.

Zuhause habe ich das **[Apple Wireless Keyboard](http://www.apple.com/de/keyboard/)**, das **[Magic Trackpad](http://www.apple.com/de/magictrackpad/)** und die **[Magic Mouse](http://www.apple.com/de/magicmouse/)** ein, alles mit Akkus betrieben. Auf der Arbeit tippe ich auf dem Apple Keyboard mit Kabel und habe irgendeine Microsoft-Maus mit Kabel von der IT bekommen.

Mein MacBook Pro Zuhause steht fast immer geschlossen auf dem **[BookArc Pro](https://www.twelvesouth.com/products/bookarc-for-macbook-pro-retina)**, bei dem guten Monitor benötige ich das Display des MacBook Pro nicht. In der Firma steht mein geöffnetes MacBook Pro auf einem **[Griffin Elevator](https://store.griffintechnology.com/elevator)**, da ich auf dem Hauptmonitor nicht genug Platz habe, um zu entwickeln.

## Software
Selbstverständlich setze ich mehr Software ein, als hier in der Liste aufgezählt, nur die hier Erwähnten sind besonders nützlich.

### 1Password
Kaum noch wegzudenken: **1Password**, mein Passwort-Manager und meine Lizenz-Verwaltung. Bei fast 300 Logins und 100 Software-Lizenzen ist 1Password einfach unersetzlich. Ich setze ebenfalls Versionen auf meinem **iPhone 5S**, **iPad 3** und **Nexus 4** ein.

### iTerm
Den Großteil meines Tages befinde ich mich ausschließlich im Terminal, genauer in iTerm. Seit mich meine Kollegen auf **[tmux](http://tmux.sourceforge.net/)**, einen Terminal Multiplexer gebracht haben, ist dies mein tägliches Werkzeug. Jedes Projekt an dem ich arbeite, bekommt eine eigene tmux-Session, zwischen denen ich in Sekundenschnelle wechseln kann, alle Fenster, Splits und Einstellungen bleiben pro Projekt bestehen. Und dank **[Tmuxinator](https://github.com/tmuxinator/tmuxinator)** kann ich alle Projekte mit den gewünschten Einstellungen für Tabs, Splits etc. auch in externen Dateien sichern und nach einem Computer-Neustart schnell wieder herstellen.

### Vim
Wo ich gerade vom Terminal spreche: ich setze seit Anfang des Jahres Vim im Terminal ein. MacVim ist zwar sehr gut und hat einige wenige Vorteile gegenüber Terminal-Vim, dennoch ist im Einsatz mit tmux ein unsagbarer Vorteil, dass jeweils auch eine eigene Vim-Session für ein Projekt gespeichert wird und dadurch quasi nahtlos gewechselt werden kann.

Vim selbst setze ich mittlerweile seit mehr als vier Jahren ein und normalerweise wird man – wie auch eMacs-Benutzer – von Kollegen ungläubig angesehen oder belächelt. Die meisten benutzen doch eher Sublime Text 2 oder TextMate. Doch in meinem jetzigen Team setzen von 5 Entwicklern, 4 Vim ein.

### Git
Git ist mein alltägliches Werkzeug, nicht mehr wegzudenken. So gut wie jede Arbeit liegt in irgendeinem Git-Repository. Alle meine Projekte liegen neben GitHub auch noch auf einem eigenen Server. Auf der Arbeit haben wir sogar **[GitHub Enterprise](https://enterprise.github.com/)**, was das arbeiten sehr komfortabel macht. Leider setzen wir Jira und Confluence ein und  benutzen nicht GitHub Wikis und Issues, obwohl die viel leichter zu bedienen sind und die Arbeit damit intuitiv und spaßig ist – und nicht so eine Business-Prozess, wie mit den anderen beiden Tools.

### Homebrew und Cask
**[Homebrew](http://brew.sh/)** ist der einzige Packet-Manager für Mac OS X, der zu etwas zu gebrauchen ist. Und seit kurzem setze ich noch zusätzlich **[homebrew-cask](https://github.com/caskroom/homebrew-cask)** ein, damit ist auch die Installation von Programmen für Mac OS X automatisierbar. Man installiert z. B. Google Chrome einfach mit dem Befehl `brew cask install google-chrome`. Das lässt sich natürlich soweit treiben, dass man einen neuen Rechner mit einem einzigen Befehl komplett installieren lässt: Gems, Brews, NPM und Applikationen für Mac OS X. Einfach 2 Stunden Pause machen und beim zurückkommen ist der Rechner fertig.

### Pow
Mit **[Pow](http://pow.cx/)** kann man eine Rails- oder Rack-App in Sekundenschnelle unter einer eigenen Entwicklungs-URL aufsetzen, ohne immer den Entwicklungsserver starten zu müssen. Sehr praktisch!

### Google Chrome
Mein Hauptbrowser – zum Surfen und Entwickeln – ist Google Chrome. Die Geschwindigkeit und vor allem die Entwickler-Tools sind einfach die besten. Natürlich testen wir auf der Arbeit auch alle anderen Browser, sogar hinab bis Internet Explorer 8 über CoRD.

### Slate
Besonders bei mehreren Monitoren, wechselnden Einstellungen (mal nur das MacBook Pro, mal ein zweiter Monitor, mal ein Beamer) ist ein Fenstermanager fast nicht zu ersetzen. Zuerst hatte ich Divvy, dann Moom, doch seit einigen Wochen setze ich **[Slate](https://github.com/jigish/slate)** ein. Slate ist OpenSource und im Gegensatz zu allen Mitbewerbern *extrem* flexibel zu konfigurieren. Der Einstieg erfordert etwas Zeit, aber da die Settings sowohl im Unix-Format, als auch mit JavaScript geschrieben werden können, ist fast nichts unmöglich. Automatischer Wechel von Fenstern und Monitoren beim Anschluss an Monitore und Beamer, Umgebungen, eine Option, die es ermöglicht auch verdecke Fenster nach vorne zu holen und vieles mehr.

### Alfred App
Ohne **[Alfred](http://www.alfredapp.com/)** fühle ich mich ziemlich aufgeschmissen, das merke ich immer wieder wenn ich an einen Rechner eines Kollegen gehen muss, und dieser kein Alfred installiert hat. Mit Alfred kann man ohne Mühe den Computer navigieren, Datein kopieren, verschieben, öffnen, schließen; den Rechner verwalten, herunterfahren; Zahlen berechnen, Kontakte aus dem Adressbuch suchen und Unmengen mehr. Mit dem Powerpack lassen sich für ein paar Euro noch Workflows hinzufügen, womit dann so gut wie alles möglich ist: Farben konvertieren, WHOIS-Abfragen ausführen, Emoji-Codes nachschlagen, URLs encoden/decoden, IP-Adressen auslesen, Prozesse beenden, Filme auf LoveFilm suchen und hunderte Dinge mehr.

### LiveReload
Als Frontend-Entwickler ist es für mich sehr wichtig, dass ich schnell und möglichst sofort meine Änderungen sehe, daher setze ich **[LiveReload](http://livereload.com/)** ein. Für CSS-Änderungen muss nicht einmal der Browser neu geladen werden.

### Kaleidoscope
Auch wenn ich mit Vim fast nur im Terminal arbeite: Für Merge-Konflikte und DIFF-Ansichten, setze ich am liebsten **[Kaleidoscope](http://www.kaleidoscopeapp.com/)** ein. Damit kann ich nicht nur Dateien vergleichen, sondern auch ganze Projekte, Ordnerstrukturen und Bilder.

### Evernote
Ich setze Evernote schon fast seit Beginn ein. Im Laufe der Zeit ist meine Sammlung auf fast 5000 Notizen angewachsen, wobei das alles sein kann: von einem Rezept, über einen Screenshot einer Website bis hin zu einem eBook. Ich habe derzeit 57 Notizbücher, gruppiert in 7 Stacks: Buchhaltung, Code, Essen & Trinken, Inspiration, Job & Karriere, Kampfkunst & Kriegskunst, Fitness & Gesundheit, Kunst & Kultur und Wissen. Alle Notizen sind säuberlich getaggt. Ich setze Premium schon mehrere Jahre in der Premium-Version ein.

### Things
Things ist immer noch mein GTD-Programm der Wahl. Es ist einfach, flexibel, hat wenig Verwaltungsaufwand. Ich hatte auch für einige Monate OmniFocus im Einsatz und RememberTheMilk für einige Monate getestet. Aber nichts war bislang so gut wie Things. Einfaches Taggen, in Bereichen und Projekten gruppieren. Und Things Synchronisation ist unsagbar schnell, dagegen haben alle anderen Lösungen keine Chance. Natürlich habe ich auch auf meinem iPhone und iPad Things laufen. Ich wünschte Things würde auch eine Android-App bauen, aber das wird wohl erst einmal nichts.

### Photoshop & Illustrator
Zuhause sind **Photoshop** und **Illustrator** immer noch das Zweigespann das ich häufig einsetze, in weiser Voraussicht bietet Adobe für diese Kombination natürlich keine besondere CreativeCloud-Option an. Entweder Photoshop und Lightroom für Photographen, einzelne Produkte oder halt alles. Und drei einzelne Produkte sind nun fast so teuer wie die ganze CreativeSuite, von der ich aber mittlerweile nichts mehr benötige ausser Photoshop und Illustrator. Auf der Arbeit muss ich mit Photoshop Elements auskommen; Entwickler brauchen einen besonderen Grund um ein vollwertiges Photoshop zu bekommen.

### OmniGraffle
Wann immer ich etwas strukturiert angehe, mir einen Ablauf oder Verbindungen visualisieren möchte, oder schnell etwas skizzieren möchte, nehme ich **[OmniGraffle](https://www.omnigroup.com/omnigraffle)** dafür.

### Spotify
Arbeit ohne Musik ist ziemlich trist, daher benutze ich seit ca. einem Jahr Spotify Premium. Meist läuft das Radio oder eine meiner vielen Playlists. Mehr muss man dazu wohl nicht sagen.

## Wohnung und Fitness
Hier endet der Bereich „Arbeit“, aber es folgen noch ein paar Spielzeuge in Wohnung und für Fitness, die ich noch erwähnen möchte.

### Watchever/LoveFilm
So wie Spotify das Musikhören verändert hat (ich hatte iTunes schon Monate nicht mehr offen), so hat/wird das Streaming von Filmen das Fernsehen verändern. Ich schaue so gut wie kein Fernsehen mehr seit ich Accounts für **[Watchever](http://www.watchever.de/)** und **LoveFilm** habe. Über LoveFilm lasse ich mir BluRay und DVD schicken und streame Filme und Serien in mein Wohnzimmer. Auf Watchever schaue ich vor allem Serien. Das Angebot war Anfangs ziemlich dürftig, doch durch die Konkurrenz der Anbieter müssen alle anderen nachziehen. Mal sehen, was mit dem Markt passiert, wenn Netflix möglicherweise in 2014 in Deutschland startet.

### Withings
Ich setze die WLAN-Waage von **[Withings](http://vitrine.withings.com/)** seit dreieinhalb Jahren ein und bin sehr zufrieden. Auf die Weise kann man Ziele für Gewichtsabnahme/Gewichtszunahme verfolgen und die Werte für Fett und Gewicht immer im Auge behalten. Neuere Modelle der Withings-Waage messen auch den Kohlendioxidgehalt in der Luft, doch meine Waage läuft noch so gut wie am ersten Tag, also kein Grund ein neues Modell zu kaufen. Die Gewichtsdaten lassen sich übrigens auch mit Fitbit synchronisieren, man muss also nicht unbedingt die Fitbit Aria Waage besitzen.

### Fitbit
Seit zwei Jahren trage ich ständig ein Fitbit am Körper, mein aktuelles Modell ist das **[Fitbit One](http://www.fitbit.com/de/one)**. Fitbit ist meiner Meinung nach der Beste der Mitbewerber. Das Gerät ist klein und stört nicht, misst gegangene Schritte, Stockwerke, verbrannte Kalorien, geschlafene Stunden und Schlafqualität und die zurückgelegte Strecke. Und die Daten werden bequem im Hintergrund per Bluetooth synchronisiert oder in der Wohnung automatisch und drahtlos über den USB-Empfänger. Das Interface ist sehr schick und modern (auch wenn Withings hier gerade nachholt). Ich messe mich mit meiner Familie und Freunden in der Rangliste und kämpfe um den besten Aktivitätsrang. Außerdem lasse ich mich sanft durch Vibration am Arm wecken.

### Netatmo
Seit diesem Jahr habe ich eine Wetterstation von **[netatmo](https://www.netatmo.com/)** und bin begeistert. Das Starter-Set enthält das Hauptmodul und eine Aussenmodul. Die Geräte sind schick und Messen die Innenluftqualität, Luftfeuchtigkeit, Temperatur, Aussenluftqualität, CO<sub>2</sub>, Schallkomfort, Luftdruck und Wetter. Besonders die Messung von CO<sub>2</sub> und Schall sind interessant.

So bekommt man automatisch Push-Benachrichtigungen auf iPhone, iPad und Android wenn es Zeit ist zu Lüften. Über eine intuitive Oberfläche kann man so seine eigene Wetterstatistik führen. Das Hauptmodul ermöglicht auch eine Sofortmessung, wenn die Messung alle 5 Minuten nicht ausreicht, sondern man genau zu einem bestimmten Zeitpunkt eine Messung haben möchte. Außerdem leuchtet die LED am Hauptmodul bei steigendem CO<sub>2</sub>-Level erst auf gelb, orange und dann rot. Dann sollte man dringend lüften, da sonst Konzentrationsbeschwerden und Kopfschmerzen entstehen können.

Es ist möglich eigene Alarme zu konfigurieren, um über besondere Schallwerte, plötzliche Temperaturveränderungen oder ähnliches benachrichtigt zu werden. Es ist möglich, mehrere Innenmodule nachzurüsten, z. B. für Schlafzimmer und Bad.

Außerdem kann man anderen Netatmo-Benutzern Zugriff auf die eigenen Daten geben (z. B. der Familie).

Die einzige negative Sache, die auffällt ist, dass das Aussenmodul nicht wasserdicht, sondern nur Spritzwassergeschützt ist. Da muss dringend nachgebessert werden. Da das Modul aber eh geschützt vor direkter Sonnenbestrahlung und Regen stehen muss, ist das zu verschmerzen. Eine Befestungsvorrichtung für Schraube oder Band liegt bei. So kann es z. B. unter einem Carport oder unter dem Dach befestigt werden.

### Sonos
Die letzte technische Spielerei, die ich vorstellen möchte, sind die Boxen von **[Sonos](http://www.sonos.com/)**. Ich habe Anfang dieses Jahres mit der Bridge (über die die Musik vom Internet-Anschluss aus verteilt wird) und einer **[Play:5](http://www.sonos.com/shop/products/play5)** gestartet. Da die Tonqualität und das Design aber begeistert, habe ich mittlerweile zwei Play:5, eine **[Play:3](http://www.sonos.com/shop/products/play3)** und eine **[Play:1](http://www.sonos.com/shop/products/play1)** im Einsatz, eine **[Playbar](http://www.sonos.com/shop/products/playbar)** soll bald folgen.

Mit dem Sonos-Soundsystem kann man nicht nur Musik aus iTunes-Library, von externen Festplatten, sondern auch von einer Vielzahl Streaming-Dienste abspielen. Optimal zusammen mit meinem Spotify-Account.

Die Boxen lassen sich als Stereopaar schalten, völlig synchron oder auch auf jeder Box andere Musik abspielen. Für jede Raumgröße ist ein passendes Modell dabei. Die Lautstärke und Tonqualität ist beeindruckend. Die Play:1 ist z. B. optimal für das Bad geeignet, da auch Duschdampf ihr nichts ausmachen, die Play:3 für ein kleineres Zimmer, und die Play:5 ist auch für ein Loft ausreichend.

Über iPhone, iPad, Android oder Computer lassen sich die Songs verwalten, Playlists anlegen, Räume gruppieren.

Es gibt eine Schlaf-Funktion und die Möglichkeit beliebig viele Wecker pro Raum zu konfigurieren und mit beliebigen Playlists versehen. Samstags also vielleicht sanfte Musik aus einer Spotify-Playlist? Und an Tagen, wo man morgens direkt nach dem Aufstehen trainiert, lässt man sich halt mit Dupstep-Bässen aus dem Bett holen. Ganz wie es beliebt.
