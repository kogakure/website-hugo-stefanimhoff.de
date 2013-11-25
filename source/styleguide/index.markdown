---
layout: page
title: "Styleguide"
footer: false
---

Dieses Dokument ist der Styleguide für diese Website. Dies ist der erste Absatz des Artikels und als dieser wird er anders gestaltet. Der weitere Text hier ist nur geschrieben worden, damit man sehen kann, wie der erste Absatz in weitere Zeilen umbricht.

Überschriften
-------------

Die Hauptüberschrift dieses Styleguides in eine `h1`. Jede Überschrift kann auch Links enthalten.

Die 2. Überschrift oben ist eine `h2`, die benutzt werden kann um Hauptsektionen auf Seitenebene zu markieren. Davon kann mehr als eine Überschrift pro Seite verwendet werden.

```html
## Überschrift der zweiten Ordnung
```

### Überschrift der dritten Ordnung
Die Überschrift oben ist eine `h3`, die benutzt werden kann für jede Überschrift die in der Hierarchie unter der `h2` ist.

```html
### Überschrift der dritten Ordnung
```

#### Überschrift der vierten Ordnung
Die Überschrift oben ist eine `h4`, die benutzt werden kann für jede Überschrift die in der Hierarchie unter der `h3` ist.

```html
#### Überschrift der vierten Ordnung
```
##### Überschrift der fünften Ordnung
Die Überschrift oben ist eine `h5`, die benutzt werden kann für jede Überschrift die in der Hierarchie unter der `h4` ist.

```html
##### Überschrift der fünften Ordnung
```

###### Überschrift der sechsten Ordnung
Die Überschrift oben ist eine `h6`, die benutzt werden kann für jede Überschrift die in der Hierarchie unter der `h5` ist.

```html
###### Überschrift der sechsten Ordnung
```


Absätze
-------

Alle Absätze werden in `p` gewrappt. Zusätzlich können `p` auch in `blockquote` gewrappt werden.

Absätze sind in der Textgestaltung einen aus einem oder mehreren Sätzen bestehenden Abschnitt eines fortlaufenden Textes. Ein Absatz ist ein Sinnzusammenhang oder ein eigenes kleines Thema. Ist dieser Gedanke ausgeführt, folgt ein neuer Absatz.

```html
Dies ist ein Absatz.

Dies ist ein zweiter Absatz.
```

Sektionen-Trenner
-----------------

Das `hr` kennzeichnet einen thematischen Bruch auf Absatzebene, z. B. einen Szenenwechel in einer Geschichte oder einen Übergang zu einem anderen Thema. Der folgende Auszug aus <cite>Pandora’s Star</cite> von Peter F. Hamilton zeight zwei Absätze, die einen Szenenwechel zeigen:

Dudley was ninety-two, in his second life, and fast approaching time for another rejuvenation. Despite his body having the physical age of a standard fifty-year-old, the prospect of a long degrading campaign within academia was one he regarded with dread. For a supposedly advanced civilization, the Intersolar Commonwearth could be appallingly backward at times, not to mention cruel.

<i>Maybe it won’t be that bad</i>, he told himself. The lie was comforting enough to get him through the rest of the night’s shift.

---------------------------------------

The Carlton AllLander drove Dudley home just after dawn. Like the astronomer, the vehicle was old and worn, but perfectly capable of doing its job. It had a cheap diesel engine, common enough on a semi-frontier world like Gralmond, although its drive array was a thoroughly modern photoneural processor. With its high suspension and deep-tread tyres it could plough along the dirt track to the observatory in all weather and seasons, including the metre-deep snow of Gralmond’s winters.

```html
Dudley was ninety-two, in his second life …

---------------------------------------

The Carlton AllLander drove Dudley home just after dawn. …
```


Preformatierter Text
--------------------

Das `pre` wird verwendet, um preformatierten Text anzuzeigen, also Text, der genau so angezeigt werden soll, wie er geschrieben war, also inklusive eventueller mehrfacher Leerzeichen, Einrückungen oder ASCII-Zeichen.

