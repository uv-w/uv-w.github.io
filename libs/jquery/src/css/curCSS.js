// build time:Mon May 28 2018 17:16:19 GMT+0800 (CST)
define(["../core","./var/rboxStyle","./var/rnumnonpx","./var/getStyles","./support","../selector"],function(t,e,i,n,r){"use strict";function d(d,o,s){var h,u,a,l,m=d.style;s=s||n(d);if(s){l=s.getPropertyValue(o)||s[o];if(l===""&&!t.contains(d.ownerDocument,d)){l=t.style(d,o)}if(!r.pixelBoxStyles()&&i.test(l)&&e.test(o)){h=m.width;u=m.minWidth;a=m.maxWidth;m.minWidth=m.maxWidth=m.width=l;l=s.width;m.width=h;m.minWidth=u;m.maxWidth=a}}return l!==undefined?l+"":l}return d});
//rebuild by neat 