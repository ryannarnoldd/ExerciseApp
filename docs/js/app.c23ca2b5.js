(function(e){function t(t){for(var c,s,i=t[0],o=t[1],u=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a4d9f":"dd6a14a0","chunk-2d0b3289":"9feb59ef","chunk-2d0c8407":"38bd449e","chunk-2d0d6d35":"bab802e9","chunk-2d0da71f":"82b17829","chunk-2d2086b7":"7fa1290c","chunk-2d215ff5":"5fd8931a","chunk-2d216dc7":"e5165f9a","chunk-2d2221e2":"a88a015c","chunk-2d226caa":"43564295","chunk-2d237b06":"9dc71434"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=a[e]=[t,c]}));t.push(n[2]=c);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=s(e);var u=new Error;r=function(t){o.onerror=o.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",u.name="ChunkLoadError",u.type=c,u.request=r,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var b=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3977:function(e,t,n){"use strict";n("a511")},"3b42":function(e,t,n){"use strict";var c=n("1da1"),a=(n("96cf"),n("a18c")),r=n("e62d");function s(e,t){return Object(r["a"])("users/login",{handle:e,password:t})}var i=n("8918"),o={user:null,messages:[],toRoute:"/feed",Login:function(e,t){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function c(){var r;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,s(e,t);case 3:r=c.sent,n.user=r.user,a["a"].push(n.toRoute),c.next=11;break;case 8:c.prev=8,c.t0=c["catch"](0),n.Error(c.t0);case 11:case"end":return c.stop()}}),c,null,[[0,8]])})))()},Error:function(e){var t;console.error(e);var n=null!==(t=e.msg)&&void 0!==t?t:e;this.messages.push({text:n,type:"warning"}),i["a"].open({duration:5e3,message:n,variant:"danger",type:"danger",closable:!0})}};t["a"]=o},"48c1":function(e,t,n){"use strict";n("8adc")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=(n("15f5"),n("6597"),n("8918")),r=n("c43d"),s=(n("4624"),{class:"container"}),i={class:"columns"},o={class:"column"};function u(e,t,n,a,r,u){var l=Object(c["C"])("Nav"),b=Object(c["C"])("Messages"),d=Object(c["C"])("router-view"),h=Object(c["C"])("Footer");return Object(c["v"])(),Object(c["g"])("div",s,[Object(c["h"])("div",i,[Object(c["h"])("div",o,[Object(c["k"])(l),Object(c["k"])(b),Object(c["k"])(d),Object(c["k"])(h)])])])}var l={class:"mesages"},b=["onClick"];function d(e,t,n,a,r,s){return Object(c["v"])(),Object(c["g"])("div",l,[(Object(c["v"])(!0),Object(c["g"])(c["a"],null,Object(c["A"])(e.messages,(function(e,t){return Object(c["v"])(),Object(c["g"])("div",{class:Object(c["r"])(["notification is-light","is-".concat(e.type)]),key:t},[Object(c["h"])("button",{class:"delete",onClick:Object(c["N"])((function(e){return s.done(t)}),["prevent"])},null,8,b),Object(c["j"])(" "+Object(c["F"])(e.text),1)],2)})),128))])}n("a434");var h=n("3b42"),f={data:function(){return{messages:h["a"].messages}},methods:{done:function(e){this.messages.splice(e,1)}}},v=(n("3977"),n("6b0d")),j=n.n(v);const O=j()(f,[["render",d]]);var p=O,m={class:"footer"},g=Object(c["h"])("div",{class:"content has-text-centered"},[Object(c["h"])("p",null,[Object(c["h"])("em",null,"Fitizen"),Object(c["j"])(" by "),Object(c["h"])("b",null,"Ryan Arnold"),Object(c["j"])(". This is for SUNY New Paltz Web Programming Class. ")])],-1),k=[g];function y(e,t,n,a,r,s){return Object(c["v"])(),Object(c["g"])("footer",m,k)}var w={};const x=j()(w,[["render",y]]);var L=x,C={class:"navbar",role:"navigation","aria-label":"main navigation"},_={class:"navbar-brand"},R=Object(c["j"])("Fitizen"),S=Object(c["h"])("span",{"aria-hidden":"true"},null,-1),F=Object(c["h"])("span",{"aria-hidden":"true"},null,-1),P=Object(c["h"])("span",{"aria-hidden":"true"},null,-1),T=Object(c["h"])("span",{"aria-hidden":"true"},null,-1),E=[S,F,P,T],A={class:"navbar-start"},N=Object(c["j"])("Track"),z=Object(c["j"])("Nutrition"),M=Object(c["j"])("Reports"),q={class:"navbar-item has-dropdown is-hoverable"},D=Object(c["h"])("a",{class:"navbar-link"},"Social",-1),H={class:"navbar-dropdown"},J=Object(c["j"])("Share"),U=Object(c["j"])("Feed"),W=Object(c["j"])("Friends"),B={class:"navbar-item has-dropdown is-hoverable"},$=Object(c["h"])("a",{class:"navbar-link"},"More",-1),Y={class:"navbar-dropdown"},G=Object(c["j"])("Trainers"),I=Object(c["j"])("Settings"),K=Object(c["j"])("Help"),Q=Object(c["h"])("hr",{class:"navbar-divider"},null,-1),V=Object(c["j"])("Contact Us"),X={class:"navbar-end"},Z={class:"navbar-item"};function ee(e,t,n,a,r,s){var i=Object(c["C"])("router-link"),o=Object(c["C"])("login-badge");return Object(c["v"])(),Object(c["g"])("nav",C,[Object(c["h"])("div",_,[Object(c["k"])(i,{class:"navbar-item is-tab is-size-5 has-text-weight-bold is-italic",to:"/","active-class":"is-active",exact:""},{default:Object(c["L"])((function(){return[R]})),_:1}),Object(c["h"])("a",{role:"button",class:Object(c["r"])(["navbar-burger",{"is-active":r.isActive}]),"aria-label":"menu","aria-expanded":"false",onClick:t[0]||(t[0]=function(e){return r.isActive=!r.isActive})},E,2)]),Object(c["h"])("div",{id:"navbarBasicExample",class:Object(c["r"])(["navbar-menu",{"is-active":r.isActive}])},[Object(c["h"])("div",A,[Object(c["k"])(i,{class:"navbar-item is-tab",to:"/track","active-class":"is-active"},{default:Object(c["L"])((function(){return[N]})),_:1}),Object(c["k"])(i,{class:"navbar-item is-tab",to:"/nutrition","active-class":"is-active"},{default:Object(c["L"])((function(){return[z]})),_:1}),Object(c["k"])(i,{class:"navbar-item is-tab",to:"/reports","active-class":"is-active"},{default:Object(c["L"])((function(){return[M]})),_:1}),Object(c["h"])("div",q,[D,Object(c["h"])("div",H,[Object(c["k"])(i,{class:"navbar-item is-tab",to:"/share","active-class":"is-active"},{default:Object(c["L"])((function(){return[J]})),_:1}),Object(c["k"])(i,{class:"navbar-item is-tab",to:"/feed","active-class":"is-active"},{default:Object(c["L"])((function(){return[U]})),_:1}),Object(c["k"])(i,{class:"navbar-item is-tab",to:"/friends","active-class":"is-active"},{default:Object(c["L"])((function(){return[W]})),_:1})])]),Object(c["h"])("div",B,[$,Object(c["h"])("div",Y,[Object(c["k"])(i,{class:"navbar-item is-tab",to:"/trainers","active-class":"is-active"},{default:Object(c["L"])((function(){return[G]})),_:1}),Object(c["k"])(i,{class:"navbar-item is-tab",to:"/settings","active-class":"is-active"},{default:Object(c["L"])((function(){return[I]})),_:1}),Object(c["k"])(i,{class:"navbar-item is-tab",to:"/help","active-class":"is-active"},{default:Object(c["L"])((function(){return[K]})),_:1}),Q,Object(c["k"])(i,{class:"navbar-item is-tab",to:"/contactus","active-class":"is-active"},{default:Object(c["L"])((function(){return[V]})),_:1})])])]),Object(c["h"])("div",X,[Object(c["h"])("div",Z,[Object(c["k"])(o)])])],2)])}n("b0c0");var te={key:0,class:"buttons"},ne=Object(c["h"])("strong",null,"Register",-1),ce=Object(c["j"])(" Log in "),ae={key:1};function re(e,t,n,a,r,s){var i=Object(c["C"])("router-link");return e.Session.user?(Object(c["v"])(),Object(c["g"])("div",ae," Welcome, "+Object(c["F"])(s.name)+"! ",1)):(Object(c["v"])(),Object(c["g"])("div",te,[Object(c["k"])(i,{class:"button is-dark is-tab",to:"/register","active-class":"is-active",onClick:s.register},{default:Object(c["L"])((function(){return[ne]})),_:1},8,["onClick"]),Object(c["k"])(i,{class:"button is-light is-tab",to:"/login","active-class":"is-active",onClick:s.login},{default:Object(c["L"])((function(){return[ce]})),_:1},8,["onClick"])]))}var se={data:function(){return{Session:h["a"]}},methods:{register:function(){},login:function(){this.$router.push("/login")}},computed:{name:function(){return this.Session.user.firstName}}};const ie=j()(se,[["render",re]]);var oe=ie,ue={data:function(){return{isActive:!1}},components:{LoginBadge:oe}};const le=j()(ue,[["render",ee]]);var be=le,de={components:{Nav:be,Footer:L,Messages:p}};const he=j()(de,[["render",u]]);var fe=he,ve=n("a18c");Object(c["d"])(fe).use(ve["a"]).use(a["b"]).use(r["a"],{iconPack:"fas"}).mount("#app")},"5d06":function(e,t,n){},"7e49":function(e,t,n){"use strict";n("5d06")},"8adc":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var c=n("6c02"),a=n("3b42"),r=n("7a23"),s={class:"container is-max-desktop"},i=Object(r["h"])("h2",{class:"title is-large has-text-centered is-capitalized"},[Object(r["h"])("em",null,"Fitizen")],-1),o=Object(r["h"])("h6",{class:"subtitle has-text-centered"}," Welcome to the world's best minimalist exercise tracker where you can track your exercise and nutrition journey all in one location. ",-1),u=[i,o];function l(e,t,n,c,a,i){return Object(r["v"])(),Object(r["g"])("div",s,u)}var b={},d=n("6b0d"),h=n.n(d);const f=h()(b,[["render",l]]);var v=f,j={class:"container is-max-desktop"},O=Object(r["h"])("h2",{class:"title is-large has-text-centered is-capitalized"},[Object(r["h"])("em",null,"Feed!")],-1),p=Object(r["h"])("h6",{class:"subtitle has-text-centered"},[Object(r["j"])(" This is where you are able to view all of the content posted from other "),Object(r["h"])("em",null,"Fitizen"),Object(r["j"])(" users from all over the world. ")],-1),m={class:"columns"},g={class:"column is-half is-offset-one-quarter"};function k(e,t,n,c,a,s){var i=Object(r["C"])("post");return Object(r["v"])(),Object(r["g"])("div",j,[O,p,Object(r["h"])("div",m,[Object(r["h"])("div",g,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["A"])(e.posts,(function(e,t){return Object(r["v"])(),Object(r["g"])("div",{class:"post",key:e.src},[Object(r["k"])(i,{post:e,onRemove:function(n){return s.remove(e,t)}},null,8,["post","onRemove"])])})),128))])])])}var y=n("1da1"),w=(n("a434"),n("96cf"),{class:"card"}),x={class:"card-image"},L={class:"image is-4by3"},C=["src","alt"],_={class:"card-content"},R=Object(r["h"])("div",{class:"media"},[Object(r["h"])("div",{class:"media-left"})],-1),S={class:"content"},F=Object(r["h"])("br",null,null,-1),P=["datetime"],T=Object(r["i"])('<div class="card"><footer class="card-footer"><a href="#" class="card-footer-item">Save</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer></div>',1);function E(e,t,n,c,a,s){return Object(r["v"])(),Object(r["g"])("div",w,[Object(r["h"])("div",x,[Object(r["h"])("figure",L,[Object(r["h"])("img",{src:n.post.src,alt:n.post.alt},null,8,C),Object(r["h"])("button",{class:"delete is-small",onClick:t[0]||(t[0]=function(t){return e.$emit("remove")})})])]),Object(r["h"])("div",_,[R,Object(r["h"])("div",S,[Object(r["j"])(Object(r["F"])(n.post.caption)+" ",1),F,Object(r["h"])("time",{datetime:n.post.time},Object(r["F"])(e.prettyDate),9,P)])]),T])}var A={props:{post:Object}};n("7e49");const N=h()(A,[["render",E]]);var z=N,M=n("e62d");function q(e){return Object(M["a"])("posts/feed/"+e)}function D(e){return Object(M["a"])("posts/"+e,{},"DELETE")}var H={components:{Post:z},data:function(){return{posts:[]}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q(a["a"].user.handle);case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{remove:function(e,t){var n=this;return Object(y["a"])(regeneratorRuntime.mark((function c(){var a;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return console.log({post:e}),c.next=3,D(e._id);case 3:a=c.sent,a.deleted&&n.posts.splice(t,1);case 5:case"end":return c.stop()}}),c)})))()}}};n("48c1");const J=h()(H,[["render",k]]);var U=J;const W={},B=W;var $=B,Y=[{path:"/",name:"Home",component:v},{path:"/contactus",name:"ContactUs",component:function(){return n.e("chunk-2d226caa").then(n.bind(null,"e9bb"))}},{path:"/feed",name:"Feed",component:U,meta:{requiresLogin:!0}},{path:"/friends",name:"Friends",component:function(){return n.e("chunk-2d0da71f").then(n.bind(null,"6c40"))}},{path:"/help",name:"Help",component:function(){return n.e("chunk-2d216dc7").then(n.bind(null,"c3ef"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/nutrition",name:"Nutrition",component:function(){return n.e("chunk-2d0a4d9f").then(n.bind(null,"07ce"))}},{path:"/profile",name:"Profile",component:$,meta:{requiresLogin:!0}},{path:"/register",name:"Register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{path:"/reports",name:"Reports",component:function(){return n.e("chunk-2d215ff5").then(n.bind(null,"c11b"))}},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))}},{path:"/share",name:"Share",component:function(){return n.e("chunk-2d237b06").then(n.bind(null,"fbd8"))}},{path:"/track",name:"Track",component:function(){return n.e("chunk-2d0c8407").then(n.bind(null,"53a4"))}},{path:"/trainers",name:"Trainers",component:function(){return n.e("chunk-2d2221e2").then(n.bind(null,"ccf2"))}}],G=Object(c["a"])({history:Object(c["b"])(""),routes:Y});G.beforeEach((function(e,t,n){e.meta.requiresLogin&&!a["a"].user?n("/login"):n()}));t["a"]=G},a511:function(e,t,n){},e62d:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c,a=n("1da1"),r=(n("96cf"),n("d3b7"),n("3b42")),s=null!==(c="/")&&void 0!==c?c:"http://localhost:3100/";function i(e){return o.apply(this,arguments)}function o(){return o=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,c,a,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]?i[1]:null,c=i.length>2&&void 0!==i[2]?i[2]:null,e.prev=2,!n){e.next=9;break}return e.next=6,fetch(s+t,{method:null!==c&&void 0!==c?c:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:a=e.sent,e.next=12;break;case 9:return e.next=11,fetch(s+t);case 11:a=e.sent;case 12:if(a.ok){e.next=16;break}return e.next=15,a.json();case 15:throw e.sent;case 16:return e.next=18,a.json();case 18:return e.abrupt("return",e.sent);case 21:e.prev=21,e.t0=e["catch"](2),r["a"].Error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])}))),o.apply(this,arguments)}}});
//# sourceMappingURL=app.c23ca2b5.js.map