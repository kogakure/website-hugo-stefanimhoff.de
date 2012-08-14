---
layout: post
title: "Versionskontrolle mit Git"
date: 2007-08-02 17:53
categories:
tags: [git, subversion]
---

Vor ein paar Wochen bin ich über *Git* gestolpert, das Versionskontrollsystem von [Linus Torvalds](http://en.wikipedia.org/wiki/Linus_Torvalds "Linus Torvalds - Wikipedia, the free encyclopedia"). Git wird zur Zeit von Junio Hamano entwickelt.

<!-- more -->

Seit fast einem Jahr arbeite ich nun mit Subversion – und bin ziemlich zufrieden. Meine Ansprüche sind aber auch nicht sehr hoch, da ich kein Software-Entwickler bin, oder riesige Mengen Code zu bewältigen habe. Bei mir gab es bislang auch noch keinen `branch` in einem meiner Projekte

*CVS* habe ich nicht kennengelernt und das scheint auch gut zu sein, bei allen grausigen Meldungen, die man über CVS hört.

Linus Torvalds sieht das wohl etwas anders, wie er in Googles „[Tech Talk: Linus Torvalds on git](http://youtube.com/watch?v=4XpnKHJAok8&amp;v3 "YouTube - Tech Talk: Linus Torvalds on git")“ deutlich macht:

> „I see Subversion as being the most pointless project ever started, because the slogan for Subversion for a while was: »CVS done right« […]. And if you start with that kind of slogan, there is nowhere you can go. There’s no way to do CVS right.“
>
> – Linus Torvalds

Zur Namensfindung von Git (*engl.* Blödmann, Depp, Idiot) erzählt Linus Torvalds scherzhaft, dass er seine Projekte eben gerne nach sich benennt.

### Vorzüge von Git ###

*Git* hat einige interessante Vorzüge:

* Das Erstellen neuer Entwicklungszweige und das Verschmelzen sind einfach und effizient.
* Man benötigt keinen zentralen Server, das Repository befindet sich beim Projekt.
* Daher kann man auch ohne Verbindung auf die Vorzüge eines Versionskontrollsystems zugreifen.
* Verschlüsselte Versionsgeschichte
* Flexibler Datentransfer
* Einfaches Säubern des Repositories

*Git* passt besser in eine *OpenSource*-Community, weil man sich nicht über die Probleme des Zugriffs auf ein Repository beschäftigen muss.
Gibt man zu wenigen Personen Zugriff auf sein Repository, gibt es auch wenig Entwicklung. Gibt man zu vielen Zugriff entsteht nur Müll.

Linus bringt es klar auf den Punkt: <span class="quote">„Die meisten da draußen sind Schwachköpfe, und ich vertraue ihnen nicht“</span>. Trotzdem kann jeder sich eine Kopie seines Projektes ziehen, daran arbeiten und es verbessern.

Ist seine Arbeit gut, und andere Personen finden sie auch gut, können diese die Arbeit mit der eigenen verschmelzen.

### Fazit ###

*Git* ist sehr einfach und effizient zu bedienen, schon nach kurzer Zeit konnte ich damit umgehen. Man kann Git z.&nbsp;B. auch zusätzlich zu SVN oder CVS auf seinem Rechner nutzen. Das man kein zentrales Repository <del>hat</del> <ins>haben muss</ins>, ist ein echter Vorzug.

Neben dem [fantastischen Vortrag](http://youtube.com/watch?v=4XpnKHJAok8&amp;v3 "YouTube - Tech Talk: Linus Torvalds on git") von Linus Torvalds auf *Google Tech Talk* gibt es auch eine [Installationsanleitung für Mac OSX Tiger/Leopard](http://wincent.com/knowledge-base/Installing_Git_1.5.2.4_on_Mac_OS_X_Leopard "Installing Git 1.5.2.4 on Mac OS X Leopard - Knowledge Base"). Auf der [offiziellen Seite von Git](http://git.or.cz/ "Git - Fast Version Control System") findet man gute Handbücher und Tutorials.

Ich werde Git in der nächsten Zeit in meinen Projekten testen und meine Erfahrungen hier veröffentlichen.
