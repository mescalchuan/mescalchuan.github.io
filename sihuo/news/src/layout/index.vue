<template>
  <div :class="classObj" class="app-wrapper">
    <!-- <div class="container-top"><p>欢迎访问</p></div> -->
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <div class="app-container">
      <div class="header" :style="{ background: 'url(' + webInfo.backgroundImageUrl + ')'}">
        <div class="header-container">
          <h4 class="app-title">{{ webInfo.name }}</h4>
        </div>
      </div>
      <div class="sidebar">
        <sidebar class="sidebar-container" style="margin-top: 50px;width:1200px;margin:0 auto;"/>
      </div>
      <div class="layout" style="background:#eeeeee;">
        <app-main style="width:1200px;margin:20px auto;padding:20px;background:white;min-height:calc(100vh - 151px - 38px - 40px - 146px - 1px);"/>
        <el-divider/>
        <div class="footer-container">
          <div style="width:1200px;margin:0 auto; text-align:center;">
            <div>
              <a style="color:#9a9a9a" class="link-hover" href="/news#/about" target="__blank">关于网站</a><a style="color:#9a9a9a" class="link-hover" href="/stock" target="__blank">备案登录</a><a style="color:#9a9a9a">后台管理</a>
              <p style="color:#9a9a9a">{{ webInfo.copyright }} 备案号：{{ webInfo.recordNo }}</p>
              <p style="color:#9a9a9a">地址：{{ webInfo.address }}  电话：{{ webInfo.phone }}  投稿：{{ webInfo.email }}</p>
              <!-- <p style="color:#9a9a9a">技术支持：{{ webInfo.support }} 联系电话：{{ webInfo.contact }}</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <div style="display: flex;">
        <sidebar class="sidebar-container" />
        <app-main />
      </div>
    </div> -->
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { getWebInfo } from '@/api/home'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  data() {
    return {
      
      webInfo: {}
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    
  },
  mounted() {
    getWebInfo().then(res => {
      this.webInfo = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
  .container-top {
    width: 100%;
    background-color: #424242;
    p {
      width: 1200px;
      margin: 0 auto;
      padding: 8px 0;
      color: white;
      font-size: 12px;
    }
  }
  .app-container {
    width: 100%;
    height: calc(100vh);
    padding: 0;
    // background-image: url(../assets/home.jpeg);
    background-size: cover;
    .app-title {
      margin: 0;
      font-size: 30px;
      color: green;
    }
    .header {
      background-color: white;
      height: 150px;
      line-height: 150px;
      background-size: cover !important;
      .header-container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .sidebar {
      background-color: #54cf77;
    }
    .layout .el-divider--horizontal {
      margin: 0;
    }
    .footer-container {
      background-color: white;
      padding: 30px 0;
      p {
        margin: 5px 0;
        color:#666;
        font-size: 14px;
      }
      a {
        font-size: 14px;
        color: #666;
      }
      a + a:before {
        content: "";
          font-size: 0;
          padding: 10px 3px 1px;
          margin-left: 6px;
          border-left: 1px solid gray;
      }
      //如果不加font-size: 0，最终结果就是：“登录 | 注册”（|的高度是文字高度）。因为内联元素高度默认由font-size控制。
      a + a:before {
        content: "";
          border-left: 1px solid gray;
      }
    }
  }
</style>
