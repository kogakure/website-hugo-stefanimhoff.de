---
layout: page
title: "The ultimate and awesome Styleguide of this page"
footer: false
---

This document is a guide to the mark-up styles used throughout the site. This is an entry section which is just so long, it can break into two or even better – three lines. Just in case, you know? How else can I see the line height in the intro paragraph?

Sections
--------
The main page header of this guide is an `h1` element. Any header elements may include links, as depicted in the example.

The secondary header above is an `h2` element, which may be used for any form of important page-level header. More than one may be used per page. Consider using an `h2` unless you need a header level of less importance, or as a sub-header to an existing `h2` element.

### Third-Level Header
The header above is an `h3` element, which may be used for any form of page-level header which falls below the `h2` header in a document hierarchy.

#### Fourth-Level Header
The header above is an `h4` element, which may be used for any form of page-level header which falls below the `h3` header in a document hierarchy.

##### Fifth-Level Header
The header above is an `h5` element, which may be used for any form of page-level header which falls below the `h4` header in a document hierarchy.

###### Sixth-Level Header
The header above is an `h6` element, which may be used for any form of page-level header which falls below the `h5` header in a document hierarchy.

Grouping content
----------------

### Paragraphs
All paragraphs are wrapped in `p` tags. Additionally, `p` elements can be wrapped with a `blockquote` element if the `p` element is indeed a quote. Historically, `blockquote` has been used purely to force indents, but this is now achieved using CSS. Reserve `blockquote` for quotes.

### Horizontal rule
The `hr` element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book. The following extract from <cite>Pandora’s Star</cite> by Peter F. Hamilton shows two paragraphs that precede a scene change and the paragraph that follows it:

Dudley was ninety-two, in his second life, and fast approaching time for another rejuvenation. Despite his body having the physical age of a standard fifty-year-old, the prospect of a long degrading campaign within academia was one he regarded with dread. For a supposedly advanced civilization, the Intersolar Commonwearth could be appallingly backward at times, not to mention cruel.

<i>Maybe it won’t be that bad</i>, he told himself. The lie was comforting enough to get him through the rest of the night’s shift.

---------------------------------------

The Carlton AllLander drove Dudley home just after dawn. Like the astronomer, the vehicle was old and worn, but perfectly capable of doing its job. It had a cheap diesel engine, common enough on a semi-frontier world like Gralmond, although its drive array was a thoroughly modern photoneural processor. With its high suspension and deep-tread tyres it could plough along the dirt track to the observatory in all weather and seasons, including the metre-deep snow of Gralmond’s winters.

### Pre-formatted text
The `pre` element represents a block of pre-formatted text, in which structure is represented by typographic conventions rather than by elements. Such examples are an e-mail (with paragraphs indicated by blank lines, lists indicated by lines prefixed with a bullet), fragments of computer code (with structure indicated according to the conventions of that language) or displaying <abbr>ASCII</abbr> art. Here’s an example showing the printable characters of <abbr>ASCII</abbr>:

<pre>
! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~
</pre>

### Blockquotes
The `blockquote` element represents a section that is being quoted from another source.

> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise. Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.

