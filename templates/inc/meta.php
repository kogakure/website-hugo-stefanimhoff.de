    <div id="meta">
      <div class="content">
        <div class="feeds">
{if '{embed:feeds}' == 'startseite'}
          <ul>
            <li><a href="{link_feed_notizen}">Notizen</a></li>
            <li><a href="{link_feed_randbemerkungen}">Randbemerkungen</a></li>
            <li><a href="{link_feed_projekte}">Projekte</a></li>
            <li><a href="{link_feed_flickr}">flickr</a></li>
            <li><a href="http://plus.google.com/104687479698350625994?rel=author">Google</a></li>
          </ul>
{/if}
{if '{embed:feeds}' == 'notizbuch'}
          <ul>
            <li><a href="{link_feed_notizen}">Notizen</a></li>
            <li><a href="{link_feed_randbemerkungen}">Randbemerkungen</a></li>
            <li><a href="http://plus.google.com/104687479698350625994?rel=author">Google</a></li>
          </ul>
{/if}
{if '{embed:feeds}' == 'projekte'}
          <ul>
            <li><a href="{link_feed_projekte}">Projekte</a></li>
            <li><a href="http://plus.google.com/104687479698350625994?rel=author">Google</a></li>
          </ul>
{/if}
{if '{embed:feeds}' == 'information'}
          <ul>
            <li><a href="{link_feed_flickr}">flickr</a></li>
            <li><a href="http://plus.google.com/104687479698350625994?rel=author">Google</a></li>
          </ul>
{/if}
        </div>
        <a href="{path='site_index'}information/"><img src="{path='site_index'}images/fotos/stefanimhoff.jpg" width="75" height="75" alt="Portaitfoto von Stefan Imhoff" title="Stefan Imhoff" /></a>
        <p>Ich bin Stefan Imhoff, Designer und Webentwickler, Kampfkünstler und Hobby-Philosoph. 1999 habe ich das Ninjutsu-Magazin <a href="http://kogakure.de/" title='kogakure.de - Ninja, Ninjutsu und Kampfkunst'>kogakure.de</a> entwickelt, das schon bei PRO7 (Galileo), RTL2 (Welt der Wunder) und in der P.M. erwähnt wurde. Ich wohne in Hamburg und interessiere mich für Webstandards, Zugänglichkeit von Websites, Django, Bücher, Kinofilme, CG, Apple, Design und noch zwei, drei andere Dinge. <a href="{path='information'}">Mehr Informationen »</a></p>
      </div>
    </div>