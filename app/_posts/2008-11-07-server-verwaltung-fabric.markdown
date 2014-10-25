---
layout: post
language: "de"
title: "Server-Verwaltung mit Fabric"
author: "Stefan Imhoff"
date: 2008-11-07 12:00
description: "Einführung in Serververwaltung mit Fabric."
categories:
- Server
- Code
tags:
- python
- deployment
- server
- fabric
---

Vor einiger Zeit habe ich meinen Workflow mit Capistrano beschrieben, und wie man damit einen Server fernwarten kann. Kürzlich bin ich auf das in Python geschriebene, viel schlankere Tool <cite>Fabric</cite> aufmerksam gemacht worden.

Capistrano ist ein sehr mächtiges Tool, von dem ich für meine Projekte nicht mal die Grundlagen benötige. Daher bin ich jetzt auf [Fabric](http://www.nongnu.org/fab/) umgestiegen, was für normale Zwecke viel optimaler zu bedienen und schneller einzurichten ist.

Fabric ist nicht nur für Django-/Python-Arbeitsweise, sondern für jede Server-Fernwartung geeignet. Ich selbst verwende es z. B. um meine wöchentlichen Server-Backups durchzuführen, um mit Django und Git zu arbeiten, um Kunden-Repositorys mit Subversion auf dem Server meiner Arbeitsstelle anzulegen und um lokale Skripte auszuführen.
Der gemessene Aufwand für einen kompletten Prozess hat sich drastig veringert.

Fabric erledigt für mich im Bruchteil weniger Sekunden alle lästigen Arbeiten: Subversion-Repository einrichten, Projektstruktur anlegen und Templates importieren, den `trunk` mit `git svn` wieder in meinen Arbeitsordner auschecken. Was vorher nicht unter 7 Minuten dauerte dauert jetzt geschätzte 7 Sekunden.

Um Fabric nutzen zu können benötigt man nur Python 2.5 und einige weitere Module auf dem eigenen Computer. Als Anmerkung sei noch gesagt, dass Fabric nichts auf dem Server installieren muss, und daher auch bedenkenlos auf der Arbeitsstelle eingesetzt werden kann, wo man ja überlicherweise nicht mit den Servern machen kann, was man will.

## Fabfile

Im Ordner eines Projektes legt man eine Textdatei mit Namen `fabfile` oder `fabfile.py` an. Der Inhalt ist in Python geschrieben und schnell erklärt:

Es gibt einen `set()`-Bereich, in dem man Variablen definiert, die dann später in den Funktionen benutzt werden, und aus Python-Funktionen, die eine bestimmte Aufgabe ausführen.

Es gibt lediglich vier Fabric-Befehle:

* **local()** Führt lokale Terminalbefehle auf dem Computer aus
* **put()** Kopiert Dateien auf den Server
* **run()** Führt entfernte Befehle auf dem Server mit normalen Rechten aus
* **sudo()** Führt entfernte Befehle auf dem Server mit Superuserrechten aus (wenn man die Rechte hat)

Variablen deklariert man einfach so:

{% figure code-figure "Fabfile" %}
{% highlight python linenos %}
set(
    project = 'domain.de',
    project_type = 'websites',
    svn_repos = '/var/svn/repos/online',
    svn_url = 'svn://test1clu.admin/online',
    svn_passwd = '/var/svn/repos/online/passwd',
    working_dir = '$HOME/Projekte/Kunden',
    fab_hosts = ['test1clu.admin'],
    fab_user = 'username',
)
{% endhighlight %}
{% endfigure %}

Lediglich `fab_hosts` und `fab_user` werden in diesem Beispiel von Fabric geliefert, die anderen sind frei gewählt.

Später kann man dann auf die Variable mit der Syntax `$(varname)` zugreifen. Hier mein Beispielskript, dass den oben beschriebenen SVN-Workflow automatisiert:

{% figure code-figure "Fabfile" %}
{% highlight python linenos %}
def create():
    """
    Erzeugt ein leeres Subversion-Repository auf dem SVN-Server,
    importiert die Standardstruktur und checkt das ganze im Arbeitsverzeichnis
    wieder aus.
    """
    run(
        'cd $(svn_repos)/$(project_type)/; \
          mkdir $(project); \
            cd $(project); \
            svnadmin create --fs-type fsfs .; \
            chmod -R 755 *; \
            cd conf; \
            echo "[general]" > svnserve.conf; \
            echo "anon-access = read" >> svnserve.conf; \
            echo "auth-access = write" >> svnserve.conf; \
            echo "password-db = $(svn_passwd)" >> svnserve.conf; \
            echo "realm = $(project)" >> svnserve.conf;'
      )
      local(
          'mkdir import; \
            cd import; \
            mkdir trunk; \
            mkdir tags; \
            mkdir branches; \
            mkdir trunk/Konzept; \
            mkdir trunk/Layout; \
            mkdir trunk/Preview; \
            mkdir trunk/Screenshots; \
            mkdir trunk/Vorlagen; \
            mkdir trunk/Vorlagen/Fotos; \
            mkdir trunk/Vorlagen/Grafiken; \
            mkdir trunk/Vorlagen/Logos; \
            mkdir trunk/Vorlagen/Texte; \
            mkdir trunk/Website;'
      )
      local(
          'cd import; \
            svn import . $(svn_url)/$(project_type)/$(project) -m "Initial import"; \
            cd ..; \
            rm -rf import/;'
      )
      local(
          'cd $(working_dir)/; \
            git svn clone -s $(svn_url)/$(project_type)/$(project)'
      )
      local(
          'cd $(working_dir)/$(project); \
            mkdir Konzept; \
            mkdir Layout; \
            mkdir Preview; \
            mkdir Screenshots; \
            mkdir Vorlagen; \
            mkdir Vorlagen/Fotos; \
            mkdir Vorlagen/Grafiken; \
            mkdir Vorlagen/Logos; \
            mkdir Vorlagen/Texte; \
            mkdir Website;'
      )
{% endhighlight %}
{% endfigure %}


Um ein neues Repository anzulegen, muss ich einfach nur noch in den Einstellungen einige Pfade anpassen (meistens nur einen) und dann auf dem Terminal den Befehl `fab create` ausführen.

Es ist möglich in einer Datei unzählige Funktionen anzulegen, die verschiedene Aufgaben, wie z. B. `Server starten`, `Server stoppen`, `Datenbankdump erstellen`, `tar.gz erstellen` o. ä. erledigen. Eine Funktion kann auch andere Funktionen aufrufen.

So erledigt mein Backup-Skript eine Menge Aufgaben:

Es erzeugt Datenbank-Dumps aller meiner Tabellen, sowohl für MySQL, als auch für PostgreSQL, packt diese Dump-Dateien, erzeugt dann File-Backups verschiedener Orte auf dem Server, packt diese auch und kopiert sie (natürlich mit Datum im Dateinamen) auf meine lokale Festplatte und dort an die richtigen Stellen.

Die Arbeit, die man sich dadurch sparen kann, macht das Lesen der sehr kurzen und [verständlichen Dokumentation](http://www.nongnu.org/fab/user_guide.html)  locker wieder wett. Und auch die Installation ist ein leichtes, man kann entweder `easy_install` benutzen oder das simple `python setup.py install`. Alle nötigen Module werden automatisch heruntergeladen und installiert.

Fabric ist nicht nur für jeden der einen SSH-Zugang und Server/VHost sein eigen nennt eine echte Empfehlung, sondern auch für alle die lokal Prozesse automatisieren wollen, aber eben nicht zeitgesteuert (Cronjob) oder als Shell-Skript.
