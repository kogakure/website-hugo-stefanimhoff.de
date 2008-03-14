<div id="comments">
  <h2>Kommentare</h2>
  {exp:weblog:entries weblog="notes" entry_id={entry_id}}
  <p><small class="comment-link">{if comment_total == 0}{if:elseif comment_total == 1}{comment_total} Kommentar{if:else} {comment_total} Kommentare{/if}{if allow_comments}. <a href="#comment-form">Kommentar abgeben</a>{/if}</small></p>
  {/exp:weblog:entries}
  
  <ol class="comment">

  {exp:comment:preview}

  <li id="preview">
    <dl>
      <dt>{if url}<a href="{url}">{/if}{name}{if url}</a>{/if}</dt><dd>{comment_date format="%d.%m.%Y"}</dd><dd>{comment_date format="%H:%i"} Uhr</dd>
    </dl>
    <div class="message">
      {exp:markdown}{comment}{/exp:markdown}
    </div>
  </li>
  {/exp:comment:preview}
  </ol>
</div>
