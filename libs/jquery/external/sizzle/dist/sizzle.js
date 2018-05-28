// build time:Mon May 28 2018 17:16:20 GMT+0800 (CST)
(function(e){var t,n,r,i,u,l,o,f,a,s,c,d,p,h,g,m,y,w,v,b="sizzle"+1*new Date,N=e.document,x=0,C=0,E=oe(),D=oe(),S=oe(),A=function(e,t){if(e===t){c=true}return 0},T={}.hasOwnProperty,L=[],I=L.pop,q=L.push,B=L.push,R=L.slice,$=function(e,t){var n=0,r=e.length;for(;n<r;n++){if(e[n]===t){return n}}return-1},k="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",z="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",H="\\["+P+"*("+z+")(?:"+P+"*([*^$|!~]?=)"+P+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+z+"))|)"+P+"*\\]",M=":("+z+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+H+")*)|"+".*"+")\\)|)",F=new RegExp(P+"+","g"),O=new RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),j=new RegExp("^"+P+"*,"+P+"*"),G=new RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),U=new RegExp("="+P+"*([^\\]'\"]*?)"+P+"*\\]","g"),V=new RegExp(M),X=new RegExp("^"+z+"$"),J={ID:new RegExp("^#("+z+")"),CLASS:new RegExp("^\\.("+z+")"),TAG:new RegExp("^("+z+"|[*])"),ATTR:new RegExp("^"+H),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:new RegExp("^(?:"+k+")$","i"),needsContext:new RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,W=/^[^{]+\{\s*\[native \w/,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,r&1023|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){if(t){if(e==="\0"){return"�"}return e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" "}return"\\"+e},re=function(){d()},ie=ve(function(e){return e.disabled===true&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{B.apply(L=R.call(N.childNodes),N.childNodes);L[N.childNodes.length].nodeType}catch(ue){B={apply:L.length?function(e,t){q.apply(e,R.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]){}e.length=n-1}}}function le(e,t,r,i){var u,o,a,s,c,h,y,w=t&&t.ownerDocument,x=t?t.nodeType:9;r=r||[];if(typeof e!=="string"||!e||x!==1&&x!==9&&x!==11){return r}if(!i){if((t?t.ownerDocument||t:N)!==p){d(t)}t=t||p;if(g){if(x!==11&&(c=Y.exec(e))){if(u=c[1]){if(x===9){if(a=t.getElementById(u)){if(a.id===u){r.push(a);return r}}else{return r}}else{if(w&&(a=w.getElementById(u))&&v(t,a)&&a.id===u){r.push(a);return r}}}else if(c[2]){B.apply(r,t.getElementsByTagName(e));return r}else if((u=c[3])&&n.getElementsByClassName&&t.getElementsByClassName){B.apply(r,t.getElementsByClassName(u));return r}}if(n.qsa&&!S[e+" "]&&(!m||!m.test(e))){if(x!==1){w=t;y=e}else if(t.nodeName.toLowerCase()!=="object"){if(s=t.getAttribute("id")){s=s.replace(te,ne)}else{t.setAttribute("id",s=b)}h=l(e);o=h.length;while(o--){h[o]="#"+s+" "+we(h[o])}y=h.join(",");w=Z.test(e)&&me(t.parentNode)||t}if(y){try{B.apply(r,w.querySelectorAll(y));return r}catch(C){}finally{if(s===b){t.removeAttribute("id")}}}}}}return f(e.replace(O,"$1"),t,r,i)}function oe(){var e=[];function t(n,i){if(e.push(n+" ")>r.cacheLength){delete t[e.shift()]}return t[n+" "]=i}return t}function fe(e){e[b]=true;return e}function ae(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(n){return false}finally{if(t.parentNode){t.parentNode.removeChild(t)}t=null}}function se(e,t){var n=e.split("|"),i=n.length;while(i--){r.attrHandle[n[i]]=t}}function ce(e,t){var n=t&&e,r=n&&e.nodeType===1&&t.nodeType===1&&e.sourceIndex-t.sourceIndex;if(r){return r}if(n){while(n=n.nextSibling){if(n===t){return-1}}}return e?1:-1}function de(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function he(e){return function(t){if("form"in t){if(t.parentNode&&t.disabled===false){if("label"in t){if("label"in t.parentNode){return t.parentNode.disabled===e}else{return t.disabled===e}}return t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e}return t.disabled===e}else if("label"in t){return t.disabled===e}return false}}function ge(e){return fe(function(t){t=+t;return fe(function(n,r){var i,u=e([],n.length,t),l=u.length;while(l--){if(n[i=u[l]]){n[i]=!(r[i]=n[i])}}})})}function me(e){return e&&typeof e.getElementsByTagName!=="undefined"&&e}n=le.support={};u=le.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":false};d=le.setDocument=function(e){var t,i,l=e?e.ownerDocument||e:N;if(l===p||l.nodeType!==9||!l.documentElement){return p}p=l;h=p.documentElement;g=!u(p);if(N!==p&&(i=p.defaultView)&&i.top!==i){if(i.addEventListener){i.addEventListener("unload",re,false)}else if(i.attachEvent){i.attachEvent("onunload",re)}}n.attributes=ae(function(e){e.className="i";return!e.getAttribute("className")});n.getElementsByTagName=ae(function(e){e.appendChild(p.createComment(""));return!e.getElementsByTagName("*").length});n.getElementsByClassName=W.test(p.getElementsByClassName);n.getById=ae(function(e){h.appendChild(e).id=b;return!p.getElementsByName||!p.getElementsByName(b).length});if(n.getById){r.filter["ID"]=function(e){var t=e.replace(_,ee);return function(e){return e.getAttribute("id")===t}};r.find["ID"]=function(e,t){if(typeof t.getElementById!=="undefined"&&g){var n=t.getElementById(e);return n?[n]:[]}}}else{r.filter["ID"]=function(e){var t=e.replace(_,ee);return function(e){var n=typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id");return n&&n.value===t}};r.find["ID"]=function(e,t){if(typeof t.getElementById!=="undefined"&&g){var n,r,i,u=t.getElementById(e);if(u){n=u.getAttributeNode("id");if(n&&n.value===e){return[u]}i=t.getElementsByName(e);r=0;while(u=i[r++]){n=u.getAttributeNode("id");if(n&&n.value===e){return[u]}}}return[]}}}r.find["TAG"]=n.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!=="undefined"){return t.getElementsByTagName(e)}else if(n.qsa){return t.querySelectorAll(e)}}:function(e,t){var n,r=[],i=0,u=t.getElementsByTagName(e);if(e==="*"){while(n=u[i++]){if(n.nodeType===1){r.push(n)}}return r}return u};r.find["CLASS"]=n.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!=="undefined"&&g){return t.getElementsByClassName(e)}};y=[];m=[];if(n.qsa=W.test(p.querySelectorAll)){ae(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a>"+"<select id='"+b+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";if(e.querySelectorAll("[msallowcapture^='']").length){m.push("[*^$]="+P+"*(?:''|\"\")")}if(!e.querySelectorAll("[selected]").length){m.push("\\["+P+"*(?:value|"+k+")")}if(!e.querySelectorAll("[id~="+b+"-]").length){m.push("~=")}if(!e.querySelectorAll(":checked").length){m.push(":checked")}if(!e.querySelectorAll("a#"+b+"+*").length){m.push(".#.+[+~]")}});ae(function(e){e.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden");e.appendChild(t).setAttribute("name","D");if(e.querySelectorAll("[name=d]").length){m.push("name"+P+"*[*^$|!~]?=")}if(e.querySelectorAll(":enabled").length!==2){m.push(":enabled",":disabled")}h.appendChild(e).disabled=true;if(e.querySelectorAll(":disabled").length!==2){m.push(":enabled",":disabled")}e.querySelectorAll("*,:x");m.push(",.*:")})}if(n.matchesSelector=W.test(w=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector)){ae(function(e){n.disconnectedMatch=w.call(e,"*");w.call(e,"[s!='']:x");y.push("!=",M)})}m=m.length&&new RegExp(m.join("|"));y=y.length&&new RegExp(y.join("|"));t=W.test(h.compareDocumentPosition);v=t||W.test(h.contains)?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&(n.contains?n.contains(r):e.compareDocumentPosition&&e.compareDocumentPosition(r)&16))}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return true}}}return false};A=t?function(e,t){if(e===t){c=true;return 0}var r=!e.compareDocumentPosition-!t.compareDocumentPosition;if(r){return r}r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1;if(r&1||!n.sortDetached&&t.compareDocumentPosition(e)===r){if(e===p||e.ownerDocument===N&&v(N,e)){return-1}if(t===p||t.ownerDocument===N&&v(N,t)){return 1}return s?$(s,e)-$(s,t):0}return r&4?-1:1}:function(e,t){if(e===t){c=true;return 0}var n,r=0,i=e.parentNode,u=t.parentNode,l=[e],o=[t];if(!i||!u){return e===p?-1:t===p?1:i?-1:u?1:s?$(s,e)-$(s,t):0}else if(i===u){return ce(e,t)}n=e;while(n=n.parentNode){l.unshift(n)}n=t;while(n=n.parentNode){o.unshift(n)}while(l[r]===o[r]){r++}return r?ce(l[r],o[r]):l[r]===N?-1:o[r]===N?1:0};return p};le.matches=function(e,t){return le(e,null,null,t)};le.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p){d(e)}t=t.replace(U,"='$1']");if(n.matchesSelector&&g&&!S[t+" "]&&(!y||!y.test(t))&&(!m||!m.test(t))){try{var r=w.call(e,t);if(r||n.disconnectedMatch||e.document&&e.document.nodeType!==11){return r}}catch(i){}}return le(t,p,null,[e]).length>0};le.contains=function(e,t){if((e.ownerDocument||e)!==p){d(e)}return v(e,t)};le.attr=function(e,t){if((e.ownerDocument||e)!==p){d(e)}var i=r.attrHandle[t.toLowerCase()],u=i&&T.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):undefined;return u!==undefined?u:n.attributes||!g?e.getAttribute(t):(u=e.getAttributeNode(t))&&u.specified?u.value:null};le.escape=function(e){return(e+"").replace(te,ne)};le.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};le.uniqueSort=function(e){var t,r=[],i=0,u=0;c=!n.detectDuplicates;s=!n.sortStable&&e.slice(0);e.sort(A);if(c){while(t=e[u++]){if(t===e[u]){i=r.push(u)}}while(i--){e.splice(r[i],1)}}s=null;return e};i=le.getText=function(e){var t,n="",r=0,u=e.nodeType;if(!u){while(t=e[r++]){n+=i(t)}}else if(u===1||u===9||u===11){if(typeof e.textContent==="string"){return e.textContent}else{for(e=e.firstChild;e;e=e.nextSibling){n+=i(e)}}}else if(u===3||u===4){return e.nodeValue}return n};r=le.selectors={cacheLength:50,createPseudo:fe,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(_,ee);e[3]=(e[3]||e[4]||e[5]||"").replace(_,ee);if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();if(e[1].slice(0,3)==="nth"){if(!e[3]){le.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));e[5]=+(e[7]+e[8]||e[3]==="odd")}else if(e[3]){le.error(e[0])}return e},PSEUDO:function(e){var t,n=!e[6]&&e[2];if(J["CHILD"].test(e[0])){return null}if(e[3]){e[2]=e[4]||e[5]||""}else if(n&&V.test(n)&&(t=l(n,true))&&(t=n.indexOf(")",n.length-t)-n.length)){e[0]=e[0].slice(0,t);e[2]=n.slice(0,t)}return e.slice(0,3)}},filter:{TAG:function(e){var t=e.replace(_,ee).toLowerCase();return e==="*"?function(){return true}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&E(e,function(e){return t.test(typeof e.className==="string"&&e.className||typeof e.getAttribute!=="undefined"&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=le.attr(r,e);if(i==null){return t==="!="}if(!t){return true}i+="";return t==="="?i===n:t==="!="?i!==n:t==="^="?n&&i.indexOf(n)===0:t==="*="?n&&i.indexOf(n)>-1:t==="$="?n&&i.slice(-n.length)===n:t==="~="?(" "+i.replace(F," ")+" ").indexOf(n)>-1:t==="|="?i===n||i.slice(0,n.length+1)===n+"-":false}},CHILD:function(e,t,n,r,i){var u=e.slice(0,3)!=="nth",l=e.slice(-4)!=="last",o=t==="of-type";return r===1&&i===0?function(e){return!!e.parentNode}:function(t,n,f){var a,s,c,d,p,h,g=u!==l?"nextSibling":"previousSibling",m=t.parentNode,y=o&&t.nodeName.toLowerCase(),w=!f&&!o,v=false;if(m){if(u){while(g){d=t;while(d=d[g]){if(o?d.nodeName.toLowerCase()===y:d.nodeType===1){return false}}h=g=e==="only"&&!h&&"nextSibling"}return true}h=[l?m.firstChild:m.lastChild];if(l&&w){d=m;c=d[b]||(d[b]={});s=c[d.uniqueID]||(c[d.uniqueID]={});a=s[e]||[];p=a[0]===x&&a[1];v=p&&a[2];d=p&&m.childNodes[p];while(d=++p&&d&&d[g]||(v=p=0)||h.pop()){if(d.nodeType===1&&++v&&d===t){s[e]=[x,p,v];break}}}else{if(w){d=t;c=d[b]||(d[b]={});s=c[d.uniqueID]||(c[d.uniqueID]={});a=s[e]||[];p=a[0]===x&&a[1];v=p}if(v===false){while(d=++p&&d&&d[g]||(v=p=0)||h.pop()){if((o?d.nodeName.toLowerCase()===y:d.nodeType===1)&&++v){if(w){c=d[b]||(d[b]={});s=c[d.uniqueID]||(c[d.uniqueID]={});s[e]=[x,v]}if(d===t){break}}}}}v-=i;return v===r||v%r===0&&v/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||le.error("unsupported pseudo: "+e);if(i[b]){return i(t)}if(i.length>1){n=[e,e,"",t];return r.setFilters.hasOwnProperty(e.toLowerCase())?fe(function(e,n){var r,u=i(e,t),l=u.length;while(l--){r=$(e,u[l]);e[r]=!(n[r]=u[l])}}):function(e){return i(e,0,n)}}return i}},pseudos:{not:fe(function(e){var t=[],n=[],r=o(e.replace(O,"$1"));return r[b]?fe(function(e,t,n,i){var u,l=r(e,null,i,[]),o=e.length;while(o--){if(u=l[o]){e[o]=!(t[o]=u)}}}):function(e,i,u){t[0]=e;r(t,null,u,n);t[0]=null;return!n.pop()}}),has:fe(function(e){return function(t){return le(e,t).length>0}}),contains:fe(function(e){e=e.replace(_,ee);return function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:fe(function(e){if(!X.test(e||"")){le.error("unsupported lang: "+e)}e=e.replace(_,ee).toLowerCase();return function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){n=n.toLowerCase();return n===e||n.indexOf(e+"-")===0}}while((t=t.parentNode)&&t.nodeType===1);return false}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:he(false),disabled:he(true),checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeType<6){return false}}return true},parent:function(e){return!r.pseudos["empty"](e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return K.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t;return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()==="text")},first:ge(function(){return[0]}),last:ge(function(e,t){return[t-1]}),eq:ge(function(e,t,n){return[n<0?n+t:n]}),even:ge(function(e,t){var n=0;for(;n<t;n+=2){e.push(n)}return e}),odd:ge(function(e,t){var n=1;for(;n<t;n+=2){e.push(n)}return e}),lt:ge(function(e,t,n){var r=n<0?n+t:n;for(;--r>=0;){e.push(r)}return e}),gt:ge(function(e,t,n){var r=n<0?n+t:n;for(;++r<t;){e.push(r)}return e})}};r.pseudos["nth"]=r.pseudos["eq"];for(t in{radio:true,checkbox:true,file:true,password:true,image:true}){r.pseudos[t]=de(t)}for(t in{submit:true,reset:true}){r.pseudos[t]=pe(t)}function ye(){}ye.prototype=r.filters=r.pseudos;r.setFilters=new ye;l=le.tokenize=function(e,t){var n,i,u,l,o,f,a,s=D[e+" "];if(s){return t?0:s.slice(0)}o=e;f=[];a=r.preFilter;while(o){if(!n||(i=j.exec(o))){if(i){o=o.slice(i[0].length)||o}f.push(u=[])}n=false;if(i=G.exec(o)){n=i.shift();u.push({value:n,type:i[0].replace(O," ")});o=o.slice(n.length)}for(l in r.filter){if((i=J[l].exec(o))&&(!a[l]||(i=a[l](i)))){n=i.shift();u.push({value:n,type:l,matches:i});o=o.slice(n.length)}}if(!n){break}}return t?o.length:o?le.error(e):D(e,f).slice(0)};function we(e){var t=0,n=e.length,r="";for(;t<n;t++){r+=e[t].value}return r}function ve(e,t,n){var r=t.dir,i=t.next,u=i||r,l=n&&u==="parentNode",o=C++;return t.first?function(t,n,i){while(t=t[r]){if(t.nodeType===1||l){return e(t,n,i)}}return false}:function(t,n,f){var a,s,c,d=[x,o];if(f){while(t=t[r]){if(t.nodeType===1||l){if(e(t,n,f)){return true}}}}else{while(t=t[r]){if(t.nodeType===1||l){c=t[b]||(t[b]={});s=c[t.uniqueID]||(c[t.uniqueID]={});if(i&&i===t.nodeName.toLowerCase()){t=t[r]||t}else if((a=s[u])&&a[0]===x&&a[1]===o){return d[2]=a[2]}else{s[u]=d;if(d[2]=e(t,n,f)){return true}}}}}return false}}function be(e){return e.length>1?function(t,n,r){var i=e.length;while(i--){if(!e[i](t,n,r)){return false}}return true}:e[0]}function Ne(e,t,n){var r=0,i=t.length;for(;r<i;r++){le(e,t[r],n)}return n}function xe(e,t,n,r,i){var u,l=[],o=0,f=e.length,a=t!=null;for(;o<f;o++){if(u=e[o]){if(!n||n(u,r,i)){l.push(u);if(a){t.push(o)}}}}return l}function Ce(e,t,n,r,i,u){if(r&&!r[b]){r=Ce(r)}if(i&&!i[b]){i=Ce(i,u)}return fe(function(u,l,o,f){var a,s,c,d=[],p=[],h=l.length,g=u||Ne(t||"*",o.nodeType?[o]:o,[]),m=e&&(u||!t)?xe(g,d,e,o,f):g,y=n?i||(u?e:h||r)?[]:l:m;if(n){n(m,y,o,f)}if(r){a=xe(y,p);r(a,[],o,f);s=a.length;while(s--){if(c=a[s]){y[p[s]]=!(m[p[s]]=c)}}}if(u){if(i||e){if(i){a=[];s=y.length;while(s--){if(c=y[s]){a.push(m[s]=c)}}i(null,y=[],a,f)}s=y.length;while(s--){if((c=y[s])&&(a=i?$(u,c):d[s])>-1){u[a]=!(l[a]=c)}}}}else{y=xe(y===l?y.splice(h,y.length):y);if(i){i(null,l,y,f)}else{B.apply(l,y)}}})}function Ee(e){var t,n,i,u=e.length,l=r.relative[e[0].type],o=l||r.relative[" "],f=l?1:0,s=ve(function(e){return e===t},o,true),c=ve(function(e){return $(t,e)>-1},o,true),d=[function(e,n,r){var i=!l&&(r||n!==a)||((t=n).nodeType?s(e,n,r):c(e,n,r));t=null;return i}];for(;f<u;f++){if(n=r.relative[e[f].type]){d=[ve(be(d),n)]}else{n=r.filter[e[f].type].apply(null,e[f].matches);if(n[b]){i=++f;for(;i<u;i++){if(r.relative[e[i].type]){break}}return Ce(f>1&&be(d),f>1&&we(e.slice(0,f-1).concat({value:e[f-2].type===" "?"*":""})).replace(O,"$1"),n,f<i&&Ee(e.slice(f,i)),i<u&&Ee(e=e.slice(i)),i<u&&we(e))}d.push(n)}}return be(d)}function De(e,t){var n=t.length>0,i=e.length>0,u=function(u,l,o,f,s){var c,h,m,y=0,w="0",v=u&&[],b=[],N=a,C=u||i&&r.find["TAG"]("*",s),E=x+=N==null?1:Math.random()||.1,D=C.length;if(s){a=l===p||l||s}for(;w!==D&&(c=C[w])!=null;w++){if(i&&c){h=0;if(!l&&c.ownerDocument!==p){d(c);o=!g}while(m=e[h++]){if(m(c,l||p,o)){f.push(c);break}}if(s){x=E}}if(n){if(c=!m&&c){y--}if(u){v.push(c)}}}y+=w;if(n&&w!==y){h=0;while(m=t[h++]){m(v,b,l,o)}if(u){if(y>0){while(w--){if(!(v[w]||b[w])){b[w]=I.call(f)}}}b=xe(b)}B.apply(f,b);if(s&&!u&&b.length>0&&y+t.length>1){le.uniqueSort(f)}}if(s){x=E;a=N}return v};return n?fe(u):u}o=le.compile=function(e,t){var n,r=[],i=[],u=S[e+" "];if(!u){if(!t){t=l(e)}n=t.length;while(n--){u=Ee(t[n]);if(u[b]){r.push(u)}else{i.push(u)}}u=S(e,De(i,r));u.selector=e}return u};f=le.select=function(e,t,n,i){var u,f,a,s,c,d=typeof e==="function"&&e,p=!i&&l(e=d.selector||e);n=n||[];if(p.length===1){f=p[0]=p[0].slice(0);if(f.length>2&&(a=f[0]).type==="ID"&&t.nodeType===9&&g&&r.relative[f[1].type]){t=(r.find["ID"](a.matches[0].replace(_,ee),t)||[])[0];if(!t){return n}else if(d){t=t.parentNode}e=e.slice(f.shift().value.length)}u=J["needsContext"].test(e)?0:f.length;while(u--){a=f[u];if(r.relative[s=a.type]){break}if(c=r.find[s]){if(i=c(a.matches[0].replace(_,ee),Z.test(f[0].type)&&me(t.parentNode)||t)){f.splice(u,1);e=i.length&&we(f);if(!e){B.apply(n,i);return n}break}}}}(d||o(e,p))(i,t,!g,n,!t||Z.test(e)&&me(t.parentNode)||t);return n};n.sortStable=b.split("").sort(A).join("")===b;n.detectDuplicates=!!c;d();n.sortDetached=ae(function(e){return e.compareDocumentPosition(p.createElement("fieldset"))&1});if(!ae(function(e){e.innerHTML="<a href='#'></a>";return e.firstChild.getAttribute("href")==="#"})){se("type|href|height|width",function(e,t,n){if(!n){return e.getAttribute(t,t.toLowerCase()==="type"?1:2)}})}if(!n.attributes||!ae(function(e){e.innerHTML="<input/>";e.firstChild.setAttribute("value","");return e.firstChild.getAttribute("value")===""})){se("value",function(e,t,n){if(!n&&e.nodeName.toLowerCase()==="input"){return e.defaultValue}})}if(!ae(function(e){return e.getAttribute("disabled")==null})){se(k,function(e,t,n){var r;if(!n){return e[t]===true?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}})}var Se=e.Sizzle;le.noConflict=function(){if(e.Sizzle===le){e.Sizzle=Se}return le};if(typeof define==="function"&&define.amd){define(function(){return le})}else if(typeof module!=="undefined"&&module.exports){module.exports=le}else{e.Sizzle=le}})(window);
//rebuild by neat 