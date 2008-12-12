    <div id="medienkonsum">
      <h3>Mediathek</h3>
      {exp:weblog:entries weblog="medienkonsum" limit="14" orderby="date" sort="desc" status="open" rdf="off" disable="member_data|trackbacks"}
      {if medienkonsum_asin}<a href="http://www.amazon.de/gp/product/{medienkonsum_asin}?ie=UTF8&amp;tag=stefanimhoffde-21&amp;linkCode=as2&amp;camp=1638&amp;creative=6742&amp;creativeASIN={medienkonsum_asin}">{/if}<img src="{path="site_index"}images/medienkonsum/{url_title}.jpg" width="75" height="75" alt="{title}" title="{title}" />{if medienkonsum_asin}</a>{/if}
      {/exp:weblog:entries}
    </div>