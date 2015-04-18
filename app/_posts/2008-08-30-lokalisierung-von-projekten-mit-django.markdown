---
layout: post
language: "de"
title: "Lokalisierung von Projekten mit Django"
description: "Einführung in die Lokalisierung und Internationalisierung einer Django-Applikation. Was muss beachtet werden, wie werden die  Template-Tags eingesetzt und wie werden die Sprach-Dateien generiert. "
author: "Stefan Imhoff"
date: 2008-08-30 15:25
updated: 2014-10-25 13:11
categories:
- Code
tags:
- django
- lokalisierung
- i18n
---

Es gibt für Django mittlerweile schon eine große Menge nützlicher Applikationen. Leider vernachlässigen viele Entwickler immer noch die Lokalisierung und Internationalisierung ihrer Applikationen.

Viele Entwickler kommen aus den U.S.A. und sprechen meist nur eine Sprache: Englisch. Trotzdem sollte jeder Entwickler die Internationalisierung von Anfang an gleich mit einbauen, es sei denn er ist sich *sicher*, dass die Anwendung nie veröffentlicht wird.

Die Arbeit, die dafür ausgeführt werden muss, ist auch nicht wirklich ein großer Mehraufwand. Dies ist übrigens alles sehr gut in der [Django-Dokumentation](https://docs.djangoproject.com/en/dev/topics/i18n/) dokumentiert.

Trotzdem führe ich hier kurz durch die wichtigsten Schritte, um den Einstieg zu erleichtern.

## Ursprungsdateien

Dieses Beispiel setzt auf dem Code für das offizielle Django-Tutorial auf und fährt nach Teil 4 fort.

Der Einfachheit halber lokalisiere ich nur vier dieser Dateien:

{% figure code-figure "admin.py" %}
{% highlight python linenos %}
from django.contrib import admin

from models import Poll, Choice

class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3

class PollAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question']}),
        ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]
    list_display = ('question', 'pub_date', 'was_published_today')
    list_filter = ['pub_date']
    search_fields = ['question']
    date_hierarchy = 'pub_date'

admin.site.register(Poll, PollAdmin)
admin.site.register(Choice)
{% endhighlight %}
{% endfigure %}


{% figure code-figure "models.py" %}
{% highlight python linenos %}
import datetime
from django.db import models

class Poll(models.Model):
    question = models.CharField(max_length=200, help_text='Your question. Please add an "?" to the end.')
    pub_date = models.DateTimeField('date published')

    def __unicode__(self):
        return self.question

    def get_absolute_url(self):
        return self.id

    def was_published_today(self):
        return self.pub_date.date() == datetime.date.today()
    was_published_today.short_description = 'Published today?'

class Choice(models.Model):
    poll = models.ForeignKey(Poll)
    choice = models.CharField(max_length=200)
    votes = models.IntegerField()

    def __unicode__(self):
        return self.choice

{% endhighlight %}
{% endfigure %}

{% figure code-figure "polls/poll_list.html" %}
{% highlight html linenos %}
{% raw %}
{% if object_list %}
    <ul>
    {% for poll in object_list %}
        <li><a href="{{ poll.get_absolute_url }}/">{{ poll.question }}</a></li>
    {% endfor %}
    </ul>
{% else %}
    <p>No polls are available.</p>
{% endif %}
{% endraw %}
{% endhighlight %}
{% endfigure %}

{% figure code-figure "polls/results.html" %}
{% highlight html linenos %}
{% raw %}
<h1>{{ object.question }}</h1>

<ul>
{% for choice in object.choice_set.all %}
    <li>{{ choice.choice }} -- {{ choice.votes }} vote{{ choice.votes|pluralize }}</li>
{% endfor %}
</ul>
{% endraw %}
{% endhighlight %}
{% endfigure %}

## Lokalisierung der Python-Dateien

In jeder Python-Datei, die lokalisierte Zeichenketten enthalten soll, muss zuerst das Submodul `ugettext` oder `ugetttext_lazy` importiert werden. Als Konvention wird das Modul als `_` (Unterstrich) importiert, um die Schreibarbeit zu erleichtern. Zusätzlich fallen die Zeichenketten auch besser ins Auge.

In der `admin.py` wird am Anfang das erwähnte Submodul importiert. Jetzt werden alle Zeichenketten wie unten zu sehen geändert. Dabei ist es am besten, wenn alle Zeichenketten als Unicode mit dem kleinen `u` davor markiert werden. Die Zeichenketten müssen in Klammern eingefasst werden, da `ugetttext` eine Funktion ist.

