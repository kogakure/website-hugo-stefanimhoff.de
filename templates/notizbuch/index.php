{embed="inc/html_head"}
    <title>Notizbuch • {site_name}</title>
{embed="inc/favicon"}
{embed="inc/stylesheets"}
{embed="inc/js"}
{embed="inc/metatags"}
{html_head_end}
{embed="inc/body_start" id="notizbuch" cols="5-3"}
{embed="inc/header" location="notizbuch"}
{main_open}

    <div id="content-1">
      <h2>Notizbuch</h2>
      <h3>Notizen</h3>

    {if member_id == '1'}

        {exp:weblog:entries weblog="notes" limit="99" orderby="date" sort="desc" status="open|vorschau" paginate="bottom" rdf="off" disable="member_data|trackbacks"}
          <div id="notiz-{entry_id}" class="note">
            <h4><a href="{title_permalink='notiz'}">{title}</a> <a class="edit-entry" href="{path=site_index}deusex/index.php?C=edit&amp;M=edit_entry&amp;weblog_id={weblog_id}&amp;entry_id={entry_id}"><img src="{path=site_index}css/images/edit.png" alt="Bearbeiten" title="Bearbeiten" /></a></h4>
            <p><small class="datetime">{entry_date format="%d. %M %Y"} {if comment_total == 0}{if:elseif comment_total == 1}– {comment_total} <a href="{title_permalink='notiz'}#comments">Kommentar</a>{if:else}- {comment_total} <a href="{title_permalink='notiz'}#comments">Kommentare</a>{/if}</small></p>
            {if notes_summary}{notes_summary}{if:else}{exp:char_limit total="1000"}{notes_body}{/exp:char_limit}{/if}
          </div>

          {paginate}
            <p class="paginate page-{total_pages}">
              <span class="links">
              {if {current_page} == {total_pages}}
              « Vorherige Seite
              {/if}
              {if next_page}
              « <a href="{auto_path}">Vorherige Seite</a>
              {/if}
              </span>
              <span class="rechts">
              {if {current_page} == 1}
              Nächste Seite »
              {/if}
              {if previous_page}
              <a href="{auto_path}">Nächste Seite</a> »
              {/if}
              </span>
            </p>
          {/paginate}

        {/exp:weblog:entries}
      </div>

      <div id="content-2">
        <h3>Randbemerkungen</h3>
        {exp:weblog:entries weblog="sidenotes" limit="99" orderby="date" sort="desc" status="open|vorschau" paginate="bottom" disable="member_data|trackbacks"}
          <div class="sidenote">
            <h4>{if sidenotes_link}<a href="{sidenotes_link}">{/if}{title}{if sidenotes_link}</a>{/if} <a class="edit-entry" href="{path=site_index}deusex/index.php?C=edit&amp;M=edit_entry&amp;weblog_id={weblog_id}&amp;entry_id={entry_id}"><img src="{path=site_index}css/images/edit.png" alt="Bearbeiten" title="Bearbeiten" /></a></h4>
            <small class="datetime">{entry_date format="%d. %M %Y"}</small>
            {sidenotes_body}
          </div>
        {/exp:weblog:entries}

    {if:else}

        {exp:weblog:entries weblog="notes" limit="99" orderby="date" sort="desc" status="open" paginate="bottom" rdf="off" disable="member_data|trackbacks"}
          <div id="notiz-{entry_id}" class="note">
            <h4><a href="{title_permalink='notiz'}">{title}</a></h4>
            <p><small class="datetime">{entry_date format="%d. %M %Y"} {if comment_total == 0}{if:elseif comment_total == 1}– {comment_total} <a href="{title_permalink='notiz'}#comments">Kommentar</a>{if:else}- {comment_total} <a href="{title_permalink='notiz'}#comments">Kommentare</a>{/if}</small></p>
            {if notes_summary}{notes_summary}{if:else}{exp:char_limit total="1000"}{notes_body}{/exp:char_limit}{/if}
          </div>
  
          {paginate}
            <p class="paginate page-{total_pages}">
              <span class="links">
              {if {current_page} == {total_pages}}
              « Vorherige Seite
              {/if}
              {if next_page}
              « <a href="{auto_path}">Vorherige Seite</a>
              {/if}
              </span>
              <span class="rechts">
              {if {current_page} == 1}
              Nächste Seite »
              {/if}
              {if previous_page}
              <a href="{auto_path}">Nächste Seite</a> »
              {/if}
              </span>
            </p>
          {/paginate}
  
        {/exp:weblog:entries}
      </div>

      <div id="content-2">
        <h3>Randbemerkungen</h3>
        {exp:weblog:entries weblog="sidenotes" limit="99" orderby="date" sort="desc" status="open" paginate="bottom" disable="member_data|trackbacks"}
          <div class="sidenote">
            <h4>{if sidenotes_link}<a href="{sidenotes_link}">{/if}{title}{if sidenotes_link}</a>{/if}</h4>
            <small class="datetime">{entry_date format="%d. %M %Y"}</small>
            {sidenotes_body}
          </div>
        {/exp:weblog:entries}
        
    {/if}
    </div>

{main_close}
{embed="inc/meta" feeds="notizbuch"}
{embed="inc/sub"}
{html_close}