// build time:Mon May 28 2018 17:16:17 GMT+0800 (CST)
"use strict";var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(t,r.key,r)}}return function(e,n,r){if(n)t(e.prototype,n);if(r)t(e,r);return e}}();var _mobx=require("mobx");var _constants=require("./constants");var _utils=require("./utils");var _default=require("./theme/default");var _default2=_interopRequireDefault(_default);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}var scope="public_repo";function extendRenderer(t,e){t[e]=function(n){var r=(0,_utils.getTargetContainer)(n);var s=t.theme[e]||t.defaultTheme[e];(0,_mobx.autorun)(function(){var e=s(t.state,t);if(r.firstChild){r.replaceChild(e,r.firstChild)}else{r.appendChild(e)}});return r}}var Gitment=function(){_createClass(t,[{key:"accessToken",get:function e(){return localStorage.getItem(_constants.LS_ACCESS_TOKEN_KEY)},set:function n(t){localStorage.setItem(_constants.LS_ACCESS_TOKEN_KEY,t)}},{key:"loginLink",get:function r(){var t="https://github.com/login/oauth/authorize";var e=this.oauth.redirect_uri||window.location.href;var n=Object.assign({scope:scope,redirect_uri:e},this.oauth);return""+t+_utils.Query.stringify(n)}}]);function t(){var e=this;var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,t);this.defaultTheme=_default2.default;this.useTheme(_default2.default);Object.assign(this,{id:window.location.href,title:window.document.title,link:window.location.href,desc:"",labels:[],theme:_default2.default,oauth:{},perPage:20,maxCommentHeight:250},n);this.useTheme(this.theme);var r={};try{var s=localStorage.getItem(_constants.LS_USER_KEY);if(this.accessToken&&s){Object.assign(r,JSON.parse(s),{fromCache:true})}}catch(i){localStorage.removeItem(_constants.LS_USER_KEY)}this.state=(0,_mobx.observable)({user:r,error:null,meta:{},comments:undefined,reactions:[],commentReactions:{},currentPage:1});var a=_utils.Query.parse();if(a.code){var o=this.oauth,u=o.client_id,c=o.client_secret;var l=a.code;delete a.code;var h=_utils.Query.stringify(a);var f=""+window.location.origin+window.location.pathname+h+window.location.hash;history.replaceState({},"",f);Object.assign(this,{id:f,link:f},n);this.state.user.isLoggingIn=true;_utils.http.post("https://gh-oauth.imsun.net",{code:l,client_id:u,client_secret:c},"").then(function(t){e.accessToken=t.access_token;e.update()}).catch(function(t){e.state.user.isLoggingIn=false;alert(t)})}else{this.update()}}_createClass(t,[{key:"init",value:function s(){var t=this;return this.createIssue().then(function(){return t.loadComments()}).then(function(e){t.state.error=null;return e})}},{key:"useTheme",value:function i(){var t=this;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.theme=e;var n=Object.keys(this.theme);n.forEach(function(e){return extendRenderer(t,e)})}},{key:"update",value:function a(){var t=this;return Promise.all([this.loadMeta(),this.loadUserInfo()]).then(function(){return Promise.all([t.loadComments().then(function(){return t.loadCommentReactions()}),t.loadReactions()])}).catch(function(e){return t.state.error=e})}},{key:"markdown",value:function o(t){return _utils.http.post("/markdown",{text:t,mode:"gfm"})}},{key:"createIssue",value:function u(){var t=this;var e=this.id,n=this.owner,r=this.repo,s=this.title,i=this.link,a=this.desc,o=this.labels;return _utils.http.post("/repos/"+n+"/"+r+"/issues",{title:s,labels:o.concat(["gitment",e]),body:i+"\n\n"+a}).then(function(e){t.state.meta=e;return e})}},{key:"getIssue",value:function c(){if(this.state.meta.id)return Promise.resolve(this.state.meta);return this.loadMeta()}},{key:"post",value:function l(t){var e=this;return this.getIssue().then(function(e){return _utils.http.post(e.comments_url,{body:t},"")}).then(function(t){e.state.meta.comments++;var n=Math.ceil(e.state.meta.comments/e.perPage);if(e.state.currentPage===n){e.state.comments.push(t)}return t})}},{key:"loadMeta",value:function h(){var t=this;var e=this.id,n=this.owner,r=this.repo;return _utils.http.get("/repos/"+n+"/"+r+"/issues",{creator:n,labels:e}).then(function(e){if(!e.length)return Promise.reject(_constants.NOT_INITIALIZED_ERROR);t.state.meta=e[0];return e[0]})}},{key:"loadComments",value:function f(){var t=this;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.state.currentPage;return this.getIssue().then(function(n){return _utils.http.get(n.comments_url,{page:e,per_page:t.perPage},"")}).then(function(e){t.state.comments=e;return e})}},{key:"loadUserInfo",value:function m(){var t=this;if(!this.accessToken){this.logout();return Promise.resolve({})}return _utils.http.get("/user").then(function(e){t.state.user=e;localStorage.setItem(_constants.LS_USER_KEY,JSON.stringify(e));return e})}},{key:"loadReactions",value:function d(){var t=this;if(!this.accessToken){this.state.reactions=[];return Promise.resolve([])}return this.getIssue().then(function(t){if(!t.reactions.total_count)return[];return _utils.http.get(t.reactions.url,{},"")}).then(function(e){t.state.reactions=e;return e})}},{key:"loadCommentReactions",value:function v(){var t=this;if(!this.accessToken){this.state.commentReactions={};return Promise.resolve([])}var e=this.state.comments;var n={};return Promise.all(e.map(function(e){if(!e.reactions.total_count)return[];var n=t.owner,r=t.repo;return _utils.http.get("/repos/"+n+"/"+r+"/issues/comments/"+e.id+"/reactions",{})})).then(function(r){e.forEach(function(t,e){n[t.id]=r[e]});t.state.commentReactions=n;return n})}},{key:"login",value:function _(){window.location.href=this.loginLink}},{key:"logout",value:function g(){localStorage.removeItem(_constants.LS_ACCESS_TOKEN_KEY);localStorage.removeItem(_constants.LS_USER_KEY);this.state.user={}}},{key:"goto",value:function p(t){this.state.currentPage=t;this.state.comments=undefined;return this.loadComments(t)}},{key:"like",value:function k(){var t=this;if(!this.accessToken){alert("Login to Like");return Promise.reject()}var e=this.owner,n=this.repo;return _utils.http.post("/repos/"+e+"/"+n+"/issues/"+this.state.meta.number+"/reactions",{content:"heart"}).then(function(e){t.state.reactions.push(e);t.state.meta.reactions.heart++})}},{key:"unlike",value:function y(){var t=this;if(!this.accessToken)return Promise.reject();var e=this.state,n=e.user,r=e.reactions;var s=r.findIndex(function(t){return t.user.login===n.login});return _utils.http.delete("/reactions/"+r[s].id).then(function(){r.splice(s,1);t.state.meta.reactions.heart--})}},{key:"likeAComment",value:function C(t){var e=this;if(!this.accessToken){alert("Login to Like");return Promise.reject()}var n=this.owner,r=this.repo;var s=this.state.comments.find(function(e){return e.id===t});return _utils.http.post("/repos/"+n+"/"+r+"/issues/comments/"+t+"/reactions",{content:"heart"}).then(function(n){e.state.commentReactions[t].push(n);s.reactions.heart++})}},{key:"unlikeAComment",value:function S(t){if(!this.accessToken)return Promise.reject();var e=this.state.commentReactions[t];var n=this.state.comments.find(function(e){return e.id===t});var r=this.state.user;var s=e.findIndex(function(t){return t.user.login===r.login});return _utils.http.delete("/reactions/"+e[s].id).then(function(){e.splice(s,1);n.reactions.heart--})}}]);return t}();module.exports=Gitment;
//rebuild by neat 