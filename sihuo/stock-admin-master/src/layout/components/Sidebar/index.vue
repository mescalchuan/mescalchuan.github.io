<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        v-if="menuList.length"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
        unique-opened
      >
        <sidebar-item v-for="route in menuList" :key="route.name" :item="route" :base-path="route.path" />
      </el-menu>
      <p v-if="!isCollapse" class="bottom-text">迭部县农牧业集体经济管理站版权所有©2020</p>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar',
      'menuList'
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        if(route.query.from) {
          return route.query.from === 'town' ? '/report/town' : '/stock/bouns-admin'
        }
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  created() {
    this.$store.dispatch('app/loadSideBar')
  }
}
</script>

<style>
  .bottom-text {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 12px;
    padding: 10px;
    color: rgb(191, 203, 217);
    padding-bottom: 0;
    margin-bottom: 5px;
  }
  .el-menu-item, .el-submenu__title {
    height: 38px !important;
    line-height: 38px !important;
  }
</style>