---
layout: post
title: "Duplikation ist in Ordnung"
date: 2013-11-27 12:45
comments: false
categories: Code
tags: [html, rubyonrails, erb, dry]
---

Immer wieder wird Entwicklern das Prinzip von DRY eingetrichtert, was im Prinzip besagt, dass duplizierter Code schlecht ist. Und das stimmt auch so für Code.

Doch wenn es um die View-Ebene geht, also um Templates und das Anzeigen von Content, Markup und Logik, ist dieses Prinzip angewendet ein schwerer Fehler. Hier gilt: **Lesbarkeit vor Duplikation**!

Nehmen wir ein sehr vereinfachte Beispiel von Code, das wirklich stark gekürzt ist, denn üblicherweise reihen sich solche Beispiele aneinander, werden ineinander verschachtelt und sind meterlang. Anfangs ist die Anforderung an ein Projekt klein, doch mit jeder neuen Anforderung wächst die Komplexität und damit mutieren auch diese Verschachtelungen immer weiter.

```erb
<li class="mail <% if @page_context.user.logged_in? && (!current_user.can_add_as_contact?(page.id) && !is_preview?) %>selected<% end %>">
…
</li>
```

Hier soll einem Button so wie es aussieht eine weitere Klasse hinzugefügt werden, aber nur, wenn der Benutzer eingeloggt ist, die Aktion ausführen darf und es sich nicht um eine Preview handelt.

Das Mischen von Logik und Template ist schon schlimm genug, aber solche Wortketten, die kaum noch gelesen werden können sind schlimm und sollten vermieden werden.

Hier eine bessere Variante, die zwar Duplikation enthält, aber weitaus lesbarer ist:

```erb
<% if @page_context.user.logged_in? && (!current_user.can_add_as_contact?(page.id) && !is_preview?) %>
<li class="mail selected">
<% else %>
<li class="mail">
<% end %>
…
</li>
```

Doch dieser Code kann noch weiter verbessert werden, wenn diese ominöse Kombination an Anforderungen in einen Helper ausgelagert wird:

```erb
<% if user_logged_in_and_cannot_add_as_contact_and_not_preview? %>
<li class="mail selected">
<% else %>
<li class="mail">
<% end %>
…
</li>
```

Und schon ist das Markup lesbar, kann leicht geändert werden, bleibt in der Zeilenlänge weit unter 80 Zeichen, kann also leicht gescannt und verstanden werden.

## Fazit

Auf View/Template-Ebene ist Duplikation nicht schlimm und sollte immer vorgezogen werden, wenn dadurch die Lesbarkeit verbessert wird. Denn lesbares Markup kann leicht geändert, gewartet und erweitert werden.
