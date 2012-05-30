
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

/*
 * Ext JS Library 2.0
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 *
 * http://extjs.com/license
 *
 * MODIFIED: SGB [12.12.07]
 * Added support for a new config option, remoteDataMethod,
 * including getter and setter functions, and minor mods
 * to the beforeExpand and expandRow functions
 */

Ext.grid.RowExpander = function(config) {
	Ext.apply(this, config);
	Ext.grid.RowExpander.superclass.constructor.call(this);

	if (this.tpl) {
		if (typeof this.tpl == 'string') {
			this.tpl = new Ext.Template(this.tpl);
		}
		this.tpl.compile();
	}

	this.state = {};
	this.bodyContent = {};

	this.addEvents({
		beforeexpand : true,
		expand: true,
		beforecollapse: true,
		collapse: true
	});
};

Ext.extend(Ext.grid.RowExpander, Ext.util.Observable, {
	header: "",
	width: 20,
	sortable: false,
	fixed:true,
	dataIndex: '',
	id: 'expander',
	lazyRender : true,
	enableCaching: true,

	getRowClass : function(record, rowIndex, p, ds) {
		p.cols = p.cols-1;
		var content = this.bodyContent[record.id];
		if (!content && !this.lazyRender) {
			content = this.getBodyContent(record, rowIndex);
		}
		if (content) {
			p.body = content;
		}
		return this.state[record.id] ? 'x-grid3-row-expanded' : 'x-grid3-row-collapsed';
	},

	init : function(grid) {
		this.grid = grid;

		var view = grid.getView();
		view.getRowClass = this.getRowClass.createDelegate(this);

		view.enableRowBody = true;

		grid.on('render', function() {
			view.mainBody.on('mousedown', this.onMouseDown, this);
		}, this);

		grid.store.on('load', this.onStoreLoaded, this);
		grid.on("beforestaterestore", this.applyState, this);
		grid.on("beforestatesave", this.saveState, this);
	},

	/** @private */
	onStoreLoaded: function(store, records, options) {
		var index = -1;
		for(var key in this.state){
			if (this.state[key] === true) {
				index = store.indexOfId(key);
				if (index > -1) {
					this.expandRow(index);
				}
			}
		}
	},

	/** @private */
	applyState: function(grid, state){
		this.suspendStateStore = true;
		if(state.expander) {
			this.state = state.expander;
		}
		this.suspendStateStore = false;
	},

	/** @private */
	saveState: function(grid, state){
		return state.expander = this.state;
	},

	getBodyContent : function(record, index) {
		if (!this.enableCaching) {
			return this.tpl.apply(record.data);
		}
		var content = this.bodyContent[record.id];
		if (!content) {
			content = this.tpl.apply(record.data);
			this.bodyContent[record.id] = content;
		}
		return content;
	},
	// Setter and Getter methods for the remoteDataMethod property
	setRemoteDataMethod : function (fn) {
		this.remoteDataMethod = fn;
	},

	getRemoteDataMethod : function (record, index) {
		if (!this.remoteDataMethod) {
			return;
		}
			return this.remoteDataMethod.call(this,record,index);
	},

	onMouseDown : function(e, t) {
		if (t.className == 'x-grid3-row-expander') {
			e.stopEvent();
			var row = e.getTarget('.x-grid3-row');
			this.toggleRow(row);
		}
	},

	renderer : function(v, p, record) {
		p.cellAttr = 'rowspan="2"';
		return '<div class="x-grid3-row-expander">&#160;</div>';
	},

	beforeExpand : function(record, body, rowIndex) {
		if (this.fireEvent('beforexpand', this, record, body, rowIndex) !== false) {
			// If remoteDataMethod is defined then we'll need a div, with a unique ID,
			//  to place the content
			if (this.remoteDataMethod) {
				this.tpl = new Ext.Template("<div id=\"remData" + rowIndex + "\" class=\"rem-data-expand\"><\div>");
			}
			if (this.tpl && this.lazyRender) {
				body.innerHTML = this.getBodyContent(record, rowIndex);
			}

			return true;
		}else{
			return false;
		}
	},

	toggleRow : function(row) {
		if (typeof row == 'number') {
			row = this.grid.view.getRow(row);
		}
		this[Ext.fly(row).hasClass('x-grid3-row-collapsed') ? 'expandRow' : 'collapseRow'](row);
		this.grid.saveState();
	},

	expandRow : function(row) {
		if (typeof row == 'number') {
			row = this.grid.view.getRow(row);
		}
		var record = this.grid.store.getAt(row.rowIndex);
		var body = Ext.DomQuery.selectNode('tr:nth(2) div.x-grid3-row-body', row);
		if (this.beforeExpand(record, body, row.rowIndex)) {
			this.state[record.id] = true;
			Ext.fly(row).replaceClass('x-grid3-row-collapsed', 'x-grid3-row-expanded');
			this.grid.saveState();
		   	if (this.fireEvent('expand', this, record, body, row.rowIndex) !== false) {
				//  If the expand event is successful then get the remoteDataMethod
				this.getRemoteDataMethod(record,row.rowIndex);
			}
		}
	},

	collapseRow : function(row) {
		if (typeof row == 'number') {
			row = this.grid.view.getRow(row);
		}
		var record = this.grid.store.getAt(row.rowIndex);
		var body = Ext.fly(row).child('tr:nth(1) div.x-grid3-row-body', true);
		if (this.fireEvent('beforcollapse', this, record, body, row.rowIndex) !== false) {
			this.state[record.id] = false;
			Ext.fly(row).replaceClass('x-grid3-row-expanded', 'x-grid3-row-collapsed');
			this.grid.saveState();
			this.fireEvent('collapse', this, record, body, row.rowIndex);
		}
	}
});

/*
 * Ext JS Library 2.2.1
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 *
 * http://extjs.com/license
 */

Ext.app.SearchField = Ext.extend(Ext.form.TwinTriggerField, {
	initComponent : function() {
		Ext.app.SearchField.superclass.initComponent.call(this);
		this.on('specialkey', function(f, e) {
			if (e.getKey() == e.ENTER) {
				this.onTrigger2Click();
			}
		}, this);
	},

	validationEvent: false,
	validateOnBlur: false,
	trigger1Class: 'x-form-clear-trigger',
	trigger2Class: 'x-form-search-trigger',
	hideTrigger1: true,
	width: 180,
	hasSearch : false,
	paramName : 'filterTxt',

	onTrigger1Click : function() {
		if (this.hasSearch) {
			this.el.dom.value = '';
			var o = {start: 0};
			this.store.baseParams = this.store.baseParams || {};
			this.store.baseParams[this.paramName] = '';
			this.store.reload({params:o});
			this.triggers[0].hide();
			this.hasSearch = false;
		}
	},

	onTrigger2Click : function() {
		var v = this.getRawValue();
		if (v.length < 1) {
			this.onTrigger1Click();
			return;
		}
		var o = {start: 0};
		this.store.baseParams = this.store.baseParams || {};
		this.store.baseParams[this.paramName] = v;
		this.store.reload({params:o});
		this.hasSearch = true;
		this.triggers[0].show();
	}
});
/* plugin for resize of grid in single container */
Ext.namespace('Ext.ux.plugins');

Ext.ux.plugins.FitToParent = Ext.extend(Object, {
	constructor : function(parent) {
		this.parent = parent;
	},
	init : function(c) {
		c.on('render', function(c) {
			c.fitToElement = Ext.get(this.parent
					|| c.getPositionEl().dom.parentNode);
			if (!c.doLayout) {
				this.fitSizeToParent();
				Ext.EventManager.onWindowResize(this.fitSizeToParent, this);
			}
		}, this, {
			single : true
		});
		if (c.doLayout) {
			c.monitorResize = true;
			c.doLayout = c.doLayout.createInterceptor(this.fitSizeToParent);
		}
	},

	fitSizeToParent : function() {
			// Uses the dimension of the current viewport, but removes the document header
			// initial is the heigt of the TYPO3 Topbar which i 42. If Topbar is not rendered, set the height as default
		var documentHeaderHeight = 42 || top.TYPO3.Backend.Topbar.getHeight();
		var documentHeader = Ext.get('typo3-docheader');

		if (Ext.isObject(documentHeader)) {
				// use 5px bottom margin
			documentHeaderHeight -= documentHeader.getHeight() + 5;
		}

		if (this.heightOffset && Ext.isNumber(this.heightOffset)) {
			documentHeaderHeight -= parseInt(this.heightOffset, 10);
		}

		this.fitToElement.setHeight(
			Ext.lib.Dom.getViewportHeight() - this.fitToElement.getTop() + documentHeaderHeight
		);

		var pos = this.getPosition(true), size = this.fitToElement.getViewSize();
		this.setSize(size.width - pos[0], size.height - pos[1]);

	}
});

/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.ns('Ext.ux.menu');

/** 
 * @class Ext.ux.menu.RangeMenu
 * @extends Ext.menu.Menu
 * Custom implementation of Ext.menu.Menu that has preconfigured
 * items for gt, lt, eq.
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>    

 * </code></pre> 
 */
Ext.ux.menu.RangeMenu = Ext.extend(Ext.menu.Menu, {

	constructor : function (config) {

		Ext.ux.menu.RangeMenu.superclass.constructor.call(this, config);

		this.addEvents(
			/**
			 * @event update
			 * Fires when a filter configuration has changed
			 * @param {Ext.ux.grid.filter.Filter} this The filter object.
			 */
			'update'
		);

		this.updateTask = new Ext.util.DelayedTask(this.fireUpdate, this);

		var i, len, item, cfg, Cls;

		for (i = 0, len = this.menuItems.length; i < len; i++) {
			item = this.menuItems[i];
			if (item !== '-') {
				// defaults
				cfg = {
					itemId: 'range-' + item,
					enableKeyEvents: true,
					iconCls: this.iconCls[item] || 'no-icon',
					listeners: {
						scope: this,
						keyup: this.onInputKeyUp
					}
				};
				Ext.apply(
					cfg,
					// custom configs
					Ext.applyIf(this.fields[item] || {}, this.fieldCfg[item]),
					// configurable defaults
					this.menuItemCfgs
				);
				Cls = cfg.fieldCls || this.fieldCls;
				item = this.fields[item] = new Cls(cfg);
			}
			this.add(item);
		}
	},

	/**
	 * @private
	 * called by this.updateTask
	 */
	fireUpdate : function () {
		this.fireEvent('update', this);
	},

	/**
	 * Get and return the value of the filter.
	 * @return {String} The value of this filter
	 */
	getValue : function () {
		var result = {}, key, field;
		for (key in this.fields) {
			field = this.fields[key];
			if (field.isValid() && String(field.getValue()).length > 0) {
				result[key] = field.getValue();
			}
		}
		return result;
	},

	/**
	 * Set the value of this menu and fires the 'update' event.
	 * @param {Object} data The data to assign to this menu
	 */
	setValue : function (data) {
		var key;
		for (key in this.fields) {
			this.fields[key].setValue(data[key] !== undefined ? data[key] : '');
		}
		this.fireEvent('update', this);
	},

	/**
	 * @private
	 * Handler method called when there is a keyup event on an input
	 * item of this menu.
	 */
	onInputKeyUp : function (field, e) {
		var k = e.getKey();
		if (k == e.RETURN && field.isValid()) {
			e.stopEvent();
			this.hide(true);
			return;
		}

		if (field == this.fields.eq) {
			if (this.fields.gt) {
				this.fields.gt.setValue(null);
			}
			if (this.fields.lt) {
				this.fields.lt.setValue(null);
			}
		}
		else {
			this.fields.eq.setValue(null);
		}

		// restart the timer
		this.updateTask.delay(this.updateBuffer);
	}
});

/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.namespace('Ext.ux.menu');

/** 
 * @class Ext.ux.menu.ListMenu
 * @extends Ext.menu.Menu
 * This is a supporting class for {@link Ext.ux.grid.filter.ListFilter}.
 * Although not listed as configuration options for this class, this class
 * also accepts all configuration options from {@link Ext.ux.grid.filter.ListFilter}.
 */
Ext.ux.menu.ListMenu = Ext.extend(Ext.menu.Menu, {
	/**
	 * @cfg {String} labelField
	 * Defaults to 'text'.
	 */
	labelField :  'text',
	/**
	 * @cfg {String} paramPrefix
	 * Defaults to 'Loading...'.
	 */
	loadingText : 'Loading...',
	/**
	 * @cfg {Boolean} loadOnShow
	 * Defaults to true.
	 */
	loadOnShow : true,
	/**
	 * @cfg {Boolean} single
	 * Specify true to group all items in this list into a single-select
	 * radio button group. Defaults to false.
	 */
	single : false,

	constructor : function (cfg) {
		this.selected = [];
		this.addEvents(
			/**
			 * @event checkchange
			 * Fires when there is a change in checked items from this list
			 * @param {Object} item Ext.menu.CheckItem
			 * @param {Object} checked The checked value that was set
			 */
			'checkchange'
		);

		Ext.ux.menu.ListMenu.superclass.constructor.call(this, cfg = cfg || {});

		if(!cfg.store && cfg.options){
			var options = [];
			for(var i=0, len=cfg.options.length; i<len; i++){
				var value = cfg.options[i];
				switch(Ext.type(value)){
					case 'array':  options.push(value); break;
					case 'object': options.push([value.id, value[this.labelField]]); break;
					case 'string': options.push([value, value]); break;
				}
			}

			this.store = new Ext.data.Store({
				reader: new Ext.data.ArrayReader({id: 0}, ['id', this.labelField]),
				data:   options,
				listeners: {
					'load': this.onLoad,
					scope:  this
				}
			});
			this.loaded = true;
		} else {
			this.add({text: this.loadingText, iconCls: 'loading-indicator'});
			this.store.on('load', this.onLoad, this);
		}
	},

	destroy : function () {
		if (this.store) {
			this.store.destroy();
		}
		Ext.ux.menu.ListMenu.superclass.destroy.call(this);
	},

	/**
	 * Lists will initially show a 'loading' item while the data is retrieved from the store.
	 * In some cases the loaded data will result in a list that goes off the screen to the
	 * right (as placement calculations were done with the loading item). This adapter will
	 * allow show to be called with no arguments to show with the previous arguments and
	 * thus recalculate the width and potentially hang the menu from the left.
	 */
	show : function () {
		var lastArgs = null;
		return function(){
			if(arguments.length === 0){
				Ext.ux.menu.ListMenu.superclass.show.apply(this, lastArgs);
			} else {
				lastArgs = arguments;
				if (this.loadOnShow && !this.loaded) {
					this.store.load();
				}
				Ext.ux.menu.ListMenu.superclass.show.apply(this, arguments);
			}
		};
	}(),

	/** @private */
	onLoad : function (store, records) {
		var visible = this.isVisible();
		this.hide(false);

		this.removeAll(true);

		var gid = this.single ? Ext.id() : null;
		for(var i=0, len=records.length; i<len; i++){
			var item = new Ext.menu.CheckItem({
				text:    records[i].get(this.labelField),
				group:   gid,
				checked: this.selected.indexOf(records[i].id) > -1,
				hideOnClick: false});

			item.itemId = records[i].id;
			item.on('checkchange', this.checkChange, this);

			this.add(item);
		}

		this.loaded = true;

		if (visible) {
			this.show();
		}
		this.fireEvent('load', this, records);
	},

	/**
	 * Get the selected items.
	 * @return {Array} selected
	 */
	getSelected : function () {
		return this.selected;
	},

	/** @private */
	setSelected : function (value) {
		value = this.selected = [].concat(value);

		if (this.loaded) {
			this.items.each(function(item){
				item.setChecked(false, true);
				for (var i = 0, len = value.length; i < len; i++) {
					if (item.itemId == value[i]) {
						item.setChecked(true, true);
					}
				}
			}, this);
		}
	},

	/**
	 * Handler for the 'checkchange' event from an check item in this menu
	 * @param {Object} item Ext.menu.CheckItem
	 * @param {Object} checked The checked value that was set
	 */
	checkChange : function (item, checked) {
		var value = [];
		this.items.each(function(item){
			if (item.checked) {
				value.push(item.itemId);
			}
		},this);
		this.selected = value;

		this.fireEvent('checkchange', item, checked);
	}
});
/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.namespace('Ext.ux.grid');

