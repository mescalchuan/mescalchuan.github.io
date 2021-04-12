<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <a class="link-hover-n-a" style="cursor:pointer" @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
import { routerMap } from '@/router'
export default {
  props: ['level', 'routerId', 'titleId'],
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (!this.isDashboard(first)) {
        matched = [{ path: '/', meta: { title: '首页' }}].concat(matched)
      }
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      if(this.level && this.routerId && this.titleId) {
        const menus = {
          2: [{ id: 1, name: '工作动态' }, { id: 2, name: '媒体广场' }, { id: 3, name: '通知公告' }],
          3: [{ id: 18, name: '国家政策法规' }, { id: 19, name: '省州政策规章' }, { id: 20, name: '县政策规章' }],
          4: [{ id: 6, name: '办事指南' }, { id: 7, name: '资料下载' }],
          8: { id: 13, name: '意见征集' }
        }
        this.levelList[this.level].meta.title = menus[this.routerId].filter(item => item.id == this.titleId)[0].name
      }
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: white;
    cursor: text;
    font-weight: bold;
  }
}
</style>
