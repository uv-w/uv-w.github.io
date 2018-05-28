// build time:Mon May 28 2018 17:16:20 GMT+0800 (CST)
define(["../../core","../../selector"],function(n){"use strict";return function(e,s){e=s||e;return e.style.display==="none"||e.style.display===""&&n.contains(e.ownerDocument,e)&&n.css(e,"display")==="none"}});
//rebuild by neat 