/**
 * @class Ext.ux.grid.GridFilters
 * @extends Ext.util.Observable
 * <p>GridFilter is a plugin (<code>ptype='gridfilters'</code>) for grids that
 * allow for a slightly more robust representation of filtering than what is
 * provided by the default store.</p>
 * <p>Filtering is adjusted by the user using the grid's column header menu
 * (this menu can be disabled through configuration). Through this menu users
 * can configure, enable, and disable filters for each column.</p>
 * <p><b><u>Features:</u></b></p>
 * <div class="mdetail-params"><ul>
 * <li><b>Filtering implementations</b> :
 * <div class="sub-desc">
 * Default filtering for Strings, Numeric Ranges, Date Ranges, Lists (which can
 * be backed by a Ext.data.Store), and Boolean. Additional custom filter types
 * and menus are easily created by extending Ext.ux.grid.filter.Filter.
 * </div></li>
 * <li><b>Graphical indicators</b> :
 * <div class="sub-desc">
 * Columns that are filtered have {@link #filterCls a configurable css class}
 * applied to the column headers.
 * </div></li>
 * <li><b>Paging</b> :
 * <div class="sub-desc">
 * If specified as a plugin to the grid's configured PagingToolbar, the current page
 * will be reset to page 1 whenever you update the filters.
 * </div></li>
 * <li><b>Automatic Reconfiguration</b> :
 * <div class="sub-desc">
 * Filters automatically reconfigure when the grid 'reconfigure' event fires.
 * </div></li>
 * <li><b>Stateful</b> :
 * Filter information will be persisted across page loads by specifying a
 * <code>stateId</code> in the Grid configuration.
 * <div class="sub-desc">
 * The filter collection binds to the
 * <code>{@link Ext.grid.GridPanel#beforestaterestore beforestaterestore}</code>
 * and <code>{@link Ext.grid.GridPanel#beforestatesave beforestatesave}</code>
 * events in order to be stateful.
 * </div></li>
 * <li><b>Grid Changes</b> :
 * <div class="sub-desc"><ul>
 * <li>A <code>filters</code> <i>property</i> is added to the grid pointing to
 * this plugin.</li>
 * <li>A <code>filterupdate</code> <i>event</i> is added to the grid and is
 * fired upon onStateChange completion.</li>
 * </ul></div></li>
 * <li><b>Server side code examples</b> :
 * <div class="sub-desc"><ul>
 * <li><a href="http://www.vinylfox.com/extjs/grid-filter-php-backend-code.php">PHP</a> - (Thanks VinylFox)</li>
 * <li><a href="http://extjs.com/forum/showthread.php?p=77326#post77326">Ruby on Rails</a> - (Thanks Zyclops)</li>
 * <li><a href="http://extjs.com/forum/showthread.php?p=176596#post176596">Ruby on Rails</a> - (Thanks Rotomaul)</li>
 * <li><a href="http://www.debatablybeta.com/posts/using-extjss-grid-filtering-with-django/">Python</a> - (Thanks Matt)</li>
 * <li><a href="http://mcantrell.wordpress.com/2008/08/22/extjs-grids-and-grails/">Grails</a> - (Thanks Mike)</li>
 * </ul></div></li>
 * </ul></div>
 * <p><b><u>Example usage:</u></b></p>
 * <pre><code>
var store = new Ext.data.GroupingStore({
	...
});

var filters = new Ext.ux.grid.GridFilters({
	autoReload: false, //don&#39;t reload automatically
	local: true, //only filter locally
	// filters may be configured through the plugin,
	// or in the column definition within the column model configuration
	filters: [{
		type: 'numeric',
		dataIndex: 'id'
	}, {
		type: 'string',
		dataIndex: 'name'
	}, {
		type: 'numeric',
		dataIndex: 'price'
	}, {
		type: 'date',
		dataIndex: 'dateAdded'
	}, {
		type: 'list',
		dataIndex: 'size',
		options: ['extra small', 'small', 'medium', 'large', 'extra large'],
		phpMode: true
	}, {
		type: 'boolean',
		dataIndex: 'visible'
	}]
});
var cm = new Ext.grid.ColumnModel([{
	...
}]);

var grid = new Ext.grid.GridPanel({
	 ds: store,
	 cm: cm,
	 view: new Ext.grid.GroupingView(),
	 plugins: [filters],
	 height: 400,
	 width: 700,
	 bbar: new Ext.PagingToolbar({
		 store: store,
		 pageSize: 15,
		 plugins: [filters] //reset page to page 1 if filters change
	 })
 });

store.load({params: {start: 0, limit: 15}});

// a filters property is added to the grid
grid.filters
 * </code></pre>
 */
Ext.ux.grid.GridFilters = Ext.extend(Ext.util.Observable, {
	/**
	 * @cfg {Boolean} autoReload
	 * Defaults to true, reloading the datasource when a filter change happens.
	 * Set this to false to prevent the datastore from being reloaded if there
	 * are changes to the filters.  See <code>{@link updateBuffer}</code>.
	 */
	autoReload : true,
	/**
	 * @cfg {Boolean} encode
	 * Specify true for {@link #buildQuery} to use Ext.util.JSON.encode to
	 * encode the filter query parameter sent with a remote request.
	 * Defaults to false.
	 */
	/**
	 * @cfg {Array} filters
	 * An Array of filters config objects. Refer to each filter type class for
	 * configuration details specific to each filter type. Filters for Strings,
	 * Numeric Ranges, Date Ranges, Lists, and Boolean are the standard filters
	 * available.
	 */
	/**
	 * @cfg {String} filterCls
	 * The css class to be applied to column headers with active filters.
	 * Defaults to <tt>'ux-filterd-column'</tt>.
	 */
	filterCls : 'ux-filtered-column',
	/**
	 * @cfg {Boolean} local
	 * <tt>true</tt> to use Ext.data.Store filter functions (local filtering)
	 * instead of the default (<tt>false</tt>) server side filtering.
	 */
	local : false,
	/**
	 * @cfg {String} menuFilterText
	 * defaults to <tt>'Filters'</tt>.
	 */
	menuFilterText : 'Filters',
	/**
	 * @cfg {String} paramPrefix
	 * The url parameter prefix for the filters.
	 * Defaults to <tt>'filter'</tt>.
	 */
	paramPrefix : 'filter',
	/**
	 * @cfg {Boolean} showMenu
	 * Defaults to true, including a filter submenu in the default header menu.
	 */
	showMenu : true,
	/**
	 * @cfg {String} stateId
	 * Name of the value to be used to store state information.
	 */
	stateId : undefined,
	/**
	 * @cfg {Integer} updateBuffer
	 * Number of milliseconds to defer store updates since the last filter change.
	 */
	updateBuffer : 500,

	/** @private */
	constructor : function (config) {
		config = config || {};
		this.deferredUpdate = new Ext.util.DelayedTask(this.reload, this);
		this.filters = new Ext.util.MixedCollection();
		this.filters.getKey = function (o) {
			return o ? o.dataIndex : null;
		};
		this.addFilters(config.filters);
		delete config.filters;
		Ext.apply(this, config);
	},

	/** @private */
	init : function (grid) {
		if (grid instanceof Ext.grid.GridPanel) {
			this.grid = grid;

			this.bindStore(this.grid.getStore(), true);
			// assumes no filters were passed in the constructor, so try and use ones from the colModel
			if(this.filters.getCount() == 0){
				this.addFilters(this.grid.getColumnModel());
			}

			this.grid.filters = this;

			this.grid.addEvents({'filterupdate': true});

			grid.on({
				scope: this,
				beforestaterestore: this.applyState,
				beforestatesave: this.saveState,
				beforedestroy: this.destroy,
				reconfigure: this.onReconfigure
			});

			if (grid.rendered){
				this.onRender();
			} else {
				grid.on({
					scope: this,
					single: true,
					render: this.onRender
				});
			}

		} else if (grid instanceof Ext.PagingToolbar) {
			this.toolbar = grid;
		}
	},

	/**
	 * @private
	 * Handler for the grid's beforestaterestore event (fires before the state of the
	 * grid is restored).
	 * @param {Object} grid The grid object
	 * @param {Object} state The hash of state values returned from the StateProvider.
	 */
	applyState : function (grid, state) {
		var key, filter;
		this.applyingState = true;
		this.clearFilters();
		if (state.filters) {
			for (key in state.filters) {
				filter = this.filters.get(key);
				if (filter) {
					filter.setValue(state.filters[key]);
					filter.setActive(true);
				}
			}
		}
		this.deferredUpdate.cancel();
		if (this.local) {
			this.reload();
		}
		delete this.applyingState;
		delete state.filters;
	},

	/**
	 * Saves the state of all active filters
	 * @param {Object} grid
	 * @param {Object} state
	 * @return {Boolean}
	 */
	saveState : function (grid, state) {
		var filters = {};
		this.filters.each(function (filter) {
			if (filter.active) {
				filters[filter.dataIndex] = filter.getValue();
			}
		});
		return (state.filters = filters);
	},

	/**
	 * @private
	 * Handler called when the grid is rendered
	 */
	onRender : function () {
		this.grid.getView().on('refresh', this.onRefresh, this);
		this.createMenu();
	},

	/**
	 * @private
	 * Handler called by the grid 'beforedestroy' event
	 */
	destroy : function () {
		this.removeAll();
		this.purgeListeners();

		if(this.filterMenu){
			Ext.menu.MenuMgr.unregister(this.filterMenu);
			this.filterMenu.destroy();
			 this.filterMenu = this.menu.menu = null;
		}
	},

	/**
	 * Remove all filters, permanently destroying them.
	 */
	removeAll : function () {
		if(this.filters){
			Ext.destroy.apply(Ext, this.filters.items);
			// remove all items from the collection
			this.filters.clear();
		}
	},


	/**
	 * Changes the data store bound to this view and refreshes it.
	 * @param {Store} store The store to bind to this view
	 */
	bindStore : function(store, initial){
		if(!initial && this.store){
			if (this.local) {
				store.un('load', this.onLoad, this);
			} else {
				store.un('beforeload', this.onBeforeLoad, this);
			}
		}
		if(store){
			if (this.local) {
				store.on('load', this.onLoad, this);
			} else {
				store.on('beforeload', this.onBeforeLoad, this);
			}
		}
		this.store = store;
	},

	/**
	 * @private
	 * Handler called when the grid reconfigure event fires
	 */
	onReconfigure : function () {
		this.bindStore(this.grid.getStore());
		this.store.clearFilter();
		this.removeAll();
		this.addFilters(this.grid.getColumnModel());
		this.updateColumnHeadings();
	},

	createMenu : function () {
		var view = this.grid.getView(),
			hmenu = view.hmenu;

		if (this.showMenu && hmenu) {

			this.sep  = hmenu.addSeparator();
			this.filterMenu = new Ext.menu.Menu({
				id: this.grid.id + '-filters-menu'
			});
			this.menu = hmenu.add({
				checked: false,
				itemId: 'filters',
				text: this.menuFilterText,
				menu: this.filterMenu
			});

			this.menu.on({
				scope: this,
				checkchange: this.onCheckChange,
				beforecheckchange: this.onBeforeCheck
			});
			hmenu.on('beforeshow', this.onMenu, this);
		}
		this.updateColumnHeadings();
	},

	/**
	 * @private
	 * Get the filter menu from the filters MixedCollection based on the clicked header
	 */
	getMenuFilter : function () {
		var view = this.grid.getView();
		if (!view || view.hdCtxIndex === undefined) {
			return null;
		}
		return this.filters.get(
			view.cm.config[view.hdCtxIndex].dataIndex
		);
	},

	/**
	 * @private
	 * Handler called by the grid's hmenu beforeshow event
	 */
	onMenu : function (filterMenu) {
		var filter = this.getMenuFilter();

		if (filter) {
/*
TODO: lazy rendering
			if (!filter.menu) {
				filter.menu = filter.createMenu();
			}
*/
			this.menu.menu = filter.menu;
			this.menu.setChecked(filter.active, false);
			// disable the menu if filter.disabled explicitly set to true
			this.menu.setDisabled(filter.disabled === true);
		}

		this.menu.setVisible(filter !== undefined);
		this.sep.setVisible(filter !== undefined);
	},

	/** @private */
	onCheckChange : function (item, value) {
		this.getMenuFilter().setActive(value);
	},

	/** @private */
	onBeforeCheck : function (check, value) {
		return !value || this.getMenuFilter().isActivatable();
	},

	/**
	 * @private
	 * Handler for all events on filters.
	 * @param {String} event Event name
	 * @param {Object} filter Standard signature of the event before the event is fired
	 */
	onStateChange : function (event, filter) {
		if (event === 'serialize') {
			return;
		}

		if (filter == this.getMenuFilter()) {
			this.menu.setChecked(filter.active, false);
		}

		if ((this.autoReload || this.local) && !this.applyingState) {
			this.deferredUpdate.delay(this.updateBuffer);
		}
		this.updateColumnHeadings();

		if (!this.applyingState) {
			this.grid.saveState();
		}
		this.grid.fireEvent('filterupdate', this, filter);
	},

	/**
	 * @private
	 * Handler for store's beforeload event when configured for remote filtering
	 * @param {Object} store
	 * @param {Object} options
	 */
	onBeforeLoad : function (store, options) {
		options.params = options.params || {};
		this.cleanParams(options.params);
		var params = this.buildQuery(this.getFilterData());
		Ext.apply(options.params, params);
	},

	/**
	 * @private
	 * Handler for store's load event when configured for local filtering
	 * @param {Object} store
	 * @param {Object} options
	 */
	onLoad : function (store, options) {
		store.filterBy(this.getRecordFilter());
	},

	/**
	 * @private
	 * Handler called when the grid's view is refreshed
	 */
	onRefresh : function () {
		this.updateColumnHeadings();
	},

	/**
	 * Update the styles for the header row based on the active filters
	 */
	updateColumnHeadings : function () {
		var view = this.grid.getView(),
			i, len, filter;
		if (view.mainHd) {
			for (i = 0, len = view.cm.config.length; i < len; i++) {
				filter = this.getFilter(view.cm.config[i].dataIndex);
				Ext.fly(view.getHeaderCell(i))[filter && filter.active ? 'addClass' : 'removeClass'](this.filterCls);
			}
		}
	},

	/** @private */
	reload : function () {
		if (this.local) {
			this.grid.store.clearFilter(true);
			this.grid.store.filterBy(this.getRecordFilter());
		} else {
			var start,
				store = this.grid.store;
			this.deferredUpdate.cancel();
			if (this.toolbar) {
				start = store.paramNames.start;
				if (store.lastOptions && store.lastOptions.params && store.lastOptions.params[start]) {
					store.lastOptions.params[start] = 0;
				}
			}
			store.reload();
		}
	},

	/**
	 * Method factory that generates a record validator for the filters active at the time
	 * of invokation.
	 * @private
	 */
	getRecordFilter : function () {
		var f = [], len, i;
		this.filters.each(function (filter) {
			if (filter.active) {
				f.push(filter);
			}
		});

		len = f.length;
		return function (record) {
			for (i = 0; i < len; i++) {
				if (!f[i].validateRecord(record)) {
					return false;
				}
			}
			return true;
		};
	},

	/**
	 * Adds a filter to the collection and observes it for state change.
	 * @param {Object/Ext.ux.grid.filter.Filter} config A filter configuration or a filter object.
	 * @return {Ext.ux.grid.filter.Filter} The existing or newly created filter object.
	 */
	addFilter : function (config) {
		var Cls = this.getFilterClass(config.type),
			filter = config.menu ? config : (new Cls(config));
		this.filters.add(filter);

		Ext.util.Observable.capture(filter, this.onStateChange, this);
		return filter;
	},

	/**
	 * Adds filters to the collection.
	 * @param {Array/Ext.grid.ColumnModel} filters Either an Array of
	 * filter configuration objects or an Ext.grid.ColumnModel.  The columns
	 * of a passed Ext.grid.ColumnModel will be examined for a <code>filter</code>
	 * property and, if present, will be used as the filter configuration object.
	 */
	addFilters : function (filters) {
		if (filters) {
			var i, len, filter, cm = false, dI;
			if (filters instanceof Ext.grid.ColumnModel) {
				filters = filters.config;
				cm = true;
			}
			for (i = 0, len = filters.length; i < len; i++) {
				filter = false;
				if (cm) {
					dI = filters[i].dataIndex;
					filter = filters[i].filter || filters[i].filterable;
					if (filter){
						filter = (filter === true) ? {} : filter;
						Ext.apply(filter, {dataIndex:dI});
						// filter type is specified in order of preference:
						//     filter type specified in config
						//     type specified in store's field's type config
						filter.type = filter.type || this.store.fields.get(dI).type.type;
					}
				} else {
					filter = filters[i];
				}
				// if filter config found add filter for the column
				if (filter) {
					this.addFilter(filter);
				}
			}
		}
	},

	/**
	 * Returns a filter for the given dataIndex, if one exists.
	 * @param {String} dataIndex The dataIndex of the desired filter object.
	 * @return {Ext.ux.grid.filter.Filter}
	 */
	getFilter : function (dataIndex) {
		return this.filters.get(dataIndex);
	},

	/**
	 * Turns all filters off. This does not clear the configuration information
	 * (see {@link #removeAll}).
	 */
	clearFilters : function () {
		this.filters.each(function (filter) {
			filter.setActive(false);
		});
	},

	/**
	 * Returns an Array of the currently active filters.
	 * @return {Array} filters Array of the currently active filters.
	 */
	getFilterData : function () {
		var filters = [], i, len;

		this.filters.each(function (f) {
			if (f.active) {
				var d = [].concat(f.serialize());
				for (i = 0, len = d.length; i < len; i++) {
					filters.push({
						field: f.dataIndex,
						data: d[i]
					});
				}
			}
		});
		return filters;
	},

	/**
	 * Function to take the active filters data and build it into a query.
	 * The format of the query depends on the <code>{@link #encode}</code>
	 * configuration:
	 * <div class="mdetail-params"><ul>
	 *
	 * <li><b><tt>false</tt></b> : <i>Default</i>
	 * <div class="sub-desc">
	 * Flatten into query string of the form (assuming <code>{@link #paramPrefix}='filters'</code>:
	 * <pre><code>
filters[0][field]="someDataIndex"&
filters[0][data][comparison]="someValue1"&
filters[0][data][type]="someValue2"&
filters[0][data][value]="someValue3"&
	 * </code></pre>
	 * </div></li>
	 * <li><b><tt>true</tt></b> :
	 * <div class="sub-desc">
	 * JSON encode the filter data
	 * <pre><code>
filters[0][field]="someDataIndex"&
filters[0][data][comparison]="someValue1"&
filters[0][data][type]="someValue2"&
filters[0][data][value]="someValue3"&
	 * </code></pre>
	 * </div></li>
	 * </ul></div>
	 * Override this method to customize the format of the filter query for remote requests.
	 * @param {Array} filters A collection of objects representing active filters and their configuration.
	 *    Each element will take the form of {field: dataIndex, data: filterConf}. dataIndex is not assured
	 *    to be unique as any one filter may be a composite of more basic filters for the same dataIndex.
	 * @return {Object} Query keys and values
	 */
	buildQuery : function (filters) {
		var p = {}, i, f, root, dataPrefix, key, tmp,
			len = filters.length;

		if (!this.encode){
			for (i = 0; i < len; i++) {
				f = filters[i];
				root = [this.paramPrefix, '[', i, ']'].join('');
				p[root + '[field]'] = f.field;

				dataPrefix = root + '[data]';
				for (key in f.data) {
					p[[dataPrefix, '[', key, ']'].join('')] = f.data[key];
				}
			}
		} else {
			tmp = [];
			for (i = 0; i < len; i++) {
				f = filters[i];
				tmp.push(Ext.apply(
					{},
					{field: f.field},
					f.data
				));
			}
			// only build if there is active filter
			if (tmp.length > 0){
				p[this.paramPrefix] = Ext.util.JSON.encode(tmp);
			}
		}
		return p;
	},

	/**
	 * Removes filter related query parameters from the provided object.
	 * @param {Object} p Query parameters that may contain filter related fields.
	 */
	cleanParams : function (p) {
		// if encoding just delete the property
		if (this.encode) {
			delete p[this.paramPrefix];
		// otherwise scrub the object of filter data
		} else {
			var regex, key;
			regex = new RegExp('^' + this.paramPrefix + '\[[0-9]+\]');
			for (key in p) {
				if (regex.test(key)) {
					delete p[key];
				}
			}
		}
	},

	/**
	 * Function for locating filter classes, overwrite this with your favorite
	 * loader to provide dynamic filter loading.
	 * @param {String} type The type of filter to load ('Filter' is automatically
	 * appended to the passed type; eg, 'string' becomes 'StringFilter').
	 * @return {Class} The Ext.ux.grid.filter.Class
	 */
	getFilterClass : function (type) {
		// map the supported Ext.data.Field type values into a supported filter
		switch(type) {
			case 'auto':
			  type = 'string';
			  break;
			case 'int':
			case 'float':
			  type = 'numeric';
			  break;
			case 'bool':
			  type = 'boolean';
			  break;
		}
		return Ext.ux.grid.filter[type.substr(0, 1).toUpperCase() + type.substr(1) + 'Filter'];
	}
});

