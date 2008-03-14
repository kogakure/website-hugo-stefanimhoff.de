{exp:comment:form weblog="notes" preview="notiz/preview"}
<div id="comment-form">
  <h2>Kommentar abgeben</h2>
  <fieldset id="comment">
    <p><label for="comment-msg">Kommentar*</label> <textarea id="comment-msg" rows="3" cols="38" name="comment">{comment}</textarea></p>
  </fieldset>

  <fieldset id="comment-author">
    <p><label for="comment-name">Name*</label> <input id="comment-name" type="text" name="name" value="{name}" /></p>
    <p><label for="comment-email">E-Mail*</label> <input id="comment-email" type="text" name="email" value="{email}" /></p>
    <p><label for="comment-url">URL</label> <input id="comment-url" type="text" name="url" value="{url}" /></p>
    <p class="checkbox"><input type="checkbox" id="comment-remember" name="save_info" value="yes" {save_info} /> <label for="comment-remember">Daten merken</label></p>
    <p class="checkbox"><input type="checkbox" id="comment-notify" name="notify_me" value="yes" {notify_me} /> <label for="comment-notify">Kommentar-Benachrichtigung</label></p>
  </fieldset>

  <fieldset id="comment-rules">
    <p>* Kommentar, Name und E-Mail sind Pflichtfelder.</p>
    <p>E-Mail-Adressen werden niemals angezeigt oder verkauft.</p>
    <p>HTML wird entfernt. <a href="http://daringfireball.net/projects/markdown/" title='Daring Fireball: Markdown'>Markdown</a> ist eingeschaltet.</p>
  </fieldset>

  <fieldset id="comment-submit">
    <p><input type="submit" name="preview" value="Vorschau" /> <!--<input type="submit" name="submit" value="Kommentar abgeben" />--></p>
  </fieldset>
</div>
{/exp:comment:form}
