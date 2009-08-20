<?php
/*
=====================================================
 ExpressionEngine - by EllisLab
-----------------------------------------------------
 http://expressionengine.com/
-----------------------------------------------------
 Copyright (c) 2003 - 2009 EllisLab, Inc.
=====================================================
 THIS IS COPYRIGHTED SOFTWARE
 PLEASE READ THE LICENSE AGREEMENT
 http://expressionengine.com/docs/license.html
=====================================================
 File: ud_162.php
-----------------------------------------------------
 Purpose: Performs version 1.6.2 update
=====================================================
*/


if ( ! defined('EXT'))
{
    exit('Invalid file request');
}

class Updater {

	function do_update()
	{
		global $UD;
		
		$data['cookie_prefix'] = $UD->ini('cookie_prefix');
		
		$UD->append_config_file($data);

		return TRUE;
	}
	/* END */
	
	
	
}	
/* END CLASS */


?>