// register ptype
Ext.preg('gridfilters', Ext.ux.grid.GridFilters);

/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.namespace('Ext.ux.grid.filter');

/** 
 * @class Ext.ux.grid.filter.Filter
 * @extends Ext.util.Observable
 * Abstract base class for filter implementations.
 */
Ext.ux.grid.filter.Filter = Ext.extend(Ext.util.Observable, {
	/**
	 * @cfg {Boolean} active
	 * Indicates the initial status of the filter (defaults to false).
	 */
	active : false,
	/**
	 * True if this filter is active.  Use setActive() to alter after configuration.
	 * @type Boolean
	 * @property active
	 */
	/**
	 * @cfg {String} dataIndex
	 * The {@link Ext.data.Store} dataIndex of the field this filter represents.
	 * The dataIndex does not actually have to exist in the store.
	 */
	dataIndex : null,
	/**
	 * The filter configuration menu that will be installed into the filter submenu of a column menu.
	 * @type Ext.menu.Menu
	 * @property
	 */
	menu : null,
	/**
	 * @cfg {Number} updateBuffer
	 * Number of milliseconds to wait after user interaction to fire an update. Only supported
	 * by filters: 'list', 'numeric', and 'string'. Defaults to 500.
	 */
	updateBuffer : 500,

	constructor : function (config) {
		Ext.apply(this, config);

		this.addEvents(
			/**
			 * @event activate
			 * Fires when an inactive filter becomes active
			 * @param {Ext.ux.grid.filter.Filter} this
			 */
			'activate',
			/**
			 * @event deactivate
			 * Fires when an active filter becomes inactive
			 * @param {Ext.ux.grid.filter.Filter} this
			 */
			'deactivate',
			/**
			 * @event serialize
			 * Fires after the serialization process. Use this to attach additional parameters to serialization
			 * data before it is encoded and sent to the server.
			 * @param {Array/Object} data A map or collection of maps representing the current filter configuration.
			 * @param {Ext.ux.grid.filter.Filter} filter The filter being serialized.
			 */
			'serialize',
			/**
			 * @event update
			 * Fires when a filter configuration has changed
			 * @param {Ext.ux.grid.filter.Filter} this The filter object.
			 */
			'update'
		);
		Ext.ux.grid.filter.Filter.superclass.constructor.call(this);

		this.menu = new Ext.menu.Menu();
		this.init(config);
		if(config && config.value){
			this.setValue(config.value);
			this.setActive(config.active !== false, true);
			delete config.value;
		}
	},

	/**
	 * Destroys this filter by purging any event listeners, and removing any menus.
	 */
	destroy : function(){
		if (this.menu){
			this.menu.destroy();
		}
		this.purgeListeners();
	},

	/**
	 * Template method to be implemented by all subclasses that is to
	 * initialize the filter and install required menu items.
	 * Defaults to Ext.emptyFn.
	 */
	init : Ext.emptyFn,

	/**
	 * Template method to be implemented by all subclasses that is to
	 * get and return the value of the filter.
	 * Defaults to Ext.emptyFn.
	 * @return {Object} The 'serialized' form of this filter
	 * @methodOf Ext.ux.grid.filter.Filter
	 */
	getValue : Ext.emptyFn,

	/**
	 * Template method to be implemented by all subclasses that is to
	 * set the value of the filter and fire the 'update' event.
	 * Defaults to Ext.emptyFn.
	 * @param {Object} data The value to set the filter
	 * @methodOf Ext.ux.grid.filter.Filter
	 */
	setValue : Ext.emptyFn,

	/**
	 * Template method to be implemented by all subclasses that is to
	 * return <tt>true</tt> if the filter has enough configuration information to be activated.
	 * Defaults to <tt>return true</tt>.
	 * @return {Boolean}
	 */
	isActivatable : function(){
		return true;
	},

	/**
	 * Template method to be implemented by all subclasses that is to
	 * get and return serialized filter data for transmission to the server.
	 * Defaults to Ext.emptyFn.
	 */
	getSerialArgs : Ext.emptyFn,

	/**
	 * Template method to be implemented by all subclasses that is to
	 * validates the provided Ext.data.Record against the filters configuration.
	 * Defaults to <tt>return true</tt>.
	 * @param {Ext.data.Record} record The record to validate
	 * @return {Boolean} true if the record is valid within the bounds
	 * of the filter, false otherwise.
	 */
	validateRecord : function(){
		return true;
	},

	/**
	 * Returns the serialized filter data for transmission to the server
	 * and fires the 'serialize' event.
	 * @return {Object/Array} An object or collection of objects containing
	 * key value pairs representing the current configuration of the filter.
	 * @methodOf Ext.ux.grid.filter.Filter
	 */
	serialize : function(){
		var args = this.getSerialArgs();
		this.fireEvent('serialize', args, this);
		return args;
	},

	/** @private */
	fireUpdate : function(){
		if (this.active) {
			this.fireEvent('update', this);
		}
		this.setActive(this.isActivatable());
	},

	/**
	 * Sets the status of the filter and fires the appropriate events.
	 * @param {Boolean} active        The new filter state.
	 * @param {Boolean} suppressEvent True to prevent events from being fired.
	 * @methodOf Ext.ux.grid.filter.Filter
	 */
	setActive : function(active, suppressEvent){
		if(this.active != active){
			this.active = active;
			if (suppressEvent !== true) {
				this.fireEvent(active ? 'activate' : 'deactivate', this);
			}
		}
	}
});
/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/** 
 * @class Ext.ux.grid.filter.StringFilter
 * @extends Ext.ux.grid.filter.Filter
 * Filter by a configurable Ext.form.TextField
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>    
var filters = new Ext.ux.grid.GridFilters({
	...
	filters: [{
		// required configs
		type: 'string',
		dataIndex: 'name',

		// optional configs
		value: 'foo',
		active: true, // default is false
		iconCls: 'ux-gridfilter-text-icon' // default
		// any Ext.form.TextField configs accepted
	}]
});
 * </code></pre>
 */
Ext.ux.grid.filter.StringFilter = Ext.extend(Ext.ux.grid.filter.Filter, {

	/**
	 * @cfg {String} iconCls
	 * The iconCls to be applied to the menu item.
	 * Defaults to <tt>'ux-gridfilter-text-icon'</tt>.
	 */
	iconCls : 'ux-gridfilter-text-icon',

	emptyText: 'Enter Filter Text...',
	selectOnFocus: true,
	width: 125,

	/**
	 * @private
	 * Template method that is to initialize the filter and install required menu items.
	 */
	init : function (config) {
		Ext.applyIf(config, {
			enableKeyEvents: true,
			iconCls: this.iconCls,
			listeners: {
				scope: this,
				keyup: this.onInputKeyUp
			}
		});

		this.inputItem = new Ext.form.TextField(config);
		this.menu.add(this.inputItem);
		this.updateTask = new Ext.util.DelayedTask(this.fireUpdate, this);
	},

	/**
	 * @private
	 * Template method that is to get and return the value of the filter.
	 * @return {String} The value of this filter
	 */
	getValue : function () {
		return this.inputItem.getValue();
	},

	/**
	 * @private
	 * Template method that is to set the value of the filter.
	 * @param {Object} value The value to set the filter
	 */
	setValue : function (value) {
		this.inputItem.setValue(value);
		this.fireEvent('update', this);
	},

	/**
	 * @private
	 * Template method that is to return <tt>true</tt> if the filter
	 * has enough configuration information to be activated.
	 * @return {Boolean}
	 */
	isActivatable : function () {
		return this.inputItem.getValue().length > 0;
	},

	/**
	 * @private
	 * Template method that is to get and return serialized filter data for
	 * transmission to the server.
	 * @return {Object/Array} An object or collection of objects containing
	 * key value pairs representing the current configuration of the filter.
	 */
	getSerialArgs : function () {
		return {type: 'string', value: this.getValue()};
	},

	/**
	 * Template method that is to validate the provided Ext.data.Record
	 * against the filters configuration.
	 * @param {Ext.data.Record} record The record to validate
	 * @return {Boolean} true if the record is valid within the bounds
	 * of the filter, false otherwise.
	 */
	validateRecord : function (record) {
		var val = record.get(this.dataIndex);

		if(typeof val != 'string') {
			return (this.getValue().length === 0);
		}

		return val.toLowerCase().indexOf(this.getValue().toLowerCase()) > -1;
	},

	/**
	 * @private
	 * Handler method called when there is a keyup event on this.inputItem
	 */
	onInputKeyUp : function (field, e) {
		var k = e.getKey();
		if (k == e.RETURN && field.isValid()) {
			e.stopEvent();
			this.menu.hide(true);
			return;
		}
		// restart the timer
		this.updateTask.delay(this.updateBuffer);
	}
});

/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/** 
 * @class Ext.ux.grid.filter.DateFilter
 * @extends Ext.ux.grid.filter.Filter
 * Filter by a configurable Ext.menu.DateMenu
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>    
var filters = new Ext.ux.grid.GridFilters({
	...
	filters: [{
		// required configs
		type: 'date',
		dataIndex: 'dateAdded',

		// optional configs
		dateFormat: 'm/d/Y',  // default
		beforeText: 'Before', // default
		afterText: 'After',   // default
		onText: 'On',         // default
		pickerOpts: {
			// any DateMenu configs
		},

		active: true // default is false
	}]
});
 * </code></pre>
 */
