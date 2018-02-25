---
language: "de"
title: "Die Typographie meiner Website"
author: "Stefan Imhoff"
slug: "die-typographie-meiner-website"
date: 2014-06-19T10:30:00+02:00
og_image: "articles/elements-of-typographic-style.jpg"
description: "Über die Typographie meiner neuen Website: Skala, Schriftart, vertikaler Rhythmus, Schriftstärke, Schriftgröße und Satzbreite."
categories: ["design", "code", "website", "typography"]
---

Ich bin *typophil*. Das ist aber nichts für das man eine Selbsthilfegruppe besuchen müsste, denn es bedeutet einfach die Liebe oder Affektion zu Schrift. Für mich war daher von Anfang an klar, dass ich für meine neue Website zuerst mit der Typographie beginnen werde.

Normalerweise achten nur Designer auf Typographie, dem Rest aller Menschen ist das Ganze meistens relativ egal. Dabei beeinflusst Typographie jeden von uns, und zwar bewusst und unterbewusst.

Einfache Dinge wie Lesbarkeit oder Kontrast entscheiden darüber, ob die Botschaft eines Textes beim Leser überhaupt ankommt. Und da Worte eine unglaubliche Macht haben, wird Typographie gerne unterschätzt.

Die richtige Wahl von Schriftart, Schriftgröße, Gewicht, Satzspiegel, Satzbreite, Zeilendurchschuss, Sperrsatz oder vieler anderer Dinge wirken unbewusst auf die Leser und transportieren so die Aussage. Die richtige Typographie kann eine Botschaft unterstützen und verstärken, die falsche eine Aussage sogar bedeutungslos oder lächerlich werden lassen.

<figure class="image-figure">
  <img src="/assets/images/articles/elements-of-typographic-style.jpg" alt="The Elements of Typographic Style">
  <figcaption>
  <cite>The Elements of Typographic Style</cite> von Robert Bringhurst
  </figcaption>
</figure>


