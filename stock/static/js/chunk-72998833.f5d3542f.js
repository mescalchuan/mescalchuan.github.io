(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72998833"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"4e3c":function(t,e,r){},8194:function(t,e,r){"use strict";r.d(e,"k",(function(){return a})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return s})),r.d(e,"e",(function(){return u})),r.d(e,"h",(function(){return c})),r.d(e,"j",(function(){return i})),r.d(e,"m",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return f})),r.d(e,"f",(function(){return m})),r.d(e,"l",(function(){return p})),r.d(e,"i",(function(){return b})),r.d(e,"g",(function(){return h}));var n=r("b775");function a(t){return Object(n["a"])({url:"/v1/family/search",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/v1/family/save",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/v1/member/detail",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/v1/family/members",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/v1/member/detail",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/v1/relationship/query",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/v1/member/update",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/v1/member/cancel",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/v1/member/save",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/v1/birthDate/query",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/v1/members/search",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/v1/member/download",method:"get",params:t,responseType:"blob"})}function h(t){return Object(n["a"])({url:"/v1/updateHistory/query",method:"post",data:t})}},"841c":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),o=r("1d80"),s=r("129f"),u=r("14c3");n("search",1,(function(t,e,r){return[function(e){var r=o(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var o=a(t),c=String(this),i=o.lastIndex;s(i,0)||(o.lastIndex=0);var l=u(o,c);return s(o.lastIndex,i)||(o.lastIndex=i),null===l?-1:l.index}]}))},b1f2:function(t,e,r){"use strict";var n=r("4e3c"),a=r.n(n);a.a},c1a8:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"add-member-container"},[r("back"),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("股权流转登记")]),r("div",{staticClass:"info-box"},[r("p",{staticClass:"label"},[r("strong",[t._v("经济组织")])]),r("p",{staticClass:"label"},[t._v("组织代码： "+t._s(t.basicInfo.groupCode))]),r("p",{staticClass:"label"},[t._v("组织名称： "+t._s(t.basicInfo.groupName))]),r("p",{staticClass:"label"},[t._v("法人： "+t._s(t.basicInfo.legal))]),r("p",{staticClass:"label"},[t._v("组织地址： "+t._s(t.basicInfo.address))])]),r("div",{staticClass:"info-box",staticStyle:{background:"#afde5c"}},[r("p",{staticClass:"label"},[r("strong",[t._v("转入方信息")])]),r("p",{staticClass:"label"},[t._v("股东： "+t._s(t.stockOutInfo.shareholderName))]),r("p",{staticClass:"label"},[t._v("身份证号： "+t._s(t.stockOutInfo.idCard))]),r("p",{staticClass:"label"},[t._v("地址： "+t._s(t.stockOutInfo.address))]),r("p",{staticClass:"label"},[t._v("可流转股权数： "+t._s(t.stockOutInfo.stockRightCount))])]),r("div",{staticClass:"info-box",staticStyle:{background:"#afde5c"}},[r("p",{staticClass:"label"},[r("strong",[t._v("转出方信息")])]),r("p",{staticClass:"label"},[t._v("股东： "+t._s(t.stockInfo.shareholderName))]),r("p",{staticClass:"label"},[t._v("身份证号： "+t._s(t.stockInfo.idCard))]),r("p",{staticClass:"label"},[t._v("地址： "+t._s(t.stockInfo.address))]),r("p",{staticClass:"label"},[t._v("可流转股权数： "+t._s(t.stockInfo.stockRightCount))])])]),r("el-card",[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-right":"150px"},attrs:{model:t.form,rules:t.rules,"label-width":"200px"}},[r("el-form-item",{attrs:{label:"成交股数",prop:"transformCount"}},[r("el-input",{model:{value:t.form.transformCount,callback:function(e){t.$set(t.form,"transformCount",e)},expression:"form.transformCount"}})],1),r("el-form-item",{attrs:{label:"成交额",prop:"totalAmount"}},[r("el-input",{model:{value:t.form.totalAmount,callback:function(e){t.$set(t.form,"totalAmount",e)},expression:"form.totalAmount"}})],1),r("el-form-item",{attrs:{label:"成交方式",prop:"settleType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择成交方式"},model:{value:t.form.dealType,callback:function(e){t.$set(t.form,"dealType",e)},expression:"form.dealType"}},t._l(t.dealTypes,(function(t){return r("el-option",{key:t.dealTypeId,attrs:{label:t.dealTypeName,value:t.dealTypeId}})})),1)],1),r("el-form-item",{attrs:{label:"结算方式",prop:"settleType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择结算方式"},model:{value:t.form.settleType,callback:function(e){t.$set(t.form,"settleType",e)},expression:"form.settleType"}},t._l(t.settleTypes,(function(t){return r("el-option",{key:t.settleTypeId,attrs:{label:t.settleTypeName,value:t.settleTypeId}})})),1)],1),r("el-form-item",{attrs:{label:"登记员",prop:"registrant"}},[r("el-input",{attrs:{disabled:""},model:{value:t.form.registrant,callback:function(e){t.$set(t.form,"registrant",e)},expression:"form.registrant"}})],1),r("el-form-item",{attrs:{label:"鉴证人",prop:"appraiser"}},[r("el-input",{model:{value:t.form.appraiser,callback:function(e){t.$set(t.form,"appraiser",e)},expression:"form.appraiser"}})],1),r("el-form-item",{attrs:{label:"流转说明",prop:"description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),r("el-button",{staticStyle:{width:"calc(100% - 300px)",margin:"0 150px"},attrs:{type:"primary"},on:{click:t.transform}},[t._v("确认转出")])],1)],1)},a=[],o=(r("ac1f"),r("841c"),r("cca8")),s=(r("8194"),r("d43b")),u=r("66b7"),c={name:"Dashboard",components:{Back:u["a"]},data:function(){return{basicInfo:{},stockInfo:{},stockOutInfo:{},settleTypes:[],dealTypes:[],form:{transformCount:0,totalAmount:0},rules:{transformCount:{required:!0,message:"请输入成交股数"},totalAmount:{required:!0,message:"请输入成交额"},registrant:{required:!0,message:"请输入登记员"},appraiser:{required:!0,message:"请输入鉴证人"}},memberId:""}},methods:{handleCreate:function(){var t=this;createStock({economicGroupId:this.$route.query.id,memberId:this.memberId,stockRightNo:this.stockCode}).then((function(e){t.dialogVisible=!1,t.$message({type:"success",message:"操作成功"}),t.search()}))},transform:function(){var t=this;this.form.transferor=this.$route.query.stockRightId,this.form.transferee=this.$route.query.stockRightOutId,this.$refs.ruleForm.validate((function(e){e&&Object(s["u"])(t.form).then((function(e){t.$message({type:"success",message:"操作成功"}),t.$router.go(-1)}))}))}},created:function(){var t=this;this.form.registrant=localStorage.getItem("un"),Object(o["c"])({economicGroupId:this.$route.query.id}).then((function(e){t.basicInfo=e.data})),Object(s["q"])({stockRightId:this.$route.query.stockRightId}).then((function(e){t.stockInfo=e.data})),Object(s["q"])({stockRightId:this.$route.query.stockRightOutId}).then((function(e){t.stockOutInfo=e.data})),Object(s["p"])().then((function(e){t.settleTypes=e.data.settleTypes})),Object(s["g"])().then((function(e){t.dealTypes=e.data.dealTypes}))}},i=c,l=(r("b1f2"),r("f169"),r("2877")),d=Object(l["a"])(i,n,a,!1,null,"2fb2ec4c",null);e["default"]=d.exports},d43b:function(t,e,r){"use strict";r.d(e,"i",(function(){return a})),r.d(e,"h",(function(){return o})),r.d(e,"e",(function(){return s})),r.d(e,"j",(function(){return u})),r.d(e,"t",(function(){return c})),r.d(e,"p",(function(){return i})),r.d(e,"g",(function(){return l})),r.d(e,"f",(function(){return d})),r.d(e,"l",(function(){return f})),r.d(e,"m",(function(){return m})),r.d(e,"o",(function(){return p})),r.d(e,"n",(function(){return b})),r.d(e,"q",(function(){return h})),r.d(e,"r",(function(){return v})),r.d(e,"k",(function(){return y})),r.d(e,"u",(function(){return g})),r.d(e,"c",(function(){return O})),r.d(e,"d",(function(){return k})),r.d(e,"a",(function(){return j})),r.d(e,"b",(function(){return I})),r.d(e,"s",(function(){return C}));var n=r("b775");function a(t){return Object(n["a"])({url:"/v1/shareholder/search",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/v1/shareholder/detail",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/v1/shareholder/create",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/v1/stockRight/history",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/v1/stockRightType/query",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/v1/settleType/query",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/v1/dealType/query",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/v1/stockRight/pledge",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/v1/pledge/list",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/v1/pledge/release",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/v1/stockRight/add",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/v1/stockRight/reduce",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/v1/shareholderInfo/query",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/v1/shareholder/query",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/v1/otherShareholder/query",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/v1/stockRight/transform",method:"post",data:t})}function O(t){return Object(n["a"])({url:"/v1/dividend/query",method:"post",data:t})}function k(t){return Object(n["a"])({url:"/v1/dividendRecord/query",method:"post",data:t})}function j(t){return Object(n["a"])({url:"/v1/dividend/add",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/v1/dividend/detail",method:"post",data:t})}function C(t){return Object(n["a"])({url:"/v1/shareholder/import",method:"post",data:t})}},e0c9:function(t,e,r){},f169:function(t,e,r){"use strict";var n=r("e0c9"),a=r.n(n);a.a}}]);