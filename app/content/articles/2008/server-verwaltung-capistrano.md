---
language: "de"
title: "Server-Verwaltung mit Capistrano"
description: "Einführung in Serververwaltung mit Capistrano: Wie Capistrano installiert und eingesetzt wird und man damit ein Web-Projekt deployt."
author: "Stefan Imhoff"
slug: "server-verwaltung-capistrano"
date: 2008-05-01T18:18:00+02:00
categories: ["server", "code"]
---

Wer einen Webserver oder VirtualHost sein eigen nennt, sollte sich unbedingt Capistrano ansehen, ein Programm, das es ermöglicht diverse Aufgaben zu automatisieren.

[Capistrano](http://capistranorb.com/) ist ein sehr mächtiges [Ruby](https://www.ruby-lang.org/de/)-Programm, das dafür gedacht ist komplexe Aufgaben des Deployment zu übernehmen. Dabei können ebenso mehrere Server (Fileserver, Datenbankserver, Applikationsserver), wie auch Versionskontrollsysteme ([Subversion](http://subversion.tigris.org/), [Git](https://git-scm.com/), [Mercurial](https://www.mercurial-scm.org/), …) einbezogen werden.

Die Fähigkeiten von Capistrano übersteigen meine Anspüche bei weitem, da ich automatische Versionierung, Tests oder automatisches Symlinken eher nicht brauche.

Trotzdem ist das Programm fantastisch und nach kurzer Einführung in die Bedienung unersetzlich.

## Eine übliche Arbeitsweise mit Webapplikationen und Servern

Die übliche Arbeitsweise einer modernen Webentwicklung beinhaltet heute Versionskontrolle.

Man hat auf einem Server ein Repository seines Projektes liegen, von dem aus man sowohl auf seinen lokalen Computer, als auch in den Webroot eine Kopie auscheckt (z. B. mit `git clone` oder `svn co`).

Danach arbeitet man lokal an seinen Änderungen, erzeugt *branches* und testet seine Anwendung. Wenn man eine Änderung auf den Live-Server bringen möchte, muss man zuerst die Änderungen ins Repository einspielen (z. B. mit `git push`). Danach checkt man die Änderungen auf seinem Webserver aus (z. B. mit `git pull`).

Die meisten Webapplikationen benötigen danach Arbeiten am Server, wie das Neustarten von Prozessen, Servern oder Datenbanken. Alles in allem ist der Arbeitsprozess zwar immer noch unendlich komfortabler als mit FTP rumzuhantieren, aber auf Dauer kann das ewige einloggen per SSH auf dem Webserver schon nerven.

Und genau da setzt Capistrano an.

## Installation

Um Capistrano zu installieren muss man zuerst [Ruby](https://www.ruby-lang.org/de/) und [RubyGems](https://rubygems.org/) auf seinem lokalen Computer installieren. Capistrano benötigt keine Installationen von Software auf den Servern.

Zur Installation gibt man einfach ins Terminal folgenden Befehl ein:

```bash
$ sudo gem install capistrano
```

## Einrichten von Capistrano

Nach einiger Zeit sollte das Gem erfolgreich installiert sein. Danach wechselt man in das Verzeichnis seines lokalen Projektes.

Dort erzeugt man die nötigen Dateien mit dem Befehl:

```bash
$ capify .
```

Capistrano legt im Hauptverzeichnis des Projektes eine Datei `Capfile` an. Wenn es sich um ein Ruby on Rails-Projekt handelt oder man manuell vorher einen `config`-Ordner angelegt hat, wird auch noch eine `deploy.rb` erzeugt.

## Benutzung von Capistrano

Capistrano kommt schon mit einer Vielzahl von Befehlen und Subbefehlen für die komplexesten Prozesse. Diese kann man sich mit dem Befehl:

```bash
$ cap -T
```

anzeigen lassen. Für meine Zwecke sind diese Befehle aber viel zu übertrieben, daher habe ich mir kurzerhand einige eigene Befehle geschrieben.

Die Befehle werden in der Programmiersprache [Ruby](https://www.ruby-lang.org/de/) geschrieben und können in den Dateien `Capfile`, `deploy.rb` oder in Plugin-Ordnern liegen.

Der Einfachheit halber stehen alle meine Befehle direkt in der `Capfile`-Datei, zumal ich Django-Projekte habe, und daher eine andere Ordnerstruktur als bei <cite>Ruby on Rails</cite> vorliegt.

## Beispiel-Datei

Ich habe in meiner Datei (`Capfile`) folgende Funktionen erstellt, die diverse Aufgaben für mich vereinfachen, wie z. B. das Neustarten des Webservers,  Caching-Servers oder das Aktualisieren eines Django-Projektes aus dem Repository.

{{% figure class="code-figure" caption="Capfile" %}}
```ruby
set :hosts, "user@server.com"
set :server_path, "/home/user/apps/apache2/bin/"
set :project_path, "/home/user/apps/django/projekt/"
set :memcached_ip, "127.0.0.1"
set :memcached_port, "1234"
set :memcached_size, "20" # in MB

desc "Projekt aus Git-Repository updaten, danach Server neustarten"
task :deploy, :hosts => "#{hosts}" do
  run "cd #{project_path}; git pull;"
end
after "deploy", "restart_server"

desc "Apache stoppen"
task :stop_server, :hosts => "#{hosts}" do
  run "#{server_path}stop;"
end

desc "Apache starten"
task :start_server, :hosts => "#{hosts}" do
  run "#{server_path}start;"
end

desc "Apache neustarten"
task :restart_server, :hosts => "#{hosts}" do
  run "#{server_path}stop; #{server_path}start"
end

desc "Memcached neustarten"
task :restart_memcached, :hosts => "#{hosts}" do
  run "kill $(pgrep -u $LOGNAME memcached); /usr/local/bin/memcached -d -l #{memcached_ip} -m #{memcached_size} -p #{memcached_port}"
end
after "restart_memcached", "restart_server"
```
{{% /figure %}}

Variablen können beliebig zugewiesen werden (mit `set :variable, "Wert"`) und dann später mit `#{variable}` wieder verwendet werden. Es sind auch alle anderen Befehle von Ruby bei Capistrano möglich, wie Schleifen, Abfragen, etc.

Um z. B. jetzt mein Projekt auf dem Server mit der aktuellen Version aus dem Git-Repository upzudaten und danach den Server neuzustarten, brauche ich nur den Befehl:

```bash
$ cap deploy
```

im Terminal eingeben, der zuerst die Änderungen mit `git pull` auscheckt und im Anschluss eine andere Funktion aufruft, die den Apache-Server beendet und danach neustartet.
