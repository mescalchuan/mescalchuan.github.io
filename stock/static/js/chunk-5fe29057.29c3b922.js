(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fe29057"],{"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("a630"),a("fb6a"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var n=a("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n["a"])(t,e):void 0}}},"0c1c":function(t,e,a){"use strict";var n=a("77fd"),i=a.n(n);i.a},1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{overflow:"hidden"}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage},on:{"current-change":function(e){return t.$emit("on-change",e)},"size-change":function(e){return t.$emit("on-size-change",e)},"prev-click":function(e){return t.$emit("on-change",e)},"next-click":function(e){return t.$emit("on-change",e)}}})],1)},i=[],r=(a("a9e3"),{props:{total:{type:Number,default:0},pageSize:{type:Number,default:10},currentPage:{type:Number,default:1}}}),s=r,o=a("2877"),l=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=l.exports},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a("6b75");function i(t){if(Array.isArray(t))return Object(n["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return i(t)||r(t)||Object(s["a"])(t)||o()}},2934:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return o}));var n=a("b775");function i(){return Object(n["a"])({url:"/v1/village/list",method:"post"})}function r(){return Object(n["a"])({url:"/v1/village/loadAll",method:"post"})}function s(){return Object(n["a"])({url:"/v1/position/query",method:"post"})}function o(t){return Object(n["a"])({url:"/v1/villageGroup/list",method:"post",data:t})}},"2b96":function(t,e,a){"use strict";var n=a("9ef6"),i=a.n(n);i.a},39340:function(t,e,a){},"64bc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"static-page"},[a("area-selector",{attrs:{"hide-village":""},on:{areaChange:t.areaChange}}),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-tag",{attrs:{type:"success",size:"mini"}},[t._v(t._s(t.areaList.length?t.areaList[0].name:0))]),a("span",[t._v("综合数据")])],1),a("el-table",{attrs:{"header-cell-class-name":"table-header-color",data:t.assetData,border:""}},[a("el-table-column",{attrs:{prop:"totlaAsset",label:"在册农户（家庭)"}}),a("el-table-column",{attrs:{prop:"shareHolder",label:"在册成员"}}),a("el-table-column",{attrs:{prop:"stockTotal",label:"入股成员"}}),a("el-table-column",{attrs:{prop:"stockTotal",label:"经济组织"}}),a("el-table-column",{attrs:{prop:"stockTotal",label:"经济组织资产总额"}}),a("el-table-column",{attrs:{prop:"stockTotal",label:"已分配/未分配"}})],1),a("el-table",{staticStyle:{"margin-top":"20px"},attrs:{"header-cell-class-name":"table-header-color",data:t.townDatas,border:"",id:"table"}},[a("el-table-column",{attrs:{prop:"name",label:"乡镇数据"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticStyle:{color:"red"}},[t._v(t._s(e.row.name))])]}}])}),t._l(t.townLists,(function(t,e){return a("el-table-column",{key:"town"+e,attrs:{prop:"totlaAsset",label:t.townshipName}})}))],2)],1),a("el-card",{staticClass:"box-card"},[t.showChart?a("chart",{attrs:{id:"static-1",color:"#e5aa42",title:"本乡镇股份经济合作社数量一览图","x-axis":this.townLists.map((function(t){return t.townshipName})),datas:this.townLists.map((function(t){return t.townshipId}))}}):t._e()],1),a("el-card",{staticClass:"box-card"},[t.showChart?a("chart",{attrs:{id:"static-2",color:"#5ccdde",title:"本乡镇股份经济合作社参股农民数量一览图","x-axis":this.townLists.map((function(t){return t.townshipName})),datas:this.townLists.map((function(t){return t.townshipId}))}}):t._e()],1),a("el-card",{staticClass:"box-card"},[t.showChart?a("chart",{attrs:{id:"static-3",color:"#6cbf35",title:"本乡镇股份经济合作社规模一览图","x-axis":this.townLists.map((function(t){return t.townshipName})),datas:this.townLists.map((function(t){return t.townshipId}))}}):t._e()],1)],1)},i=[],r=(a("99af"),a("a434"),a("b0c0"),a("2909")),s=a("1799"),o=a("7715"),l=a("2934"),c=a("e9b1"),u={name:"OrganizationDetail",components:{Pagination:s["a"],chart:c["a"],AreaSelector:o["a"]},data:function(){return{showChart:!1,areaList:[],townLists:[],tableData:[{index:1,code:12,name:"zhanah",represent:"sdasas",address:"lallallal",createdDate:"2018-09-29"}],basicInfo:{index:"油盘社",code:"323232",name:"张家口",represent:"酷酷酷"},assetData:[{totlaAsset:78999999,shareHolder:222,stockTotal:56454,stockTotalPrice:56454,groupStockCount:4343,groupStockPrice:6343,perStockPrice:322}],townDatas:[],stockRightData:[{type:"贡献股",price:"1.0"},{type:"贡献股",price:"1.0"},{type:"爱新股",price:"1.0"}],form:{total:1222,distribute:[{type:"",coefficient:1}]},typeList:[{label:"kakkak",value:"ssss"}],pageInfo:{pageNum:1,pageSize:10,total:0,current:1}}},methods:{areaChange:function(t){console.log(t),this.areaList=t},addParam:function(){var t={type:"",coefficient:1};this.form.distribute.push(t)},deleteParam:function(t){this.form.distribute.splice(t,1)},getVillageList:function(){var t=this;Object(l["a"])().then((function(e){t.townLists=e.data.townshipInfos||[],t.townDatas=[].concat(Object(r["a"])(t.assetData),Object(r["a"])(t.assetData)),t.townDatas=JSON.parse(JSON.stringify(t.townDatas)),t.townDatas[0].name="在册农民数",t.townDatas[1].name="在册股东数",t.showChart=!0,console.log(t.townDatas)}))}},created:function(){this.getVillageList()}},d=u,f=(a("0c1c"),a("8a4c"),a("2877")),h=Object(f["a"])(d,n,i,!1,null,null,null);e["default"]=h.exports},"6b75":function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}a.d(e,"a",(function(){return n}))},7715:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("行政区域设置")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.isFold=!t.isFold}}},[t._v(t._s(t.isFold?"折叠":"展开"))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isFold,expression:"isFold"}],staticClass:"area-box"},[a("p",{staticClass:"tag-title top"},[t._v("乡镇")]),t._l(t.areaList,(function(e){return a("el-tag",{key:"town"+e.townshipId,class:["tag-cursor",{active:t.activeTownIndex===e.townshipId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.getTowns(e)}}},[t._v(t._s(e.townshipName)+" ")])})),t.hideVillage?t._e():a("p",{staticClass:"tag-title"},[t._v("村")]),t.hideVillage?t._e():a("span",t._l(t.currentTownList,(function(e){return a("el-tag",{key:"village"+e.villageId,class:["tag-cursor",{active:t.activeVillageIndex===e.villageId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.selectTown(e)}}},[t._v(t._s(e.villageName)+" ")])})),1)],2)])},i=[],r=(a("d81d"),a("b0c0"),a("2934")),s={data:function(){return{isFold:!1,areaList:[],currentTownList:[],activeTownIndex:0,activeTownName:"",activeVillageIndex:0,activeVillageName:""}},props:{initFold:{type:Boolean,default:!0},hideVillage:{type:Boolean,default:!1}},created:function(){this.isFold=this.initFold;var t=localStorage.getItem("tv");t&&(t=JSON.parse(t),this.activeTownIndex=t[0].value,this.activeTownName=t[0].name,this.activeVillageIndex=t[1].value,this.activeVillageName=t[1].name),this.getVillageList(t)},methods:{goBack:function(){this.$router.go(-1)},getTowns:function(t){this.currentTownList=t&&t.villageInfos||[],this.init(t),this.areaChange()},selectTown:function(t){this.activeVillageIndex=t.villageId,this.activeVillageName=t.villageName,this.areaChange(),console.log(this.activeVillageIndex)},getVillageList:function(t){var e=this;Object(r["b"])().then((function(a){e.areaList=a.data.townshipInfos||[];var n=0;t&&e.areaList.map((function(t,a){t.townshipId===e.activeTownIndex&&(n=a)})),e.init(e.areaList[n],t),e.areaChange()}))},areaChange:function(t){var e=[{name:this.activeTownName,value:this.activeTownIndex},{name:this.activeVillageName,value:this.activeVillageIndex}];localStorage.setItem("tv",JSON.stringify(e)),this.$emit("areaChange",e)},init:function(t,e){var a=this;this.activeTownIndex=t.townshipId,this.currentTownList=t&&t.villageInfos||[];var n=0;e&&this.currentTownList.map((function(t,e){t.villageId===a.activeVillageIndex&&(n=e)})),this.activeVillageIndex=this.currentTownList[n].villageId,this.activeTownName=t.townshipName,this.activeVillageName=this.currentTownList[n].villageName}}},o=s,l=(a("b3f5"),a("2b96"),a("2877")),c=Object(l["a"])(o,n,i,!1,null,"28a8671b",null);e["a"]=c.exports},"77fd":function(t,e,a){},"8a4c":function(t,e,a){"use strict";var n=a("39340"),i=a.n(n);i.a},"9ef6":function(t,e,a){},a434:function(t,e,a){"use strict";var n=a("23e7"),i=a("23cb"),r=a("a691"),s=a("50c4"),o=a("7b0b"),l=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),f=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,e){var a,n,u,d,f,h,m=o(this),w=s(m.length),y=i(t,w),I=arguments.length;if(0===I?a=n=0:1===I?(a=0,n=w-y):(a=I-2,n=g(p(r(e),0),w-y)),w+a-n>v)throw TypeError(b);for(u=l(m,n),d=0;d<n;d++)f=y+d,f in m&&c(u,d,m[f]);if(u.length=n,a<n){for(d=y;d<w-n;d++)f=d+n,h=d+a,f in m?m[h]=m[f]:delete m[h];for(d=w;d>w-n+a;d--)delete m[d-1]}else if(a>n)for(d=w-n;d>y;d--)f=d+n-1,h=d+a-1,f in m?m[h]=m[f]:delete m[h];for(d=0;d<a;d++)m[d+y]=arguments[d+2];return m.length=w-n+a,u}})},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),s=a("6eeb"),o=a("5135"),l=a("c6b6"),c=a("7156"),u=a("c04e"),d=a("d039"),f=a("7c73"),h=a("241c").f,p=a("06cf").f,g=a("9bf2").f,v=a("58a8").trim,b="Number",m=i[b],w=m.prototype,y=l(f(w))==b,I=function(t){var e,a,n,i,r,s,o,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=v(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(r=c.slice(2),s=r.length,o=0;o<s;o++)if(l=r.charCodeAt(o),l<48||l>i)return NaN;return parseInt(r,n)}return+c};if(r(b,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var x,N=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof N&&(y?d((function(){w.valueOf.call(a)})):l(a)!=b)?c(new m(I(e)),a,N):I(e)},_=n?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;_.length>S;S++)o(m,x=_[S])&&!o(N,x)&&g(N,x,p(m,x));N.prototype=w,w.constructor=N,s(i,b,N)}},b3f5:function(t,e,a){"use strict";var n=a("e96c"),i=a.n(n);i.a},e96c:function(t,e,a){},e9b1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:t.id}})},i=[],r={props:{id:{type:String,default:""},title:{type:String,default:""},xAxis:{type:Array,default:function(){return[]}},yAxis:{type:Array,default:function(){return[]}},datas:{type:Array,default:function(){return[]}},color:{type:String,default:""}},mounted:function(){var t=this.$echarts.init(document.getElementById(this.id));t.setOption({title:{text:this.title},xAxis:{data:this.xAxis},yAxis:{type:"value",data:this.yAxis},series:[{name:"数据",type:"bar",data:this.datas}],color:[this.color]})}},s=r,o=a("2877"),l=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=l.exports}}]);