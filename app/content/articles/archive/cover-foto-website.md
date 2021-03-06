---
draft: true
language: de
title: "Das Cover-Foto auf meiner Website"
author: Stefan Imhoff
slug: cover-foto-website
date: 2014-05-30T10:00:00+02:00
og: "assets/images/articles/2014/cover-foto-website/josefina-bokeh.jpg"
description: "Über die Wahl meines Fotostils bei meiner neuen Website und wie ich herausfand, dass die Technik eines unscharfen Hintergrunds in der Fachwelt 'Bokeh' genannt wird. Außerdem zeige ich, wie ich mein Foto auf der Website technisch implementiere."
categories: ["design", "website"]
---

Ein prägnanter Teil meiner neuen Website ist das auffällige Foto im Kopfbereich. Das aktuelle Motiv zeigt einen Bonsai.

Das die Wahl auf dieses Motiv gefallen ist, hat mehr mit dem Zufall zu tun, als mit Absicht. Ursprünglich hatte ich noch kein Motiv ausgewählt und daher ein Wallpaper von einem Bonsai verwendet, dass sich auf meinem Rechner befand.

## Ersatzfoto

Eigentlich wollte ich auch mit diesem Motiv die neue Website starten, aber es handelte sich um ein Foto ohne freie Lizenz. Da der Rechteinhaber aber überhaupt nicht auf meine Anfrage reagierte, musste ich ein anderes Foto auswählen.

Als ich auf der Suche nach einem Ersatzfoto war, wollte ich zuerst einfach nur ein _anderes_ Bonsai-Foto, das aber unter einer Lizenz für Creative Commons veröffentlicht sein sollte. Doch dann fragte ich mich, was mir eigentlich am ursprünglichen Foto so gefallen hatte.

## Bokeh

Im Prinzip wollte ich ein Foto, dass ein natürliches Objekt zeigt, am besten irgendwie mit Japan oder der japanischen Kultur in Verbindung stehend und der Rest des Bildes sollte eher unscharf sein.

Jetzt musste ich nur noch herausfinden, wie denn der Fachbegriff für so ein Foto war. _Objekt-im-Vordergrund-scharf-und-Hintergrund-unscharf_ war kein guter Suchbegriff.

Doch es gibt tatsächlich einen Begriff für dieses Eigenschaft: [Bokeh](https://de.wikipedia.org/wiki/Bokeh).

<figure class="image-figure">
  <img src="/assets/images/articles/2014/cover-foto-website/josefina-bokeh.jpg" alt="Josefina with Bokeh">
  <figcaption>
  Carlos Luis Camacho, <a href="https://www.flickr.com/photos/paseodelsur/51805888/" target="_blank" rel="nofollow" rel="noopener">Josefina with Bokeh</a>
  </figcaption>
</figure>

Bokeh ist vom japanischen Wort _boke_ (暈け oder ボケ) abgeleitet, und bedeutet _Unschärfe_ oder _Nebel_. Es gibt eine ganze Fangemeinde von Liebhabern und eine recht genaue Definitionen, was eine gute Bokeh ausmacht. Fotografen diskutieren hitzig darüber mit welchem Objektiv denn das bessere Bokeh gemacht werden könne.

## Design-Varianten

Jetzt hatte ich also eine Idee und klare Definition, was für Fotos ich in Zukunft verwenden wollte. Dank Bilddatenbanken wie Flickr, wo auch gezielt nach Bildern mit Lizenzen für [Creative Commons](https://www.flickr.com/creativecommons/) gesucht werden kann, fand ich auch einige schöne Motive für zukünftige Designs.

Da meine Website auch ermöglicht, mit einigen wenigen Zeilen Code die Farben und das Foto auszutauschen und eine Variante zu erstellen, bietet sich dieses gerade zu an, um bestimmte Themen-Designs zu erstellen (Jahreszeitenwechsel, besondere Ereignisse oder ähnliches).

## Technische Implementierung

Das Praktische an dem Foto ist, dass es ohne Probleme im Anschnitt verwendet werden kann, solange sichergestellt ist, dass das Hauptobjekt immer gut zu sehen ist. Da die genauen Ausmaße sich bei einem Responsive Design ändern können, ist es praktisch das Foto als Hintergrundbild mit der Skalierung `background-size: cover` zu verwenden:

```scss
.header {
  background-color: $header-background;
  background-image: url($header-background-url);
  background-position: left center;
  background-size: cover;
}
```

Zuerst setze ich eine Hintergrundfarbe als Ersatz, die so lange angezeigt wird, bis das Foto vollständig geladen ist. Dann wird das Foto als Hintergrund-Bild mit `background-image` gesetzt. Ich positioniere das Foto so, dass der interessante Teil auf jeden Fall zu sehen ist, auf der x-Koordinate links ausgerichtet und auf der y-Koordinate zentriert. Mit `cover` wird festgelegt, dass das Foto so in der Größe verändert wird, dass beide Dimensionen größer oder gleich zur entsprechenden Größe des Containers sind. So wird sichergestellt, dass niemals der Hintergrund zu sehen ist, sondern das Foto, sofern es nicht in den Container passt, automatisch angeschnitten wird.

Es gibt auch die Eigenschaft `contain`, mit der sich ein Foto so im Container positionieren lässt, dass es immer vollständig zu sehen ist und nicht angeschnitten wird.

Wenn sich der Viewport auf verschiedenen Geräten in der Größe verändert, passe ich einfach den Innenabstand (`padding`) des Containers an und verändere damit die Container-Größe. Das Foto wird automatisch beschnitten, und zwar rechts und oben/unten.

Es ist natürlich auch möglich, die `background-position` bei einem Media-Query-Breakpoint zu verändern, wenn der gewünschte Teil des Fotos nicht mehr gut zu sehen ist.