Ext.ux.grid.filter.DateFilter = Ext.extend(Ext.ux.grid.filter.Filter, {
	/**
	 * @cfg {String} afterText
	 * Defaults to 'After'.
	 */
	afterText : 'After',
	/**
	 * @cfg {String} beforeText
	 * Defaults to 'Before'.
	 */
	beforeText : 'Before',
	/**
	 * @cfg {Object} compareMap
	 * Map for assigning the comparison values used in serialization.
	 */
	compareMap : {
		before: 'lt',
		after:  'gt',
		on:     'eq'
	},
	/**
	 * @cfg {String} dateFormat
	 * The date format to return when using getValue.
	 * Defaults to 'm/d/Y'.
	 */
	dateFormat : 'm/d/Y',

	/**
	 * @cfg {Date} maxDate
	 * Allowable date as passed to the Ext.DatePicker
	 * Defaults to undefined.
	 */
	/**
	 * @cfg {Date} minDate
	 * Allowable date as passed to the Ext.DatePicker
	 * Defaults to undefined.
	 */
	/**
	 * @cfg {Array} menuItems
	 * The items to be shown in this menu
	 * Defaults to:<pre>
	 * menuItems : ['before', 'after', '-', 'on'],
	 * </pre>
	 */
	menuItems : ['before', 'after', '-', 'on'],

	/**
	 * @cfg {Object} menuItemCfgs
	 * Default configuration options for each menu item
	 */
	menuItemCfgs : {
		selectOnFocus: true,
		width: 125
	},

	/**
	 * @cfg {String} onText
	 * Defaults to 'On'.
	 */
	onText : 'On',

	/**
	 * @cfg {Object} pickerOpts
	 * Configuration options for the date picker associated with each field.
	 */
	pickerOpts : {},

	/**
	 * @private
	 * Template method that is to initialize the filter and install required menu items.
	 */
	init : function (config) {
		var menuCfg, i, len, item, cfg, Cls;

		menuCfg = Ext.apply(this.pickerOpts, {
			minDate: this.minDate,
			maxDate: this.maxDate,
			format:  this.dateFormat,
			listeners: {
				scope: this,
				select: this.onMenuSelect
			}
		});

		this.fields = {};
		for (i = 0, len = this.menuItems.length; i < len; i++) {
			item = this.menuItems[i];
			if (item !== '-') {
				cfg = {
					itemId: 'range-' + item,
					text: this[item + 'Text'],
					menu: new Ext.menu.DateMenu(
						Ext.apply(menuCfg, {
							itemId: item
						})
					),
					listeners: {
						scope: this,
						checkchange: this.onCheckChange
					}
				};
				Cls = Ext.menu.CheckItem;
				item = this.fields[item] = new Cls(cfg);
			}
			//this.add(item);
			this.menu.add(item);
		}
	},

	onCheckChange : function () {
		this.setActive(this.isActivatable());
		this.fireEvent('update', this);
	},

	/**
	 * @private
	 * Handler method called when there is a keyup event on an input
	 * item of this menu.
	 */
	onInputKeyUp : function (field, e) {
		var k = e.getKey();
		if (k == e.RETURN && field.isValid()) {
			e.stopEvent();
			this.menu.hide(true);
			return;
		}
	},

	/**
	 * Handler for when the menu for a field fires the 'select' event
	 * @param {Object} date
	 * @param {Object} menuItem
	 * @param {Object} value
	 * @param {Object} picker
	 */
	onMenuSelect : function (menuItem, value, picker) {
		var fields = this.fields,
			field = this.fields[menuItem.itemId];

		field.setChecked(true);

		if (field == fields.on) {
			fields.before.setChecked(false, true);
			fields.after.setChecked(false, true);
		} else {
			fields.on.setChecked(false, true);
			if (field == fields.after && fields.before.menu.picker.value < value) {
				fields.before.setChecked(false, true);
			} else if (field == fields.before && fields.after.menu.picker.value > value) {
				fields.after.setChecked(false, true);
			}
		}
		this.fireEvent('update', this);
	},

	/**
	 * @private
	 * Template method that is to get and return the value of the filter.
	 * @return {String} The value of this filter
	 */
	getValue : function () {
		var key, result = {};
		for (key in this.fields) {
			if (this.fields[key].checked) {
				result[key] = this.fields[key].menu.picker.getValue();
			}
		}
		return result;
	},

	/**
	 * @private
	 * Template method that is to set the value of the filter.
	 * @param {Object} value The value to set the filter
	 * @param {Boolean} preserve true to preserve the checked status
	 * of the other fields.  Defaults to false, unchecking the
	 * other fields
	 */
	setValue : function (value, preserve) {
		var key;
		for (key in this.fields) {
			if(value[key]){
				this.fields[key].menu.picker.setValue(value[key]);
				this.fields[key].setChecked(true);
			} else if (!preserve) {
				this.fields[key].setChecked(false);
			}
		}
		this.fireEvent('update', this);
	},

	/**
	 * @private
	 * Template method that is to return <tt>true</tt> if the filter
	 * has enough configuration information to be activated.
	 * @return {Boolean}
	 */
	isActivatable : function () {
		var key;
		for (key in this.fields) {
			if (this.fields[key].checked) {
				return true;
			}
		}
		return false;
	},

	/**
	 * @private
	 * Template method that is to get and return serialized filter data for
	 * transmission to the server.
	 * @return {Object/Array} An object or collection of objects containing
	 * key value pairs representing the current configuration of the filter.
	 */
	getSerialArgs : function () {
		var args = [];
		for (var key in this.fields) {
			if(this.fields[key].checked){
				args.push({
					type: 'date',
					comparison: this.compareMap[key],
					value: this.getFieldValue(key).format(this.dateFormat)
				});
			}
		}
		return args;
	},

	/**
	 * Get and return the date menu picker value
	 * @param {String} item The field identifier ('before', 'after', 'on')
	 * @return {Date} Gets the current selected value of the date field
	 */
	getFieldValue : function(item){
		return this.fields[item].menu.picker.getValue();
	},

	/**
	 * Gets the menu picker associated with the passed field
	 * @param {String} item The field identifier ('before', 'after', 'on')
	 * @return {Object} The menu picker
	 */
	getPicker : function(item){
		return this.fields[item].menu.picker;
	},

	/**
	 * Template method that is to validate the provided Ext.data.Record
	 * against the filters configuration.
	 * @param {Ext.data.Record} record The record to validate
	 * @return {Boolean} true if the record is valid within the bounds
	 * of the filter, false otherwise.
	 */
	validateRecord : function (record) {
		var key,
			pickerValue,
			val = record.get(this.dataIndex);

		if(!Ext.isDate(val)){
			return false;
		}
		val = val.clearTime(true).getTime();

		for (key in this.fields) {
			if (this.fields[key].checked) {
				pickerValue = this.getFieldValue(key).clearTime(true).getTime();
				if (key == 'before' && pickerValue <= val) {
					return false;
				}
				if (key == 'after' && pickerValue >= val) {
					return false;
				}
				if (key == 'on' && pickerValue != val) {
					return false;
				}
			}
		}
		return true;
	}
});
/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/** 
 * @class Ext.ux.grid.filter.ListFilter
 * @extends Ext.ux.grid.filter.Filter
 * <p>List filters are able to be preloaded/backed by an Ext.data.Store to load
 * their options the first time they are shown. ListFilter utilizes the
 * {@link Ext.ux.menu.ListMenu} component.</p>
 * <p>Although not shown here, this class accepts all configuration options
 * for {@link Ext.ux.menu.ListMenu}.</p>
 * 
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>    
var filters = new Ext.ux.grid.GridFilters({
	...
	filters: [{
		type: 'list',
		dataIndex: 'size',
		phpMode: true,
		// options will be used as data to implicitly creates an ArrayStore
		options: ['extra small', 'small', 'medium', 'large', 'extra large']
	}]
});
 * </code></pre>
 * 
 */
Ext.ux.grid.filter.ListFilter = Ext.extend(Ext.ux.grid.filter.Filter, {

	/**
	 * @cfg {Array} options
	 * <p><code>data</code> to be used to implicitly create a data store
	 * to back this list when the data source is <b>local</b>. If the
	 * data for the list is remote, use the <code>{@link #store}</code>
	 * config instead.</p>
	 * <br><p>Each item within the provided array may be in one of the
	 * following formats:</p>
	 * <div class="mdetail-params"><ul>
	 * <li><b>Array</b> :
	 * <pre><code>
options: [
	[11, 'extra small'],
	[18, 'small'],
	[22, 'medium'],
	[35, 'large'],
	[44, 'extra large']
]
	 * </code></pre>
	 * </li>
	 * <li><b>Object</b> :
	 * <pre><code>
labelField: 'name', // override default of 'text'
options: [
	{id: 11, name:'extra small'},
	{id: 18, name:'small'},
	{id: 22, name:'medium'},
	{id: 35, name:'large'},
	{id: 44, name:'extra large'}
]
	 * </code></pre>
	 * </li>
	 * <li><b>String</b> :
	 * <pre><code>
	 * options: ['extra small', 'small', 'medium', 'large', 'extra large']
	 * </code></pre>
	 * </li>
	 */
	/**
	 * @cfg {Boolean} phpMode
	 * <p>Adjust the format of this filter. Defaults to false.</p>
	 * <br><p>When GridFilters <code>@cfg encode = false</code> (default):</p>
	 * <pre><code>
// phpMode == false (default):
filter[0][data][type] list
filter[0][data][value] value1
filter[0][data][value] value2
filter[0][field] prod 

// phpMode == true:
filter[0][data][type] list
filter[0][data][value] value1, value2
filter[0][field] prod 
	 * </code></pre>
	 * When GridFilters <code>@cfg encode = true</code>:
	 * <pre><code>
// phpMode == false (default):
filter : [{"type":"list","value":["small","medium"],"field":"size"}]

// phpMode == true:
filter : [{"type":"list","value":"small,medium","field":"size"}]
	 * </code></pre>
	 */
	phpMode : false,
	/**
	 * @cfg {Ext.data.Store} store
	 * The {@link Ext.data.Store} this list should use as its data source
	 * when the data source is <b>remote</b>. If the data for the list
	 * is local, use the <code>{@link #options}</code> config instead.
	 */

	/**
	 * @private
	 * Template method that is to initialize the filter and install required menu items.
	 * @param {Object} config
	 */
	init : function (config) {
		this.dt = new Ext.util.DelayedTask(this.fireUpdate, this);

		// if a menu already existed, do clean up first
		if (this.menu){
			this.menu.destroy();
		}
		this.menu = new Ext.ux.menu.ListMenu(config);
		this.menu.on('checkchange', this.onCheckChange, this);
	},

	/**
	 * @private
	 * Template method that is to get and return the value of the filter.
	 * @return {String} The value of this filter
	 */
	getValue : function () {
		return this.menu.getSelected();
	},
	/**
	 * @private
	 * Template method that is to set the value of the filter.
	 * @param {Object} value The value to set the filter
	 */
	setValue : function (value) {
		this.menu.setSelected(value);
		this.fireEvent('update', this);
	},

	/**
	 * @private
	 * Template method that is to return <tt>true</tt> if the filter
	 * has enough configuration information to be activated.
	 * @return {Boolean}
	 */
	isActivatable : function () {
		return this.getValue().length > 0;
	},

	/**
	 * @private
	 * Template method that is to get and return serialized filter data for
	 * transmission to the server.
	 * @return {Object/Array} An object or collection of objects containing
	 * key value pairs representing the current configuration of the filter.
	 */
	getSerialArgs : function () {
		var args = {type: 'list', value: this.phpMode ? this.getValue().join(',') : this.getValue()};
		return args;
	},

	/** @private */
	onCheckChange : function(){
		this.dt.delay(this.updateBuffer);
	},


	/**
	 * Template method that is to validate the provided Ext.data.Record
	 * against the filters configuration.
	 * @param {Ext.data.Record} record The record to validate
	 * @return {Boolean} true if the record is valid within the bounds
	 * of the filter, false otherwise.
	 */
	validateRecord : function (record) {
		return this.getValue().indexOf(record.get(this.dataIndex)) > -1;
	}
});
/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/** 
 * @class Ext.ux.grid.filter.NumericFilter
 * @extends Ext.ux.grid.filter.Filter
 * Filters using an Ext.ux.menu.RangeMenu.
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>    
var filters = new Ext.ux.grid.GridFilters({
	...
	filters: [{
		type: 'numeric',
		dataIndex: 'price'
	}]
});
 * </code></pre> 
 */
Ext.ux.grid.filter.NumericFilter = Ext.extend(Ext.ux.grid.filter.Filter, {

	/**
	 * @cfg {Object} fieldCls
	 * The Class to use to construct each field item within this menu
	 * Defaults to:<pre>
	 * fieldCls : Ext.form.NumberField
	 * </pre>
	 */
	fieldCls : Ext.form.NumberField,
	/**
	 * @cfg {Object} fieldCfg
	 * The default configuration options for any field item unless superseded
	 * by the <code>{@link #fields}</code> configuration.
	 * Defaults to:<pre>
	 * fieldCfg : {}
	 * </pre>
	 * Example usage:
	 * <pre><code>
fieldCfg : {
	width: 150,
},
	 * </code></pre>
	 */
	/**
	 * @cfg {Object} fields
	 * The field items may be configured individually
	 * Defaults to <tt>undefined</tt>.
	 * Example usage:
	 * <pre><code>
fields : {
	gt: { // override fieldCfg options
		width: 200,
		fieldCls: Ext.ux.form.CustomNumberField // to override default {@link #fieldCls}
	}
},
	 * </code></pre>
	 */
	/**
	 * @cfg {Object} iconCls
	 * The iconCls to be applied to each comparator field item.
	 * Defaults to:<pre>
iconCls : {
	gt : 'ux-rangemenu-gt',
	lt : 'ux-rangemenu-lt',
	eq : 'ux-rangemenu-eq'
}
	 * </pre>
	 */
	iconCls : {
		gt : 'ux-rangemenu-gt',
		lt : 'ux-rangemenu-lt',
		eq : 'ux-rangemenu-eq'
	},

	/**
	 * @cfg {Object} menuItemCfgs
	 * Default configuration options for each menu item
	 * Defaults to:<pre>
menuItemCfgs : {
	emptyText: 'Enter Filter Text...',
	selectOnFocus: true,
	width: 125
}
	 * </pre>
	 */
	menuItemCfgs : {
		emptyText: 'Enter Filter Text...',
		selectOnFocus: true,
		width: 125
	},

	/**
	 * @cfg {Array} menuItems
	 * The items to be shown in this menu.  Items are added to the menu
	 * according to their position within this array. Defaults to:<pre>
	 * menuItems : ['lt','gt','-','eq']
	 * </pre>
	 */
	menuItems : ['lt', 'gt', '-', 'eq'],

	/**
	 * @private
	 * Template method that is to initialize the filter and install required menu items.
	 */
	init : function (config) {
		// if a menu already existed, do clean up first
		if (this.menu){
			this.menu.destroy();
		}
		this.menu = new Ext.ux.menu.RangeMenu(Ext.apply(config, {
			// pass along filter configs to the menu
			fieldCfg : this.fieldCfg || {},
			fieldCls : this.fieldCls,
			fields : this.fields || {},
			iconCls: this.iconCls,
			menuItemCfgs: this.menuItemCfgs,
			menuItems: this.menuItems,
			updateBuffer: this.updateBuffer
		}));
		// relay the event fired by the menu
		this.menu.on('update', this.fireUpdate, this);
	},

	/**
	 * @private
	 * Template method that is to get and return the value of the filter.
	 * @return {String} The value of this filter
	 */
	getValue : function () {
		return this.menu.getValue();
	},

	/**
	 * @private
	 * Template method that is to set the value of the filter.
	 * @param {Object} value The value to set the filter
	 */
	setValue : function (value) {
		this.menu.setValue(value);
	},

	/**
	 * @private
	 * Template method that is to return <tt>true</tt> if the filter
	 * has enough configuration information to be activated.
	 * @return {Boolean}
	 */
	isActivatable : function () {
		var values = this.getValue();
		for (key in values) {
			if (values[key] !== undefined) {
				return true;
			}
		}
		return false;
	},

	/**
	 * @private
	 * Template method that is to get and return serialized filter data for
	 * transmission to the server.
	 * @return {Object/Array} An object or collection of objects containing
	 * key value pairs representing the current configuration of the filter.
	 */
	getSerialArgs : function () {
		var key,
			args = [],
			values = this.menu.getValue();
		for (key in values) {
			args.push({
				type: 'numeric',
				comparison: key,
				value: values[key]
			});
		}
		return args;
	},

	/**
	 * Template method that is to validate the provided Ext.data.Record
	 * against the filters configuration.
	 * @param {Ext.data.Record} record The record to validate
	 * @return {Boolean} true if the record is valid within the bounds
	 * of the filter, false otherwise.
	 */
	validateRecord : function (record) {
		var val = record.get(this.dataIndex),
			values = this.getValue();
		if (values.eq !== undefined && val != values.eq) {
			return false;
		}
		if (values.lt !== undefined && val >= values.lt) {
			return false;
		}
		if (values.gt !== undefined && val <= values.gt) {
			return false;
		}
		return true;
	}
});
/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/** 
 * @class Ext.ux.grid.filter.BooleanFilter
 * @extends Ext.ux.grid.filter.Filter
 * Boolean filters use unique radio group IDs (so you can have more than one!)
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>    
var filters = new Ext.ux.grid.GridFilters({
	...
	filters: [{
		// required configs
		type: 'boolean',
		dataIndex: 'visible'

		// optional configs
		defaultValue: null, // leave unselected (false selected by default)
		yesText: 'Yes',     // default
		noText: 'No'        // default
	}]
});
 * </code></pre>
 */
