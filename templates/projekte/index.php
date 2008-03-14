{embed="inc/html_head"}
    <title>{exp:weblog:info weblog="projects"}{blog_title}{/exp:weblog:info} • {site_name}</title>
{embed="inc/favicon"}
{embed="inc/stylesheets"}
{embed="inc/js"}
{embed="inc/metatags"}
{html_head_end}
{embed="inc/body_start" id="projekte" cols="8"}
{embed="inc/header" location="projekte"}
{main_open}
<div id="content-1">
  <h2>Projekte</h2>
  <p>Ich plane und gestalte Websites. Meine Arbeit umfasst Design und Layout, Architektur und Strukturierung von Inhalten sowie deren technische Umsetzung und Programmierung. Hier ein kleiner Auszug meiner Arbeiten.</p>

  {if member_id == '1'}

    {exp:weblog:entries weblog="projects" limit="30" sticky="off" orderby="date" sort="desc" status="open|vorschau" rdf="off" disable="member_data|trackbacks"}
      <div class="projekt" id="pj{entry_id}">
         {if projekt_url}<a href="{projekt_url}">{/if}<img src="{path="site_index"}images/projekte/{url_title}.jpg" width="605" height="461" alt="{title}" />{if projekt_url}</a>{/if}
        <h3>{title}</h3>
        <p>
        {categories backspace="1"}
          {category_name}, 
        {/categories}
        </p>
        {if projekt_auszeichnungen}
          <h4>Auszeichnungen</h4>
          {projekt_auszeichnungen}
        {/if}
        {if projekt_url}<p><a href="{projekt_url}">Website besuchen »</a></p>{/if}
      </div>
    {/exp:weblog:entries}
  
  {if:else}

    {exp:weblog:entries weblog="projects" limit="30" sticky="off" orderby="date" sort="desc" status="open" rdf="off" disable="member_data|trackbacks"}
      <div class="projekt" id="pj{entry_id}">
         {if projekt_url}<a href="{projekt_url}">{/if}<img src="{path="site_index"}images/projekte/{url_title}.jpg" width="605"  height="461" alt="{title}" />{if projekt_url}</a>{/if}
        <h3>{title}</h3>
        <p>
        {categories backspace="1"}
          {category_name}, 
        {/categories}
        </p>
        {if projekt_auszeichnungen}
          <h4>Auszeichnungen</h4>
          {projekt_auszeichnungen}
        {/if}
        {if projekt_url}<p><a href="{projekt_url}">Website besuchen »</a></p>{/if}
      </div>
    {/exp:weblog:entries}

  {/if}

</div> <!-- content-1 -->
{main_close}
{embed="inc/meta" feeds="projekte"}
{embed="inc/sub"}
{html_close}