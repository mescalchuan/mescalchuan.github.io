import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
		roles: ['admin','editor']    control the page roles (you can set multiple roles)
		title: 'title'               the name show in sidebar and breadcrumb (recommend set)
		icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
		breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
		activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
	}
 */

// 待办事项
const todoPage = {
	path: '/home',
  component: () => import('@/views/home'),
  meta: {
    // icon: 'el-icon-s-home',
  }
}

// 账户管理
const newsInfo = {
	path: '/news',
	component: () => import('@/views/news'),
	meta: { 
    title: '',
    id: 2,
    activeMenu: '/_news'
  }
}

const article = {
  path: '/article/:id',
  component: () => import('@/views/news/article'),
  meta: { title: '文章', activeMenu: '/_news'}
}
const articlel = {
  path: '/article-laws/:id',
  component: () => import('@/views/news/article'),
  meta: { title: '文章', activeMenu: '/_laws'}
}
const articles = {
  path: '/article-service/:id',
  component: () => import('@/views/news/article'),
  meta: { title: '资料下载', activeMenu: '/_service'}
}
const articlec = {
  path: '/article-contract/:id',
  component: () => import('@/views/news/article'),
  meta: { title: '意见征集', activeMenu: '/_contract'}
}

// 账号/组/权限
const news = {
	path: '/_news',
	component: Layout,
	redirect: '/news',
	meta: { title: '新闻中心', id: 2 },
	children: [
    newsInfo,
    article,
    
    
	]
}

const search = {
	path: '/search',
	component: Layout,
	redirect: '/search',
	meta: {  },
	children: [{
    path: '/search',
    component: () => import('@/views/search'),
    meta: { title: '综合查询', id: 7 }
  }]
}

const service = {
  path: '/_service',
	component: Layout,
	redirect: '/service',
	meta: { title: '便民服务' },
	children: [{
    path: '/service',
    component: () => import('@/views/service'),
    meta: { title: '', id: 4, activeMenu: '/_service'}
  }, articles,]
}

const laws = {
  path: '/_laws',
	component: Layout,
	redirect: '/laws',
	meta: { title: '政策法规' },
	children: [{
    path: '/laws',
    component: () => import('@/views/laws'),
    meta: { title: '', id: 3, activeMenu: '/_laws'}
  }, articlel,]
}

const supply = {
  path: '/_supply',
	component: Layout,
	redirect: '/supply',
	meta: { title: '供求信息' },
	children: [{
    path: '/supply',
    component: () => import('@/views/supply'),
    meta: { title: '', id: 5, activeMenu: '/_supply'}
  }, {
    path: '/supply/supply-info',
    component: () => import('@/views/supply/supplyForm'),
    meta: { title: '迭部县农牧村土地流转供应信息发布详情', activeMenu: '/_supply' }
  }, {
    path: '/supply/need-info',
    component: () => import('@/views/supply/demandForm'),
    meta: { title: '迭部县农牧村土地流转需求信息发布详情', activeMenu: '/_supply' }
  }]
}

const deal = {
  path: '/deal',
	component: Layout,
	redirect: '/deal',
	meta: {  },
	children: [{
    path: '/deal',
    component: () => import('@/views/deal'),
    meta: { title: '成交信息', id: 6}
  }, {
    path: '/deal/detail',
    component: () => import('@/views/deal/detail'),
    meta: { title: '产权交易备案详情', activeMenu: '/deal' }
  }]
}

const contract = {
	path: '/_contract',
	component: Layout,
	redirect: '/contract',
	meta: { title: '互动交流' },
	children: [{
    path: '/contract',
    component: () => import('@/views/contract'),
    meta: { title: '', id: 8, activeMenu: '/_contract' }
  }, {
    path: '/contract/email',
    component: () => import('@/views/contract/emailDetail'),
    meta: { title: '信件处理结果', activeMenu: '/_contract' }
  }, articlec]
}

const about = {
  path: '/about',
	component: Layout,
	redirect: '/about',
	meta: {  },
	children: [{
    path: '/about',
    component: () => import('@/views/about'),
    meta: { title: '关于我们', id: 9}
  }]
}

const result = {
  path: '/result',
	component: Layout,
	redirect: '/result',
	meta: {  },
	children: [{
    path: '/result',
    component: () => import('@/views/result'),
    meta: { title: '搜索结果'}
  }]
}

// 服务端下发的内容到菜单的路由的映射
export const routerMap = {
  1: todoPage, // 待办事项
  2: news,
  3: laws,
  4: service,
  5: supply,
  6: deal,
  7: search,
  8: contract,
  9: about
}

// 服务的下发的id换取路由
export function getRouteById(id) {
	return routerMap[id] || {}
}

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
	{
		path: '/login',
		component: () => import('@/views/login/index'),
		hidden: true
	},

	{
		path: '/404',
		component: () => import('@/views/404'),
		hidden: true
	},

	{
		path: '/',
		component: Layout,
    redirect: '/home',
		children: [
			todoPage, // 待办事项
		]
  },
  laws,
  service,
  about,

  news, // 账号/组/权限
  search,
  supply,
  deal,
  contract,
  result,

	// 所有无法命中的页面，都应该走进404页面
	{ path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
	// mode: 'history', // require service support
	scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  // mode: 'history',
  // base: '/news/'
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

export default router
