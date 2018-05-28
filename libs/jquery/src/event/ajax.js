// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../core","../event"],function(a){"use strict";a.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,n){a.fn[n]=function(a){return this.on(n,a)}})});
//rebuild by neat 