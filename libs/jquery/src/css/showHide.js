// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../core","../data/var/dataPriv","../css/var/isHiddenWithinTree"],function(e,n,i){"use strict";var t={};function s(n){var i,s=n.ownerDocument,r=n.nodeName,o=t[r];if(o){return o}i=s.body.appendChild(s.createElement(r));o=e.css(i,"display");i.parentNode.removeChild(i);if(o==="none"){o="block"}t[r]=o;return o}function r(e,t){var r,o,l=[],f=0,a=e.length;for(;f<a;f++){o=e[f];if(!o.style){continue}r=o.style.display;if(t){if(r==="none"){l[f]=n.get(o,"display")||null;if(!l[f]){o.style.display=""}}if(o.style.display===""&&i(o)){l[f]=s(o)}}else{if(r!=="none"){l[f]="none";n.set(o,"display",r)}}}for(f=0;f<a;f++){if(l[f]!=null){e[f].style.display=l[f]}}return e}e.fn.extend({show:function(){return r(this,true)},hide:function(){return r(this)},toggle:function(n){if(typeof n==="boolean"){return n?this.show():this.hide()}return this.each(function(){if(i(this)){e(this).show()}else{e(this).hide()}})}});return r});
//rebuild by neat 