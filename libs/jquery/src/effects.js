// build time:Mon May 28 2018 17:16:17 GMT+0800 (CST)
define(["./core","./core/camelCase","./var/document","./var/isFunction","./var/rcssNum","./var/rnothtmlwhite","./css/var/cssExpand","./css/var/isHiddenWithinTree","./css/var/swap","./css/adjustCSS","./data/var/dataPriv","./css/showHide","./core/init","./queue","./deferred","./traversing","./manipulation","./css","./effects/Tween"],function(e,t,i,n,s,o,f,r,u,a,l,d){"use strict";var c,p,h=/^(?:toggle|show|hide)$/,w=/queueHooks$/;function m(){if(p){if(i.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(m)}else{window.setTimeout(m,e.fx.interval)}e.fx.tick()}}function g(){window.setTimeout(function(){c=undefined});return c=Date.now()}function v(e,t){var i,n=0,s={height:e};t=t?1:0;for(;n<4;n+=2-t){i=f[n];s["margin"+i]=s["padding"+i]=e}if(t){s.opacity=s.width=e}return s}function y(e,t,i){var n,s=(T.tweeners[t]||[]).concat(T.tweeners["*"]),o=0,f=s.length;for(;o<f;o++){if(n=s[o].call(i,t,e)){return n}}}function x(t,i,n){var s,o,f,u,a,c,p,w,m="width"in i||"height"in i,g=this,v={},x=t.style,q=t.nodeType&&r(t),T=l.get(t,"fxshow");if(!n.queue){u=e._queueHooks(t,"fx");if(u.unqueued==null){u.unqueued=0;a=u.empty.fire;u.empty.fire=function(){if(!u.unqueued){a()}}}u.unqueued++;g.always(function(){g.always(function(){u.unqueued--;if(!e.queue(t,"fx").length){u.empty.fire()}})})}for(s in i){o=i[s];if(h.test(o)){delete i[s];f=f||o==="toggle";if(o===(q?"hide":"show")){if(o==="show"&&T&&T[s]!==undefined){q=true}else{continue}}v[s]=T&&T[s]||e.style(t,s)}}c=!e.isEmptyObject(i);if(!c&&e.isEmptyObject(v)){return}if(m&&t.nodeType===1){n.overflow=[x.overflow,x.overflowX,x.overflowY];p=T&&T.display;if(p==null){p=l.get(t,"display")}w=e.css(t,"display");if(w==="none"){if(p){w=p}else{d([t],true);p=t.style.display||p;w=e.css(t,"display");d([t])}}if(w==="inline"||w==="inline-block"&&p!=null){if(e.css(t,"float")==="none"){if(!c){g.done(function(){x.display=p});if(p==null){w=x.display;p=w==="none"?"":w}}x.display="inline-block"}}}if(n.overflow){x.overflow="hidden";g.always(function(){x.overflow=n.overflow[0];x.overflowX=n.overflow[1];x.overflowY=n.overflow[2]})}c=false;for(s in v){if(!c){if(T){if("hidden"in T){q=T.hidden}}else{T=l.access(t,"fxshow",{display:p})}if(f){T.hidden=!q}if(q){d([t],true)}g.done(function(){if(!q){d([t])}l.remove(t,"fxshow");for(s in v){e.style(t,s,v[s])}})}c=y(q?T[s]:0,s,g);if(!(s in T)){T[s]=c.start;if(q){c.end=c.start;c.start=0}}}}function q(i,n){var s,o,f,r,u;for(s in i){o=t(s);f=n[o];r=i[s];if(Array.isArray(r)){f=r[1];r=i[s]=r[0]}if(s!==o){i[o]=r;delete i[s]}u=e.cssHooks[o];if(u&&"expand"in u){r=u.expand(r);delete i[o];for(s in r){if(!(s in i)){i[s]=r[s];n[s]=f}}}else{n[o]=f}}}function T(t,i,s){var o,f,r=0,u=T.prefilters.length,a=e.Deferred().always(function(){delete l.elem}),l=function(){if(f){return false}var e=c||g(),i=Math.max(0,d.startTime+d.duration-e),n=i/d.duration||0,s=1-n,o=0,r=d.tweens.length;for(;o<r;o++){d.tweens[o].run(s)}a.notifyWith(t,[d,s,i]);if(s<1&&r){return i}if(!r){a.notifyWith(t,[d,1,0])}a.resolveWith(t,[d]);return false},d=a.promise({elem:t,props:e.extend({},i),opts:e.extend(true,{specialEasing:{},easing:e.easing._default},s),originalProperties:i,originalOptions:s,startTime:c||g(),duration:s.duration,tweens:[],createTween:function(i,n){var s=e.Tween(t,d.opts,i,n,d.opts.specialEasing[i]||d.opts.easing);d.tweens.push(s);return s},stop:function(e){var i=0,n=e?d.tweens.length:0;if(f){return this}f=true;for(;i<n;i++){d.tweens[i].run(1)}if(e){a.notifyWith(t,[d,1,0]);a.resolveWith(t,[d,e])}else{a.rejectWith(t,[d,e])}return this}}),p=d.props;q(p,d.opts.specialEasing);for(;r<u;r++){o=T.prefilters[r].call(d,t,p,d.opts);if(o){if(n(o.stop)){e._queueHooks(d.elem,d.opts.queue).stop=o.stop.bind(o)}return o}}e.map(p,y,d);if(n(d.opts.start)){d.opts.start.call(t,d)}d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always);e.fx.timer(e.extend(l,{elem:t,anim:d,queue:d.opts.queue}));return d}e.Animation=e.extend(T,{tweeners:{"*":[function(e,t){var i=this.createTween(e,t);a(i.elem,e,s.exec(t),i);return i}]},tweener:function(e,t){if(n(e)){t=e;e=["*"]}else{e=e.match(o)}var i,s=0,f=e.length;for(;s<f;s++){i=e[s];T.tweeners[i]=T.tweeners[i]||[];T.tweeners[i].unshift(t)}},prefilters:[x],prefilter:function(e,t){if(t){T.prefilters.unshift(e)}else{T.prefilters.push(e)}}});e.speed=function(t,i,s){var o=t&&typeof t==="object"?e.extend({},t):{complete:s||!s&&i||n(t)&&t,duration:t,easing:s&&i||i&&!n(i)&&i};if(e.fx.off){o.duration=0}else{if(typeof o.duration!=="number"){if(o.duration in e.fx.speeds){o.duration=e.fx.speeds[o.duration]}else{o.duration=e.fx.speeds._default}}}if(o.queue==null||o.queue===true){o.queue="fx"}o.old=o.complete;o.complete=function(){if(n(o.old)){o.old.call(this)}if(o.queue){e.dequeue(this,o.queue)}};return o};e.fn.extend({fadeTo:function(e,t,i,n){return this.filter(r).css("opacity",0).show().end().animate({opacity:t},e,i,n)},animate:function(t,i,n,s){var o=e.isEmptyObject(t),f=e.speed(i,n,s),r=function(){var i=T(this,e.extend({},t),f);if(o||l.get(this,"finish")){i.stop(true)}};r.finish=r;return o||f.queue===false?this.each(r):this.queue(f.queue,r)},stop:function(t,i,n){var s=function(e){var t=e.stop;delete e.stop;t(n)};if(typeof t!=="string"){n=i;i=t;t=undefined}if(i&&t!==false){this.queue(t||"fx",[])}return this.each(function(){var i=true,o=t!=null&&t+"queueHooks",f=e.timers,r=l.get(this);if(o){if(r[o]&&r[o].stop){s(r[o])}}else{for(o in r){if(r[o]&&r[o].stop&&w.test(o)){s(r[o])}}}for(o=f.length;o--;){if(f[o].elem===this&&(t==null||f[o].queue===t)){f[o].anim.stop(n);i=false;f.splice(o,1)}}if(i||!n){e.dequeue(this,t)}})},finish:function(t){if(t!==false){t=t||"fx"}return this.each(function(){var i,n=l.get(this),s=n[t+"queue"],o=n[t+"queueHooks"],f=e.timers,r=s?s.length:0;n.finish=true;e.queue(this,t,[]);if(o&&o.stop){o.stop.call(this,true)}for(i=f.length;i--;){if(f[i].elem===this&&f[i].queue===t){f[i].anim.stop(true);f.splice(i,1)}}for(i=0;i<r;i++){if(s[i]&&s[i].finish){s[i].finish.call(this)}}delete n.finish})}});e.each(["toggle","show","hide"],function(t,i){var n=e.fn[i];e.fn[i]=function(e,t,s){return e==null||typeof e==="boolean"?n.apply(this,arguments):this.animate(v(i,true),e,t,s)}});e.each({slideDown:v("show"),slideUp:v("hide"),slideToggle:v("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,i){e.fn[t]=function(e,t,n){return this.animate(i,e,t,n)}});e.timers=[];e.fx.tick=function(){var t,i=0,n=e.timers;c=Date.now();for(;i<n.length;i++){t=n[i];if(!t()&&n[i]===t){n.splice(i--,1)}}if(!n.length){e.fx.stop()}c=undefined};e.fx.timer=function(t){e.timers.push(t);e.fx.start()};e.fx.interval=13;e.fx.start=function(){if(p){return}p=true;m()};e.fx.stop=function(){p=null};e.fx.speeds={slow:600,fast:200,_default:400};return e});
//rebuild by neat 