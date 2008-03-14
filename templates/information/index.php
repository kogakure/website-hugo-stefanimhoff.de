{embed="inc/html_head"}
    <title>{exp:weblog:entries weblog="static" entry_id="2" limit="1"}{title}{/exp:weblog:entries} • {site_name}</title>
{embed="inc/favicon"}
{embed="inc/stylesheets"}
{embed="inc/js"}
{embed="inc/metatags"}
{html_head_end}
{embed="inc/body_start" id="information" cols="6-2"}
{embed="inc/header" location="information"}
{main_open}
          <div id="content-1">
          {exp:weblog:entries weblog="static" url_title="information-kontakt" limit="1"}
            <h2>{title}</h2>
            {static_body}
          {/exp:weblog:entries}
          </div>

          <div id="content-2">
          {embed="inc/kontakt_infos"}
          
    <div id="flickr-photos">
      <h3>Fotos auf <a href="http://flickr.com/photos/kogakure/"><span style="color: #0063DC;">flick</span><span style="color: #ff00a3;">r</span></a></h3>
      <script type="text/javascript" src="http://www.flickr.com/badge_code.gne?nsid=25939045@N00&amp;count=4&amp;display=latest&amp;name=0&amp;size=square&amp;raw=1"></script>
      <noscript><p><a href="http://flickr.com/photos/kogakure/">flickr.com</a></p></noscript>
    </div>

    <div id="medienkonsum">
      <h3>Mediathek</h3>
      {exp:weblog:entries weblog="medienkonsum" limit="14" orderby="date" sort="desc" status="open" rdf="off" disable="member_data|trackbacks"}
      {if medienkonsum_asin}<a href="http://www.amazon.de/gp/product/{medienkonsum_asin}?ie=UTF8&amp;tag=stefanimhoffde-21&amp;linkCode=as2&amp;camp=1638&amp;creative=6742&amp;creativeASIN={medienkonsum_asin}">{/if}<img src="{path="site_index"}images/medienkonsum/{url_title}.jpg" width="75" height="75" alt="{title}" title="{title}" />{if medienkonsum_asin}</a>{/if}
      {/exp:weblog:entries}
    </div>

    <!--
    <div id="lesezeichen-delicious">
      <h3>Lesezeichen auf <a href="http://del.icio.us/kogakure">del.icio.us</a></h3>
      <script type="text/javascript" src="http://del.icio.us/feeds/js/kogakure?extended;count=3"></script>
      <noscript><p><a href="http://del.icio.us/kogakure">del.icio.us</a></p></noscript>
    </div>
    -->
    
  </div>
{main_close}
{embed="inc/meta" feeds="information"}
{embed="inc/sub"}
{html_close}