// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../core"],function(r){"use strict";r.parseXML=function(e){var n;if(!e||typeof e!=="string"){return null}try{n=(new window.DOMParser).parseFromString(e,"text/xml")}catch(t){n=undefined}if(!n||n.getElementsByTagName("parsererror").length){r.error("Invalid XML: "+e)}return n};return r.parseXML});
//rebuild by neat 