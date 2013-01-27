---
layout: post
title: "Gelöste Django-Probleme"
date: 2010-09-11 16:00
description: 
categories:
tags: 
- django
---

Eric Holscher hat auf der DjangoCon 2010 einen interessanten Vortrag gehalten, in dem er die besten Lösungen für alltägliche Probleme mit Django aufzeigt.

<!-- more -->

Die Liste von Applikationen, die Eric vorstellt ist sehr interessant, und sollte jedem, der beginnt sich mit Django zu beschäftigen bekannt sein. Eric Holscher spricht in seinem Talk – seinen [Blog-Artikel und die Folien](http://ericholscher.com/blog/2010/sep/10/djangocon-talk/) gibt es hier – sieben allgemein bekannte Lösungen für bekannte Probleme an:

* Suche: [Haystack](http://haystacksearch.org/)
* Dokumentation: [Sphinx](http://sphinx.pocoo.org/)
* Datenbank-Migration: [South](http://south.aeracode.org/)
* Verzögerte Ausführung: [Celery](http://celeryproject.org/)
* Entfernte Ausführung: [Fabric](http://fabfile.org/)
* Deployment: [Gunicorn](http://gunicorn.org/) mit Nginx
* Packaging: [Pip](http://pip-installer.org/) und [Virtualenv](http://virtualenv.openplans.org/)

## Volltextsuche mit Haystack

Mit der Integration einer Suche hatte ich bei meinem ersten Django-Projekt auch einige Probleme, die aktuelle Lösung ist einfach, tut aber ihren Dienst. Bei meinem nächsten Projekt – dem Redesign dieser Website mit Django – will ich aber auch Haystack einsetzen.

## Dokumentationen schreiben mit Sphinx

Dokumentationen mit Sphinx zu schreiben macht echt Spaß, dass kann ich nur bestätigen. Nachdem ich eine Git-Dokumentation von fast 150 Seiten mit LaTeX für meinen Arbeitgeber erstellt habe, war ich wirklich erstaunt, wie schnell ich den Code in Sphinx konvertieren konnte und wie leicht das Handbuch seit dem zu warten ist. Und bei all dem ist Sphinx fast genauso Leistungsstark wie LaTex, was Glossar, Index und Querverweise angeht. Ich kann jedem, der eine Dokumentation schreiben und pflegen muss – auch außerhalb der Python-Welt – nur raten sich Sphinx anzusehen. In wenigen Minuten installiert, wird Sphinx mit reStructuredText und einigen zusätzlichen Deklarationen geschrieben, die man in weniger als einer halben Stunde durchlesen kann. reStructuredText ist ohnehin eine unglaublich geniale Sprache, die jeden Wunsch nach einer WYSIWYG-Eingabe erlöschen lässt. Meine neue Website wird auch statt Markdown mit reStructuredText laufen.

## Daten- und Schemamigration mit South

Datenbank-Migration setze ich erst seit kurzem ein, bin aber sehr beeindruckt, wie leicht South auch für einen Anfänger zu bedienen ist. Besonders jetzt in der Anfangsphase des Relaunches dieser Website, wo ich noch nicht vollständig überblicken kann, was meine Website zukünftig für Anforderungen haben soll und wie genau die Tabellen meiner Datenbank aussehen sollen, ist South wirklich praktisch. Umbenennen von Datenbanken, Tabellen, Felder wegfallen lassen oder hinzuzufügen und Daten zwischen Tabellen zu migrieren: dies alles geht Dank South sehr einfach.

## Verzögerte Ausführung mit Celery

Verzögerte Ausführung war mir bislang noch gar nicht bekannt, das Konzept hört sich aber interessant an, vielleicht werde ich mir Celery in nächster Zeit einmal näher ansehen.

## Entfernte Ausführung mit Fabric

Entfernte Ausführung mit Fabric setze ich schon seit geraumer Zeit ein. Nicht nur für das Deployment meiner Django-Seite, sondern auch für das Deployment von PHP-Seiten, für Backups und für Serveraufgaben auf den Servern meines Arbeitgebers, auf denen ich nichts installieren darf. Fabric macht Fernwartung wirklich sehr einfach. Und im Gegensatz zu Capistrano, das einfach zu viel macht, kann ich Fabric viel besser an meine Bedürfnisse anpassen.

## Deployment mit Gunicorn

Deployment mit Gunicorn war mir auch neu, im Moment ist das für mich aber auch kein Problem. Meine Websites liegen bei [Webfaction](http://www.webfaction.com/?affiliate=kogakure), die das Einrichten der Django-Umgebung vollständig automatisiert haben und mir diesbezüglich die Arbeit abnehmen.

## Packaging mit Pip, Virtualenv (und Virtualenvwrapper)

Packaging mit Pip und Virtualenv sind wirklich sehr arbeitserleichternd. So wie Homebrew der perfekte Installer für Mac OS X ist, ist Pip der perfekte Installer für Python-Packages. Auch die Tatsache, dass man eine bestimmte Arbeitsumgebung *einfrieren* kann und sie genau in der gleichen Weise auf einem anderen Computer oder Server wieder einrichten kann, ist wirklich ein starkes Argument für Pip.

Virtualenv ist eine fantastische Lösung, um seine Projekte unabhängig von einander zu bearbeiten. Es gibt keine Konflikte mehr zwischen unterschiedlichen Versionen von Python-Packeten. Ich persönlich setze auch noch den Virtualenvwrapper ein, ein kleines Tool, das den Wechsel zwischen den Projekten noch leichter macht, und außerdem noch Hooks bietet. So kann ich meine komplette Django-Arbeitsumgebung für ein Projekt mit nur einem Befehl wieder herstellen: vom Wechseln in die richtige virtuelle Umgebung, über das Öffnen der Dateien im Mac OS X-Finder und in TextMate, bis zum Starten des Servers und Aufrufen der Website und Django-Administrationsumgebung im Browser. Und das in wenigen Sekunden.

Im nächsten Abschnitt der Präsentation geht Eric Holscher auf einige Applikationen ein, für die es noch mehrere Lösungen gibt. Für Tagging soll [Django Taggit](http://github.com/alex/django-taggit) die beste aktuelle Lösung sein, auch wenn Django Tagging noch eine Alternative ist.

Die [Django Debug Toolbar](http://github.com/robhudson/django-debug-toolbar) ist eine wirklich nützliche Applikation, die ich in jedem Django-Projekt gleich als erstes installiere.

Das Filtern im Frontend mit [django-filter](http://github.com/alex/django-filter) war mir noch nicht bekannt, hört sich aber sehr interessant aus und wird mit hoher Wahrscheinlichkeit in die neue Website integriert.

Auch für das Problem, die beste Applikation für ein Problem zu finden gab es bislang nur weniger gute Lösungen: eine Suche auf Google Code nach Projekten mit *django-* oder eine Suche auf Github. Das Projekt Django Pluggables, das Bryan Veloso gestartet hat wurde beendet und leitet jetzt direkt auf das von Eric Holscher erwähnt [Django Packages](http://djangopackages.com/) weiter.

Am Ende seines Vortrags geht Eric Holscher noch auf einige ungelöste Probleme ein: Template Tags, Logging, Model Introspection, Class Based Views, Source code arragements, Notifications/Email, Debugging in Production, OpenID/OAuth und VSC Abstaction. Mich persönlich würden davon höchstens Template Tags, Logging, Notifications/Email und Debugging in Production interessieren – auch wenn ich für meine Anforderungen mit den aktuellen Lösungen super leben kann. Bei den anderen Anforderungen weiß ich nicht einmal, was das ist ;)
