(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-015d295a"],{2017:function(e,t,n){"use strict";var s=n("cafe"),r=n.n(s);r.a},"2c16":function(e,t,n){e.exports=n.p+"static/img/bk.f8bd7a58.jpeg"},"9ed6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"mask",style:{background:"url("+n("2c16")+")"}}),s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("迭部县")]),s("p",{staticClass:"title",staticStyle:{"font-size":"18px","margin-top":"-10px"}},[e._v("农牧村集体经济组织股权登记备案流转管理系统")])]),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1)])},r=[],o=(n("61f7"),{name:"Login",data:function(){var e=function(e,t,n){t?n():n(new Error("Please enter the correct user name"))},t=function(e,t,n){t.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"admin",password:"admin123"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}}),a=o,i=(n("2017"),n("dd99"),n("2877")),l=Object(i["a"])(a,s,r,!1,null,"38c15306",null);t["default"]=l.exports},c9e6:function(e,t,n){},cafe:function(e,t,n){},dd99:function(e,t,n){"use strict";var s=n("c9e6"),r=n.n(s);r.a}}]);