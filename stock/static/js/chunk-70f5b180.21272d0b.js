(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70f5b180"],{"00da":function(t,e,a){"use strict";var s=a("c6e3"),n=a.n(s);n.a},1393:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-page"},[a("back"),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("股东户号： "+t._s(t.basicInfo.familyNo))]),a("span",[t._v("股东姓名: "+t._s(t.basicInfo.shareholderName))]),a("span",[t._v("身份证号: "+t._s(t.basicInfo.idCard))]),a("span",[t._v("股权证号: "+t._s(t.basicInfo.stockRightNo))]),a("span",[t._v("入股经济组织: "+t._s(t.basicInfo.economicGroupName))])]),a("el-table",{attrs:{"header-cell-class-name":"table-header-color",data:t.assetData,border:""}},[a("el-table-column",{attrs:{prop:"stockRightTypeName",label:"股权类型"}}),a("el-table-column",{attrs:{prop:"stockRightCount",label:"股权份额"}}),a("el-table-column",{attrs:{prop:"totalAmount",label:"股权总价值"}})],1)],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-tag",{attrs:{type:"success",size:"mini"}},[t._v("变更记录")])],1),a("div",t._l(t.historys,(function(e,s){return a("history-card",{staticStyle:{margin:"10px 0 0 0"},attrs:{datas:e,"basic-info":t.basicInfo}})})),1)])],1)},n=[],r=(a("a434"),a("1d97")),c=a("66b7"),o=a("d43b"),d={name:"OrganizationDetail",components:{HistoryCard:r["a"],Back:c["a"]},data:function(){return{tableData:[{index:1,code:12,name:"zhanah",represent:"sdasas",address:"lallallal",createdDate:"2018-09-29"}],basicInfo:{},assetData:[],stockRightData:[{type:"贡献股",price:"1.0"},{type:"贡献股",price:"1.0"},{type:"爱新股",price:"1.0"}],form:{total:1222,distribute:[{type:"",coefficient:1}]},typeList:[{label:"kakkak",value:"ssss"}],historys:[]}},methods:{addParam:function(){var t={type:"",coefficient:1};this.form.distribute.push(t)},deleteParam:function(t){this.form.distribute.splice(t,1)}},created:function(){var t=this;Object(o["i"])({stockRightId:this.$route.query.stockRightId}).then((function(e){t.basicInfo=e.data,t.assetData=e.data.stockRightDetailInfos})),Object(o["k"])({stockRightId:this.$route.query.stockRightId}).then((function(e){t.historys=e.data.operateHistoryList}))}},i=d,u=(a("5c81"),a("00da"),a("2877")),f=Object(u["a"])(i,s,n,!1,null,"fd05ee12",null);e["default"]=f.exports},"1d97":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"history-container"},[a("div",t._l([t.moment(t.datas.stockRightOperateDate).format("yyyy-MM-DD"),t.datas.stockRightOperateType,"见证人："+t.datas.appraiser],(function(e){return a("el-tag",{attrs:{type:"danger",size:"mini"}},[t._v(t._s(e))])})),1),a("p",[a("strong",[t._v("股东: ")]),a("strong",[t._v(t._s(t.datas.shareholderName))]),t._v(" (户号："+t._s(t.basicInfo.familyNo)+" 身份证号："+t._s(t.basicInfo.idCard)+")")]),a("p",[a("strong",[t._v("股东入股组织: ")]),a("strong",[t._v(t._s(t.datas.economicGroupName))]),t._v(" (组织代码："+t._s(t.datas.economicGroupCode)+" 地址："+t._s(t.datas.economicGroupAddress)+")")]),a("p",[a("strong",[t._v("入股类型:")]),t._v(" "+t._s(t.datas.stockRightType))]),a("p",[a("strong",[t._v("入股数额:")]),t._v(" "+t._s(t.datas.operateCount))]),a("p",[a("strong",[t._v("成交额:")]),t._v(" "+t._s(t.datas.totalAmount))])])},n=[],r=a("c1df"),c=a.n(r),o={name:"HistoryCard",props:{datas:{type:Object,default:function(){return{}}},basicInfo:{type:Object,default:function(){return{}}}},data:function(){return{info:{tags:["cxsw(张化龙)","2017-09-22","入股","见证人：无"],gudong:"ddsds",gudongGroup:"sasa",type:"dsdsd",count:20,moner:2002},moment:c.a}}},d=o,i=(a("6a1d"),a("2877")),u=Object(i["a"])(d,s,n,!1,null,"07114a52",null);e["a"]=u.exports},"296e":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d7167","./ca.js":"d7167","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e9","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e9","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"4ad1":function(t,e,a){},"5c81":function(t,e,a){"use strict";var s=a("296e"),n=a.n(s);n.a},"66b7":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back-container"},[a("span",{staticClass:"custom-back",on:{click:t.goBack}},[a("i",{staticClass:"el-icon-back ",on:{click:t.goBack}}),t._v("返回 ")])])},n=[],r=(a("2f62"),{name:"Back",methods:{goBack:function(){history.back()}}}),c=r,o=(a("8ccd"),a("2877")),d=Object(o["a"])(c,s,n,!1,null,"1a422e96",null);e["a"]=d.exports},"6a1d":function(t,e,a){"use strict";var s=a("7a0f"),n=a.n(s);n.a},"7a0f":function(t,e,a){},"8ccd":function(t,e,a){"use strict";var s=a("4ad1"),n=a.n(s);n.a},a434:function(t,e,a){"use strict";var s=a("23e7"),n=a("23cb"),r=a("a691"),c=a("50c4"),o=a("7b0b"),d=a("65f0"),i=a("8418"),u=a("1dde"),f=a("ae40"),l=u("splice"),b=f("splice",{ACCESSORS:!0,0:0,1:2}),j=Math.max,h=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!l||!b},{splice:function(t,e){var a,s,u,f,l,b,v=o(this),g=c(v.length),k=n(t,g),y=arguments.length;if(0===y?a=s=0:1===y?(a=0,s=g-k):(a=y-2,s=h(j(r(e),0),g-k)),g+a-s>m)throw TypeError(p);for(u=d(v,s),f=0;f<s;f++)l=k+f,l in v&&i(u,f,v[l]);if(u.length=s,a<s){for(f=k;f<g-s;f++)l=f+s,b=f+a,l in v?v[b]=v[l]:delete v[b];for(f=g;f>g-s+a;f--)delete v[f-1]}else if(a>s)for(f=g-s;f>k;f--)l=f+s-1,b=f+a-1,l in v?v[b]=v[l]:delete v[b];for(f=0;f<a;f++)v[f+k]=arguments[f+2];return v.length=g-s+a,u}})},c6e3:function(t,e,a){},d43b:function(t,e,a){"use strict";a.d(e,"j",(function(){return n})),a.d(e,"i",(function(){return r})),a.d(e,"h",(function(){return c})),a.d(e,"e",(function(){return o})),a.d(e,"k",(function(){return d})),a.d(e,"u",(function(){return i})),a.d(e,"q",(function(){return u})),a.d(e,"g",(function(){return f})),a.d(e,"f",(function(){return l})),a.d(e,"m",(function(){return b})),a.d(e,"n",(function(){return j})),a.d(e,"p",(function(){return h})),a.d(e,"o",(function(){return m})),a.d(e,"r",(function(){return p})),a.d(e,"s",(function(){return v})),a.d(e,"l",(function(){return g})),a.d(e,"v",(function(){return k})),a.d(e,"c",(function(){return y})),a.d(e,"d",(function(){return _})),a.d(e,"a",(function(){return O})),a.d(e,"b",(function(){return z})),a.d(e,"t",(function(){return R}));var s=a("b775");function n(t){return Object(s["a"])({url:"/v1/shareholder/search",method:"post",data:t})}function r(t){return Object(s["a"])({url:"/v1/shareholder/detail",method:"post",data:t})}function c(t){return Object(s["a"])({url:"/v1/shareholder/download",method:"get",params:t,responseType:"blob"})}function o(t){return Object(s["a"])({url:"/v1/shareholder/create",method:"post",data:t})}function d(t){return Object(s["a"])({url:"/v1/stockRight/history",method:"post",data:t})}function i(t){return Object(s["a"])({url:"/v1/stockRightType/query",method:"post",data:t})}function u(t){return Object(s["a"])({url:"/v1/settleType/query",method:"post",data:t})}function f(t){return Object(s["a"])({url:"/v1/dealType/query",method:"post",data:t})}function l(t){return Object(s["a"])({url:"/v1/stockRight/pledge",method:"post",data:t})}function b(t){return Object(s["a"])({url:"/v1/pledge/list",method:"post",data:t})}function j(t){return Object(s["a"])({url:"/v1/pledge/release",method:"post",data:t})}function h(t){return Object(s["a"])({url:"/v1/stockRight/add",method:"post",data:t})}function m(t){return Object(s["a"])({url:"/v1/stockRight/reduce",method:"post",data:t})}function p(t){return Object(s["a"])({url:"/v1/shareholderInfo/query",method:"post",data:t})}function v(t){return Object(s["a"])({url:"/v1/shareholder/query",method:"post",data:t})}function g(t){return Object(s["a"])({url:"/v1/otherShareholder/query",method:"post",data:t})}function k(t){return Object(s["a"])({url:"/v1/stockRight/transform",method:"post",data:t})}function y(t){return Object(s["a"])({url:"/v1/dividend/query",method:"post",data:t})}function _(t){return Object(s["a"])({url:"/v1/dividendRecord/query",method:"post",data:t})}function O(t){return Object(s["a"])({url:"/v1/dividend/add",method:"post",data:t})}function z(t){return Object(s["a"])({url:"/v1/dividend/detail",method:"post",data:t})}function R(t){return Object(s["a"])({url:"/v1/shareholder/import",method:"post",data:t})}}}]);