// build time:Mon May 28 2018 17:16:20 GMT+0800 (CST)
(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?module.exports=t():typeof define==="function"&&define.amd?define(t):e.Popper=t()})(this,function(){"use strict";var e=typeof window!=="undefined"&&typeof document!=="undefined";var t=["Edge","Trident","Firefox"];var r=0;for(var n=0;n<t.length;n+=1){if(e&&navigator.userAgent.indexOf(t[n])>=0){r=1;break}}function o(e){var t=false;return function(){if(t){return}t=true;window.Promise.resolve().then(function(){t=false;e()})}}function i(e){var t=false;return function(){if(!t){t=true;setTimeout(function(){t=false;e()},r)}}}var a=e&&window.Promise;var f=a?o:i;function s(e){var t={};return e&&t.toString.call(e)==="[object Function]"}function l(e,t){if(e.nodeType!==1){return[]}var r=getComputedStyle(e,null);return t?r[t]:r}function u(e){if(e.nodeName==="HTML"){return e}return e.parentNode||e.host}function p(e){if(!e){return document.body}switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=l(e),r=t.overflow,n=t.overflowX,o=t.overflowY;if(/(auto|scroll|overlay)/.test(r+o+n)){return e}return p(u(e))}var d=e&&!!(window.MSInputMethodContext&&document.documentMode);var c=e&&/MSIE 10/.test(navigator.userAgent);function h(e){if(e===11){return d}if(e===10){return c}return d||c}function v(e){if(!e){return document.documentElement}var t=h(10)?document.body:null;var r=e.offsetParent;while(r===t&&e.nextElementSibling){r=(e=e.nextElementSibling).offsetParent}var n=r&&r.nodeName;if(!n||n==="BODY"||n==="HTML"){return e?e.ownerDocument.documentElement:document.documentElement}if(["TD","TABLE"].indexOf(r.nodeName)!==-1&&l(r,"position")==="static"){return v(r)}return r}function m(e){var t=e.nodeName;if(t==="BODY"){return false}return t==="HTML"||v(e.firstElementChild)===e}function g(e){if(e.parentNode!==null){return g(e.parentNode)}return e}function b(e,t){if(!e||!e.nodeType||!t||!t.nodeType){return document.documentElement}var r=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING;var n=r?e:t;var o=r?t:e;var i=document.createRange();i.setStart(n,0);i.setEnd(o,0);var a=i.commonAncestorContainer;if(e!==a&&t!==a||n.contains(o)){if(m(a)){return a}return v(a)}var f=g(e);if(f.host){return b(f.host,t)}else{return b(e,g(t).host)}}function w(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"top";var r=t==="top"?"scrollTop":"scrollLeft";var n=e.nodeName;if(n==="BODY"||n==="HTML"){var o=e.ownerDocument.documentElement;var i=e.ownerDocument.scrollingElement||o;return i[r]}return e[r]}function y(e,t){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var n=w(t,"top");var o=w(t,"left");var i=r?-1:1;e.top+=n*i;e.bottom+=n*i;e.left+=o*i;e.right+=o*i;return e}function E(e,t){var r=t==="x"?"Left":"Top";var n=r==="Left"?"Right":"Bottom";return parseFloat(e["border"+r+"Width"],10)+parseFloat(e["border"+n+"Width"],10)}function x(e,t,r,n){return Math.max(t["offset"+e],t["scroll"+e],r["client"+e],r["offset"+e],r["scroll"+e],h(10)?r["offset"+e]+n["margin"+(e==="Height"?"Top":"Left")]+n["margin"+(e==="Height"?"Bottom":"Right")]:0)}function O(){var e=document.body;var t=document.documentElement;var r=h(10)&&getComputedStyle(t);return{height:x("Height",e,t,r),width:x("Width",e,t,r)}}var L=function(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}};var T=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var M=function(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e};var C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};function N(e){return C({},e,{right:e.left+e.width,bottom:e.top+e.height})}function F(e){var t={};try{if(h(10)){t=e.getBoundingClientRect();var r=w(e,"top");var n=w(e,"left");t.top+=r;t.left+=n;t.bottom+=r;t.right+=n}else{t=e.getBoundingClientRect()}}catch(o){}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top};var a=e.nodeName==="HTML"?O():{};var f=a.width||e.clientWidth||i.right-i.left;var s=a.height||e.clientHeight||i.bottom-i.top;var u=e.offsetWidth-f;var p=e.offsetHeight-s;if(u||p){var d=l(e);u-=E(d,"x");p-=E(d,"y");i.width-=u;i.height-=p}return N(i)}function D(e,t){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var n=h(10);var o=t.nodeName==="HTML";var i=F(e);var a=F(t);var f=p(e);var s=l(t);var u=parseFloat(s.borderTopWidth,10);var d=parseFloat(s.borderLeftWidth,10);if(r&&t.nodeName==="HTML"){a.top=Math.max(a.top,0);a.left=Math.max(a.left,0)}var c=N({top:i.top-a.top-u,left:i.left-a.left-d,width:i.width,height:i.height});c.marginTop=0;c.marginLeft=0;if(!n&&o){var v=parseFloat(s.marginTop,10);var m=parseFloat(s.marginLeft,10);c.top-=u-v;c.bottom-=u-v;c.left-=d-m;c.right-=d-m;c.marginTop=v;c.marginLeft=m}if(n&&!r?t.contains(f):t===f&&f.nodeName!=="BODY"){c=y(c,t)}return c}function k(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var r=e.ownerDocument.documentElement;var n=D(e,r);var o=Math.max(r.clientWidth,window.innerWidth||0);var i=Math.max(r.clientHeight,window.innerHeight||0);var a=!t?w(r):0;var f=!t?w(r,"left"):0;var s={top:a-n.top+n.marginTop,left:f-n.left+n.marginLeft,width:o,height:i};return N(s)}function S(e){var t=e.nodeName;if(t==="BODY"||t==="HTML"){return false}if(l(e,"position")==="fixed"){return true}return S(u(e))}function W(e){if(!e||!e.parentElement||h()){return document.documentElement}var t=e.parentElement;while(t&&l(t,"transform")==="none"){t=t.parentElement}return t||document.documentElement}function P(e,t,r,n){var o=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var i={top:0,left:0};var a=o?W(e):b(e,t);if(n==="viewport"){i=k(a,o)}else{var f=void 0;if(n==="scrollParent"){f=p(u(t));if(f.nodeName==="BODY"){f=e.ownerDocument.documentElement}}else if(n==="window"){f=e.ownerDocument.documentElement}else{f=n}var s=D(f,a,o);if(f.nodeName==="HTML"&&!S(a)){var l=O(),d=l.height,c=l.width;i.top+=s.top-s.marginTop;i.bottom=d+s.top;i.left+=s.left-s.marginLeft;i.right=c+s.left}else{i=s}}i.left+=r;i.top+=r;i.right-=r;i.bottom-=r;return i}function H(e){var t=e.width,r=e.height;return t*r}function A(e,t,r,n,o){var i=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;if(e.indexOf("auto")===-1){return e}var a=P(r,n,i,o);var f={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}};var s=Object.keys(f).map(function(e){return C({key:e},f[e],{area:H(f[e])})}).sort(function(e,t){return t.area-e.area});var l=s.filter(function(e){var t=e.width,n=e.height;return t>=r.clientWidth&&n>=r.clientHeight});var u=l.length>0?l[0].key:s[0].key;var p=e.split("-")[1];return u+(p?"-"+p:"")}function B(e,t,r){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var o=n?W(t):b(t,r);return D(r,o,n)}function j(e){var t=getComputedStyle(e);var r=parseFloat(t.marginTop)+parseFloat(t.marginBottom);var n=parseFloat(t.marginLeft)+parseFloat(t.marginRight);var o={width:e.offsetWidth+n,height:e.offsetHeight+r};return o}function I(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function R(e,t,r){r=r.split("-")[0];var n=j(e);var o={width:n.width,height:n.height};var i=["right","left"].indexOf(r)!==-1;var a=i?"top":"left";var f=i?"left":"top";var s=i?"height":"width";var l=!i?"height":"width";o[a]=t[a]+t[s]/2-n[s]/2;if(r===f){o[f]=t[f]-n[l]}else{o[f]=t[I(f)]}return o}function U(e,t){if(Array.prototype.find){return e.find(t)}return e.filter(t)[0]}function Y(e,t,r){if(Array.prototype.findIndex){return e.findIndex(function(e){return e[t]===r})}var n=U(e,function(e){return e[t]===r});return e.indexOf(n)}function q(e,t,r){var n=r===undefined?e:e.slice(0,Y(e,"name",r));n.forEach(function(e){if(e["function"]){console.warn("`modifier.function` is deprecated, use `modifier.fn`!")}var r=e["function"]||e.fn;if(e.enabled&&s(r)){t.offsets.popper=N(t.offsets.popper);t.offsets.reference=N(t.offsets.reference);t=r(t,e)}});return t}function K(e){var t=[false,"ms","Webkit","Moz","O"];var r=e.charAt(0).toUpperCase()+e.slice(1);for(var n=0;n<t.length;n++){var o=t[n];var i=o?""+o+r:e;if(typeof document.body.style[i]!=="undefined"){return i}}return null}function z(){if(this.state.isDestroyed){return}var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};var t=this.popper.style;t.top="";t.left="";t[K("transform")]="";e.offsets.reference=B(this.state,this.popper,this.reference,this.options.positionFixed);e.placement=A(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);e.originalPlacement=e.placement;e.positionFixed=this.options.positionFixed;e.offsets.popper=R(this.popper,e.offsets.reference,e.placement);e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute";e=q(this.modifiers,e);if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(e)}else{this.options.onUpdate(e)}}function G(e,t){return e.some(function(e){var r=e.name,n=e.enabled;return n&&r===t})}function V(){this.state.isDestroyed=true;if(G(this.modifiers,"applyStyle")){this.popper.removeAttribute("x-placement");this.popper.style.position="";this.popper.style.top="";this.popper.style.left="";this.popper.style.right="";this.popper.style.bottom="";this.popper.style.willChange="";this.popper.style[K("transform")]=""}this.disableEventListeners();if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper)}return this}function _(e){var t=e.ownerDocument;return t?t.defaultView:window}function X(e,t,r,n){var o=e.nodeName==="BODY";var i=o?e.ownerDocument.defaultView:e;i.addEventListener(t,r,{passive:true});if(!o){X(p(i.parentNode),t,r,n)}n.push(i)}function J(e,t,r,n){r.updateBound=n;_(e).addEventListener("resize",r.updateBound,{passive:true});var o=p(e);X(o,"scroll",r.updateBound,r.scrollParents);r.scrollElement=o;r.eventsEnabled=true;return r}function Q(){if(!this.state.eventsEnabled){this.state=J(this.reference,this.options,this.state,this.scheduleUpdate)}}function Z(e,t){_(e).removeEventListener("resize",t.updateBound);t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)});t.updateBound=null;t.scrollParents=[];t.scrollElement=null;t.eventsEnabled=false;return t}function $(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=Z(this.reference,this.state)}}function ee(e){return e!==""&&!isNaN(parseFloat(e))&&isFinite(e)}function te(e,t){Object.keys(t).forEach(function(r){var n="";if(["width","height","top","right","bottom","left"].indexOf(r)!==-1&&ee(t[r])){n="px"}e.style[r]=t[r]+n})}function re(e,t){Object.keys(t).forEach(function(r){var n=t[r];if(n!==false){e.setAttribute(r,t[r])}else{e.removeAttribute(r)}})}function ne(e){te(e.instance.popper,e.styles);re(e.instance.popper,e.attributes);if(e.arrowElement&&Object.keys(e.arrowStyles).length){te(e.arrowElement,e.arrowStyles)}return e}function oe(e,t,r,n,o){var i=B(o,t,e,r.positionFixed);var a=A(r.placement,i,t,e,r.modifiers.flip.boundariesElement,r.modifiers.flip.padding);t.setAttribute("x-placement",a);te(t,{position:r.positionFixed?"fixed":"absolute"});return r}function ie(e,t){var r=t.x,n=t.y;var o=e.offsets.popper;var i=U(e.instance.modifiers,function(e){return e.name==="applyStyle"}).gpuAcceleration;if(i!==undefined){console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")}var a=i!==undefined?i:t.gpuAcceleration;var f=v(e.instance.popper);var s=F(f);var l={position:o.position};var u={left:Math.floor(o.left),top:Math.round(o.top),bottom:Math.round(o.bottom),right:Math.floor(o.right)};var p=r==="bottom"?"top":"bottom";var d=n==="right"?"left":"right";var c=K("transform");var h=void 0,m=void 0;if(p==="bottom"){m=-s.height+u.bottom}else{m=u.top}if(d==="right"){h=-s.width+u.right}else{h=u.left}if(a&&c){l[c]="translate3d("+h+"px, "+m+"px, 0)";l[p]=0;l[d]=0;l.willChange="transform"}else{var g=p==="bottom"?-1:1;var b=d==="right"?-1:1;l[p]=m*g;l[d]=h*b;l.willChange=p+", "+d}var w={"x-placement":e.placement};e.attributes=C({},w,e.attributes);e.styles=C({},l,e.styles);e.arrowStyles=C({},e.offsets.arrow,e.arrowStyles);return e}function ae(e,t,r){var n=U(e,function(e){var r=e.name;return r===t});var o=!!n&&e.some(function(e){return e.name===r&&e.enabled&&e.order<n.order});if(!o){var i="`"+t+"`";var a="`"+r+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}function fe(e,t){var r;if(!ae(e.instance.modifiers,"arrow","keepTogether")){return e}var n=t.element;if(typeof n==="string"){n=e.instance.popper.querySelector(n);if(!n){return e}}else{if(!e.instance.popper.contains(n)){console.warn("WARNING: `arrow.element` must be child of its popper element!");return e}}var o=e.placement.split("-")[0];var i=e.offsets,a=i.popper,f=i.reference;var s=["left","right"].indexOf(o)!==-1;var u=s?"height":"width";var p=s?"Top":"Left";var d=p.toLowerCase();var c=s?"left":"top";var h=s?"bottom":"right";var v=j(n)[u];if(f[h]-v<a[d]){e.offsets.popper[d]-=a[d]-(f[h]-v)}if(f[d]+v>a[h]){e.offsets.popper[d]+=f[d]+v-a[h]}e.offsets.popper=N(e.offsets.popper);var m=f[d]+f[u]/2-v/2;var g=l(e.instance.popper);var b=parseFloat(g["margin"+p],10);var w=parseFloat(g["border"+p+"Width"],10);var y=m-e.offsets.popper[d]-b-w;y=Math.max(Math.min(a[u]-v,y),0);e.arrowElement=n;e.offsets.arrow=(r={},M(r,d,Math.round(y)),M(r,c,""),r);return e}function se(e){if(e==="end"){return"start"}else if(e==="start"){return"end"}return e}var le=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var ue=le.slice(3);function pe(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var r=ue.indexOf(e);var n=ue.slice(r+1).concat(ue.slice(0,r));return t?n.reverse():n}var de={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function ce(e,t){if(G(e.instance.modifiers,"inner")){return e}if(e.flipped&&e.placement===e.originalPlacement){return e}var r=P(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed);var n=e.placement.split("-")[0];var o=I(n);var i=e.placement.split("-")[1]||"";var a=[];switch(t.behavior){case de.FLIP:a=[n,o];break;case de.CLOCKWISE:a=pe(n);break;case de.COUNTERCLOCKWISE:a=pe(n,true);break;default:a=t.behavior}a.forEach(function(f,s){if(n!==f||a.length===s+1){return e}n=e.placement.split("-")[0];o=I(n);var l=e.offsets.popper;var u=e.offsets.reference;var p=Math.floor;var d=n==="left"&&p(l.right)>p(u.left)||n==="right"&&p(l.left)<p(u.right)||n==="top"&&p(l.bottom)>p(u.top)||n==="bottom"&&p(l.top)<p(u.bottom);var c=p(l.left)<p(r.left);var h=p(l.right)>p(r.right);var v=p(l.top)<p(r.top);var m=p(l.bottom)>p(r.bottom);var g=n==="left"&&c||n==="right"&&h||n==="top"&&v||n==="bottom"&&m;var b=["top","bottom"].indexOf(n)!==-1;var w=!!t.flipVariations&&(b&&i==="start"&&c||b&&i==="end"&&h||!b&&i==="start"&&v||!b&&i==="end"&&m);if(d||g||w){e.flipped=true;if(d||g){n=a[s+1]}if(w){i=se(i)}e.placement=n+(i?"-"+i:"");e.offsets.popper=C({},e.offsets.popper,R(e.instance.popper,e.offsets.reference,e.placement));e=q(e.instance.modifiers,e,"flip")}});return e}function he(e){var t=e.offsets,r=t.popper,n=t.reference;var o=e.placement.split("-")[0];var i=Math.floor;var a=["top","bottom"].indexOf(o)!==-1;var f=a?"right":"bottom";var s=a?"left":"top";var l=a?"width":"height";if(r[f]<i(n[s])){e.offsets.popper[s]=i(n[s])-r[l]}if(r[s]>i(n[f])){e.offsets.popper[s]=i(n[f])}return e}function ve(e,t,r,n){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var i=+o[1];var a=o[2];if(!i){return e}if(a.indexOf("%")===0){var f=void 0;switch(a){case"%p":f=r;break;case"%":case"%r":default:f=n}var s=N(f);return s[t]/100*i}else if(a==="vh"||a==="vw"){var l=void 0;if(a==="vh"){l=Math.max(document.documentElement.clientHeight,window.innerHeight||0)}else{l=Math.max(document.documentElement.clientWidth,window.innerWidth||0)}return l/100*i}else{return i}}function me(e,t,r,n){var o=[0,0];var i=["right","left"].indexOf(n)!==-1;var a=e.split(/(\+|\-)/).map(function(e){return e.trim()});var f=a.indexOf(U(a,function(e){return e.search(/,|\s/)!==-1}));if(a[f]&&a[f].indexOf(",")===-1){console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")}var s=/\s*,\s*|\s+/;var l=f!==-1?[a.slice(0,f).concat([a[f].split(s)[0]]),[a[f].split(s)[1]].concat(a.slice(f+1))]:[a];l=l.map(function(e,n){var o=(n===1?!i:i)?"height":"width";var a=false;return e.reduce(function(e,t){if(e[e.length-1]===""&&["+","-"].indexOf(t)!==-1){e[e.length-1]=t;a=true;return e}else if(a){e[e.length-1]+=t;a=false;return e}else{return e.concat(t)}},[]).map(function(e){return ve(e,o,t,r)})});l.forEach(function(e,t){e.forEach(function(r,n){if(ee(r)){o[t]+=r*(e[n-1]==="-"?-1:1)}})});return o}function ge(e,t){var r=t.offset;var n=e.placement,o=e.offsets,i=o.popper,a=o.reference;var f=n.split("-")[0];var s=void 0;if(ee(+r)){s=[+r,0]}else{s=me(r,i,a,f)}if(f==="left"){i.top+=s[0];i.left-=s[1]}else if(f==="right"){i.top+=s[0];i.left+=s[1]}else if(f==="top"){i.left+=s[0];i.top-=s[1]}else if(f==="bottom"){i.left+=s[0];i.top+=s[1]}e.popper=i;return e}function be(e,t){var r=t.boundariesElement||v(e.instance.popper);if(e.instance.reference===r){r=v(r)}var n=P(e.instance.popper,e.instance.reference,t.padding,r,e.positionFixed);t.boundaries=n;var o=t.priority;var i=e.offsets.popper;var a={primary:function f(e){var r=i[e];if(i[e]<n[e]&&!t.escapeWithReference){r=Math.max(i[e],n[e])}return M({},e,r)},secondary:function s(e){var r=e==="right"?"left":"top";var o=i[r];if(i[e]>n[e]&&!t.escapeWithReference){o=Math.min(i[r],n[e]-(e==="right"?i.width:i.height))}return M({},r,o)}};o.forEach(function(e){var t=["left","top"].indexOf(e)!==-1?"primary":"secondary";i=C({},i,a[t](e))});e.offsets.popper=i;return e}function we(e){var t=e.placement;var r=t.split("-")[0];var n=t.split("-")[1];if(n){var o=e.offsets,i=o.reference,a=o.popper;var f=["bottom","top"].indexOf(r)!==-1;var s=f?"left":"top";var l=f?"width":"height";var u={start:M({},s,i[s]),end:M({},s,i[s]+i[l]-a[l])};e.offsets.popper=C({},a,u[n])}return e}function ye(e){if(!ae(e.instance.modifiers,"hide","preventOverflow")){return e}var t=e.offsets.reference;var r=U(e.instance.modifiers,function(e){return e.name==="preventOverflow"}).boundaries;if(t.bottom<r.top||t.left>r.right||t.top>r.bottom||t.right<r.left){if(e.hide===true){return e}e.hide=true;e.attributes["x-out-of-boundaries"]=""}else{if(e.hide===false){return e}e.hide=false;e.attributes["x-out-of-boundaries"]=false}return e}function Ee(e){var t=e.placement;var r=t.split("-")[0];var n=e.offsets,o=n.popper,i=n.reference;var a=["left","right"].indexOf(r)!==-1;var f=["top","left"].indexOf(r)===-1;o[a?"left":"top"]=i[r]-(f?o[a?"width":"height"]:0);e.placement=I(t);e.offsets.popper=N(o);return e}var xe={shift:{order:100,enabled:true,fn:we},offset:{order:200,enabled:true,fn:ge,offset:0},preventOverflow:{order:300,enabled:true,fn:be,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:true,fn:he},arrow:{order:500,enabled:true,fn:fe,element:"[x-arrow]"},flip:{order:600,enabled:true,fn:ce,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:false,fn:Ee},hide:{order:800,enabled:true,fn:ye},computeStyle:{order:850,enabled:true,fn:ie,gpuAcceleration:true,x:"bottom",y:"right"},applyStyle:{order:900,enabled:true,fn:ne,onLoad:oe,gpuAcceleration:undefined}};var Oe={placement:"bottom",positionFixed:false,eventsEnabled:true,removeOnDestroy:false,onCreate:function Te(){},onUpdate:function Me(){},modifiers:xe};var Le=function(){function e(t,r){var n=this;var o=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};L(this,e);this.scheduleUpdate=function(){return requestAnimationFrame(n.update)};this.update=f(this.update.bind(this));this.options=C({},e.Defaults,o);this.state={isDestroyed:false,isCreated:false,scrollParents:[]};this.reference=t&&t.jquery?t[0]:t;this.popper=r&&r.jquery?r[0]:r;this.options.modifiers={};Object.keys(C({},e.Defaults.modifiers,o.modifiers)).forEach(function(t){n.options.modifiers[t]=C({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})});this.modifiers=Object.keys(this.options.modifiers).map(function(e){return C({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order});this.modifiers.forEach(function(e){if(e.enabled&&s(e.onLoad)){e.onLoad(n.reference,n.popper,n.options,e,n.state)}});this.update();var i=this.options.eventsEnabled;if(i){this.enableEventListeners()}this.state.eventsEnabled=i}T(e,[{key:"update",value:function t(){return z.call(this)}},{key:"destroy",value:function r(){return V.call(this)}},{key:"enableEventListeners",value:function n(){return Q.call(this)}},{key:"disableEventListeners",value:function o(){return $.call(this)}}]);return e}();Le.Utils=(typeof window!=="undefined"?window:global).PopperUtils;Le.placements=le;Le.Defaults=Oe;return Le});
//rebuild by neat 