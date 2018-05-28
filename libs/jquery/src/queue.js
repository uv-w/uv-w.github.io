// build time:Mon May 28 2018 17:16:17 GMT+0800 (CST)
define(["./core","./data/var/dataPriv","./deferred","./callbacks"],function(e,u){"use strict";e.extend({queue:function(t,i,n){var r;if(t){i=(i||"fx")+"queue";r=u.get(t,i);if(n){if(!r||Array.isArray(n)){r=u.access(t,i,e.makeArray(n))}else{r.push(n)}}return r||[]}},dequeue:function(u,t){t=t||"fx";var i=e.queue(u,t),n=i.length,r=i.shift(),f=e._queueHooks(u,t),s=function(){e.dequeue(u,t)};if(r==="inprogress"){r=i.shift();n--}if(r){if(t==="fx"){i.unshift("inprogress")}delete f.stop;r.call(u,s,f)}if(!n&&f){f.empty.fire()}},_queueHooks:function(t,i){var n=i+"queueHooks";return u.get(t,n)||u.access(t,n,{empty:e.Callbacks("once memory").add(function(){u.remove(t,[i+"queue",n])})})}});e.fn.extend({queue:function(u,t){var i=2;if(typeof u!=="string"){t=u;u="fx";i--}if(arguments.length<i){return e.queue(this[0],u)}return t===undefined?this:this.each(function(){var i=e.queue(this,u,t);e._queueHooks(this,u);if(u==="fx"&&i[0]!=="inprogress"){e.dequeue(this,u)}})},dequeue:function(u){return this.each(function(){e.dequeue(this,u)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(t,i){var n,r=1,f=e.Deferred(),s=this,o=this.length,a=function(){if(!--r){f.resolveWith(s,[s])}};if(typeof t!=="string"){i=t;t=undefined}t=t||"fx";while(o--){n=u.get(s[o],t+"queueHooks");if(n&&n.empty){r++;n.empty.add(a)}}a();return f.promise(i)}});return e});
//rebuild by neat 