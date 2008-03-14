<?php
global $IN;

$seg3 = (isset($IN->SEGS['3'])) ? $IN->SEGS['3'] : '';
$weblog         = '';
$entry_path     = '';
$category_path  = '';
$statuses       = '';
$fields         = '';
$entry_link     = TRUE;

if ($seg3 == '')
    $seg3 = 'full';
    
switch ($seg3)
{
    case 'notizen':
        $weblog         = 'notes';
        $entry_path     = 'notiz';
        $category_path  = 'main';
        $fields         = '{exp:markdown encode_ee_tags="yes"}{notes_summary}{notes_body}{/exp:markdown}';
        $statuses       = 'open';
        break;
    case 'randbemerkungen':
        $weblog         = 'sidenotes';
        $entry_path     = '';
        $category_path  = 'main';
        $fields         = '{exp:markdown}{sidenotes_body}{/exp:markdown}{if sidenotes_link}<a href="{sidenotes_link}">{sidenotes_link}</a>{/if}';
        $statuses       = 'open';
        $entry_link     = FALSE;
        break;
    case 'projekte':
        $weblog         = 'projects';
        $entry_path     = 'projekte';
        $category_path  = 'main';
        $fields         = '{if projekt_url}<a href="{projekt_url}">{projekt_url}</a>{/if}';
        $statuses       = 'open';
        break;
}
?>

{exp:rss:feed weblog="<?=$weblog?>" status="<?php echo $statuses;?>"}

<?xml version="1.0" encoding="{encoding}"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="{weblog_language}">

    <title type="text">{exp:xml_encode}{weblog_name}{/exp:xml_encode}</title>
    <subtitle type="text">{exp:xml_encode}{weblog_name}:{weblog_description}{/exp:xml_encode}</subtitle>
    <link rel="alternate" type="text/html" href="{weblog_url}" />
    <link rel="self" type="application/atom+xml" href="{path=xml/atom/{segment_3}}" />
    <updated>{gmt_edit_date format='%Y-%m-%dT%H:%i:%sZ'}</updated>
    <rights>Copyright (c) {gmt_date format="%Y"}, {author}</rights>
    <generator uri="http://expressionengine.com/" version="{version}">ExpressionEngine</generator>
    <id>tag:{trimmed_url},{gmt_date format="%Y:%m:%d"}</id>

{exp:weblog:entries site="expressionengine|ellislab" weblog="<?=$weblog?>" limit="15" rdf="off" dynamic_start="on" disable="member_data|trackbacks" status="<?=$statuses?>"}
    <entry>
      <title>{exp:xml_encode}{title}{/exp:xml_encode}</title>
      <link rel="alternate" type="text/html" href="<?php if ($entry_link === TRUE): ?>{url_title_path='<?=$entry_path?>'}<?php else: ?>{path='notizbuch'}<?php endif; ?>" /> 
      <id>tag:{trimmed_url},{gmt_entry_date format="%Y"}:{relative_url}/{weblog_id}.{entry_id}</id>
      <published>{gmt_entry_date format="%Y-%m-%dT%H:%i:%sZ"}</published>
      <updated>{gmt_edit_date format='%Y-%m-%dT%H:%i:%sZ'}</updated>
      <author>
            <name>{author}</name>
            {if url}<uri>{url}</uri>{/if}
      </author>
{categories}
      <category term="{exp:xml_encode}{exp:replace find="-|ae|Ae|oe|Oe|ue|Ue|ss|und" replace="SPACE|ä|Ä|ö|Ö|ü|Ü|ß|&" multiple="yes"}{category_name}{/exp:replace}{/exp:xml_encode}"
        scheme="{path='<?=$category_path?>'}"
        label="{exp:xml_encode}{category_name}{/exp:xml_encode}" />{/categories}
      <content type="html"><![CDATA[
        <?=$fields?>
      ]]></content>
    </entry>
{/exp:weblog:entries}

</feed>

{/exp:rss:feed}