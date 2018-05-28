// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../core","../core/nodeName"],function(e,n){"use strict";function r(r,t){var f;if(typeof r.getElementsByTagName!=="undefined"){f=r.getElementsByTagName(t||"*")}else if(typeof r.querySelectorAll!=="undefined"){f=r.querySelectorAll(t||"*")}else{f=[]}if(t===undefined||t&&n(r,t)){return e.merge([r],f)}return f}return r});
//rebuild by neat 