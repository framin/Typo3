<?php

########################################################################
# Extension Manager/Repository config file for ext "rtehtmlarea".
#
# Auto generated 22-05-2012 11:29
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => 'htmlArea RTE',
	'description' => 'Rich Text Editor.',
	'category' => 'be',
	'shy' => 0,
	'dependencies' => 'cms',
	'conflicts' => 'rte_conf,tkr_rteanchors,ad_rtepasteplain,rtehtmlarea_definitionlist',
	'priority' => '',
	'loadOrder' => '',
	'module' => 'mod3,mod4,mod5,mod6',
	'state' => 'stable',
	'internal' => 0,
	'uploadfolder' => 1,
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 0,
	'lockType' => '',
	'author' => 'Stanislas Rolland',
	'author_email' => 'typo3(arobas)sjbr.ca',
	'author_company' => 'SJBR',
	'CGLcompliance' => '',
	'CGLcompliance_note' => '',
	'version' => '4.7.1',
	'_md5_values_when_last_written' => 'a:462:{s:9:"ChangeLog";s:4:"6321";s:29:"class.tx_rtehtmlarea_base.php";s:4:"e26e";s:27:"class.tx_rtehtmlareaapi.php";s:4:"f000";s:16:"ext_autoload.php";s:4:"193a";s:21:"ext_conf_template.txt";s:4:"f159";s:12:"ext_icon.gif";s:4:"2f41";s:17:"ext_localconf.php";s:4:"0aa7";s:14:"ext_tables.php";s:4:"475b";s:14:"ext_tables.sql";s:4:"bba8";s:13:"locallang.xlf";s:4:"d64c";s:17:"locallang_csh.xlf";s:4:"bf71";s:30:"locallang_csh_abbreviation.xlf";s:4:"2ae5";s:16:"locallang_db.xlf";s:4:"a05c";s:7:"tca.php";s:4:"62ef";s:14:"doc/manual.sxw";s:4:"b752";s:59:"extensions/AboutEditor/class.tx_rtehtmlarea_abouteditor.php";s:4:"637a";s:40:"extensions/AboutEditor/skin/htmlarea.css";s:4:"c457";s:44:"extensions/AboutEditor/skin/images/about.gif";s:4:"1690";s:51:"extensions/Acronym/class.tx_rtehtmlarea_acronym.php";s:4:"fc3e";s:36:"extensions/Acronym/locallang_csh.xlf";s:4:"1808";s:36:"extensions/Acronym/skin/htmlarea.css";s:4:"443f";s:42:"extensions/Acronym/skin/images/acronym.gif";s:4:"1eaa";s:63:"extensions/BlockElements/class.tx_rtehtmlarea_blockelements.php";s:4:"41ed";s:38:"extensions/BlockElements/locallang.xlf";s:4:"3cb0";s:42:"extensions/BlockElements/skin/htmlarea.css";s:4:"f76f";s:51:"extensions/BlockElements/skin/images/blockquote.gif";s:4:"34dc";s:47:"extensions/BlockElements/skin/images/indent.gif";s:4:"57df";s:61:"extensions/BlockElements/skin/images/insertHorizontalRule.gif";s:4:"82f0";s:58:"extensions/BlockElements/skin/images/insertOrderedList.gif";s:4:"eb1c";s:61:"extensions/BlockElements/skin/images/insertParagraphAfter.gif";s:4:"e335";s:62:"extensions/BlockElements/skin/images/insertParagraphBefore.gif";s:4:"9c42";s:60:"extensions/BlockElements/skin/images/insertUnorderedList.gif";s:4:"7a02";s:54:"extensions/BlockElements/skin/images/justifyCenter.gif";s:4:"588b";s:52:"extensions/BlockElements/skin/images/justifyFull.gif";s:4:"b129";s:52:"extensions/BlockElements/skin/images/justifyLeft.gif";s:4:"3799";s:53:"extensions/BlockElements/skin/images/justifyRight.gif";s:4:"0662";s:48:"extensions/BlockElements/skin/images/outdent.gif";s:4:"a780";s:57:"extensions/BlockStyle/class.tx_rtehtmlarea_blockstyle.php";s:4:"c7f5";s:35:"extensions/BlockStyle/locallang.xlf";s:4:"2213";s:61:"extensions/CharacterMap/class.tx_rtehtmlarea_charactermap.php";s:4:"c6d3";s:41:"extensions/CharacterMap/skin/htmlarea.css";s:4:"2390";s:65:"extensions/CharacterMap/skin/images/character-insert-from-map.gif";s:4:"af19";s:58:"extensions/CharacterMap/skin/images/soft-hyphen-insert.gif";s:4:"cff4";s:59:"extensions/ContextMenu/class.tx_rtehtmlarea_contextmenu.php";s:4:"1e65";s:55:"extensions/CopyPaste/class.tx_rtehtmlarea_copypaste.php";s:4:"63c1";s:38:"extensions/CopyPaste/skin/htmlarea.css";s:4:"3703";s:41:"extensions/CopyPaste/skin/images/copy.gif";s:4:"98d2";s:40:"extensions/CopyPaste/skin/images/cut.gif";s:4:"748f";s:42:"extensions/CopyPaste/skin/images/paste.gif";s:4:"7df5";s:61:"extensions/DefaultClean/class.tx_rtehtmlarea_defaultclean.php";s:4:"f481";s:37:"extensions/DefaultColor/locallang.xlf";s:4:"2213";s:41:"extensions/DefaultColor/skin/htmlarea.css";s:4:"eb5b";s:49:"extensions/DefaultColor/skin/images/forecolor.gif";s:4:"dbc8";s:51:"extensions/DefaultColor/skin/images/hilitecolor.gif";s:4:"d97c";s:36:"extensions/DefaultFont/locallang.xlf";s:4:"9338";s:61:"extensions/DefaultImage/class.tx_rtehtmlarea_defaultimage.php";s:4:"1938";s:41:"extensions/DefaultImage/skin/htmlarea.css";s:4:"b261";s:45:"extensions/DefaultImage/skin/images/image.gif";s:4:"c0f0";s:63:"extensions/DefaultInline/class.tx_rtehtmlarea_defaultinline.php";s:4:"1237";s:38:"extensions/DefaultInline/locallang.xlf";s:4:"2213";s:42:"extensions/DefaultInline/skin/htmlarea.css";s:4:"ff3e";s:45:"extensions/DefaultInline/skin/images/bold.gif";s:4:"94f2";s:47:"extensions/DefaultInline/skin/images/italic.gif";s:4:"f60c";s:54:"extensions/DefaultInline/skin/images/strikethrough.gif";s:4:"3fd0";s:50:"extensions/DefaultInline/skin/images/subscript.gif";s:4:"cedd";s:52:"extensions/DefaultInline/skin/images/superscript.gif";s:4:"8aea";s:50:"extensions/DefaultInline/skin/images/underline.gif";s:4:"b138";s:59:"extensions/DefaultLink/class.tx_rtehtmlarea_defaultlink.php";s:4:"556e";s:40:"extensions/DefaultLink/skin/htmlarea.css";s:4:"05c5";s:43:"extensions/DefaultLink/skin/images/link.gif";s:4:"fbc1";s:45:"extensions/DefaultLink/skin/images/unlink.gif";s:4:"86c4";s:65:"extensions/DefinitionList/class.tx_rtehtmlarea_definitionlist.php";s:4:"aaf2";s:43:"extensions/DefinitionList/skin/htmlarea.css";s:4:"536a";s:56:"extensions/DefinitionList/skin/images/definitionItem.gif";s:4:"33ae";s:56:"extensions/DefinitionList/skin/images/definitionList.gif";s:4:"8128";s:59:"extensions/EditElement/class.tx_rtehtmlarea_editelement.php";s:4:"0988";s:40:"extensions/EditElement/locallang_csh.xlf";s:4:"d9ff";s:40:"extensions/EditElement/skin/htmlarea.css";s:4:"f3f4";s:51:"extensions/EditElement/skin/images/element-edit.png";s:4:"baca";s:57:"extensions/EditorMode/class.tx_rtehtmlarea_editormode.php";s:4:"e3cc";s:39:"extensions/EditorMode/skin/htmlarea.css";s:4:"f6b8";s:45:"extensions/EditorMode/skin/images/ed_html.gif";s:4:"fa6e";s:59:"extensions/FindReplace/class.tx_rtehtmlarea_findreplace.php";s:4:"46c2";s:40:"extensions/FindReplace/skin/htmlarea.css";s:4:"b453";s:43:"extensions/FindReplace/skin/images/find.gif";s:4:"827f";s:65:"extensions/InlineElements/class.tx_rtehtmlarea_inlineelements.php";s:4:"77d6";s:39:"extensions/InlineElements/locallang.xlf";s:4:"9b84";s:46:"extensions/InlineElements/res/pageTSConfig.txt";s:4:"187d";s:43:"extensions/InlineElements/skin/htmlarea.css";s:4:"b9ee";s:54:"extensions/InlineElements/skin/images/bidioverride.gif";s:4:"f38b";s:45:"extensions/InlineElements/skin/images/big.gif";s:4:"779b";s:46:"extensions/InlineElements/skin/images/bold.gif";s:4:"9120";s:50:"extensions/InlineElements/skin/images/citation.gif";s:4:"b6eb";s:46:"extensions/InlineElements/skin/images/code.gif";s:4:"6057";s:52:"extensions/InlineElements/skin/images/definition.gif";s:4:"692d";s:53:"extensions/InlineElements/skin/images/deletedtext.gif";s:4:"4eec";s:50:"extensions/InlineElements/skin/images/emphasis.gif";s:4:"84e3";s:54:"extensions/InlineElements/skin/images/insertedtext.gif";s:4:"64e6";s:48:"extensions/InlineElements/skin/images/italic.gif";s:4:"3d7d";s:50:"extensions/InlineElements/skin/images/keyboard.gif";s:4:"ac36";s:52:"extensions/InlineElements/skin/images/monospaced.gif";s:4:"9ce5";s:51:"extensions/InlineElements/skin/images/quotation.gif";s:4:"b918";s:48:"extensions/InlineElements/skin/images/sample.gif";s:4:"667c";s:47:"extensions/InlineElements/skin/images/small.gif";s:4:"a481";s:46:"extensions/InlineElements/skin/images/span.gif";s:4:"0dfa";s:55:"extensions/InlineElements/skin/images/strikethrough.gif";s:4:"73b1";s:48:"extensions/InlineElements/skin/images/strong.gif";s:4:"7f50";s:51:"extensions/InlineElements/skin/images/subscript.gif";s:4:"fc56";s:53:"extensions/InlineElements/skin/images/superscript.gif";s:4:"40c4";s:51:"extensions/InlineElements/skin/images/underline.gif";s:4:"6250";s:50:"extensions/InlineElements/skin/images/variable.gif";s:4:"8520";s:61:"extensions/InsertSmiley/class.tx_rtehtmlarea_insertsmiley.php";s:4:"8eba";s:41:"extensions/InsertSmiley/skin/htmlarea.css";s:4:"0dc2";s:46:"extensions/InsertSmiley/skin/images/smiley.gif";s:4:"c331";s:53:"extensions/Language/class.tx_rtehtmlarea_language.php";s:4:"412f";s:33:"extensions/Language/locallang.xlf";s:4:"c428";s:37:"extensions/Language/locallang_csh.xlf";s:4:"87fa";s:37:"extensions/Language/skin/htmlarea.css";s:4:"ce49";s:49:"extensions/Language/skin/images/left_to_right.gif";s:4:"1a1f";s:49:"extensions/Language/skin/images/right_to_left.gif";s:4:"2a38";s:55:"extensions/Language/skin/images/show-language-marks.gif";s:4:"0bbb";s:67:"extensions/MicrodataSchema/class.tx_rtehtmlarea_microdataschema.php";s:4:"642f";s:40:"extensions/MicrodataSchema/locallang.xlf";s:4:"2a93";s:44:"extensions/MicrodataSchema/locallang_csh.xlf";s:4:"5b4e";s:47:"extensions/MicrodataSchema/res/schemaOrgAll.rdf";s:4:"2013";s:44:"extensions/MicrodataSchema/skin/htmlarea.css";s:4:"c907";s:57:"extensions/MicrodataSchema/skin/images/microdata-show.gif";s:4:"a4cc";s:55:"extensions/PlainText/class.tx_rtehtmlarea_plaintext.php";s:4:"8f61";s:38:"extensions/PlainText/locallang_csh.xlf";s:4:"1818";s:38:"extensions/PlainText/skin/htmlarea.css";s:4:"0b55";s:52:"extensions/PlainText/skin/images/paste-behaviour.gif";s:4:"657a";s:49:"extensions/PlainText/skin/images/paste-toggle.gif";s:4:"4b1b";s:53:"extensions/QuickTag/class.tx_rtehtmlarea_quicktag.php";s:4:"e3d5";s:37:"extensions/QuickTag/skin/htmlarea.css";s:4:"be04";s:45:"extensions/QuickTag/skin/images/inserttag.gif";s:4:"a463";s:61:"extensions/RemoveFormat/class.tx_rtehtmlarea_removeformat.php";s:4:"3f4e";s:41:"extensions/RemoveFormat/locallang_csh.xlf";s:4:"49ff";s:41:"extensions/RemoveFormat/skin/htmlarea.css";s:4:"9712";s:53:"extensions/RemoveFormat/skin/images/remove-format.gif";s:4:"e22c";s:57:"extensions/SelectFont/class.tx_rtehtmlarea_selectfont.php";s:4:"6cca";s:35:"extensions/SelectFont/locallang.xlf";s:4:"c1b5";s:61:"extensions/SpellChecker/class.tx_rtehtmlarea_spellchecker.php";s:4:"3ed4";s:41:"extensions/SpellChecker/skin/htmlarea.css";s:4:"fffb";s:51:"extensions/SpellChecker/skin/images/spell-check.gif";s:4:"9570";s:57:"extensions/TYPO3Color/class.tx_rtehtmlarea_typo3color.php";s:4:"c76d";s:35:"extensions/TYPO3Color/locallang.xlf";s:4:"2213";s:39:"extensions/TYPO3Color/skin/htmlarea.css";s:4:"388e";s:47:"extensions/TYPO3Color/skin/images/forecolor.gif";s:4:"dbc8";s:49:"extensions/TYPO3Color/skin/images/hilitecolor.gif";s:4:"d97c";s:67:"extensions/TYPO3HtmlParser/class.tx_rtehtmlarea_typo3htmlparser.php";s:4:"0465";s:57:"extensions/TYPO3Image/class.tx_rtehtmlarea_typo3image.php";s:4:"efc5";s:39:"extensions/TYPO3Image/skin/htmlarea.css";s:4:"21e3";s:43:"extensions/TYPO3Image/skin/images/image.gif";s:4:"c0f0";s:55:"extensions/TYPO3Link/class.tx_rtehtmlarea_typo3link.php";s:4:"8b0a";s:38:"extensions/TYPO3Link/skin/htmlarea.css";s:4:"5ada";s:41:"extensions/TYPO3Link/skin/images/link.gif";s:4:"fbc1";s:43:"extensions/TYPO3Link/skin/images/unlink.gif";s:4:"86c4";s:67:"extensions/TableOperations/class.tx_rtehtmlarea_tableoperations.php";s:4:"c441";s:44:"extensions/TableOperations/locallang_csh.xlf";s:4:"a486";s:44:"extensions/TableOperations/skin/htmlarea.css";s:4:"1185";s:54:"extensions/TableOperations/skin/images/cell-delete.gif";s:4:"5a88";s:60:"extensions/TableOperations/skin/images/cell-insert-after.gif";s:4:"2dd2";s:61:"extensions/TableOperations/skin/images/cell-insert-before.gif";s:4:"5d13";s:53:"extensions/TableOperations/skin/images/cell-merge.gif";s:4:"cb52";s:52:"extensions/TableOperations/skin/images/cell-prop.gif";s:4:"13fe";s:53:"extensions/TableOperations/skin/images/cell-split.gif";s:4:"0095";s:53:"extensions/TableOperations/skin/images/col-delete.gif";s:4:"da78";s:59:"extensions/TableOperations/skin/images/col-insert-after.gif";s:4:"80d8";s:60:"extensions/TableOperations/skin/images/col-insert-before.gif";s:4:"d47d";s:51:"extensions/TableOperations/skin/images/col-prop.gif";s:4:"b178";s:52:"extensions/TableOperations/skin/images/col-split.gif";s:4:"c168";s:55:"extensions/TableOperations/skin/images/insert_table.gif";s:4:"a703";s:53:"extensions/TableOperations/skin/images/row-delete.gif";s:4:"b9f1";s:59:"extensions/TableOperations/skin/images/row-insert-above.gif";s:4:"1ef1";s:59:"extensions/TableOperations/skin/images/row-insert-under.gif";s:4:"9ad6";s:51:"extensions/TableOperations/skin/images/row-prop.gif";s:4:"32bd";s:52:"extensions/TableOperations/skin/images/row-split.gif";s:4:"ebfd";s:53:"extensions/TableOperations/skin/images/table-prop.gif";s:4:"2728";s:56:"extensions/TableOperations/skin/images/table-restyle.gif";s:4:"eeca";s:57:"extensions/TableOperations/skin/images/toggle-borders.gif";s:4:"00be";s:63:"extensions/TextIndicator/class.tx_rtehtmlarea_textindicator.php";s:4:"b6fd";s:42:"extensions/TextIndicator/skin/htmlarea.css";s:4:"036a";s:55:"extensions/TextStyle/class.tx_rtehtmlarea_textstyle.php";s:4:"1087";s:34:"extensions/TextStyle/locallang.xlf";s:4:"70b8";s:53:"extensions/UndoRedo/class.tx_rtehtmlarea_undoredo.php";s:4:"e851";s:37:"extensions/UndoRedo/skin/htmlarea.css";s:4:"bfaf";s:40:"extensions/UndoRedo/skin/images/redo.gif";s:4:"5fdf";s:40:"extensions/UndoRedo/skin/images/undo.gif";s:4:"8d53";s:61:"extensions/UserElements/class.tx_rtehtmlarea_userelements.php";s:4:"c756";s:41:"extensions/UserElements/skin/htmlarea.css";s:4:"a70a";s:44:"extensions/UserElements/skin/images/user.gif";s:4:"b859";s:33:"hooks/clearrtecache/locallang.xlf";s:4:"8139";s:62:"hooks/install/class.tx_rtehtmlarea_deprecatedrteproperties.php";s:4:"ff56";s:71:"hooks/statusreport/class.tx_rtehtmlarea_statusreport_conflictscheck.php";s:4:"9d6d";s:36:"hooks/statusreport/ext_localconf.php";s:4:"98b6";s:32:"hooks/statusreport/locallang.xlf";s:4:"32ba";s:29:"htmlarea/HTMLAREA_LICENSE.txt";s:4:"a10f";s:20:"htmlarea/htmlarea.js";s:4:"3ef5";s:30:"htmlarea/locallang_dialogs.xlf";s:4:"1c0d";s:26:"htmlarea/locallang_msg.xlf";s:4:"defd";s:31:"htmlarea/locallang_tooltips.xlf";s:4:"c42e";s:44:"htmlarea/plugins/AboutEditor/about-editor.js";s:4:"028a";s:35:"htmlarea/plugins/Acronym/acronym.js";s:4:"f574";s:38:"htmlarea/plugins/Acronym/locallang.xlf";s:4:"7414";s:48:"htmlarea/plugins/BlockElements/block-elements.js";s:4:"f93c";s:44:"htmlarea/plugins/BlockElements/locallang.xlf";s:4:"ab28";s:42:"htmlarea/plugins/BlockStyle/block-style.js";s:4:"6f22";s:41:"htmlarea/plugins/BlockStyle/locallang.xlf";s:4:"0437";s:46:"htmlarea/plugins/CharacterMap/character-map.js";s:4:"37bb";s:43:"htmlarea/plugins/CharacterMap/locallang.xlf";s:4:"64d2";s:44:"htmlarea/plugins/ContextMenu/context-menu.js";s:4:"2078";s:42:"htmlarea/plugins/ContextMenu/locallang.xlf";s:4:"c45d";s:40:"htmlarea/plugins/CopyPaste/copy-paste.js";s:4:"d23a";s:40:"htmlarea/plugins/CopyPaste/locallang.xlf";s:4:"503a";s:46:"htmlarea/plugins/DefaultClean/default-clean.js";s:4:"3e4d";s:43:"htmlarea/plugins/DefaultClean/locallang.xlf";s:4:"5b37";s:43:"htmlarea/plugins/DefaultColor/locallang.xlf";s:4:"3490";s:42:"htmlarea/plugins/DefaultFont/locallang.xlf";s:4:"e49d";s:46:"htmlarea/plugins/DefaultImage/default-image.js";s:4:"a11a";s:43:"htmlarea/plugins/DefaultImage/locallang.xlf";s:4:"0368";s:48:"htmlarea/plugins/DefaultInline/default-inline.js";s:4:"f8ba";s:44:"htmlarea/plugins/DefaultInline/locallang.xlf";s:4:"9646";s:44:"htmlarea/plugins/DefaultLink/default-link.js";s:4:"ae27";s:42:"htmlarea/plugins/DefaultLink/locallang.xlf";s:4:"690f";s:50:"htmlarea/plugins/DefinitionList/definition-list.js";s:4:"9bc5";s:45:"htmlarea/plugins/DefinitionList/locallang.xlf";s:4:"82e5";s:42:"htmlarea/plugins/DynamicCSS/dynamiccss.css";s:4:"79d3";s:41:"htmlarea/plugins/DynamicCSS/locallang.xlf";s:4:"2d17";s:52:"htmlarea/plugins/DynamicCSS/img/red_arrow_bullet.gif";s:4:"82d6";s:44:"htmlarea/plugins/EditElement/edit-element.js";s:4:"dd48";s:42:"htmlarea/plugins/EditElement/locallang.xlf";s:4:"5f79";s:42:"htmlarea/plugins/EditorMode/editor-mode.js";s:4:"4719";s:41:"htmlarea/plugins/EditorMode/locallang.xlf";s:4:"e4e7";s:44:"htmlarea/plugins/FindReplace/find-replace.js";s:4:"eed2";s:42:"htmlarea/plugins/FindReplace/locallang.xlf";s:4:"92d5";s:40:"htmlarea/plugins/InlineCSS/locallang.xlf";s:4:"717e";s:50:"htmlarea/plugins/InlineElements/inline-elements.js";s:4:"e355";s:45:"htmlarea/plugins/InlineElements/locallang.xlf";s:4:"93d0";s:46:"htmlarea/plugins/InsertSmiley/insert-smiley.js";s:4:"c638";s:43:"htmlarea/plugins/InsertSmiley/locallang.xlf";s:4:"af72";s:46:"htmlarea/plugins/InsertSmiley/smileys/0001.gif";s:4:"2f23";s:46:"htmlarea/plugins/InsertSmiley/smileys/0002.gif";s:4:"bc20";s:46:"htmlarea/plugins/InsertSmiley/smileys/0003.gif";s:4:"12c2";s:46:"htmlarea/plugins/InsertSmiley/smileys/0004.gif";s:4:"3dcf";s:46:"htmlarea/plugins/InsertSmiley/smileys/0005.gif";s:4:"2a48";s:46:"htmlarea/plugins/InsertSmiley/smileys/0006.gif";s:4:"f970";s:46:"htmlarea/plugins/InsertSmiley/smileys/0007.gif";s:4:"97ee";s:46:"htmlarea/plugins/InsertSmiley/smileys/0008.gif";s:4:"3d2b";s:46:"htmlarea/plugins/InsertSmiley/smileys/0009.gif";s:4:"4be7";s:46:"htmlarea/plugins/InsertSmiley/smileys/0010.gif";s:4:"e3e0";s:46:"htmlarea/plugins/InsertSmiley/smileys/0011.gif";s:4:"ae73";s:46:"htmlarea/plugins/InsertSmiley/smileys/0012.gif";s:4:"653f";s:46:"htmlarea/plugins/InsertSmiley/smileys/0013.gif";s:4:"ee8f";s:46:"htmlarea/plugins/InsertSmiley/smileys/0014.gif";s:4:"9288";s:46:"htmlarea/plugins/InsertSmiley/smileys/0015.gif";s:4:"218d";s:46:"htmlarea/plugins/InsertSmiley/smileys/0016.gif";s:4:"3539";s:46:"htmlarea/plugins/InsertSmiley/smileys/0017.gif";s:4:"aede";s:46:"htmlarea/plugins/InsertSmiley/smileys/0018.gif";s:4:"0205";s:46:"htmlarea/plugins/InsertSmiley/smileys/0019.gif";s:4:"e398";s:46:"htmlarea/plugins/InsertSmiley/smileys/0020.gif";s:4:"2252";s:54:"htmlarea/plugins/InsertSmiley/smileys/mozilla_cool.png";s:4:"0ea8";s:53:"htmlarea/plugins/InsertSmiley/smileys/mozilla_cry.png";s:4:"d5b6";s:60:"htmlarea/plugins/InsertSmiley/smileys/mozilla_embarassed.png";s:4:"4bdb";s:61:"htmlarea/plugins/InsertSmiley/smileys/mozilla_footinmouth.png";s:4:"6db3";s:55:"htmlarea/plugins/InsertSmiley/smileys/mozilla_frown.png";s:4:"ffe3";s:58:"htmlarea/plugins/InsertSmiley/smileys/mozilla_innocent.png";s:4:"2a5e";s:54:"htmlarea/plugins/InsertSmiley/smileys/mozilla_kiss.png";s:4:"e585";s:58:"htmlarea/plugins/InsertSmiley/smileys/mozilla_laughing.png";s:4:"00f2";s:62:"htmlarea/plugins/InsertSmiley/smileys/mozilla_moneyinmouth.png";s:4:"d9f3";s:64:"htmlarea/plugins/InsertSmiley/smileys/mozilla_public_license.txt";s:4:"a773";s:56:"htmlarea/plugins/InsertSmiley/smileys/mozilla_sealed.png";s:4:"9945";s:55:"htmlarea/plugins/InsertSmiley/smileys/mozilla_smile.png";s:4:"99ec";s:59:"htmlarea/plugins/InsertSmiley/smileys/mozilla_surprised.png";s:4:"44b8";s:59:"htmlarea/plugins/InsertSmiley/smileys/mozilla_tongueout.png";s:4:"ef8a";s:59:"htmlarea/plugins/InsertSmiley/smileys/mozilla_undecided.png";s:4:"8a17";s:54:"htmlarea/plugins/InsertSmiley/smileys/mozilla_wink.png";s:4:"cfd8";s:54:"htmlarea/plugins/InsertSmiley/smileys/mozilla_yell.png";s:4:"e3be";s:37:"htmlarea/plugins/Language/language.js";s:4:"a98f";s:39:"htmlarea/plugins/Language/locallang.xlf";s:4:"911e";s:46:"htmlarea/plugins/MicrodataSchema/locallang.xlf";s:4:"0fef";s:52:"htmlarea/plugins/MicrodataSchema/microdata-schema.js";s:4:"4f62";s:40:"htmlarea/plugins/PlainText/locallang.xlf";s:4:"831b";s:40:"htmlarea/plugins/PlainText/plain-text.js";s:4:"425f";s:39:"htmlarea/plugins/QuickTag/locallang.xlf";s:4:"e53c";s:38:"htmlarea/plugins/QuickTag/quick-tag.js";s:4:"9434";s:43:"htmlarea/plugins/RemoveFormat/locallang.xlf";s:4:"a4e0";s:46:"htmlarea/plugins/RemoveFormat/remove-format.js";s:4:"7c5e";s:42:"htmlarea/plugins/SelectColor/locallang.xlf";s:4:"9644";s:42:"htmlarea/plugins/SelectFont/select-font.js";s:4:"45d4";s:43:"htmlarea/plugins/SpellChecker/locallang.xlf";s:4:"86f2";s:51:"htmlarea/plugins/SpellChecker/spell-check-style.css";s:4:"3c70";s:46:"htmlarea/plugins/SpellChecker/spell-checker.js";s:4:"602e";s:44:"htmlarea/plugins/TYPO3Browsers/locallang.xlf";s:4:"b30b";s:47:"htmlarea/plugins/TYPO3Browsers/img/download.gif";s:4:"f6d9";s:52:"htmlarea/plugins/TYPO3Browsers/img/external_link.gif";s:4:"9e48";s:63:"htmlarea/plugins/TYPO3Browsers/img/external_link_new_window.gif";s:4:"1a9c";s:52:"htmlarea/plugins/TYPO3Browsers/img/internal_link.gif";s:4:"12b9";s:63:"htmlarea/plugins/TYPO3Browsers/img/internal_link_new_window.gif";s:4:"402a";s:43:"htmlarea/plugins/TYPO3Browsers/img/mail.gif";s:4:"0f4f";s:41:"htmlarea/plugins/TYPO3Color/locallang.xlf";s:4:"a53f";s:41:"htmlarea/plugins/TYPO3Color/typo3color.js";s:4:"eaec";s:46:"htmlarea/plugins/TYPO3HtmlParser/locallang.xlf";s:4:"f1b1";s:52:"htmlarea/plugins/TYPO3HtmlParser/typo3html-parser.js";s:4:"50ba";s:41:"htmlarea/plugins/TYPO3Image/locallang.xlf";s:4:"4d72";s:41:"htmlarea/plugins/TYPO3Image/typo3image.js";s:4:"8729";s:39:"htmlarea/plugins/TYPO3Link/typo3link.js";s:4:"6987";s:46:"htmlarea/plugins/TableOperations/locallang.xlf";s:4:"4728";s:52:"htmlarea/plugins/TableOperations/table-operations.js";s:4:"d1ba";s:48:"htmlarea/plugins/TextIndicator/text-indicator.js";s:4:"1556";s:40:"htmlarea/plugins/TextStyle/locallang.xlf";s:4:"8ba2";s:40:"htmlarea/plugins/TextStyle/text-style.js";s:4:"6d1f";s:38:"htmlarea/plugins/UndoRedo/undo-redo.js";s:4:"1aa4";s:43:"htmlarea/plugins/UserElements/locallang.xlf";s:4:"fa50";s:46:"htmlarea/plugins/UserElements/user-elements.js";s:4:"0560";s:26:"htmlarea/popups/blank.html";s:4:"8d8d";s:32:"htmlarea/popups/editor_help.html";s:4:"398a";s:50:"htmlarea/skins/default/htmlarea-edited-content.css";s:4:"8f48";s:35:"htmlarea/skins/default/htmlarea.css";s:4:"72c4";s:54:"htmlarea/skins/default/images/alt_menu_mainitem_bg.gif";s:4:"b312";s:49:"htmlarea/skins/default/images/language-marker.gif";s:4:"7b48";s:43:"htmlarea/skins/default/images/microdata.gif";s:4:"7efb";s:44:"htmlarea/skins/default/images/row-header.png";s:4:"86ee";s:50:"htmlarea/skins/default/images/system-help-open.png";s:4:"4947";s:59:"htmlarea/skins/default/images/actions/abbreviation-edit.gif";s:4:"1eaa";s:55:"htmlarea/skins/default/images/actions/bidi-override.gif";s:4:"f38b";s:45:"htmlarea/skins/default/images/actions/big.gif";s:4:"779b";s:52:"htmlarea/skins/default/images/actions/blockquote.gif";s:4:"34dc";s:46:"htmlarea/skins/default/images/actions/bold.gif";s:4:"9120";s:53:"htmlarea/skins/default/images/actions/cell-delete.gif";s:4:"5a88";s:62:"htmlarea/skins/default/images/actions/cell-edit-properties.gif";s:4:"13fe";s:59:"htmlarea/skins/default/images/actions/cell-insert-after.gif";s:4:"2dd2";s:60:"htmlarea/skins/default/images/actions/cell-insert-before.gif";s:4:"5d13";s:52:"htmlarea/skins/default/images/actions/cell-merge.gif";s:4:"cb52";s:52:"htmlarea/skins/default/images/actions/cell-split.gif";s:4:"0095";s:67:"htmlarea/skins/default/images/actions/character-insert-from-map.gif";s:4:"af19";s:50:"htmlarea/skins/default/images/actions/citation.gif";s:4:"b6eb";s:46:"htmlarea/skins/default/images/actions/code.gif";s:4:"6057";s:58:"htmlarea/skins/default/images/actions/color-background.gif";s:4:"d97c";s:58:"htmlarea/skins/default/images/actions/color-foreground.gif";s:4:"dbc8";s:55:"htmlarea/skins/default/images/actions/column-delete.gif";s:4:"da78";s:64:"htmlarea/skins/default/images/actions/column-edit-properties.gif";s:4:"b178";s:61:"htmlarea/skins/default/images/actions/column-insert-after.gif";s:4:"80d8";s:62:"htmlarea/skins/default/images/actions/column-insert-before.gif";s:4:"d47d";s:54:"htmlarea/skins/default/images/actions/column-split.gif";s:4:"c168";s:46:"htmlarea/skins/default/images/actions/copy.gif";s:4:"98d2";s:45:"htmlarea/skins/default/images/actions/cut.gif";s:4:"748f";s:62:"htmlarea/skins/default/images/actions/definition-list-item.gif";s:4:"33ae";s:57:"htmlarea/skins/default/images/actions/definition-list.gif";s:4:"8128";s:52:"htmlarea/skins/default/images/actions/definition.gif";s:4:"692d";s:53:"htmlarea/skins/default/images/actions/delete-item.gif";s:4:"0d51";s:54:"htmlarea/skins/default/images/actions/deleted-text.gif";s:4:"4eec";s:59:"htmlarea/skins/default/images/actions/editor-show-about.gif";s:4:"1690";s:60:"htmlarea/skins/default/images/actions/editor-toggle-mode.gif";s:4:"fa6e";s:54:"htmlarea/skins/default/images/actions/element-edit.png";s:4:"baca";s:50:"htmlarea/skins/default/images/actions/emphasis.gif";s:4:"84e3";s:54:"htmlarea/skins/default/images/actions/find-replace.gif";s:4:"827f";s:64:"htmlarea/skins/default/images/actions/horizontal-rule-insert.gif";s:4:"82f0";s:52:"htmlarea/skins/default/images/actions/image-edit.gif";s:4:"c0f0";s:48:"htmlarea/skins/default/images/actions/indent.gif";s:4:"57df";s:55:"htmlarea/skins/default/images/actions/inserted-text.gif";s:4:"64e6";s:48:"htmlarea/skins/default/images/actions/italic.gif";s:4:"3d7d";s:56:"htmlarea/skins/default/images/actions/justify-center.gif";s:4:"588b";s:54:"htmlarea/skins/default/images/actions/justify-full.gif";s:4:"b129";s:54:"htmlarea/skins/default/images/actions/justify-left.gif";s:4:"3799";s:55:"htmlarea/skins/default/images/actions/justify-right.gif";s:4:"0662";s:50:"htmlarea/skins/default/images/actions/keyboard.gif";s:4:"ac36";s:61:"htmlarea/skins/default/images/actions/language-marks-show.gif";s:4:"0bbb";s:51:"htmlarea/skins/default/images/actions/link-edit.gif";s:4:"fbc1";s:56:"htmlarea/skins/default/images/actions/microdata-show.gif";s:4:"a4cc";s:53:"htmlarea/skins/default/images/actions/mono-spaced.gif";s:4:"9ce5";s:54:"htmlarea/skins/default/images/actions/ordered-list.gif";s:4:"eb1c";s:49:"htmlarea/skins/default/images/actions/outdent.gif";s:4:"a780";s:64:"htmlarea/skins/default/images/actions/paragraph-insert-after.gif";s:4:"e335";s:65:"htmlarea/skins/default/images/actions/paragraph-insert-before.gif";s:4:"9c42";s:57:"htmlarea/skins/default/images/actions/paste-behaviour.gif";s:4:"657a";s:54:"htmlarea/skins/default/images/actions/paste-toggle.gif";s:4:"4b1b";s:47:"htmlarea/skins/default/images/actions/paste.gif";s:4:"7df5";s:51:"htmlarea/skins/default/images/actions/quotation.gif";s:4:"b918";s:46:"htmlarea/skins/default/images/actions/redo.gif";s:4:"5fdf";s:55:"htmlarea/skins/default/images/actions/remove-format.gif";s:4:"e22c";s:52:"htmlarea/skins/default/images/actions/row-delete.gif";s:4:"b9f1";s:61:"htmlarea/skins/default/images/actions/row-edit-properties.gif";s:4:"32bd";s:58:"htmlarea/skins/default/images/actions/row-insert-above.gif";s:4:"1ef1";s:58:"htmlarea/skins/default/images/actions/row-insert-under.gif";s:4:"9ad6";s:51:"htmlarea/skins/default/images/actions/row-split.gif";s:4:"ebfd";s:48:"htmlarea/skins/default/images/actions/sample.gif";s:4:"667c";s:47:"htmlarea/skins/default/images/actions/small.gif";s:4:"a481";s:55:"htmlarea/skins/default/images/actions/smiley-insert.gif";s:4:"c331";s:60:"htmlarea/skins/default/images/actions/soft-hyphen-insert.gif";s:4:"cff4";s:46:"htmlarea/skins/default/images/actions/span.gif";s:4:"0dfa";s:53:"htmlarea/skins/default/images/actions/spell-check.gif";s:4:"9570";s:56:"htmlarea/skins/default/images/actions/strike-through.gif";s:4:"73b1";s:48:"htmlarea/skins/default/images/actions/strong.gif";s:4:"7f50";s:51:"htmlarea/skins/default/images/actions/subscript.gif";s:4:"fc56";s:53:"htmlarea/skins/default/images/actions/superscript.gif";s:4:"40c4";s:63:"htmlarea/skins/default/images/actions/table-edit-properties.gif";s:4:"2728";s:54:"htmlarea/skins/default/images/actions/table-insert.gif";s:4:"a703";s:55:"htmlarea/skins/default/images/actions/table-restyle.gif";s:4:"eeca";s:60:"htmlarea/skins/default/images/actions/table-show-borders.gif";s:4:"00be";s:52:"htmlarea/skins/default/images/actions/tag-insert.gif";s:4:"a463";s:70:"htmlarea/skins/default/images/actions/text-direction-left-to-right.gif";s:4:"1a1f";s:70:"htmlarea/skins/default/images/actions/text-direction-right-to-left.gif";s:4:"2a38";s:51:"htmlarea/skins/default/images/actions/underline.gif";s:4:"6250";s:46:"htmlarea/skins/default/images/actions/undo.gif";s:4:"8d53";s:48:"htmlarea/skins/default/images/actions/unlink.gif";s:4:"86c4";s:56:"htmlarea/skins/default/images/actions/unordered-list.gif";s:4:"7a02";s:59:"htmlarea/skins/default/images/actions/user-element-edit.gif";s:4:"b859";s:50:"htmlarea/skins/default/images/actions/variable.gif";s:4:"8520";s:49:"htmlarea/skins/default/images/sprites/actions.gif";s:4:"f452";s:49:"htmlarea/skins/default/images/sprites/actions.png";s:4:"47cc";s:59:"htmlarea/skins/default/images/status/dialog-information.png";s:4:"6235";s:50:"htmlarea/skins/default/images/status/dialog-ok.png";s:4:"e36c";s:54:"htmlarea/skins/default/images/status/loading-balls.gif";s:4:"386a";s:48:"htmlarea/skins/default/images/status/loading.gif";s:4:"82bc";s:50:"htmlarea/skins/default/images/status/resizable.gif";s:4:"83cf";s:18:"mod2/locallang.xlf";s:4:"8232";s:21:"mod3/browse_links.php";s:4:"4d8f";s:42:"mod3/class.tx_rtehtmlarea_browse_links.php";s:4:"38ca";s:14:"mod3/clear.gif";s:4:"cc11";s:13:"mod3/conf.php";s:4:"b2fb";s:18:"mod3/locallang.xlf";s:4:"d82d";s:42:"mod4/class.tx_rtehtmlarea_select_image.php";s:4:"b67f";s:14:"mod4/clear.gif";s:4:"cc11";s:13:"mod4/conf.php";s:4:"8598";s:18:"mod4/locallang.xlf";s:4:"8bce";s:21:"mod4/select_image.php";s:4:"9474";s:34:"mod5/class.tx_rtehtmlarea_user.php";s:4:"4659";s:14:"mod5/clear.gif";s:4:"cc11";s:13:"mod5/conf.php";s:4:"7149";s:18:"mod5/locallang.xlf";s:4:"65fd";s:13:"mod5/user.php";s:4:"ca91";s:40:"mod6/class.tx_rtehtmlarea_parse_html.php";s:4:"a47f";s:13:"mod6/conf.php";s:4:"0cab";s:19:"mod6/parse_html.php";s:4:"260c";s:32:"pi1/class.tx_rtehtmlarea_pi1.php";s:4:"5979";s:17:"pi1/locallang.xlf";s:4:"19a0";s:32:"pi2/class.tx_rtehtmlarea_pi2.php";s:4:"7c31";s:17:"pi2/locallang.xlf";s:4:"1b4a";s:32:"pi3/class.tx_rtehtmlarea_pi3.php";s:4:"78cd";s:36:"res/accessibilityicons/locallang.xlf";s:4:"b30b";s:39:"res/accessibilityicons/pageTSConfig.txt";s:4:"0231";s:39:"res/accessibilityicons/img/download.gif";s:4:"f6d9";s:44:"res/accessibilityicons/img/external_link.gif";s:4:"9e48";s:55:"res/accessibilityicons/img/external_link_new_window.gif";s:4:"1a9c";s:44:"res/accessibilityicons/img/internal_link.gif";s:4:"12b9";s:55:"res/accessibilityicons/img/internal_link_new_window.gif";s:4:"402a";s:35:"res/accessibilityicons/img/mail.gif";s:4:"0f4f";s:29:"res/advanced/pageTSConfig.txt";s:4:"681d";s:29:"res/advanced/userTSConfig.txt";s:4:"00c0";s:26:"res/contentcss/default.css";s:4:"eba6";s:28:"res/contentcss/locallang.xlf";s:4:"10dc";s:39:"res/contentcss/img/red_arrow_bullet.gif";s:4:"82d6";s:25:"res/demo/pageTSConfig.txt";s:4:"af9f";s:25:"res/demo/userTSConfig.txt";s:4:"b199";s:26:"res/image/pageTSConfig.txt";s:4:"2e2d";s:32:"res/indentalign/pageTSConfig.txt";s:4:"cdb8";s:25:"res/proc/pageTSConfig.txt";s:4:"81a0";s:26:"res/style/pageTSConfig.txt";s:4:"ca5a";s:28:"res/typical/pageTSConfig.txt";s:4:"7fb5";s:28:"res/typical/userTSConfig.txt";s:4:"abbe";s:29:"static/clickenlarge/setup.txt";s:4:"3594";s:46:"templates/rtehtmlarea_pageheader_frontend.html";s:4:"a243";}',
	'constraints' => array(
		'depends' => array(
			'cms' => '',
			'php' => '5.3.0-0.0.0',
			'typo3' => '4.7.0-4.7.99',
		),
		'conflicts' => array(
			'rte_conf' => '',
			'tkr_rteanchors' => '',
			'ad_rtepasteplain' => '',
			'rtehtmlarea_definitionlist' => '',
		),
		'suggests' => array(
			'rtehtmlarea_api_manual' => '',
			'setup' => '',
		),
	),
	'suggests' => array(
		'rtehtmlarea_api_manual' => '',
	),
);

?>