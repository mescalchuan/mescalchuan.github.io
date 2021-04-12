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
    icon: 'el-icon-s-home',
  }
}

// 账户管理
const accountAdmin = {
	path: '/account/index',
	component: () => import('@/views/account'),
	meta: { title: ''}
}
// 用户组管理
const groupAdmin = {
	path: '/account/group',
	component: () => import('@/views/account/group'),
	meta: { title: '' }
}

// 账户管理添加
const accountAdminAdd = {
	path: '/account/adminAdd',
	component: () => import('@/views/account/accountAdminAdd'),
	meta: { title: '', activeMenu: '/account/index' }
}
// 账户管理修改
const accountAdminEdit = {
	path: '/account/adminEdit',
	component: () => import('@/views/account/editAccount'),
	meta: { title: '', activeMenu: '/account/index' }
}

// 用户组管理添加
const groupAdminAdd = {
	path: '/account/groupAdminAdd',
	component: () => import('@/views/account/groupAdminAdd'),
	meta: { title: '', activeMenu: '/account/group' }
}

// 账号/组/权限
const account = {
	path: '/account',
	component: Layout,
	redirect: '/account/index',
	meta: { icon: 'el-icon-s-custom' },
	children: [
		accountAdmin,
		groupAdmin,
		accountAdminAdd,
		groupAdminAdd,
		accountAdminEdit
	]
}

// 添加经济组织
// const organAdminAdd = {
// 	path: '/organ/edit',
//   component: () => import('@/views/organization/editInfo'),
//   meta: { activeMenu: '/organ-admin' }
// }

// const organAdminDetail = {
// 	path: '/organ/detail',
//   component: () => import('@/views/organization/detail'),
//   meta: { activeMenu: '/organ-admin' }
// }

// 个人中心
const profile = {
	path: '/profile',
  component: () => import('@/views/user'),
  meta: {
    icon: 'user'
  }
}

// 系统日志
const systemLog = {
	path: '/system-log',
  component: () => import('@/views/log'),
  meta: {
    icon: 'el-icon-document-copy'
  }
}
// news-admin

const basic = {
  path: '/basic',
  name: 'basic',
  component: () => import('@/views/basic'),
  meta: {
    icon: 'el-icon-postcard'
  }
}

const category = {
  path: '/article-manage/category',
  name: 'category',
  component: () => import('@/views/article/category'),
  // meta: {
  //   icon: 'el-icon-edit'
  // }
}

const article = {
  path: '/article-manage/article',
  name: 'article',
  component: () => import('@/views/article/article'),
  // meta: {
  //   icon: 'el-icon-edit-outline'
  // }
}

const articleDetail = {
  path: '/article-manage/article-form',
  name: 'article',
  component: () => import('@/views/article/detail'),
  meta: { activeMenu: '/acticle-manage/article' }
}

const articleManage = {
  path: '/article-manage',
  meta: {
    icon: 'el-icon-document' //
  },
  // children: [category, article]
}

const carousel = {
  path: '/carousel',
  name: 'carousel',
  component: () => import('@/views/carousel'),
  meta: {
    icon: 'el-icon-picture-outline'
  }
}

const supply = {
  path: '/supply',
  name: 'supply',
  component: () => import('@/views/supply'),
  meta: {
    icon: 'el-icon-notebook-1'
  }
}

const supplyDetail = {
  path: '/supply/detail',
  name: 'supplyDetail',
  component: () => import('@/views/supply/detail'),
  meta: {
    activeMenu: '/supply'
  }
}

const need = {
  path: '/need',
  name: 'need',
  component: () => import('@/views/need'),
  meta: {
    icon: 'el-icon-notebook-2'
  }
}

const needDetail = {
  path: '/need/detail',
  name: 'needDetail',
  component: () => import('@/views/need/detail'),
  meta: {
    activeMenu: '/need'
  }
}

const _about = {
path: '/about',
name: '_about',
meta: {
  icon: 'el-icon-location-information'
}
}

const about = {
  path: '/about/index',
  name: 'about',
  component: () => import('@/views/about'),
}

const contact = {
  path: '/contact',
  name: 'contact',
  component: () => import('@/views/contact'),
  meta: {
    icon: 'el-icon-phone-outline'
  }
}
const contactDetail = {
  path: '/contact/detail',
  name: 'contactDetail',
  component: () => import('@/views/contact/detail'),
  meta: {
    activeMenu: '/contact'
  }
}

const _deal = {
  path: '/deal',
  name: '_deal',
  meta: {
    icon: 'el-icon-key'
  }
}

const deal = {
  path: '/deal/list',
  name: 'deal',
  component: () => import('@/views/deal'),
}
const dealBack = {
  path: '/deal/back',
  name: 'dealBack',
  component: () => import('@/views/deal/back'),
}
const dealDetail = {
  path: '/deal/detail',
  name: 'dealDetail',
  component: () => import('@/views/deal/detail'),
  meta: {
    activeMenu: '/deal/list'
  }
}
const dealForm = {
  path: '/deal/form',
  name: 'dealForm',
  component: () => import('@/views/deal/form'),
  meta: {
    activeMenu: '/deal/back'
  }
}
// 服务端下发的内容到菜单的路由的映射
const routerMap = {
	11: account, // 待办事项
  12: basic, // 账号/组/权限
  13: carousel,
  14: articleManage,
  15: supply,
  16: need,
  17: _deal,
  18: contact,
  19: _about,
  21: accountAdmin,
  22: groupAdmin,
  23: category,
  24: article,
  25: dealBack,
  26: deal,
  27: about,
  110: systemLog,
  111: profile
	// 21: accountAdmin, // 账户管理
	// 22: groupAdmin, // 用户组管理
	// 13: organAdmin, // 经济组织管理
	// 14: memberAdmin, // 成员管理
	// 15: stockAdmin, // 股权管理
	// 23: shareholderAdmin, // 股东管理
	// 24: stockShareAdmin, // 股权管理
	// 25: stockShareCirculation, // 股权流转
	// 26: stockPledge, // 股权质押
	// 27: bonusAdmin, // 分红管理
	// 16: searchSystem, // 查询系统
	// 17: reportPage, // 统计报表
	// 28: countyReport, // 全县统计
	// 29: villageReport, // 乡镇统计
	// 210: townReport, // 村统计
	// 18: profile, // 个人中心
	// 19: systemLog, // 系统日志
	// 110: importDate // 数据导入
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
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: () => import('@/views/dashboard/index'),
				meta: { title: '', icon: 'el-icon-s-promotion' }
			},
			todoPage, // 待办事项
			// organAdmin, // 经济组织管理
      // organAdminAdd,
      // organAdminDetail,
			profile, // 个人中心
      systemLog, // 系统日志
      basic,
      articleManage,
      article,
      articleDetail,
      category,
      carousel,
      supply,
      supplyDetail,
      need,
      needDetail,
      _about,
      about,
      contact,
      contactDetail,
      deal,
      dealDetail,
      dealBack,
      dealForm,
      systemLog
		]
	},

	account, // 账号/组/权限
	// 所有无法命中的页面，都应该走进404页面
	{ path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
	// mode: 'history', // require service support
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

export default router
