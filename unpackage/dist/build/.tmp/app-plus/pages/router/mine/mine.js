(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/router/mine/mine"],{"12a9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{indicatorDots:!1,autoplay:!0,interval:2e4,duration:500,hasLogin:!0,noUser:!0,nums:2,margin:"50upx",order:[{icon:"../../../static/mine/wd_01dfk.png",num:0,text:"待付款",url:"/"},{icon:"../../../static/mine/wd_02dfh.png",num:0,text:"代发货",url:"/"},{icon:"../../../static/mine/wd_03dsh.png",num:0,text:"待收货",url:"/"},{icon:"../../../static/mine/wd_04dpj.png",num:0,text:"待评价",url:"/"}],money:[{icon:"../../../static/mine/wd_01dfk.png",num:0,text:"账户余额",url:"/"},{icon:"../../../static/mine/wd_02dfh.png",num:0,text:"优惠券",url:"/"},{icon:"../../../static/mine/wd_03dsh.png",num:0,text:"积分",url:"/"}],others:[{icon:"../../../static/mine/icon_collection.png",num:0,text:"商品收藏",url:"/"},{icon:"../../../static/mine/icon_foot_print.png",num:0,text:"浏览足迹",url:"/"},{icon:"../../../static/mine/kfrx.png",num:0,text:"400-722-1919",url:"/"},{icon:"../../../static/mine/bag.png",num:0,text:"领券福利",url:"/"}],tuijian:[]}},onLoad:function(){this.getUserinfo(),this.getUserBy()},methods:{aa:function(){t.navigateTo({url:"/pages/page/login/login"})},getUserBy:function(){var n=this;t.request({url:this.userUrl+"/BtCApi/ShopCar/GetEveryoneBuy",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{DeviceId:"ede655aa-f80c-48e6-9f06-c5e7a3698a21",PhoneVersion:""==t.getStorageSync("PhoneVersion")?"":t.getStorageSync("PhoneVersion"),ClientVersion:"1.0.0.1",ClientType:0},success:function(e){1==e.data.status?(console.log(e.data),n.tuijian=e.data.data):t.showToast({icon:"none",title:e.data.msg,duration:2e3})}})},getUserinfo:function(){t.request({url:this.userUrl+"/BtCApi/User/GetUserInfo",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{UserID:""==t.getStorageSync("UserID")?"":t.getStorageSync("UserID"),Signid:""==t.getStorageSync("Signid")?"":t.getStorageSync("Signid"),DeviceId:"ede655aa-f80c-48e6-9f06-c5e7a3698a21",PhoneVersion:""==t.getStorageSync("PhoneVersion")?"":t.getStorageSync("PhoneVersion"),ClientVersion:"1.0.0.1",ClientType:0},success:function(n){1==n.status&&3e4==n.code||(20255==n.code?t.showToast({icon:"none",title:"请先登陆",duration:2e3}):t.showToast({icon:"none",title:n.data.msg,duration:2e3}))}})}}};n.default=e}).call(this,e("649d")["default"])},4915:function(t,n,e){"use strict";e("af05");var i=o(e("b0ce")),a=o(e("b099"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},"8dc2":function(t,n,e){},"96fc":function(t,n,e){"use strict";var i=e("8dc2"),a=e.n(i);a.a},"9bf4":function(t,n,e){"use strict";e.r(n);var i=e("12a9"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},b099:function(t,n,e){"use strict";e.r(n);var i=e("f6aa"),a=e("9bf4");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("96fc");var s=e("2877"),c=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"2ede9c1c",null);n["default"]=c.exports},f122:function(t,n){t.exports="data:image/png;base64,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"},f6aa:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{staticClass:"block"},[t._v("")]),t.noUser?i("div",{staticClass:"nouser"},[i("img",{attrs:{src:e("f122"),alt:""}}),i("view",{staticClass:"go"},[i("navigator",{attrs:{url:"/pages/page/login/login"}},[t._v("登陆/注册›")])],1)]):t._e(),i("div",{staticClass:"order"},[i("div",{staticClass:"top"},[t._v("我的订单"),i("navigator",{attrs:{url:""}},[t._v("查看全部订单›")])],1),i("ul",t._l(t.order,function(n,e){return i("li",{key:e},[i("dl",[i("dt",[i("img",{attrs:{src:n.icon,alt:""}}),i("text",{staticClass:"num"},[t._v(t._s(n.num))])])],1),i("dd",[t._v(t._s(n.text))])],1)}))],1),i("div",{staticClass:"order money"},[i("div",{staticClass:"top"},[t._v("我的订单"),i("navigator",{attrs:{url:""}},[t._v("查看明细›")])],1),i("ul",t._l(t.money,function(n,e){return i("li",{key:e},[i("dl",[i("dt",[t._v(t._s(n.num))])],1),i("dd",[t._v(t._s(n.text))])],1)}))],1),i("div",{staticClass:"order money other"},[i("ul",t._l(t.others,function(n,e){return i("li",{key:e},[i("dl",[i("dt",[i("img",{attrs:{src:n.icon,alt:""}})])],1),i("dd",[t._v(t._s(n.text))])],1)}))],1),i("div",{staticClass:"hot"},[t._m(0),i("div",{staticClass:"bot"},[i("swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,"next-margin":t.margin,circular:"true","display-multiple-items":t.nums,duration:t.duration}},t._l(t.tuijian,function(n,e){return i("swiper-item",{key:e,attrs:{mpcomid:"7b634a3a-0-"+e}},[i("view",{staticClass:"swiper-item  tuijiansp"},[i("img",{attrs:{src:"http://img0.gjw.com/product/"+n.Pic,alt:""}}),i("text",{staticClass:"tjspwz"},[t._v("￥ "+t._s(n.Money))])])])}))],1)])])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"top"},[e("view",{staticClass:"title"},[t._v("推荐商品")]),e("view",{staticClass:"line"})])}];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})}},[["4915","common/runtime","common/vendor"]]]);