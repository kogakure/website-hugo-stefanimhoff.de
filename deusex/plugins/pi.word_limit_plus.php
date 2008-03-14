<?php

/*
=====================================================
 ExpressionEngine - by pMachine


-----------------------------------------------------
 http://www.pmachine.com/
-----------------------------------------------------
 Copyright (c) 2003 pMachine, Inc.
=====================================================
 THIS IS COPYRIGHTED SOFTWARE
 PLEASE READ THE LICENSE AGREEMENT
 http://www.pmachine.com/license/
=====================================================
 File: pi.word_limit_plus.php
-----------------------------------------------------
 Purpose: Word limiting plugin
=====================================================

Based on: pi.word_limit.php
Modified 3/06 by Vik Rubenfeld to support
if_Exceeds, stop_after, and the_link parameters.
*/


$plugin_info = array(
						'pi_name'			=> 'Word Limiter Plus',
						'pi_version'		=> '1.0',
						'pi_author'			=> 'Rick Ellis; additions by Vik Rubenfeld',
						'pi_author_url'		=> 'http://www.pmachine.com/',
						'pi_description'	=> 'Permits you to limit the number of words in some text',
						'pi_usage'			=> Word_limit_plus::usage()
					);


class Word_limit_plus {

    var $return_data;

    // ----------------------------------------
    //  Word limiter
    // ----------------------------------------
    
    function word_limiter_plus($str, $if_Exceeds = 500, $stop_after = 500, $the_link = "")
    {
        if (strlen($str) < $stop_after) 
        {
            return $str;
        }
        
        $str = str_replace("\n", " ", $str);        
        
        $str = preg_replace("/\s+/", " ", $str);
        
        $word = explode(" ", $str);
        
        $theCount = count($word);

		if (($theCount < $stop_after) && ($theCount < $if_Exceeds))
		{
			return $str;
		}
                
        $str = "";
                 
        for ($i = 0; $i < $stop_after + 1; $i++) 
        {
            $str .= $word[$i]." ";
        }
        
        $str .= "&#8230;";

        if ($the_link != "") {
        	$str .= "<br/><br/>" . $the_link;
        	}

        return trim($str); 
    }
    // END	
    
    // ----------------------------------------
    //  Word Limiter
    // ----------------------------------------

    function Word_limit_plus()
    {
        global $TMPL, $FNS;
                        
		$stop_after = ( ! $TMPL->fetch_param('stop_after')) ? '500' :  $TMPL->fetch_param('stop_after');
		
		$if_Exceeds = ( ! $TMPL->fetch_param('if_exceeds')) ? '500' :  $TMPL->fetch_param('if_exceeds');
		
		$the_link = ( ! $TMPL->fetch_param('the_link')) ? '' :  $TMPL->fetch_param('the_link');

		if ( ! is_numeric($stop_after))
			$stop_after = 500;
                
		if ( ! is_numeric($if_Exceeds))
			$if_Exceeds = 500;
			
		if ($if_Exceeds < $stop_after) {


			$if_Exceeds = $stop_after;
			}
                
 		$this->return_data = $this->word_limiter_plus($TMPL->tagdata, $if_Exceeds, $stop_after, $the_link);
    }
    // END
    
// ----------------------------------------
//  Plugin Usage
// ----------------------------------------

// This function describes how the plugin is used.
//  Make sure and use output buffering

function usage()
{
ob_start(); 
?>
Wrap anything you want to be processed between the tag pairs.

{exp:word_limit_plus if_exceeds="600" stop_after="500" the_link="<a href='{title_permalink=weblog/comments}'>MORE...</a>"}

text you want processed

{/exp:word_limit_plus}

REFERENCE:  

if_exceeds - Text will be truncated if it is greater than this number of words. This parameter must be included.

stop_after - Text greater than the number of words contained in the if_exceeds parameter, will be truncated to the word length stored in the stop_after parameter. This parameter must be included. Must be less than the number of words in the if_exceeds parameter.

the_link - A link back to the original article. When using this plugin with an RSS feed, I usually put the word "MORE" in the_link, with a link back to the orginal article. You can ignore this parameter if you don't want to use it.

EXAMPLE from RSS template:

Before this plugin is used
---------------------------
<content:encoded>
	<![CDATA[{body}]]>
</content:encoded>


After this plugin is used
---------------------------
<content:encoded>
	<![CDATA[{exp:word_limit_plus if_exceeds="600" stop_after="500" the_link="<a href='{title_permalink=weblog/comments}'>MORE...</a>"}{body}{/exp:word_limit_plus}]]>
</content:encoded>




<?php
$buffer = ob_get_contents();
	
ob_end_clean(); 

return $buffer;
}
// END


}
// END CLASS


?>