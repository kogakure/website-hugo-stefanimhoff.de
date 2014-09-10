# kogakure.de

Dies ist der Relaunch von kogkure.de mit Jekyll & Octopress.

## Entwicklung

### Entwicklungsserver starten

Um den lokalen Entwicklungsserver zu starten wird Grunt verwendet. Grunt sorgt dafür, dass alle nötigen Process wie Jekyll, Compass, das Kopieren von Dateien und Livereload gestartet werden.

```sh
grunt serve
```

### Produktionsseite bauen

Um eine Version für die Produktionsumgebung zu erzeugen wird der Standard-Task von Grunt verwendet:

```sh
grunt
```

Dieser Task führt `grunt check`, `grunt test` und `grunt build` aus, die auch einzeln gestartet werden können. Der Task führt auch die Komprimierung von Stylesheets, JavaScript und Bildern durch und versieht alle Dateien mit einem Hash.

Um zu prüfen, ob die Produktionsseite korrekt läuft kann der Server mit einem speziellen Parameter gestartet werden:

```sh
grunt serve:dist
```

### Prüfen

Um zu prüfen, ob Jekyll, das JavaScript und die Stylesheets fehlerfrei sind, kann dieser Task ausgeführt werden:

```sh
grunt check
```

### Deployment

Um die fertige Website auf den Server zu spielen, gibt es zwei Tasks. Der erste Task lädt nur den aktuellen Stand der Distrubution mit rsync auf den Server:

```sh
grunt upload
```
Der zweite Task führt alle Schritte des build-Tasks und den Upload aus:

```sh
grunt deploy
```

Dieser Task ist Teil des Produktions-Tasks.

## Artikel und Seiten

### Neuen Artikel erzeugen

    $ bundle exec octopress new post "Mein Titel"

Das erzeugt eine neue Datei in `_posts/YYYY-MM-DD-mein-titel.markdown` mit dem folgenden YAML front-matter hinzugefügt:

```yaml
layout: post
title: "Mein Titel"
date: YYYY-MM-DDTHH:MM:SS-00:00
```

Dies sind weitere Optionen, die hinzugefügt werden können:

| Option               | Beschreibung                            |
|:---------------------|:----------------------------------------|
| `--template PATH`    | Use a template from PATH                |
| `--date DATE`        | The date for the post. Should be parseable by [Time#parse](http://ruby-doc.org/stdlib-2.1.0/libdoc/time/rdoc/Time.html#method-i-parse) |
| `--slug SLUG`        | Slug for the new post.                  |
| `--dir DIR`          | Create post at _posts/DIR/.             |
| `--force`            | Overwrite existing file.                |


### Neue Seite erzeugen

```sh
$ bundle exec octopress new page some-page           # ./some-page.html
$ bundle exec octopress new page docs/               # ./docs/index.html
$ bundle exec octopress new page about.html          # ./about.html
```

| Option               | Beschreibung                            |
|:---------------------|:----------------------------------------|
| `--template PATH`    | Use a template from <path>              |
| `--title TITLE`      | The title of the new page               |
| `--date DATE`        | The date for the page. Should be parseable by [Time#parse](http://ruby-doc.org/stdlib-2.1.0/libdoc/time/rdoc/Time.html#method-i-parse) |
| `--force`            | Overwrite existing file.                |


### Neuer Entwurf

```sh
$ bundle exec octopress new draft "Mein Entwurf"
```

Dies erzeugt eine neue Datei im Verzeichnis `_drafts`.

| Option             | Description                               |
|:-------------------|:------------------------------------------|
| `--template PATH`    | Use a template from <path>              |
| `--date DATE`      | The date for the draft. Should be parseable by [Time#parse](http://ruby-doc.org/stdlib-2.1.0/libdoc/time/rdoc/Time.html#method-i-parse) (defaults to Time.now) |
| `--slug SLUG`      | The slug for the new post.                |
| `--force`          | Overwrite exsiting file.                  |

### Entwurf veröffnetlichen

```sh
$ bundle exec octopress publish _drafts/mein-entwurf.markdown
```

Dies bewegt den Entwurf in das Verzeichnis `_posts` und benennt die Datei mit aktuellem Datum um.

| Option             | Beschreibung                              |
|:-------------------|:------------------------------------------|
| `--date DATE`      | The date for the post. Should be parseable by [Time#parse](http://ruby-doc.org/stdlib-2.1.0/libdoc/time/rdoc/Time.html#method-i-parse) |
| `--slug SLUG`      | Change the slug for the new post.         |
| `--dir DIR`        | Create post at _posts/DIR/.               |
| `--force`          | Overwrite existing file.                  |

When publishing a draft, the new post will use the draft's date. Pass the option `--date now` to the publish command to set the new post date from your system clock. As usual, you can pass any compatible date string as well.

### Templates

Octopress post und page Templates sehen so aus:

```yaml
---
layout: {{ layout }}
title: {{ title }}
---

```

Die YAML-Variablen werden mit dem richtigen inhalt ersetzt wenn eine Seite oder ein Artikel erzeugt wird. Um das Template zu bearbeiten erzeuge oder bearbeite die Datei `_templates/post`. Es ist möglich zusätzliche Meta-Daten hinzuzufügen oder ein eigenes Template beim Erzeugen einer Seite oder eines Artikel zu verwenden:

```sh
$ bundle exec octopress new post --template _templates/linkpost
```