Ich fand Typographie schon immer faszinierend, doch erst nachdem ich das Buch <cite>[The Elements *of* Typographic Style](http://www.amazon.de/gp/product/0881792128?ie=UTF8&camp=1638&creative=19454&creativeASIN=0881792128&linkCode=as2&tag=kogakurede-21)</cite> von *Robert Bringhurst* gelesen hatte beschäftigte ich mich tiefer mit der Materie. Es gibt eine auf das Web abgestimmte Version seines Buches auf der Website [The Elements *of* Typographic Style Applied *to the* Web](http://webtypography.net/).

## Typographie
Gute Typographie bedeutet nicht bloß eine Schrift auszusuchen, sondern ist eine Kunstform, von deren Beherrschung ich noch weit entfernt bin.

Es gilt das richtige Seitenlayout zu wählen, die richtige Satzbreite, den richtigen Zeilendurchschuss, die richtige Kombination von Schriften, die richtige Skala, die richtige Schriftstärke und eine Vielzahl weiterer Richtlinien.

## Skala
Bereits vor einigen Jahren stolperte ich über zwei interessante Vorträge von Tim Brown über Typographie. Tim Brown arbeitet als *Type Manager* für [Adobe Typekit](https://typekit.com/), einer Plattform, die Webfont-Hosting anbietet. In seinen Vorträgen bietet er einen sehr interessanten Einblick in die Geschichte von Typographie und wie man gute Typographie erreicht.

Ich entschied mich mit der Auswahl einer Skala zu beginnen. Eine typographische Skala ist die Auswahl von harmonischen Proportionen, die danach auf Schriftgröße, Satzbreite und andere Teile angewendet wird.

Die bekannteste Proportion ist der *Goldene Schnitt*, der ein Verhältnis von `1:1,618` hat. Aber es gibt noch viele andere Proportionen, die ihren Ursprung in Geometrie, Musik, Natur oder Geschichte haben. Tim Brown hat sogar extra die Website [Modular Scale](http://www.modularscale.com/) erstellt, auf der sich eine solche Skala errechnen lässt.

Doch dies ist bei meinem Projekt gar nicht nötig gewesen, denn das Team-Sass bietet dafür eine [SASS-Erweiterung](https://github.com/modularscale/modularscale-sass) an.

Ich füge also zuerst das Gem zu meinem Gemfile hinzu:

<p class="code-info">Gemfile</p>

```ruby
source "https://rubygems.org"

group :development do
  gem 'modular-scale'
end
```


Dann lade ich das Compass-Plugin in der `config.rb`:

<p class="code-info">config.rb</p>

```ruby
# Require any additional compass plugins here.
require 'modular-scale'
```


Im AnschlusL muss nur noch das Modul von Compass geladen werden, bei mir in einem Partial:

<p class="code-info">helpers/_imports.scss</p>

```scss
@import "compass";
@import "compass/reset";
@import "modular-scale";
```


Ich habe mich entschlossen den *Goldenen Schnitt* zu verwenden und wähle dann die *ideale Textgröße* und eine *wichtige Zahl* aus:

```scss
$ms-base: 16px 18px;
$ms-ratio: $golden;
```

Jetzt lassen sich überall im SCSS die Helfer des Gems verwenden. Anstatt also jetzt irgendwo manuell `42px` (`41.887px`) oder `2.618em` zu schreiben, schreibe ich einfach `modular-scale(4)` um den vierten Wert der Skala zu wählen:

```scss
$font-scale-h1: modular-scale(4);
```

## Satzbreite
Natürlich hätte ich auch mit der Wahl der Satzbreite (Zeilenlänge) beginnen können, und dann das Grid passend auswählen. Doch kann man, jetzt wo eine Skala ausgewählt wurde, diese auch für die richtige Satzbreite verwenden.

Eine Responsive Website mit fluider Zeilenlänge ist natürlich keine optimale Vorraussetzung für eine feste Satzbreite. Es kursieren allerlei Werte im Internet, was denn jetzt eine optimale Zeilenlänge ist. Allerlei Binsenweisheiten wie nicht weniger als 45 Zeichen, maximal 85 Zeichen oder ähnliche Werte lassen sich dort finden. Davon ist aber nichts wissenschaftlich belegt, und man sollte eher in Worten als in Zeichen messen, da wir Wortbilder und keine Buchstaben sehen.

Ist die Zeile zu lang, ermüden die Augen und die Leser können den Anschluss an die nächste Zeile verlieren, ist die Zeile zu kurz strengt der ständige Abbruch des Lesefluss ebenso an. Es lässt sich nur eines sagen: *Die* richtige Zeilenlänge gibt es nicht, es kommt auf Schriftart, Schriftsatz und Zeilenabstand an.

Ich habe also versucht die optimale Zeilenlänge meiner Website bei ca. 66 Zeichen oder ca. 10 Worten zu ermitteln. Je nach Browsergröße schrumpft die Zeilenlänge dann, aber nur bis zu einem von mir ausgewählten Schwellenwert. Wenn dieser unterschritten wird, wähle ich eine andere Spaltenanzahl des Grids aus.

Ich stelle aber sicher, dass die Zeilenlänge nicht breiter wird, als von mir als optimal festgelegt, denn sobald auch der Kopf bewegt werden muss, ist die Zeile eindeutig zu lang.

## Vertikaler Rhythmus
Als nächstes legte ich den Zeilenabstand fest und entschied mich zusätzlich für die Technik des *vertikalen Rhythmus*. Dabei wird bei Schriften unterschiedlicher Größe mathematisch der Zeilenabstand so verändert, dass zwei unterschiedlich große Schriften dennoch optisch nebeneinander stehen würden.

Sehr praktisch ist, dass die relativ lästige Mathematik hinter der Formel (die meistens krumme Werte mit vielen Nachkommastellen ausspuckt) nicht selbst berechnet werden muss. Compass kommt bereits mit einem [Modul](http://compass-style.org/reference/compass/typography/vertical_rhythm/) dafür.

Es werden einige Variablen konfiguriert:

```scss
$base-font-size: modular-scale(1); // 18px
$base-line-height-count: 1.5;
$base-line-height: $base-font-size * $base-line-height-count; // 27px
$relative-font-sizing: true; // Verwendet em und nicht px
$round-to-nearest-half-line: true; // Verhindert zu große Lücken zwischen den Zeilen
```

Mit einem einfachen Aufruf dieses Mixins wird der vertikale Rhythmus aktiviert:

```scss
@include establish-baseline();
```

Um eine Schriftgröße anzupassen verwendet man jetzt keine absoluten Werte mehr, sondern ein Mixin. Dieses lässt sich natürlich auch in Kombination mit dem Mixin von *Modular Scale* verwenden:

```scss
h1 {
  @include adjust-font-size-to(modular-scale(6));
  @include trailer(1, modular-scale(6), margin);
}
```

Es werden auch nicht mehr direkt die Abstände über oder unter einem Element definiert, sondern Mixins verwendet, wie hier im Beispiel `trailer`.

## Schriftarten
Bei der Auswahl der Schrift hatte ich am meisten Probleme, da dies eine schwierige Aufgabe ist. Es gibt Unmengen von Schriften, aber die richtige für den gegebenen Anlass zu finden ist ein großer Aufwand. Erschwerend dazu gibt es im Internet weitaus mehr schlechte Schriften als gute Schriften.

Das Erstellen einer Schriftart ist ein immenser Aufwand und daher kostet eine Lizenz für einen Schriftschritt auch sehr viel Geld. Um aber Webtypographie zu verwenden, muss der Designer einer Schrift diese natürlich für das Einbetten in eine Website freigeben. Wunderschöne, kostenfreie Schriften gibt es z. B. bei [The League of Movable Type](https://www.theleagueofmoveabletype.com/).

Neben dem eigenen Hosten der Schrift, gibt es noch die Möglichkeit, die Schriftart von einem Webservice einzubinden. Es gibt z. B. kostenpflichtige Lösungen wie [Adobe Typekit](https://typekit.com/), bei denen ein Betrag gezahlt wird, weshalb sehr viele professionelle Schriftarten angeboten werden können. Wer nicht bereit ist regelmäßig für die Verwendung einer Schriftart zu bezahlen, kann trotzdem aus einer immer noch großen Anzahl von Schriften auswählen, die von netten Designern frei zur Verfügung gestellt wurden.

Ich schaute mich erst bei Typekit um, wählte dann aber zwei kostenlose Schriften aus, die ich über [Google Fonts](https://fonts.google.com) in meine Website einbinde:

- *Gentium Basic* für lange Fließtexte
- *Yanone Kaffeesatz* für Überschriften und für kürzere Texte, z. B. auf der Homepage

Gentium Basic ist eine sehr ansprechende Schrift mit Serifen und einem kursiven Schriftschnitt, während Yanone Kaffeesatz eine serifenlose Schrift ist. Beide Schriften in Kombination bieten ein harmonisches Bild.

## Schriftgröße
Als am 17. November 2006 Oliver Reichenstein im Blog von Information Architects über den [100% Easy-2-Read Standard](https://ia.net/topics/100e2r), war dieses Konzept noch völlig neu. Damals wurde die Schrift auf Websites durchgehend zu klein eingestellt. Der Browser-Standard war schon immer `16px`. Doch die meisten Seiten nutzen damals Werte zwischen 10 und 12 Pixeln.

Nach diesem Blog-Artikel fingen Designer an, die Grundschriftgröße zu erhöhen. Ich verwende für meine Fließtextschrift sogar 18px.

## Schriftstärke
Ich lade *Gentium Basic* in 400 und 700 und *Yanone Kaffeesatz* in 200 und 400. So kann ich fette Teile vom Fließtext in 700 setzen und den Rest in 400. Auf der Homepage setzte ich nur *Yanone Kaffeesatz* ein und benutze für hochauflösende Displays (Retina) eine Schriftstärke von 200, für alle anderen Displays 400.

## Sperrsatz, Unterschneidungen und Hurenkinder
Sperrsatz (Tracking), also das Einfügen von Abständen zwischen einzelnen Buchstaben,  verwende ich auf meiner Website nur an einigen wenigen Stellen und Unterschneiden (Kerning), das Reduzieren von Abständen zwischen einzelnen Buchstaben, gar nicht. Manuelles Kerning im Internet ist eine Aufgabe die einfach viel zu aufwändig ist. Es gibt zwar einige JavaScript-Lösungen, aber das ganze ist im Web einfach nicht den Aufwand oder die Ladegröße wert.

Um zu verhindern, dass ein einzelnes Wort alleine auf einer neuen Zeile steht, habe ich eine Weile ein JavaScript eingesetzt. Da dieses jQuery-Plugin aber in einigen Fällen nicht zuverlässig gearbeitet hat und ausserdem eine recht große Dateigröße hatte, habe ich dieses nach ein paar Wochen wieder entfernt.

## Sonstige typografische Formatierungen
Ich verwende noch einige weitere typografische Formatierungen, z. B. zentrierte Versblöcke, korrekte Zitatzeichen für Inline-Zitate je nach Landessprache und habe mir selbst ein Jekyll-Plugin geschrieben das dafür sorgt, dass Dinge wie i. d. R., z. B., 1000 € oder 5 + 3 mit unsichtbaren Leerzeichen versehen werden, damit alles als Block in eine neue Zeile rutscht und nicht Zeichen für Zeichen.

## Interessante Links zum Thema Typographie
Für alle die jetzt neugierig auf Typographie geworden sind, habe ich eine kleine Liste von empfehlenswerten Links zu diesem Thema zusammengestellt:

- [The Elements *of* Typographic Style Applied *to the* Web](http://webtypography.net/)
- [Thinking with Type](http://thinkingwithtype.com/)
- [Butterick’s Practical Typography](https://practicaltypography.com/)
- [type basics](http://www.typeworkshop.com/index.php?id1=type-basics)
- [Web Design is 95% Typography](https://ia.net/topics/the-web-is-all-about-typography-period)
- [Five simple steps to better typography](https://markboulton.co.uk/journal/five-simple-steps-to-better-typography)
- [Nice Web Type](http://nicewebtype.com/)
- [More MeaningFull Typography](https://alistapart.com/article/more-meaningful-typography)
- [A List Apart: Typographie](https://alistapart.com/topic/design/typography/)
- [Kerntype](http://type.method.ac/)
- [Modular Scale](http://www.modularscale.com/)
- [Helvetica – A Documentary Film by Gary Hustwit](https://www.hustwit.com/helvetica/)
