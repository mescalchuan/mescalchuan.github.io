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

// 经济组织管理
const organAdmin = {
	path: '/organ-admin',
  component: () => import('@/views/organization'),
  meta: {
    icon: 'el-icon-postcard' //
  }
}

// 添加经济组织
const organAdminAdd = {
	path: '/organ/edit',
  component: () => import('@/views/organization/editInfo'),
  meta: { activeMenu: '/organ-admin' }
}

const organAdminDetail = {
	path: '/organ/detail',
  component: () => import('@/views/organization/detail'),
  meta: { activeMenu: '/organ-admin' }
}


// 成员管理
const memberAdmin = {
	path: '/member/index',
  component: () => import('@/views/member'),
  meta: {
    icon: 'user'
  }
}
// 成员管理类的页面
const member = {
	path: '/member',
	component: Layout,
	children: [
		memberAdmin,
		{
			path: 'edit',
      component: () => import('@/views/member/editInfo'),
      meta: { activeMenu: '/member/index' }
		},
		{
			path: 'detail',
      component: () => import('@/views/member/detail'),
      meta: { activeMenu: '/member/index' }
		}
	]
}

// 股东管理
const shareholderAdmin = {
	path: '/stock/share-holder',
	component: () => import('@/views/stock/shareHolder/main')
}
const shareholderDetail = {
  path: '/stock/share-holder/detail',
  component: () => import('@/views/stock/shareHolder/detail'),
  meta: { activeMenu: '/stock/share-holder' }
}
const shareholderAdd = {
  path: '/stock/share-holder/add',
  component: () => import('@/views/stock/shareHolder/addMember'),
  meta: { activeMenu: '/stock/share-holder' }
}

// 股权管理
const stockShareAdmin = {
	path: '/stock/group',
  component: () => import('@/views/stock/stockManage/main'),
}
const stockShareAdminPatch = {
	path: '/stock/group/patch',
  component: () => import('@/views/stock/stockManage/patch'),
  meta: { activeMenu: '/stock/group' }
}
const stockShareAdminAdd = {
	path: '/stock/group/add',
  component: () => import('@/views/stock/stockManage/add'),
  meta: { activeMenu: '/stock/group' }
}
const stockShareAdminReduce = {
	path: '/stock/group/reduce',
  component: () => import('@/views/stock/stockManage/reduce'),
  meta: { activeMenu: '/stock/group' }
}
// 股权流转
const stockShareCirculation = {
	path: '/stock/share-circulation',
	component: () => import('@/views/stock/stockCircle/main')
}
const stockShareCirculationDetail = {
	path: '/stock/share-circulation/detail',
  component: () => import('@/views/stock/stockCircle/detail'),
  meta: { activeMenu: '/stock/share-circulation' }
}
const stockShareCirculationSelect = {
	path: '/stock/share-circulation/person-select',
  component: () => import('@/views/stock/stockCircle/personSelect'),
  meta: { activeMenu: '/stock/share-circulation' }
}
const stockShareCirculationCircle = {
	path: '/stock/share-circulation/circle',
  component: () => import('@/views/stock/stockCircle/circle'),
  meta: { activeMenu: '/stock/share-circulation' }
}
// 股权质押
const stockPledge = {
	path: '/stock/stock-pledge',
	component: () => import('@/views/stock/stockPledge/main')
}
const stockSharePledgeDetail = {
	path: '/stock/share-pledge/detail',
  component: () => import('@/views/stock/stockPledge/detail'),
  meta: { activeMenu: '/stock/stock-pledge' }
}
const stockSharePledgePledge = {
	path: '/stock/share-pledge/pledge',
  component: () => import('@/views/stock/stockPledge/pledge'),
  meta: { activeMenu: '/stock/stock-pledge' }
}
const stockSharePledgeCancelPledge = {
	path: '/stock/share-pledge/cancel-pledge',
  component: () => import('@/views/stock/stockPledge/cancelPledge'),
  meta: { activeMenu: '/stock/stock-pledge' }
}
// 分红管理
const bonusAdmin = {
	path: '/stock/bouns-admin',
	component: () => import('@/views/stock/bonusManage/main')
}
const bonusAdminDetail = {
	path: '/stock/bouns-admin/detail',
  component: () => import('@/views/stock/bonusManage/detail'),
  meta: { activeMenu: '/stock/bouns-admin' }
}
const bonusAdminAdd = {
	path: '/stock/bouns-admin/add',
  component: () => import('@/views/stock/bonusManage/add'),
  meta: { activeMenu: '/stock/bouns-admin' }
}
// 股权管理
const stockAdmin = {
	path: '/stock',
  redirect: '/stock/share-holder',
  meta: {
    icon: 'el-icon-s-order'
  },
	component: Layout,
	children: [
    shareholderAdmin,
    shareholderDetail,
    shareholderAdd,
		stockShareAdmin,
		stockShareAdminPatch,
		stockShareAdminAdd,
		stockShareAdminReduce,
    stockShareCirculation,
		stockShareCirculationDetail,
		stockShareCirculationSelect,
		stockShareCirculationCircle,
    stockPledge,
		stockSharePledgeDetail,
		stockSharePledgePledge,
		stockSharePledgeCancelPledge,
    bonusAdmin,
		bonusAdminDetail,
		bonusAdminAdd
	]
}
// 查询系统
const searchSystemList = {
	path: '/search-system',
  component: () => import('@/views/search'),
  meta: {
    icon: 'el-icon-search'
  }
}
const searchSystemDetail = {
	path: '/search-system/detail',
  component: () => import('@/views/search/detail'),
  meta: {
    icon: 'el-icon-search',
    activeMenu: '/search-system'
  }
}

