(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38f9de5a","chunk-31e02825"],{"0016":function(t,e,a){},1877:function(t,e,a){"use strict";var o=a("438d"),n=a.n(o);n.a},"1da5":function(t,e,a){},2934:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return c}));var o=a("b775");function n(){return Object(o["a"])({url:"/api/v1/village/list",method:"post"})}function r(){return Object(o["a"])({url:"/api/v1/village/loadAll",method:"post"})}function i(){return Object(o["a"])({url:"/api/v1/position/query",method:"post"})}function c(t){return Object(o["a"])({url:"/api/v1/villageGroup/list",method:"post",data:t})}},3795:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bonus-page"},[t.isStatic?t._e():a("area-selector",{on:{areaChange:t.areaChange}}),a("el-card",{style:{padding:t.isStatic?"10px":0,marginTop:"10px"}},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.economicGroupInfos,(function(e){return a("el-tab-pane",{key:e.id,attrs:{label:e.groupName,name:String(e.id)}},[t.activeName===String(e.id)?a("Index",{attrs:{"economic-id":e.id,"is-static":t.isStatic,from:t.from}}):t._e()],1)})),1)],1)],1)},n=[],r=(a("a9e3"),a("7715")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bonus-page"},[a("div",{staticClass:"bonus-content"},[t.isStatic?t._e():a("div",{staticClass:"option-box"},[a("div",{staticClass:"search-box"},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"可根据股东户号、股东姓名、股权证号、身份证号码搜索",clearable:""},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),a("el-button",{attrs:{type:"primary"}},[t._v("搜索"),a("i",{staticClass:"el-icon-search el-icon--right"})])],1)]),t.isStatic?t._e():a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("组织代码: "+t._s(t.basicInfo.groupCode))]),a("span",[t._v("组织名称: "+t._s(t.basicInfo.groupName))]),a("span",[t._v("法人: "+t._s(t.basicInfo.legal))]),a("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-plus",type:"success",size:"small"},on:{click:t.addShareholder}},[t._v("分红")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"table-header-color",data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"shareholderCount",label:"股东数量"}}),a("el-table-column",{attrs:{prop:"stockRightCount",label:"综合股权数量"}}),a("el-table-column",{attrs:{prop:"frozenStockRightCount",label:"综合冻结股权数量"}}),a("el-table-column",{attrs:{prop:"stockRightTotalAmount",label:"综合股权价值"}}),a("el-table-column",{attrs:{prop:"frozenStockRightTotalAmount",label:"冻结股权价值"}})],1)],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("组织代码: "+t._s(t.basicInfo.groupCode))]),a("span",[t._v("组织名称: "+t._s(t.basicInfo.groupName))]),a("span",[t._v("法人: "+t._s(t.basicInfo.legal))]),t.isStatic?t._e():a("el-tag",{attrs:{type:"success",size:"mini"}},[t._v("分红记录")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"table-header-color",data:t.history,border:""}},[a("el-table-column",{attrs:{prop:"dividendYear",label:"分红年份"}}),a("el-table-column",{attrs:{prop:"dividendTime",label:"\t分红日期"}}),a("el-table-column",{attrs:{prop:"dividendAmount",label:"分红金额"}}),a("el-table-column",{attrs:{prop:"shareholderCount",label:"分红股东数量"}}),a("el-table-column",{attrs:{prop:"perStockRightMoney",label:"每股分红金额"}}),a("el-table-column",{attrs:{prop:"description",label:"备注信息",width:"200px"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{icon:"el-icon-warning",type:"warning",size:"small"},on:{click:function(a){return t.goDetail(e.row.dividendId)}}},[t._v("详情")])]}}])})],1),a("pagination",{attrs:{total:t.pageInfo.total,"current-page":t.pageInfo.pageNum},on:{"on-change":function(e){return t.handlePageChange(e)}}})],1)],1)])},c=[],l=a("1799"),s=a("cca8"),u=a("d43b"),d={components:{Pagination:l["a"]},props:{economicId:{type:Number},isStatic:{type:Boolean,default:!1},from:{type:String}},data:function(){return{tableData:[],history:[],searchKey:"",basicInfo:{},pageInfo:{pageNum:1,pageSize:10,total:0,current:1}}},created:function(){var t=this;Object(s["c"])({economicGroupId:this.economicId}).then((function(e){t.basicInfo=e.data})),this.searchRecord(),this.bonusQuery()},methods:{searchRecord:function(){var t=this;Object(u["d"])({economicGroupId:this.economicId,pageNum:this.pageInfo.pageNum,pageSize:this.pageInfo.pageSize,keyword:this.searchKey}).then((function(e){t.history=e.data.dividendInfos,t.pageInfo.total=e.data.total}))},bonusQuery:function(){var t=this;Object(u["c"])({economicGroupId:this.economicId,pageNum:this.pageInfo.pageNum,pageSize:this.pageInfo.pageSize}).then((function(e){t.tableData=[{stockRightCount:e.data.stockRightCount,stockRightTotalAmount:e.data.stockRightTotalAmount,frozenStockRightCount:e.data.frozenStockRightCount,frozenStockRightTotalAmount:e.data.frozenStockRightTotalAmount,shareholderCount:e.data.shareholderCount}]}))},addShareholder:function(t){this.$router.push({path:"/stock/bouns-admin/add",query:{id:this.economicId}})},goDetail:function(t){this.$router.push({path:"/stock/bouns-admin/detail",query:{id:this.economicId,dividendId:t,from:this.from?"town":"bonus"}})},handlePageChange:function(t){this.pageInfo.pageNum=t,this.searchRecord()}}},p=d,f=(a("b7c2"),a("beac"),a("2877")),h=Object(f["a"])(p,i,c,!1,null,"51c220d8",null),b=h.exports,m={components:{AreaSelector:r["a"],Index:b},props:{isStatic:{type:Boolean,default:!1},villageId:{type:Number},from:{type:String}},data:function(){return{areaList:[],economicGroupInfos:[],activeName:""}},methods:{areaChange:function(t){var e=this;this.areaList=t,Object(s["b"])({villageId:this.areaList[1].value}).then((function(t){e.economicGroupInfos=t.data.economicGroupInfos,e.activeName=e.economicGroupInfos.length?e.economicGroupInfos[0].id+"":""}))},handleClick:function(){}},created:function(){},watch:{villageId:{handler:function(t,e){var a=this;this.isStatic&&t!==e&&Object(s["b"])({villageId:t}).then((function(t){a.economicGroupInfos=t.data.economicGroupInfos,a.activeName=a.economicGroupInfos.length?a.economicGroupInfos[0].id+"":""}))},immediate:!0}}},g=m,v=(a("e894"),Object(f["a"])(g,o,n,!1,null,"66170d34",null));e["default"]=v.exports},"438d":function(t,e,a){},"48fb":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return i}));var o=a("b775");function n(t){return Object(o["a"])({url:"/api/v1/statistics/village",method:"post",data:t})}function r(t){return Object(o["a"])({url:"/api/v1/statistics/township",method:"post",data:t})}function i(t){return Object(o["a"])({url:"/api/v1/statistics/county",method:"post",data:t})}},"73f2":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"static-page"},[a("area-selector",{on:{areaChange:t.areaChange}}),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-tag",{attrs:{type:"success",size:"mini"}},[t._v(t._s(t.areaList.length?t.areaList[1].name:0))]),a("span",[t._v("综合数据")])],1),a("div",{staticClass:"top-table"},[a("el-table",{staticClass:"none-line",staticStyle:{flex:"2"},attrs:{"header-cell-class-name":"table-header-color",data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"registerFamilyCount",label:"在册农户（家庭)",width:"130px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticStyle:{color:"green"}},[t._v(t._s(e.row.registerFamilyCount)+"户")])]}}])}),a("el-table-column",{attrs:{prop:"registerMemberCount",label:"在册成员"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticStyle:{color:"green"}},[t._v(t._s(e.row.registerMemberCount)+"名")])]}}])}),a("el-table-column",{attrs:{prop:"joinStockCount",label:"入股成员"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticStyle:{color:"green"}},[t._v(t._s(e.row.joinStockCount)+"名("+t._s((e.row.joinStockCount/e.row.registerMemberCount*100).toFixed(2))+"%)")])]}}])}),a("el-table-column",{attrs:{prop:"economicGroupCount",label:"经济组织"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticStyle:{color:"green"}},[t._v(t._s(e.row.economicGroupCount)+"个")])]}}])}),a("el-table-column",{attrs:{prop:"totalAmount",label:"经济组织资产总额",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticStyle:{color:"green"}},[t._v("￥"+t._s(e.row.totalAmount))])]}}])}),a("el-table-column",{attrs:{prop:"allocatedAmount",label:"已分配/未分配"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticStyle:{color:"green"}},[t._v("￥"+t._s(e.row.allocatedAmount)+"/￥"+t._s(e.row.unAllocatedAmount))])]}}])})],1),a("el-table",{staticStyle:{flex:"1","margin-left":"20px"},attrs:{"header-cell-class-name":"table-header-color",data:t.stockRightInfoList,border:""}},[a("el-table-column",{attrs:{prop:"type",label:"股权类型"}}),a("el-table-column",{attrs:{prop:"count",label:"配股数量"}})],1)],1),t.areaList.length>1?a("bonus-manage",{attrs:{"is-static":"","village-id":t.areaList[1].value,from:"/report/town"}}):t._e()],1)],1)},n=[],r=a("1799"),i=a("7715"),c=a("3795"),l=(a("2934"),a("48fb")),s={name:"OrganizationDetail",components:{Pagination:r["a"],AreaSelector:i["a"],BonusManage:c["default"]},data:function(){return{showChart:!1,areaList:[],tableData:[],stockRightInfoList:[]}},methods:{areaChange:function(t){var e=this;this.areaList=t,Object(l["c"])({villageId:this.areaList[1].value}).then((function(t){e.stockRightInfoList=t.data.stockRightInfoList,e.tableData=[{allocatedAmount:t.data.allocatedAmount,economicGroupCount:t.data.economicGroupCount,joinStockCount:t.data.joinStockCount,registerFamilyCount:t.data.registerFamilyCount,registerMemberCount:t.data.registerMemberCount,totalAmount:t.data.totalAmount,unAllocatedAmount:t.data.unAllocatedAmount}]}))}}},u=s,d=(a("1877"),a("7bbf"),a("2877")),p=Object(d["a"])(u,o,n,!1,null,null,null);e["default"]=p.exports},"779c":function(t,e,a){},"7bbf":function(t,e,a){"use strict";var o=a("bb2e"),n=a.n(o);n.a},b7c2:function(t,e,a){"use strict";var o=a("779c"),n=a.n(o);n.a},bb2e:function(t,e,a){},beac:function(t,e,a){"use strict";var o=a("1da5"),n=a.n(o);n.a},d43b:function(t,e,a){"use strict";a.d(e,"i",(function(){return n})),a.d(e,"h",(function(){return r})),a.d(e,"e",(function(){return i})),a.d(e,"j",(function(){return c})),a.d(e,"t",(function(){return l})),a.d(e,"p",(function(){return s})),a.d(e,"g",(function(){return u})),a.d(e,"f",(function(){return d})),a.d(e,"l",(function(){return p})),a.d(e,"m",(function(){return f})),a.d(e,"o",(function(){return h})),a.d(e,"n",(function(){return b})),a.d(e,"q",(function(){return m})),a.d(e,"r",(function(){return g})),a.d(e,"k",(function(){return v})),a.d(e,"u",(function(){return y})),a.d(e,"c",(function(){return C})),a.d(e,"d",(function(){return S})),a.d(e,"a",(function(){return _})),a.d(e,"b",(function(){return k})),a.d(e,"s",(function(){return I}));var o=a("b775");function n(t){return Object(o["a"])({url:"/api/v1/shareholder/search",method:"post",data:t})}function r(t){return Object(o["a"])({url:"/api/v1/shareholder/detail",method:"post",data:t})}function i(t){return Object(o["a"])({url:"/api/v1/shareholder/create",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/api/v1/stockRight/history",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/api/v1/stockRightType/query",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/api/v1/settleType/query",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/api/v1/dealType/query",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/api/v1/stockRight/pledge",method:"post",data:t})}function p(t){return Object(o["a"])({url:"/api/v1/pledge/list",method:"post",data:t})}function f(t){return Object(o["a"])({url:"/api/v1/pledge/release",method:"post",data:t})}function h(t){return Object(o["a"])({url:"/api/v1/stockRight/add",method:"post",data:t})}function b(t){return Object(o["a"])({url:"/api/v1/stockRight/reduce",method:"post",data:t})}function m(t){return Object(o["a"])({url:"/api/v1/shareholderInfo/query",method:"post",data:t})}function g(t){return Object(o["a"])({url:"/api/v1/shareholder/query",method:"post",data:t})}function v(t){return Object(o["a"])({url:"/api/v1/otherShareholder/query",method:"post",data:t})}function y(t){return Object(o["a"])({url:"/api/v1/stockRight/transform",method:"post",data:t})}function C(t){return Object(o["a"])({url:"/api/v1/dividend/query",method:"post",data:t})}function S(t){return Object(o["a"])({url:"/api/v1/dividendRecord/query",method:"post",data:t})}function _(t){return Object(o["a"])({url:"/api/v1/dividend/add",method:"post",data:t})}function k(t){return Object(o["a"])({url:"/api/v1/dividend/detail",method:"post",data:t})}function I(t){return Object(o["a"])({url:"/api/v1/shareholder/import",method:"post",data:t})}},e894:function(t,e,a){"use strict";var o=a("0016"),n=a.n(o);n.a}}]);