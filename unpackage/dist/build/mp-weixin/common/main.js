(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{3579:function(t,e,n){"use strict";var u=n("f04c"),o=n.n(u);o.a},5643:function(t,e,n){"use strict";n("5231");var u=c(n("f3d3")),o=c(n("de8d")),r=c(n("aef8")),i=c(n("77a5"));function c(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),u.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}u.default.config.productionTip=!1,u.default.component("v-icon",r.default),u.default.prototype.userUrl="https://m.gjw.com",u.default.prototype.vali=i.default,o.default.mpType="app",console.log(i.default);var l=new u.default(a({},o.default));l.$mount()},"5f89":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"e3ebe6cc-0"},on:{click:function(e){t.onClick()}}})},o=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return o})},"60c6":function(t,e,n){"use strict";n.r(e);var u=n("7cfb"),o=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=o.a},"77a5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={is_phone:function(t){var e=/^1[1|2|3|4|5|6|7|8|9]\d{9}$/;return!!e.test(t)},is_email:function(t){var e=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return!!e.test(t)},is_Number:function(t){var e=/^[0-9]+$/;return!(""!=t&&!e.test(t))},is_chinese:function(t){var e=/^[\u0391-\uFFE5]+$/;return!(""!=t&&!e.test(t))},isRealNum:function(t){return""!==t&&null!=t&&!isNaN(t)},is_ZmOrNum:function(t){var e=/^[0-9a-zA-Z]*$/;return!(""!=t&&!e.test(t))},checkDate:function(t){var e=t.replace(/-/g,"/"),n=new Date(Date.parse(e)),u=new Date;return!(n>u)},check_other_char:function(t){验证用户名是否含有特殊字符;for(var e=["&","\\","/","*",">","<","@","!"],n=0;n<e.length;n++)for(var u=0;u<t.length;u++)if(e[n]==t.charAt(u))return!0;return!1}},o=u;e.default=o},"7cfb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){console.log("App Launch"),setTimeout(function(){t.setTabBarBadge({index:1,text:"31"}),t.showTabBarRedDot({index:3})},1e3)},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=n}).call(this,n("543d")["default"])},a314:function(t,e,n){},aef8:function(t,e,n){"use strict";n.r(e);var u=n("5f89"),o=n("fddb");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("d71a");var i=n("2877"),c=Object(i["a"])(o["default"],u["a"],u["b"],!1,null,null,null);c.options.__file="uni-icon.vue",e["default"]=c.exports},b366:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"uni-icon",props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=u},d71a:function(t,e,n){"use strict";var u=n("a314"),o=n.n(u);o.a},de8d:function(t,e,n){"use strict";n.r(e);var u=n("60c6");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("3579");var r,i,c=n("2877"),a=Object(c["a"])(u["default"],r,i,!1,null,null,null);a.options.__file="App.vue",e["default"]=a.exports},f04c:function(t,e,n){},fddb:function(t,e,n){"use strict";n.r(e);var u=n("b366"),o=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=o.a}},[["5643","common/runtime","common/vendor"]]]);