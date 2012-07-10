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
          
  </div>
{main_close}
{embed="inc/meta" feeds="information"}
{embed="inc/sub"}
{html_close}