{% figure code-figure "admin.py" %}
{% highlight python linenos %}
...
from django.utils.translation import ugettext_lazy as _
...

class PollAdmin(admin.ModelAdmin):
fieldsets = [
    (None,               {'fields': ['question']}),
    (_(u'Date information'), {'fields': ['pub_date'], 'classes': ['collapse']}),
]
...
{% endhighlight %}
{% endfigure %}

Django nimmt für die Felder im Admin-Backend automatisch den Datenmodellnamen mit einem Großbuchstaben als Label. Um diesen zu lokalisieren muss man ihn ausdrücklich angeben. Bei `ForeignKey`-Feldern ist es nötig den Namen mit `verbose_name` anzugeben.

{% figure code-figure "models.py" %}
{% highlight python linenos %}
...
from django.utils.translation import ugettext_lazy as _
...

class Poll(models.Model):
question = models.CharField(\_(u'Question'), max_length=200, help_text=\_(u'Your question. Please add an "?" to the end.'))
pub_date = models.DateTimeField(\_(u'date published'))

...

def was_published_today(self):
    return self.pub_date.date() == datetime.date.today()
was_published_today.short_description = \_(u'Published today?')

class Choice(models.Model):
poll = models.ForeignKey(Poll, verbose_name=\_(u'Poll'))
choice = models.CharField(\_(u'Choice'), max_length=200)
votes = models.IntegerField(\_(u'Votes'))

...
{% endhighlight %}
{% endfigure %}

## Lokalisierung der HTML-Templates

In den HTML-Templates wird eine etwas andere Syntax benutzt. Zuerst muss am Anfang der Datei das Templatetag für die Internationalisierung geladen werden.

Um eine einfache Zeichenkette zu markieren, benutzt man `{% raw %}{% trans "" %}{% endraw %}`. Es gibt auch Möglichkeiten Variablen oder lange Blöcke zu übersetzten. Hier verweise ich der Einfachheit halber auf die Dokumentation.

{% figure code-figure "polls/poll_list.html" %}
{% highlight html linenos %}
{% raw %}
{% load i18n %}

...

{% else %}
    <p>{% trans "No polls are available." %}</p>
{% endif %}
{% endraw %}
{% endhighlight %}
{% endfigure %}

Die Pluralisierung funktioniert (leider) nicht mehr wie gewohnt, wenn man sie lokalisiert. Dafür muss man eine Abfrage im `{% raw %}{% if %}{% endraw %}`-ähnlichen Stil einbauen und die Menge eines Objektes abfragen.

{% figure code-figure "polls/result.html" %}
{% highlight html linenos %}
{% raw %}
{% load i18n %}

...

<ul>
{% for choice in object.choice_set.all %}
    <li>{{ choice.choice }} -- {{ choice.votes }} {% blocktrans count choice.votes as counter %}vote{% plural %}votes{% endblocktrans %}</li>
{% endfor %}
</ul>
{% endraw %}
{% endhighlight %}
{% endfigure %}

## Erzeugen der Sprachdateien

Um jetzt eine Übersetzung für die Applikation oder das Projekt zu erzeugen, muss man zuerst im Projekt- oder Applikations-Ordner einen neuen Ordner mit Namen `locale` anlegen. Um auch Templates mit zu übersetzen, muss man den Ordner im Projektverzeichnis anlegen.

Im Terminal bewegt man sich jetzt in den Projekt-Root (oder in einen Applikations-Root) und führt diesen Befehl aus:

{% highlight sh %}
$ django-admin.py makemessages -l de
{% endhighlight %}

Damit wird die Sprachdatei für "Deutsch" angelegt. Diese findet man in einem Unterordner von `locale`.

Mit einem einfachen Texteditor oder einem `.po`-Editor kann man diese jetzt übersetzten. Die Datei zeigt immer den Namen der Datei und die Zeile der Zeichenkette an, in der folgenden Zeile kommt die Orginalversion (Englisch). An der freien Stelle (`""`) gibt man die entsprechende deutsche Übersetzung ein.

Wenn man damit fertig ist, führt man im Terminal diesen Befehl aus:

{% highlight sh %}
$ django-admin.py compilemessages
{% endhighlight %}

Dadurch wird die Datei in eine `.mo`-Datei umgewandelt.

## Einstellen der gewünschten Sprache

Ist in der `settings.py` unter `LANGUAGE_CODE` jetzt ein deutschsprachiger Code, wie z. B. `de-de` eingesetzt, nutzt Django die übersetzten Zeichenketten.

## Fazit

Alles kein großer Aufwand, also bitte lokalisiert eure Applikationen. Ihr Wert steigt dadurch beträchtlich.
