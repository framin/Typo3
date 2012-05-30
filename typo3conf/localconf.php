<?php
if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}

$TYPO3_CONF_VARS['SYS']['sitename'] = 'New TYPO3 site';

	// Default password is "joh316" :
$TYPO3_CONF_VARS['BE']['installToolPassword'] = 'bacb98acf97e0b6112b1d1b650b84971';

$TYPO3_CONF_VARS['EXT']['extList'] = 'info,perm,func,filelist,about,tsconfig_help,context_help,extra_page_cm_options,impexp,sys_note,tstemplate,tstemplate_ceditor,tstemplate_info,tstemplate_objbrowser,tstemplate_analyzer,func_wizards,wizard_crpages,wizard_sortpages,lowlevel,install,belog,beuser,aboutmodules,setup,taskcenter,info_pagetsconfig,viewpage,rtehtmlarea,css_styled_content,t3skin,t3editor,reports,felogin,form,introduction';

$typo_db_extTableDef_script = 'extTables.php';

## INSTALL SCRIPT EDIT POINT TOKEN - all lines after this points may be changed by the install script!

$TYPO3_CONF_VARS['EXT']['extList'] = 'extbase,css_styled_content,info,perm,func,filelist,about,tsconfig_help,context_help,extra_page_cm_options,impexp,sys_note,tstemplate,tstemplate_ceditor,tstemplate_info,tstemplate_objbrowser,tstemplate_analyzer,func_wizards,wizard_crpages,wizard_sortpages,lowlevel,install,belog,beuser,aboutmodules,setup,taskcenter,info_pagetsconfig,viewpage,rtehtmlarea,t3skin,t3editor,reports,felogin,form,introduction,fluid,version,workspaces,scheduler,linkvalidator,automaketemplate,realurl,tt_news,indexed_search,wt_spamshield,jquerycolorbox';	// Modified or inserted by TYPO3 Extension Manager. Modified or inserted by TYPO3 Core Update Manager. 
// Updated by TYPO3 Core Update Manager 30-05-12 10:50:23
$TYPO3_CONF_VARS['SYS']['encryptionKey'] = '7058e2d4e022d0164ea46e15fd49c3f8b9f6576ac9163491f38fdf1782c962213cad455869a28ee5d191c870bee1f920';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['SYS']['compat_version'] = '4.7';	//  Modified or inserted by TYPO3 Install Tool.
$typo_db_username = 'root';	//  Modified or inserted by TYPO3 Install Tool.
$typo_db_host = 'localhost';	//  Modified or inserted by TYPO3 Install Tool.
$typo_db = 'typo3';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['BE']['forceCharset'] = 'utf-8';
$TYPO3_CONF_VARS['SYS']['setDBinit'] = 'SET NAMES utf8;';
$TYPO3_CONF_VARS['BE']['fileCreateMask'] = '0666';
$TYPO3_CONF_VARS['BE']['folderCreateMask'] = '2777';
$TYPO3_CONF_VARS['GFX']['jpg_quality'] = '80';  //  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['EXT']['extConf']['indexed_search'] = 'a:17:{s:8:"pdftools";s:9:"/usr/bin/";s:8:"pdf_mode";s:2:"20";s:5:"unzip";s:9:"/usr/bin/";s:6:"catdoc";s:9:"/usr/bin/";s:6:"xlhtml";s:9:"/usr/bin/";s:7:"ppthtml";s:9:"/usr/bin/";s:5:"unrtf";s:9:"/usr/bin/";s:9:"debugMode";s:1:"0";s:18:"fullTextDataLength";s:1:"0";s:23:"disableFrontendIndexing";s:1:"0";s:6:"minAge";s:2:"24";s:6:"maxAge";s:1:"0";s:16:"maxExternalFiles";s:1:"5";s:26:"useCrawlerForExternalFiles";s:1:"0";s:11:"flagBitMask";s:3:"192";s:16:"ignoreExtensions";s:0:"";s:17:"indexExternalURLs";s:1:"0";}';     //  Modified or inserted by TYPO3 Extension Manager.
$TYPO3_CONF_VARS['EXT']['extConf']['realurl'] = 'a:4:{s:10:"configFile";s:26:"typo3conf/realurl_conf.php";s:14:"enableAutoConf";s:1:"1";s:14:"autoConfFormat";s:1:"1";s:12:"enableDevLog";s:1:"0";}';   // Modified or inserted by TYPO3 Extension Manager.
$TYPO3_CONF_VARS['EXT']['extConf']['tt_news'] = 'a:15:{s:13:"useStoragePid";s:1:"0";s:13:"noTabDividers";s:1:"0";s:25:"l10n_mode_prefixLangTitle";s:1:"1";s:22:"l10n_mode_imageExclude";s:1:"1";s:20:"hideNewLocalizations";s:1:"0";s:13:"prependAtCopy";s:1:"1";s:17:"requireCategories";s:1:"0";s:5:"label";s:5:"title";s:9:"label_alt";s:8:"datetime";s:10:"label_alt2";s:5:"short";s:15:"label_alt_force";s:1:"0";s:11:"treeOrderBy";s:5:"title";s:21:"categorySelectedWidth";s:1:"0";s:17:"categoryTreeWidth";s:1:"0";s:18:"categoryTreeHeigth";s:1:"5";}';        // Modified or inserted by TYPO3 Extension Manager.
$TYPO3_CONF_VARS['EXT']['extConf']['wt_spamshield'] = 'a:10:{s:12:"useNameCheck";s:1:"0";s:12:"usehttpCheck";s:1:"3";s:9:"notUnique";s:0:"";s:13:"honeypodCheck";s:1:"1";s:15:"useSessionCheck";s:1:"1";s:16:"SessionStartTime";s:2:"10";s:14:"SessionEndTime";s:3:"600";s:10:"AkismetKey";s:0:"";s:12:"email_notify";s:0:"";s:3:"pid";s:2:"-1";}';     //  Modified or inserted by TYPO3 Extension Manager.
$TYPO3_CONF_VARS['EXT']['extConf']['rtehtmlarea'] = 'a:13:{s:21:"noSpellCheckLanguages";s:23:"ja,km,ko,lo,th,zh,b5,gb";s:15:"AspellDirectory";s:15:"/usr/bin/aspell";s:17:"defaultDictionary";s:2:"en";s:14:"dictionaryList";s:2:"en";s:20:"defaultConfiguration";s:105:"Typical (Most commonly used features are enabled. Select this option if you are unsure which one to use.)";s:12:"enableImages";s:1:"1";s:20:"enableInlineElements";s:1:"0";s:19:"allowStyleAttribute";s:1:"1";s:24:"enableAccessibilityIcons";s:1:"0";s:16:"enableDAMBrowser";s:1:"0";s:16:"forceCommandMode";s:1:"0";s:15:"enableDebugMode";s:1:"0";s:23:"enableCompressedScripts";s:1:"1";}';	//  Modified or inserted by TYPO3 Extension Manager.
$TYPO3_CONF_VARS['FE']['pageNotFound_handling'] = t3lib_div::getIndpEnv('TYPO3_SITE_URL').'index.php?id=16';
$TYPO3_CONF_VARS['BE']['disable_exec_function'] = '0';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['GFX']['im_combine_filename'] = '';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['GFX']['gdlib_png'] = '1';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['GFX']['im'] = '0';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['GFX']['im_path'] = '';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['GFX']['im_path_lzw'] = '';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['GFX']['im_imvMaskState'] = '0';	// Modified or inserted by TYPO3 Install Tool. 
$TYPO3_CONF_VARS['GFX']['im_negate_mask'] = '1';	// Modified or inserted by TYPO3 Install Tool. 
// Updated by TYPO3 Install Tool 30-05-12 10:50:51
$TYPO3_CONF_VARS['EXT']['extList_FE'] = 'extbase,css_styled_content,install,rtehtmlarea,t3skin,felogin,form,introduction,fluid,version,workspaces,automaketemplate,realurl,tt_news,indexed_search,wt_spamshield,jquerycolorbox';	// Modified or inserted by TYPO3 Extension Manager. 
// Updated by TYPO3 Extension Manager 30-05-12 10:51:13
$TYPO3_CONF_VARS['BE']['forceCharset'] = 'utf-8';
$TYPO3_CONF_VARS['SYS']['setDBinit'] = 'SET NAMES utf8;';
$TYPO3_CONF_VARS['BE']['fileCreateMask'] = '0666';
$TYPO3_CONF_VARS['BE']['folderCreateMask'] = '2777';
$TYPO3_CONF_VARS['GFX']['jpg_quality'] = '80';  //  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['EXT']['extConf']['indexed_search'] = 'a:17:{s:8:"pdftools";s:9:"/usr/bin/";s:8:"pdf_mode";s:2:"20";s:5:"unzip";s:9:"/usr/bin/";s:6:"catdoc";s:9:"/usr/bin/";s:6:"xlhtml";s:9:"/usr/bin/";s:7:"ppthtml";s:9:"/usr/bin/";s:5:"unrtf";s:9:"/usr/bin/";s:9:"debugMode";s:1:"0";s:18:"fullTextDataLength";s:1:"0";s:23:"disableFrontendIndexing";s:1:"0";s:6:"minAge";s:2:"24";s:6:"maxAge";s:1:"0";s:16:"maxExternalFiles";s:1:"5";s:26:"useCrawlerForExternalFiles";s:1:"0";s:11:"flagBitMask";s:3:"192";s:16:"ignoreExtensions";s:0:"";s:17:"indexExternalURLs";s:1:"0";}';     //  Modified or inserted by TYPO3 Extension Manager.
$TYPO3_CONF_VARS['EXT']['extConf']['realurl'] = 'a:4:{s:10:"configFile";s:26:"typo3conf/realurl_conf.php";s:14:"enableAutoConf";s:1:"1";s:14:"autoConfFormat";s:1:"1";s:12:"enableDevLog";s:1:"0";}';   // Modified or inserted by TYPO3 Extension Manager.
$TYPO3_CONF_VARS['EXT']['extConf']['tt_news'] = 'a:15:{s:13:"useStoragePid";s:1:"0";s:13:"noTabDividers";s:1:"0";s:25:"l10n_mode_prefixLangTitle";s:1:"1";s:22:"l10n_mode_imageExclude";s:1:"1";s:20:"hideNewLocalizations";s:1:"0";s:13:"prependAtCopy";s:1:"1";s:17:"requireCategories";s:1:"0";s:5:"label";s:5:"title";s:9:"label_alt";s:8:"datetime";s:10:"label_alt2";s:5:"short";s:15:"label_alt_force";s:1:"0";s:11:"treeOrderBy";s:5:"title";s:21:"categorySelectedWidth";s:1:"0";s:17:"categoryTreeWidth";s:1:"0";s:18:"categoryTreeHeigth";s:1:"5";}';        // Modified or inserted by TYPO3 Extension Manager.
$TYPO3_CONF_VARS['EXT']['extConf']['wt_spamshield'] = 'a:10:{s:12:"useNameCheck";s:1:"0";s:12:"usehttpCheck";s:1:"3";s:9:"notUnique";s:0:"";s:13:"honeypodCheck";s:1:"1";s:15:"useSessionCheck";s:1:"1";s:16:"SessionStartTime";s:2:"10";s:14:"SessionEndTime";s:3:"600";s:10:"AkismetKey";s:0:"";s:12:"email_notify";s:0:"";s:3:"pid";s:2:"-1";}';     //  Modified or inserted by TYPO3 Extension Manager.
$TYPO3_CONF_VARS['EXT']['extConf']['rtehtmlarea'] = 'a:13:{s:21:"noSpellCheckLanguages";s:23:"ja,km,ko,lo,th,zh,b5,gb";s:15:"AspellDirectory";s:15:"/usr/bin/aspell";s:17:"defaultDictionary";s:2:"en";s:14:"dictionaryList";s:2:"en";s:20:"defaultConfiguration";s:105:"Typical (Most commonly used features are enabled. Select this option if you are unsure which one to use.)";s:12:"enableImages";s:1:"1";s:20:"enableInlineElements";s:1:"0";s:19:"allowStyleAttribute";s:1:"1";s:24:"enableAccessibilityIcons";s:1:"0";s:16:"enableDAMBrowser";s:1:"0";s:16:"forceCommandMode";s:1:"0";s:15:"enableDebugMode";s:1:"0";s:23:"enableCompressedScripts";s:1:"1";}';	//  Modified or inserted by TYPO3 Extension Manager.
$TYPO3_CONF_VARS['FE']['pageNotFound_handling'] = t3lib_div::getIndpEnv('TYPO3_SITE_URL').'index.php?id=16';
$TYPO3_CONF_VARS['BE']['installToolPassword'] = 'e10adc3949ba59abbe56e057f20f883e';	//  Modified or inserted by TYPO3 Install Tool.
// Updated by TYPO3 Install Tool 30-05-12 10:57:37
?>