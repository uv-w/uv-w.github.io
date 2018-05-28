// build time:Mon May 28 2018 17:16:17 GMT+0800 (CST)
define(["./core","./var/document","./var/isFunction","./var/rnothtmlwhite","./ajax/var/location","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseXML","./event/trigger","./deferred","./serialize"],function(e,t,a,r,i,n,s){"use strict";var o=/%20/g,f=/#.*$/,c=/([?&])_=[^&]*/,u=/^(.*?):[ \t]*([^\r\n]*)$/gm,l=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,d=/^(?:GET|HEAD)$/,p=/^\/\//,h={},x={},y="*/".concat("*"),m=t.createElement("a");m.href=i.href;function g(e){return function(t,i){if(typeof t!=="string"){i=t;t="*"}var n,s=0,o=t.toLowerCase().match(r)||[];if(a(i)){while(n=o[s++]){if(n[0]==="+"){n=n.slice(1)||"*";(e[n]=e[n]||[]).unshift(i)}else{(e[n]=e[n]||[]).push(i)}}}}}function v(t,a,r,i){var n={},s=t===x;function o(f){var c;n[f]=true;e.each(t[f]||[],function(e,t){var f=t(a,r,i);if(typeof f==="string"&&!s&&!n[f]){a.dataTypes.unshift(f);o(f);return false}else if(s){return!(c=f)}});return c}return o(a.dataTypes[0])||!n["*"]&&o("*")}function j(t,a){var r,i,n=e.ajaxSettings.flatOptions||{};for(r in a){if(a[r]!==undefined){(n[r]?t:i||(i={}))[r]=a[r]}}if(i){e.extend(true,t,i)}return t}function T(e,t,a){var r,i,n,s,o=e.contents,f=e.dataTypes;while(f[0]==="*"){f.shift();if(r===undefined){r=e.mimeType||t.getResponseHeader("Content-Type")}}if(r){for(i in o){if(o[i]&&o[i].test(r)){f.unshift(i);break}}}if(f[0]in a){n=f[0]}else{for(i in a){if(!f[0]||e.converters[i+" "+f[0]]){n=i;break}if(!s){s=i}}n=n||s}if(n){if(n!==f[0]){f.unshift(n)}return a[n]}}function w(e,t,a,r){var i,n,s,o,f,c={},u=e.dataTypes.slice();if(u[1]){for(s in e.converters){c[s.toLowerCase()]=e.converters[s]}}n=u.shift();while(n){if(e.responseFields[n]){a[e.responseFields[n]]=t}if(!f&&r&&e.dataFilter){t=e.dataFilter(t,e.dataType)}f=n;n=u.shift();if(n){if(n==="*"){n=f}else if(f!=="*"&&f!==n){s=c[f+" "+n]||c["* "+n];if(!s){for(i in c){o=i.split(" ");if(o[1]===n){s=c[f+" "+o[0]]||c["* "+o[0]];if(s){if(s===true){s=c[i]}else if(c[i]!==true){n=o[0];u.unshift(o[1])}break}}}}if(s!==true){if(s&&e.throws){t=s(t)}else{try{t=s(t)}catch(l){return{state:"parsererror",error:s?l:"No conversion from "+f+" to "+n}}}}}}}return{state:"success",data:t}}e.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:i.href,type:"GET",isLocal:l.test(i.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":y,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":JSON.parse,"text xml":e.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(t,a){return a?j(j(t,e.ajaxSettings),a):j(e.ajaxSettings,t)},ajaxPrefilter:g(h),ajaxTransport:g(x),ajax:function(a,l){if(typeof a==="object"){l=a;a=undefined}l=l||{};var g,j,b,S,C,H,M,L,R,D,q=e.ajaxSetup({},l),E=q.context||q,F=q.context&&(E.nodeType||E.jquery)?e(E):e.event,O=e.Deferred(),N=e.Callbacks("once memory"),$=q.statusCode||{},k={},A={},J="canceled",W={readyState:0,getResponseHeader:function(e){var t;if(M){if(!S){S={};while(t=u.exec(b)){S[t[1].toLowerCase()]=t[2]}}t=S[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return M?b:null},setRequestHeader:function(e,t){if(M==null){e=A[e.toLowerCase()]=A[e.toLowerCase()]||e;k[e]=t}return this},overrideMimeType:function(e){if(M==null){q.mimeType=e}return this},statusCode:function(e){var t;if(e){if(M){W.always(e[W.status])}else{for(t in e){$[t]=[$[t],e[t]]}}}return this},abort:function(e){var t=e||J;if(g){g.abort(t)}G(0,t);return this}};O.promise(W);q.url=((a||q.url||i.href)+"").replace(p,i.protocol+"//");q.type=l.method||l.type||q.method||q.type;q.dataTypes=(q.dataType||"*").toLowerCase().match(r)||[""];if(q.crossDomain==null){H=t.createElement("a");try{H.href=q.url;H.href=H.href;q.crossDomain=m.protocol+"//"+m.host!==H.protocol+"//"+H.host}catch(X){q.crossDomain=true}}if(q.data&&q.processData&&typeof q.data!=="string"){q.data=e.param(q.data,q.traditional)}v(h,q,l,W);if(M){return W}L=e.event&&q.global;if(L&&e.active++===0){e.event.trigger("ajaxStart")}q.type=q.type.toUpperCase();q.hasContent=!d.test(q.type);j=q.url.replace(f,"");if(!q.hasContent){D=q.url.slice(j.length);if(q.data&&(q.processData||typeof q.data==="string")){j+=(s.test(j)?"&":"?")+q.data;delete q.data}if(q.cache===false){j=j.replace(c,"$1");D=(s.test(j)?"&":"?")+"_="+n++ +D}q.url=j+D}else if(q.data&&q.processData&&(q.contentType||"").indexOf("application/x-www-form-urlencoded")===0){q.data=q.data.replace(o,"+")}if(q.ifModified){if(e.lastModified[j]){W.setRequestHeader("If-Modified-Since",e.lastModified[j])}if(e.etag[j]){W.setRequestHeader("If-None-Match",e.etag[j])}}if(q.data&&q.hasContent&&q.contentType!==false||l.contentType){W.setRequestHeader("Content-Type",q.contentType)}W.setRequestHeader("Accept",q.dataTypes[0]&&q.accepts[q.dataTypes[0]]?q.accepts[q.dataTypes[0]]+(q.dataTypes[0]!=="*"?", "+y+"; q=0.01":""):q.accepts["*"]);for(R in q.headers){W.setRequestHeader(R,q.headers[R])}if(q.beforeSend&&(q.beforeSend.call(E,W,q)===false||M)){return W.abort()}J="abort";N.add(q.complete);W.done(q.success);W.fail(q.error);g=v(x,q,l,W);if(!g){G(-1,"No Transport")}else{W.readyState=1;if(L){F.trigger("ajaxSend",[W,q])}if(M){return W}if(q.async&&q.timeout>0){C=window.setTimeout(function(){W.abort("timeout")},q.timeout)}try{M=false;g.send(k,G)}catch(X){if(M){throw X}G(-1,X)}}function G(t,a,r,i){var n,s,o,f,c,u=a;if(M){return}M=true;if(C){window.clearTimeout(C)}g=undefined;b=i||"";W.readyState=t>0?4:0;n=t>=200&&t<300||t===304;if(r){f=T(q,W,r)}f=w(q,f,W,n);if(n){if(q.ifModified){c=W.getResponseHeader("Last-Modified");if(c){e.lastModified[j]=c}c=W.getResponseHeader("etag");if(c){e.etag[j]=c}}if(t===204||q.type==="HEAD"){u="nocontent"}else if(t===304){u="notmodified"}else{u=f.state;s=f.data;o=f.error;n=!o}}else{o=u;if(t||!u){u="error";if(t<0){t=0}}}W.status=t;W.statusText=(a||u)+"";if(n){O.resolveWith(E,[s,u,W])}else{O.rejectWith(E,[W,u,o])}W.statusCode($);$=undefined;if(L){F.trigger(n?"ajaxSuccess":"ajaxError",[W,q,n?s:o])}N.fireWith(E,[W,u]);if(L){F.trigger("ajaxComplete",[W,q]);if(!--e.active){e.event.trigger("ajaxStop")}}}return W},getJSON:function(t,a,r){return e.get(t,a,r,"json")},getScript:function(t,a){return e.get(t,undefined,a,"script")}});e.each(["get","post"],function(t,r){e[r]=function(t,i,n,s){if(a(i)){s=s||n;n=i;i=undefined}return e.ajax(e.extend({url:t,type:r,dataType:s,data:i,success:n},e.isPlainObject(t)&&t))}});return e});
//rebuild by neat 