<strong>Winston Churchill</strong>, in <cite>[a speech to the House of Commons](http://hansard.millbanksystems.com/commons/1947/nov/11/parliament-bill#column_206)</cite>. 11th&nbsp;November&nbsp;1947

Additionally, you might wish to `cite` the source, as in the above example. The correct method involves including the cite attribute on the `blockquote` element, but since no browser makes any use of that information, it’s useful to link to the source also.

#### Simple Blockquote

{% blockquote %}
Last night I lay in bed looking up at the stars in the sky and I thought to myself, where the heck is the ceiling.
{% endblockquote %}

#### Quote from a printed work

{% blockquote Douglas Adams, The Hichhikers Guide to the Galaxy %}
Flying is learning how to throw yourself at the ground and miss.
{% endblockquote %}

#### Quote from Twitter

{% blockquote @allanbranch https://twitter.com/allanbranch/status/90766146063712256 %}
Over the past 24 hours I've been reflecting on my life & I've realized only one thing. I need a medieval battle axe.
{% endblockquote %}

#### Quote form an article on the web

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

### Pullquote

#### Pullquote (right)
{% pullquote %}
When writing longform posts, I find it helpful to include pull quotes to help readers easily identify the topics covered in each section. Some prefer to break things up with lots of headings, and while this seems to be a trend it doesn’t work so well for long form prose. It is important to note that {" pull quotes are merely visual in presentation and should not appear twice in the text. "} That is why it a CSS only technique for styling pull quotes is preferable. Octopress includes a handy pull quote plugin to make this easy for you.
{% endpullquote %}

#### Pullquote (links)
{% pullquote left %}
When writing longform posts, I find it helpful to include pull quotes to help readers easily identify the topics covered in each section. Some prefer to break things up with lots of headings, and while this seems to be a trend it doesn’t work so well for long form prose. It is important to note that {" pull quotes are merely visual in presentation and should not appear twice in the text. "} That is why it a CSS only technique for styling pull quotes is preferable. Octopress includes a handy pull quote plugin to make this easy for you.
{% endpullquote %}

### Inline Quotes

#### Normal
Peter sagte <q>Sie soll mir das sofort hergeben</q> und war ziemlich sauer.

#### Deutsche Quotes (verschachtelt)
Luke führte weiter aus, <q>Und sie nannte ihn einen <q>total blöd-aussehenen Idioten</q>! Ich denke ich habe eine Chance!</q> Dieser arme Idiot …

#### Englische Quotes (verschachtelt)
<p lang="en">Luke conntinued, <q>And the she called him a <q>scruffy-looking nerf-herder</q>! I think I’ve got a chance!</q> The poor naive fool …</p>

#### Japanische Quotes (verschachtelt)

<p lang="ja">彼女は<q>日本語に猫は<q>にゃん</q>と鳴く</q>と言った。</p>

### Verse

Here, a part of a poem is marked:

{% verse Lewis Carroll, Jabberwocky (1832-98) %}
‘Twas brillig, and the slithy toves
Did gyre and gimble            in the wabe;
All mimsy     were     the borogoves,
And       the mome     raths            outgrabe.
{% endverse %}

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

Text-level Semantics
--------------------

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

<abbr title="British Broadcasting Corportation">BBC</abbr>, <abbr title="HyperText Markup Language">HTML</abbr>, and <abbr title="Staffordshire">Staffs.</abbr>

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

Das Japanische Kino hat einige Meisterwerke hervorgebracht, sowohl in Farbe als auch in Schwarz/Weiß. Der bekannte Film 7 Samurai (<ruby>七人の侍<rp>（</rp><rt>しちにんのさむらい</rt><rp>）</ruby>) von Akira Kurosawa ist einer der besten Filme der japanischen Geschichte. Der Film ist so gut, dass er sogar ein Remake erfahren hat: <cite>Die Glorreichen Sieben</cite>.

Tabular data
------------

Tables should be used when displaying tabular data. The `thead`, `tfoot` and `tbody` elements enable you to group rows within each a table.

If you use these elements, you must use every element. They should appear in this order: `thead`, `tfoot` and `tbody`, so that browsers can render the foot before receiving all the data. You must use these tags within the table element.

### Regular Table

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

### Striped Table

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

### Bordered  Table

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

### Hovered Table

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

### Condensed Table

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

### Figures

Figures are usually used to refer to images:

#### Without caption

{% figure %}
<img src="http://lorempixel.com/680/408/nature/" alt="Example image">
{% endfigure %}

#### With caption

{% figure "Dies ist die Caption des Fotos, die ich etwas länger schreibe, nur damit ich testen kann, wie sie aussieht, wenn sie sich über mehrere Zeilen erstreckt." %}
<img src="http://lorempixel.com/680/408/nature/" alt="Example image">
{% endfigure %}

{% figure %}
<img src="{{ site.images_dir }}styleguide/kelp-demo-1.jpg" alt="" />
{% endfigure %}

{% figure %}
<img src="{{ site.images_dir }}styleguide/kelp-demo-2.jpg" alt="" />
{% endfigure %}

### Video

#### Native Octopress Video Tag
{% video http://s3.imathis.com/video/zero-to-fancy-buttons.mp4 640 420 http://s3.imathis.com/video/zero-to-fancy-buttons.png %}

#### YouTube

{% youtube TVblWq3tDwY %}

#### Vimeo

{% vimeo 45858333 %}

### Code
The `code` element is used to represent fragments of computer code. Useful for technology-oriented sites, not so useful otherwise. Example:

When you call the `activate()` method on the `robotSnowman` object, the eyes glow.

Used in conjunction with the `pre` element:

#### Markdown Codeblock

    function getJello() { echo $aDeliciousSnack; }

#### Octopress Codeblock

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
