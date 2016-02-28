---
layout: post
language: "de"
title: "2008 war Django (und Git)"
description: "Mein persönlicher Jahresrückblick für 2008: Ich kaufe mir einen iPod Touch, beschäftige mich intensiv mit Django, Kündige bei Media Temple, bringe meine Martial Arts Website kogakure.de mit Django online."
author: "Stefan Imhoff"
date: 2008-12-23 15:00
categories:
- Persoenlich
tags:
- django
- git
- jahresrueckblick
---

Wie jedes Jahr ist es so kurz vor dem Jahreswechsel mal wieder Zeit um zu schauen, was in 2008 so auf dem Plan stand. Dafür habe ich, um mein Gedächtnis aufzufrischen, wieder Google History zur Hilfe herangezogen.

Das vergangene Jahr stand ganz im Stern von [Django](https://www.djangoproject.com/), und auch 2009 wird Django mit großer Wahrscheinlichkeit wieder dazugehören. Das kommt daher, dass mir vorher noch nie ein solches fantastisches Framework (oder CMS) begegnet ist – und ich bin *pingelig*, was das angeht.

Als zweites stand dieses Jahr das Versionskontrollsystem <cite>Git</cite> hoch oben auf meinem Plan. Denn `Git = Subversion + mehr Funktionen - weniger Stress`. Und es gibt noch [viele  weitere Gründe](http://git-scm.com/about), wieso man Git ausprobieren sollte. [Hinsurfen](http://git-scm.com/), [herunterladen](http://git-scm.com/downloads), [Handbuch ansehen](http://git-scm.com/doc), [glücklich sein](https://github.com/). Das gilt auch für Designer. Quält euch doch nicht mit Subversion herum!

## Januar

Im Januar 2008 habe ich meinen <cite>iPod touch</cite> gerade einige Wochen und mein mobiles Verhalten hat sich grundlegend geändert. Viel häufiger bleibt der Computer nun aus, wenn ich mal kurz etwas in Google oder Wikipedia nachschlagen will. Apple hat mit dem Spruch <q>The Real Internet</q> wirklich nicht übertrieben, so wie andere Anbieter das immer noch tun.

Ich schaue mir [reStructuredText](http://docutils.sourceforge.net/rst.html "reStructuredText"), die Auszeichnungssprache für Dokumente und Anleitungen an und bin ziemlich begeistert.

Das Internetportal [TED](http://www.ted.com/ "TED: Ideas worth spreading") schlägt mich auch weiter in seinen Bann und nach einigen Vorträgen über Bionik recherchiere ich mehr zu diesem interessanten Thema.

Zeitgleich stolpere ich im Januar auch über [Git](http://git-scm.com/), was langsam bekannter wird. Ich bringe mir Git über die Grundlagen hinaus durch diverse Tutorial und Screencasts (GitCasts, PeepCode) selber bei.

Ich setzte meinen eigenen [Gitweb](https://git.wiki.kernel.org/index.php/Gitweb)-Server auf und schaue auch die Integration mit Subversion ([git-svn](https://www.kernel.org/pub/software/scm/git/docs/git-svn.html "git-svn(1)")) an.

Der Teilchenbeschleuniger des Kernforschungszentrums [CERN](https://de.wikipedia.org/wiki/CERN "CERN – Wikipedia") beunruhigt die Massen, da er im Herbst 2008 eingeschaltet werden soll. Aber nach einigen Missgeschicken wird er erst einmal bis 2009 abgeschaltet. Vorerst verschwinden wir also nicht im Schwarzen Loch. Das wäre ja auch zu früh: Die [Maya](https://de.wikipedia.org/wiki/Maya "Maya – Wikipedia") haben das Ende der bekannten Welt schließlich erst für den **21. Dezember 2012** vorausgesagt.

## Februar

Django, Django, Django. Ich arbeite eifrig an dem Django-Relaunch von [kogakure.de](http://kogakure.de/ "kogakure.de – Ninja, Ninjutsu und Kampfkunst"). Zwar habe ich schon im August 2007 meine ersten Schritte mit Django gemacht, aber aus Zeitmangel ging es bis jetzt eher langsam voran.

Templatetags, Pagination und Fixtures bestimmen den Februar zum Thema Django.
Fixtures sind eine feine Sache, bei der man Datenbanken ins JSON- oder XML-Format exportieren kann und bei belieben wieder importieren kann – und das sogar automatisch.

Ich schaue mir [RegularExpressions](http://www.regular-expressions.info/ "Regular-Expressions.info - Regex Tutorial, Examples and Reference - Regexp Patterns") etwas näher an, da sie bei Django die URL-Konfiguration bilden. Ist alles einfacher, als gedacht.

Da Django ein Python-Framework ist, finde ich, dass es nicht schaden kann nebenbei etwas [Python](http://www.diveintopython.net/) zu lernen. Eine wirklich edle und effiziente Sprache, die fast ohne Satzzeichen und Klammern auskommt, was bei mir bei PHP immer 90 % aller Fehler verursacht hat. Weniger Satzzeichen, mehr Ordnung im Code, gut zu lesen, kann sogar ein Laie lesen und verstehen. Und 5 Jahre länger als PHP ist Python auch schon auf dem Markt. PHP ist nur so erfolgreich, weil da <q>draufknallen auf den Server – läuft</q> ausreicht. Mit Python hat man aber ein eindeutig besseres Werkzeug, das wissen auch Google und Yahoo.

Ich setzte mir ein [MoinMoinWiki](https://moinmo.in/) auf, um Notizen und Wissen für mich persönlich online zu hinterlegen. Und weil die ganzen verfügbaren Themes grottenhäßlich sind, [gestalte ich mir fix selbst eines](https://github.com/kogakure/moinmoin-theme-kaijin).

Ich schaue mir nochmal eine Alternative zu Git an: [Mercurial](https://www.mercurial-scm.org/). Aber Git hat einfach ein paar nette Bonbons, die den Ausschlag geben.

Ich frage bei Media Temple an, ob mein Django-Projekt auf einem [Dedicated Virtual Server](https://mediatemple.net/webhosting/vps/hosting/) **(dv) BASE** laufen würde. Leider ist der Support frech und teilt mir mit, ich bräuchte mindestens einen **(dv) EXTREME**, vielleicht sogar zwei davon. WTF?! So verliert mich Media Temple als Kunden, ich sage *farewell* zum Grid und wechsele zu [Webfaction](https://www.webfaction.com/?affiliate=kogakure "Hosting for an agile web - WebFaction"). Dort bekommt man wenigstens was für sein Geld.

## März

Ich will vor Mai mit der Website fertig sein, daher wird im März eifrig gearbeitet. Ich schaue mir in Django näher die @permalink-Funktion, NewForms, SMTP, APPEND_SLASH, Context Prozessoren und Flatpages an. Ich finde heraus, dass man die Generic Views (eine vereinfachte Methode in Django Seiten zu erstellen) auch erweitern kann. Eine Suchfunktion in Django zu programmieren bereitet mir einige Tage Kopfzerbrechen, weil es noch keine einheitliche Lösung gibt, sondern diverse Ansätze, von einfacher Volltextsuche, über riesige Indizierungsmodule bis hin zur API-Nutzung von Yahoo.

Ich habe mich für Django nicht nur wegen des tollen Codes und der Einfachheit entschieden, sondern auch weil es eine wirklich aktive, freundliche Community hat. Für Django gibt es fast alles: Dokumentationen, Screencasts, Video-Präsentationen, Folien, frei verfügbaren Source-Code und eine Menge engagierte Entwickler, die regelmäßig Tipps und Ticks in Ihren Weblogs veröffentlichen. Die Entwickler von Django haben eine Vision, ein Ziel und man spürt, dass es sicher ist Django einzusetzen.

## April

Die heiße Phase meines Django-Projektes, Ende April wird das Projekt fertig. Doch bis dahin muss ich noch einiges Neuland betreten und lerne viele spannende Dinge dazu.

Ich lokalisiere mein Projekt. Zu diesem Schritt entschließe ich mich primär, weil ich den Source-Code meines Projektes frei zur Verfügung stellen möchte und deutscher Code da wenig helfen würde. Die Lokalisierung geht ziemlich einfach und schnell.

Ich richte das [Sitemap](https://docs.djangoproject.com/en/dev/ref/contrib/sitemaps/)-Modul ein, damit die neuen Seiten auch gut gefunden werden. Besonders nützlich erweist sich das [Redirect](https://docs.djangoproject.com/en/dev/ref/contrib/redirects/)-Modul von Django. Zum einen wird man bei fehlerhaften Links per E-Mail informiert, zum anderen kann man im Admin-Interface komfortabel Regeln erstellen, wie Besucher geleitet werden sollen. Und da kogakure.de schon fast 10 Jahre alt ist, gibt es natürlich eine riesige Menge Links auf alte Strukturen der Website, deren Besucher vorher schlichtweg eine Fehlerseite zu Gesicht bekamen.

Der klassische Weg mit FTP zu arbeiten kommt mir plötzlich so laaaangsam und veraltet vor. Mit Git und Capistrano kann man wirklich fantastisch Änderungen in Webseiten aktualisieren. Alles sicher, mit Netz und doppeltem Boden. Und nicht nur mein Django-Projekt publiziere ich jetzt mit Git, sondern alle Web-Projekte, sogar meine Mint-Installationen. Ein Update auf eine neue Mint-Version dauert nicht mehr 30 Minuten, sondern 3.

Die letzten zwei Wochen des Aprils beschäftige ich mich mit dem Server. Was man alles wissen muss: MaxRequestsPerChild, MinSpareServers, Serverlimit. Hui.

Ich setzte mir Memcached auf, um direkt im Arbeitsspeicher des Servers zu cachen, da das rasend schnell ist. Ich habe mich für mein Projekt für eine PostgreSQL-Datenbank entschieden, aber Django läuft natürlich auch mit MySQL, Oracle und SQLite3.

Ich automatisiere viele Prozesse mit Cronjobs und schalte mein Projekt in der letzten Aprilwoche live.

Der Sourcecode dafür ist frei verfügbar und kann bei [GitHub heruntergeladen werden](https://github.com/kogakure/kogakure.de-django).

## Mai

Ich versuche meinen Arbeitgeber davon zu überzeugen, dass die Wahl eines Java-Frameworks für unser neues hauseigenes CMS nicht die beste Idee ist. Leider vergeblich. Selbst [Sean Kelly](https://www.youtube.com/watch?v=DWODIO6aCUE), ein Mitarbeiter der NASA überzeugt die werten Herren nicht. Zwar meckern alle Programmierer des Hauses über den Rückschritt zu Java, aber was wissen die schon ;)

Und der externe Dienstleister wirkt auf mich leider nicht sehr zuverlässig und professionell. Aber was weiß ich schon …

[ExpressionEngine](https://ellislab.com/expressionengine) 2 lässt auf sich warten. Gähn. Wieso dauert das bloß so lange?

## Juni

Ich schaue mir mal das superduper Java-Framework [Spring](http://spring.io/) an, weil damit wohl unser CMS erstellt werden soll. Ich mag Java nicht. Aufgeblasene Scheiße, das. Ein Änterpreis-Wäbdeweloping-Fräimwörk halt und nich so Spielzeug wie [Rails](http://rubyonrails.org/) oder [Django](https://www.djangoproject.com/). [Warum müssen Java-Programmierer eigentlich so elitäre Snobs sein](https://www.youtube.com/watch?v=PQbuyKUaKFo "YouTube - Ruby on Rails vs Java - RailsEnvy.com Commerical")? Meine Vermutung ist ja, das viele Java-Entwickler etwas <del>kompilieren</del> <ins>kompensieren</ins> müssen.

Ich amüsiere mich fantasisch über [The Website is Down](http://www.thewebsiteisdown.com/ "The Website Is Down") und [You suck at Photoshop](http://www.mydamnchannel.com/Big_Fat_Brain/You_Suck_at_Photoshop/YouSuckatPhotoshop1_398).

Im Juni installiere ich mir auch [Ubuntu](http://www.ubuntu.com/) in einer Parallels-Partition, um mal mit einem richtig guten Linux-System rumzutesten.

Ich versuche einige Abteilungen im Hause mal dazu zu bewegen, [CVS](https://de.wikipedia.org/wiki/Concurrent_Versions_System) vielleicht langsam einzumotten. Natürlich erfolglos.

* **Die**: <q>Wir können nicht wechseln, wir dürfen unsere History nicht verlieren</q>.
* **Ich**: <q>Schon mal was von Git-CVS gehört?</q>

Wir setzten ja in unserer Abteilung immerhin schon [Subversion](http://subversion.tigris.org/ "subversion.tigris.org") ein.

Wir recherchieren nach CMS-Systemen, die wir im großen Umfang für unsere Kunden einsetzen könnten: Drupal, Joomla, Alfresco, Sefrengo, TextPattern, ModX, Typo3 … Alles nicht geeignet.

## Juli

[Kung Fu Panda](http://www.kungfupanda.com/) kommt ins Kino. Ein Spitzenfilm, der die Essenz des Kung Fu (und von Kampfkunst im Allgemeinen) wunderbar darstellt.

Ich erfahre, was Django Manager sind und lerne, wie man sie benutzt.

MobileMe ist ein echter Flop, trotzt erweiterter Test-Phase kündige ich meinen Account vorzeitig. So bringt mir das alles nichts, ohne ordentliche Live-Synchronisation. Da fahre ich mit [Spanning Sync](http://spanningsync.com/ "Spanning Sync - Sync iCal and Google Calendar") und Google besser.

Ich wechsele von meinem Wiki zu [Evernote](https://evernote.com/intl/de/). So lässt sich all das *Zeug* wirklich komfortabel ablegen. Markieren, reinziehen, verschlagworten, synchronisieren. Evernote ist genau das fehlende Stück Software, dass ich für meinen GTD-Prozess noch brauchte. [Things](https://culturedcode.com/things/) benutze ich für die Aufgaben und Evernote für das *Zeug*.

Ich lerne, wie man [Vim](http://www.vim.org/ "welcome home : vim online") bedient. Und zwar mal richtig und nicht nur `i`, `:wq`. Immerhin hat man [TextMate](http://macromates.com/ "TextMate — The Missing Editor for Mac OS X") ja nicht auf dem Server dabei.

Der größte Branch von Django (Newforms-Admin) wird in den Trunk migriert. Jetzt ist es nicht mehr weit, bis Django die Version 1.0 erreicht.

Im Juli fällt mir im Einkaufsmarkt eine schwarze Tüte mit Tiefkühlbrötchen auf: [Panini Campagnoli](http://www.panexpert.de/de/valerian-retail.php) von Valerian (panExpert). So was leckeres. Das Kühlfach ist in kürzester Zeit leergekauft. Die Brötchen machen süchtig, sogar in einem Drogenforum unterhalten sich Ex-Junkies darüber. Leider kann man die nicht selber bestellen, sondern nur als Großabnehmer :( Und in meinem Einkaufsmarkt sind die ständig ausverkauft.

## August

Ich testen [django-robots](http://code.google.com/p/django-robots/ "django-robots - Google Code") und [django-mobileadmin](http://code.google.com/p/django-mobileadmin/ "django-mobileadmin - Google Code"). Wahnsinn, was Jannis Leidel für [Django-Projekte](http://code.google.com/u/leidel/ "Google Code") entwickelt. Hast du eigentlich noch Freizeit? ;)

Microsoft sorgt für Lacher mit seinem The Mojave Experiment. In der *wissenschaftlichen* Studie versucht Microsoft einigen US-Midwest-Landeiern zu beweisen, dass sie Windows Vista eigentlich ganz toll finden. Auf perfekten Systemen, mit perfekten Treibern führt ein Microsoft-Profi diese Landeier durch Vista und erntet so lustige Kommentare wie: <q lang="en">Really, this is Vista? I **LOVE** it</q>.

Mein Preis für die beste Werbung 2008 geht schon im August an Nokia für ihre Werbung [Nokia: The 4th Screen](https://www.youtube.com/watch?v=XpeNk3E36YU "YouTube - Nokia: Go Play - 4th Screen").

Im August fällt mir auch auf, das kein [Sumo](http://www.sumo.or.jp/ "Nihon Sumo Kyokai Official Grand Sumo") mehr auf Eurosport kommt. Ich recherchiere und finde heraus, das Eurosport sich entschieden hat dafür kein Geld mehr auszugeben. Die senden jetzt nur noch richtigen Sport, wie z. B. Pokern.

## September

[Django 1.0](https://www.djangoproject.com/weblog/2008/sep/03/1/) wird veröffentlicht! Und die erste DjangoCon findet statt. Die Vorträge der Keynote kann man bei [YouTube ansehen](https://www.youtube.com/results?search_query=djangocon+2008 "YouTube - djangocon 2008").

Durch einen Vortrag auf der DjangoCon (<q lang="en">No, you can’t have a Pony</q>) und die Feststellung das Django ein Maskottchen benötigt, wird im Scherz die Idee des [Django Pony](http://www.djangopony.com/ "djangopony - Magic that can't be removed.") geboren. Jetzt **kann** Django ja nur noch erfolgreich werden ;)

Google bringt seinen neuen Browser [Google Chrome](https://www.google.com/intl/de/chrome/browser/) auf den Markt. Eine nette Idee, aber noch viel zu fehlerhaft. Meine eigene Website wird nicht richtig angezeigt, dabei validiert die penibel.

Ein neuer Film erweckt meine Aufmerksamkeit: [Watchmen](http://www.imdb.com/title/tt0409459/). Ich kaufe mir die <del>Comic</del> <ins>Graphic Novell</ins>, die laut Time-Magazine zu den einflussreichsten 100 Novellen unserer Zeit gehören. Zu recht. Ich freue mich schon auf die Verfilmung die im März 2009 anlaufen wird.

Ich kaufe mir auch gleich noch Allan Moores andere, bekannte Comic: *V wie Vendetta* und den dazugehörigen Film. Beängstigend wie nah die Comic an der [britischen Realität](http://www.heise.de/newsticker/meldung/Britische-Regierung-will-Internetueberwachung-ausbauen-211529.html) bald sein könnte. Und wenn es nach dem paranoiden Rollstuhlfahrer geht, hier wohl demnächst auch.

Ich stoße auf Typolight (jetzt [Contao](https://contao.org/de/)), das einzige CMS, dass bislang meiner Meinung nach für den breiten Einsatz bei unseren Kunden geeignet ist.

## Oktober

Far Cry 2 kommt auf den Computerspielemarkt. Ich brauch dringed einen Intel-Mac zuhause.

Unglaublich was ständig für neue Django-Applikationen veröffentlicht werden, man behält kaum noch den Überblick. Was gibt es denn eigentlich noch nicht?

Keynote am 14. Oktober 2008. Neue MacBooks (Pro) von Apple. Und was für feine. Jetzt überlege ich auch wieder, ob ich meinen riesigen G5 nicht gegen so ein kleines, leichtes Notebook tausche. Mit den neuen Cinema-Displays ist das ja ein Traum.

Ich tausche Capistrano als Deployment-Tool gegen das leichtgewichtige [Fabric](http://www.nongnu.org/fab/). Das versteht jeder.

Endlich erhältlich, die Kult-Serie aus den 80ern: [Die Rebellen vom Liang Shan Po](http://www.amazon.de/dp/B001BBEFEE/ "Die Rebellen vom Liang Shan Po (alle Folgen auf 12 einzelnen DVDs (eingeschwei&szlig;t) - exklusiv bei Amazon.de): Atsuo Nakamura, Sanae Tsuchida, Kei Sato: Amazon.de: DVD und Blu-ray"). Das ist die Serienverfilmung des chinesischen Klassikers <cite>Shuǐhǔ Zhuàn</cite> (水滸傳), auf japanisch <cite>Suikoden</cite>, im deutschen als die <cite>Wasserufergeschichte</cite> oder als <cite>Die Rebellen vom Liang Shan Po</cite> bekannt.

[Dexter](http://www.sho.com/sho/dexter/home), [Californication](http://www.sho.com/sho/californication/home) und *Heroes* erfreuen mich im Feierabend. Solche Spitzenformate könnten sie öfter bringen.

Und was ist eigentlich wieder dieses [Fever](http://feedafever.com/ "Fever&deg; Red hot. Well read.") von Shauninman? Ich weiß zwar nicht, was das ist, will aber trotzdem Beta-Tester sein! :(

## November

Nicht viel los im November. Ich vertiefe noch weiter mein Wissen zu Vim. Lese
[Python Web Development with Django](http://withdjango.com/ "Python Web Development with Django"), was richtig gut ist. Ein ausgiebiger Rundumschlag um all das Wissen, was ich mir mühsam im letzten Jahr selber erarbeitet habe.

Ich überlege, ob ich mir nicht mal langsam ein iPhone holen soll. Selbstredend ohne die miesen Knebelverträge von T-Wurst. Bei 1&1 bekommt man z. B. die 3-fache Surfleistung und kostenloses Telefonieren ins Festnetz für 29,99 €. Und auch das ganze Push-Zeug.

Das Java-CMS-Projekt scheitert (zu meiner Freude) endgültig. Details darf ich wohl leider nicht ausplaudern, aber da hätte ich was zu erzählen :D Sachen gibt’s, die glaubt man einfach nicht. Wie sagt man so schön: Wer nicht hören will, der muss fühlen.

Ich wechsele von [Things](https://culturedcode.com/things/) zu [Remember the milk](https://www.rememberthemilk.com/ "Remember The Milk: Online to do list and task management"). Things ist zwar fein, aber irgendwie wird es immer langsamer bei all dem Zeug, das ich mir merke. Und als <cite>Remember the milk</cite> auch eine iPod-Version auf den Markt bringt, bin ich überzeugt.

## Dezember

Ich nehme an der deutschen Übersetzung der Django-Dokumentation teil, die dieses mal auf GitHub übersetzt wird. Unser Versuch von 2007 eine deutsche Übersetzung anzufertigen, wurde vorerst gestoppt, weil die komplette Dokumentation umstrukturiert wurde. Selbstredend ist jeder dazu aufgefordert sich die Dokumentation zu *forken* und mitzuhelfen.

Ich suche mal nach Datenbankmigrations-Applikationen und teste [django-evolution](http://code.google.com/p/django-evolution/). Wirklich spitze, was damit möglich ist.

Es gelingt mir meine VHosts auch unter Parallels anzusprechen, was überraschend leicht geht. Man muss nur den VHost in die hosts-Datei von Windows eintragen und die IP des Parallels NAT eintragen.

Als passenden Abschluss zum Jahresende schaue ich mir noch den Vortrag von Jacob Kaplan-Moss auf Google TechTalks an: [Django: The First Five Years](https://www.youtube.com/watch?v=aJ_7KtjIVLQ). Darin erklärt er die Entwicklung von Django in den letzten 5 Jahren.

## Happy Holidays!

Hier war es im letzten halben Jahr etwas ruhiger, denn ich überlege mir gerade, wie ich diese Website mit Django neu erstelle. ExpressionEngine ist zwar ein Spitzen-CMS, aber wer einmal Django gesehen hat … Außerdem zerfällt mein Code irgendwie langsam. Das Tagging hat auch nach einem Update plötzlich den Geist aufgegeben. Und ExpressionEngine 2 kommt halt erst irgendwann. Bei Django mache ich meine Ideen, meine Daten gehören mir und ich weiß, wie alles funktioniert.

Viel Django dieses Jahr, aber das hat ja auch schon der Titel vorausgesagt. Und ja, ich melde mich freiwillig für den *Django-Evangelist Germany*-Posten ;) Den Job haben in den U.S.A. ja bereits *Jeff Croft* und [Bryan Veloso](http://avalonstar.com/) übernommen.

Zwar ist es ja noch eine Woche bis zum Jahreswechsel hin, aber da wird schon nix spannendes mehr passieren. Ich wünsche schöne Feiertage und einen guten Rutsch und melde mich bis zum neuen Jahr ab.
