// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../core","../selector","../effects"],function(e){"use strict";e.expr.pseudos.animated=function(t){return e.grep(e.timers,function(e){return t===e.elem}).length}});
//rebuild by neat 