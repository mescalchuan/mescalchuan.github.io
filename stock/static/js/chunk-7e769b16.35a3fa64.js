(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e769b16"],{2934:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return s})),i.d(e,"d",(function(){return n})),i.d(e,"c",(function(){return r}));var a=i("b775");function o(){return Object(a["a"])({url:"/v1/village/list",method:"post"})}function s(){return Object(a["a"])({url:"/v1/village/loadAll",method:"post"})}function n(){return Object(a["a"])({url:"/v1/position/query",method:"post"})}function r(t){return Object(a["a"])({url:"/v1/villageGroup/list",method:"post",data:t})}},"2b96":function(t,e,i){"use strict";var a=i("9ef6"),o=i.n(a);o.a},"2f46":function(t,e,i){"use strict";var a=i("f0e7"),o=i.n(a);o.a},3852:function(t,e,i){"use strict";var a=i("be38"),o=i.n(a);o.a},"4ad1":function(t,e,i){},5713:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"organization-page"},[i("back"),i("area-selector",{attrs:{initFold:!0},on:{areaChange:t.areaChange}}),i("div",{staticClass:"content"},[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"组织代码",prop:"groupCode"}},[i("el-input",{model:{value:t.form.groupCode,callback:function(e){t.$set(t.form,"groupCode",e)},expression:"form.groupCode"}})],1),i("el-form-item",{attrs:{label:"组织名称",prop:"groupName"}},[i("el-input",{model:{value:t.form.groupName,callback:function(e){t.$set(t.form,"groupName",e)},expression:"form.groupName"}})],1),i("el-form-item",{attrs:{label:"法人代表",prop:"legal"}},[i("el-input",{model:{value:t.form.legal,callback:function(e){t.$set(t.form,"legal",e)},expression:"form.legal"}})],1),i("el-form-item",{attrs:{label:"成立日期",prop:"establishTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-DD",type:"date",placeholder:"选择日期"},model:{value:t.form.establishTime,callback:function(e){t.$set(t.form,"establishTime",e)},expression:"form.establishTime"}})],1),i("el-form-item",{attrs:{label:"所在社/组"}},[i("el-select",{attrs:{filterable:"",placeholder:"请选择所在社/组"},model:{value:t.form.villageGroupId,callback:function(e){t.$set(t.form,"villageGroupId",e)},expression:"form.villageGroupId"}},t._l(t.groupOptions,(function(t){return i("el-option",{key:t.villageGroupId,attrs:{label:t.villageGroupName,value:t.villageGroupId}})})),1)],1),i("el-form-item",{attrs:{label:"组织介绍",prop:"groupDescription"}},[i("el-input",{attrs:{type:"textarea",placeholder:"组织介绍"},model:{value:t.form.groupDescription,callback:function(e){t.$set(t.form,"groupDescription",e)},expression:"form.groupDescription"}})],1)],1),i("div",{staticClass:"dialog-footer"},[i("el-button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提 交")])],1)],1)],1)},o=[],s=i("5530"),n=i("7715"),r=i("66b7"),l=i("2934"),c=i("cca8"),u={components:{AreaSelector:n["a"],Back:r["a"]},data:function(){return{tableData:[{index:1,code:12,name:"zhanah",represent:"sdasas",address:"lallallal",createdDate:"2018-09-29"}],searchKey:"",form:{establishTime:""},formLabelWidth:"100px",dialogFormVisible:!1,rules:{groupCode:[{required:!0,message:"请输入组织代码",trigger:"blur"}],groupName:[{required:!0,message:"请输入组织名称",trigger:"blur"}],legal:[{required:!0,message:"请输入法人代表",trigger:"blur"}],establishTime:[{type:"date",message:"请选择成立日期",trigger:"change"}],groupDescription:[{message:"请填写组织介绍",trigger:"blur"}]},groupOptions:[],areaList:[],posiitonList:[],isEdit:!1}},watch:{areaList:{deep:!0,handler:function(){var t=this.areaList[1].value;this.getGroupList(t)}}},created:function(){this.isEdit="true"===this.$route.query.isEdit,this.getPositionList(),this.isEdit&&this.getDetail({economicGroupId:this.$route.query.id})},methods:{handleEdit:function(t){for(var e in this.showDialog(),this.form)this.form[e]=t[e];this.isEdit=!0},areaChange:function(t){this.areaList=t,this.form.villageGroupId&&(this.form.villageGroupId="")},getPositionList:function(){var t=this;Object(l["d"])().then((function(e){t.posiitonList=e.data.positionInfos||[]}))},getGroupList:function(t){var e=this;Object(l["c"])({villageId:t}).then((function(t){e.groupOptions=t.data.villageGroupInfos||[]}))},getDetail:function(t){var e=this;Object(c["b"])(t).then((function(t){e.form=Object(s["a"])({},t.data),t.data.villageId&&e.getGroupList(t.data.villageId)}))},submit:function(){var t=this,e=this.$route.query.id,i=this.isEdit?c["d"]:c["c"];this.isEdit&&(this.form.economicGroupId=e),i(this.form).then((function(i){t.$message({message:"操作成功",type:"success"}),e&&t.isEdit?t.$router.push("/organ-admin"):history.back()}))}}},d=u,f=(i("3852"),i("81fb"),i("2877")),g=Object(f["a"])(d,a,o,!1,null,"78aa09fc",null);e["default"]=g.exports},"66b7":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"back-container"},[i("span",{staticClass:"custom-back",on:{click:t.goBack}},[i("i",{staticClass:"el-icon-back ",on:{click:t.goBack}}),t._v("返回 ")])])},o=[],s=(i("2f62"),{name:"Back",methods:{goBack:function(){history.back()}}}),n=s,r=(i("8ccd"),i("2877")),l=Object(r["a"])(n,a,o,!1,null,"1a422e96",null);e["a"]=l.exports},7715:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("行政区域设置")]),i("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.isFold=!t.isFold}}},[t._v(t._s(t.isFold?"折叠":"展开"))])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFold,expression:"isFold"}],staticClass:"area-box"},[i("p",{staticClass:"tag-title top"},[t._v("乡镇")]),t._l(t.areaList,(function(e){return i("el-tag",{key:"town"+e.townshipId,class:["tag-cursor",{active:t.activeTownIndex===e.townshipId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(i){return t.getTowns(e)}}},[t._v(t._s(e.townshipName)+" ")])})),i("p",{staticClass:"tag-title"},[t._v("村")]),t._l(t.currentTownList,(function(e){return i("el-tag",{key:"village"+e.villageId,class:["tag-cursor",{active:t.activeVillageIndex===e.villageId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(i){return t.selectTown(e)}}},[t._v(t._s(e.villageName)+" ")])}))],2)])},o=[],s=(i("d81d"),i("b0c0"),i("2934")),n={data:function(){return{isFold:!1,areaList:[],currentTownList:[],activeTownIndex:0,activeTownName:"",activeVillageIndex:0,activeVillageName:""}},props:{initFold:{type:Boolean,default:!0}},created:function(){this.isFold=this.initFold;var t=localStorage.getItem("tv");t&&(t=JSON.parse(t),this.activeTownIndex=t[0].value,this.activeTownName=t[0].name,this.activeVillageIndex=t[1].value,this.activeVillageName=t[1].name),this.getVillageList(t)},methods:{goBack:function(){this.$router.go(-1)},getTowns:function(t){this.currentTownList=t&&t.villageInfos||[],this.init(t),this.areaChange()},selectTown:function(t){this.activeVillageIndex=t.villageId,this.activeVillageName=t.villageName,this.areaChange(),console.log(this.activeVillageIndex)},getVillageList:function(t){var e=this;Object(s["b"])().then((function(i){e.areaList=i.data.townshipInfos||[];var a=0;t&&e.areaList.map((function(t,i){t.townshipId===e.activeTownIndex&&(a=i)})),e.init(e.areaList[a],t),e.areaChange()}))},areaChange:function(t){var e=[{name:this.activeTownName,value:this.activeTownIndex},{name:this.activeVillageName,value:this.activeVillageIndex}];localStorage.setItem("tv",JSON.stringify(e)),this.$emit("areaChange",e)},init:function(t,e){var i=this;this.activeTownIndex=t.townshipId,this.currentTownList=t&&t.villageInfos||[];var a=0;e&&this.currentTownList.map((function(t,e){t.villageId===i.activeVillageIndex&&(a=e)})),this.activeVillageIndex=this.currentTownList[a].villageId,this.activeTownName=t.townshipName,this.activeVillageName=this.currentTownList[a].villageName}}},r=n,l=(i("2f46"),i("2b96"),i("2877")),c=Object(l["a"])(r,a,o,!1,null,"2570d85e",null);e["a"]=c.exports},"81fb":function(t,e,i){"use strict";var a=i("e80f"),o=i.n(a);o.a},"8ccd":function(t,e,i){"use strict";var a=i("4ad1"),o=i.n(a);o.a},"9ef6":function(t,e,i){},be38:function(t,e,i){},e80f:function(t,e,i){},f0e7:function(t,e,i){}}]);