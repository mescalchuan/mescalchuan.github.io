(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d6d9e24"],{"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("a630"),a("fb6a"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var n=a("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n["a"])(t,e):void 0}}},1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{overflow:"hidden"}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage},on:{"current-change":function(e){return t.$emit("on-change",e)},"size-change":function(e){return t.$emit("on-size-change",e)},"prev-click":function(e){return t.$emit("on-change",e)},"next-click":function(e){return t.$emit("on-change",e)}}})],1)},i=[],r=(a("a9e3"),{props:{total:{type:Number,default:0},pageSize:{type:Number,default:10},currentPage:{type:Number,default:1}}}),l=r,o=a("2877"),s=Object(o["a"])(l,n,i,!1,null,null,null);e["a"]=s.exports},1877:function(t,e,a){"use strict";var n=a("438d"),i=a.n(n);i.a},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("6b75");function i(t){if(Array.isArray(t))return Object(n["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var l=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return i(t)||r(t)||Object(l["a"])(t)||o()}},2934:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return o}));var n=a("b775");function i(){return Object(n["a"])({url:"/v1/village/list",method:"post"})}function r(){return Object(n["a"])({url:"/v1/village/loadAll",method:"post"})}function l(){return Object(n["a"])({url:"/v1/position/query",method:"post"})}function o(t){return Object(n["a"])({url:"/v1/villageGroup/list",method:"post",data:t})}},"2b96":function(t,e,a){"use strict";var n=a("9ef6"),i=a.n(n);i.a},"438d":function(t,e,a){},"6b75":function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}a.d(e,"a",(function(){return n}))},"73f2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"static-page"},[a("area-selector",{on:{areaChange:t.areaChange}}),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-tag",{attrs:{type:"success",size:"mini"}},[t._v(t._s(t.areaList.length?t.areaList[1].name:0))]),a("span",[t._v("综合数据")])],1),a("div",{staticClass:"top-table"},[a("el-table",{staticClass:"none-line",staticStyle:{flex:"2"},attrs:{"header-cell-class-name":"table-header-color",data:t.assetData,border:""}},[a("el-table-column",{attrs:{prop:"totlaAsset",label:"在册农户（家庭)"}}),a("el-table-column",{attrs:{prop:"shareHolder",label:"在册成员"}}),a("el-table-column",{attrs:{prop:"stockTotal",label:"入股成员"}}),a("el-table-column",{attrs:{prop:"stockTotal",label:"经济组织资产总额"}}),a("el-table-column",{attrs:{prop:"stockTotal",label:"已分配/未分配"}})],1),a("el-table",{staticStyle:{flex:"1","margin-left":"20px"},attrs:{"header-cell-class-name":"table-header-color",data:t.stockData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"股权类型"}}),a("el-table-column",{attrs:{prop:"id",label:"配股数量"}})],1)],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("组织代码: "+t._s(t.basicInfo.code))]),a("span",[t._v("组织名称: "+t._s(t.basicInfo.name))]),a("span",[t._v("法人: "+t._s(t.basicInfo.represent))])]),a("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"table-header-color",data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"index",label:"分红年份",width:"180"}}),a("el-table-column",{attrs:{prop:"code",label:"\t分红日期"}}),a("el-table-column",{attrs:{prop:"name",label:"分红金额"}}),a("el-table-column",{attrs:{prop:"represent",label:"分红股东数量"}}),a("el-table-column",{attrs:{prop:"createdDate",label:"每股分红金额"}}),a("el-table-column",{attrs:{prop:"createdDate",label:"备注信息"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{icon:"el-icon-warning",type:"warning",size:"small"},on:{click:t.goDetail}},[t._v("详情")])]}}])})],1),a("pagination",{attrs:{total:t.pageInfo.total,"current-page":t.pageInfo.pageNum},on:{"on-change":function(e){return t.handlePageChange(e)}}})],1)],1)],1)},i=[],r=(a("99af"),a("a434"),a("b0c0"),a("2909")),l=a("1799"),o=a("7715"),s=a("2934"),c={name:"OrganizationDetail",components:{Pagination:l["a"],AreaSelector:o["a"]},data:function(){return{showChart:!1,areaList:[],townLists:[],tableData:[{index:1,code:12,name:"zhanah",represent:"sdasas",address:"lallallal",createdDate:"2018-09-29"}],basicInfo:{index:"油盘社",code:"323232",name:"张家口",represent:"酷酷酷"},assetData:[{totlaAsset:78999999,shareHolder:222,stockTotal:56454,stockTotalPrice:56454,groupStockCount:4343,groupStockPrice:6343,perStockPrice:322}],townDatas:[],stockRightData:[{type:"贡献股",price:"1.0"},{type:"贡献股",price:"1.0"},{type:"爱新股",price:"1.0"}],form:{total:1222,distribute:[{type:"",coefficient:1}]},typeList:[{label:"kakkak",value:"ssss"}],pageInfo:{pageNum:1,pageSize:10,total:0,current:1},stockData:[{id:1,name:1},{id:1,name:1},{id:1,name:1},{id:1,name:1},{id:1,name:1}]}},methods:{areaChange:function(t){console.log(t),this.areaList=t},addParam:function(){var t={type:"",coefficient:1};this.form.distribute.push(t)},deleteParam:function(t){this.form.distribute.splice(t,1)},getVillageList:function(){var t=this;Object(s["a"])().then((function(e){t.townLists=e.data.townshipInfos||[],t.townDatas=[].concat(Object(r["a"])(t.assetData),Object(r["a"])(t.assetData)),t.townDatas=JSON.parse(JSON.stringify(t.townDatas)),t.townDatas[0].name="在册农民数",t.townDatas[1].name="在册股东数",t.showChart=!0,console.log(t.townDatas)}))},goDetail:function(){this.$router.push("/report/town-detail")}},created:function(){this.getVillageList()}},u=c,d=(a("1877"),a("7bbf"),a("2877")),f=Object(d["a"])(u,n,i,!1,null,null,null);e["default"]=f.exports},7715:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("行政区域设置")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.isFold=!t.isFold}}},[t._v(t._s(t.isFold?"折叠":"展开"))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isFold,expression:"isFold"}],staticClass:"area-box"},[a("p",{staticClass:"tag-title top"},[t._v("乡镇")]),t._l(t.areaList,(function(e){return a("el-tag",{key:"town"+e.townshipId,class:["tag-cursor",{active:t.activeTownIndex===e.townshipId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.getTowns(e)}}},[t._v(t._s(e.townshipName)+" ")])})),t.hideVillage?t._e():a("p",{staticClass:"tag-title"},[t._v("村")]),t.hideVillage?t._e():a("span",t._l(t.currentTownList,(function(e){return a("el-tag",{key:"village"+e.villageId,class:["tag-cursor",{active:t.activeVillageIndex===e.villageId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.selectTown(e)}}},[t._v(t._s(e.villageName)+" ")])})),1)],2)])},i=[],r=(a("d81d"),a("b0c0"),a("2934")),l={data:function(){return{isFold:!1,areaList:[],currentTownList:[],activeTownIndex:0,activeTownName:"",activeVillageIndex:0,activeVillageName:""}},props:{initFold:{type:Boolean,default:!0},hideVillage:{type:Boolean,default:!1}},created:function(){this.isFold=this.initFold;var t=localStorage.getItem("tv");t&&(t=JSON.parse(t),this.activeTownIndex=t[0].value,this.activeTownName=t[0].name,this.activeVillageIndex=t[1].value,this.activeVillageName=t[1].name),this.getVillageList(t)},methods:{goBack:function(){this.$router.go(-1)},getTowns:function(t){this.currentTownList=t&&t.villageInfos||[],this.init(t),this.areaChange()},selectTown:function(t){this.activeVillageIndex=t.villageId,this.activeVillageName=t.villageName,this.areaChange(),console.log(this.activeVillageIndex)},getVillageList:function(t){var e=this;Object(r["b"])().then((function(a){e.areaList=a.data.townshipInfos||[];var n=0;t&&e.areaList.map((function(t,a){t.townshipId===e.activeTownIndex&&(n=a)})),e.init(e.areaList[n],t),e.areaChange()}))},areaChange:function(t){var e=[{name:this.activeTownName,value:this.activeTownIndex},{name:this.activeVillageName,value:this.activeVillageIndex}];localStorage.setItem("tv",JSON.stringify(e)),this.$emit("areaChange",e)},init:function(t,e){var a=this;this.activeTownIndex=t.townshipId,this.currentTownList=t&&t.villageInfos||[];var n=0;e&&this.currentTownList.map((function(t,e){t.villageId===a.activeVillageIndex&&(n=e)})),this.activeVillageIndex=this.currentTownList[n].villageId,this.activeTownName=t.townshipName,this.activeVillageName=this.currentTownList[n].villageName}}},o=l,s=(a("b3f5"),a("2b96"),a("2877")),c=Object(s["a"])(o,n,i,!1,null,"28a8671b",null);e["a"]=c.exports},"7bbf":function(t,e,a){"use strict";var n=a("bb2e"),i=a.n(n);i.a},"9ef6":function(t,e,a){},a434:function(t,e,a){"use strict";var n=a("23e7"),i=a("23cb"),r=a("a691"),l=a("50c4"),o=a("7b0b"),s=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),f=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,g=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var a,n,u,d,f,p,m=o(this),w=l(m.length),I=i(t,w),y=arguments.length;if(0===y?a=n=0:1===y?(a=0,n=w-I):(a=y-2,n=g(h(r(e),0),w-I)),w+a-n>b)throw TypeError(v);for(u=s(m,n),d=0;d<n;d++)f=I+d,f in m&&c(u,d,m[f]);if(u.length=n,a<n){for(d=I;d<w-n;d++)f=d+n,p=d+a,f in m?m[p]=m[f]:delete m[p];for(d=w;d>w-n+a;d--)delete m[d-1]}else if(a>n)for(d=w-n;d>I;d--)f=d+n-1,p=d+a-1,f in m?m[p]=m[f]:delete m[p];for(d=0;d<a;d++)m[d+I]=arguments[d+2];return m.length=w-n+a,u}})},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),l=a("6eeb"),o=a("5135"),s=a("c6b6"),c=a("7156"),u=a("c04e"),d=a("d039"),f=a("7c73"),p=a("241c").f,h=a("06cf").f,g=a("9bf2").f,b=a("58a8").trim,v="Number",m=i[v],w=m.prototype,I=s(f(w))==v,y=function(t){var e,a,n,i,r,l,o,s,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=b(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(r=c.slice(2),l=r.length,o=0;o<l;o++)if(s=r.charCodeAt(o),s<48||s>i)return NaN;return parseInt(r,n)}return+c};if(r(v,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var N,x=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof x&&(I?d((function(){w.valueOf.call(a)})):s(a)!=v)?c(new m(y(e)),a,x):y(e)},_=n?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;_.length>T;T++)o(m,N=_[T])&&!o(x,N)&&g(x,N,h(m,N));x.prototype=w,w.constructor=x,l(i,v,x)}},b3f5:function(t,e,a){"use strict";var n=a("e96c"),i=a.n(n);i.a},bb2e:function(t,e,a){},e96c:function(t,e,a){}}]);