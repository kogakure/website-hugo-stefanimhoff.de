<div id="comments">
  <h2>Kommentare</h2>
  {exp:weblog:entries weblog="notes" entry_id={entry_id}}
  <p><small class="comment-link">{if comment_total == 0}{if:elseif comment_total == 1}{comment_total} Kommentar{if:else} {comment_total} Kommentare{/if}{if allow_comments}. <a href="#comment-form">Kommentar abgeben</a>{/if}</small></p>
  {/exp:weblog:entries}
  
  <ol class="comment">

  {exp:comment:entries weblog="notes" sort="asc" orderby="date" limit="300"}

    <li class="{switch="even|odd"}{if author_id == 1} author{/if}" id="c{count}">
      <dl>
        <dt>{if url}<a href="{url}">{/if}{author}{if url}</a>{/if}</dt><dd>{comment_date format="%d.%m.%Y"}</dd><dd>{comment_date format="%H:%i"} Uhr</dd>
      </dl>
      <div class="message">
      {exp:markdown}{comment}{/exp:markdown}
      </div>
    </li>

  {/exp:comment:entries}

  </ol>
</div>
