{embed="inc/html_head"}
    <title>Suchergebnisse • {site_name}</title>
{embed="inc/favicon"}
{embed="inc/stylesheets"}
{embed="inc/js"}
{embed="inc/metatags"}
{html_head_end}
{embed="inc/body_start" id="suche" cols="8"}
{embed="inc/header" location="suche"}
{main_open}
          <div id="content-1">
            {exp:search:search_results}
              <h2><a href="{auto_path}">{title}</a></h2>
              {exp:markdown}{exp:char_limit total="300"}{notes_body}{/exp:char_limit}{/exp:markdown}
            {/exp:search:search_results}
          </div>
{main_close}
{embed="inc/meta" feeds="startseite"}
{embed="inc/sub"}
{html_close}