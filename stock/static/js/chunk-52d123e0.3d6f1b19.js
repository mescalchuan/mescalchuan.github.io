(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52d123e0"],{"4ad1":function(t,e,r){},"4fdc":function(t,e,r){"use strict";var n=r("61c8"),o=r.n(n);o.a},"61c8":function(t,e,r){},"66b7":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"back-container"},[r("span",{staticClass:"custom-back",on:{click:t.goBack}},[r("i",{staticClass:"el-icon-back ",on:{click:t.goBack}}),t._v("返回 ")])])},o=[],a=(r("2f62"),{name:"Back",methods:{goBack:function(){history.back()}}}),d=a,i=(r("8ccd"),r("2877")),u=Object(i["a"])(d,n,o,!1,null,"1a422e96",null);e["a"]=u.exports},"8ccd":function(t,e,r){"use strict";var n=r("4ad1"),o=r.n(n);o.a},c4d8:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"detail-page"},[r("back"),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("组织代码: "+t._s(t.basicInfo.groupCode))]),r("span",[t._v("组织名称: "+t._s(t.basicInfo.groupName))]),r("span",[t._v("法人: "+t._s(t.basicInfo.legal))]),r("el-tag",{attrs:{type:"success",size:"mini"}},[t._v("经济组织分红")])],1),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-right":"150px"},attrs:{model:t.form,rules:t.rules,"label-width":"200px"}},[r("el-form-item",{attrs:{label:"分红总额",prop:"dividendAmount"}},[r("el-input",{model:{value:t.form.dividendAmount,callback:function(e){t.$set(t.form,"dividendAmount",e)},expression:"form.dividendAmount"}})],1),r("el-form-item",{attrs:{label:"分红年份",prop:"dividendYear"}},[r("el-input",{model:{value:t.form.dividendYear,callback:function(e){t.$set(t.form,"dividendYear",e)},expression:"form.dividendYear"}})],1),r("el-form-item",{attrs:{label:"分红日期",prop:"dividendTime"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.form.dividendTime,callback:function(e){t.$set(t.form,"dividendTime",e)},expression:"form.dividendTime"}})],1),r("el-form-item",{attrs:{label:"备注",prop:"description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),r("el-button",{staticStyle:{width:"calc(100% - 300px)",margin:"20px 150px"},attrs:{type:"primary"},on:{click:t.save}},[t._v("确认分红")])],1)],1)},o=[],a=r("66b7"),d=r("cca8"),i=r("d43b"),u={components:{Back:a["a"]},data:function(){return{basicInfo:{},form:{dividendAmount:0,dividendYear:0,dividendTime:new Date},rules:{dividendAmount:{required:!0,message:"请输入分红总额"},dividendYear:{required:!0,message:"请输入分红年份"},dividendTime:{required:!0,message:"请选择分红日期"}}}},created:function(){var t=this;Object(d["c"])({economicGroupId:this.$route.query.id}).then((function(e){t.basicInfo=e.data}))},methods:{save:function(){var t=this;this.form.economicGroupId=this.$route.query.id,this.$refs.ruleForm.validate((function(e){e&&Object(i["a"])(t.form).then((function(e){t.$message({type:"success",message:"操作成功"}),t.$router.go(-1)}))}))}}},c=u,s=(r("4fdc"),r("2877")),l=Object(s["a"])(c,n,o,!1,null,"6feb52c1",null);e["default"]=l.exports},d43b:function(t,e,r){"use strict";r.d(e,"j",(function(){return o})),r.d(e,"i",(function(){return a})),r.d(e,"h",(function(){return d})),r.d(e,"e",(function(){return i})),r.d(e,"k",(function(){return u})),r.d(e,"u",(function(){return c})),r.d(e,"q",(function(){return s})),r.d(e,"g",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"m",(function(){return m})),r.d(e,"n",(function(){return p})),r.d(e,"p",(function(){return v})),r.d(e,"o",(function(){return h})),r.d(e,"r",(function(){return b})),r.d(e,"s",(function(){return y})),r.d(e,"l",(function(){return g})),r.d(e,"v",(function(){return k})),r.d(e,"c",(function(){return j})),r.d(e,"d",(function(){return O})),r.d(e,"a",(function(){return q})),r.d(e,"b",(function(){return x})),r.d(e,"t",(function(){return _}));var n=r("b775");function o(t){return Object(n["a"])({url:"/v1/shareholder/search",method:"post",data:t})}function a(t){return Object(n["a"])({url:"/v1/shareholder/detail",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/v1/shareholder/download",method:"get",params:t,responseType:"blob"})}function i(t){return Object(n["a"])({url:"/v1/shareholder/create",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/v1/stockRight/history",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/v1/stockRightType/query",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/v1/settleType/query",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/v1/dealType/query",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/v1/stockRight/pledge",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/v1/pledge/list",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/v1/pledge/release",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/v1/stockRight/add",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/v1/stockRight/reduce",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/v1/shareholderInfo/query",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/v1/shareholder/query",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/v1/otherShareholder/query",method:"post",data:t})}function k(t){return Object(n["a"])({url:"/v1/stockRight/transform",method:"post",data:t})}function j(t){return Object(n["a"])({url:"/v1/dividend/query",method:"post",data:t})}function O(t){return Object(n["a"])({url:"/v1/dividendRecord/query",method:"post",data:t})}function q(t){return Object(n["a"])({url:"/v1/dividend/add",method:"post",data:t})}function x(t){return Object(n["a"])({url:"/v1/dividend/detail",method:"post",data:t})}function _(t){return Object(n["a"])({url:"/v1/shareholder/import",method:"post",data:t})}}}]);