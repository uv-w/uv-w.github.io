// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
(function e(t,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n();else if(typeof define==="function"&&define.amd)define("Noty",[],n);else if(typeof exports==="object")exports["Noty"]=n();else t["Noty"]=n()})(this,function(){return function(e){var t={};function n(i){if(t[i]){return t[i].exports}var o=t[i]={i:i,l:false,exports:{}};e[i].call(o.exports,o,o.exports,n);o.l=true;return o.exports}n.m=e;n.c=t;n.i=function(e){return e};n.d=function(e,t,i){if(!n.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:i})}};n.n=function(e){var t=e&&e.__esModule?function i(){return e["default"]}:function o(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.css=t.deepExtend=t.animationEndEvents=undefined;var i=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.inArray=a;t.stopPropagation=l;t.generateID=c;t.outerHeight=d;t.addListener=p;t.hasClass=v;t.addClass=m;t.removeClass=y;t.remove=b;t.classList=w;t.visibilityChangeFlow=g;t.createAudioElements=_;var o=n(1);var r=s(o);function s(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n))t[n]=e[n]}}t.default=e;return t}}var u=t.animationEndEvents="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";function a(e,t,n){var i=void 0;var o=!!n;if(o){for(i in t){if(t.hasOwnProperty(i)&&t[i]===e){return true}}}else{for(i in t){if(t.hasOwnProperty(i)&&t[i]===e){return true}}}return false}function l(e){e=e||window.event;if(typeof e.stopPropagation!=="undefined"){e.stopPropagation()}else{e.cancelBubble=true}}var f=t.deepExtend=function C(e){e=e||{};for(var t=1;t<arguments.length;t++){var n=arguments[t];if(!n)continue;for(var o in n){if(n.hasOwnProperty(o)){if(Array.isArray(n[o])){e[o]=n[o]}else if(i(n[o])==="object"&&n[o]!==null){e[o]=C(e[o],n[o])}else{e[o]=n[o]}}}}return e};function c(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var t="noty_"+e+"_";t+="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0;var n=e==="x"?t:t&3|8;return n.toString(16)});return t}function d(e){var t=e.offsetHeight;var n=window.getComputedStyle(e);t+=parseInt(n.marginTop)+parseInt(n.marginBottom);return t}var h=t.css=function(){var e=["Webkit","O","Moz","ms"];var t={};function n(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})}function i(t){var n=document.body.style;if(t in n)return t;var i=e.length;var o=t.charAt(0).toUpperCase()+t.slice(1);var r=void 0;while(i--){r=e[i]+o;if(r in n)return r}return t}function o(e){e=n(e);return t[e]||(t[e]=i(e))}function r(e,t,n){t=o(t);e.style[t]=n}return function(e,t){var n=arguments;var i=void 0;var o=void 0;if(n.length===2){for(i in t){if(t.hasOwnProperty(i)){o=t[i];if(o!==undefined&&t.hasOwnProperty(i)){r(e,i,o)}}}}else{r(e,n[1],n[2])}}}();function p(e,t,n){var i=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;t=t.split(" ");for(var o=0;o<t.length;o++){if(document.addEventListener){e.addEventListener(t[o],n,i)}else if(document.attachEvent){e.attachEvent("on"+t[o],n)}}}function v(e,t){var n=typeof e==="string"?e:w(e);return n.indexOf(" "+t+" ")>=0}function m(e,t){var n=w(e);var i=n+t;if(v(n,t))return;e.className=i.substring(1)}function y(e,t){var n=w(e);var i=void 0;if(!v(e,t))return;i=n.replace(" "+t+" "," ");e.className=i.substring(1,i.length-1)}function b(e){if(e.parentNode){e.parentNode.removeChild(e)}}function w(e){return(" "+(e&&e.className||"")+" ").replace(/\s+/gi," ")}function g(){var e=void 0;var t=void 0;if(typeof document.hidden!=="undefined"){e="hidden";t="visibilitychange"}else if(typeof document.msHidden!=="undefined"){e="msHidden";t="msvisibilitychange"}else if(typeof document.webkitHidden!=="undefined"){e="webkitHidden";t="webkitvisibilitychange"}function n(){r.PageHidden=document[e];s()}function i(){r.PageHidden=true;s()}function o(){r.PageHidden=false;s()}function s(){if(r.PageHidden)u();else a()}function u(){setTimeout(function(){Object.keys(r.Store).forEach(function(e){if(r.Store.hasOwnProperty(e)){if(r.Store[e].options.visibilityControl){r.Store[e].stop()}}})},100)}function a(){setTimeout(function(){Object.keys(r.Store).forEach(function(e){if(r.Store.hasOwnProperty(e)){if(r.Store[e].options.visibilityControl){r.Store[e].resume()}}});r.queueRenderAll()},100)}if(t){p(document,t,n)}p(window,"blur",i);p(window,"focus",o)}function _(e){if(e.hasSound){var t=document.createElement("audio");e.options.sounds.sources.forEach(function(e){var n=document.createElement("source");n.src=e;n.type="audio/"+k(e);t.appendChild(n)});if(e.barDom){e.barDom.appendChild(t)}else{document.querySelector("body").appendChild(t)}t.volume=e.options.sounds.volume;if(!e.soundPlayed){t.play();e.soundPlayed=true}t.onended=function(){b(t)}}}function k(e){return e.match(/\.([^.]+)$/)[1]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.Defaults=t.Store=t.Queues=t.DefaultMaxVisible=t.docTitle=t.DocModalCount=t.PageHidden=undefined;t.getQueueCounts=p;t.addToQueue=v;t.removeFromQueue=m;t.queueRender=y;t.queueRenderAll=b;t.ghostFix=w;t.build=g;t.hasButtons=_;t.handleModal=C;t.handleModalClose=S;t.queueClose=E;t.dequeueClose=P;t.fire=T;t.openFlow=O;t.closeFlow=A;var i=n(0);var o=r(i);function r(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n))t[n]=e[n]}}t.default=e;return t}}var s=t.PageHidden=false;var u=t.DocModalCount=0;var a={originalTitle:null,count:0,changed:false,timer:-1};var l=t.docTitle={increment:function M(){a.count++;l._update()},decrement:function q(){a.count--;if(a.count<=0){l._clear();return}l._update()},_update:function j(){var e=document.title;if(!a.changed){a.originalTitle=e;document.title="("+a.count+") "+e;a.changed=true}else{document.title="("+a.count+") "+a.originalTitle}},_clear:function N(){if(a.changed){a.count=0;document.title=a.originalTitle;a.changed=false}}};var f=t.DefaultMaxVisible=5;var c=t.Queues={global:{maxVisible:f,queue:[]}};var d=t.Store={};var h=t.Defaults={type:"alert",layout:"topRight",theme:"mint",text:"",timeout:false,progressBar:true,closeWith:["click"],animation:{open:"noty_effects_open",close:"noty_effects_close"},id:false,force:false,killer:false,queue:"global",container:false,buttons:[],callbacks:{beforeShow:null,onShow:null,afterShow:null,onClose:null,afterClose:null,onClick:null,onHover:null,onTemplate:null},sounds:{sources:[],volume:1,conditions:[]},titleCount:{conditions:[]},modal:false,visibilityControl:false};function p(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"global";var t=0;var n=f;if(c.hasOwnProperty(e)){n=c[e].maxVisible;Object.keys(d).forEach(function(n){if(d[n].options.queue===e&&!d[n].closed)t++})}return{current:t,maxVisible:n}}function v(e){if(!c.hasOwnProperty(e.options.queue)){c[e.options.queue]={maxVisible:f,queue:[]}}c[e.options.queue].queue.push(e)}function m(e){if(c.hasOwnProperty(e.options.queue)){var t=[];Object.keys(c[e.options.queue].queue).forEach(function(n){if(c[e.options.queue].queue[n].id!==e.id){t.push(c[e.options.queue].queue[n])}});c[e.options.queue].queue=t}}function y(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"global";if(c.hasOwnProperty(e)){var t=c[e].queue.shift();if(t)t.show()}}function b(){Object.keys(c).forEach(function(e){y(e)})}function w(e){var t=o.generateID("ghost");var n=document.createElement("div");n.setAttribute("id",t);o.css(n,{height:o.outerHeight(e.barDom)+"px"});e.barDom.insertAdjacentHTML("afterend",n.outerHTML);o.remove(e.barDom);n=document.getElementById(t);o.addClass(n,"noty_fix_effects_height");o.addListener(n,o.animationEndEvents,function(){o.remove(n)})}function g(e){x(e);var t='<div class="noty_body">'+e.options.text+"</div>"+k(e)+'<div class="noty_progressbar"></div>';e.barDom=document.createElement("div");e.barDom.setAttribute("id",e.id);o.addClass(e.barDom,"noty_bar noty_type__"+e.options.type+" noty_theme__"+e.options.theme);e.barDom.innerHTML=t;T(e,"onTemplate")}function _(e){return!!(e.options.buttons&&Object.keys(e.options.buttons).length)}function k(e){if(_(e)){var t=document.createElement("div");o.addClass(t,"noty_buttons");Object.keys(e.options.buttons).forEach(function(n){t.appendChild(e.options.buttons[n].dom)});e.options.buttons.forEach(function(e){t.appendChild(e.dom)});return t.outerHTML}return""}function C(e){if(e.options.modal){if(u===0){D(e)}t.DocModalCount=u+=1}}function S(e){if(e.options.modal&&u>0){t.DocModalCount=u-=1;if(u<=0){var n=document.querySelector(".noty_modal");if(n){o.removeClass(n,"noty_modal_open");o.addClass(n,"noty_modal_close");o.addListener(n,o.animationEndEvents,function(){o.remove(n)})}}}}function D(){var e=document.querySelector("body");var t=document.createElement("div");o.addClass(t,"noty_modal");e.insertBefore(t,e.firstChild);o.addClass(t,"noty_modal_open");o.addListener(t,o.animationEndEvents,function(){o.removeClass(t,"noty_modal_open")})}function x(e){if(e.options.container){e.layoutDom=document.querySelector(e.options.container);return}var t="noty_layout__"+e.options.layout;e.layoutDom=document.querySelector("div#"+t);if(!e.layoutDom){e.layoutDom=document.createElement("div");e.layoutDom.setAttribute("id",t);e.layoutDom.setAttribute("role","alert");e.layoutDom.setAttribute("aria-live","polite");o.addClass(e.layoutDom,"noty_layout");document.querySelector("body").appendChild(e.layoutDom)}}function E(e){if(e.options.timeout){if(e.options.progressBar&&e.progressDom){o.css(e.progressDom,{transition:"width "+e.options.timeout+"ms linear",width:"0%"})}clearTimeout(e.closeTimer);e.closeTimer=setTimeout(function(){e.close()},e.options.timeout)}}function P(e){if(e.options.timeout&&e.closeTimer){clearTimeout(e.closeTimer);e.closeTimer=-1;if(e.options.progressBar&&e.progressDom){o.css(e.progressDom,{transition:"width 0ms linear",width:"100%"})}}}function T(e,t){if(e.listeners.hasOwnProperty(t)){e.listeners[t].forEach(function(t){if(typeof t==="function"){t.apply(e)}})}}function O(e){T(e,"afterShow");E(e);o.addListener(e.barDom,"mouseenter",function(){P(e)});o.addListener(e.barDom,"mouseleave",function(){E(e)})}function A(e){delete d[e.id];e.closing=false;T(e,"afterClose");o.remove(e.barDom);if(e.layoutDom.querySelectorAll(".noty_bar").length===0&&!e.options.container){o.remove(e.layoutDom)}if(o.inArray("docVisible",e.options.titleCount.conditions)||o.inArray("docHidden",e.options.titleCount.conditions)){l.decrement()}y(e.options.queue)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.NotyButton=undefined;var i=n(0);var o=r(i);function r(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n))t[n]=e[n]}}t.default=e;return t}}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var u=t.NotyButton=function a(e,t,n){var i=this;var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};s(this,a);this.dom=document.createElement("button");this.dom.innerHTML=e;this.id=r.id=r.id||o.generateID("button");this.cb=n;Object.keys(r).forEach(function(e){i.dom.setAttribute(e,r[e])});o.addClass(this.dom,t||"noty_btn");return this}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}return function(t,n,i){if(n)e(t.prototype,n);if(i)e(t,i);return t}}();function o(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var r=t.Push=function(){function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"/service-worker.js";o(this,e);this.subData={};this.workerPath=t;this.listeners={onPermissionGranted:[],onPermissionDenied:[],onSubscriptionSuccess:[],onSubscriptionCancel:[],onWorkerError:[],onWorkerSuccess:[],onWorkerNotSupported:[]};return this}i(e,[{key:"on",value:function t(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){};if(typeof t==="function"&&this.listeners.hasOwnProperty(e)){this.listeners[e].push(t)}return this}},{key:"fire",value:function n(e){var t=this;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];if(this.listeners.hasOwnProperty(e)){this.listeners[e].forEach(function(e){if(typeof e==="function"){e.apply(t,n)}})}}},{key:"create",value:function r(){console.log("NOT IMPLEMENTED YET")}},{key:"isSupported",value:function s(){var e=false;try{e=window.Notification||window.webkitNotifications||navigator.mozNotification||window.external&&window.external.msIsSiteMode()!==undefined}catch(t){}return e}},{key:"getPermissionStatus",value:function u(){var e="default";if(window.Notification&&window.Notification.permissionLevel){e=window.Notification.permissionLevel}else if(window.webkitNotifications&&window.webkitNotifications.checkPermission){switch(window.webkitNotifications.checkPermission()){case 1:e="default";break;case 0:e="granted";break;default:e="denied"}}else if(window.Notification&&window.Notification.permission){e=window.Notification.permission}else if(navigator.mozNotification){e="granted"}else if(window.external&&window.external.msIsSiteMode()!==undefined){e=window.external.msIsSiteMode()?"granted":"default"}return e.toString().toLowerCase()}},{key:"getEndpoint",value:function a(e){var t=e.endpoint;var n=e.subscriptionId;if(n&&t.indexOf(n)===-1){t+="/"+n}return t}},{key:"isSWRegistered",value:function l(){try{return navigator.serviceWorker.controller.state==="activated"}catch(e){return false}}},{key:"unregisterWorker",value:function f(){var e=this;if("serviceWorker"in navigator){navigator.serviceWorker.getRegistrations().then(function(t){var n=true;var i=false;var o=undefined;try{for(var r=t[Symbol.iterator](),s;!(n=(s=r.next()).done);n=true){var u=s.value;u.unregister();e.fire("onSubscriptionCancel")}}catch(a){i=true;o=a}finally{try{if(!n&&r.return){r.return()}}finally{if(i){throw o}}}})}}},{key:"requestSubscription",value:function c(){var e=this;var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;var n=this;var i=this.getPermissionStatus();var o=function r(i){if(i==="granted"){e.fire("onPermissionGranted");if("serviceWorker"in navigator){navigator.serviceWorker.register(e.workerPath).then(function(){navigator.serviceWorker.ready.then(function(e){n.fire("onWorkerSuccess");e.pushManager.subscribe({userVisibleOnly:t}).then(function(e){var t=e.getKey("p256dh");var i=e.getKey("auth");n.subData={endpoint:n.getEndpoint(e),p256dh:t?window.btoa(String.fromCharCode.apply(null,new Uint8Array(t))):null,auth:i?window.btoa(String.fromCharCode.apply(null,new Uint8Array(i))):null};n.fire("onSubscriptionSuccess",[n.subData])}).catch(function(e){n.fire("onWorkerError",[e])})})})}else{n.fire("onWorkerNotSupported")}}else if(i==="denied"){e.fire("onPermissionDenied");e.unregisterWorker()}};if(i==="default"){if(window.Notification&&window.Notification.requestPermission){window.Notification.requestPermission(o)}else if(window.webkitNotifications&&window.webkitNotifications.checkPermission){window.webkitNotifications.requestPermission(o)}}else{o(i)}}}]);return e}()},function(e,t,n){(function(t,i){var o;(function(t,n){true?e.exports=n():typeof define==="function"&&define.amd?define(n):t.ES6Promise=n()})(this,function(){"use strict";function e(e){var t=typeof e;return e!==null&&(t==="object"||t==="function")}function r(e){return typeof e==="function"}var s=undefined;if(Array.isArray){s=Array.isArray}else{s=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}var u=s;var a=0;var l=undefined;var f=undefined;var c=function de(e,t){S[a]=e;S[a+1]=t;a+=2;if(a===2){if(f){f(D)}else{E()}}};function d(e){f=e}function h(e){c=e}var p=typeof window!=="undefined"?window:undefined;var v=p||{};var m=v.MutationObserver||v.WebKitMutationObserver;var y=typeof self==="undefined"&&typeof t!=="undefined"&&{}.toString.call(t)==="[object process]";var b=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function w(){return function(){return t.nextTick(D)}}function g(){if(typeof l!=="undefined"){return function(){l(D)}}return C()}function _(){var e=0;var t=new m(D);var n=document.createTextNode("");t.observe(n,{characterData:true});return function(){n.data=e=++e%2}}function k(){var e=new MessageChannel;e.port1.onmessage=D;return function(){return e.port2.postMessage(0)}}function C(){var e=setTimeout;return function(){return e(D,1)}}var S=new Array(1e3);function D(){for(var e=0;e<a;e+=2){var t=S[e];var n=S[e+1];t(n);S[e]=undefined;S[e+1]=undefined}a=0}function x(){try{var e=o;var t=n(9);l=t.runOnLoop||t.runOnContext;return g()}catch(i){return C()}}var E=undefined;if(y){E=w()}else if(m){E=_()}else if(b){E=k()}else if(p===undefined&&"function"==="function"){E=x()}else{E=C()}function P(e,t){var n=arguments;var i=this;var o=new this.constructor(A);if(o[O]===undefined){ne(o)}var r=i._state;if(r){(function(){var e=n[r-1];c(function(){return X(r,o,e,i._result)})})()}else{Y(i,o,e,t)}return o}function T(e){var t=this;if(e&&typeof e==="object"&&e.constructor===t){return e}var n=new t(A);I(n,e);return n}var O=Math.random().toString(36).substring(16);function A(){}var M=void 0;var q=1;var j=2;var N=new G;function L(){return new TypeError("You cannot resolve a promise with itself")}function H(){return new TypeError("A promises callback cannot return that same promise.")}function W(e){try{return e.then}catch(t){N.error=t;return N}}function Q(e,t,n,i){try{e.call(t,n,i)}catch(o){return o}}function V(e,t,n){c(function(e){var i=false;var o=Q(n,t,function(n){if(i){return}i=true;if(t!==n){I(e,n)}else{z(e,n)}},function(t){if(i){return}i=true;U(e,t)},"Settle: "+(e._label||" unknown promise"));if(!i&&o){i=true;U(e,o)}},e)}function B(e,t){if(t._state===q){z(e,t._result)}else if(t._state===j){U(e,t._result)}else{Y(t,undefined,function(t){return I(e,t)},function(t){return U(e,t)})}}function F(e,t,n){if(t.constructor===e.constructor&&n===P&&t.constructor.resolve===T){B(e,t)}else{if(n===N){U(e,N.error);N.error=null}else if(n===undefined){z(e,t)}else if(r(n)){V(e,t,n)}else{z(e,t)}}}function I(t,n){if(t===n){U(t,L())}else if(e(n)){F(t,n,W(n))}else{z(t,n)}}function R(e){if(e._onerror){e._onerror(e._result)}K(e)}function z(e,t){if(e._state!==M){return}e._result=t;e._state=q;if(e._subscribers.length!==0){c(K,e)}}function U(e,t){if(e._state!==M){return}e._state=j;e._result=t;c(R,e)}function Y(e,t,n,i){var o=e._subscribers;var r=o.length;e._onerror=null;o[r]=t;o[r+q]=n;o[r+j]=i;if(r===0&&e._state){c(K,e)}}function K(e){var t=e._subscribers;var n=e._state;if(t.length===0){return}var i=undefined,o=undefined,r=e._result;for(var s=0;s<t.length;s+=3){i=t[s];o=t[s+n];if(i){X(n,i,o,r)}else{o(r)}}e._subscribers.length=0}function G(){this.error=null}var $=new G;function J(e,t){try{return e(t)}catch(n){$.error=n;return $}}function X(e,t,n,i){var o=r(n),s=undefined,u=undefined,a=undefined,l=undefined;if(o){s=J(n,i);if(s===$){l=true;u=s.error;s.error=null}else{a=true}if(t===s){U(t,H());return}}else{s=i;a=true}if(t._state!==M){}else if(o&&a){I(t,s)}else if(l){U(t,u)}else if(e===q){z(t,s)}else if(e===j){U(t,s)}}function Z(e,t){try{t(function i(t){I(e,t)},function o(t){U(e,t)})}catch(n){U(e,n)}}var ee=0;function te(){return ee++}function ne(e){e[O]=ee++;e._state=undefined;e._result=undefined;e._subscribers=[]}function ie(e,t){this._instanceConstructor=e;this.promise=new e(A);if(!this.promise[O]){ne(this.promise)}if(u(t)){this.length=t.length;this._remaining=t.length;this._result=new Array(this.length);if(this.length===0){z(this.promise,this._result)}else{this.length=this.length||0;this._enumerate(t);if(this._remaining===0){z(this.promise,this._result)}}}else{U(this.promise,oe())}}function oe(){return new Error("Array Methods must be provided an Array")}ie.prototype._enumerate=function(e){for(var t=0;this._state===M&&t<e.length;t++){this._eachEntry(e[t],t)}};ie.prototype._eachEntry=function(e,t){var n=this._instanceConstructor;var i=n.resolve;if(i===T){var o=W(e);if(o===P&&e._state!==M){this._settledAt(e._state,t,e._result)}else if(typeof o!=="function"){this._remaining--;this._result[t]=e}else if(n===fe){var r=new n(A);F(r,e,o);this._willSettleAt(r,t)}else{this._willSettleAt(new n(function(t){return t(e)}),t)}}else{this._willSettleAt(i(e),t)}};ie.prototype._settledAt=function(e,t,n){var i=this.promise;if(i._state===M){this._remaining--;if(e===j){U(i,n)}else{this._result[t]=n}}if(this._remaining===0){z(i,this._result)}};ie.prototype._willSettleAt=function(e,t){var n=this;Y(e,undefined,function(e){return n._settledAt(q,t,e)},function(e){return n._settledAt(j,t,e)})};function re(e){return new ie(this,e).promise}function se(e){var t=this;if(!u(e)){return new t(function(e,t){return t(new TypeError("You must pass an array to race."))})}else{return new t(function(n,i){var o=e.length;for(var r=0;r<o;r++){t.resolve(e[r]).then(n,i)}})}}function ue(e){var t=this;var n=new t(A);U(n,e);return n}function ae(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function le(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function fe(e){this[O]=te();this._result=this._state=undefined;this._subscribers=[];if(A!==e){typeof e!=="function"&&ae();this instanceof fe?Z(this,e):le()}}fe.all=re;fe.race=se;fe.resolve=T;fe.reject=ue;fe._setScheduler=d;fe._setAsap=h;fe._asap=c;fe.prototype={constructor:fe,then:P,"catch":function he(e){return this.then(null,e)}};function ce(){var e=undefined;if(typeof i!=="undefined"){e=i}else if(typeof self!=="undefined"){e=self}else{try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}}var n=e.Promise;if(n){var o=null;try{o=Object.prototype.toString.call(n.resolve())}catch(t){}if(o==="[object Promise]"&&!n.cast){return}}e.Promise=fe}fe.polyfill=ce;fe.Promise=fe;return fe})}).call(t,n(7),n(8))},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}return function(t,n,i){if(n)e(t.prototype,n);if(i)e(t,i);return t}}();n(5);var o=n(4);var r=h(o);var s=n(0);var u=d(s);var a=n(1);var l=d(a);var f=n(2);var c=n(3);function d(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n))t[n]=e[n]}}t.default=e;return t}}function h(e){return e&&e.__esModule?e:{"default":e}}function p(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var v=function(){function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};p(this,e);this.options=u.deepExtend({},l.Defaults,t);if(l.Store[this.options.id]){return l.Store[this.options.id]}this.id=this.options.id||u.generateID("bar");this.closeTimer=-1;this.barDom=null;this.layoutDom=null;this.progressDom=null;this.showing=false;this.shown=false;this.closed=false;this.closing=false;this.killable=this.options.timeout||this.options.closeWith.length>0;this.hasSound=this.options.sounds.sources.length>0;this.soundPlayed=false;this.listeners={beforeShow:[],onShow:[],afterShow:[],onClose:[],afterClose:[],onClick:[],onHover:[],onTemplate:[]};this.promises={show:null,close:null};this.on("beforeShow",this.options.callbacks.beforeShow);this.on("onShow",this.options.callbacks.onShow);this.on("afterShow",this.options.callbacks.afterShow);this.on("onClose",this.options.callbacks.onClose);this.on("afterClose",this.options.callbacks.afterClose);this.on("onClick",this.options.callbacks.onClick);this.on("onHover",this.options.callbacks.onHover);this.on("onTemplate",this.options.callbacks.onTemplate);return this}i(e,[{key:"on",value:function t(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){};if(typeof t==="function"&&this.listeners.hasOwnProperty(e)){this.listeners[e].push(t)}return this}},{key:"show",value:function n(){var t=this;if(this.showing||this.shown){return this}if(this.options.killer===true){e.closeAll()}else if(typeof this.options.killer==="string"){e.closeAll(this.options.killer)}var n=l.getQueueCounts(this.options.queue);if(n.current>=n.maxVisible||l.PageHidden&&this.options.visibilityControl){l.addToQueue(this);if(l.PageHidden&&this.hasSound&&u.inArray("docHidden",this.options.sounds.conditions)){u.createAudioElements(this)}if(l.PageHidden&&u.inArray("docHidden",this.options.titleCount.conditions)){l.docTitle.increment()}return this}l.Store[this.id]=this;l.fire(this,"beforeShow");this.showing=true;if(this.closing){this.showing=false;return this}l.build(this);l.handleModal(this);if(this.options.force){this.layoutDom.insertBefore(this.barDom,this.layoutDom.firstChild)}else{this.layoutDom.appendChild(this.barDom)}if(this.hasSound&&!this.soundPlayed&&u.inArray("docVisible",this.options.sounds.conditions)){u.createAudioElements(this)}if(u.inArray("docVisible",this.options.titleCount.conditions)){l.docTitle.increment()}this.shown=true;this.closed=false;if(l.hasButtons(this)){Object.keys(this.options.buttons).forEach(function(e){var n=t.barDom.querySelector("#"+t.options.buttons[e].id);u.addListener(n,"click",function(n){u.stopPropagation(n);t.options.buttons[e].cb(t)})})}this.progressDom=this.barDom.querySelector(".noty_progressbar");if(u.inArray("click",this.options.closeWith)){u.addClass(this.barDom,"noty_close_with_click");u.addListener(this.barDom,"click",function(e){u.stopPropagation(e);l.fire(t,"onClick");t.close()},false)}u.addListener(this.barDom,"mouseenter",function(){l.fire(t,"onHover")},false);if(this.options.timeout)u.addClass(this.barDom,"noty_has_timeout");if(this.options.progressBar){u.addClass(this.barDom,"noty_has_progressbar")}if(u.inArray("button",this.options.closeWith)){u.addClass(this.barDom,"noty_close_with_button");var i=document.createElement("div");u.addClass(i,"noty_close_button");i.innerHTML="×";this.barDom.appendChild(i);u.addListener(i,"click",function(e){u.stopPropagation(e);t.close()},false)}l.fire(this,"onShow");if(this.options.animation.open===null){this.promises.show=new r.default(function(e){e()})}else if(typeof this.options.animation.open==="function"){this.promises.show=new r.default(this.options.animation.open.bind(this))}else{u.addClass(this.barDom,this.options.animation.open);this.promises.show=new r.default(function(e){u.addListener(t.barDom,u.animationEndEvents,function(){u.removeClass(t.barDom,t.options.animation.open);e()})})}this.promises.show.then(function(){var e=t;setTimeout(function(){l.openFlow(e)},100)});return this}},{key:"stop",value:function o(){l.dequeueClose(this);return this}},{key:"resume",value:function s(){l.queueClose(this);return this}},{key:"setTimeout",value:function(e){function t(t){return e.apply(this,arguments)}t.toString=function(){return e.toString()};return t}(function(e){this.stop();this.options.timeout=e;if(this.barDom){if(this.options.timeout){u.addClass(this.barDom,"noty_has_timeout")}else{u.removeClass(this.barDom,"noty_has_timeout")}var t=this;setTimeout(function(){t.resume()},100)}return this})},{key:"setText",value:function a(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(this.barDom){this.barDom.querySelector(".noty_body").innerHTML=e}if(t)this.options.text=e;return this}},{key:"setType",value:function d(e){var t=this;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(this.barDom){var i=u.classList(this.barDom).split(" ");i.forEach(function(e){if(e.substring(0,11)==="noty_type__"){u.removeClass(t.barDom,e)}});u.addClass(this.barDom,"noty_type__"+e)}if(n)this.options.type=e;return this}},{key:"setTheme",value:function h(e){var t=this;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(this.barDom){var i=u.classList(this.barDom).split(" ");i.forEach(function(e){if(e.substring(0,12)==="noty_theme__"){u.removeClass(t.barDom,e)}});u.addClass(this.barDom,"noty_theme__"+e)}if(n)this.options.theme=e;return this}},{key:"close",value:function v(){var e=this;if(this.closed)return this;if(!this.shown){l.removeFromQueue(this);return this}l.fire(this,"onClose");this.closing=true;if(this.options.animation.close===null||this.options.animation.close===false){this.promises.close=new r.default(function(e){e()})}else if(typeof this.options.animation.close==="function"){this.promises.close=new r.default(this.options.animation.close.bind(this))}else{u.addClass(this.barDom,this.options.animation.close);this.promises.close=new r.default(function(t){u.addListener(e.barDom,u.animationEndEvents,function(){if(e.options.force){u.remove(e.barDom)}else{l.ghostFix(e)}t()})})}this.promises.close.then(function(){l.closeFlow(e);l.handleModalClose(e)});this.closed=true;return this}}],[{key:"closeAll",value:function m(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;Object.keys(l.Store).forEach(function(t){if(e){if(l.Store[t].options.queue===e&&l.Store[t].killable){l.Store[t].close()}}else if(l.Store[t].killable){l.Store[t].close()}});return this}},{key:"clearQueue",value:function y(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"global";if(l.Queues.hasOwnProperty(e)){l.Queues[e].queue=[]}return this}},{key:"overrideDefaults",value:function b(e){l.Defaults=u.deepExtend({},l.Defaults,e);return this}},{key:"setMaxVisible",value:function w(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:l.DefaultMaxVisible;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"global";if(!l.Queues.hasOwnProperty(t)){l.Queues[t]={maxVisible:e,queue:[]}}l.Queues[t].maxVisible=e;return this}},{key:"button",value:function g(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var n=arguments[2];var i=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};return new f.NotyButton(e,t,n,i)}},{key:"version",value:function _(){return"3.2.0-beta"}},{key:"Push",value:function k(e){return new c.Push(e)}},{key:"Queues",get:function C(){return l.Queues}},{key:"PageHidden",get:function S(){return l.PageHidden}}]);return e}();t.default=v;if(typeof window!=="undefined"){u.visibilityChangeFlow()}e.exports=t["default"]},function(e,t){var n=e.exports={};var i;var o;function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){i=setTimeout}else{i=r}}catch(e){i=r}try{if(typeof clearTimeout==="function"){o=clearTimeout}else{o=s}}catch(e){o=s}})();function u(e){if(i===setTimeout){return setTimeout(e,0)}if((i===r||!i)&&setTimeout){i=setTimeout;return setTimeout(e,0)}try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}function a(e){if(o===clearTimeout){return clearTimeout(e)}if((o===s||!o)&&clearTimeout){o=clearTimeout;return clearTimeout(e)}try{return o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}var l=[];var f=false;var c;var d=-1;function h(){if(!f||!c){return}f=false;if(c.length){l=c.concat(l)}else{d=-1}if(l.length){p()}}function p(){if(f){return}var e=u(h);f=true;var t=l.length;while(t){c=l;l=[];while(++d<t){if(c){c[d].run()}}d=-1;t=l.length}c=null;f=false;a(e)}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}}l.push(new v(e,t));
if(l.length===1&&!f){u(p)}};function v(e,t){this.fun=e;this.array=t}v.prototype.run=function(){this.fun.apply(null,this.array)};n.title="browser";n.browser=true;n.env={};n.argv=[];n.version="";n.versions={};function m(){}n.on=m;n.addListener=m;n.once=m;n.off=m;n.removeListener=m;n.removeAllListeners=m;n.emit=m;n.prependListener=m;n.prependOnceListener=m;n.listeners=function(e){return[]};n.binding=function(e){throw new Error("process.binding is not supported")};n.cwd=function(){return"/"};n.chdir=function(e){throw new Error("process.chdir is not supported")};n.umask=function(){return 0}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(1,eval)("this")}catch(i){if(typeof window==="object")n=window}e.exports=n},function(e,t){}])});
//rebuild by neat 