(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba7655f2"],{2934:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return i})),o.d(t,"d",(function(){return n})),o.d(t,"c",(function(){return l}));var a=o("b775");function r(){return Object(a["a"])({url:"/v1/village/list",method:"post"})}function i(){return Object(a["a"])({url:"/v1/village/loadAll",method:"post"})}function n(){return Object(a["a"])({url:"/v1/position/query",method:"post"})}function l(e){return Object(a["a"])({url:"/v1/villageGroup/list",method:"post",data:e})}},"31c5":function(e,t,o){"use strict";var a=o("a9fb"),r=o.n(a);r.a},5713:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"organization-page"},[o("back"),1!=e.isEdit?o("area-selector",{attrs:{initFold:!0},on:{areaChange:e.areaChange}}):e._e(),o("div",{staticClass:"content"},[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"组织代码",prop:"groupCode"}},[o("el-input",{model:{value:e.form.groupCode,callback:function(t){e.$set(e.form,"groupCode",t)},expression:"form.groupCode"}})],1),o("el-form-item",{attrs:{label:"组织名称",prop:"groupName"}},[o("el-input",{model:{value:e.form.groupName,callback:function(t){e.$set(e.form,"groupName",t)},expression:"form.groupName"}})],1),o("el-form-item",{attrs:{label:"法人代表",prop:"legal"}},[o("el-input",{model:{value:e.form.legal,callback:function(t){e.$set(e.form,"legal",t)},expression:"form.legal"}})],1),o("el-form-item",{attrs:{label:"成立日期",prop:"establishTime"}},[o("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.form.establishTime,callback:function(t){e.$set(e.form,"establishTime",t)},expression:"form.establishTime"}})],1),o("el-divider",{attrs:{"content-position":"left"}},[e._v("经营性资产")]),o("el-form-item",{attrs:{label:"货币资金（万元）",prop:"operationalCurrencyAmount"}},[o("el-input",{model:{value:e.form.operationalCurrencyAmount,callback:function(t){e.$set(e.form,"operationalCurrencyAmount",t)},expression:"form.operationalCurrencyAmount"}})],1),o("el-form-item",{attrs:{label:"固定资产（万元）",prop:"operationalFixedAmount"}},[o("el-input",{model:{value:e.form.operationalFixedAmount,callback:function(t){e.$set(e.form,"operationalFixedAmount",t)},expression:"form.operationalFixedAmount"}})],1),o("el-form-item",{attrs:{label:"类型",prop:"operationalType"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择类型"},model:{value:e.form.operationalType,callback:function(t){e.$set(e.form,"operationalType",t)},expression:"form.operationalType"}},e._l(e.operationType,(function(e){return o("el-option",{key:e.operationalType,attrs:{label:e.operationalTypeName,value:e.operationalType}})})),1)],1),o("el-form-item",{attrs:{label:"面积（m2）",prop:"operationalArea"}},[o("el-input",{model:{value:e.form.operationalArea,callback:function(t){e.$set(e.form,"operationalArea",t)},expression:"form.operationalArea"}})],1),o("el-divider",{attrs:{"content-position":"left"}},[e._v("非经营性资产")]),o("el-form-item",{attrs:{label:"总额",prop:"noOperationalTotalAmount"}},[o("el-input",{model:{value:e.form.noOperationalTotalAmount,callback:function(t){e.$set(e.form,"noOperationalTotalAmount",t)},expression:"form.noOperationalTotalAmount"}})],1),o("el-form-item",{attrs:{label:"面积",prop:"noOperationalArea"}},[o("el-input",{model:{value:e.form.noOperationalArea,callback:function(t){e.$set(e.form,"noOperationalArea",t)},expression:"form.noOperationalArea"}})],1),o("el-form-item",{attrs:{label:"组织介绍",prop:"groupDescription"}},[o("el-input",{attrs:{type:"textarea",placeholder:"组织介绍",rows:5},model:{value:e.form.groupDescription,callback:function(t){e.$set(e.form,"groupDescription",t)},expression:"form.groupDescription"}})],1)],1),o("div",{staticClass:"dialog-footer"},[o("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提 交")])],1)],1)],1)},r=[],i=o("5530"),n=o("7715"),l=o("66b7"),s=o("2934"),u=o("cca8"),p={components:{AreaSelector:n["a"],Back:l["a"]},data:function(){return{tableData:[{index:1,code:12,name:"zhanah",represent:"sdasas",address:"lallallal",createdDate:"2018-09-29"}],searchKey:"",form:{establishTime:""},formLabelWidth:"100px",dialogFormVisible:!1,rules:{groupCode:[{required:!0,message:"请输入组织代码",trigger:"blur"}],groupName:[{required:!0,message:"请输入组织名称",trigger:"blur"}],legal:[{required:!0,message:"请输入法人代表",trigger:"blur"}],establishTime:[{type:"date",message:"请选择成立日期",trigger:"change"}],groupDescription:[{message:"请填写组织介绍",trigger:"blur"}]},groupOptions:[],areaList:[],posiitonList:[],isEdit:!1,operationType:[]}},watch:{areaList:{deep:!0,handler:function(){var e=this.areaList[1].value;this.getGroupList(e)}}},created:function(){var e=this;this.isEdit="true"===this.$route.query.isEdit,this.getPositionList(),Object(u["e"])().then((function(t){e.operationType=t.data.operationalTypeInfos,e.isEdit&&e.getDetail({economicGroupId:e.$route.query.id})}))},methods:{handleEdit:function(e){for(var t in this.showDialog(),this.form)this.form[t]=e[t];this.isEdit=!0},areaChange:function(e){this.areaList=e,this.form.villageGroupId&&(this.form.villageGroupId="")},getPositionList:function(){var e=this;Object(s["d"])().then((function(t){e.posiitonList=t.data.positionInfos||[]}))},getGroupList:function(e){var t=this;Object(s["c"])({villageId:e}).then((function(e){t.groupOptions=e.data.villageGroupInfos||[]}))},getDetail:function(e){var t=this;Object(u["c"])(e).then((function(e){t.form=Object(i["a"])({},e.data),e.data.villageId&&t.getGroupList(e.data.villageId)}))},submit:function(){var e=this,t=this.$route.query.id,o=this.isEdit?u["g"]:u["f"];this.isEdit?this.form.economicGroupId=t:this.form.villageId=this.areaList[1].value,o(this.form).then((function(o){e.$message({message:"操作成功",type:"success"}),t&&e.isEdit?e.$router.push("/organ-admin"):history.back()}))}}},c=p,m=(o("31c5"),o("81fb"),o("2877")),f=Object(m["a"])(c,a,r,!1,null,"f5c65c40",null);t["default"]=f.exports},"81fb":function(e,t,o){"use strict";var a=o("e80f"),r=o.n(a);r.a},a9fb:function(e,t,o){},e80f:function(e,t,o){}}]);