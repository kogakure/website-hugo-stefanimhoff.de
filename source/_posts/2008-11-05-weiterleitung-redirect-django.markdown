---
layout: post
title: "Weiterleitungen in Django"
date: 2008-11-05 07:00
description: "Einführung in das Modul für Weiterleitung von Django."
categories:
- Code
tags:
- django
- redirect
- weiterleitung
---

Ein wirklich nützliches Modul von Django ist `django.contrib.redirects`, welches das Einrichten von Weiterleitungen ermöglicht. Zusammen mit Djangos Möglichkeit zur Benachrichtigung per E-Mail bei Fehlern, möchte ich diese Funktionen nicht mehr missen.

## Weiterleitungen

In Django kann man nach Aktivierung des `Redirect`-Moduls einfach im Admin-Interface *Weiterleitungen* von einer beliebigen URL auf die neue URL einstellen. Meine Kampfkunst-Website [kogakure.de](http://kogakure.de/) gibt es seit über 9 Jahren, und wurde in dieser Zeit in hunderten von Foreneinträgen und privaten Websites verlinkt. Oft existiert die alte Struktur der Website schon gar nicht mehr und alle alten Links führen zu einer Fehlerseite.

## E-Mail-Benachrichtigung bei Fehler

Es ist möglich beim Aufruf eines fehlerhaften Links per E-Mail benachrichtigt zu werden. Dies ist praktisch, weil man so schnell den Fehler beheben kann und zukünftige Besucher gleich auf die korrekte URL weiterleiten kann.

Diese Funktion sendet sowohl bei Serverfehlern (Error 500), als auch bei fehlenden Seiten (Error 404) eine E-Mail mit detaillierten Angaben an den Seitenbetreiber. Bei Serverfehlern bekommt man einen kompletten Auszug mit dem Python-Code zugesandt, der den Serverfehler verursacht hat. Bei fehlenden Seiten werden die URL mit dem fehlerhaften Link, die gewünschte URL und Browserinformationen zugesandt – das aber nur bei korrektem Referer. Es reicht also nicht, per Hand eine Seite anzufordern, die nicht existiert.

Um diese Funktion zu aktivieren muss man in der `settings.py` die Einstellung `DEBUG` auf `False` gesetzt haben, `SEND_BROKEN_LINK_EMAILS` muss auf `True` gestellt werden. Außerdem muss die Middleware `CommonMiddleware` aktiviert sein, was aber standardmäßig schon der Fall ist.

Es ist zusätzlich noch möglich Anfänge und Endungen mitzugeben, die ignoriert werden sollen: `IGNORABLE_404_ENDS`, `IGNORABLE_404_STARTS`. In einem Array folgen dann einfach die gewünschten Endungen:

{% codeblock settings.py lang:python %}
IGNORABLE_404_ENDS = ('favicon.ico','.php')
IGNORABLE_404_STARTS = ('/cgi-bin/','/css/','/scripts/','/images/')
{% endcodeblock %}

Benachrichtigt werden alle Empfänger, die unter der Einstellung `ADMINS` eingetragen sind.

## Saubere URLs mit Mod_Rewrite

Aus Gründen der Suchmaschinenoptimierung sollte man bei einer Website sowohl die *www*-Subdomain der URL einheitlich weglassen oder verwenden, als auch einen Slash ans Ende der Adresse anhängen (außer bei Dateien mit Endung).

Für beide Fälle bietet Django standardmäßig schon Einstellungen: `PREPEND_WWW` und `APPEND_SLASH`. Leider bietet der erste Fall nur eine Funktion das *www* hinzuzufügen, nicht es wegzunehmen (was ich persönlich für viel sinnvoller halte). Tickets für diesen Fall wurden schon eingesendet.

Es gibt auch schon diverse Möglichkeiten, dies zu lösen, z. B. über die URL-Middleware von Stefano J. Attardi.

In einer Diskussion mit [Martin Mahner](http://www.mahner.org/), habe ich aber die Überzeugung von ihm übernommen, dass dies vom Server geregelt werden sollte, der kann das viel effizienter und schneller.

Dafür richten man in seinem VHost einfach folgende Mod_Rewrite-Direktiven ein:

{% codeblock lang:apacheconf %}
# Remove WWW
RewriteCond %{HTTP_HOST} !^domain\.de$
RewriteRule ^(.*)$ http://domain.de$1 [R=301,L]

# Append Slash
RewriteCond $1 !/$
RewriteCond %{REQUEST_URI} !^(/sitemap(.*)\.xml$|/robots\.txt$|(.*)\.html$|(.*)\.htm$|(.*)\.jpg$|(.*)\.png$|(.*)\.gif$|(.*)\.ico$)
RewriteRule (.+) http://domain.de$1/ [R=301,L]
{% endcodeblock %}

Diese Direktiven entfernen das *www* und hängen ans Ende der URL einen Slash an, außer bei bestimmten zu definierenden Endungen.

So kann man mit Django eine Website immer schön erreichbar halten, so dass man weder Suchmaschinen noch Besucher vor den Kopf stößt.