Ext.ux.grid.filter.BooleanFilter = Ext.extend(Ext.ux.grid.filter.Filter, {
	/**
	 * @cfg {Boolean} defaultValue
	 * Set this to null if you do not want either option to be checked by default. Defaults to false.
	 */
	defaultValue : false,
	/**
	 * @cfg {String} yesText
	 * Defaults to 'Yes'.
	 */
	yesText : 'Yes',
	/**
	 * @cfg {String} noText
	 * Defaults to 'No'.
	 */
	noText : 'No',

	/**
	 * @private
	 * Template method that is to initialize the filter and install required menu items.
	 */
	init : function (config) {
		var gId = Ext.id();
		this.options = [
			new Ext.menu.CheckItem({text: this.yesText, group: gId, checked: this.defaultValue === true}),
			new Ext.menu.CheckItem({text: this.noText, group: gId, checked: this.defaultValue === false})];

		this.menu.add(this.options[0], this.options[1]);

		for(var i=0; i<this.options.length; i++){
			this.options[i].on('click', this.fireUpdate, this);
			this.options[i].on('checkchange', this.fireUpdate, this);
		}
	},

	/**
	 * @private
	 * Template method that is to get and return the value of the filter.
	 * @return {String} The value of this filter
	 */
	getValue : function () {
		return this.options[0].checked;
	},

	/**
	 * @private
	 * Template method that is to set the value of the filter.
	 * @param {Object} value The value to set the filter
	 */
	setValue : function (value) {
		this.options[value ? 0 : 1].setChecked(true);
	},

	/**
	 * @private
	 * Template method that is to get and return serialized filter data for
	 * transmission to the server.
	 * @return {Object/Array} An object or collection of objects containing
	 * key value pairs representing the current configuration of the filter.
	 */
	getSerialArgs : function () {
		var args = {type: 'boolean', value: this.getValue()};
		return args;
	},

	/**
	 * Template method that is to validate the provided Ext.data.Record
	 * against the filters configuration.
	 * @param {Ext.data.Record} record The record to validate
	 * @return {Boolean} true if the record is valid within the bounds
	 * of the filter, false otherwise.
	 */
	validateRecord : function (record) {
		return record.get(this.dataIndex) == this.getValue();
	}
});
Ext.ns('TYPO3.Workspaces.Configuration');

TYPO3.Workspaces.Configuration.StoreFieldArray = [
	{name : 'table'},
	{name : 'uid', type : 'int'},
	{name : 't3ver_oid', type : 'int'},
	{name : 'livepid', type : 'int'},
	{name : 'stage', type: 'int'},
	{name : 'change',type : 'int'},
	{name : 'label_Live'},
	{name : 'label_Workspace'},
	{name : 'label_Stage'},
	{name : 'label_nextStage'},
	{name : 'label_prevStage'},
	{name : 'workspace_Title'},
	{name : 'actions'},
	{name : 'icon_Workspace'},
	{name : 'icon_Live'},
	{name : 'path_Live'},
	{name : 'path_Workspace'},
	{name : 'state_Workspace'},
	{name : 'workspace_Tstamp'},
	{name : 'workspace_Formated_Tstamp'},
	{name : 'allowedAction_nextStage'},
	{name : 'allowedAction_prevStage'},
	{name : 'allowedAction_swap'},
	{name : 'allowedAction_delete'},
	{name : 'allowedAction_edit'},
	{name : 'allowedAction_editVersionedPage'},
	{name : 'allowedAction_view'}

];

