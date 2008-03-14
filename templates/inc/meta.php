    <div id="meta">
      <div class="content">
        <div class="feeds">
{if '{embed:feeds}' == 'startseite'}
          <ul>
            <li><a href="{link_feed_notizen}">Notizen</a></li>
            <li><a href="{link_feed_randbemerkungen}">Randbemerkungen</a></li>
            <li><a href="{link_feed_projekte}">Projekte</a></li>
            <li><a href="{link_feed_flickr}">flickr</a></li>
          </ul>
{/if}
{if '{embed:feeds}' == 'notizbuch'}
          <ul>
            <li><a href="{link_feed_notizen}">Notizen</a></li>
            <li><a href="{link_feed_randbemerkungen}">Randbemerkungen</a></li>
          </ul>
{/if}
{if '{embed:feeds}' == 'projekte'}
          <ul>
            <li><a href="{link_feed_projekte}">Projekte</a></li>
          </ul>
{/if}
{if '{embed:feeds}' == 'information'}
          <ul>
            <li><a href="{link_feed_delicious}">del.icio.us</a></li>
            <li><a href="{link_feed_flickr}">flickr</a></li>
          </ul>
{/if}
        </div>
        <a href="{path='site_index'}information/"><img src="{path='site_index'}images/fotos/stefanimhoff.jpg" width="75" height="75" alt="Portaitfoto von {owner}" title="{owner}" /></a>
        <p>Ich bin {owner}, Gründer des Ninjutsu-Magazins <a href="http://kogakure.de/" title='kogakure.de - Ninja, Ninjutsu und Kampfkunst'>kogakure.de</a>, Designer, Kampfkünstler und Hobbyphilosoph. Ich wohne in Hamburg und interessiere mich für Webstandards, Informationsarchitektur, Apple, Design, Bücher, Asien, 3D-Design, und noch ein paar andere Dinge. <a href="{path='information'}">Mehr Informationen »</a></p>
      </div>
    </div>