<pre>
! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~
</pre>

```html
<pre>
Dies    soll genau  S O  aussehen.
</pre>
```


Zitate
------

### Blockzitat

Die `blockquote` repräsentiert einen Abschnitt, der aus einer anderen Quelle zitiert.

Zusätzlich dazu kann auch das Element `cite` verwendet werden, um ein Werk zu marieren aus dem zitiert wurde.

#### Einfaches Blockzitat

{% blockquote %}
Dies ist ein Zitat.
{% endblockquote %}

```html
{% raw %}{% blockquote %}
Dies ist ein Zitat.
{% endblockquote %}{% endraw %}
```

#### Zitat aus einem gedruckten Werk

{% blockquote J.R.R. Tolkien, Der Herr der Ringe %}
Drei Ringe den Elben, hoch im Licht. Sieben den Zwergen in ihren Hallen aus Stein. Den Sterblichen, ewig dem Tode verfalln: Neun. Ein Ring sie zu knechten, sie alle zu finden, ins Dunkel zu treiben und ewig zu binden. Im Lande Mordor, wo die Schatten drohn.
{% endblockquote %}

{% blockquote Douglas Adams, The Hichhikers Guide to the Galaxy %}
Flying is learning how to throw yourself at the ground and miss.
{% endblockquote %}

```html
{% raw %}{% blockquote Douglas Adams, The Hichhikers Guide to the Galaxy %}
…
{% endblockquote %}{% endraw %}
```

#### Zitat von Twitter

