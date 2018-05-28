// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../core","../queue","../effects"],function(e){"use strict";e.fn.delay=function(n,t){n=e.fx?e.fx.speeds[n]||n:n;t=t||"fx";return this.queue(t,function(e,t){var u=window.setTimeout(e,n);t.stop=function(){window.clearTimeout(u)}})};return e.fn.delay});
//rebuild by neat 