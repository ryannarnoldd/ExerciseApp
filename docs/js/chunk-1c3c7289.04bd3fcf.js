(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c3c7289"],{"14dd":function(e,t,c){"use strict";c("4db2")},"3b04":function(e,t,c){"use strict";c("40f8")},"40f8":function(e,t,c){},"4db2":function(e,t,c){},f836:function(e,t,c){"use strict";c.r(t);c("fb6a");var n=c("7a23"),r={class:"container is-max-desktop is-text-centered"},i=Object(n["h"])("h2",{class:"title is-large has-text-centered is-capitalized"},[Object(n["h"])("em",null,"Log!")],-1),s=Object(n["h"])("h6",{class:"subtitle has-text-centered"},[Object(n["j"])(" This is where you are able to view all of the content posted from other "),Object(n["h"])("em",null,"Fitizens"),Object(n["j"])(" from all over the world. ")],-1),a={class:"title has-text-centered"},l=Object(n["h"])("br",null,null,-1),o={class:"columns"},u={class:"column"},b=Object(n["h"])("br",null,null,-1);function j(e,t,c,j,d,O){var h=Object(n["C"])("item");return Object(n["v"])(),Object(n["g"])("div",r,[i,s,Object(n["h"])("h6",a,[Object(n["j"])(" Total Calories Burned: "+Object(n["F"])(e.totalCalories)+" ",1),l,Object(n["j"])(" Total Minutes Exercised: "+Object(n["F"])(e.totalTime),1)]),Object(n["h"])("div",o,[Object(n["h"])("div",u,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(e.exercises.slice().reverse(),(function(e,t){return Object(n["v"])(),Object(n["g"])("div",{class:"exercise",key:e.id},[Object(n["k"])(h,{item:e,onRemove:function(c){return O.unlog(e,t)}},null,8,["item","onRemove"]),b])})),128))])])])}var d=c("2909"),O=c("1da1"),h=(c("96cf"),c("99af"),c("d3b7"),c("6062"),c("3ca3"),c("ddb0"),c("a434"),c("3b42")),m=c("11af"),f={class:"card"},v={class:"card-content caption"},p={class:"content"},x={class:""},w=Object(n["j"])(" Activity: "),g=Object(n["j"])(", Calories Burned: "),k=Object(n["j"])(", Workout Minutes: "),F=Object(n["h"])("br",null,null,-1),C=Object(n["j"])(" Date: "),y=["datetime"];function R(e,t,c,r,i,s){return Object(n["v"])(),Object(n["g"])("div",f,[Object(n["h"])("div",v,[Object(n["h"])("div",p,[Object(n["h"])("button",{class:"delete",onClick:t[0]||(t[0]=function(t){return e.$emit("remove")})}),Object(n["h"])("h1",null,[Object(n["h"])("b",x,Object(n["F"])(c.item.title),1)]),w,Object(n["h"])("b",null,Object(n["F"])(c.item.type),1),g,Object(n["h"])("b",null,Object(n["F"])(c.item.calories),1),k,Object(n["h"])("b",null,Object(n["F"])(c.item.duration)+" minutes.",1),F,C,Object(n["h"])("time",{class:"small",datetime:c.item.time},Object(n["F"])(s.prettyDate),9,y)])])])}var T={data:function(){return{Session:h["a"]}},props:{item:Object},computed:{prettyDate:function(){return this.item.time?this.item.time.substring(0,10):"Now"}}},D=(c("3b04"),c("6b0d")),z=c.n(D);const A=z()(T,[["render",R]]);var B=A,J={components:{Item:B},data:function(){return{exercises:[],totalCalories:0,totalTime:0}},mounted:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(m["b"])(h["a"].user.handle);case 2:return c=t.sent,t.t0=c,t.next=6,Object(m["a"])(h["a"].user.handle);case 6:for(t.t1=t.sent,t.t0.concat.call(t.t0,t.t1),e.exercises=Object(d["a"])(new Set(c)),n=0;n<e.exercises.length;n++)e.totalCalories+=e.exercises[n].calories,e.totalTime+=e.exercises[n].duration;case 10:case"end":return t.stop()}}),t)})))()},methods:{unlog:function(e,t){var c=this;return Object(O["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(m["d"])(e._id);case 2:r=n.sent,r.deleted&&c.exercises.splice(c.exercises.length-t-1,1);case 4:case"end":return n.stop()}}),n)})))()}}};c("14dd");const M=z()(J,[["render",j]]);t["default"]=M}}]);
//# sourceMappingURL=chunk-1c3c7289.04bd3fcf.js.map