{% blockquote @allanbranch https://twitter.com/allanbranch/status/90766146063712256 %}
Over the past 24 hours I've been reflecting on my life & I've realized only one thing. I need a medieval battle axe.
{% endblockquote %}

```html
{% raw %}{% blockquote @allanbranch https://twitter.com/allanbranch/status/90766146063712256 %}
…
{% endblockquote %}{% endraw %}
```

#### Zitat aus einem Artikel im Internet

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

{% blockquote Winston Churchill http://hansard.millbanksystems.com/commons/1947/nov/11/parliament-bill#column_206a Speech to the House of Commons %}
Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise. Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.
{% endblockquote %}

```html
{% raw %}{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
…
{% endblockquote %}{% endraw %}
```

### Pullquote

#### Pullquote (rechts)

{% pullquote %}
Wenn man sehr lange Absätze schreibt, ist es hilfreich ein herausgeschobenen Zitatblock zu verwenden, der einen wichtigen Teil des Abschnitts markiert. Einige benutzen vielleicht lieber viele Überschriften, was auch meistens gut funktioniert, aber weniger gut für lange Prosa geeignet ist. {" Wichtig anzumerken ist, dass die Pullquotes nur visuelle Präsentation sind und nicht zweimal im Code erscheinen. "} Deshalb werden CSS-Techniken angewandt, um das Zitat ein weiteres mal sichtbar zu machen. In Octopress kann man dieses sehr einfach mit dem Pullquote-Tag erreichen.
{% endpullquote %}

#### Pullquote (links)

{% pullquote left %}
Wenn man sehr lange Absätze schreibt, ist es hilfreich ein herausgeschobenen Zitatblock zu verwenden, der einen wichtigen Teil des Abschnitts markiert. Einige benutzen vielleicht lieber viele Überschriften, was auch meistens gut funktioniert, aber weniger gut für lange Prosa geeignet ist. {" Wichtig anzumerken ist, dass die Pullquotes nur visuelle Präsentation sind und nicht zweimal im Code erscheinen. "} Deshalb werden CSS-Techniken angewandt, um das Zitat ein weiteres mal sichtbar zu machen. In Octopress kann man dieses sehr einfach mit dem Pullquote-Tag erreichen.
{% endpullquote %}

```html
{% raw %}{% pullquote left %}
Wenn man sehr lange Absätze schreibt, … {" Wichtig anzumerken ist … und nicht zweimal im Code erscheinen. "} Deshalb werden CSS-Techniken angewandt, um …
{% endpullquote %}{% endraw %}
```

#### Pullquote (centered)

Manchmal möchte man einen kurzen Zitatblock verwenden, der nicht im Text vorkommt, oder besonders prägnant ist und daher zentriert stehen soll. Wenn ein Attribute `lang` mitgegeben wird, werden automatisch die korrekten Zitatzeichen verwendet (für Deutsch, Englisch und Japanisch).

<blockquote lang="en" class="pullquote">
<p>No time for pessimism.</p>
</blockquote>

```html
<blockquote lang="en" class="pullquote">
<p>No time for pessimism.</p>
</blockquote>
```

### Inline-Zitate

#### Normal

Peter sagte <q>Sie soll mir das sofort hergeben</q> und war ziemlich sauer.

```html
Peter sagte <q>Sie soll mir das sofort hergeben</q> und war ziemlich sauer.
```

#### Deutsche Quotes (verschachtelt)

Luke führte weiter aus, <q>Und sie nannte ihn einen <q>total blöd-aussehenen Idioten</q>! Ich denke ich habe eine Chance!</q> Dieser arme Idiot …

```html
Luke führte weiter aus, <q>Und sie nannte ihn einen <q>total blöd-aussehenen Idioten</q>! Ich denke ich habe eine Chance!</q> Dieser arme Idiot …
```

#### Englische Quotes (verschachtelt)

<p lang="en">Luke conntinued, <q>And the she called him a <q>scruffy-looking nerf-herder</q>! I think I’ve got a chance!</q> The poor naive fool …</p>

```html
<p lang="en">Luke conntinued, <q>And the she called him a <q>scruffy-looking nerf-herder</q>! I think I’ve got a chance!</q> The poor naive fool …</p>
```

#### Japanische Quotes (verschachtelt)

<p lang="ja">彼女は<q>日本語に猫は<q>にゃん</q>と鳴く</q>と言った。</p>

```html
<p lang="ja">彼女は<q>日本語に猫は<q>にゃん</q>と鳴く</q>と言った。</p>
```


Verse
-----

Gedichte und Verse sollen so geschrieben werden, wie sie vom Autor gedacht waren und außerdem in der Seite zentriert stehen. Dafür gibt es einen Stil:

{% verse Lewis Carroll, Jabberwocky (1832-98) %}
‘Twas brillig, and the slithy toves
Did gyre and gimble            in the wabe;
All mimsy     were     the borogoves,
And       the mome     raths            outgrabe.
{% endverse %}

```html
{% raw %}{% verse Lewis Carroll, Jabberwocky (1832-98) %}
‘Twas brillig, and the slithy toves
Did gyre and gimble            in the wabe;
All mimsy     were     the borogoves,
And       the mome     raths            outgrabe.
{% endverse %}{% endraw %}
```

Nebenbemerkungen
----------------

{% aside aside-left %}
<h4>Überschrift</h4>
<p>Dies ist eine Anmerkung in der Seitenleiste im linken Rand</p>
{% endaside %}

{% aside aside-right %}
<h4>Überschrift</h4>
<p>Dies ist eine Anmerkung in der Seitenleiste im rechten Rand</p>
{% endaside %}

Manchmal möchte man mitten im Text etwas erklären, was nicht direkt zum Text gehört, aber das zum Verständnis des Textes beitragen kann. Diese Nebenbemerkungen wurden im Print üblicherweise in den Rand der Publikation gedruckt und hatten eine kleinere Schrift. Manchmal kann man diese aber auch im Text selbst stehen sehen, und sie werden durch eine andere Farbe oder einen Rand als Nebenbemerkung gekennzeichnet. Auf dieser Website stehen die Nebenbemerkungen (`aside`) im Rand und zwar wahlweise im linken oder rechten Rand. Als Überschrift (wenn nötig) sollte minimal eine `h4` verwendet werden.

```html
{% raw %}{% aside aside-right %}
<h4>Überschrift</h4>
<p>Dies ist eine Anmerkung in der Seitenleiste im rechten Rand</p>
{% endaside %}{% endraw %}
```

Listen
------

### Ordered list
The `ol` element denotes an ordered list, and various numbering schemes are available through the CSS (including 1,2,3… a,b,c… i,ii,iii… and so on). Each item requires a surrounding `<li>` and `</li>` tag, to denote individual items within the list (as you may have guessed, li stands for list item).

1. This is an ordered list.
2. This is the second item, which contains a sub list
   1. This is the sub list, which is also ordered.
   2. It has two items.
3. This is the final item on this list.

### Unordered list
The `ul` element denotes an unordered list (ie. a list of loose items that don’t require numbering, or a bulleted list). Again, each item requires a surrounding `<li>` and `</li>` tag, to denote individual items. Here is an example list showing the constituent parts of the British Isles:

* United Kingdom of Great Britain and Northern Ireland:
  * England
  * Scotland
  * Wales
  * Northern Ireland
* Republic of Ireland
* Isle of Man
* Channel Islands:
  * Bailiwick of Guernsey
  * Bailiwick of Jersey

Sometimes we may want each list item to contain block elements, typically a paragraph or two.

* The British Isles is an archipelago consisting of the two large islands of Great Britain and Ireland, and many smaller surrounding islands.

* Great Britain is the largest island of the archipelago. Ireland is the second largest island of the archipelago and lies directly to the west of Great Britain.

* The full list of islands in the British Isles includes over 1,000 islands, of which 51 have an area larger than 20 km2.

### Definition list
The `dl` element is for another type of list called a definition list. Instead of list items, the content of a `dl` consists of dt (Definition Term) and `dd` (Definition description) pairs. Though it may be called a “definition list”, `dl` can apply to other scenarios where a parent/child relationship is applicable. For example, it may be used for marking up dialogues, with each `dt` naming a speaker, and each `dd` containing his or her words.

<dl>
<dt>This is a term.</dt>
<dd>This is the definition of that term, which both live in a <code>dl</code>.</dd>
<dt>Here is another term.</dt>
<dd>And it gets a definition too, which is this line.</dd>
<dt>Here is term that shares a definition with the term below.</dt>
<dt>Here is a defined term.</dt>
<dd><code>dt</code> terms may stand on their own without an accompanying <code>dd</code>, but in that case they share descriptions with the next available <code>dt</code>. You may not have a <code>dd</code> without a parent <code>dt</code>.</dd>
</dl>


Inline-Text
-----------

There are a number of inline HTML elements you may use anywhere within other elements.

### Links and anchors
The a element is used to hyperlink text, be that to another page, a named fragment on the current page or any other location on the web. Example:

[Got to the home page](/) or [return to the top of this page](#container).

### Stressed emphasis
The `em` element is used to denote text with stressed emphasis, i.e., something you’d pronounce differently. Where italicizing is required for stylistic differentiation, the `i` element may be preferable. Example:

You simply *must* try the negitoro maki!

### Strong importance
The `strong` element is used to denote text with strong importance. Where bolding is used for stylistic differentiation, the `b` element may be preferable. Example:

**Don’t** stick nails in the electrical outlet.

### Small print
The `small` element is used to represent disclaimers, caveats, legal restrictions, or copyrights (commonly referred to as ‘small print’). It can also be used for attributions or satisfying licensing requirements. Example:

<small>Copyright © 1922-2011 Acme Corporation. All Rights Reserved</small>

### Strikethrough
The `s` element is used to represent content that is no longer accurate or relevant. When indicating document edits i.e., marking a span of text as having been removed from a document, use the del element instead. Example:

<s>Recommended retail price: £3.99 per bottle</s><br>
<strong>Now selling for just £2.99 a bottle!</strong>

### Citations
The `cite` element is used to represent the title of a work (e.g. a book, essay, poem, song, film, TV show, sculpture, painting, musical, exhibition, etc). This can be a work that is being quoted or referenced in detail (i.e. a citation), or it can just be a work that is mentioned in passing. Example:

<cite>Universal Declaration of Human Rights</cite>, United Nations, December 1948. Adopted by General Assembly resolution 217 A (III).

### Definition
The `dfn` element is used to highlight the first use of a term. The `title` attribute can be used to describe the term. Example:

Bob’s <dfn title="Dog">canine</dfn> mother and <dfn title="Horse">equine</dfn> father sat him down and carefully explained that he was an <dfn title="A mutation that combines two or more sets of chromosomes from different species">allopolyploid</dfn> organism.

### Abbreviation
The `abbr` element is used for any abbreviated text, whether it be acronym, initialism, or otherwise. Generally, it’s less work and useful (enough) to mark up only the first occurrence of any particular abbreviation on a page, and ignore the rest. Any text in the title attribute will appear when the user’s mouse hovers the abbreviation (although notably, this does not work in Internet Explorer for Windows). Example abbreviations:

BBC, HTML, and <abbr class="no-caps" title="Staffordshire">Staffs.</abbr>

### Time
The `time` element is used to represent either a time on a 24 hour clock, or a precise date in the proleptic Gregorian calendar, optionally with a time and a time-zone offset. Example:

Queen Elizabeth II was proclaimed sovereign of each of the Commonwealth realms on <time datetime="1952-02-06">6</time> and <time datetime="1952-02-07">7 February 1952</time>, after the death of her father, King George VI.

### Variable
The `var` element is used to denote a variable in a mathematical expression or programming context, but can also be used to indicate a placeholder where the contents should be replaced with your own value. Example:

If there are <var>n</var> pipes leading to the ice cream factory then I expect at *least* <var>n</var> flavours of ice cream to be available for purchase!

### Sample output
The `samp` element is used to represent (sample) output from a program or computing system. Useful for technology-oriented sites, not so useful otherwise. Example:

The computer said <samp>Too much cheese in tray two</samp> but I didn’t know what that meant.

### Keyboard entry
The `kbd` element is used to denote user input (typically via a keyboard, although it may also be used to represent other input methods, such as voice commands). Example:

This is just some random text, just to make sure the keyboard shortcut will be shown in the middle of a paragraph, so I can see the line-height is done correctly. To take a screenshot on your Mac, press <kbd>⌘ Cmd</kbd> + <kbd>⇧ Shift</kbd> + <kbd>3</kbd>. And some more text should follow after my shortcuts, just to be sure it looks really good.

### Superscript and subscript text
The `sup` element represents a superscript and the sub element represents a `sub`. These elements must be used only to mark up typographical conventions with specific meanings, not for typographical presentation. As a guide, only use these elements if their absence would change the meaning of the content. Example:

The coordinate of the <var>i</var>th point is (<var>x<sub><var>i</var></sub></var>, <var>y<sub><var>i<var></sub></var>). For example, the 10th point has coordinate (<var>x<sub>10</sub></var>, <var>y<sub>10</sub></var>). This is just some more text to see who the subscript is fitted into the lines, because both, superscript and subscript should fit harmonically into a line.

Math is a nice thing, sometimes one wants to have a formular right in the middle of the text. And even some calculations like this one: f(<var>x</var>, <var>n</var>) = log<sub>4</sub><var>x</var><sup><var>n</var></sup> should work also and should not strech or break the line-height of the other lines.

### Italicised
The `i` element is used for text in an alternate voice or mood, or otherwise offset from the normal prose. Examples include taxonomic designations, technical terms, idiomatic phrases from another language, the name of a ship or other spans of text whose typographic presentation is typically italicised. Example:

There is a certain <i lang="fr">je ne sais quoi</i> in the air.

### Emboldened
The `b` element is used for text stylistically offset from normal prose without conveying extra importance, such as key words in a document abstract, product names in a review, or other spans of text whose typographic presentation is typically emboldened. Example:

You enter a small room. Your <b>sword</b> glows brighter. A <b>rat</b> scurries past the corner wall.

### Marked or highlighted text
The `mark` element is used to <mark>represent</mark> a run of text marked or highlighted for reference purposes. When used in a quotation it indicates a highlight not originally present but added to bring the reader’s <mark>attention</mark> to that part of the text. When used in the <mark>main prose</mark> of a document, it indicates a part of the document that has been highlighted due to its relevance to the user’s current activity. Example:

I also have some <mark>kitten</mark>s who are visiting me these days. They’re really cute. I think they like my garden! Maybe I should adopt a <mark>kitten</mark>.

### Edits
The `del` element is used to represent deleted or retracted text which still must remain on the page for some reason. Meanwhile its counterpart, the `ins` element, is used to represent inserted text. Both `del` and `ins` have a `datetime` attribute which allows you to include a timestamp directly in the element. Example inserted text and usage:

She bought <del datetime="2005-05-30T13:00:00">two</del> <ins datetime="2005-05-30T13:00:00">five</ins> pairs of shoes.

### Ruby

<ruby>攻殻<rp>（</rp><rt>こうかく</rt><rp>）</rp>機動隊<rp>（</rp><rt>きどうたい</rt><rp>）</rp></ruby>

Das Japanische Kino hat einige Meisterwerke hervorgebracht, sowohl in Farbe als auch in Schwarz/Weiß. Der bekannte Film 7 Samurai (<ruby>七人の侍<rp>（</rp><rt>しちにんのさむらい</rt><rp>）</rp></ruby>) von Akira Kurosawa ist einer der besten Filme der japanischen Geschichte. Der Film ist so gut, dass er sogar ein Remake erfahren hat: <cite>Die Glorreichen Sieben</cite>.


Tabellen
--------

Tables should be used when displaying tabular data. The `thead`, `tfoot` and `tbody` elements enable you to group rows within each a table.

If you use these elements, you must use every element. They should appear in this order: `thead`, `tfoot` and `tbody`, so that browsers can render the foot before receiving all the data. You must use these tags within the table element.

### Regular Table

<figure class="table-figure">
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</figure>

### Striped Table

<figure class="table-figure">
<table class="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</figure>

### Bordered  Table

<figure class="table-figure">
<table class="table table-bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</figure>

### Hovered Table

<figure class="table-figure">
<table class="table table-hover">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</figure>

### Condensed Table

<figure class="table-figure">
<table class="table table-condensed">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</figure>


Bilder
------

A simple image without figure element:

<img src="http://lorempixel.com/680/408/nightlife/" alt="Example image">


Abbildungen
-----------

Figures are usually used to refer to images:

#### Without caption

{% figure %}
<img src="http://lorempixel.com/680/408/fashion/" alt="Example image">
{% endfigure %}

#### With caption

{% figure figure-longcaption "Dies ist die Caption des Fotos, die ich etwas länger schreibe, nur damit ich testen kann, wie sie aussieht, wenn sie sich über mehrere Zeilen erstreckt." %}
<img src="http://lorempixel.com/680/408/sports/" alt="Example image">
{% endfigure %}

{% figure figure-border "Dies ist ein normales Foto in einer figure mit Klasse <b>.figure-border</b>" %}
<img src="http://lorempixel.com/680/408/sports/" alt="Example image">
{% endfigure %}

{% figure figure-shadow "Dies ist ein normales Foto in einer figure mit Klasse <b>.figure-shadow</b>" %}
<img src="http://lorempixel.com/680/408/sports/" alt="Example image">
{% endfigure %}

Just some dummy text to sepearte the images: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Some more dummy text to sepearte the images: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

#### Fullsize

{% figure figure-fullsize %}
<img src="http://lorempixel.com/1200/500/nature/" alt="Example image">
{% endfigure %}

{% figure figure-fullsize "Figure mit Klasse <b>.figure-fullsize</b> und Caption, Image should be at least 1100 Pixel" %}
<img src="http://lorempixel.com/1200/500/nature/" alt="Example image">
{% endfigure %}

Just some dummy text to sepearte the images: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

#### Hanging Left

{% figure figure-hangleft %}
<img src="http://lorempixel.com/900/400/food/" alt="Example image">
{% endfigure %}

{% figure figure-hangleft "Figure mit Klasse <b>.figure-hangleft</b> und Caption, Image should be at least 850 Pixel" %}
<img src="http://lorempixel.com/900/400/food/" alt="Example image">
{% endfigure %}

Just some dummy text to sepearte the images: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

#### Hanging Right

{% figure figure-hangright %}
<img src="http://lorempixel.com/900/400/animals/" alt="Example image">
{% endfigure %}

{% figure figure-hangright "Figure mit Klasse <b>.figure-hangright</b> und Caption, Image should be at least 850 Pixel" %}
<img src="http://lorempixel.com/900/400/animals/" alt="Example image">
{% endfigure %}

Just some dummy text to sepearte the images: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

#### Centered

{% figure figure-center %}
<img src="http://lorempixel.com/900/400/people/" alt="Example image">
{% endfigure %}

{% figure figure-center "Figure mit Klasse <b>.figure-center</b> und Caption, Image should be at least 850 Pixels" %}
<img src="http://lorempixel.com/900/400/people/" alt="Example image">
{% endfigure %}

Videos
------

#### Native HTML5 Tag
{% video http://s3.imathis.com/video/zero-to-fancy-buttons.mp4 640 420 http://s3.imathis.com/video/zero-to-fancy-buttons.png %}

#### YouTube

{% youtube TVblWq3tDwY %}

#### Vimeo

{% vimeo 45858333 %}


Code
----

The `code` element is used to represent fragments of computer code. Useful for technology-oriented sites, not so useful otherwise. Example:

When you call the `activate()` method on the `robotSnowman` object, the eyes glow.

Used in conjunction with the `pre` element:

#### Codeblock

Shown with line numbers:

{% codeblock %}
Awesome code snippet
{% endcodeblock %}

Noch ein Test:

{% codeblock lang:rb %}
# Code Snippet mit lang:rb ohne Titel
{% endcodeblock %}

{% codeblock lang:sh file.sh %}
Code Snippet mit lang:sh und mit Titel
{% endcodeblock %}

Beispielsatz, der ein eigener Absatz sein sollte.

{% codeblock Time to be Awesome! (awesome.rb) %}
# Code snippet über Dateiendung erkannt
{% endcodeblock %}

{% codeblock Got pain? painreleif.sh http://site.com/painreleief.sh %}
$ rm -rf ~/PAIN
# Über Codeendung sh erkannt mit Link ohne Titel
{% endcodeblock %}

{% codeblock lang:ruby %}
namespace :images do

  desc "Crush all PNGs and JPEGs"
  task :crush do
    IPad::Application.config.assets.paths.each do |directory|
      ImageDiminish.optimize({
        directory: directory,
        quantize: true
      })
    end
  end

end
{% endcodeblock %}

{% codeblock lang:css %}
/**
 * CSS/Markup: Flexbox
 */

article {
  margin-bottom: 20px;
}

article > div {
  display: -webkit-flex;
  display: flex;
  background: red;
}

.trigger {
  background: red;
  display: block;
}

.opportunity {
  background: green;
  flex: 1;
}

.match {
  background: blue;
  flex: 1;
}
{% endcodeblock %}

#### Github Codeblock Markdown

##### Example (plain)

```
$ sudo make me a sandwich
```

##### Example (ruby)

```ruby
namespace :images do

  desc "Crush all PNGs and JPEGs"
  task :crush do
    IPad::Application.config.assets.paths.each do |directory|
      ImageDiminish.optimize({
        directory: directory,
        quantize: true
      })
    end
  end

end
```

##### Example (css)

```css
/**
 * CSS/Markup: Flexbox
 */

article {
  margin-bottom: 20px;
}

article > div {
  display: -webkit-flex;
  display: flex;
  background: red;
}

.trigger {
  background: red;
  display: block;
}

.opportunity {
  background: green;
  flex: 1;
}

.match {
  background: blue;
  flex: 1;
}
```

##### Gist-File

{% gist 1027674 gist_tag.rb %}

##### Include Code

{% include_code test.js %}
