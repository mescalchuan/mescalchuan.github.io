(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbd32a5a"],{"1c43":function(t,e,a){},2934:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return c}));var n=a("b775");function o(){return Object(n["a"])({url:"/api/v1/village/list",method:"post"})}function r(){return Object(n["a"])({url:"/api/v1/village/loadAll",method:"post"})}function i(){return Object(n["a"])({url:"/api/v1/position/query",method:"post"})}function c(t){return Object(n["a"])({url:"/api/v1/villageGroup/list",method:"post",data:t})}},"306c":function(t,e,a){},7038:function(t,e,a){"use strict";var n=a("1c43"),o=a.n(n);o.a},"7b3d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stock-page"},[a("area-selector",{on:{areaChange:t.areaChange}}),t.economicGroupInfos.length?a("el-card",{staticStyle:{"margin-top":"10px"}},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.economicGroupInfos,(function(e){return a("el-tab-pane",{key:e.id,attrs:{label:e.groupName,name:String(e.id)}},[t.activeName===String(e.id)?a("Index",{attrs:{"economic-id":e.id}}):t._e()],1)})),1)],1):t._e()],1)},o=[],r=a("7715"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stock-page"},[a("div",{staticClass:"stock-content"},[a("div",{staticClass:"option-box"},[a("div",{staticClass:"search-box"},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"可根据股东户号、股东姓名、股权证号、身份证号码搜索",clearable:""},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.searchList}},[t._v("搜索"),a("i",{staticClass:"el-icon-search el-icon--right"})])],1),t.$hasAuth(46)?a("el-button",{attrs:{icon:"el-icon-download",type:"primary"},on:{click:t.download}},[t._v("下载信息")]):t._e()],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-tag",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"success",size:"mini"}},[t._v(t._s(t.basicInfo.groupName))]),a("div",[a("span",[t._v("编号： "+t._s(t.basicInfo.id))]),a("span",[t._v("组织代码: "+t._s(t.basicInfo.groupCode))]),a("span",[t._v("组织名称: "+t._s(t.basicInfo.groupName))]),a("span",[t._v("法人: "+t._s(t.basicInfo.legal))]),t.$hasAuth(24)?a("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-plus",type:"success",size:"small"},on:{click:t.addShareholder}},[t._v("新增股东")]):t._e()],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"table-header-color",data:t.tableData,border:"","show-summary":"","summary-method":t.getSummaries}},[a("el-table-column",{attrs:{prop:"shareholderFamilyNo",label:"股东户号",width:"120"}}),a("el-table-column",{attrs:{prop:"shareholderName",label:"股东"}}),a("el-table-column",{attrs:{prop:"stockRightNo",label:"股权证号"}}),a("el-table-column",{attrs:{prop:"idCard",label:"身份证号"}}),a("el-table-column",{attrs:{prop:"stockRightCount",label:"综合股权份额"}}),a("el-table-column",{attrs:{prop:"stockRightAmount",label:"综合股权价值"}}),a("el-table-column",{attrs:{prop:"pledgeStockRightCount",label:"质押股权份额"}}),a("el-table-column",{attrs:{prop:"pledgeStockRightAmount",label:"质押股权价值"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.$hasAuth(25)?a("el-button",{attrs:{icon:"el-icon-warning",type:"warning",size:"small"},on:{click:function(a){return t.goDetail(e.row.stockRightId)}}},[t._v("详情")]):t._e()]}}])})],1),a("pagination",{attrs:{total:t.pageInfo.total,"current-page":t.pageInfo.pageNum},on:{"on-change":function(e){return t.handlePageChange(e)}}})],1)],1)])},c=[],u=(a("4160"),a("a9e3"),a("159b"),a("1799")),s=a("d43b"),l=a("cca8"),d={components:{Pagination:u["a"]},props:{economicId:{type:Number}},data:function(){return{tableData:[],searchKey:"",basicInfo:{id:1,groupCode:"323232",groupName:"张家口",legal:"酷酷酷"},res:{},pageInfo:{pageNum:1,pageSize:10,total:0,current:1}}},created:function(){var t=this;this.searchList(),Object(l["c"])({economicGroupId:this.economicId}).then((function(e){t.basicInfo=e.data}))},methods:{addShareholder:function(t){this.$router.push({path:"/stock/share-holder/add",query:{id:this.economicId}})},goDetail:function(t){this.$router.push({path:"/stock/share-holder/detail",query:{id:this.economicId,stockRightId:t}})},getSummaries:function(t){var e=this,a=t.columns,n=(t.data,[]);return a.forEach((function(t,a){0!==a?(1===a&&(n[a]="股东共"+e.res.shareholderTotalCount+"名"),4===a&&(n[a]=e.res.stockRightTotalCount+".00"),5===a&&(n[a]=e.res.stockRightTotalAmount+".00")):n[a]="合计"})),n},searchList:function(){var t=this,e={economicGroupId:this.economicId,pageNum:this.pageInfo.pageNum,pageSize:this.pageInfo.pageSize,keyword:this.searchKey};Object(s["i"])(e).then((function(e){t.tableData=e.data.shareholderInfos,t.pageInfo.total=e.data.total,t.res=e.data}))},handlePageChange:function(t){this.pageInfo.pageNum=t,this.searchList()},download:function(){window.open("/api/v1/shareholder/download?economicGroupId="+this.economicId)}}},p=d,h=(a("fef0"),a("7038"),a("2877")),f=Object(h["a"])(p,i,c,!1,null,"7622214c",null),m=f.exports,b={components:{AreaSelector:r["a"],Index:m},data:function(){return{areaList:[],economicGroupInfos:[],activeName:""}},methods:{areaChange:function(t){var e=this;this.areaList=t,Object(l["b"])({villageId:this.areaList[1].value}).then((function(t){e.economicGroupInfos=t.data.economicGroupInfos,e.activeName=e.economicGroupInfos.length?e.economicGroupInfos[0].id+"":""}))},handleClick:function(){}}},g=b,v=(a("dfdc"),Object(h["a"])(g,n,o,!1,null,"3e8f545c",null));e["default"]=v.exports},"84f2":function(t,e,a){},d43b:function(t,e,a){"use strict";a.d(e,"i",(function(){return o})),a.d(e,"h",(function(){return r})),a.d(e,"e",(function(){return i})),a.d(e,"j",(function(){return c})),a.d(e,"t",(function(){return u})),a.d(e,"p",(function(){return s})),a.d(e,"g",(function(){return l})),a.d(e,"f",(function(){return d})),a.d(e,"l",(function(){return p})),a.d(e,"m",(function(){return h})),a.d(e,"o",(function(){return f})),a.d(e,"n",(function(){return m})),a.d(e,"q",(function(){return b})),a.d(e,"r",(function(){return g})),a.d(e,"k",(function(){return v})),a.d(e,"u",(function(){return y})),a.d(e,"c",(function(){return I})),a.d(e,"d",(function(){return k})),a.d(e,"a",(function(){return j})),a.d(e,"b",(function(){return O})),a.d(e,"s",(function(){return _}));var n=a("b775");function o(t){return Object(n["a"])({url:"/api/v1/shareholder/search",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/api/v1/shareholder/detail",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/api/v1/shareholder/create",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/api/v1/stockRight/history",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/api/v1/stockRightType/query",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/api/v1/settleType/query",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/api/v1/dealType/query",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/api/v1/stockRight/pledge",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/api/v1/pledge/list",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/api/v1/pledge/release",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/api/v1/stockRight/add",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/api/v1/stockRight/reduce",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/api/v1/shareholderInfo/query",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/api/v1/shareholder/query",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/api/v1/otherShareholder/query",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/api/v1/stockRight/transform",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/api/v1/dividend/query",method:"post",data:t})}function k(t){return Object(n["a"])({url:"/api/v1/dividendRecord/query",method:"post",data:t})}function j(t){return Object(n["a"])({url:"/api/v1/dividend/add",method:"post",data:t})}function O(t){return Object(n["a"])({url:"/api/v1/dividend/detail",method:"post",data:t})}function _(t){return Object(n["a"])({url:"/api/v1/shareholder/import",method:"post",data:t})}},dfdc:function(t,e,a){"use strict";var n=a("306c"),o=a.n(n);o.a},fef0:function(t,e,a){"use strict";var n=a("84f2"),o=a.n(n);o.a}}]);