const searchSystem = {
	path: '/search-system',
	component: Layout,
  meta: {
    icon: 'el-icon-search'
  },
	children: [
		searchSystemList,
		searchSystemDetail,
	]
}

// 全县统计
const countyReport = {
	path: '/report/county',
	component: () => import('@/views/static')
}
// 乡镇统计
const villageReport = {
	path: '/report/village',
	component: () => import('@/views/static/town')
}
// 村统计
const townReport = {
	path: '/report/town',
	component: () => import('@/views/static/village')
}
// 统计报表
const reportPage = {
	path: '/report',
	component: Layout,
  redirect: '/report/county',
  meta: {
    icon: 'el-icon-s-data'
  },
	children: [
		countyReport,
		villageReport,
    townReport,
	]
}

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

// 数据导入
const importDate = {
	path: '/import-data',
  component: () => import('@/views/import'),
  meta: {
    icon: 'el-icon-upload2'
  }
}
const importDateList = {
	path: '/import-data/list',
  component: () => import('@/views/import/error'),
  meta: {
    icon: 'el-icon-upload2',
    activeMenu: '/import-data'
  }
}

// 服务端下发的内容到菜单的路由的映射
const routerMap = {
	11: todoPage, // 待办事项
	12: account, // 账号/组/权限
	21: accountAdmin, // 账户管理
	22: groupAdmin, // 用户组管理
	13: organAdmin, // 经济组织管理
	14: memberAdmin, // 成员管理
	15: stockAdmin, // 股权管理
	23: shareholderAdmin, // 股东管理
	24: stockShareAdmin, // 股权管理
	25: stockShareCirculation, // 股权流转
	26: stockPledge, // 股权质押
	27: bonusAdmin, // 分红管理
	16: searchSystem, // 查询系统
	17: reportPage, // 统计报表
	28: countyReport, // 全县统计
	29: villageReport, // 乡镇统计
	210: townReport, // 村统计
	18: profile, // 个人中心
	19: systemLog, // 系统日志
	110: importDate // 数据导入
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
			organAdmin, // 经济组织管理
      organAdminAdd,
      organAdminDetail,
			profile, // 个人中心
      systemLog, // 系统日志
      importDateList,
			importDate // 数据导入
		]
	},

	member, // 成员管理类

	account, // 账号/组/权限

	stockAdmin, // 股权管理
	searchSystem, // 查询系统
	reportPage, // 统计报表

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