TYPO3.Workspaces.MainStore = new Ext.data.GroupingStore({
	storeId : 'workspacesMainStore',
	reader : new Ext.data.JsonReader({
		idProperty : 'id',
		root : 'data',
		totalProperty : 'total'
	}, TYPO3.Workspaces.Configuration.StoreFieldArray),
	groupField: 'path_Workspace',
	paramsAsHash : true,
	sortInfo : {
		field : 'label_Live',
		direction : "ASC"
	},
	remoteSort : true,
	baseParams: {
		depth : 990,
		id: TYPO3.settings.Workspaces.id,
		query: '',
		start: 0,
		limit: 30
	},

	showAction : false,
	listeners : {
		beforeload : function() {
		},
		load : function(store, records) {
		},
		datachanged : function(store) {
		},
		scope : this
	}
});
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Workspaces Team (http://forge.typo3.org/projects/show/typo3v4-workspaces)
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

Ext.ns('TYPO3.Workspaces');
TYPO3.Workspaces.Configuration = {};

TYPO3.Workspaces.Configuration.GridFilters = new Ext.ux.grid.GridFilters({
	encode : false, // json encode the filter query
	local : true, // defaults to false (remote filtering)
	filters : [
		{
			type : 'numeric',
			dataIndex : 'uid'
		},
		{
			type : 'string',
			dataIndex : 'workspace_Title'
		},
		{
			type : 'string',
			dataIndex : 'label_Live'
		},
		{
			type : 'string',
			dataIndex : 'label_Workspace'
		},
		{
			type : 'numeric',
			dataIndex : 'change'
		}
	]
});

TYPO3.Workspaces.Configuration.WsPath = {
	id: 'path_Workspace',
	dataIndex : 'path_Workspace',
	width: 120,
	hidden: true,
	hideable: false,
	sortable: true,
	header : TYPO3.l10n.localize('column.wsPath'),
	renderer: function(value, metaData, record, rowIndex, colIndex, store) {
		var path = record.json.path_Workspace;
		return path;
	},
	filter : {type: 'string'}
};
TYPO3.Workspaces.Configuration.LivePath = {
	id: 'path_Live',
	dataIndex : 'path_Live',
	width: 120,
	hidden: true,
	hideable: true,
	sortable: true,
	header : TYPO3.l10n.localize('column.livePath'),
	renderer: function(value, metaData, record, rowIndex, colIndex, store) {
		var path = record.json.path_Live;
		return path;
	},
	filter : {type: 'string'}
};
TYPO3.Workspaces.Configuration.WsTitleWithIcon = {
	id: 'label_Workspace',
	dataIndex : 'label_Workspace',
	width: 120,
	hideable: true,
	sortable: true,
	header : TYPO3.l10n.localize('column.wsTitle'),
	renderer: function(value, metaData, record, rowIndex, colIndex, store) {
		var dekoClass = 'item-state-' + record.json.state_Workspace;
		value = "<span class=\"" + dekoClass + "\">" + value + "</span>";
		if (record.json.icon_Live === record.json.icon_Workspace) {
			return value;
		} else {
			return "<span class=\"" + record.json.icon_Workspace + "\">&nbsp;</span>&nbsp;" + value;
		}

	},
	filter : {type: 'string'}
};
TYPO3.Workspaces.Configuration.TitleWithIcon = {
	id: 'label_Live',
	dataIndex : 'label_Live',
	width: 120,
	hideable: false,
	sortable: true,
	header : TYPO3.l10n.localize('column.liveTitle'),
	renderer: function(value, metaData, record, rowIndex, colIndex, store) {
		if (record.json.state_Workspace == 'unhidden') {
			var dekoClass = 'item-state-hidden';
		} else {
			var dekoClass = '';
		}

		value = "<span class=\"" + dekoClass + "\">" + value + "</span>";
		return "<span class=\"" + record.json.icon_Live + "\">&nbsp;</span>&nbsp;" + value;
	},
	filter : {type: 'string'}
};
TYPO3.Workspaces.Configuration.ChangeState = {
	id: 'state-change',
	dataIndex : 'change',
	width: 80,
	sortable: true,
	hidden: true,
	header : TYPO3.l10n.localize('column.difference'),
	renderer: function(value, metaData) {
		return value + "%";
	},
	filter : {type: 'numeric'}
};
TYPO3.Workspaces.Configuration.ChangeDate = {
	id: 'workspace_Tstamp',
	dataIndex : 'workspace_Tstamp',
	width: 120,
	sortable: true,
	header : TYPO3.l10n.localize('column.changeDate'),
	renderer: function(value, metaData, record, rowIndex, colIndex, store) {
		return record.json.workspace_Formated_Tstamp;
	},
	hidden: true,
	filter : {type : 'string'}
};

TYPO3.Workspaces.Configuration.SendToPrevStageButton = {
	xtype: 'actioncolumn',
	header:'',
	width: 18,
	hidden: (TYPO3.settings.Workspaces.allView === '1'),
	items:[
		{
			iconCls: 't3-icon t3-icon-extensions t3-icon-extensions-workspaces t3-icon-workspaces-sendtoprevstage',
			tooltip: TYPO3.l10n.localize('tooltip.sendToPrevStage'),
			handler: function(grid, rowIndex, colIndex) {
				var record = TYPO3.Workspaces.MainStore.getAt(rowIndex);
				TYPO3.Workspaces.Actions.sendToPrevStageWindow(record.json.table, record.json.uid);
			}
		}
	]
};

TYPO3.Workspaces.Configuration.SendToNextStageButton = {
	xtype: 'actioncolumn',
	header:'',
	width: 18,
	hidden: (TYPO3.settings.Workspaces.allView === '1'),
	items: [
		{},{	// empty dummy important!!!!
			iconCls: 't3-icon t3-icon-extensions t3-icon-extensions-workspaces t3-icon-workspaces-sendtonextstage',
			tooltip: TYPO3.l10n.localize('tooltip.sendToNextStage'),
			handler: function(grid, rowIndex, colIndex) {
				var record = TYPO3.Workspaces.MainStore.getAt(rowIndex);
				TYPO3.Workspaces.Actions.sendToNextStageWindow(record.json.table, record.json.uid, record.json.t3ver_oid);
			}
		}
	]
};

TYPO3.Workspaces.Configuration.Stage = {
	id: 'label_Stage',
	dataIndex : 'label_Stage',
	width: 80,
	sortable: true,
	header : TYPO3.l10n.localize('column.stage'),
	hidden: false,
	filter : {
		type : 'string'
	},
	renderer: function(value, metaData, record, rowIndex, colIndex, store) {
		var returnCode = '';
		if (record.json.allowedAction_prevStage && TYPO3.settings.Workspaces.allView !== '1') {
			var tempTooltip = TYPO3.Workspaces.Configuration.SendToPrevStageButton.items[0].tooltip;
			TYPO3.Workspaces.Configuration.SendToPrevStageButton.items[0].tooltip += ' &quot;'+ record.json.label_prevStage + '&quot;';
			var prevButton = new Ext.grid.ActionColumn(TYPO3.Workspaces.Configuration.SendToPrevStageButton);
			returnCode += prevButton.renderer(1, metaData, record, rowIndex, 1, store);
			TYPO3.Workspaces.Configuration.SendToPrevStageButton.items[0].tooltip = tempTooltip;
		} else {
			returnCode += "<span class=\"t3-icon t3-icon-empty t3-icon-empty-empty\">&nbsp;</span>";
		}
		returnCode += record.json.label_Stage;
		if (record.json.allowedAction_nextStage && TYPO3.settings.Workspaces.allView !== '1') {
			var tempTooltip = TYPO3.Workspaces.Configuration.SendToNextStageButton.items[1].tooltip;
			TYPO3.Workspaces.Configuration.SendToNextStageButton.items[1].tooltip += ' &quot;'+ record.json.label_nextStage + '&quot;';
			var nextButton = new Ext.grid.ActionColumn(TYPO3.Workspaces.Configuration.SendToNextStageButton);
			returnCode += nextButton.renderer(2, metaData, record, rowIndex, 2, store);
			TYPO3.Workspaces.Configuration.SendToNextStageButton.items[1].tooltip = tempTooltip;
		} else {
			returnCode += "<span class=\"t3-icon t3-icon-empty t3-icon-empty-empty\">&nbsp;</span>";
		}
		return returnCode;
	},
	processEvent : function(name, e, grid, rowIndex, colIndex){
		var m = e.getTarget().className.match(/x-action-col-(\d+)/);
		if(m && m[1] == 0) {
			TYPO3.Workspaces.Configuration.SendToPrevStageButton.items[0].handler(grid, rowIndex, colIndex);
			return false;
		} else if (m && m[1] == 1 ) {
			TYPO3.Workspaces.Configuration.SendToNextStageButton.items[1].handler(grid, rowIndex, colIndex);
			return false;
		}
		return Ext.grid.ActionColumn.superclass.processEvent.apply(this, arguments);
	}
}

TYPO3.Workspaces.Configuration.RowButtons = {
	xtype: 'actioncolumn',
	header: TYPO3.l10n.localize('column.actions'),
	width: 70,
	hideable: false,
	hidden: (TYPO3.settings.Workspaces.allView === '1'),
	menuDisabled: true,
	items: [
		{
			iconCls:'t3-icon t3-icon-actions t3-icon-actions-version t3-icon-version-workspace-preview'
			,tooltip: TYPO3.l10n.localize('tooltip.viewElementAction')
			,handler: function(grid, rowIndex, colIndex) {
				var record = TYPO3.Workspaces.MainStore.getAt(rowIndex);
				TYPO3.Workspaces.Actions.viewSingleRecord(record.json.table, record.json.uid);
			},
			getClass: function(v, meta, rec) {
				if(!rec.json.allowedAction_view) {
					return 'icon-hidden';
				} else {
					return '';
				}
			}
		},
		{
			iconCls:'t3-icon t3-icon-actions t3-icon-actions-document t3-icon-document-open',
			tooltip: TYPO3.l10n.localize('tooltip.editElementAction'),
			handler: function(grid, rowIndex, colIndex) {
				var record = TYPO3.Workspaces.MainStore.getAt(rowIndex);
				var newUrl = 'alt_doc.php?returnUrl=' + Ext.urlEncode({}, document.location.href).replace("?","%3F").replace("=", "%3D").replace(":","%3A").replace("/", "%2f") + '&id=' + TYPO3.settings.Workspaces.id + '&edit[' + record.json.table + '][' + record.json.uid + ']=edit';
				window.location.href = newUrl;
			},
			getClass: function(v, meta, rec) {
				if(!rec.json.allowedAction_edit) {
					return 'icon-hidden';
				} else {
					return '';
				}
			}
		},
		{
			iconCls:'t3-icon t3-icon-actions t3-icon-actions-system t3-icon-system-pagemodule-open',
			tooltip: TYPO3.l10n.localize('tooltip.openPage'),
			handler: function(grid, rowIndex, colIndex) {
				var record = TYPO3.Workspaces.MainStore.getAt(rowIndex);
				if (record.json.table == 'pages') {
					top.loadEditId(record.json.t3ver_oid);
				} else {
					top.loadEditId(record.json.livepid);
				}
			},
			getClass: function(v, meta, rec) {
				if(!rec.json.allowedAction_editVersionedPage || !top.TYPO3.configuration.pageModule) {
					return 'icon-hidden';
				} else {
					return '';
				}
			}
		},
		{
			iconCls:'t3-icon t3-icon-actions t3-icon-actions-version t3-icon-version-document-remove',
			tooltip: TYPO3.l10n.localize('tooltip.discardVersion'),
			handler: function(grid, rowIndex, colIndex) {
				var record = TYPO3.Workspaces.MainStore.getAt(rowIndex);
				var configuration = {
					title: TYPO3.l10n.localize('window.discard.title'),
					msg: TYPO3.l10n.localize('window.discard.message'),
					fn: function(result) {
						if (result == 'yes') {
							TYPO3.Workspaces.Actions.deleteSingleRecord(record.json.table, record.json.uid);
						}
					}
				};

				top.TYPO3.Dialog.QuestionDialog(configuration);
			},
			getClass: function(v, meta, rec) {
				if(!rec.json.allowedAction_delete) {
					return 'icon-hidden';
				} else {
					return '';
				}
			}
		}
	]
};

TYPO3.Workspaces.Configuration.SwapButton = {
	xtype: 'actioncolumn',
	header: '',
	id: 'wsSwapColumn',
	width: 18,
	menuDisabled: true,
	sortable: false,
	hidden: (TYPO3.settings.Workspaces.allView === '1'),
	items: [
		{
			iconCls:'t3-icon t3-icon-actions t3-icon-actions-version t3-icon-version-swap-workspace'
			,tooltip: TYPO3.l10n.localize('tooltip.swap')
			,handler: function(grid, rowIndex, colIndex) {
				var record = TYPO3.Workspaces.MainStore.getAt(rowIndex);
				var configuration = {
					title: TYPO3.l10n.localize('window.swap.title'),
					msg: TYPO3.l10n.localize('window.swap.message'),
					fn: function(result) {
						if (result == 'yes') {
							TYPO3.Workspaces.Actions.swapSingleRecord(record.json.table, record.json.t3ver_oid, record.json.uid);
						}
					}
				};

				top.TYPO3.Dialog.QuestionDialog(configuration);
			},
			getClass: function(v, meta, rec) {
				if(!rec.json.allowedAction_swap) {
					return 'icon-hidden';
				} else {
					return '';
				}
			}
		}
	]
};


/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Workspaces Team (http://forge.typo3.org/projects/show/typo3v4-workspaces)
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

Ext.ns('TYPO3.Workspaces');

TYPO3.Workspaces.Helpers = {
	/**
	 * Gets an form values object like {'element-1':on, 'element-2':on} and returns
	 * the checked results in an array like ['1', '2'].
	 *
	 * @param object values
	 * @param string elementPrefix
	 * @return array
	 */
	getElementIdsFromFormValues: function(values, elementPrefix) {
		var results = [];
		var pattern = new RegExp('^' + elementPrefix + '-' + '(.+)$');

		Ext.iterate(values, function(key, value) {
			if (value == 'on' && pattern.test(key)) {
				results.push(RegExp.$1);
			}
		});

		return results;
	},

	getSendToStageWindow: function(configuration) {
		top.TYPO3.Windows.close('sendToStageWindow');
		return top.TYPO3.Windows.showWindow({
			id: 'sendToStageWindow',
			title: configuration.title,
			items: [
				{
					xtype: 'form',
					id: 'sendToStageForm',
					width: '100%',
					bodyStyle: 'padding: 5px 5px 3px 5px; border-width: 0; margin-bottom: 7px;',
					items: configuration.items
				}
			],
			buttons: [
				{
					text: TYPO3.l10n.localize('ok'),
					handler: configuration.executeHandler
				},
				{
					text: TYPO3.l10n.localize('cancel'),
					handler: function(event) {
						top.TYPO3.Windows.close('sendToStageWindow');
					}
				}
			]
		});
	},

	getElementsArrayOfSelection: function(selection) {
		var elements = [];

		Ext.each(selection, function(item) {
			var element = {
				table: item.data.table,
				t3ver_oid: item.data.t3ver_oid,
				uid: item.data.uid
			}
			elements.push(element);
		});

		return elements;
	}
};
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Workspaces Team (http://forge.typo3.org/projects/show/typo3v4-workspaces)
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


Ext.ns('TYPO3.Workspaces');

TYPO3.Workspaces.Actions = {

	runningMassAction: null,
	currentSendToMode: 'next',
	triggerMassAction: function(action) {

		switch (action) {
			case 'publish':
			case 'swap':
				this.runningMassAction = TYPO3.Workspaces.ExtDirectMassActions.publishWorkspace;
				break;
			case 'discard':
				this.runningMassAction = TYPO3.Workspaces.ExtDirectMassActions.flushWorkspace;
				break;
		}

		this.runMassAction({
			init: true,
			total:0,
			processed:0,
			swap: (action == 'swap')
		});
	},

	runMassAction: function(parameters) {
		if (parameters.init) {
			top.Ext.getCmp('executeMassActionForm').hide();
			top.Ext.getCmp('executeMassActionProgressBar').show();
			top.Ext.getCmp('executeMassActionOkButton').disable();
		}

		var progress = parameters.total > 0 ? parameters.processed / parameters.total : 0;
		var label = parameters.total > 0 ? parameters.processed + '/' + parameters.total : TYPO3.l10n.localize('runMassAction.init');
		top.Ext.getCmp('executeMassActionProgressBar').updateProgress(progress, label, true);

		this.runningMassAction(parameters, TYPO3.Workspaces.Actions.runMassActionCallback);
	},

	runMassActionCallback: function(response) {
		if (response.error) {
			top.Ext.getCmp('executeMassActionProgressBar').hide();
			top.Ext.getCmp('executeMassActionOkButton').hide();
			top.Ext.getCmp('executeMassActionCancleButton').setText(TYPO3.l10n.localize('close'));
			top.Ext.getCmp('executeMassActionForm').show();
			top.Ext.getCmp('executeMassActionForm').update(response.error);
		} else {
			if (response.total > response.processed) {
				TYPO3.Workspaces.Actions.runMassAction(response);
			} else {
				top.Ext.getCmp('executeMassActionProgressBar').hide();
				top.Ext.getCmp('executeMassActionOkButton').hide();
				top.Ext.getCmp('executeMassActionCancleButton').setText(TYPO3.l10n.localize('close'));
				top.Ext.getCmp('executeMassActionForm').show();
				top.Ext.getCmp('executeMassActionForm').update(TYPO3.l10n.localize('runMassAction.done').replace('%d', response.total));
				top.TYPO3.Backend.NavigationContainer.PageTree.refreshTree();
			}
		}
	},
	generateWorkspacePreviewLink: function() {
		TYPO3.Workspaces.ExtDirectActions.generateWorkspacePreviewLink(TYPO3.settings.Workspaces.id, function(response) {
			top.TYPO3.Dialog.InformationDialog({
				title: TYPO3.l10n.localize('previewLink'),
				msg: String.format('<a href="{0}" target="_blank">{0}</a>', response)
			});
		});
	},
	swapSingleRecord: function(table, t3ver_oid, orig_uid) {
		TYPO3.Workspaces.ExtDirectActions.swapSingleRecord(table, t3ver_oid, orig_uid, function(response) {
			TYPO3.Workspaces.MainStore.load();
		});
	},
	deleteSingleRecord: function(table, uid) {
		TYPO3.Workspaces.ExtDirectActions.deleteSingleRecord(table, uid, function(response) {
			TYPO3.Workspaces.MainStore.load();
		});
	},
	viewSingleRecord: function(table, uid) {
		TYPO3.Workspaces.ExtDirectActions.viewSingleRecord(table, uid, function(response) {
			eval(response);
		});
	},
	sendToStageWindow: function(response, selection) {
		if (Ext.isObject(response.error)) {
			TYPO3.Workspaces.Actions.handlerResponseOnExecuteAction(response);
		} else {
			var dialog = TYPO3.Workspaces.Helpers.getSendToStageWindow({
				title: response.title,
				items: response.items,
				executeHandler: function(event) {
					var values = top.Ext.getCmp('sendToStageForm').getForm().getValues();
					affects = response.affects;
					affects.elements = TYPO3.Workspaces.Helpers.getElementsArrayOfSelection(selection);
					var parameters = {
						affects: affects,
						receipients: TYPO3.Workspaces.Helpers.getElementIdsFromFormValues(values, 'receipients'),
						additional: values.additional,
						comments: values.comments
					};

					TYPO3.Workspaces.Actions.sendToStageExecute(parameters);
					top.TYPO3.Windows.close('sendToStageWindow');
					TYPO3.Workspaces.MainStore.reload();
					top.TYPO3.Backend.NavigationContainer.PageTree.refreshTree();
				}
			});
		}
	},
	sendToNextStageWindow: function(table, uid, t3ver_oid) {
		TYPO3.Workspaces.ExtDirectActions.sendToNextStageWindow(uid, table, t3ver_oid, function(response) {
			TYPO3.Workspaces.Actions.currentSendToMode = 'next';
			TYPO3.Workspaces.Actions.sendToStageWindow(response);
		});
	},
	sendToPrevStageWindow: function(table, uid) {
		TYPO3.Workspaces.ExtDirectActions.sendToPrevStageWindow(uid, table, function(response) {
			TYPO3.Workspaces.Actions.currentSendToMode = 'prev';
			TYPO3.Workspaces.Actions.sendToStageWindow(response);
		});
	},
	sendToSpecificStageWindow: function(selection, nextStage) {
		TYPO3.Workspaces.ExtDirectActions.sendToSpecificStageWindow(nextStage, function(response) {
			TYPO3.Workspaces.Actions.currentSendToMode = 'specific';
			TYPO3.Workspaces.Actions.sendToStageWindow(response, selection);
		});
	},
	sendToStageExecute: function (parameters) {
		switch (TYPO3.Workspaces.Actions.currentSendToMode) {
			case 'next':
				TYPO3.Workspaces.ExtDirectActions.sendToNextStageExecute(parameters, TYPO3.Workspaces.Actions.handlerResponseOnExecuteAction);
			break;
			case 'prev':
				TYPO3.Workspaces.ExtDirectActions.sendToPrevStageExecute(parameters, TYPO3.Workspaces.Actions.handlerResponseOnExecuteAction);
			break;
			case 'specific':
				TYPO3.Workspaces.ExtDirectActions.sendToSpecificStageExecute(parameters, TYPO3.Workspaces.Actions.handlerResponseOnExecuteAction);
			break;
		}

	},
	updateColModel: function(colModel) {
		var dataArray = [];
		for (var i = 0; i < colModel.config.length; i++) {
			if (colModel.config[i].dataIndex !== '') {
				dataArray.push({
					'position': i,
					'column': colModel.config[i].dataIndex,
					'hidden': colModel.config[i].hidden ? 1 : 0
				});
			}
		}
		TYPO3.Workspaces.ExtDirectActions.saveColumnModel(dataArray);
	},
	loadColModel: function(grid) {
		TYPO3.Workspaces.ExtDirectActions.loadColumnModel(function(response) {
			var colModel = grid.getColumnModel();
			for (var field in response) {
				var colIndex = colModel.getIndexById(field);
				if (colIndex != -1) {
					colModel.setHidden(colModel.getIndexById(field), (response[field].hidden == 1 ? true : false));
					colModel.moveColumn(colModel.getIndexById(field), response[field].position);
				}
			}
		});
	},
	handlerResponseOnExecuteAction: function(response) {
		if (!Ext.isObject(response)) {
			response = { error: { message: TYPO3.l10n.localize('error.noResponse') }};
		}

		if (Ext.isObject(response.error)) {
			var error = response.error;
			var code = (error.code ? ' #' + error.code : '');
			top.TYPO3.Dialog.ErrorDialog({ title: 'Error' + code, msg: error.message });
		}
	},

	/**
	 * Process "send to next stage" action.
	 *
	 * This method is used in the split frontend preview part.
	 *
	 * @return void
	 *
	 * @author Michael Klapper <development@morphodo.com>
	 */
	sendPageToNextStage: function () {
		TYPO3.Workspaces.ExtDirectActions.sendPageToNextStage(TYPO3.settings.Workspaces.id, function (response) {
			if (Ext.isObject(response.error)) {
				TYPO3.Workspaces.Actions.handlerResponseOnExecuteAction(response);
			} else {
				var dialog = TYPO3.Workspaces.Helpers.getSendToStageWindow({
					title: TYPO3.l10n.localize('nextStage'),
					items: response.items.items,
					executeHandler: function(event) {
						var values = top.Ext.getCmp('sendToStageForm').getForm().getValues();
						affects = response.affects;
						var parameters = {
							affects: affects,
							receipients: TYPO3.Workspaces.Helpers.getElementIdsFromFormValues(values, 'receipients'),
							additional: values.additional,
							comments: values.comments,
							stageId: response.stageId
						};
						TYPO3.Workspaces.ExtDirectActions.sentCollectionToStage(parameters, function (response) {
							TYPO3.Workspaces.Actions.handlerResponseOnExecuteAction(response);
							TYPO3.Workspaces.ExtDirectActions.updateStageChangeButtons(TYPO3.settings.Workspaces.id, TYPO3.Workspaces.Actions.updateStageChangeButtons);

							if (response.refreshLivePanel == true) {
								Ext.getCmp('livePanel').refresh();
								Ext.getCmp('livePanel-hbox').refresh();
								Ext.getCmp('livePanel-vbox').refresh();
							}
						});
						top.TYPO3.Windows.close('sendToStageWindow');
					}
				});
			}
		});
	},

	/**
	 * Process "send to previous stage" action.
	 *
	 * This method is used in the split frontend preview part.
	 *
	 * @return void
	 *
	 * @author Michael Klapper <development@morphodo.com>
	 */
	sendPageToPrevStage: function () {
		TYPO3.Workspaces.ExtDirectActions.sendPageToPreviousStage(TYPO3.settings.Workspaces.id, function (response) {
			if (Ext.isObject(response.error)) {
				TYPO3.Workspaces.Actions.handlerResponseOnExecuteAction(response);
			} else {
				var dialog = TYPO3.Workspaces.Helpers.getSendToStageWindow({
					title: TYPO3.l10n.localize('nextStage'),
					items: response.items.items,
					executeHandler: function(event) {
						var values = top.Ext.getCmp('sendToStageForm').getForm().getValues();

						affects = response.affects;
						var parameters = {
							affects: affects,
							receipients: TYPO3.Workspaces.Helpers.getElementIdsFromFormValues(values, 'receipients'),
							additional: values.additional,
							comments: values.comments,
							stageId: response.stageId
						};
						TYPO3.Workspaces.ExtDirectActions.sentCollectionToStage(parameters, function (response) {
							TYPO3.Workspaces.Actions.handlerResponseOnExecuteAction(response);
							TYPO3.Workspaces.ExtDirectActions.updateStageChangeButtons(TYPO3.settings.Workspaces.id, TYPO3.Workspaces.Actions.updateStageChangeButtons);
						});
						top.TYPO3.Windows.close('sendToStageWindow');
					}
				});
			}
		});
	},

	/**
	 * Update the visible state for the buttons "next stage", "prev stage" and "discard".
	 *
	 * This method is used in the split frontend preview part.
	 *
	 * @param object response
	 * @return void
	 *
	 * @author Michael Klapper <development@morphodo.com>
	 */
	updateStageChangeButtons: function (response) {

		if (Ext.isObject(response.error)) {
				TYPO3.Workspaces.Actions.handlerResponseOnExecuteAction(response);
		} else {
			for (componentId in response) {
				if (response[componentId].visible) {
					if (!top.Ext.getCmp(componentId).isVisible()) {
						top.Ext.getCmp(componentId).show();
					}
					top.Ext.getCmp(componentId).setText(response[componentId].text.substr(0, 35));
					top.Ext.getCmp(componentId).setTooltip(response[componentId].text);
				} else {
					if (top.Ext.getCmp(componentId).isVisible()) {
						top.Ext.getCmp(componentId).hide();
					}
				}
			}
				// force doLayout on each plugin containing the preview panel
			Ext.getCmp('preview').plugins.each(function (item, index) {
				if (Ext.isFunction(item.doLayout)) {
					item.doLayout();
				}
			});
		}
	},

	/**
	 * Process the discard all items from current page action.
	 *
	 * This method is used in the split frontend preview part.
	 *
	 * @return void
	 *
	 * @author Michael Klapper <development@morphodo.com>
	 */
	discardPage: function () {
		var configuration = {
			title: TYPO3.l10n.localize('window.discardAll.title'),
			msg: TYPO3.l10n.localize('window.discardAll.message'),
			fn: function(result) {
				if (result == 'yes') {
					TYPO3.Workspaces.ExtDirectActions.discardStagesFromPage(TYPO3.settings.Workspaces.id, function (response) {
						TYPO3.Workspaces.Actions.handlerResponseOnExecuteAction(response);
						TYPO3.Workspaces.ExtDirectActions.updateStageChangeButtons(TYPO3.settings.Workspaces.id, TYPO3.Workspaces.Actions.updateStageChangeButtons);
						Ext.getCmp('wsPanel').refresh();
						Ext.getCmp('wsPanel-hbox').refresh();
						Ext.getCmp('wsPanel-vbox').refresh();
					});
				}
			}
		};

		top.TYPO3.Dialog.QuestionDialog(configuration);
	}
};

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Workspaces Team (http://forge.typo3.org/projects/show/typo3v4-workspaces)
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


Ext.ns('TYPO3.Workspaces');

TYPO3.Workspaces.Component = {};

TYPO3.Workspaces.RowDetail = {};
TYPO3.Workspaces.RowDetail.rowDataStore = new Ext.data.DirectStore({
	storeId : 'rowDetailService',
	root : 'data',
	totalProperty : 'total',
	idProperty : 'id',
	fields : [
		{name : 'uid'},
		{name : 't3ver_oid'},
		{name : 'table'},
		{name : 'stage'},
		{name : 'diff'},
		{name : 'path_Live'},
		{name : 'label_Stage'},
		{name : 'stage_position'},
		{name : 'stage_count'},
		{name : 'live_record'},
		{name : 'comments'},
		{name : 'icon_Live'},
		{name : 'icon_Workspace'}
	]
});

Ext.override(Ext.XTemplate, {
	exists: function(o, name) {
		return typeof o != 'undefined' && o != null && o!='';
	}
});

Ext.override(Ext.grid.GroupingView, {
	constructId : function(value, field, idx) {
		var cfg = this.cm.config[idx],
			groupRenderer = cfg.groupRenderer || cfg.renderer,
			val = (this.groupMode == 'value') ? value : this.getGroup(value, {data:{}}, groupRenderer, 0, idx, this.ds);

		var id = this.getPrefix(field) + val;
		id = id.replace(/[^a-zA-Z0-9_]/g, '');
		return id;
	}
});


TYPO3.Workspaces.RowDetail.rowDetailTemplate = new Ext.XTemplate(
	'<div class="t3-workspaces-foldoutWrapper">',
	'<tpl for=".">',
		'<tpl>',
			'<table class="char_select_template" width="100%">',
				'<tr class="header">',
					'<th class="char_select_profile_titleLeft">',
						'{[TYPO3.l10n.localize(\'workspace_version\')]}',
					'</th>',
					'<th class="char_select_profile_titleRight">',
						'{[TYPO3.l10n.localize(\'live_workspace\')]}',
					'</th>',
				'</tr>',
				'<tr>',
					'<td class="t3-workspaces-foldout-subheaderLeft">',
						'{[String.format(TYPO3.l10n.localize(\'current_step\'), values.label_Stage, values.stage_position, values.stage_count)]}',
					'</td>',
					'<td class="t3-workspaces-foldout-subheaderRight">',
						'{[String.format(TYPO3.l10n.localize(\'path\'), values.path_Live)]}',
					'</td>',
				'</tr>',
				'<tr>',
					'<td class="t3-workspaces-foldout-td-contentDiffLeft">',
						'<div class="t3-workspaces-foldout-contentDiff-container">',
							'<table class="t3-workspaces-foldout-contentDiff">',
								'<tr><th><span class="{icon_Workspace}">&nbsp;</span></th><td>{type_Workspace}</td></tr>',
								'<tpl for="diff">',
									'<tr><th>{label}</th><td>',
										'<tpl if="this.exists(content)">',
											'{content}',
										'</tpl>',
									'</td></tr>',
								'</tpl>',
							'</table>',
						'</div>',
					'</td>',
					'<td class="t3-workspaces-foldout-td-contentDiffRight">',
						'<div class="t3-workspaces-foldout-contentDiff-container">',
							'<table class="t3-workspaces-foldout-contentDiff">',
								'<tr><th><span class="{icon_Live}"></span></th><td>{type_Live}</td></tr>',
								'<tpl for="live_record">',
									'<tr><th>{label}</th><td>',
										'<tpl if="this.exists(content)">',
											'{content}',
										'</tpl>',
									'</td></tr>',
								'</tpl>',
							'</table>',
						'</div>',
					'</td>',
				'</tr>',
				'<tpl if="this.hasComments(comments)">',
				'<tr>',
					'<td class="t3-workspaces-foldout-subheaderLeft">',
						'<div class="t3-workspaces-foldout-subheader-container">',
							'{[String.format(TYPO3.l10n.localize(\'comments\'), values.stage_position, values.label_Stage)]}',
						'</div>',
					'</td>',
					'<td class="t3-workspaces-foldout-subheaderRight">',
						'&nbsp;',
					'</td>',
				'</tr>',
				'<tr>',
					'<td class="char_select_profile_stats">',
						'<div class="t3-workspaces-comments">',
						'<tpl for="comments">',
							'<div class="t3-workspaces-comments-singleComment">',
								'<div class="t3-workspaces-comments-singleComment-author">',
									'{user_username}',
								'</div>',
								'<div class="t3-workspaces-comments-singleComment-content-wrapper"><div class="t3-workspaces-comments-singleComment-content">',
									'<span class="t3-workspaces-comments-singleComment-content-date">{tstamp}</span>',
									'<div class="t3-workspaces-comments-singleComment-content-title">@ {[String.format(TYPO3.l10n.localize(\'stage\'), values.stage_title)]}</div>',
									'<div class="t3-workspaces-comments-singleComment-content-text">{user_comment}</div>',
								'</div></div>',
							'</div>',
						'</tpl>',
						'</div>',
					'</td>',
					'<td class="char_select_profile_title">',
						'&nbsp;',
					'</td>',
					'</tpl>',
				'</tr>',
			'</table>',
		'</tpl>',
	'</tpl>',
	'</div>',
	'<div class="x-clear"></div>',
	{
		hasComments: function(comments){
			return comments.length>0;
		}
	}
);

TYPO3.Workspaces.RowDetail.rowDataView = new Ext.DataView({
	store: TYPO3.Workspaces.RowDetail.rowDataStore,
	tpl: TYPO3.Workspaces.RowDetail.rowDetailTemplate
});

Ext.ns('Ext.ux.TYPO3.Workspace');
Ext.ux.TYPO3.Workspace.RowPanel = Ext.extend(Ext.Panel, {
	constructor: function(config) {
		config = config || {
			frame:true,
			width:'100%',
			autoHeight:true,
			layout:'fit',
			title: TYPO3.l10n.localize('rowDetails')
		};
		Ext.apply(this, config);
		Ext.ux.TYPO3.Workspace.RowPanel.superclass.constructor.call(this, config);
	}
});

TYPO3.Workspaces.RowExpander = new Ext.grid.RowExpander({
	menuDisabled: true,
	hideable: false,
	getRowClass : function(record, rowIndex, p, ds) {
		cssClass = '';
		if (!record.json.allowedAction_nextStage && !record.json.allowedAction_prevStage && !record.json.allowedAction_swap) {
			cssClass = 'typo3-workspaces-row-disabled ';
		}
		if(this.state[record.id]) {
			cssClass += 'x-grid3-row-expanded';
		} else {
			cssClass += 'x-grid3-row-collapsed';
		}
		return cssClass;
	},
	remoteDataMethod : function (record, index) {
		TYPO3.Workspaces.RowDetail.rowDataStore.baseParams = {
			uid: record.json.uid,
			table: record.json.table,
			stage: record.json.stage,
			t3ver_oid: record.json.t3ver_oid,
			path_Live: record.json.path_Live,
			label_Stage: record.json.label_Stage
		};
		TYPO3.Workspaces.RowDetail.rowDataStore.load({
			callback: function(r, options, success) {
				TYPO3.Workspaces.RowExpander.expandRow(index);
			}
		});
		new Ext.ux.TYPO3.Workspace.RowPanel({
			renderTo: 'remData' + index,
			items: TYPO3.Workspaces.RowDetail.rowDataView
		});
	},
	onMouseDown : function(e, t) {
		tObject = Ext.get(t);
		if (tObject.hasClass('x-grid3-row-expander')) {
			e.stopEvent();
			var row = e.getTarget('.x-grid3-row');
			this.toggleRow(row);
		}
	},
	toggleRow : function(row) {
		this[Ext.fly(row).hasClass('x-grid3-row-collapsed') ? 'beforeExpand' : 'collapseRow'](row);
	},
	beforeExpand : function(row) {
		if (typeof row == 'number') {
			row = this.grid.view.getRow(row);
		}
		var record = this.grid.store.getAt(row.rowIndex);
		var body = Ext.DomQuery.selectNode('tr:nth(2) div.x-grid3-row-body', row);

		if (this.fireEvent('beforexpand', this, record, body, row.rowIndex) !== false) {
			this.tpl = new Ext.Template("<div id=\"remData" + row.rowIndex + "\" class=\"rem-data-expand\"><\div>");
			if (this.tpl && this.lazyRender) {
				body.innerHTML = this.getBodyContent(record, row.rowIndex);
			}
		}
			// toggle remoteData loading
		this.remoteDataMethod(record, row.rowIndex);
		return true;
	},
	expandRow : function(row) {
		if (typeof row == 'number') {
			row = this.grid.view.getRow(row);
		}
		var record = this.grid.store.getAt(row.rowIndex);
		var body = Ext.DomQuery.selectNode('tr:nth(2) div.x-grid3-row-body', row);
		this.state[record.id] = true;
		Ext.fly(row).replaceClass('x-grid3-row-collapsed', 'x-grid3-row-expanded');
		this.fireEvent('expand', this, record, body, row.rowIndex);
		var i;
		for(i = 0; i < this.grid.store.getCount(); i++) {
			if(i != row.rowIndex) {
				this.collapseRow(i);
			}
		}
	},
	collapseRow : function(row) {
		if (typeof row == 'number') {
			row = this.grid.view.getRow(row);
		}
		var record = this.grid.store.getAt(row.rowIndex);
		var body = Ext.fly(row).child('tr:nth(1) div.x-grid3-row-body', true);
		if (this.fireEvent('beforcollapse', this, record, body, row.rowIndex) !== false) {
			this.state[record.id] = false;
			Ext.fly(row).replaceClass('x-grid3-row-expanded', 'x-grid3-row-collapsed');
			this.fireEvent('collapse', this, record, body, row.rowIndex);
		}
	}
});




/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Workspaces Team (http://forge.typo3.org/projects/show/typo3v4-workspaces)
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

Ext.ns('TYPO3.Workspaces');

TYPO3.Workspaces.Toolbar = {};

TYPO3.Workspaces.Toolbar.search =  new Ext.app.SearchField({
	store: TYPO3.Workspaces.MainStore,
	trigger1Class : 't3-icon t3-icon-actions t3-icon-actions-input t3-icon-input-clear t3-tceforms-input-clearer',
	trigger2Class : 't3-icon t3-icon-actions t3-icon-actions-system t3-icon-system-tree-search-open',
	width: 200
});

TYPO3.Workspaces.Toolbar.selectActionStore = new Ext.data.DirectStore({
	storeId : 'stagesService',
	root : 'data',
	totalProperty : 'total',
	idProperty : 'uid',
	fields : [
		{name : 'uid'},
		{name : 'title'}
	],
	listeners : {
		load : function(store, records) {
			if (records.length == 0) {
				TYPO3.Workspaces.Toolbar.selectStateActionCombo.hide();
			} else {
				TYPO3.Workspaces.Toolbar.selectStateActionCombo.show();
				TYPO3.Workspaces.WorkspaceGrid.colModel.setHidden(0, false);
			}
		}
	}
});

TYPO3.Workspaces.Toolbar.selectStateActionCombo = new Ext.form.ComboBox({
	width: 150,
	listWidth: 350,
	lazyRender: true,
	valueField: 'uid',
	displayField: 'title',
	mode: 'local',
	emptyText: TYPO3.l10n.localize('chooseAction'),
	selectOnFocus: true,
	disabled : true,
	hidden : true,	 // we hide it by default and show it in case there are any actions available
	triggerAction: 'all',
	editable: false,
	forceSelection: true,
	store: TYPO3.Workspaces.Toolbar.selectActionStore,
	listeners: {
		'select' : function () {
			var selection = TYPO3.Workspaces.WorkspaceGrid.getSelectionModel().getSelections();
			TYPO3.Workspaces.Actions.sendToSpecificStageWindow(selection, this.getValue());
		}
	}
});

TYPO3.Workspaces.Toolbar.selectMassActionStore = new Ext.data.DirectStore({
	storeId : 'stagesService',
	root : 'data',
	totalProperty : 'total',
	idProperty : 'action',
	fields : [
		{name : 'action'},
		{name : 'title'}
	],
	listeners : {
		load : function(store, records) {
			if (records.length == 0 || TYPO3.settings.Workspaces.singleView === '1') {
				TYPO3.Workspaces.Toolbar.selectStateMassActionCombo.hide();
			} else {
				TYPO3.Workspaces.Toolbar.selectStateMassActionCombo.show();
			}
		}
	}
});

TYPO3.Workspaces.Toolbar.selectStateMassActionCombo = new Ext.form.ComboBox({
	width: 150,
	lazyRender: true,
	valueField: 'action',
	displayField: 'title',
	mode: 'local',
	emptyText: TYPO3.l10n.localize('chooseMassAction'),
	selectOnFocus: true,
	triggerAction: 'all',
	editable: false,
	hidden : true,	 // we hide it by default and show it in case there are any actions available
	forceSelection: true,
	store: TYPO3.Workspaces.Toolbar.selectMassActionStore,
	listeners: {
		'select' : function (combo, record) {
			var label = '';
			var affectWholeWorkspaceWarning = TYPO3.l10n.localize('tooltip.affectWholeWorkspace');
			switch (record.data.action) {
				case 'publish':
					label = TYPO3.l10n.localize('tooltip.publishAll');
					break;
				case 'swap':
					label = TYPO3.l10n.localize('tooltip.swapAll');
					break;
				case 'discard':
					label = TYPO3.l10n.localize('tooltip.discardAll');
					break;
			}
			top.TYPO3.Windows.close('executeMassActionWindow');
			var dialog = top.TYPO3.Windows.showWindow({
				id: 'executeMassActionWindow',
				title: TYPO3.l10n.localize('window.massAction.title'),
				items: [
					{
						xtype: 'form',
						id: 'executeMassActionForm',
						width: '100%',
						html: label + '<br /><br />' + affectWholeWorkspaceWarning,
						bodyStyle: 'padding: 5px 5px 3px 5px; border-width: 0; margin-bottom: 7px;'
					},
					{
						xtype: 'progress',
						id: 'executeMassActionProgressBar',
						autoWidth: true,
						autoHeight: true,
						hidden: true,
						value: 0
					}
				],
				buttons: [
					{
						id: 'executeMassActionOkButton',
						data: record.data,
						scope: this,
						text: TYPO3.l10n.localize('ok'),
						disabled:false,
						handler: function(event) {
							TYPO3.Workspaces.Actions.triggerMassAction(event.data.action);
						}
					},
					{
						id: 'executeMassActionCancleButton',
						scope: this,
						text: TYPO3.l10n.localize('cancel'),
						handler: function() {
							top.TYPO3.Windows.close('executeMassActionWindow');
							// if clicks during action - this also interrupts the running process -- not the nices way but efficient
							top.TYPO3.ModuleMenu.App.reloadFrames();
						}
					}
				]
			});
		}
	}
});

TYPO3.Workspaces.Toolbar.Pager = new Ext.PagingToolbar({
	store :  TYPO3.Workspaces.MainStore,
	pageSize : 30,
	displayInfo: false,
	plugins : [ TYPO3.Workspaces.Configuration.GridFilters ]
});

/****************************************************
 * Depth menu
 ****************************************************/
TYPO3.Workspaces.Toolbar.depthFilter = new Ext.form.ComboBox({
	width: 150,
	lazyRender: true,
	valueField: 'depth',
	displayField: 'label',
	id: 'depthSelector',
	mode: 'local',
	emptyText: TYPO3.l10n.localize('depth'),
	selectOnFocus: true,
	triggerAction: 'all',
	editable: false,
	forceSelection: true,
	hidden: (TYPO3.settings.Workspaces.singleView === '1'),
	store: new Ext.data.SimpleStore({
		autoLoad: true,
		fields: ['depth','label'],
		data : [
			['0', TYPO3.l10n.localize('depth_0')],
			['1', TYPO3.l10n.localize('depth_1')],
			['2', TYPO3.l10n.localize('depth_2')],
			['3', TYPO3.l10n.localize('depth_3')],
			['4', TYPO3.l10n.localize('depth_4')],
			['999', TYPO3.l10n.localize('depth_infi')]
		]
	}),
	value: 999,
	listeners: {
		'select': {
			fn: function(cmp, rec, index) {
				var depth = rec.get('depth');
				TYPO3.Workspaces.MainStore.setBaseParam('depth', depth);
				TYPO3.Workspaces.MainStore.load({
					params: {
						wsId: 0
					}
				});
			}
		}
	}
});

TYPO3.Workspaces.Toolbar.FullTopToolbar = [
	TYPO3.Workspaces.Toolbar.depthFilter,
	{xtype: 'tbfill'},
	TYPO3.Workspaces.Toolbar.search
];

TYPO3.Workspaces.Toolbar.FullBottomBar = [
	(TYPO3.settings.Workspaces.isLiveWorkspace == true) ? {hidden: true} : TYPO3.Workspaces.Toolbar.selectStateActionCombo,
	(TYPO3.settings.Workspaces.isLiveWorkspace == true) ? {hidden: true} : '-',
	(TYPO3.settings.Workspaces.isLiveWorkspace == true) ? {hidden: true} : TYPO3.Workspaces.Toolbar.selectStateMassActionCombo,
	{xtype: 'tbfill'},
	TYPO3.Workspaces.Toolbar.Pager
];

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Workspaces Team (http://forge.typo3.org/projects/show/typo3v4-workspaces)
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

Ext.ns('TYPO3.Workspaces');

Ext.override(Ext.grid.GridView, {
	beforeColMenuShow : function() {
		var colModel = this.cm,
			colCount = colModel.getColumnCount(),
			colMenu = this.colMenu,
			i, text;

		colMenu.removeAll();

		for (i = 0; i < colCount; i++) {
			if (colModel.config[i].hideable !== false) {
				text = colModel.getColumnHeader(i);
				if (colModel.getColumnId(i) === 'wsSwapColumn') {
					text = TYPO3.l10n.localize('column.wsSwapColumn');
				}
				colMenu.add(new Ext.menu.CheckItem({
					text: text,
					itemId: 'col-' + colModel.getColumnId(i),
					checked: !colModel.isHidden(i),
					disabled: colModel.config[i].hideable === false,
					hideOnClick: false
				}));
			}
		}
	}
});

/** override mousedown for grid to select checkbox respecting singleSelect */
Ext.override(Ext.grid.CheckboxSelectionModel, {
	handleMouseDown: function(g, rowIndex, e) {
		e.stopEvent();
		if (this.isSelected(rowIndex)) {
			this.deselectRow(rowIndex);
		} else {
			this.selectRow(rowIndex, true);
			this.grid.getView().focusRow(rowIndex);
		}
	}
});

TYPO3.Workspaces.SelectionModel = new Ext.grid.CheckboxSelectionModel({
	singleSelect: false,
	hidden: true,
	listeners: {
		beforerowselect : function (selection, rowIndex, keep, rec) {
			if (rec.json.allowedAction_nextStage || rec.json.allowedAction_prevStage || rec.json.allowedAction_swap) {
				return true;
			} else {
				return false;
			}
		},
		selectionchange: function (selection) {
			var record = selection.grid.getSelectionModel().getSelections();
			if (record.length > 0) {
				TYPO3.Workspaces.Toolbar.selectStateActionCombo.setDisabled(false);
				TYPO3.Workspaces.Toolbar.selectStateMassActionCombo.setDisabled(true);
			} else {
				TYPO3.Workspaces.Toolbar.selectStateActionCombo.setDisabled(true);
				TYPO3.Workspaces.Toolbar.selectStateMassActionCombo.setDisabled(false);
			}
		}
	}
});

TYPO3.Workspaces.WorkspaceGrid = new Ext.grid.GridPanel({
	initColModel: function() {
		if (TYPO3.settings.Workspaces.isLiveWorkspace) {
			this.colModel = new Ext.grid.ColumnModel({
				columns: [
					TYPO3.Workspaces.RowExpander,
					{id: 'uid', dataIndex : 'uid', width: 40, sortable: true, header : TYPO3.l10n.localize('column.uid'), hidden: true, filterable : true },
					{id: 't3ver_oid', dataIndex : 't3ver_oid', width: 40, sortable: true, header : TYPO3.l10n.localize('column.oid'), hidden: true, filterable : true },
					{id: 'workspace_Title', dataIndex : 'workspace_Title', width: 120, sortable: true, header : TYPO3.l10n.localize('column.workspaceName'), hidden: true, filter : {type : 'string'}},
					TYPO3.Workspaces.Configuration.WsPath,
					TYPO3.Workspaces.Configuration.LivePath,
					TYPO3.Workspaces.Configuration.WsTitleWithIcon,
					TYPO3.Workspaces.Configuration.TitleWithIcon,
					TYPO3.Workspaces.Configuration.ChangeDate
				],
				listeners: {

					columnmoved: function(colModel) {
						TYPO3.Workspaces.Actions.updateColModel(colModel);
					},
					hiddenchange: function(colModel) {
						TYPO3.Workspaces.Actions.updateColModel(colModel);
					}
				}
			});
		} else {
				this.colModel = new Ext.grid.ColumnModel({
				columns: [
					TYPO3.Workspaces.SelectionModel,
					TYPO3.Workspaces.RowExpander,
					{id: 'uid', dataIndex : 'uid', width: 40, sortable: true, header : TYPO3.l10n.localize('column.uid'), hidden: true, filterable : true },
					{id: 't3ver_oid', dataIndex : 't3ver_oid', width: 40, sortable: true, header : TYPO3.l10n.localize('column.oid'), hidden: true, filterable : true },
					{id: 'workspace_Title', dataIndex : 'workspace_Title', width: 120, sortable: true, header : TYPO3.l10n.localize('column.workspaceName'), hidden: true, filter : {type : 'string'}},
					TYPO3.Workspaces.Configuration.WsPath,
					TYPO3.Workspaces.Configuration.LivePath,
					TYPO3.Workspaces.Configuration.WsTitleWithIcon,
					TYPO3.Workspaces.Configuration.SwapButton,
					TYPO3.Workspaces.Configuration.TitleWithIcon,
					TYPO3.Workspaces.Configuration.ChangeDate,
					TYPO3.Workspaces.Configuration.ChangeState,
					TYPO3.Workspaces.Configuration.Stage,
					TYPO3.Workspaces.Configuration.RowButtons
				],
				listeners: {

					columnmoved: function(colModel) {
						TYPO3.Workspaces.Actions.updateColModel(colModel);
					},
					hiddenchange: function(colModel) {
						TYPO3.Workspaces.Actions.updateColModel(colModel);
					}
				}
			});
		}

	},
	border : true,
	store : TYPO3.Workspaces.MainStore,
	colModel : null,
	sm: TYPO3.Workspaces.SelectionModel,
	loadMask : true,
	height: 630,
	stripeRows: true,
		// below the grid we need 40px space for the legend
	heightOffset: 40,
	plugins : [
		TYPO3.Workspaces.RowExpander,
		TYPO3.Workspaces.Configuration.GridFilters,
		new Ext.ux.plugins.FitToParent()
	],
	view : new Ext.grid.GroupingView({
		forceFit: true,
		groupTextTpl : '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "' + TYPO3.l10n.localize('items') + '" : "' + TYPO3.l10n.localize('item') + '"]})',
		enableGroupingMenu: false,
  		enableNoGroups: false,
		hideGroupedColumn: true
	}),
	bbar : TYPO3.Workspaces.Toolbar.FullBottomBar,
	tbar : TYPO3.Workspaces.Toolbar.FullTopToolbar
});
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Workspaces Team (http://forge.typo3.org/projects/show/typo3v4-workspaces)
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

Ext.ns('TYPO3.Workspaces');

TYPO3.Workspaces.App = {

	init : function() {
		TYPO3.Workspaces.MainStore.load();
		TYPO3.Workspaces.Toolbar.selectActionStore.load();
		TYPO3.Workspaces.Toolbar.selectMassActionStore.load();
		TYPO3.Workspaces.WorkspaceGrid.initColModel();
		TYPO3.Workspaces.WorkspaceGrid.render('workspacegrid');
	}
};

Ext.onReady(function() {
	Ext.state.Manager.setProvider(new TYPO3.state.ExtDirectProvider({
		key: 'moduleData.Workspaces.States',
		autoRead: false
	}));

	if (Ext.isObject(TYPO3.settings.Workspaces.States)) {
		Ext.state.Manager.getProvider().initState(TYPO3.settings.Workspaces.States);
	}

	// Quicktips initialisieren
	Ext.QuickTips.init();

	// rearrange columns in grid
	TYPO3.Workspaces.Actions.loadColModel(TYPO3.Workspaces.WorkspaceGrid);

	// late binding of ExtDirect
	TYPO3.Workspaces.Toolbar.selectMassActionStore.proxy = new Ext.data.DirectProxy({
		directFn : TYPO3.Workspaces.ExtDirectMassActions.getMassStageActions
	});
	// late binding of ExtDirect
	TYPO3.Workspaces.Toolbar.selectActionStore.proxy = new Ext.data.DirectProxy({
		directFn : TYPO3.Workspaces.ExtDirect.getStageActions
	});

	TYPO3.Workspaces.RowDetail.rowDataStore.proxy = new Ext.data.DirectProxy({
		directFn: TYPO3.Workspaces.ExtDirect.getRowDetails
	});
	// late binding of ExtDirect
	TYPO3.Workspaces.MainStore.proxy = new Ext.data.DirectProxy({
		directFn : TYPO3.Workspaces.ExtDirect.getWorkspaceInfos
	});
	// fire grid
	var WS = new TYPO3.Workspaces.App.init();


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

Ext.ns('TYPO3.state');

/**
 * Creates new ExtDirectProvider
 * @constructor
 * @param {Object} config Configuration object
 * @author Jozef Sakalos
 * @author Steffen Kamper
 */

TYPO3.state.ExtDirectProvider = function(config) {

	this.addEvents(
		/**
		 * @event readsuccess
		 * Fires after state has been successfully received from server and restored
		 * @param {HttpProvider} this
		 */
			'readsuccess',
		/**
		 * @event readfailure
		 * Fires in the case of an error when attempting to read state from server
		 * @param {HttpProvider} this
		 */
			'readfailure',
		/**
		 * @event savesuccess
		 * Fires after the state has been successfully saved to server
		 * @param {HttpProvider} this
		 */
			'savesuccess',
		/**
		 * @event savefailure
		 * Fires in the case of an error when attempting to save state to the server
		 * @param {HttpProvider} this
		 */
			'savefailure'
			);

		// call parent
	TYPO3.state.ExtDirectProvider.superclass.constructor.call(this);

	Ext.apply(this, config, {
		// defaults
		delay: 750, // buffer changes for 750 ms
		dirty: false,
		started: false,
		autoStart: true,
		autoRead: true,
		key: 'States.General',
		logFailure: false,
		logSuccess: false,
		queue: [],
		saveBaseParams: {},
		readBaseParams: {},
		paramNames:{
			key: 'key',
			name: 'name',
			value: 'value',
			data: 'data'
		}
	});

	if (this.autoRead) {
		this.readState();
	}

	this.dt = new Ext.util.DelayedTask(this.submitState, this);
	if (this.autoStart) {
		this.start();
	}
};


Ext.extend(TYPO3.state.ExtDirectProvider, Ext.state.Provider, {

		// localizable texts
	saveSuccessText: 'Save Success',
	saveFailureText: 'Save Failure',
	readSuccessText: 'Read Success',
	readFailureText: 'Read Failure',
	dataErrorText: 'Data Error',



	/**
	 * Initializes state from the passed state object or array.
	 * Use this with loading page using initial state in TYPO3.settings
	 *
	 * @param {Array/Object} state State to initialize state manager with
	 */
	initState: function(state) {
		if (Ext.isArray(state)) {
			Ext.each(state, function(item) {
				this.state[item.name] = item[this.paramNames.value];
			}, this);
		} else if (Ext.isObject(state)) {
			Ext.iterate(state, function(key, value){
				this.state[key] = value;
			}, this);
		} else {
			this.state = {};
		}
	},

	/**
	 * Sets the passed state variable name to the passed value and queues the change
	 * @param {String} name Name of the state variable
	 * @param {Mixed} value Value of the state variable
	 */
	set: function(name, value) {
		if (!name) {
			return;
		}
		this.queueChange(name, value);
	},


	/**
	 * Starts submitting state changes to server
	 */
	start: function() {
		this.dt.delay(this.delay);
		this.started = true;
	},


	/**
	 * Stops submitting state changes
	 */
	stop: function() {
		this.dt.cancel();
		this.started = false;
	},


	/**
	 * private, queues the state change if state has changed
	 */
	queueChange: function(name, value) {
		var o = {};
		var i;
		var found = false;


		var lastValue = this.state[name];
		for (i = 0; i < this.queue.length; i++) {
			if (this.queue[i].name === name) {
				lastValue = this.queue[i].value;
			}
		}
		var changed = undefined === lastValue || lastValue !== value;

		if (changed) {
			o[this.paramNames.name] = name;
			o[this.paramNames.value] = value;
			for (i = 0; i < this.queue.length; i++) {
				if (this.queue[i].name === o.name) {
					this.queue[i] = o;
					found = true;
				}
			}
			if (false === found) {
				this.queue.push(o);
			}
			this.dirty = true;
		}
		if (this.started) {
			this.start();
		}
		return changed;
	},


	/**
	 * private, submits state to server by asynchronous Ajax request
	 */
	submitState: function() {
		if (!this.dirty) {
			this.dt.delay(this.delay);
			return;
		}
		this.dt.cancel();

		var o = {
			scope: this,
			success: this.onSaveSuccess,
			failure: this.onSaveFailure,
			queue: this.queue, //this.clone(this.queue),
			params: {}
		};

		var params = Ext.apply({}, this.saveBaseParams);
		params[this.paramNames.key] = this.key;
		params[this.paramNames.data] = Ext.encode(o.queue);

		Ext.apply(o.params, params);

		// be optimistic
		this.dirty = false;

	   TYPO3.ExtDirectStateProvider.ExtDirect.setState(o, function(response, options) {
		   if (response.success) {
				this.onSaveSuccess(response, options);
		   } else {
				this.onSaveFailure(response, options);
		   }
	   }, this);
	},


	/**
	 * Clears the state variable
	 * @param {String} name Name of the variable to clear
	 */
	clear: function(name) {
		this.set(name, undefined);
	},


	/**
	 * private, save success callback
	 */
	onSaveSuccess: function(response, options) {
		var o = response;
		if (!o.success) {
			if (this.logFailure) {
				this.log(this.saveFailureText, o, response);
			}
			this.dirty = true;
		} else {
			Ext.each(response.params.queue, function(item) {
				if (!item) {
					return;
				}
				var name = item[this.paramNames.name];
				var value = item[this.paramNames.value];

				if (value === undefined  || value === null) {
					TYPO3.state.ExtDirectProvider.superclass.clear.call(this, name);
				} else {
						// parent sets value and fires event
					TYPO3.state.ExtDirectProvider.superclass.set.call(this, name, value);
				}
			}, this);
			if (!this.dirty) {
				this.queue = [];
			}else {
				var i, j, found;
				for (i = 0; i < response.params.queue.length; i++) {
					found = false;
					for (j = 0; j < this.queue.length; j++) {
						if (response.params.queue[i].name === this.queue[j].name) {
							found = true;
							break;
						}
					}
					if (found && response.params.queue[i].value === this.queue[j].value) {
						this.queue.remove(this.queue[j]);
					}
				}
			}
			if (this.logSuccess) {
				this.log(this.saveSuccessText, o, response);
			}
			this.fireEvent('savesuccess', this);
		}
	},


	/**
	 * private, save failure callback
	 */
	onSaveFailure: function(response, options) {
		if (true === this.logFailure) {
			this.log(this.saveFailureText, response);
		}
		this.dirty = true;
		this.fireEvent('savefailure', this);
	},


	/**
	 * private, read state callback
	 */
	onReadFailure: function(response, options) {
		if (this.logFailure) {
			this.log(this.readFailureText, response);
		}
		this.fireEvent('readfailure', this);

	},


	/**
	 * private, read success callback
	 */
	onReadSuccess: function(response, options) {
		var o = response, data;
		if (!o.success) {
			if (this.logFailure) {
				this.log(this.readFailureText, o, response);
			}
		} else {
			data = o[this.paramNames.data];
			Ext.iterate(data, function(key, value) {
				this.state[key] = value;
			}, this);
			this.queue = [];
			this.dirty = false;
			if (this.logSuccess) {
				this.log(this.readSuccessText, data, response);
			}
			this.fireEvent('readsuccess', this);
		}
	},


	/**
	 * Reads saved state from server by sending asynchronous Ajax request and processing the response
	 */
	readState: function() {
		var o = {
			scope: this,
			params:{}
		};

		var params = Ext.apply({}, this.readBaseParams);
		params[this.paramNames.key] = this.key;

		Ext.apply(o.params, params);
		TYPO3.ExtDirectStateProvider.ExtDirect.getState(o, function(response, options) {
		   if (response.success) {
				this.onReadSuccess(response, options);
		   } else {
				this.onReadFailure(response, options);
		   }
	   }, this);
	},


	/**
	 * private, logs errors or successes
	 */
	log: function() {
		if (console) {
			console.log.apply(console, arguments);
		}
	},

	logState: function() {
	   if (console) {
			console.log(this.state);
		}
	}

});
