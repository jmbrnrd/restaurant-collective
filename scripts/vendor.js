!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,o,i,r,s={},a="querySelector"in document&&"addEventListener"in e,l={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},c=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=c(!0,e[o],n[o]):e[o]=n[o])};o>n;n++){var r=arguments[n];i(r)}return e},u=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e,t){var n,o,i=t.charAt(0),r="classList"in document.documentElement;for("["===i&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(o=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document;e=e.parentNode){if("."===i)if(r){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===i&&e.id===t.substr(1))return e;if("["===i&&e.hasAttribute(n[0])){if(!o)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null};s.escapeCharacters=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,r="",s=n.charCodeAt(0);++i<o;){if(t=n.charCodeAt(i),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=t>=1&&31>=t||127==t||0===i&&t>=48&&57>=t||1===i&&t>=48&&57>=t&&45===s?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(i):"\\"+n.charAt(i)}return"#"+r};var d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},p=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=o-t-n,o>=0?o:0},m=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},v=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},g=function(t,n){e.history.pushState&&(n||"true"===n)&&"file:"!==e.location.protocol&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},y=function(e){return null===e?0:u(e)+e.offsetTop};s.animateScroll=function(n,s,a){var u=v(s?s.getAttribute("data-options"):null),f=c(t||l,a||{},u),h="[object Number]"===Object.prototype.toString.call(n),w=h?null:"#"===n?e.document.documentElement:e.document.querySelector(n);if(h||w){var b=e.pageYOffset;o||(o=e.document.querySelector(f.selectorHeader)),i||(i=y(o));var O,E,S=h?n:p(w,i,parseInt(f.offset,10)),x=S-b,q=m(),A=0;h||g(n,f.updateURL);var T=function(t,o,i){var r=e.pageYOffset;(t==o||r==o||e.innerHeight+r>=q)&&(clearInterval(i),h||w.focus(),f.callback(n,s))},I=function(){A+=16,O=A/parseInt(f.speed,10),O=O>1?1:O,E=b+x*d(f.easing,O),e.scrollTo(0,Math.floor(E)),T(E,S,r)},C=function(){clearInterval(r),r=setInterval(I,16)};0===e.pageYOffset&&e.scrollTo(0,0),C()}};var h=function(e){if(0===e.button&&!e.metaKey&&!e.ctrlKey){var n=f(e.target,t.selector);if(n&&"a"===n.tagName.toLowerCase()){e.preventDefault();var o=s.escapeCharacters(n.hash);s.animateScroll(o,n,t)}}},w=function(e){n||(n=setTimeout(function(){n=null,i=y(o)},66))};return s.destroy=function(){t&&(e.document.removeEventListener("click",h,!1),e.removeEventListener("resize",w,!1),t=null,n=null,o=null,i=null,r=null)},s.init=function(n){a&&(s.destroy(),t=c(l,n||{}),o=e.document.querySelector(t.selectorHeader),i=y(o),e.document.addEventListener("click",h,!1),o&&e.addEventListener("resize",w,!1))},s}),function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t(require,exports,module):e.ScrollReveal=t()}(this,function(e,t,n){return function(){"use strict";var e,t,n;this.ScrollReveal=function(){function o(n){return"undefined"==typeof this||Object.getPrototypeOf(this)!==o.prototype?new o(n):(e=this,e.tools=new t,e.isSupported()?(e.tools.extend(e.defaults,n||{}),i(e.defaults),e.store={elements:{},containers:[]},e.sequences={},e.history=[],e.uid=0,e.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),e)}function i(t){var n=t.container;return n&&"string"==typeof n?t.container=window.document.querySelector(n):(n&&!e.tools.isNode(n)&&(console.log("ScrollReveal: Invalid container provided, using <html> instead."),t.container=null),null==n&&(t.container=window.document.documentElement),t.container)}function r(){return++e.uid}function s(t,n){t.config?t.config=e.tools.extendClone(t.config,n):t.config=e.tools.extendClone(e.defaults,n),"top"===t.config.origin||"bottom"===t.config.origin?t.config.axis="Y":t.config.axis="X","top"!==t.config.origin&&"left"!==t.config.origin||(t.config.distance="-"+t.config.distance)}function a(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!=t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=l(e,0),e.styles.transition.delayed=l(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",c(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",c(e)}function l(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function c(e){var t=e.config,n=e.styles.transform;parseInt(t.distance)&&(n.initial+=" translate"+t.axis+"("+t.distance+")",n.target+=" translate"+t.axis+"(0)"),t.scale&&(n.initial+=" scale("+t.scale+")",n.target+=" scale(1)"),t.rotate.x&&(n.initial+=" rotateX("+t.rotate.x+"deg)",n.target+=" rotateX(0)"),t.rotate.y&&(n.initial+=" rotateY("+t.rotate.y+"deg)",n.target+=" rotateY(0)"),t.rotate.z&&(n.initial+=" rotateZ("+t.rotate.z+"deg)",n.target+=" rotateZ(0)"),n.initial+="; opacity: "+t.opacity+";",n.target+="; opacity: "+e.styles.computed.opacity+";"}function u(t){var n=t.config.container;n&&-1==e.store.containers.indexOf(n)&&e.store.containers.push(t.config.container),e.store.elements[t.id]=t}function f(t,n,o){var i={selector:t,config:n,interval:o};e.history.push(i)}function d(){if(e.isSupported()){v();for(var t=0;t<e.store.containers.length;t++)e.store.containers[t].addEventListener("scroll",p),e.store.containers[t].addEventListener("resize",p);e.initialized||(window.addEventListener("scroll",p),window.addEventListener("resize",p),e.initialized=!0)}return e}function p(){n(v)}function m(){var t,n,o,i;e.tools.forOwn(e.sequences,function(r){i=e.sequences[r],t=!1;for(var s=0;s<i.elemIds.length;s++)o=i.elemIds[s],n=e.store.elements[o],x(n)&&!t&&(t=!0);i.active=t})}function v(){var t,n;m(),e.tools.forOwn(e.store.elements,function(o){n=e.store.elements[o],t=w(n),h(n)?(t?n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.delayed):n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.instant),y("reveal",n,t),n.revealing=!0,n.seen=!0,n.sequence&&g(n,t)):b(n)&&(n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.initial+n.styles.transition.instant),y("reset",n),n.revealing=!1)})}function g(t,n){var o=0,i=0,r=e.sequences[t.sequence.id];r.blocked=!0,n&&"onload"==t.config.useDelay&&(i=t.config.delay),t.sequence.timer&&(o=Math.abs(t.sequence.timer.started-new Date),window.clearTimeout(t.sequence.timer)),t.sequence.timer={started:new Date},t.sequence.timer.clock=window.setTimeout(function(){r.blocked=!1,t.sequence.timer=null,p()},Math.abs(r.interval)+i-o)}function y(e,t,n){var o=0,i=0,r="after";switch(e){case"reveal":i=t.config.duration,n&&(i+=t.config.delay),r+="Reveal";break;case"reset":i=t.config.duration,r+="Reset"}t.timer&&(o=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},i-o)}function h(t){if(t.sequence){var n=e.sequences[t.sequence.id];return n.active&&!n.blocked&&!t.revealing&&!t.disabled}return x(t)&&!t.revealing&&!t.disabled}function w(t){var n=t.config.useDelay;return"always"===n||"onload"===n&&!e.initialized||"once"===n&&!t.seen}function b(t){if(t.sequence){var n=e.sequences[t.sequence.id];return!n.active&&t.config.reset&&t.revealing&&!t.disabled}return!x(t)&&t.config.reset&&t.revealing&&!t.disabled}function O(e){return{width:e.clientWidth,height:e.clientHeight}}function E(e){if(e&&e!==window.document.documentElement){var t=S(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function S(e){var t=0,n=0,o=e.offsetHeight,i=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft);while(e=e.offsetParent);return{top:t,left:n,height:o,width:i}}function x(e){function t(){var t=c+a*s,n=u+l*s,o=f-a*s,p=d-l*s,m=r.y+e.config.viewOffset.top,v=r.x+e.config.viewOffset.left,g=r.y-e.config.viewOffset.bottom+i.height,y=r.x-e.config.viewOffset.right+i.width;return g>t&&o>m&&n>v&&y>p}function n(){return"fixed"===window.getComputedStyle(e.domEl).position}var o=S(e.domEl),i=O(e.config.container),r=E(e.config.container),s=e.config.viewFactor,a=o.height,l=o.width,c=o.top,u=o.left,f=c+a,d=u+l;return t()||n()}return o.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:null,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},afterReveal:function(e){},afterReset:function(e){}},o.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},o.prototype.reveal=function(t,n,o,l){var c,p,m,v,g,y;if(c=n&&n.container?i(n):e.defaults.container,p=e.tools.isNode(t)?[t]:Array.prototype.slice.call(c.querySelectorAll(t)),!p.length)return console.log('ScrollReveal: reveal on "'+t+'" failed, no elements found.'),e;n&&"number"==typeof n&&(o=n,n={}),o&&"number"==typeof o&&(y=r(),g=e.sequences[y]={id:y,interval:o,elemIds:[],active:!1});for(var h=0;h<p.length;h++)v=p[h].getAttribute("data-sr-id"),v?m=e.store.elements[v]:(m={id:r(),domEl:p[h],seen:!1,revealing:!1},m.domEl.setAttribute("data-sr-id",m.id)),g&&(m.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(m.id)),s(m,n||{}),a(m),u(m),e.tools.isMobile()&&!m.config.mobile||!e.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!l&&e.isSupported()&&(f(t,n),e.initTimeout&&window.clearTimeout(e.initTimeout),e.initTimeout=window.setTimeout(d,0)),e},o.prototype.sync=function(){if(e.history.length&&e.isSupported()){for(var t=0;t<e.history.length;t++){var n=e.history[t];e.reveal(n.selector,n.config,n.interval,!0)}d()}else console.log("ScrollReveal: sync failed, no reveals found.");return e},o}(),t=function(){function e(){}return e.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor==Object},e.prototype.isNode=function(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},e.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},e.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},e.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},e.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},e}(),n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}.call(this),this.ScrollReveal}),function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.Blazy=t()}(this,function(){"use strict";function e(e){setTimeout(function(){var n=e._util;n.elements=a(e.options.selector),n.count=n.elements.length,n.destroyed&&(n.destroyed=!1,e.options.container&&f(e.options.container,function(e){c(e,"scroll",n.validateT)}),c(window,"resize",n.saveViewportOffsetT),c(window,"resize",n.validateT),c(window,"scroll",n.validateT)),t(e)},1)}function t(e){for(var t=e._util,o=0;o<t.count;o++){var i=t.elements[o];(n(i)||r(i,e.options.successClass))&&(e.load(i),t.elements.splice(o,1),t.count--,o--)}0===t.count&&e.destroy()}function n(e){var t=e.getBoundingClientRect();return t.right>=m.left&&t.bottom>=m.top&&t.left<=m.right&&t.top<=m.bottom}function o(e,t,n){if(!r(e,n.successClass)&&(t||n.loadInvisible||e.offsetWidth>0&&e.offsetHeight>0)){var o=e.getAttribute(p)||e.getAttribute(n.src);if(o){var a=o.split(n.separator),l=a[v&&a.length>1?1:0],c="img"===e.nodeName.toLowerCase();if(c||void 0===e.src){var u=new Image;u.onerror=function(){n.error&&n.error(e,"invalid"),s(e,n.errorClass)},u.onload=function(){c?e.src=l:e.style.backgroundImage='url("'+l+'")',i(e,n)},u.src=l}else e.src=l,i(e,n)}else n.error&&n.error(e,"missing"),r(e,n.errorClass)||s(e,n.errorClass)}}function i(e,t){s(e,t.successClass),t.success&&t.success(e),f(t.breakpoints,function(t){e.removeAttribute(t.src)}),e.removeAttribute(t.src)}function r(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function s(e,t){e.className=e.className+" "+t}function a(e){for(var t=[],n=document.querySelectorAll(e),o=n.length;o--;t.unshift(n[o]));return t}function l(e){m.bottom=(window.innerHeight||document.documentElement.clientHeight)+e,m.right=(window.innerWidth||document.documentElement.clientWidth)+e}function c(e,t,n){e.attachEvent?e.attachEvent&&e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)}function u(e,t,n){e.detachEvent?e.detachEvent&&e.detachEvent("on"+t,n):e.removeEventListener(t,n,!1)}function f(e,t){if(e&&t)for(var n=e.length,o=0;n>o&&t(e[o],o)!==!1;o++);}function d(e,t,n){var o=0;return function(){var i=+new Date;t>i-o||(o=i,e.apply(n,arguments))}}var p,m,v;return function(n){if(!document.querySelectorAll){var i=document.createStyleSheet();document.querySelectorAll=function(e,t,n,o,r){for(r=document.all,t=[],e=e.replace(/\[for\b/gi,"[htmlFor").split(","),n=e.length;n--;){for(i.addRule(e[n],"k:v"),o=r.length;o--;)r[o].currentStyle.k&&t.push(r[o]);i.removeRule(0)}return t}}var r=this,s=r._util={};s.elements=[],s.destroyed=!0,r.options=n||{},r.options.error=r.options.error||!1,r.options.offset=r.options.offset||100,r.options.success=r.options.success||!1,r.options.selector=r.options.selector||".b-lazy",r.options.separator=r.options.separator||"|",r.options.container=r.options.container?document.querySelectorAll(r.options.container):!1,r.options.errorClass=r.options.errorClass||"b-error",r.options.breakpoints=r.options.breakpoints||!1,r.options.loadInvisible=r.options.loadInvisible||!1,r.options.successClass=r.options.successClass||"b-loaded",r.options.validateDelay=r.options.validateDelay||25,r.options.saveViewportOffsetDelay=r.options.saveViewportOffsetDelay||50,r.options.src=p=r.options.src||"data-src",v=window.devicePixelRatio>1,m={},m.top=0-r.options.offset,m.left=0-r.options.offset,r.revalidate=function(){e(this)},r.load=function(e,t){var n=this.options;void 0===e.length?o(e,t,n):f(e,function(e){o(e,t,n)})},r.destroy=function(){var e=this,t=e._util;e.options.container&&f(e.options.container,function(e){u(e,"scroll",t.validateT)}),u(window,"scroll",t.validateT),u(window,"resize",t.validateT),u(window,"resize",t.saveViewportOffsetT),t.count=0,t.elements.length=0,t.destroyed=!0},s.validateT=d(function(){t(r)},r.options.validateDelay,r),s.saveViewportOffsetT=d(function(){l(r.options.offset)},r.options.saveViewportOffsetDelay,r),l(r.options.offset),f(r.options.breakpoints,function(e){return e.width>=window.screen.width?(p=e.src,!1):void 0}),e(r)}});