(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ecd2afb"],{1799:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{overflow:"hidden"}},[n("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"total, prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage},on:{"current-change":function(e){return t.$emit("on-change",e)},"size-change":function(e){return t.$emit("on-size-change",e)},"prev-click":function(e){return t.$emit("on-change",e)},"next-click":function(e){return t.$emit("on-change",e)}}})],1)},i=[],c=(n("a9e3"),{props:{total:{type:Number,default:0},pageSize:{type:Number,default:10},currentPage:{type:Number,default:1}}}),s=c,r=n("2877"),u=Object(r["a"])(s,a,i,!1,null,null,null);e["a"]=u.exports},2251:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("el-tabs",{attrs:{"tab-position":"left"},on:{"tab-click":t.handleMenuClick},model:{value:t.activeMenu,callback:function(e){t.activeMenu=e},expression:"activeMenu"}},t._l(t.menuList,(function(t,e){return n("el-tab-pane",{key:e,attrs:{name:t.id+"",label:t.name}})})),1)],1)},i=[],c=(n("4de4"),n("b0c0"),n("1f27")),s={props:["id","activeMenu"],data:function(){return{menuList:[]}},mounted:function(){var t=this;Object(c["a"])({parentId:this.id}).then((function(e){t.menuList=e.data.categoryList,t.menuList.length&&t.$emit("getList",t.menuList[0].id)}))},methods:{handleMenuClick:function(){this.$emit("getList",this.activeMenu)}},watch:{activeMenu:{handler:function(t,e){this.$emit("getListName",this.menuList.filter((function(e){return e.id==t}))[0].name)}}}},r=s,u=(n("500a"),n("2877")),o=Object(u["a"])(r,a,i,!1,null,null,null);e["a"]=o.exports},2423:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));var a=n("b775");function i(t){return Object(a["a"])({url:"/v1/news/detail",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/v1/news/query",method:"post",data:t})}},"500a":function(t,e,n){"use strict";var a=n("975f"),i=n.n(a);i.a},"66ff":function(t,e,n){},"8d05":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-page"},[n("div",{staticClass:"flex justify-content-space-between"},[n("div",{staticStyle:{width:"300px"}},[n("div",{staticClass:"flex align-items-center"},[n("p",[t._v("当前位置：")]),n("breadcrumb")],1),n("el-divider",{attrs:{"content-position":"left"}},[t._v("政策法规")]),n("news-menu",{attrs:{id:t.$route.meta.id,"active-menu":t.activeMenu+""},on:{getList:function(e){t.activeMenu=e,t.getNewsList()},initMenu:function(e){return t.activeMenu=e},getListName:function(e){return t.activeName=e}}})],1),n("div",{staticStyle:{"margin-left":"20px",width:"100%"}},[n("el-card",[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t.activeName?n("span",[t._v(t._s(t.activeName))]):t._e()]),n("div",{staticClass:"flex"},[n("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入标题"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),n("el-button",{attrs:{type:"primary"},on:{click:t.getNewsList}},[t._v("搜索")])],1),n("ul",{staticStyle:{"margin-top":"30px","margin-left":"20px"}},t._l(t.tableData,(function(e,a){return n("li",{key:a},[n("div",{staticClass:"flex justify-content-space-between"},[n("a",{attrs:{href:"#"},on:{click:function(n){return t.gotoDetail(e.newsId)}}},[t._v(t._s(e.newsName))]),n("p",{staticStyle:{margin:"0",color:"#666"}},[t._v(t._s(e.publishDate))])]),n("el-divider")],1)})),0),n("pagination",{attrs:{total:t.pageInfo.total,"current-page":t.pageInfo.pageNum},on:{"on-change":function(e){return t.handlePageChange(e)}}})],1)],1)])])},i=[],c=n("6350"),s=n("1799"),r=n("2251"),u=n("2423"),o={components:{Pagination:s["a"],Breadcrumb:c["a"],NewsMenu:r["a"]},data:function(){return{searchKey:"",tableData:[],activeMenu:null,activeName:"",pageInfo:{pageNum:1,pageSize:10,total:0,current:1}}},methods:{gotoDetail:function(t){window.open("/news/#/article?id="+t)},handlePageChange:function(t){this.pageInfo.pageNum=t,this.getNewsList()},getNewsList:function(){var t=this;Object(u["b"])({categoryId:this.activeMenu,pageNum:this.pageInfo.pageNum,keyword:this.searchKey}).then((function(e){t.tableData=e.data.newsInfoList,t.pageInfo.total=e.data.total}))}}},l=o,f=(n("9d71"),n("2877")),d=Object(f["a"])(l,a,i,!1,null,"35d1387f",null);e["default"]=d.exports},"975f":function(t,e,n){},"9d71":function(t,e,n){"use strict";var a=n("66ff"),i=n.n(a);i.a}}]);