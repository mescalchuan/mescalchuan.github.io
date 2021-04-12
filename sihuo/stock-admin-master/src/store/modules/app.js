import Cookies from 'js-cookie'
import { getMenu } from '@/api/menu'
import { getRouteById } from '@/router'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  menuList: [],
  authList: [],
  device: 'desktop'
}

const mutations = {
  UPDATE_MENU_LIST: (state, newList) => {
    state.menuList = newList
  },
  SET_AUTH: (state, newList) => {
    state.authList = newList
  },
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}

const actions = {
  loadSideBar({ commit }) {
    getMenu().then(res => {
      if (res.status === 0) {
        const data = res.data || {}
        const menuRes = data.menuNodes || []
        const processMenuItem = list => {
          return list.map(item => {
            let p = getRouteById(item.id)
            item.meta = { title: item.name, icon: p.meta ? p.meta.icon : '' }
            item.path = p.path || ''

            if (item.children && item.children.length) {
              item.children = processMenuItem(item.children)
            }
            return item
          })
        }
        const menu = processMenuItem(menuRes)
        commit('UPDATE_MENU_LIST', menu)
        commit('SET_AUTH', res.data.functions)
      }
    }).catch(() => {
    })
  },
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
