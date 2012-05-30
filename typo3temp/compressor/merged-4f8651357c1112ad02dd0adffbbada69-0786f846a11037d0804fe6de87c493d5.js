
/*
 * Modernizr v1.6
 * http://www.modernizr.com
 *
 * Developed by: 
 * - Faruk Ates  http://farukat.es/
 * - Paul Irish  http://paulirish.com/
 *
 * Copyright (c) 2009-2010
 * Dual-licensed under the BSD or MIT licenses.
 * http://www.modernizr.com/license/
 */
window.Modernizr=function(i,e,u){function s(a,b){return(""+a).indexOf(b)!==-1}function D(a,b){for(var c in a)if(j[a[c]]!==u&&(!b||b(a[c],E)))return true}function n(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1);c=(a+" "+F.join(c+" ")+c).split(" ");return!!D(c,b)}function S(){f.input=function(a){for(var b=0,c=a.length;b<c;b++)L[a[b]]=!!(a[b]in h);return L}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));f.inputtypes=function(a){for(var b=0,c,k=a.length;b<
k;b++){h.setAttribute("type",a[b]);if(c=h.type!=="text"){h.value=M;if(/^range$/.test(h.type)&&h.style.WebkitAppearance!==u){l.appendChild(h);c=e.defaultView;c=c.getComputedStyle&&c.getComputedStyle(h,null).WebkitAppearance!=="textfield"&&h.offsetHeight!==0;l.removeChild(h)}else/^(search|tel)$/.test(h.type)||(c=/^(url|email)$/.test(h.type)?h.checkValidity&&h.checkValidity()===false:h.value!=M)}N[a[b]]=!!c}return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}
var f={},l=e.documentElement,E=e.createElement("modernizr"),j=E.style,h=e.createElement("input"),M=":)",O=Object.prototype.toString,q=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),F="Webkit Moz O ms Khtml".split(" "),v={svg:"http://www.w3.org/2000/svg"},d={},N={},L={},P=[],w,Q=function(a){var b=document.createElement("style"),c=e.createElement("div");b.textContent=a+"{#modernizr{height:3px}}";(e.head||e.getElementsByTagName("head")[0]).appendChild(b);c.id="modernizr";l.appendChild(c);a=c.offsetHeight===
3;b.parentNode.removeChild(b);c.parentNode.removeChild(c);return!!a},o=function(){var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(b,c){c=c||document.createElement(a[b]||"div");b="on"+b;var k=b in c;if(!k){c.setAttribute||(c=document.createElement("div"));if(c.setAttribute&&c.removeAttribute){c.setAttribute(b,"");k=typeof c[b]=="function";if(typeof c[b]!="undefined")c[b]=u;c.removeAttribute(b)}}return k}}(),G={}.hasOwnProperty,R;R=
typeof G!=="undefined"&&typeof G.call!=="undefined"?function(a,b){return G.call(a,b)}:function(a,b){return b in a&&typeof a.constructor.prototype[b]==="undefined"};d.flexbox=function(){var a=e.createElement("div"),b=e.createElement("div");(function(k,g,r,x){g+=":";k.style.cssText=(g+q.join(r+";"+g)).slice(0,-g.length)+(x||"")})(a,"display","box","width:42px;padding:0;");b.style.cssText=q.join("box-flex:1;")+"width:10px;";a.appendChild(b);l.appendChild(a);var c=b.offsetWidth===42;a.removeChild(b);
l.removeChild(a);return c};d.canvas=function(){var a=e.createElement("canvas");return!!(a.getContext&&a.getContext("2d"))};d.canvastext=function(){return!!(f.canvas&&typeof e.createElement("canvas").getContext("2d").fillText=="function")};d.webgl=function(){var a=e.createElement("canvas");try{if(a.getContext("webgl"))return true}catch(b){}try{if(a.getContext("experimental-webgl"))return true}catch(c){}return false};d.touch=function(){return"ontouchstart"in i||Q("@media ("+q.join("touch-enabled),(")+
"modernizr)")};d.geolocation=function(){return!!navigator.geolocation};d.postmessage=function(){return!!i.postMessage};d.websqldatabase=function(){return!!i.openDatabase};d.indexedDB=function(){for(var a=-1,b=F.length;++a<b;){var c=F[a].toLowerCase();if(i[c+"_indexedDB"]||i[c+"IndexedDB"])return true}return false};d.hashchange=function(){return o("hashchange",i)&&(document.documentMode===u||document.documentMode>7)};d.history=function(){return!!(i.history&&history.pushState)};d.draganddrop=function(){return o("drag")&&
o("dragstart")&&o("dragenter")&&o("dragover")&&o("dragleave")&&o("dragend")&&o("drop")};d.websockets=function(){return"WebSocket"in i};d.rgba=function(){j.cssText="background-color:rgba(150,255,150,.5)";return s(j.backgroundColor,"rgba")};d.hsla=function(){j.cssText="background-color:hsla(120,40%,100%,.5)";return s(j.backgroundColor,"rgba")||s(j.backgroundColor,"hsla")};d.multiplebgs=function(){j.cssText="background:url(//:),url(//:),red url(//:)";return/(url\s*\(.*?){3}/.test(j.background)};d.backgroundsize=
function(){return n("backgroundSize")};d.borderimage=function(){return n("borderImage")};d.borderradius=function(){return n("borderRadius","",function(a){return s(a,"orderRadius")})};d.boxshadow=function(){return n("boxShadow")};d.textshadow=function(){return e.createElement("div").style.textShadow===""};d.opacity=function(){var a=q.join("opacity:.5;")+"";j.cssText=a;return s(j.opacity,"0.5")};d.cssanimations=function(){return n("animationName")};d.csscolumns=function(){return n("columnCount")};d.cssgradients=
function(){var a=("background-image:"+q.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:")+q.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0,-17);j.cssText=a;return s(j.backgroundImage,"gradient")};d.cssreflections=function(){return n("boxReflect")};d.csstransforms=function(){return!!D(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])};d.csstransforms3d=function(){var a=!!D(["perspectiveProperty","WebkitPerspective",
"MozPerspective","OPerspective","msPerspective"]);if(a)a=Q("@media ("+q.join("transform-3d),(")+"modernizr)");return a};d.csstransitions=function(){return n("transitionProperty")};d.fontface=function(){var a,b=e.head||e.getElementsByTagName("head")[0]||l,c=e.createElement("style"),k=e.implementation||{hasFeature:function(){return false}};c.type="text/css";b.insertBefore(c,b.firstChild);a=c.sheet||c.styleSheet;b=k.hasFeature("CSS2","")?function(g){if(!(a&&g))return false;var r=false;try{a.insertRule(g,
0);r=!/unknown/i.test(a.cssRules[0].cssText);a.deleteRule(a.cssRules.length-1)}catch(x){}return r}:function(g){if(!(a&&g))return false;a.cssText=g;return a.cssText.length!==0&&!/unknown/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(g.split(" ")[0])===0};f._fontfaceready=function(g){g(f.fontface)};return b('@font-face { font-family: "font"; src: "font.ttf"; }')};d.video=function(){var a=e.createElement("video"),b=!!a.canPlayType;if(b){b=new Boolean(b);b.ogg=a.canPlayType('video/ogg; codecs="theora"');
b.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"')||a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');b.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return b};d.audio=function(){var a=e.createElement("audio"),b=!!a.canPlayType;if(b){b=new Boolean(b);b.ogg=a.canPlayType('audio/ogg; codecs="vorbis"');b.mp3=a.canPlayType("audio/mpeg;");b.wav=a.canPlayType('audio/wav; codecs="1"');b.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}return b};d.localstorage=function(){try{return"localStorage"in
i&&i.localStorage!==null}catch(a){return false}};d.sessionstorage=function(){try{return"sessionStorage"in i&&i.sessionStorage!==null}catch(a){return false}};d.webWorkers=function(){return!!i.Worker};d.applicationcache=function(){return!!i.applicationCache};d.svg=function(){return!!e.createElementNS&&!!e.createElementNS(v.svg,"svg").createSVGRect};d.inlinesvg=function(){var a=document.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==v.svg};d.smil=function(){return!!e.createElementNS&&
/SVG/.test(O.call(e.createElementNS(v.svg,"animate")))};d.svgclippaths=function(){return!!e.createElementNS&&/SVG/.test(O.call(e.createElementNS(v.svg,"clipPath")))};for(var H in d)if(R(d,H)){w=H.toLowerCase();f[w]=d[H]();P.push((f[w]?"":"no-")+w)}f.input||S();f.crosswindowmessaging=f.postmessage;f.historymanagement=f.history;f.addTest=function(a,b){a=a.toLowerCase();if(!f[a]){b=!!b();l.className+=" "+(b?"":"no-")+a;f[a]=b;return f}};j.cssText="";E=h=null;i.attachEvent&&function(){var a=e.createElement("div");
a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function c(p){for(var m=-1;++m<r;)p.createElement(g[m])}function k(p,m){for(var I=p.length,t=-1,y,J=[];++t<I;){y=p[t];m=y.media||m;J.push(k(y.imports,m));J.push(y.cssText)}return J.join("")}var g="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),r=g.length,x=RegExp("<(/*)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)",
"gi"),T=RegExp("\\b(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)\\b(?!.*[;}])","gi"),z=b.createDocumentFragment(),A=b.documentElement,K=A.firstChild,B=b.createElement("style"),C=b.createElement("body");B.media="all";c(b);c(z);a.attachEvent("onbeforeprint",function(){for(var p=-1;++p<r;)for(var m=b.getElementsByTagName(g[p]),I=m.length,t=-1;++t<I;)if(m[t].className.indexOf("iepp_")<0)m[t].className+=" iepp_"+
g[p];K.insertBefore(B,K.firstChild);B.styleSheet.cssText=k(b.styleSheets,"all").replace(T,".iepp_$1");z.appendChild(b.body);A.appendChild(C);C.innerHTML=z.firstChild.innerHTML.replace(x,"<$1bdo")});a.attachEvent("onafterprint",function(){C.innerHTML="";A.removeChild(C);K.removeChild(B);A.appendChild(z.firstChild)})}(this,document);f._enableHTML5=true;f._version="1.6";l.className=l.className.replace(/\bno-js\b/,"")+" js";l.className+=" "+P.join(" ");return f}(this,this.document);
/***************************************************************
*  Copyright notice
*
*  (c) 2008-2011 Jeff Segars <jeff@webempoweredchurch.org>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/


Element.addMethods({
	pngHack: function(element) {
		element = $(element);
		var transparentGifPath = 'clear.gif';

			// If there is valid element, it is an image and the image file ends with png:
		if (Object.isElement(element) && element.tagName === 'IMG' && element.src.endsWith('.png')) {
			var alphaImgSrc = element.src;
			var sizingMethod = 'scale';
			element.src = transparentGifPath;
		}

		if (alphaImgSrc) {
			element.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="#{alphaImgSrc}",sizingMethod="#{sizingMethod}")'.interpolate(
			{
				alphaImgSrc: alphaImgSrc,
				sizingMethod: sizingMethod
			});
		}

		return element;
	}
});

var IECompatibility = Class.create({

	/**
	 * initializes the compatibility class
	 */
	initialize: function() {
		Event.observe(document, 'dom:loaded', function() {
			$$('input[type="checkbox"]').invoke('addClassName', 'checkbox');
		}.bind(this));

		Event.observe(window, 'load', function() {
			if (Prototype.Browser.IE) {
				var version = parseFloat(navigator.appVersion.split(';')[1].strip().split(' ')[1]);
				if (version === 6) {
					$$('img').each(function(img) {
						img.pngHack();
					});
					$$('#typo3-menu li ul li').each(function(li) {
						li.setStyle({height: '21px'});
					});
				}
			}
		});
	}
});

if (Prototype.Browser.IE) {
	var TYPO3IECompatibilty = new IECompatibility();
}

/**
 * Javascript functions regarding the clickmenu
 * relies on the javascript library "prototype"
 *
 * (c) 2007-2011 Benjamin Mack <www.xnos.org>
 * All rights reserved
 *
 * This script is part of TYPO3 by
 * Kasper Skaarhoj <kasperYYYYY@typo3.com>
 *
 * Released under GNU/GPL (see license file in tslib/)
 *
 * This script is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * This copyright notice MUST APPEAR in all copies of this script
 */

/**
 * new clickmenu code to make an AJAX call and render the 
 * AJAX result in a layer next to the mouse cursor
 */
var Clickmenu = {
	clickURL: 'alt_clickmenu.php',	// URL to the clickmenu.php file, see template.php
	ajax: true,	// template.php -> isCMLayers check
	mousePos: { X: null, Y: null },
	delayClickMenuHide: false,

	/**
	 * main function, called from most clickmenu links
	 * @param	table		table from where info should be fetched
	 * @param	uid		the UID of the item
	 * @param	listFr		list Frame?
	 * @param	enDisItems	Items to disable / enable
	 * @param	backPath	TYPO3 backPath
	 * @param	addParams	additional params
	 * @return	nothing
	 */
	show: function(table, uid, listFr, enDisItems, backPath, addParams) {
		var params = 'table=' + encodeURIComponent(table) +
			'&uid=' + uid +
			'&listFr=' + listFr +
			'&enDisItems=' + enDisItems +
			'&backPath=' + backPath +
			'&addParams=' + addParams;
		this.callURL(params);
	},


	/**
	 * switch function that either makes an AJAX call
	 * or loads the request in the top frame
	 *
 	 * @param	params	parameters added to the URL
	 * @return	nothing
	 */ 
	callURL: function(params) {	
		if (this.ajax && Ajax.getTransport()) { // run with AJAX
			params += '&ajax=1';
			var call = new Ajax.Request(this.clickURL, {
				method: 'get',
				parameters: params,
				onComplete: function(xhr) {
					var response = xhr.responseXML;
					if (!response.getElementsByTagName('data')[0]) {
						return;
					}
					var menu  = response.getElementsByTagName('data')[0].getElementsByTagName('clickmenu')[0];
					var data  = menu.getElementsByTagName('htmltable')[0].firstChild.data;
					var level = menu.getElementsByTagName('cmlevel')[0].firstChild.data;
					this.populateData(data, level);
				}.bind(this)
			});
		}
	},


	/**
	 * fills the clickmenu with content and displays it correctly
	 * depending on the mouse position
	 * @param	data	the data that will be put in the menu
	 * @param	level	the depth of the clickmenu
	 */
	populateData: function(data, level) {
		if (!$('contentMenu0')) {
			this.addClickmenuItem();
		}
		level = parseInt(level, 10) || 0;
		var obj = $('contentMenu' + level);

		if (obj && (level === 0 || Element.visible('contentMenu' + (level-1)))) {
			obj.innerHTML = data;
			var x = this.mousePos.X;
			var y = this.mousePos.Y;
			var dimsWindow = document.viewport.getDimensions();
			dimsWindow.width = dimsWindow.width-20; // saving margin for scrollbars

			var dims = Element.getDimensions(obj); // dimensions for the clickmenu
			var offset = document.viewport.getScrollOffsets();
			var relative = { X: this.mousePos.X - offset.left, Y: this.mousePos.Y - offset.top };

			// adjusting the Y position of the layer to fit it into the window frame
			// if there is enough space above then put it upwards,
			// otherwise adjust it to the bottom of the window
			if (dimsWindow.height - dims.height < relative.Y) {
				if (relative.Y > dims.height) {
					y -= (dims.height - 10);
				} else {
					y += (dimsWindow.height - dims.height - relative.Y);
				}
			}
			// adjusting the X position like Y above, but align it to the left side of the viewport if it does not fit completely
			if (dimsWindow.width - dims.width < relative.X) {
				if (relative.X > dims.width) {
					x -= (dims.width - 10);
				} else if ((dimsWindow.width - dims.width - relative.X) < offset.left) {
					x = offset.left;
				} else {
					x += (dimsWindow.width - dims.width - relative.X);
				}
			}

			obj.style.left = x + 'px';
			obj.style.top  = y + 'px';
			Element.show(obj);
		}
		if (/MSIE5/.test(navigator.userAgent)) {
			this._toggleSelectorBoxes('hidden');
		}
	},


	/**
	 * event handler function that saves the actual position of the mouse
	 * in the Clickmenu object
	 * @param	event	the event object
	 */
	calcMousePosEvent: function(event) {
		if (!event) {
			event = window.event;
		}
		this.mousePos.X = Event.pointerX(event);
		this.mousePos.Y = Event.pointerY(event);
		this.mouseOutFromMenu('contentMenu0');
		this.mouseOutFromMenu('contentMenu1');
	},


	/**
	 * hides a visible menu if the mouse has moved outside
	 * of the object
	 * @param	obj	the object to hide
	 * @result	nothing
	 */
	mouseOutFromMenu: function(obj) {
		obj = $(obj);
		if (obj && Element.visible(obj) && !Position.within(obj, this.mousePos.X, this.mousePos.Y)) {
			this.hide(obj);
			if (/MSIE5/.test(navigator.userAgent) && obj.id === 'contentMenu0') {
				this._toggleSelectorBoxes('visible');
			}
		} else if (obj && Element.visible(obj)) {
			this.delayClickMenuHide = true;
		}
	},

	/**
	 * hides a clickmenu
	 *
	 * @param	obj	the clickmenu object to hide
	 * @result	nothing
	 */
	hide: function(obj) {
		this.delayClickMenuHide = false;
		window.setTimeout(function() {
			if (!Clickmenu.delayClickMenuHide) {
				Element.hide(obj);
			}
		}, 500);
	},

	/**
	 * hides all clickmenus
	 */
	hideAll: function() {
		this.hide('contentMenu0');
		this.hide('contentMenu1');
	},


	/**
	 * hides / displays all selector boxes in a page, fixes an IE 5 selector problem
	 * originally by Michiel van Leening
	 *
	 * @param	action 	hide (= "hidden") or show (= "visible")
	 * @result	nothing
	 */
	_toggleSelectorBoxes: function(action) {
		for (var i = 0; i < document.forms.length; i++) {
			for (var j = 0; j < document.forms[i].elements.length; j++) {
				if (document.forms[i].elements[j].type == 'select-one') {
					document.forms[i].elements[j].style.visibility = action;
				}
			}
		}
	},


	/**
	 * manipulates the DOM to add the divs needed for clickmenu at the bottom of the <body>-tag
	 *
	 * @return	nothing
	 */
	addClickmenuItem: function() {
		var code = '<div id="contentMenu0" style="display: block;"></div><div id="contentMenu1" style="display: block;"></div>';
		var insert = new Insertion.Bottom(document.getElementsByTagName('body')[0], code);
	}
}

// register mouse movement inside the document
Event.observe(document, 'mousemove', Clickmenu.calcMousePosEvent.bindAsEventListener(Clickmenu), true);


// @deprecated: Deprecated functions since 4.2, here for compatibility, remove in 4.4+
// ## BEGIN ##

// Still used in Core: typo3/template.php::wrapClickMenuOnIcon()
function showClickmenu(table, uid, listFr, enDisItems, backPath, addParams)	{
	Clickmenu.show(table, uid, listFr, enDisItems, backPath, addParams);
}

// Still used in Core: typo3/alt_clickmenu.php::linkItem()
function showClickmenu_raw(url) {
	var parts = url.split('?');
	if (parts.length === 2) {
		Clickmenu.clickURL = parts[0];
		Clickmenu.callURL(parts[1]);
	} else {
		Clickmenu.callURL(url);
	}
}
function showClickmenu_noajax(url) {
	Clickmenu.ajax = false; showClickmenu_raw(url);
}
function setLayerObj(tableData, cmLevel) {
	Clickmenu.populateData(tableData, cmLevel);
}
function hideEmpty() {
	Clickmenu.hideAll();
	return false;
}
function hideSpecific(level) {
	if (level === 0 || level === 1)	{
		Clickmenu.hide('contentMenu'+level);
	}
} 
function showHideSelectorBoxes(action) {
	toggleSelectorBoxes(action);
}
// ## END ##

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010-2011 Oliver Hader <oliver@typo3.org>
 *  (c) 2010-2011 Steffen Kamper <steffen@typo3.org>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

Ext.ns('TYPO3', 'TYPO3.Components');

/**
 * TYPO3window - General TYPO3 window component
 */
TYPO3.Components.Window = Ext.extend(Ext.Window, {
	width: 450,
	autoHeight: true,
	closable: true,
	resizable: false,
	plain: true,
	border: false,
	modal: true,
	draggable: true,
	closeAction: 'hide',
	cls: 't3-window',

	constructor: function(config) {
		config = config || {};
		Ext.apply(this, config);
		TYPO3.Components.Window.superclass.constructor.call(this, config);
	}
});
Ext.reg('TYPO3window', TYPO3.Components.Window);


/**
 * Helper class for managing windows.
 * Once a window is created, it is permanent until you close
 * [TYPO3.Windows.close(id)] or remove all [TYPO3.Windows.closeAll()]
 *
 * Example usage:
 *
 * var w = TYPO3.Windows.getWindow({
 *		title: 'Testwindow',
 *		html: 'some content!',
 *		width: 400
 *	}).show();
 */
TYPO3.Windows = function() {
	/** @private */
	var windowCollection = new Ext.util.MixedCollection(true);

	return {
		/** @public */

		/**
		 * Get a window. If already in collection return it, otherwise create a new one
		 *
		 * @param {Object} configuration
		 * @return {Object} window
		 */
		getWindow: function(configuration) {
			var id = configuration.id || '', window;

			if (id) {
				window = this.getById(id);
			}
			if (window) {
				return window;
			} else {
				window = new TYPO3.Components.Window(configuration);
				windowCollection.add(window);
				return window;
			}
		},

		/**
		 * Get a window and show. If already in collection return it, otherwise create a new one
		 *
		 * @param {Object} configuration
		 * @return {Object} window
		 */
		showWindow: function(configuration) {
			var window = this.getWindow(configuration);
			window.show();
			return window;
		},

		/**
		 * Shows window with id and return reference. If not exist return false
		 *
		 * @param {String} id
		 * @return {Object} window false if not found
		 */
		show: function(id) {
			var window = this.getById(id);
			if (window) {
				window.show();
				return window;
			}
			return false;
		},

		/**
		 * Shows window with id and return reference. If not exist return false
		 *
		 * @param {String} id
		 * @return {Object} window or false if not found
		 */
		getById: function(id) {
			return windowCollection.key(id);
		},

		/**
		 * Get the window collection
		 *
		 * @return {Ext.util.MixedCollection} windowCollection
		 */
		getCollection: function () {
			return windowCollection;
		},

		/**
		 * Get count of windows
		 *
		 * @return {Int} count
		 */
		getCount: function() {
			return windowCollection.length;
		},

		/**
		 * Each for windowCollection
		 *
		 * @param {Function} function
		 * @param {Object} scope
		 * @return void
		 */
		each : function(fn, scope) {
			windowCollection.each(fn, scope);
		},

		/**
		 * Close window and remove from stack
		 *
		 * @param {Int} id
		 * @return void
		 */
		close: function(id) {
			var window = this.getById(id);
			if (window) {
				window.close();
				windowCollection.remove(window);
			}
		},

		/**
		 * Close all windows and clear stack
		 *
		 * @return void
		 */
		closeAll: function() {
			windowCollection.each(function(window) {
				window.close();
			});
			windowCollection.clear();
		}
	}
}();

/**
 * Helper class for dialog windows
 *
 * Example usage:
 *
 * TYPO3.Dialog.InformationDialog({
 * 		title: 'Test',
 *		msg: 'some information'
 *	});

 */
TYPO3.Dialog = function() {
	/** @private functions */
	var informationDialogConfiguration = {
		buttons: Ext.MessageBox.OK,
		icon: Ext.MessageBox.INFO,
		fn: Ext.emptyFn
	};

	var questionDialogConfiguration = {
		buttons: Ext.MessageBox.YESNO,
		icon: Ext.MessageBox.QUESTION
	};

	var warningDialogConfiguration = {
		buttons: Ext.MessageBox.OK,
		icon: Ext.MessageBox.WARNING,
		fn: Ext.emptyFn
	};

	var errorDialogConfiguration = {
		buttons: Ext.MessageBox.OK,
		icon: Ext.MessageBox.ERROR,
		fn: Ext.emptyFn
	};


	return {
		/** @public functions */
		InformationDialog: function(configuration) {
			configuration = configuration || {};
			configuration = Ext.apply(
					informationDialogConfiguration,
					configuration
					);
			Ext.Msg.show(configuration);
		},

		QuestionDialog: function(configuration) {
			configuration = configuration || {};
			configuration = Ext.apply(
					questionDialogConfiguration,
					configuration
					);
			Ext.Msg.show(configuration);
		},

		WarningDialog: function(configuration) {
			configuration = configuration || {};
			configuration = Ext.apply(
					warningDialogConfiguration,
					configuration
					);
			Ext.Msg.show(configuration);
		},

		ErrorDialog: function(configuration) {
			configuration = configuration || {};
			configuration = Ext.apply(
					errorDialogConfiguration,
					configuration
					);
			Ext.Msg.show(configuration);
		}
	}
}();

/**
 * Helper class for dialog windows
 *
 * Example usage:
 *
 * TYPO3.ContextHelpWindow.open(identifier);
 */
TYPO3.ContextHelpWindow = function() {
	/**
	* Path to typo3 directory
	*
	* @type {String}
	* @private
	*/
	var typo3Path = '';

	/**
	* Context for open a window
	* "window" - open a new window
	* "inline" - open a TYPO3.Window (not currently implementy)
	*
	* @type {String}
	* @private
	*/
	var openContext;

	/**
	* Width for the window
	*
	* @type {Number}
	* @private
	*/
	var width;
	/**
	* Height of the window
	*
	* @type {Number}
	* @private
	*/
	var height;


	return {
		/**
		 * init class vars
		 *
		 * @return void
		 */
		init: function() {
			this.typo3Path = top.TYPO3.configuration.PATH_typo3;
			this.openContext = 'window';
			this.width = top.TYPO3.configuration.ContextHelpWindows.width;
			this.height = top.TYPO3.configuration.ContextHelpWindows.height;
		},

		/**
		 * Open window for TYPO3 inline help
		 *
		 * @param {String} help identifier
		 * @return {Object} window
		 */
		open: function(helpIdentifier) {
			if (this.openContext === 'window') {
				var cshWindow = window.open(
					this.typo3Path + 'view_help.php?tfID=' + helpIdentifier,
					'ContextHelpWindow',
					'height=' + this.height + ',width=' + this.width + ',status=0,menubar=0,scrollbars=1'
				);
				cshWindow.focus();
				return cshWindow;
			}
		}
	}
}();

/***************************************************************
*  Copyright notice
*
*  (c) 2002-2004 interactivetools.com, inc.
*  (c) 2003-2004 dynarch.com
*  (c) 2004-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This script is a modified version of a script published under the htmlArea License.
*  A copy of the htmlArea License may be found in the textfile HTMLAREA_LICENSE.txt.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * Main script of TYPO3 htmlArea RTE
 */
	// Avoid re-initialization on AJax call when HTMLArea object was already initialized
if (typeof(HTMLArea) == 'undefined') {
	// Establish HTMLArea name space
Ext.namespace('HTMLArea.CSS', 'HTMLArea.util.TYPO3', 'HTMLArea.util.Tips', 'HTMLArea.util.Color', 'Ext.ux.form', 'Ext.ux.menu', 'Ext.ux.Toolbar');
Ext.apply(HTMLArea, {
	/***************************************************
	 * COMPILED REGULAR EXPRESSIONS                    *
	 ***************************************************/
	RE_htmlTag		: /<.[^<>]*?>/g,
	RE_tagName		: /(<\/|<)\s*([^ \t\n>]+)/ig,
	RE_head			: /<head>((.|\n)*?)<\/head>/i,
	RE_body			: /<body>((.|\n)*?)<\/body>/i,
		// This expression is deprecated as of TYPO3 4.7
	Reg_body		: new RegExp('<\/?(body)[^>]*>', 'gi'),
	reservedClassNames	: /htmlarea/,
	RE_email		: /([0-9a-z]+([a-z0-9_-]*[0-9a-z])*){1}(\.[0-9a-z]+([a-z0-9_-]*[0-9a-z])*)*@([0-9a-z]+([a-z0-9_-]*[0-9a-z])*\.)+[a-z]{2,9}/i,
	RE_url			: /(([^:/?#]+):\/\/)?(([a-z0-9_]+:[a-z0-9_]+@)?[a-z0-9_-]{2,}(\.[a-z0-9_-]{2,})+\.[a-z]{2,5}(:[0-9]+)?(\/\S+)*\/?)/i,
		// This expression is deprecated as of TYPO3 4.6
	RE_blockTags		: /^(address|article|aside|body|blockquote|caption|dd|div|dl|dt|fieldset|footer|form|header|hr|h1|h2|h3|h4|h5|h6|iframe|li|ol|p|pre|nav|noscript|section|table|tbody|td|tfoot|th|thead|tr|ul)$/i,
		// This expression is deprecated as of TYPO3 4.6
	RE_closingTags		: /^(p|blockquote|a|li|ol|ul|dl|dt|td|th|tr|tbody|thead|tfoot|caption|colgroup|table|div|b|bdo|big|cite|code|del|dfn|em|i|ins|kbd|label|q|samp|small|span|strike|strong|sub|sup|tt|u|var|abbr|acronym|font|center|object|embed|style|script|title|head)$/i,
		// This expression is deprecated as of TYPO3 4.6
	RE_noClosingTag		: /^(area|base|br|col|command|embed|hr|img|input|keygen|meta|param|source|track|wbr)$/i,
	RE_numberOrPunctuation	: /[0-9.(),;:!¡?¿%#$'"_+=\\\/-]*/g,
	/***************************************************
	 * LOCALIZATION                                    *
	 ***************************************************/
	localize: function (label, plural) {
		var i = plural || 0;
		var localized = HTMLArea.I18N.dialogs[label] || HTMLArea.I18N.tooltips[label] || HTMLArea.I18N.msg[label] || '';
		if (typeof localized === 'object' && typeof localized[i] !== 'undefined') {
			localized = localized[i]['target'];
		}
		return localized;
	},
	/***************************************************
	 * INITIALIZATION                                  *
	 ***************************************************/
	init: function () {
		if (!HTMLArea.isReady) {
				// Apply global configuration settings
			Ext.apply(HTMLArea, RTEarea[0]);
			Ext.applyIf(HTMLArea, {
				editorSkin	: HTMLArea.editorUrl + 'skins/default/',
				editorCSS	: HTMLArea.editorUrl + 'skins/default/htmlarea.css'
			});
			if (!Ext.isString(HTMLArea.editedContentCSS)) {
				HTMLArea.editedContentCSS = HTMLArea.editorSkin + 'htmlarea-edited-content.css';
			}
			HTMLArea.isReady = true;
			HTMLArea.appendToLog('', 'HTMLArea', 'init', 'Editor url set to: ' + HTMLArea.editorUrl, 'info');
			HTMLArea.appendToLog('', 'HTMLArea', 'init', 'Editor skin CSS set to: ' + HTMLArea.editorCSS, 'info');
			HTMLArea.appendToLog('', 'HTMLArea', 'init', 'Editor content skin CSS set to: ' + HTMLArea.editedContentCSS, 'info');
		}
	},
	/*
	 * Create an editor when HTMLArea is loaded and when Ext is ready
	 *
	 * @param	string		editorId: the id of the editor
	 *
	 * @return 	boolean		false if successful
	 */
	initEditor: function (editorId) {
		if (document.getElementById('pleasewait' + editorId)) {
			if (HTMLArea.checkSupportedBrowser()) {
				document.getElementById('pleasewait' + editorId).style.display = 'block';
				document.getElementById('editorWrap' + editorId).style.visibility = 'hidden';
				if (!HTMLArea.isReady) {
					HTMLArea.initEditor.defer(150, null, [editorId]);
				} else {
						// Create an editor for the textarea
					var editor = new HTMLArea.Editor(Ext.apply(new HTMLArea.Config(editorId), RTEarea[editorId]));
					editor.generate();
					return false;
				}
			} else {
				document.getElementById('pleasewait' + editorId).style.display = 'none';
				document.getElementById('editorWrap' + editorId).style.visibility = 'visible';
			}
		}
		return true;
	},
	/*
	 * Check if the client agent is supported
	 *
	 * @return	boolean		true if the client is supported
	 */
	checkSupportedBrowser: function () {
		return Ext.isGecko || Ext.isWebKit || Ext.isOpera || Ext.isIE;
	},
	/*
	 * Write message to JavaScript console
	 *
	 * @param	string		editorId: the id of the editor issuing the message
	 * @param	string		objectName: the name of the object issuing the message
	 * @param	string		functionName: the name of the function issuing the message
	 * @param	string		text: the text of the message
	 * @param	string		type: the type of message: 'log', 'info', 'warn' or 'error'
	 *
	 * @return	void
	 */
	appendToLog: function (editorId, objectName, functionName, text, type) {
		var str = 'RTE[' + editorId + '][' + objectName + '::' + functionName + ']: ' + text;
		if (typeof(type) === 'undefined') {
			var type = 'info';
		}
		if (typeof(console) !== 'undefined' && typeof(console) === 'object') {
				// If console is TYPO3.Backend.DebugConsole, write only error messages
			if (Ext.isFunction(console.addTab)) {
				if (type === 'error') {
					console[type](str);
				}
			} else {
				console[type](str);
			}
		}
	}
});
/***************************************************
 *  EDITOR CONFIGURATION
 ***************************************************/
HTMLArea.Config = function (editorId) {
	this.editorId = editorId;
		// if the site is secure, create a secure iframe
	this.useHTTPS = false;
		// for Mozilla
	this.useCSS = false;
	this.enableMozillaExtension = true;
	this.disableEnterParagraphs = false;
	this.disableObjectResizing = false;
	this.removeTrailingBR = true;
		// style included in the iframe document
	this.editedContentStyle = HTMLArea.editedContentCSS;
		// content style
	this.pageStyle = "";
		// Maximum attempts at accessing the stylesheets
	this.styleSheetsMaximumAttempts = 20;
		// Remove tags (must be a regular expression)
	this.htmlRemoveTags = /none/i;
		// Remove tags and their contents (must be a regular expression)
	this.htmlRemoveTagsAndContents = /none/i;
		// Remove comments
	this.htmlRemoveComments = false;
		// Custom tags (must be a regular expression)
	this.customTags = /none/i;
		// BaseURL to be included in the iframe document
	this.baseURL = document.baseURI;
		// IE does not support document.baseURI
		// Since document.URL is incorrect when using realurl, get first base tag and extract href
	if (!this.baseURL) {
		var baseTags = document.getElementsByTagName ('base');
		if (baseTags.length > 0) {
			this.baseURL = baseTags[0].href;
		} else {
			this.baseURL = document.URL;
		}
	}
	if (this.baseURL && this.baseURL.match(/(.*\:\/\/.*\/)[^\/]*/)) {
		this.baseURL = RegExp.$1;
	}
		// URL-s
	this.popupURL = "popups/";
		// DocumentType
	this.documentType = '<!DOCTYPE html\r'
			+ '    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\r'
			+ '    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r';
	this.blankDocument = '<html><head></head><body></body></html>';
		// Hold the configuration of buttons and hot keys registered by plugins
	this.buttonsConfig = {};
	this.hotKeyList = {};
		// Default configurations for toolbar items
	this.configDefaults = {
		all: {
			xtype: 'htmlareabutton',
			disabledClass: 'buttonDisabled',
			textMode: false,
			selection: false,
			dialog: false,
			hidden: false,
			hideMode: 'display'
		},
		htmlareabutton: {
			cls: 'button',
			overCls: 'buttonHover',
				// Erratic behaviour of click event in WebKit and IE browsers
			clickEvent: (Ext.isWebKit || Ext.isIE) ? 'mousedown' : 'click'
		},
		htmlareacombo: {
			cls: 'select',
			typeAhead: true,
			lastQuery: '',
			triggerAction: 'all',
			editable: !Ext.isIE,
			selectOnFocus: !Ext.isIE,
			validationEvent: false,
			validateOnBlur: false,
			submitValue: false,
			forceSelection: true,
			mode: 'local',
			storeRoot: 'options',
			storeFields: [ { name: 'text'}, { name: 'value'}],
			valueField: 'value',
			displayField: 'text',
			labelSeparator: '',
			hideLabel: true,
			tpl: '<tpl for="."><div ext:qtip="{value}" style="text-align:left;font-size:11px;" class="x-combo-list-item">{text}</div></tpl>'
		}
	};
};
HTMLArea.Config = Ext.extend(HTMLArea.Config, {
	/**
	 * Registers a button for inclusion in the toolbar, adding some standard configuration properties for the ExtJS widgets
	 *
	 * @param	object		buttonConfiguration: the configuration object of the button:
	 *					id		: unique id for the button
	 *					tooltip		: tooltip for the button
	 *					textMode	: enable in text mode
	 *					context		: disable if not inside one of listed elements
	 *					hidden		: hide in menu and show only in context menu
	 *					selection	: disable if there is no selection
	 *					hotkey		: hotkey character
	 *					dialog		: if true, the button opens a dialogue
	 *					dimensions	: the opening dimensions object of the dialogue window: { width: nn, height: mm }
	 *					and potentially other ExtJS config properties (will be forwarded)
	 *
	 * @return	boolean		true if the button was successfully registered
	 */
	registerButton: function (config) {
		config.itemId = config.id;
		if (Ext.type(this.buttonsConfig[config.id])) {
			HTMLArea.appendToLog('', 'HTMLArea.Config', 'registerButton', 'A toolbar item with the same Id: ' + config.id + ' already exists and will be overidden.', 'warn');
		}
			// Apply defaults
		config = Ext.applyIf(config, this.configDefaults['all']);
		config = Ext.applyIf(config, this.configDefaults[config.xtype]);
			// Set some additional properties
		switch (config.xtype) {
			case 'htmlareacombo':
				if (config.options) {
						// Create combo array store
					config.store = new Ext.data.ArrayStore({
						autoDestroy:  true,
						fields: config.storeFields,
						data: config.options
					});
				} else if (config.storeUrl) {
						// Create combo json store
					config.store = new Ext.data.JsonStore({
						autoDestroy:  true,
						autoLoad: true,
						root: config.storeRoot,
						fields: config.storeFields,
						url: config.storeUrl
					});
				}
				config.hideLabel = Ext.isEmpty(config.fieldLabel) || Ext.isIE6;
				config.helpTitle = config.tooltip;
				break;
			default:
				if (!config.iconCls) {
					config.iconCls = config.id;
				}
				break;
		}
		config.cmd = config.id;
		config.tooltip = { title: config.tooltip };
		this.buttonsConfig[config.id] = config;
		return true;
	},
	/*
	 * Register a hotkey with the editor configuration.
	 */
	registerHotKey: function (hotKeyConfiguration) {
		if (Ext.isDefined(this.hotKeyList[hotKeyConfiguration.id])) {
			HTMLArea.appendToLog('', 'HTMLArea.Config', 'registerHotKey', 'A hotkey with the same key ' + hotKeyConfiguration.id + ' already exists and will be overidden.', 'warn');
		}
		if (Ext.isDefined(hotKeyConfiguration.cmd) && !Ext.isEmpty(hotKeyConfiguration.cmd) && Ext.isDefined(this.buttonsConfig[hotKeyConfiguration.cmd])) {
			this.hotKeyList[hotKeyConfiguration.id] = hotKeyConfiguration;
			return true;
		} else {
			HTMLArea.appendToLog('', 'HTMLArea.Config', 'registerHotKey', 'A hotkey with key ' + hotKeyConfiguration.id + ' could not be registered because toolbar item with id ' + hotKeyConfiguration.cmd + ' was not registered.', 'warn');
			return false;
		}
	},
	/*
	 * Get the configured document type for dialogue windows
	 */
	getDocumentType: function () {
		return this.documentType;
	}
});
/***************************************************
 *  TOOLBAR COMPONENTS
 ***************************************************/
/*
 * Ext.ux.HTMLAreaButton extends Ext.Button
 */
Ext.ux.HTMLAreaButton = Ext.extend(Ext.Button, {
	/*
	 * Component initialization
	 */
	initComponent: function () {
		Ext.ux.HTMLAreaButton.superclass.initComponent.call(this);
		this.addEvents(
			/*
			 * @event HTMLAreaEventHotkey
			 * Fires when the button hotkey is pressed
			 */
			'HTMLAreaEventHotkey',
			/*
			 * @event HTMLAreaEventContextMenu
			 * Fires when the button is triggered from the context menu
			 */
			'HTMLAreaEventContextMenu'
		);
		this.addListener({
			afterrender: {
				fn: this.initEventListeners,
				single: true
			}
		});
	},
	/*
	 * Initialize listeners
	 */
	initEventListeners: function () {
		this.addListener({
			HTMLAreaEventHotkey: {
				fn: this.onHotKey
			},
			HTMLAreaEventContextMenu: {
				fn: this.onButtonClick
			}
		});
		this.setHandler(this.onButtonClick, this);
			// Monitor toolbar updates in order to refresh the state of the button
		this.mon(this.getToolbar(), 'HTMLAreaEventToolbarUpdate', this.onUpdateToolbar, this);
	},
	/*
	 * Get a reference to the editor
	 */
	getEditor: function() {
		return RTEarea[this.ownerCt.editorId].editor;
	},
	/*
	 * Get a reference to the toolbar
	 */
	getToolbar: function() {
		return this.ownerCt;
	},
	/*
	 * Add properties and function to set button active or not depending on current selection
	 */
	inactive: true,
	activeClass: 'buttonActive',
	setInactive: function (inactive) {
		this.inactive = inactive;
		return inactive ? this.removeClass(this.activeClass) : this.addClass(this.activeClass);
	},
	/*
	 * Determine if the button should be enabled based on the current selection and context configuration property
	 */
	isInContext: function (mode, selectionEmpty, ancestors) {
		var editor = this.getEditor();
		var inContext = true;
		if (mode === 'wysiwyg' && this.context) {
			var attributes = [],
				contexts = [];
			if (/(.*)\[(.*?)\]/.test(this.context)) {
				contexts = RegExp.$1.split(',');
				attributes = RegExp.$2.split(',');
			} else {
				contexts = this.context.split(',');
			}
			contexts = new RegExp( '^(' + contexts.join('|') + ')$', 'i');
			var matchAny = contexts.test('*');
			Ext.each(ancestors, function (ancestor) {
				inContext = matchAny || contexts.test(ancestor.nodeName);
				if (inContext) {
					Ext.each(attributes, function (attribute) {
						inContext = eval("ancestor." + attribute);
						return inContext;
					});
				}
				return !inContext;
			});
		}
		return inContext && (!this.selection || !selectionEmpty);
	},
	/*
	 * Handler invoked when the button is clicked
	 */
	onButtonClick: function (button, event, key) {
		if (!this.disabled) {
			if (!this.plugins[this.action](this.getEditor(), key || this.itemId) && event) {
				event.stopEvent();
			}
			if (Ext.isOpera) {
				this.getEditor().focus();
			}
			if (this.dialog) {
				this.setDisabled(true);
			} else {
				this.getToolbar().update();
			}
		}
		return false;
	},
	/*
	 * Handler invoked when the hotkey configured for this button is pressed
	 */
	onHotKey: function (key, event) {
		return this.onButtonClick(this, event, key);
	},
	/*
	 * Handler invoked when the toolbar is updated
	 */
	onUpdateToolbar: function (mode, selectionEmpty, ancestors, endPointsInSameBlock) {
		this.setDisabled(mode === 'textmode' && !this.textMode);
		if (!this.disabled) {
			if (!this.noAutoUpdate) {
				this.setDisabled(!this.isInContext(mode, selectionEmpty, ancestors));
			}
			this.plugins['onUpdateToolbar'](this, mode, selectionEmpty, ancestors, endPointsInSameBlock);
		}
	}
});
Ext.reg('htmlareabutton', Ext.ux.HTMLAreaButton);
/*
 * Ext.ux.Toolbar.HTMLAreaToolbarText extends Ext.Toolbar.TextItem
 */
Ext.ux.Toolbar.HTMLAreaToolbarText = Ext.extend(Ext.Toolbar.TextItem, {
	/*
	 * Constructor
	 */
	initComponent: function () {
		Ext.ux.Toolbar.HTMLAreaToolbarText.superclass.initComponent.call(this);
		this.addListener({
			afterrender: {
				fn: this.initEventListeners,
				single: true
			}
		});
	},
	/*
	 * Initialize listeners
	 */
	initEventListeners: function () {
			// Monitor toolbar updates in order to refresh the state of the button
		this.mon(this.getToolbar(), 'HTMLAreaEventToolbarUpdate', this.onUpdateToolbar, this);
	},
	/*
	 * Get a reference to the editor
	 */
	getEditor: function() {
		return RTEarea[this.ownerCt.editorId].editor;
	},
	/*
	 * Get a reference to the toolbar
	 */
	getToolbar: function() {
		return this.ownerCt;
	},
	/*
	 * Handler invoked when the toolbar is updated
	 */
	onUpdateToolbar: function (mode, selectionEmpty, ancestors, endPointsInSameBlock) {
		this.setDisabled(mode === 'textmode' && !this.textMode);
		if (!this.disabled) {
			this.plugins['onUpdateToolbar'](this, mode, selectionEmpty, ancestors, endPointsInSameBlock);
		}
	}
});
Ext.reg('htmlareatoolbartext', Ext.ux.Toolbar.HTMLAreaToolbarText);
/*
 * Ext.ux.form.HTMLAreaCombo extends Ext.form.ComboBox
 */
Ext.ux.form.HTMLAreaCombo = Ext.extend(Ext.form.ComboBox, {
	/*
	 * Constructor
	 */
	initComponent: function () {
		Ext.ux.form.HTMLAreaCombo.superclass.initComponent.call(this);
		this.addEvents(
			/*
			 * @event HTMLAreaEventHotkey
			 * Fires when a hotkey configured for the combo is pressed
			 */
			'HTMLAreaEventHotkey'
		);
		this.addListener({
			afterrender: {
				fn: this.initEventListeners,
				single: true
			}
		});
	},
	/*
	 * Initialize listeners
	 */
	initEventListeners: function () {
		this.addListener({
			select: {
				fn: this.onComboSelect
			},
			specialkey: {
				fn: this.onSpecialKey
			},
			HTMLAreaEventHotkey: {
				fn: this.onHotKey
			},
			beforedestroy: {
				fn: this.onBeforeDestroy,
				single: true
			}
		});
			// Monitor toolbar updates in order to refresh the state of the combo
		this.mon(this.getToolbar(), 'HTMLAreaEventToolbarUpdate', this.onUpdateToolbar, this);
			// Monitor framework becoming ready
		this.mon(this.getToolbar().ownerCt, 'HTMLAreaEventFrameworkReady', this.onFrameworkReady, this);
	},
	/*
	 * Get a reference to the editor
	 */
	getEditor: function() {
		return RTEarea[this.ownerCt.editorId].editor;
	},
	/*
	 * Get a reference to the toolbar
	 */
	getToolbar: function() {
		return this.ownerCt;
	},
	/*
	 * Handler invoked when an item is selected in the dropdown list
	 */
	onComboSelect: function (combo, record, index) {
		if (!combo.disabled) {
			var editor = this.getEditor();
				// In IE, reclaim lost focus on the editor iframe and restore the bookmarked selection
			if (Ext.isIE) {
				if (!Ext.isEmpty(this.savedRange)) {
					editor.getSelection().selectRange(this.savedRange);
					this.savedRange = null;
				}
			}
				// Invoke the plugin onChange handler
			this.plugins[this.action](editor, combo, record, index);
				// In IE, bookmark the updated selection as the editor will be loosing focus
			if (Ext.isIE) {
				this.savedRange = editor.getSelection().createRange();
				this.triggered = true;
			}
			if (Ext.isOpera) {
				editor.focus();
			}
			this.getToolbar().update();
		}
		return false;
	},
	/*
	 * Handler invoked when the trigger element is clicked
	 * In IE, need to reclaim lost focus for the editor in order to restore the selection
	 */
	onTriggerClick: function () {
		Ext.ux.form.HTMLAreaCombo.superclass.onTriggerClick.call(this);
			// In IE, avoid focus being stolen and selection being lost
		if (Ext.isIE) {
			this.triggered = true;
			this.getEditor().focus();
		}
	},
	/*
	 * Handler invoked when the list of options is clicked in
	 */
	onViewClick: function (doFocus) {
			// Avoid stealing focus from the editor
		Ext.ux.form.HTMLAreaCombo.superclass.onViewClick.call(this, false);
	},
	/*
	 * Handler invoked in IE when the mouse moves out of the editor iframe
	 */
	saveSelection: function (event) {
		var editor = this.getEditor();
		if (editor.document.hasFocus()) {
			this.savedRange = editor.getSelection().createRange();
		}
	},
	/*
	 * Handler invoked in IE when the editor gets the focus back
	 */
	restoreSelection: function (event) {
		if (!Ext.isEmpty(this.savedRange) && this.triggered) {
			this.getEditor().getSelection().selectRange(this.savedRange);
			this.triggered = false;
		}
	},
	/*
	 * Handler invoked when the enter key is pressed while the combo has focus
	 */
	onSpecialKey: function (combo, event) {
		if (event.getKey() == event.ENTER) {
			event.stopEvent();
                }
		return false;
	},
	/*
	 * Handler invoked when a hot key configured for this dropdown list is pressed
	 */
	onHotKey: function (key) {
		if (!this.disabled) {
			this.plugins.onHotKey(this.getEditor(), key);
			if (Ext.isOpera) {
				this.getEditor().focus();
			}
			this.getToolbar().update();
		}
		return false;
	},
	/*
	 * Handler invoked when the toolbar is updated
	 */
	onUpdateToolbar: function (mode, selectionEmpty, ancestors, endPointsInSameBlock) {
		this.setDisabled(mode === 'textmode' && !this.textMode);
		if (!this.disabled) {
			this.plugins['onUpdateToolbar'](this, mode, selectionEmpty, ancestors, endPointsInSameBlock);
		}
	},
	/*
	 * The iframe must have been rendered
	 */
	onFrameworkReady: function () {
		var iframe = this.getEditor().iframe;
			// Close the combo on a click in the iframe
			// Note: ExtJS is monitoring events only on the parent window
		this.mon(Ext.get(iframe.document.documentElement), 'click', this.collapse, this);
			// Special handling for combo stealing focus in IE
		if (Ext.isIE) {
				// Take a bookmark in case the editor looses focus by activation of this combo
			this.mon(iframe.getEl(), 'mouseleave', this.saveSelection, this);
				// Restore the selection if combo was triggered
			this.mon(iframe.getEl(), 'focus', this.restoreSelection, this);
		}
	},
	/*
	 * Cleanup
	 */
	onBeforeDestroy: function () {
		this.savedRange = null;
		this.getStore().removeAll();
		this.getStore().destroy();
	}
});
Ext.reg('htmlareacombo', Ext.ux.form.HTMLAreaCombo);
/***************************************************
 *  EDITOR FRAMEWORK
 ***************************************************/
/*
 * HTMLArea.Toolbar extends Ext.Container
 */
HTMLArea.Toolbar = Ext.extend(Ext.Container, {
	/*
	 * Constructor
	 */
	initComponent: function () {
		HTMLArea.Toolbar.superclass.initComponent.call(this);
		this.addEvents(
			/*
			 * @event HTMLAreaEventToolbarUpdate
			 * Fires when the toolbar is updated
			 */
			'HTMLAreaEventToolbarUpdate'
		);
			// Build the deferred toolbar update task
		this.updateLater = new Ext.util.DelayedTask(this.update, this);
			// Add the toolbar items
		this.addItems();
		this.addListener({
			afterrender: {
				fn: this.initEventListeners,
				single: true
			}
		});
	},
	/*
	 * Initialize listeners
	 */
	initEventListeners: function () {
		this.addListener({
			beforedestroy: {
				fn: this.onBeforeDestroy,
				single: true
			}
		});
			// Monitor editor becoming ready
		this.mon(this.getEditor(), 'HTMLAreaEventEditorReady', this.update, this, {single: true});
	},
	/*
	 * editorId should be set in config
	 */
	editorId: null,
	/*
	 * Get a reference to the editor
	 */
	getEditor: function() {
		return RTEarea[this.editorId].editor;
	},
	/*
	 * Create the toolbar items based on editor toolbar configuration
	 */
	addItems: function () {
		var editor = this.getEditor();
			// Walk through the editor toolbar configuration nested arrays: [ toolbar [ row [ group ] ] ]
		var firstOnRow = true;
		var firstInGroup = true;
		Ext.each(editor.config.toolbar, function (row) {
			if (!firstOnRow) {
					// If a visible item was added to the previous line
				this.add({
					xtype: 'tbspacer',
					cls: 'x-form-clear-left'
				});
			}
			firstOnRow = true;
				// Add the groups
			Ext.each(row, function (group) {
					// To do: this.config.keepButtonGroupTogether ...
				if (!firstOnRow && !firstInGroup) {
						// If a visible item was added to the line
					this.add({
						xtype: 'tbseparator',
						cls: 'separator'
					});
				}
				firstInGroup = true;
					// Add each item
				Ext.each(group, function (item) {
					if (item == 'space') {
						this.add({
							xtype: 'tbspacer',
							cls: 'space'
						});
					} else {
							// Get the item's config as registered by some plugin
						var itemConfig = editor.config.buttonsConfig[item];
						if (!Ext.isEmpty(itemConfig)) {
							itemConfig.id = this.editorId + '-' + itemConfig.id;
							this.add(itemConfig);
							firstInGroup = firstInGroup && itemConfig.hidden;
							firstOnRow = firstOnRow && firstInGroup;
						}
					}
					return true;
				}, this);
				return true;
			}, this);
			return true;
		}, this);
		this.add({
			xtype: 'tbspacer',
			cls: 'x-form-clear-left'
		});
	},
	/*
	 * Retrieve a toolbar item by itemId
	 */
	getButton: function (buttonId) {
		return this.find('itemId', buttonId)[0];
	},
	/*
	 * Update the state of the toolbar
	 */
	update: function() {
		var editor = this.getEditor(),
			mode = editor.getMode(),
			selection = editor.getSelection(),
			selectionEmpty = true,
			ancestors = null,
			endPointsInSameBlock = true;
		if (editor.getMode() === 'wysiwyg') {
			selectionEmpty = selection.isEmpty();
			ancestors = selection.getAllAncestors();
			endPointsInSameBlock = selection.endPointsInSameBlock();
		}
		this.fireEvent('HTMLAreaEventToolbarUpdate', mode, selectionEmpty, ancestors, endPointsInSameBlock);
	},
	/*
	 * Cleanup
	 */
	onBeforeDestroy: function () {
		this.removeAll(true);
		return true;
	}
});
Ext.reg('htmlareatoolbar', HTMLArea.Toolbar);
/*
 * HTMLArea.Iframe extends Ext.BoxComponent
 */
HTMLArea.Iframe = Ext.extend(Ext.BoxComponent, {
	/*
	 * Constructor
	 */
	initComponent: function () {
		HTMLArea.Iframe.superclass.initComponent.call(this);
		this.addEvents(
			/*
			 * @event HTMLAreaEventIframeReady
			 * Fires when the iframe style sheets become accessible
			 */
			'HTMLAreaEventIframeReady',
			/*
			 * @event HTMLAreaEventWordCountChange
			 * Fires when the word count may have changed
			 */
			'HTMLAreaEventWordCountChange'
		);
		this.addListener({
			afterrender: {
				fn: this.initEventListeners,
				single: true
			},
			beforedestroy: {
				fn: this.onBeforeDestroy,
				single: true
			}
		});
		this.config = this.getEditor().config;
		this.htmlRenderer = new HTMLArea.DOM.Walker({
			keepComments: !this.config.htmlRemoveComments,
			removeTags: this.config.htmlRemoveTags,
			removeTagsAndContents: this.config.htmlRemoveTagsAndContents,
			baseUrl: this.config.baseURL
		});
		if (!this.config.showStatusBar) {
			this.addClass('noStatusBar');
		}
	},
	/*
	 * Initialize event listeners and the document after the iframe has rendered
	 */
	initEventListeners: function () {
		this.initStyleChangeEventListener();
		if (Ext.isOpera) {
			this.mon(this.getEl(), 'load', this.initializeIframe , this, {single: true});
		} else {
			this.initializeIframe();
		}
	},
	/*
	 * The editor iframe may become hidden with style.display = "none" on some parent div
	 * This breaks the editor in Firefox: the designMode attribute needs to be reset after the style.display of the container div is reset to "block"
	 * In all browsers, it breaks the evaluation of the framework dimensions
	 */
	initStyleChangeEventListener: function () {
		if (this.isNested  && Ext.isGecko) {
			var options = {
				stopEvent: true,
				delay: 50
			};
			Ext.each(this.nestedParentElements.sorted, function (nested) {
				this.mon(
					Ext.get(nested),
					Ext.isIE ? 'propertychange' : 'DOMAttrModified',
					this.onNestedShow,
					this,
					options
				);
			}, this);
		}
	},
	/*
	 * editorId should be set in config
	 */
	editorId: null,
	/*
	 * Get a reference to the editor
	 */
	getEditor: function() {
		return RTEarea[this.editorId].editor;
	},
	/*
	 * Get a reference to the toolbar
	 */
	getToolbar: function () {
		return this.ownerCt.getTopToolbar();
	},
	/*
	 * Get a reference to the statusBar
	 */
	getStatusBar: function () {
		return this.ownerCt.getBottomToolbar();
	},
	/*
	 * Get a reference to a button
	 */
	getButton: function (buttonId) {
		return this.getToolbar().getButton(buttonId);
	},
	/*
	 * Flag set to true when the iframe becomes usable for editing
	 */
	ready: false,
	/*
	 * Create the iframe element at rendering time
	 */
	onRender: function (ct, position){
			// from Ext.Component
		if (!this.el && this.autoEl) {
			if (Ext.isString(this.autoEl)) {
				this.el = document.createElement(this.autoEl);
			} else {
					// ExtJS Default method will not work with iframe element
				this.el = Ext.DomHelper.append(ct, this.autoEl, true);
			}
			if (!this.el.id) {
				this.el.id = this.getId();
			}
		}
			// from Ext.BoxComponent
		if (this.resizeEl){
			this.resizeEl = Ext.get(this.resizeEl);
		}
		if (this.positionEl){
			this.positionEl = Ext.get(this.positionEl);
		}
	},
	/*
	 * Proceed to build the iframe document head and ensure style sheets are available after the iframe document becomes available
	 */
	initializeIframe: function () {
		var iframe = this.getEl().dom;
			// All browsers
		if (!iframe || (!iframe.contentWindow && !iframe.contentDocument)) {
			this.initializeIframe.defer(50, this);
			// All except WebKit
		} else if (iframe.contentWindow && !Ext.isWebKit && (!iframe.contentWindow.document || !iframe.contentWindow.document.documentElement)) {
			this.initializeIframe.defer(50, this);
			// WebKit
		} else if (Ext.isWebKit && (!iframe.contentDocument.documentElement || !iframe.contentDocument.body)) {
			this.initializeIframe.defer(50, this);
		} else {
			this.document = iframe.contentWindow ? iframe.contentWindow.document : iframe.contentDocument;
			this.getEditor().document = this.document;
			this.getEditor()._doc = this.document;
			this.getEditor()._iframe = iframe;
			this.createHead();
				// Style the document body
			Ext.get(this.document.body).addClass('htmlarea-content-body');
				// Start listening to things happening in the iframe
				// For some unknown reason, this is too early for Opera
			if (!Ext.isOpera) {
				this.startListening();
			}
				// Hide the iframe
			this.hide();
				// Set iframe ready
			this.ready = true;
			this.fireEvent('HTMLAreaEventIframeReady');
		}
	},
	/*
	 * Build the iframe document head
	 */
	createHead: function () {
		var head = this.document.getElementsByTagName('head')[0];
		if (!head) {
			head = this.document.createElement('head');
			this.document.documentElement.appendChild(head);
		}
		if (this.config.baseURL) {
			var base = this.document.getElementsByTagName('base')[0];
			if (!base) {
				base = this.document.createElement('base');
				base.href = this.config.baseURL;
				head.appendChild(base);
			}
			this.getEditor().appendToLog('HTMLArea.Iframe', 'createHead', 'Iframe baseURL set to: ' + base.href, 'info');
		}
		var link0 = this.document.getElementsByTagName('link')[0];
		if (!link0) {
			link0 = this.document.createElement('link');
			link0.rel = 'stylesheet';
			link0.type = 'text/css';
				// Firefox 3.0.1 does not apply the base URL while Firefox 3.6.8 does so. Do not know in what version this was fixed.
				// Therefore, for versions before 3.6.8, we prepend the url with the base, if the url is not absolute
			link0.href = ((Ext.isGecko && navigator.productSub < 2010072200 && !/^http(s?):\/{2}/.test(this.config.editedContentStyle)) ? this.config.baseURL : '') + this.config.editedContentStyle;
			head.appendChild(link0);
			this.getEditor().appendToLog('HTMLArea.Iframe', 'createHead', 'Skin CSS set to: ' + link0.href, 'info');
		}
		if (this.config.defaultPageStyle) {
			var link = this.document.getElementsByTagName('link')[1];
			if (!link) {
				link = this.document.createElement('link');
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = ((Ext.isGecko && navigator.productSub < 2010072200 && !/^https?:\/{2}/.test(this.config.defaultPageStyle)) ? this.config.baseURL : '') + this.config.defaultPageStyle;
				head.appendChild(link);
			}
			this.getEditor().appendToLog('HTMLArea.Iframe', 'createHead', 'Override CSS set to: ' + link.href, 'info');
		}
		if (this.config.pageStyle) {
			var link = this.document.getElementsByTagName('link')[2];
			if (!link) {
				link = this.document.createElement('link');
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = ((Ext.isGecko && navigator.productSub < 2010072200 && !/^https?:\/{2}/.test(this.config.pageStyle)) ? this.config.baseURL : '') + this.config.pageStyle;
				head.appendChild(link);
			}
			this.getEditor().appendToLog('HTMLArea.Iframe', 'createHead', 'Content CSS set to: ' + link.href, 'info');
		}
	},
	/*
	 * Focus on the iframe
	 */
	focus: function () {
		try {
			if (Ext.isWebKit) {
				this.getEl().dom.focus();
			} else {
				this.getEl().dom.contentWindow.focus();
			}
		} catch(e) { }
	},
	/*
	 * Flag indicating whether the framework is inside a tab or inline element that may be hidden
	 * Should be set in config
	 */
	isNested: false,
	/*
	 * All nested tabs and inline levels in the sorting order they were applied
	 * Should be set in config
	 */
	nestedParentElements: {},
	/*
	 * Set designMode
	 *
	 * @param	boolean		on: if true set designMode to on, otherwise set to off
	 *
	 * @rturn	void
	 */
	setDesignMode: function (on) {
		if (on) {
	 		if (!Ext.isIE) {
				if (Ext.isGecko) {
						// In Firefox, we can't set designMode when we are in a hidden TYPO3 tab or inline element
					if (!this.isNested || HTMLArea.util.TYPO3.allElementsAreDisplayed(this.nestedParentElements.sorted)) {
						this.document.designMode = 'on';
						this.setOptions();
					}
				} else {
					this.document.designMode = 'on';
					this.setOptions();
				}
			}
			if (Ext.isIE || Ext.isWebKit) {
				this.document.body.contentEditable = true;
			}
		} else {
	 		if (!Ext.isIE) {
	 			this.document.designMode = 'off';
	 		}
	 		if (Ext.isIE || Ext.isWebKit) {
	 			this.document.body.contentEditable = false;
	 		}
	 	}
	},
	/*
	 * Set editing mode options (if we can... raises exception in Firefox 3)
	 *
	 * @return	void
	 */
	setOptions: function () {
		if (!Ext.isIE) {
			try {
				if (this.document.queryCommandEnabled('insertBrOnReturn')) {
					this.document.execCommand('insertBrOnReturn', false, this.config.disableEnterParagraphs);
				}
				if (this.document.queryCommandEnabled('styleWithCSS')) {
					this.document.execCommand('styleWithCSS', false, this.config.useCSS);
				} else if (Ext.isGecko && this.document.queryCommandEnabled('useCSS')) {
					this.document.execCommand('useCSS', false, !this.config.useCSS);
				}
				if (Ext.isGecko) {
					if (this.document.queryCommandEnabled('enableObjectResizing')) {
						this.document.execCommand('enableObjectResizing', false, !this.config.disableObjectResizing);
					}
					if (this.document.queryCommandEnabled('enableInlineTableEditing')) {
						this.document.execCommand('enableInlineTableEditing', false, (this.config.buttons.table && this.config.buttons.table.enableHandles) ? true : false);
					}
				}
			} catch(e) {}
		}
	},
	/*
	 * Handler invoked when an hidden TYPO3 hidden nested tab or inline element is shown
	 */
	onNestedShow: function (event, target) {
		var styleEvent = true;
			// In older versions of Gecko attrName is not set and refering to it causes a non-catchable crash
		if ((Ext.isGecko && navigator.productSub > 2007112700) || Ext.isOpera) {
			styleEvent = (event.browserEvent.attrName == 'style');
		} else if (Ext.isIE) {
			styleEvent = (event.browserEvent.propertyName == 'style.display');
		}
		if (styleEvent && this.nestedParentElements.sorted.indexOf(target.id) != -1 && (target.style.display == '' || target.style.display == 'block')) {
				// Check if all container nested elements are displayed
			if (HTMLArea.util.TYPO3.allElementsAreDisplayed(this.nestedParentElements.sorted)) {
				if (this.getEditor().getMode() === 'wysiwyg') {
					if (Ext.isGecko) {
						this.setDesignMode(true);
					}
					this.fireEvent('show');
				} else {
					this.ownerCt.textAreaContainer.fireEvent('show');
				}
				this.getToolbar().update();
				return false;
			}
		}
	},
	/*
	 * Instance of DOM walker
	 */
	htmlRenderer: {},
	/*
	 * Get the HTML content of the iframe
	 */
	getHTML: function () {
		return this.htmlRenderer.render(this.document.body, false);
	},
	/*
	 * Start listening to things happening in the iframe
	 */
	startListening: function () {
			// Create keyMap so that plugins may bind key handlers
		this.keyMap = new Ext.KeyMap(Ext.get(this.document.documentElement), [], (Ext.isIE || Ext.isWebKit) ? 'keydown' : 'keypress');
			// Special keys map
		this.keyMap.addBinding([
			{
				key: [Ext.EventObject.DOWN, Ext.EventObject.UP, Ext.EventObject.LEFT, Ext.EventObject.RIGHT],
				alt: false,
				handler: this.onArrow,
				scope: this
			},
			{
				key: Ext.EventObject.TAB,
				ctrl: false,
				alt: false,
				handler: this.onTab,
				scope: this
			},
			{
				key: Ext.EventObject.SPACE,
				ctrl: true,
				shift: false,
				alt: false,
				handler: this.onCtrlSpace,
				scope: this
			}
		]);
		if (Ext.isGecko || Ext.isIE) {
			this.keyMap.addBinding(
			{
				key: [Ext.EventObject.BACKSPACE, Ext.EventObject.DELETE],
				alt: false,
				handler: this.onBackSpace,
				scope: this
			});
		}
		if (!Ext.isIE && !this.config.disableEnterParagraphs) {
			this.keyMap.addBinding(
			{
				key: Ext.EventObject.ENTER,
				shift: false,
				handler: this.onEnter,
				scope: this
			});
		}
		if (Ext.isWebKit) {
			this.keyMap.addBinding(
			{
				key: Ext.EventObject.ENTER,
				alt: false,
				handler: this.onWebKitEnter,
				scope: this
			});
		}
			// Hot key map (on keydown for all browsers)
		var hotKeys = '';
		Ext.iterate(this.config.hotKeyList, function (key) {
			if (key.length == 1) {
				hotKeys += key.toUpperCase();
			}
		});
			// Make hot key map available, even if empty, so that plugins may add bindings
		this.hotKeyMap = new Ext.KeyMap(Ext.get(this.document.documentElement));
		if (!Ext.isEmpty(hotKeys)) {
			this.hotKeyMap.addBinding({
				key: hotKeys,
				ctrl: true,
				shift: false,
				alt: false,
				handler: this.onHotKey,
				scope: this
			});
		}
		this.mon(Ext.get(this.document.documentElement), (Ext.isIE || Ext.isWebKit) ? 'keydown' : 'keypress', this.onAnyKey, this);
		this.mon(Ext.get(this.document.documentElement), 'mouseup', this.onMouse, this);
		this.mon(Ext.get(this.document.documentElement), 'click', this.onMouse, this);
		if (Ext.isGecko) {
			this.mon(Ext.get(this.document.documentElement), 'paste', this.onPaste, this);
		}
		this.mon(Ext.get(this.document.documentElement), 'drop', this.onDrop, this);
		if (Ext.isWebKit) {
			this.mon(Ext.get(this.document.body), 'dragend', this.onDrop, this);
		}
	},
	/*
	 * Handler for other key events
	 */
	onAnyKey: function(event) {
		if (this.inhibitKeyboardInput(event)) {
			return false;
		}
		this.fireEvent('HTMLAreaEventWordCountChange', 100);
		if (!event.altKey && !event.ctrlKey) {
				// Detect URL in non-IE browsers
			if (!Ext.isIE && (event.getKey() != Ext.EventObject.ENTER || (event.shiftKey && !Ext.isWebKit))) {
				this.getEditor().getSelection().detectURL(event);
			}
				// Handle option+SPACE for Mac users
			if (Ext.isMac && event.browserEvent.charCode == 160) {
				return this.onOptionSpace(event.browserEvent.charCode, event);
			}
		}
		return true;
	},
	/*
	 * On any key input event, check if input is currently inhibited
	 */
	inhibitKeyboardInput: function (event) {
			// Inhibit key events while server-based cleaning is being processed
		if (this.getEditor().inhibitKeyboardInput) {
			event.stopEvent();
			return true;
		} else {
			return false;
		}
	},
	/*
	 * Handler for mouse events
	 */
	onMouse: function (event, target) {
			// In WebKit, select the image when it is clicked
		if (Ext.isWebKit && /^(img)$/i.test(target.nodeName) && event.browserEvent.type == 'click') {
			this.getEditor().getSelection().selectNode(target);
		}
		this.getToolbar().updateLater.delay(100);
		return true;
	},
	/*
	 * Handler for paste operations in Gecko
	 */
	onPaste: function (event) {
			// Make src and href urls absolute
		if (Ext.isGecko) {
			HTMLArea.DOM.makeUrlsAbsolute.defer(50, this, [this.getEditor().document.body, this.config.baseURL, this.htmlRenderer]);
		}
	},
	/*
	 * Handler for drag and drop operations
	 */
	onDrop: function (event, target) {
			// Clean up span elements added by WebKit
		if (Ext.isWebKit) {
			this.getEditor().cleanAppleStyleSpans.defer(50, this.getEditor(), [this.getEditor().document.body]);
		}
			// Make src url absolute in Firefox
		if (Ext.isGecko) {
			HTMLArea.DOM.makeUrlsAbsolute.defer(50, this, [target, this.config.baseURL, this.htmlRenderer]);
		}
		this.getToolbar().updateLater.delay(100);
	},
	/*
	 * Handler for UP, DOWN, LEFT and RIGHT keys
	 */
	onArrow: function () {
		this.getToolbar().updateLater.delay(100);
		return true;
	},
	/*
	 * Handler for TAB and SHIFT-TAB keys
	 *
	 * If available, BlockElements plugin will handle the TAB key
	 */
	onTab: function (key, event) {
		if (this.inhibitKeyboardInput(event)) {
			return false;
		}
		var keyName = (event.shiftKey ? 'SHIFT-' : '') + 'TAB';
		if (this.config.hotKeyList[keyName] && this.config.hotKeyList[keyName].cmd) {
			var button = this.getButton(this.config.hotKeyList[keyName].cmd);
			if (button) {
				event.stopEvent();
				button.fireEvent('HTMLAreaEventHotkey', keyName, event);
				return false;
			}
		}
		return true;
	},
	/*
	 * Handler for BACKSPACE and DELETE keys
	 */
	onBackSpace: function (key, event) {
		if (this.inhibitKeyboardInput(event)) {
			return false;
		}
		if ((!Ext.isIE && !event.shiftKey) || Ext.isIE) {
			if (this.getEditor().getSelection().handleBackSpace()) {
				event.stopEvent();
			}
		}
			// Update the toolbar state after some time
		this.getToolbar().updateLater.delay(200);
		return false;
	},
	/*
	 * Handler for ENTER key in non-IE browsers
	 */
	onEnter: function (key, event) {
		if (this.inhibitKeyboardInput(event)) {
			return false;
		}
		this.getEditor().getSelection().detectURL(event);
		if (this.getEditor().getSelection().checkInsertParagraph()) {
			event.stopEvent();
		}
			// Update the toolbar state after some time
		this.getToolbar().updateLater.delay(200);
		return false;
	},
	/*
	 * Handler for ENTER key in WebKit browsers
	 */
	onWebKitEnter: function (key, event) {
		if (this.inhibitKeyboardInput(event)) {
			return false;
		}
		if (event.shiftKey || this.config.disableEnterParagraphs) {
			var editor = this.getEditor();
			editor.getSelection().detectURL(event);
			if (Ext.isSafari) {
				var brNode = editor.document.createElement('br');
				editor.insertNodeAtSelection(brNode);
				brNode.parentNode.normalize();
					// Selection issue when an URL was detected
				if (editor._unlinkOnUndo) {
					brNode = brNode.parentNode.parentNode.insertBefore(brNode, brNode.parentNode.nextSibling);
				}
				if (!brNode.nextSibling || !/\S+/i.test(brNode.nextSibling.textContent)) {
					var secondBrNode = editor.document.createElement('br');
					secondBrNode = brNode.parentNode.appendChild(secondBrNode);
				}
				editor.getSelection().selectNode(brNode, false);
				event.stopEvent();
			}
		}
			// Update the toolbar state after some time
		this.getToolbar().updateLater.delay(200);
		return false;
	},
	/*
	 * Handler for CTRL-SPACE keys
	 */
	onCtrlSpace: function (key, event) {
		if (this.inhibitKeyboardInput(event)) {
			return false;
		}
		this.getEditor().getSelection().insertHtml('&nbsp;');
		event.stopEvent();
		return false;
	},
	/*
	 * Handler for OPTION-SPACE keys on Mac
	 */
	onOptionSpace: function (key, event) {
		if (this.inhibitKeyboardInput(event)) {
			return false;
		}
		this.getEditor().getSelection().insertHtml('&nbsp;');
		event.stopEvent();
		return false;
	},
	/*
	 * Handler for configured hotkeys
	 */
	onHotKey: function (key, event) {
		if (this.inhibitKeyboardInput(event)) {
			return false;
		}
		var hotKey = String.fromCharCode(key).toLowerCase();
		this.getButton(this.config.hotKeyList[hotKey].cmd).fireEvent('HTMLAreaEventHotkey', hotKey, event);
		return false;
	},
	/*
	 * Cleanup
	 */
	onBeforeDestroy: function () {
			// ExtJS KeyMap object makes IE leak memory
			// Nullify EXTJS private handlers
		Ext.each(this.keyMap.bindings, function (binding, index) {
			this.keyMap.bindings[index] = null;
		}, this);
		this.keyMap.handleKeyDown = null;
		Ext.each(this.hotKeyMap.bindings, function (binding, index) {
			this.hotKeyMap.bindings[index] = null;
		}, this);
		this.hotKeyMap.handleKeyDown = null;
		this.keyMap.disable();
		this.hotKeyMap.disable();
			// Cleaning references to DOM in order to avoid IE memory leaks
		Ext.get(this.document.body).purgeAllListeners();
		Ext.get(this.document.body).dom = null;
		Ext.get(this.document.documentElement).purgeAllListeners();
		Ext.get(this.document.documentElement).dom = null;
		this.document = null;
		this.getEditor().document = null;
		this.getEditor()._doc = null;
		this.getEditor()._iframe = null;
		Ext.each(this.nestedParentElements.sorted, function (nested) {
			Ext.get(nested).purgeAllListeners();
			Ext.get(nested).dom = null;
		});
		Ext.destroy(this.autoEl, this.el, this.resizeEl, this.positionEl);
		return true;
	}
});
Ext.reg('htmlareaiframe', HTMLArea.Iframe);
/*
 * HTMLArea.StatusBar extends Ext.Container
 */
HTMLArea.StatusBar = Ext.extend(Ext.Container, {
	/*
	 * Constructor
	 */
	initComponent: function () {
		HTMLArea.StatusBar.superclass.initComponent.call(this);
			// Build the deferred word count update task
		this.updateWordCountLater = new Ext.util.DelayedTask(this.updateWordCount, this);
		this.addListener({
			render: {
				fn: this.addComponents,
				single: true
			},
			afterrender: {
				fn: this.initEventListeners,
				single: true
			}
		});
	},
	/*
	 * Initialize listeners
	 */
	initEventListeners: function () {
		this.addListener({
			beforedestroy: {
				fn: this.onBeforeDestroy,
				single: true
			}
		});
			// Monitor toolbar updates in order to refresh the contents of the statusbar
			// The toolbar must have been rendered
		this.mon(this.ownerCt.toolbar, 'HTMLAreaEventToolbarUpdate', this.onUpdateToolbar, this);
			// Monitor editor changing mode
		this.mon(this.getEditor(), 'HTMLAreaEventModeChange', this.onModeChange, this);
			// Monitor word count change
		this.mon(this.ownerCt.iframe, 'HTMLAreaEventWordCountChange', this.onWordCountChange, this);
	},
	/*
	 * editorId should be set in config
	 */
	editorId: null,
	/*
	 * Get a reference to the editor
	 */
	getEditor: function() {
		return RTEarea[this.editorId].editor;
	},
	/*
	 * Create span elements to display when the status bar tree or a message when the editor is in text mode
	 */
	addComponents: function () {
		this.statusBarWordCount = Ext.DomHelper.append(this.getEl(), {
			id: this.editorId + '-statusBarWordCount',
			tag: 'span',
			cls: 'statusBarWordCount',
			html: '&nbsp;'
		}, true);
		this.statusBarTree = Ext.DomHelper.append(this.getEl(), {
			id: this.editorId + '-statusBarTree',
			tag: 'span',
			cls: 'statusBarTree',
			html: HTMLArea.localize('Path') + ': '
		}, true).setVisibilityMode(Ext.Element.DISPLAY).setVisible(true);
		this.statusBarTextMode = Ext.DomHelper.append(this.getEl(), {
			id: this.editorId + '-statusBarTextMode',
			tag: 'span',
			cls: 'statusBarTextMode',
			html: HTMLArea.localize('TEXT_MODE')
		}, true).setVisibilityMode(Ext.Element.DISPLAY).setVisible(false);
	},
	/*
	 * Clear the status bar tree
	 */
	clear: function () {
		this.statusBarTree.removeAllListeners();
		Ext.each(this.statusBarTree.query('a'), function (node) {
			Ext.QuickTips.unregister(node);
			Ext.get(node).dom.ancestor = null;
			Ext.destroy(node);
		});
		this.statusBarTree.update('');
		this.setSelection(null);
	},
	/*
	 * Flag indicating that the status bar should not be updated on this toolbar update
	 */
	noUpdate: false,
	/*
	 * Update the status bar
	 */
	onUpdateToolbar: function (mode, selectionEmpty, ancestors, endPointsInSameBlock) {
		if (mode === 'wysiwyg' && !this.noUpdate) {
			var text,
				language,
				languageObject = this.getEditor().getPlugin('Language'),
				classes = new Array(),
				classText;
			this.clear();
			var path = Ext.DomHelper.append(this.statusBarTree, {
				tag: 'span',
				html: HTMLArea.localize('Path') + ': '
			},true);
			Ext.each(ancestors, function (ancestor, index) {
				if (!ancestor) {
					return true;
				}
				text = ancestor.nodeName.toLowerCase();
					// Do not show any id generated by ExtJS
				if (ancestor.id && text !== 'body' && ancestor.id.substr(0, 7) !== 'ext-gen') {
					text += '#' + ancestor.id;
				}
				if (languageObject && languageObject.getLanguageAttribute) {
					language = languageObject.getLanguageAttribute(ancestor);
					if (language != 'none') {
						text += '[' + language + ']';
					}
				}
				if (ancestor.className) {
					classText = '';
					classes = ancestor.className.trim().split(' ');
					for (var j = 0, n = classes.length; j < n; ++j) {
						if (!HTMLArea.reservedClassNames.test(classes[j])) {
							classText += '.' + classes[j];
						}
					}
					text += classText;
				}
				var element = Ext.DomHelper.insertAfter(path, {
					tag: 'a',
					href: '#',
					'ext:qtitle': HTMLArea.localize('statusBarStyle'),
					'ext:qtip': ancestor.style.cssText.split(';').join('<br />'),
					html: text
				}, true);
					// Ext.DomHelper does not honour the custom attribute
				element.dom.ancestor = ancestor;
				element.on('click', this.onClick, this);
				element.on('mousedown', this.onClick, this);
				if (!Ext.isOpera) {
					element.on('contextmenu', this.onContextMenu, this);
				}
				if (index) {
					Ext.DomHelper.insertAfter(element, {
						tag: 'span',
						html: String.fromCharCode(0xbb)
					});
				}
			}, this);
		}
		this.updateWordCount();
		this.noUpdate = false;
	},
	/*
	 * Handler when the word count may have changed
	 */
	onWordCountChange: function(delay) {
		this.updateWordCountLater.delay(delay ? delay : 0);
	},
	/*
	 * Update the word count
	 */
	updateWordCount: function() {
		var wordCount = 0;
		if (this.getEditor().getMode() == 'wysiwyg') {
				// Get the html content
			var text = this.getEditor().getHTML();
			if (!Ext.isEmpty(text)) {
					// Replace html tags with spaces
				text = text.replace(HTMLArea.RE_htmlTag, ' ');
					// Replace html space entities
				text = text.replace(/&nbsp;|&#160;/gi, ' ');
					// Remove numbers and punctuation
				text = text.replace(HTMLArea.RE_numberOrPunctuation, '');
					// Get the number of word
				wordCount = text.split(/\S\s+/g).length - 1;
			}
		}
			// Update the word count of the status bar
		this.statusBarWordCount.dom.innerHTML = wordCount ? ( wordCount + ' ' + HTMLArea.localize((wordCount == 1) ? 'word' : 'words')) : '&nbsp;';
	},
	/*
	 * Adapt status bar to current editor mode
	 *
	 * @param	string	mode: the mode to which the editor got switched to
	 */
	onModeChange: function (mode) {
		switch (mode) {
			case 'wysiwyg':
				this.statusBarTextMode.setVisible(false);
				this.statusBarTree.setVisible(true);
				break;
			case 'textmode':
			default:
				this.statusBarTree.setVisible(false);
				this.statusBarTextMode.setVisible(true);
				break;
		}
	},
	/*
	 * Refrence to the element last selected on the status bar
	 */
	selected: null,
	/*
	 * Get the status bar selection
	 */
	getSelection: function() {
		return this.selected;
	},
	/*
	 * Set the status bar selection
	 *
	 * @param	object	element: set the status bar selection to the given element
	 */
	setSelection: function (element) {
		this.selected = element ? element : null;
	},
	/*
	 * Select the element that was clicked in the status bar and set the status bar selection
	 */
	selectElement: function (element) {
		var editor = this.getEditor();
		element.blur();
		if (!Ext.isIE) {
			if (/^(img|table)$/i.test(element.ancestor.nodeName)) {
				editor.getSelection().selectNode(element.ancestor);
			} else {
				editor.getSelection().selectNodeContents(element.ancestor);
			}
		} else {
			if (/^(img|table)$/i.test(element.ancestor.nodeName)) {
				var range = editor.document.body.createControlRange();
				range.addElement(element.ancestor);
				range.select();
			} else {
				editor.getSelection().selectNode(element.ancestor);
			}
		}
		this.setSelection(element.ancestor);
		this.noUpdate = true;
		editor.toolbar.update();
	},
	/*
	 * Click handler
	 */
	onClick: function (event, element) {
		this.selectElement(element);
		event.stopEvent();
		return false;
	},
	/*
	 * ContextMenu handler
	 */
	onContextMenu: function (event, target) {
		this.selectElement(target);
		return this.getEditor().getPlugin('ContextMenu') ? this.getEditor().getPlugin('ContextMenu').show(event, target.ancestor) : false;
	},
	/*
	 * Cleanup
	 */
	onBeforeDestroy: function() {
		this.clear();
		this.removeAll(true);
		Ext.destroy(this.statusBarTree, this.statusBarTextMode);
		return true;
	}
});
Ext.reg('htmlareastatusbar', HTMLArea.StatusBar);
/*
 * HTMLArea.Framework extends Ext.Panel
 */
HTMLArea.Framework = Ext.extend(Ext.Panel, {
	/*
	 * Constructor
	 */
	initComponent: function () {
		HTMLArea.Framework.superclass.initComponent.call(this);
			// Set some references
		this.toolbar = this.getTopToolbar();
		this.statusBar = this.getBottomToolbar();
		this.iframe = this.getComponent('iframe');
		this.textAreaContainer = this.getComponent('textAreaContainer');
		this.addEvents(
			/*
			 * @event HTMLAreaEventFrameworkReady
			 * Fires when the iframe is ready and all components are rendered
			 */
			'HTMLAreaEventFrameworkReady'
		);
		this.addListener({
			beforedestroy: {
				fn: this.onBeforeDestroy,
				single: true
			}
		});
			// Monitor iframe becoming ready
		this.mon(this.iframe, 'HTMLAreaEventIframeReady', this.onIframeReady, this, {single: true});
			// Let the framefork render itself, but it will fail to do so if inside a hidden tab or inline element
		if (!this.isNested || HTMLArea.util.TYPO3.allElementsAreDisplayed(this.nestedParentElements.sorted)) {
			this.render(this.textArea.parent(), this.textArea.id);
		} else {
				// Clone the array of nested tabs and inline levels instead of using a reference as HTMLArea.util.TYPO3.accessParentElements will modify the array
			var parentElements = [].concat(this.nestedParentElements.sorted);
				// Walk through all nested tabs and inline levels to get correct sizes
			HTMLArea.util.TYPO3.accessParentElements(parentElements, 'args[0].render(args[0].textArea.parent(), args[0].textArea.id)', [this]);
		}
	},
	/*
	 * Initiate events monitoring
	 */
	initEventListeners: function () {
			// Make the framework resizable, if configured by the user
		this.makeResizable();
			// Monitor textArea container becoming shown or hidden as it may change the height of the status bar
		this.mon(this.textAreaContainer, 'show', this.resizable ? this.onTextAreaShow : this.onWindowResize, this);
			// Monitor iframe becoming shown or hidden as it may change the height of the status bar
		this.mon(this.iframe, 'show', this.resizable ? this.onIframeShow : this.onWindowResize, this);
			// Monitor window resizing
		Ext.EventManager.onWindowResize(this.onWindowResize, this);
			// If the textarea is inside a form, on reset, re-initialize the HTMLArea content and update the toolbar
		var form = this.textArea.dom.form;
		if (form) {
			if (Ext.isFunction(form.onreset)) {
				if (typeof(form.htmlAreaPreviousOnReset) == 'undefined') {
					form.htmlAreaPreviousOnReset = [];
				}
				form.htmlAreaPreviousOnReset.push(form.onreset);
			}
			this.mon(Ext.get(form), 'reset', this.onReset, this);
		}
		this.addListener({
			resize: {
				fn: this.onFrameworkResize
			}
		});
	},
	/*
	 * editorId should be set in config
	 */
	editorId: null,
	/*
	 * Get a reference to the editor
	 */
	getEditor: function() {
		return RTEarea[this.editorId].editor;
	},
	/*
	 * Flag indicating whether the framework is inside a tab or inline element that may be hidden
	 * Should be set in config
	 */
	isNested: false,
	/*
	 * All nested tabs and inline levels in the sorting order they were applied
	 * Should be set in config
	 */
	nestedParentElements: {},
	/*
	 * Flag set to true when the framework is ready
	 */
	ready: false,
	/*
	 * All nested tabs and inline levels in the sorting order they were applied
	 * Should be set in config
	 */
	nestedParentElements: {},
	/*
	 * Whether the framework should be made resizable
	 * May be set in config
	 */
	resizable: false,
	/*
	 * Maximum height to which the framework may resized (in pixels)
	 * May be set in config
	 */
	maxHeight: 2000,
	/*
	 * Initial textArea dimensions
	 * Should be set in config
	 */
	textAreaInitialSize: {
		width: 0,
		contextWidth: 0,
		height: 0
	},
	/*
	 * doLayout will fail if inside a hidden tab or inline element
	 */
	doLayout: function () {
		if (!this.isNested || HTMLArea.util.TYPO3.allElementsAreDisplayed(this.nestedParentElements.sorted)) {
			HTMLArea.Framework.superclass.doLayout.call(this);
		} else {
				// Clone the array of nested tabs and inline levels instead of using a reference as HTMLArea.util.TYPO3.accessParentElements will modify the array
			var parentElements = [].concat(this.nestedParentElements.sorted);
				// Walk through all nested tabs and inline levels to get correct sizes
			HTMLArea.util.TYPO3.accessParentElements(parentElements, 'HTMLArea.Framework.superclass.doLayout.call(args[0])', [this]);
		}
	},
	/*
	 * onLayout will fail if inside a hidden tab or inline element
	 */
	onLayout: function () {
		if (!this.isNested || HTMLArea.util.TYPO3.allElementsAreDisplayed(this.nestedParentElements.sorted)) {
			HTMLArea.Framework.superclass.onLayout.call(this);
		} else {
				// Clone the array of nested tabs and inline levels instead of using a reference as HTMLArea.util.TYPO3.accessParentElements will modify the array
			var parentElements = [].concat(this.nestedParentElements.sorted);
				// Walk through all nested tabs and inline levels to get correct sizes
				HTMLArea.util.TYPO3.accessParentElements(parentElements, 'HTMLArea.Framework.superclass.onLayout.call(args[0])', [this]);
		}
	},
	/*
	 * Make the framework resizable, if configured
	 */
	makeResizable: function () {
		if (this.resizable) {
			this.addClass('resizable');
			this.resizer = new Ext.Resizable(this.getEl(), {
				minWidth: 300,
				maxHeight: this.maxHeight,
				dynamic: false
			});
			this.resizer.on('resize', this.onHtmlAreaResize, this);
		}
	},
	/*
	 * Resize the framework when the resizer handles are used
	 */
	onHtmlAreaResize: function (resizer, width, height, event) {
			// Set width first as it may change the height of the toolbar and of the statusBar
		this.setWidth(width);
			// Set height of iframe and textarea
		this.iframe.setHeight(this.getInnerHeight());
		this.textArea.setSize(this.getInnerWidth(), this.getInnerHeight());
	},
	/*
	 * Size the iframe according to initial textarea size as set by Page and User TSConfig
	 */
	onWindowResize: function (width, height) {
		if (!this.isNested || HTMLArea.util.TYPO3.allElementsAreDisplayed(this.nestedParentElements.sorted)) {
			this.resizeFramework(width, height);
		} else {
				// Clone the array of nested tabs and inline levels instead of using a reference as HTMLArea.util.TYPO3.accessParentElements will modify the array
			var parentElements = [].concat(this.nestedParentElements.sorted);
				// Walk through all nested tabs and inline levels to get correct sizes
			HTMLArea.util.TYPO3.accessParentElements(parentElements, 'args[0].resizeFramework(args[1], args[2])', [this, width, height]);
		}
	},
	/*
	 * Resize the framework to its initial size
	 */
	resizeFramework: function (width, height) {
		var frameworkHeight = parseInt(this.textAreaInitialSize.height);
		if (this.textAreaInitialSize.width.indexOf('%') === -1) {
				// Width is specified in pixels
			var frameworkWidth = parseInt(this.textAreaInitialSize.width) - this.getFrameWidth();
		} else {
				// Width is specified in %
			if (Ext.isNumber(width)) {
					// Framework sizing on actual window resize
				var frameworkWidth = parseInt(((width - this.textAreaInitialSize.wizardsWidth - (this.fullScreen ? 10 : Ext.getScrollBarWidth()) - this.getBox().x - 15) * parseInt(this.textAreaInitialSize.width))/100);
			} else {
					// Initial framework sizing
				var frameworkWidth = parseInt(((HTMLArea.util.TYPO3.getWindowSize().width - this.textAreaInitialSize.wizardsWidth - (this.fullScreen ? 10 : Ext.getScrollBarWidth()) - this.getBox().x - 15) * parseInt(this.textAreaInitialSize.width))/100);
			}
		}
		if (this.resizable) {
			this.resizer.resizeTo(frameworkWidth, frameworkHeight);
		} else {
			this.setSize(frameworkWidth, frameworkHeight);
			this.doLayout();
		}
	},
	/*
	 * Resize the framework components
	 */
	onFrameworkResize: function () {
		this.iframe.setSize(this.getInnerWidth(), this.getInnerHeight());
		this.textArea.setSize(this.getInnerWidth(), this.getInnerHeight());
	},
	/*
	 * Adjust the height to the changing size of the statusbar when the textarea is shown
	 */
	onTextAreaShow: function () {
		this.iframe.setHeight(this.getInnerHeight());
		this.textArea.setHeight(this.getInnerHeight());
	},
	/*
	 * Adjust the height to the changing size of the statusbar when the iframe is shown
	 */
	onIframeShow: function () {
		if (this.getInnerHeight() <= 0) {
			this.onWindowResize();
		} else {
			this.iframe.setHeight(this.getInnerHeight());
			this.textArea.setHeight(this.getInnerHeight());
		}
	},
	/*
	 * Calculate the height available for the editing iframe
	 */
	getInnerHeight: function () {
		return this.getSize().height - this.toolbar.getHeight() - this.statusBar.getHeight() -  5;
	},
	/*
	 * Fire the editor when all components of the framework are rendered and ready
	 */
	onIframeReady: function () {
		this.ready = this.rendered && this.toolbar.rendered && this.statusBar.rendered && this.textAreaContainer.rendered;
		if (this.ready) {
			this.initEventListeners();
			this.textAreaContainer.show();
			if (!this.getEditor().config.showStatusBar) {
				this.statusBar.hide();
			}
				// Set the initial size of the framework
			this.onWindowResize();
			this.fireEvent('HTMLAreaEventFrameworkReady');
		} else {
			this.onIframeReady.defer(50, this);
		}
	},
	/*
	 * Handler invoked if we are inside a form and the form is reset
	 * On reset, re-initialize the HTMLArea content and update the toolbar
	 */
	onReset: function (event) {
		this.getEditor().setHTML(this.textArea.getValue());
		this.toolbar.update();
			// Invoke previous reset handlers, if any
		var htmlAreaPreviousOnReset = event.getTarget().dom.htmlAreaPreviousOnReset;
		if (typeof(htmlAreaPreviousOnReset) != 'undefined') {
			Ext.each(htmlAreaPreviousOnReset, function (onReset) {
				onReset();
				return true;
			});
		}
	},
	/*
	 * Cleanup on framework destruction
	 */
	onBeforeDestroy: function () {
		Ext.EventManager.removeResizeListener(this.onWindowResize, this);
			// Cleaning references to DOM in order to avoid IE memory leaks
		var form = this.textArea.dom.form;
		if (form) {
			form.htmlAreaPreviousOnReset = null;
			Ext.get(form).dom = null;
		}
		Ext.getBody().dom = null;
			// ExtJS is not releasing any resources when the iframe is unloaded
		this.toolbar.destroy();
		this.statusBar.destroy();
		this.removeAll(true);
		if (this.resizer) {
			this.resizer.destroy();
		}
		return true;
	}
});
Ext.reg('htmlareaframework', HTMLArea.Framework);
/***************************************************
 *  HTMLArea.Editor extends Ext.util.Observable
 ***************************************************/
HTMLArea.Editor = Ext.extend(Ext.util.Observable, {
	/*
	 * HTMLArea.Editor constructor
	 */
	constructor: function (config) {
		HTMLArea.Editor.superclass.constructor.call(this, {});
			// Save the config
		this.config = config;
			// Establish references to this editor
		this.editorId = this.config.editorId;
		RTEarea[this.editorId].editor = this;
			// Get textarea size and wizard context
		this.textArea = Ext.get(this.config.id);
		this.textAreaInitialSize = {
			width: this.config.RTEWidthOverride ? this.config.RTEWidthOverride : this.textArea.getStyle('width'),
			height: this.config.fullScreen ? HTMLArea.util.TYPO3.getWindowSize().height - 20 : this.textArea.getStyle('height'),
			wizardsWidth: 0
		};
			// TYPO3 Inline elements and tabs
		this.nestedParentElements = {
			all: this.config.tceformsNested,
			sorted: HTMLArea.util.TYPO3.simplifyNested(this.config.tceformsNested)
		};
		this.isNested = !Ext.isEmpty(this.nestedParentElements.sorted);
			// If in BE, get width of wizards
		if (Ext.get('typo3-docheader')) {
			this.wizards = this.textArea.parent().parent().next();
			if (this.wizards) {
				if (!this.isNested || HTMLArea.util.TYPO3.allElementsAreDisplayed(this.nestedParentElements.sorted)) {
					this.textAreaInitialSize.wizardsWidth = this.wizards.getWidth();
				} else {
						// Clone the array of nested tabs and inline levels instead of using a reference as HTMLArea.util.TYPO3.accessParentElements will modify the array
					var parentElements = [].concat(this.nestedParentElements.sorted);
						// Walk through all nested tabs and inline levels to get correct size
					this.textAreaInitialSize.wizardsWidth = HTMLArea.util.TYPO3.accessParentElements(parentElements, 'args[0].getWidth()', [this.wizards]);
				}
					// Hide the wizards so that they do not move around while the editor framework is being sized
				this.wizards.hide();
			}
		}
			// Plugins register
		this.plugins = {};
			// Register the plugins included in the configuration
		Ext.iterate(this.config.plugin, function (plugin) {
			if (this.config.plugin[plugin]) {
				this.registerPlugin(plugin);
			}
		}, this);
			// Create Ajax object
		this.ajax = new HTMLArea.Ajax({
			editor: this
		});
			// Initialize keyboard input inhibit flag
		this.inhibitKeyboardInput = false;
		this.addEvents(
			/*
			 * @event HTMLAreaEventEditorReady
			 * Fires when initialization of the editor is complete
			 */
			'HTMLAreaEventEditorReady',
			/*
			 * @event HTMLAreaEventModeChange
			 * Fires when the editor changes mode
			 */
			'HTMLAreaEventModeChange'
		);
	},
	/*
	 * Flag set to true when the editor initialization has completed
	 */
	ready: false,
	/*
	 * The current mode of the editor: 'wysiwyg' or 'textmode'
	 */
	mode: 'textmode',
	/*
	 * Determine whether the editor document is currently contentEditable
	 *
	 * @return	boolean		true, if the document is contentEditable	
	 */
 	isEditable: function () {
 		return Ext.isIE ? this.document.body.contentEditable : (this.document.designMode === 'on');
	},
	/*
	 * The selection object
	 */
	selection: null,
	getSelection: function () {
		if (!this.selection) {
			this.selection = new HTMLArea.DOM.Selection({
				editor: this
			});
		}
		return this.selection;
	},
	/*
	 * The bookmark object
	 */
	bookMark: null,
	getBookMark: function () {
		if (!this.bookMark) {
			this.bookMark = new HTMLArea.DOM.BookMark({
				editor: this
			});
		}
		return this.bookMark;
	},
	/*
	 * The DOM node object
	 */
	domNode: null,
	getDomNode: function () {
		if (!this.domNode) {
			this.domNode = new HTMLArea.DOM.Node({
				editor: this
			});
		}
		return this.domNode;
	},
	/*
	 * Create the htmlArea framework
	 */
	generate: function () {
			// Create the editor framework
		this.htmlArea = new HTMLArea.Framework({
			id: this.editorId + '-htmlArea',
			layout: 'anchor',
			baseCls: 'htmlarea',
			editorId: this.editorId,
			textArea: this.textArea,
			textAreaInitialSize: this.textAreaInitialSize,
			fullScreen: this.config.fullScreen,
			resizable: this.config.resizable,
			maxHeight: this.config.maxHeight,
			isNested: this.isNested,
			nestedParentElements: this.nestedParentElements,
				// The toolbar
			tbar: {
				xtype: 'htmlareatoolbar',
				id: this.editorId + '-toolbar',
				anchor: '100%',
				layout: 'form',
				cls: 'toolbar',
				editorId: this.editorId
			},
			items: [{
						// The iframe
					xtype: 'htmlareaiframe',
					itemId: 'iframe',
					anchor: '100%',
					width: (this.textAreaInitialSize.width.indexOf('%') === -1) ? parseInt(this.textAreaInitialSize.width) : 300,
					height: parseInt(this.textAreaInitialSize.height),
					autoEl: {
						id: this.editorId + '-iframe',
						tag: 'iframe',
						cls: 'editorIframe',
						src: Ext.isGecko ? 'javascript:void(0);' : (Ext.isWebKit ? 'javascript: \'' + HTMLArea.htmlEncode(this.config.documentType + this.config.blankDocument) + '\'' : HTMLArea.editorUrl + 'popups/blank.html')
					},
					isNested: this.isNested,
					nestedParentElements: this.nestedParentElements,
					editorId: this.editorId
				},{
						// Box container for the textarea
					xtype: 'box',
					itemId: 'textAreaContainer',
					anchor: '100%',
					width: (this.textAreaInitialSize.width.indexOf('%') === -1) ? parseInt(this.textAreaInitialSize.width) : 300,
						// Let the framework swallow the textarea and throw it back
					listeners: {
						afterrender: {
							fn: function (textAreaContainer) {
								this.originalParent = this.textArea.parent().dom;
								textAreaContainer.getEl().appendChild(this.textArea);
							},
							single: true,
							scope: this
						},
						beforedestroy: {
							fn: function (textAreaContainer) {
								this.originalParent.appendChild(this.textArea.dom);
								return true;
							},
							single: true,
							scope: this
						}
					}
				}
			],
				// The status bar
			bbar: {
				xtype: 'htmlareastatusbar',
				anchor: '100%',
				cls: 'statusBar',
				editorId: this.editorId
			}
		});
			// Set some references
		this.toolbar = this.htmlArea.getTopToolbar();
		this.statusBar = this.htmlArea.getBottomToolbar();
		this.iframe = this.htmlArea.getComponent('iframe');
		this.textAreaContainer = this.htmlArea.getComponent('textAreaContainer');
			// Get triggered when the framework becomes ready
		this.relayEvents(this.htmlArea, ['HTMLAreaEventFrameworkReady']);
		this.on('HTMLAreaEventFrameworkReady', this.onFrameworkReady, this, {single: true});
	},
	/*
	 * Initialize the editor
	 */
	onFrameworkReady: function () {
			// Initialize editor mode
		this.setMode('wysiwyg');
			// Create the selection object
		this.getSelection();
			// Create the bookmark object
		this.getBookMark();
			// Create the DOM node object
		this.getDomNode();
			// Initiate events listening
		this.initEventsListening();
			// Generate plugins
		this.generatePlugins();
			// Make the editor visible
		this.show();
			// Make the wizards visible again
		if (this.wizards) {
			this.wizards.show();
		}
			// Focus on the first editor that is not hidden
		Ext.iterate(RTEarea, function (editorId, RTE) {
			if (!Ext.isDefined(RTE.editor) || (RTE.editor.isNested && !HTMLArea.util.TYPO3.allElementsAreDisplayed(RTE.editor.nestedParentElements.sorted))) {
				return true;
			} else {
				RTE.editor.focus();
				return false;
			}
		}, this);
		this.ready = true;
		this.fireEvent('HTMLAreaEventEditorReady');
		this.appendToLog('HTMLArea.Editor', 'onFrameworkReady', 'Editor ready.', 'info');
	},
	/*
	 * Set editor mode
	 *
	 * @param	string		mode: 'textmode' or 'wysiwyg'
	 *
	 * @return	void
	 */
	setMode: function (mode) {
		switch (mode) {
			case 'textmode':
				this.textArea.set({ value: this.getHTML() }, false);
				this.iframe.setDesignMode(false);
				this.iframe.hide();
				this.textAreaContainer.show();
				this.mode = mode;
				break;
			case 'wysiwyg':
				try {
					this.document.body.innerHTML = this.getHTML();
				} catch(e) {
					this.appendToLog('HTMLArea.Editor', 'setMode', 'The HTML document is not well-formed.', 'warn');
					TYPO3.Dialog.ErrorDialog({
						title: 'htmlArea RTE',
						msg: HTMLArea.localize('HTML-document-not-well-formed')
					});
					break;
				}
				this.textAreaContainer.hide();
				this.iframe.show();
				this.iframe.setDesignMode(true);
				this.mode = mode;
				break;
		}
		this.fireEvent('HTMLAreaEventModeChange', this.mode);
		this.focus();
		Ext.iterate(this.plugins, function(pluginId) {
			this.getPlugin(pluginId).onMode(this.mode);
		}, this);
	},
	/*
	 * Get current editor mode
	 */
	getMode: function () {
		return this.mode;
	},
	/*
	 * Retrieve the HTML
	 * In the case of the wysiwyg mode, the html content is rendered from the DOM tree
	 *
	 * @return	string		the textual html content from the current editing mode
	 */
	getHTML: function () {
		switch (this.mode) {
			case 'wysiwyg':
				return this.iframe.getHTML();
			case 'textmode':
					// Collapse repeated spaces non-editable in wysiwyg
					// Replace leading and trailing spaces non-editable in wysiwyg
				return this.textArea.getValue().
					replace(/[\x20]+/g, '\x20').
					replace(/^\x20/g, '&nbsp;').
					replace(/\x20$/g, '&nbsp;');
			default:
				return '';
		}
	},
	/*
	 * Retrieve raw HTML
	 *
	 * @return	string	the textual html content from the current editing mode
	 */
	getInnerHTML: function () {
		switch (this.mode) {
			case 'wysiwyg':
				return this.document.body.innerHTML;
			case 'textmode':
				return this.textArea.getValue();
			default:
				return '';
		}
	},
	/*
	 * Replace the html content
	 *
	 * @param	string		html: the textual html
	 *
	 * @return	void
	 */
	setHTML: function (html) {
		switch (this.mode) {
			case 'wysiwyg':
				this.document.body.innerHTML = html;
				break;
			case 'textmode':
				this.textArea.set({ value: html }, false);;
				break;
		}
	},
	/*
	 * Instantiate the specified plugin and register it with the editor
	 *
	 * @param	string		plugin: the name of the plugin
	 *
	 * @return	boolean		true if the plugin was successfully registered
	 */
	registerPlugin: function (pluginName) {
		var plugin = HTMLArea[pluginName],
			isRegistered = false;
		if (typeof(plugin) !== 'undefined' && Ext.isFunction(plugin)) {
			var pluginInstance = new plugin(this, pluginName);
			if (pluginInstance) {
				var pluginInformation = pluginInstance.getPluginInformation();
				pluginInformation.instance = pluginInstance;
				this.plugins[pluginName] = pluginInformation;
				isRegistered = true;
			}
		}
		if (!isRegistered) {
			this.appendToLog('HTMLArea.Editor', 'registerPlugin', 'Could not register plugin ' + pluginName + '.', 'warn');
		}
		return isRegistered;
	},
	/*
	 * Generate registered plugins
	 */
	generatePlugins: function () {
		Ext.iterate(this.plugins, function (pluginId) {
			var plugin = this.getPlugin(pluginId);
			plugin.onGenerate();
		}, this);
	},
	/*
	 * Get the instance of the specified plugin, if it exists
	 *
	 * @param	string		pluginName: the name of the plugin
	 * @return	object		the plugin instance or null
	 */
	getPlugin: function(pluginName) {
		return (this.plugins[pluginName] ? this.plugins[pluginName].instance : null);
	},
	/*
	 * Unregister the instance of the specified plugin
	 *
	 * @param	string		pluginName: the name of the plugin
	 * @return	void
	 */
	unRegisterPlugin: function(pluginName) {
		delete this.plugins[pluginName].instance;
		delete this.plugins[pluginName];
	},
	/*
	 * Update the edito toolbar
	 */
	updateToolbar: function (noStatus) {
		this.toolbar.update(noStatus);
	},
	/*
	 * Focus on the editor
	 */
	focus: function () {
		switch (this.getMode()) {
			case 'wysiwyg':
				this.iframe.focus();
				break;
			case 'textmode':
				this.textArea.focus();
				break;
		}
	},
	/*
	 * Scroll the editor window to the current caret position
	 */
	scrollToCaret: function () {
		if (!Ext.isIE) {
			var e = this.getSelection().getParentElement(),
				w = this.iframe.getEl().dom.contentWindow ? this.iframe.getEl().dom.contentWindow : window,
				h = w.innerHeight || w.height,
				d = this.document,
				t = d.documentElement.scrollTop || d.body.scrollTop;
			if (e.offsetTop > h+t || e.offsetTop < t) {
				this.getSelection().getParentElement().scrollIntoView();
			}
		}
	},
	/*
	 * Add listeners
	 */
	initEventsListening: function () {
		if (Ext.isOpera) {
			this.iframe.startListening();
		}
			// Add unload handler
		var iframe = this.iframe.getEl().dom;
		Ext.EventManager.on(iframe.contentWindow ? iframe.contentWindow : iframe.contentDocument, 'unload', this.onUnload, this, {single: true});
	},
	/*
	 * Make the editor framework visible
	 */
	show: function () {
		document.getElementById('pleasewait' + this.editorId).style.display = 'none';
		document.getElementById('editorWrap' + this.editorId).style.visibility = 'visible';
	},
	/*
	 * Append an entry at the end of the troubleshooting log
	 *
	 * @param	string		functionName: the name of the editor function writing to the log
	 * @param	string		text: the text of the message
	 * @param	string		type: the type of message
	 *
	 * @return	void
	 */
	appendToLog: function (objectName, functionName, text, type) {
		HTMLArea.appendToLog(this.editorId, objectName, functionName, text, type);
	},
	/*
	 * Iframe unload handler: Update the textarea for submission and cleanup
	 */
	onUnload: function (event) {
			// Save the HTML content into the original textarea for submit, back/forward, etc.
		if (this.ready) {
			this.textArea.set({
				value: this.getHTML()
			}, false);
		}
			// Cleanup
		Ext.TaskMgr.stopAll();
			// ExtJS is not releasing any resources when the iframe is unloaded
		this.htmlArea.destroy();
		Ext.iterate(this.plugins, function (pluginId) {
			this.unRegisterPlugin(pluginId);
		}, this);
		this.purgeListeners();
			// Cleaning references to DOM in order to avoid IE memory leaks
		if (this.wizards) {
			this.wizards.dom = null;
			this.textArea.parent().parent().dom = null;
			this.textArea.parent().dom = null;
		}
		this.textArea.dom = null;
		RTEarea[this.editorId].editor = null;
	}
});
HTMLArea.Ajax = function (config) {
	Ext.apply(this, config);
};
HTMLArea.Ajax = Ext.extend(HTMLArea.Ajax, {
	/*
	 * Load a Javascript file asynchronously
	 *
	 * @param	string		url: url of the file to load
	 * @param	function	callBack: the callBack function
	 * @param	object		scope: scope of the callbacks
	 *
	 * @return	boolean		true on success of the request submission
	 */
	getJavascriptFile: function (url, callback, scope) {
		var success = false;
		var self = this;
		Ext.Ajax.request({
			method: 'GET',
			url: url,
			callback: callback,
			success: function (response) {
				success = true;
			},
			failure: function (response) {
				self.editor.inhibitKeyboardInput = false;
				self.editor.appendToLog('HTMLArea.Ajax', 'getJavascriptFile', 'Unable to get ' + url + ' . Server reported ' + response.status, 'error');
			},
			scope: scope
		});
		return success;
	},
	/*
	 * Post data to the server
	 *
	 * @param	string		url: url to post data to
	 * @param	object		data: data to be posted
	 * @param	function	callback: function that will handle the response returned by the server
	 * @param	object		scope: scope of the callbacks
	 *
	 * @return	boolean		true on success
	 */
	postData: function (url, data, callback, scope) {
		var success = false;
		var self = this;
		data.charset = this.editor.config.typo3ContentCharset ? this.editor.config.typo3ContentCharset : 'utf-8';
		var params = '';
		Ext.iterate(data, function (parameter, value) {
			params += (params.length ? '&' : '') + parameter + '=' + encodeURIComponent(value);
		});
		params += this.editor.config.RTEtsConfigParams;
		Ext.Ajax.request({
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			url: url,
			params: params,
			callback: Ext.isFunction(callback) ? callback: function (options, success, response) {
				if (!success) {
					self.editor.appendToLog('HTMLArea.Ajax', 'postData', 'Post request to ' + url + ' failed. Server reported ' + response.status, 'error');
				}
			},
			success: function (response) {
				success = true;
			},
			failure: function (response) {
				self.editor.appendToLog('HTMLArea.Ajax', 'postData', 'Unable to post ' + url + ' . Server reported ' + response.status, 'error');
			},
			scope: scope
		});
		return success;
	}
});
/***************************************************
 * HTMLArea.util.TYPO3: Utility functions for dealing with tabs and inline elements in TYPO3 forms
 ***************************************************/
HTMLArea.util.TYPO3 = function () {
	return {
		/*
		 * Simplify the array of nested levels. Create an indexed array with the correct names of the elements.
		 *
		 * @param	object		nested: The array with the nested levels
		 * @return	object		The simplified array
		 * @author	Oliver Hader <oh@inpublica.de>
		 */
		simplifyNested: function(nested) {
			var i, type, level, elementId, max, simplifiedNested=[],
				elementIdSuffix = {
					tab: '-DIV',
					inline: '_fields',
					flex: '-content'
				};
			if (nested && nested.length) {
				if (nested[0][0]=='inline') {
					nested = inline.findContinuedNestedLevel(nested, nested[0][1]);
				}
				for (i=0, max=nested.length; i<max; i++) {
					type = nested[i][0];
					level = nested[i][1];
					elementId = level + elementIdSuffix[type];
					if (Ext.get(elementId)) {
						simplifiedNested.push(elementId);
					}
				}
			}
			return simplifiedNested;
		},
		/*
		 * Access an inline relational element or tab menu and make it "accessible".
		 * If a parent or ancestor object has the style "display: none", offsetWidth & offsetHeight are '0'.
		 *
		 * @params	arry		parentElements: array of parent elements id's; note that this input array will be modified
		 * @params	object		callbackFunc: A function to be called, when the embedded objects are "accessible".
		 * @params	array		args: array of arguments
		 * @return	object		An object returned by the callbackFunc.
		 * @author	Oliver Hader <oh@inpublica.de>
		 */
		accessParentElements: function (parentElements, callbackFunc, args) {
			var result = {};
			if (parentElements.length) {
				var currentElement = parentElements.pop();
				currentElement = Ext.get(currentElement);
				var actionRequired = (currentElement.getStyle('display') == 'none');
				if (actionRequired) {
					var originalStyles = currentElement.getStyles('visibility', 'position', 'top', 'display');
					currentElement.setStyle({
						visibility: 'hidden',
						position: 'absolute',
						top: '-10000px',
						display: ''
					});
				}
				result = this.accessParentElements(parentElements, callbackFunc, args);
				if (actionRequired) {
					currentElement.setStyle(originalStyles);
				}
			} else {
				result = eval(callbackFunc);
			}
			return result;
		},
		/*
		 * Check if all elements in input array are currently displayed
		 *
		 * @param	array		elements: array of element id's
		 * @return	boolean		true if all elements are displayed
		 */
		allElementsAreDisplayed: function(elements) {
			var allDisplayed = true;
			Ext.each(elements, function (element) {
				allDisplayed = Ext.get(element).getStyle('display') != 'none';
				return allDisplayed;
			});
			return allDisplayed;
		},
		/*
		 * Get current size of window
		 *
		 * @return	object		width and height of window
		 */
		getWindowSize: function () {
			if (Ext.isIE) {
				var size = Ext.getBody().getSize();
			} else {
				var size = {
					width: window.innerWidth,
					height: window.innerHeight
				};
			}
				// Subtract the docheader height from the calculated window height
			var docHeader = Ext.get('typo3-docheader');
			if (docHeader) {
				size.height -= docHeader.getHeight();
				docHeader.dom = null;
			}
			return size;
		}
	}
}();
 /*
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.forceRedraw = function() {
	this.appendToLog('HTMLArea.Editor', 'forceRedraw', 'Reference to deprecated method', 'warn');
	this.htmlArea.doLayout();
};
/*
 * Surround the currently selected HTML source code with the given tags.
 * Delete the selection, if any.
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.surroundHTML = function(startTag,endTag) {
	this.appendToLog('HTMLArea.Editor', 'surroundHTML', 'Reference to deprecated method', 'warn');
	this.getSelection().surroundHtml(startTag, endTag);
};

/*
 * Change the tag name of a node.
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.convertNode = function(el,newTagName) {
	this.appendToLog('HTMLArea.Editor', 'surroundHTML', 'Reference to deprecated method', 'warn');
	return HTMLArea.DOM.convertNode(el, newTagName);
};

/*
 * This function removes the given markup element
 *
 * @param	object	element: the inline element to be removed, content and selection being preserved
 *
 * @return	void
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.removeMarkup = function(element) {
	this.appendToLog('HTMLArea.Editor', 'removeMarkup', 'Reference to deprecated method', 'warn');
	this.getDomNode().removeMarkup(element);
};
/*
 * Return true if we have some selected content
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.hasSelectedText = function() {
	this.appendToLog('HTMLArea.Editor', 'hasSelectedText', 'Reference to deprecated method', 'warn');
	return !this.getSelection().isEmpty();
};

/*
 * Get an array with all the ancestor nodes of the selection
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getAllAncestors = function() {
	this.appendToLog('HTMLArea.Editor', 'getAllAncestors', 'Reference to deprecated method', 'warn');
	return this.getSelection().getAllAncestors();
};

/*
 * Get the block elements containing the start and the end points of the selection
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getEndBlocks = function(selection) {
	this.appendToLog('HTMLArea.Editor', 'getEndBlocks', 'Reference to deprecated method', 'warn');
	return this.getSelection().getEndBlocks();
};

/*
 * This function determines if the end poins of the current selection are within the same block
 *
 * @return	boolean	true if the end points of the current selection are inside the same block element
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.endPointsInSameBlock = function() {
	this.appendToLog('HTMLArea.Editor', 'endPointsInSameBlock', 'Reference to deprecated method', 'warn');
	return this.getSelection().endPointsInSameBlock();
};

/*
 * Get the deepest ancestor of the selection that is of the specified type
 * Borrowed from Xinha (is not htmlArea) - http://xinha.gogo.co.nz/
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype._getFirstAncestor = function(sel,types) {
	this.appendToLog('HTMLArea.Editor', '_getFirstAncestor', 'Reference to deprecated method', 'warn');
	return this.getSelection().getFirstAncestorOfType(types);
};
/*
 * Get the node whose contents are currently fully selected
 *
 * @param 	array		selection: the current selection
 * @param 	array		range: the range of the current selection
 * @param 	array		ancestors: the array of ancestors node of the current selection
 *
 * @return	object		the fully selected node, if any, null otherwise
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getFullySelectedNode = function (selection, range, ancestors) {
	this.appendToLog('HTMLArea.Editor', 'getFullySelectedNode', 'Reference to deprecated method', 'warn');
	return this.getSelection().getFullySelectedNode();
};
/*
 * Intercept some native execCommand commands
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.execCommand = function(cmdID, UI, param) {
	this.appendToLog('HTMLArea.Editor', 'execCommand', 'Reference to deprecated method', 'warn');
	return this.getSelection().execCommand(cmdID, UI, param);
};

/***************************************************
 *  UTILITY FUNCTIONS
 ***************************************************/
Ext.apply(HTMLArea.util, {
	/*
	 * Perform HTML encoding of some given string
	 * Borrowed in part from Xinha (is not htmlArea) - http://xinha.gogo.co.nz/
	 */
	htmlDecode: function (str) {
		str = str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
		str = str.replace(/&nbsp;/g, '\xA0'); // Decimal 160, non-breaking-space
		str = str.replace(/&quot;/g, '\x22');
		str = str.replace(/&#39;/g, "'") ;
		str = str.replace(/&amp;/g, '&');
		return str;
	},
	htmlEncode: function (str) {
		if (typeof(str) != 'string') {
			str = str.toString();
		}
		str = str.replace(/&/g, '&amp;');
		str = str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
		str = str.replace(/\xA0/g, '&nbsp;'); // Decimal 160, non-breaking-space
		str = str.replace(/\x22/g, '&quot;'); // \x22 means '"'
		return str;
	}
});
/*
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.htmlDecode = HTMLArea.util.htmlDecode;
/*
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.htmlEncode = HTMLArea.util.htmlEncode;

/*****************************************************************
 * HTMLArea.DOM: Utility functions for dealing with the DOM tree *
 *****************************************************************/
HTMLArea.DOM = function () {
	return {
		/***************************************************
		*  DOM-RELATED CONSTANTS
		***************************************************/
			// DOM node types
		ELEMENT_NODE: 1,
		ATTRIBUTE_NODE: 2,
		TEXT_NODE: 3,
		CDATA_SECTION_NODE: 4,
		ENTITY_REFERENCE_NODE: 5,
		ENTITY_NODE: 6,
		PROCESSING_INSTRUCTION_NODE: 7,
		COMMENT_NODE: 8,
		DOCUMENT_NODE: 9,
		DOCUMENT_TYPE_NODE: 10,
		DOCUMENT_FRAGMENT_NODE: 11,
		NOTATION_NODE: 12,
		/***************************************************
		*  DOM-RELATED REGULAR EXPRESSIONS
		***************************************************/
		RE_blockTags: /^(address|article|aside|body|blockquote|caption|dd|div|dl|dt|fieldset|footer|form|header|hr|h1|h2|h3|h4|h5|h6|iframe|li|ol|p|pre|nav|noscript|section|table|tbody|td|tfoot|th|thead|tr|ul)$/i,
		RE_noClosingTag: /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,
		RE_bodyTag: new RegExp('<\/?(body)[^>]*>', 'gi'),
		/***************************************************
		*  STATIC METHODS ON DOM NODE
		***************************************************/
		/*
		 * Determine whether an element node is a block element
		 *
		 * @param	object		element: the element node
		 *
		 * @return	boolean		true, if the element node is a block element
		 */
		isBlockElement: function (element) {
			return element && element.nodeType === HTMLArea.DOM.ELEMENT_NODE && HTMLArea.DOM.RE_blockTags.test(element.nodeName);
		},
		/*
		 * Determine whether an element node needs a closing tag
		 *
		 * @param	object		element: the element node
		 *
		 * @return	boolean		true, if the element node needs a closing tag
		 */
		needsClosingTag: function (element) {
			return element && element.nodeType === HTMLArea.DOM.ELEMENT_NODE && !HTMLArea.DOM.RE_noClosingTag.test(element.nodeName);
		},
		/*
		 * Gets the class names assigned to a node, reserved classes removed
		 *
		 * @param	object		node: the node
		 * @return	array		array of class names on the node, reserved classes removed
		 */
		getClassNames: function (node) {
			var classNames = [];
			if (node) {
				if (node.className && /\S/.test(node.className)) {
					classNames = node.className.trim().split(' ');
				}
				if (HTMLArea.reservedClassNames.test(node.className)) {
					var cleanClassNames = [];
					var j = -1;
					for (var i = 0; i < classNames.length; ++i) {
						if (!HTMLArea.reservedClassNames.test(classNames[i])) {
							cleanClassNames[++j] = classNames[i];
						}
					}
					classNames = cleanClassNames;
				}
			}
			return classNames;
		},
		/*
		 * Check if a class name is in the class attribute of a node
		 *
		 * @param	object		node: the node
		 * @param	string		className: the class name to look for
		 * @param	boolean		substring: if true, look for a class name starting with the given string
		 * @return	boolean		true if the class name was found, false otherwise
		 */
		hasClass: function (node, className, substring) {
			var found = false;
			if (node && node.className) {
				var classes = node.className.trim().split(' ');
				for (var i = classes.length; --i >= 0;) {
					found = ((classes[i] == className) || (substring && classes[i].indexOf(className) == 0));
					if (found) {
						break;
					}
				}
			}
			return found;
		},
		/*
		 * Add a class name to the class attribute of a node
		 *
		 * @param	object		node: the node
		 * @param	string		className: the name of the class to be added
		 * @return	void
		 */
		addClass: function (node, className) {
			if (node) {
				HTMLArea.DOM.removeClass(node, className);
					// Remove classes configured to be incompatible with the class to be added
				if (node.className && HTMLArea.classesXOR && HTMLArea.classesXOR[className] && Ext.isFunction(HTMLArea.classesXOR[className].test)) {
					var classNames = node.className.trim().split(' ');
					for (var i = classNames.length; --i >= 0;) {
						if (HTMLArea.classesXOR[className].test(classNames[i])) {
							HTMLArea.DOM.removeClass(node, classNames[i]);
						}
					}
				}
				if (node.className) {
					node.className += ' ' + className;
				} else {
					node.className = className;
				}
			}
		},
		/*
		 * Remove a class name from the class attribute of a node
		 *
		 * @param	object		node: the node
		 * @param	string		className: the class name to removed
		 * @param	boolean		substring: if true, remove the class names starting with the given string
		 * @return	void
		 */
		removeClass: function (node, className, substring) {
			if (node && node.className) {
				var classes = node.className.trim().split(' ');
				var newClasses = [];
				for (var i = classes.length; --i >= 0;) {
					if ((!substring && classes[i] != className) || (substring && classes[i].indexOf(className) != 0)) {
						newClasses[newClasses.length] = classes[i];
					}
				}
				if (newClasses.length) {
					node.className = newClasses.join(' ');
				} else {
					if (!Ext.isOpera) {
						node.removeAttribute('class');
						if (Ext.isIE) {
							node.removeAttribute('className');
						}
					} else {
						node.className = '';
					}
				}
			}
		},
		/*
		 * Get the innerText of a given node
		 *
		 * @param	object		node: the node
		 *
		 * @return	string		the text inside the node
		 */
		getInnerText: function (node) {
			return (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) ? node.innerText : node.textContent;;
		},
		/*
		 * Get the block ancestors of a node within a given block
		 *
		 * @param	object		node: the given node
		 * @param	object		withinBlock: the containing node
		 *
		 * @return	array		array of block ancestors
		 */
		getBlockAncestors: function (node, withinBlock) {
			var ancestors = [];
			var ancestor = node;
			while (ancestor && (ancestor.nodeType === HTMLArea.DOM.ELEMENT_NODE) && !/^(body)$/i.test(ancestor.nodeName) && ancestor != withinBlock) {
				if (HTMLArea.DOM.isBlockElement(ancestor)) {
					ancestors.unshift(ancestor);
				}
				ancestor = ancestor.parentNode;
			}
			ancestors.unshift(ancestor);
			return ancestors;
		},
		/*
		 * Get the deepest element ancestor of a given node that is of one of the specified types
		 *
		 * @param	object		node: the given node
		 * @param	array		types: an array of nodeNames
		 *
		 * @return	object		the found ancestor of one of the given types or null
		 */
		getFirstAncestorOfType: function (node, types) {
			var ancestor = null,
				parent = node;
			if (!Ext.isEmpty(types)) {
				if (Ext.isString(types)) {
					var types = [types];
				}
				types = new RegExp( '^(' + types.join('|') + ')$', 'i');
				while (parent && parent.nodeType === HTMLArea.DOM.ELEMENT_NODE && !/^(body)$/i.test(parent.nodeName)) {
					if (types.test(parent.nodeName)) {
						ancestor = parent;
						break;
					}
					parent = parent.parentNode;
				}
			}
			return ancestor;
		},
		/*
		 * Determine whether a given node has any allowed attributes
		 *
		 * @param	object		node: the DOM node
		 * @param	array		allowedAttributes: array of allowed attribute names
		 *
		 * @return	boolean		true if the node has one of the allowed attributes
		 */
		 hasAllowedAttributes: function (node, allowedAttributes) {
			var value,
				hasAllowedAttributes = false;
			if (Ext.isString(allowedAttributes)) {
				allowedAttributes = [allowedAttributes];
			}
			allowedAttributes = allowedAttributes || [];
			for (var i = allowedAttributes.length; --i >= 0;) {
				value = node.getAttribute(allowedAttributes[i]);
				if (value) {
					if (allowedAttributes[i] === 'style') {
						if (node.style.cssText) {
							hasAllowedAttributes = true;
							break;
						}
					} else {
						hasAllowedAttributes = true;
						break;
					}
				}
			}
			return hasAllowedAttributes;
		},
		/*
		 * Remove the given node from its parent
		 *
		 * @param	object		node: the DOM node
		 *
		 * @return	void
		 */
		removeFromParent: function (node) {
			var parent = node.parentNode;
			if (parent) {
				parent.removeChild(node);
			}
		},
		/*
		 * Change the nodeName of an element node
		 *
		 * @param	object		node: the node to convert (must belong to a document)
		 * @param	string		nodeName: the nodeName of the converted node
		 *
		 * @retrun	object		the converted node or the input node
		 */
		convertNode: function (node, nodeName) {
			var convertedNode = node,
				ownerDocument = node.ownerDocument;
			if (ownerDocument && node.nodeType === HTMLArea.DOM.ELEMENT_NODE) {
				var convertedNode = ownerDocument.createElement(nodeName),
					parent = node.parentNode;
				while (node.firstChild) {
					convertedNode.appendChild(node.firstChild);
				}
				parent.insertBefore(convertedNode, node);
				parent.removeChild(node);
			}
			return convertedNode;
		},
		/*
		 * Determine whether a given range intersects a given node
		 *
		 * @param	object		range: the range
		 * @param	object		node: the DOM node (must belong to a document)
		 *
		 * @return	boolean		true if the range intersects the node
		 */
		rangeIntersectsNode: function (range, node) {
			var rangeIntersectsNode = false,
				ownerDocument = node.ownerDocument;
			if (ownerDocument) {
				if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
					var nodeRange = ownerDocument.body.createTextRange();
					nodeRange.moveToElementText(node);
					rangeIntersectsNode = (range.compareEndPoints('EndToStart', nodeRange) == -1 && range.compareEndPoints('StartToEnd', nodeRange) == 1) ||
						(range.compareEndPoints('EndToStart', nodeRange) == 1 && range.compareEndPoints('StartToEnd', nodeRange) == -1);
				} else {
					var nodeRange = ownerDocument.createRange();
					try {
						nodeRange.selectNode(node);
					} catch (e) {
						if (Ext.isWebKit) {
							nodeRange.setStart(node, 0);
							if (node.nodeType === HTMLArea.DOM.TEXT_NODE || node.nodeType === HTMLArea.DOM.COMMENT_NODE || node.nodeType === HTMLArea.DOM.CDATA_SECTION_NODE) {
								nodeRange.setEnd(node, node.textContent.length);
							} else {
								nodeRange.setEnd(node, node.childNodes.length);
							}
						} else {
							nodeRange.selectNodeContents(node);
						}
					}
						// Note: sometimes WebKit inverts the end points
					rangeIntersectsNode = (range.compareBoundaryPoints(range.END_TO_START, nodeRange) == -1 && range.compareBoundaryPoints(range.START_TO_END, nodeRange) == 1) ||
						(range.compareBoundaryPoints(range.END_TO_START, nodeRange) == 1 && range.compareBoundaryPoints(range.START_TO_END, nodeRange) == -1);
				}
			}
			return rangeIntersectsNode;
		},
		/*
		 * Make url's absolute in the DOM tree under the root node
		 *
		 * @param	object		root: the root node
		 * @param	string		baseUrl: base url to use
		 * @param	string		walker: a HLMLArea.DOM.Walker object
		 * @return	void
		 */
		makeUrlsAbsolute: function (node, baseUrl, walker) {
			walker.walk(node, true, 'HTMLArea.DOM.makeImageSourceAbsolute(node, args[0]) || HTMLArea.DOM.makeLinkHrefAbsolute(node, args[0])', 'Ext.emptyFn', [baseUrl]);
		},
		/*
		 * Make the src attribute of an image node absolute
		 *
		 * @param	object		node: the image node
		 * @param	string		baseUrl: base url to use
		 * @return	void
		 */
		makeImageSourceAbsolute: function (node, baseUrl) {
			if (/^img$/i.test(node.nodeName)) {
				var src = node.getAttribute('src');
				if (src) {
					node.setAttribute('src', HTMLArea.DOM.addBaseUrl(src, baseUrl));
				}
				return true;
			}
			return false;
		},
		/*
		 * Make the href attribute of an a node absolute
		 *
		 * @param	object		node: the image node
		 * @param	string		baseUrl: base url to use
		 * @return	void
		 */
		makeLinkHrefAbsolute: function (node, baseUrl) {
			if (/^a$/i.test(node.nodeName)) {
				var href = node.getAttribute('href');
				if (href) {
					node.setAttribute('href', HTMLArea.DOM.addBaseUrl(href, baseUrl));
				}
				return true;
			}
			return false;
		},
		/*
		 * Add base url
		 *
		 * @param	string		url: value of a href or src attribute
		 * @param	string		baseUrl: base url to add
		 * @return	string		absolute url
		 */
		addBaseUrl: function (url, baseUrl) {
			var absoluteUrl = url;
				// If the url has no scheme...
			if (!/^[a-z0-9_]{2,}\:/i.test(absoluteUrl)) {
				var base = baseUrl;
				while (absoluteUrl.match(/^\.\.\/(.*)/)) {
						// Remove leading ../ from url
					absoluteUrl = RegExp.$1;
					base.match(/(.*\:\/\/.*\/)[^\/]+\/$/);
						// Remove lowest directory level from base
					base = RegExp.$1;
					absoluteUrl = base + absoluteUrl;
				}
					// If the url is still not absolute...
				if (!/^.*\:\/\//.test(absoluteUrl)) {
					absoluteUrl = baseUrl + absoluteUrl;
				}
			}
			return absoluteUrl;
		}
	};
}();
/***************************************************
 *  HTMLArea.DOM.Walker: DOM tree walk
 ***************************************************/
HTMLArea.DOM.Walker = function (config) {
	var configDefaults = {
		keepComments: false,
		keepCDATASections: false,
		removeTags: /none/i,
		removeTagsAndContents: /none/i,
		keepTags: /.*/i,
		removeAttributes: /none/i,
		removeTrailingBR: true,
		baseUrl: ''
	};
	Ext.apply(this, config, configDefaults);
};
HTMLArea.DOM.Walker = Ext.extend(HTMLArea.DOM.Walker, {
	/*
	 * Walk the DOM tree
	 *
	 * @param	object		node: the root node of the tree
	 * @param	boolean		includeNode: if set, apply callback to the node
	 * @param	string		startCallback: a function call to be evaluated on each node, before walking the children
	 * @param	string		endCallback: a function call to be evaluated on each node, after walking the children
	 * @param	array		args: array of arguments
	 * @return	void
	 */
	walk: function (node, includeNode, startCallback, endCallback, args) {
		if (!this.removeTagsAndContents.test(node.nodeName)) {
			if (includeNode) {
				eval(startCallback);
			}
				// Walk the children
			var child = node.firstChild;
			while (child) {
				this.walk(child, true, startCallback, endCallback, args);
				child = child.nextSibling;
			}
			if (includeNode) {
				eval(endCallback);
			}
		}
	},
	/*
	 * Generate html string from DOM tree
	 *
	 * @param	object		node: the root node of the tree
	 * @param	boolean		includeNode: if set, apply callback to root element
	 * @return	string		rendered html code
	 */
	render: function (node, includeNode) {
		this.html = '';
		this.walk(node, includeNode, 'args[0].renderNodeStart(node)', 'args[0].renderNodeEnd(node)', [this]);
		return this.html;
	},
	/*
	 * Generate html string for the start of a node
	 *
	 * @param	object		node: the root node of the tree
	 * @return	string		rendered html code (accumulated in this.html)
	 */
	renderNodeStart: function (node) {
		var html = '';
		switch (node.nodeType) {
			case HTMLArea.DOM.ELEMENT_NODE:
				if (this.keepTags.test(node.nodeName) && !this.removeTags.test(node.nodeName)) {
					html += this.setOpeningTag(node);
				}
				break;
			case HTMLArea.DOM.TEXT_NODE:
				html += /^(script|style)$/i.test(node.parentNode.nodeName) ? node.data : HTMLArea.util.htmlEncode(node.data);
				break;
			case HTMLArea.DOM.ENTITY_NODE:
				html += node.nodeValue;
				break;
			case HTMLArea.DOM.ENTITY_REFERENCE_NODE:
				html += '&' + node.nodeValue + ';';
				break;
			case HTMLArea.DOM.COMMENT_NODE:
				if (this.keepComments) {
					html += '<!--' + node.data + '-->';
				}
				break;
			case HTMLArea.DOM.CDATA_SECTION_NODE:
				if (this.keepCDATASections) {
					html += '<![CDATA[' + node.data + ']]>';
				}
				break;
			default:
					// Ignore all other node types
				break;
		}
		this.html += html;
	},
	/*
	 * Generate html string for the end of a node
	 *
	 * @param	object		node: the root node of the tree
	 * @return	string		rendered html code (accumulated in this.html)
	 */
	renderNodeEnd: function (node) {
		var html = '';
		if (node.nodeType === HTMLArea.DOM.ELEMENT_NODE) {
			if (this.keepTags.test(node.nodeName) && !this.removeTags.test(node.nodeName)) {
				html += this.setClosingTag(node);
			}
		}
		this.html += html;
	},
	/*
	 * Get the attributes of the node, filtered and cleaned-up
	 *
	 * @param	object		node: the node
	 * @return	object		an object with attribute name as key and attribute value as value
	 */
	getAttributes: function (node) {
		var attributes = node.attributes;
		var filterededAttributes = [];
		var attribute, attributeName, attributeValue;
		for (var i = attributes.length; --i >= 0 ;) {
			attribute = attributes.item(i);
			attributeName = attribute.nodeName.toLowerCase();
			attributeValue = attribute.nodeValue;
				// Ignore some attributes and those configured to be removed
			if (/_moz|contenteditable|complete/.test(attributeName) || this.removeAttributes.test(attributeName)) {
				continue;
			}
				// Ignore default values except for the value attribute
			if (!attribute.specified && attributeName !== 'value') {
				continue;
			}
			if (Ext.isIE) {
					// IE fails to put style in attributes list.
				if (attributeName === 'style') {
					attributeValue = node.style.cssText;
					// May need to strip the base url
				} else if (attributeName === 'href' || attributeName === 'src') {
					attributeValue = this.stripBaseURL(attributeValue);
					// Ignore value="0" reported by IE on all li elements
				} else if (attributeName === 'value' && /^li$/i.test(node.nodeName) && attributeValue == 0) {
					continue;
				}
			} else if (Ext.isGecko) {
					// Ignore special values reported by Mozilla
				if (/(_moz|^$)/.test(attributeValue)) {
					continue;
					// Pasted internal url's are made relative by Mozilla: https://bugzilla.mozilla.org/show_bug.cgi?id=613517
				} else if (attributeName === 'href' || attributeName === 'src') {
					attributeValue = HTMLArea.DOM.addBaseUrl(attributeValue, this.baseUrl);
				}
			}
				// Ignore id attributes generated by ExtJS
			if (attributeName === 'id' && /^ext-gen/.test(attributeValue)) {
				continue;
			}
			filterededAttributes.push({
				attributeName: attributeName,
				attributeValue: attributeValue
			});
		}
		return (Ext.isWebKit || Ext.isOpera) ? filterededAttributes.reverse() : filterededAttributes;
	},
	/*
	 * Set opening tag for a node
	 *
	 * @param	object		node: the node
	 * @return	object		opening tag
	 */
	setOpeningTag: function (node) {
		var html = '';
			// Handle br oddities
		if (/^br$/i.test(node.nodeName)) {
				// Remove Mozilla special br node
			if (Ext.isGecko && node.hasAttribute('_moz_editor_bogus_node')) {
				return html;
				// In Gecko, whenever some text is entered in an empty block, a trailing br tag is added by the browser.
				// If the br element is a trailing br in a block element with no other content or with content other than a br, it may be configured to be removed
			} else if (this.removeTrailingBR && !node.nextSibling && HTMLArea.DOM.isBlockElement(node.parentNode) && (!node.previousSibling || !/^br$/i.test(node.previousSibling.nodeName))) {
						// If an empty paragraph with a class attribute, insert a non-breaking space so that RTE transform does not clean it away
					if (!node.previousSibling && node.parentNode && /^p$/i.test(node.parentNode.nodeName) && node.parentNode.className) {
						html += "&nbsp;";
					}
				return html;
			}
		}
			// Normal node
		var attributes = this.getAttributes(node);
		for (var i = 0, n = attributes.length; i < n; i++) {
			html +=  ' ' + attributes[i]['attributeName'] + '="' + HTMLArea.util.htmlEncode(attributes[i]['attributeValue']) + '"';
		}
		html = '<' + node.nodeName.toLowerCase() + html + (HTMLArea.DOM.RE_noClosingTag.test(node.nodeName) ? ' />' : '>');
			// Fix orphan list elements
		if (/^li$/i.test(node.nodeName) && !/^[ou]l$/i.test(node.parentNode.nodeName)) {
			html = '<ul>' + html;
		}
		return html;
	},
	/*
	 * Set closing tag for a node
	 *
	 * @param	object		node: the node
	 * @return	object		closing tag, if required
	 */
	setClosingTag: function (node) {
		var html = HTMLArea.DOM.RE_noClosingTag.test(node.nodeName) ? '' : '</' + node.nodeName.toLowerCase() + '>';
			// Fix orphan list elements
		if (/^li$/i.test(node.nodeName) && !/^[ou]l$/i.test(node.parentNode.nodeName)) {
			html += '</ul>';
		}
		return html;
	},
	/*
	 * Strip base url
	 * May be overridden by link handling plugin
	 *
	 * @param	string		value: value of a href or src attribute
	 * @return	tring		stripped value
	 */
	stripBaseURL: function (value) {
		return value;
	}
});
/***************************************************
 *  HTMLArea.DOM.Selection: Selection object
 ***************************************************/
HTMLArea.DOM.Selection = function (config) {
};
HTMLArea.DOM.Selection = Ext.extend(HTMLArea.DOM.Selection, {
	/*
	 * Reference to the editor MUST be set in config
	 */
	editor: null,
	/*
	 * Reference to the editor document
	 */
	document: null,
	/*
	 * Reference to the editor iframe window
	 */
	window: null,
	/*
	 * The current selection
	 */
	selection: null,
	/*
	 * HTMLArea.DOM.Selection constructor
	 */
	constructor: function (config) {
		 	// Apply config
		Ext.apply(this, config);
			// Initialize references
		this.document = this.editor.document;
		this.window = this.editor.iframe.getEl().dom.contentWindow;
			// Set current selection
		this.get();
	},
	/*
	 * Get the current selection object
	 *
	 * @return	object		this
	 */		
	get: function () {
		this.editor.focus();
	 	this.selection = this.window.getSelection ? this.window.getSelection() : this.document.selection;
	 	return this;
	},
	/*
	 * Get the type of the current selection
	 *
	 * @return	string		the type of selection ("None", "Text" or "Control")
	 */
	getType: function() {
			// By default set the type to "Text"
		var type = 'Text';
		this.get();
		if (!Ext.isEmpty(this.selection)) {
			if (Ext.isFunction(this.selection.getRangeAt)) {
					// Check if the current selection is a Control
				if (this.selection && this.selection.rangeCount == 1) {
					var range = this.selection.getRangeAt(0);
					if (range.startContainer.nodeType === HTMLArea.DOM.ELEMENT_NODE) {
						if (
								// Gecko
							(range.startContainer == range.endContainer && (range.endOffset - range.startOffset) == 1) ||
								// Opera and WebKit
							(range.endContainer.nodeType === HTMLArea.DOM.TEXT_NODE && range.endOffset == 0 && range.startContainer.childNodes[range.startOffset].nextSibling == range.endContainer)
						) {
							if (/^(img|hr|li|table|tr|td|embed|object|ol|ul|dl)$/i.test(range.startContainer.childNodes[range.startOffset].nodeName)) {
								type = 'Control';
							}
						}
					}
				}
			} else {
					// IE8 or IE7
				type = this.selection.type;
			}
		}
		return type;
	},
	/*
	 * Empty the current selection
	 *
	 * @return	object		this
	 */
	empty: function () {
		this.get();
		if (!Ext.isEmpty(this.selection)) {
			if (Ext.isFunction(this.selection.removeAllRanges)) {
				this.selection.removeAllRanges();
			} else {
					// IE8, IE7 or old version of WebKit
				this.selection.empty();
			}
			if (Ext.isOpera) {
				this.editor.focus();
			}
		}
		return this;
	},
	/*
	 * Determine whether the current selection is empty or not
	 *
	 * @return	boolean		true, if the selection is empty
	 */
	isEmpty: function () {
		var isEmpty = true;
		this.get();
		if (!Ext.isEmpty(this.selection)) {
			if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
				switch (this.selection.type) {
					case 'None':
						isEmpty = true;
						break;
					case 'Text':
						isEmpty = !this.createRange().text;
						break;
					default:
						isEmpty = !this.createRange().htmlText;
						break;
				}
			} else {
				isEmpty = this.selection.isCollapsed;
			}
		}
		return isEmpty;
	},
	/*
	 * Get a range corresponding to the current selection
	 *
	 * @return	object		the range of the selection
	 */
	createRange: function () {
		var range;
		this.get();
		if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
			range = this.selection.createRange();
		} else {
			if (Ext.isEmpty(this.selection)) {
				range = this.document.createRange();
			} else {
					// Older versions of WebKit did not support getRangeAt
				if (Ext.isWebKit && !Ext.isFunction(this.selection.getRangeAt)) {
					range = this.document.createRange();
					if (this.selection.baseNode == null) {
						range.setStart(this.document.body, 0);
						range.setEnd(this.document.body, 0);
					} else {
						range.setStart(this.selection.baseNode, this.selection.baseOffset);
						range.setEnd(this.selection.extentNode, this.selection.extentOffset);
						if (range.collapsed != this.selection.isCollapsed) {
							range.setStart(this.selection.extentNode, this.selection.extentOffset);
							range.setEnd(this.selection.baseNode, this.selection.baseOffset);
						}
					}
				} else {
					try {
						range = this.selection.getRangeAt(0);
					} catch (e) {
						range = this.document.createRange();
					}
				}
			}
		}
		return range;
	},
	/*
	 * Return the ranges of the selection
	 *
	 * @return	array		array of ranges
	 */
	getRanges: function () {
		this.get();
		var ranges = [];
			// Older versions of WebKit, IE7 and IE8 did not support getRangeAt
		if (!Ext.isEmpty(this.selection) && Ext.isFunction(this.selection.getRangeAt)) {
			for (var i = this.selection.rangeCount; --i >= 0;) {
				ranges.push(this.selection.getRangeAt(i));
			}
		} else {
			ranges.push(this.createRange());
		}
		return ranges;
	},
	/*
	 * Add a range to the selection
	 *
	 * @param	object		range: the range to be added to the selection
	 *
	 * @return	object		this
	 */
	addRange: function (range) {
		this.get();
		if (!Ext.isEmpty(this.selection)) {
			if (Ext.isFunction(this.selection.addRange)) {
				this.selection.addRange(range);
			} else if (Ext.isWebKit) {
				this.selection.setBaseAndExtent(range.startContainer, range.startOffset, range.endContainer, range.endOffset);
			}
		}
		return this;
	},
	/*
	 * Set the ranges of the selection
	 *
	 * @param	array		ranges: array of range to be added to the selection
	 *
	 * @return	object		this
	 */
	setRanges: function (ranges) {
		this.get();
		this.empty();
		for (var i = ranges.length; --i >= 0;) {
			this.addRange(ranges[i]);
		}
		return this;
	},
	/*
	 * Set the selection to a given range
	 *
	 * @param	object		range: the range to be selected
	 *
	 * @return	object		this
	 */
	selectRange: function (range) {
		this.get();
		if (!Ext.isEmpty(this.selection)) {
			if (Ext.isFunction(this.selection.getRangeAt)) {
				this.empty().addRange(range);
			} else {
					// IE8 or IE7
				range.select();
			}
		}
		return this;
	},
	/*
	 * Set the selection to a given node
	 *
	 * @param	object		node: the node to be selected
	 * @param	boolean		endPoint: collapse the selection at the start point (true) or end point (false) of the node
	 *
	 * @return	object		this
	 */
	selectNode: function (node, endPoint) {
		this.get();
		if (!Ext.isEmpty(this.selection)) {
			if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
					// IE8/7/6 cannot set this type of selection
				this.selectNodeContents(node, endPoint);
			} else if (Ext.isWebKit && /^(img)$/i.test(node.nodeName)) {
				this.selection.setBaseAndExtent(node, 0, node, 1);
			} else {
				var range = this.document.createRange();
				if (node.nodeType === HTMLArea.DOM.ELEMENT_NODE && /^(body)$/i.test(node.nodeName)) {
					if (Ext.isWebKit) {
						range.setStart(node, 0);
						range.setEnd(node, node.childNodes.length);
					} else {
						range.selectNodeContents(node);
					}
				} else {
					range.selectNode(node);
				}
				if (typeof(endPoint) !== 'undefined') {
					range.collapse(endPoint);
				}
				this.selectRange(range);
			}
		}
		return this;
	},
	/*
	 * Set the selection to the inner contents of a given node
	 *
	 * @param	object		node: the node of which the contents are to be selected
	 * @param	boolean		endPoint: collapse the selection at the start point (true) or end point (false)
	 *
	 * @return	object		this
	 */
	selectNodeContents: function (node, endPoint) {
		var range;
		this.get();
		if (!Ext.isEmpty(this.selection)) {
			if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
				range = this.document.body.createTextRange();
				range.moveToElementText(node);
			} else {
				range = this.document.createRange();
				if (Ext.isWebKit) {
					range.setStart(node, 0);
					if (node.nodeType === HTMLArea.DOM.TEXT_NODE || node.nodeType === HTMLArea.DOM.COMMENT_NODE || node.nodeType === HTMLArea.DOM.CDATA_SECTION_NODE) {
						range.setEnd(node, node.textContent.length);
					} else {
						range.setEnd(node, node.childNodes.length);
					}
				} else {
					range.selectNodeContents(node);
				}
			}
			if (typeof(endPoint) !== 'undefined') {
				range.collapse(endPoint);
			}
			this.selectRange(range);
		}
		return this;
	},
	/*
	 * Get the deepest node that contains both endpoints of the current selection.
	 *
	 * @return	object		the deepest node that contains both endpoints of the current selection.	
	 */
	getParentElement: function () {
		var parentElement,
			range;
		this.get();
		if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
			range = this.createRange();
			switch (this.selection.type) {
				case 'Text':
				case 'None':
					parentElement = range.parentElement();
					if (/^(form)$/i.test(parentElement.nodeName)) {
						parentElement = this.document.body;
					} else if (/^(li)$/i.test(parentElement.nodeName) && range.htmlText.replace(/\s/g, '') == parentElement.parentNode.outerHTML.replace(/\s/g, '')) {
						parentElement = parentElement.parentNode;
					}
					break;
				case 'Control':
					parentElement = range.item(0);
					break;
				default:
					parentElement = this.document.body;
					break;
			}
		} else {
			if (this.getType() === 'Control') {
				parentElement = this.getElement();
			} else {
				range = this.createRange();
				parentElement = range.commonAncestorContainer;
					// Firefox 3 may report the document as commonAncestorContainer
				if (parentElement.nodeType === HTMLArea.DOM.DOCUMENT_NODE) {
					parentElement = this.document.body;
				} else {
					while (parentElement && parentElement.nodeType === HTMLArea.DOM.TEXT_NODE) {
						parentElement = parentElement.parentNode;
					}
				}
			}
		}
		return parentElement;
	},
	/*
	 * Get the selected element (if any), in the case that a single element (object like and image or a table) is selected
	 * In IE language, we have a range of type 'Control'
	 *
	 * @return	object		the selected node
	 */
	getElement: function () {
		var element = null;
		this.get();
		if (!Ext.isEmpty(this.selection) && this.selection.anchorNode && this.selection.anchorNode.nodeType === HTMLArea.DOM.ELEMENT_NODE && this.getType() == 'Control') {
			element = this.selection.anchorNode.childNodes[this.selection.anchorOffset];
				// For Safari, the anchor node for a control selection is the control itself
			if (!element) {
				element = this.selection.anchorNode;
			} else if (element.nodeType !== HTMLArea.DOM.ELEMENT_NODE) {
				element = null;
			}
		}
		return element;
	},
	/*
	 * Get the deepest element ancestor of the selection that is of one of the specified types
	 *
	 * @param	array		types: an array of nodeNames
	 *
	 * @return	object		the found ancestor of one of the given types or null
	 */
	getFirstAncestorOfType: function (types) {
		var node = this.getParentElement();
		return HTMLArea.DOM.getFirstAncestorOfType(node, types);
	},
	/*
	 * Get an array with all the ancestor nodes of the current selection
	 *
	 * @return	array		the ancestor nodes
	 */
	getAllAncestors: function () {
		var parent = this.getParentElement(),
			ancestors = [];
		while (parent && parent.nodeType === HTMLArea.DOM.ELEMENT_NODE && !/^(body)$/i.test(parent.nodeName)) {
			ancestors.push(parent);
			parent = parent.parentNode;
		}
		ancestors.push(this.document.body);
		return ancestors;
	},
	/*
	 * Get an array with the parent elements of a multiple selection
	 *
	 * @return	array		the selected elements
	 */
	getElements: function () {
		var statusBarSelection = this.editor.statusBar ? this.editor.statusBar.getSelection() : null,
			elements = [];
		if (statusBarSelection) {
			elements.push(statusBarSelection);
		} else {
			var ranges = this.getRanges();
				parent;
			if (ranges.length > 1) {
				for (var i = ranges.length; --i >= 0;) {
					parent = range[i].commonAncestorContainer;
						// Firefox 3 may report the document as commonAncestorContainer
					if (parent.nodeType === HTMLArea.DOM.DOCUMENT_NODE) {
						parent = this.document.body;
					} else {
						while (parent && parent.nodeType === HTMLArea.DOM.TEXT_NODE) {
							parent = parent.parentNode;
						}
					}
					elements.push(parent);
				}
			} else {
				elements.push(this.getParentElement());
			}
		}
		return elements;
	},
	/*
	 * Get the node whose contents are currently fully selected
	 *
	 * @return	object		the fully selected node, if any, null otherwise
	 */
	getFullySelectedNode: function () {
		var node = null,
			isFullySelected = false;
		this.get();
		if (!this.isEmpty()) {
			var type = this.getType();
			var range = this.createRange();
			var ancestors = this.getAllAncestors();
			Ext.each(ancestors, function (ancestor) {
				if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
					isFullySelected = (type !== 'Control' && ancestor.innerText == range.text) || (type === 'Control' && ancestor.innerText == range.item(0).text);
				} else {
					isFullySelected = (ancestor.textContent == range.toString());
				}
				if (isFullySelected) {
					node = ancestor;
					return false;
				}
			});
				// Working around bug with WebKit selection
			if (Ext.isWebKit && !isFullySelected) {
				var statusBarSelection = this.editor.statusBar ? this.editor.statusBar.getSelection() : null;
				if (statusBarSelection && statusBarSelection.textContent == range.toString()) {
					isFullySelected = true;
					node = statusBarSelection;
				}
			}
		}
		return node;
	},
	/*
	 * Get the block elements containing the start and the end points of the selection
	 *
	 * @return	object		object with properties start and end set to the end blocks of the selection
	 */
	getEndBlocks: function () {
		var range = this.createRange(),
			parentStart,
			parentEnd;
		if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
			if (this.getType() === 'Control') {
				parentStart = range.item(0);
				parentEnd = parentStart;
			} else {
				var rangeEnd = range.duplicate();
				range.collapse(true);
				parentStart = range.parentElement();
				rangeEnd.collapse(false);
				parentEnd = rangeEnd.parentElement();
			}
		} else {
			parentStart = range.startContainer;
			if (/^(body)$/i.test(parentStart.nodeName)) {
				parentStart = parentStart.firstChild;
			}
			parentEnd = range.endContainer;
			if (/^(body)$/i.test(parentEnd.nodeName)) {
				parentEnd = parentEnd.lastChild;
			}
		}
		while (parentStart && !HTMLArea.DOM.isBlockElement(parentStart)) {
			parentStart = parentStart.parentNode;
		}
		while (parentEnd && !HTMLArea.DOM.isBlockElement(parentEnd)) {
			parentEnd = parentEnd.parentNode;
		}
		return {
			start: parentStart,
			end: parentEnd
		};
	},
	/*
	 * Determine whether the end poins of the current selection are within the same block
	 *
	 * @return	boolean		true if the end points of the current selection are in the same block
	 */
	endPointsInSameBlock: function() {
		var endPointsInSameBlock = true;
		this.get();
		if (!this.isEmpty()) {
			var parent = this.getParentElement();
			var endBlocks = this.getEndBlocks();
			endPointsInSameBlock = (endBlocks.start === endBlocks.end && !/^(table|thead|tbody|tfoot|tr)$/i.test(parent.nodeName));
		}
		return endPointsInSameBlock;
	},
	/*
	 * Retrieve the HTML contents of the current selection
	 *
	 * @return	string		HTML text of the current selection
	 */
	getHtml: function () {
		var range = this.createRange(),
			html = '';
		if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
			if (this.getType() === 'Control') {
					// We have a controlRange collection
				var bodyRange = this.document.body.createTextRange();
				bodyRange.moveToElementText(range(0));
				html = bodyRange.htmlText;
			} else {
				html = range.htmlText;
			}
		} else if (!range.collapsed) {
			var cloneContents = range.cloneContents();
			if (!cloneContents) {
				cloneContents = this.document.createDocumentFragment();
			}
			html = this.editor.iframe.htmlRenderer.render(cloneContents, false);
		}
		return html;
	},
	 /*
	 * Insert a node at the current position
	 * Delete the current selection, if any.
	 * Split the text node, if needed.
	 *
	 * @param	object		toBeInserted: the node to be inserted
	 *
	 * @return	object		this
	 */
	insertNode: function (toBeInserted) {
		if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
			this.insertHtml(toBeInserted.outerHTML);
		} else {
			var range = this.createRange();
			range.deleteContents();
			toBeSelected = (toBeInserted.nodeType === HTMLArea.DOM.DOCUMENT_FRAGMENT_NODE) ? toBeInserted.lastChild : toBeInserted;
			range.insertNode(toBeInserted);
			this.selectNodeContents(toBeSelected, false);
		}
		return this;
	},
	/*
	 * Insert HTML source code at the current position
	 * Delete the current selection, if any.
	 *
	 * @param	string		html: the HTML source code
	 *
	 * @return	object		this
	 */
	insertHtml: function (html) {
		if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
			this.get();
			if (this.getType() === 'Control') {
				this.selection.clear();
				this.get();
			}
			var range = this.createRange();
			range.pasteHTML(html);
		} else {
			this.editor.focus();
			var fragment = this.document.createDocumentFragment();
			var div = this.document.createElement('div');
			div.innerHTML = html;
			while (div.firstChild) {
				fragment.appendChild(div.firstChild);
			}
			this.insertNode(fragment);
		}
		return this;
	},
	/*
	 * Surround the selection with an element specified by its start and end tags
	 * Delete the selection, if any.
	 *
	 * @param	string		startTag: the start tag
	 * @param	string		endTag: the end tag
	 *
	 * @return	void
	 */
	surroundHtml: function (startTag, endTag) {
		this.insertHtml(startTag + this.getHtml().replace(HTMLArea.DOM.RE_bodyTag, '') + endTag);
	},
	/*
	 * Execute some native execCommand command on the current selection
	 *
	 * @param	string		cmdID: the command name or id
	 * @param	object		UI: 
	 * @param	object		param:
	 *
	 * @return	boolean		false
	 */
	execCommand: function (cmdID, UI, param) {
		this.editor.focus();
		switch (cmdID) {
			default:
				try {
					this.document.execCommand(cmdID, UI, param);
				} catch(e) {
					this.editor.appendToLog('HTMLArea.DOM.Selection', 'execCommand', e + ' by execCommand(' + cmdID + ')', 'error');
				}
		}
		this.editor.updateToolbar();
		return false;
	},
	/*
	 * Handle backspace event on the current selection
	 *
	 * @return	boolean		true to stop the event and cancel the default action
	 */
	handleBackSpace: function () {
		var range = this.createRange();
		if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
			if (this.getType() === 'Control') {
					// Deleting or backspacing on a control selection : delete the element
				var element = this.getParentElement();
				var parent = element.parentNode;
				parent.removeChild(el);
				return true;
			} else if (this.isEmpty()) {
					// Check if deleting an empty block with a table as next sibling
				var element = this.getParentElement();
				if (!element.innerHTML && HTMLArea.DOM.isBlockElement(element) && element.nextSibling && /^table$/i.test(element.nextSibling.nodeName)) {
					var previous = element.previousSibling;
					if (!previous) {
						this.selectNodeContents(element.nextSibling.rows[0].cells[0], true);
					} else if (/^table$/i.test(previous.nodeName)) {
						this.selectNodeContents(previous.rows[previous.rows.length-1].cells[previous.rows[previous.rows.length-1].cells.length-1], false);
					} else {
						range.moveStart('character', -1);
						range.collapse(true);
						range.select();
					}
					el.parentNode.removeChild(element);
					return true;
				}
			} else {
					// Backspacing into a link
				var range2 = range.duplicate();
				range2.moveStart('character', -1);
				var a = range2.parentElement();
				if (a != range.parentElement() && /^a$/i.test(a.nodeName)) {
					range2.collapse(true);
					range2.moveEnd('character', 1);
					range2.pasteHTML('');
					range2.select();
					return true;
				}
				return false;
			}
		} else {
			var self = this;
			window.setTimeout(function() {
				var range = self.createRange();
				var startContainer = range.startContainer;
				var startOffset = range.startOffset;
					// If the selection is collapsed...
				if (self.isEmpty()) {
						// ... and the cursor lies in a direct child of body...
					if (/^(body)$/i.test(startContainer.nodeName)) {
						var node = startContainer.childNodes[startOffset];
					} else if (/^(body)$/i.test(startContainer.parentNode.nodeName)) {
						var node = startContainer;
					} else {
						return false;
					}
						// ... which is a br or text node containing no non-whitespace character
					if (/^(br|#text)$/i.test(node.nodeName) && !/\S/.test(node.textContent)) {
							// Get a meaningful previous sibling in which to reposition de cursor
						var previousSibling = node.previousSibling;
						while (previousSibling && /^(br|#text)$/i.test(previousSibling.nodeName) && !/\S/.test(previousSibling.textContent)) {
							previousSibling = previousSibling.previousSibling;
						}
							// If there is no meaningful previous sibling, the cursor is at the start of body
						if (previousSibling) {
								// Remove the node
							HTMLArea.DOM.removeFromParent(node);
								// Position the cursor
							if (/^(ol|ul|dl)$/i.test(previousSibling.nodeName)) {
								self.selectNodeContents(previousSibling.lastChild, false);
							} else if (/^(table)$/i.test(previousSibling.nodeName)) {
								self.selectNodeContents(previousSibling.rows[previousSibling.rows.length-1].cells[previousSibling.rows[previousSibling.rows.length-1].cells.length-1], false);
							} else if (!/\S/.test(previousSibling.textContent) && previousSibling.firstChild) {
								self.selectNode(previousSibling.firstChild, true);
							} else {
								self.selectNodeContents(previousSibling, false);
							}
						}
					}
				}
			}, 10);
			return false;	
		}
	},
	/*
	 * Detect emails and urls as they are typed in non-IE browsers
	 * Borrowed from Xinha (is not htmlArea) - http://xinha.gogo.co.nz/
	 *
	 * @param	object		event: the ExtJS key event 
	 *
	 * @return	void
	 */
	detectURL: function (event) {
		var ev = event.browserEvent;
		var editor = this.editor;
		var selection = this.get().selection;
		if (!/^(a)$/i.test(this.getParentElement().nodeName)) {
			var autoWrap = function (textNode, tag) {
				var rightText = textNode.nextSibling;
				if (typeof(tag) === 'string') {
					tag = editor.document.createElement(tag);
				}
				var a = textNode.parentNode.insertBefore(tag, rightText);
				HTMLArea.DOM.removeFromParent(textNode);
				a.appendChild(textNode);
				selection.collapse(rightText, 0);
				rightText.parentNode.normalize();
		
				editor.unLink = function() {
					var t = a.firstChild;
					a.removeChild(t);
					a.parentNode.insertBefore(t, a);
					HTMLArea.DOM.removeFromParent(a);
					t.parentNode.normalize();
					editor.unLink = null;
					editor.unlinkOnUndo = false;
				};
		
				editor.unlinkOnUndo = true;
				return a;
			};
			switch (ev.which) {
					// Space or Enter or >, see if the text just typed looks like a URL, or email address and link it accordingly
				case 13:
				case 32:
					if (selection && selection.isCollapsed && selection.anchorNode.nodeType === HTMLArea.DOM.TEXT_NODE && selection.anchorNode.data.length > 3 && selection.anchorNode.data.indexOf('.') >= 0) {
						var midStart = selection.anchorNode.data.substring(0,selection.anchorOffset).search(/[a-zA-Z0-9]+\S{3,}$/);
						if (midStart == -1) {
							break;
						}
						if (this.getFirstAncestorOfType('a')) {
								// already in an anchor
							break;
						}
						var matchData = selection.anchorNode.data.substring(0,selection.anchorOffset).replace(/^.*?(\S*)$/, '$1');
						if (matchData.indexOf('@') != -1) {
							var m = matchData.match(HTMLArea.RE_email);
							if (m) {
								var leftText  = selection.anchorNode;
								var rightText = leftText.splitText(selection.anchorOffset);
								var midText   = leftText.splitText(midStart);
								var midEnd = midText.data.search(/[^a-zA-Z0-9\.@_\-]/);
								if (midEnd != -1) {
									var endText = midText.splitText(midEnd);
								}
								autoWrap(midText, 'a').href = 'mailto:' + m[0];
								break;
							}
						}
						var m = matchData.match(HTMLArea.RE_url);
						if (m) {
							var leftText  = selection.anchorNode;
							var rightText = leftText.splitText(selection.anchorOffset);
							var midText   = leftText.splitText(midStart);
							var midEnd = midText.data.search(/[^a-zA-Z0-9\._\-\/\&\?=:@]/);
							if (midEnd != -1) {
								var endText = midText.splitText(midEnd);
							}
							autoWrap(midText, 'a').href = (m[1] ? m[1] : 'http://') + m[3];
							break;
						}
					}
					break;
				default:
					if (ev.keyCode == 27 || (editor.unlinkOnUndo && ev.ctrlKey && ev.which == 122)) {
						if (editor.unLink) {
							editor.unLink();
							event.stopEvent();
						}
						break;
					} else if (ev.which || ev.keyCode == 8 || ev.keyCode == 46) {
						editor.unlinkOnUndo = false;
						if (selection.anchorNode && selection.anchorNode.nodeType === HTMLArea.DOM.TEXT_NODE) {
								// See if we might be changing a link
							var a = this.getFirstAncestorOfType('a');
							if (!a) {
								break;
							}
							if (!a.updateAnchorTimeout) {
								if (selection.anchorNode.data.match(HTMLArea.RE_email) && (a.href.match('mailto:' + selection.anchorNode.data.trim()))) {
									var textNode = selection.anchorNode;
									var fn = function() {
										a.href = 'mailto:' + textNode.data.trim();
										a.updateAnchorTimeout = setTimeout(fn, 250);
									};
									a.updateAnchorTimeout = setTimeout(fn, 250);
									break;
								}
								var m = selection.anchorNode.data.match(HTMLArea.RE_url);
								if (m &&  a.href.match(selection.anchorNode.data.trim())) {
									var textNode = selection.anchorNode;
									var fn = function() {
										var m = textNode.data.match(HTMLArea.RE_url);
										a.href = (m[1] ? m[1] : 'http://') + m[3];
										a.updateAnchorTimeout = setTimeout(fn, 250);
									}
									a.updateAnchorTimeout = setTimeout(fn, 250);
								}
							}
						}
					}
					break;
			}
		}
	},
	/*
	 * Enter event handler
	 *
	 * @return	boolean		true to stop the event and cancel the default action
	 */
	checkInsertParagraph: function() {
		var editor = this.editor;
		var i, left, right, rangeClone,
			sel	= this.get().selection,
			range	= this.createRange(),
			p	= this.getAllAncestors(),
			block	= null,
			a	= null,
			doc	= this.document;
		for (i = 0; i < p.length; ++i) {
			if (HTMLArea.DOM.isBlockElement(p[i]) && !/^(html|body|table|tbody|thead|tfoot|tr|dl)$/i.test(p[i].nodeName)) {
				block = p[i];
				break;
			}
		}
		if (block && /^(td|th|tr|tbody|thead|tfoot|table)$/i.test(block.nodeName) && this.editor.config.buttons.table && this.editor.config.buttons.table.disableEnterParagraphs) {
			return false;
		}
		if (!range.collapsed) {
			range.deleteContents();
		}
		this.empty();
		if (!block || /^(td|div|article|aside|footer|header|nav|section)$/i.test(block.nodeName)) {
			if (!block) {
				block = doc.body;
			}
			if (block.hasChildNodes()) {
				rangeClone = range.cloneRange();
				if (range.startContainer == block) {
						// Selection is directly under the block
					var blockOnLeft = null;
					var leftSibling = null;
						// Looking for the farthest node on the left that is not a block
					for (var i = range.startOffset; --i >= 0;) {
						if (HTMLArea.DOM.isBlockElement(block.childNodes[i])) {
							blockOnLeft = block.childNodes[i];
							break;
						} else {
							rangeClone.setStartBefore(block.childNodes[i]);
						}
					}
				} else {
						// Looking for inline or text container immediate child of block
					var inlineContainer = range.startContainer;
					while (inlineContainer.parentNode != block) {
						inlineContainer = inlineContainer.parentNode;
					}
						// Looking for the farthest node on the left that is not a block
					var leftSibling = inlineContainer;
					while (leftSibling.previousSibling && !HTMLArea.DOM.isBlockElement(leftSibling.previousSibling)) {
						leftSibling = leftSibling.previousSibling;
					}
					rangeClone.setStartBefore(leftSibling);
					var blockOnLeft = leftSibling.previousSibling;
				}
					// Avoiding surroundContents buggy in Opera and Safari
				left = doc.createElement('p');
				left.appendChild(rangeClone.extractContents());
				if (!left.textContent && !left.getElementsByTagName('img').length && !left.getElementsByTagName('table').length) {
					left.innerHTML = '<br />';
				}
				if (block.hasChildNodes()) {
					if (blockOnLeft) {
						left = block.insertBefore(left, blockOnLeft.nextSibling);
					} else {
						left = block.insertBefore(left, block.firstChild);
					}
				} else {
					left = block.appendChild(left);
				}
				block.normalize();
					// Looking for the farthest node on the right that is not a block
				var rightSibling = left;
				while (rightSibling.nextSibling && !HTMLArea.DOM.isBlockElement(rightSibling.nextSibling)) {
					rightSibling = rightSibling.nextSibling;
				}
				var blockOnRight = rightSibling.nextSibling;
				range.setEndAfter(rightSibling);
				range.setStartAfter(left);
					// Avoiding surroundContents buggy in Opera and Safari
				right = doc.createElement('p');
				right.appendChild(range.extractContents());
				if (!right.textContent && !right.getElementsByTagName('img').length && !right.getElementsByTagName('table').length) {
					right.innerHTML = '<br />';
				}
				if (!(left.childNodes.length == 1 && right.childNodes.length == 1 && left.firstChild.nodeName.toLowerCase() == 'br' && right.firstChild.nodeName.toLowerCase() == 'br')) {
					if (blockOnRight) {
						right = block.insertBefore(right, blockOnRight);
					} else {
						right = block.appendChild(right);
					}
					this.selectNodeContents(right, true);
				} else {
					this.selectNodeContents(left, true);
				}
				block.normalize();
			} else {
				var first = block.firstChild;
				if (first) {
					block.removeChild(first);
				}
				right = doc.createElement('p');
				if (Ext.isWebKit || Ext.isOpera) {
					right.innerHTML = '<br />';
				}
				right = block.appendChild(right);
				this.selectNodeContents(right, true);
			}
		} else {
			range.setEndAfter(block);
			var df = range.extractContents(), left_empty = false;
			if (!/\S/.test(block.innerHTML) || (!/\S/.test(block.textContent) && !/<(img|hr|table)/i.test(block.innerHTML))) {
				if (!Ext.isOpera) {
					block.innerHTML = '<br />';
				}
				left_empty = true;
			}
			p = df.firstChild;
			if (p) {
				if (!/\S/.test(p.innerHTML) || (!/\S/.test(p.textContent) && !/<(img|hr|table)/i.test(p.innerHTML))) {
					if (/^h[1-6]$/i.test(p.nodeName)) {
						p = HTMLArea.DOM.convertNode(p, 'p');
					}
					if (/^(dt|dd)$/i.test(p.nodeName)) {
						 p = HTMLArea.DOM.convertNode(p, /^(dt)$/i.test(p.nodeName) ? 'dd' : 'dt');
					}
					if (!Ext.isOpera) {
						p.innerHTML = '<br />';
					}
					if (/^li$/i.test(p.nodeName) && left_empty && (!block.nextSibling || !/^li$/i.test(block.nextSibling.nodeName))) {
						left = block.parentNode;
						left.removeChild(block);
						range.setEndAfter(left);
						range.collapse(false);
						p = HTMLArea.DOM.convertNode(p, /^(li|dd|td|th|p|h[1-6])$/i.test(left.parentNode.nodeName) ? 'br' : 'p');
					}
				}
				range.insertNode(df);
					// Remove any anchor created empty on both sides of the selection
				if (p.previousSibling) {
					var a = p.previousSibling.lastChild;
					if (a && /^a$/i.test(a.nodeName) && !/\S/.test(a.innerHTML)) {
						HTMLArea.DOM.convertNode(a, 'br');
					}
				}
				var a = p.lastChild;
				if (a && /^a$/i.test(a.nodeName) && !/\S/.test(a.innerHTML)) {
					HTMLArea.DOM.convertNode(a, 'br');
				}
					// Walk inside the deepest child element (presumably inline element)
				while (p.firstChild && p.firstChild.nodeType === HTMLArea.DOM.ELEMENT_NODE && !/^(br|img|hr|table)$/i.test(p.firstChild.nodeName)) {
					p = p.firstChild;
				}
				if (/^br$/i.test(p.nodeName)) {
					p = p.parentNode.insertBefore(doc.createTextNode('\x20'), p);
				} else if (!/\S/.test(p.innerHTML)) {
						// Need some element inside the deepest element
					p.appendChild(doc.createElement('br'));
				}
				this.selectNodeContents(p, true);
			} else {
				if (/^(li|dt|dd)$/i.test(block.nodeName)) {
					p = doc.createElement(block.nodeName);
				} else {
					p = doc.createElement('p');
				}
				if (!Ext.isOpera) {
					p.innerHTML = '<br />';
				}
				if (block.nextSibling) {
					p = block.parentNode.insertBefore(p, block.nextSibling);
				} else {
					p = block.parentNode.appendChild(p);
				}
				this.selectNodeContents(p, true);
			}
		}
		this.editor.scrollToCaret();
		return true;
	}
});
/***************************************************
 *  HTMLArea.DOM.BookMark: BookMark object
 ***************************************************/
HTMLArea.DOM.BookMark = function (config) {
};
HTMLArea.DOM.BookMark = Ext.extend(HTMLArea.DOM.BookMark, {
	/*
	 * Reference to the editor MUST be set in config
	 */
	editor: null,
	/*
	 * Reference to the editor document
	 */
	document: null,
	/*
	 * Reference to the editor selection object
	 */
	selection: null,
	/*
	 * HTMLArea.DOM.Selection constructor
	 */
	constructor: function (config) {
		 	// Apply config
		Ext.apply(this, config);
			// Initialize references
		this.document = this.editor.document;
		this.selection = this.editor.getSelection();
	},
	/*
	 * Get a bookMark
	 * Adapted from FCKeditor
	 * This is an "intrusive" way to create a bookMark. It includes <span> tags
	 * in the range boundaries. The advantage of it is that it is possible to
	 * handle DOM mutations when moving back to the bookMark.
	 *
	 * @param	object		range: the range to bookMark
	 *
	 * @return	object		the bookMark
	 */
	get: function (range) {
		var bookMark;
		if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
				// Bookmarking will not work on control ranges
			try {
				bookMark = range.getBookmark();
			} catch (e) {
				bookMark = null;
			}
		} else {
				// Create the bookmark info (random IDs).
			var bookMark = {
				startId : (new Date()).valueOf() + Math.floor(Math.random()*1000) + 'S',
				endId   : (new Date()).valueOf() + Math.floor(Math.random()*1000) + 'E'
			};
			var startSpan;
			var endSpan;
			var rangeClone = range.cloneRange();
				// For collapsed ranges, add just the start marker
			if (!range.collapsed ) {
				endSpan = this.document.createElement('span');
				endSpan.style.display = 'none';
				endSpan.id = bookMark.endId;
				endSpan.setAttribute('data-htmlarea-bookmark', true);
				endSpan.innerHTML = '&nbsp;';
				rangeClone.collapse(false);
				rangeClone.insertNode(endSpan);
			}
			startSpan = this.document.createElement('span');
			startSpan.style.display = 'none';
			startSpan.id = bookMark.startId;
			startSpan.setAttribute('data-htmlarea-bookmark', true);
			startSpan.innerHTML = '&nbsp;';
			var rangeClone = range.cloneRange();
			rangeClone.collapse(true);
			rangeClone.insertNode(startSpan);
			bookMark.startNode = startSpan;
			bookMark.endNode = endSpan;
				// Update the range position.
			if (endSpan) {
				range.setEndBefore(endSpan);
				range.setStartAfter(startSpan);
			} else {
				range.setEndAfter(startSpan);
				range.collapse(false);
			}
			return bookMark;
		}
	},
	/*
	 * Get the end point of the bookMark
	 * Adapted from FCKeditor
	 *
	 * @param	object		bookMark: the bookMark
	 * @param	boolean		endPoint: true, for startPoint, false for endPoint
	 *
	 * @return	object		the endPoint node
	 */
	getEndPoint: function (bookMark, endPoint) {
		if (endPoint) {
			return this.document.getElementById(bookMark.startId);
		} else {
			return this.document.getElementById(bookMark.endId);
		}
	},
	/*
	 * Move the range to the bookmark
	 * Adapted from FCKeditor
	 *
	 * @param	object		bookMark: the bookmark to move to
	 *
	 * @return	object		the range that was bookmarked
	 */
	moveTo: function (bookMark) {
		var range = this.selection.createRange();
		if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
			if (bookMark) {
				range.moveToBookmark(bookMark);
			}
		} else {
			var startSpan  = this.getEndPoint(bookMark, true);
			var endSpan    = this.getEndPoint(bookMark, false);
			var parent;
			if (startSpan) {
					// If the previous sibling is a text node, let the anchorNode have it as parent
				if (startSpan.previousSibling && startSpan.previousSibling.nodeType === HTMLArea.DOM.TEXT_NODE) {
					range.setStart(startSpan.previousSibling, startSpan.previousSibling.data.length);
				} else {
					range.setStartBefore(startSpan);
				}
				HTMLArea.DOM.removeFromParent(startSpan);
			} else {
					// For some reason, the startSpan was removed or its id attribute was removed so that it cannot be retrieved
				range.setStart(this.document.body, 0);
			}
				// If the bookmarked range was collapsed, the end span will not be available
			if (endSpan) {
					// If the next sibling is a text node, let the focusNode have it as parent
				if (endSpan.nextSibling && endSpan.nextSibling.nodeType === HTMLArea.DOM.TEXT_NODE) {
					range.setEnd(endSpan.nextSibling, 0);
				} else {
					range.setEndBefore(endSpan);
				}
				HTMLArea.DOM.removeFromParent(endSpan);
			} else {
				range.collapse(true);
			}
		}
		return range;
	}
});
/***************************************************
 *  HTMLArea.DOM.Node: Node object
 ***************************************************/
HTMLArea.DOM.Node = function (config) {
};
HTMLArea.DOM.Node = Ext.extend(HTMLArea.DOM.Node, {
	/*
	 * Reference to the editor MUST be set in config
	 */
	editor: null,
	/*
	 * Reference to the editor document
	 */
	document: null,
	/*
	 * Reference to the editor selection object
	 */
	selection: null,
	/*
	 * Reference to the editor bookmark object
	 */
	bookMark: null,
	/*
	 * HTMLArea.DOM.Selection constructor
	 */
	constructor: function (config) {
		 	// Apply config
		Ext.apply(this, config);
			// Initialize references
		this.document = this.editor.document;
		this.selection = this.editor.getSelection();
		this.bookMark = this.editor.getBookMark();
	},
	/*
	 * Remove the given element
	 *
	 * @param	object		element: the element to be removed, content and selection being preserved
	 *
	 * @return	void
	 */
	removeMarkup: function (element) {
		var bookMark = this.bookMark.get(this.selection.createRange());
		var parent = element.parentNode;
		while (element.firstChild) {
			parent.insertBefore(element.firstChild, element);
		}
		parent.removeChild(element);
		this.selection.selectRange(this.bookMark.moveTo(bookMark));
	},
	/*
	 * Wrap the range with an inline element
	 *
	 * @param	string	element: the node that will wrap the range
	 * @param	object	range: the range to be wrapped
	 *
	 * @return	void
	 */
	wrapWithInlineElement: function (element, range) {
		if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
			var nodeName = element.nodeName;
			var bookMark = this.bookMark.get(range);
			if (range.parentElement) {
				var parent = range.parentElement();
				var rangeStart = range.duplicate();
				rangeStart.collapse(true);
				var parentStart = rangeStart.parentElement();
				var rangeEnd = range.duplicate();
				rangeEnd.collapse(true);
				var newRange = this.selection.createRange();
				
				var parentEnd = rangeEnd.parentElement();
				var upperParentStart = parentStart;
				if (parentStart !== parent) {
					while (upperParentStart.parentNode !== parent) {
						upperParentStart = upperParentStart.parentNode;
					}
				}
				
				element.innerHTML = range.htmlText;
					// IE eats spaces on the start boundary
				if (range.htmlText.charAt(0) === '\x20') {
					element.innerHTML = '&nbsp;' + element.innerHTML;
				}
				var elementClone = element.cloneNode(true);
				range.pasteHTML(element.outerHTML);
					// IE inserts the element as the last child of the start container
				if (parentStart !== parent
						&& parentStart.lastChild
						&& parentStart.lastChild.nodeType === HTMLArea.DOM.ELEMENT_NODE
						&& parentStart.lastChild.nodeName.toLowerCase() === nodeName) {
					parent.insertBefore(elementClone, upperParentStart.nextSibling);
					parentStart.removeChild(parentStart.lastChild);
						// Sometimes an empty previous sibling was created
					if (elementClone.previousSibling
							&& elementClone.previousSibling.nodeType === HTMLArea.DOM.ELEMENT_NODE
							&& !elementClone.previousSibling.innerText) {
						parent.removeChild(elementClone.previousSibling);
					}
						// The bookmark will not work anymore
					newRange.moveToElementText(elementClone);
					newRange.collapse(false);
					newRange.select();
				} else {
						// Working around IE boookmark bug
					if (parentStart != parentEnd) {
						var newRange = this.selection.createRange();
						if (newRange.moveToBookmark(bookMark)) {
							newRange.collapse(false);
							newRange.select();
						}
					} else {
						range.collapse(false);
					}
				}
				parent.normalize();
			} else {
				var parent = range.item(0);
				element = parent.parentNode.insertBefore(element, parent);
				element.appendChild(parent);
				this.bookMark.moveTo(bookMark);
			}
		} else {
			element.appendChild(range.extractContents());
			range.insertNode(element);
			element.normalize();
				// Sometimes Firefox inserts empty elements just outside the boundaries of the range
			var neighbour = element.previousSibling;
			if (neighbour && (neighbour.nodeType !== HTMLArea.DOM.TEXT_NODE) && !/\S/.test(neighbour.textContent)) {
				HTMLArea.DOM.removeFromParent(neighbour);
			}
			neighbour = element.nextSibling;
			if (neighbour && (neighbour.nodeType !== HTMLArea.DOM.TEXT_NODE) && !/\S/.test(neighbour.textContent)) {
				HTMLArea.DOM.removeFromParent(neighbour);
			}
			this.selection.selectNodeContents(element, false);
		}
	},
	/*
	 * Clean Apple wrapping span and font elements under the specified node
	 *
	 * @param	object		node: the node in the subtree of which cleaning is performed
	 *
	 * @return	void
	 */
	cleanAppleStyleSpans: function (node) {
		if (Ext.isWebKit) {
			if (node.getElementsByClassName) {
				var spans = node.getElementsByClassName('Apple-style-span');
				for (var i = spans.length; --i >= 0;) {
					this.removeMarkup(spans[i]);
				}
			} else {
				var spans = node.getElementsByTagName('span');
				for (var i = spans.length; --i >= 0;) {
					if (HTMLArea.DOM.hasClass(spans[i], 'Apple-style-span')) {
						this.removeMarkup(spans[i]);
					}
				}
				var fonts = node.getElementsByTagName('font');
				for (i = fonts.length; --i >= 0;) {
					if (HTMLArea.DOM.hasClass(fonts[i], 'Apple-style-span')) {
						this.removeMarkup(fonts[i]);
					}
				}
			}
		}
	}
});
 /*
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.getInnerText = HTMLArea.DOM.getInnerText;
 /*
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.removeFromParent = HTMLArea.DOM.removeFromParent;
/*
 * Get the block ancestors of an element within a given block
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getBlockAncestors = HTMLArea.DOM.getBlockAncestors;
/*
 * This function verifies if the element has any allowed attributes
 *
 * @param	object	element: the DOM element
 * @param	array	allowedAttributes: array of allowed attribute names
 *
 * @return	boolean	true if the element has one of the allowed attributes
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.hasAllowedAttributes = HTMLArea.DOM.hasAllowedAttributes;
/*
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.isBlockElement = HTMLArea.DOM.isBlockElement;
/*
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.needsClosingTag = HTMLArea.DOM.needsClosingTag;
/*
 * Get the current selection object
 * 
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype._getSelection = function() {
	this.appendToLog('HTMLArea.Editor', '_getSelection', 'Reference to deprecated method', 'warn');
	return this.getSelection().get().selection;
};
/*
 * Empty the selection object
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.emptySelection = function (selection) {
	this.appendToLog('HTMLArea.Editor', 'emptySelection', 'Reference to deprecated method', 'warn');
	this.getSelection().empty();
};
/*
 * Add a range to the selection
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.addRangeToSelection = function(selection, range) {
	this.appendToLog('HTMLArea.Editor', 'addRangeToSelection', 'Reference to deprecated method', 'warn');
	this.getSelection().addRange(range);
};
/*
 * Create a range for the current selection
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype._createRange = function(sel) {
	this.appendToLog('HTMLArea.Editor', '_createRange', 'Reference to deprecated method', 'warn');
	return this.getSelection().createRange();
};
/*
 * Select a node AND the contents inside the node
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.selectNode = function(node, endPoint) {
	this.appendToLog('HTMLArea.Editor', 'selectNode', 'Reference to deprecated method', 'warn');
	this.getSelection().selectNode(node, endPoint);
};
/*
 * Select ONLY the contents inside the given node
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.selectNodeContents = function(node, endPoint) {
	this.appendToLog('HTMLArea.Editor', 'selectNodeContents', 'Reference to deprecated method', 'warn');
	this.getSelection().selectNodeContents(node, endPoint);
};
/*
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.rangeIntersectsNode = function(range, node) {
	this.appendToLog('HTMLArea.Editor', 'rangeIntersectsNode', 'Reference to deprecated method', 'warn');
	this.focus();
	return HTMLArea.DOM.rangeIntersectsNode(range, node);
};
/*
 * Get the selection type
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getSelectionType = function(selection) {
	this.appendToLog('HTMLArea.Editor', 'getSelectionType', 'Reference to deprecated method', 'warn');
	return this.getSelection().getType();
};
/*
 * Return the ranges of the selection
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getSelectionRanges = function(selection) {
	this.appendToLog('HTMLArea.Editor', 'getSelectionRanges', 'Reference to deprecated method', 'warn');
	return this.getSelection().getRanges();
};
/*
 * Add ranges to the selection
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.setSelectionRanges = function(ranges, selection) {
	this.appendToLog('HTMLArea.Editor', 'setSelectionRanges', 'Reference to deprecated method', 'warn');
	this.getSelection().setRanges(ranges);
};
/*
 * Retrieves the selected element (if any), just in the case that a single element (object like and image or a table) is selected.
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getSelectedElement = function(selection) {
	this.appendToLog('HTMLArea.Editor', 'getSelectedElement', 'Reference to deprecated method', 'warn');
	return this.getSelection().getElement();
};
/*
 * Retrieve the HTML contents of selected block
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getSelectedHTML = function() {
	this.appendToLog('HTMLArea.Editor', 'getSelectedHTML', 'Reference to deprecated method', 'warn');
	return this.getSelection().getHtml();
};
/*
 * Retrieve simply HTML contents of the selected block, IE ignoring control ranges
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getSelectedHTMLContents = function() {
	this.appendToLog('HTMLArea.Editor', 'getSelectedHTMLContents', 'Reference to deprecated method', 'warn');
	return this.getSelection().getHtml();
};
/*
 * Get the deepest node that contains both endpoints of the current selection.
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getParentElement = function(selection, range) {
	this.appendToLog('HTMLArea.Editor', 'getParentElement', 'Reference to deprecated method', 'warn');
	return this.getSelection().getParentElement();
};
/*
 * Determine if the current selection is empty or not.
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype._selectionEmpty = function(sel) {
	this.appendToLog('HTMLArea.Editor', '_selectionEmpty', 'Reference to deprecated method', 'warn');
	return this.getSelection().isEmpty();
};
/*
 * Get a bookmark
 * Adapted from FCKeditor
 * This is an "intrusive" way to create a bookmark. It includes <span> tags
 * in the range boundaries. The advantage of it is that it is possible to
 * handle DOM mutations when moving back to the bookmark.
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getBookmark = function (range) {
	this.appendToLog('HTMLArea.Editor', 'getBookmark', 'Reference to deprecated method', 'warn');
	return this.getBookMark().get(range);
};
/*
 * Get the end point of the bookmark
 * Adapted from FCKeditor
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.getBookmarkNode = function(bookmark, endPoint) {
	this.appendToLog('HTMLArea.Editor', 'getBookmarkNode', 'Reference to deprecated method', 'warn');
	return this.getBookMark().getEndPoint(bookmark, endPoint);
};
/*
 * Move the range to the bookmark
 * Adapted from FCKeditor
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.moveToBookmark = function (bookmark) {
	this.appendToLog('HTMLArea.Editor', 'moveToBookmark', 'Reference to deprecated method', 'warn');
	return this.getBookMark().moveTo(bookmark);
};
/*
 * Select range
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.selectRange = function (range) {
	this.appendToLog('HTMLArea.Editor', 'selectRange', 'Reference to deprecated method', 'warn');
	this.selection.selectRange(range);
};
 /*
 * Insert a node at the current position.
 * Delete the current selection, if any.
 * Split the text node, if needed.
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.insertNodeAtSelection = function(toBeInserted) {
	this.appendToLog('HTMLArea.Editor', 'insertNodeAtSelection', 'Reference to deprecated method', 'warn');
	this.getSelection().insertNode(toBeInserted);
};
/*
 * Insert HTML source code at the current position.
 * Delete the current selection, if any.
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.insertHTML = function(html) {
	this.appendToLog('HTMLArea.Editor', 'insertHTML', 'Reference to deprecated method', 'warn');
	this.getSelection().insertHtml(html);
};
/*
 * Wrap the range with an inline element
 *
 * @param	string	element: the node that will wrap the range
 * @param	object	range: the range to be wrapped
 *
 * @return	void
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.wrapWithInlineElement = function(element, selection,range) {
	this.appendToLog('HTMLArea.Editor', 'wrapWithInlineElement', 'Reference to deprecated method', 'warn');
	this.getDomNode().wrapWithInlineElement(element, range);
};
/*
 * Clean Apple wrapping span and font elements under the specified node
 *
 * @param	object		node: the node in the subtree of which cleaning is performed
 *
 * @return	void
 *
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.7 *
 ***********************************************
 */
HTMLArea.Editor.prototype.cleanAppleStyleSpans = function(node) {
	this.appendToLog('HTMLArea.Editor', 'cleanAppleStyleSpans', 'Reference to deprecated method', 'warn');
	this.getDomNode().cleanAppleStyleSpans(node);
};
/***************************************************
 *  HTMLArea.CSS.Parser: CSS Parser
 ***************************************************/
HTMLArea.CSS.Parser = Ext.extend(Ext.util.Observable, {
	/*
	 * HTMLArea.CSS.Parser constructor
	 */
	constructor: function (config) {
		HTMLArea.CSS.Parser.superclass.constructor.call(this, {});
		var configDefaults = {
			parseAttemptsMaximumNumber: 20,
			prefixLabelWithClassName: false,
			postfixLabelWithClassName: false,
			showTagFreeClasses: false,
			tags: null,
			editor: null
		};
		Ext.apply(this, config, configDefaults);
		if (this.editor.config.styleSheetsMaximumAttempts) {
			this.parseAttemptsMaximumNumber = this.editor.config.styleSheetsMaximumAttempts;
		}
		this.addEvents(
			/*
			 * @event HTMLAreaEventCssParsingComplete
			 * Fires when parsing of the stylesheets of the iframe is complete
			 */
			'HTMLAreaEventCssParsingComplete'
		);
	},
	/*
	 * The parsed classes
	 */
	parsedClasses: {},
	/*
	 * Boolean indicating whether are not parsing is complete
	 */
	isReady: false,
	/*
	 * Boolean indicating whether or not the stylesheets were accessible
	 */
	cssLoaded: false,
	/*
	 * Counter of the number of attempts at parsing the stylesheets
	 */
	parseAttemptsCounter: 0,
	/*
	 * Parsing attempt timeout id
	 */
	attemptTimeout: null,
	/*
	 * The error that occurred on the last attempt at parsing the stylesheets
	 */
	error: null,
	/*
	 * This function gets the parsed css classes
	 *
	 * @return	object	this.parsedClasses
	 */
	getClasses: function() {
		return this.parsedClasses;
	},
	/*
	 * This function initiates parsing of the stylesheets
	 *
	 * @return	void
	 */
	initiateParsing: function () {
		if (this.editor.config.classesUrl && (typeof(HTMLArea.classesLabels) === 'undefined')) {
			this.editor.ajax.getJavascriptFile(this.editor.config.classesUrl, function (options, success, response) {
				if (success) {
					try {
						if (typeof(HTMLArea.classesLabels) === 'undefined') {
							eval(response.responseText);
						}
					} catch(e) {
						this.editor.appendToLog('HTMLArea.CSS.Parser', 'initiateParsing', 'Error evaluating contents of Javascript file: ' + this.editor.config.classesUrl, 'error');
					}
				}
				this.parse();
			}, this);
		} else {
			this.parse();
		}
	},
	/*
	 * This function parses the stylesheets of the iframe set in config
	 *
	 * @return	void	parsed css classes are accumulated in this.parsedClasses
	 */
	parse: function() {
		if (this.editor.document) {
			this.parseStyleSheets();
			if (!this.cssLoaded) {
				if (/Security/i.test(this.error)) {
					this.editor.appendToLog('HTMLArea.CSS.Parser', 'parse', 'A security error occurred. Make sure all stylesheets are accessed from the same domain/subdomain and using the same protocol as the current script.', 'error');
					this.fireEvent('HTMLAreaEventCssParsingComplete');
				} else if (this.parseAttemptsCounter < this.parseAttemptsMaximumNumber) {
					this.parseAttemptsCounter++;
					this.attemptTimeout = this.parse.defer(200, this);
				} else {
					this.editor.appendToLog('HTMLArea.CSS.Parser', 'parse', 'The stylesheets could not be parsed. Reported error: ' + this.error, 'error');
					this.fireEvent('HTMLAreaEventCssParsingComplete');
				}
			} else {
				this.attemptTimeout = null;
				this.isReady = true;
				this.filterAllowedClasses();
				this.sort();
				this.fireEvent('HTMLAreaEventCssParsingComplete');
			}
		}
	},
	/*
	 * This function parses the stylesheets of an iframe
	 *
	 * @return	void	parsed css classes are accumulated in this.parsedClasses
	 */
	parseStyleSheets: function () {
		this.cssLoaded = true;
		this.error = null;
			// Test if the styleSheets array is at all accessible
		if (Ext.isOpera) {
			if (this.editor.document.readyState !== 'complete') {
				this.cssLoaded = false;
				this.error = 'Document.readyState not complete';
			}
		} else {
			if (Ext.isIE) {
				try {
					var rules = this.editor.document.styleSheets[0].rules;
					var imports = this.editor.document.styleSheets[0].imports;
					if (!rules.length && !imports.length) {
						this.cssLoaded = false;
						this.error = 'Empty rules and imports arrays';
					}
				} catch(e) {
					this.cssLoaded = false;
					this.error = e;
				}
			} else {
				try {
					this.editor.document.styleSheets && this.editor.document.styleSheets[0] && this.editor.document.styleSheets[0].rules;
				} catch(e) {
					this.cssLoaded = false;
					this.error = e;
				}
			}
		}
		if (this.cssLoaded) {
				// Expecting 3 stylesheets...
			if (this.editor.document.styleSheets.length > 2) {
				Ext.each(this.editor.document.styleSheets, function (styleSheet, index) {
					try {
						if (Ext.isIE) {
							var rules = styleSheet.rules;
							var imports = styleSheet.imports;
								// Default page style may contain only a comment
							if (!rules.length && !imports.length && index != 1) {
								this.cssLoaded = false;
								this.error = 'Empty rules and imports arrays of styleSheets[' + index + ']';
								return false;
							}
							if (styleSheet.imports) {
								this.parseIeRules(styleSheet.imports);
							}
							if (styleSheet.rules) {
								this.parseRules(styleSheet.rules);
							}
						} else {
							this.parseRules(styleSheet.cssRules);
						}
					} catch (e) {
						this.error = e;
						this.cssLoaded = false;
						this.parsedClasses = {};
						return false;
					}
				}, this);
			} else {
				this.cssLoaded = false;
				this.error = 'Empty stylesheets array or missing linked stylesheets';
			}
		}
	},
	/*
	 * This function parses the set of rules from a standard stylesheet
	 *
	 * @param	array		cssRules: the array of rules of a stylesheet
	 * @return	void
	 */
	parseRules: function (cssRules) {
		for (var rule = 0; rule < cssRules.length; rule++) {
				// Style rule
			if (cssRules[rule].selectorText) {
				this.parseSelectorText(cssRules[rule].selectorText);
			} else {
					// Import rule
				if (cssRules[rule].styleSheet) {
					this.parseRules(cssRules[rule].styleSheet.cssRules);
				}
					// Media rule
				if (cssRules[rule].cssRules) {
					this.parseRules(cssRules[rule].cssRules);
				}
			}
		}
	},
	/*
	 * This function parses the set of rules from an IE stylesheet
	 *
	 * @param	array		cssRules: the array of rules of a stylesheet
	 * @return	void
	 */
	parseIeRules: function (cssRules) {
		for (var rule = 0; rule < cssRules.length; rule++) {
				// Import rule
			if (cssRules[rule].imports) {
				this.parseIeRules(cssRules[rule].imports);
			}
				// Style rule
			if (cssRules[rule].rules) {
				this.parseRules(cssRules[rule].rules);
			}
		}
	},
	/*
	 * This function parses a selector rule
	 *
	 * @param 	string		selectorText: the text of the rule to parsed
	 * @return	void
	 */
	parseSelectorText: function (selectorText) {
		var cssElements = [],
			cssElement = [],
			nodeName, className,
			pattern = /(\S*)\.(\S+)/;
		if (selectorText.search(/:+/) == -1) {
				// Split equal styles
			cssElements = selectorText.split(',');
			for (var k = 0; k < cssElements.length; k++) {
					// Match all classes (<element name (optional)>.<class name>) in selector rule
				var s = cssElements[k], index;
				while ((index = s.search(pattern)) > -1) {
					var match = pattern.exec(s.substring(index));
					s = s.substring(index+match[0].length);
					nodeName = (match[1] && (match[1] != '*')) ? match[1].toLowerCase().trim() : 'all';
					className = match[2];
					if (className && !HTMLArea.reservedClassNames.test(className)) {
						if (((nodeName != 'all') && (!this.tags || !this.tags[nodeName]))
							|| ((nodeName == 'all') && (!this.tags || !this.tags[nodeName]) && this.showTagFreeClasses)
							|| (this.tags && this.tags[nodeName] && this.tags[nodeName].allowedClasses && this.tags[nodeName].allowedClasses.test(className))) {
							if (!this.parsedClasses[nodeName]) {
								this.parsedClasses[nodeName] = {};
							}
							cssName = className;
							if (HTMLArea.classesLabels && HTMLArea.classesLabels[className]) {
								cssName = this.prefixLabelWithClassName ? (className + ' - ' + HTMLArea.classesLabels[className]) : HTMLArea.classesLabels[className];
								cssName = this.postfixLabelWithClassName ? (cssName + ' - ' + className) : cssName;
							}
							this.parsedClasses[nodeName][className] = cssName;
						}
					}
				}
			}
		}
	},
	/*
	 * This function filters the class selectors allowed for each nodeName
	 *
	 * @return	void
	 */
	filterAllowedClasses: function() {
		Ext.iterate(this.tags, function (nodeName) {
			var allowedClasses = {};
				// Get classes allowed for all tags
			if (nodeName !== 'all' && Ext.isDefined(this.parsedClasses['all'])) {
				if (this.tags && this.tags[nodeName] && this.tags[nodeName].allowedClasses) {
					var allowed = this.tags[nodeName].allowedClasses;
					Ext.iterate(this.parsedClasses['all'], function (cssClass, value) {
						if (allowed.test(cssClass)) {
							allowedClasses[cssClass] = value;
						}
					});
				} else {
					allowedClasses = this.parsedClasses['all'];
				}
			}
				// Merge classes allowed for nodeName
			if (Ext.isDefined(this.parsedClasses[nodeName])) {
				if (this.tags && this.tags[nodeName] && this.tags[nodeName].allowedClasses) {
					var allowed = this.tags[nodeName].allowedClasses;
					Ext.iterate(this.parsedClasses[nodeName], function (cssClass, value) {
						if (allowed.test(cssClass)) {
							allowedClasses[cssClass] = value;
						}
					});
				} else {
					Ext.iterate(this.parsedClasses[nodeName], function (cssClass, value) {
						allowedClasses[cssClass] = value;
					});
				}
			}
			this.parsedClasses[nodeName] = allowedClasses;
		}, this);
			// If showTagFreeClasses is set and there is no allowedClasses clause on a tag, merge classes allowed for all tags
		if (this.showTagFreeClasses && Ext.isDefined(this.parsedClasses['all'])) {
			Ext.iterate(this.parsedClasses, function (nodeName) {
				if (nodeName !== 'all' && !this.tags[nodeName]) {
					Ext.iterate(this.parsedClasses['all'], function (cssClass, value) {
						this.parsedClasses[nodeName][cssClass] = value;
					}, this);
				}
			}, this);
		}
	},
	/*
	 * This function sorts the class selectors for each nodeName
	 *
	 * @return	void
	 */
	sort: function() {
		Ext.iterate(this.parsedClasses, function (nodeName, value) {
			var classes = [];
			var sortedClasses= {};
				// Collect keys
			Ext.iterate(value, function (cssClass) {
				classes.push(cssClass);
			});
			function compare(a, b) {
				x = value[a];
				y = value[b];
				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			}
				// Sort keys by comparing texts
			classes = classes.sort(compare);
			for (var i = 0; i < classes.length; ++i) {
				sortedClasses[classes[i]] = value[classes[i]];
			}
			this.parsedClasses[nodeName] = sortedClasses;
		}, this);
	}
});
/***************************************************
 *  TIPS ON FORM FIELDS AND MENU ITEMS
 ***************************************************/
/*
 * Intercept Ext.form.Field.afterRender in order to provide tips on form fields and menu items
 * Adapted from: http://www.extjs.com/forum/showthread.php?t=36642
 */
HTMLArea.util.Tips = function () {
	return {
		tipsOnFormFields: function () {
			if (this.helpText || this.helpTitle) {
				if (!this.helpDisplay) {
					this.helpDisplay = 'both';
				}
				var label = this.label;
					// IE has problems with img inside label tag
				if (label && this.helpIcon && !Ext.isIE) {
					var helpImage = label.insertFirst({
						tag: 'img',
						src: HTMLArea.editorSkin + 'images/system-help-open.png',
						style: 'vertical-align: middle; padding-right: 2px;'
					});
					if (this.helpDisplay == 'image' || this.helpDisplay == 'both'){
						Ext.QuickTips.register({
							target: helpImage,
							title: this.helpTitle,
							text: this.helpText
						});
					}
				}
				if (this.helpDisplay == 'field' || this.helpDisplay == 'both'){
					Ext.QuickTips.register({
						target: this,
						title: this.helpTitle,
						text: this.helpText
					});
				}
			}
		},
		tipsOnMenuItems: function () {
			if (this.helpText || this.helpTitle) {
				Ext.QuickTips.register({
					target: this,
					title: this.helpTitle,
					text: this.helpText
				});
			}
		}
	}
}();
Ext.form.Field.prototype.afterRender = Ext.form.Field.prototype.afterRender.createInterceptor(HTMLArea.util.Tips.tipsOnFormFields);
Ext.menu.BaseItem.prototype.afterRender = Ext.menu.BaseItem.prototype.afterRender.createInterceptor(HTMLArea.util.Tips.tipsOnMenuItems);
/***************************************************
 *  COLOR WIDGETS AND UTILITIES
 ***************************************************/
HTMLArea.util.Color = function () {
	return {
		/*
		 * Returns a rgb-style color from a number
		 */
		colorToRgb: function(v) {
			if (typeof(v) != 'number') {
				return v;
			}
			var r = v & 0xFF;
			var g = (v >> 8) & 0xFF;
			var b = (v >> 16) & 0xFF;
			return 'rgb(' + r + ',' + g + ',' + b + ')';
		},
		/*
		 * Returns hexadecimal color representation from a number or a rgb-style color.
		 */
		colorToHex: function(v) {
			if (typeof(v) === 'undefined' || v == null) {
				return '';
			}
			function hex(d) {
				return (d < 16) ? ('0' + d.toString(16)) : d.toString(16);
			};
			if (typeof(v) == 'number') {
				var b = v & 0xFF;
				var g = (v >> 8) & 0xFF;
				var r = (v >> 16) & 0xFF;
				return '#' + hex(r) + hex(g) + hex(b);
			}
			if (v.substr(0, 3) === 'rgb') {
				var re = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/;
				if (v.match(re)) {
					var r = parseInt(RegExp.$1);
					var g = parseInt(RegExp.$2);
					var b = parseInt(RegExp.$3);
					return ('#' + hex(r) + hex(g) + hex(b)).toUpperCase();
				}
				return '';
			}
			if (v.substr(0, 1) === '#') {
				return v;
			}
			return '';
		},
		/*
		 * Select interceptor to ensure that the color exists in the palette before trying to select
		 */
		checkIfColorInPalette: function (color) {
				// Do not continue if the new color is not in the palette
			if (this.el && !this.el.child('a.color-' + color)) {
					// Remove any previous selection
				this.deSelect();
				return false;
			}
		}
	}
}();
/*
 * Intercept Ext.ColorPalette.prototype.select
 */
Ext.ColorPalette.prototype.select = Ext.ColorPalette.prototype.select.createInterceptor(HTMLArea.util.Color.checkIfColorInPalette);
/*
 * Add deSelect method to Ext.ColorPalette
 */
Ext.override(Ext.ColorPalette, {
	deSelect: function () {
		if (this.el && this.value){
			this.el.child('a.color-' + this.value).removeClass('x-color-palette-sel');
			this.value = null;
		}
	}
});
Ext.ux.menu.HTMLAreaColorMenu = Ext.extend(Ext.menu.Menu, {
	enableScrolling: false,
	hideOnClick: true,
	cls: 'x-color-menu',
	colorPaletteValue: '',
	customColorsValue: '',
	plain: true,
	showSeparator: false,
	initComponent: function () {
		var paletteItems = [];
		var width = 'auto';
		if (this.colorsConfiguration) {
			paletteItems.push({
				xtype: 'container',
				layout: 'anchor',
				width: 160,
				style: { float: 'right' },
				items: {
					xtype: 'colorpalette',
					itemId: 'custom-colors',
					cls: 'htmlarea-custom-colors',
					colors: this.colorsConfiguration,
					value: this.value,
					allowReselect: true,
					tpl: new Ext.XTemplate(
						'<tpl for="."><a href="#" class="color-{1}" hidefocus="on"><em><span style="background:#{1}" unselectable="on">&#160;</span></em><span unselectable="on">{0}</span></a></tpl>'
					)
				}
			});
		}
		if (this.colors.length) {
			paletteItems.push({
				xtype: 'container',
				layout: 'anchor',
				items: {
					xtype: 'colorpalette',
					itemId: 'color-palette',
					cls: 'color-palette',
					colors: this.colors,
					value: this.value,
					allowReselect: true
				}
			});
		}
		if (this.colorsConfiguration && this.colors.length) {
			width = 350;
		}
		Ext.apply(this, {
			layout: 'menu',
			width: width,
			items: paletteItems
		});
		Ext.ux.menu.HTMLAreaColorMenu.superclass.initComponent.call(this);
		this.standardPalette = this.find('itemId', 'color-palette')[0];
		this.customPalette = this.find('itemId', 'custom-colors')[0];
		if (this.standardPalette) {
			this.standardPalette.purgeListeners();
			this.relayEvents(this.standardPalette, ['select']);
		}
		if (this.customPalette) {
			this.customPalette.purgeListeners();
			this.relayEvents(this.customPalette, ['select']);
		}
		this.on('select', this.menuHide, this);
		if (this.handler){
			this.on('select', this.handler, this.scope || this);
		}
	},
	menuHide: function() {
		if (this.hideOnClick){
			this.hide(true);
		}
	}
});
Ext.reg('htmlareacolormenu', Ext.ux.menu.HTMLAreaColorMenu);
/*
 * Color palette trigger field
 * Based on http://www.extjs.com/forum/showthread.php?t=89312
 */
Ext.ux.form.ColorPaletteField = Ext.extend(Ext.form.TriggerField, {
	triggerClass: 'x-form-color-trigger',
	defaultColors: [
		'000000', '222222', '444444', '666666', '999999', 'BBBBBB', 'DDDDDD', 'FFFFFF',
		'660000', '663300', '996633', '003300', '003399', '000066', '330066', '660066',
		'990000', '993300', 'CC9900', '006600', '0033FF', '000099', '660099', '990066',
		'CC0000', 'CC3300', 'FFCC00', '009900', '0066FF', '0000CC', '663399', 'CC0099',
		'FF0000', 'FF3300', 'FFFF00', '00CC00', '0099FF', '0000FF', '9900CC', 'FF0099',
		'CC3333', 'FF6600', 'FFFF33', '00FF00', '00CCFF', '3366FF', '9933FF', 'FF00FF',
		'FF6666', 'FF6633', 'FFFF66', '66FF66', '00FFFF', '3399FF', '9966FF', 'FF66FF',
		'FF9999', 'FF9966', 'FFFF99', '99FF99', '99FFFF', '66CCFF', '9999FF', 'FF99FF',
		'FFCCCC', 'FFCC99', 'FFFFCC', 'CCFFCC', 'CCFFFF', '99CCFF', 'CCCCFF', 'FFCCFF'
	],
		// Whether or not the field background, text, or triggerbackgroud are set to the selected color
	colorizeFieldBackgroud: true,
	colorizeFieldText: true,
	colorizeTrigger: false,
	editable: true,
	initComponent: function () {
		Ext.ux.form.ColorPaletteField.superclass.initComponent.call(this);
		if (!this.colors) {
			this.colors = this.defaultColors;
		}
		this.addEvents(
			'select'
		);
	},
		// private
	validateBlur: function () {
		return !this.menu || !this.menu.isVisible();
	},
	setValue: function (color) {
		if (color) {
			if (this.colorizeFieldBackgroud) {
				this.el.applyStyles('background: #' + color  + ';');
			}
			if (this.colorizeFieldText) {
				this.el.applyStyles('color: #' + this.rgbToHex(this.invert(this.hexToRgb(color)))  + ';');
			}
			if (this.colorizeTrigger) {
				this.trigger.applyStyles('background-color: #' + color  + ';');
			}
		}
		return Ext.ux.form.ColorPaletteField.superclass.setValue.call(this, color);
	},
		// private
	onDestroy: function () {
		Ext.destroy(this.menu);
		Ext.ux.form.ColorPaletteField.superclass.onDestroy.call(this);
	},
		// private
	onTriggerClick: function () {
		if (this.disabled) {
			return;
		}
		if (this.menu == null) {
			this.menu = new Ext.ux.menu.HTMLAreaColorMenu({
				cls: 'htmlarea-color-menu',
				hideOnClick: false,
				colors: this.colors,
				colorsConfiguration: this.colorsConfiguration,
				value: this.getValue()
			});
		}
		this.onFocus();
		this.menu.show(this.el, "tl-bl?");
		this.menuEvents('on');
	},
		//private
	menuEvents: function (method) {
		this.menu[method]('select', this.onSelect, this);
		this.menu[method]('hide', this.onMenuHide, this);
		this.menu[method]('show', this.onFocus, this);
	},
	onSelect: function (m, d) {
		this.setValue(d);
		this.fireEvent('select', this, d);
		this.menu.hide();
	},
	onMenuHide: function () {
		this.focus(false, 60);
		this.menuEvents('un');
	},
	invert: function ( r, g, b ) {
		if( r instanceof Array ) { return this.invert.call( this, r[0], r[1], r[2] ); }
		return [255-r,255-g,255-b];
	},
	hexToRgb: function ( hex ) {
		return [ this.hexToDec( hex.substr(0, 2) ), this.hexToDec( hex.substr(2, 2) ), this.hexToDec( hex.substr(4, 2) ) ];
	},
	hexToDec: function( hex ) {
		var s = hex.split('');
		return ( ( this.getHCharPos( s[0] ) * 16 ) + this.getHCharPos( s[1] ) );
	},
	getHCharPos: function( c ) {
		var HCHARS = '0123456789ABCDEF';
		return HCHARS.indexOf( c.toUpperCase() );
	},
	rgbToHex: function( r, g, b ) {
		if( r instanceof Array ) { return this.rgbToHex.call( this, r[0], r[1], r[2] ); }
		return this.decToHex( r ) + this.decToHex( g ) + this.decToHex( b );
	},
	decToHex: function( n ) {
		var HCHARS = '0123456789ABCDEF';
		n = parseInt(n, 10);
		n = ( !isNaN( n )) ? n : 0;
		n = (n > 255 || n < 0) ? 0 : n;
		return HCHARS.charAt( ( n - n % 16 ) / 16 ) + HCHARS.charAt( n % 16 );
	}
});
Ext.reg('colorpalettefield', Ext.ux.form.ColorPaletteField);
/***************************************************
 * TYPO3-SPECIFIC FUNCTIONS
 ***************************************************/
/*
 * Extending the TYPO3 Lorem Ipsum extension
 */
var lorem_ipsum = function (element, text) {
	if (/^textarea$/i.test(element.nodeName) && element.id && element.id.substr(0,7) === 'RTEarea') {
		var editor = RTEarea[element.id.substr(7, element.id.length)]['editor'];
		editor.getSelection().insertHtml(text);
		editor.updateToolbar();
	}
};
/**
 * HTMLArea.plugin class
 *
 * Every plugin should be a subclass of this class
 *
 */
HTMLArea.Plugin = function (editor, pluginName) {
};
/**
 ***********************************************
 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.6 *
 ***********************************************
 * Extends class HTMLArea.Plugin
 *
 * Defined for backward compatibility only
 * Use Ext.extend(SubClassName, config) directly
 */
HTMLArea.Plugin.extend = function (config) {
	return Ext.extend(HTMLArea.Plugin, config);
};
HTMLArea.Plugin = Ext.extend(HTMLArea.Plugin, {
	/**
	 * HTMLArea.Plugin constructor
	 *
	 * @param	object		editor: instance of RTE
	 * @param	string		pluginName: name of the plugin
	 *
	 * @return	boolean		true if the plugin was configured
	 */
	constructor: function (editor, pluginName) {
		this.editor = editor;
		this.editorNumber = editor.editorId;
		this.editorId = editor.editorId;
		this.editorConfiguration = editor.config;
		this.name = pluginName;
		try {
			this.I18N = HTMLArea.I18N[this.name];
		} catch(e) {
			this.I18N = new Object();
		}
		this.configurePlugin(editor);
		/**
		 ***********************************************
		 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.6 *
		 ***********************************************
		 * Extends class HTMLArea[pluginName]
		 *
		 * Defined for backward compatibility only
		 * Use Ext.extend(SubClassName, config) directly
		 */
		HTMLArea[pluginName].extend = function (config) {
			return Ext.extend(HTMLArea[pluginName], config);
		};
	},
	/**
	 * Configures the plugin
	 * This function is invoked by the class constructor.
	 * This function should be redefined by the plugin subclass. Normal steps would be:
	 *	- registering plugin ingormation with method registerPluginInformation;
	 *	- registering any buttons with method registerButton;
	 *	- registering any drop-down lists with method registerDropDown.
	 *
	 * @param	object		editor: instance of RTE
	 *
	 * @return	boolean		true if the plugin was configured
	 */
	configurePlugin: function (editor) {
		return false;
	},
	/**
	 ***********************************************
	 * THIS FUNCTION IS DEPRECATED AS OF TYPO3 4.6 *
	 ***********************************************
	 * Invove the base class constructor
	 *
	 * Defined for backward compatibility only
	 * Note: this.base will exclusively refer to the HTMLArea.Plugin class constructor
	 */
	base: function (editor, pluginName) {
		HTMLArea.appendToLog(editor.editorId, 'HTMLArea.' + pluginName, 'base', 'Deprecated use of base function. Use Ext superclass reference instead.', 'warn');
		HTMLArea.Plugin.prototype.constructor.call(this, editor, pluginName);
	},
	/**
	 * Registers the plugin "About" information
	 *
	 * @param	object		pluginInformation:
	 *					version		: the version,
	 *					developer	: the name of the developer,
	 *					developerUrl	: the url of the developer,
	 *					copyrightOwner	: the name of the copyright owner,
	 *					sponsor		: the name of the sponsor,
	 *					sponsorUrl	: the url of the sponsor,
	 *					license		: the type of license (should be "GPL")
	 *
	 * @return	boolean		true if the information was registered
	 */
	registerPluginInformation: function (pluginInformation) {
		if (typeof(pluginInformation) !== 'object') {
			this.appendToLog('registerPluginInformation', 'Plugin information was not provided', 'warn');
			return false;
		} else {
			this.pluginInformation = pluginInformation;
			this.pluginInformation.name = this.name;
			return true;
		}
	},

	/**
	 * Returns the plugin information
	 *
	 * @return	object		the plugin information object
	 */
	getPluginInformation: function () {
		return this.pluginInformation;
	},

	/**
	 * Returns a plugin object
	 *
	 * @param	string		pluinName: the name of some plugin
	 * @return	object		the plugin object or null
	 */
	getPluginInstance: function (pluginName) {
		return this.editor.getPlugin(pluginName);
	},

	/**
	 * Returns a current editor mode
	 *
	 * @return	string		editor mode
	 */
	getEditorMode: function () {
		return this.editor.getMode();
	},

	/**
	 * Returns true if the button is enabled in the toolbar configuration
	 *
	 * @param	string		buttonId: identification of the button
	 *
	 * @return	boolean		true if the button is enabled in the toolbar configuration
	 */
	isButtonInToolbar: function (buttonId) {
		var index = -1;
		Ext.each(this.editorConfiguration.toolbar, function (row) {
			Ext.each(row, function (group) {
				index = group.indexOf(buttonId);
				return index === -1;
			});
			return index === -1;
		});
		return index !== -1;
	},

	/**
	 * Returns the button object from the toolbar
	 *
	 * @param	string		buttonId: identification of the button
	 *
	 * @return	object		the toolbar button object
	 */
	getButton: function (buttonId) {
		return this.editor.toolbar.getButton(buttonId);
	},
	/**
	 * Registers a button for inclusion in the toolbar
	 *
	 * @param	object		buttonConfiguration: the configuration object of the button:
	 *					id		: unique id for the button
	 *					tooltip		: tooltip for the button
	 *					textMode	: enable in text mode
	 *					action		: name of the function invoked when the button is pressed
	 *					context		: will be disabled if not inside one of listed elements
	 *					hide		: hide in menu and show only in context menu (deprecated, use hidden)
	 *					hidden		: synonym of hide
	 *					selection	: will be disabled if there is no selection
	 *					hotkey		: hotkey character
	 *					dialog		: if true, the button opens a dialogue
	 *					dimensions	: the opening dimensions object of the dialogue window
	 *
	 * @return	boolean		true if the button was successfully registered
	 */
	registerButton: function (buttonConfiguration) {
		if (this.isButtonInToolbar(buttonConfiguration.id)) {
			if (Ext.isString(buttonConfiguration.action) && Ext.isFunction(this[buttonConfiguration.action])) {
				buttonConfiguration.plugins = this;
				if (buttonConfiguration.dialog) {
					if (!buttonConfiguration.dimensions) {
						buttonConfiguration.dimensions = { width: 250, height: 250};
					}
					buttonConfiguration.dimensions.top = buttonConfiguration.dimensions.top ?  buttonConfiguration.dimensions.top : this.editorConfiguration.dialogueWindows.defaultPositionFromTop;
					buttonConfiguration.dimensions.left = buttonConfiguration.dimensions.left ?  buttonConfiguration.dimensions.left : this.editorConfiguration.dialogueWindows.defaultPositionFromLeft;
				}
				buttonConfiguration.hidden = buttonConfiguration.hide;
					// Apply additional ExtJS config properties set in Page TSConfig
					// May not always work for values that must be integers
				if (this.editorConfiguration.buttons[this.editorConfiguration.convertButtonId[buttonConfiguration.id]]) {
					Ext.applyIf(buttonConfiguration, this.editorConfiguration.buttons[this.editorConfiguration.convertButtonId[buttonConfiguration.id]]);
				}
				if (this.editorConfiguration.registerButton(buttonConfiguration)) {
					var hotKey = buttonConfiguration.hotKey ? buttonConfiguration.hotKey :
						((this.editorConfiguration.buttons[this.editorConfiguration.convertButtonId[buttonConfiguration.id]] && this.editorConfiguration.buttons[this.editorConfiguration.convertButtonId[buttonConfiguration.id]].hotKey) ? this.editorConfiguration.buttons[this.editorConfiguration.convertButtonId[buttonConfiguration.id]].hotKey : null);
					if (!hotKey && buttonConfiguration.hotKey == "0") {
						hotKey = "0";
					}
					if (!hotKey && this.editorConfiguration.buttons[this.editorConfiguration.convertButtonId[buttonConfiguration.id]] && this.editorConfiguration.buttons[this.editorConfiguration.convertButtonId[buttonConfiguration.id]].hotKey == "0") {
						hotKey = "0";
					}
					if (hotKey || hotKey == "0") {
						var hotKeyConfiguration = {
							id	: hotKey,
							cmd	: buttonConfiguration.id
						};
						return this.registerHotKey(hotKeyConfiguration);
					}
					return true;
				}
			} else {
				this.appendToLog('registerButton', 'Function ' + buttonConfiguration.action + ' was not defined when registering button ' + buttonConfiguration.id, 'error');
			}
		}
		return false;
	},
	/**
	 * Registers a drop-down list for inclusion in the toolbar
	 *
	 * @param	object		dropDownConfiguration: the configuration object of the drop-down:
	 *					id		: unique id for the drop-down
	 *					tooltip		: tooltip for the drop-down
	 *					action		: name of function to invoke when an option is selected
	 *					textMode	: enable in text mode
	 *
	 * @return	boolean		true if the drop-down list was successfully registered
	 */
	registerDropDown: function (dropDownConfiguration) {
		if (this.isButtonInToolbar(dropDownConfiguration.id)) {
			if (Ext.isString(dropDownConfiguration.action) && Ext.isFunction(this[dropDownConfiguration.action])) {
				dropDownConfiguration.plugins = this;
				dropDownConfiguration.hidden = dropDownConfiguration.hide;
				dropDownConfiguration.xtype = 'htmlareacombo';
					// Apply additional ExtJS config properties set in Page TSConfig
					// May not always work for values that must be integers
				if (this.editorConfiguration.buttons[this.editorConfiguration.convertButtonId[dropDownConfiguration.id]]) {
					Ext.applyIf(dropDownConfiguration, this.editorConfiguration.buttons[this.editorConfiguration.convertButtonId[dropDownConfiguration.id]]);
				}
				return this.editorConfiguration.registerButton(dropDownConfiguration);
			} else {
				this.appendToLog('registerDropDown', 'Function ' + dropDownConfiguration.action + ' was not defined when registering drop-down ' + dropDownConfiguration.id, 'error');
			}
		}
		return false;
	},
	/**
	 * Registers a text element for inclusion in the toolbar
	 *
	 * @param	object		textConfiguration: the configuration object of the text element:
	 *					id		: unique id for the text item
	 *					text		: the text litteral
	 *					tooltip		: tooltip for the text item
	 *					cls		: a css class to be assigned to the text element
	 *
	 * @return	boolean		true if the drop-down list was successfully registered
	 */
	registerText: function (textConfiguration) {
		if (this.isButtonInToolbar(textConfiguration.id)) {
			textConfiguration.plugins = this;
			textConfiguration.xtype = 'htmlareatoolbartext';
			return this.editorConfiguration.registerButton(textConfiguration);
		}
		return false;
	},

	/**
	 * Returns the drop-down configuration
	 *
	 * @param	string		dropDownId: the unique id of the drop-down
	 *
	 * @return	object		the drop-down configuration object
	 */
	getDropDownConfiguration : function(dropDownId) {
		return this.editorConfiguration.buttonsConfig[dropDownId];
	},

	/**
	 * Registors a hotkey
	 *
	 * @param	object		hotKeyConfiguration: the configuration object of the hotkey:
	 *					id		: the key
	 *					cmd		: name of the button corresponding to the hot key
	 *					element		: value of the record to be selected in the dropDown item
	 *
	 * @return	boolean		true if the hotkey was successfully registered
	 */
	registerHotKey : function (hotKeyConfiguration) {
		return this.editorConfiguration.registerHotKey(hotKeyConfiguration);
	},

	/**
	 * Returns the buttonId corresponding to the hotkey, if any
	 *
	 * @param	string		key: the hotkey
	 *
	 * @return	string		the buttonId or ""
	 */
	translateHotKey : function(key) {
		if (typeof(this.editorConfiguration.hotKeyList[key]) !== "undefined") {
			var buttonId = this.editorConfiguration.hotKeyList[key].cmd;
			if (typeof(buttonId) !== "undefined") {
				return buttonId;
			} else {
				return "";
			}
		}
		return "";
	},

	/**
	 * Returns the hotkey configuration
	 *
	 * @param	string		key: the hotkey
	 *
	 * @return	object		the hotkey configuration object
	 */
	getHotKeyConfiguration: function(key) {
		if (Ext.isDefined(this.editorConfiguration.hotKeyList[key])) {
			return this.editorConfiguration.hotKeyList[key];
		} else {
			return null;
		}
	},
	/**
	 * Initializes the plugin
	 * Is invoked when the toolbar component is created (subclass of Ext.ux.HTMLAreaButton or Ext.ux.form.HTMLAreaCombo)
	 *
	 * @param	object		button: the component
	 *
	 * @return	void
	 */
	init: Ext.emptyFn,
	/**
	 * The toolbar refresh handler of the plugin
	 * This function may be defined by the plugin subclass.
	 * If defined, the function will be invoked whenever the toolbar state is refreshed.
	 *
	 * @return	boolean
	 */
	onUpdateToolbar: Ext.emptyFn,
	/**
	 * The onMode event handler
	 * This function may be redefined by the plugin subclass.
	 * The function is invoked whenever the editor changes mode.
	 *
	 * @param	string		mode: "wysiwyg" or "textmode"
	 *
	 * @return	boolean
	 */
	onMode: function(mode) {
		if (mode === "textmode" && this.dialog && !(this.dialog.buttonId && this.editorConfiguration.buttons[this.dialog.buttonId] && this.editorConfiguration.buttons[this.dialog.buttonId].textMode)) {
			this.dialog.close();
		}
	},
	/**
	 * The onGenerate event handler
	 * This function may be defined by the plugin subclass.
	 * The function is invoked when the editor is initialized
	 *
	 * @return	boolean
	 */
	onGenerate: Ext.emptyFn,
	/**
	 * Localize a string
	 *
	 * @param	string		label: the name of the label to localize
	 *
	 * @return	string		the localization of the label
	 */
	localize: function (label, plural) {
		var i = plural || 0;
		var localized = this.I18N[label];
		if (typeof localized === 'object' && typeof localized[i] !== 'undefined') {
			localized = localized[i]['target'];
		} else {
			localized = HTMLArea.localize(label, plural);
		}
		return localized;
	},
	/**
	 * Get localized label wrapped with contextual help markup when available
	 *
	 * @param	string		fieldName: the name of the field in the CSH file
	 * @param	string		label: the name of the label to localize
	 * @param	string		pluginName: overrides this.name
	 *
	 * @return	string		localized label with CSH markup
	 */
	getHelpTip: function (fieldName, label, pluginName) {
		if (Ext.isDefined(TYPO3.ContextHelp)) {
			var pluginName = Ext.isDefined(pluginName) ? pluginName : this.name;
			if (!Ext.isEmpty(fieldName)) {
				fieldName = fieldName.replace(/-|\s/gi, '_');
			}
			return '<span class="t3-help-link" href="#" data-table="xEXT_rtehtmlarea_' + pluginName + '" data-field="' + fieldName + '"><abbr class="t3-help-teaser">' + (this.localize(label) || label) + '</abbr></span>';
		} else {
			return this.localize(label) || label;
		}
	},
	/**
	 * Load a Javascript file asynchronously
	 *
	 * @param	string		url: url of the file to load
	 * @param	function	callBack: the callBack function
	 *
	 * @return	boolean		true on success of the request submission
	 */
	getJavascriptFile: function (url, callback) {
		return this.editor.ajax.getJavascriptFile(url, callback, this);
	},
	/**
	 * Post data to the server
	 *
	 * @param	string		url: url to post data to
	 * @param	object		data: data to be posted
	 * @param	function	callback: function that will handle the response returned by the server
	 *
	 * @return	boolean		true on success
	 */
	postData: function (url, data, callback) {
	 	return this.editor.ajax.postData(url, data, callback, this);
	},
	/*
	 * Open a window with container iframe
	 *
	 * @param	string		buttonId: the id of the button
	 * @param	string		title: the window title (will be localized here)
	 * @param	object		dimensions: the opening dimensions od the window
	 * @param	string		url: the url to load ino the iframe
	 *
	 * @ return	void
	 */
	openContainerWindow: function (buttonId, title, dimensions, url) {
		this.dialog = new Ext.Window({
			id: this.editor.editorId + buttonId,
			title: this.localize(title) || title,
			cls: 'htmlarea-window',
			width: dimensions.width,
			border: false,
			resizable: true,
			iconCls: this.getButton(buttonId).iconCls,
			listeners: {
				afterrender: {
					fn: this.onContainerResize
				},
				resize: {
					fn: this.onContainerResize
				},
				close: {
					fn: this.onClose,
					scope: this
				}
			},
			items: {
					// The content iframe
				xtype: 'box',
				height: dimensions.height-20,
				itemId: 'content-iframe',
				autoEl: {
					tag: 'iframe',
					cls: 'content-iframe',
					src: url
				}
			}
		});
		this.show();
	},
	/*
	 * Handler invoked when the container window is rendered or resized in order to resize the content iframe to maximum size
	 */
	onContainerResize: function (panel) {
		var iframe = panel.getComponent('content-iframe');
		if (iframe.rendered) {
			iframe.getEl().setSize(panel.getInnerWidth(), panel.getInnerHeight());
		}
	},
	/*
	 * Get the opening diment=sions of the window
	 *
	 * @param	object		dimensions: default opening width and height set by the plugin
	 * @param	string		buttonId: the id of the button that is triggering the opening of the window
	 *
	 * @return	object		opening width and height of the window
	 */
	getWindowDimensions: function (dimensions, buttonId) {
			// Apply default dimensions
		this.dialogueWindowDimensions = {
			width: 250,
			height: 250
		};
			// Apply default values as per PageTSConfig
		if (this.editorConfiguration.dialogueWindows) {
			Ext.apply(this.dialogueWindowDimensions, this.editorConfiguration.dialogueWindows);
		}
			// Apply dimensions as per button registration
		if (this.editorConfiguration.buttonsConfig[buttonId]) {
			Ext.apply(this.dialogueWindowDimensions, this.editorConfiguration.buttonsConfig[buttonId].dimensions);
		}
			// Apply dimensions as per call
		Ext.apply(this.dialogueWindowDimensions, dimensions);
			// Overrride dimensions as per PageTSConfig
		var buttonConfiguration = this.editorConfiguration.buttons[this.editorConfiguration.convertButtonId[buttonId]];
		if (buttonConfiguration && buttonConfiguration.dialogueWindow) {
			Ext.apply(this.dialogueWindowDimensions, buttonConfiguration.dialogueWindow);
		}
		return this.dialogueWindowDimensions;
	},
	/**
	 * Make url from module path
	 *
	 * @param	string		modulePath: module path
	 * @param	string		parameters: additional parameters
	 *
	 * @return	string		the url
	 */
	makeUrlFromModulePath: function(modulePath, parameters) {
		return modulePath + '?' + this.editorConfiguration.RTEtsConfigParams + '&editorNo=' + this.editor.editorId + '&sys_language_content=' + this.editorConfiguration.sys_language_content + '&contentTypo3Language=' + this.editorConfiguration.typo3ContentLanguage + (parameters?parameters:'');
	},
	/**
	 * Append an entry at the end of the troubleshooting log
	 *
	 * @param	string		functionName: the name of the plugin function writing to the log
	 * @param	string		text: the text of the message
	 * @param	string		type: the typeof of message: 'log', 'info', 'warn' or 'error'
	 *
	 * @return	void
	 */
	appendToLog: function (functionName, text, type) {
		this.editor.appendToLog(this.name, functionName, text, type);
	},
	/*
	 * Add a config element to config array if not empty
	 *
	 * @param	object		configElement: the config element
	 * @param	array		configArray: the config array
	 *
	 * @return	void
	 */
	addConfigElement: function (configElement, configArray) {
		if (!Ext.isEmpty(configElement)) {
			configArray.push(configElement);
		}
	},
	/*
	 * Handler for Ext.TabPanel tabchange event
	 * Force window ghost height synchronization
	 * Working around ExtJS 3.1 bug
	 */
	syncHeight: function (tabPanel, tab) {
		var position = this.dialog.getPosition();
		if (position[0] > 0) {
			this.dialog.setPosition(position);
		}
	},
	/*
	 * Show the dialogue window
	 */
	show: function () {
			// Close the window if the editor changes mode
		this.dialog.mon(this.editor, 'HTMLAreaEventModeChange', this.close, this, {single: true });
		this.saveSelection();
		if (typeof(this.dialogueWindowDimensions) !== 'undefined') {
			this.dialog.setPosition(this.dialogueWindowDimensions.positionFromLeft, this.dialogueWindowDimensions.positionFromTop);
		}
		this.dialog.show();
		this.restoreSelection();
	},
	/*
	 * Close the dialogue window (after saving the selection, if IE)
	 */
	close: function () {
		this.saveSelection();
		this.dialog.close();
	},
	/*
	 * Dialogue window onClose handler
	 */
	onClose: function () {
		this.editor.focus();
		this.restoreSelection();
	 	this.editor.updateToolbar();
	},
	/*
	 * Handler for window cancel
	 */
	onCancel: function () {
		this.dialog.close();
		this.editor.focus();
	},
	/*
	 * Save selection
	 * Should be called after processing button other than Cancel
	 */
	saveSelection: function () {
			// If IE, save the current selection
		if (Ext.isIE) {
			this.savedRange = this.editor.getSelection().createRange();
		}
	},
	/*
	 * Restore selection
	 * Should be called before processing dialogue button or result
	 */
	restoreSelection: function () {
			// If IE, restore the selection saved when the window was shown
		if (Ext.isIE && this.savedRange) {
				// Restoring the selection will not work if the inner html was replaced by the plugin
			try {
				this.editor.getSelection().selectRange(this.savedRange);
			} catch (e) {}
		}
	},
	/*
	 * Build the configuration object of a button
	 *
	 * @param	string		button: the text of the button
	 * @param	function	handler: button handler
	 *
	 * @return	object		the button configuration object
	 */
	buildButtonConfig: function (button, handler) {
		return {
			xtype: 'button',
			text: this.localize(button),
			listeners: {
				click: {
					fn: handler,
					scope: this
				}
			}
		};
	}
});
}

/***************************************************************
*  Copyright notice
*
*  (c) 2009-2011 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * EditorMode Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.EditorMode = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '2.1',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: 'SJBR',
			sponsorUrl	: 'http://www.sjbr.ca/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the buttons
		 */
		var buttonList = this.buttonList, buttonId;
		for (var i = 0, n = buttonList.length; i < n; ++i) {
			var button = buttonList[i];
			buttonId = button[0];
			var buttonConfiguration = {
				id		: buttonId,
				tooltip		: this.localize(buttonId + '-Tooltip'),
				iconCls		: 'htmlarea-action-editor-toggle-mode',
				action		: 'onButtonPress',
				context		: button[1],
				textMode	: (buttonId == 'TextMode')
			};
			this.registerButton(buttonConfiguration);
		}
		return true;
	},
	/**
	 * The list of buttons added by this plugin
	 */
	buttonList: [
		['TextMode', null]
	],
	/*
	 * This function gets called when a button was pressed.
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id, target) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
		this.editor.setMode((this.editor.getMode() == buttonId.toLowerCase()) ? 'wysiwyg' : buttonId.toLowerCase());
		return false;
	},
	/*
	 * This function gets called when the toolbar is updated
	 *
	 * @return	void
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors) {
		button.setInactive(mode !== button.itemId.toLowerCase());
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2007-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * Default Inline Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.DefaultInline = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '1.3',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: 'SJBR',
			sponsorUrl	: 'http://www.sjbr.ca/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the buttons
		 */
		Ext.each(this.buttonList, function (button) {
			var buttonId = button[0];
			var buttonConfiguration = {
				id		: buttonId,
				tooltip		: this.localize(buttonId + '-Tooltip'),
				iconCls		: 'htmlarea-action-' + button[2],
				textMode	: false,
				action		: 'onButtonPress',
				context		: button[1],
				hotKey		: (this.editorConfiguration.buttons[buttonId.toLowerCase()]?this.editorConfiguration.buttons[buttonId.toLowerCase()].hotKey:null)
			};
			this.registerButton(buttonConfiguration);
			return true;
		}, this);
		return true;
	},
	/*
	 * The list of buttons added by this plugin
	 */
	buttonList: [
		['Bold', null, 'bold'],
		['Italic', null, 'italic'],
		['StrikeThrough', null, 'strike-through'],
		['Subscript', null, 'subscript'],
		['Superscript', null, 'superscript'],
		['Underline', null, 'underline']
	],
	/*
	 * This function gets called when some inline element button was pressed.
	 */
	onButtonPress: function (editor, id) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
		try {
			editor.getSelection().execCommand(buttonId, false, null);
		}
		catch(e) {
			this.appendToLog('onButtonPress', e + '\n\nby execCommand(' + buttonId + ');', 'error');
		}
		return false;
	},
	
	/*
	 * This function gets called when the toolbar is updated
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors) {
		if (mode === 'wysiwyg' && this.editor.isEditable()) {
			var commandState = false;
			try {
				commandState = this.editor.document.queryCommandState(button.itemId);
			} catch(e) {
				commandState = false;
			}
			button.setInactive(!commandState);
		}
	}
});


/***************************************************************
*  Copyright notice
*
*  (c) 2007-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * BlockElements Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.BlockElements = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		/*
		 * Setting up some properties from PageTSConfig
		 */
		this.buttonsConfiguration = this.editorConfiguration.buttons;
		if (this.buttonsConfiguration.blockstyle) {
			this.tags = this.editorConfiguration.buttons.blockstyle.tags;
		}
		this.useClass = {
			Indent		: "indent",
			JustifyLeft	: "align-left",
			JustifyCenter	: "align-center",
			JustifyRight	: "align-right",
			JustifyFull	: "align-justify"
		};
		this.useAlignAttribute = false;
		for (var buttonId in this.useClass) {
			if (this.useClass.hasOwnProperty(buttonId)) {
				if (this.editorConfiguration.buttons[this.buttonList[buttonId][2]]) {
					this.useClass[buttonId] = this.editorConfiguration.buttons[this.buttonList[buttonId][2]].useClass ? this.editorConfiguration.buttons[this.buttonList[buttonId][2]].useClass : this.useClass[buttonId];
					if (buttonId === "Indent") {
						this.useBlockquote = this.editorConfiguration.buttons.indent.useBlockquote ? this.editorConfiguration.buttons.indent.useBlockquote : false;
					} else {
						if (this.editorConfiguration.buttons[this.buttonList[buttonId][2]].useAlignAttribute) {
							this.useAlignAttribute = true;
						}
					}
				}
			}
		}
		this.allowedAttributes = new Array('id', 'title', 'lang', 'xml:lang', 'dir', 'class', 'itemscope', 'itemtype', 'itemprop');
		if (Ext.isIE) {
			this.addAllowedAttribute('className');
		}
		this.indentedList = null;
			// Standard block formating items
		var standardElements = new Array('address', 'article', 'aside', 'blockquote', 'div', 'footer', 'header', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'nav', 'p', 'pre', 'section');
		this.standardBlockElements = new RegExp( '^(' + standardElements.join('|') + ')$', 'i');
			// Process block formating customization configuration
		this.formatBlockItems = {};
		if (this.buttonsConfiguration
			&& this.buttonsConfiguration.formatblock
			&& this.buttonsConfiguration.formatblock.items) {
				this.formatBlockItems = this.buttonsConfiguration.formatblock.items;
		}
			// Build lists of mutually exclusive class names
		for (var tagName in this.formatBlockItems) {
			if (this.formatBlockItems.hasOwnProperty(tagName) && this.formatBlockItems[tagName].tagName && this.formatBlockItems[tagName].addClass) {
				if (!this.formatBlockItems[this.formatBlockItems[tagName].tagName]) {
					this.formatBlockItems[this.formatBlockItems[tagName].tagName] = {};
				}
				if (!this.formatBlockItems[this.formatBlockItems[tagName].tagName].classList) {
					this.formatBlockItems[this.formatBlockItems[tagName].tagName].classList = new Array();
				}
				this.formatBlockItems[this.formatBlockItems[tagName].tagName].classList.push(this.formatBlockItems[tagName].addClass);
			}
		}
		for (var tagName in this.formatBlockItems) {
			if (this.formatBlockItems.hasOwnProperty(tagName) && this.formatBlockItems[tagName].classList) {
				this.formatBlockItems[tagName].classList = new RegExp( "^(" + this.formatBlockItems[tagName].classList.join("|") + ")$");
			}
		}
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '3.0',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: this.localize('Technische Universitat Ilmenau'),
			sponsorUrl	: 'http://www.tu-ilmenau.de/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		
		/*
		 * Registering the dropdown list
		 */
		var buttonId = "FormatBlock";
		var dropDownConfiguration = {
			id: buttonId,
			tooltip: this.localize(buttonId + "-Tooltip"),
			options: this.buttonsConfiguration.formatblock ? this.buttonsConfiguration.formatblock.options : [],
			action: "onChange"
		};
		if (this.buttonsConfiguration.formatblock) {
			dropDownConfiguration.width = this.buttonsConfiguration.formatblock.width ? parseInt(this.buttonsConfiguration.formatblock.width, 10) : 200;
			if (this.buttonsConfiguration.formatblock.listWidth) {
				dropDownConfiguration.listWidth = parseInt(this.buttonsConfiguration.formatblock.listWidth, 10);
			}
			if (this.buttonsConfiguration.formatblock.maxHeight) {
				dropDownConfiguration.maxHeight = parseInt(this.buttonsConfiguration.formatblock.maxHeight, 10);
			}
		}
		this.registerDropDown(dropDownConfiguration);
		/*
		 * Establishing the list of allowed block elements
		 */
		var blockElements = new Array();
		Ext.each(dropDownConfiguration.options, function (option) {
			if (option[1] != 'none') {
				blockElements.push(option[1]);
			}
		});
		if (blockElements.length) {
			this.allowedBlockElements = new RegExp( "^(" + blockElements.join("|") + ")$", "i");
		} else {
			this.allowedBlockElements = this.standardBlockElements;
		}
		/*
		 * Registering hot keys for the dropdown list items
		 */
		Ext.each(blockElements, function (blockElement) {
			var configuredHotKey = this.defaultHotKeys[blockElement];
			if (this.editorConfiguration.buttons.formatblock
					&& this.editorConfiguration.buttons.formatblock.items
					&& this.editorConfiguration.buttons.formatblock.items[blockElement]
					&& this.editorConfiguration.buttons.formatblock.items[blockElement].hotKey) {
				configuredHotKey = this.editorConfiguration.buttons.formatblock.items[blockElement].hotKey;
			}
			if (configuredHotKey) {
				var hotKeyConfiguration = {
					id		: configuredHotKey,
					cmd		: buttonId,
					element		: blockElement
				};
				this.registerHotKey(hotKeyConfiguration);
			}
		}, this);
		/*
		 * Registering the buttons
		 */
		for (var buttonId in this.buttonList) {
			if (this.buttonList.hasOwnProperty(buttonId)) {
				var button = this.buttonList[buttonId];
				var buttonConfiguration = {
					id		: buttonId,
					tooltip		: this.localize(buttonId + '-Tooltip'),
					iconCls		: 'htmlarea-action-' + button[3],
					contextMenuTitle: this.localize(buttonId + '-contextMenuTitle'),
					helpText	: this.localize(buttonId + '-helpText'),
					action		: 'onButtonPress',
					hotKey		: ((this.buttonsConfiguration[button[2]] && this.buttonsConfiguration[button[2]].hotKey) ? this.buttonsConfiguration[button[2]].hotKey : (button[1] ? button[1] : null))
				};
				this.registerButton(buttonConfiguration);
			}
		}
		return true;
	},
	/*
	 * The list of buttons added by this plugin
	 */
	buttonList: {
		Indent			: [null, 'TAB', 'indent', 'indent'],
		Outdent			: [null, 'SHIFT-TAB', 'outdent', 'outdent'],
		Blockquote		: [null, null, 'blockquote', 'blockquote'],
		InsertParagraphBefore	: [null, null, 'insertparagraphbefore', 'paragraph-insert-before'],
		InsertParagraphAfter	: [null, null, 'insertparagraphafter', 'paragraph-insert-after'],
		JustifyLeft		: [null, 'l', 'left', 'justify-left'],
		JustifyCenter		: [null, 'e', 'center', 'justify-center'],
		JustifyRight		: [null, 'r', 'right', 'justify-right'],
		JustifyFull		: [null, 'j', 'justifyfull', 'justify-full'],
		InsertOrderedList	: [null, null, 'orderedlist', 'ordered-list'],
		InsertUnorderedList	: [null, null, 'unorderedlist', 'unordered-list'],
		InsertHorizontalRule	: [null, null, 'inserthorizontalrule', 'horizontal-rule-insert']
	},
	/*
	 * The list of hotkeys associated with block elements and registered by default by this plugin
	 */
	defaultHotKeys: {
			'p'	: 'n',
			'h1'	: '1',
			'h2'	: '2',
			'h3'	: '3',
			'h4'	: '4',
			'h5'	: '5',
			'h6'	: '6'
	},
	/*
	 * The function returns true if the type of block element is allowed in the current configuration
	 */
	isAllowedBlockElement: function (blockName) {
		return this.allowedBlockElements.test(blockName);
	},
	/*
	 * This function adds an attribute to the array of attributes allowed on block elements
	 *
	 * @param	string	attribute: the name of the attribute to be added to the array
	 *
	 * @return	void
	 */
	addAllowedAttribute: function (attribute) {
		this.allowedAttributes.push(attribute);
	},
	/*
	 * This function gets called when some block element was selected in the drop-down list
	 */
	onChange: function (editor, combo, record, index) {
		this.applyBlockElement(combo.itemId, combo.getValue());
	},
	applyBlockElement: function (buttonId, blockElement) {
		var tagName = blockElement;
		var className = null;
		if (this.formatBlockItems[tagName]) {
			if (this.formatBlockItems[tagName].addClass) {
				className = this.formatBlockItems[tagName].addClass;
			}
			if (this.formatBlockItems[tagName].tagName) {
				tagName = this.formatBlockItems[tagName].tagName;
			}
		}
		if (this.standardBlockElements.test(tagName) || tagName == "none") {
			switch (tagName) {
				case 'blockquote':
					this.onButtonPress(this.editor, 'Blockquote', null, className);
					break;
				case 'address':
				case 'article':
				case 'aside':
				case 'div':
				case 'footer':
				case 'header':
				case 'nav':
				case 'section':
				case 'none':
					this.onButtonPress(this.editor, tagName, null, className);
					break;
				default	:
					var element = tagName;
					if (Ext.isIE) {
						element = '<' + element + '>';
					}
					this.editor.focus();
					if (Ext.isWebKit) {
						if (!this.editor.document.body.hasChildNodes()) {
							this.editor.document.body.appendChild((this.editor.document.createElement('br')));
						}
							// WebKit sometimes leaves empty block at the end of the selection
						this.editor.document.body.normalize();
					}
					try {
						this.editor.getSelection().execCommand(buttonId, false, element);
					} catch(e) {
						this.appendToLog('applyBlockElement', e + '\n\nby execCommand(' + buttonId + ');', 'error');
					}
					this.addClassOnBlockElements(tagName, className);
			}
		}
	},
	/*
	 * This function gets called when a button was pressed.
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 * @param	object		target: the target element of the contextmenu event, when invoked from the context menu
	 * @param	string		className: the className to be assigned to the element
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id, target, className) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
		var range = editor.getSelection().createRange();
		var statusBarSelection = this.editor.statusBar ? this.editor.statusBar.getSelection() : null;
		var parentElement = statusBarSelection ? statusBarSelection : this.editor.getSelection().getParentElement();
		if (target) {
			parentElement = target;
		}
		while (parentElement && (!HTMLArea.DOM.isBlockElement(parentElement) || /^li$/i.test(parentElement.nodeName))) {
			parentElement = parentElement.parentNode;
		}
		var blockAncestors = HTMLArea.DOM.getBlockAncestors(parentElement);
		var tableCell = null;
		if (id === "TAB" || id === "SHIFT-TAB") {
			for (var i = blockAncestors.length; --i >= 0;) {
				if (/^(td|th)$/i.test(blockAncestors[i].nodeName)) {
					tableCell = blockAncestors[i];
					break;
				}
			}
		}
		var fullNodeTextSelected = (!Ext.isIE && parentElement.textContent === range.toString()) || (Ext.isIE && parentElement.innerText === range.text);
		switch (buttonId) {
			case "Indent" :
				if (/^(ol|ul)$/i.test(parentElement.nodeName) && !(fullNodeTextSelected && !/^(li)$/i.test(parentElement.parentNode.nodeName))) {
					if (Ext.isOpera) {
						try {
							this.editor.getSelection().execCommand(buttonId, false, null);
						} catch(e) {
							this.appendToLog('onButtonPress', e + '\n\nby execCommand(' + buttonId + ');', 'error');
						}
						this.indentedList = parentElement;
						this.makeNestedList(parentElement);
						this.editor.getSelection().selectNodeContents(this.indentedList.lastChild, false);
					} else {
						this.indentSelectedListElements(parentElement, range);
					}
				} else if (tableCell) {
	
					var tablePart = tableCell.parentNode.parentNode;
						// Get next cell in same table part
					var nextCell = tableCell.nextSibling ? tableCell.nextSibling : (tableCell.parentNode.nextSibling ? tableCell.parentNode.nextSibling.cells[0] : null);
						// Next cell is in other table part
					if (!nextCell) {
						switch (tablePart.nodeName.toLowerCase()) {
						    case "thead":
							nextCell = tablePart.parentNode.tBodies[0].rows[0].cells[0];
							break;
						    case "tbody":
							nextCell = tablePart.nextSibling ? tablePart.nextSibling.rows[0].cells[0] : null;
							break;
						    case "tfoot":
							this.editor.getSelection().selectNodeContents(tablePart.parentNode.lastChild.lastChild.lastChild, true);
						}
					}
					if (!nextCell) {
						if (this.getPluginInstance('TableOperations')) {
							this.getPluginInstance('TableOperations').onButtonPress(this.editor, 'TO-row-insert-under');
						} else {
							nextCell = tablePart.parentNode.rows[0].cells[0];
						}
					}
					if (nextCell) {
						if (Ext.isOpera && !nextCell.hasChildNodes()) {
							nextCell.appendChild(this.editor.document.createElement('br'));
						}
						this.editor.getSelection().selectNodeContents(nextCell, true);
					}
				} else  if (this.useBlockquote) {
					try {
						this.editor.getSelection().execCommand(buttonId, false, null);
					} catch(e) {
						this.appendToLog('onButtonPress', e + '\n\nby execCommand(' + buttonId + ');', 'error');
					}
				} else if (this.isAllowedBlockElement("div")) {
					if (/^div$/i.test(parentElement.nodeName) && !HTMLArea.DOM.hasClass(parentElement, this.useClass[buttonId])) {
						HTMLArea.DOM.addClass(parentElement, this.useClass[buttonId]);
					} else if (!/^div$/i.test(parentElement.nodeName) && /^div$/i.test(parentElement.parentNode.nodeName) && !HTMLArea.DOM.hasClass(parentElement.parentNode, this.useClass[buttonId])) {
						HTMLArea.DOM.addClass(parentElement.parentNode, this.useClass[buttonId]);
					} else {
						var bookmark = this.editor.getBookMark().get(range);
						var newBlock = this.wrapSelectionInBlockElement('div', this.useClass[buttonId], null, true);
						this.editor.getSelection().selectRange(this.editor.getBookMark().moveTo(bookmark));
					}
				} else {
					this.addClassOnBlockElements(buttonId);
				}
				break;
			case "Outdent" :
				if (/^(ol|ul)$/i.test(parentElement.nodeName) && !HTMLArea.DOM.hasClass(parentElement, this.useClass.Indent)) {
					if (/^(li)$/i.test(parentElement.parentNode.nodeName)) {
						if (Ext.isOpera) {
							try {
								this.editor.getSelection().execCommand(buttonId, false, null);
							} catch(e) {
								this.appendToLog('onButtonPress', e + '\n\nby execCommand(' + buttonId + ');', 'error');
							}
						} else {
							this.outdentSelectedListElements(parentElement, range);
						}
					}
				} else if (tableCell) {
					var previousCell = tableCell.previousSibling ? tableCell.previousSibling : (tableCell.parentNode.previousSibling ? tableCell.parentNode.previousSibling.lastChild : null);
					if (!previousCell) {
						var table = tableCell.parentNode.parentNode.parentNode;
						var tablePart = tableCell.parentNode.parentNode.nodeName.toLowerCase();
						switch (tablePart) {
							case "tbody":
								if (table.tHead) {
									previousCell = table.tHead.rows[table.tHead.rows.length-1].cells[table.tHead.rows[table.tHead.rows.length-1].cells.length-1];
									break;
								}
							case "thead":
								if (table.tFoot) {
									previousCell = table.tFoot.rows[table.tFoot.rows.length-1].cells[table.tFoot.rows[table.tFoot.rows.length-1].cells.length-1];
									break;
								}
							case "tfoot":
								previousCell = table.tBodies[table.tBodies.length-1].rows[table.tBodies[table.tBodies.length-1].rows.length-1].cells[table.tBodies[table.tBodies.length-1].rows[table.tBodies[table.tBodies.length-1].rows.length-1].cells.length-1];
						}
					}
					if (previousCell) {
						if (Ext.isOpera && !previousCell.hasChildNodes()) {
							previousCell.appendChild(this.editor.document.createElement('br'));
						}
						this.editor.getSelection().selectNodeContents(previousCell, true);
					}
				} else  if (this.useBlockquote) {
					try {
						this.editor.getSelection().execCommand(buttonId, false, null);
					} catch(e) {
						this.appendToLog('onButtonPress', e + '\n\nby execCommand(' + buttonId + ');', 'error');
					}
				} else if (this.isAllowedBlockElement("div")) {
					for (var i = blockAncestors.length; --i >= 0;) {
						if (HTMLArea.DOM.hasClass(blockAncestors[i], this.useClass.Indent)) {
							var bookmark = this.editor.getBookMark().get(range);
							var newBlock = this.wrapSelectionInBlockElement('div', false, blockAncestors[i]);
								// If not directly under the div, we need to backtrack
							if (newBlock.parentNode !== blockAncestors[i]) {
								var parent = newBlock.parentNode;
								this.editor.getDomNode().removeMarkup(newBlock);
								while (parent.parentNode !== blockAncestors[i]) {
									parent = parent.parentNode;
								}
								blockAncestors[i].insertBefore(newBlock, parent);
								newBlock.appendChild(parent);
							}
							newBlock.className = blockAncestors[i].className;
							HTMLArea.DOM.removeClass(newBlock, this.useClass.Indent);
							if (!newBlock.previousSibling) {
								while (newBlock.hasChildNodes()) {
									if (newBlock.firstChild.nodeType === HTMLArea.DOM.ELEMENT_NODE) {
										newBlock.firstChild.className = newBlock.className;
									}
									blockAncestors[i].parentNode.insertBefore(newBlock.firstChild, blockAncestors[i]);
								}
							} else if (!newBlock.nextSibling) {
								if (blockAncestors[i].nextSibling) {
									while (newBlock.hasChildNodes()) {
										if (newBlock.firstChild.nodeType === HTMLArea.DOM.ELEMENT_NODE) {
											newBlock.lastChild.className = newBlock.className;
										}
										blockAncestors[i].parentNode.insertBefore(newBlock.lastChild, blockAncestors[i].nextSibling);
									}
								} else {
									while (newBlock.hasChildNodes()) {
										if (newBlock.firstChild.nodeType === HTMLArea.DOM.ELEMENT_NODE) {
											newBlock.firstChild.className = newBlock.className;
										}
										blockAncestors[i].parentNode.appendChild(newBlock.firstChild);
									}
								}
							} else {
								var clone = blockAncestors[i].cloneNode(false);
								if (blockAncestors[i].nextSibling) {
									blockAncestors[i].parentNode.insertBefore(clone, blockAncestors[i].nextSibling);
								} else {
									blockAncestors[i].parentNode.appendChild(clone);
								}
								while (newBlock.nextSibling) {
									clone.appendChild(newBlock.nextSibling);
								}
								while (newBlock.hasChildNodes()) {
									if (newBlock.firstChild.nodeType === HTMLArea.DOM.ELEMENT_NODE) {
										newBlock.firstChild.className = newBlock.className;
									}
									blockAncestors[i].parentNode.insertBefore(newBlock.firstChild, clone);
								}
							}
							blockAncestors[i].removeChild(newBlock);
							if (!blockAncestors[i].hasChildNodes()) {
								blockAncestors[i].parentNode.removeChild(blockAncestors[i]);
							}
							this.editor.getSelection().selectRange(this.editor.getBookMark().moveTo(bookmark));
							break;
						}
					}
				} else {
					this.addClassOnBlockElements(buttonId);
				}
				break;
			case "InsertParagraphBefore" :
			case "InsertParagraphAfter"  :
				this.insertParagraph(buttonId === "InsertParagraphAfter");
				break;
			case "Blockquote" :
				var commandState = false;
				for (var i = blockAncestors.length; --i >= 0;) {
					if (/^blockquote$/i.test(blockAncestors[i].nodeName)) {
						commandState = true;
						this.editor.getDomNode().removeMarkup(blockAncestors[i]);
						break;
					}
				}
				if (!commandState) {
					var bookmark = this.editor.getBookMark().get(range);
					var newBlock = this.wrapSelectionInBlockElement('blockquote', className, null, true);
					this.editor.getSelection().selectRange(this.editor.getBookMark().moveTo(bookmark));
				}
				break;
			case 'address':
			case 'article':
			case 'aside':
			case 'div':
			case 'footer':
			case 'header':
			case 'nav':
			case 'section':
				var bookmark = this.editor.getBookMark().get(range);
				var newBlock = this.wrapSelectionInBlockElement(buttonId, className, null, true);
				this.editor.getSelection().selectRange(this.editor.getBookMark().moveTo(bookmark));
				break;
			case "JustifyLeft"   :
			case "JustifyCenter" :
			case "JustifyRight"  :
			case "JustifyFull"   :
				if (this.useAlignAttribute) {
					try {
						this.editor.getSelection().execCommand(buttonId, false, null);
					} catch(e) {
						this.appendToLog('onButtonPress', e + '\n\nby execCommand(' + buttonId + ');', 'error');
					}
				} else {
					this.addClassOnBlockElements(buttonId);
				}
				break;
			case "InsertOrderedList":
			case "InsertUnorderedList":
				this.insertList(buttonId, parentElement);
				break;
			case "InsertHorizontalRule":
				this.insertHorizontalRule();
				break;
			case "none" :
				if (this.isAllowedBlockElement(parentElement.nodeName)) {
					this.editor.getDomNode().removeMarkup(parentElement);
				}
				break;
			default	:
				break;
		}
		return false;
	},
	/*
	 * This function wraps the block elements intersecting the current selection in a block element of the given type
	 *
	 * @param	string		blockName: the type of element to be used as wrapping block
	 * @param	string		useClass: a class to be assigned to the wrapping block
	 * @param	object		withinBlock: only elements contained in this block will be wrapped
	 * @param	boolean		keepValid: make only valid wraps (working wraps may produce temporary invalid hierarchies)
	 *
	 * @return	object		the wrapping block
	 */
	wrapSelectionInBlockElement: function (blockName, useClass, withinBlock, keepValid) {
		var endBlocks = this.editor.getSelection().getEndBlocks();
		var startAncestors = HTMLArea.DOM.getBlockAncestors(endBlocks.start, withinBlock);
		var endAncestors = HTMLArea.DOM.getBlockAncestors(endBlocks.end, withinBlock);
		var i = 0;
		while (i < startAncestors.length && i < endAncestors.length && startAncestors[i] === endAncestors[i]) {
			++i;
		}
		
		if ((endBlocks.start === endBlocks.end && /^(body)$/i.test(endBlocks.start.nodeName)) || !startAncestors[i] || !endAncestors[i]) {
			--i;
		}
		if (keepValid) {
			if (endBlocks.start === endBlocks.end) {
				while (i && /^(thead|tbody|tfoot|tr|dt)$/i.test(startAncestors[i].nodeName)) {
					--i;
				}
			} else {
				while (i && (/^(thead|tbody|tfoot|tr|td|li|dd|dt)$/i.test(startAncestors[i].nodeName) || /^(thead|tbody|tfoot|tr|td|li|dd|dt)$/i.test(endAncestors[i].nodeName))) {
					--i;
				}
			}
		}
		var blockElement = this.editor.document.createElement(blockName);
		if (useClass) {
			HTMLArea.DOM.addClass(blockElement, useClass);
		}
		var contextElement = endAncestors[0];
		if (i) {
			contextElement = endAncestors[i-1];
		}
		var nextElement = endAncestors[i].nextSibling;
		var block = startAncestors[i], sibling;
		if ((!/^(body|td|th|li|dd)$/i.test(block.nodeName) || /^(ol|ul|dl)$/i.test(blockName)) && block != withinBlock) {
			while (block && block != nextElement) {
				sibling = block.nextSibling;
				blockElement.appendChild(block);
				block = sibling;
			}
			if (nextElement) {
				blockElement = nextElement.parentNode.insertBefore(blockElement, nextElement);
			} else {
				blockElement = contextElement.appendChild(blockElement);
			}
		} else {
			contextElement = block;
			block = block.firstChild;
			while (block) {
				sibling = block.nextSibling;
				blockElement.appendChild(block);
				block = sibling;
			}
			blockElement = contextElement.appendChild(blockElement);
		}
			// Things go wrong in some browsers when the node is empty
		if (Ext.isWebKit && !blockElement.hasChildNodes()) {
			blockElement = blockElement.appendChild(this.editor.document.createElement('br'));
		}
		return blockElement;
	},
	/*
	 * This function adds a class attribute on blocks sibling of the block containing the start container of the selection
	 */
	addClassOnBlockElements: function (buttonId, className) {
		var endBlocks = this.editor.getSelection().getEndBlocks();
		var startAncestors = HTMLArea.DOM.getBlockAncestors(endBlocks.start);
		var endAncestors = HTMLArea.DOM.getBlockAncestors(endBlocks.end);
		var index = 0;
		while (index < startAncestors.length && index < endAncestors.length && startAncestors[index] === endAncestors[index]) {
			++index;
		}
		if (endBlocks.start === endBlocks.end) {
			--index;
		}
		if (!/^(body)$/i.test(startAncestors[index].nodeName)) {
			for (var block = startAncestors[index]; block; block = block.nextSibling) {
				if (HTMLArea.DOM.isBlockElement(block)) {
					switch (buttonId) {
						case "Indent" :
							if (!HTMLArea.DOM.hasClass(block, this.useClass[buttonId])) {
								HTMLArea.DOM.addClass(block, this.useClass[buttonId]);
							}
							break;
						case "Outdent" :
							if (HTMLArea.DOM.hasClass(block, this.useClass["Indent"])) {
								HTMLArea.DOM.removeClass(block, this.useClass["Indent"]);
							}
							break;
						case "JustifyLeft"   :
						case "JustifyCenter" :
						case "JustifyRight"  :
						case "JustifyFull"   :
							this.toggleAlignmentClass(block, buttonId);
							break;
						default :
							if (this.standardBlockElements.test(buttonId.toLowerCase()) && buttonId.toLowerCase() == block.nodeName.toLowerCase()) {
								this.cleanClasses(block);
								if (className) {
									HTMLArea.DOM.addClass(block, className);
								}
							}
							break;
					}
				}
				if (block == endAncestors[index]) {
					break;
				}
			}
		}
	},
	/*
	 * This function toggles the alignment class on the given block
	 */
	toggleAlignmentClass: function (block, buttonId) {
		for (var alignmentButtonId in this.useClass) {
			if (this.useClass.hasOwnProperty(alignmentButtonId) && alignmentButtonId !== "Indent") {
				if (HTMLArea.DOM.hasClass(block, this.useClass[alignmentButtonId])) {
					HTMLArea.DOM.removeClass(block, this.useClass[alignmentButtonId]);
				} else if (alignmentButtonId === buttonId) {
					HTMLArea.DOM.addClass(block, this.useClass[alignmentButtonId]);
				}
			}
		}
		if (/^div$/i.test(block.nodeName) && !HTMLArea.DOM.hasAllowedAttributes(block, this.allowedAttributes)) {
			this.editor.getDomNode().removeMarkup(block);
		}
	},

	insertList: function (buttonId, parentElement) {
		if (/^(dd)$/i.test(parentElement.nodeName)) {
			var list = parentElement.appendChild(this.editor.document.createElement((buttonId === 'OrderedList') ? 'ol' : 'ul'));
			var first = list.appendChild(this.editor.document.createElement('li'));
			first.innerHTML = '<br />';
			this.editor.getSelection().selectNodeContents(first, true);
		} else {
				// parentElement may be removed by following command
			var parentNode = parentElement.parentNode;
			try {
				this.editor.getSelection().execCommand(buttonId, false, null);
			} catch(e) {
				this.appendToLog('onButtonPress', e + '\n\nby execCommand(' + buttonId + ');', 'error');
			}
			if (Ext.isWebKit) {
				this.editor.getDomNode().cleanAppleStyleSpans(parentNode);
			}
		}
	},
	/*
	 * Indent selected list elements
	 */
	indentSelectedListElements: function (list, range) {
		var bookmark = this.editor.getBookMark().get(range);
			// The selected elements are wrapped into a list element
		var indentedList = this.wrapSelectionInBlockElement(list.nodeName.toLowerCase(), null, list);
			// which breaks the range
		var range = this.editor.getBookMark().moveTo(bookmark);
		bookmark = this.editor.getBookMark().get(range);
		
			// Check if the last element has children. If so, outdent those that do not intersect the selection
		var last = indentedList.lastChild.lastChild;
		if (last && /^(ol|ul)$/i.test(last.nodeName)) {
			var child = last.firstChild, next;
			while (child) {
				next = child.nextSibling;
				if (!HTMLArea.DOM.rangeIntersectsNode(range, child)) {
					indentedList.appendChild(child);
				}
				child = next;
			}
			if (!last.hasChildNodes()) {
				HTMLArea.DOM.removeFromParent(last);
			}
		}
		if (indentedList.previousSibling && indentedList.previousSibling.hasChildNodes()) {
				// Indenting some elements not including the first one
			if (/^(ol|ul)$/i.test(indentedList.previousSibling.lastChild.nodeName)) {
					// Some indented elements exist just above our selection
					// Moving to regroup with these elements
				while (indentedList.hasChildNodes()) {
					indentedList.previousSibling.lastChild.appendChild(indentedList.firstChild);
				}
				list.removeChild(indentedList);
			} else {
				indentedList = indentedList.previousSibling.appendChild(indentedList);
			}
		} else {
				// Indenting the first element and possibly some more
			var first = this.editor.document.createElement("li");
			first.innerHTML = "&nbsp;";
			list.insertBefore(first, indentedList);
			indentedList = first.appendChild(indentedList);
		}
		this.editor.getSelection().selectRange(this.editor.getBookMark().moveTo(bookmark));
	},
	/*
	 * Outdent selected list elements
	 */
	outdentSelectedListElements: function (list, range) {
			// We wrap the selected li elements and thereafter move them one level up
		var bookmark = this.editor.getBookMark().get(range);
		var wrappedList = this.wrapSelectionInBlockElement(list.nodeName.toLowerCase(), null, list);
			// which breaks the range
		var range = this.editor.getBookMark().moveTo(bookmark);
		bookmark = this.editor.getBookMark().get(range);
		
		if (!wrappedList.previousSibling) {
				// Outdenting the first element(s) of an indented list
			var next = list.parentNode.nextSibling;
			var last = wrappedList.lastChild;
			while (wrappedList.hasChildNodes()) {
				if (next) {
					list.parentNode.parentNode.insertBefore(wrappedList.firstChild, next);
				} else {
					list.parentNode.parentNode.appendChild(wrappedList.firstChild);
				}
			}
			list.removeChild(wrappedList);
			last.appendChild(list);
		} else if (!wrappedList.nextSibling) {
				// Outdenting the last element(s) of the list
				// This will break the gecko bookmark
			this.editor.getBookMark().moveTo(bookmark);
			while (wrappedList.hasChildNodes()) {
				if (list.parentNode.nextSibling) {
					list.parentNode.parentNode.insertBefore(wrappedList.firstChild, list.parentNode.nextSibling);
				} else {
					list.parentNode.parentNode.appendChild(wrappedList.firstChild);
				}
			}
			list.removeChild(wrappedList);
			this.editor.getSelection().selectNodeContents(list.parentNode.nextSibling, true);
			bookmark = this.editor.getBookMark().get(this.editor.getSelection().createRange());
		} else {
				// Outdenting the middle of a list
			var next = list.parentNode.nextSibling;
			var last = wrappedList.lastChild;
			var sibling = wrappedList.nextSibling;
			while (wrappedList.hasChildNodes()) {
				if (next) {
					list.parentNode.parentNode.insertBefore(wrappedList.firstChild, next);
				} else {
					list.parentNode.parentNode.appendChild(wrappedList.firstChild);
				}
			}
			while (sibling) {
				wrappedList.appendChild(sibling);
				sibling = sibling.nextSibling;
			}
			last.appendChild(wrappedList);
		}
			// Remove the list if all its elements have been moved up
		if (!list.hasChildNodes()) {
			list.parentNode.removeChild(list);
		} 
		this.editor.getSelection().selectRange(this.editor.getBookMark().moveTo(bookmark));
	},
	/*
	 * Make XHTML-compliant nested list
	 * We need this for Opera
	 */
	makeNestedList: function (el) {
		var previous;
		for (var i = el.firstChild; i; i = i.nextSibling) {
			if (/^li$/i.test(i.nodeName)) {
				for (var j = i.firstChild; j; j = j.nextSibling) {
					if (/^(ol|ul)$/i.test(j.nodeName)) {
						this.makeNestedList(j);
					}
				}
			} else if (/^(ol|ul)$/i.test(i.nodeName)) {
				previous = i.previousSibling;
				this.indentedList = i.cloneNode(true);
				if (!previous) {
					previous = el.insertBefore(this.editor.document.createElement('li'), i);
					this.indentedList = previous.appendChild(this.indentedList);
				} else {
					this.indentedList = previous.appendChild(this.indentedList);
				}
				HTMLArea.DOM.removeFromParent(i);
				this.makeNestedList(el);
				break;
			}
		}
	},
	/*
	 * Insert a paragraph
	 */
	insertParagraph: function (after) {
		var endBlocks = this.editor.getSelection().getEndBlocks();
		var ancestors = after ? HTMLArea.DOM.getBlockAncestors(endBlocks.end) : HTMLArea.DOM.getBlockAncestors(endBlocks.start);
		var endElement = ancestors[ancestors.length-1];
		for (var i = ancestors.length; --i >= 0;) {
			if (/^(table|div|ul|ol|dl|blockquote|address|pre)$/i.test(ancestors[i].nodeName) && !/^(li)$/i.test(ancestors[i].parentNode.nodeName)) {
				endElement = ancestors[i];
				break;
			}
		}
		if (endElement) {
			var parent = endElement.parentNode;
			var paragraph = this.editor.document.createElement("p");
			if (Ext.isIE) {
				paragraph.innerHTML = "&nbsp";
			} else {
				paragraph.appendChild(this.editor.document.createElement("br"));
			}
			if (after && !endElement.nextSibling) {
				parent.appendChild(paragraph);
			} else {
				parent.insertBefore(paragraph, after ? endElement.nextSibling : endElement);
			}
			this.editor.getSelection().selectNodeContents(paragraph, true);
		}
	},
	/*
	 * Insert horizontal line
	 */
	insertHorizontalRule: function () {
		this.editor.getSelection().execCommand('InsertHorizontalRule');
			// Apply enterParagraphs rule
		if (!Ext.isIE && !Ext.isOpera && !this.editor.config.disableEnterParagraphs) {
			var range = this.editor.getSelection().createRange();
			var startContainer = range.startContainer;
			if (/^body$/i.test(startContainer.nodeName)) {
				startContainer.normalize();
				var ruler = startContainer.childNodes[range.startOffset-1];
				if (ruler.nextSibling) {
					if (ruler.nextSibling.nodeType === HTMLArea.DOM.TEXT_NODE) {
						if (/\S/.test(ruler.nextSibling.textContent)) {
							var paragraph = this.editor.document.createElement('p');
							paragraph = startContainer.appendChild(paragraph);
							paragraph = startContainer.insertBefore(paragraph, ruler.nextSibling);
							paragraph.appendChild(ruler.nextSibling);
						} else {
							HTMLArea.DOM.removeFromParent(ruler.nextSibling);
							var paragraph = ruler.nextSibling;
						}
					} else {
						var paragraph = ruler.nextSibling;
					}
						// Cannot set the cursor on the hr element
					if (/^hr$/i.test(paragraph.nodeName)) {
						var inBetweenParagraph = this.editor.document.createElement('p');
						inBetweenParagraph.innerHTML = '<br />';
						paragraph = startContainer.insertBefore(inBetweenParagraph, paragraph);
					}
				} else {
					var paragraph = this.editor.document.createElement('p');
					if (Ext.isWebKit) {
						paragraph.innerHTML = '<br />';
					}
					paragraph = startContainer.appendChild(paragraph);
				}
				this.editor.getSelection().selectNodeContents(paragraph, true);
			}
		}
	},
	/*
	 * This function gets called when the plugin is generated
	 */
	onGenerate: function () {
			// Register the enter key handler for IE when the cursor is at the end of a dt or a dd element
		if (Ext.isIE) {
			this.editor.iframe.keyMap.addBinding({
				key: Ext.EventObject.ENTER,
				shift: false,
				handler: this.onKey,
				scope: this
			});
		}
	},
	/*
	 * This function gets called when the enter key was pressed in IE
	 * It will process the enter key for IE when the cursor is at the end of a dt or a dd element
	 *
	 * @param	string		key: the key code
	 * @param	object		event: the Ext event object (keydown)
	 *
	 * @return	boolean		false, if the event was taken care of
	 */
	onKey: function (key, event) {
		if (this.editor.getSelection().isEmpty()) {
			var range = this.editor.getSelection().createRange();
			var parentElement = this.editor.getSelection().getParentElement();
			while (parentElement && !HTMLArea.DOM.isBlockElement(parentElement)) {
				parentElement = parentElement.parentNode;
			}
			if (/^(dt|dd)$/i.test(parentElement.nodeName)) {
				var nodeRange = this.editor.getSelection().createRange();
				nodeRange.moveToElementText(parentElement);
				range.setEndPoint("EndToEnd", nodeRange);
				if (!range.text || range.text == "\x20") {
					var item = parentElement.parentNode.insertBefore(this.editor.document.createElement((parentElement.nodeName.toLowerCase() === "dt") ? "dd" : "dt"), parentElement.nextSibling);
					item.innerHTML = "\x20";
					this.editor.getSelection().selectNodeContents(item, true);
					event.stopEvent();
					return false;
				}
			} else if (/^(li)$/i.test(parentElement.nodeName)
					&& !parentElement.innerText
					&& parentElement.parentNode.parentNode
					&& /^(dd|td|th)$/i.test(parentElement.parentNode.parentNode.nodeName)) {
				var item = parentElement.parentNode.parentNode.insertBefore(this.editor.document.createTextNode("\x20"), parentElement.parentNode.nextSibling);
				this.editor.getSelection().selectNodeContents(parentElement.parentNode.parentNode, false);
				parentElement.parentNode.removeChild(parentElement);
				event.stopEvent();
				return false;
			}
		}
		return true;
	},
	/*
	 * This function removes any disallowed class or mutually exclusive classes from the class attribute of the node
	 */
	cleanClasses: function (node) {
		var classNames = node.className.trim().split(" ");
		var nodeName = node.nodeName.toLowerCase();
		for (var i = classNames.length; --i >= 0;) {
			if (!HTMLArea.reservedClassNames.test(classNames[i])) {
				if (this.tags && this.tags[nodeName] && this.tags[nodeName].allowedClasses) {
					if (!this.tags[nodeName].allowedClasses.test(classNames[i])) {
						HTMLArea.DOM.removeClass(node, classNames[i]);
					}
				} else if (this.tags && this.tags.all && this.tags.all.allowedClasses) {
					if (!this.tags.all.allowedClasses.test(classNames[i])) {
						HTMLArea.DOM.removeClass(node, classNames[i]);
					}
				}
				if (this.formatBlockItems[nodeName] && this.formatBlockItems[nodeName].classList && this.formatBlockItems[nodeName].classList.test(classNames[i])) {
					HTMLArea.DOM.removeClass(node, classNames[i]);
				}
			}
		}
	},
	/*
	 * This function gets called when the toolbar is updated
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors, endPointsInSameBlock) {
		if (mode === 'wysiwyg' && this.editor.isEditable()) {
			var statusBarSelection = this.editor.statusBar ? this.editor.statusBar.getSelection() : null;
			var parentElement = statusBarSelection ? statusBarSelection : this.editor.getSelection().getParentElement();
			if (!/^body$/i.test(parentElement.nodeName)) {
				while (parentElement && !HTMLArea.DOM.isBlockElement(parentElement) || /^li$/i.test(parentElement.nodeName)) {
					parentElement = parentElement.parentNode;
				}
				var blockAncestors = HTMLArea.DOM.getBlockAncestors(parentElement);
				var endBlocks = this.editor.getSelection().getEndBlocks();
				var startAncestors = HTMLArea.DOM.getBlockAncestors(endBlocks.start);
				var endAncestors = HTMLArea.DOM.getBlockAncestors(endBlocks.end);
				var index = 0;
				while (index < startAncestors.length && index < endAncestors.length && startAncestors[index] === endAncestors[index]) {
					++index;
				}
				if (endBlocks.start === endBlocks.end || !startAncestors[index]) {
					--index;
				}
				var commandState = false;
				switch (button.itemId) {
					case 'FormatBlock':
						this.updateDropDown(button, blockAncestors[blockAncestors.length-1], startAncestors[index]);
						break;
					case "Outdent" :
						if (this.useBlockquote) {
							for (var j = blockAncestors.length; --j >= 0;) {
								if (/^blockquote$/i.test(blockAncestors[j].nodeName)) {
									commandState = true;
									break;
								}
							}
						} else if (/^(ol|ul)$/i.test(parentElement.nodeName)) {
							commandState = true;
						} else {
							for (var j = blockAncestors.length; --j >= 0;) {
								if (HTMLArea.DOM.hasClass(blockAncestors[j], this.useClass.Indent) || /^(td|th)$/i.test(blockAncestors[j].nodeName)) {
									commandState = true;
									break;
								}
							}
						}
						button.setDisabled(!commandState);
						break;
					case "Indent" :
						break;
					case "InsertParagraphBefore" :
					case "InsertParagraphAfter"  :
						button.setDisabled(/^(body)$/i.test(startAncestors[index].nodeName));
						break;
					case "Blockquote" :
						for (var j = blockAncestors.length; --j >= 0;) {
							if (/^blockquote$/i.test(blockAncestors[j].nodeName)) {
								commandState = true;
								break;
							}
						}
						button.setInactive(!commandState);
						break;
					case "JustifyLeft"   :
					case "JustifyCenter" :
					case "JustifyRight"  :
					case "JustifyFull"   :
						if (this.useAlignAttribute) {
							try {
								commandState = this.editor.document.queryCommandState(button.itemId);
							} catch(e) {
								commandState = false;
							}
						} else {
							if (/^(body)$/i.test(startAncestors[index].nodeName)) {
								button.setDisabled(true);
							} else {
								button.setDisabled(false);
								commandState = true;
								for (var block = startAncestors[index]; block; block = block.nextSibling) {
									commandState = commandState && HTMLArea.DOM.hasClass(block, this.useClass[button.itemId]);
									if (block == endAncestors[index]) {
										break;
									}
								}
							}
						}
						button.setInactive(!commandState);
						break;
					case "InsertOrderedList":
					case "InsertUnorderedList":
						try {
							commandState = this.editor.document.queryCommandState(button.itemId);
						} catch(e) {
							commandState = false;
						}
						button.setInactive(!commandState);
						break;
					default	:
						break;
				}
			} else {
					// The selection is not contained in any block
				switch (button.itemId) {
					case 'FormatBlock':
						this.updateDropDown(button);
						break;
					case 'Outdent' :
						button.setDisabled(true);
						break;
					case 'Indent' :
						break;
					case 'InsertParagraphBefore' :
					case 'InsertParagraphAfter'  :
						button.setDisabled(true);
						break;
					case 'Blockquote' :
						button.setInactive(true);
						break;
					case 'JustifyLeft'   :
					case 'JustifyCenter' :
					case 'JustifyRight'  :
					case 'JustifyFull'   :
						button.setInactive(true);
						button.setDisabled(true);
						break;
					case 'InsertOrderedList':
					case 'InsertUnorderedList':
						button.setInactive(true);
						break;
					default	:
						break;
				}
			}
		}
	},
	/*
	 * This function updates the drop-down list of block elements
	 */
	updateDropDown: function(select, deepestBlockAncestor, startAncestor) {
		var store = select.getStore();
		store.removeAt(0);
		var index = -1;
		if (deepestBlockAncestor) {
			var nodeName = deepestBlockAncestor.nodeName.toLowerCase();
				// Could be a custom item ...
			index = store.findBy(function(record, id) {
				var item = this.formatBlockItems[record.get('value')];
				return item && item.tagName == nodeName && item.addClass && HTMLArea.DOM.hasClass(deepestBlockAncestor, item.addClass);
			}, this);
			if (index == -1) {
					// ... or a standard one
				index = store.findExact('value', nodeName);
			}
		}
		if (index == -1) {
			store.insert(0, new store.recordType({
				text: this.localize('No block'),
				value: 'none'
			}));
			select.setValue('none');
		} else {
			store.insert(0, new store.recordType({
				text: this.localize('Remove block'),
				value: 'none'
			}));
			select.setValue(store.getAt(index+1).get('value'));
		}
	},
	/*
	* This function handles the hotkey events registered on elements of the dropdown list
	*/	
	onHotKey: function(editor, key) {
		var blockElement;
		var hotKeyConfiguration = this.getHotKeyConfiguration(key);
		if (hotKeyConfiguration) {
			var blockElement = hotKeyConfiguration.element;
		}
		if (blockElement && this.isAllowedBlockElement(blockElement)) {
			this.applyBlockElement(this.translateHotKey(key), blockElement);
			return false;
		}
		return true;
	}
});

/***************************************************************
*  Copyright notice
*
* (c) 2007-2011 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This script is a modified version of a script published under the htmlArea License.
*  A copy of the htmlArea License may be found in the textfile HTMLAREA_LICENSE.txt.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * Block Style Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.BlockStyle = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		this.cssArray = {};
		this.classesUrl = this.editorConfiguration.classesUrl;
		this.pageTSconfiguration = this.editorConfiguration.buttons.blockstyle;
		this.tags = (this.pageTSconfiguration && this.pageTSconfiguration.tags) ? this.pageTSconfiguration.tags : {};
			// classesTag is DEPRECATED as of TYPO3 4.6 and will be removed#in TYPO3 4.8
		if (typeof(this.editorConfiguration.classesTag) !== "undefined") {
			if (this.editorConfiguration.classesTag.div) {
				if (!this.tags.div) {
					this.tags.div = new Object();
				}
				if (!this.tags.div.allowedClasses) {
					this.tags.div.allowedClasses = this.editorConfiguration.classesTag.div;
				}
			}
			if (this.editorConfiguration.classesTag.td) {
				if (!this.tags.td) {
					this.tags.td = new Object();
				}
				if (!this.tags.td.allowedClasses) {
					this.tags.td.allowedClasses = this.editorConfiguration.classesTag.td;
				}
			}
			if (this.editorConfiguration.classesTag.table) {
				if (!this.tags.table) {
					this.tags.table = new Object();
				}
				if (!this.tags.table.allowedClasses) {
					this.tags.table.allowedClasses = this.editorConfiguration.classesTag.table;
				}
			}
		}
		var allowedClasses;
		for (var tagName in this.tags) {
			if (this.tags.hasOwnProperty(tagName)) {
				if (this.tags[tagName].allowedClasses) {
					allowedClasses = this.tags[tagName].allowedClasses.trim().split(",");
					for (var cssClass in allowedClasses) {
						if (allowedClasses.hasOwnProperty(cssClass)) {
							allowedClasses[cssClass] = allowedClasses[cssClass].trim().replace(/\*/g, ".*");
						}
					}
					this.tags[tagName].allowedClasses = new RegExp( "^(" + allowedClasses.join("|") + ")$", "i");
				}
			}
		}
			// Property this.editorConfiguration.showTagFreeClasses is deprecated as of TYPO3 4.6 and will be removed in TYPO3 4.8
		this.showTagFreeClasses = (this.pageTSconfiguration ? this.pageTSconfiguration.showTagFreeClasses : false) || this.editorConfiguration.showTagFreeClasses;
		this.prefixLabelWithClassName = this.pageTSconfiguration ? this.pageTSconfiguration.prefixLabelWithClassName : false;
		this.postfixLabelWithClassName = this.pageTSconfiguration ? this.pageTSconfiguration.postfixLabelWithClassName : false;
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '3.0',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: this.localize('Technische Universitat Ilmenau'),
			sponsorUrl	: 'http://www.tu-ilmenau.de/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the drop-down list
		 */
		var dropDownId = 'BlockStyle';
		var fieldLabel = this.pageTSconfiguration ? this.pageTSconfiguration.fieldLabel : '';
		if (Ext.isEmpty(fieldLabel) && this.isButtonInToolbar('I[Block style label]')) {
			fieldLabel = this.localize('Block style label');
		}
		var dropDownConfiguration = {
			id: dropDownId,
			tooltip: this.localize(dropDownId + '-Tooltip'),
			fieldLabel: fieldLabel,
			options: [[this.localize('No style'), 'none']],
			action: 'onChange',
			storeFields: [ { name: 'text'}, { name: 'value'}, { name: 'style'} ],
			tpl: '<tpl for="."><div ext:qtip="{value}" style="{style}text-align:left;font-size:11px;" class="x-combo-list-item">{text}</div></tpl>'
		};
		if (this.pageTSconfiguration) {
			if (this.pageTSconfiguration.width) {
				dropDownConfiguration.width = parseInt(this.pageTSconfiguration.width, 10);
			}
			if (this.pageTSconfiguration.listWidth) {
				dropDownConfiguration.listWidth = parseInt(this.pageTSconfiguration.listWidth, 10);
			}
			if (this.pageTSconfiguration.maxHeight) {
				dropDownConfiguration.maxHeight = parseInt(this.pageTSconfiguration.maxHeight, 10);
			}
		}
		this.registerDropDown(dropDownConfiguration);
		return true;
	},
	/*
	 * This handler gets called when some block style was selected in the drop-down list
	 */
	onChange: function (editor, combo, record, index) {
		var className = combo.getValue();
		this.editor.focus();
		var blocks = this.editor.getSelection().getElements();
		for (var k = 0; k < blocks.length; ++k) {
			var parent = blocks[k];
			while (parent && !HTMLArea.DOM.isBlockElement(parent) && !/^(img)$/i.test(parent.nodeName)) {
				parent = parent.parentNode;
			}
			if (!k) {
				var tagName = parent.tagName.toLowerCase();
			}
			if (parent.tagName.toLowerCase() == tagName) {
				this.applyClassChange(parent, className);
			}
		}
	},
	/*
	 * This function applies the class change to the node
	 */
	applyClassChange: function (node, className) {
		if (className == "none") {
			var classNames = node.className.trim().split(" ");
			for (var i = classNames.length; --i >= 0;) {
				if (!HTMLArea.reservedClassNames.test(classNames[i])) {
					HTMLArea.DOM.removeClass(node, classNames[i]);
					if (node.nodeName.toLowerCase() === "table" && this.getPluginInstance('TableOperations')) {
						this.getPluginInstance('TableOperations').removeAlternatingClasses(node, classNames[i]);
						this.getPluginInstance('TableOperations').removeCountingClasses(node, classNames[i]);
					}
					break;
				}
			}
		} else {
			var nodeName = node.nodeName.toLowerCase();
			if (this.tags && this.tags[nodeName] && this.tags[nodeName].allowedClasses) {
				if (this.tags[nodeName].allowedClasses.test(className)) {
					HTMLArea.DOM.addClass(node, className);
				}
			} else if (this.tags && this.tags.all && this.tags.all.allowedClasses) {
				if (this.tags.all.allowedClasses.test(className)) {
					HTMLArea.DOM.addClass(node, className);
				}
			} else {
				HTMLArea.DOM.addClass(node, className);
			}
			if (nodeName === "table" && this.getPluginInstance('TableOperations')) {
				this.getPluginInstance('TableOperations').reStyleTable(node);
			}
		}
	},
	/*
	 * This handler gets called when the editor is generated
	 */
	onGenerate: function () {
			// Monitor editor changing mode
		this.editor.iframe.mon(this.editor, 'HTMLAreaEventModeChange', this.onModeChange, this);
			// Create CSS Parser object
		this.blockStyles = new HTMLArea.CSS.Parser({
			prefixLabelWithClassName: this.prefixLabelWithClassName,
			postfixLabelWithClassName: this.postfixLabelWithClassName,
			showTagFreeClasses: this.showTagFreeClasses,
			tags: this.tags,
			editor: this.editor
		});
			// Disable the combo while initialization completes
		var dropDown = this.getButton('BlockStyle');
		if (dropDown) {
			dropDown.setDisabled(true);
		}
			// Monitor css parsing being completed
		this.editor.iframe.mon(this.blockStyles, 'HTMLAreaEventCssParsingComplete', this.onCssParsingComplete, this);
		this.blockStyles.initiateParsing();
	},
	/*
	 * This handler gets called when parsing of css classes is completed
	 */
	onCssParsingComplete: function () {
		if (this.blockStyles.isReady) {
			this.cssArray = this.blockStyles.getClasses();
			if (this.getEditorMode() === 'wysiwyg' && this.editor.isEditable()) {
				this.updateValue('BlockStyle');
			}
		}
	},
	/*
	 * This handler gets called when the toolbar is being updated
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors) {
		if (mode === 'wysiwyg' && this.editor.isEditable() && this.blockStyles.isReady) {
			this.updateValue(button.itemId);
		}
	},
	/*
	 * This handler gets called when the editor has changed its mode to "wysiwyg"
	 */
	onModeChange: function(mode) {
		if (mode === 'wysiwyg' && this.editor.isEditable()) {
			this.updateValue('BlockStyle');
		}
	},
	/*
	 * This function updates the current value of the dropdown list
	 */
	updateValue: function(dropDownId) {
		var dropDown = this.getButton(dropDownId);
		if (dropDown) {
			var classNames = new Array();
			var tagName = null;
			var statusBarSelection = this.editor.statusBar ? this.editor.statusBar.getSelection() : null;
			var parent = statusBarSelection ? statusBarSelection : this.editor.getSelection().getParentElement();
			while (parent && !HTMLArea.DOM.isBlockElement(parent) && !/^(img)$/i.test(parent.nodeName)) {
				parent = parent.parentNode;
			}
			if (parent) {
				tagName = parent.nodeName.toLowerCase();
				classNames = HTMLArea.DOM.getClassNames(parent);
			}
			if (tagName && tagName !== "body"){
				this.buildDropDownOptions(dropDown, tagName);
				this.setSelectedOption(dropDown, classNames);
			} else {
				this.initializeDropDown(dropDown);
				dropDown.setDisabled(true);
			}
		}
	},
	/*
	 * This function reinitializes the options of the dropdown
	 */
	initializeDropDown: function (dropDown) {
		var store = dropDown.getStore();
		store.removeAll(false);
		store.insert(0, new store.recordType({
			text: this.localize('No style'),
			value: 'none'
		}));
		dropDown.setValue('none');
	},
	/*
	 * This function builds the options to be displayed in the dropDown box
	 */
	buildDropDownOptions: function (dropDown, nodeName) {
		var store = dropDown.getStore();
		this.initializeDropDown(dropDown);
		if (this.blockStyles.isReady) {
			var allowedClasses = {};
			if (Ext.isDefined(this.cssArray[nodeName])) {
				allowedClasses = this.cssArray[nodeName];
			} else if (this.showTagFreeClasses && Ext.isDefined(this.cssArray['all'])) {
				allowedClasses = this.cssArray['all'];
			}
			Ext.iterate(allowedClasses, function (cssClass, value) {
				var style = null;
					// this.editor.config.disablePCexamples is deprecated as of TYPO3 4.6 and will be removed in TYPO 4.8
				if (!this.pageTSconfiguration.disableStyleOnOptionLabel && !this.editor.config.disablePCexamples) {
					if (HTMLArea.classesValues[cssClass] && !HTMLArea.classesNoShow[cssClass]) {
						style = HTMLArea.classesValues[cssClass];
					} else if (/-[0-9]+$/.test(cssClass) && HTMLArea.classesValues[RegExp.leftContext + '-'])  {
						style = HTMLArea.classesValues[RegExp.leftContext + '-'];
					}
				}
				store.add(new store.recordType({
					text: value,
					value: cssClass,
					style: style
				}));
			}, this);
		}
	},
	/*
	 * This function sets the selected option of the dropDown box
	 */
	setSelectedOption: function (dropDown, classNames, noUnknown, defaultClass) {
		var store = dropDown.getStore();
		dropDown.setValue('none');
		if (classNames.length) {
			var index = store.findExact('value', classNames[classNames.length-1]);
			if (index != -1) {
				dropDown.setValue(classNames[classNames.length-1]);
				if (!defaultClass) {
					store.getAt(0).set('text', this.localize('Remove style'));
				}
			}
			if (index == -1 && !noUnknown) {
				store.add(new store.recordType({
					text: this.localize('Unknown style'),
					value: classNames[classNames.length-1]
				}));
				index = store.getCount()-1;
				dropDown.setValue(classNames[classNames.length-1]);
				if (!defaultClass) {
					store.getAt(0).set('text', this.localize('Remove style'));
				}
			}
				// Remove already assigned classes from the dropDown box
			var classNamesString = ',' + classNames.join(',') + ',';
			store.each(function (option) {
				if (classNamesString.indexOf(',' + option.get('value') + ',') != -1) {
					store.removeAt(store.indexOf(option));
				}
				return true;
			});
		}
		dropDown.setDisabled(!store.getCount() || (store.getCount() == 1 && dropDown.getValue() == 'none'));
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2004 Bernhard Pfeifer novocaine@gmx.net
*  (c) 2004 systemconcept.de. Authored by Holger Hees based on HTMLArea XTD 1.5 (http://mosforge.net/projects/htmlarea3xtd/).
*  (c) 2005-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This script is a modified version of a script published under the htmlArea License.
*  A copy of the htmlArea License may be found in the textfile HTMLAREA_LICENSE.txt.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * Character Map Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.CharacterMap = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin : function(editor) {
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '4.0',
			developer	: 'Holger Hees, Bernhard Pfeifer, Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Holger Hees, Bernhard Pfeifer, Stanislas Rolland',
			sponsor		: 'System Concept GmbH, Bernhard Pfeifer, SJBR, BLE',
			sponsorUrl	: 'http://www.sjbr.ca/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the buttons
		 */
		for (var i = 0, n = this.buttons.length; i < n; ++i) {
			var button = this.buttons[i];
			buttonId = button[0];
			var buttonConfiguration = {
				id: buttonId,
				tooltip: this.localize(buttonId + '-Tooltip'),
				action: 'onButtonPress',
				context: button[1],
				dialog: false,
				iconCls: 'htmlarea-action-' + button[2]
			};
			this.registerButton(buttonConfiguration);
		}
		/*
		 * Localizing the maps
		 */
		Ext.iterate(this.maps, function (key, map, maps) {
			for (var i = map.length; --i >= 0;) {
				maps[key][i].push(this.localize(map[i][1]));
			}
		}, this);
		return true;
	 },
	/*
	 * The list of buttons added by this plugin
	 */
	buttons: [
		['InsertCharacter', null, 'character-insert-from-map'],
		['InsertSoftHyphen', null, 'soft-hyphen-insert']
	],
	/*
	 * Character maps
	 */
	maps: {
		general: [
			['&nbsp;', 'nbsp'],
			['&Agrave;', 'Agrave'],
			['&agrave;', 'agrave'],
			['&Aacute;', 'Aacute'],
			['&aacute;', 'aacute'],
			['&Acirc;', 'Acirc'],
			['&acirc;', 'acirc'],
			['&Atilde;', 'Atilde'],
			['&atilde;', 'atilde'],
			['&Auml;', 'Auml'],
			['&auml;', 'auml'],
			['&Aring;', 'Aring'],
			['&aring;', 'aring'],
			['&AElig;', 'AElig'],
			['&aelig;', 'aelig'],
			['&ordf;', 'ordf'],
			['&Ccedil;', 'Ccedil'],
			['&ccedil;', 'ccedil'],
			['&ETH;', 'ETH'],
			['&eth;', 'eth'],
			['&Egrave;', 'Egrave'],
			['&egrave;', 'egrave'],
			['&Eacute;', 'Eacute'],
			['&eacute;', 'eacute'],
			['&Ecirc;', 'Ecirc'],
			['&ecirc;', 'ecirc'],
			['&Euml;', 'Euml'],
			['&euml;', 'euml'],
			['&Igrave;', 'Igrave'],
			['&igrave;', 'igrave'],
			['&Iacute;', 'Iacute'],
			['&iacute;', 'iacute'],
			['&Icirc;', 'Icirc'],
			['&icirc;', 'icirc'],
			['&Iuml;', 'Iuml'],
			['&iuml;', 'iuml'],
			['&Ntilde;', 'Ntilde'],
			['&ntilde;', 'ntilde'],
			['&Ograve;', 'Ograve'],
			['&ograve;', 'ograve'],
			['&Oacute;', 'Oacute'],
			['&oacute;', 'oacute'],
			['&Ocirc;', 'Ocirc'],
			['&ocirc;', 'ocirc'],
			['&Otilde;', 'Otilde'],
			['&otilde;', 'otilde'],
			['&Ouml;', 'Ouml'],
			['&ouml;', 'ouml'],
			['&Oslash;', 'Oslash'],
			['&oslash;', 'oslash'],
			['&OElig;', 'OElig'],
			['&oelig;', 'oelig'],
			['&ordm;', 'ordm'],
			['&Scaron;', 'Scaron'],
			['&scaron;', 'scaron'],
			['&szlig;', 'szlig'],
			['&THORN;', 'THORN'],
			['&thorn;', 'thorn'],
			['&Ugrave;', 'Ugrave'],
			['&ugrave;', 'ugrave'],
			['&Uacute;', 'Uacute'],
			['&uacute;', 'uacute'],
			['&Ucirc;', 'Ucirc'],
			['&ucirc;', 'ucirc'],
			['&Uuml;', 'Uuml'],
			['&uuml;', 'uuml'],
			['&Yacute;', 'Yacute'],
			['&yacute;', 'yacute'],
			['&Yuml;', 'Yuml'],
			['&yuml;', 'yuml'],
			['&acute;', 'acute'],
			['&circ;', 'circ'],
			['&tilde;', 'tilde'],
			['&uml;', 'uml'],
			['&cedil;', 'cedil'],
			['&shy;', 'shy'],
			['&ndash;', 'ndash'],
			['&mdash;', 'mdash'],
			['&lsquo;', 'lsquo'],
			['&rsquo;', 'rsquo'],
			['&sbquo;', 'sbquo'],
			['&ldquo;', 'ldquo'],
			['&rdquo;', 'rdquo'],
			['&bdquo;', 'bdquo'],
			['&lsaquo;', 'lsaquo'],
			['&rsaquo;', 'rsaquo'],
			['&laquo;', 'laquo'],
			['&raquo;', 'raquo'],
			['&quot;', 'quot'],
			['&hellip;', 'hellip'],
			['&iquest;', 'iquest'],
			['&iexcl;', 'iexcl'],
			['&bull;', 'bull'],
			['&dagger;', 'dagger'],
			['&Dagger;', 'Dagger'],
			['&brvbar;', 'brvbar'],
			['&para;', 'para'],
			['&sect;', 'sect'],
			['&loz;', 'loz'],
			['&#064;', '#064'],
			['&copy;', 'copy'],
			['&reg;', 'reg'],
			['&trade;', 'trade'],
			['&curren;', 'curren'],
			['&cent;', 'cent'],
			['&euro;', 'euro'],
			['&pound;', 'pound'],
			['&yen;', 'yen'],
			['&emsp;', 'emsp'],
			['&ensp;', 'ensp'],
			['&thinsp;', 'thinsp'],
			['&zwj;', 'zwj'],
			['&zwnj;', 'zwnj']
		],
		mathematical: [
			['&minus;', 'minus'],
			['&plusmn;', 'plusmn'],
			['&times;', 'times'],
			['&divide;', 'divide'],
			['&radic;', 'radic'],
			['&sdot;', 'sdot'],
			['&otimes;', 'otimes'],
			['&lowast;', 'lowast'],
			['&ge;', 'ge'],
			['&le;', 'le'],
			['&ne;', 'ne'],
			['&asymp;', 'asymp'],
			['&sim;', 'sim'],
			['&prop;', 'prop'],
			['&deg;', 'deg'],
			['&prime;', 'prime'],
			['&Prime;', 'Prime'],
			['&micro;', 'micro'],
			['&ang;', 'ang'],
			['&perp;', 'perp'],
			['&permil;', 'permil'],
			['&frasl;', 'frasl'],
			['&frac14;', 'frac14'],
			['&frac12;', 'frac12'],
			['&frac34;', 'frac34'],
			['&sup1;', 'sup1'],
			['&sup2;', 'sup2'],
			['&sup3;', 'sup3'],
			['&not;', 'not'],
			['&and;', 'and'],
			['&or;', 'or'],
			['&there4;', 'there4'],
			['&cong;', 'cong'],
			['&isin;', 'isin'],
			['&ni;', 'ni'],
			['&notin;', 'notin'],
			['&sub;', 'sub'],
			['&sube;', 'sube'],
			['&nsub;', 'nsub'],
			['&sup;', 'sup'],
			['&supe;', 'supe'],
			['&cap;', 'cap'],
			['&cup;', 'cup'],
			['&oplus;', 'oplus'],
			['&nabla;', 'nabla'],
			['&empty;', 'empty'],
			['&equiv;', 'equiv'],
			['&sum;', 'sum'],
			['&prod;', 'prod'],
			['&weierp;', 'weierp'],
			['&exist;', 'exist'],
			['&forall;', 'forall'],
			['&infin;', 'infin'],
			['&alefsym;', 'alefsym'],
			['&real;', 'real'],
			['&image;', 'image'],
			['&fnof;', 'fnof'],
			['&int;', 'int'],
			['&part;', 'part'],
			['&Alpha;', 'Alpha'],
			['&alpha;', 'alpha'],
			['&Beta;', 'Beta'],
			['&beta;', 'beta'],
			['&Gamma;', 'Gamma'],
			['&gamma;', 'gamma'],
			['&Delta;', 'Delta'],
			['&delta;', 'delta'],
			['&Epsilon;', 'Epsilon'],
			['&epsilon;', 'epsilon'],
			['&Zeta;', 'Zeta'],
			['&zeta;', 'zeta'],
			['&Eta;', 'Eta'],
			['&eta;', 'eta'],
			['&Theta;', 'Theta'],
			['&theta;', 'theta'],
			['&thetasym;', 'thetasym'],
			['&Iota;', 'Iota'],
			['&iota;', 'iota'],
			['&Kappa;', 'Kappa'],
			['&kappa;', 'kappa'],
			['&Lambda;', 'Lambda'],
			['&lambda;', 'lambda'],
			['&Mu;', 'Mu'],
			['&mu;', 'mu'],
			['&Nu;', 'Nu'],
			['&nu;', 'nu'],
			['&Xi;', 'Xi'],
			['&xi;', 'xi'],
			['&Omicron;', 'Omicron'],
			['&omicron;', 'omicron'],
			['&Pi;', 'Pi'],
			['&pi;', 'pi'],
			['&piv;', 'piv'],
			['&Rho;', 'Rho'],
			['&rho;', 'rho'],
			['&Sigma;', 'Sigma'],
			['&sigma;', 'sigma'],
			['&sigmaf;', 'sigmaf'],
			['&Tau;', 'Tau'],
			['&tau;', 'tau'],
			['&Upsilon;', 'Upsilon'],
			['&upsih;', 'upsih'],
			['&upsilon;', 'upsilon'],
			['&Phi;', 'Phi'],
			['&phi;', 'phi'],
			['&Chi;', 'Chi'],
			['&chi;', 'chi'],
			['&Psi;', 'Psi'],
			['&psi;', 'psi'],
			['&Omega;', 'Omega'],
			['&omega;', 'omega']
		],
		graphical: [
			['&crarr;', 'crarr'],
			['&uarr;', 'uarr'],
			['&darr;', 'darr'],
			['&larr;', 'larr'],
			['&rarr;', 'rarr'],
			['&harr;', 'harr'],
			['&uArr;', 'uArr'],
			['&dArr;', 'dArr'],
			['&lArr;', 'lArr'],
			['&rArr;', 'rArr'],
			['&hArr;', 'hArr'],
			['&nbsp;', 'nbsp'],
			['&nbsp;', 'nbsp'],
			['&nbsp;', 'nbsp'],
			['&nbsp;', 'nbsp'],
			['&clubs;', 'clubs'],
			['&diams;', 'diams'],
			['&hearts;', 'hearts'],
			['&spades;', 'spades']
		]
	},
	/*
	 * This function gets called when the button was pressed.
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
		switch (buttonId) {
			case 'InsertCharacter':
				this.openDialogue(
					buttonId,
					'Insert special character',
					this.getWindowDimensions(
						{
							width: 434,
							height: 360
						},
						buttonId
					),
					this.buildTabItems()
				);
				break;
			case 'InsertSoftHyphen':
				this.insertEntity('\xAD');
				break;
		}
		return false;
	},
	/*
	 * Open the dialogue window
	 *
	 * @param	string		buttonId: the button id
	 * @param	string		title: the window title
	 * @param	integer		dimensions: the opening width of the window
	 * @param	object		tabItems: the configuration of the tabbed panel
	 * @param	function	handler: handler when the OK button if clicked
	 *
	 * @return	void
	 */
	openDialogue: function (buttonId, title, dimensions, tabItems, handler) {
		this.dialog = new Ext.Window({
			title: this.localize(title),
			cls: 'htmlarea-window',
			border: false,
			width: dimensions.width,
			height: 'auto',
				// As of ExtJS 3.1, JS error with IE when the window is resizable
			resizable: !Ext.isIE,
			iconCls: this.getButton(buttonId).iconCls,
			listeners: {
				close: {
					fn: this.onClose,
					scope: this
				}
			},
			items: {
				xtype: 'tabpanel',
				activeTab: 0,
				listeners: {
					activate: {
						fn: this.resetFocus,
						scope: this
					},
					tabchange: {
						fn: this.syncHeight,
						scope: this
					}
				},
				items: tabItems
			},
			buttons: [
				this.buildButtonConfig('Cancel', this.onCancel)
			]
		});
		this.show();
	},
	/*
	 * Build the configuration of the the tab items
	 *
	 * @return	array	the configuration array of tab items
	 */
	buildTabItems: function () {
		var tabItems = [];
		Ext.iterate(this.maps, function (id, map) {
			tabItems.push({
				xtype: 'box',
				cls: 'character-map',
				title: this.localize(id),
				itemId: id,
				tpl: new Ext.XTemplate(
					'<tpl for="."><a href="#" class="character" hidefocus="on" ext:qtitle="<span>&</span>{1};" ext:qtip="{2}">{0}</a></tpl>'
				),
				listeners: {
					render: {
						fn: this.renderMap,
						scope: this
					}
				}
			});
		}, this);
		return tabItems;
	},
	/*
	 * Render an array of characters
	 *
	 * @param	object		component: the box containing the characters
	 *
	 * @return	void
	 */
	renderMap: function (component) {
		component.tpl.overwrite(component.el, this.maps[component.itemId]);
		component.mon(component.el, 'click', this.insertCharacter, this, {delegate: 'a'});
	},
	/*
	 * Handle the click on an item of the map
	 *
	 * @param	object		event: the Ext event
	 * @param	HTMLelement	target: the html element target
	 *
	 * @return	boolean
	 */
	insertCharacter: function (event, target) {
		event.stopEvent();
		this.restoreSelection();
		var entity = Ext.get(target).dom.innerHTML;
		this.insertEntity(entity);
		if (Ext.isIE) {
			this.saveSelection();
		}
		return false;
	},
	/*
	 * Insert the selected entity
	 *
	 * @param	string		entity: the entity to insert at the current selection
	 *
	 * @return	void
	 */
	insertEntity: function (entity) {
		if (Ext.isIE) {
			this.editor.getSelection().insertHtml(entity);
		} else {
				// Firefox and WebKit convert '&nbsp;' to '&amp;nbsp;'
			var node = this.editor.document.createTextNode(((Ext.isGecko || Ext.isWebKit) && entity == '&nbsp;') ? '\xA0' : entity);
			this.editor.getSelection().insertNode(node);
			this.editor.getSelection().selectNode(node, false);
		}
	},
	/*
	 * Reset focus on the the current selection, if at all possible
	 *
	 */
	resetFocus: function () {
		this.restoreSelection();
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2007-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * Text Style Plugin for TYPO3 htmlArea RTE
 */
/*
 * Creation of the class of TextStyle plugins
 */
HTMLArea.TextStyle = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		this.cssArray = {};
		this.classesUrl = this.editorConfiguration.classesUrl;
		this.pageTSconfiguration = this.editorConfiguration.buttons.textstyle;
		this.tags = (this.pageTSconfiguration && this.pageTSconfiguration.tags) ? this.pageTSconfiguration.tags : {};
			// classesTag is DEPRECATED as of TYPO3 4.6 and will be removed#in TYPO3 4.8
		if (typeof(this.editorConfiguration.classesTag) !== "undefined") {
			if (this.editorConfiguration.classesTag.span) {
				if (!this.tags.span) {
					this.tags.span = new Object();
				}
				if (!this.tags.span.allowedClasses) {
					this.tags.span.allowedClasses = this.editorConfiguration.classesTag.span;
				}
			}
		}
		var allowedClasses;
		for (var tagName in this.tags) {
			if (this.tags.hasOwnProperty(tagName)) {
				if (this.tags[tagName].allowedClasses) {
					allowedClasses = this.tags[tagName].allowedClasses.trim().split(",");
					for (var cssClass in allowedClasses) {
						if (allowedClasses.hasOwnProperty(cssClass)) {
							allowedClasses[cssClass] = allowedClasses[cssClass].trim().replace(/\*/g, ".*");
						}
					}
					this.tags[tagName].allowedClasses = new RegExp( "^(" + allowedClasses.join("|") + ")$", "i");
				}
			}
		}
			// Property this.editorConfiguration.showTagFreeClasses is deprecated as of TYPO3 4.6 and will be removed in TYPO3 4.8
		this.showTagFreeClasses = (this.pageTSconfiguration ? this.pageTSconfiguration.showTagFreeClasses : false) || this.editorConfiguration.showTagFreeClasses;
		this.prefixLabelWithClassName = this.pageTSconfiguration ? this.pageTSconfiguration.prefixLabelWithClassName : false;
		this.postfixLabelWithClassName = this.pageTSconfiguration ? this.pageTSconfiguration.postfixLabelWithClassName : false;
		/*
		 * Regular expression to check if an element is an inline elment
		 */
		this.REInlineTags = /^(a|abbr|acronym|b|bdo|big|cite|code|del|dfn|em|i|img|ins|kbd|q|samp|small|span|strike|strong|sub|sup|tt|u|var)$/;
		
			// Allowed attributes on inline elements
		this.allowedAttributes = new Array('id', 'title', 'lang', 'xml:lang', 'dir', 'class', 'itemscope', 'itemtype', 'itemprop');
		if (Ext.isIE) {
			this.addAllowedAttribute('className');
		}
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '2.3',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: this.localize('Technische Universitat Ilmenau'),
			sponsorUrl	: 'http://www.tu-ilmenau.de/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/* 
		 * Registering the dropdown list
		 */
		var buttonId = 'TextStyle';
		var fieldLabel = this.pageTSconfiguration ? this.pageTSconfiguration.fieldLabel : '';
		if (Ext.isEmpty(fieldLabel) && this.isButtonInToolbar('I[text_style]')) {
			fieldLabel = this.localize('text_style');
		}
		var dropDownConfiguration = {
			id: buttonId,
			tooltip: this.localize(buttonId + '-Tooltip'),
			fieldLabel: fieldLabel,
			options: [[this.localize('No style'), 'none']],
			action: 'onChange',
			storeFields: [ { name: 'text'}, { name: 'value'}, { name: 'style'} ],
			tpl: '<tpl for="."><div ext:qtip="{value}" style="{style}text-align:left;font-size:11px;" class="x-combo-list-item">{text}</div></tpl>'
		};
		if (this.pageTSconfiguration) {
			if (this.pageTSconfiguration.width) {
				dropDownConfiguration.width = parseInt(this.pageTSconfiguration.width, 10);
			}
			if (this.pageTSconfiguration.listWidth) {
				dropDownConfiguration.listWidth = parseInt(this.pageTSconfiguration.listWidth, 10);
			}
			if (this.pageTSconfiguration.maxHeight) {
				dropDownConfiguration.maxHeight = parseInt(this.pageTSconfiguration.maxHeight, 10);
			}
		}
		this.registerDropDown(dropDownConfiguration);
		return true;
	},
	isInlineElement: function (el) {
		return el && (el.nodeType === HTMLArea.DOM.ELEMENT_NODE) && this.REInlineTags.test(el.nodeName.toLowerCase());
	},
	/*
	 * This function adds an attribute to the array of allowed attributes on inline elements
	 *
	 * @param	string	attribute: the name of the attribute to be added to the array
	 *
	 * @return	void
	 */
	addAllowedAttribute: function (attribute) {
		this.allowedAttributes.push(attribute);
	},
	/*
	 * This function gets called when some style in the drop-down list applies it to the highlighted textt
	 */
	onChange: function (editor, combo, record, index) {
		var className = combo.getValue();
		var classNames = null;
		var fullNodeSelected = false;
		var statusBarSelection = this.editor.statusBar ? this.editor.statusBar.getSelection() : null;
		var range = this.editor.getSelection().createRange();
		var parent = this.editor.getSelection().getParentElement();
		var selectionEmpty = this.editor.getSelection().isEmpty();
		var ancestors = this.editor.getSelection().getAllAncestors();
		
		if (!selectionEmpty) {
				// The selection is not empty
			for (var i = 0; i < ancestors.length; ++i) {
				fullNodeSelected = (Ext.isIE && ((statusBarSelection === ancestors[i] && ancestors[i].innerText === range.text) || (!statusBarSelection && ancestors[i].innerText === range.text)))
							|| (!Ext.isIE && ((statusBarSelection === ancestors[i] && ancestors[i].textContent === range.toString()) || (!statusBarSelection && ancestors[i].textContent === range.toString())));
				if (fullNodeSelected) {
					if (this.isInlineElement(ancestors[i])) {
						parent = ancestors[i];
					}
					break;
				}
			}
				// Working around bug in Safari selectNodeContents
			if (!fullNodeSelected && Ext.isWebKit && statusBarSelection && this.isInlineElement(statusBarSelection) && statusBarSelection.textContent === range.toString()) {
				fullNodeSelected = true;
				parent = statusBarSelection;
			}
		}
		if (!selectionEmpty && !fullNodeSelected || (!selectionEmpty && fullNodeSelected && parent && HTMLArea.DOM.isBlockElement(parent))) {
				// The selection is not empty, nor full element, or the selection is full block element
			if (className !== "none") {
					// Add span element with class attribute
				var newElement = editor.document.createElement('span');
				HTMLArea.DOM.addClass(newElement, className);
				editor.getDomNode().wrapWithInlineElement(newElement, range);
				if (!Ext.isIE) {
					range.detach();
				}
			}
		} else {
			this.applyClassChange(parent, className);
		}
	},
	/*
	 * This function applies the class change to the node
	 *
	 * @param	object	node: the node on which to apply the class change
	 * @param	string	className: the class to add, 'none' to remove the last class added to the class attribute
	 * @param	boolean	noRemove: true not to remove a span element with no more attribute
	 *
	 * @return	void
	 */
	applyClassChange: function (node, className, noRemove) {
			// Add or remove class
		if (node && !HTMLArea.DOM.isBlockElement(node)) {
			if (className === 'none' && node.className && /\S/.test(node.className)) {
				classNames = node.className.trim().split(' ');
				HTMLArea.DOM.removeClass(node, classNames[classNames.length-1]);
			}
			if (className !== 'none') {
				HTMLArea.DOM.addClass(node, className);
			}
				// Remove the span tag if it has no more attribute
			if (/^span$/i.test(node.nodeName) && !HTMLArea.DOM.hasAllowedAttributes(node, this.allowedAttributes) && !noRemove) {
				this.editor.getDomNode().removeMarkup(node);
			}
		}
	},
	/*
	 * This function gets called when the plugin is generated
	 * Get the classes configuration and initiate the parsing of the style sheets
	 */
	onGenerate: function () {
			// Monitor editor changing mode
		this.editor.iframe.mon(this.editor, 'HTMLAreaEventModeChange', this.onModeChange, this);
			// Create CSS Parser object
		this.textStyles = new HTMLArea.CSS.Parser({
			prefixLabelWithClassName: this.prefixLabelWithClassName,
			postfixLabelWithClassName: this.postfixLabelWithClassName,
			showTagFreeClasses: this.showTagFreeClasses,
			tags: this.tags,
			editor: this.editor
		});
			// Disable the combo while initialization completes
		var dropDown = this.getButton('TextStyle');
		if (dropDown) {
			dropDown.setDisabled(true);
		}
			// Monitor css parsing being completed
		this.editor.iframe.mon(this.textStyles, 'HTMLAreaEventCssParsingComplete', this.onCssParsingComplete, this);
		this.textStyles.initiateParsing();
	},
	/*
	 * This handler gets called when parsing of css classes is completed
	 */
	onCssParsingComplete: function () {
		if (this.textStyles.isReady) {
			this.cssArray = this.textStyles.getClasses();
			if (this.getEditorMode() === 'wysiwyg' && this.editor.isEditable()) {
				this.updateToolbar('TextStyle');
			}
		}
	},
	/*
	 * This handler gets called when the toolbar is being updated
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors) {
		if (mode === 'wysiwyg' && this.editor.isEditable() && this.textStyles.isReady) {
			this.updateToolbar(button.itemId);
		}
	},
	/*
	 * This handler gets called when the editor has changed its mode to "wysiwyg"
	 */
	onModeChange: function (mode) {
		if (mode === 'wysiwyg' && this.editor.isEditable()) {
			this.updateToolbar('TextStyle');
		}
	},
	/*
	* This function gets called when the drop-down list needs to be refreshed
	*/
	updateToolbar: function (dropDownId) {
		var editor = this.editor;
		if (this.getEditorMode() === "wysiwyg" && this.editor.isEditable()) {
			var tagName = false, classNames = Array(), fullNodeSelected = false;
			var statusBarSelection = editor.statusBar ? editor.statusBar.getSelection() : null;
			var range = editor.getSelection().createRange();
			var parent = editor.getSelection().getParentElement();
			var ancestors = editor.getSelection().getAllAncestors();
			if (parent && !HTMLArea.DOM.isBlockElement(parent)) {
				tagName = parent.nodeName.toLowerCase();
				if (parent.className && /\S/.test(parent.className)) {
					classNames = parent.className.trim().split(" ");
				}
			}
			var selectionEmpty = editor.getSelection().isEmpty();
			if (!selectionEmpty) {
				for (var i = 0; i < ancestors.length; ++i) {
					fullNodeSelected = (statusBarSelection === ancestors[i])
						&& ((!Ext.isIE && ancestors[i].textContent === range.toString()) || (Ext.isIE && ancestors[i].innerText === range.text));
					if (fullNodeSelected) {
						if (!HTMLArea.DOM.isBlockElement(ancestors[i])) {
							tagName = ancestors[i].nodeName.toLowerCase();
							if (ancestors[i].className && /\S/.test(ancestors[i].className)) {
								classNames = ancestors[i].className.trim().split(" ");
							}
						}
						break;
					}
				}
					// Working around bug in Safari selectNodeContents
				if (!fullNodeSelected && Ext.isWebKit && statusBarSelection && this.isInlineElement(statusBarSelection) && statusBarSelection.textContent === range.toString()) {
					fullNodeSelected = true;
					tagName = statusBarSelection.nodeName.toLowerCase();
					if (statusBarSelection.className && /\S/.test(statusBarSelection.className)) {
						classNames = statusBarSelection.className.trim().split(" ");
					}
				}
			}
			var selectionInInlineElement = tagName && this.REInlineTags.test(tagName);
			var disabled = !editor.getSelection().endPointsInSameBlock() || (fullNodeSelected && !tagName) || (selectionEmpty && !selectionInInlineElement);
			if (!disabled && !tagName) {
				tagName = "span";
			}
			this.updateValue(dropDownId, tagName, classNames, selectionEmpty, fullNodeSelected, disabled);
		} else {
			var dropDown = this.getButton(dropDownId);
			if (dropDown) {
				dropDown.setDisabled(!dropDown.textMode);
			}
		}
	},
	/*
	 * This function reinitializes the options of the dropdown
	 */
	initializeDropDown: function (dropDown) {
		var store = dropDown.getStore();
		store.removeAll(false);
		store.insert(0, new store.recordType({
			text: this.localize('No style'),
			value: 'none'
		}));
		dropDown.setValue('none');
	},
	/*
	 * This function builds the options to be displayed in the dropDown box
	 */
	buildDropDownOptions: function (dropDown, nodeName) {
		var store = dropDown.getStore();
		this.initializeDropDown(dropDown);
		if (this.textStyles.isReady) {
			var allowedClasses = {};
			if (this.REInlineTags.test(nodeName)) {
				if (Ext.isDefined(this.cssArray[nodeName])) {
					allowedClasses = this.cssArray[nodeName];
				} else if (this.showTagFreeClasses && Ext.isDefined(this.cssArray['all'])) {
					allowedClasses = this.cssArray['all'];
				}
			}
			Ext.iterate(allowedClasses, function (cssClass, value) {
				store.add(new store.recordType({
					text: value,
					value: cssClass,
						// this.editor.config.disablePCexamples is deprecated as of TYPO3 4.6 and will be removed in TYPO 4.8
					style: (!(this.pageTSconfiguration && this.pageTSconfiguration.disableStyleOnOptionLabel) && !this.editor.config.disablePCexamples && HTMLArea.classesValues && HTMLArea.classesValues[cssClass] && !HTMLArea.classesNoShow[cssClass]) ? HTMLArea.classesValues[cssClass] : null
				}));
			}, this);
		}
	},
	/*
	 * This function sets the selected option of the dropDown box
	 */
	setSelectedOption: function (dropDown, classNames, noUnknown, defaultClass) {
		var store = dropDown.getStore();
		dropDown.setValue('none');
		if (classNames.length) {
			var index = store.findExact('value', classNames[classNames.length-1]);
			if (index != -1) {
				dropDown.setValue(classNames[classNames.length-1]);
				if (!defaultClass) {
					store.getAt(0).set('text', this.localize('Remove style'));
				}
			}
			if (index == -1 && !noUnknown) {
				store.add(new store.recordType({
					text: this.localize('Unknown style'),
					value: classNames[classNames.length-1]
				}));
				index = store.getCount()-1;
				dropDown.setValue(classNames[classNames.length-1]);
				if (!defaultClass) {
					store.getAt(0).set('text', this.localize('Remove style'));
				}
			}
				// Remove already assigned classes from the dropDown box
			var classNamesString = ',' + classNames.join(',') + ',';
			store.each(function (option) {
				if (classNamesString.indexOf("," + option.get('value') + ",") != -1) {
					store.removeAt(store.indexOf(option));
				}
				return true;
			});
		}
		dropDown.setDisabled(!store.getCount() || (store.getCount() == 1 && dropDown.getValue() == 'none'));
	},
	/*
	 * This function updates the current value of the dropdown list
	 */
	updateValue: function (dropDownId, nodeName, classNames, selectionEmpty, fullNodeSelected, disabled) {
		var editor = this.editor;
		var dropDown = this.getButton(dropDownId);
		if (dropDown) {
			this.buildDropDownOptions(dropDown, nodeName);
			if (classNames.length && (selectionEmpty || fullNodeSelected)) {
				this.setSelectedOption(dropDown, classNames);
			}
			var store = dropDown.getStore();
			dropDown.setDisabled(!store.getCount() || (store.getCount() == 1 && dropDown.getValue() == 'none') || disabled);
		}
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2005-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * TYPO3Image plugin for htmlArea RTE
 */
HTMLArea.TYPO3Image = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		this.pageTSConfiguration = this.editorConfiguration.buttons.image;
		this.imageModulePath = this.pageTSConfiguration.pathImageModule;
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '2.3',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: 'SJBR',
			sponsorUrl	: 'http://www.sjbr.ca/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the button
		 */
		var buttonId = 'InsertImage';
		var buttonConfiguration = {
			id		: buttonId,
			tooltip		: this.localize(buttonId + '-Tooltip'),
			iconCls		: 'htmlarea-action-image-edit',
			action		: 'onButtonPress',
			hotKey		: (this.pageTSConfiguration ? this.pageTSConfiguration.hotKey : null),
			dialog		: true
		};
		this.registerButton(buttonConfiguration);
		return true;
	 },
	/*
	 * This function gets called when the button was pressed
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
		var additionalParameter;
		this.image = this.editor.getSelection().getParentElement();
		if (this.image && !/^img$/i.test(this.image.nodeName)) {
			this.image = null;
		}
		if (this.image) {
			additionalParameter = '&act=image';
		}
		this.openContainerWindow(
			buttonId,
			this.getButton(buttonId).tooltip.title,
			this.getWindowDimensions(
				{
					width:	610,
					height:	500
				},
				buttonId
			),
			this.makeUrlFromModulePath(this.imageModulePath, additionalParameter)
		);
		this.dialog.mon(Ext.get(Ext.isIE ? this.editor.document.body : this.editor.document.documentElement), 'drop', this.onDrop, this, {single: true});
		return false;
	},
	/*
	 * Insert the image
	 * This function is called from the TYPO3 image script
	 */
 	insertImage: function(image) {
		this.restoreSelection();
		this.editor.getSelection().insertHtml(image);
		this.close();
	},
	/*
	 * Handlers for drag and drop operations
	 */
	onDrop: function (event) {
		if (Ext.isWebKit) {
			this.editor.iframe.onDrop();
		}
		this.close();
	},
	/*
	 * This function gets called when the toolbar is updated
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors) {
		if (mode === 'wysiwyg' && this.editor.isEditable() && button.itemId === 'InsertImage' && !button.disabled) {
			var image = this.editor.getSelection().getParentElement();
			if (image && !/^img$/i.test(image.nodeName)) {
				image = null;
			}
			if (image) {
				button.setTooltip({ title: this.localize('Modify image') });
			} else {
				button.setTooltip({ title: this.localize('Insert image') });
			}
		}
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2005-2011 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * TYPO3Link plugin for htmlArea RTE
 */
HTMLArea.TYPO3Link = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		this.pageTSConfiguration = this.editorConfiguration.buttons.link;
		this.modulePath = this.pageTSConfiguration.pathLinkModule;
		this.classesAnchorUrl = this.pageTSConfiguration.classesAnchorUrl;
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '2.2',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: 'SJBR',
			sponsorUrl	: 'http://www.sjbr.ca/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the buttons
		 */
		var buttonList = this.buttonList, buttonId;
		for (var i = 0; i < buttonList.length; ++i) {
			var button = buttonList[i];
			buttonId = button[0];
			var buttonConfiguration = {
				id		: buttonId,
				tooltip		: this.localize(buttonId.toLowerCase()),
				iconCls		: 'htmlarea-action-' + button[4],
				action		: 'onButtonPress',
				hotKey		: (this.pageTSConfiguration ? this.pageTSConfiguration.hotKey : null),
				context		: button[1],
				selection	: button[2],
				dialog		: button[3]
			};
			this.registerButton(buttonConfiguration);
		}
		return true;
	},
	/*
	 * The list of buttons added by this plugin
	 */
	buttonList: [
		['CreateLink', 'a,img', false, true, 'link-edit'],
		['UnLink', 'a', false, false, 'unlink']
	],
	/*
	 * This function is invoked when the editor is being generated
	 */
	onGenerate: function () {
			// Download the definition of special anchor classes if not yet done
		if (this.classesAnchorUrl && (typeof(HTMLArea.classesAnchorSetup) === 'undefined')) {
			this.getJavascriptFile(this.classesAnchorUrl, function (options, success, response) {
				if (success) {
					try {
						if (typeof(HTMLArea.classesAnchorSetup) === 'undefined') {
							eval(response.responseText);
						}
					} catch(e) {
						this.appendToLog('ongenerate', 'Error evaluating contents of Javascript file: ' + this.classesAnchorUrl, 'error');
					}
				}
			});
		}
	},
	/*
	 * This function gets called when the button was pressed
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 * @param	object		target: the target element of the contextmenu event, when invoked from the context menu
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function(editor, id, target) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
			// Download the definition of special anchor classes if not yet done
		if (this.classesAnchorUrl && (typeof(HTMLArea.classesAnchorSetup) === 'undefined')) {
			this.getJavascriptFile(this.classesAnchorUrl, function (options, success, response) {
				if (success) {
					try {
						if (typeof(HTMLArea.classesAnchorSetup) === 'undefined') {
							eval(response.responseText);
						}
						this.onButtonPress(editor, id, target);
					} catch(e) {
						this.appendToLog('onButtonPress', 'Error evaluating contents of Javascript file: ' + this.classesAnchorUrl, 'error');
					}
				}
			});
		} else {
			if (buttonId === 'UnLink') {
				this.unLink(true);
				return false;
			}
			var additionalParameter;
			var node = this.editor.getSelection().getParentElement();
			var el = this.editor.getSelection().getFirstAncestorOfType('a');
			if (el != null) {
				node = el;
			}
			if (node != null && /^a$/i.test(node.nodeName)) {
				additionalParameter = '&curUrl[href]=' + encodeURIComponent(node.getAttribute('href'));
				if (node.target) additionalParameter += '&curUrl[target]=' + encodeURIComponent(node.target);
				if (node.className) additionalParameter += '&curUrl[class]=' + encodeURIComponent(node.className);
				if (node.title) additionalParameter += '&curUrl[title]=' + encodeURIComponent(node.title);
				if (this.pageTSConfiguration && this.pageTSConfiguration.additionalAttributes) {
					var additionalAttributes = this.pageTSConfiguration.additionalAttributes.split(',');
					for (var i = additionalAttributes.length; --i >= 0;) {
							// hasAttribute() not available in IE < 8
						if ((node.hasAttribute && node.hasAttribute(additionalAttributes[i])) || node.getAttribute(additionalAttributes[i]) != null) {
							additionalParameter += '&curUrl[' + additionalAttributes[i] + ']=' + encodeURIComponent(node.getAttribute(additionalAttributes[i]));
						}
					}
				}
			} else if (!this.editor.getSelection().isEmpty()) {
				var text = this.editor.getSelection().getHtml();
				if (text && text != null) {
					var offset = text.toLowerCase().indexOf('<a');
					if (offset != -1) {
						var ATagContent = text.substring(offset+2);
						offset = ATagContent.toUpperCase().indexOf('>');
						ATagContent = ATagContent.substring(0, offset);
						additionalParameter = '&curUrl[all]=' + encodeURIComponent(ATagContent);
					}
				}
			}
			this.openContainerWindow(
				buttonId,
				this.getButton(buttonId).tooltip.title,
				this.getWindowDimensions(
					{
						width:	550,
						height:	500
					},
					buttonId
				),
				this.makeUrlFromModulePath(this.modulePath, additionalParameter)
			);
		}
		return false;
	},
	/*
	 * Add a link to the selection.
	 * This function is called from the TYPO3 link popup.
	 *
	 * @param	string	theLink: the href attribute of the link to be created
	 * @param	string	cur_target: value for the target attribute
	 * @param	string	cur_class: value for the class attribute
	 * @param	string	cur_title: value for the title attribute
	 * @param	object	additionalValues: values for additional attributes (may be used by extension)
	 *
	 * @return void
	 */
	createLink: function(theLink,cur_target,cur_class,cur_title,additionalValues) {
		var range, anchorClass, imageNode = null, addIconAfterLink;
		this.restoreSelection();
		var node = this.editor.getSelection().getFirstAncestorOfType('a');
		if (!node) {
			node = this.editor.getSelection().getParentElement();
		}
		if (HTMLArea.classesAnchorSetup && cur_class) {
			for (var i = HTMLArea.classesAnchorSetup.length; --i >= 0;) {
				anchorClass = HTMLArea.classesAnchorSetup[i];
				if (anchorClass.name == cur_class && anchorClass.image) {
					imageNode = this.editor.document.createElement('img');
					imageNode.src = anchorClass.image;
					imageNode.alt = anchorClass.altText;
					addIconAfterLink = anchorClass.addIconAfterLink;
					break;
				}
			}
		}
		if (node != null && /^a$/i.test(node.nodeName)) {
				// Update existing link
			this.editor.getSelection().selectNode(node);
			range = this.editor.getSelection().createRange();
				// Clean images, keep links
			if (HTMLArea.classesAnchorSetup) {
				this.cleanAllLinks(node, range, true);
			}
				// Update link href
				// In IE, setting href may update the content of the element. We don't want this feature.
			if (Ext.isIE) {
				var content = node.innerHTML;
			}
			node.href = Ext.isGecko ? encodeURI(theLink) : theLink;
			if (Ext.isIE) {
				node.innerHTML = content;
			}
				// Update link attributes
			this.setLinkAttributes(node, range, cur_target, cur_class, cur_title, imageNode, addIconAfterLink, additionalValues);
		} else {
				// Create new link
				// Cleanup selected range
			range = this.editor.getSelection().createRange();
				// Clean existing anchors otherwise Mozilla may create nested anchors while IE may update existing link
			if (Ext.isIE8 || Ext.isIE7 || Ext.isIE6) {
				this.cleanAllLinks(node, range, true);
				this.editor.getSelection().execCommand('UnLink', false, null);
			} else {
					// Selection may be lost when cleaning links
					// Note: In IE6-8, the following procedure breaks the selection used by the execCommand
				var bookMark = this.editor.getBookMark().get(range);
				this.cleanAllLinks(node, range);
				range = this.editor.getBookMark().moveTo(bookMark);
				this.editor.getSelection().selectRange(range);
			}
			if (Ext.isGecko) {
				this.editor.getSelection().execCommand('CreateLink', false, encodeURI(theLink));
			} else {
				this.editor.getSelection().execCommand('CreateLink', false, theLink);
			}
				// Get the created link or parent
			node = this.editor.getSelection().getParentElement();
			if (node) {
					// Export trailing br that IE may include in the link
				if (Ext.isIE) {
					if (node.lastChild && /^br$/i.test(node.lastChild.nodeName)) {
						HTMLArea.DOM.removeFromParent(node.lastChild);
						node.parentNode.insertBefore(this.editor.document.createElement('br'), node.nextSibling);
					}
				}
					// We may have created multiple links in as many blocks
				this.setLinkAttributes(node, range, cur_target, cur_class, cur_title, imageNode, addIconAfterLink, additionalValues);
			}
		}
		this.close();
	},
	
	/*
	 * Unlink the selection.
	 * This function is called from the TYPO3 link popup and from unlink button pressed in toolbar or context menu.
	 *
	 * @param	string	buttonPressd: true if the unlink button was pressed
	 *
	 * @return void
	 */
	unLink: function (buttonPressed) {
			// If no dialogue window was opened, the selection should not be restored
		if (!buttonPressed) {
			this.restoreSelection();
		}
		var node = this.editor.getSelection().getParentElement();
		var el = this.editor.getSelection().getFirstAncestorOfType('a');
		if (el != null) {
			node = el;
		}
		if (node != null && /^a$/i.test(node.nodeName)) {
			this.editor.getSelection().selectNode(node);
		}
		if (HTMLArea.classesAnchorSetup) {
			var range = this.editor.getSelection().createRange();
			if (!Ext.isIE) {
				this.cleanAllLinks(node, range, false);
			} else {
				this.cleanAllLinks(node, range, true);
				this.editor.getSelection().execCommand('Unlink', false, '');
			}
		} else {
			this.editor.getSelection().execCommand('Unlink', false, '');
		}
		if (this.dialog) {
			this.close();
		}
	},
	
	/*
	* Set attributes of anchors intersecting a range in the given node
	*
	* @param	object	node: a node that may interesect the range
	* @param	object	range: set attributes on all nodes intersecting this range
	* @param	string	cur_target: value for the target attribute
	* @param	string	cur_class: value for the class attribute
	* @param	string	cur_title: value for the title attribute
	* @param	object	imageNode: image to clone and append to the anchor
	* @param	boolean	addIconAfterLink: add icon after rather than before the link
	* @param	object	additionalValues: values for additional attributes (may be used by extension)
	*
	* @return	void
	*/
	setLinkAttributes: function(node, range, cur_target, cur_class, cur_title, imageNode, addIconAfterLink, additionalValues) {
		if (/^a$/i.test(node.nodeName)) {
			var nodeInRange = false;
			if (!Ext.isIE) {
				this.editor.focus();
				nodeInRange = HTMLArea.DOM.rangeIntersectsNode(range, node);
			} else {
				if (this.editor.getSelection().getType() === 'Control') {
						// we assume an image is selected
					nodeInRange = true;
				} else {
					var nodeRange = this.editor.document.body.createTextRange();
					nodeRange.moveToElementText(node);
					nodeInRange = nodeRange.inRange(range) || range.inRange(nodeRange) || (range.compareEndPoints('StartToStart', nodeRange) == 0) || (range.compareEndPoints('EndToEnd', nodeRange) == 0);
				}
			}
			if (nodeInRange) {
				if (imageNode != null) {
					if (addIconAfterLink) {
						node.appendChild(imageNode.cloneNode(false));
					} else {
						node.insertBefore(imageNode.cloneNode(false), node.firstChild);
					}
				}
				if (Ext.isGecko) {
					node.href = decodeURI(node.href);
				}
				if (cur_target.trim()) node.target = cur_target.trim();
					else node.removeAttribute('target');
				if (cur_class.trim()) {
					node.className = cur_class.trim();
				} else {
					if (!Ext.isOpera) {
						node.removeAttribute('class');
						if (Ext.isIE) {
							node.removeAttribute('className');
						}
					} else {
						node.className = '';
					}
				}
				if (cur_title.trim()) {
					node.title = cur_title.trim();
				} else {
					node.removeAttribute('title');
					node.removeAttribute('rtekeep');
				}
				if (this.pageTSConfiguration && this.pageTSConfiguration.additionalAttributes && typeof(additionalValues) == 'object') {
					for (additionalAttribute in additionalValues) {
						if (additionalValues.hasOwnProperty(additionalAttribute)) {
							if (additionalValues[additionalAttribute].toString().trim()) {
								node.setAttribute(additionalAttribute, additionalValues[additionalAttribute]);
							} else {
								node.removeAttribute(additionalAttribute);
							}
						}
					}
				}
			}
		} else {
			for (var i = node.firstChild; i; i = i.nextSibling) {
				if (i.nodeType === HTMLArea.DOM.ELEMENT_NODE || i.nodeType === HTMLArea.DOM.DOCUMENT_FRAGMENT_NODE) {
					this.setLinkAttributes(i, range, cur_target, cur_class, cur_title, imageNode, addIconAfterLink, additionalValues);
				}
			}
		}
	},
	
	/*
	 * Clean up images in special anchor classes
	 */
	cleanClassesAnchorImages: function(node) {
		var nodeArray = [], splitArray1 = [], splitArray2 = [];
		for (var childNode = node.firstChild; childNode; childNode = childNode.nextSibling) {
			if (/^img$/i.test(childNode.nodeName)) {
				splitArray1 = childNode.src.split('/');
				for (var i = HTMLArea.classesAnchorSetup.length; --i >= 0;) {
					if (HTMLArea.classesAnchorSetup[i]['image']) {
						splitArray2 = HTMLArea.classesAnchorSetup[i]['image'].split('/');
						if (splitArray1[splitArray1.length-1] == splitArray2[splitArray2.length-1]) {
							nodeArray.push(childNode);
							break;
						}
					}
				}
			}
		}
		for (i = nodeArray.length; --i >= 0;) {
			node.removeChild(nodeArray[i]);
		}
	},
	
	/*
	 * Clean up all anchors intesecting with the range in the given node
	 */
	cleanAllLinks: function(node, range, keepLinks) {
		if (/^a$/i.test(node.nodeName)) {
			var intersection = false;
			if (!Ext.isIE) {
				this.editor.focus();
				intersection = HTMLArea.DOM.rangeIntersectsNode(range, node);
			} else {
				if (this.editor.getSelection().getType() === 'Control') {
						// we assume an image is selected
					intersection = true;
				} else {
					var nodeRange = this.editor.document.body.createTextRange();
					nodeRange.moveToElementText(node);
					intersection = range.inRange(nodeRange) || ((range.compareEndPoints('StartToStart', nodeRange) > 0) && (range.compareEndPoints('StartToEnd', nodeRange) < 0)) || ((range.compareEndPoints('EndToStart', nodeRange) > 0) && (range.compareEndPoints('EndToEnd', nodeRange) < 0));
				}
			}
			if (intersection) {
				this.cleanClassesAnchorImages(node);
				if (!keepLinks) {
					while (node.firstChild) {
						node.parentNode.insertBefore(node.firstChild, node);
					}
					node.parentNode.removeChild(node);
				}
			}
		} else {
			var child = node.firstChild,
				nextSibling;
			while (child) {
					// Save next sibling as child may be removed
				nextSibling = child.nextSibling;
				if (child.nodeType === HTMLArea.DOM.ELEMENT_NODE || child.nodeType === HTMLArea.DOM.DOCUMENT_FRAGMENT_NODE) {
					this.cleanAllLinks(child, range, keepLinks);
				}
				child = nextSibling;
			}
		}
	},
	/*
	 * This function gets called when the toolbar is updated
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors) {
		if (mode === 'wysiwyg' && this.editor.isEditable()) {
			switch (button.itemId) {
				case 'CreateLink':
					button.setDisabled(selectionEmpty && !button.isInContext(mode, selectionEmpty, ancestors));
					if (!button.disabled) {
						var node = this.editor.getSelection().getParentElement();
						var el = this.editor.getSelection().getFirstAncestorOfType('a');
						if (el != null) {
							node = el;
						}
						if (node != null && /^a$/i.test(node.nodeName)) {
							button.setTooltip({ title: this.localize('Modify link') });
						} else {
							button.setTooltip({ title: this.localize('Insert link') });
						}
					}
					break;
				case 'UnLink':
					var link = false;
						// Let's see if a link was double-clicked in Firefox
					if (Ext.isGecko && !selectionEmpty) {
						var range = this.editor.getSelection().createRange();
						if (range.startContainer.nodeType === HTMLArea.DOM.ELEMENT_NODE && range.startContainer == range.endContainer && (range.endOffset - range.startOffset == 1)) {
							var node = range.startContainer.childNodes[range.startOffset];
							if (node && /^a$/i.test(node.nodeName) && node.textContent == range.toString()) {
								link = true;
							}
						}
					}
					button.setDisabled(!link && !button.isInContext(mode, selectionEmpty, ancestors));
					break;
			}
		}
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2010-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * TextIndicator Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.TextIndicator = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '1.2',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: 'SJBR',
			sponsorUrl	: 'http://www.sjbr.ca/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		
		/*
		 * Registering the indicator
		 */
		var buttonId = 'TextIndicator';
		var textConfiguration = {
			id: buttonId,
			cls: 'indicator',
			text: 'A',
			tooltip: this.localize(buttonId.toLowerCase())
		};
		this.registerText(textConfiguration);
		return true;
	 },
	/*
	 * This handler gets called when the editor is generated
	 */
	onGenerate: function () {
			// Ensure text indicator is updated AFTER style sheets are loaded
		var blockStylePlugin = this.getPluginInstance('BlockStyle');
		if (blockStylePlugin && blockStylePlugin.blockStyles) {
				// Monitor css parsing being completed
			this.editor.iframe.mon(blockStylePlugin.blockStyles, 'HTMLAreaEventCssParsingComplete', this.onCssParsingComplete, this);
		}
		var textStylePlugin = this.getPluginInstance('TextStyle');
		if (textStylePlugin && textStylePlugin.textStyles) {
				// Monitor css parsing being completed
			this.editor.iframe.mon(textStylePlugin.textStyles, 'HTMLAreaEventCssParsingComplete', this.onCssParsingComplete, this);
		}
	},
	/*
	 * This handler gets called when parsing of css classes is completed
	 */
	onCssParsingComplete: function () {
		var button = this.getButton('TextIndicator'),
			selection = this.editor.getSelection(),
			selectionEmpty = selection.isEmpty(),
			ancestors = selection.getAllAncestors(),
			endPointsInSameBlock = selection.endPointsInSameBlock();
		if (button) {
			this.onUpdateToolbar(button, this.getEditorMode(), selectionEmpty, ancestors, endPointsInSameBlock);
		}
	},
	/*
	 * This function gets called when the toolbar is updated
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors) {
		var editor = this.editor;
		if (mode === 'wysiwyg' && editor.isEditable()) {
			var doc = editor.document;
			var style = {
				fontWeight: 'normal',
				fontStyle: 'normal'
			};
			try {
					//  Note: IE always reports FFFFFF as background color
				style.backgroundColor = HTMLArea.util.Color.colorToRgb(doc.queryCommandValue((Ext.isIE || Ext.isWebKit) ? 'BackColor' : 'HiliteColor'));
				style.color = HTMLArea.util.Color.colorToRgb(doc.queryCommandValue('ForeColor'));
				style.fontFamily = doc.queryCommandValue('FontName');
			} catch (e) { }
				// queryCommandValue does not work in Gecko
			if (Ext.isGecko) {
				var computedStyle = editor.iframe.getEl().dom.contentWindow.getComputedStyle(editor.getSelection().getParentElement(), null);
				style.color = computedStyle.getPropertyValue('color');
				style.backgroundColor = computedStyle.getPropertyValue('background-color');
				style.fontFamily = computedStyle.getPropertyValue('font-family');
			}
			try {
				style.fontWeight = doc.queryCommandState('Bold') ? 'bold' : 'normal';
			} catch(e) {
				style.fontWeight = 'normal';
			}
			try {
				style.fontStyle = doc.queryCommandState('Italic') ? 'italic' : 'normal';
			} catch(e) {
				style.fontStyle = 'normal';
			}
			button.getEl().setStyle(style);
		}
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2004 Cau guanabara <caugb@ibest.com.br>
*  (c) 2005-2011 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This script is a modified version of a script published under the htmlArea License.
*  A copy of the htmlArea License may be found in the textfile HTMLAREA_LICENSE.txt.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * Find and Replace Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.FindReplace = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '2.2',
			developer	: 'Cau Guanabara & Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca',
			copyrightOwner	: 'Cau Guanabara & Stanislas Rolland',
			sponsor		: 'Independent production & SJBR',
			sponsorUrl	: 'http://www.sjbr.ca',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the button
		 */
		var buttonId = 'FindReplace';
		var buttonConfiguration = {
			id		: buttonId,
			tooltip		: this.localize('Find and Replace'),
			iconCls		: 'htmlarea-action-find-replace',
			action		: 'onButtonPress',
			dialog		: true
		};
		this.registerButton(buttonConfiguration);
			// Compile regular expression to clean up marks
		this.marksCleaningRE = /(<span\s+[^>]*id="?htmlarea-frmark[^>]*"?>)([^<>]*)(<\/span>)/gi;
		return true;
	},
	/*
	 * This function gets called when the 'Find & Replace' button is pressed.
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id, target) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
			// Initialize search variables
		this.buffer = null;
		this.initVariables();
			// Disable the toolbar undo/redo buttons and snapshots while this window is opened
		var plugin = this.getPluginInstance('UndoRedo');
		if (plugin) {
			plugin.stop();
			var undo = this.getButton('Undo');
			if (undo) {
				undo.setDisabled(true);
			}
			var redo = this.getButton('Redo');
			if (redo) {
				redo.setDisabled(true);
			}
		}
			// Open dialogue window
		this.openDialogue(
			buttonId,
			'Find and Replace',
			this.getWindowDimensions(
				{
					width: 410,
					height:360
				},
				buttonId
			)
		);
		return false;
	},
	/*
	 * Open the dialogue window
	 *
	 * @param	string		buttonId: the button id
	 * @param	string		title: the window title
	 * @param	integer		dimensions: the opening width of the window
	 *
	 * @return	void
	 */
	openDialogue: function (buttonId, title, dimensions) {
		this.dialog = new Ext.Window({
			title: this.localize(title),
			cls: 'htmlarea-window',
			border: false,
			width: dimensions.width,
			height: 'auto',
				// As of ExtJS 3.1, JS error with IE when the window is resizable
			resizable: !Ext.isIE,
			iconCls: this.getButton(buttonId).iconCls,
			listeners: {
				close: {
					fn: this.onClose,
					scope: this
				}
			},
			items: [{
					xtype: 'fieldset',
					defaultType: 'textfield',
					labelWidth: 100,
					defaults: {
						labelSeparator: '',
						width: 250,
						listeners: {
							change: {
								fn: this.clearDoc,
								scope: this
							}
						}
					},
					listeners: {
						render: {
							fn: this.initPattern,
							scope: this
						}
					},
					items: [{
							itemId: 'pattern',
							fieldLabel: this.localize('Search for:')
						},{
							itemId: 'replacement',
							fieldLabel: this.localize('Replace with:')
						}
					]
				},{
					xtype: 'fieldset',
					defaultType: 'checkbox',
					title: this.localize('Options'),
					labelWidth: 150,
					items: [{
							itemId: 'words',
							fieldLabel: this.localize('Whole words only'),
							listeners: {
								check: {
									fn: this.clearDoc,
									scope: this
								}
							}
						},{
							itemId: 'matchCase',
							fieldLabel: this.localize('Case sensitive search'),
							listeners: {
								check: {
									fn: this.clearDoc,
									scope: this
								}
							}
						},{
							itemId: 'replaceAll',
							fieldLabel: this.localize('Substitute all occurrences'),
							listeners: {
								check: {
									fn: this.requestReplacement,
									scope: this
								}
							}
						}
					]
				},{
					xtype: 'fieldset',
					defaultType: 'button',
					title: this.localize('Actions'),
					defaults: {
						minWidth: 150,
						disabled: true,
						style: {
							marginBottom: '5px'
						}
					},
					items: [{
							text: this.localize('Clear'),
							itemId: 'clear',
							listeners: {
								click: {
									fn: this.clearMarks,
									scope: this
								}
							}
						},{
							text: this.localize('Highlight'),
							itemId: 'hiliteall',
							listeners: {
								click: {
									fn: this.hiliteAll,
									scope: this
								}
							}
						},{
							text: this.localize('Undo'),
							itemId: 'undo',
							listeners: {
								click: {
									fn: this.resetContents,
									scope: this
								}
							}
						}
					]
				}
			],
			buttons: [
				this.buildButtonConfig('Next', this.onNext),
				this.buildButtonConfig('Done', this.onCancel)
			]
		});
		this.show();
	},
	/*
	 * Handler invoked to initialize the pattern to search
	 *
	 * @param	object		fieldset: the fieldset component
	 *
	 * @return	void
	 */
	initPattern: function (fieldset) {
		var selection = this.editor.getSelection().getHtml();
		if (/\S/.test(selection)) {
			selection = selection.replace(/<[^>]*>/g, '');
			selection = selection.replace(/&nbsp;/g, '');
		}
		if (/\S/.test(selection)) {
			fieldset.getComponent('pattern').setValue(selection);
			fieldset.getComponent('replacement').focus();
		} else {
			fieldset.getComponent('pattern').focus();
		}
	},
	/*
	 * Handler invoked when the replace all checkbox is checked
	 */
	requestReplacement: function () {
		if (!this.dialog.find('itemId', 'replacement')[0].getValue() && this.dialog.find('itemId', 'replaceAll')[0].getValue()) {
			TYPO3.Dialog.InformationDialog({
				title: this.getButton('FindReplace').tooltip.title,
				msg: this.localize('Inform a replacement word'),
				fn: function () { this.dialog.find('itemId', 'replacement')[0].focus(); },
				scope: this
			});
		}
		this.clearDoc();
	},
	/*
	 * Handler invoked when the 'Next' button is pressed
	 */
	onNext: function () {
		if (!this.dialog.find('itemId', 'pattern')[0].getValue()) {
			TYPO3.Dialog.InformationDialog({
				title: this.getButton('FindReplace').tooltip.title,
				msg: this.localize('Enter the text you want to find'),
				fn: function () { this.dialog.find('itemId', 'pattern')[0].focus(); },
				scope: this
			});
			return false;
		}
		var fields = [
			'pattern',
			'replacement',
			'words',
			'matchCase',
			'replaceAll'
		];
		var params = {};
		Ext.each(fields, function (field) {
			params[field] = this.dialog.find('itemId', field)[0].getValue();
		}, this);
		this.search(params);
		return false;
	},
	/*
	 * Search the pattern and insert span tags
	 *
	 * @param	object		params: the parameters of the search corresponding to the values of fields:
	 *					pattern
	 *					replacement
	 *					words
	 *					matchCase
	 *					replaceAll
	 *
	 * @return	void
	 */
	search: function (params) {
		var html = this.editor.getInnerHTML();
		if (this.buffer == null) {
			this.buffer = html;
		}
		if (this.matches == 0) {
			var pattern = new RegExp(params.words ? '(?!<[^>]*)(\\b' + params.pattern + '\\b)(?![^<]*>)' : '(?!<[^>]*)(' + params.pattern + ')(?![^<]*>)', 'g' + (params.matchCase? '' : 'i'));
			this.editor.setHTML(html.replace(pattern, '<span id="htmlarea-frmark">' + "$1" + '</span>'));
			Ext.each(this.editor.document.body.getElementsByTagName('span'), function (mark) {
				if (/^htmlarea-frmark/.test(mark.id)) {
					this.spans.push(mark);
				}
			}, this);
		}
		this.spanWalker(params.pattern, params.replacement, params.replaceAll);
	},
	/*
	 * Walk the span tags
	 *
	 * @param	string		pattern: the pattern being searched for
	 * @param	string		replacement: the replacement string
	 * @param	bolean		replaceAll: true if all occurrences should be replaced
	 *
	 * @return	void
	 */
	spanWalker: function (pattern, replacement, replaceAll) {
		this.clearMarks();
		if (this.spans.length) {
			Ext.each(this.spans, function (mark, i) {
				if (i >= this.matches && !/[0-9]$/.test(mark.id)) {
					this.matches++;
					this.disableActions('clear', false);
					mark.id = 'htmlarea-frmark_' + this.matches;
					mark.style.color = 'white';
					mark.style.backgroundColor = 'highlight';
					mark.style.fontWeight = 'bold';
					mark.scrollIntoView(false);
					var self = this;
					function replace(button) {
						if (button == 'yes') {
							mark.firstChild.replaceData(0, mark.firstChild.data.length, replacement);
							self.replaces++;
							self.disableActions('undo', false);
						}
						self.endWalk(pattern, i);
					}
					if (replaceAll) {
						replace('yes');
						return true;
					} else {
						TYPO3.Dialog.QuestionDialog({
							title: this.getButton('FindReplace').tooltip.title,
							msg: this.localize('Substitute this occurrence?'),
							fn: replace,
							scope: this
						});
						return false;
					}
				}
			}, this);
		} else {
			this.endWalk(pattern, 0);
		}
	},
	/*
	 * End the replacement walk
	 *
	 * @param	string		pattern: the pattern being searched for
	 * @param	integer		index: the index reached in the walk
	 *
	 * @return 	void
	 */
	endWalk: function (pattern, index) {
		if (index >= this.spans.length - 1 || !this.spans.length) {
			var message = this.localize('Done') + ':<br /><br />';
			if (this.matches > 0) {
				if (this.matches == 1) {
					message += this.matches + ' ' + this.localize('found item');
				} else {
					message += this.matches + ' ' + this.localize('found items');
				}
				if (this.replaces > 0) {
					if (this.replaces == 1) {
						message += ',<br />' + this.replaces + ' ' + this.localize('replaced item');
					} else {
						message += ',<br />' + this.replaces + ' ' + this.localize('replaced items');
					}
				}
				this.hiliteAll();
			} else {
				message += '"' + pattern + '" ' + this.localize('not found');
				this.disableActions('hiliteall,clear', true);
			}
			TYPO3.Dialog.InformationDialog({
				title: this.getButton('FindReplace').tooltip.title,
				msg: message + '.',
				minWidth: 300
			});
		}
	},
	/*
	 * Remove all marks
	 */
	clearDoc: function () {
		this.editor.setHTML(this.editor.getInnerHTML().replace(this.marksCleaningRE, "$2"));
		this.initVariables();
		this.disableActions('hiliteall,clear', true);
	},
	/*
	 * De-highlight all marks
	 */
	clearMarks: function () {
		Ext.each(this.editor.document.body.getElementsByTagName('span'), function (mark) {
			if (/^htmlarea-frmark/.test(mark.id)) {
				mark.style.backgroundColor = '';
				mark.style.color = '';
				mark.style.fontWeight = '';
			}
		}, this);
		this.disableActions('hiliteall', false);
		this.disableActions('clear', true);
	},
	/*
	 * Highlight all marks
	 */
	hiliteAll: function () {
		Ext.each(this.editor.document.body.getElementsByTagName('span'), function (mark) {
			if (/^htmlarea-frmark/.test(mark.id)) {
				mark.style.backgroundColor = 'highlight';
				mark.style.color = 'white';
				mark.style.fontWeight = 'bold';
			}
		}, this);
		this.disableActions('clear', false);
		this.disableActions('hiliteall', true);
	},
	/*
	 * Undo the replace operation
	 */
	resetContents: function () {
		if (this.buffer != null) {
			var transp = this.editor.getInnerHTML();
			this.editor.setHTML(this.buffer);
			this.buffer = transp;
			this.disableActions('clear', true);
		}
	},
	/*
	 * Disable action buttons
	 *
	 * @param	array		actions: array of buttonIds to set disabled/enabled
	 * @param	boolean		disabled: true to set disabled
	 */
	disableActions: function (actions, disabled) {
		Ext.each(actions.split(/[,; ]+/), function (action) {
				this.dialog.find('itemId', action)[0].setDisabled(disabled);
		}, this);
	},
	/*
	 * Initialize find & replace variables
	 */
	initVariables: function () {
		this.matches = 0;
		this.replaces = 0;
		this.spans = new Array();
	},
	/*
	 * Clear the document before leaving on 'Done' button
	 */
	onCancel: function () {
		this.clearDoc();
		var plugin = this.getPluginInstance('UndoRedo');
		if (plugin) {
			plugin.start();
		}
		HTMLArea.FindReplace.superclass.onCancel.call(this);
	},
	/*
	 * Clear the document before leaving on window close handle
	 */
	onClose: function () {
		this.clearDoc();
		var plugin = this.getPluginInstance('UndoRedo');
		if (plugin) {
			plugin.start();
		}
		HTMLArea.FindReplace.superclass.onClose.call(this);
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2005-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * Remove Format Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.RemoveFormat = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '2.4',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: 'SJBR',
			sponsorUrl	: 'http://www.sjbr.ca/',
			license		: 'GPL',
			hasHelp		: true
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the button
		 */
		var buttonId = 'RemoveFormat';
		var buttonConfiguration = {
			id		: buttonId,
			tooltip		: this.localize(buttonId + 'Tooltip'),
			iconCls		: 'htmlarea-action-remove-format',
			action		: 'onButtonPress',
			dialog		: true
		};
		this.registerButton(buttonConfiguration);
		return true;
	},
	/*
	 * This function gets called when the button was pressed.
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id, target) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
			// Open dialogue window
		this.openDialogue(
			buttonId,
			'Remove formatting',
			this.getWindowDimensions(
				{
					width: 260,
					height:260
				},
				buttonId
			)
		);
		return false;
	},
	/*
	 * Open the dialogue window
	 *
	 * @param	string		buttonId: the button id
	 * @param	string		title: the window title
	 * @param	object		dimensions: the opening dimensions of the window
	 *
	 * @return	void
	 */
	openDialogue: function (buttonId, title, dimensions) {
		this.dialog = new Ext.Window({
			title: this.getHelpTip('', title),
			cls: 'htmlarea-window',
			border: false,
			width: dimensions.width,
			height: 'auto',
				// As of ExtJS 3.1, JS error with IE when the window is resizable
			resizable: !Ext.isIE,
			iconCls: this.getButton(buttonId).iconCls,
			listeners: {
				close: {
					fn: this.onClose,
					scope: this
				}
			},
			items: [{
					xtype: 'fieldset',
					title: this.getHelpTip('area', 'Cleaning Area'),
					defaultType: 'radio',
					labelWidth: 140,
					defaults: {
						labelSeparator: ''
					},
					items: [{
							itemId: 'selection',
							fieldLabel: this.getHelpTip('selection', 'Selection'),
							name: 'htmlarea-removeFormat-area'
						},{
							itemId: 'allContent',
							fieldLabel: this.getHelpTip('all', 'All'),
							checked: true,
							name: 'htmlarea-removeFormat-area'
						}
					]
				},{
					xtype: 'fieldset',
					defaultType: 'checkbox',
					title: this.getHelpTip('options', 'Cleaning options'),
					labelWidth: 170,
					defaults: {
						labelSeparator: ''
					},
					items: [{
							itemId: 'formatting',
							fieldLabel: this.getHelpTip('htmlFormat', 'Formatting:')
						},{
							itemId: 'msWordFormatting',
							fieldLabel: this.getHelpTip('msWordFormat', 'MS Word Formatting:'),
							checked: true
						},{
							itemId: 'typographical',
							fieldLabel: this.getHelpTip('typographicalPunctuation', 'Typographical punctuation:')
						},{
							itemId: 'spaces',
							fieldLabel: this.getHelpTip('nonBreakingSpace', 'Spaces')
						},{
							itemId: 'images',
							fieldLabel: this.getHelpTip('images', 'Images:')
						},{
							itemId: 'allHtml',
							fieldLabel: this.getHelpTip('allHtml', 'All HTML:')
						}
					]
				}
			],
			buttons: [
				this.buildButtonConfig('OK', this.onOK),
				this.buildButtonConfig('Cancel', this.onCancel)
			]
		});
		this.show();
	},
	/*
	 * Handler when the OK button is pressed
	 */
	onOK: function () {
		var fields = [
			'selection',
			'allContent',
			'formatting',
			'msWordFormatting',
			'typographical',
			'spaces',
			'images',
			'allHtml'
		];
		var params = {};
		Ext.each(fields, function (field) {
			params[field] = this.dialog.find('itemId', field)[0].getValue();
		}, this);
		if (params['allHtml'] || params['formatting'] || params['spaces'] || params['images'] || params['msWordFormatting'] || params['typographical']) {
			this.applyRequest(params);
			this.close();
		} else {
			TYPO3.Dialog.InformationDialog({
				title: this.getButton('RemoveFormat').tooltip.title,
				msg: this.localize('Select the type of formatting you wish to remove.')
			});
		}
		return false;
	},
	/*
	 * Perform the cleaning request
	 * @param	object		params: the values of the form fields
	 *
	 * @return	void
	 */
	applyRequest: function (params) {
		var editor = this.editor;
		this.restoreSelection();
		if (params['allContent']) {
			var html = editor.getInnerHTML();
		} else {
			var html = editor.getSelection().getHtml();
		}
		if (html) {
			if (params['allHtml']) {
				html = html.replace(/<[\!]*?[^<>]*?>/g, "");
			}
			if (params['formatting']) {
					// Remove font, b, strong, i, em, u, strike, span and other inline tags
				html = html.replace(/<\/?(abbr|acronym|b|big|cite|code|em|font|i|q|s|samp|small|span|strike|strong|sub|sup|tt|u|var)(>|[^>a-zA-Z][^>]*>)/gi, '');
					// Keep tags, strip attributes
				html = html.replace(/[ \t\n\r]+(style|class|align|cellpadding|cellspacing|frame|bgcolor)=\"[^>\"]*\"/gi, "");
			}
			if (params['spaces']) {
					// Replace non-breaking spaces by normal spaces
				html = html.replace(/&nbsp;/g, " ");
			}
			if (params['images']) {
					// remove any IMG tag
				html = html.replace(/<\/?(img|imagedata)(>|[^>a-zA-Z][^>]*>)/gi, "");
			}
			if (params['msWordFormatting']) {
					// Make one line
				html = html.replace(/[ \r\n\t]+/g, " ");
					// Clean up tags
				html = html.replace(/<(b|strong|i|em|p|li|ul) [^>]*>/gi, "<$1>");
					// Keep tags, strip attributes
				html = html.replace(/ (style|class|align)=\"[^>\"]*\"/gi, "");
					// Remove unwanted tags: div, link, meta, span, ?xml:, [a-z]+:
				html = html.replace(/<\/?(div|link|meta|span)(>|[^>a-zA-Z][^>]*>)/gi, "");
				html = html.replace(/<\?xml:[^>]*>/gi, "").replace(/<\/?[a-z]+:[^>]*>/g, "");
					// Remove images
				html = html.replace(/<\/?(img|imagedata)(>|[^>a-zA-Z][^>]*>)/gi, "");
					// Remove MS-specific tags
				html = html.replace(/<\/?(f|formulas|lock|path|shape|shapetype|stroke)(>|[^>a-zA-Z][^>]*>)/gi, "");
					// Remove unwanted tags and their contents: style, title
				html = html.replace(/<style[^>]*>.*<\/style[^>]*>/gi, "").
					replace(/<title[^>]*>.*<\/title[^>]*>/gi, "");
					// Remove comments
				html = html.replace(/<!--[^>]*>/gi, "");
					// Remove xml tags
				html = html.replace(/<xml.[^>]*>/gi, "");
					// Remove inline elements resets
				html = html.replace(/<\/(b[^a-zA-Z]|big|i[^a-zA-Z]|s[^a-zA-Z]|small|strike|tt|u[^a-zA-Z])><\1>/gi, "");
					// Remove double tags
				var oldlen = html.length + 1;
				while(oldlen > html.length) {
					oldlen = html.length;
						// Remove double opening tags
					html = html.replace(/<([a-z][a-z]*)> *<\/\1>/gi, " ").replace(/<([a-z][a-z]*)> *<\/?([a-z][^>]*)> *<\/\1>/gi, "<$2>");
						// Remove double closing tags
					html = html.replace(/<([a-z][a-z]*)><\1>/gi, "<$1>").replace(/<\/([a-z][a-z]*)><\/\1>/gi, "<\/$1>");
						// Remove multiple spaces
					html = html.replace(/[\x20]+/gi, " ");
				}
			}
			if (params['typographical']) {
					// Remove typographical punctuation
					// Search pattern stored here
				var SrcCd;
					// Replace horizontal ellipsis with three periods
				SrcCd = String.fromCharCode(8230);
				html = html.replace(new RegExp(SrcCd, 'g'), '...');
					// Replace en-dash and  em-dash with hyphen
				SrcCd = String.fromCharCode(8211) + '|' + String.fromCharCode(8212);
				html = html.replace(new RegExp(SrcCd, 'g'), '-');
				html = html.replace(new RegExp(SrcCd, 'g'), "'");
					// Replace double low-9 / left double / right double quotation mark with double quote
				SrcCd = String.fromCharCode(8222) + '|' + String.fromCharCode(8220) + '|' + String.fromCharCode(8221);
				html = html.replace(new RegExp(SrcCd, 'g'), '"');
					// Replace left single / right single / single low-9 quotation mark with single quote
				SrcCd = String.fromCharCode(8216) + '|' + String.fromCharCode(8217) + '|' + String.fromCharCode(8218);
				html = html.replace(new RegExp(SrcCd, 'g'), "'");
					// Replace single left/right-pointing angle quotation mark with single quote
				SrcCd = String.fromCharCode(8249) + '|' + String.fromCharCode(8250);
				html = html.replace(new RegExp(SrcCd, 'g'), "'");
					// Replace left/right-pointing double angle quotation mark (left/right pointing guillemet) with double quote
				SrcCd = String.fromCharCode(171) + '|' + String.fromCharCode(187);
				html = html.replace(new RegExp(SrcCd, 'g'), '"');
					// Replace grave accent (spacing grave) and acute accent (spacing acute) with apostrophe (single quote)
				SrcCd = String.fromCharCode(96) + '|' + String.fromCharCode(180);
			}
			if (params['allContent']) {
				editor.setHTML(html);
			} else {
				editor.getSelection().insertHtml(html);
			}
		}
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2008-2011 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/**
 * Default Clean Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.DefaultClean = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function(editor) {
		this.pageTSConfiguration = this.editorConfiguration.buttons.cleanword;
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '2.2',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: 'SJBR',
			sponsorUrl	: 'http://www.sjbr.ca/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the (hidden) button
		 */
		var buttonId = 'CleanWord';
		var buttonConfiguration = {
			id		: buttonId,
			tooltip		: this.localize(buttonId + '-Tooltip'),
			action		: 'onButtonPress',
			hide		: true,
			hideInContextMenu: true
		};
		this.registerButton(buttonConfiguration);
	},
	/*
	 * This function gets called when the button was pressed.
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id, target) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
		this.clean();
		return false;
	},
	/*
	 * This function gets called when the editor is generated
	 */
	onGenerate: function () {
		this.editor.iframe.mon(Ext.get(Ext.isIE ? this.editor.document.body : this.editor.document.documentElement), 'paste', this.wordCleanHandler, this);
	},
	/*
	 * This function cleans all nodes in the node tree below the input node
	 *
	 * @param	object	node: the root of the node tree to clean
	 *
	 * @return 	void
	 */
	clean: function () {
		function clearClass(node) {
			var newc = node.className.replace(/(^|\s)mso.*?(\s|$)/ig,' ');
			if (newc != node.className) {
				node.className = newc;
				if (!/\S/.test(node.className)) {
					if (!Ext.isOpera) {
						node.removeAttribute('class');
						if (Ext.isIE) {
							node.removeAttribute('className');
						}
					} else {
						node.className = '';
					}
				}
			}
		}
		function clearStyle(node) {
			var style = Ext.isIE ? node.style.cssText : node.getAttribute('style');
			if (style) {
				var declarations = style.split(/\s*;\s*/);
				for (var i = declarations.length; --i >= 0;) {
					if (/^mso|^tab-stops/i.test(declarations[i]) || /^margin\s*:\s*0..\s+0..\s+0../i.test(declarations[i])) {
						declarations.splice(i, 1);
					}
				}
				node.setAttribute('style', declarations.join('; '));
			}
		}
		function stripTag(el) {
			if (Ext.isIE) {
				el.outerHTML = HTMLArea.util.htmlEncode(el.innerText);
			} else {
				var txt = document.createTextNode(HTMLArea.DOM.getInnerText(el));
				el.parentNode.insertBefore(txt,el);
				el.parentNode.removeChild(el);
			}
		}
		function checkEmpty(el) {
			if (/^(span|b|strong|i|em|font)$/i.test(el.nodeName) && !el.firstChild) {
				el.parentNode.removeChild(el);
			}
		}
		function parseTree(root) {
			var tag = root.nodeName.toLowerCase(), next;
			switch (root.nodeType) {
				case HTMLArea.DOM.ELEMENT_NODE:
					if (/^(meta|style|title|link)$/.test(tag)) {
						root.parentNode.removeChild(root);
						return false;
						break;
					}
				case HTMLArea.DOM.TEXT_NODE:
				case HTMLArea.DOM.DOCUMENT_NODE:
				case HTMLArea.DOM.DOCUMENT_FRAGMENT_NODE:
					if ((Ext.isIE && root.scopeName != 'HTML') || (!Ext.isIE && /:/.test(tag)) || /o:p/.test(tag)) {
						stripTag(root);
						return false;
					} else {
						clearClass(root);
						clearStyle(root);
						for (var i = root.firstChild; i; i = next) {
							next = i.nextSibling;
							if (i.nodeType !== HTMLArea.DOM.TEXT_NODE && parseTree(i)) {
								checkEmpty(i);
							}
						}
					}
					return true;
					break;
				default:
					root.parentNode.removeChild(root);
					return false;
					break;
			}
		}
		parseTree(this.editor.document.body);
		if (Ext.isWebKit) {
			this.editor.getDomNode().cleanAppleStyleSpans(this.editor.document.body);
		}
	},
	/*
	 * Handler for paste, dragdrop and drop events
	 */
	wordCleanHandler: function (event) {
		this.clean.defer(250, this);
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2002 interactivetools.com, inc. Authored by Mihai Bazon, sponsored by http://www.bloki.com.
*  (c) 2005 Xinha, http://xinha.gogo.co.nz/ for the original toggle borders function.
*  (c) 2004-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This script is a modified version of a script published under the htmlArea License.
*  A copy of the htmlArea License may be found in the textfile HTMLAREA_LICENSE.txt.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * Table Operations Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.TableOperations = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		
		this.classesUrl = this.editorConfiguration.classesUrl;
		this.buttonsConfiguration = this.editorConfiguration.buttons;
		this.disableEnterParagraphs = this.buttonsConfiguration.table ? this.buttonsConfiguration.table.disableEnterParagraphs : false;
		this.floatLeft = "float-left";
		this.floatRight = "float-right";
		this.floatDefault = "not set";
		this.useHeaderClass = "thead";
		if (this.buttonsConfiguration.table && this.buttonsConfiguration.table.properties) {
			if (this.buttonsConfiguration.table.properties["float"]) {
				var floatConfiguration = this.buttonsConfiguration.table.properties["float"];
				this.floatLeft = (floatConfiguration.left && floatConfiguration.left.useClass) ? floatConfiguration.left.useClass : "float-left";
				this.floatRight = (floatConfiguration.right && floatConfiguration.right.useClass) ? floatConfiguration.right.useClass : "float-right";
				this.floatDefault = (floatConfiguration.defaultValue) ?  floatConfiguration.defaultValue : "not set";
			}
			if (this.buttonsConfiguration.table.properties.headers && this.buttonsConfiguration.table.properties.headers.both 
					&& this.buttonsConfiguration.table.properties.headers.both.useHeaderClass) {
				this.useHeaderClass = this.buttonsConfiguration.table.properties.headers.both.useHeaderClass;
			}
			if (this.buttonsConfiguration.table.properties.tableClass) {
				this.defaultClass = this.buttonsConfiguration.table.properties.tableClass.defaultValue;
			}
		}
		if (this.buttonsConfiguration.blockstyle) {
			this.tags = this.editorConfiguration.buttons.blockstyle.tags;
		}
		this.tableParts = ["tfoot", "thead", "tbody"];
		this.convertAlignment = { "not set" : "none", "left" : "JustifyLeft", "center" : "JustifyCenter", "right" : "JustifyRight", "justify" : "JustifyFull" };
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '5.3',
			developer	: 'Mihai Bazon & Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Mihai Bazon & Stanislas Rolland',
			sponsor		: this.localize('Technische Universitat Ilmenau') + ' & Zapatec Inc.',
			sponsorUrl	: 'http://www.tu-ilmenau.de/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the buttons
		 */
		var hideToggleBorders = this.editorConfiguration.hideTableOperationsInToolbar && !(this.buttonsConfiguration.toggleborders && this.buttonsConfiguration.toggleborders.keepInToolbar);
		var buttonList = this.buttonList, buttonId;
		for (var i = 0, n = buttonList.length; i < n; ++i) {
			var button = buttonList[i];
			buttonId = (button[0] === 'InsertTable') ? button[0] : ('TO-' + button[0]);
			var buttonConfiguration = {
				id		: buttonId,
				tooltip		: this.localize((buttonId === 'InsertTable') ? 'Insert Table' : buttonId),
				iconCls		: 'htmlarea-action-' + button[4],
				action		: 'onButtonPress',
				hotKey		: (this.buttonsConfiguration[button[2]] ? this.buttonsConfiguration[button[2]].hotKey : null),
				context		: button[1],
				hide		: ((buttonId == 'TO-toggle-borders') ? hideToggleBorders : ((button[0] === 'InsertTable') ? false : this.editorConfiguration.hideTableOperationsInToolbar)),
				dialog		: button[3]
			};
			this.registerButton(buttonConfiguration);
		}
		return true;
	 }, 
	/*
	 * The list of buttons added by this plugin
	 */
	buttonList: [
		['InsertTable',		null,				'table', true, 'table-insert'],
		['toggle-borders',	null, 				'toggleborders', false, 'table-show-borders'],
		['table-prop',		'table',			'tableproperties', true, 'table-edit-properties'],
		['table-restyle',	'table',			'tablerestyle', false, 'table-restyle'],
		['row-prop',		'tr',				'rowproperties', true, 'row-edit-properties'],
		['row-insert-above',	'tr',				'rowinsertabove', false, 'row-insert-above'],
		['row-insert-under',	'tr',				'rowinsertunder', false, 'row-insert-under'],
		['row-delete',		'tr',				'rowdelete', false, 'row-delete'],
		['row-split',		'td,th[rowSpan!=1]',		'rowsplit', false, 'row-split'],
		['col-prop',		'td,th',			'columnproperties', true, 'column-edit-properties'],
		['col-insert-before',	'td,th',			'columninsertbefore', false, 'column-insert-before'],
		['col-insert-after',	'td,th',			'columninsertafter', false, 'column-insert-after'],
		['col-delete',		'td,th',			'columndelete', false, 'column-delete'],
		['col-split',		'td,th[colSpan!=1]',		'columnsplit', false, 'column-split'],
		['cell-prop',		'td,th',			'cellproperties', true, 'cell-edit-properties'],
		['cell-insert-before',	'td,th',			'cellinsertbefore', false, 'cell-insert-before'],
		['cell-insert-after',	'td,th',			'cellinsertafter', false, 'cell-insert-after'],
		['cell-delete',		'td,th',			'celldelete', false, 'cell-delete'],
		['cell-merge',		Ext.isGecko? 'tr' : 'td,th',	'cellmerge', false, 'cell-merge'],
		['cell-split',		'td,th[colSpan!=1,rowSpan!=1]',	'cellsplit', false, 'cell-split']
	],
	/*
	 * Sets of default configuration values for dialogue form fields
	 */
	configDefaults: {
		combo: {
			editable: true,
			selectOnFocus: true,
			typeAhead: true,
			triggerAction: 'all',
			forceSelection: true,
			mode: 'local',
			valueField: 'value',
			displayField: 'text',
			helpIcon: true,
			tpl: '<tpl for="."><div ext:qtip="{value}" style="text-align:left;font-size:11px;" class="x-combo-list-item">{text}</div></tpl>'
		}
	},
	/*
	 * Get the integer value of a string or '' if the string is not a number
	 *
	 * @param	string		string: the input value
	 *
	 * @return	mixed		a number or ''
	 */
	getLength: function (string) {
		var length = parseInt(string);
		if (isNaN(length)) {
			length = '';
		}
		return length;
	},
	/*
	 * Open properties dialogue
	 *
	 * @param	string		type: 'cell', 'column', 'row' or 'table'
	 * @param	string		buttonId: the buttonId of the button that was pressed
	 *
	 * @return 	void
	 */
	openPropertiesDialogue: function (type, buttonId) {
			// Retrieve the element being edited and set configuration according to type
		switch (type) {
			case 'cell':
			case 'column':
				var element = this.editor.getSelection().getFirstAncestorOfType(['td', 'th']);
				this.properties = (this.buttonsConfiguration.cellproperties && this.buttonsConfiguration.cellproperties.properties) ? this.buttonsConfiguration.cellproperties.properties : {};
				var title = (type == 'column') ? 'Column Properties' : 'Cell Properties';
				break;
			case 'row':
				var element = this.editor.getSelection().getFirstAncestorOfType('tr');
				this.properties = (this.buttonsConfiguration.rowproperties && this.buttonsConfiguration.rowproperties.properties) ? this.buttonsConfiguration.rowproperties.properties : {};
				var title = 'Row Properties';
				break;
			case 'table':
				var insert = (buttonId === 'InsertTable');
				var element = insert ? null : this.editor.getSelection().getFirstAncestorOfType('table');
				this.properties = (this.buttonsConfiguration.table && this.buttonsConfiguration.table.properties) ? this.buttonsConfiguration.table.properties : {};
				var title = insert ? 'Insert Table' : 'Table Properties';
				break;
		}
		var propertySet = element ? type + 'properties' : 'table';
		this.removedFieldsets = (this.buttonsConfiguration[propertySet] && this.buttonsConfiguration[propertySet].removeFieldsets) ? this.buttonsConfiguration[propertySet].removeFieldsets : '';
		this.removedProperties = this.properties.removed ? this.properties.removed : '';
			// Open the dialogue window
		this.openDialogue(
			title,
			{
				element: element,
				cell: type == 'cell',
				column: type == 'column',
				buttonId: buttonId
			},
			type == 'table' ? this.getWindowDimensions({ width: 600}, buttonId) : this.getWindowDimensions({ width: 600}, buttonId),
			this.buildTabItemsConfig(element, type, buttonId),
			type == 'table' ? this.tablePropertiesUpdate : this.rowCellPropertiesUpdate
		);
	},
	/*
	 * Build the dialogue tab items config
	 *
	 * @param	object		element: the element being edited, if any
	 * @param	string		type: 'cell', 'column', 'row' or 'table'
	 * @param	string		buttonId: the buttonId of the button that was pressed
	 *
	 * @return	object		the tab items configuration
	 */
	buildTabItemsConfig: function (element, type, buttonId) {
		var tabItems = [];
		var generalTabItems = [];
		switch (type) {
			case 'table':
				if (this.removedFieldsets.indexOf('description') === -1) {
					this.addConfigElement(this.buildDescriptionFieldsetConfig(element), generalTabItems);
				}
				if (Ext.isEmpty(element) || this.removedProperties.indexOf('headers') === -1) {
					this.addConfigElement(this.buildSizeAndHeadersFieldsetConfig(element), generalTabItems);
				}
				break;
			case 'column':
				if (this.removedFieldsets.indexOf('columntype') == -1) {
					this.addConfigElement(this.buildCellTypeFieldsetConfig(element, true), generalTabItems);
				}
				break;
			case 'cell':
				if (this.removedFieldsets.indexOf('celltype') == -1) {
					this.addConfigElement(this.buildCellTypeFieldsetConfig(element, false), generalTabItems);
				}
				break;
			case 'row':
				if (this.removedFieldsets.indexOf('rowgroup') == -1) {
					this.addConfigElement(this.buildRowGroupFieldsetConfig(element), generalTabItems);
				}
				break;
		}
		if (this.removedFieldsets.indexOf('style') == -1 && this.getPluginInstance('BlockStyle')) {
			this.addConfigElement(this.buildStylingFieldsetConfig(element, buttonId), generalTabItems);
		}
		if (!Ext.isEmpty(generalTabItems)) {
			tabItems.push({
				title: this.localize('General'),
				items: generalTabItems
			});
		}
		var layoutTabItems = [];
		if (type === 'table' && this.removedFieldsets.indexOf('spacing') === -1) {
			this.addConfigElement(this.buildSpacingFieldsetConfig(element), layoutTabItems);
		}
		if (this.removedFieldsets.indexOf('layout') == -1) {
			this.addConfigElement(this.buildLayoutFieldsetConfig(element), layoutTabItems);
		}
		if (!Ext.isEmpty(layoutTabItems)) {
			tabItems.push({
				title: this.localize('Layout'),
				items: layoutTabItems
			});
		}
		var languageTabItems = [];
		if (this.removedFieldsets.indexOf('language') === -1 && (this.removedProperties.indexOf('language') === -1 || this.removedProperties.indexOf('direction') === -1) && (this.getButton('Language') || this.getButton('LeftToRight') || this.getButton('RightToLeft'))) {
			this.addConfigElement(this.buildLanguageFieldsetConfig(element), languageTabItems);
		}
		if (!Ext.isEmpty(languageTabItems)) {
			tabItems.push({
				title: this.localize('Language'),
				items: languageTabItems
			});
		}
		var alignmentAndBordersTabItems = [];
		if (this.removedFieldsets.indexOf('alignment') === -1) {
			this.addConfigElement(this.buildAlignmentFieldsetConfig(element), alignmentAndBordersTabItems);
		}
		if (this.removedFieldsets.indexOf('borders') === -1) {
			this.addConfigElement(this.buildBordersFieldsetConfig(element), alignmentAndBordersTabItems);
		}
		if (!Ext.isEmpty(alignmentAndBordersTabItems)) {
			tabItems.push({
				title: this.localize('Alignment') + '/' + this.localize('Border'),
				items: alignmentAndBordersTabItems
			});
		}
		var colorTabItems = [];
		if (this.removedFieldsets.indexOf('color') === -1) {
			this.addConfigElement(this.buildColorsFieldsetConfig(element), colorTabItems);
		}
		if (!Ext.isEmpty(colorTabItems)) {
			tabItems.push({
				title: this.localize('Background and colors'),
				items: colorTabItems
			});
		}
		return tabItems;
	},
	/*
	 * Open the dialogue window
	 *
	 * @param	string		title: the window title
	 * @param	object		arguments: some arguments for the handler
	 * @param	integer		dimensions: the opening width of the window
	 * @param	object		tabItems: the configuration of the tabbed panel
	 * @param	function	handler: handler when the OK button if clicked
	 *
	 * @return	void
	 */
	openDialogue: function (title, arguments, dimensions, tabItems, handler) {
		if (this.dialog) {
			this.dialog.close();
		}
		this.dialog = new Ext.Window({
			title: this.getHelpTip(arguments.buttonId, title),
			arguments: arguments,
			cls: 'htmlarea-window',
				// As of ExtJS 3.1, JS error with IE when the window is resizable
			resizable: !Ext.isIE,
			border: false,
			width: dimensions.width,
			height: 'auto',
			iconCls: this.getButton(arguments.buttonId).iconCls,
			listeners: {
				close: {
					fn: this.onClose,
					scope: this
				}
			},
			items: {
				xtype: 'tabpanel',
				activeTab: 0,
				defaults: {
					xtype: 'container',
					layout: 'form',
					defaults: {
						labelWidth: 150
					}
				},
				listeners: {
					tabchange: {
						fn: this.syncHeight,
						scope: this
					}
				},
				items: tabItems
			},
			buttons: [
				this.buildButtonConfig('OK', handler),
				this.buildButtonConfig('Cancel', this.onCancel)
			]
		});
		this.show();
	},
	/*
	 * Insert the table or update the table properties and close the dialogue
	 */
	tablePropertiesUpdate: function () {
		this.restoreSelection()
		var params = {};
		var fieldTypes = ['combo', 'textfield', 'numberfield', 'checkbox', 'colorpalettefield'];
		this.dialog.findBy(function (item) {
			if (fieldTypes.indexOf(item.getXType()) !== -1) {
				params[item.getItemId()] = item.getValue();
				return true;
			}
			return false;
		});
		var errorFlag = false;
		if (this.properties.required) {
			if (this.properties.required.indexOf('captionOrSummary') != -1) {
				if (!/\S/.test(params.f_caption) && !/\S/.test(params.f_summary)) {
					TYPO3.Dialog.ErrorDialog({
						title: this.getButton(this.dialog.arguments.buttonId).tooltip.title,
						msg: this.localize('captionOrSummary' + '-required')
					});
					var field = this.dialog.find('itemId', 'f_caption')[0];
					var tab = field.findParentByType('container');
					tab.ownerCt.activate(tab);
					field.focus();
					return false;
				}
			} else {
				var required = {
					f_caption: 'caption',
					f_summary: 'summary'
				};
				Ext.iterate(required, function (item) {
					if (!params[item] && this.properties.required.indexOf(required[item]) != -1) {
						TYPO3.Dialog.ErrorDialog({
							title: this.getButton(this.dialog.arguments.buttonId).tooltip.title,
							msg: this.localize(required[item] + '-required')
						});
						var field = this.dialog.find('itemId', item)[0];
						var tab = field.findParentByType('container');
						tab.ownerCt.activate(tab);
						field.focus();
						errorFlag = true;
						return false;
					}
				}, this);
				if (errorFlag) {
					return false;
				}
			}
		}
		var doc = this.editor.document;
		if (this.dialog.arguments.buttonId === 'InsertTable') {
			var required = {
				f_rows: 'You must enter a number of rows',
				f_cols: 'You must enter a number of columns'
			};
			Ext.iterate(required, function (item) {
				if (!params[item]) {
					TYPO3.Dialog.ErrorDialog({
						title: this.getButton(this.dialog.arguments.buttonId).tooltip.title,
						msg: this.localize(required[item])
					});
					var field = this.dialog.find('itemId', item)[0];
					var tab = field.findParentByType('container');
					tab.ownerCt.activate(tab);
					field.focus();
					errorFlag = true;
					return false;
				}
			}, this);
			if (errorFlag) {
				return false;
			}
			var table = doc.createElement('table');
			var tbody = doc.createElement('tbody');
			table.appendChild(tbody);
			for (var i = params.f_rows; --i >= 0;) {
				var tr = doc.createElement('tr');
				tbody.appendChild(tr);
				for (var j = params.f_cols; --j >= 0;) {
					var td = doc.createElement('td');
					if (!Ext.isIE) td.innerHTML = '<br />';
					tr.appendChild(td);
				}
			}
		} else {
			var table = this.dialog.arguments.element;
		}
		this.setHeaders(table, params);
		this.processStyle(table, params);
		table.removeAttribute('border');
		Ext.iterate(params, function (item) {
			var val = params[item];
			switch (item) {
			    case "f_caption":
				if (/\S/.test(val)) {
					// contains non white-space characters
					var caption = table.getElementsByTagName("caption");
					if (caption) {
						caption = caption[0];
					}
					if (!caption) {
						var caption = doc.createElement("caption");
						table.insertBefore(caption, table.firstChild);
					}
					caption.innerHTML = val;
				} else {
					// delete the caption if found
					if (table.caption) table.deleteCaption();
				}
				break;
			    case "f_summary":
				table.summary = val;
				break;
			    case "f_width":
				table.style.width = ("" + val) + params.f_unit;
				break;
			    case "f_align":
				table.align = val;
				break;
			    case "f_spacing":
				table.cellSpacing = val;
				break;
			    case "f_padding":
				table.cellPadding = val;
				break;
			    case "f_frames":
			    	    if (val !== 'not set' && table.style.borderStyle !== 'none') {
			    	    	    table.frame = val;
			    	    } else {
			    	    	    table.removeAttribute('rules');
			    	    }
				break;
			    case "f_rules":
			    	    if (val !== 'not set') {
			    	    	    table.rules = val;
			    	    } else {
			    	    	    table.removeAttribute('rules');
			    	    }
				break;
			    case "f_st_float":
				switch (val) {
				    case "not set":
					HTMLArea.DOM.removeClass(table, this.floatRight);
					HTMLArea.DOM.removeClass(table, this.floatLeft);
					break;
				    case "right":
					HTMLArea.DOM.removeClass(table, this.floatLeft);
					HTMLArea.DOM.addClass(table, this.floatRight);
					break;
				    case "left":
					HTMLArea.DOM.removeClass(table, this.floatRight);
					HTMLArea.DOM.addClass(table, this.floatLeft);
					break;
				}
				break;
			    case "f_st_textAlign":
				if (this.getPluginInstance('BlockElements')) {
					this.getPluginInstance('BlockElements').toggleAlignmentClass(table, this.convertAlignment[val]);
					table.style.textAlign = "";
				}
				break;
			    case "f_class":
			    case "f_class_tbody":
			    case "f_class_thead":
			    case "f_class_tfoot":
				var tpart = table;
				if (item.length > 7) {
					tpart = table.getElementsByTagName(item.substring(8,13))[0];
				}
				if (tpart) {
					this.getPluginInstance('BlockStyle').applyClassChange(tpart, val);
				}
				break;
			    case "f_lang":
				this.getPluginInstance('Language').setLanguageAttributes(table, val);
				break;
			    case "f_dir":
				table.dir = (val != "not set") ? val : "";
				break;
			}
		}, this);
		if (this.dialog.arguments.buttonId === "InsertTable") {
			if (!Ext.isIE) {
				this.editor.getSelection().insertNode(table);
			} else {
				table.id = "htmlarea_table_insert";
				this.editor.getSelection().insertNode(table);
				table = this.editor.document.getElementById(table.id);
				table.removeAttribute("id");
			}
			this.editor.getSelection().selectNodeContents(table.rows[0].cells[0], true);
			if (this.buttonsConfiguration.toggleborders && this.buttonsConfiguration.toggleborders.setOnTableCreation) {
				this.toggleBorders(true);
			}
		}
		this.close();
	},
	/*
	 * Update the row/column/cell properties
	 */
	rowCellPropertiesUpdate: function() {
		this.restoreSelection()
			// Collect values from each form field
		var params = {};
		var fieldTypes = ['combo', 'textfield', 'numberfield', 'checkbox', 'colorpalettefield'];
		this.dialog.findBy(function (item) {
			if (fieldTypes.indexOf(item.getXType()) !== -1) {
				params[item.getItemId()] = item.getValue();
				return true;
			}
			return false;
		});
		var cell = this.dialog.arguments.cell;
		var column = this.dialog.arguments.column;
		var section = (cell || column) ? this.dialog.arguments.element.parentNode.parentNode : this.dialog.arguments.element.parentNode;
		var table = section.parentNode;
		var elements = [];
		if (column) {
			elements = this.getColumnCells(this.dialog.arguments.element);
		} else {
			elements.push(this.dialog.arguments.element);
		}
		Ext.each(elements, function (element) {
			this.processStyle(element, params);
			Ext.iterate(params, function (item) {
				var val = params[item];
				switch (item) {
				    case "f_cell_type":
					if (val.substring(0,2) != element.nodeName.toLowerCase()) {
						element = this.remapCell(element, val.substring(0,2));
						this.editor.getSelection().selectNodeContents(element, true);
					}
					if (val.substring(2,10) != element.scope) {
						element.scope = val.substring(2,10);
					}
					break;
				    case "f_cell_abbr":
					if (!column) {
					    	element.abbr = (element.nodeName.toLowerCase() == 'td') ? '' : val;
					}
					break;
				    case "f_rowgroup":
					var nodeName = section.nodeName.toLowerCase();
					if (val != nodeName) {
						var newSection = table.getElementsByTagName(val)[0];
						if (!newSection) var newSection = table.insertBefore(this.editor.document.createElement(val), table.getElementsByTagName("tbody")[0]);
						if (nodeName == "thead" && val == "tbody") var newElement = newSection.insertBefore(element, newSection.firstChild);
							else var newElement = newSection.appendChild(element);
						if (!section.hasChildNodes()) table.removeChild(section);
					}
					if (params.f_convertCells) {
						if (val == "thead") {
							this.remapRowCells(element, "th");
						} else {
							this.remapRowCells(element, "td");
						}
					}
					break;
				    case "f_st_textAlign":
					if (this.getPluginInstance('BlockElements')) {
						this.getPluginInstance('BlockElements').toggleAlignmentClass(element, this.convertAlignment[val]);
						element.style.textAlign = "";
					}
					break;
				    case "f_class":
					this.getPluginInstance('BlockStyle').applyClassChange(element, val);
					break;
				    case "f_lang":
					this.getPluginInstance('Language').setLanguageAttributes(element, val);
					break;
				    case "f_dir":
					element.dir = (val != "not set") ? val : "";
					break;
				}
			}, this);
		}, this);
		this.reStyleTable(table);
		this.close();
	},
	/*
	 * This function gets called when the plugin is generated
	 */
	onGenerate: function () {
			// Set table borders if requested by configuration
		if (this.buttonsConfiguration.toggleborders && this.buttonsConfiguration.toggleborders.setOnRTEOpen) {
			this.toggleBorders(true);
		}
			// Register handler for the enter key for IE and Opera when buttons.table.disableEnterParagraphs is set in the editor configuration
		if ((Ext.isIE || Ext.isOpera) && this.disableEnterParagraphs) {
			this.editor.iframe.keyMap.addBinding({
				key: Ext.EventObject.ENTER,
				shift: false,
				handler: this.onKey,
				scope: this
			});
		}
	},
	/*
	 * This function gets called when the toolbar is being updated
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors) {
		if (mode === 'wysiwyg' && this.editor.isEditable()) {
			switch (button.itemId) {
				case 'TO-toggle-borders':
					button.setInactive(!HTMLArea.DOM.hasClass(this.editor.document.body, 'htmlarea-showtableborders'));
					break;
				case 'TO-cell-merge':
					if (Ext.isGecko) {
						var selection = this.editor.getSelection().get().selection;
						button.setDisabled(button.disabled || selection.rangeCount < 2);
					}
					break;
			}
		}
	},
	/*
	 * This function gets called when a Table Operations button was pressed.
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id, target) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
		
		var mozbr = !Ext.isIE ? "<br />" : "";
		var tableParts = ["tfoot", "thead", "tbody"];
		var tablePartsIndex = { tfoot : 0, thead : 1, tbody : 2 };
		
		// helper function that clears the content in a table row
		function clearRow(tr) {
			var tds = tr.getElementsByTagName("td");
			for (var i = tds.length; --i >= 0;) {
				var td = tds[i];
				td.rowSpan = 1;
				td.innerHTML = mozbr;
			}
			var tds = tr.getElementsByTagName("th");
			for (var i = tds.length; --i >= 0;) {
				var td = tds[i];
				td.rowSpan = 1;
				td.innerHTML = mozbr;
			}
		};
	
		function splitRow(td) {
			var n = parseInt("" + td.rowSpan);
			var colSpan = td.colSpan;
			var nodeName = td.nodeName.toLowerCase();
			td.rowSpan = 1;
			var tr = td.parentNode;
			var sectionRowIndex = tr.sectionRowIndex;
			var rows = tr.parentNode.rows;
			var index = td.cellIndex;
			while (--n > 0) {
				tr = rows[++sectionRowIndex];
					// Last row
				if (!tr) tr = td.parentNode.parentNode.appendChild(editor.document.createElement("tr"));
				var otd = editor.document.createElement(nodeName);
				otd.colSpan = colSpan;
				otd.innerHTML = mozbr;
				tr.insertBefore(otd, tr.cells[index]);
			}
		};
	
		function splitCol(td) {
			var nc = parseInt("" + td.colSpan);
			var nodeName = td.nodeName.toLowerCase();
			td.colSpan = 1;
			var tr = td.parentNode;
			var ref = td.nextSibling;
			while (--nc > 0) {
				var otd = editor.document.createElement(nodeName);
				otd.rowSpan = td.rowSpan;
				otd.innerHTML = mozbr;
				tr.insertBefore(otd, ref);
			}
		};
	
		function splitCell(td) {
			var nc = parseInt("" + td.colSpan);
			splitCol(td);
			var cells = td.parentNode.cells;
			var index = td.cellIndex;
			while (nc-- > 0) {
				splitRow(cells[index++]);
			}
		};
	
		function selectNextNode(el) {
			var node = el.nextSibling;
			while (node && node.nodeType != 1) {
				node = node.nextSibling;
			}
			if (!node) {
				node = el.previousSibling;
				while (node && node.nodeType != 1) {
					node = node.previousSibling;
				}
			}
			if (!node) node = el.parentNode;
			editor.getSelection().selectNodeContents(node);
		};
		
		function getSelectedCells(sel) {
			var cell, range, i = 0, cells = [];
			try {
				while (range = sel.getRangeAt(i++)) {
					cell = range.startContainer.childNodes[range.startOffset];
					while (!/^(td|th|body)$/.test(cell.nodeName.toLowerCase())) cell = cell.parentNode;
					if (/^(td|th)$/.test(cell.nodeName.toLowerCase())) cells.push(cell);
				}
			} catch(e) {
			/* finished walking through selection */
			}
			return cells;
		};
		
		function deleteEmptyTable(table) {
			var lastPart = true;
			for (var j = tableParts.length; --j >= 0;) {
				var tablePart = table.getElementsByTagName(tableParts[j])[0];
				if (tablePart) lastPart = false;
			}
			if (lastPart) {
				selectNextNode(table);
				table.parentNode.removeChild(table);
			}
		};
		
		function computeCellIndexes(table) {
			var matrix = [];
			var lookup = {};
			for (var m = tableParts.length; --m >= 0;) {
				var tablePart = table.getElementsByTagName(tableParts[m])[0];
				if (tablePart) {
					var rows = tablePart.rows;
					for (var i = 0, n = rows.length; i < n; i++) {
						var cells = rows[i].cells;
						for (var j=0; j< cells.length; j++) {
							var cell = cells[j];
							var rowIndex = cell.parentNode.rowIndex;
							var cellId = tableParts[m]+"-"+rowIndex+"-"+cell.cellIndex;
							var rowSpan = cell.rowSpan || 1;
							var colSpan = cell.colSpan || 1;
							var firstAvailCol;
							if(typeof(matrix[rowIndex])=="undefined") { matrix[rowIndex] = []; }
							// Find first available column in the first row
							for (var k=0; k<matrix[rowIndex].length+1; k++) {
								if (typeof(matrix[rowIndex][k])=="undefined") {
									firstAvailCol = k;
									break;
								}
							}
							lookup[cellId] = firstAvailCol;
							for (var k=rowIndex; k<rowIndex+rowSpan; k++) {
								if (typeof(matrix[k])=="undefined") { matrix[k] = []; }
								var matrixrow = matrix[k];
								for (var l=firstAvailCol; l<firstAvailCol+colSpan; l++) {
									matrixrow[l] = "x";
								}
							}
						}
					}
				}
			}
			return lookup;
		};
		
		function getActualCellIndex(cell, lookup) {
			return lookup[cell.parentNode.parentNode.nodeName.toLowerCase()+"-"+cell.parentNode.rowIndex+"-"+cell.cellIndex];
		};
		
		switch (buttonId) {
			// ROWS
		    case "TO-row-insert-above":
		    case "TO-row-insert-under":
			var tr = this.editor.getSelection().getFirstAncestorOfType("tr");
			if (!tr) break;
			var otr = tr.cloneNode(true);
			clearRow(otr);
			otr = tr.parentNode.insertBefore(otr, (/under/.test(buttonId) ? tr.nextSibling : tr));
			this.editor.getSelection().selectNodeContents(otr.firstChild, true);
			this.reStyleTable(tr.parentNode.parentNode);
			break;
		    case "TO-row-delete":
			var tr = this.editor.getSelection().getFirstAncestorOfType("tr");
			if (!tr) break;
			var part = tr.parentNode;
			var table = part.parentNode;
			if(part.rows.length == 1) {  // this the last row, delete the whole table part
				selectNextNode(part);
				table.removeChild(part);
				deleteEmptyTable(table);
			} else {
					// set the caret first to a position that doesn't disappear.
				selectNextNode(tr);
				part.removeChild(tr);
			}
			this.reStyleTable(table);
			break;
		    case "TO-row-split":
			var cell = this.editor.getSelection().getFirstAncestorOfType(['td', 'th']);
			if (!cell) break;
			var sel = editor.getSelection().get().selection;
			if (Ext.isGecko && !sel.isCollapsed) {
				var cells = getSelectedCells(sel);
				for (i = 0; i < cells.length; ++i) {
					splitRow(cells[i]);
				}
			} else {
				splitRow(cell);
			}
			break;
	
			// COLUMNS
		    case "TO-col-insert-before":
		    case "TO-col-insert-after":
			var cell = this.editor.getSelection().getFirstAncestorOfType(['td', 'th']);
			if (!cell) break;
			var index = cell.cellIndex;
			var table = cell.parentNode.parentNode.parentNode;
			for (var j = tableParts.length; --j >= 0;) {
				var tablePart = table.getElementsByTagName(tableParts[j])[0];
				if (tablePart) {
					var rows = tablePart.rows;
					for (var i = rows.length; --i >= 0;) {
						var tr = rows[i];
						var ref = tr.cells[index + (/after/.test(buttonId) ? 1 : 0)];
						if (!ref) {
							var otd = editor.document.createElement(tr.lastChild.nodeName.toLowerCase());
							otd.innerHTML = mozbr;
							tr.appendChild(otd);
						} else {
							var otd = editor.document.createElement(ref.nodeName.toLowerCase());
							otd.innerHTML = mozbr;
							tr.insertBefore(otd, ref);
						}
					}
				}
			}
			this.reStyleTable(table);
			break;
		    case "TO-col-split":
		    	var cell = this.editor.getSelection().getFirstAncestorOfType(['td', 'th']);
			if (!cell) break;
			var sel = this.editor.getSelection().get().selection;
			if (Ext.isGecko && !sel.isCollapsed) {
				var cells = getSelectedCells(sel);
				for (i = 0; i < cells.length; ++i) {
					splitCol(cells[i]);
				}
			} else {
				splitCol(cell);
			}
			this.reStyleTable(table);
			break;
		    case "TO-col-delete":
			var cell = this.editor.getSelection().getFirstAncestorOfType(['td', 'th']);
			if (!cell) break;
			var index = cell.cellIndex;
			var part = cell.parentNode.parentNode;
			var table = part.parentNode;
			var lastPart = true;
			for (var j = tableParts.length; --j >= 0;) {
				var tablePart = table.getElementsByTagName(tableParts[j])[0];
				if (tablePart) {
					var rows = tablePart.rows;
					var lastColumn = true;
					for (var i = rows.length; --i >= 0;) {
						if(rows[i].cells.length > 1) lastColumn = false;
					}
					if (lastColumn) {
							// this is the last column, delete the whole tablepart
							// set the caret first to a position that doesn't disappear
						selectNextNode(tablePart);
						table.removeChild(tablePart);
					} else {
							// set the caret first to a position that doesn't disappear
						if (part == tablePart) selectNextNode(cell);
						for (var i = rows.length; --i >= 0;) {
							if(rows[i].cells[index]) rows[i].removeChild(rows[i].cells[index]);
						}
						lastPart = false;
					}
				}
			}
			if (lastPart) {
					// the last table section was deleted: delete the whole table
					// set the caret first to a position that doesn't disappear
				selectNextNode(table);
				table.parentNode.removeChild(table);
			}
			this.reStyleTable(table);
			break;
	
			// CELLS
		    case "TO-cell-split":
			var cell = this.editor.getSelection().getFirstAncestorOfType(['td', 'th']);
			if (!cell) break;
			var sel = this.editor.getSelection().get().selection;
			if (Ext.isGecko && !sel.isCollapsed) {
				var cells = getSelectedCells(sel);
				for (i = 0; i < cells.length; ++i) {
					splitCell(cells[i]);
				}
			} else {
				splitCell(cell);
			}
			this.reStyleTable(table);
			break;
		    case "TO-cell-insert-before":
		    case "TO-cell-insert-after":
			var cell = this.editor.getSelection().getFirstAncestorOfType(['td', 'th']);
			if (!cell) break;
			var tr = cell.parentNode;
			var otd = editor.document.createElement(cell.nodeName.toLowerCase());
			otd.innerHTML = mozbr;
			tr.insertBefore(otd, (/after/.test(buttonId) ? cell.nextSibling : cell));
			this.reStyleTable(tr.parentNode.parentNode);
			break;
		    case "TO-cell-delete":
			var cell = this.editor.getSelection().getFirstAncestorOfType(['td', 'th']);
			if (!cell) break;
			var row = cell.parentNode;
			if(row.cells.length == 1) {  // this is the only cell in the row, delete the row
				var part = row.parentNode;
				var table = part.parentNode;
				if (part.rows.length == 1) {  // this the last row, delete the whole table part
					selectNextNode(part);
					table.removeChild(part);
					deleteEmptyTable(table);
				} else {
					selectNextNode(row);
					part.removeChild(row);
				}
			} else {
					// set the caret first to a position that doesn't disappear
				selectNextNode(cell);
				row.removeChild(cell);
			}
			this.reStyleTable(table);
			break;
		    case "TO-cell-merge":
			var sel = this.editor.getSelection().get().selection;
			var range, i = 0;
			var rows = new Array();
			for (var k = tableParts.length; --k >= 0;) rows[k] = [];
			var row = null;
			var cells = null;
			if (Ext.isGecko) {
				try {
					while (range = sel.getRangeAt(i++)) {
						var td = range.startContainer.childNodes[range.startOffset];
						if (td.parentNode != row) {
							(cells) && rows[tablePartsIndex[row.parentNode.nodeName.toLowerCase()]].push(cells);
							row = td.parentNode;
							cells = [];
						}
						cells.push(td);
					}
				} catch(e) {
					/* finished walking through selection */
				}
				try { rows[tablePartsIndex[row.parentNode.nodeName.toLowerCase()]].push(cells); } catch(e) { }
			} else {
				// Internet Explorer, WebKit and Opera
				var cell = this.editor.getSelection().getFirstAncestorOfType(['td', 'th']);
				if (!cell) {
					TYPO3.Dialog.InformationDialog({
						title: this.getButton('TO-cell-merge').tooltip.title,
						msg: this.localize('Please click into some cell')
					});
					break;
				}
				var tr = cell.parentNode;
				var no_cols = parseInt(prompt(this.localize("How many columns would you like to merge?"), 2));
				if (!no_cols) break;
				var no_rows = parseInt(prompt(this.localize("How many rows would you like to merge?"), 2));
				if (!no_rows) break;
				var lookup = computeCellIndexes(cell.parentNode.parentNode.parentNode);
				var first_index = getActualCellIndex(cell, lookup);
					// Collect cells on first row
				var td = cell, colspan = 0;
				cells = [];
				for (var i = no_cols; --i >= 0;) {
					if (!td) break;
					cells.push(td);
					var last_index = getActualCellIndex(td, lookup);
					td = td.nextSibling;
				}
				rows[tablePartsIndex[tr.parentNode.nodeName.toLowerCase()]].push(cells);
					// Collect cells on following rows
				var index, first_index_found, last_index_found;
				for (var j = 1; j < no_rows; ++j) {
					tr = tr.nextSibling;
					if (!tr) break;
					cells = [];
					first_index_found = false;
					for (var i = 0; i < tr.cells.length; ++i) {
						td = tr.cells[i];
						if (!td) break;
						index = getActualCellIndex(td, lookup);
						if (index > last_index) break;
						if (index == first_index) first_index_found = true;
						if (index >= first_index) cells.push(td);
					}
						// If not rectangle, we quit!
					if (!first_index_found) break;
					rows[tablePartsIndex[tr.parentNode.nodeName.toLowerCase()]].push(cells);
				}
			}
			for (var k = tableParts.length; --k >= 0;) {
				var cell, row;
				var cellHTML = "";
				var cellRowSpan = 0;
				var cellColSpan, maxCellColSpan = 0;
				if (rows[k] && rows[k][0]) {
					for (var i = 0; i < rows[k].length; ++i) {
						var cells = rows[k][i];
						var cellColSpan = 0;
						if (!cells) continue;
						cellRowSpan += cells[0].rowSpan ? cells[0].rowSpan : 1;
						for (var j = 0; j < cells.length; ++j) {
							cell = cells[j];
							row = cell.parentNode;
							cellHTML += cell.innerHTML;
							cellColSpan += cell.colSpan ? cell.colSpan : 1;
							if (i || j) {
								cell.parentNode.removeChild(cell);
								if(!row.cells.length) row.parentNode.removeChild(row);
							}
						}
						if (maxCellColSpan < cellColSpan) {
							maxCellColSpan = cellColSpan;
						}
					}
					var td = rows[k][0][0];
					td.innerHTML = cellHTML;
					td.rowSpan = cellRowSpan;
					td.colSpan = maxCellColSpan;
					editor.getSelection().selectNodeContents(td);
				}
			}
			this.reStyleTable(table);
			break;
			
			// CREATION AND PROPERTIES
		    case "InsertTable":
		    case "TO-table-prop":
		    	this.openPropertiesDialogue('table', buttonId);
			break;
		    case "TO-table-restyle":
			this.reStyleTable(this.editor.getSelection().getFirstAncestorOfType('table'));
			break;
		    case "TO-row-prop":
		    	this.openPropertiesDialogue('row', buttonId);
			break;
		    case "TO-col-prop":
		    	this.openPropertiesDialogue('column', buttonId);
			break;
		    case "TO-cell-prop":
		    	this.openPropertiesDialogue('cell', buttonId);
			break;
		    case "TO-toggle-borders":
			this.toggleBorders();
			break;
		    default:
			break;
		}
	},
	/*
	 * Returns an array of all cells in the column containing the given cell
	 *
	 * @param	object		cell: the cell serving as reference point for the column
	 *
	 * @return	array		the array of cells of the column
	 */
	getColumnCells : function (cell) {
		var cells = new Array();
		var index = cell.cellIndex;
		var table = cell.parentNode.parentNode.parentNode;
		for (var j = this.tableParts.length; --j >= 0;) {
			var tablePart = table.getElementsByTagName(this.tableParts[j])[0];
			if (tablePart) {
				var rows = tablePart.rows;
				for (var i = rows.length; --i >= 0;) {
					if(rows[i].cells.length > index) {
						cells.push(rows[i].cells[index]);
					}
				}
			}
		}
		return cells;
	},
	/*
	 * Toggles the display of borders on tables and table cells
	 *
	 * @param	boolean		forceBorders: if set, borders are displayed whatever the current state
	 *
	 * @return	void
	 */
	toggleBorders : function (forceBorders) {
		var body = this.editor.document.body;
		if (!HTMLArea.DOM.hasClass(body, 'htmlarea-showtableborders')) {
			HTMLArea.DOM.addClass(body,'htmlarea-showtableborders');
		} else if (!forceBorders) {
			HTMLArea.DOM.removeClass(body,'htmlarea-showtableborders');
		}
	},
	/*
	 * Applies to rows/cells the alternating and counting classes of an alternating or counting style scheme
	 *
	 * @param	object		table: the table to be re-styled
	 *
	 * @return	void
	 */
	reStyleTable: function (table) {
		if (table) {
			if (this.classesUrl && (typeof(HTMLArea.classesAlternating) === 'undefined' || typeof(HTMLArea.classesCounting) === 'undefined')) {
				this.getJavascriptFile(this.classesUrl, function (options, success, response) {
					if (success) {
						try {
							if (typeof(HTMLArea.classesAlternating) === 'undefined' || typeof(HTMLArea.classesCounting) === 'undefined') {
								eval(response.responseText);
							}
							this.reStyleTable(table);
						} catch(e) {
							this.appendToLog('reStyleTable', 'Error evaluating contents of Javascript file: ' + this.classesUrl, 'error');
						}
					}
				});
			} else {
				var classNames = table.className.trim().split(' ');
				for (var i = classNames.length; --i >= 0;) {
					var classConfiguration = HTMLArea.classesAlternating[classNames[i]];
					if (classConfiguration && classConfiguration.rows) {
						if (classConfiguration.rows.oddClass && classConfiguration.rows.evenClass) {
							this.alternateRows(table, classConfiguration);
						}
					}
					if (classConfiguration && classConfiguration.columns) {
						if (classConfiguration.columns.oddClass && classConfiguration.columns.evenClass) {
							this.alternateColumns(table, classConfiguration);
						}
					}
					classConfiguration = HTMLArea.classesCounting[classNames[i]];
					if (classConfiguration && classConfiguration.rows) {
						if (classConfiguration.rows.rowClass) {
							this.countRows(table, classConfiguration);
						}
					}
					if (classConfiguration && classConfiguration.columns) {
						if (classConfiguration.columns.columnClass) {
							this.countColumns(table, classConfiguration);
						}
					}
				}
			}
		}
	},
	/*
	 * Removes from rows/cells the alternating classes of an alternating style scheme
	 *
	 * @param	object		table: the table to be re-styled
	 * @param	string		removeClass: the name of the class that identifies the alternating style scheme
	 *
	 * @return	void
	 */
	removeAlternatingClasses: function (table, removeClass) {
		if (table) {
			if (this.classesUrl && typeof(HTMLArea.classesAlternating) === 'undefined') {
				this.getJavascriptFile(this.classesUrl, function (options, success, response) {
					if (success) {
						try {
							if (typeof(HTMLArea.classesAlternating) === 'undefined') {
								eval(response.responseText);
							}
							this.removeAlternatingClasses(table, removeClass);
						} catch(e) {
							this.appendToLog('removeAlternatingClasses', 'Error evaluating contents of Javascript file: ' + this.classesUrl, 'error');
						}
					}
				});
			} else {
				var classConfiguration = HTMLArea.classesAlternating[removeClass];
				if (classConfiguration) {
					if (classConfiguration.rows && classConfiguration.rows.oddClass && classConfiguration.rows.evenClass) {
						this.alternateRows(table, classConfiguration, true);
					}
					if (classConfiguration.columns && classConfiguration.columns.oddClass && classConfiguration.columns.evenClass) {
						this.alternateColumns(table, classConfiguration, true);
					}
				}
			}
		}
	},
	/*
	 * Applies/removes the alternating classes of an alternating rows style scheme
	 *
	 * @param	object		table: the table to be re-styled
	 * @param	object		classConfifuration: the alternating sub-array of the configuration of the class
	 * @param	boolean		remove: if true, the classes are removed
	 *
	 * @return	void
	 */
	alternateRows : function (table, classConfiguration, remove) {
		var oddClass = { tbody : classConfiguration.rows.oddClass, thead : classConfiguration.rows.oddHeaderClass };
		var evenClass = { tbody : classConfiguration.rows.evenClass, thead : classConfiguration.rows.evenHeaderClass };
		var startAt = parseInt(classConfiguration.rows.startAt);
		startAt = remove ? 1 : (startAt ? startAt : 1);
		var rows = table.rows, type, odd, even;
			// Loop through the rows
		for (var i = startAt-1, n = rows.length; i < n; i++) {
			var row = rows[i];
			type = (row.parentNode.nodeName.toLowerCase() == "thead") ? "thead" : "tbody";
			odd = oddClass[type];
			even = evenClass[type];
			if (remove) {
				HTMLArea.DOM.removeClass(row, odd);
				HTMLArea.DOM.removeClass(row, even);
				// Check if i is even, and apply classes for both possible results
			} else if (odd && even) {
				if ((i % 2) == 0) {
					if (HTMLArea.DOM.hasClass(row, even)) {
						HTMLArea.DOM.removeClass(row, even);
					}
					HTMLArea.DOM.addClass(row, odd);
				} else {
					if (HTMLArea.DOM.hasClass(row, odd)) {
						HTMLArea.DOM.removeClass(row, odd);
					}
					HTMLArea.DOM.addClass(row, even);
				}
			}
		}
	},
	/*
	 * Applies/removes the alternating classes of an alternating columns style scheme
	 *
	 * @param	object		table: the table to be re-styled
	 * @param	object		classConfifuration: the alternating sub-array of the configuration of the class
	 * @param	boolean		remove: if true, the classes are removed
	 *
	 * @return	void
	 */
	alternateColumns : function (table, classConfiguration, remove) {
		var oddClass = { td : classConfiguration.columns.oddClass, th : classConfiguration.columns.oddHeaderClass };
		var evenClass = { td : classConfiguration.columns.evenClass, th : classConfiguration.columns.evenHeaderClass };
		var startAt = parseInt(classConfiguration.columns.startAt);
		startAt = remove ? 1 : (startAt ? startAt : 1);
		var rows = table.rows, type, odd, even;
			// Loop through the rows of the table
		for (var i = rows.length; --i >= 0;) {
				// Loop through the cells
			var cells = rows[i].cells;
			for (var j = startAt-1, n = cells.length; j < n; j++) {
				var cell = cells[j];
				type = cell.nodeName.toLowerCase();
				odd = oddClass[type];
				even = evenClass[type];
				if (remove) {
					if (odd) HTMLArea.DOM.removeClass(cell, odd);
					if (even) HTMLArea.DOM.removeClass(cell, even);
				} else if (odd && even) {
						// Check if j+startAt is even, and apply classes for both possible results
					if ((j % 2) == 0) {
						if (HTMLArea.DOM.hasClass(cell, even)) {
							HTMLArea.DOM.removeClass(cell, even);
						}
						HTMLArea.DOM.addClass(cell, odd);
					} else{
						if (HTMLArea.DOM.hasClass(cell, odd)) {
							HTMLArea.DOM.removeClass(cell, odd);
						}
						HTMLArea.DOM.addClass(cell, even);
					}
				}
			}
		}
	},
	/*
	 * Removes from rows/cells the counting classes of an counting style scheme
	 *
	 * @param	object		table: the table to be re-styled
	 * @param	string		removeClass: the name of the class that identifies the counting style scheme
	 *
	 * @return	void
	 */
	removeCountingClasses: function (table, removeClass) {
		if (table) {
			if (this.classesUrl && typeof(HTMLArea.classesCounting) === 'undefined') {
				this.getJavascriptFile(this.classesUrl, function (options, success, response) {
					if (success) {
						try {
							if (typeof(HTMLArea.classesCounting) === 'undefined') {
								eval(response.responseText);
							}
							this.removeCountingClasses(table, removeClass);
						} catch(e) {
							this.appendToLog('removeCountingClasses', 'Error evaluating contents of Javascript file: ' + this.classesUrl, 'error');
						}
					}
				});
			} else {
				var classConfiguration = HTMLArea.classesCounting[removeClass];
				if (classConfiguration) {
					if (classConfiguration.rows && classConfiguration.rows.rowClass) {
						this.countRows(table, classConfiguration, true);
					}
					if (classConfiguration.columns && classConfiguration.columns.columnClass) {
						this.countColumns(table, classConfiguration, true);
					}
				}
			}
		}
	},
	/*
	 * Applies/removes the counting classes of an counting rows style scheme
	 *
	 * @param	object		table: the table to be re-styled
	 * @param	object		classConfifuration: the counting sub-array of the configuration of the class
	 * @param	boolean		remove: if true, the classes are removed
	 *
	 * @return	void
	 */
	countRows : function (table, classConfiguration, remove) {
		var rowClass = { tbody : classConfiguration.rows.rowClass, thead : classConfiguration.rows.rowHeaderClass };
		var rowLastClass = { tbody : classConfiguration.rows.rowLastClass, thead : classConfiguration.rows.rowHeaderLastClass };
		var startAt = parseInt(classConfiguration.rows.startAt);
		startAt = remove ? 1 : (startAt ? startAt : 1);
		var rows = table.rows, type, baseClassName, rowClassName, lastRowClassName;
			// Loop through the rows
		for (var i = startAt-1, n = rows.length; i < n; i++) {
			var row = rows[i];
			type = (row.parentNode.nodeName.toLowerCase() == "thead") ? "thead" : "tbody";
			baseClassName = rowClass[type];
			rowClassName = baseClassName + (i+1);
			lastRowClassName = rowLastClass[type];
			if (remove) {
				if (baseClassName) {
					HTMLArea.DOM.removeClass(row, rowClassName);
				}
				if (lastRowClassName && i == n-1) {
					HTMLArea.DOM.removeClass(row, lastRowClassName);
				}
			} else {
				if (baseClassName) {
					if (HTMLArea.DOM.hasClass(row, baseClassName, true)) {
						HTMLArea.DOM.removeClass(row, baseClassName, true);
					}
					HTMLArea.DOM.addClass(row, rowClassName);
				}
				if (lastRowClassName) {
					if (i == n-1) {
						HTMLArea.DOM.addClass(row, lastRowClassName);
					} else if (HTMLArea.DOM.hasClass(row, lastRowClassName)) {
						HTMLArea.DOM.removeClass(row, lastRowClassName);
					}
				}
			}
		}
	},
	/*
	 * Applies/removes the counting classes of a counting columns style scheme
	 *
	 * @param	object		table: the table to be re-styled
	 * @param	object		classConfifuration: the counting sub-array of the configuration of the class
	 * @param	boolean		remove: if true, the classes are removed
	 *
	 * @return	void
	 */
	countColumns : function (table, classConfiguration, remove) {
		var columnClass = { td : classConfiguration.columns.columnClass, th : classConfiguration.columns.columnHeaderClass };
		var columnLastClass = { td : classConfiguration.columns.columnLastClass, th : classConfiguration.columns.columnHeaderLastClass };
		var startAt = parseInt(classConfiguration.columns.startAt);
		startAt = remove ? 1 : (startAt ? startAt : 1);
		var rows = table.rows, type, baseClassName, columnClassName, lastColumnClassName;
			// Loop through the rows of the table
		for (var i = rows.length; --i >= 0;) {
				// Loop through the cells
			var cells = rows[i].cells;
			for (var j = startAt-1, n = cells.length; j < n; j++) {
				var cell = cells[j];
				type = cell.nodeName.toLowerCase();
				baseClassName = columnClass[type];
				columnClassName = baseClassName + (j+1);
				lastColumnClassName = columnLastClass[type];
				if (remove) {
					if (baseClassName) {
						HTMLArea.DOM.removeClass(cell, columnClassName);
					}
					if (lastColumnClassName && j == n-1) {
							HTMLArea.DOM.removeClass(cell, lastColumnClassName);
					}
				} else {
					if (baseClassName) {
						if (HTMLArea.DOM.hasClass(cell, baseClassName, true)) {
							HTMLArea.DOM.removeClass(cell, baseClassName, true);
						}
						HTMLArea.DOM.addClass(cell, columnClassName);
					}
					if (lastColumnClassName) {
						if (j == n-1) {
							HTMLArea.DOM.addClass(cell, lastColumnClassName);
						} else if (HTMLArea.DOM.hasClass(cell, lastColumnClassName)) {
							HTMLArea.DOM.removeClass(cell, lastColumnClassName);
						}
					}
				}
			}
		}
	},
	/*
	 * This function sets the headers cells on the table (top, left, both or none)
	 *
	 * @param	object		table: the table being edited
	 * @param	object		params: the field values entered in the form
	 *
	 * @return	void
	 */
	setHeaders: function (table, params) {
		var headers = params.f_headers;
		var doc = this.editor.document;
		var tbody = table.tBodies[0];
		var thead = table.tHead;
		if (thead && !thead.rows.length && !tbody.rows.length) {
			 // Table is degenerate
			return table;
		}
		if (headers == "top") {
			if (!thead) {
				var thead = doc.createElement("thead");
				thead = table.insertBefore(thead, tbody);
			}
			if (!thead.rows.length) {
				var firstRow = thead.appendChild(tbody.rows[0]);
			} else {
				var firstRow = thead.rows[0];
			}
			HTMLArea.DOM.removeClass(firstRow, this.useHeaderClass);
		} else {
			if (thead) {
				var rows = thead.rows;
				if (rows.length) {
					for (var i = rows.length; --i >= 0 ;) {
						this.remapRowCells(rows[i], "td");
						if (tbody.rows.length) {
							tbody.insertBefore(rows[i], tbody.rows[0]);
						} else {
							tbody.appendChild(rows[i]);
						}
					}
				}
				table.removeChild(thead);
			}
		}
		if (headers == "both") {
			var firstRow = tbody.rows[0];
			HTMLArea.DOM.addClass(firstRow, this.useHeaderClass);
		} else if (headers != "top") {
			var firstRow = tbody.rows[0];
			HTMLArea.DOM.removeClass(firstRow, this.useHeaderClass);
			this.remapRowCells(firstRow, "td");
		}
		if (headers == "top" || headers == "both") {
			this.remapRowCells(firstRow, "th");
		}
		if (headers == "left") {
			var firstRow = tbody.rows[0];
		}
		if (headers == "left" || headers == "both") {
			var rows = tbody.rows;
			for (var i = rows.length; --i >= 0 ;) {
				if (i || rows[i] == firstRow) {
					if (rows[i].cells[0].nodeName.toLowerCase() != "th") {
						var th = this.remapCell(rows[i].cells[0], "th");
						th.scope = "row";
					}
				}
			}
		} else {
			var rows = tbody.rows;
			for (var i = rows.length; --i >= 0 ;) {
				if (rows[i].cells[0].nodeName.toLowerCase() != "td") {
					rows[i].cells[0].scope = "";
					var td = this.remapCell(rows[i].cells[0], "td");
				}
			}
		}
		this.reStyleTable(table);
	},
	
	/*
	 * This function remaps the given cell to the specified node name
	 */
	remapCell : function(element, nodeName) {
		var newCell = HTMLArea.DOM.convertNode(element, nodeName);
		var attributes = element.attributes, attributeName, attributeValue;
		for (var i = attributes.length; --i >= 0;) {
			attributeName = attributes.item(i).nodeName;
			if (nodeName != 'td' || (attributeName != 'scope' && attributeName != 'abbr')) {
				attributeValue = element.getAttribute(attributeName);
				if (attributeValue) {
					newCell.setAttribute(attributeName, attributeValue);
				}
			}
		}
			// In IE, the above fails to update the classname and style attributes.
		if (Ext.isIE) {
			if (element.style.cssText) {
				newCell.style.cssText = element.style.cssText;
			}
			if (element.className) {
				newCell.setAttribute("class", element.className);
				if (!newCell.className) {
						// IE before IE8
					newCell.setAttribute("className", element.className);
				}
			} else {
				newCell.removeAttribute("class");
					// IE before IE8
				newCell.removeAttribute("className");
			}
		}
		
		if (this.tags && this.tags[nodeName] && this.tags[nodeName].allowedClasses) {
			if (newCell.className && /\S/.test(newCell.className)) {
				var allowedClasses = this.tags[nodeName].allowedClasses;
				var classNames = newCell.className.trim().split(" ");
				for (var i = classNames.length; --i >= 0;) {
					if (!allowedClasses.test(classNames[i])) {
						HTMLArea.DOM.removeClass(newCell, classNames[i]);
					}
				}
			}
		}
		return newCell;
	},
	
	remapRowCells : function (row, toType) {
		var cells = row.cells;
		if (toType === "th") {
			for (var i = cells.length; --i >= 0 ;) {
				if (cells[i].nodeName.toLowerCase() != "th") {
					var th = this.remapCell(cells[i], "th");
					th.scope = "col";
				}
			}
		} else {
			for (var i = cells.length; --i >= 0 ;) {
				if (cells[i].nodeName.toLowerCase() != "td") {
					var td = this.remapCell(cells[i], "td");
					td.scope = "";
				}
			}
		}
	},
	
	/*
	 * This function applies the style properties found in params to the given element
	 *
	 * @param	object		element: the element
	 * @param	object		params: the properties
	 *
	 * @return	void
	 */
	processStyle: function (element, params) {
		var style = element.style;
		if (Ext.isIE) {
			style.styleFloat = "";
		} else {
			style.cssFloat = "";
		}
		style.textAlign = "";
		for (var i in params) {
			if (params.hasOwnProperty(i)) {
				var val = params[i];
				switch (i) {
				    case "f_st_backgroundColor":
				    	if (/\S/.test(val)) {
				    		style.backgroundColor = ((val.charAt(0) === '#') ? '' : '#') + val;
				    	} else {
				    		style.backgroundColor = '';
				    	}
					break;
				    case "f_st_color":
				    	if (/\S/.test(val)) {
				    		style.color = ((val.charAt(0) === '#') ? '' : '#') + val;
				    	} else {
				    		style.color = '';
				    	}
					break;
				    case "f_st_backgroundImage":
					if (/\S/.test(val)) {
						style.backgroundImage = "url(" + val + ")";
					} else {
						style.backgroundImage = "";
					}
					break;
				    case "f_st_borderWidth":
					if (/\S/.test(val)) {
						style.borderWidth = val + "px";
					} else {
						style.borderWidth = "";
					}
					if (params.f_st_borderStyle == "none") style.borderWidth = "0px";
					if (params.f_st_borderStyle == "not set") style.borderWidth = "";
					break;
				    case "f_st_borderStyle":
					style.borderStyle = (val != "not set") ? val : "";
					break;
				    case "f_st_borderColor":
				    	if (/\S/.test(val)) {
				    		style.borderColor = ((val.charAt(0) === '#') ? '' : '#') + val;
					} else {
						style.borderColor = '';
					}
					if (params.f_st_borderStyle === 'none') {
						style.borderColor = '';
					}
					break;
				    case "f_st_borderCollapse":
					style.borderCollapse = (val !== 'not set') ? val : '';
					if (params.f_st_borderStyle === 'none') {
						style.borderCollapse = '';
					}
					break;
				    case "f_st_width":
					if (/\S/.test(val)) {
						style.width = val + params.f_st_widthUnit;
					} else {
						style.width = "";
					}
					break;
				    case "f_st_height":
					if (/\S/.test(val)) {
						style.height = val + params.f_st_heightUnit;
					} else {
						style.height = "";
					}
					break;
				    case "f_st_textAlign":
					style.textAlign = (val != "not set") ? val : "";
					break;
				    case "f_st_vertAlign":
					style.verticalAlign = (val != "not set") ? val : "";
					break;
				}
			}
		}
	},
	/*
	 * This function builds the configuration object for the table Description fieldset
	 *
	 * @param	object		table: the table being edited, if any
	 *
	 * @return	object		the fieldset configuration object
	 */
	buildDescriptionFieldsetConfig: function (table) {
		if (!Ext.isEmpty(table)) {
			var caption = table.getElementsByTagName('caption')[0];
		}
		return {
			xtype: 'fieldset',
			title: this.localize('Description'),
			defaultType: 'textfield',
			defaults: {
				labelSeparator: '',
				helpIcon: true
			},
			items: [{
				fieldLabel: this.getHelpTip('caption', 'Caption:'),
				itemId: 'f_caption',
				value: Ext.isDefined(caption) ? caption.innerHTML : '',
				width: 300,
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Description of the nature of the table')
			    	},{
				fieldLabel: this.getHelpTip('summary', 'Summary:'),
				itemId: 'f_summary',
				value: !Ext.isEmpty(table) ? table.summary : '',
				width: 300,
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Summary of the table purpose and structure')
			}]
		};
	},
	/*
	 * This function builds the configuration object for the table Size and Headers fieldset
	 *
	 * @param	object		table: the table being edited, if any
	 *
	 * @return	object		the fieldset configuration object
	 */
	buildSizeAndHeadersFieldsetConfig: function (table) {
		var itemsConfig = [];
		if (Ext.isEmpty(table)) {
			itemsConfig.push({
				fieldLabel: this.getHelpTip('numberOfRows', 'Number of rows'),
				labelSeparator: ':',
				itemId: 'f_rows',
				value: (this.properties.numberOfRows && this.properties.numberOfRows.defaultValue) ? this.properties.numberOfRows.defaultValue : '2',
				width: 30,
				minValue: 1,
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Number of rows')
			});
			itemsConfig.push({
				fieldLabel: this.getHelpTip('numberOfColumns', 'Number of columns'),
				labelSeparator: ':',
				itemId: 'f_cols',
				value: (this.properties.numberOfColumns && this.properties.numberOfColumns.defaultValue) ? this.properties.numberOfColumns.defaultValue : '4',
				width: 30,
				minValue: 1,
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Number of columns')
			});
		}
		if (this.removedProperties.indexOf('headers') == -1) {
				// Create combo store
			var store = new Ext.data.ArrayStore({
				autoDestroy:  true,
				fields: [ { name: 'text'}, { name: 'value'}],
				data: [
					[this.localize('No header cells'), 'none'],
					[this.localize('Header cells on top'), 'top'],
					[this.localize('Header cells on left'), 'left'],
					[this.localize('Header cells on top and left'), 'both']
				]
			});
			this.removeOptions(store, 'headers');
			if (Ext.isEmpty(table)) {
				var selected = (this.properties.headers && this.properties.headers.defaultValue) ? this.properties.headers.defaultValue : 'top';
			} else {
				var selected = 'none';
				var thead = table.getElementsByTagName('thead');
				var tbody = table.getElementsByTagName('tbody');
				if (thead.length && thead[0].rows.length) {
					selected = 'top';
				} else if (tbody.length && tbody[0].rows.length) {
					if (HTMLArea.DOM.hasClass(tbody[0].rows[0], this.useHeaderClass)) {
						selected = 'both';
					} else if (tbody[0].rows[0].cells.length && tbody[0].rows[0].cells[0].nodeName.toLowerCase() == 'th') {
						selected = 'left';
					}
				}
			}
			itemsConfig.push(Ext.apply({
				xtype: 'combo',
				fieldLabel: this.getHelpTip('tableHeaders', 'Headers:'),
				labelSeparator: '',
				itemId: 'f_headers',
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Table headers'),
				store: store,
				width: (this.properties['headers'] && this.properties['headers'].width) ? this.properties['headers'].width : 200,
				value: selected
			}, this.configDefaults['combo']));
		}
		return {
			xtype: 'fieldset',
			title: this.localize(Ext.isEmpty(table) ? 'Size and Headers' : 'Headers'),
			defaultType: 'numberfield',
			defaults: {
				helpIcon: true
			},
			items: itemsConfig
		};
	},
	/*
	 * This function builds the configuration object for the Style fieldset
	 *
	 * @param	object		element: the element being edited, if any
	 * @param	string		buttonId: the id of the button that was pressed
	 *
	 * @return	object		the fieldset configuration object
	 */
	buildStylingFieldsetConfig: function (element, buttonId) {
		var itemsConfig = [];
		var nodeName = element ? element.nodeName.toLowerCase() : 'table';
		var table = (nodeName == 'table');
		var select = this.buildStylingFieldConfig('f_class', (table ? 'Table class:' : 'Class:'), (table ? 'Table class selector' : 'Class selector'));
		this.setStyleOptions(select, element, nodeName, (buttonId === 'InsertTable') ? this.defaultClass : null);
		itemsConfig.push(select);
		if (element && table) {
			var tbody = element.getElementsByTagName('tbody')[0];
			if (tbody) {
				var tbodyStyleSelect = this.buildStylingFieldConfig('f_class_tbody', 'Table body class:', 'Table body class selector');
				this.setStyleOptions(tbodyStyleSelect, tbody, 'tbody');
				itemsConfig.push(tbodyStyleSelect);
			}
			var thead = element.getElementsByTagName('thead')[0];
			if (thead) {
				var theadStyleSelect = this.buildStylingFieldConfig('f_class_thead', 'Table header class:', 'Table header class selector');
				this.setStyleOptions(theadStyleSelect, thead, 'thead');
				itemsConfig.push(theadStyleSelect);
			}
			var tfoot = element.getElementsByTagName('tfoot')[0];
			if (tfoot) {
				var tfootStyleSelect = this.buildStylingFieldConfig('f_class_tfoot', 'Table footer class:', 'Table footer class selector');
				this.setStyleOptions(tfootStyleSelect, tfoot, 'tfoot');
				itemsConfig.push(tfootStyleSelect);
			}
		}
		return {
			xtype: 'fieldset',
			defaults: {
				labelSeparator: ''
			},
			title: table ? this.getHelpTip('tableStyle', 'CSS Style') : this.localize('CSS Style'),
			items: itemsConfig
		};
	},
	/*
	 * This function builds a style selection field
	 *
	 * @param	string		fieldName: the name of the field
	 * @param	string		fieldLabel: the label for the field
	 * @param	string		fieldTitle: the title for the field tooltip
	 *
	 * @return	object		the style selection field object
	 */
	buildStylingFieldConfig: function(fieldName, fieldLabel, fieldTitle) {
		return new Ext.form.ComboBox(Ext.apply({
			xtype: 'combo',
			itemId: fieldName,
			fieldLabel: this.getHelpTip(fieldTitle, fieldLabel),
			helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize(fieldTitle),
			width: (this.properties['style'] && this.properties['style'].width) ? this.properties['style'].width : 300,
			store: new Ext.data.ArrayStore({
				autoDestroy:  true,
				fields: [ { name: 'text'}, { name: 'value'}, { name: 'style'} ],
				data: [[this.localize('No block style'), 'none']]
			})
			}, {
			tpl: '<tpl for="."><div ext:qtip="{value}" style="{style}text-align:left;font-size:11px;" class="x-combo-list-item">{text}</div></tpl>'
			}, this.configDefaults['combo']
		));
	},
	/*
	 * This function populates the style store and sets the selected option
	 *
	 * @param	object:		dropDown: the combobox object
	 * @param	object		element: the element being edited, if any
	 * @param	string		nodeName: the type of element ('table' on table insertion)
	 * @param	string		defaultClass: default class, if any is configured
	 *
	 * @return	object		the fieldset configuration object
	 */
	setStyleOptions: function (dropDown, element, nodeName, defaultClass) {
		var blockStyle = this.getPluginInstance('BlockStyle');
		if (dropDown && blockStyle) {
			if (defaultClass) {
				var classNames = new Array();
				classNames.push(defaultClass);
			} else {
				var classNames = HTMLArea.DOM.getClassNames(element);
			}
			blockStyle.buildDropDownOptions(dropDown, nodeName);
			blockStyle.setSelectedOption(dropDown, classNames, 'noUnknown', defaultClass);
		}
	},
	/*
	 * This function builds the configuration object for the Language fieldset
	 *
	 * @param	object		element: the element being edited, if any
	 *
	 * @return	object		the fieldset configuration object
	 */
	buildLanguageFieldsetConfig: function (element) {
		var itemsConfig = [];
		var languageObject = this.getPluginInstance('Language');
		if (this.removedProperties.indexOf('language') == -1 && this.getButton('Language')) {
			var selectedLanguage = !Ext.isEmpty(element) ? languageObject.getLanguageAttribute(element) : 'none';
			function initLanguageStore (store) {
				if (selectedLanguage !== 'none') {
					store.removeAt(0);
					store.insert(0, new store.recordType({
						text: languageObject.localize('Remove language mark'),
						value: 'none'
					}));
				}
			}
			var languageStore = new Ext.data.JsonStore({
				autoDestroy:  true,
				autoLoad: true,
				root: 'options',
				fields: [ { name: 'text'}, { name: 'value'} ],
				url: this.getDropDownConfiguration('Language').dataUrl,
				listeners: {
					load: initLanguageStore
				}
			});
			itemsConfig.push(Ext.apply({
				xtype: 'combo',
				fieldLabel: this.getHelpTip('languageCombo', 'Language', 'Language'),
				itemId: 'f_lang',
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Language'),
				store: languageStore,
				width: (this.properties['language'] && this.properties['language'].width) ? this.properties['language'].width : 200,
				value: selectedLanguage
			}, this.configDefaults['combo']));
		}
		if (this.removedProperties.indexOf('direction') == -1 && (this.getButton('LeftToRight') || this.getButton('RightToLeft'))) {
			itemsConfig.push(Ext.apply({
				xtype: 'combo',
				fieldLabel: this.getHelpTip('directionCombo', 'Text direction', 'Language'),
				itemId: 'f_dir',
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Text direction'),
				store: new Ext.data.ArrayStore({
					autoDestroy:  true,
					fields: [ { name: 'text'}, { name: 'value'}],
					data: [
						[this.localize('Not set'), 'not set'],
						[this.localize('RightToLeft'), 'rtl'],
						[this.localize('LeftToRight'), 'ltr']
					]
				}),
				width: (this.properties['direction'] && this.properties['dirrection'].width) ? this.properties['direction'].width : 200,
				value: !Ext.isEmpty(element) && element.dir ? element.dir : 'not set'
			}, this.configDefaults['combo']));
		}
		return {
			xtype: 'fieldset',
			title: this.localize('Language'),
			items: itemsConfig
		};
	},
	/*
	 * This function builds the configuration object for the spacing fieldset
	 *
	 * @param	object		table: the table being edited, if any
	 *
	 * @return	object		the fieldset configuration object
	 */
	buildSpacingFieldsetConfig: function (table) {
		return {
			xtype: 'fieldset',
			title: this.localize('Spacing and padding'),
			defaultType: 'numberfield',
			defaults: {
				labelSeparator: '',
				helpIcon: true
			},
			items: [{
				fieldLabel: this.getHelpTip('cellSpacing', 'Cell spacing:'),
				itemId: 'f_spacing',
				value: !Ext.isEmpty(table) ? table.cellSpacing : '',
				width: 30,
				minValue: 0,
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Space between adjacent cells')
				},{
				fieldLabel: this.getHelpTip('cellPadding', 'Cell padding:'),
				itemId: 'f_padding',
				value: !Ext.isEmpty(table) ? table.cellPadding : '',
				width: 30,
				minValue: 0,
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Space between content and border in cell')
			}]
		};
	},
	/*
	 * This function builds the configuration object for the Layout fieldset
	 *
	 * @param	object		table: the element being edited, if any
	 *
	 * @return	object		the fieldset configuration object
	 */
	buildLayoutFieldsetConfig: function(element) {
		var itemsConfig = [];
		var nodeName = element ? element.nodeName.toLowerCase() : 'table';
		switch(nodeName) {
			case 'table' :
				var widthTitle = 'Table width';
				var heightTitle = 'Table height';
				break;
			case 'tr' :
				var widthTitle = 'Row width';
				var heightTitle = 'Row height';
				break;
			case 'td' :
			case 'th' :
				var widthTitle = 'Cell width';
				var heightTitle = 'Cell height';
		}
		if (this.removedProperties.indexOf('width') === -1) {
			var widthUnitStore = new Ext.data.ArrayStore({
				autoDestroy:  true,
				fields: [ { name: 'text'}, { name: 'value'}],
				data: [
					[this.localize('percent'), '%'],
					[this.localize('pixels'), 'px'],
					[this.localize('em'), 'em']
				]
			});
			this.removeOptions(widthUnitStore, 'widthUnit');
			itemsConfig.push({
				fieldLabel: this.getHelpTip(widthTitle, 'Width:'),
				labelSeparator: '',
				itemId: 'f_st_width',
				value: element ? this.getLength(element.style.width) : ((this.properties.width && this.properties.width.defaultValue) ? this.properties.width.defaultValue : ''),
				width: 30,
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize(widthTitle)
			});
			itemsConfig.push(Ext.apply({
				xtype: 'combo',
				fieldLabel: this.getHelpTip('Width unit', 'Width unit'),
				itemId: 'f_st_widthUnit',
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Width unit'),
				store: widthUnitStore,
				width: (this.properties['widthUnit'] && this.properties['widthUnit'].width) ? this.properties['widthUnit'].width : 70,
				value: element ? (/%/.test(element.style.width) ? '%' : (/px/.test(element.style.width) ? 'px' : 'em')) : ((this.properties.widthUnit && this.properties.widthUnit.defaultValue) ? this.properties.widthUnit.defaultValue : '%')
			}, this.configDefaults['combo']));
		}
		if (this.removedProperties.indexOf('height') === -1) {
			var heightUnitStore = new Ext.data.ArrayStore({
				autoDestroy:  true,
				fields: [ { name: 'text'}, { name: 'value'}],
				data: [
					[this.localize('percent'), '%'],
					[this.localize('pixels'), 'px'],
					[this.localize('em'), 'em']
				]
			});
			this.removeOptions(heightUnitStore, 'heightUnit');
			itemsConfig.push({
				fieldLabel: this.getHelpTip(heightTitle, 'Height:'),
				labelSeparator: '',
				itemId: 'f_st_height',
				value: element ? this.getLength(element.style.height) : ((this.properties.height && this.properties.height.defaultValue) ? this.properties.height.defaultValue : ''),
				width: 30,
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize(heightTitle)
			});
			itemsConfig.push(Ext.apply({
				xtype: 'combo',
				fieldLabel: this.getHelpTip('Height unit', 'Height unit'),
				itemId: 'f_st_heightUnit',
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Height unit'),
				store: heightUnitStore,
				width: (this.properties['heightUnit'] && this.properties['heightUnit'].width) ? this.properties['heightUnit'].width : 70,
				value: element ? (/%/.test(element.style.height) ? '%' : (/px/.test(element.style.height) ? 'px' : 'em')) : ((this.properties.heightUnit && this.properties.heightUnit.defaultValue) ? this.properties.heightUnit.defaultValue : '%')
			}, this.configDefaults['combo']));
		}
		if (nodeName == 'table' && this.removedProperties.indexOf('float') === -1) {
			var floatStore = new Ext.data.ArrayStore({
				autoDestroy:  true,
				fields: [ { name: 'text'}, { name: 'value'}],
				data: [
					[this.localize('Not set'), 'not set'],
					[this.localize('Left'), 'left'],
					[this.localize('Right'), 'right']
				]
			});
			this.removeOptions(floatStore, 'float');
			itemsConfig.push(Ext.apply({
				xtype: 'combo',
				fieldLabel: this.getHelpTip('tableFloat', 'Float:'),
				labelSeparator: '',
				itemId: 'f_st_float',
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Specifies where the table should float'),
				store: floatStore,
				width: (this.properties['float'] && this.properties['float'].width) ? this.properties['float'].width : 120,
				value: element ? (Ext.get(element).hasClass(this.floatLeft) ? 'left' : (Ext.get(element).hasClass(this.floatRight) ? 'right' : 'not set')) : this.floatDefault
			}, this.configDefaults['combo']));
		}
		return {
			xtype: 'fieldset',
			title: this.localize('Layout'),
			defaultType: 'numberfield',
			defaults: {
				helpIcon: true
			},
			items: itemsConfig
		};
	},
	/*
	 * This function builds the configuration object for the Layout fieldset
	 *
	 * @param	object		element: the element being edited, if any
	 *
	 * @return	object		the fieldset configuration object
	 */
	buildAlignmentFieldsetConfig: function (element) {
		var itemsConfig = [];
			// Text alignment
		var selectedTextAlign = 'not set';
		var blockElements = this.getPluginInstance('BlockElements');
		if (element && blockElements) {
			Ext.iterate(this.convertAlignment, function (value) {
				if (Ext.get(element).hasClass(blockElements.useClass[this.convertAlignment[value]])) {
					selectedTextAlign = value;
					return false;
				}
				return true;
			}, this);
		} else {
			selectedTextAlign = (element && element.style.textAlign) ? element.style.textAlign : 'not set';
		}
		itemsConfig.push(Ext.apply({
			xtype: 'combo',
			fieldLabel: this.getHelpTip('textAlignment', 'Text alignment:'),
			itemId: 'f_st_textAlign',
			helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Horizontal alignment of text within cell'),
			store: new Ext.data.ArrayStore({
				autoDestroy:  true,
				fields: [ { name: 'text'}, { name: 'value'}],
				data: [
					[this.localize('Not set'), 'not set'],
					[this.localize('Left'), 'left'],
					[this.localize('Center'), 'center'],
					[this.localize('Right'), 'right'],
					[this.localize('Justify'), 'justify']
				]
			}),
			width: (this.properties['textAlign'] && this.properties['textAlign'].width) ? this.properties['textAlign'].width : 100,
			value: selectedTextAlign
		}, this.configDefaults['combo']));
			// Vertical alignment
		itemsConfig.push(Ext.apply({
			xtype: 'combo',
			fieldLabel: this.getHelpTip('verticalAlignment', 'Vertical alignment:'),
			itemId: 'f_st_vertAlign',
			helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Vertical alignment of content within cell'),
			store: new Ext.data.ArrayStore({
				autoDestroy:  true,
				fields: [ { name: 'text'}, { name: 'value'}],
				data: [
					[this.localize('Not set'), 'not set'],
					[this.localize('Top'), 'top'],
					[this.localize('Middle'), 'middle'],
					[this.localize('Bottom'), 'bottom'],
					[this.localize('Baseline'), 'baseline']
				]
			}),
			width: (this.properties['verticalAlign'] && this.properties['verticalAlign'].width) ? this.properties['verticalAlign'].width : 100,
			value: (element && element.style.verticalAlign) ? element.style.verticalAlign : 'not set'
		}, this.configDefaults['combo']));
		return {
			xtype: 'fieldset',
			title: this.localize('Alignment'),
			defaults: {
				labelSeparator: ''
			},
			items: itemsConfig
		};
	},
	/*
	 * This function builds the configuration object for the Borders fieldset
	 *
	 * @param	object		element: the element being edited, if any
	 *
	 * @return	object		the fieldset configuration object
	 */
	buildBordersFieldsetConfig: function (element) {
		var itemsConfig = [];
		var nodeName = element ? element.nodeName.toLowerCase() : 'table';
			// Border style
		var borderStyleStore = new Ext.data.ArrayStore({
			autoDestroy:  true,
			fields: [ { name: 'text'}, { name: 'value'}],
			data: [
				[this.localize('Not set'), 'not set'],
				[this.localize('No border'), 'none'],
				[this.localize('Dotted'), 'dotted'],
				[this.localize('Dashed'), 'dashed'],
				[this.localize('Solid'), 'solid'],
				[this.localize('Double'), 'double'],
				[this.localize('Groove'), 'groove'],
				[this.localize('Ridge'), 'ridge'],
				[this.localize('Inset'), 'inset'],
				[this.localize('Outset'), 'outset']
			]
		});
		this.removeOptions(borderStyleStore, 'borderStyle');
			// Gecko reports "solid solid solid solid" for "border-style: solid".
			// That is, "top right bottom left" -- we only consider the first value.
		var selectedBorderStyle = element && element.style.borderStyle ? element.style.borderStyle : ((this.properties.borderWidth) ? ((this.properties.borderStyle && this.properties.borderStyle.defaultValue) ? this.properties.borderStyle.defaultValue : 'solid') : 'not set');
		itemsConfig.push(Ext.apply({
			xtype: 'combo',
			fieldLabel: this.getHelpTip('borderStyle', 'Border style:'),
			itemId: 'f_st_borderStyle',
			helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Border style'),
			store: borderStyleStore,
			width: (this.properties.borderStyle && this.properties.borderStyle.width) ? this.properties.borderStyle.width : 150,
			value: selectedBorderStyle,
			listeners: {
				change: {
					fn: this.setBorderFieldsDisabled
				}
			}
		}, this.configDefaults['combo']));
			// Border width
		itemsConfig.push({
			fieldLabel: this.getHelpTip('borderWidth', 'Border width:'),
			itemId: 'f_st_borderWidth',
			value: element ? this.getLength(element.style.borderWidth) : ((this.properties.borderWidth && this.properties.borderWidth.defaultValue) ? this.properties.borderWidth.defaultValue : ''),
			width: 30,
			minValue: 0,
			helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Border width'),
			disabled: (selectedBorderStyle === 'none')
		});
			// Border color
		itemsConfig.push({
			xtype: 'colorpalettefield',
			fieldLabel: this.getHelpTip('borderColor', 'Color:'),
			itemId: 'f_st_borderColor',
			colors: this.editorConfiguration.disableColorPicker ? [] : null,
			colorsConfiguration: this.editorConfiguration.colors,
			value: HTMLArea.util.Color.colorToHex(element && element.style.borderColor ? element.style.borderColor : ((this.properties.borderColor && this.properties.borderColor.defaultValue) ? this.properties.borderColor.defaultValue : '')).substr(1, 6),
			helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Border color'),
			disabled: (selectedBorderStyle === 'none')
		});
		if (nodeName === 'table') {
				// Collapsed borders
			itemsConfig.push(Ext.apply({
				xtype: 'combo',
				fieldLabel: this.getHelpTip('collapsedBorders', 'Collapsed borders'),
				labelSeparator: ':',
				itemId: 'f_st_borderCollapse',
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Collapsed borders'),
				store: new Ext.data.ArrayStore({
					autoDestroy:  true,
					fields: [ { name: 'text'}, { name: 'value'}],
					data: [
						[this.localize('Not set'), 'not set'],
						[this.localize('Collapsed borders'), 'collapse'],
						[this.localize('Detached borders'), 'separate']
					]
				}),
				width: (this.properties.borderCollapse && this.properties.borderCollapse.width) ? this.properties.borderCollapse.width : 150,
				value: element && element.style.borderCollapse ? element.style.borderCollapse : 'not set',
				disabled: (selectedBorderStyle === 'none')
			}, this.configDefaults['combo']));
				// Frame
			itemsConfig.push(Ext.apply({
				xtype: 'combo',
				fieldLabel: this.getHelpTip('frames', 'Frames:'),
				itemId: 'f_frames',
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Specifies which sides should have a border'),
				store: new Ext.data.ArrayStore({
					autoDestroy:  true,
					fields: [ { name: 'text'}, { name: 'value'}],
					data: [
						[this.localize('Not set'), 'not set'],
						[this.localize('No sides'), 'void'],
						[this.localize('The top side only'), 'above'],
						[this.localize('The bottom side only'), 'below'],
						[this.localize('The top and bottom sides only'), 'hsides'],
						[this.localize('The right and left sides only'), 'vsides'],
						[this.localize('The left-hand side only'), 'lhs'],
						[this.localize('The right-hand side only'), 'rhs'],
						[this.localize('All four sides'), 'box']
					]
				}),
				width: (this.properties.frame && this.properties.frame.width) ? this.properties.frame.width : 250,
				value: (element && element.frame) ? element.frame : 'not set',
				disabled: (selectedBorderStyle === 'none')
			}, this.configDefaults['combo']));
				// Rules
			itemsConfig.push(Ext.apply({
				xtype: 'combo',
				fieldLabel: this.getHelpTip('rules', 'Rules:'),
				itemId: 'f_rules',
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Specifies where rules should be displayed'),
				store: new Ext.data.ArrayStore({
					autoDestroy:  true,
					fields: [ { name: 'text'}, { name: 'value'}],
					data: [
						[this.localize('Not set'), 'not set'],
						[this.localize('No rules'), 'none'],
						[this.localize('Rules will appear between rows only'), 'rows'],
						[this.localize('Rules will appear between columns only'), 'cols'],
						[this.localize('Rules will appear between all rows and columns'), 'all']
					]
				}),
				width: (this.properties.rules && this.properties.rules.width) ? this.properties.rules.width : 360,
				value: (element && element.rules) ? element.rules : 'not set'
			}, this.configDefaults['combo']));
		}
		return {
			xtype: 'fieldset',
			title: this.localize('Frame and borders'),
			defaultType: 'numberfield',
			defaults: {
				labelSeparator: '',
				helpIcon: true
			},
			items: itemsConfig
		};
	},
	/*
	 * onChange handler: enable/disable other fields of the same fieldset
	 */
	setBorderFieldsDisabled: function (field, value) {
		field.ownerCt.findBy(function (item) {
			var itemId = item.getItemId();
			if (itemId == 'f_st_borderStyle' || itemId == 'f_rules') {
				return false;
			} else if (value === 'none') {
				switch (item.getXType()) {
					case 'numberfield':
						item.setValue(0);
						break;
					case 'colorpalettefield':
						item.setValue('');
						break;
					default:
						item.setValue('not set');
						break;
				}
				item.setDisabled(true);
			} else {
				item.setDisabled(false);
			}
			return true;
		});
	},
	/*
	 * This function builds the configuration object for the Colors fieldset
	 *
	 * @param	object		element: the element being edited, if any
	 *
	 * @return	object		the fieldset configuration object
	 */
	buildColorsFieldsetConfig: function (element) {
		var itemsConfig = [];
			// Text color
		itemsConfig.push({
			xtype: 'colorpalettefield',
			fieldLabel: this.getHelpTip('textColor', 'FG Color:'),
			itemId: 'f_st_color',
			colors: this.editorConfiguration.disableColorPicker ? [] : null,
			colorsConfiguration: this.editorConfiguration.colors,
			value: HTMLArea.util.Color.colorToHex(element && element.style.color ? element.style.color : ((this.properties.color && this.properties.color.defaultValue) ? this.properties.color.defaultValue : '')).substr(1, 6)
		});
			// Background color
		itemsConfig.push({
			xtype: 'colorpalettefield',
			fieldLabel: this.getHelpTip('backgroundColor', 'Background:'),
			itemId: 'f_st_backgroundColor',
			colors: this.editorConfiguration.disableColorPicker ? [] : null,
			colorsConfiguration: this.editorConfiguration.colors,
			value: HTMLArea.util.Color.colorToHex(element && element.style.backgroundColor ? element.style.backgroundColor : ((this.properties.backgroundColor && this.properties.backgroundColor.defaultValue) ? this.properties.backgroundColor.defaultValue : '')).substr(1, 6)
		});
			// Background image
		itemsConfig.push({
			fieldLabel: this.getHelpTip('backgroundImage', 'Image URL:'),
			itemId: 'f_st_backgroundImage',
			value: element && element.style.backgroundImage.match(/url\(\s*(.*?)\s*\)/) ? RegExp.$1 : '',
			width: (this.properties.backgroundImage && this.properties.backgroundImage.width) ? this.properties.backgroundImage.width : 300,
			helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('URL of the background image'),
			helpIcon: true
		});
		return {
			xtype: 'fieldset',
			title: this.localize('Background and colors'),
			defaultType: 'textfield',
			defaults: {
				labelSeparator: ''
			},
			items: itemsConfig
		};
	},
	/*
	 * This function builds the configuration object for the Cell Type fieldset
	 *
	 * @param	object		element: the element being edited, if any
	 * @param	boolean		column: true if the element is a column, false if the element is a cell
	 *
	 * @return	object		the fieldset configuration object
	 */
	buildCellTypeFieldsetConfig: function (element, column) {
		var itemsConfig = [];
		if (column) {
			var data = [
				[this.localize('Data cells'), 'td'],
				[this.localize('Headers for rows'), 'throw'],
				[this.localize('Headers for row groups'), 'throwgroup']
			];
		} else {
			var data = [
				[this.localize('Normal'), 'td'],
				[this.localize('Header for column'), 'thcol'],
				[this.localize('Header for row'), 'throw'],
				[this.localize('Header for row group'), 'throwgroup']
			];
		}
			// onChange handler: reset the CSS class dropdown and show/hide abbr field when the cell type changes
			// @param	object		cellTypeField: the combo object
			// @param	object		record: the selected record
			// @return	void
		var self = this;
		function cellTypeChange(cellTypeField, record) {
			var value = record.get('value');
			var styleCombo = self.dialog.find('itemId', 'f_class')[0];
			if (styleCombo) {
				self.setStyleOptions(styleCombo, element, value.substring(0,2));
			}
				// abbr field present only for single cell, not for column
			var abbrField = self.dialog.find('itemId', 'f_cell_abbr')[0];
			if (abbrField) {
				abbrField.setVisible(value != 'td');
				abbrField.label.setVisible(value != 'td');
			}
		}
		var selected = element.nodeName.toLowerCase() + element.scope.toLowerCase();
		itemsConfig.push(Ext.apply({
			xtype: 'combo',
			fieldLabel: column ? this.getHelpTip('columnCellsType', 'Type of cells of the column') : this.getHelpTip('cellType', 'Type of cell'),
			itemId: 'f_cell_type',
			helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize(column ? 'Specifies the type of cells' : 'Specifies the type of cell'),
			store: new Ext.data.ArrayStore({
				autoDestroy:  true,
				fields: [ { name: 'text'}, { name: 'value'}],
				data: data
			}),
			width: (this.properties.cellType && this.properties.cellType.width) ? this.properties.cellType.width : 250,
			value: (column && selected == 'thcol') ? 'td' : selected,
			listeners: {
				select: {
					fn: cellTypeChange,
					scope: this
				}
			}
		}, this.configDefaults['combo']));
		if (!column) {
			itemsConfig.push({
				xtype: 'textfield',
				fieldLabel: this.getHelpTip('cellAbbreviation', 'Abbreviation'),
				labelSeparator: ':',
				itemId: 'f_cell_abbr',
				helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Header abbreviation'),
				width: 300,
				value: element.abbr,
				hideMode: 'visibility',
				hidden: (selected == 'td'),
				hideLabel: (selected == 'td')
			});
		}
		return {
			xtype: 'fieldset',
			title: this.localize(column ? 'Type of cells' : 'Cell Type and Scope'),
			defaults: {
				labelSeparator: '',
				helpIcon: true
			},
			items: itemsConfig
		};
	},
	/*
	 * This function builds the configuration object for the Row Group fieldset
	 *
	 * @param	object		element: the row being edited, if any
	 *
	 * @return	object		the fieldset configuration object
	 */
	buildRowGroupFieldsetConfig: function (element) {
		var itemsConfig = [];
		var current = element.parentNode.nodeName.toLowerCase();
			// onChange handler: show/hide cell conversion checkbox with appropriate label
			// @param	object		field: the combo object
			// @param	object		record: the selected record
			// @return	void
		function displayCheckbox(field, record, index) {
			var checkBox = field.ownerCt.getComponent('f_convertCells');
			var value = record.get('value');
			if (current !== value && (current === 'thead' || value === 'thead')) {
				checkBox.label.dom.innerHTML = (value === 'thead') ? this.localize('Make cells header cells') : this.localize('Make cells data cells');
				checkBox.show();
				checkBox.label.show();
				checkBox.setValue(true);
			} else {
				checkBox.setValue(false);
				checkBox.hide();
				checkBox.label.hide();
			}
		}
		itemsConfig.push(Ext.apply({
			xtype: 'combo',
			fieldLabel: this.getHelpTip('rowGroup', 'Row group:'),
			itemId: 'f_rowgroup',
			helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Table section'),
			store: new Ext.data.ArrayStore({
				autoDestroy:  true,
				fields: [ { name: 'text'}, { name: 'value'}],
				data: [
					[this.localize('Table body'), 'tbody'],
					[this.localize('Table header'), 'thead'],
					[this.localize('Table footer'), 'tfoot']
				]
			}),
			width: (this.properties.rowGroup && this.properties.rowGroup.width) ? this.properties.rowGroup.width : 150,
			value: current,
			labelSeparator: '',
			listeners: {
				select: {
					fn: displayCheckbox,
					scope: this
				}
			}
		}, this.configDefaults['combo']));
			// Cell conversion checkbox
		itemsConfig.push({
			xtype: 'checkbox',
			fieldLabel: this.localize('Make cells header cells'),
			labelSeparator: ':',
			itemId: 'f_convertCells',
			helpTitle: Ext.isDefined(TYPO3.ContextHelp) ? '' : this.localize('Make cells header cells'),
			value: false,
			hideMode: 'visibility',
			hidden: true,
			hideLabel: true
		});
		return {
			xtype: 'fieldset',
			title: this.localize('Row group'),
			defaults: {
				helpIcon: true
			},
			items: itemsConfig
		};
	},
	/*
	 * This function removes some items from a data store for the specified property
	 *
	 */
	removeOptions: function (store, property) {
		if (this.properties[property] && this.properties[property].removeItems) {
			var items = this.properties[property].removeItems.split(',');
			var index = -1;
			Ext.each(items, function (item) {
				index = store.findExact('value', item.trim());
				if (index !== -1) {
					store.removeAt(index);
				}
				return true;
			});
		}
	},
	/*
	 * This function gets called by the editor key map when a key was pressed.
	 * It will process the enter key for IE and Opera when buttons.table.disableEnterParagraphs is set in the editor configuration
	 *
	 * @param	string		key: the key code
	 * @param	object		event: the Ext event object (keydown)
	 *
	 * @return	boolean		false, if the event was taken care of
	 */
	onKey: function (key, event) {
		var range = this.editor.getSelection().createRange();
		var parentElement = this.editor.getSelection().getParentElement();
		while (parentElement && !HTMLArea.DOM.isBlockElement(parentElement)) {
			parentElement = parentElement.parentNode;
		}
		if (/^(td|th)$/i.test(parentElement.nodeName)) {
			if (Ext.isIE) {
				range.pasteHTML('<br />');
				range.select();
			} else {
				var brNode = this.editor.document.createElement('br');
				this.editor.getSelection().insertNode(brNode);
				if (brNode.nextSibling) {
					this.editor.getSelection().selectNodeContents(brNode.nextSibling, true);
				} else {
					this.editor.getSelection().selectNodeContents(brNode, false);
				}
			}
			event.stopEvent();
			return false;
		}
		return true;
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2008-2011 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This script is a modified version of a script published under the htmlArea License.
*  A copy of the htmlArea License may be found in the textfile HTMLAREA_LICENSE.txt.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * About Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.AboutEditor = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function(editor) {
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '2.1',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: 'SJBR',
			sponsorUrl	: 'http://www.sjbr.ca/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the button
		 */
		var buttonId = 'About';
		var buttonConfiguration = {
			id		: buttonId,
			tooltip		: this.localize(buttonId.toLowerCase()),
			action		: 'onButtonPress',
			textMode	: true,
			dialog		: true,
			iconCls		: 'htmlarea-action-editor-show-about'
		};
		this.registerButton(buttonConfiguration);
		return true;
	 },
	/*
	 * Supported browsers
	 */
	browsers: [
	 	 'Firefox 1.5+',
	 	 'Google Chrome 1.0+',
	 	 'Internet Explorer 6.0+',
	 	 'Opera 9.62+',
	 	 'Safari 3.0.4+',
	 	 'SeaMonkey 1.0+'
	],
	/*
	 * This function gets called when the button was pressed.
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
		this.openDialogue(
			buttonId,
			'About HTMLArea',
			this.getWindowDimensions({width:450, height:350}, buttonId),
			this.buildTabItems()
		);
		return false;
	},
	/*
	 * Open the dialogue window
	 *
	 * @param	string		buttonId: the button id
	 * @param	string		title: the window title
	 * @param	integer		dimensions: the opening width of the window
	 * @param	object		tabItems: the configuration of the tabbed panel
	 *
	 * @return	void
	 */
	openDialogue: function (buttonId, title, dimensions, tabItems) {
		this.dialog = new Ext.Window({
			title: this.localize(title),
			cls: 'htmlarea-window',
			border: false,
			width: dimensions.width,
			height: 'auto',
				// As of ExtJS 3.1, JS error with IE when the window is resizable
			resizable: !Ext.isIE,
			iconCls: this.getButton(buttonId).iconCls,
			listeners: {
				close: {
					fn: this.onClose,
					scope: this
				}
			},
			items: {
				xtype: 'tabpanel',
				activeTab: 0,
				listeners: {
					activate: {
						fn: this.resetFocus,
						scope: this
					},
					tabchange: {
						fn: this.syncHeight,
						scope: this
					}
				},
				items: tabItems
			},
			buttons: [
				this.buildButtonConfig('Close', this.onCancel)
			]
		});
		this.show();
	},
	/*
	 * Build the configuration of the the tab items
	 *
	 * @return	array	the configuration array of tab items
	 */
	buildTabItems: function () {
		var tabItems = [];
			// About tab
		tabItems.push({
			xtype: 'panel',
			cls: 'about',
			title: this.localize('About'),
			html: '<h1 id="version">htmlArea RTE ' +  RTEarea[0].version + '</h1>'
				+ '<p>' + this.localize('free_editor').replace('<', '&lt;').replace('>', '&gt;') + '</p>'
				+ '<p><br />' + this.localize('Browser support') + ': ' + this.browsers.join(', ') + '.</p>'
				+ '<p><br />' + this.localize('product_documentation') + '&nbsp;<a href="http://typo3.org/extensions/repository/view/rtehtmlarea_manual/current/">typo3.org</a></p>'
				+ '<p style="text-align: center;">'
					+ '<br />'
					+ '&copy; 2002-2004 <a href="http://interactivetools.com" target="_blank">interactivetools.com, inc.</a><br />'
					+ '&copy; 2003-2004 <a href="http://dynarch.com" target="_blank">dynarch.com LLC.</a><br />'
					+ '&copy; 2004-2010 <a href="http://www.sjbr.ca" target="_blank">Stanislas Rolland</a><br />'
					+ this.localize('All rights reserved.')
				+ '</p>'
		});
			// Plugins tab
		if (!this.store) {
			this.store = new Ext.data.ArrayStore({
				fields: [{ name: 'name'}, { name: 'developer'},  { name: 'sponsor'}],
				sortInfo: {
					field: 'name',
					direction: 'ASC'
				},
				data: this.getPluginsInfo()
			});
		}
		tabItems.push({
			xtype: 'panel',
			cls: 'about-plugins',
			height: 200,
			title: this.localize('Plugins'),
			autoScroll: true,
			items: {
				xtype: 'listview',
				store: this.store,
				reserveScrollOffset: true,
				columns: [{
					header: this.localize('Name'),
					dataIndex: 'name',
					width: .33
				    },{
					header: this.localize('Developer'),
					dataIndex: 'developer',
					width: .33
				    },{
					header: this.localize('Sponsored by'),
					dataIndex: 'sponsor'
				}]
			}
		});
		return tabItems;
	},
	/*
	 * Format an arry of information on each configured plugin
	 *
	 * @return	array		array of data objects
	 */
	getPluginsInfo: function () {
		var pluginsInfo = [];
		Ext.iterate(this.editor.plugins, function (pluginId, plugin) {
			pluginsInfo.push([
				plugin.name + ' ' + plugin.version,
				'<a href="' + plugin.developerUrl + '" target="_blank">' + plugin.developer + '</a>',
				'<a href="' + plugin.sponsorUrl + '" target="_blank">' + plugin.sponsor + '</a>'
			]);
		}, this);
		return pluginsInfo;
	}
});

/***************************************************************
*  Copyright notice
*
*  Copyright (c) 2003 dynarch.com. Authored by Mihai Bazon. Sponsored by www.americanbible.org.
*  Copyright (c) 2004-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This script is a modified version of a script published under the htmlArea License.
*  A copy of the htmlArea License may be found in the textfile HTMLAREA_LICENSE.txt.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * Context Menu Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.ContextMenu = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin : function(editor) {
		this.pageTSConfiguration = this.editorConfiguration.contextMenu;
		if (!this.pageTSConfiguration) {
			this.pageTSConfiguration = {};
		}
		if (this.pageTSConfiguration.showButtons) {
			this.showButtons = this.pageTSConfiguration.showButtons;
		}
		if (this.pageTSConfiguration.hideButtons) {
			this.hideButtons = this.pageTSConfiguration.hideButtons;
		}
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '3.2',
			developer	: 'Mihai Bazon & Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'dynarch.com & Stanislas Rolland',
			sponsor		: 'American Bible Society & SJBR',
			sponsorUrl	: 'http://www.sjbr.ca/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		return true;
	},
	/*
	 * This function gets called when the editor gets generated
	 */
	onGenerate: function() {
			// Build the context menu
		this.menu = new Ext.menu.Menu(Ext.applyIf({
			cls: 'htmlarea-context-menu',
			defaultType: 'menuitem',
			listeners: {
				itemClick: {
					fn: this.onItemClick,
					scope: this
				},
				show: {
					fn: this.onShow,
					scope: this
				},
				hide: {
					fn: this.onHide,
					scope: this
				}
			},
			items: this.buildItemsConfig()
		}, this.pageTSConfiguration));
			// Monitor contextmenu clicks on the iframe
		this.menu.mon(Ext.get(this.editor.document.documentElement), 'contextmenu', this.show, this);
			// Monitor editor being destroyed
		this.menu.mon(this.editor, 'beforedestroy', this.onBeforeDestroy, this, {single: true});
	},
	/*
	 * Create the menu items config
	 */
	buildItemsConfig: function () {
		var itemsConfig = [];
			// Walk through the editor toolbar configuration nested arrays: [ toolbar [ row [ group ] ] ]
		var firstInGroup = true, convertedItemId;
		Ext.each(this.editor.config.toolbar, function (row) {
				// Add the groups
			firstInGroup = true;
			Ext.each(row, function (group) {
				if (!firstInGroup) {
					// If a visible item was added to the line
					itemsConfig.push({
							xtype: 'menuseparator',
							cls: 'separator'
					});
				}
				firstInGroup = true;
					// Add each item
				Ext.each(group, function (itemId) {
					convertedItemId = this.editorConfiguration.convertButtonId[itemId];
					if ((!this.showButtons  || this.showButtons.indexOf(convertedItemId) !== -1)
						&& (!this.hideButtons || this.hideButtons.indexOf(convertedItemId) === -1)) {
						var button = this.getButton(itemId);
						if (button && button.getXType() === 'htmlareabutton' && !button.hideInContextMenu) {
							var itemId = button.getItemId();
							itemsConfig.push({
								itemId: itemId,
								cls: 'button',
								overCls: 'hover',
								text: (button.contextMenuTitle ? button.contextMenuTitle : button.tooltip.title),
								iconCls: button.iconCls,
								helpText: (button.helpText ? button.helpText : this.localize(itemId + '-tooltip')),
								hidden: true
							});
							firstInGroup = false;
						}
					}
					return true;
				}, this);
				return true;
			}, this);
			return true;
		}, this);
			// If a visible item was added
		if (!firstInGroup) {
			itemsConfig.push({
					xtype: 'menuseparator',
					cls: 'separator'
			});
		}
		 	// Add special target delete item
		var itemId = 'DeleteTarget';
		itemsConfig.push({
			itemId: itemId,
			cls: 'button',
			overCls: 'hover',
			iconCls: 'htmlarea-action-delete-item',
			helpText: this.localize('Remove this node from the document')
		});
		return itemsConfig;
	},
	/*
	 * Handler when the menu gets shown
	 */
	onShow: function () {
		this.menu.mon(Ext.get(this.editor.document.documentElement), 'mousedown', this.menu.hide, this.menu, {single: true});
	},
	/*
	 * Handler when the menu gets hidden
	 */
	onHide: function () {
		this.menu.mun(Ext.get(this.editor.document.documentElement), 'mousedown', this.menu.hide, this.menu);
	},
	/*
	 * Handler to show the context menu
	 */
	show: function (event, target) {
		event.stopEvent();
			// Need to wait a while for the toolbar state to be updated
		this.showMenu.defer(150, this, [target]);
	},
	/*
	 * Show the context menu
	 */
	showMenu: function (target) {
		this.showContextItems(target);
		if (!(Ext.isIE6 || Ext.isIE7 || Ext.isIE8)) {
			this.ranges = this.editor.getSelection().getRanges();
		}
		var iframeEl = this.editor.iframe.getEl();
			// Show the context menu
		this.menu.showAt([Ext.fly(target).getX() + iframeEl.getX(), Ext.fly(target).getY() + iframeEl.getY()]);
	},
	/*
	 * Show items depending on context
	 */
	showContextItems: function (target) {
		var lastIsSeparator = false, lastIsButton = false, xtype, lastVisible;
		this.menu.cascade(function (menuItem) {
			xtype = menuItem.getXType();
			if (xtype === 'menuseparator') {
				menuItem.setVisible(lastIsButton);
				lastIsButton = false;
			} else if (xtype === 'menuitem') {
				var button = this.getButton(menuItem.getItemId());
				if (button) {
					var text = button.contextMenuTitle ? button.contextMenuTitle : button.tooltip.title;
					if (menuItem.text != text) {
						menuItem.setText(text);
					}
					menuItem.helpText = button.helpText ? button.helpText : menuItem.helpText;
					menuItem.setVisible(!button.disabled);
					lastIsButton = lastIsButton || !button.disabled;
				} else {
						// Special target delete item
					this.deleteTarget = target;
					if (/^(html|body)$/i.test(target.nodeName)) {
						this.deleteTarget = null;
					} else if (/^(table|thead|tbody|tr|td|th|tfoot)$/i.test(target.nodeName)) {
						this.deleteTarget = Ext.fly(target).findParent('table');
					} else if (/^(ul|ol|dl|li|dd|dt)$/i.test(target.nodeName)) {
						this.deleteTarget = Ext.fly(target).findParent('ul') || Ext.fly(target).findParent('ol') || Ext.fly(target).findParent('dl');
					}
					if (this.deleteTarget) {
						menuItem.setVisible(true);
						menuItem.setText(this.localize('Remove the') + ' &lt;' + this.deleteTarget.nodeName.toLowerCase() + '&gt; ');
						lastIsButton = true;
					} else {
						menuItem.setVisible(false);
					}
				}
			}
			if (!menuItem.hidden) {
				lastVisible = menuItem;
			}
		}, this);
			// Hide the last item if it is a separator
		if (!lastIsButton) {
			lastVisible.setVisible(false);
		}
	},
	/*
	 * Handler invoked when a menu item is clicked on
	 */
	onItemClick: function (item, event) {
		if (!(Ext.isIE6 || Ext.isIE7 || Ext.isIE8)) {
			this.editor.getSelection().setRanges(this.ranges);
		}
		var button = this.getButton(item.getItemId());
		if (button) {
			button.fireEvent('HTMLAreaEventContextMenu', button, event);
		} else if (item.getItemId() === 'DeleteTarget') {
				// Do not leave a non-ie table cell empty
			var parent = this.deleteTarget.parentNode;
			parent.normalize();
			if (!Ext.isIE && /^(td|th)$/i.test(parent.nodeName) && parent.childNodes.length == 1) {
					// Do not leave a non-ie table cell empty
				parent.appendChild(this.editor.document.createElement('br'));
			}
				// Try to find a reasonable replacement selection
			var nextSibling = this.deleteTarget.nextSibling;
			var previousSibling = this.deleteTarget.previousSibling;
			if (nextSibling) {
				this.editor.getSelection().selectNode(nextSibling, true);
			} else if (previousSibling) {
				this.editor.getSelection().selectNode(previousSibling, false);
			}
			HTMLArea.DOM.removeFromParent(this.deleteTarget);
			this.editor.updateToolbar();
		}
	},
	/*
	 * Handler invoked when the editor is about to be destroyed
	 */
	onBeforeDestroy: function () {
		this.menu.items.each(function (menuItem) {
			Ext.QuickTips.unregister(menuItem);
		});
	 	this.menu.removeAll(true);
	 	this.menu.destroy();
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2008-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This script is a modified version of a script published under the htmlArea License.
*  A copy of the htmlArea License may be found in the textfile HTMLAREA_LICENSE.txt.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * Undo Redo Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.UndoRedo = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		this.pageTSconfiguration = this.editorConfiguration.buttons.undo;
		this.customUndo = true;
		this.undoQueue = new Array();
		this.undoPosition = -1;
			// Maximum size of the undo queue
		this.undoSteps = 25;
			// The time interval at which undo samples are taken: 1/2 sec.
		this.undoTimeout = 500;
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '2.2',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: 'SJBR',
			sponsorUrl	: 'http://www.sjbr.ca',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the buttons
		 */
		var buttonList = this.buttonList, buttonId;
		for (var i = 0; i < buttonList.length; ++i) {
			var button = buttonList[i];
			buttonId = button[0];
			var buttonConfiguration = {
				id		: buttonId,
				tooltip		: this.localize(buttonId.toLowerCase()),
				iconCls		: 'htmlarea-action-' + button[3],
				action		: 'onButtonPress',
				hotKey		: ((this.editorConfiguration.buttons[buttonId.toLowerCase()] && this.editorConfiguration.buttons[buttonId.toLowerCase()].hotKey) ? this.editorConfiguration.buttons[buttonId.toLowerCase()].hotKey : button[2]),
				noAutoUpdate	: true
			};
			this.registerButton(buttonConfiguration);
		}
		return true;
	},
	/*
	 * The list of buttons added by this plugin
	 */
	buttonList: [
		['Undo', null, 'z', 'undo'],
		['Redo', null, 'y', 'redo']
	],
	/*
	 * This function gets called when the editor is generated
	 */
	onGenerate: function () {
			// Start undo snapshots
		if (this.customUndo) {
			this.task = {
				run: this.takeSnapshot,
				scope: this,
				interval: this.undoTimeout
			};
			this.start();
		}
	},
	/*
	 * Start the undo/redo snapshot task
	 */
	start: function () {
		if (this.customUndo) {
			Ext.TaskMgr.start(this.task);
		}
	},
	/*
	 * Start the undo/redo snapshot task
	 */
	stop: function () {
		if (this.customUndo) {
			Ext.TaskMgr.stop(this.task);
		}
	},
	/*
	 * Take a snapshot of the current contents for undo
	 */
	takeSnapshot: function () {
		var currentTime = (new Date()).getTime();
		var newSnapshot = false;
		if (this.undoPosition >= this.undoSteps) {
				// Remove the first element
			this.undoQueue.shift();
			--this.undoPosition;
		}
			// New undo slot should be used if this is first takeSnapshot call or if undoTimeout is elapsed
		if (this.undoPosition < 0 || this.undoQueue[this.undoPosition].time < currentTime - this.undoTimeout) {
			++this.undoPosition;
			newSnapshot = true;
		}
			// Get the html text
		var text = this.editor.getInnerHTML();
		
		if (newSnapshot) {
				// If previous slot contains the same text, a new one should not be used
			if (this.undoPosition == 0  || this.undoQueue[this.undoPosition - 1].text != text) {
				this.undoQueue[this.undoPosition] = this.buildSnapshot();
				this.undoQueue[this.undoPosition].time = currentTime;
				this.undoQueue.length = this.undoPosition + 1;
				this.updateButtonsState();
			} else {
				--this.undoPosition;
			}
		} else {
			if (this.undoQueue[this.undoPosition].text != text){
				var snapshot = this.buildSnapshot();
				this.undoQueue[this.undoPosition].text = snapshot.text;
				this.undoQueue[this.undoPosition].bookmark = snapshot.bookmark;
				this.undoQueue[this.undoPosition].bookmarkedText = snapshot.bookmarkedText;
				this.undoQueue.length = this.undoPosition + 1;
			}
		}
	},
	/*
	 * Build the snapshot entry
	 *
	 * @return	object	a snapshot entry with three components:
	 *				- text (the content of the RTE without any bookmark),
	 *				- bookmark (the bookmark),
	 *				- bookmarkedText (the content of the RTE including the bookmark)
	 */
	buildSnapshot: function () {
		var bookmark = null, bookmarkedText = null;
			// Insert a bookmark
		if (this.getEditorMode() === 'wysiwyg' && this.editor.isEditable()) {
			if ((!Ext.isIE && !(Ext.isOpera && navigator.userAgent.toLowerCase().indexOf('presto/2.1') != -1)) || (Ext.isIE && this.editor.getSelection().getType() !== 'Control')) {
					// Catch error in FF when the selection contains no usable range
				try {
					bookmark = this.editor.getBookMark().get(this.editor.getSelection().createRange());
				} catch (e) {
					bookmark = null;
				}
			}
				// Get the bookmarked html text and remove the bookmark
			if (bookmark) {
				bookmarkedText = this.editor.getInnerHTML();
				var range = this.editor.getBookMark().moveTo(bookmark);
					// Restore Firefox selection
				if (Ext.isGecko) {
					this.editor.getSelection().selectRange(range);
				}
			}
		}
		return {
			text		: this.editor.getInnerHTML(),
			bookmark	: bookmark,
			bookmarkedText	: bookmarkedText
		};
	},
	/*
	 * Execute the undo request
	 */
	undo: function () {
		if (this.undoPosition > 0) {
				// Make sure we would not loose any changes
			this.takeSnapshot();
			this.setContent(--this.undoPosition);
			this.updateButtonsState();
		}
	},
	/*
	 * Execute the redo request
	 */
	redo: function () {
		if (this.undoPosition < this.undoQueue.length - 1) {
				// Make sure we would not loose any changes
			this.takeSnapshot();
				// Previous call could make undo queue shorter
			if (this.undoPosition < this.undoQueue.length - 1) {
				this.setContent(++this.undoPosition);
				this.updateButtonsState();
			}
		}
	},
	/*
	 * Set content using undo queue position
	 */
	setContent: function (undoPosition) {
		var bookmark = this.undoQueue[undoPosition].bookmark;
		if (bookmark) {
			this.editor.setHTML(this.undoQueue[undoPosition].bookmarkedText);
			this.editor.getSelection().selectRange(this.editor.getBookMark().moveTo(bookmark));
			this.editor.scrollToCaret();
		} else {
			this.editor.setHTML(this.undoQueue[undoPosition].text);
		}
	},
	/*
	 * This function gets called when the toolbar is updated
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors) {
		if (mode == 'wysiwyg' && this.editor.isEditable()) {
			if (this.customUndo) {
				switch (button.itemId) {
					case 'Undo':
						button.setDisabled(this.undoPosition == 0);
						break;
					case 'Redo':
						button.setDisabled(this.undoPosition >= this.undoQueue.length-1);
						break;
				}
			} else {
				try {
					button.setDisabled(!this.editor.document.queryCommandEnabled(button.itemId));
				} catch (e) {
					button.setDisabled(true);
				}
			}
		} else {
			button.setDisabled(!button.textMode);
		}
	},
	/*
	 * Update the state of the undo/redo buttons
	 */
	updateButtonsState: function () {
		var mode = this.getEditorMode(),
			selectionEmpty = true,
			ancestors = null;
		if (mode === 'wysiwyg') {
			selectionEmpty = this.editor.getSelection().isEmpty();
			ancestors = this.editor.getSelection().getAllAncestors();
		}
		var button = this.getButton('Undo');
		if (button) {
			this.onUpdateToolbar(button, mode, selectionEmpty, ancestors)
		}
		var button = this.getButton('Redo');
		if (button) {
			this.onUpdateToolbar(button, mode, selectionEmpty, ancestors)
		}
	},
	/*
	 * This function gets called when the button was pressed.
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
		if (this.getButton(buttonId) && !this.getButton(buttonId).disabled) {
			if (this.customUndo) {
				this[buttonId.toLowerCase()]();
			} else {
				this.editor.getSelection().execCommand(buttonId, false, null);
			}
		}
		return false;
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2008-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * Copy Paste for TYPO3 htmlArea RTE
 */
HTMLArea.CopyPaste = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		/*
		 * Setting up some properties from PageTSConfig
		 */
		this.buttonsConfiguration = this.editorConfiguration.buttons;
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '2.4',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: this.localize('Technische Universitat Ilmenau'),
			sponsorUrl	: 'http://www.tu-ilmenau.de/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the buttons
		 */
		Ext.iterate(this.buttonList, function (buttonId, button) {
			var buttonConfiguration = {
				id		: buttonId,
				tooltip		: this.localize(buttonId.toLowerCase()),
				iconCls		: 'htmlarea-action-' + button[2],
				action		: 'onButtonPress',
				context		: button[0],
				selection	: button[3],
				hotKey		: button[1]
			};
			this.registerButton(buttonConfiguration);
		}, this);
		return true;
	},
	/*
	 * The list of buttons added by this plugin
	 */
	buttonList: {
		Copy	: [null, 'c', 'copy', true],
		Cut	: [null, 'x', 'cut', true],
		Paste	: [null, 'v', 'paste', false]
	},
	/*
	 * This function gets called when the editor is generated
	 */
	onGenerate: function () {
		this.editor.iframe.mon(Ext.get(Ext.isIE ? this.editor.document.body : this.editor.document.documentElement), 'cut', this.cutHandler, this);
		Ext.iterate(this.buttonList, function (buttonId, button) {
				// Remove button from toolbar, if command is not supported
				// Starting with Safari 5 and Chrome 6, cut and copy commands are not supported anymore by WebKit
			if (!Ext.isGecko && !this.editor.document.queryCommandSupported(buttonId)) {
				this.editor.toolbar.remove(buttonId);
			}
				// Add hot key handling if the button is not enabled in the toolbar
			if (!this.getButton(buttonId)) {
				this.editor.iframe.hotKeyMap.addBinding({
					key: button[1].toUpperCase(),
					ctrl: true,
					shift: false,
					alt: false,
					handler: this.onHotKey,
					scope: this
				});
					// Ensure the hot key can be translated
				this.editorConfiguration.hotKeyList[button[1]] = {
					id	: button[1],
					cmd	: buttonId
				};
			}
		}, this);
	},
	/*
	 * This function gets called when a button or a hotkey was pressed.
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
		this.editor.focus();
		if (!this.applyToTable(buttonId)) {
				// If we are not handling table cells
			switch (buttonId) {
				case 'Copy':
					if (buttonId == id) {
							// If we are handling a button, not a hotkey
						this.applyBrowserCommand(buttonId);
					}
					break;
				case 'Cut' :
					if (buttonId == id) {
							// If we are handling a button, not a hotkey
						this.applyBrowserCommand(buttonId);
					}
						// Opera will not trigger the onCut event
					if (Ext.isOpera) {
						this.cutHandler();
					}
					break;
				case 'Paste':
					if (buttonId == id) {
							// If we are handling a button, not a hotkey
						this.applyBrowserCommand(buttonId);
					}
						// In FF3, the paste operation will indeed trigger the onPaste event not in FF2; nor in Opera
					if (Ext.isOpera || Ext.isGecko2) {
						var cleaner = this.getButton('CleanWord');
						if (cleaner) {
							cleaner.fireEvent.defer(250, cleaner, ['click', cleaner]);
						}
					}
					break;
				default:
					break;
			}
				// Stop the event if a button was handled
			return (buttonId != id);
		} else {
				// The table case was handled, let the event be stopped.
				// No cleaning required as the pasted cells are copied from the editor.
				// However paste by Opera cannot be stopped.
				// Revert Opera's operation as it produces invalid html anyways
			if (Ext.isOpera) {
				this.editor.inhibitKeyboardInput = true;
				var bookmark = this.editor.getBookMark().get(this.editor.getSelection().createRange());
				var html = this.editor.getInnerHTML();
				this.revertPaste.defer(200, this, [html, bookmark]);
			}
			return false;
		}
	},
	/*
	 * This funcion reverts the paste operation (performed by Opera)
	 */
	revertPaste: function (html, bookmark) {
		this.editor.setHTML(html);
		this.editor.getSelection().selectRange(this.editor.getBookMark().moveTo(bookmark));
		this.editor.inhibitKeyboardInput = false;
	},
	/*
	 * This function applies the browser command when a button is pressed
	 * In the case of hot key, the browser does it automatically
	 */
	applyBrowserCommand: function (buttonId) {
		try {
			this.editor.getSelection().execCommand(buttonId, false, null);
		} catch (e) {
			if (Ext.isGecko) {
				this.mozillaClipboardAccessException();
			}
		}
	},
	/*
	 * Handler for hotkeys configured through the hotKeyMap while button not enabled in toolbar (see onGenerate above)
	 */
	onHotKey: function (key, event) {
		var hotKey = String.fromCharCode(key).toLowerCase();
			// Stop the event if it was handled here
		if (!this.onButtonPress(this, hotKey)) {
			event.stopEvent();
		}
	},
	/*
	 * This function removes any link left over by the cut operation
	 */
	cutHandler: function (event) {
		this.removeEmptyLink.defer(50, this);
	},
	/*
	 * This function unlinks any empty link left over by the cut operation
	 */
	removeEmptyLink: function() {
		var range = this.editor.getSelection().createRange();
		var parent = this.editor.getSelection().getParentElement();
		if (parent.firstChild && /^(a)$/i.test(parent.firstChild.nodeName)) {
			parent = parent.firstChild;
		}
		if (/^(a)$/i.test(parent.nodeName)) {
			parent.normalize();
			if (!parent.innerHTML || (parent.childNodes.length == 1 && /^(br)$/i.test(parent.firstChild.nodeName))) {
				if (!Ext.isIE) {
					var container = parent.parentNode;
					this.editor.getDomNode().removeMarkup(parent);
						// Opera does not render empty list items
					if (Ext.isOpera && /^(li)$/i.test(container.nodeName) && !container.firstChild) {
						container.innerHTML = '<br />';
						this.editor.getSelection().selectNodeContents(container, true);
					}
				} else {
					HTMLArea.DOM.removeFromParent(parent);
				}
			}
		}
		if (Ext.isWebKit) {
				// Remove Apple's span and font tags
			this.editor.getDomNode().cleanAppleStyleSpans(this.editor.document.body);
				// Reset Safari selection in order to prevent insertion of span and/or font tags on next text input
			var bookmark = this.editor.getBookMark().get(this.editor.getSelection().createRange());
			this.editor.getSelection().selectRange(this.editor.getBookMark().moveTo(bookmark));
		}
		this.editor.updateToolbar();
	},
	/*
	 * This function gets called when a copy/cut/paste operation is to be performed
	 * This feature allows to paste a region of table cells
	 */
	applyToTable: function (buttonId) {
		var range = this.editor.getSelection().createRange();
		var parent = this.editor.getSelection().getParentElement();
		var endBlocks = this.editor.getSelection().getEndBlocks();
		switch (buttonId) {
			case 'Copy':
			case 'Cut' :
				HTMLArea.copiedCells = null;
				if ((/^(tr)$/i.test(parent.nodeName) && !Ext.isIE) || (/^(td|th)$/i.test(endBlocks.start.nodeName) && /^(td|th)$/i.test(endBlocks.end.nodeName) && !Ext.isGecko && endBlocks.start != endBlocks.end)) {
					HTMLArea.copiedCells = this.collectCells(buttonId, endBlocks);
				}
				break;
			case 'Paste':
				if (/^(tr|td|th)$/i.test(parent.nodeName) && HTMLArea.copiedCells) {
					return this.pasteCells(endBlocks);
				}
				break;
			default:
				break;
		}
		return false;
	},
	/*
	 * This function handles pasting of a collection of table cells
	 */
	pasteCells: function (endBlocks) {
		var cell = null;
		if (Ext.isGecko) {
			var range = this.editor.getSelection().createRange();
			cell = range.startContainer.childNodes[range.startOffset];
			while (cell && !HTMLArea.DOM.isBlockElement(cell)) {
				cell = cell.parentNode;
			}
		}
		if (!cell && /^(td|th)$/i.test(endBlocks.start.nodeName)) {
			cell = endBlocks.start;
		}
		if (!cell) {
				// Let the browser do it
			return false;
		}
		var tableParts = ['thead', 'tbody', 'tfoot'];
		var tablePartsIndex = { thead : 0, tbody : 1, tfoot : 2 };
		var tablePart = cell.parentNode.parentNode;
		var tablePartIndex = tablePartsIndex[tablePart.nodeName.toLowerCase()]
		var rows = HTMLArea.copiedCells[tablePartIndex];
		if (rows && rows[0]) {
			for (var i = 0, rowIndex = cell.parentNode.sectionRowIndex-1; i < rows.length && ++rowIndex < tablePart.rows.length; ++i) {
				var cells = rows[i];
				if (!cells) break;
				var row = tablePart.rows[rowIndex];
				for (var j = 0, cellIndex = cell.cellIndex-1; j < cells.length && ++cellIndex < row.cells.length; ++j) {
					row.cells[cellIndex].innerHTML = cells[j];
				}
			}
		}
		var table = tablePart.parentNode;
		for (var k = tablePartIndex +1; k < 3; ++k) {
			tablePart = table.getElementsByTagName(tableParts[k])[0];
			if (tablePart) {
				var rows = HTMLArea.copiedCells[k];
				for (var i = 0; i < rows.length && i < tablePart.rows.length; ++i) {
					var cells = rows[i];
					if (!cells) break;
					var row = tablePart.rows[i];
					for (var j = 0, cellIndex = cell.cellIndex-1; j < cells.length && ++cellIndex < row.cells.length; ++j) {
						row.cells[cellIndex].innerHTML = cells[j];
					}
				}
			}
		}
		return true;
	},
	/*
	 * This function collects the selected table cells for copy/cut operations
	 */
	collectCells: function (operation, endBlocks) {
		var tableParts = ['thead', 'tbody', 'tfoot'];
		var tablePartsIndex = { thead : 0, tbody : 1, tfoot : 2 };
		var selection = this.editor.getSelection().get().selection;
		var range, i = 0, cell, cells = null;
		var rows = new Array();
		for (var k = tableParts.length; --k >= 0;) {
			rows[k] = [];
		}
		var row = null;
		var cutRows = [];
		if (Ext.isGecko) {
			if (selection.rangeCount == 1) { // Collect the cells in the selected row
				cells = [];
				for (var i = 0, n = endBlocks.start.cells.length; i < n; ++i) {
					cell = endBlocks.start.cells[i];
					cells.push(cell.innerHTML);
					if (operation === 'Cut') {
						cell.innerHTML = '<br />';
					}
					if (operation === 'Cut') {
						cutRows.push(endBlocks.start);
					}
				}
				rows[tablePartsIndex[endBlocks.start.parentNode.nodeName.toLowerCase()]].push(cells);
			} else {
				try { // Collect the cells in some region of the table
					var firstCellOfRow = false;
					var lastCellOfRow = false;
					while (range = selection.getRangeAt(i++)) {
						cell = range.startContainer.childNodes[range.startOffset];
						if (cell.parentNode != row) {
							(cells) && rows[tablePartsIndex[row.parentNode.nodeName.toLowerCase()]].push(cells);
							if (operation === 'Cut' && firstCellOfRow && lastCellOfRow) cutRows.push(row);
							row = cell.parentNode;
							cells = [];
							firstCellOfRow = false;
							lastCellOfRow = false;
						}
						cells.push(cell.innerHTML);
						if (operation === 'Cut') {
							cell.innerHTML = '<br />';
						}
						if (!cell.previousSibling) firstCellOfRow = true;
						if (!cell.nextSibling) lastCellOfRow = true;
					}
				} catch(e) {
					/* finished walking through selection */
				}
				try { rows[tablePartsIndex[row.parentNode.nodeName.toLowerCase()]].push(cells); } catch(e) { }
				if (row && operation === 'Cut' && firstCellOfRow && lastCellOfRow) {
					cutRows.push(row);
				}
			}
		} else { // Internet Explorer, Safari and Opera
			var firstRow = endBlocks.start.parentNode;
			var lastRow = endBlocks.end.parentNode;
			cells = [];
			var firstCellOfRow = false;
			var lastCellOfRow = false;
			if (firstRow == lastRow) { // Collect the selected cells on the row
				cell = endBlocks.start;
				while (cell) {
					cells.push(cell.innerHTML);
					if (operation === 'Cut') {
						cell.innerHTML = '';
					}
					if (!cell.previousSibling) firstCellOfRow = true;
					if (!cell.nextSibling) lastCellOfRow = true;
					if (cell == endBlocks.end) break;
					cell = cell.nextSibling;
				}
				rows[tablePartsIndex[firstRow.parentNode.nodeName.toLowerCase()]].push(cells);
				if (operation === 'Cut' && firstCellOfRow && lastCellOfRow) cutRows.push(firstRow);
			} else { // Collect all cells on selected rows
				row = firstRow;
				while (row) {
					cells = [];
					for (var i = 0, n = row.cells.length; i < n ; ++i) {
						cells.push(row.cells[i].innerHTML);
						if (operation === 'Cut') {
							row.cells[i].innerHTML = '';
						}
					}
					rows[tablePartsIndex[row.parentNode.nodeName.toLowerCase()]].push(cells);
					if (operation === 'Cut') cutRows.push(row);
					if (row == lastRow) break;
					row = row.nextSibling;
				}
			}
		}
		for (var i = 0, n = cutRows.length; i < n; ++i) {
			if (i == n-1) {
				var tablePart = cutRows[i].parentNode;
				var next = cutRows[i].nextSibling;
				cutRows[i].parentNode.removeChild(cutRows[i]);
				if (next) {
					this.editor.getSelection().selectNodeContents(next.cells[0], true);
				} else if (tablePart.parentNode.rows.length) {
					this.editor.getSelection().selectNodeContents(tablePart.parentNode.rows[0].cells[0], true);
				}
			} else {
				cutRows[i].parentNode.removeChild(cutRows[i]);
			}
		}
		return rows;
	},
	/*
	 * This function gets called when the toolbar is updated
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors) {
		if (mode === 'wysiwyg' && this.editor.isEditable() && button.itemId === 'Paste') {
			try {
				button.setDisabled(!this.editor.document.queryCommandEnabled(button.itemId));
			} catch(e) {
				button.setDisabled(true);
			}
		}
	},
	/*
	 * Mozilla clipboard access exception handler
	 */
	mozillaClipboardAccessException: function () {
		if (InstallTrigger && this.buttonsConfiguration.paste && this.buttonsConfiguration.paste.mozillaAllowClipboardURL) {
			TYPO3.Dialog.QuestionDialog({
				title: this.localize('Allow-Clipboard-Helper-Add-On-Title'),
				msg: this.localize('Allow-Clipboard-Helper-Extension'),
				fn: this.installAllowClipboardHelperExtension,
				scope: this
			});
		} else {
			TYPO3.Dialog.QuestionDialog({
				title: this.localize('Firefox-Security-Prefs-Question-Title'),
				msg: this.localize('Moz-Clipboard'),
				fn: function (button) {
					if (button == 'yes') {
						window.open('http://mozilla.org/editor/midasdemo/securityprefs.html');
					}
				}
			});
			if (!InstallTrigger) {
				this.appendToLog('mozillaClipboardAccessException', 'Firefox InstallTrigger was not defined.', 'warn');
			}
		}
	},
	/*
	 * Install AllowClipboardHelperExtension
	 *
	 * @param	string		button: yes or no button was clicked in the dialogue
	 *
	 * @return	void
	 */
	installAllowClipboardHelperExtension: function (button) {
		if (button == 'yes') {
			if (InstallTrigger.enabled()) {
				var self = this;
				function mozillaInstallCallback(url, returnCode) {
					if (returnCode == 0) {
						TYPO3.Dialog.InformationDialog({
							title: self.localize('Allow-Clipboard-Helper-Add-On-Title'),
							msg: self.localize('Allow-Clipboard-Helper-Extension-Success')
						});
					} else {
						TYPO3.Dialog.ErrorDialog({
							title: self.localize('Allow-Clipboard-Helper-Add-On-Title'),
							msg: self.localize('Moz-Extension-Failure')
						});
						self.appendToLog('installAllowClipboardHelperExtension', 'Mozilla install return code was: ' + returnCode + '.', 'warn');
					}
					return false;
				}
				var mozillaXpi = new Object();
				mozillaXpi['AllowClipboard Helper'] = this.buttonsConfiguration.paste.mozillaAllowClipboardURL;
				InstallTrigger.install(mozillaXpi, mozillaInstallCallback);
			} else {
				TYPO3.Dialog.ErrorDialog({
					title: this.localize('Allow-Clipboard-Helper-Add-On-Title'),
					msg: this.localize('Mozilla-Org-Install-Not-Enabled')
				});
				this.appendToLog('installAllowClipboardHelperExtension', 'Mozilla install was not enabled.', 'warn');
			}
		}
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2004-2012 Stanislas Rolland <typo3(arobas)sjbr.ca>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/*
 * TYPO3 Color Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.TYPO3Color = Ext.extend(HTMLArea.Plugin, {
	/*
	 * This function gets called by the class constructor
	 */
	configurePlugin: function (editor) {
		this.buttonsConfiguration = this.editorConfiguration.buttons;
		this.colorsConfiguration = this.editorConfiguration.colors;
		this.disableColorPicker = this.editorConfiguration.disableColorPicker;
			// Coloring will use the style attribute
		if (this.getPluginInstance('TextStyle')) {
			this.getPluginInstance('TextStyle').addAllowedAttribute('style');
			this.allowedAttributes = this.getPluginInstance('TextStyle').allowedAttributes;
		}
		if (this.getPluginInstance('InlineElements')) {
			this.getPluginInstance('InlineElements').addAllowedAttribute('style');
			if (!this.allowedAllowedAttributes) {
				this.allowedAttributes = this.getPluginInstance('InlineElements').allowedAttributes;
			}
		}
		if (this.getPluginInstance('BlockElements')) {
			this.getPluginInstance('BlockElements').addAllowedAttribute('style');
		}
		if (!this.allowedAttributes) {
			this.allowedAttributes = new Array('id', 'title', 'lang', 'xml:lang', 'dir', 'class', 'style');
			if (Ext.isIE) {
				this.allowedAttributes.push('className');
			}
		}
		/*
		 * Registering plugin "About" information
		 */
		var pluginInformation = {
			version		: '4.3',
			developer	: 'Stanislas Rolland',
			developerUrl	: 'http://www.sjbr.ca/',
			copyrightOwner	: 'Stanislas Rolland',
			sponsor		: 'SJBR',
			sponsorUrl	: 'http://www.sjbr.ca/',
			license		: 'GPL'
		};
		this.registerPluginInformation(pluginInformation);
		/*
		 * Registering the buttons
		 */
		var buttonList = this.buttonList, buttonId;
		for (var i = 0; i < buttonList.length; ++i) {
			var button = buttonList[i];
			buttonId = button[0];
			var buttonConfiguration = {
				id		: buttonId,
				tooltip		: this.localize(buttonId),
				iconCls		: 'htmlarea-action-' + button[2],
				action		: 'onButtonPress',
				hotKey		: (this.buttonsConfiguration[button[1]] ? this.buttonsConfiguration[button[1]].hotKey : null),
				dialog		: true
			};
			this.registerButton(buttonConfiguration);
		}
		return true;
	 },
	/*
	 * The list of buttons added by this plugin
	 */
	buttonList: [
		['ForeColor', 'textcolor', 'color-foreground'],
		['HiliteColor', 'bgcolor', 'color-background']
	],
	/*
	 * Conversion object: button name to corresponding style property name
	 */
	styleProperty: {
		ForeColor	: 'color',
		HiliteColor	: 'backgroundColor'
	},
	colors: [
		'000000', '222222', '444444', '666666', '999999', 'BBBBBB', 'DDDDDD', 'FFFFFF',
		'660000', '663300', '996633', '003300', '003399', '000066', '330066', '660066',
		'990000', '993300', 'CC9900', '006600', '0033FF', '000099', '660099', '990066',
		'CC0000', 'CC3300', 'FFCC00', '009900', '0066FF', '0000CC', '663399', 'CC0099',
		'FF0000', 'FF3300', 'FFFF00', '00CC00', '0099FF', '0000FF', '9900CC', 'FF0099',
		'CC3333', 'FF6600', 'FFFF33', '00FF00', '00CCFF', '3366FF', '9933FF', 'FF00FF',
		'FF6666', 'FF6633', 'FFFF66', '66FF66', '00FFFF', '3399FF', '9966FF', 'FF66FF',
		'FF9999', 'FF9966', 'FFFF99', '99FF99', '99FFFF', '66CCFF', '9999FF', 'FF99FF',
		'FFCCCC', 'FFCC99', 'FFFFCC', 'CCFFCC', 'CCFFFF', '99CCFF', 'CCCCFF', 'FFCCFF'
	],
	/*
	 * This function gets called when the button was pressed.
	 *
	 * @param	object		editor: the editor instance
	 * @param	string		id: the button id or the key
	 * @param	object		target: the target element of the contextmenu event, when invoked from the context menu
	 *
	 * @return	boolean		false if action is completed
	 */
	onButtonPress: function (editor, id, target) {
			// Could be a button or its hotkey
		var buttonId = this.translateHotKey(id);
		buttonId = buttonId ? buttonId : id;
		var element = this.editor.getSelection().getParentElement();
		this.openDialogue(
			buttonId + '_title',
			{
				element: element,
				buttonId: buttonId
			},
			this.getWindowDimensions(
				{
					width: 350,
					height: 350
				},
				buttonId
			),
			this.buildItemsConfig(element, buttonId),
			this.setColor
		);
	},
	/*
	 * Build the window items config
	 */
	buildItemsConfig: function (element, buttonId) {
		var itemsConfig = [];
		var paletteItems = [];
			// Standard colors palette (boxed)
		if (!this.disableColorPicker) {
			paletteItems.push({
				xtype: 'container',
				items: {
					xtype: 'colorpalette',
					itemId: 'color-palette',
					colors: this.colors,
					cls: 'color-palette',
					value: (element && element.style[this.styleProperty[buttonId]]) ? HTMLArea.util.Color.colorToHex(element.style[this.styleProperty[buttonId]]).substr(1, 6) : '',
					allowReselect: true,
					listeners: {
						select: {
							fn: this.onSelect,
							scope: this
						}
					}
				}
			});
		}
			// Custom colors palette (boxed)
		if (this.colorsConfiguration) {
			paletteItems.push({
				xtype: 'container',
				items: {
					xtype: 'colorpalette',
					itemId: 'custom-colors',
					cls: 'htmlarea-custom-colors',
					colors: this.colorsConfiguration,
					value: (element && element.style[this.styleProperty[buttonId]]) ? HTMLArea.util.Color.colorToHex(element.style[this.styleProperty[buttonId]]).substr(1, 6) : '',
					tpl: new Ext.XTemplate(
						'<tpl for="."><a href="#" class="color-{1}" hidefocus="on"><em><span style="background:#{1}" unselectable="on">&#160;</span></em><span unselectable="on">{0}<span></a></tpl>'
					),
					allowReselect: true,
					listeners: {
						select: {
							fn: this.onSelect,
							scope: this
						}
					}
				}
			});
		}
		itemsConfig.push({
			xtype: 'container',
			layout: 'hbox',
			items: paletteItems
		});
		itemsConfig.push({
			xtype: 'displayfield',
			itemId: 'show-color',
			cls: 'show-color',
			width: 60,
			height: 22,
			helpTitle: this.localize(buttonId)
		});
		itemsConfig.push({
			itemId: 'color',
			cls: 'color',
			width: 60,
			minValue: 0,
			value: (element && element.style[this.styleProperty[buttonId]]) ? HTMLArea.util.Color.colorToHex(element.style[this.styleProperty[buttonId]]).substr(1, 6) : '',
			enableKeyEvents: true,
			fieldLabel: this.localize(buttonId),
			helpTitle: this.localize(buttonId),
			listeners: {
				change: {
					fn: this.onChange,
					scope: this
				},
				afterrender: {
					fn: this.onAfterRender,
					scope: this
				}
			}
		});
	 	return {
			xtype: 'fieldset',
			title: this.localize('color_title'),
			defaultType: 'textfield',
			labelWidth: 175,
			defaults: {
				helpIcon: false
			},
			items: itemsConfig
		};
	},
	/*
	 * On select handler: set the value of the color field, display the new color and update the other palette
	 */
	onSelect: function (palette, color) {
		this.dialog.find('itemId', 'color')[0].setValue(color);
		this.showColor(color);
		if (palette.getItemId() == 'color-palette') {
			var customPalette = this.dialog.find('itemId', 'custom-colors')[0];
			if (customPalette) {
				customPalette.deSelect();
			}
		} else {
			var standardPalette = this.dialog.find('itemId', 'color-palette')[0];
			if (standardPalette) {
				standardPalette.deSelect();
			}
		}
	},
	/*
	 * Display the selected color
	 */
	showColor: function (color) {
		if (color) {
			var newColor = color;
			if (newColor.indexOf('#') == 0) {
				newColor = newColor.substr(1);
			}
			this.dialog.find('itemId', 'show-color')[0].el.setStyle('backgroundColor', HTMLArea.util.Color.colorToHex(parseInt(newColor, 16)));
		}
	},
	/*
	 * On change handler: display the new color and select it in the palettes, if it exists
	 */
	onChange: function (field, value) {
		if (value) {
			var color = value.toUpperCase();
			this.showColor(color);
			var standardPalette = this.dialog.find('itemId', 'color-palette')[0];
			if (standardPalette) {
				standardPalette.select(color);
			}
			var customPalette = this.dialog.find('itemId', 'custom-colors')[0];
			if (customPalette) {
				customPalette.select(color);
			}
		}
	},
	/*
	 * On after render handler: display the color
	 */
	onAfterRender: function (field) {
		if (!Ext.isEmpty(field.getValue())) {
			this.showColor(field.getValue());
		}
	},
	/*
	 * Open the dialogue window
	 *
	 * @param	string		title: the window title
	 * @param	object		arguments: some arguments for the handler
	 * @param	integer		dimensions: the opening width of the window
	 * @param	object		tabItems: the configuration of the tabbed panel
	 * @param	function	handler: handler when the OK button if clicked
	 *
	 * @return	void
	 */
	openDialogue: function (title, arguments, dimensions, items, handler) {
		if (this.dialog) {
			this.dialog.close();
		}
		this.dialog = new Ext.Window({
			title: this.localize(title),
			arguments: arguments,
			cls: 'htmlarea-window',
			border: false,
			width: dimensions.width,
			height: dimensions.height,
			autoScroll: true,
				// As of ExtJS 3.1, JS error with IE when the window is resizable
			resizable: !Ext.isIE,
			iconCls: this.getButton(arguments.buttonId).iconCls,
			listeners: {
				close: {
					fn: this.onClose,
					scope: this
				}
			},
			items: {
				xtype: 'container',
				layout: 'form',
				style: {
					width: '95%'
				},
				defaults: {
					labelWidth: 150
				},
				items: items
			},
			buttons: [
				this.buildButtonConfig('OK', handler),
				this.buildButtonConfig('Cancel', this.onCancel)
			]
		});
		this.show();
	},
	/*
	 * Set the color and close the dialogue
	 */
	setColor: function(button, event) {
		this.restoreSelection();
		var buttonId = this.dialog.arguments.buttonId;
		var color = this.dialog.find('itemId', 'color')[0].getValue();
		if (color) {
			if (color.indexOf('#') == 0) {
				color = color.substr(1);
			}
			color = HTMLArea.util.Color.colorToHex(parseInt(color, 16));
		}
		var 	element,
			fullNodeSelected = false;
		var range = this.editor.getSelection().createRange();
		var parent = this.editor.getSelection().getParentElement();
		var selectionEmpty = this.editor.getSelection().isEmpty();
		var statusBarSelection = this.editor.statusBar ? this.editor.statusBar.getSelection() : null;
		if (!selectionEmpty) {
			var fullySelectedNode = this.editor.getSelection().getFullySelectedNode();
			if (fullySelectedNode) {
				fullNodeSelected = true;
				parent = fullySelectedNode;
			}
		}
		if (selectionEmpty || fullNodeSelected) {
			element = parent;
				// Set the color in the style attribute
			element.style[this.styleProperty[buttonId]] = color;
				// Remove the span tag if it has no more attribute
			if (/^span$/i.test(element.nodeName) && !HTMLArea.DOM.hasAllowedAttributes(element, this.allowedAttributes)) {
				this.editor.getDomNode().removeMarkup(element);
			}
		} else if (statusBarSelection) {
			var element = statusBarSelection;
				// Set the color in the style attribute
			element.style[this.styleProperty[buttonId]] = color;
				// Remove the span tag if it has no more attribute
			if (/^span$/i.test(element.nodeName) && !HTMLArea.DOM.hasAllowedAttributes(element, this.allowedAttributes)) {
				this.editor.getDomNode().removeMarkup(element);
			}
		} else if (color && this.editor.getSelection().endPointsInSameBlock()) {
			var element = this.editor.document.createElement('span');
				// Set the color in the style attribute
			element.style[this.styleProperty[buttonId]] = color;
			this.editor.getDomNode().wrapWithInlineElement(element, range);
		}
		this.close();
		event.stopEvent();
	},
	/*
	 * This function gets called when the toolbar is updated
	 */
	onUpdateToolbar: function (button, mode, selectionEmpty, ancestors, endPointsInSameBlock) {
		if (mode === 'wysiwyg' && this.editor.isEditable()) {
			var statusBarSelection = this.editor.statusBar ? this.editor.statusBar.getSelection() : null,
				parentElement = statusBarSelection ? statusBarSelection : this.editor.getSelection().getParentElement(),
				disabled = !endPointsInSameBlock || (selectionEmpty && /^body$/i.test(parentElement.nodeName));
			button.setInactive(!parentElement.style[this.styleProperty[button.itemId]]);
			button.setDisabled(disabled);
		}
	}
});

HTMLArea.I18N=new Object();HTMLArea.I18N={"tooltips":{"bold":[{"source":"Bold","target":"Bold"}],"italic":[{"source":"Italic","target":"Italic"}],"underline":[{"source":"Underline","target":"Underline"}],"strikethrough":[{"source":"Strikethrough","target":"Strikethrough"}],"subscript":[{"source":"Subscript","target":"Subscript"}],"superscript":[{"source":"Superscript","target":"Superscript"}],"justifyleft":[{"source":"Justify Left","target":"Justify Left"}],"justifycenter":[{"source":"Justify Center","target":"Justify Center"}],"justifyright":[{"source":"Justify Right","target":"Justify Right"}],"justifyfull":[{"source":"Justify Full","target":"Justify Full"}],"insertorderedlist":[{"source":"Ordered List","target":"Ordered List"}],"insertunorderedlist":[{"source":"Bulleted List","target":"Bulleted List"}],"outdent":[{"source":"Decrease Indent","target":"Decrease Indent"}],"indent":[{"source":"Increase Indent","target":"Increase Indent"}],"forecolor":[{"source":"Font Color","target":"Font Color"}],"hilitecolor":[{"source":"Background Color","target":"Background Color"}],"inserthorizontalrule":[{"source":"Horizontal Rule","target":"Horizontal Rule"}],"createlink":[{"source":"Insert Web Link","target":"Insert Web Link"}],"unlink":[{"source":"Remove link","target":"Remove link"}],"insertimage":[{"source":"Insert\/Modify Image","target":"Insert\/Modify Image"}],"inserttable":[{"source":"Insert Table","target":"Insert Table"}],"htmlmode":[{"source":"Toggle HTML Source","target":"Toggle HTML Source"}],"popupeditor":[{"source":"Enlarge the editor","target":"Enlarge the editor"}],"about":[{"source":"About this editor","target":"About this editor"}],"showhelp":[{"source":"Help using editor","target":"Help using editor"}],"textindicator":[{"source":"Current style","target":"Current style"}],"undo":[{"source":"Undo the last action","target":"Undo the last action"}],"redo":[{"source":"Redo the last action","target":"Redo the last action"}],"cut":[{"source":"Cut selection","target":"Cut selection"}],"copy":[{"source":"Copy selection","target":"Copy selection"}],"paste":[{"source":"Paste from clipboard","target":"Paste from clipboard"}],"lefttoright":[{"source":"Direction left to right","target":"Direction left to right"}],"righttoleft":[{"source":"Direction right to left","target":"Direction right to left"}],"removeformat":[{"source":"Remove formatting","target":"Remove formatting"}],"print":[{"source":"Print document","target":"Print document"}],"killword":[{"source":"Clear MSOffice tags","target":"Clear MSOffice tags"}],"fontname":[{"source":"Font","target":"Font"}],"fontsize":[{"source":"Font size","target":"Font size"}],"formatblock":[{"source":"Type of paragragh","target":"Type of paragragh"}]},"msg":{"Path":[{"source":"Path","target":"Path"}],"TEXT_MODE":[{"source":"You are in TEXT MODE.  Use the [<>] button to switch back to WYSIWYG.","target":"You are in TEXT MODE.  Use the [<>] button to switch back to WYSIWYG."}],"ActiveX-required":[{"source":"Loading the editor in Internet Explorer requires the execution of ActiveX controls to be enabled.","target":"Loading the editor in Internet Explorer requires the execution of ActiveX controls to be enabled."}],"HTML-document-not-well-formed":[{"source":"The HTML document is not well-formed.","target":"The HTML document is not well-formed."}],"Moz-Clipboard":[{"source":"Unprivileged scripts cannot access Cut\/Copy\/Paste programatically for security reasons. Click YES to see a technical note at mozilla.org which shows you how to allow a script to access the clipboard.","target":"Unprivileged scripts cannot access Cut\/Copy\/Paste programatically for security reasons. Click YES to see a technical note at mozilla.org which shows you how to allow a script to access the clipboard."}],"Moz-Extension":[{"source":"For security reasons, unprivileged applications cannot access the clipboard. Click YES to install a component that will enable applications from this site to access the clipboard and perform copy, cut and paste operations.","target":"For security reasons, unprivileged applications cannot access the clipboard. Click YES to install a component that will enable applications from this site to access the clipboard and perform copy, cut and paste operations."}],"Moz-Extension-Success":[{"source":"The installation was successful. You need to exit and restart your browser for the change to take effect.","target":"The installation was successful. You need to exit and restart your browser for the change to take effect."}],"Moz-Extension-Failure":[{"source":"Sorry, Firefox Add-on AllowClipboard Helper could not be installed.","target":"Sorry, Firefox Add-on AllowClipboard Helper could not be installed."}],"Moz-Extension-Install-Not-Enabled":[{"source":"The installation cannot be performed. Please change your browser preferences in order to allow installation of sofware from this site.","target":"The installation cannot be performed. Please change your browser preferences in order to allow installation of sofware from this site."}],"Allow-Clipboard-Helper-Extension":[{"source":"For security reasons, unprivileged applications cannot access the clipboard. Click YES to install a component that will enable you to specify the sites or pages that will be allowed to access the clipboard and perform copy, cut and paste operations.","target":"For security reasons, unprivileged applications cannot access the clipboard. Click YES to install a component that will enable you to specify the sites or pages that will be allowed to access the clipboard and perform copy, cut and paste operations."}],"Mozilla-Org-Install-Not-Enabled":[{"source":"The installation cannot be performed. Please change your browser preferences in order to allow installation of sofware from https:\/\/addons.mozilla.org.","target":"The installation cannot be performed. Please change your browser preferences in order to allow installation of sofware from https:\/\/addons.mozilla.org."}],"Allow-Clipboard-Helper-Extension-Success":[{"source":"The installation was successful. You need to exit and restart your browser for the change to take effect. Afterwards, use the AllowClipboard Helper from the tools menu to allow specific sites to use the clipboard.","target":"The installation was successful. You need to exit and restart your browser for the change to take effect. Afterwards, use the AllowClipboard Helper from the tools menu to allow specific sites to use the clipboard."}]},"dialogs":{"OK":[{"source":"OK","target":"OK"}],"Cancel":[{"source":"Cancel","target":"Cancel"}],"Delete":[{"source":"Delete","target":"Delete"}],"Close":[{"source":"Close","target":"Close"}],"Not set":[{"source":"Not set","target":"Not set"}],"General":[{"source":"General","target":"General"}],"Alignment:":[{"source":"Text alignment:","target":"Text alignment:"}],"Alignment not set":[{"source":"Not set","target":"Not set"}],"Left":[{"source":"Left","target":"Left"}],"Center":[{"source":"Center","target":"Center"}],"Right":[{"source":"Right","target":"Right"}],"Texttop":[{"source":"Texttop","target":"Texttop"}],"Absmiddle":[{"source":"Absmiddle","target":"Absmiddle"}],"Baseline":[{"source":"Baseline","target":"Baseline"}],"Absbottom":[{"source":"Absbottom","target":"Absbottom"}],"Bottom":[{"source":"Bottom","target":"Bottom"}],"Middle":[{"source":"Middle","target":"Middle"}],"Top":[{"source":"Top","target":"Top"}],"Justify":[{"source":"Justify","target":"Justify"}],"Float:":[{"source":"Float:","target":"Float:"}],"Non-floating":[{"source":"Non-floating","target":"Non-floating"}],"Layout":[{"source":"Layout","target":"Layout"}],"Spacing and padding":[{"source":"Spacing and padding","target":"Spacing and padding"}],"Horizontal:":[{"source":"Horizontal:","target":"Horizontal:"}],"Horizontal padding":[{"source":"Horizontal padding","target":"Horizontal padding"}],"Vertical:":[{"source":"Vertical:","target":"Vertical:"}],"Vertical padding":[{"source":"Vertical padding","target":"Vertical padding"}],"Border":[{"source":"Border","target":"Border"}],"Border thickness:":[{"source":"Border thickness:","target":"Border thickness:"}],"Leave empty for no border":[{"source":"Leave empty for no border","target":"Leave empty for no border"}],"Insert\/Modify Link":[{"source":"Insert\/Modify Link","target":"Insert\/Modify Link"}],"Insert link":[{"source":"Insert link","target":"Insert link"}],"Modify link":[{"source":"Modify link","target":"Modify link"}],"URL:":[{"source":"URL:","target":"URL:"}],"link_href_tooltip":[{"source":"Enter the link URL here","target":"Enter the link URL here"}],"link_url_required":[{"source":"Please enter the URL where this link points to","target":"Please enter the URL where this link points to"}],"Title (tooltip):":[{"source":"Title:","target":"Title:"}],"link_title_tooltip":[{"source":"Enter the link tooltip here","target":"Enter the link tooltip here"}],"Target:":[{"source":"Target:","target":"Target:"}],"link_target_tooltip":[{"source":"Select the name of the target frame","target":"Select the name of the target frame"}],"target_none":[{"source":"None (use implicit)","target":"None (use implicit)"}],"target_blank":[{"source":"New window (_blank)","target":"New window (_blank)"}],"target_self":[{"source":"Same frame (_self)","target":"Same frame (_self)"}],"target_top":[{"source":"Top frame (_top)","target":"Top frame (_top)"}],"target_other":[{"source":"Other frame","target":"Other frame"}],"Insert Custom Element":[{"source":"Insert Custom Element","target":"Insert Custom Element"}],"Insert Table":[{"source":"Insert Table","target":"Insert Table"}],"Dimension":[{"source":"Dimension","target":"Dimension"}],"Rows:":[{"source":"Rows:","target":"Rows:"}],"Number of rows":[{"source":"Number of rows","target":"Number of rows"}],"You must enter a number of rows":[{"source":"You must enter a number of rows","target":"You must enter a number of rows"}],"Cols:":[{"source":"Cols:","target":"Cols:"}],"Number of columns":[{"source":"Number of columns","target":"Number of columns"}],"You must enter a number of columns":[{"source":"You must enter a number of columns","target":"You must enter a number of columns"}],"Width:":[{"source":"Width:","target":"Width:"}],"Width of the table":[{"source":"Width of the table","target":"Width of the table"}],"Percent":[{"source":"Percent","target":"Percent"}],"Pixels":[{"source":"Pixels","target":"Pixels"}],"Em":[{"source":"Em","target":"Em"}],"Width unit":[{"source":"Width unit","target":"Width unit"}],"Text alignment":[{"source":"Text alignment","target":"Text alignment"}],"Where the table should float":[{"source":"Specifies where the table should float","target":"Specifies where the table should float"}],"Cell spacing:":[{"source":"Cell spacing:","target":"Cell spacing:"}],"Space between adjacent cells":[{"source":"Space between adjacent cells","target":"Space between adjacent cells"}],"Cell padding:":[{"source":"Cell padding:","target":"Cell padding:"}],"Space between content and border in cell":[{"source":"Space between content and border in cell","target":"Space between content and border in cell"}],"Insert Image":[{"source":"Insert\/Modify Image","target":"Insert\/Modify Image"}],"Insert image":[{"source":"Insert image","target":"Insert image"}],"Modify image":[{"source":"Modify image","target":"Modify image"}],"Image URL:":[{"source":"Image URL:","target":"Image URL:"}],"Enter the image URL here":[{"source":"Enter the image URL here","target":"Enter the image URL here"}],"Preview":[{"source":"Preview","target":"Preview"}],"Preview the image in a new window":[{"source":"Preview the image in a new window","target":"Preview the image in a new window"}],"Alternate text:":[{"source":"Alternate text:","target":"Alternate text:"}],"For browsers that dont support images":[{"source":"For browsers that don't support images","target":"For browsers that don't support images"}],"Where the image should float":[{"source":"Specifies where the image should float","target":"Specifies where the image should float"}],"Image alignment:":[{"source":"Image alignment:","target":"Image alignment:"}],"Positioning of this image":[{"source":"Positioning of this image relative to text","target":"Positioning of this image relative to text"}],"Image Preview":[{"source":"Image Preview","target":"Image Preview"}],"image_url_first":[{"source":"You have to enter the image URL first","target":"You have to enter the image URL first"}],"image_url_required":[{"source":"You must enter the image URL","target":"You must enter the image URL"}],"Select Color":[{"source":"Select Color","target":"Select Color"}],"Insert\/Modify Acronym":[{"source":"Insert\/Modify Acronym or Abbreviation","target":"Insert\/Modify Acronym or Abbreviation"}],"About HTMLArea":[{"source":"About htmlArea RTE","target":"About htmlArea RTE"}],"About":[{"source":"About","target":"About"}],"free_editor":[{"source":"A free and open-source editor for <textarea> fields, featuring integration with TYPO3.","target":"A free and open-source editor for <textarea> fields, featuring integration with TYPO3."}],"Browser support":[{"source":"Browser support","target":"Browser support"}],"Mozilla_or_IE":[{"source":"For Firefox 1.5+, SeaMonkey 1.0+, Safari 3.0.4+, Google Chrome 1.0+ and Opera 9.62+ on any platform, and for Internet Explorer 6.0+ on Windows.","target":"For Firefox 1.5+, SeaMonkey 1.0+, Safari 3.0.4+, Google Chrome 1.0+ and Opera 9.62+ on any platform, and for Internet Explorer 6.0+ on Windows."}],"product_documentation":[{"source":"For more information, please visit:","target":"For more information, please visit:"}],"All rights reserved.":[{"source":"All Rights Reserved.","target":"All Rights Reserved."}],"License":[{"source":"License","target":"License"}],"htmlArea License (based on BSD license)":[{"source":"htmlArea RTE License, based on BSD License","target":"htmlArea RTE License, based on BSD License"}],"Plugins":[{"source":"Plugins","target":"Plugins"}],"Name":[{"source":"Name","target":"Name"}],"Developer":[{"source":"Developer","target":"Developer"}],"Sponsored by":[{"source":"Sponsored by","target":"Sponsored by"}],"The following plugins have been loaded.":[{"source":"The following plugins have been loaded.","target":"The following plugins have been loaded."}],"No plugins have been loaded.":[{"source":"No plugins have been loaded.","target":"No plugins have been loaded."}],"User agent reports:":[{"source":"User agent reports:","target":"User agent reports:"}],"style":[{"source":"Paragraph:","target":"Paragraph:"}],"Block style label":[{"source":"Block style:","target":"Block style:"}],"text_style":[{"source":"Text style:","target":"Text style:"}],"LeftToRight":[{"source":"Left to right","target":"Left to right"}],"RightToLeft":[{"source":"Right to left","target":"Right to left"}],"Language":[{"source":"Language","target":"Language"}],"Text direction":[{"source":"Text direction","target":"Text direction"}],"Language:":[{"source":"Language:","target":"Language:"}],"Text direction:":[{"source":"Text direction:","target":"Text direction:"}],"No language mark":[{"source":"No language","target":"No language"}],"Remove language mark":[{"source":"Remove language","target":"Remove language"}],"statusBarStyle":[{"source":"Style","target":"Style"}],"statusBarReady":[{"source":"Ready","target":"Ready"}],"word":[{"source":"word","target":"word"}],"words":[{"source":"words","target":"words"}]}};HTMLArea.I18N["EditorMode"]=new Object();HTMLArea.I18N["EditorMode"]={"TextMode-Tooltip":[{"source":"Toggle text mode","target":"Toggle text mode"}],"HTMLMode-Tooltip":[{"source":"Toggle HTML mode","target":"Toggle HTML mode"}]};HTMLArea.I18N["DefaultInline"]=new Object();HTMLArea.I18N["DefaultInline"]={"Bold-Tooltip":[{"source":"Bold","target":"Bold"}],"Italic-Tooltip":[{"source":"Italic","target":"Italic"}],"StrikeThrough-Tooltip":[{"source":"Strike-through","target":"Strike-through"}],"Subscript-Tooltip":[{"source":"Subscript","target":"Subscript"}],"Superscript-Tooltip":[{"source":"Superscript","target":"Superscript"}],"Underline-Tooltip":[{"source":"Underline","target":"Underline"}]};HTMLArea.I18N["BlockElements"]=new Object();HTMLArea.I18N["BlockElements"]={"Indent-Tooltip":[{"source":"Increase indent","target":"Increase indent"}],"Indent-helpText":[{"source":"Increases text indentation","target":"Increases text indentation"}],"Outdent-Tooltip":[{"source":"Reduce indent","target":"Reduce indent"}],"Outdent-helpText":[{"source":"Reduces text indentation","target":"Reduces text indentation"}],"Blockquote-Tooltip":[{"source":"Large quotation","target":"Large quotation"}],"Blockquote-helpText":[{"source":"Makes a large quotation block","target":"Makes a large quotation block"}],"FormatBlock-Tooltip":[{"source":"Type of block","target":"Type of block"}],"InsertParagraphBefore-Tooltip":[{"source":"Insert a paragraph before the current block","target":"Insert a paragraph before the current block"}],"InsertParagraphBefore-contextMenuTitle":[{"source":"Insert paragraph before","target":"Insert paragraph before"}],"InsertParagraphBefore-helpText":[{"source":"Inserts a paragraph before the current block","target":"Inserts a paragraph before the current block"}],"InsertParagraphAfter-Tooltip":[{"source":"Insert a paragraph after the current block","target":"Insert a paragraph after the current block"}],"InsertParagraphAfter-contextMenuTitle":[{"source":"Insert paragraph after","target":"Insert paragraph after"}],"InsertParagraphAfter-helpText":[{"source":"Inserts a paragraph after the current block","target":"Inserts a paragraph after the current block"}],"JustifyLeft-Tooltip":[{"source":"Justify left","target":"Justify left"}],"JustifyLeft-helpText":[{"source":"Aligns the text to the left","target":"Aligns the text to the left"}],"JustifyCenter-Tooltip":[{"source":"Center","target":"Center"}],"JustifyCenter-helpText":[{"source":"Centers the text","target":"Centers the text"}],"JustifyRight-Tooltip":[{"source":"Justify right","target":"Justify right"}],"JustifyRight-helpText":[{"source":"Aligns the text to the right","target":"Aligns the text to the right"}],"JustifyFull-Tooltip":[{"source":"Justify left and right","target":"Justify left and right"}],"JustifyFull-helpText":[{"source":"Aligns the text both to the left and the right","target":"Aligns the text both to the left and the right"}],"Left-Tooltip":[{"source":"Left","target":"Left"}],"InsertOrderedList-Tooltip":[{"source":"Ordered List","target":"Ordered List"}],"InsertOrderedList-helpText":[{"source":"Makes an ordered list from the curent selection","target":"Makes an ordered list from the curent selection"}],"InsertUnorderedList-Tooltip":[{"source":"Bulleted List","target":"Bulleted List"}],"InsertUnorderedList-helpText":[{"source":"Makes an bulleted list from the curent selection","target":"Makes an bulleted list from the curent selection"}],"InsertHorizontalRule-Tooltip":[{"source":"Horizontal Rule","target":"Horizontal Rule"}],"InsertHorizontalRule-helpText":[{"source":"Inserts an horizontal rule","target":"Inserts an horizontal rule"}],"No block":[{"source":"No block format","target":"No block format"}],"Remove block":[{"source":"Remove block format","target":"Remove block format"}],"Technische Universitat Ilmenau":[{"source":"Technische Universit\u00e4t Ilmenau","target":"Technische Universit\u00e4t Ilmenau"}]};HTMLArea.I18N["BlockStyle"]=new Object();HTMLArea.I18N["BlockStyle"]={"No style":[{"source":"No block style","target":"No block style"}],"Remove style":[{"source":"Remove block style","target":"Remove block style"}],"Unknown style":[{"source":"Unknown block style","target":"Unknown block style"}],"Element style":[{"source":"Block element style","target":"Block element style"}],"BlockStyle-Tooltip":[{"source":"Apply style to the containing block","target":"Apply style to the containing block"}],"frame-frame1":[{"source":"Frame with grey background","target":"Frame with grey background"}],"frame-frame2":[{"source":"Frame with yellow background","target":"Frame with yellow background"}],"important":[{"source":"Important","target":"Important"}],"name-of-person":[{"source":"Name of person","target":"Name of person"}],"detail":[{"source":"Detail","target":"Detail"}],"component-items":[{"source":"Component items","target":"Component items"}],"action-items":[{"source":"Action items","target":"Action items"}],"Technische Universitat Ilmenau":[{"source":"Technische Universit\u00e4t Ilmenau","target":"Technische Universit\u00e4t Ilmenau"}]};HTMLArea.I18N["CharacterMap"]=new Object();HTMLArea.I18N["CharacterMap"]={"CharacterMapTooltip":[{"source":"Insert special character","target":"Insert special character"}],"InsertCharacter-Tooltip":[{"source":"Insert special character","target":"Insert special character"}],"Insert special character":[{"source":"Insert special character","target":"Insert special character"}],"InsertSoftHyphen-Tooltip":[{"source":"Insert soft hyphen","target":"Insert soft hyphen"}],"general":[{"source":"General","target":"General"}],"mathematical":[{"source":"Mathematical","target":"Mathematical"}],"graphical":[{"source":"Shapes and arrows","target":"Shapes and arrows"}],"HTML value:":[{"source":"HTML value:","target":"HTML value:"}],"Close":[{"source":"Close","target":"Close"}],"nbsp":[{"source":"Non-breaking space","target":"Non-breaking space"}],"Agrave":[{"source":"Capital a with grave accent","target":"Capital a with grave accent"}],"agrave":[{"source":"Small a with grave accent","target":"Small a with grave accent"}],"Aacute":[{"source":"Capital a with acute accent","target":"Capital a with acute accent"}],"aacute":[{"source":"Small a with acute accent","target":"Small a with acute accent"}],"Acirc":[{"source":"Capital a with circumflex accent","target":"Capital a with circumflex accent"}],"acirc":[{"source":"Small a with circumflex accent","target":"Small a with circumflex accent"}],"Atilde":[{"source":"Capital a with tilde","target":"Capital a with tilde"}],"atilde":[{"source":"Small a with tilde","target":"Small a with tilde"}],"Auml":[{"source":"Capital a with umlaut\/diaeresis","target":"Capital a with umlaut\/diaeresis"}],"auml":[{"source":"Small a with umlaut\/diaeresis","target":"Small a with umlaut\/diaeresis"}],"Aring":[{"source":"Capital a with ring","target":"Capital a with ring"}],"aring":[{"source":"Small a with ring","target":"Small a with ring"}],"AElig":[{"source":"Capital ligature ae","target":"Capital ligature ae"}],"aelig":[{"source":"Small ligature ae","target":"Small ligature ae"}],"ordf":[{"source":"Feminine ordinal indicator","target":"Feminine ordinal indicator"}],"Ccedil":[{"source":"Capital c with cedilla","target":"Capital c with cedilla"}],"ccedil":[{"source":"Small c with cedilla","target":"Small c with cedilla"}],"ETH":[{"source":"Capital eth, Icelandic","target":"Capital eth, Icelandic"}],"eth":[{"source":"Small eth, Icelandic","target":"Small eth, Icelandic"}],"Egrave":[{"source":"Capital e with grave accent","target":"Capital e with grave accent"}],"egrave":[{"source":"Small e with grave accent","target":"Small e with grave accent"}],"Eacute":[{"source":"Capital e with acute accent","target":"Capital e with acute accent"}],"eacute":[{"source":"Small e with acute accent","target":"Small e with acute accent"}],"Ecirc":[{"source":"Capital e with circumflex accent","target":"Capital e with circumflex accent"}],"ecirc":[{"source":"Small e with circumflex accent","target":"Small e with circumflex accent"}],"Euml":[{"source":"Capital e with umlaut\/diaeresis","target":"Capital e with umlaut\/diaeresis"}],"euml":[{"source":"Small e with umlaut\/diaeresis","target":"Small e with umlaut\/diaeresis"}],"Igrave":[{"source":"Capital i with grave accent","target":"Capital i with grave accent"}],"igrave":[{"source":"Small i with grave accent","target":"Small i with grave accent"}],"Iacute":[{"source":"Capital i with acute accent","target":"Capital i with acute accent"}],"iacute":[{"source":"Small i with acute accent","target":"Small i with acute accent"}],"Icirc":[{"source":"Capital i with circumflex accent","target":"Capital i with circumflex accent"}],"icirc":[{"source":"Small i with circumflex accent","target":"Small i with circumflex accent"}],"Iuml":[{"source":"Capital i with umlaut\/diaeresis","target":"Capital i with umlaut\/diaeresis"}],"iuml":[{"source":"Small i with umlaut\/diaeresis","target":"Small i with umlaut\/diaeresis"}],"Ntilde":[{"source":"Capital n with tilde","target":"Capital n with tilde"}],"ntilde":[{"source":"Small n with tilde","target":"Small n with tilde"}],"Ograve":[{"source":"Capital o with grave accent","target":"Capital o with grave accent"}],"ograve":[{"source":"Small o with grave accent","target":"Small o with grave accent"}],"Oacute":[{"source":"Capital o with acute accent","target":"Capital o with acute accent"}],"oacute":[{"source":"Small o with acute accent","target":"Small o with acute accent"}],"Ocirc":[{"source":"Capital o with circumflex accent","target":"Capital o with circumflex accent"}],"ocirc":[{"source":"Small o with circumflex accent","target":"Small o with circumflex accent"}],"Otilde":[{"source":"Capital o with tilde","target":"Capital o with tilde"}],"otilde":[{"source":"Small o with tilde","target":"Small o with tilde"}],"Ouml":[{"source":"Capital o with umlaut\/diaeresis","target":"Capital o with umlaut\/diaeresis"}],"ouml":[{"source":"Small o with umlaut\/diaeresis","target":"Small o with umlaut\/diaeresis"}],"Oslash":[{"source":"Capital o with slash","target":"Capital o with slash"}],"oslash":[{"source":"Small o with slash","target":"Small o with slash"}],"OElig":[{"source":"Capital ligature OE","target":"Capital ligature OE"}],"oelig":[{"source":"Small ligature OE","target":"Small ligature OE"}],"ordm":[{"source":"Masculine ordinal indicator","target":"Masculine ordinal indicator"}],"Scaron":[{"source":"Capital s with caron","target":"Capital s with caron"}],"scaron":[{"source":"Small s with caron","target":"Small s with caron"}],"szlig":[{"source":"Small sharp s, German","target":"Small sharp s, German"}],"THORN":[{"source":"Capital THORN, Icelandic","target":"Capital THORN, Icelandic"}],"thorn":[{"source":"Small thorn, Icelandic","target":"Small thorn, Icelandic"}],"Ugrave":[{"source":"Capital u with grave accent","target":"Capital u with grave accent"}],"ugrave":[{"source":"Small u with grave accent","target":"Small u with grave accent"}],"Uacute":[{"source":"Capital u with acute accent","target":"Capital u with acute accent"}],"uacute":[{"source":"Small u with acute accent","target":"Small u with acute accent"}],"Ucirc":[{"source":"Capital u with circumflex accent","target":"Capital u with circumflex accent"}],"ucirc":[{"source":"Small u with circumflex accent","target":"Small u with circumflex accent"}],"Uuml":[{"source":"Capital u with umlaut\/diaeresis","target":"Capital u with umlaut\/diaeresis"}],"uuml":[{"source":"Small u with umlaut\/diaeresis","target":"Small u with umlaut\/diaeresis"}],"Yacute":[{"source":"Capital y with acute accent","target":"Capital y with acute accent"}],"yacute":[{"source":"Small y with acute accent","target":"Small y with acute accent"}],"Yuml":[{"source":"Capital y with umlaut\/diaeresis","target":"Capital y with umlaut\/diaeresis"}],"yuml":[{"source":"Small y with umlaut\/diaeresis","target":"Small y with umlaut\/diaeresis"}],"acute":[{"source":"Spacing acute","target":"Spacing acute"}],"circ":[{"source":"Modifier letter circumflex accent","target":"Modifier letter circumflex accent"}],"tilde":[{"source":"Small tilde","target":"Small tilde"}],"uml":[{"source":"Spacing diaeresis","target":"Spacing diaeresis"}],"cedil":[{"source":"Spacing cedilla","target":"Spacing cedilla"}],"shy":[{"source":"Soft hyphen","target":"Soft hyphen"}],"ndash":[{"source":"En dash","target":"En dash"}],"mdash":[{"source":"Em dash","target":"Em dash"}],"lsquo":[{"source":"Left single quotation mark","target":"Left single quotation mark"}],"rsquo":[{"source":"Right single quotation mark","target":"Right single quotation mark"}],"sbquo":[{"source":"Single low-9 quotation mark","target":"Single low-9 quotation mark"}],"ldquo":[{"source":"Left double quotation mark","target":"Left double quotation mark"}],"rdquo":[{"source":"Right double quotation mark","target":"Right double quotation mark"}],"bdquo":[{"source":"Double low-9 quotation mark","target":"Double low-9 quotation mark"}],"lsaquo":[{"source":"Single left angle quotation","target":"Single left angle quotation"}],"rsaquo":[{"source":"Single right angle quotation","target":"Single right angle quotation"}],"laquo":[{"source":"Left angle quotation mark","target":"Left angle quotation mark"}],"raquo":[{"source":"Right angle quotation mark","target":"Right angle quotation mark"}],"quot":[{"source":"Quotation mark","target":"Quotation mark"}],"hellip":[{"source":"Horizontal ellipsis","target":"Horizontal ellipsis"}],"iquest":[{"source":"Inverted question mark","target":"Inverted question mark"}],"iexcl":[{"source":"Inverted exclamation mark","target":"Inverted exclamation mark"}],"bull":[{"source":"Bullet","target":"Bullet"}],"dagger":[{"source":"Dagger","target":"Dagger"}],"Dagger":[{"source":"Double dagger","target":"Double dagger"}],"brvbar":[{"source":"Broken vertical bar","target":"Broken vertical bar"}],"para":[{"source":"Paragraph","target":"Paragraph"}],"sect":[{"source":"Section","target":"Section"}],"loz":[{"source":"Lozenge","target":"Lozenge"}],"#064":[{"source":"At","target":"At"}],"copy":[{"source":"Copyright","target":"Copyright"}],"reg":[{"source":"Registered trademark","target":"Registered trademark"}],"trade":[{"source":"Trademark","target":"Trademark"}],"curren":[{"source":"Currency","target":"Currency"}],"cent":[{"source":"Cent","target":"Cent"}],"euro":[{"source":"Euro","target":"Euro"}],"pound":[{"source":"Pound","target":"Pound"}],"yen":[{"source":"Yen","target":"Yen"}],"emsp":[{"source":"Em space","target":"Em space"}],"ensp":[{"source":"En space","target":"En space"}],"thinsp":[{"source":"Thin space","target":"Thin space"}],"zwj":[{"source":"Zero width joiner","target":"Zero width joiner"}],"zwnj":[{"source":"Zero width non-joiner","target":"Zero width non-joiner"}],"minus":[{"source":"Minus sign","target":"Minus sign"}],"plusmn":[{"source":"Plus-or-minus sign","target":"Plus-or-minus sign"}],"times":[{"source":"Multiplication","target":"Multiplication"}],"divide":[{"source":"Division","target":"Division"}],"radic":[{"source":"Square root","target":"Square root"}],"sdot":[{"source":"Dot operator","target":"Dot operator"}],"otimes":[{"source":"Vector product","target":"Vector product"}],"lowast":[{"source":"Asterisk operator","target":"Asterisk operator"}],"ge":[{"source":"Greater than or equal to","target":"Greater than or equal to"}],"le":[{"source":"Less than or equal to","target":"Less than or equal to"}],"ne":[{"source":"Not equal to","target":"Not equal to"}],"asymp":[{"source":"Almost equal to, asymptotic to","target":"Almost equal to, asymptotic to"}],"sim":[{"source":"Varies with, similar to","target":"Varies with, similar to"}],"prop":[{"source":"Proportional to","target":"Proportional to"}],"deg":[{"source":"Degree","target":"Degree"}],"prime":[{"source":"Prime, minutes, feet","target":"Prime, minutes, feet"}],"Prime":[{"source":"Double prime, seconds, inches","target":"Double prime, seconds, inches"}],"micro":[{"source":"Micro","target":"Micro"}],"ang":[{"source":"Angle","target":"Angle"}],"perp":[{"source":"Orthogonal to, perpendicular to","target":"Orthogonal to, perpendicular to"}],"permil":[{"source":"Per mille","target":"Per mille"}],"frasl":[{"source":"Fraction slash","target":"Fraction slash"}],"frac14":[{"source":"Fraction 1\/4","target":"Fraction 1\/4"}],"frac12":[{"source":"Fraction 1\/2","target":"Fraction 1\/2"}],"frac34":[{"source":"Fraction 3\/4","target":"Fraction 3\/4"}],"sup1":[{"source":"Superscript 1","target":"Superscript 1"}],"sup2":[{"source":"Superscript 2","target":"Superscript 2"}],"sup3":[{"source":"Superscript 3","target":"Superscript 3"}],"not":[{"source":"Negation","target":"Negation"}],"and":[{"source":"Logical and","target":"Logical and"}],"or":[{"source":"Logical or","target":"Logical or"}],"there4":[{"source":"Therefore","target":"Therefore"}],"cong":[{"source":"Congruent to","target":"Congruent to"}],"isin":[{"source":"Is element of","target":"Is element of"}],"ni":[{"source":"Contains as member","target":"Contains as member"}],"notin":[{"source":"Is not an element of","target":"Is not an element of"}],"sub":[{"source":"Proper subset of","target":"Proper subset of"}],"sube":[{"source":"Subset of or equal to","target":"Subset of or equal to"}],"nsub":[{"source":"Not subset of","target":"Not subset of"}],"sup":[{"source":"Proper superset of","target":"Proper superset of"}],"supe":[{"source":"Superset of or equal to","target":"Superset of or equal to"}],"cap":[{"source":"Intersection","target":"Intersection"}],"cup":[{"source":"Union","target":"Union"}],"oplus":[{"source":"Direct sum","target":"Direct sum"}],"nabla":[{"source":"Gradient","target":"Gradient"}],"empty":[{"source":"Empty set","target":"Empty set"}],"equiv":[{"source":"Equivalent","target":"Equivalent"}],"sum":[{"source":"Sum","target":"Sum"}],"prod":[{"source":"Product","target":"Product"}],"weierp":[{"source":"Power set (Weierstrass p)","target":"Power set (Weierstrass p)"}],"exist":[{"source":"There exists","target":"There exists"}],"forall":[{"source":"For all","target":"For all"}],"infin":[{"source":"Infinity","target":"Infinity"}],"alefsym":[{"source":"Alef (first transfinite cardinal)","target":"Alef (first transfinite cardinal)"}],"real":[{"source":"Real part of complex number","target":"Real part of complex number"}],"image":[{"source":"Imaginary part of complex number","target":"Imaginary part of complex number"}],"fnof":[{"source":"Function","target":"Function"}],"int":[{"source":"Integral","target":"Integral"}],"part":[{"source":"Partial differential","target":"Partial differential"}],"Alpha":[{"source":"Greek capital letter alpha","target":"Greek capital letter alpha"}],"alpha":[{"source":"Greek small letter alpha","target":"Greek small letter alpha"}],"Beta":[{"source":"Greek capital letter beta","target":"Greek capital letter beta"}],"beta":[{"source":"Greek small letter beta","target":"Greek small letter beta"}],"Gamma":[{"source":"Greek capital letter gamma","target":"Greek capital letter gamma"}],"gamma":[{"source":"Greek small letter gamma","target":"Greek small letter gamma"}],"Delta":[{"source":"Greek capital letter delta","target":"Greek capital letter delta"}],"delta":[{"source":"Greek small letter delta","target":"Greek small letter delta"}],"Epsilon":[{"source":"Greek capital letter epsilon","target":"Greek capital letter epsilon"}],"epsilon":[{"source":"Greek small letter epsilon","target":"Greek small letter epsilon"}],"Zeta":[{"source":"Greek capital letter zeta","target":"Greek capital letter zeta"}],"zeta":[{"source":"Greek small letter zeta","target":"Greek small letter zeta"}],"Eta":[{"source":"Greek capital letter eta","target":"Greek capital letter eta"}],"eta":[{"source":"Greek small letter eta","target":"Greek small letter eta"}],"Theta":[{"source":"Greek capital letter theta","target":"Greek capital letter theta"}],"theta":[{"source":"Greek small letter theta","target":"Greek small letter theta"}],"thetasym":[{"source":"Greek small letter theta symbol","target":"Greek small letter theta symbol"}],"Iota":[{"source":"Greek capital letter iota","target":"Greek capital letter iota"}],"iota":[{"source":"Greek small letter iota","target":"Greek small letter iota"}],"Kappa":[{"source":"Greek capital letter kappa","target":"Greek capital letter kappa"}],"kappa":[{"source":"Greek small letter kappa","target":"Greek small letter kappa"}],"Lambda":[{"source":"Greek capital letter lambda","target":"Greek capital letter lambda"}],"lambda":[{"source":"Greek small letter lambda","target":"Greek small letter lambda"}],"Mu":[{"source":"Greek capital letter mu","target":"Greek capital letter mu"}],"mu":[{"source":"Greek small letter mu","target":"Greek small letter mu"}],"Nu":[{"source":"Greek capital letter nu","target":"Greek capital letter nu"}],"nu":[{"source":"Greek small letter nu","target":"Greek small letter nu"}],"Xi":[{"source":"Greek capital letter xi","target":"Greek capital letter xi"}],"xi":[{"source":"Greek small letter xi","target":"Greek small letter xi"}],"Omicron":[{"source":"Greek capital letter omicron","target":"Greek capital letter omicron"}],"omicron":[{"source":"Greek small letter omicron","target":"Greek small letter omicron"}],"Pi":[{"source":"Greek capital letter pi","target":"Greek capital letter pi"}],"pi":[{"source":"Greek small letter pi","target":"Greek small letter pi"}],"piv":[{"source":"Greek pi symbol","target":"Greek pi symbol"}],"Rho":[{"source":"Greek capital letter rho","target":"Greek capital letter rho"}],"rho":[{"source":"Greek small letter rho","target":"Greek small letter rho"}],"Sigma":[{"source":"Greek capital letter sigma","target":"Greek capital letter sigma"}],"sigma":[{"source":"Greek small letter sigma","target":"Greek small letter sigma"}],"sigmaf":[{"source":"Greek small letter final sigma","target":"Greek small letter final sigma"}],"Tau":[{"source":"Greek capital letter tau","target":"Greek capital letter tau"}],"tau":[{"source":"Greek small letter tau","target":"Greek small letter tau"}],"Upsilon":[{"source":"Greek capital letter upsilon","target":"Greek capital letter upsilon"}],"upsih":[{"source":"Greek upsilon with hook symbol","target":"Greek upsilon with hook symbol"}],"upsilon":[{"source":"Greek small letter upsilon","target":"Greek small letter upsilon"}],"Phi":[{"source":"Greek capital letter phi","target":"Greek capital letter phi"}],"phi":[{"source":"Greek small letter phi","target":"Greek small letter phi"}],"Chi":[{"source":"Greek capital letter chi","target":"Greek capital letter chi"}],"chi":[{"source":"Greek small letter chi","target":"Greek small letter chi"}],"Psi":[{"source":"Greek capital letter psi","target":"Greek capital letter psi"}],"psi":[{"source":"Greek small letter psi","target":"Greek small letter psi"}],"Omega":[{"source":"Greek capital letter omega","target":"Greek capital letter omega"}],"omega":[{"source":"Greek small letter omega","target":"Greek small letter omega"}],"crarr":[{"source":"Carriage return arrow","target":"Carriage return arrow"}],"uarr":[{"source":"Upwards arrow","target":"Upwards arrow"}],"darr":[{"source":"Downwards arrow","target":"Downwards arrow"}],"larr":[{"source":"Leftwards arrow","target":"Leftwards arrow"}],"rarr":[{"source":"Rightwards arrow","target":"Rightwards arrow"}],"harr":[{"source":"Left right arrow","target":"Left right arrow"}],"uArr":[{"source":"Upwards double arrow","target":"Upwards double arrow"}],"dArr":[{"source":"Downwards double arrow","target":"Downwards double arrow"}],"lArr":[{"source":"Leftwards double arrow","target":"Leftwards double arrow"}],"rArr":[{"source":"Rightwards double arrow","target":"Rightwards double arrow"}],"hArr":[{"source":"Left right double arrow","target":"Left right double arrow"}],"clubs":[{"source":"Club","target":"Club"}],"diams":[{"source":"Diamond","target":"Diamond"}],"hearts":[{"source":"Heart","target":"Heart"}],"spades":[{"source":"Spade","target":"Spade"}]};HTMLArea.I18N["TextStyle"]=new Object();HTMLArea.I18N["TextStyle"]={"TextStyle-Tooltip":[{"source":"Apply style to the selected text","target":"Apply style to the selected text"}],"Technische Universitat Ilmenau":[{"source":"Technische Universit\u00e4t Ilmenau","target":"Technische Universit\u00e4t Ilmenau"}],"No style":[{"source":"No text style","target":"No text style"}],"Remove style":[{"source":"Remove text style","target":"Remove text style"}],"Unknown style":[{"source":"Unknown text style","target":"Unknown text style"}],"Element style":[{"source":"Inline element style","target":"Inline element style"}]};HTMLArea.I18N["TYPO3Image"]=new Object();HTMLArea.I18N["TYPO3Image"]={"InsertImage-Tooltip":[{"source":"Insert\/modify image","target":"Insert\/modify image"}]};HTMLArea.I18N["TYPO3Link"]=new Object();HTMLArea.I18N["TYPO3Link"]=[];HTMLArea.I18N["TextIndicator"]=new Object();HTMLArea.I18N["TextIndicator"]=[];HTMLArea.I18N["FindReplace"]=new Object();HTMLArea.I18N["FindReplace"]={"Substitute this occurrence?":[{"source":"Substitute this occurrence?","target":"Substitute this occurrence?"}],"Enter the text you want to find":[{"source":"Enter the text you want to find","target":"Enter the text you want to find"}],"Inform a replacement word":[{"source":"This will erase all occurrences.","target":"This will erase all occurrences."}],"found items":[{"source":"found items","target":"found items"}],"replaced items":[{"source":"replaced items","target":"replaced items"}],"found item":[{"source":"item found","target":"item found"}],"replaced item":[{"source":"item replaced","target":"item replaced"}],"not found":[{"source":"not found","target":"not found"}],"Find and Replace":[{"source":"Find And Replace","target":"Find And Replace"}],"Options":[{"source":"Options","target":"Options"}],"Whole words only":[{"source":"Whole words only","target":"Whole words only"}],"Case sensitive search":[{"source":"Case sensitive search","target":"Case sensitive search"}],"Substitute all occurrences":[{"source":"Substitute all occurrences","target":"Substitute all occurrences"}],"Search for:":[{"source":"Search for:","target":"Search for:"}],"Replace with:":[{"source":"Replace with:","target":"Replace with:"}],"Actions":[{"source":"Actions","target":"Actions"}],"Clear":[{"source":"Clear","target":"Clear"}],"Highlight":[{"source":"Highlight","target":"Highlight"}],"Undo":[{"source":"Undo","target":"Undo"}],"Next":[{"source":"Next","target":"Next"}],"Done":[{"source":"Done","target":"Done"}]};HTMLArea.I18N["RemoveFormat"]=new Object();HTMLArea.I18N["RemoveFormat"]={"RemoveFormatTooltip":[{"source":"Remove format","target":"Remove format"}],"Cleaning Area":[{"source":"Cleaning Area","target":"Cleaning Area"}],"Selection":[{"source":"Selected text","target":"Selected text"}],"All":[{"source":"All","target":"All"}],"Remove formatting":[{"source":"Remove format","target":"Remove format"}],"Cleaning options":[{"source":"Type(s) of format to remove","target":"Type(s) of format to remove"}],"Formatting:":[{"source":"HTML Format:","target":"HTML Format:"}],"MS Word Formatting:":[{"source":"MS Word Format:","target":"MS Word Format:"}],"Typographical punctuation:":[{"source":"Typographical punctuation:","target":"Typographical punctuation:"}],"Spaces":[{"source":"Non-breaking spaces:","target":"Non-breaking spaces:"}],"Images:":[{"source":"Images:","target":"Images:"}],"All HTML:":[{"source":"All HTML tags:","target":"All HTML tags:"}],"Select the type of formatting you wish to remove.":[{"source":"Select the type(s) of format to remove.","target":"Select the type(s) of format to remove."}],"OK":[{"source":"OK","target":"OK"}],"Cancel":[{"source":"Cancel","target":"Cancel"}]};HTMLArea.I18N["DefaultClean"]=new Object();HTMLArea.I18N["DefaultClean"]={"CleanWord-Tooltip":[{"source":"Clean up HTML content","target":"Clean up HTML content"}]};HTMLArea.I18N["TableOperations"]=new Object();HTMLArea.I18N["TableOperations"]={"Not set":[{"source":"Not set","target":"Not set"}],"None":[{"source":"None","target":"None"}],"Size and Headers":[{"source":"Size and Headers","target":"Size and Headers"}],"Headers":[{"source":"Headers","target":"Headers"}],"CSS Style":[{"source":"Style","target":"Style"}],"Class:":[{"source":"Classes:","target":"Classes:"}],"Class selector":[{"source":"Classes","target":"Classes"}],"Table class:":[{"source":"Table:","target":"Table:"}],"Table class selector":[{"source":"Classes of the table","target":"Classes of the table"}],"Table body class:":[{"source":"Body:","target":"Body:"}],"Table body class selector":[{"source":"Classes of the table body","target":"Classes of the table body"}],"Table header class:":[{"source":"Header:","target":"Header:"}],"Table header class selector":[{"source":"Classes of the table header","target":"Classes of the table header"}],"Table footer class:":[{"source":"Footer:","target":"Footer:"}],"Table footer class selector":[{"source":"Classes of the table footer","target":"Classes of the table footer"}],"Default":[{"source":"Default","target":"Default"}],"Undefined":[{"source":"Undefined","target":"Undefined"}],"Alignment":[{"source":"Alignment","target":"Alignment"}],"All four sides":[{"source":"All four sides","target":"All four sides"}],"Background and colors":[{"source":"Background and colors","target":"Background and colors"}],"Background:":[{"source":"Background:","target":"Background:"}],"Baseline":[{"source":"Baseline","target":"Baseline"}],"Border style":[{"source":"Border style","target":"Border style"}],"Border style:":[{"source":"Border style:","target":"Border style:"}],"No border":[{"source":"None","target":"None"}],"Dotted":[{"source":"Dotted","target":"Dotted"}],"Dashed":[{"source":"Dashed","target":"Dashed"}],"Solid":[{"source":"Solid","target":"Solid"}],"Double":[{"source":"Double","target":"Double"}],"Groove":[{"source":"Groove","target":"Groove"}],"Ridge":[{"source":"Ridge","target":"Ridge"}],"Inset":[{"source":"Inset","target":"Inset"}],"Outset":[{"source":"Outset","target":"Outset"}],"Borders":[{"source":"Borders","target":"Borders"}],"Bottom":[{"source":"Bottom","target":"Bottom"}],"Border width":[{"source":"Border width in pixels","target":"Border width in pixels"}],"Border width:":[{"source":"Border width:","target":"Border width:"}],"Border color":[{"source":"Border color","target":"Border color"}],"Caption:":[{"source":"Caption:","target":"Caption:"}],"Description of the nature of the table":[{"source":"Description of the nature of the table","target":"Description of the nature of the table"}],"Row group":[{"source":"Row group","target":"Row group"}],"Row group:":[{"source":"Row group:","target":"Row group:"}],"Table section":[{"source":"Table section to which the row belongs","target":"Table section to which the row belongs"}],"Table body":[{"source":"Table body","target":"Table body"}],"Table header":[{"source":"Table header","target":"Table header"}],"Table footer":[{"source":"Table footer","target":"Table footer"}],"Cell Properties":[{"source":"Cell Properties","target":"Cell Properties"}],"Cell Type and Scope":[{"source":"Cell Type and Scope","target":"Cell Type and Scope"}],"Type of cell":[{"source":"Type of cell:","target":"Type of cell:"}],"Normal":[{"source":"Data cell","target":"Data cell"}],"Header":[{"source":"Header cell","target":"Header cell"}],"Specifies the type of cell":[{"source":"Specifies the type of cell","target":"Specifies the type of cell"}],"Scope":[{"source":"Scope:","target":"Scope:"}],"scope_row":[{"source":"Row","target":"Row"}],"scope_column":[{"source":"Column","target":"Column"}],"scope_rowgroup":[{"source":"Group of rows","target":"Group of rows"}],"Scope of header cell":[{"source":"Scope of the header","target":"Scope of the header"}],"Abbreviation":[{"source":"Abbreviation","target":"Abbreviation"}],"Header abbreviation":[{"source":"Header abbreviation","target":"Header abbreviation"}],"Center":[{"source":"Center","target":"Center"}],"Character":[{"source":"Character","target":"Character"}],"Align on this character":[{"source":"Align text relative to this character","target":"Align text relative to this character"}],"Collapsed borders":[{"source":"Collapsed borders","target":"Collapsed borders"}],"Detached borders":[{"source":"Detached borders","target":"Detached borders"}],"Color:":[{"source":"Color:","target":"Color:"}],"Description":[{"source":"Description","target":"Description"}],"FG Color:":[{"source":"Text:","target":"Text:"}],"Float:":[{"source":"Float:","target":"Float:"}],"Specifies where the table should float":[{"source":"Specifies where the table should float","target":"Specifies where the table should float"}],"Non-floating":[{"source":"Non-floating","target":"Non-floating"}],"Frames:":[{"source":"Frames:","target":"Frames:"}],"Specifies which sides should have a border":[{"source":"Specifies which sides should have a border","target":"Specifies which sides should have a border"}],"Height:":[{"source":"Height:","target":"Height:"}],"Height unit":[{"source":"Height unit","target":"Height unit"}],"Table height":[{"source":"Table height","target":"Table height"}],"Row height":[{"source":"Row height","target":"Row height"}],"Cell height":[{"source":"Cell height","target":"Cell height"}],"How many columns would you like to merge?":[{"source":"How many columns would you like to merge?","target":"How many columns would you like to merge?"}],"How many rows would you like to merge?":[{"source":"How many rows would you like to merge?","target":"How many rows would you like to merge?"}],"Image URL:":[{"source":"Image URL:","target":"Image URL:"}],"URL of the background image":[{"source":"URL of the background image","target":"URL of the background image"}],"Justify":[{"source":"Justify","target":"Justify"}],"Layout":[{"source":"Layout","target":"Layout"}],"Left":[{"source":"Left","target":"Left"}],"Margin":[{"source":"Margin","target":"Margin"}],"Middle":[{"source":"Middle","target":"Middle"}],"No rules":[{"source":"No rules","target":"No rules"}],"No sides":[{"source":"No sides","target":"No sides"}],"Cell padding:":[{"source":"Cell padding:","target":"Cell padding:"}],"Space between content and border in cell":[{"source":"Space between content and border in cell","target":"Space between content and border in cell"}],"Please click into some cell":[{"source":"Please click into some cell","target":"Please click into some cell"}],"Right":[{"source":"Right","target":"Right"}],"Row Properties":[{"source":"Row Properties","target":"Row Properties"}],"Rules will appear between all rows and columns":[{"source":"Rules will appear between all rows and columns","target":"Rules will appear between all rows and columns"}],"Rules will appear between columns only":[{"source":"Rules will appear between columns only","target":"Rules will appear between columns only"}],"Rules will appear between rows only":[{"source":"Rules will appear between rows only","target":"Rules will appear between rows only"}],"Rules:":[{"source":"Rules:","target":"Rules:"}],"Specifies where rules should be displayed":[{"source":"Specifies where rules should be displayed","target":"Specifies where rules should be displayed"}],"Spacing and padding":[{"source":"Spacing and padding","target":"Spacing and padding"}],"Frame and borders":[{"source":"Frame and borders","target":"Frame and borders"}],"Cell spacing:":[{"source":"Cell spacing:","target":"Cell spacing:"}],"Space between adjacent cells":[{"source":"Space between adjacent cells","target":"Space between adjacent cells"}],"Summary:":[{"source":"Summary:","target":"Summary:"}],"Summary of the table purpose and structure":[{"source":"Summary of the table's purpose and structure","target":"Summary of the table's purpose and structure"}],"captionOrSummary-required":[{"source":"Please enter at least one of caption or summary","target":"Please enter at least one of caption or summary"}],"caption-required":[{"source":"Please enter a caption","target":"Please enter a caption"}],"summary-required":[{"source":"Please enter a summary","target":"Please enter a summary"}],"TO-cell-delete":[{"source":"Delete cell","target":"Delete cell"}],"TO-cell-insert-after":[{"source":"Insert cell after","target":"Insert cell after"}],"TO-cell-insert-before":[{"source":"Insert cell before","target":"Insert cell before"}],"TO-cell-merge":[{"source":"Merge cells","target":"Merge cells"}],"TO-cell-prop":[{"source":"Cell properties","target":"Cell properties"}],"TO-cell-split":[{"source":"Split cell","target":"Split cell"}],"TO-col-prop":[{"source":"Column properties","target":"Column properties"}],"TO-col-delete":[{"source":"Delete column","target":"Delete column"}],"TO-col-insert-after":[{"source":"Insert column after","target":"Insert column after"}],"TO-col-insert-before":[{"source":"Insert column before","target":"Insert column before"}],"TO-col-split":[{"source":"Split column","target":"Split column"}],"TO-row-delete":[{"source":"Delete row","target":"Delete row"}],"TO-row-insert-above":[{"source":"Insert row before","target":"Insert row before"}],"TO-row-insert-under":[{"source":"Insert row after","target":"Insert row after"}],"TO-row-prop":[{"source":"Row properties","target":"Row properties"}],"TO-row-split":[{"source":"Split row","target":"Split row"}],"TO-table-prop":[{"source":"Table properties","target":"Table properties"}],"TO-table-restyle":[{"source":"Re-apply table styles","target":"Re-apply table styles"}],"TO-toggle-borders":[{"source":"Toggle borders","target":"Toggle borders"}],"Table Properties":[{"source":"Table Properties","target":"Table Properties"}],"Text alignment:":[{"source":"Text alignment:","target":"Text alignment:"}],"Horizontal alignment of text within cell":[{"source":"Horizontal alignment of text within cell","target":"Horizontal alignment of text within cell"}],"The bottom side only":[{"source":"The bottom side only","target":"The bottom side only"}],"The left-hand side only":[{"source":"The left-hand side only","target":"The left-hand side only"}],"The right and left sides only":[{"source":"The right and left sides only","target":"The right and left sides only"}],"The right-hand side only":[{"source":"The right-hand side only","target":"The right-hand side only"}],"The top and bottom sides only":[{"source":"The top and bottom sides only","target":"The top and bottom sides only"}],"The top side only":[{"source":"The top side only","target":"The top side only"}],"Top":[{"source":"Top","target":"Top"}],"Unset color":[{"source":"Unset color","target":"Unset color"}],"Vertical alignment:":[{"source":"Vertical alignment:","target":"Vertical alignment:"}],"Vertical alignment of content within cell":[{"source":"Vertical alignment of content within cell","target":"Vertical alignment of content within cell"}],"Width:":[{"source":"Width:","target":"Width:"}],"Width unit":[{"source":"Width unit","target":"Width unit"}],"Table width":[{"source":"Table width","target":"Table width"}],"Row width":[{"source":"Row width","target":"Row width"}],"Cell width":[{"source":"Cell width","target":"Cell width"}],"not-del-last-cell":[{"source":"HTMLArea cowardly refuses to delete the last cell in row.","target":"HTMLArea cowardly refuses to delete the last cell in row."}],"not-del-last-col":[{"source":"HTMLArea cowardly refuses to delete the last column in table.","target":"HTMLArea cowardly refuses to delete the last column in table."}],"not-del-last-row":[{"source":"HTMLArea cowardly refuses to delete the last row in table.","target":"HTMLArea cowardly refuses to delete the last row in table."}],"percent":[{"source":"percent","target":"percent"}],"pixels":[{"source":"pixels","target":"pixels"}],"em":[{"source":"em","target":"em"}],"Headers:":[{"source":"Header cells","target":"Header cells"}],"Table headers":[{"source":"Table headers","target":"Table headers"}],"No header cells":[{"source":"No header cells","target":"No header cells"}],"Header cells on top":[{"source":"Header cells on top","target":"Header cells on top"}],"Header cells on left":[{"source":"Header cells on left","target":"Header cells on left"}],"Header cells on top and left":[{"source":"Header cells on top and left","target":"Header cells on top and left"}],"Make cells header cells":[{"source":"Make all row cells header cells","target":"Make all row cells header cells"}],"Make cells data cells":[{"source":"Make all row cells data cells","target":"Make all row cells data cells"}],"Header for column":[{"source":"Header cell for column","target":"Header cell for column"}],"Header for row":[{"source":"Header cell for row","target":"Header cell for row"}],"Header for row group":[{"source":"Header cell for row group","target":"Header cell for row group"}],"Column Properties":[{"source":"Column Cells Properties","target":"Column Cells Properties"}],"Type of cells":[{"source":"Type of cells","target":"Type of cells"}],"Type of cells of the column":[{"source":"Type of cells of the column:","target":"Type of cells of the column:"}],"Specifies the type of cells":[{"source":"Specifies the type of cells of the column","target":"Specifies the type of cells of the column"}],"Data cells":[{"source":"Data cells","target":"Data cells"}],"Headers for rows":[{"source":"Headers for rows","target":"Headers for rows"}],"Headers for row groups":[{"source":"Headers for row groups","target":"Headers for row groups"}],"Technische Universitat Ilmenau":[{"source":"Technische Universit\u00e4t Ilmenau","target":"Technische Universit\u00e4t Ilmenau"}]};HTMLArea.I18N["AboutEditor"]=new Object();HTMLArea.I18N["AboutEditor"]=[];HTMLArea.I18N["ContextMenu"]=new Object();HTMLArea.I18N["ContextMenu"]={"Remove the":[{"source":"Remove the","target":"Remove the"}],"Remove this node from the document":[{"source":"Removes this node from the document","target":"Removes this node from the document"}],"TO-toggle-borders-tooltip":[{"source":"Toggle borders","target":"Toggle borders"}],"TO-cell-prop-tooltip":[{"source":"Shows the Table Cell Properties dialogue","target":"Shows the Table Cell Properties dialogue"}],"TO-cell-insert-before-tooltip":[{"source":"Inserts a new cell before the current one","target":"Inserts a new cell before the current one"}],"TO-cell-insert-after-tooltip":[{"source":"Inserts a new cell after the current one","target":"Inserts a new cell after the current one"}],"TO-cell-delete-tooltip":[{"source":"Deletes the current cell","target":"Deletes the current cell"}],"TO-cell-split-tooltip":[{"source":"Splits the current cell","target":"Splits the current cell"}],"TO-cell-merge-tooltip":[{"source":"Merges the selected cells","target":"Merges the selected cells"}],"TO-row-prop-tooltip":[{"source":"Shows the Table Row Properties dialogue","target":"Shows the Table Row Properties dialogue"}],"TO-row-insert-above-tooltip":[{"source":"Inserts a new row before the current one","target":"Inserts a new row before the current one"}],"TO-row-insert-under-tooltip":[{"source":"Inserts a new row after the current one","target":"Inserts a new row after the current one"}],"TO-row-delete-tooltip":[{"source":"Deletes the current row","target":"Deletes the current row"}],"TO-row-split-tooltip":[{"source":"Splits the current row","target":"Splits the current row"}],"TO-table-prop-tooltip":[{"source":"Shows the Table Properties dialogue","target":"Shows the Table Properties dialogue"}],"TO-table-restyle-tooltip":[{"source":"Re-applies the odd-even styles on the table","target":"Re-applies the odd-even styles on the table"}],"TO-col-prop-tooltip":[{"source":"Shows the Column Cells Properties dialogue","target":"Shows the Column Cells Properties dialogue"}],"TO-col-insert-before-tooltip":[{"source":"Inserts a new column before the current one","target":"Inserts a new column before the current one"}],"TO-col-insert-after-tooltip":[{"source":"Inserts a new column after the current one","target":"Inserts a new column after the current one"}],"TO-col-delete-tooltip":[{"source":"Deletes the current column","target":"Deletes the current column"}],"TO-col-split-tooltip":[{"source":"Splits the current column","target":"Splits the current column"}],"Element":[{"source":"Element","target":"Element"}],"Please confirm remove":[{"source":"Please confirm that you want to remove this element:","target":"Please confirm that you want to remove this element:"}],"How did you get here? (Please report!)":[{"source":"How did you get here? (Please report!)","target":"How did you get here? (Please report!)"}],"Show the image properties dialog":[{"source":"Show the image properties dialog","target":"Show the image properties dialog"}],"Modify URL":[{"source":"Modify URL","target":"Modify URL"}],"Current URL is":[{"source":"Current URL is","target":"Current URL is"}],"Opens this link in a new window":[{"source":"Opens this link in a new window","target":"Opens this link in a new window"}],"Please confirm unlink":[{"source":"Please confirm that you want to unlink this element.","target":"Please confirm that you want to unlink this element."}],"Link points to:":[{"source":"Link points to:","target":"Link points to:"}],"Unlink the current element":[{"source":"Unlink the current element","target":"Unlink the current element"}],"Cut":[{"source":"Cut","target":"Cut"}],"Copy":[{"source":"Copy","target":"Copy"}],"Paste":[{"source":"Paste","target":"Paste"}],"Image Properties":[{"source":"_Image Properties","target":"_Image Properties"}],"Modify Link":[{"source":"_Modify Link","target":"_Modify Link"}],"Check Link":[{"source":"Chec_k Link","target":"Chec_k Link"}],"Remove Link":[{"source":"_Remove Link","target":"_Remove Link"}],"TO-toggle-borders-title":[{"source":"Toggle borders","target":"Toggle borders"}],"TO-cell-prop-title":[{"source":"C_ell Properties","target":"C_ell Properties"}],"TO-cell-insert-before-title":[{"source":"Insert cell before","target":"Insert cell before"}],"TO-cell-insert-after-title":[{"source":"Insert cell after","target":"Insert cell after"}],"TO-cell-delete-title":[{"source":"Delete Cell","target":"Delete Cell"}],"TO-cell-split-title":[{"source":"Split Cell","target":"Split Cell"}],"TO-cell-merge-title":[{"source":"Merge Cells","target":"Merge Cells"}],"TO-row-prop-title":[{"source":"Ro_w Properties","target":"Ro_w Properties"}],"TO-row-insert-above-title":[{"source":"I_nsert Row Before","target":"I_nsert Row Before"}],"TO-row-insert-under-title":[{"source":"In_sert Row After","target":"In_sert Row After"}],"TO-row-delete-title":[{"source":"_Delete Row","target":"_Delete Row"}],"TO-row-split-title":[{"source":"Split Row","target":"Split Row"}],"TO-table-prop-title":[{"source":"_Table Properties","target":"_Table Properties"}],"TO-table-restyle-title":[{"source":"Re-apply table styles","target":"Re-apply table styles"}],"TO-col-prop-title":[{"source":"Column Cells Properties","target":"Column Cells Properties"}],"TO-col-insert-before-title":[{"source":"Insert _Column Before","target":"Insert _Column Before"}],"TO-col-insert-after-title":[{"source":"Insert C_olumn After","target":"Insert C_olumn After"}],"TO-col-delete-title":[{"source":"De_lete Column","target":"De_lete Column"}],"TO-col-split-title":[{"source":"Split Column","target":"Split Column"}],"Create a link":[{"source":"Create a link","target":"Create a link"}],"Insert paragraph before":[{"source":"Insert paragraph before","target":"Insert paragraph before"}],"Insert a paragraph before the current node":[{"source":"Insert a paragraph before the current node","target":"Insert a paragraph before the current node"}],"Insert paragraph after":[{"source":"Insert paragraph after","target":"Insert paragraph after"}],"Insert a paragraph after the current node":[{"source":"Insert a paragraph after the current node","target":"Insert a paragraph after the current node"}],"JustifyLeft-title":[{"source":"Justify Left","target":"Justify Left"}],"JustifyCenter-title":[{"source":"Justify Center","target":"Justify Center"}],"JustifyRight-title":[{"source":"Justify Right","target":"Justify Right"}],"JustifyFull-title":[{"source":"Justify Full","target":"Justify Full"}],"JustifyLeft-tooltip":[{"source":"Aligns text to the left","target":"Aligns text to the left"}],"JustifyCenter-tooltip":[{"source":"Centers the text","target":"Centers the text"}],"JustifyRight-tooltip":[{"source":"Aligns text to the right","target":"Aligns text to the right"}],"JustifyFull-tooltip":[{"source":"Aligns text both to the left and the right","target":"Aligns text both to the left and the right"}],"Make link":[{"source":"Make lin_k","target":"Make lin_k"}]};HTMLArea.I18N["UndoRedo"]=new Object();HTMLArea.I18N["UndoRedo"]=[];HTMLArea.I18N["CopyPaste"]=new Object();HTMLArea.I18N["CopyPaste"]={"Allow-Clipboard-Helper-Add-On-Title":[{"source":"Firefox Add-on AllowClipboard Helper","target":"Firefox Add-on AllowClipboard Helper"}],"Firefox-Security-Prefs-Question-Title":[{"source":"Firefox Clipboard Access Security Settings","target":"Firefox Clipboard Access Security Settings"}],"Technische Universitat Ilmenau":[{"source":"Technische Universit\u00e4t Ilmenau","target":"Technische Universit\u00e4t Ilmenau"}]};HTMLArea.I18N["TYPO3Color"]=new Object();HTMLArea.I18N["TYPO3Color"]={"ForeColor":[{"source":"Text Color","target":"Text Color"}],"HiliteColor":[{"source":"Background Color","target":"Background Color"}],"ForeColor_title":[{"source":"Set the text color","target":"Set the text color"}],"HiliteColor_title":[{"source":"Set the background color","target":"Set the background color"}],"color_title":[{"source":"Choose a color","target":"Choose a color"}],"no_color":[{"source":"No color","target":"No color"}]};
/***************************************************************
 *
 *  javascript functions regarding the "dyntabmenu"
 *  used throughout the TYPO3 backend
 *
 *  Copyright notice
 *
 *  (c) 2003-2011 Kasper Skaarhoj <kasperYYYY@typo3.com>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 t3lib/ library provided by
 *  Kasper Skaarhoj <kasper@typo3.com> together with TYPO3
 *
 *  Released under GNU/GPL (see license file in tslib/)
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 *  This copyright notice MUST APPEAR in all copies of this script
 *
 ***************************************************************/

var DTM_array = DTM_array || [],
	DTM_origClass = DTM_origClass || '';

	// if tabs are used in a popup window the array might not exists
if (!top.DTM_currentTabs) {
	top.DTM_currentTabs = [];
}

function DTM_activate(idBase,index,doToogle) {
		// Hiding all:
	if (DTM_array[idBase]) {
		for(var cnt = 0; cnt < DTM_array[idBase].length ; cnt++) {
			if (DTM_array[idBase][cnt] !== idBase + '-' + index) {
				document.getElementById(DTM_array[idBase][cnt]+'-DIV').style.display = 'none';
				// Only Overriding when Tab not disabled
				if (document.getElementById(DTM_array[idBase][cnt]+'-MENU').attributes.getNamedItem('class').nodeValue !== 'disabled') {
					document.getElementById(DTM_array[idBase][cnt]+'-MENU').attributes.getNamedItem('class').nodeValue = 'tab';
				}
			}
		}
	}

		// Showing one:
	if (document.getElementById(idBase+'-'+index+'-DIV')) {
		if (doToogle && document.getElementById(idBase+'-'+index+'-DIV').style.display === 'block') {
			document.getElementById(idBase+'-'+index+'-DIV').style.display = 'none';
			if (DTM_origClass === '') {
				document.getElementById(idBase+'-'+index+'-MENU').attributes.getNamedItem('class').nodeValue = 'tab';
			} else {
				DTM_origClass = 'tab';
			}
			top.DTM_currentTabs[idBase] = -1;
		} else {
			document.getElementById(idBase+'-'+index+'-DIV').style.display = 'block';
			if (DTM_origClass === '') {
				document.getElementById(idBase+'-'+index+'-MENU').attributes.getNamedItem('class').nodeValue = 'tabact';
			} else {
				DTM_origClass = 'tabact';
			}
			top.DTM_currentTabs[idBase] = index;
		}
	}
	document.getElementById(idBase+'-'+index+'-MENU').attributes.getNamedItem('class').nodeValue = 'tabact';
}
function DTM_toggle(idBase,index,isInit) {
		// Showing one:
	if (document.getElementById(idBase+'-'+index+'-DIV')) {
		if (document.getElementById(idBase+'-'+index+'-DIV').style.display === 'block') {
			document.getElementById(idBase+'-'+index+'-DIV').style.display = 'none';
			if (isInit) {
				document.getElementById(idBase+'-'+index+'-MENU').attributes.getNamedItem('class').nodeValue = 'tab';
			} else {
				DTM_origClass = 'tab';
			}
			top.DTM_currentTabs[idBase+'-'+index] = 0;
		} else {
			document.getElementById(idBase+'-'+index+'-DIV').style.display = 'block';
			if (isInit) {
				document.getElementById(idBase+'-'+index+'-MENU').attributes.getNamedItem('class').nodeValue = 'tabact';
			} else {
				DTM_origClass = 'tabact';
			}
			top.DTM_currentTabs[idBase+'-'+index] = 1;
		}
	}
}

function DTM_mouseOver(obj) {
		DTM_origClass = obj.attributes.getNamedItem('class').nodeValue;
		obj.attributes.getNamedItem('class').nodeValue += '_over';
}

function DTM_mouseOut(obj) {
		obj.attributes.getNamedItem('class').nodeValue = DTM_origClass;
		DTM_origClass = '';
}


/**
*
*  MD5 (Message-Digest Algorithm)
*  http://www.webtoolkit.info/
*
**/

function MD5(string) {

	function RotateLeft(lValue, iShiftBits) {
		return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
	}

	function AddUnsigned(lX,lY) {
		var lX4,lY4,lX8,lY8,lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
 	}

 	function F(x,y,z) { return (x & y) | ((~x) & z); }
 	function G(x,y,z) { return (x & z) | (y & (~z)); }
 	function H(x,y,z) { return (x ^ y ^ z); }
	function I(x,y,z) { return (y ^ (x | (~z))); }

	function FF(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function GG(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function HH(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function II(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function ConvertToWordArray(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWords_temp1=lMessageLength + 8;
		var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
		var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
		var lWordArray=Array(lNumberOfWords-1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while ( lByteCount < lMessageLength ) {
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount-(lByteCount % 4))/4;
		lBytePosition = (lByteCount % 4)*8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
		lWordArray[lNumberOfWords-2] = lMessageLength<<3;
		lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
		return lWordArray;
	};

	function WordToHex(lValue) {
		var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
		for (lCount = 0;lCount<=3;lCount++) {
			lByte = (lValue>>>(lCount*8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
		}
		return WordToHexValue;
	};

	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	};

	var x=Array();
	var k,AA,BB,CC,DD,a,b,c,d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;

	string = Utf8Encode(string);

	x = ConvertToWordArray(string);

	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

	for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA);
		b=AddUnsigned(b,BB);
		c=AddUnsigned(c,CC);
		d=AddUnsigned(d,DD);
	}

	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

	return temp.toLowerCase();
}
/**
 *
 * Ext.ux.EventZone Extension Class for Ext 3.x Library
 *
 * @author  Nigel White
 *
 * @license Ext.ux.EventZone is licensed under the terms of
 * the Open Source LGPL 3.0 license.  Commercial use is permitted to the extent
 * that the code/component(s) do NOT become part of another Open Source or Commercially
 * licensed development library or toolkit without explicit permission.
 * 
 * License details: http://www.gnu.org/licenses/lgpl.html
 *
 * @class Ext.ux.EventZone
 * <p>This class implements a "virtual element" at a relative size and position
 * <i>within</i> an existing element. It provides mouse events from a zone of an element of
 * defined dimensions.</p>
 * <p>The zone is defined using <code>top</code>, <code>right</code>, <code>bottom</code>,
 * <code>left</code>, <code>width</code> and <code>height</code> options which specify
 * the bounds of the zone in a similar manner to the CSS style properties of those names.</p>
 * @cfg {String|HtmlElement} el The element in which to create the zone.
 * @cfg {Array} points An Array of points within the element defining the event zone.
 * @cfg {Number} top The top of the zone. If negative means an offset from the bottom.
 * @cfg {Number} right The right of the zone. If negative means an offset from the right.
 * @cfg {Number} left The left of the zone. If negative means an offset from the right.
 * @cfg {Number} bottom The bottom of the zone. If negative means an offset from the bottom.
 * @cfg {Number} width The width of the zone.
 * @cfg {Number} height The height of the zone.
 * @constructor
 * Create a new EventZone
 * @param {Object} config The config object.
 */
Ext.ux.EventZone = Ext.extend(Ext.util.Observable, {

    constructor: function(config) {
        this.initialConfig = config;
        this.addEvents(
            /**
             * @event mouseenter
             * This event fires when the mouse enters the zone.
             * @param {EventObject} e the underlying mouse event.
             * @param {EventZone} this
             */
            'mouseenter',
            /**
             * @event mousedown
             * This event fires when the mouse button is depressed within the zone.
             * @param {EventObject} e the underlying mouse event.
             * @param {EventZone} this
             */
            'mousedown',
            /**
             * @event mousemove
             * This event fires when the mouse moves within the zone.
             * @param {EventObject} e the underlying mouse event.
             * @param {EventZone} this
             */
            'mousemove',
            /**
             * @event mouseup
             * This event fires when the mouse button is released within the zone.
             * @param {EventObject} e the underlying mouse event.
             * @param {EventZone} this
             */
            'mouseup',
            /**
             * @event mouseenter
             * This event fires when the mouse is clicked within the zone.
             * @param {EventObject} e the underlying mouse event.
             * @param {EventZone} this
             */
            'click',
            /**
             * @event mouseleave
             * This event fires when the mouse leaves the zone.
             * @param {EventObject} e the underlying mouse event.
             * @param {EventZone} this
             */
            'mouseleave'
        );
        Ext.apply(this, config);
        this.el = Ext.get(this.el);

//      If a polygon within the element is specified...
        if (this.points) {
            this.polygon = new Ext.lib.Polygon(this.points);
            this.points = this.polygon.points;
        }

        Ext.ux.EventZone.superclass.constructor.call(this);
        this.el.on({
            mouseenter: this.handleMouseEvent,
            mousedown: this.handleMouseEvent,
            mousemove: this.handleMouseEvent,
            mouseup: this.handleMouseEvent,
            click: this.handleMouseEvent,
            mouseleave: this.handleMouseEvent,
            scope: this
        });
    },

    handleMouseEvent: function(e) {
        var r = this.polygon ? this.getPolygon() : this.getRegion();
        var inBounds = r.contains(e.getPoint());

        switch (e.type) {
            // mouseenter fires this
            case 'mouseover':
               if (inBounds) {
                   this.mouseIn = true;
                   this.fireEvent('mouseenter', e, this);
               }
               break;
            // mouseleave fires this
            case 'mouseout':
               this.mouseIn = false;
               this.fireEvent('mouseleave', e, this);
               break;
           case 'mousemove':
               if (inBounds) {
                   if (this.mouseIn) {
                       this.fireEvent('mousemove', e, this);
                   } else {
                       this.mouseIn = true;
                       this.fireEvent('mouseenter', e, this);
                   }
               } else {
                   if (this.mouseIn) {
                       this.mouseIn = false;
                       this.fireEvent('mouseleave', e, this);
                   }
               }
               break;
           default:
               if (inBounds) {
                   this.fireEvent(e.type, e, this);
               }
        }
    },

    getPolygon: function() {
        var xy = this.el.getXY();
        return this.polygon.translate(xy[0], xy[1]);
    },

    getRegion: function() {
        var r = this.el.getRegion();

//      Adjust left boundary of region
        if (Ext.isNumber(this.left)) {
            if (this.left < 0) {
                r.left = r.right + this.left;
            } else {
                r.left += this.left;
            }
        }

//      Adjust right boundary of region
        if (Ext.isNumber(this.width)) {
            r.right = r.left + this.width;
        } else if (Ext.isNumber(this.right)) {
            r.right = (this.right < 0) ? r.right + this.right : r.left + this.right;
        }

//      Adjust top boundary of region
        if (Ext.isNumber(this.top)) {
            if (this.top < 0) {
                r.top = r.bottom + this.top;
            } else {
                r.top += this.top;
            }
        }

//      Adjust bottom boundary of region
        if (Ext.isNumber(this.height)) {
            r.bottom = r.top + this.height;
        } else if (Ext.isNumber(this.bottom)) {
            r.bottom = (this.bottom < 0) ? r.bottom + this.bottom : r.top + this.bottom;
        }

        return r;
    }
});

/**
 * @class Ext.lib.Polygon
 * <p>This class encapsulates an absolute area of the document bounded by a list of points.</p>
 * @constructor
 * Create a new Polygon
 * @param {Object} points An Array of <code>[n,n]</code> point specification Arrays, or
 * an Array of Ext.lib.Points, or an HtmlElement, or an Ext.lib.Region.
 */
Ext.lib.Polygon = Ext.extend(Ext.lib.Region, {
    constructor: function(points) {
        var i, l, el;
        if (l = points.length) {
            if (points[0].x) {
                for (i = 0; i < l; i++) {
                    points[i] = [ points[i].x, points[i].y ];
                }
            }
            this.points = points;
        } else {
            if (el = Ext.get(points)) {
                points = Ext.lib.Region.getRegion(el.dom);
            }
            if (points instanceof Ext.lib.Region) {
                this.points = [
                    [points.left, points.top],
                    [points.right, points.top],
                    [points.right, points.bottom],
                    [points.left, points.bottom]
                ];
            }
        }
    },

    /**
     * Returns a new Polygon translated by the specified <code>X</code> and <code>Y</code> increments.
     * @param xDelta {Number} The <code>X</code> translation increment.
     * @param xDelta {Number} The <code>Y</code> translation increment.
     * @return {Polygon} The resulting Polygon.
     */
    translate: function(xDelta, yDelta) {
        var r = [], p = this.points, l = p.length, i;
        for (i = 0; i < l; i++) {
            r[i] = [ p[i][0] + xDelta, p[i][1] + yDelta ];
        }
        return new Ext.lib.Polygon(r);
    },

    /**
     * Returns the area of this Polygon.
     */
    getArea: function() {
        var p = this.points, l = p.length, area = 0, i, j = 0;
        for (i = 0; i < l; i++) {
            j++;
            if (j == l) {
                j = 0;
            }
            area += (p[i][0] + p[j][0]) * (p[i][1] - p[j][1]);
        }
        return area * 0.5;
    },

    /**
     * Returns <code>true</code> if this Polygon contains the specified point. Thanks
     * to http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html for the algorithm.
     * @param pt {Point|Number} Either an Ext.lib.Point object, or the <code>X</code> coordinate to test.
     * @param py {Number} <b>Optional.</b> If the first parameter was an <code>X</code> coordinate, this is the <code>Y</code> coordinate.
     */
    contains: function(pt, py) {
        var f = (arguments.length == 1),
            testX = f ? pt.x : pt,
            testY = f ? pt.y : py,
            p = this.points,
            nvert = p.length,
            j = nvert - 1,
            i, j, c = false;
        for (i = 0; i < nvert; j = i++) {
            if ( ((p[i][1] > testY) != (p[j][1] > testY)) &&
             (testX < (p[j][0]-p[i][0]) * (testY-p[i][1]) / (p[j][1]-p[i][1]) + p[i][0])) {
                c = !c;
            }
        }
        return c;
    }
});

/**
 * @class Ext.Resizable
 * @extends Ext.util.Observable
 * This is an override of Ext.Resizable to make usage of the Ex.ux.EventZone
 * <p>Applies virtual drag handles to an element to make it resizable.</p>
 * <p>Here is the list of valid resize handles:</p>
 * <pre>
Value   Description
------  -------------------
 'n'     north
 's'     south
 'e'     east
 'w'     west
 'nw'    northwest
 'sw'    southwest
 'se'    southeast
 'ne'    northeast
 'all'   all
</pre>
 * <p>Here's an example showing the creation of a typical Resizable:</p>
 * <pre><code>
var resizer = new Ext.Resizable('element-id', {
    handles: 'all',
    minWidth: 200,
    minHeight: 100,
    maxWidth: 500,
    maxHeight: 400,
    pinned: true
});
resizer.on('resize', myHandler);
</code></pre>
 * <p>To hide a particular handle, set its display to none in CSS, or through script:<br>
 * resizer.east.setDisplayed(false);</p>
 * @constructor
 * Create a new resizable component
 * @param {Mixed} el The id or element to resize
 * @param {Object} config configuration options
  */
Ext.Resizable = function(el, config){
    this.el = Ext.get(el);

    /**
     * The proxy Element that is resized in place of the real Element during the resize operation.
     * This may be queried using {@link Ext.Element#getBox} to provide the new area to resize to.
     * Read only.
     * @type Ext.Element.
     * @property proxy
     */
    this.proxy = this.el.createProxy({tag: 'div', cls: 'x-resizable-proxy', id: this.el.id + '-rzproxy'}, Ext.getBody());
    this.proxy.unselectable();
    this.proxy.enableDisplayMode('block');

    Ext.apply(this, config);
    
    if(this.pinned){
        this.disableTrackOver = true;
        this.el.addClass('x-resizable-pinned');
    }
    // if the element isn't positioned, make it relative
    var position = this.el.getStyle('position');
    if(position != 'absolute' && position != 'fixed'){
        this.el.setStyle('position', 'relative');
    }
    if(!this.handles){ // no handles passed, must be legacy style
        this.handles = 's,e,se';
        if(this.multiDirectional){
            this.handles += ',n,w';
        }
    }
    if(this.handles == 'all'){
        this.handles = 'n s e w ne nw se sw';
    }
    var hs = this.handles.split(/\s*?[,;]\s*?| /);
    var ps = Ext.Resizable.positions;
    for(var i = 0, len = hs.length; i < len; i++){
        if(hs[i] && ps[hs[i]]){
            var pos = ps[hs[i]];
            this[pos] = new Ext.Resizable.Handle(this, pos);
        }
    }
    // legacy
    this.corner = this.southeast;
    
    if(this.handles.indexOf('n') != -1 || this.handles.indexOf('w') != -1){
        this.updateBox = true;
    }   
    this.activeHandle = null;

    if(this.adjustments == 'auto'){
        var hw = this.west, he = this.east, hn = this.north, hs = this.south;
        this.adjustments = [
            (he.el ? -he.el.getWidth() : 0) + (hw.el ? -hw.el.getWidth() : 0),
            (hn.el ? -hn.el.getHeight() : 0) + (hs.el ? -hs.el.getHeight() : 0) -1 
        ];
    }

    if(this.draggable){
        this.dd = this.dynamic ? 
            this.el.initDD(null) : this.el.initDDProxy(null, {dragElId: this.proxy.id});
        this.dd.setHandleElId(this.el.id);
    }

    this.addEvents(
        /**
         * @event beforeresize
         * Fired before resize is allowed. Set {@link #enabled} to false to cancel resize.
         * @param {Ext.Resizable} this
         * @param {Ext.EventObject} e The mousedown event
         */
        'beforeresize',
        /**
         * @event resize
         * Fired after a resize.
         * @param {Ext.Resizable} this
         * @param {Number} width The new width
         * @param {Number} height The new height
         * @param {Ext.EventObject} e The mouseup event
         */
        'resize'
    );
    
    if(this.width !== null && this.height !== null){
        this.resizeTo(this.width, this.height);
    }
    if(Ext.isIE){
        this.el.dom.style.zoom = 1;
    }
    Ext.Resizable.superclass.constructor.call(this);
};

Ext.extend(Ext.Resizable, Ext.util.Observable, {

    /**
     * @cfg {Array/String} adjustments String 'auto' or an array [width, height] with values to be <b>added</b> to the
     * resize operation's new size (defaults to <tt>[0, 0]</tt>)
     */
    adjustments : [0, 0],
    /**
     * @cfg {Boolean} animate True to animate the resize (not compatible with dynamic sizing, defaults to false)
     */
    animate : false,
    /**
     * @cfg {Mixed} constrainTo Constrain the resize to a particular element
     */
    /**
     * @cfg {Boolean} draggable Convenience to initialize drag drop (defaults to false)
     */
    draggable: false,
    /**
     * @cfg {Number} duration Animation duration if animate = true (defaults to 0.35)
     */
    duration : 0.35,
    /**
     * @cfg {Boolean} dynamic True to resize the element while dragging instead of using a proxy (defaults to false)
     */
    dynamic : false,
    /**
     * @cfg {String} easing Animation easing if animate = true (defaults to <tt>'easingOutStrong'</tt>)
     */
    easing : 'easeOutStrong',
    /**
     * @cfg {Boolean} enabled False to disable resizing (defaults to true)
     */
    enabled : true,
    /**
     * @property enabled Writable. False if resizing is disabled.
     * @type Boolean 
     */
    /**
     * @cfg {String} handles String consisting of the resize handles to display (defaults to undefined).
     * Specify either <tt>'all'</tt> or any of <tt>'n s e w ne nw se sw'</tt>.
     */
    handles : false,
    /**
     * @cfg {Boolean} multiDirectional <b>Deprecated</b>.  Deprecated style of adding multi-direction resize handles.
     */
    multiDirectional : false,
    /**
     * @cfg {Number} height The height of the element in pixels (defaults to null)
     */
    height : null,
    /**
     * @cfg {Number} width The width of the element in pixels (defaults to null)
     */
    width : null,
    /**
     * @cfg {Number} heightIncrement The increment to snap the height resize in pixels
     * (only applies if <code>{@link #dynamic}==true</code>). Defaults to <tt>0</tt>.
     */
    heightIncrement : 0,
    /**
     * @cfg {Number} widthIncrement The increment to snap the width resize in pixels
     * (only applies if <code>{@link #dynamic}==true</code>). Defaults to <tt>0</tt>.
     */
    widthIncrement : 0,
    /**
     * @cfg {Number} minHeight The minimum height for the element (defaults to 5)
     */
    minHeight : 5,
    /**
     * @cfg {Number} minWidth The minimum width for the element (defaults to 5)
     */
    minWidth : 5,
    /**
     * @cfg {Number} maxHeight The maximum height for the element (defaults to 10000)
     */
    maxHeight : 10000,
    /**
     * @cfg {Number} maxWidth The maximum width for the element (defaults to 10000)
     */
    maxWidth : 10000,
    /**
     * @cfg {Number} minX The minimum x for the element (defaults to 0)
     */
    minX: 0,
    /**
     * @cfg {Number} minY The minimum x for the element (defaults to 0)
     */
    minY: 0,
    /**
     * @cfg {Boolean} pinned True to ensure that the resize handles are always visible, false to display them only when the
     * user mouses over the resizable borders. This is only applied at config time. (defaults to false)
     */
    pinned : false,
    /**
     * @cfg {Boolean} preserveRatio True to preserve the original ratio between height
     * and width during resize (defaults to false)
     */
    preserveRatio : false,
    /**
     * @cfg {Ext.lib.Region} resizeRegion Constrain the resize to a particular region
     */

    
    /**
     * Perform a manual resize and fires the 'resize' event.
     * @param {Number} width
     * @param {Number} height
     */
    resizeTo : function(width, height){
        this.el.setSize(width, height);
        this.fireEvent('resize', this, width, height, null);
    },

    // private
    startSizing : function(e, handle){
        this.fireEvent('beforeresize', this, e);
        if(this.enabled){ // 2nd enabled check in case disabled before beforeresize handler
            e.stopEvent();

            Ext.getDoc().on({
                scope: this,
                mousemove: this.onMouseMove,
                mouseup: {
                    fn: this.onMouseUp,
                    single: true,
                    scope: this
                }
            });
            Ext.getBody().addClass('ux-resizable-handle-' + handle.position);

            this.resizing = true;
            this.startBox = this.el.getBox();
            this.startPoint = e.getXY();
            this.offsets = [(this.startBox.x + this.startBox.width) - this.startPoint[0],
                            (this.startBox.y + this.startBox.height) - this.startPoint[1]];

            if(this.constrainTo) {
                var ct = Ext.get(this.constrainTo);
                this.resizeRegion = ct.getRegion().adjust(
                    ct.getFrameWidth('t'),
                    ct.getFrameWidth('l'),
                    -ct.getFrameWidth('b'),
                    -ct.getFrameWidth('r')
                );
            }

            this.proxy.setStyle('visibility', 'hidden'); // workaround display none
            this.proxy.show();
            this.proxy.setBox(this.startBox);
            if(!this.dynamic){
                this.proxy.setStyle('visibility', 'visible');
            }
        }
    },

    // private
    onMouseDown : function(handle, e){
        if(this.enabled && !this.activeHandle){
            e.stopEvent();
            this.activeHandle = handle;
            this.startSizing(e, handle);
        }
    },

    // private
    onMouseUp : function(e){
        Ext.getBody().removeClass('ux-resizable-handle-' + this.activeHandle.position)
            .un('mousemove', this.onMouseMove, this);
        var size = this.resizeElement();
        this.resizing = false;
        this.handleOut(this.activeHandle);
        this.proxy.hide();
        this.fireEvent('resize', this, size.width, size.height, e);
        this.activeHandle = null;
    },

    // private
    snap : function(value, inc, min){
        if(!inc || !value){
            return value;
        }
        var newValue = value;
        var m = value % inc;
        if(m > 0){
            if(m > (inc/2)){
                newValue = value + (inc-m);
            }else{
                newValue = value - m;
            }
        }
        return Math.max(min, newValue);
    },

    /**
     * <p>Performs resizing of the associated Element. This method is called internally by this
     * class, and should not be called by user code.</p>
     * <p>If a Resizable is being used to resize an Element which encapsulates a more complex UI
     * component such as a Panel, this method may be overridden by specifying an implementation
     * as a config option to provide appropriate behaviour at the end of the resize operation on
     * mouseup, for example resizing the Panel, and relaying the Panel's content.</p>
     * <p>The new area to be resized to is available by examining the state of the {@link #proxy}
     * Element. Example:
<pre><code>
new Ext.Panel({
    title: 'Resize me',
    x: 100,
    y: 100,
    renderTo: Ext.getBody(),
    floating: true,
    frame: true,
    width: 400,
    height: 200,
    listeners: {
        render: function(p) {
            new Ext.Resizable(p.getEl(), {
                handles: 'all',
                pinned: true,
                transparent: true,
                resizeElement: function() {
                    var box = this.proxy.getBox();
                    p.updateBox(box);
                    if (p.layout) {
                        p.doLayout();
                    }
                    return box;
                }
           });
       }
    }
}).show();
</code></pre>
     */
    resizeElement : function(){
        var box = this.proxy.getBox();
        if(this.updateBox){
            this.el.setBox(box, false, this.animate, this.duration, null, this.easing);
        }else{
            this.el.setSize(box.width, box.height, this.animate, this.duration, null, this.easing);
        }
        if(!this.dynamic){
            this.proxy.hide();
        }
        return box;
    },

    // private
    constrain : function(v, diff, m, mx){
        if(v - diff < m){
            diff = v - m;    
        }else if(v - diff > mx){
            diff = v - mx; 
        }
        return diff;                
    },

    // private
    onMouseMove : function(e){
        if(this.enabled && this.activeHandle){
            try{// try catch so if something goes wrong the user doesn't get hung

            if(this.resizeRegion && !this.resizeRegion.contains(e.getPoint())) {
                return;
            }

            //var curXY = this.startPoint;
            var curSize = this.curSize || this.startBox,
                x = this.startBox.x, y = this.startBox.y,
                ox = x, 
                oy = y,
                w = curSize.width, 
                h = curSize.height,
                ow = w, 
                oh = h,
                mw = this.minWidth, 
                mh = this.minHeight,
                mxw = this.maxWidth, 
                mxh = this.maxHeight,
                wi = this.widthIncrement,
                hi = this.heightIncrement,
                eventXY = e.getXY(),
                diffX = -(this.startPoint[0] - Math.max(this.minX, eventXY[0])),
                diffY = -(this.startPoint[1] - Math.max(this.minY, eventXY[1])),
                pos = this.activeHandle.position,
                tw,
                th;
            
            switch(pos){
                case 'east':
                    w += diffX; 
                    w = Math.min(Math.max(mw, w), mxw);
                    break;
                case 'south':
                    h += diffY;
                    h = Math.min(Math.max(mh, h), mxh);
                    break;
                case 'southeast':
                    w += diffX; 
                    h += diffY;
                    w = Math.min(Math.max(mw, w), mxw);
                    h = Math.min(Math.max(mh, h), mxh);
                    break;
                case 'north':
                    diffY = this.constrain(h, diffY, mh, mxh);
                    y += diffY;
                    h -= diffY;
                    break;
                case 'west':
                    diffX = this.constrain(w, diffX, mw, mxw);
                    x += diffX;
                    w -= diffX;
                    break;
                case 'northeast':
                    w += diffX; 
                    w = Math.min(Math.max(mw, w), mxw);
                    diffY = this.constrain(h, diffY, mh, mxh);
                    y += diffY;
                    h -= diffY;
                    break;
                case 'northwest':
                    diffX = this.constrain(w, diffX, mw, mxw);
                    diffY = this.constrain(h, diffY, mh, mxh);
                    y += diffY;
                    h -= diffY;
                    x += diffX;
                    w -= diffX;
                    break;
               case 'southwest':
                    diffX = this.constrain(w, diffX, mw, mxw);
                    h += diffY;
                    h = Math.min(Math.max(mh, h), mxh);
                    x += diffX;
                    w -= diffX;
                    break;
            }
            
            var sw = this.snap(w, wi, mw);
            var sh = this.snap(h, hi, mh);
            if(sw != w || sh != h){
                switch(pos){
                    case 'northeast':
                        y -= sh - h;
                    break;
                    case 'north':
                        y -= sh - h;
                        break;
                    case 'southwest':
                        x -= sw - w;
                    break;
                    case 'west':
                        x -= sw - w;
                        break;
                    case 'northwest':
                        x -= sw - w;
                        y -= sh - h;
                    break;
                }
                w = sw;
                h = sh;
            }
            
            if(this.preserveRatio){
                switch(pos){
                    case 'southeast':
                    case 'east':
                        h = oh * (w/ow);
                        h = Math.min(Math.max(mh, h), mxh);
                        w = ow * (h/oh);
                       break;
                    case 'south':
                        w = ow * (h/oh);
                        w = Math.min(Math.max(mw, w), mxw);
                        h = oh * (w/ow);
                        break;
                    case 'northeast':
                        w = ow * (h/oh);
                        w = Math.min(Math.max(mw, w), mxw);
                        h = oh * (w/ow);
                    break;
                    case 'north':
                        tw = w;
                        w = ow * (h/oh);
                        w = Math.min(Math.max(mw, w), mxw);
                        h = oh * (w/ow);
                        x += (tw - w) / 2;
                        break;
                    case 'southwest':
                        h = oh * (w/ow);
                        h = Math.min(Math.max(mh, h), mxh);
                        tw = w;
                        w = ow * (h/oh);
                        x += tw - w;
                        break;
                    case 'west':
                        th = h;
                        h = oh * (w/ow);
                        h = Math.min(Math.max(mh, h), mxh);
                        y += (th - h) / 2;
                        tw = w;
                        w = ow * (h/oh);
                        x += tw - w;
                       break;
                    case 'northwest':
                        tw = w;
                        th = h;
                        h = oh * (w/ow);
                        h = Math.min(Math.max(mh, h), mxh);
                        w = ow * (h/oh);
                        y += th - h;
                        x += tw - w;
                        break;
                        
                }
            }
            this.proxy.setBounds(x, y, w, h);
            if(this.dynamic){
                this.resizeElement();
            }
            }catch(ex){}
        }
    },

    // private
    handleOver : function(handle){
        if(this.enabled){
            Ext.getBody().addClass('ux-resizable-handle-' + handle.position);
        }
    },

    // private
    handleOut : function(handle){
        if(!this.resizing){
            Ext.getBody().removeClass('ux-resizable-handle-' + handle.position);
        }
    },
    
    /**
     * Returns the element this component is bound to.
     * @return {Ext.Element}
     */
    getEl : function(){
        return this.el;
    },

    /**
     * Destroys this resizable. If the element was wrapped and 
     * removeEl is not true then the element remains.
     * @param {Boolean} removeEl (optional) true to remove the element from the DOM
     */
    destroy : function(removeEl){
        Ext.destroy(this.dd, this.proxy);
        this.proxy = null;
        
        var ps = Ext.Resizable.positions;
        for(var k in ps){
            if(typeof ps[k] != 'function' && this[ps[k]]){
                this[ps[k]].destroy();
            }
        }
        if(removeEl){
            this.el.update('');
            Ext.destroy(this.el);
            this.el = null;
        }
        this.purgeListeners();
    },

    syncHandleHeight : function(){
        var h = this.el.getHeight(true);
        if(this.west.el){
            this.west.el.setHeight(h);
        }
        if(this.east.el){
            this.east.el.setHeight(h);
        }
    }
});

// private
// hash to map config positions to true positions
Ext.Resizable.positions = {
    n: 'north', s: 'south', e: 'east', w: 'west', se: 'southeast', sw: 'southwest', nw: 'northwest', ne: 'northeast'
};
Ext.Resizable.cfg = {
    north: {left: 7, right: -7, height: 7},
    south: {left: 7, right: -7, top: -7},
    east: {top: 7, bottom: -7, left: -7},
    west: {top: 7, bottom: -7, width: 7},
    southeast: {top: -7, left: -7},
    southwest: {top: -7, width: 7},
    northwest: {height: 7, width: 7},
    northeast: {left: -7, height: 7}
};

// private
Ext.Resizable.Handle = function(rz, pos){
    this.position = pos;
    this.rz = rz;
    var cfg = Ext.Resizable.cfg[pos] || Ext.Resizable.cfg[Ext.Resizable.positions[pos]];
    this.ez = new Ext.ux.EventZone(Ext.apply({
        position: pos,
        el: rz.el
    }, cfg));
    this.ez.on({
        mousedown: this.onMouseDown,
        mouseenter: this.onMouseOver,
        mouseleave: this.onMouseOut,
        scope: this
    });
};

// private
Ext.Resizable.Handle.prototype = {
    cursor: 'move',

    // private
    afterResize : function(rz){
        // do nothing    
    },
    // private
    onMouseDown : function(e){
        this.rz.onMouseDown(this, e);
    },
    // private
    onMouseOver : function(e){
        this.rz.handleOver(this, e);
    },
    // private
    onMouseOut : function(e){
        this.rz.handleOut(this, e);
    },
    // private
    destroy : function(){
        Ext.destroy(this.el);
        this.el = null;
    }
};

/**
*
* Ext.ux.elasticTextArea Extension Class for Ext 3.x Library
*
* @author  Steffen Kamper
*
* @license Ext.ux.elasticTextArea is licensed under the terms of
* the Open Source LGPL 3.0 license.  Commercial use is permitted to the extent
* that the code/component(s) do NOT become part of another Open Source or Commercially
* licensed development library or toolkit without explicit permission.
* 
* License details: http://www.gnu.org/licenses/lgpl.html
*
*/
Ext.ux.elasticTextArea = function(){
    
    var defaultConfig = function(){
        return {
            minHeight : 0
            ,maxHeight : 0
            ,growBy: 12
        }
    }
    
    var processOptions = function(config){
        var o = defaultConfig();
        var options = {};
        Ext.apply(options, config, o);
        
        return options ;
    }
    
    return {
        div : null
        ,applyTo: function(elementId, options){
        
            var el = Ext.get(elementId);
            var width = el.getWidth();
            var height = el.getHeight();
            
            var styles = el.getStyles('padding-top', 'padding-bottom', 'padding-left', 'padding-right', 'line-height', 'font-size', 'font-family', 'font-weight');

            if(! this.div){
                var options = processOptions(options);
                
                this.div = Ext.DomHelper.append(Ext.getBody() || document.body, {
                    'id':elementId + '-preview-div'
                    ,'tag' : 'div'
                    ,'background': 'red'
                    ,'style' : 'position: absolute; top: -100000px; left: -100000px;'
                }, true)
                Ext.DomHelper.applyStyles(this.div, styles);
                
                el.on('keyup', function() {
                        this.applyTo(elementId, options);
                }, this);
            }
            this.div.setWidth(parseInt(el.getStyle('width')));
            //replace \n with <br>&nbsp; so that the enter key can trigger and height increase
            //but first remove all previous entries, so that the height mesurement can be as accurate as possible
            this.div.update( 
                    el.dom.value.replace(/<br \/>&nbsp;/, '<br />')
                                .replace(/<|>/g, ' ')
                                .replace(/&/g,"&amp;")
                                .replace(/\n/g, '<br />&nbsp;') 
                    );
            
			var growBy = parseInt(el.getStyle('line-height'));
			growBy = growBy ? growBy + 1 : 1;
			if (growBy === 1) {
				growBy = options.growBy;
			}
			var textHeight = this.div.getHeight();
			textHeight = textHeight ? textHeight + growBy : growBy;
            
            if ( (textHeight > options.maxHeight ) && (options.maxHeight > 0) ){
                textHeight = options.maxHeight ;
                el.setStyle('overflow', 'auto');
            }
            if ( (textHeight < options.minHeight ) && (options.minHeight > 0) ) {
                textHeight = options.minHeight ;
                el.setStyle('overflow', 'auto');
            }
            
            el.setHeight(textHeight , true);
        }
    }
}

/***************************************************************
*
*  Evaluation of TYPO3 form field content
*
*
*
*  Copyright notice
*
*  (c) 1998-2011 Kasper Skaarhoj
*  All rights reserved
*
*  This script is part of the TYPO3 t3lib/ library provided by
*  Kasper Skaarhoj <kasper@typo3.com> together with TYPO3
*
*  Released under GNU/GPL (see license file in typo3/sysext/cms/tslib/)
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
*
*  This copyright notice MUST APPEAR in all copies of this script
***************************************************************/


function evalFunc()	{
	this.input = evalFunc_input;
	this.output = evalFunc_output;
	this.parseInt = evalFunc_parseInt;
	this.getNumChars = evalFunc_getNumChars;
	this.parseDouble = evalFunc_parseDouble;
	this.noSpace = evalFunc_noSpace;
	this.getSecs = evalFunc_getSecs;
	this.getYear = evalFunc_getYear;
	this.getTimeSecs = evalFunc_getTimeSecs;
	this.getTime = evalFunc_getTime;
	this.getDate = evalFunc_getDate;
	this.getTimestamp = evalFunc_getTimestamp;
	this.caseSwitch = evalFunc_caseSwitch;
	this.evalObjValue = evalFunc_evalObjValue;
	this.outputObjValue = evalFunc_outputObjValue;
	this.split = evalFunc_splitStr;
	this.pol = evalFunc_pol;
	this.convertClientTimestampToUTC = evalFunc_convertClientTimestampToUTC;

	this.ltrim = evalFunc_ltrim;
	this.btrim = evalFunc_btrim;
	var today = new Date();
 	this.lastYear = this.getYear(today);
 	this.lastDate = this.getDate(today);
 	this.lastTime = 0;
	this.refDate = today;
	this.isInString = '';
	this.USmode = 0;
}
function evalFunc_pol(fortegn, value)	{
	return eval (((fortegn=="-")?'-':'')+value);
}
function evalFunc_evalObjValue(FObj,value)	{
	var evallist = FObj.evallist;
	this.isInString = (FObj.is_in) ? ''+FObj.is_in : '';
	var index=1;
	var theEvalType = (FObj.evallist) ? this.split(evallist, ",", index) : false;
	var newValue=value;
	while (theEvalType) {
		if (theEvalType.slice(0, 3) == 'tx_' || theEvalType.slice(0, 3) == 'Tx_') {
			if(typeof window[theEvalType] == 'function') {
				newValue = window[theEvalType](newValue);	// variable function call, calling functions like tx_myext_myeval(value)
			}
		} else {
			newValue = evalFunc.input(theEvalType, newValue);
		}
		index++;
		theEvalType = this.split(evallist, ",", index);
	}
	return newValue;
}
function evalFunc_outputObjValue(FObj,value)	{
	var evallist = FObj.evallist;
	var index=1;
	var theEvalType = this.split(evallist, ",", index);
	var newValue=value;
	while (theEvalType) {
		if (theEvalType != 'required') {
			newValue = evalFunc.output(theEvalType, value, FObj);
		}
		index++;
		theEvalType = this.split(evallist, ",", index);
	}
	return newValue;
}
function evalFunc_caseSwitch(type,inVal)	{
	var theVal = ''+inVal;
	var newString = '';
	switch (type)	{
		case "alpha":
		case "num":
		case "alphanum":
		case "alphanum_x":
			for (var a=0;a<theVal.length;a++)	{
				var theChar = theVal.substr(a,1);
				var special = (theChar=='_'||theChar=='-');
				var alpha = (theChar>='a'&&theChar<='z') || (theChar>='A'&&theChar<='Z');
				var num = (theChar>='0' && theChar<='9');
				switch(type)	{
					case "alphanum":	special=0;		break;
					case "alpha":	num=0; special=0;		break;
					case "num":	alpha=0; special=0;		break;
				}
				if (alpha || num || theChar==' ' || special)	{
					newString+=theChar;
				}
			}
		break;
		case "is_in":
			if (this.isInString)	{
				for (var a=0;a<theVal.length;a++)	{
					var theChar = theVal.substr(a,1);
					if (this.isInString.indexOf(theChar)!=-1)	{
						newString+=theChar;
					}
				}
			} else {newString = theVal;}
		break;
		case "nospace":
			newString = this.noSpace(theVal);
		break;
		case "upper":
			newString = theVal.toUpperCase();
		break;
		case "lower":
			newString = theVal.toLowerCase();
		break;
		default:
			return inVal;
	}
	return newString;
}
function evalFunc_parseInt(value)	{
	var theVal = ''+value;
	if (!value)	return 0;
	for (var a=0;a<theVal.length;a++)	{
		if (theVal.substr(a,1)!='0')	{
			return parseInt(theVal.substr(a,theVal.length)) || 0;
		}
	}
	return 0;
}
function evalFunc_getNumChars(value)	{
	var theVal = ''+value;
	if (!value)	return 0;
	var outVal="";
	for (var a=0;a<theVal.length;a++)	{
		if (theVal.substr(a,1)==parseInt(theVal.substr(a,1)))	{
			outVal+=theVal.substr(a,1);
		}
	}
	return outVal;
}
function evalFunc_parseDouble(value)	{
	var theVal = "" + value;
	theVal = theVal.replace(/[^0-9,\.-]/g, "");
	var negative = theVal.substring(0, 1) === '-';
	theVal = theVal.replace(/-/g, "");
	theVal = theVal.replace(/,/g, ".");
	if (theVal.indexOf(".") == -1) {
		theVal += ".0";
	}
	var parts = theVal.split(".");
	var dec = parts.pop();
	theVal = Number(parts.join("") + "." + dec);
	if (negative) {
	    theVal *= -1;
	}
	theVal = theVal.toFixed(2);

	return theVal;
}
function evalFunc_noSpace(value)	{
	var theVal = ''+value;
	var newString="";
	for (var a=0;a<theVal.length;a++)	{
		var theChar = theVal.substr(a,1);
		if (theChar!=' ')	{
			newString+=theChar;
		}
	}
	return newString;
}
function evalFunc_ltrim(value)	{
	var theVal = ''+value;
	if (!value)	return '';
	for (var a=0;a<theVal.length;a++)	{
		if (theVal.substr(a,1)!=' ')	{
			return theVal.substr(a,theVal.length);
		}
	}
	return '';
}
function evalFunc_btrim(value)	{
	var theVal = ''+value;
	if (!value)	return '';
	for (var a=theVal.length;a>0;a--)	{
		if (theVal.substr(a-1,1)!=' ')	{
			return theVal.substr(0,a);
		}
	}
	return '';
}
function evalFunc_splitSingle(value)	{
	var theVal = ''+value;
	this.values = new Array();
	this.pointer = 3;
	this.values[1]=theVal.substr(0,2);
	this.values[2]=theVal.substr(2,2);
	this.values[3]=theVal.substr(4,10);
}
function evalFunc_split(value)	{
	this.values = new Array();
	this.valPol = new Array();
	this.pointer = 0;
	var numberMode = 0;
	var theVal = "";
	value+=" ";
	for (var a=0;a<value.length;a++)	{
		var theChar = value.substr(a,1);
		if (theChar<"0" || theChar>"9")	{
			if (numberMode)	{
				this.pointer++;
				this.values[this.pointer]=theVal;
				theVal = "";
				numberMode=0;
			}
			if (theChar=="+" || theChar=="-")	{
				this.valPol[this.pointer+1] = theChar;
			}
		} else {
			theVal+=theChar;
			numberMode=1;
		}
	}
}
function evalFunc_input(type,inVal)	{
	if (type=="md5") {
		return MD5(inVal);
	}
	if (type=="trim") {
		return this.ltrim(this.btrim(inVal));
	}
	if (type=="int") {
		return this.parseInt(inVal);
	}
	if (type=="double2") {
		return this.parseDouble(inVal);
	}

	var today = new Date();
	var add=0;
	var value = this.ltrim(inVal);
	var values = new evalFunc_split(value);
	var theCmd = value.substr(0,1);
	value = this.caseSwitch(type,value);
	if (value=="") {
		return "";
		return 0;	// Why would I ever return a zero??? (20/12/01)
	}
	switch (type)	{
		case "datetime":
			switch (theCmd)	{
				case "d":
				case "t":
				case "n":
					this.lastTime = this.convertClientTimestampToUTC(this.getTimestamp(today), 0);
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				case "+":
				case "-":
					if (this.lastTime == 0)	{
						this.lastTime = this.convertClientTimestampToUTC(this.getTimestamp(today), 0);
					}
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				default:
					var index = value.indexOf(' ');
					if (index!=-1)	{
						var dateVal = this.input("date",value.substr(index,value.length));
							// set refDate so that evalFunc_input on time will work with correct DST information
						this.refDate = new Date(dateVal*1000);
						this.lastTime = dateVal + this.input("time",value.substr(0,index));
					} else	{
							// only date, no time
						this.lastTime = this.input("date", value);
					}
			}
			this.lastTime+=add*24*60*60;
			return this.lastTime;
		break;
		case "year":
			switch (theCmd)	{
				case "d":
				case "t":
				case "n":
					this.lastYear = this.getYear(today);
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				case "+":
				case "-":
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				default:
					if (values.valPol[2])	{
						add = this.pol(values.valPol[2],this.parseInt(values.values[2]));
					}
					var year = (values.values[1])?this.parseInt(values.values[1]):this.getYear(today);
					if (  (year>=0&&year<38) || (year>=70&&year<100) || (year>=1902&&year<2038)	)	{
						if (year<100)	{
							year = (year<38) ? year+=2000 : year+=1900;
						}
					} else {
						year = this.getYear(today);
					}
					this.lastYear = year;
			}
			this.lastYear+=add;
			return this.lastYear;
		break;
		case "date":
			switch (theCmd)	{
				case "d":
				case "t":
				case "n":
					this.lastDate = this.getTimestamp(today);
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				case "+":
				case "-":
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				default:
					var index = 4;
					if (values.valPol[index])	{
						add = this.pol(values.valPol[index],this.parseInt(values.values[index]));
					}
					if (values.values[1] && values.values[1].length>2)	{
						if (values.valPol[2])	{
							add = this.pol(values.valPol[2],this.parseInt(values.values[2]));
						}
						var temp = values.values[1];
						values = new evalFunc_splitSingle(temp);
					}

					var year = (values.values[3])?this.parseInt(values.values[3]):this.getYear(today);
					if ( (year>=0&&year<38) || (year>=70&&year<100) || (year>=1902&&year<2038) )	{
						if (year<100)	{
							year = (year<38) ? year+=2000 : year+=1900;
						}
					} else {
						year = this.getYear(today);
					}
					var month = (values.values[this.USmode?1:2])?this.parseInt(values.values[this.USmode?1:2]):today.getUTCMonth()+1;
					var day = (values.values[this.USmode?2:1])?this.parseInt(values.values[this.USmode?2:1]):today.getUTCDate();

					var theTime = new Date(parseInt(year), parseInt(month)-1, parseInt(day));

						// Substract timezone offset from client
					this.lastDate = this.convertClientTimestampToUTC(this.getTimestamp(theTime), 0);
			}
			this.lastDate+=add*24*60*60;
			return this.lastDate;
		break;
		case "time":
		case "timesec":
			switch (theCmd)	{
				case "d":
				case "t":
				case "n":
					this.lastTime = this.getTimeSecs(today);
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				case "+":
				case "-":
					if (this.lastTime == 0)	{
						this.lastTime = this.getTimeSecs(today);
					}
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				default:
					var index = (type=="timesec")?4:3;
					if (values.valPol[index])	{
						add = this.pol(values.valPol[index],this.parseInt(values.values[index]));
					}
					if (values.values[1] && values.values[1].length>2)	{
						if (values.valPol[2])	{
							add = this.pol(values.valPol[2],this.parseInt(values.values[2]));
						}
						var temp = values.values[1];
						values = new evalFunc_splitSingle(temp);
					}
					var sec = (values.values[3])?this.parseInt(values.values[3]):today.getUTCSeconds();
					if (sec > 59)	{sec=59;}
					var min = (values.values[2])?this.parseInt(values.values[2]):today.getUTCMinutes();
					if (min > 59)	{min=59;}
					var hour = (values.values[1])?this.parseInt(values.values[1]):today.getUTCHours();
					if (hour >= 24)	{hour=0;}

					var theTime = new Date(this.getYear(this.refDate), this.refDate.getUTCMonth(), this.refDate.getUTCDate(), hour, min, ((type=="timesec")?sec:0));

						// Substract timezone offset from client
					this.lastTime = this.convertClientTimestampToUTC(this.getTimestamp(theTime), 1);
			}
			this.lastTime+=add*60;
			if (this.lastTime<0) {this.lastTime+=24*60*60;}
			return this.lastTime;
		break;
		default:
			return value;
	}
}
function evalFunc_output(type,value,FObj)	{
	var theString = "";
	switch (type)	{
		case "date":
			if (!parseInt(value))	{return '';}
			var theTime = new Date(parseInt(value) * 1000);
			if (this.USmode)	{
				theString = (theTime.getUTCMonth()+1)+'-'+theTime.getUTCDate()+'-'+this.getYear(theTime);
			} else {
				theString = theTime.getUTCDate()+'-'+(theTime.getUTCMonth()+1)+'-'+this.getYear(theTime);
			}
		break;
		case "datetime":
			if (!parseInt(value))	{return '';}
			theString = this.output("time",value)+' '+this.output("date",value);
		break;
		case "time":
		case "timesec":
			if (!parseInt(value))	{return '';}
			var theTime = new Date(parseInt(value) * 1000);
			var h = theTime.getUTCHours();
			var m = theTime.getUTCMinutes();
			var s = theTime.getUTCSeconds();
			theString = h+':'+((m<10)?'0':'')+m + ((type=="timesec")?':'+((s<10)?'0':'')+s:'');
		break;
		case "password":
			theString = (value)	? TS.passwordDummy : "";
		break;
		case "int":
			theString = (FObj.checkbox && value==FObj.checkboxValue)?'':value;
		break;
		default:
			theString = value;
	}
	return theString;
}
function evalFunc_getSecs(timeObj)	{
	return timeObj.getUTCSeconds();
}
// Seconds since midnight:
function evalFunc_getTime(timeObj)	{
	return timeObj.getUTCHours() * 60 * 60 + timeObj.getUTCMinutes() * 60 + this.getSecs(timeObj);
}
function evalFunc_getYear(timeObj)	{
	return timeObj.getUTCFullYear();
}
// Seconds since midnight with client timezone offset:
function evalFunc_getTimeSecs(timeObj)	{
	return timeObj.getHours()*60*60+timeObj.getMinutes()*60+timeObj.getSeconds();
}
function evalFunc_getDate(timeObj)	{
	var theTime = new Date(this.getYear(timeObj), timeObj.getUTCMonth(), timeObj.getUTCDate());
	return this.getTimestamp(theTime);
}
function evalFunc_dummy (evallist,is_in,checkbox,checkboxValue) {
	this.evallist = evallist;
	this.is_in = is_in;
	this.checkboxValue = checkboxValue;
	this.checkbox = checkbox;
}
function evalFunc_splitStr(theStr1, delim, index) {
	var theStr = ''+theStr1;
	var lengthOfDelim = delim.length;
	sPos = -lengthOfDelim;
	if (index<1) {index=1;}
	for (a=1; a<index; a++)	{
		sPos = theStr.indexOf(delim, sPos+lengthOfDelim);
		if (sPos==-1)	{return null;}
	}
	ePos = theStr.indexOf(delim, sPos+lengthOfDelim);
	if(ePos == -1)	{ePos = theStr.length;}
	return (theStr.substring(sPos+lengthOfDelim,ePos));
}
function evalFunc_getTimestamp(timeObj)	{
	return Date.parse(timeObj)/1000;
}

// Substract timezone offset from client to a timestamp to get UTC-timestamp to be send to server
function evalFunc_convertClientTimestampToUTC(timestamp, timeonly)	{
	var timeObj = new Date(timestamp*1000);
	timeObj.setTime((timestamp - timeObj.getTimezoneOffset()*60)*1000);
	if (timeonly)	{
			// only seconds since midnight
		return this.getTime(timeObj);
	} else	{
			// seconds since the "unix-epoch"
		return this.getTimestamp(timeObj);
	}
}
/***************************************************************
*  Copyright notice
*
*  (c) 1999-2010 Kasper Skaarhoj (kasperYYYY@typo3.com)
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
/**
 * Contains JavaScript for TYPO3 Core Form generator - AKA "TCEforms"
 *
 * @author	Kasper Skaarhoj <kasperYYYY@typo3.com>
 * @coauthor	Oliver Hader <oh@inpublica.de>
 */


var TBE_EDITOR = {
	/* Example:
		elements: {
			'data-parentPid-table-uid': {
				'field': {
					'range':		[0, 100],
					'rangeImg':		'',
					'required':		true,
					'requiredImg':	''
				}
			}
		},
	*/

	elements: {},
	nested: {'field':{}, 'level':{}},
	ignoreElements: [],
	recentUpdatedElements: {},
	actionChecks: { submit:	[] },

	formname: '',
	formnameUENC: '',
	loadTime: 0,
	isChanged: 0,
	auth_timeout_field: 0,

	backPath: '',
	prependFormFieldNames: 'data',
	prependFormFieldNamesUENC: 'data',
	prependFormFieldNamesCnt: 0,

	isPalettedoc: null,
	doSaveFieldName: 0,

	labels: {},
	images: {
		req: new Image(),
		cm: new Image(),
		sel: new Image(),
		clear: new Image()
	},

	clearBeforeSettingFormValueFromBrowseWin: [],

	// Handling of data structures:
	addElements: function(elements) {
		TBE_EDITOR.recentUpdatedElements = elements;
		TBE_EDITOR.elements = $H(TBE_EDITOR.elements).merge(elements).toObject();
	},
	addNested: function(elements) {
		// Merge data structures:
		if (elements) {
			$H(elements).each(function(element) {
				var levelMax, i, currentLevel, subLevel;
				var nested = element.value;
				if (nested.level && nested.level.length) {
						// If the first level is of type 'inline', it could be created by a AJAX request to IRRE.
						// So, try to get the upper levels this dynamic level is nested in:
					if (typeof inline!='undefined' && nested.level[0][0]=='inline') {
						nested.level = inline.findContinuedNestedLevel(nested.level, nested.level[0][1]);
					}
					levelMax = nested.level.length-1;
					for (i=0; i<=levelMax; i++) {
						currentLevel = TBE_EDITOR.getNestedLevelIdent(nested.level[i]);
						if (typeof TBE_EDITOR.nested.level[currentLevel] == 'undefined') {
							TBE_EDITOR.nested.level[currentLevel] = { 'clean': true, 'item': {}, 'sub': {} };
						}
							// Add next sub level to the current level:
						if (i<levelMax) {
							subLevel = TBE_EDITOR.getNestedLevelIdent(nested.level[i+1]);
							TBE_EDITOR.nested.level[currentLevel].sub[subLevel] = true;
							// Add the current item to the last level in nesting:
						} else {
							TBE_EDITOR.nested.level[currentLevel].item[element.key] = nested.parts;
						}
					}
				}
			});
				// Merge the nested fields:
			TBE_EDITOR.nested.field = $H(TBE_EDITOR.nested.field).merge(elements).toObject();
		}
	},
	removeElement: function(record) {
		if (TBE_EDITOR.elements && TBE_EDITOR.elements[record]) {
				// Inform envolved levels the this record is removed and the missing requirements are resolved:
			$H(TBE_EDITOR.elements[record]).each(
				function(pair) {
					TBE_EDITOR.notifyNested(record+'['+pair.key+']', true);
				}
			);
			delete(TBE_EDITOR.elements[record]);
		}
	},
	removeElementArray: function(removeStack) {
		if (removeStack && removeStack.length) {
			TBE_EDITOR.ignoreElements = removeStack;
			for (var i=removeStack.length; i>=0; i--) {
				TBE_EDITOR.removeElement(removeStack[i]);
			}
			TBE_EDITOR.ignoreElements = [];
		}
	},
	getElement: function(record, field, type) {
		var result = null;
		var element;

		if (TBE_EDITOR.elements && TBE_EDITOR.elements[record] && TBE_EDITOR.elements[record][field]) {
			element = TBE_EDITOR.elements[record][field];
			if (type) {
				if (element[type]) result = element;
			} else {
				result = element;
			}
		}

		return result;
	},
	checkElements: function(type, recentUpdated, record, field) {
		var result = 1;
		var elementName, elementData, elementRecord, elementField;
		var source = (recentUpdated ? TBE_EDITOR.recentUpdatedElements : TBE_EDITOR.elements);

		if (TBE_EDITOR.ignoreElements.length && TBE_EDITOR.ignoreElements.indexOf(record)!=-1) {
			return result;
		}

		if (type) {
			if (record && field) {
				elementName = record+'['+field+']';
				elementData = TBE_EDITOR.getElement(record, field, type);
				if (elementData) {
					if (!TBE_EDITOR.checkElementByType(type, elementName, elementData, recentUpdated)) {
						result = 0;
					}
				}

			} else {
				var elementFieldList, elRecIndex, elRecCnt, elFldIndex, elFldCnt;
				var elementRecordList = $H(source).keys();
				for (elRecIndex=0, elRecCnt=elementRecordList.length; elRecIndex<elRecCnt; elRecIndex++) {
					elementRecord = elementRecordList[elRecIndex];
					elementFieldList = $H(source[elementRecord]).keys();
					for (elFldIndex=0, elFldCnt=elementFieldList.length; elFldIndex<elFldCnt; elFldIndex++) {
						elementField = elementFieldList[elFldIndex];
						elementData = TBE_EDITOR.getElement(elementRecord, elementField, type);
						if (elementData) {
							elementName = elementRecord+'['+elementField+']';
							if (!TBE_EDITOR.checkElementByType(type, elementName, elementData, recentUpdated)) {
								result = 0;
							}
						}
					}
				}
			}
		}

		return result;
	},
	checkElementByType: function(type, elementName, elementData, autoNotify) {
		var form, result = 1;

		if (type) {
			if (type == 'required') {
				form = document[TBE_EDITOR.formname][elementName];
				if (form) {
						// Check if we are within a deleted inline element
					var testNode = $(form.parentNode);
					while(testNode) {
						if (testNode.hasClassName && testNode.hasClassName('inlineIsDeletedRecord')) {
							return result;
						}
						testNode = $(testNode.parentNode);
					}

					var value = form.value;
					if (!value || elementData.additional && elementData.additional.isPositiveNumber && (isNaN(value) || Number(value) <= 0)) {
						result = 0;
						if (autoNotify) {
							TBE_EDITOR.setImage('req_'+elementData.requiredImg, TBE_EDITOR.images.req);
							TBE_EDITOR.notifyNested(elementName, false);
						}
					}
				}
			} else if (type == 'range' && elementData.range) {
				var numberOfElements = 0;
				form = document[TBE_EDITOR.formname][elementName+'_list'];
				if (!form) {
						// special treatment for IRRE fields:
					var tempObj = document[TBE_EDITOR.formname][elementName];
					if (tempObj && (Element.hasClassName(tempObj, 'inlineRecord') || Element.hasClassName(tempObj, 'treeRecord'))) {
						form = tempObj.value ? tempObj.value.split(',') : [];
						numberOfElements = form.length;
					}

				} else {
						// special treatment for file uploads
					var tempObj = document[TBE_EDITOR.formname][elementName.replace(/^data/, 'data_files')];
					numberOfElements = form.length;

					if (tempObj && tempObj.type == 'file' && tempObj.value) {
						numberOfElements++; // Add new uploaded file to the number of elements
					}
				}

				if (!TBE_EDITOR.checkRange(numberOfElements, elementData.range[0], elementData.range[1])) {
					result = 0;
					if (autoNotify) {
						TBE_EDITOR.setImage('req_'+elementData.rangeImg, TBE_EDITOR.images.req);
						TBE_EDITOR.notifyNested(elementName, false);
					}
				}
			}
		}

		return result;
	},
	// Notify tabs and inline levels with nested requiredFields/requiredElements:
	notifyNested: function(elementName, resolved) {
		if (TBE_EDITOR.nested.field[elementName]) {
			var i, nested, element, fieldLevels, fieldLevelIdent, nestedLevelType, nestedLevelName;
			fieldLevels = TBE_EDITOR.nested.field[elementName].level;
			TBE_EDITOR.nestedCache = {};

			for (i=fieldLevels.length-1; i>=0; i--) {
				nestedLevelType = fieldLevels[i][0];
				nestedLevelName = fieldLevels[i][1];
				fieldLevelIdent = TBE_EDITOR.getNestedLevelIdent(fieldLevels[i]);
					// Construct the CSS id strings of the image/icon tags showing the notification:
				if (nestedLevelType == 'tab') {
					element = nestedLevelName+'-REQ';
				} else if (nestedLevelType == 'inline') {
					element = nestedLevelName+'_req';
				} else {
					continue;
				}
					// Set the icons:
				if (resolved) {
					if (TBE_EDITOR.checkNested(fieldLevelIdent)) {
						TBE_EDITOR.setImage(element, TBE_EDITOR.images.clear);
					} else {
						break;
					}
				} else {
					if (TBE_EDITOR.nested.level && TBE_EDITOR.nested.level[fieldLevelIdent]) {
						TBE_EDITOR.nested.level[fieldLevelIdent].clean = false;
					}
					TBE_EDITOR.setImage(element, TBE_EDITOR.images.req);
				}
			}
		}
	},
	// Check all the input fields on a given level of nesting - if only on is unfilled, the whole level is marked as required:
	checkNested: function(nestedLevelIdent) {
		var nestedLevel, isClean;
		if (nestedLevelIdent && TBE_EDITOR.nested.level && TBE_EDITOR.nested.level[nestedLevelIdent]) {
			nestedLevel = TBE_EDITOR.nested.level[nestedLevelIdent];
			if (!nestedLevel.clean) {
				if (typeof nestedLevel.item == 'object') {
					$H(nestedLevel.item).each(
						function(pair) {
							if (isClean || typeof isClean == 'undefined') {
								isClean = (
									TBE_EDITOR.checkElements('required', false, pair.value[0], pair.value[1]) &&
									TBE_EDITOR.checkElements('range', false, pair.value[0], pair.value[1])
								);
							}
						}
					);
					if (typeof isClean != 'undefined' && !isClean) {
						return false;
					}
				}
				if (typeof nestedLevel.sub == 'object') {
					$H(nestedLevel.sub).each(
						function(pair) {
							if (isClean || typeof isClean == 'undefined') {
								isClean = TBE_EDITOR.checkNested(pair.key);
							}
						}
					);
					if (typeof isClean != 'undefined' && !isClean) {
						return false;
					}
				}
					// Store the result, that this level (the fields on this and the sub levels) are clean:
				nestedLevel.clean = true;
			}
		}
		return true;
	},
	getNestedLevelIdent: function(level) {
		return level.join('::');
	},
	addActionChecks: function(type, checks) {
		TBE_EDITOR.actionChecks[type].push(checks);
	},

	// Regular TCEforms JSbottom scripts:
	loginRefreshed: function() {
		var date = new Date();
		TBE_EDITOR.loadTime = Math.floor(date.getTime()/1000);
		if (top.busy && top.busy.loginRefreshed) { top.busy.loginRefreshed(); }
	},
	checkLoginTimeout: function() {
		var date = new Date();
		var theTime = Math.floor(date.getTime()/1000);
		if (theTime > TBE_EDITOR.loadTime+TBE_EDITOR.auth_timeout_field-10) {
			return true;
		}
	},
	fieldChanged_fName: function(fName,el) {
		var idx=2+TBE_EDITOR.prependFormFieldNamesCnt;
		var table = TBE_EDITOR.split(fName, "[", idx);
		var uid = TBE_EDITOR.split(fName, "[", idx+1);
		var field = TBE_EDITOR.split(fName, "[", idx+2);

		table = table.substr(0,table.length-1);
		uid = uid.substr(0,uid.length-1);
		field = field.substr(0,field.length-1);
		TBE_EDITOR.fieldChanged(table,uid,field,el);
	},
	fieldChanged: function(table,uid,field,el) {
		var theField = TBE_EDITOR.prependFormFieldNames+'['+table+']['+uid+']['+field+']';
		var theRecord = TBE_EDITOR.prependFormFieldNames+'['+table+']['+uid+']';
		TBE_EDITOR.isChanged = 1;

			// Set change image:
		var imgObjName = "cm_"+table+"_"+uid+"_"+field;
		TBE_EDITOR.setImage(imgObjName,TBE_EDITOR.images.cm);

			// Set change image
		if (document[TBE_EDITOR.formname][theField] && document[TBE_EDITOR.formname][theField].type=="select-one" && document[TBE_EDITOR.formname][theField+"_selIconVal"])	{
			var imgObjName = "selIcon_"+table+"_"+uid+"_"+field+"_";
			TBE_EDITOR.setImage(imgObjName+document[TBE_EDITOR.formname][theField+"_selIconVal"].value,TBE_EDITOR.images.clear);
			document[TBE_EDITOR.formname][theField+"_selIconVal"].value = document[TBE_EDITOR.formname][theField].selectedIndex;
			TBE_EDITOR.setImage(imgObjName+document[TBE_EDITOR.formname][theField+"_selIconVal"].value,TBE_EDITOR.images.sel);
		}

			// Set required flag:
		var imgReqObjName = "req_"+table+"_"+uid+"_"+field;
		if (TBE_EDITOR.getElement(theRecord,field,'required') && document[TBE_EDITOR.formname][theField])	{
			if (TBE_EDITOR.checkElements('required', false, theRecord, field)) {
				TBE_EDITOR.setImage(imgReqObjName,TBE_EDITOR.images.clear);
				TBE_EDITOR.notifyNested(theField, true);
			} else {
				TBE_EDITOR.setImage(imgReqObjName,TBE_EDITOR.images.req);
				TBE_EDITOR.notifyNested(theField, false);
			}
		}
		if (TBE_EDITOR.getElement(theRecord,field,'range') && document[TBE_EDITOR.formname][theField]) {
			if (TBE_EDITOR.checkElements('range', false, theRecord, field))	{
				TBE_EDITOR.setImage(imgReqObjName,TBE_EDITOR.images.clear);
				TBE_EDITOR.notifyNested(theField, true);
			} else {
				TBE_EDITOR.setImage(imgReqObjName,TBE_EDITOR.images.req);
				TBE_EDITOR.notifyNested(theField, false);
			}
		}

		if (TBE_EDITOR.isPalettedoc) { TBE_EDITOR.setOriginalFormFieldValue(theField) };
	},
	setOriginalFormFieldValue: function(theField) {
		if (TBE_EDITOR.isPalettedoc && (TBE_EDITOR.isPalettedoc).document[TBE_EDITOR.formname] && (TBE_EDITOR.isPalettedoc).document[TBE_EDITOR.formname][theField]) {
			(TBE_EDITOR.isPalettedoc).document[TBE_EDITOR.formname][theField].value = document[TBE_EDITOR.formname][theField].value;
		}
	},
	isFormChanged: function(noAlert) {
		if (TBE_EDITOR.isChanged && !noAlert && confirm(TBE_EDITOR.labels.fieldsChanged)) {
			return 0;
		}
		return TBE_EDITOR.isChanged;
	},
	checkAndDoSubmit: function(sendAlert) {
		if (TBE_EDITOR.checkSubmit(sendAlert)) { TBE_EDITOR.submitForm(); }
	},
	/**
	 * Checks if the form can be submitted according to any possible restrains like required values, item numbers etc.
	 * Returns true if the form can be submitted, otherwise false (and might issue an alert message, if "sendAlert" is 1)
	 * If "sendAlert" is false, no error message will be shown upon false return value (if "1" then it will).
	 * If "sendAlert" is "-1" then the function will ALWAYS return true regardless of constraints (except if login has expired) - this is used in the case where a form field change requests a form update and where it is accepted that constraints are not observed (form layout might change so other fields are shown...)
	 */
	checkSubmit: function(sendAlert) {
		var funcIndex, funcMax, funcRes;
		var OK=1;

		// $this->additionalJS_submit:
		if (TBE_EDITOR.actionChecks && TBE_EDITOR.actionChecks.submit) {
			for (funcIndex=0, funcMax=TBE_EDITOR.actionChecks.submit.length; funcIndex<funcMax; funcIndex++) {
				try {
					eval(TBE_EDITOR.actionChecks.submit[funcIndex]);
				} catch(error) {}
			}
		}

		if(!OK)	{
			if (!confirm(unescape("SYSTEM ERROR: One or more Rich Text Editors on the page could not be contacted. This IS an error, although it should not be regular.\nYou can save the form now by pressing OK, but you will loose the Rich Text Editor content if you do.\n\nPlease report the error to your administrator if it persists.")))	{
				return false;
			} else {
				OK = 1;
			}
		}
		// $reqLinesCheck
		if (!TBE_EDITOR.checkElements('required', false)) { OK = 0; }
		// $reqRangeCheck
		if (!TBE_EDITOR.checkElements('range', false)) { OK = 0; }

		if (OK || sendAlert==-1) {
			return true;
		} else {
			if(sendAlert) alert(TBE_EDITOR.labels.fieldsMissing);
			return false;
		}
	},
	checkRange: function(numberOfElements, lower, upper) {
			// for backwards compatibility, check if we're dealing with an element as first parameter
		if(typeof numberOfElements == 'object') {
			numberOfElements = numberOfElements.length;
		}

		if (numberOfElements >= lower && numberOfElements <= upper) {
			return true;
		} else {
			return false;
		}
	},
	initRequired: function() {
		// $reqLinesCheck
		TBE_EDITOR.checkElements('required', true);

		// $reqRangeCheck
		TBE_EDITOR.checkElements('range', true);
	},
	setImage: function(name,image) {
		var object;
		if (document[name]) {
			object = document[name];
		} else if (document.getElementById(name)) {
			object = document.getElementById(name);
		}
		if (object) {
			if (typeof image == 'object') {
				document[name].src = image.src;
			} else {
				document[name].src = eval(image+'.src');
			}
		}
	},
	submitForm: function() {
		if (TBE_EDITOR.doSaveFieldName) {
			document[TBE_EDITOR.formname][TBE_EDITOR.doSaveFieldName].value=1;
		}
		document[TBE_EDITOR.formname].submit();
	},
	split: function(theStr1, delim, index) {
		var theStr = ""+theStr1;
		var lengthOfDelim = delim.length;
		sPos = -lengthOfDelim;
		if (index<1) {index=1;}
		for (var a=1; a<index; a++)	{
			sPos = theStr.indexOf(delim, sPos+lengthOfDelim);
			if (sPos==-1) { return null; }
		}
		ePos = theStr.indexOf(delim, sPos+lengthOfDelim);
		if(ePos == -1) { ePos = theStr.length; }
		return (theStr.substring(sPos+lengthOfDelim,ePos));
	},
	curSelected: function(theField)	{
		var fObjSel = document[TBE_EDITOR.formname][theField];
		var retVal="";
		if (fObjSel)	{
			if (fObjSel.type=='select-multiple' || fObjSel.type=='select-one')	{
				var l=fObjSel.length;
				for (a=0;a<l;a++)	{
					if (fObjSel.options[a].selected==1)	{
						retVal+=fObjSel.options[a].value+",";
					}
				}
			}
		}
		return retVal;
	},
	rawurlencode: function(str,maxlen) {
		var output = str;
		if (maxlen)	output = output.substr(0,200);
		output = encodeURIComponent(output);
		return output;
	},
	str_replace: function(match,replace,string) {
		var input = ''+string;
		var matchStr = ''+match;
		if (!matchStr) { return string; }
		var output = '';
		var pointer=0;
		var pos = input.indexOf(matchStr);
		while (pos!=-1)	{
			output+=''+input.substr(pointer, pos-pointer)+replace;
			pointer=pos+matchStr.length;
			pos = input.indexOf(match,pos+1);
		}
		output+=''+input.substr(pointer);
		return output;
	},
	toggle_display_states: function(id, state_1, state_2) {
		var node = document.getElementById(id);
		if (node) {
			switch (node.style.display) {
				case state_1:
					node.style.display = state_2;
					break;
				case state_2:
					node.style.display = state_1;
					break;
			}
		}
		return false;
	},

	/**
	 * Determines backend path to be used for e.g. ajax.php
	 * @return string
	 */
	getBackendPath: function() {
		var backendPath = '';
		if (TYPO3) {
			if (TYPO3.configuration && TYPO3.configuration.PATH_typo3) {
				backendPath = TYPO3.configuration.PATH_typo3;
			} else if (TYPO3.settings && TYPO3.settings.PATH_typo3) {
				backendPath = TYPO3.settings.PATH_typo3;
			}
		}
		return backendPath;
	}
};

function typoSetup	() {
	this.passwordDummy = '********';
	this.decimalSign = '.';
}
var TS = new typoSetup();
var evalFunc = new evalFunc();

// backwards compatibility for extensions
var TBE_EDITOR_loginRefreshed = TBE_EDITOR.loginRefreshed;
var TBE_EDITOR_checkLoginTimeout = TBE_EDITOR.checkLoginTimeout;
var TBE_EDITOR_setHiddenContent = TBE_EDITOR.setHiddenContent;
var TBE_EDITOR_isChanged = TBE_EDITOR.isChanged;
var TBE_EDITOR_fieldChanged_fName = TBE_EDITOR.fieldChanged_fName;
var TBE_EDITOR_fieldChanged = TBE_EDITOR.fieldChanged;
var TBE_EDITOR_setOriginalFormFieldValue = TBE_EDITOR.setOriginalFormFieldValue;
var TBE_EDITOR_isFormChanged = TBE_EDITOR.isFormChanged;
var TBE_EDITOR_checkAndDoSubmit = TBE_EDITOR.checkAndDoSubmit;
var TBE_EDITOR_checkSubmit = TBE_EDITOR.checkSubmit;
var TBE_EDITOR_checkRange = TBE_EDITOR.checkRange;
var TBE_EDITOR_initRequired = TBE_EDITOR.initRequired;
var TBE_EDITOR_setImage = TBE_EDITOR.setImage;
var TBE_EDITOR_submitForm = TBE_EDITOR.submitForm;
var TBE_EDITOR_split = TBE_EDITOR.split;
var TBE_EDITOR_curSelected = TBE_EDITOR.curSelected;
var TBE_EDITOR_rawurlencode = TBE_EDITOR.rawurlencode;
var TBE_EDITOR_str_replace = TBE_EDITOR.str_replace;


var typo3form = {
	fieldSet: function(theField, evallist, is_in, checkbox, checkboxValue) {
		if (document[TBE_EDITOR.formname][theField])	{
			var theFObj = new evalFunc_dummy (evallist,is_in, checkbox, checkboxValue);
			var theValue = document[TBE_EDITOR.formname][theField].value;
			if (checkbox && theValue==checkboxValue)	{
				document[TBE_EDITOR.formname][theField+"_hr"].value="";
				if (document[TBE_EDITOR.formname][theField+"_cb"])	document[TBE_EDITOR.formname][theField+"_cb"].checked = "";
			} else {
				document[TBE_EDITOR.formname][theField+"_hr"].value = evalFunc.outputObjValue(theFObj, theValue);
				if (document[TBE_EDITOR.formname][theField+"_cb"])	document[TBE_EDITOR.formname][theField+"_cb"].checked = "on";
			}
		}
	},
	fieldGet: function(theField, evallist, is_in, checkbox, checkboxValue, checkbox_off, checkSetValue) {
		if (document[TBE_EDITOR.formname][theField])	{
			var theFObj = new evalFunc_dummy (evallist,is_in, checkbox, checkboxValue);
			if (checkbox_off)	{
				if (document[TBE_EDITOR.formname][theField+"_cb"].checked)	{
					var split = evallist.split(',');
					for (var i = 0; split.length > i; i++) {
						var el = split[i].replace(/ /g, '');
						if (el == 'datetime' || el == 'date')	{
							var now = new Date();
							checkSetValue = Date.parse(now)/1000 - now.getTimezoneOffset()*60;
							break;
						} else if (el == 'time' || el == 'timesec')	{
							checkSetValue = evalFunc_getTimeSecs(new Date());
							break;
						}
					}
					document[TBE_EDITOR.formname][theField].value=checkSetValue;
				} else {
					document[TBE_EDITOR.formname][theField].value=checkboxValue;
				}
			}else{
				document[TBE_EDITOR.formname][theField].value = evalFunc.evalObjValue(theFObj, document[TBE_EDITOR.formname][theField+"_hr"].value);
			}
			typo3form.fieldSet(theField, evallist, is_in, checkbox, checkboxValue);
		}
	}
};

// backwards compatibility for extensions
var typo3FormFieldSet = typo3form.fieldSet;
var typo3FormFieldGet = typo3form.fieldGet;

Ext.ns('Ext.ux', 'Ext.ux.menu', 'Ext.ux.form');

Ext.ux.DateTimePicker = Ext.extend(Ext.DatePicker, {

	timeFormat: 'H:i',

	initComponent: function() {
		var t = this.timeFormat.split(':');
		this.hourFormat = t[0];
		this.minuteFormat = t[1];

		Ext.ux.DateTimePicker.superclass.initComponent.call(this);
	},

	/**
	 * Replaces any existing {@link #minDate} with the new value and refreshes the DatePicker.
	 * @param {Date} value The minimum date that can be selected
	 */
	setMinTime: function(dt) {
		this.minTime = dt;
		this.update(this.value, true);
	},

	/**
	 * Replaces any existing {@link #maxDate} with the new value and refreshes the DatePicker.
	 * @param {Date} value The maximum date that can be selected
	 */
	setMaxTime: function(dt) {
		this.maxTime = dt;
		this.update(this.value, true);
	},

	/**
	 * Returns the value of the date/time field
	 */
	getValue: function() {
		return this.addTimeToValue(this.value);
	},

	/**
	 * Sets the value of the date/time field
	 * @param {Date} value The date to set
	 */
	setValue: function(value) {
		var old = this.value;
		this.value = value.clearTime(true);
		if (this.el) {
			this.update(this.value);
		}
		this.hourField.setValue(value.format(this.hourFormat));
		this.minuteField.setValue(value.format(this.minuteFormat));
	},

	/**
	 * Sets the value of the time field
	 * @param {Date} value The date to set
	 */
	setTime: function(value) {
		this.hourField.setValue(value.format(this.hourFormat));
		this.minuteField.setValue(value.format(this.minuteFormat));
	},

	/**
	 * Updates the date value with the time entered
	 * @param {Date} value The date to which time should be added
	 */
	addTimeToValue: function(date) {
		return date.clearTime().add(Date.HOUR, this.hourField.getValue()).add(Date.MINUTE, this.minuteField.getValue());
	},

	onRender: function(container, position) {
		var m = [
			'<table cellspacing="0">',
			'<tr><td class="x-date-left"><a href="#" title="',
			this.prevText ,
			'">&#160;</a></td><td class="x-date-middle" align="center"></td><td class="x-date-right"><a href="#" title="',
			this.nextText ,
			'">&#160;</a></td></tr>',
			'<tr><td colspan="3"><table class="x-date-inner" cellspacing="0"><thead><tr>'
		];
		var dn = this.dayNames;
		for (var i = 0; i < 7; i++) {
			var d = this.startDay + i;
			if (d > 6) {
				d = d - 7;
			}
			m.push('<th><span>', dn[d].substr(0, 1), '</span></th>');
		}
		m[m.length] = "</tr></thead><tbody><tr>";
		for (var i = 0; i < 42; i++) {
			if (i % 7 == 0 && i != 0) {
				m[m.length] = "</tr><tr>";
			}
			m[m.length] = '<td><a href="#" hidefocus="on" class="x-date-date" tabIndex="1"><em><span></span></em></a></td>';
		}
		m.push('</tr></tbody></table></td></tr>',
			this.showToday ? '<tr><td colspan="3" class="x-date-bottom" align="center"></td></tr>' : '',
			'</table><div class="x-date-mp"></div>'
		);

		var el = document.createElement("div");
		el.className = "x-date-picker";
		el.innerHTML = m.join("");

		container.dom.insertBefore(el, position);

		this.el = Ext.get(el);
		this.eventEl = Ext.get(el.firstChild);

		new Ext.util.ClickRepeater(this.el.child("td.x-date-left a"), {
			handler: this.showPrevMonth,
			scope: this,
			preventDefault:true,
			stopDefault:true
		});

		new Ext.util.ClickRepeater(this.el.child("td.x-date-right a"), {
			handler: this.showNextMonth,
			scope: this,
			preventDefault:true,
			stopDefault:true
		});

		this.mon(this.eventEl, "mousewheel", this.handleMouseWheel, this);

		this.monthPicker = this.el.down('div.x-date-mp');
		this.monthPicker.enableDisplayMode('block');

		var kn = new Ext.KeyNav(this.eventEl, {
			"left": function(e) {
				e.ctrlKey ?
					this.showPrevMonth() :
					this.update(this.activeDate.add("d", -1));
			},

			"right": function(e) {
				e.ctrlKey ?
					this.showNextMonth() :
					this.update(this.activeDate.add("d", 1));
			},

			"up": function(e) {
				e.ctrlKey ?
					this.showNextYear() :
					this.update(this.activeDate.add("d", -7));
			},

			"down": function(e) {
				e.ctrlKey ?
					this.showPrevYear() :
					this.update(this.activeDate.add("d", 7));
			},

			"pageUp": function(e) {
				this.showNextMonth();
			},

			"pageDown": function(e) {
				this.showPrevMonth();
			},

			"enter": function(e) {
				e.stopPropagation();
				this.fireEvent("select", this, this.value);
				return true;
			},

			scope : this
		});

		this.mon(this.eventEl, "click", this.handleDateClick, this, {delegate: "a.x-date-date"});

		this.el.select("table.x-date-inner").unselectable();
		this.cells = this.el.select("table.x-date-inner tbody td");
		this.textNodes = this.el.query("table.x-date-inner tbody span");

		this.mbtn = new Ext.Button({
			text: "&#160;",
			tooltip: this.monthYearText,
			renderTo: this.el.child("td.x-date-middle", true)
		});

		this.mon(this.mbtn, 'click', this.showMonthPicker, this);
		this.mbtn.el.child('em').addClass("x-btn-arrow");

		if (this.showToday) {
			this.todayKeyListener = this.eventEl.addKeyListener(Ext.EventObject.SPACE, this.selectToday, this);
			var today = (new Date()).dateFormat(this.format);
			this.todayBtn = new Ext.Button({
				text: String.format(this.todayText, today),
				tooltip: String.format(this.todayTip, today),
				handler: this.selectToday,
				scope: this
			});
		}

		this.formPanel = new Ext.form.FormPanel({
			layout: 'column',
			renderTo: this.el.child("td.x-date-bottom", true),
			baseCls: 'x-plain',
			hideBorders: true,
			labelAlign: 'left',
			labelWidth: 10,
			forceLayout: true,
			items: [
				{
					columnWidth: .4,
					layout: 'form',
					baseCls: 'x-plain',
					items: [
						{
							xtype: 'textfield',
							id: this.getId() + '_hour',
							maxLength: 2,
							fieldLabel: '',
							labelWidth: 30,
							width: 30,
							minValue: 0,
							maxValue: 24,
							allowBlank: false,
							labelSeparator: '',
							tabIndex: 1,
							maskRe: /[0-9]/
						}
					]
				},
				{
					columnWidth: .3,
					layout: 'form',
					baseCls: 'x-plain',
					items: [
						{
							xtype: 'textfield',
							id:	this.getId() + '_minute',
							maxLength: 2,
							fieldLabel: ':',
							labelWidth: 10,
							width: 30,
							minValue: 0,
							maxValue: 59,
							allowBlank: false,
							labelSeparator: '',
							tabIndex: 2,
							maskRe: /[0-9]/
						}
					]
				},
				{
					columnWidth: .3,
					layout: 'form',
					baseCls: 'x-plain',
					items: [this.todayBtn]
				}
			]
		});

		this.hourField = Ext.getCmp(this.getId() + '_hour');
		this.minuteField = Ext.getCmp(this.getId() + '_minute');

		this.hourField.on('blur', function(field) {
			var old = field.value;
			var h = parseInt(field.getValue());
			if (h > 23) {
				field.setValue(old);
			}
		});

		this.minuteField.on('blur', function(field) {
			var old = field.value;
			var h = parseInt(field.getValue());
			if (h > 59) {
				field.setValue(old);
			}
		});

		if (Ext.isIE) {
			this.el.repaint();
		}
		this.update(this.value);
	},

	// private
	handleDateClick : function(e, t) {
		e.stopEvent();
		if (t.dateValue && !Ext.fly(t.parentNode).hasClass("x-date-disabled")) {
			this.setValue(this.addTimeToValue(new Date(t.dateValue)));
			this.fireEvent("select", this, this.value);
		}
	},

	selectToday : function() {
		if (this.todayBtn && !this.todayBtn.disabled) {
			this.setValue(new Date());
			this.fireEvent("select", this, this.value);
		}
	},

	update : function(date, forceRefresh) {
		Ext.ux.DateTimePicker.superclass.update.call(this, date, forceRefresh);

		if (this.showToday) {
			this.setTime(new Date());
		}
	}
});
Ext.reg('datetimepicker', Ext.ux.DateTimePicker);


Ext.ux.menu.DateTimeMenu = Ext.extend(Ext.menu.Menu, {
	enableScrolling : false,
	hideOnClick : true,
	cls: 'x-date-menu x-datetime-menu',
	initComponent : function() {

		Ext.apply(this, {
			plain: true,
			showSeparator: false,
			items: this.picker = new Ext.ux.DateTimePicker(Ext.apply({
				internalRender: this.strict || !Ext.isIE,
				ctCls: 'x-menu-datetime-item x-menu-date-item'
			}, this.initialConfig))
		});
		this.picker.purgeListeners();

		Ext.ux.menu.DateTimeMenu.superclass.initComponent.call(this);
		this.relayEvents(this.picker, ['select']);
		this.on('select', this.menuHide, this);
		if (this.handler) {
			this.on('select', this.handler, this.scope || this)
		}
	},
	menuHide: function() {
		if (this.hideOnClick) {
			this.hide(true);
		}
	}
});
Ext.reg('datetimemenu', Ext.ux.menu.DateTimeMenu);
/***************************************************************
 * extJS for TCEforms
 *
 * Copyright notice
 *
 * (c) 2009-2011 Steffen Kamper <info@sk-typo3.de>
 * All rights reserved
 *
 * This script is part of the TYPO3 project. The TYPO3 project is
 * free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * The GNU General Public License can be found at
 * http://www.gnu.org/copyleft/gpl.html.
 *
 * This script is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

Ext.ns('TYPO3');

	// class to manipulate TCEFORMS
TYPO3.TCEFORMS = {

	init: function() {
		Ext.QuickTips.init();

		this.update();
	},

	update: function() {
		this.convertDateFieldsToDatePicker();
		this.convertTextareasResizable();
	},

	convertDateFieldsToDatePicker: function() {
		var dateFields = Ext.select("input[id^=tceforms-date]"), minDate, maxDate, lowerMatch, upperMatch;
		dateFields.each(function(element) {
			var index = element.dom.id.match(/tceforms-datefield-/) ? 0 : 1;
			var format = TYPO3.settings.datePickerUSmode ? TYPO3.settings.dateFormatUS : TYPO3.settings.dateFormat;
			var datepicker = element.next('span'), menu;

			// check for daterange
			var lowerMatch = element.dom.className.match(/lower-(\d+)\b/);
			minDate = Ext.isArray(lowerMatch) ? new Date(lowerMatch[1] * 1000) : null;
			var upperMatch = element.dom.className.match(/upper-(\d+)\b/);
			maxDate = Ext.isArray(upperMatch) ? new Date(upperMatch[1] * 1000) : null;

			if (index === 0) {
				menu = new Ext.menu.DateMenu({
					id: 'p' + element.dom.id,
					format: format[index],
					value: Date.parseDate(element.dom.value, format[index]),
					minDate: minDate,
					maxDate: maxDate,
					handler: function(picker, date){
						var relElement = Ext.getDom(picker.ownerCt.id.substring(1));
						relElement.value = date.format(format[index]);
						if (Ext.isFunction(relElement.onchange)) {
							relElement.onchange.call(relElement);
						}
					},
					listeners: {
						beforeshow: function(obj) {
							var relElement = Ext.getDom(obj.picker.ownerCt.id.substring(1));
							if (relElement.value) {
								obj.picker.setValue(Date.parseDate(relElement.value, format[index]));
							}
						}
					}
				});
			} else {
				menu = new Ext.ux.menu.DateTimeMenu({
					id: 'p' + element.dom.id,
					format: format[index],
					value: Date.parseDate(element.dom.value, format[index]),
					minDate: minDate,
					maxDate: maxDate,
					listeners: {
						beforeshow: function(obj) {
							var relElement = Ext.getDom(obj.picker.ownerCt.id.substring(1));
							if (relElement.value) {
								obj.picker.setValue(Date.parseDate(relElement.value, format[index]));
							}
						},
						select: function(picker) {
							var relElement = Ext.getDom(picker.ownerCt.id.substring(1));
							relElement.value = picker.getValue().format(format[index]);
							if (Ext.isFunction(relElement.onchange)) {
								relElement.onchange.call(relElement);
							}
						}
					}
				});
			}

			datepicker.removeAllListeners();
			datepicker.on('click', function(){
				menu.show(datepicker);
			});
		});
	},

	convertTextareasResizable: function() {
		var textAreas = Ext.select("textarea[id^=tceforms-textarea-]");
		textAreas.each(function(element) {
			if (TYPO3.settings.textareaFlexible) {
				var elasticTextarea = new Ext.ux.elasticTextArea().applyTo(element.dom.id, {
					minHeight: 50,
					maxHeight: TYPO3.settings.textareaMaxHeight
				});
			}
			if (TYPO3.settings.textareaResize) {
				element.addClass('resizable');
				var dwrapped = new Ext.Resizable(element.dom.id, {
					minWidth:  300,
					minHeight: 50,
					dynamic:   true
				});
			}
		});
	}

}
Ext.onReady(TYPO3.TCEFORMS.init, TYPO3.TCEFORMS);

	// Fix for slider TCA control in IE9
Ext.override(Ext.dd.DragTracker, {
	onMouseMove:function (e, target) {
		var isIE9 = Ext.isIE && (/msie 9/.test(navigator.userAgent.toLowerCase())) && document.documentMode != 6;
		if (this.active && Ext.isIE && !isIE9 && !e.browserEvent.button) {
			e.preventDefault();
			this.onMouseUp(e);
			return;
		}
		e.preventDefault();
		var xy = e.getXY(), s = this.startXY;
		this.lastXY = xy;
		if (!this.active) {
			if (Math.abs(s[0] - xy[0]) > this.tolerance || Math.abs(s[1] - xy[1]) > this.tolerance) {
				this.triggerStart(e);
			} else {
				return;
			}
		}
		this.fireEvent('mousemove', this, e);
		this.onDrag(e);
		this.fireEvent('drag', this, e);
	}
});
/*
 * This code has been copied from Project_CMS
 * Copyright (c) 2005 by Phillip Berndt (www.pberndt.com)
 *
 * Extended Textarea for IE and Firefox browsers
 * Features:
 *  - Possibility to place tabs in <textarea> elements using a simply <TAB> key
 *  - Auto-indenting of new lines
 *
 * License: GNU General Public License
 */

function checkBrowser()	{
	browserName = navigator.appName;
	browserVer = parseInt(navigator.appVersion);

	ok=false;
	if (browserName == "Microsoft Internet Explorer" && browserVer >= 4)	ok=true;
	else if (browserName == "Netscape" && browserVer >= 3)	ok=true;

	return ok;
}

	// Automatically change all textarea elements
function changeTextareaElements()	{
	if(!checkBrowser()) return false;	// Stop unless we're using IE or Netscape (includes Mozilla family)

	document.textAreas = document.getElementsByTagName("textarea");

	for(i=0; i<document.textAreas.length; i++)	{
			// Only change if the class parameter contains "enable-tab"
		if(document.textAreas[i].className && document.textAreas[i].className.search(/(^| )enable-tab( |$)/) != -1)	{
			document.textAreas[i].textAreaID = i;
			makeAdvancedTextArea(document.textAreas[i]);
		}
	}
}

	// Wait until the document is completely loaded.
	// Set a timeout instead of using the onLoad() event because it could be used by something else already.
window.setTimeout("changeTextareaElements();", 200);

	// Turn textarea elements into "better" ones. Actually this is just adding some lines of JavaScript...
function makeAdvancedTextArea(textArea)	{
	if(textArea.tagName.toLowerCase() != "textarea") return false;

		// On attempt to leave the element:
		// Do not leave if this.dontLeave is true
	textArea.onblur = function(e)	{
		if(!this.dontLeave) return;
		this.dontLeave = null;
		window.setTimeout("document.textAreas[" + this.textAreaID + "].restoreFocus()", 1);
		return false;
	}

		// Set the focus back to the element and move the cursor to the correct position.
	textArea.restoreFocus = function()	{
		this.focus();

		if(this.caretPos)	{
			this.caretPos.collapse(false);
			this.caretPos.select();
		}
	}

		// Determine the current cursor position
	textArea.getCursorPos = function()	{
		if(this.selectionStart)	{
			currPos = this.selectionStart;
		} else if(this.caretPos)	{	// This is very tricky in IE :-(
			oldText = this.caretPos.text;
			finder = "--getcurrpos" + Math.round(Math.random() * 10000) + "--";
			this.caretPos.text += finder;
			currPos = this.value.indexOf(finder);

			this.caretPos.moveStart('character', -finder.length);
			this.caretPos.text = "";

			this.caretPos.scrollIntoView(true);
		} else return;

		return currPos;
	}

		// On tab, insert a tabulator. Otherwise, check if a slash (/) was pressed.
	textArea.onkeydown = function(e)	{
		if(this.selectionStart == null &! this.createTextRange) return;
		if(!e) e = window.event;

			// Tabulator
		if(e.keyCode == 9)	{
			this.dontLeave = true;
			this.textInsert(String.fromCharCode(9));
		}

			// Newline
		if(e.keyCode == 13)	{
				// Get the cursor position
			currPos = this.getCursorPos();

				// Search the last line
			lastLine = "";
			for(i=currPos-1;i>=0;i--)	{
				if(this.value.substring(i, i + 1) == '\n') break;
			}
			lastLine = this.value.substring(i + 1, currPos);

				// Search for whitespaces in the current line
			whiteSpace = "";
			for(i=0;i<lastLine.length;i++)	{
				if(lastLine.substring(i, i + 1) == '\t') whiteSpace += "\t";
				else if(lastLine.substring(i, i + 1) == ' ') whiteSpace += " ";
				else break;
			}

				// Another ugly IE hack
			if(navigator.appVersion.match(/MSIE/))	{
				whiteSpace = "\\n" + whiteSpace;
			}

				// Insert whitespaces
			window.setTimeout("document.textAreas["+this.textAreaID+"].textInsert(\""+whiteSpace+"\");", 1);
		}
	}

		// Save the current cursor position in IE
	textArea.onkeyup = textArea.onclick = textArea.onselect = function(e)	{
		if(this.createTextRange)	{
			this.caretPos = document.selection.createRange().duplicate();
		}
	}

		// Insert text at the current cursor position
	textArea.textInsert = function(insertText)	{
		if(this.selectionStart != null)	{
			var savedScrollTop = this.scrollTop;
			var begin = this.selectionStart;
			var end = this.selectionEnd;
			if(end > begin + 1)	{
				this.value = this.value.substr(0, begin) + insertText + this.value.substr(end);
			} else {
				this.value = this.value.substr(0, begin) + insertText + this.value.substr(begin);
			}

			this.selectionStart = begin + insertText.length;
			this.selectionEnd = begin + insertText.length;
			this.scrollTop = savedScrollTop;
		} else if(this.caretPos)	{
			this.caretPos.text = insertText;
			this.caretPos.scrollIntoView(true);
		} else {
			text.value += insertText;
		}

		this.focus();
	}
}

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010-2011 Steffen Kamper <steffen@typo3.org>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

Ext.ns('TYPO3', 'TYPO3.CSH.ExtDirect');

/**
 * Class to show tooltips for links that have the css t3-help-link
 * need the tags data-table and data-field (HTML5)
 */


TYPO3.ContextHelp = function() {

	/**
	 * Cache for CSH
	 * @type {Ext.util.MixedCollection}
	 */
	var cshHelp = new Ext.util.MixedCollection(true),
	tip;

	/**
	 * Shows the tooltip, triggered from mouseover event handler
	 *
	 */
	function showToolTipHelp() {
		var link = tip.triggerElement;
		if (!link) {
			return false;
		}
		var table = link.getAttribute('data-table');
		var field = link.getAttribute('data-field');
		var key = table + '.' + field;
		var response = cshHelp.key(key);
		tip.target = tip.triggerElement;
		if (response) {
			updateTip(response);
		} else {
				// If a table is defined, use ExtDirect call to get the tooltip's content
			if (table) {
					// Clear old tooltip contents
				updateTip({
					description: top.TYPO3.LLL.core.csh_tooltip_loading,
					cshLink: '',
					moreInfo: '',
					title: ''
				});
					// Load content
				TYPO3.CSH.ExtDirect.getTableContextHelp(table, function(response, options) {
					Ext.iterate(response, function(key, value){
						cshHelp.add(value);
						if (key === field) {
							updateTip(value);
								// Need to re-position because the height may have increased
							tip.show();
						}
					});
				}, this);

				// No table was given, use directly title and description
			} else {
				updateTip({
					description: link.getAttribute('data-description'),
					cshLink: '',
					moreInfo: '',
					title: link.getAttribute('data-title')
				});
			}
		}
	}

	/**
	 * Update tooltip message
	 *
	 * @param {Object} response
	 */
	function updateTip(response) {
		tip.body.dom.innerHTML = response.description;
		tip.cshLink = response.id;
		tip.moreInfo = response.moreInfo;
		if (tip.moreInfo) {
			tip.addClass('tipIsLinked');
		}
		tip.setTitle(response.title);
		tip.doAutoWidth();
	}


	return {
		/**
		 * Constructor
		 */
		init: function() {
			tip = new Ext.ToolTip({
				title: 'CSH', // needs a title for init because of the markup
				html: '',
					// The tooltip will appear above the label, if viewport allows
				anchor: 'bottom',
				minWidth: 160,
				maxWidth: 240,
				target: Ext.getBody(),
				delegate: 'span.t3-help-link',
				renderTo: Ext.getBody(),
				cls: 'typo3-csh-tooltip',
				shadow: false,
				dismissDelay: 0, // tooltip stays while mouse is over target
				autoHide: true,
				showDelay: 1000, // show after 1 second
				hideDelay: 300, // hide after 0.3 seconds
				closable: true,
				isMouseOver: false,
				listeners: {
					beforeshow: showToolTipHelp,
					render: function(tip) {
						tip.body.on({
							'click': {
								fn: function(event) {
									event.stopEvent();
									if (tip.moreInfo) {
										try {
											top.TYPO3.ContextHelpWindow.open(tip.cshLink);
										} catch(e) {
											// do nothing
										}
									}
									tip.hide();
								}
							}
						});
						tip.el.on({
							'mouseover': {
								fn: function() {
									if (tip.moreInfo) {
										tip.isMouseOver = true;
									}
								}
							},
							'mouseout': {
								fn: function() {
									if (tip.moreInfo) {
										tip.isMouseOver = false;
										tip.hide.defer(tip.hideDelay, tip, []);
									}
								}
							}
						});
					},
					hide: function(tip) {
						tip.setTitle('');
						tip.body.dom.innerHTML = '';
					},
					beforehide: function(tip) {
						return !tip.isMouseOver;
					},
					scope: this
				}
			});

			Ext.getBody().on({
				'keydown': {
					fn: function() {
						tip.hide();
					}
				},
				'click': {
					fn: function() {
						tip.hide();
					}
				}
			});

			/**
			 * Adds a sequence to Ext.TooltTip::showAt so as to increase vertical offset when anchor position is 'botton'
			 * This positions the tip box closer to the target element when the anchor is on the bottom side of the box
			 * When anchor position is 'top' or 'bottom', the anchor is pushed slightly to the left in order to align with the help icon, if any
			 *
			 */
			Ext.ToolTip.prototype.showAt = Ext.ToolTip.prototype.showAt.createSequence(
				function() {
					var ap = this.getAnchorPosition().charAt(0);
					if (this.anchorToTarget && !this.trackMouse) {
						switch (ap) {
							case 'b':
								var xy = this.getPosition();
								this.setPagePosition(xy[0]-10, xy[1]+5);
								break;
							case 't':
								var xy = this.getPosition();
								this.setPagePosition(xy[0]-10, xy[1]);
								break;
						}
					}
				}
			);

		},

		/**
		 * Opens the help window, triggered from click event handler
		 *
		 * @param {Event} event
		 * @param {Node} link
		 */
		openHelpWindow: function(event, link) {
			var id = link.getAttribute('data-table') + '.' + link.getAttribute('data-field');
			event.stopEvent();
			top.TYPO3.ContextHelpWindow.open(id);
		}
	}
}();

/**
 * Calls the init on Ext.onReady
 */
Ext.onReady(TYPO3.ContextHelp.init, TYPO3.ContextHelp);

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010-2011 Steffen Kamper <info@sk-typo3.de>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * Flashmessage rendered by ExtJS
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage t3lib
 */
Ext.ns('TYPO3');

/**
 * Object for named severities
 */
TYPO3.Severity = {
	notice: 0,
	information: 1,
	ok: 2,
	warning: 3,
	error: 4
};

/**
 * @class TYPO3.Flashmessage
 * Passive popup box singleton
 * @singleton
 *
 * Example (Information message):
 * TYPO3.Flashmessage.display(1, 'TYPO3 Backend - Version 4.4', 'Ready for take off', 3);
 */
TYPO3.Flashmessage = function() {
	var messageContainer;
	var severities = ['notice', 'information', 'ok', 'warning', 'error'];

	function createBox(severity, title, message) {
		return ['<div class="typo3-message message-', severity, '" style="width: 400px">',
				'<div class="t3-icon t3-icon-actions t3-icon-actions-message t3-icon-actions-message-close t3-icon-message-' + severity + '-close"></div>',
				'<div class="header-container">',
				'<div class="message-header">', title, '</div>',
				'</div>',
				'<div class="message-body">', message, '</div>',
				'</div>'].join('');
	}

	return {
		/**
		 * Shows popup
		 * @member TYPO3.Flashmessage
		 * @param int severity (0=notice, 1=information, 2=ok, 3=warning, 4=error)
		 * @param string title
		 * @param string message
		 * @param float duration in sec (default 5)
		 */
		display : function(severity, title, message, duration) {
			duration = duration || 5;
			if (!messageContainer) {
				messageContainer = Ext.DomHelper.insertFirst(document.body, {
					id   : 'msg-div',
					style: 'position:absolute;z-index:10000'
				}, true);
			}

			var box = Ext.DomHelper.append(messageContainer, {
				html: createBox(severities[severity], title, message)
			}, true);
			messageContainer.alignTo(document, 't-t');
			box.child('.t3-icon-actions-message-close').on('click',	function (e, t, o) {
				var node;
				node = Ext.get(t).findParent('div.typo3-message');
				node.hide();
				Ext.removeNode(node.dom);
			}, box);
			box.slideIn('t').pause(duration).ghost('t', {remove: true});
		}
	};
}();
