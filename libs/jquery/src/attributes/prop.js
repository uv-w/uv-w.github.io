// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../core","../core/access","./support","../selector"],function(e,t,n){"use strict";var r=/^(?:input|select|textarea|button)$/i,o=/^(?:a|area)$/i;e.fn.extend({prop:function(n,r){return t(this,e.prop,n,r,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[e.propFix[t]||t]})}});e.extend({prop:function(t,n,r){var o,i,a=t.nodeType;if(a===3||a===8||a===2){return}if(a!==1||!e.isXMLDoc(t)){n=e.propFix[n]||n;i=e.propHooks[n]}if(r!==undefined){if(i&&"set"in i&&(o=i.set(t,r,n))!==undefined){return o}return t[n]=r}if(i&&"get"in i&&(o=i.get(t,n))!==null){return o}return t[n]},propHooks:{tabIndex:{get:function(t){var n=e.find.attr(t,"tabindex");if(n){return parseInt(n,10)}if(r.test(t.nodeName)||o.test(t.nodeName)&&t.href){return 0}return-1}}},propFix:{"for":"htmlFor","class":"className"}});if(!n.optSelected){e.propHooks.selected={get:function(e){var t=e.parentNode;if(t&&t.parentNode){t.parentNode.selectedIndex}return null},set:function(e){var t=e.parentNode;if(t){t.selectedIndex;if(t.parentNode){t.parentNode.selectedIndex}}}}}e.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){e.propFix[this.toLowerCase()]=this})});
//rebuild by neat 