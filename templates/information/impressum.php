{embed="inc/html_head"}
    <title>{exp:weblog:entries weblog="static" entry_id="3" limit="1"}{title}{/exp:weblog:entries} • {site_name}</title>
{embed="inc/favicon"}
{embed="inc/stylesheets"}
{embed="inc/js"}
{embed="inc/metatags"}
{html_head_end}
{embed="inc/body_start" id="impressum" cols="8"}
{embed="inc/header" location="immpressum"}
{main_open}
          <div id="content-1">
          {exp:weblog:entries weblog="static" url_title="impressum" limit="1"}
            <h2>{title}</h2>
            {static_body}
          {/exp:weblog:entries}
          </div>
{main_close}
{embed="inc/meta" feeds="startseite"}
{embed="inc/sub"}
{html_close}