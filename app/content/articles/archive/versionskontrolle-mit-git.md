---
draft: true
language: de
title: 'Versionskontrolle mit Git'
description: 'Warum Git eine Menge Vorzüge gegenüber anderen Versionskontrollsystemen bietet und es sich lohnt das relative neue VCS näher anzusehen.'
author: Stefan Imhoff
slug: versionskontrolle-mit-git
date: 2007-08-02T17:53:00+02:00
categories: ['vcs']
---

Vor ein paar Wochen bin ich über _Git_ gestolpert, das Versionskontrollsystem von [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds 'Linus Torvalds - Wikipedia, the free encyclopedia'). Git wird zur Zeit von Junio Hamano entwickelt.

Seit fast einem Jahr arbeite ich nun mit Subversion – und bin ziemlich zufrieden. Meine Ansprüche sind aber auch nicht sehr hoch, da ich kein Software-Entwickler bin, oder riesige Mengen Code zu bewältigen habe. Bei mir gab es bislang auch noch keinen `branch` in einem meiner Projekte

_CVS_ habe ich nicht kennengelernt und das scheint auch gut zu sein, bei allen grausigen Meldungen, die man über CVS hört.

Linus Torvalds sieht das wohl etwas anders, wie er in Googles <cite>[Tech Talk: Linus Torvalds on git](https://www.youtube.com/watch?v=4XpnKHJAok8)</cite> deutlich macht:

<blockquote>
  <p>I see Subversion as being the most pointless project ever started, because the slogan for Subversion for a while was: <q lang="en">CVS done right</q> […]. And if you start with that kind of slogan, there is nowhere you can go. There’s no way to do CVS right.</p>
  <footer>
    <strong>Linus Torvalds</strong>
    <cite>
      <a href="https://www.youtube.com/watch?v=4XpnKHJAok8">
        Tech Talk: Linus Torvalds on git
      </a>
    </cite>
  </footer>
</blockquote>

Zur Namensfindung von Git (engl. <em>Blödmann, Depp, Idiot</em>) erzählt Linus Torvalds scherzhaft, dass er seine Projekte eben gerne nach sich benennt.

## Vorzüge von Git

_Git_ hat einige interessante Vorzüge:

- Das Erstellen neuer Entwicklungszweige und das Verschmelzen sind einfach und effizient.
- Man benötigt keinen zentralen Server, das Repository befindet sich beim Projekt.
- Daher kann man auch ohne Verbindung auf die Vorzüge eines Versionskontrollsystems zugreifen.
- Verschlüsselte Versionsgeschichte
- Flexibler Datentransfer
- Einfaches Säubern des Repositories

_Git_ passt besser in eine _OpenSource_-Community, weil man sich nicht über die Probleme des Zugriffs auf ein Repository beschäftigen muss.
Gibt man zu wenigen Personen Zugriff auf sein Repository, gibt es auch wenig Entwicklung. Gibt man zu vielen Zugriff entsteht nur Müll.

<blockquote lang="de" class="pullquote">
  <p>Die meisten da draußen sind Schwachköpfe, und ich vertraue ihnen&nbsp;nicht!</p>
</blockquote>

Linus bringt es klar auf den Punkt: <q>Die meisten da draußen sind Schwachköpfe, und ich vertraue ihnen nicht!</q>. Trotzdem kann jeder sich eine Kopie seines Projektes ziehen, daran arbeiten und es verbessern.

Ist seine Arbeit gut, und andere Personen finden sie auch gut, können diese die Arbeit mit der eigenen verschmelzen.

## Fazit

_Git_ ist sehr einfach und effizient zu bedienen, schon nach kurzer Zeit konnte ich damit umgehen. Man kann Git z. B. auch zusätzlich zu SVN oder CVS auf seinem Rechner nutzen. Das man kein zentrales Repository <del>hat</del> <ins>haben muss</ins>, ist ein echter Vorzug.

Neben dem [fantastischen Vortrag](https://www.youtube.com/watch?v=4XpnKHJAok8) von Linus Torvalds auf _Google Tech Talk_ gibt es auf der [offiziellen Seite von Git](https://git-scm.com/) gute Handbücher und Tutorials.

Ich werde Git in der nächsten Zeit in meinen Projekten testen und meine Erfahrungen hier veröffentlichen.
