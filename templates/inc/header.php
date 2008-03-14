    <div id="navbar">
        <div class="content">
          <h1><em>{owner}</em><span> • </span>{job}</h1>
          <hr />
          <ul id="nav">
            <li><a {if '{embed:location}' == 'startseite'}class="aktiv" {/if}href="{path=SITE_INDEX}">Startseite</a></li>
            <li><a {if '{embed:location}' == 'notizbuch'}class="aktiv" {/if}href="{path=notizbuch}">Notizbuch</a></li>
            <li><a {if '{embed:location}' == 'projekte'}class="aktiv" {/if}href="{path=projekte}">Projekte</a></li>
            <li><a {if '{embed:location}' == 'information'}class="aktiv" {/if}href="{path=information}">Information &amp; Kontakt</a></li>
          </ul>
          <hr />
        </div>
    </div>
    {imgbar}
    <div id="subbar">
      {exp:search:simple_form result_page="suche/ergebnisse" no_result_page="suche/keine-ergebnisse" results="10" search_in="everywhere" show_expired="no" show_future_entries="no" status="open" weblog="notes" where="any"}
          <fieldset id="suche">
            <label for="search-text">Suche</label> <input type="text" name="keywords" id="search-text" value="" />
            <input type="image" src="{path="site_index"}css/images/button_suche.png" class="search-button" value="Suchen" />
          </fieldset>
      {/exp:search:simple_form}
    </div>