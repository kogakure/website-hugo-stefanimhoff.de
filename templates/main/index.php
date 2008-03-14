{embed="inc/html_head"}
    <title>{site_name} • Webdesigner</title>
{embed="inc/favicon"}
{embed="inc/stylesheets"}
{embed="inc/js"}
{embed="inc/metatags"}
{html_head_end}
{if segment_1 == "" || (segment_1 == "main" && segment_2 == "" || segment_2 == "index")}
  {embed="inc/body_start" id="startseite" cols="5-3"}
{/if}
{if segment_2 == "kategorie" && segment_3 != ""}
  {embed="inc/body_start" id="kategorie" cols="8"}
{/if}  
{embed="inc/header" location="startseite"}
{main_open}
      
      {if segment_1 == "" || (segment_1 == "main" && segment_2 == "" || segment_2 == "index")}
          <div id="content-1">
            
            {if member_id == '1'}
            
              <div id="aktuelle-notiz">
                {exp:weblog:entries weblog="notes" limit="1" orderby="date" sort="desc" status="open|vorschau" rdf="off" disable="member_data|trackbacks"}
                  <h2><a href="{title_permalink='notiz'}">{title}</a> <a class="edit-entry" href="{path=site_index}deusex/index.php?C=edit&amp;M=edit_entry&amp;weblog_id={weblog_id}&amp;entry_id={entry_id}"><img src="{path=site_index}css/images/edit.png" alt="Bearbeiten" title="Bearbeiten" /></a></h2>
                  {if notes_summary}{notes_summary}{if:else}{exp:char_limit total="1000"}{notes_body}{/exp:char_limit}{/if}
                {/exp:weblog:entries}
              </div>
            
              <div id="letzte-notizen">
                <h2>Letzte Notizen</h2>
                <ul>
                {exp:weblog:entries weblog="notes" offset="1" limit="4" orderby="date" sort="desc" status="open|vorschau" rdf="off" disable="member_data|trackbacks"}
                  <li><small class="datetime">{entry_date format="%d. %M %Y"}</small><h3><a href="{title_permalink='notiz'}">{title}</a> <a class="edit-entry" href="{path=site_index}deusex/index.php?C=edit&amp;M=edit_entry&amp;weblog_id={weblog_id}&amp;entry_id={entry_id}"><img src="{path=site_index}css/images/edit.png" alt="Bearbeiten" title="Bearbeiten" /></a></h3></li>
                {/exp:weblog:entries}
                </ul>
              </div>
            
            {if:else}

              <div id="aktuelle-notiz">
                {exp:weblog:entries weblog="notes" limit="1" orderby="date" sort="desc" status="open" rdf="off" disable="member_data|trackbacks"}
                  <h2><a href="{title_permalink='notiz'}">{title}</a></h2>
                  {if notes_summary}{notes_summary}{if:else}{exp:char_limit total="1000"}{notes_body}{/exp:char_limit}{/if}
                {/exp:weblog:entries}
              </div>
              
              <div id="letzte-notizen">
                <h2>Letzte Notizen</h2>
                <ul>
                {exp:weblog:entries weblog="notes" offset="1" limit="4" orderby="date" sort="desc" status="open" rdf="off" disable="member_data|trackbacks"}
                  <li><small class="datetime">{entry_date format="%d. %M %Y"}</small><h3><a href="{title_permalink='notiz'}">{title}</a></h3></li>
                {/exp:weblog:entries}
                </ul>
              </div>
            
            {/if}
            
            <div id="flickr-photos">
              <h2>Fotos auf <a href="http://flickr.com/photos/kogakure/"><span style="color: #0063DC;">flick</span><span style="color: #FF00A3;">r</span></a></h2>
              <script type="text/javascript" src="http://www.flickr.com/badge_code.gne?nsid=25939045@N00&amp;count=10&amp;display=latest&amp;name=0&amp;size=square&amp;raw=1"></script>
              <noscript><p><a href="http://flickr.com/photos/kogakure/">flickr.com</a></p></noscript>
            </div>
            
          </div> <!-- content-1 -->
          <div id="content-2">
            
            {if member_id == '1'}
            
              <div id="aktuelle-arbeiten">
                <h2>Vorgestelltes Projekt</h2>
                {exp:weblog:entries weblog="projects" limit="1" orderby="date" sort="desc" status="open|vorschau" rdf="off" disable="member_data|trackbacks"}
                <a href="{path='projekte'}#pj{entry_id}"><img src="{path='site_index'}images/projekte/{url_title}_thumb.jpg" width="285" height="104" alt="{title}" /></a>
                {/exp:weblog:entries}
              </div>
            
              <div id="randbemerkungen">
                <h2>Randbemerkungen</h2>
                <ul>
                  {exp:weblog:entries weblog="sidenotes" limit="3" orderby="date" sort="desc" status="open|vorschau" disable="member_data|trackbacks"}
                  <li><h3>{if sidenotes_link}<a href="{sidenotes_link}">{/if}{title}{if sidenotes_link}</a>{/if}</h3><small class="datetime">{entry_date format="%d. %M %Y"}</small> {sidenotes_body} <a class="edit-entry" href="{path=site_index}deusex/index.php?C=edit&amp;M=edit_entry&amp;weblog_id={weblog_id}&amp;entry_id={entry_id}"><img src="{path=site_index}css/images/edit.png" alt="Bearbeiten" title="Bearbeiten" /></a></li>
                  {/exp:weblog:entries}
                </ul>
              </div>
            
            {if:else}

              <div id="aktuelle-arbeiten">
                <h2>Vorgestelltes Projekt</h2>
                {exp:weblog:entries weblog="projects" limit="1" orderby="date" sort="desc" status="open" rdf="off" disable="member_data|trackbacks"}
                <a href="{path='projekte'}#pj{entry_id}"><img src="{path='site_index'}images/projekte/{url_title}_thumb.jpg" width="285" height="104" alt="{title}" /></a>
                {/exp:weblog:entries}
              </div>
            
              <div id="randbemerkungen">
                <h2>Randbemerkungen</h2>
                <ul>
                  {exp:weblog:entries weblog="sidenotes" limit="3" orderby="date" sort="desc" status="open" disable="member_data|trackbacks"}
                  <li><h3>{if sidenotes_link}<a href="{sidenotes_link}">{/if}{title}{if sidenotes_link}</a>{/if}</h3><small class="datetime">{entry_date format="%d. %M %Y"}</small> {sidenotes_body}</li>
                  {/exp:weblog:entries}
                </ul>
              </div>
            
            {/if}
            
          </div> <!-- content-2 -->
      {/if}
      
      {if segment_2 == "kategorie" && segment_3 != ""}
          <div id="content-1">
            <h2>Notizen zum Thema „{exp:weblog:category_heading weblog="notes"}{category_description}{/exp:weblog:category_heading}”</h2>

                {exp:weblog:entries weblog="notes" orderby="date" sort="desc" limit="999"}
                  <h3><a href="{title_permalink=notiz}">{title}</a></h3>
                  {if notes_summary}{notes_summary}{if:else}{exp:char_limit total="250"}{notes_body}{/exp:char_limit}{/if}
                {/exp:weblog:entries}
          </div>
      {/if}
          
{main_close}
{embed="inc/meta" feeds="startseite"}
{embed="inc/sub"}
{html_close}