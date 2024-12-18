import Vue from 'vue'


import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import axios from '@/utils/request'
import { hasAuth } from '@/utils/index'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明

Vue.config.productionTip = false

Vue.prototype.$hasAuth = hasAuth

Vue.prototype.$http = axios;

Vue.filter('timeformat', function(value){
  if (!value) return ''
  value = value.toString()
  let vs = value.split('-')
  return vs[0] + '年' + vs[1] + '月' + vs[2] + '日'
})
// if (+new Date() < 1598899976433) {
//   new Vue({
// 	el: '#app',
// 	router,
// 	store,
// 	render: h => h(App)
//   })
// }

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
