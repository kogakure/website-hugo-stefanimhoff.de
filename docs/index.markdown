## Dokumentation

### Modular Scale

This website uses a modular scale with the golden ration and base sizes of 16/18px:

[Modular Scale](http://modularscale.com/scale/?px1=18&px2=16&ra1=1.618&ra2=0)

### Pygments Syntax Highlighting

A list of all supported languages can be found here:

[Supported Languages](http://pygments.org/languages/)

## Vector fonts (Fontcustom)

* [Website of Font Custom](http://fontcustom.com/)
* [GitHub repository](https://github.com/FontCustom/fontcustom)

### Installation

```bash
brew install fontforge eot-utils ttfautohint
gem install fontcustom
```
### Compiling

Fontcustom is driven by a `fontcustom.yml` which is configured to set all paths of this project correct.

From project root execute:

```bash
fontcustom compile
```

This will create webfonts in `source/fonts`, a SASS file in `sass/base` and a preview file in `styleguide`.

## Changelog

0.2.0 [2013-04-15]

* Update to Octopress 2.1

0.1.0 [2012-07-25]

* Abbreviation plugin
* Ampersand plugin

0.0.0 [2012-07-09]

* Initial commit
* Gemfile
