// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../core","../var/document","../var/documentElement","../var/support"],function(e,t,n,o){"use strict";(function(){function i(){if(!p){return}c.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";p.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";n.appendChild(c).appendChild(p);var e=window.getComputedStyle(p);l=e.top!=="1%";s=r(e.marginLeft)===12;p.style.right="60%";d=r(e.right)===36;u=r(e.width)===36;p.style.position="absolute";a=p.offsetWidth===36||"absolute";n.removeChild(c);p=null}function r(e){return Math.round(parseFloat(e))}var l,u,a,d,s,c=t.createElement("div"),p=t.createElement("div");if(!p.style){return}p.style.backgroundClip="content-box";p.cloneNode(true).style.backgroundClip="";o.clearCloneStyle=p.style.backgroundClip==="content-box";e.extend(o,{boxSizingReliable:function(){i();return u},pixelBoxStyles:function(){i();return d},pixelPosition:function(){i();return l},reliableMarginLeft:function(){i();return s},scrollboxSize:function(){i();return a}})})();return o});
//rebuild by neat 