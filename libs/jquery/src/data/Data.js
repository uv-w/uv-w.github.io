// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../core","../core/camelCase","../var/rnothtmlwhite","./var/acceptData"],function(e,n,t,i){"use strict";function r(){this.expando=e.expando+r.uid++}r.uid=1;r.prototype={cache:function(e){var n=e[this.expando];if(!n){n={};if(i(e)){if(e.nodeType){e[this.expando]=n}else{Object.defineProperty(e,this.expando,{value:n,configurable:true})}}}return n},set:function(e,t,i){var r,d=this.cache(e);if(typeof t==="string"){d[n(t)]=i}else{for(r in t){d[n(r)]=t[r]}}return d},get:function(e,t){return t===undefined?this.cache(e):e[this.expando]&&e[this.expando][n(t)]},access:function(e,n,t){if(n===undefined||n&&typeof n==="string"&&t===undefined){return this.get(e,n)}this.set(e,n,t);return t!==undefined?t:n},remove:function(i,r){var d,a=i[this.expando];if(a===undefined){return}if(r!==undefined){if(Array.isArray(r)){r=r.map(n)}else{r=n(r);r=r in a?[r]:r.match(t)||[]}d=r.length;while(d--){delete a[r[d]]}}if(r===undefined||e.isEmptyObject(a)){if(i.nodeType){i[this.expando]=undefined}else{delete i[this.expando]}}},hasData:function(n){var t=n[this.expando];return t!==undefined&&!e.isEmptyObject(t)}};return r});
//rebuild by neat 