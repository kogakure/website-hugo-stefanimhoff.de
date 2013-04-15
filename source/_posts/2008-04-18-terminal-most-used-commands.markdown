---
layout: post
title: "Zeige deine am häufigsten benutzen Terminal-Befehle"
date: 2008-04-18 07:00
description: 
categories:
tags: 
- terminal
- command
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
