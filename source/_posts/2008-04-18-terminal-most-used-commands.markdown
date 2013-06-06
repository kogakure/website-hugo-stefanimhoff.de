---
layout: post
title: "Zeige deine am häufigsten benutzen Terminal-Befehle"
date: 2008-04-18 07:00
description: "Welches sind die eigenen, am meisten verwendeten Terminal-Befehle?"
categories: [Empfehlung]
tags: [terminal, command]
---

Weil es grad alle machen: Ich weiß, was du letztens ins Terminal getippt hast.

{% codeblock lang:sh %}
history | awk '{print $2}' | sort | uniq -c | sort -rn | head -10

172   cd
104   ll
 61   svn
 41   git
 22   gst
 21   rm
 11   gca
 10   ssh
 10   gba
  9   gp
{% endcodeblock %}

### Legende

* gst (git status)
* gca (git commit -a)
* gba (git branch -a)
* gp (git push)

## Update

Beim reviewen des Artikels habe ich mich spontan entschlossen, das ganze noch einmal heute (Mai 2013) zu machen, um zu schauen, was sich verändert hat:

{% codeblock lang:sh %}
history | awk '{print $2}' | sort | uniq -c | sort -rn | head -10

1113 git
 873 cd
 809 gst
 618 rake
 448 brew
 305 ll
 271 gp
 218 npm
 216 sudo
 183 bundle
{% endcodeblock %}

