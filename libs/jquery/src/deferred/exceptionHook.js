// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../core","../deferred"],function(e){"use strict";var n=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;e.Deferred.exceptionHook=function(e,o){if(window.console&&window.console.warn&&e&&n.test(e.name)){window.console.warn("jQuery.Deferred exception: "+e.message,e.stack,o)}}});
//rebuild by neat 