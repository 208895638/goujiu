(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/page/duanxin/duanxin"],{2734:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("4544"));function s(t){return t&&t.__esModule?t:{default:t}}var a={components:{headers:n.default},data:function(){return{imgSrc:"../../../static/img/back.png",title:"手机快捷登陆",user:"",pass:""}},computed:{isDisabled:function(){return 11==this.user.length}},methods:{back:function(){t.navigateBack()},goInfo:function(){t.navigateTo({url:"/pages/page/info/info"})},sendyzm:function(){if(!this.vali.is_phone(this.user))return t.showToast({icon:"none",title:"手机号码格式不正确且只能输入手机号",duration:2e3}),this.user="",!1;this.yzmTo()},yzmTo:function(){t.request({url:this.userUrl+"/BtCApi/Login/LoginSms",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{Mob:this.user,type:1,DeviceId:"",PhoneVersion:"",ClientVersion:"",ClientType:0},success:function(e){console.log(e.data),t.showToast({icon:"none",title:e.data.msg,duration:2e3})}})},isLogin:function(){if(!this.vali.is_phone(this.user))return t.showToast({icon:"none",title:"手机号码格式不正确",duration:2e3}),!1;this.login()},login:function(){t.request({url:this.userUrl+"/BtCApi/Login/APP_LoginByMob",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{Verification_Code:this.pass,Mob:this.user,type:1,DeviceId:"",PhoneVersion:null,ClientVersion:"",ClientType:1},success:function(e){console.log(e.data),1==e.data.status?(t.showToast({icon:"none",title:"登陆成功",duration:2e3}),t.setStorageSync("UserID",e.data.UserID),t.setStorageSync("Signid",e.data.Signid),t.setStorageSync("DeviceId",e.data.DeviceId),t.setStorageSync("PhoneVersion",e.data.PhoneVersion),t.setStorageSync("ClientVersion",e.data.ClientVersion),t.setStorageSync("ClientType",e.data.ClientType),t.switchTab({url:"/pages/router/mine/mine"})):t.showToast({icon:"none",title:e.data.msg,duration:2e3})}})}}};e.default=a}).call(this,i("543d")["default"])},"292c":function(t,e,i){"use strict";i("5231");var n=a(i("b0ce")),s=a(i("b928"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},"53a4":function(t,e,i){"use strict";var n=i("ec87"),s=i.n(n);s.a},abfb:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("div",{staticClass:" bb"},[i("view",{staticClass:"uni-card"},[i("view",{staticClass:"uni-list "},[i("view",{staticClass:"uni-list-cell uni-list-cell-last"},[i("view",{staticClass:"uni-list-cell-navigate list"},[i("v-icon",{attrs:{type:"person",size:"30",mpcomid:"ccdab06e-0"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"uni-input",attrs:{type:"number",focus:"",placeholder:"请输入手机号码",eventid:"ccdab06e-0"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}})],1)]),i("view",{staticClass:"uni-list-cell uni-list-cell-last"},[i("view",{staticClass:"uni-list-cell-navigate list"},[i("div",{staticClass:"left"},[i("v-icon",{attrs:{type:"email-filled",size:"30",mpcomid:"ccdab06e-1"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"uni-input",attrs:{type:"password",placeholder:"输入验证码",eventid:"ccdab06e-1"},domProps:{value:t.pass},on:{input:function(e){e.target.composing||(t.pass=e.target.value)}}})],1),i("div",{staticClass:"right"},[i("button",{staticClass:"mini-btn",attrs:{type:"warn",size:"mini",disabled:!t.isDisabled,eventid:"ccdab06e-2"},on:{click:t.sendyzm}},[t._v("获取验证码")])],1)])])])]),i("view",{staticClass:"uni-padding-wrap uni-common-mt btnList"},[i("button",{attrs:{type:"default",eventid:"ccdab06e-3"},on:{click:t.isLogin}},[t._v("验证登陆")])],1)])])},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},b928:function(t,e,i){"use strict";i.r(e);var n=i("abfb"),s=i("edc5");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("53a4");var o=i("2877"),c=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"389968b3",null);c.options.__file="duanxin.vue",e["default"]=c.exports},ec87:function(t,e,i){},edc5:function(t,e,i){"use strict";i.r(e);var n=i("2734"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a}},[["292c","common/runtime","common/vendor"]]]);