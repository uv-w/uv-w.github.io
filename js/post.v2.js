// build time:Mon May 28 2018 17:16:16 GMT+0800 (CST)
var Postv2=function(i){this.id=i;this.showUnreadNotification=function(i,o,t){var s=Cookies.get("CONTENT_"+this.id);if(i!==s){o()}else{t()}};this.update=function(i,o){Cookies.set("CONTENT_"+this.id,i,{domain:window.location.hostname,expires:365*3});o()}};
//rebuild by neat 