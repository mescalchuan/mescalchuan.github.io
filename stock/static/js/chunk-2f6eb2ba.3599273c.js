(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f6eb2ba"],{"0fe9":function(e,s,t){},2017:function(e,s,t){"use strict";var n=t("cafe"),a=t.n(n);a.a},"2c16":function(e,s,t){e.exports=t.p+"static/img/bk.f8bd7a58.jpeg"},"9ed6":function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",[n("div",{staticClass:"mask",style:{background:"url("+t("2c16")+")"}}),n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("Login Form")])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin(s)}},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleLogin(s)}}},[e._v("Login")]),n("div",{staticClass:"tips"},[n("span",{staticStyle:{"margin-right":"20px"}},[e._v("username: admin")]),n("span",[e._v(" password: any")])])],1)],1)])},a=[],o=(t("61f7"),{name:"Login",data:function(){var e=function(e,s,t){s?t():t(new Error("Please enter the correct user name"))},s=function(e,s,t){s.length<6?t(new Error("The password can not be less than 6 digits")):t()};return{loginForm:{username:"admin",password:"admin123"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:s}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(s){if(!s)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}}),r=o,i=(t("2017"),t("eab2"),t("2877")),l=Object(i["a"])(r,n,a,!1,null,"52d37f30",null);s["default"]=l.exports},cafe:function(e,s,t){},eab2:function(e,s,t){"use strict";var n=t("0fe9"),a=t.n(n);a.a}}]);