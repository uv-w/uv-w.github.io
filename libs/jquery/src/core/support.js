// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../var/document","../var/support"],function(e,r){"use strict";r.createHTMLDocument=function(){var r=e.implementation.createHTMLDocument("").body;r.innerHTML="<form></form><form></form>";return r.childNodes.length===2}();return r});
//rebuild by neat 