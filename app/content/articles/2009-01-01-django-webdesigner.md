---
language: "de"
title: "Django für Webdesigner"
description: "Einführung in Django für Webdesigner. Warum Django dank der fantastischen Template-Sprache besonders für Webdesigner gut geeignet ist."
author: "Stefan Imhoff"
slug: "django-webdesigner"
date: 2009-01-01T11:00:00+02:00
categories:
- code
tags:
- django
---

Die Arbeit mit einem Webframework ist auch für Webdesigner mit grafischem Hintergrund geeignet und vielleicht sogar stressfreier, als sich z. B. mit dem Templatesystem von WordPress herumzuschlagen. Und wieso ich Django unter den Webframeworks für besonders geeignet halte.

Für viele Webdesigner sind Webframeworks noch immer ein Buch mit sieben Siegeln. Leider hat sich der Irrglaube festgesetzt, Webframeworks wären nur für Webentwickler geeignet.

Auch wenn einige Webdesigner sich möglicherweise schon mit [Ruby on Rails](http://rubyonrails.org/) oder einem PHP-Webframework beschäftigt haben, trifft dies doch wohl nur auf eine Minderheit der Webdesigner zu. Die Mehrheit arbeitet wahrscheinlich mit WordPress, Textpattern oder Typo3.

## Das Berufsbild eines Webdesigners

Der durchschnittliche Webdesigner kennt sich meist mit den grafischen Werkzeugen, wie Photoshop, Fireworks oder Illustrator aus, beherrscht mindestens die Grundlagen von Layout, Informationsarchitektur, Typographie und Fotobearbeitung, sollte ein gutes Wissen über webstandardskonformes (X)HTML und CSS besitzen und nutzt eine Hand voll CMS, Blog- oder Shopsysteme. Die Programmierkenntnisse liegen meist irgendwo zwischen Einsteiger und einem mittlerem Level, meistens in der Programmiersprache PHP (oder seltener ASP). Dazu kommen oft noch Grundkenntnisse in SQL. Schon seltener beschäftigen sich Webdesigner mit Webservern und deren Konfiguration.

## CMS mit Plugins erweitern

Die üblichen CMS werden je nach Kundenwunsch bis an ihre Grenzen (oder darüber hinaus) angepasst, erweitert oder verbogen. Aufgrund mangelnder Programmierkenntnisse oder fehlendem Interesse an Programmierung werden meist Erweiterungen, Plugins und Module benutzt, die andere Webentwickler für das jeweilige System programmiert haben.

Das dieses Suchen nach den geeigneten Erweiterungen und deren Anpassung nicht optimal ist, hat viele Gründe:

* die wenigsten CMS bieten eine ordentliche API, auf der Webentwickler aufsetzen können
* viele Entwickler überschwemmen den Markt mit mehr oder weniger gut programmierten Erweiterungen, was zu Performance-Einbußen oder Sicherheitsrisiken führen kann. Bei der Vielzahl der möglichen Erweiterungen ist es oft gar nicht möglich, die Qualität festzustellen, ohne tief in den Quellcode einzusteigen
* die Suche nach geeigneten Lösungen für ein spezifisches Problem erfordert eine lange und mühsame Recherche im Internet
* Erweiterungen und Plugins sind z. T. nach einem Update des Programms nicht mehr zu nutzen, wenn der Entwickler nicht mehr mit der Entwicklung des Kernsystems Schritt halten kann, oder das Interesse verliert
* ein Webdesigner muss eine Vielzahl von CMS und deren Begrenzungen kennen, um bei spezifischen Kundenwünschen zu wissen, welches am besten mit den Wünschen des Kunden übereinstimmt, dies kann sehr anstrengend sein, weil ständig neue Systeme auf den Markt kommen
* daher werden Kunden oft auch nach dem Motto <q lang="en">one fits all</q> mit nicht optimalen Lösungen abgespeist

## Webframeworks

Bei einem Webframework sind zwar nicht alle oben genannten Probleme verschwunden, aber viele werden abgemildert oder verschwinden ganz.

Bei einem mittelgroßen Projekt war bis vor wenigen Jahren an individuelle Programmierung meist gar nicht zu denken, da die Kosten dafür den Budgetrahmen sprengten.

Seit es Webframeworks gibt, sind hohe Programmierkosten oder jahrelange Entwicklungen für grundlegende Funktionen nicht mehr zu vertreten. Die immer wiederkehrenden Wünsche, die bei jeder Website im Kern gleich sind, und deren Programmierung nur langweilig und wenig inspirierend sind, müssen nicht immer von Neuem programmiert werden.

Hier setzt nämlich ein Webframework an, was einfach gesagt nichts weiter ist, als eine Reihe von Hilfsmitteln, die bei ermüdenden, immer wiederkehrenden Arbeiten hilft.

Es stellt Verbindungen zur Datenbank her, verschickt E-Mails, speichert und lädt Datensätze in/aus der Datenbank oder kontrolliert das Caching der Webseiten.

## Warum ist Django anders?

Django ist ein [Python](https://www.python.org/)-Webframework und dennoch zeichnet es sich durch einige Unterschiede zu üblichen MVC-Webframeworks aus.

Django ist in einer Umgebung von Zeitungen und Online-Portalen der Nachrichtenbranche entstanden, genauer gesagt für den Zeitungsverlag [Lawrence Journal-World](http://www2.ljworld.com/).

Es wurde von Anfang an so konzipiert, dass es eine komfortable Eingabe der Daten für Reporter und Publizisten ermöglicht, und eine optimale Templatesprache für Webdesigner bietet. Von der Idee zur Umsetzung einer Website dürfen in diesem Marktsegment, wenn möglich, nur wenige Stunden vergehen, maximal einige Tage. Eine monatelange Entwicklung wäre für Zeitungsverlage, die immer tagesaktuell berichten, sehr ungünstig. Daher liegt der Hauptvorteil bei Django in der Geschwindigkeit, mit der Ideen umgesetzt werden können.

## Ist Django denn überhaupt für Webdesigner geeignet?

Ich selber zähle mich zur Gruppe der durchschnittlichen Webdesigner, auch wenn mir Serverkonfiguration und Programmierung nicht fremd sind. Meine Arbeitsverteilung im Tagesgeschäft sieht ungefähr so aus:

* 41 % HTML/CSS
* 12 % Design/Grafik/Foto
* 11 % Ideenfindung/Konzeption
* 8 % Screendesign
* 7 % Programmierung
* 4 % Textbearbeitung
* 17 % Rest

Aus eigener Erfahrung kann ich sagen, dass ich als Webdesigner mit 90 % der auftretenden Wünsche gut zurechtkam.

Django hat eine sehr aktive Community: Diverse Blogs von Django-Entwicklern, eine [fantastische Dokumentation](https://docs.djangoproject.com/), Tutorials, Foren/Groups oder IRC-Chat. Selbst bei Wünschen, die nicht von Haus aus zu lösen sind, und für die es noch kein Modul von Drittanbietern gibt, ist es sehr wahrscheinlich schnell eine Lösung zu finden.

## Datenbank und Daten

Bei Django stehen zuerst in der Entwicklung einer Website die Daten im Vordergrund, was eigentlich bei jedem Projekt in einer Konzeptionsphase überdacht werden sollte, jedoch leider oft viel zu kurz kommt.

Es wird überlegt, welche Daten angezeigt und gespeichert werden sollen, und wie sie miteinander verknüpft sind.

Wenn das Datenkonzept fertig gestellt ist, wird die Datenbank in einer einfach zu erlernenden Python-Syntax geschrieben. Django bietet schon eine riesige Auswahl an Feldtypen an, die für bestimmte Datentypen (z. B. URL-Feld, E-Mail-Adresse, Textbox, PLZ etc.) geeignet sind. Diese kommen von Haus aus mit der nötigen Validierung eines solchen Feldes.

Das folgende Beispiel (von der Django-Website) zeigt den Code von zwei Tabellen, einer `Reporter`-Tabelle und einer `Artikel`-Tabelle:

{{% figure class="code-figure" caption="models.py" %}}
```python
class Reporter(models.Model):
    full_name = models.CharField(max_length=70)

    def __unicode__(self):
        return self.full_name

class Article(models.Model):
    pub_date = models.DateTimeField()
    headline = models.CharField(max_length=200)
    content = models.TextField()
    reporter = models.ForeignKey(Reporter)

    def __unicode__(self):
        return self.headline

```
{{% /figure %}}

Mit einem kurzen Befehl wird Django im Anschluss daran mitgeteilt, dass die nötigen Tabellen in der Datenbank angelegt werden sollen. Django unterstützt eine Menge Datenbanken (SQLite3, MySQL, PostgreSQL, Oracle) von Haus aus. Weitere können durch Drittanbieter hinzugefügt werden.

## Admin-Interface

Durch einige wenige Zeilen und einen weiteren Datenbankbefehl wird das Admin-Interface aktiviert. Redakteure können sofort mit der Eingabe von Daten beginnen, und das sogar, wenn noch nicht ein Template der Website erstellt wurde.

In vielen anderen Webframeworks muss der Programmierer sich eine Eingabemaske erst mühsam selber programmieren. Das Django-Admin-Interface wird standardmäßig mit Suchfunktion, Sortierung von Spalten, Filtern und Gruppierungsfunktionen geliefert.

Schick ist es auch noch. Das Interface anzupassen ist später kein Problem und funktioniert nach den gleichen Regeln und in der gleichen Templatesprache, wie für den sichtbaren Teil der Website.

## URLs

Das URL-Design ist bei Django ein integraler Bestandteil. Es ist sogar **nötig**, sich damit zu beschäftigen. Es gibt keine Vorgaben, wie die URLs aussehen soll, kein CMS was hier Endungen erzwingt, IDs anhängt oder Teile der URL obligatorisch macht.

Mit ein wenig Wissen um [Regular Expressions]( http://www.regular-expressions.info/) können alle nur erdenklichen URLs konstruiert werden. Und das freut nicht nur die Suchmaschine sondern auch penible Webdesigner, die sprechende und menschlich-logische URLs lieben.

Dieses kurze Beispiel aus der Django-Dokumentation zeigt die Konfiguration einiger URLs:

{{% figure class="code-figure" caption="urls.py" %}}
```python
from django.conf.urls.defaults import *

urlpatterns = patterns('',
    (r'^articles/(\d{4})/$', 'mysite.views.year_archive'),
    (r'^articles/(\d{4})/(\d{2})/$', 'mysite.views.month_archive'),
    (r'^articles/(\d{4})/(\d{2})/(\d+)/$', 'mysite.views.article_detail'),
)
```
{{% /figure %}}

Vielleicht mag dies auf den ersten Blick etwas seltsam aussehen oder nicht gleich verständlich sein, aber keine Sorge, das legt sich sehr schnell, wenn die Grundlagen von Regular Expressions verstanden sind.

## Views

Die View ist bei Django die Datei, die Daten aus der Datenbank holt, nach beliebigen Regeln sortiert und gruppiert und diese an das Template weitergibt.

Alle Abfragen und Überprüfungen finden hier statt. Django bietet standardmäßig schon eine vereinfachte Möglichkeit an, Daten aus der Datenbank zu holen, und in Listenansicht oder Detailansicht anzuzeigen, sowie einige andere. Ein Großteil der üblichen Anfragen lassen sich mit diesen Generic Views erledigen, ohne auch nur eine Zeile programmieren zu müssen.

## Templates

Die View verpackt die verarbeiteten Daten in Container (*Context*) und gibt diese an die Templates weiter. Dort werden die Daten dann nach gewünschter Logik ausgegeben.

Django bietet eine fantastische Templatesprache, die für Webdesigner kaum Wünsche offen lässt.

Eine Besonderheit der Templates ist die inverse Arbeitsweise, die so nur bei den wenigsten Systemen üblich ist.

Die meisten CMS- oder Frameworksysteme arbeiten mit inkludierenden Templates. Die Website wird in einzelne Teile zerschnitten und diese Teile werden auf eigene Dateien ausgelagert. Auf diese Weise fehlt leider oft der Gesamtüberblick über die HTML-Datei. Es kann sogar vorkommen, dass sich schließende HTML-Tags in anderen Templates befinden, wie die öffnenden Tags. Dies ist sehr unübersichtlich und der Template-Designer sieht nie den ganzen Quellcode einer Seite.

Django arbeitet umgekehrt, unterstützt aber auch das Einbinden von Schnipseln. Es wird vom größten Template zum kleinsten hin gearbeitet, wobei jedes kleinere Template den Code des größeren erben kann.

Die übliche Arbeitsweise ist das Erstellen eine Grundtemplates, was Grundstruktur, die wichtigsten Container und den Head-Bereich enthält. Dann werden Spezialvarianten davon erstellt, z. B. für einen Blog oder eine Homepage. Und schließlich werden die Templates für individuelle Artikel oder eine Liste erstellt. Dazu werden Bereiche definiert, die beim Vererben an andere Templates überschrieben werden können.

Django-Templates lassen keine Programmierung (Python) oder Datenbankabfragen (SQL)  innerhalb von Templates zu. So bleibt der Code sauber und sieht nicht so furchtbar wie manches WordPress-Template aus, wo sich PHP, HTML, SQL-Abfragen und WordPress-Tags wirr ineinander verschachteln.

Wem die [Grundfunktionen der Templatesprache](https://docs.djangoproject.com/en/dev/ref/templates/builtins/) nicht ausreichen, der kann [eigene Filter oder Tags](https://docs.djangoproject.com/en/dev/howto/custom-template-tags/) scheiben, was oft nur wenige Zeilen Code erfordert.

Ein Grundtemplate sieht in der Django-Dokumentation z. B. so aus:

{{% figure class="code-figure" caption="base.html" %}}
```html
<html>
<head>
    <title>{% block title %}{% endblock %}</title>
</head>
<body>
    <img src="sitelogo.gif" alt="Logo" />
    {% block content %}{% endblock %}
</body>
</html>
```
{{% /figure %}}


Das niedrigere Template, hier eine Detailseite für einen Artikel, überschreibt dann die Blöcke nach Belieben und erbt den Rest des Grundtemplates:

{{% figure class="code-figure" caption="article.html" %}}
```html
{% extends "base.html" %}

{% block title %}Articles for {{ year }}{% endblock %}

{% block content %}
    <h1>Articles for {{ year }}</h1>

    {% for article in article_list %}
        <p>{{ article.headline }}</p>
        <p>By {{ article.reporter.full_name }}</p>
        <p>Published {{ article.pub_date|date:"F j, Y" }}</p>
    {% endfor %}
{% endblock %}
```
{{% /figure %}}

## Erweitern von Django

Eine Besonderheit von Django ist die Möglichkeit, das eigene Projekt mit Applikationen zu erweitern. Diese Applikationen sind mehr als nur Plugins oder Extensions, sondern Module (wie z. B. Module in ExpressionEngine). Fast alles, was in Django benutzt wird, ist eine eigene Applikation. Sogar das Admin-Interface ist ein eigenes Modul, was nach belieben benutzt oder nicht benutzt werden kann.

Eine typische Seite eines Webdesigners könnte z. B. aus diesen Applikationen bestehen:

* Blog
* Kommentare
* Projektportfolio
* Fotogalerie
* Registrierung/Login
* Kontaktformular
* einige "statische" Seiten (Impressum, Über mich, etc.)

Für vieles gibt es schon fertige Applikationen, einige sind sogar Teil von Django (in diesem Beispiel Kommentare, Kontaktformular und statische Seiten). Die Auswahl von Modulen lässt keine Wünsche offen: von Blog-Systemen, über Foren bis hin zu Shops ist fast alles bereits von eifrigen Programmierern erstellt worden. Und es kommen täglich neue hinzu.

Außerdem ist es möglich, mehrere Webseiten mit einer Applikation zu betreiben, also z. B. nur einmal den Code für ein Forum vorzuhalten und dann für viele Kunden zu benutzen.

## Hosting und Server

Eines darf natürlich nicht verschwiegen werden: Systeme die nicht PHP benutzen, erfordern mehr Aufwand bei der Einrichtung auf dem Server. Das gilt für Ruby on Rails genauso wie für Django.

Der Aufwand hält sich aber in Grenzen, schon das Modul *mod_python* reicht für Apache aus, um Django zum Laufen zu bringen, auch wenn es noch schnellere Möglichkeiten gibt. Es gibt mittlerweile gute [Dokumentationen](http://django-hosting.de/wiki/WikiIndex/) für die möglichen Arten der Produktionsumgebung.

Daher ist es derzeit nicht denkbar, solche Systeme für den Fliesenleger von nebenan zu benutzen, denn ein eigener Server oder mindestens ein eigener VHost mit SSH-Zugang, und der Möglichkeit den Server selber zu konfigurieren, sollte schon vorliegen. Auf den üblichen Webhostingpaketen der Massenhoster läuft dies derzeit noch nicht. In den USA gibt es aber schon erste Angebote im sehr günstigen Bereich (z. B. [Webfaction](https://www.webfaction.com/?affiliate=kogakure), Slicehost, [Mediatemple](https://mediatemple.net/webhosting/shared/) oder [Dreamhost](https://www.dreamhost.com/)), die den Einsatz von Django ermöglichen, ohne den Server selber konfigurieren zu müssen. Die Website [Djangofriendly](http://djangofriendly.com/hosts/) bietet eine große Liste mit Hostern, die Django schon unterstützten. Auf einem eigenen Server kann man es natürlich immer installieren.

Ob der Fliesenleger überhaupt ein CMS benötigt, steht auf einem anderen Blatt. Und bei Websites, die mehr seitenbasierenden Inhalt haben, ist ein System wie Typolight (jetzt [Contao](https://contao.org/de/)) mit Sicherheit die bessere Wahl.

## Fazit

Wer einen anspruchsvollen Kunden hat, der eine Website oder ein Portal aufbauen möchte, das möglichst beständig und zukunftssicher sein soll, und für den der Inhalt im Zentrum der Website steht, ist Django nur zu empfehlen.

Selbst für die eigene Website eines Webdesigners ist Django eine gute Wahl, weil man mit Leichtigkeit neue Dinge ausprobieren kann, wirklich versteht, wie die Teile der Website funktionieren und mit Django und Python auf ein System setzt, dass stabil und sicher ist.

Der eigenen Kreativität sind in Django keine Grenzen gesetzt, weil Python mit seinen über 4000 Modulen von Drittanbietern, jeden noch so seltenen Wunsch erfüllen kann.

Aus eigener Erfahrung kann ich nur sagen, dass das Stresslevel und der Arbeitsaufwand erheblich sinkt, wenn man seine Webportale mit Django betreibt, der Code bleibt kurz und übersichtlich, ist leicht zu warten, modular und objektorientiert. In Verbindung mit Deploymentwerkzeugen wie [Fabric](http://www.nongnu.org/fab/) oder [Capistrano](http://capistranorb.com/), Versionskontrollsystemen wie z. B. [Git](http://git-scm.com/) macht die Entwicklung von Websites wieder Spaß.

Also schließt euer Photoshop für ein paar Stunden und schaut einfach mal, ob Django nicht vielleicht das richtige Werkzeug für euch ist. Das vierteilige [Tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/) bietet einen schnellen Einstieg in die Arbeitsweise mit Django. Der komplette Quellcode meines Kampfsport-Portals [kogakure.de](http://kogakure.de/) ist frei verfügbar und kann bei [Github geladen werden](https://github.com/kogakure/kogakure.de-django).
