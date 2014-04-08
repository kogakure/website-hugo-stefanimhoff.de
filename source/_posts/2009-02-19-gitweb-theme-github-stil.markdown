---
layout: post
title: "Gitweb-Theme im GitHub-Stil"
author: "Stefan Imhoff"
date: 2009-02-19 20:00
description: "Ein Theme für GitWeb zum Download, damit es GitHub ähnlicher sieht und nicht mehr so hässlich ist."
categories:
- Download
tags:
- gitweb
- git
- theme
- customize
- download
- github
---

Das Standard-Theme von Gitweb ist wirklich nicht sehr ansprechend und scheinbar nur auf Funktionalität ausgelegt. Daher habe ich eine Alternative erstellt, die sich von der Gestaltung an GitHub anlehnt.

Ich konnte die Oberfläche von Gitweb nicht mehr sehen. Daher habe ich mir einen Theme erstellt, der von der Gestaltung an GitHub erinnert.

Die genaue Anleitung zur Installation befindet sich mit im Paket auf GitHub.

## English

I couldn’t see the interface of Gitweb any longer. That’s why I created a theme which is strongly influenced by GitHub.

Detailed instructions for installations are included in the package on GitHub.

## Download

{% download https://github.com/kogakure/gitweb-theme/ "Gitweb Theme on GitHub" %}

## Screenshots

{% figure border "Projektübersicht/Project view" %}
<img src="{{ 'artikel/gitweb-theme-projects.png' | asset_path }}" alt="Projektübersicht" />
{% endfigure %}

{% figure border "Zusammenfassung/Summary" %}
<img src="{{ 'artikel/gitweb-theme-summary.png' | asset_path }}" alt="Zusammenfassung" />
{% endfigure %}

{% figure border "Commit" %}
<img src="{{ 'artikel/gitweb-theme-commit.png' | asset_path }}" alt="Commit" />
{% endfigure %}

{% figure border "Commit-DIFF" %}
<img src="{{ 'artikel/gitweb-theme-commitdiff.png' | asset_path }}" alt="Commit-DIFF" />
{% endfigure %}

{% figure border "Historie/Log" %}
<img src="{{ 'artikel/gitweb-theme-log.png' | asset_path }}" alt="Historie" />
{% endfigure %}

{% figure border "Dateiansicht/Tree view" %}
<img src="{{ 'artikel/gitweb-theme-tree.png' | asset_path }}" alt="Dateiansicht" />
{% endfigure %}
