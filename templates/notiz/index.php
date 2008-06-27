{embed="inc/html_head"}
    <title>{exp:weblog:entries require_entry="yes" status="open|vorschau" limit="1" rdf="off"}{title}{/exp:weblog:entries} • {exp:weblog:info weblog="notes"}{blog_title}{/exp:weblog:info} • {site_name}</title>
{embed="inc/favicon"}
{embed="inc/stylesheets"}
{embed="inc/js"}
{embed="inc/metatags"}
{html_head_end}
{embed="inc/body_start" id="notiz" cols="8"}
{embed="inc/header" location="notizbuch"}
{main_open}
<div id="content-1">

    {if member_id == '1'}

        {exp:weblog:entries weblog="notes" require_entry="yes" status="open|vorschau" limit="1" rdf="off" disable="member_data|trackbacks"}
          <h2><a href="{title_permalink='notiz'}">{title}</a> <a class="edit-entry" href="{path=site_index}deusex/index.php?C=edit&amp;M=edit_entry&amp;weblog_id={weblog_id}&amp;entry_id={entry_id}"><img src="{path=site_index}css/images/edit.png" alt="Bearbeiten" title="Bearbeiten" /></a></h2>
          <p><small class="datetime">{entry_date format="%d.%m.%Y"} {if comment_total == 0}{if:elseif comment_total == 1}– {comment_total} <a href="#comments">Kommentar</a>{if:else}– {comment_total} <a href="#comments">Kommentare</a>{/if}</small></p>

          <div id="meta-content">
            {if notes_summary}
              <h3>Zusammenfassung</h3>
              {notes_summary}
            {/if}

            {exp:query sql="SELECT count(entry_id) AS cat_count FROM exp_category_posts WHERE entry_id='{entry_id}'"}
              {if {cat_count} == 1 }
                <h3>Schlagwort</h3>
                <ul>
              {if:elseif {cat_count} > 1}
                <h3>Schlagworte</h3>
                <ul>
              {/if}
              {categories}
                <li><a href="{path='main/index'}">{category_description}</a></li>
              {/categories}
              {if {cat_count} > 0}
                </ul>
              {/if}
            {/exp:query}

            {if links_mentioned}
              <h3>Links in der Notiz</h3>
              {links_mentioned}
            {/if}

            {if related_note_1}
              {if related_note_2 == FALSE}<h3>Ähnliche Notiz</h3>{/if}
              {if related_note_2}<h3>Ähnliche Notizen</h3>{/if}
              <ul>
              {related_entries id="related_note_1"}
                <li><a href="{title_permalink="notiz"}" title="Die Notiz „{title}“ lesen">{title}</a></li>
              {/related_entries}
              {related_entries id="related_note_2"}
                <li><a href="{title_permalink="notiz"}" title="Die Notiz „{title}“ lesen">{title}</a></li>
              {/related_entries}
              {related_entries id="related_note_3"}
                <li><a href="{title_permalink="notiz"}" title="Die Notiz „{title}“ lesen">{title}</a></li>
              {/related_entries}
              </ul>
            {/if}
            {/exp:weblog:entries}

          </div> <!-- meta-content -->

        {exp:weblog:entries weblog="notes" require_entry="yes" status="open|vorschau" limit="1" rdf="off" disable="member_data|trackbacks"}

          {if no_results}
            <div id="content-1">
              <h2>Fehler</h2>
              <h3>Diese Seite gibt es nicht</h3>
              <p>Der Link, dem du gefolgt bis existiert nicht. Wenn du glaubst, dass hier aber was existieren müsste, sei so nett und <a href="{path='information'}">teil mir bitte mit</a>, wo der Fehler aufgetreten ist.</p>
              <p>Möglicherweise hast du dich aber auch vertippt, überprüfe noch einmal deine Eingabe.</p>
              <p>Außerdem kannst du natürlich auch noch die Suche verwenden, um die gewünschten Inhalte zu finden.</p>
            </div>
          {/if}
          {exp:markdown encode_ee_tags="yes"}{notes_body}{/exp:markdown}
          {if notes_footnotes}
            <ol id="fussnoten">
              {notes_footnotes}
            </ol>
          {/if}
        {/exp:weblog:entries}

    {if:else}
        
        {exp:weblog:entries weblog="notes" require_entry="yes" status="open" limit="1" rdf="off" disable="member_data|trackbacks"}
          <h2><a href="{title_permalink='notiz'}">{title}</a></h2>
          <p><small class="datetime">{entry_date format="%d.%m.%Y"} {if comment_total == 0}{if:elseif comment_total == 1}– {comment_total} <a href="#comments">Kommentar</a>{if:else}– {comment_total} <a href="#comments">Kommentare</a>{/if}</small></p>

          <div id="meta-content">
            {if notes_summary}
              <h3>Zusammenfassung</h3>
              {notes_summary}
            {/if}

            {exp:query sql="SELECT count(entry_id) AS cat_count FROM exp_category_posts WHERE entry_id='{entry_id}'"}
              {if {cat_count} == 1 }
                <h3>Schlagwort</h3>
                <ul>
              {if:elseif {cat_count} > 1}
                <h3>Schlagworte</h3>
                <ul>
              {/if}
              {categories}
              <li><a href="{path='main/index'}">{category_description}</a></li>
              {/categories}
              {if {cat_count} > 0}
                </ul>
              {/if}
            {/exp:query}

            {if links_mentioned}
              <h3>Links in der Notiz</h3>
              {links_mentioned}
            {/if}

            {if related_note_1}
              {if related_note_2 == FALSE}<h3>Ähnliche Notiz</h3>{/if}
              {if related_note_2}<h3>Ähnliche Notizen</h3>{/if}
              <ul>
              {related_entries id="related_note_1"}
                <li><a href="{title_permalink="notiz"}" title="Die Notiz „{title}“ lesen">{title}</a></li>
              {/related_entries}
              {related_entries id="related_note_2"}
                <li><a href="{title_permalink="notiz"}" title="Die Notiz „{title}“ lesen">{title}</a></li>
              {/related_entries}
              {related_entries id="related_note_3"}
                <li><a href="{title_permalink="notiz"}" title="Die Notiz „{title}“ lesen">{title}</a></li>
              {/related_entries}
              </ul>
            {/if}
        {/exp:weblog:entries}

          </div> <!-- meta-content -->

        {exp:weblog:entries weblog="notes" require_entry="yes" status="open" limit="1" rdf="off" disable="member_data|trackbacks"}

          {if no_results}
            <div id="content-1">
              <h2>Fehler</h2>
              <h3>Diese Seite gibt es nicht</h3>
              <p>Der Link, dem du gefolgt bis existiert nicht. Wenn du glaubst, dass hier aber was existieren müsste, sei so nett und <a href="{path='information'}">teil mir bitte mit</a>, wo der Fehler aufgetreten ist.</p>
              <p>Möglicherweise hast du dich aber auch vertippt, überprüfe noch einmal deine Eingabe.</p>
              <p>Außerdem kannst du natürlich auch noch die Suche verwenden, um die gewünschten Inhalte zu finden.</p>
            </div>
          {/if}
          {exp:markdown encode_ee_tags="yes"}{notes_body}{/exp:markdown}
          {if notes_footnotes}
            <ol id="fussnoten">
              {notes_footnotes}
            </ol>
          {/if}
        {/exp:weblog:entries}
        
    {/if}

</div>

{exp:weblog:entries weblog="notes" require_entry="yes" entry_id={entry_id}}
  {if comment_total > 0}
    {embed="inc/comments"}
  {/if}
{/exp:weblog:entries}        

{embed="inc/comment_form"}

{main_close}
{embed="inc/meta" feeds="notizbuch"}
{embed="inc/sub"}
{html_close}