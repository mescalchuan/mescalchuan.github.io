(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed6574f4"],{1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{overflow:"hidden"}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage},on:{"current-change":function(e){return t.$emit("on-change",e)},"size-change":function(e){return t.$emit("on-size-change",e)},"prev-click":function(e){return t.$emit("on-change",e)},"next-click":function(e){return t.$emit("on-change",e)}}})],1)},o=[],i=(a("a9e3"),{props:{total:{type:Number,default:0},pageSize:{type:Number,default:10},currentPage:{type:Number,default:1}}}),r=i,c=a("2877"),s=Object(c["a"])(r,n,o,!1,null,null,null);e["a"]=s.exports},"1c43":function(t,e,a){},"20a9":function(t,e,a){"use strict";var n=a("8d95"),o=a.n(n);o.a},2934:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return c}));var n=a("b775");function o(){return Object(n["a"])({url:"/v1/village/list",method:"post"})}function i(){return Object(n["a"])({url:"/v1/village/loadAll",method:"post"})}function r(){return Object(n["a"])({url:"/v1/position/query",method:"post"})}function c(t){return Object(n["a"])({url:"/v1/villageGroup/list",method:"post",data:t})}},"2b96":function(t,e,a){"use strict";var n=a("9ef6"),o=a.n(n);o.a},"680c":function(t,e,a){},7038:function(t,e,a){"use strict";var n=a("1c43"),o=a.n(n);o.a},7715:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("行政区域设置")]),a("div",{staticStyle:{float:"right"},on:{click:function(e){t.isFold=!t.isFold}}},[a("el-button",{staticStyle:{padding:"3px 0"},attrs:{type:"text"}},[t._v(t._s(t.isFold?"折叠":"展开"))]),a("i",{class:[t.isFold?"el-icon-caret-top":"el-icon-caret-bottom"],staticStyle:{color:"#66b1ff",cursor:"pointer"}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isFold,expression:"isFold"}],staticClass:"area-box"},[a("p",{staticClass:"tag-title top"},[t._v("乡镇")]),t._l(t.areaList,(function(e){return a("el-tag",{key:"town"+e.townshipId,class:["tag-cursor",{active:t.activeTownIndex===e.townshipId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.getTowns(e)}}},[t._v(t._s(e.townshipName)+" ")])})),t.hideVillage?t._e():a("p",{staticClass:"tag-title"},[t._v("村")]),t.hideVillage?t._e():a("span",t._l(t.currentTownList,(function(e){return a("el-tag",{key:"village"+e.villageId,class:["tag-cursor",{active:t.activeVillageIndex===e.villageId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.selectTown(e)}}},[t._v(t._s(e.villageName)+" ")])})),1)],2)])},o=[],i=(a("d81d"),a("b0c0"),a("2934")),r={data:function(){return{isFold:!1,areaList:[],currentTownList:[],activeTownIndex:0,activeTownName:"",activeVillageIndex:0,activeVillageName:""}},props:{initFold:{type:Boolean,default:!0},hideVillage:{type:Boolean,default:!1}},created:function(){this.isFold=this.initFold;var t=localStorage.getItem("tv");t&&(t=JSON.parse(t),this.activeTownIndex=t[0].value,this.activeTownName=t[0].name,this.activeVillageIndex=t[1].value,this.activeVillageName=t[1].name),this.getVillageList(t)},methods:{goBack:function(){this.$router.go(-1)},getTowns:function(t){this.currentTownList=t&&t.villageInfos||[],this.init(t),this.areaChange()},selectTown:function(t){this.activeVillageIndex=t.villageId,this.activeVillageName=t.villageName,this.areaChange(),console.log(this.activeVillageIndex)},getVillageList:function(t){var e=this;Object(i["b"])().then((function(a){e.areaList=a.data.townshipInfos||[];var n=0;t&&e.areaList.map((function(t,a){t.townshipId===e.activeTownIndex&&(n=a)})),e.init(e.areaList[n],t),e.areaChange()}))},areaChange:function(t){var e=[{name:this.activeTownName,value:this.activeTownIndex},{name:this.activeVillageName,value:this.activeVillageIndex}];localStorage.setItem("tv",JSON.stringify(e)),this.$emit("areaChange",e)},init:function(t,e){var a=this;this.activeTownIndex=t.townshipId,this.currentTownList=t&&t.villageInfos||[];var n=0;e&&this.currentTownList.map((function(t,e){t.villageId===a.activeVillageIndex&&(n=e)})),this.activeVillageIndex=this.currentTownList[n].villageId,this.activeTownName=t.townshipName,this.activeVillageName=this.currentTownList[n].villageName}}},c=r,s=(a("20a9"),a("2b96"),a("2877")),l=Object(s["a"])(c,n,o,!1,null,"4813f05a",null);e["a"]=l.exports},"7b3d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stock-page"},[a("area-selector",{on:{areaChange:t.areaChange}}),t.economicGroupInfos.length?a("el-card",{staticStyle:{"margin-top":"10px"}},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.economicGroupInfos,(function(e){return a("el-tab-pane",{key:e.id,attrs:{label:e.groupName,name:String(e.id)}},[t.activeName===String(e.id)?a("Index",{attrs:{"economic-id":e.id}}):t._e()],1)})),1)],1):t._e()],1)},o=[],i=a("7715"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stock-page"},[a("div",{staticClass:"stock-content"},[a("div",{staticClass:"option-box"},[a("div",{staticClass:"search-box"},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.searchList}},[t._v("搜索"),a("i",{staticClass:"el-icon-search el-icon--right"})])],1),a("el-button",{attrs:{icon:"el-icon-download",type:"primary"},on:{click:t.download}},[t._v("下载信息")])],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-tag",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"success",size:"mini"}},[t._v(t._s(t.basicInfo.groupName))]),a("div",[a("span",[t._v("编号： "+t._s(t.basicInfo.id))]),a("span",[t._v("组织代码: "+t._s(t.basicInfo.groupCode))]),a("span",[t._v("组织名称: "+t._s(t.basicInfo.groupName))]),a("span",[t._v("法人: "+t._s(t.basicInfo.legal))]),a("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-plus",type:"success",size:"small"},on:{click:t.addShareholder}},[t._v("新增股东")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"table-header-color",data:t.tableData,border:"","show-summary":"","summary-method":t.getSummaries}},[a("el-table-column",{attrs:{prop:"shareholderFamilyNo",label:"股东户号",width:"120"}}),a("el-table-column",{attrs:{prop:"shareholderName",label:"股东"}}),a("el-table-column",{attrs:{prop:"stockRightNo",label:"股权证号"}}),a("el-table-column",{attrs:{prop:"idCard",label:"身份证号"}}),a("el-table-column",{attrs:{prop:"stockRightCount",label:"综合股权份额"}}),a("el-table-column",{attrs:{prop:"stockRightAmount",label:"综合股权价值"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{icon:"el-icon-warning",type:"warning",size:"small"},on:{click:function(a){return t.goDetail(e.row.stockRightId)}}},[t._v("详情")])]}}])})],1),a("pagination",{attrs:{total:t.pageInfo.total,"current-page":t.pageInfo.pageNum},on:{"on-change":function(e){return t.handlePageChange(e)}}})],1)],1)])},c=[],s=(a("4160"),a("a9e3"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2b3d"),a("1799")),l=a("d43b"),u=a("cca8"),d={components:{Pagination:s["a"]},props:{economicId:{type:Number}},data:function(){return{tableData:[],searchKey:"",basicInfo:{id:1,groupCode:"323232",groupName:"张家口",legal:"酷酷酷"},res:{},pageInfo:{pageNum:1,pageSize:10,total:0,current:1}}},created:function(){var t=this;this.searchList(),Object(u["c"])({economicGroupId:this.economicId}).then((function(e){t.basicInfo=e.data}))},methods:{addShareholder:function(t){this.$router.push({path:"/stock/share-holder/add",query:{id:this.economicId}})},goDetail:function(t){this.$router.push({path:"/stock/share-holder/detail",query:{id:this.economicId,stockRightId:t}})},getSummaries:function(t){var e=this,a=t.columns,n=(t.data,[]);return a.forEach((function(t,a){0!==a?(1===a&&(n[a]="股东共"+e.res.shareholderTotalCount+"名"),4===a&&(n[a]=e.res.stockRightTotalCount+".00"),5===a&&(n[a]=e.res.stockRightTotalAmount+".00")):n[a]="合计"})),n},searchList:function(){var t=this,e={economicGroupId:this.economicId,pageNum:this.pageInfo.pageNum,pageSize:this.pageInfo.pageSize,keyword:this.searchKey};Object(l["j"])(e).then((function(e){console.log(e),t.tableData=e.data.shareholderInfos,t.pageInfo.total=e.data.total,t.res=e.data}))},handlePageChange:function(t){this.pageInfo.pageNum=t,this.searchList()},download:function(){Object(l["h"])({economicGroupId:this.economicId}).then((function(t){var e=document.createElement("a"),a=window.URL.createObjectURL(t);e.href=a,e.download="股东信息.xls",e.click()}))}}},h=d,f=(a("d69c"),a("7038"),a("2877")),p=Object(f["a"])(h,r,c,!1,null,"4034a327",null),g=p.exports,v={components:{AreaSelector:i["a"],Index:g},data:function(){return{areaList:[],economicGroupInfos:[],activeName:""}},methods:{areaChange:function(t){var e=this;this.areaList=t,Object(u["b"])({villageId:this.areaList[1].value}).then((function(t){console.log(t),e.economicGroupInfos=t.data.economicGroupInfos,e.activeName=e.economicGroupInfos.length?e.economicGroupInfos[0].id+"":""}))},handleClick:function(){}}},m=v,b=(a("9811"),Object(f["a"])(m,n,o,!1,null,"595e9cce",null));e["default"]=b.exports},"8d95":function(t,e,a){},9811:function(t,e,a){"use strict";var n=a("680c"),o=a.n(n);o.a},"9cf6":function(t,e,a){},"9ef6":function(t,e,a){},d43b:function(t,e,a){"use strict";a.d(e,"j",(function(){return o})),a.d(e,"i",(function(){return i})),a.d(e,"h",(function(){return r})),a.d(e,"e",(function(){return c})),a.d(e,"k",(function(){return s})),a.d(e,"u",(function(){return l})),a.d(e,"q",(function(){return u})),a.d(e,"g",(function(){return d})),a.d(e,"f",(function(){return h})),a.d(e,"m",(function(){return f})),a.d(e,"n",(function(){return p})),a.d(e,"p",(function(){return g})),a.d(e,"o",(function(){return v})),a.d(e,"r",(function(){return m})),a.d(e,"s",(function(){return b})),a.d(e,"l",(function(){return I})),a.d(e,"v",(function(){return y})),a.d(e,"c",(function(){return w})),a.d(e,"d",(function(){return k})),a.d(e,"a",(function(){return N})),a.d(e,"b",(function(){return _})),a.d(e,"t",(function(){return j}));var n=a("b775");function o(t){return Object(n["a"])({url:"/v1/shareholder/search",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/v1/shareholder/detail",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/v1/shareholder/download",method:"get",params:t,responseType:"blob"})}function c(t){return Object(n["a"])({url:"/v1/shareholder/create",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/v1/stockRight/history",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/v1/stockRightType/query",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/v1/settleType/query",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/v1/dealType/query",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/v1/stockRight/pledge",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/v1/pledge/list",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/v1/pledge/release",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/v1/stockRight/add",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/v1/stockRight/reduce",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/v1/shareholderInfo/query",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/v1/shareholder/query",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/v1/otherShareholder/query",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/v1/stockRight/transform",method:"post",data:t})}function w(t){return Object(n["a"])({url:"/v1/dividend/query",method:"post",data:t})}function k(t){return Object(n["a"])({url:"/v1/dividendRecord/query",method:"post",data:t})}function N(t){return Object(n["a"])({url:"/v1/dividend/add",method:"post",data:t})}function _(t){return Object(n["a"])({url:"/v1/dividend/detail",method:"post",data:t})}function j(t){return Object(n["a"])({url:"/v1/shareholder/import",method:"post",data:t})}},d69c:function(t,e,a){"use strict";var n=a("9cf6"),o=a.n(n);o.a}}]);