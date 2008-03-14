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
 File: pi.allow_eecode.php
-----------------------------------------------------
 Purpose: Allow EE Code plugin
=====================================================

*/


$plugin_info = array(
						'pi_name'			=> 'Allow EE Code',
						'pi_version'		=> '1.0.3',
						'pi_author'			=> 'Paul Burdick',
						'pi_author_url'		=> 'http://www.pmachine.com/',
						'pi_description'	=> 'Allows ExpressionEngine code to be used in entries',
						'pi_usage'			=> Allow_EECode::usage()
					);


class Allow_EECode {

    var $return_data;

    
    // ----------------------------------------
    //  Allow EE Code Constructor
    // ----------------------------------------

    function Allow_EECode($str = '')
    {
        global $TMPL;
        
        if ($str == '')
        	$str = $TMPL->tagdata;
        	
        $query = ( ! $TMPL->fetch_param('query') ) ? 'n' : $TMPL->fetch_param('query');
        
        if ($query == 'n')
        {
        	$str = preg_replace("/&#123;exp:query(.*?)&#125;/","TgB903He0mnv3dd098$1TgB903He0mnv3dd099",$str);
			$str = str_replace('&#123;/exp:query&#125;', 'Mu87ddk2QPoid990iod', $str);
        }
        	
        $array1 = array('&#123;exp','&#125;','&#123;/exp', '{/');
        $array2 = array('{exp','}','{&#47;exp', '{&#47;');
        	
        $str = str_replace($array1,$array2,$str);
        
        if ($query == 'n')
        {
        	$str = str_replace('TgB903He0mnv3dd098', '&#123;exp:query', $str);
        	$str = str_replace('TgB903He0mnv3dd099', '&#125;', $str);
			$str = str_replace('Mu87ddk2QPoid990iod', '&#123;/exp:query&#125;', $str);
        }
        
 		$this->return_data = $str;
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

{exp:allow_eecode}

field whose ExpressionEngine code you want processed (ex: {body})

{/exp:allow_eecode}

PARAMETERS:

query - (y/n) Allow you to allow the use of the {exp:query} tag in your entries.  Set to 'n' by default.


Version 1.0.1
******************
- Removed the ability to use the {exp:query} plugin by default for security reasons.
- Added query parameter to tag to enable the use of {exp:query} in entries.

Version 1.0.2
******************
- Fixed a bug where any code containing variables pairs would not work (ex:  {items} blah {/items})

<?php
$buffer = ob_get_contents();
	
ob_end_clean(); 

return $buffer;
}
// END


}
// END CLASS
?>