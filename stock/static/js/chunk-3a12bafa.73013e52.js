(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a12bafa"],{"1c43":function(t,e,n){},2934:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return i}));var a=n("b775");function o(){return Object(a["a"])({url:"/v1/village/list",method:"post"})}function r(){return Object(a["a"])({url:"/v1/village/loadAll",method:"post"})}function c(){return Object(a["a"])({url:"/v1/position/query",method:"post"})}function i(t){return Object(a["a"])({url:"/v1/villageGroup/list",method:"post",data:t})}},"680c":function(t,e,n){},7038:function(t,e,n){"use strict";var a=n("1c43"),o=n.n(a);o.a},"7b3d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stock-page"},[n("area-selector",{on:{areaChange:t.areaChange}}),t.economicGroupInfos.length?n("el-card",{staticStyle:{"margin-top":"10px"}},[n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.economicGroupInfos,(function(e){return n("el-tab-pane",{key:e.id,attrs:{label:e.groupName,name:String(e.id)}},[t.activeName===String(e.id)?n("Index",{attrs:{"economic-id":e.id}}):t._e()],1)})),1)],1):t._e()],1)},o=[],r=n("7715"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stock-page"},[n("div",{staticClass:"stock-content"},[n("div",{staticClass:"option-box"},[n("div",{staticClass:"search-box"},[n("el-input",{staticClass:"search-input",attrs:{placeholder:"可根据股东户号、股东姓名、股权证号、身份证号码搜索",clearable:""},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),n("el-button",{attrs:{type:"primary"},on:{click:t.searchList}},[t._v("搜索"),n("i",{staticClass:"el-icon-search el-icon--right"})])],1),n("el-button",{attrs:{icon:"el-icon-download",type:"primary"},on:{click:t.download}},[t._v("下载信息")])],1),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-tag",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"success",size:"mini"}},[t._v(t._s(t.basicInfo.groupName))]),n("div",[n("span",[t._v("编号： "+t._s(t.basicInfo.id))]),n("span",[t._v("组织代码: "+t._s(t.basicInfo.groupCode))]),n("span",[t._v("组织名称: "+t._s(t.basicInfo.groupName))]),n("span",[t._v("法人: "+t._s(t.basicInfo.legal))]),n("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-plus",type:"success",size:"small"},on:{click:t.addShareholder}},[t._v("新增股东")])],1)],1),n("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"table-header-color",data:t.tableData,border:"","show-summary":"","summary-method":t.getSummaries}},[n("el-table-column",{attrs:{prop:"shareholderFamilyNo",label:"股东户号",width:"120"}}),n("el-table-column",{attrs:{prop:"shareholderName",label:"股东"}}),n("el-table-column",{attrs:{prop:"stockRightNo",label:"股权证号"}}),n("el-table-column",{attrs:{prop:"idCard",label:"身份证号"}}),n("el-table-column",{attrs:{prop:"stockRightCount",label:"综合股权份额"}}),n("el-table-column",{attrs:{prop:"stockRightAmount",label:"综合股权价值"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{icon:"el-icon-warning",type:"warning",size:"small"},on:{click:function(n){return t.goDetail(e.row.stockRightId)}}},[t._v("详情")])]}}])})],1),n("pagination",{attrs:{total:t.pageInfo.total,"current-page":t.pageInfo.pageNum},on:{"on-change":function(e){return t.handlePageChange(e)}}})],1)],1)])},i=[],u=(n("4160"),n("a9e3"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("2b3d"),n("1799")),s=n("d43b"),l=n("cca8"),d={components:{Pagination:u["a"]},props:{economicId:{type:Number}},data:function(){return{tableData:[],searchKey:"",basicInfo:{id:1,groupCode:"323232",groupName:"张家口",legal:"酷酷酷"},res:{},pageInfo:{pageNum:1,pageSize:10,total:0,current:1}}},created:function(){var t=this;this.searchList(),Object(l["c"])({economicGroupId:this.economicId}).then((function(e){t.basicInfo=e.data}))},methods:{addShareholder:function(t){this.$router.push({path:"/stock/share-holder/add",query:{id:this.economicId}})},goDetail:function(t){this.$router.push({path:"/stock/share-holder/detail",query:{id:this.economicId,stockRightId:t}})},getSummaries:function(t){var e=this,n=t.columns,a=(t.data,[]);return n.forEach((function(t,n){0!==n?(1===n&&(a[n]="股东共"+e.res.shareholderTotalCount+"名"),4===n&&(a[n]=e.res.stockRightTotalCount+".00"),5===n&&(a[n]=e.res.stockRightTotalAmount+".00")):a[n]="合计"})),a},searchList:function(){var t=this,e={economicGroupId:this.economicId,pageNum:this.pageInfo.pageNum,pageSize:this.pageInfo.pageSize,keyword:this.searchKey};Object(s["j"])(e).then((function(e){console.log(e),t.tableData=e.data.shareholderInfos,t.pageInfo.total=e.data.total,t.res=e.data}))},handlePageChange:function(t){this.pageInfo.pageNum=t,this.searchList()},download:function(){Object(s["h"])({economicGroupId:this.economicId}).then((function(t){var e=document.createElement("a"),n=window.URL.createObjectURL(t);e.href=n,e.download="股东信息.xls",e.click()}))}}},h=d,p=(n("eea8"),n("7038"),n("2877")),f=Object(p["a"])(h,c,i,!1,null,"4465d989",null),m=f.exports,b={components:{AreaSelector:r["a"],Index:m},data:function(){return{areaList:[],economicGroupInfos:[],activeName:""}},methods:{areaChange:function(t){var e=this;this.areaList=t,Object(l["b"])({villageId:this.areaList[1].value}).then((function(t){console.log(t),e.economicGroupInfos=t.data.economicGroupInfos,e.activeName=e.economicGroupInfos.length?e.economicGroupInfos[0].id+"":""}))},handleClick:function(){}}},g=b,v=(n("9811"),Object(p["a"])(g,a,o,!1,null,"595e9cce",null));e["default"]=v.exports},9811:function(t,e,n){"use strict";var a=n("680c"),o=n.n(a);o.a},b632:function(t,e,n){},d43b:function(t,e,n){"use strict";n.d(e,"j",(function(){return o})),n.d(e,"i",(function(){return r})),n.d(e,"h",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"k",(function(){return u})),n.d(e,"u",(function(){return s})),n.d(e,"q",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"f",(function(){return h})),n.d(e,"m",(function(){return p})),n.d(e,"n",(function(){return f})),n.d(e,"p",(function(){return m})),n.d(e,"o",(function(){return b})),n.d(e,"r",(function(){return g})),n.d(e,"s",(function(){return v})),n.d(e,"l",(function(){return y})),n.d(e,"v",(function(){return I})),n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return k})),n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return C})),n.d(e,"t",(function(){return _}));var a=n("b775");function o(t){return Object(a["a"])({url:"/v1/shareholder/search",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/v1/shareholder/detail",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/v1/shareholder/download",method:"get",params:t,responseType:"blob"})}function i(t){return Object(a["a"])({url:"/v1/shareholder/create",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/v1/stockRight/history",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/v1/stockRightType/query",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/v1/settleType/query",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/v1/dealType/query",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/v1/stockRight/pledge",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/v1/pledge/list",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/v1/pledge/release",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/v1/stockRight/add",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/v1/stockRight/reduce",method:"post",data:t})}function g(t){return Object(a["a"])({url:"/v1/shareholderInfo/query",method:"post",data:t})}function v(t){return Object(a["a"])({url:"/v1/shareholder/query",method:"post",data:t})}function y(t){return Object(a["a"])({url:"/v1/otherShareholder/query",method:"post",data:t})}function I(t){return Object(a["a"])({url:"/v1/stockRight/transform",method:"post",data:t})}function j(t){return Object(a["a"])({url:"/v1/dividend/query",method:"post",data:t})}function k(t){return Object(a["a"])({url:"/v1/dividendRecord/query",method:"post",data:t})}function O(t){return Object(a["a"])({url:"/v1/dividend/add",method:"post",data:t})}function C(t){return Object(a["a"])({url:"/v1/dividend/detail",method:"post",data:t})}function _(t){return Object(a["a"])({url:"/v1/shareholder/import",method:"post",data:t})}},eea8:function(t,e,n){"use strict";var a=n("b632"),o=n.n(a);o.a}}]);