<template>
	<div class="news-page">
    <div class="flex justify-content-space-between">
      <div style="width: 300px">
        <div class="flex align-items-center">
          <p>当前位置：</p>
          <breadcrumb/>
        </div>
        <el-divider content-position="left">互动交流</el-divider>
        <!-- <div class="menu">
          <el-tabs v-model="activeMenu" tab-position="left" @tab-click="handleMenuClick">
            <el-tab-pane v-for="(item, index) in menuList" :key="index" :name="item.id + ''" :label="item.name"></el-tab-pane>
          </el-tabs>
        </div> -->
        <news-menu :id="$route.meta.id" :active-menu="activeMenu + ''" @getList="handleMenuClick" @initMenu="e => activeMenu = e" @getListName="e => activeName = e"/>
      </div>
      <div style="margin-left: 20px;width:100%;">
        <list v-if="activeMenu == 13" :active-menu="activeMenu" :active-name="activeName"/>
        <email-form v-else-if="activeMenu == 999"/>
        <email v-else :active-name="activeName" @writeEmail="() => {
          activeMenu = 999
        }"/>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import List from './list'
import Email from './email'
import EmailForm from './form'
import { getNewsList } from '@/api/article'
import NewsMenu from '@/components/menu'
export default {
  components: {
    Breadcrumb,
    List,
    Email,
    EmailForm,
    NewsMenu
  },
	data() {
		return {
      activeMenu: 1 + '',
      activeName: '',
      menuList: [{
        id: 1,
        name: '领导信箱',
      }, {
        id: 2,
        name: '意见征集'
      }, {
        id: 3,
        name: '给领导写信'
      }]
		}
  },
  methods: {
    getNewsList() {
      getNewsList({
        categoryId: this.activeMenu,
        pageNum: this.pageInfo.pageNum
      }).then(res => {
        this.tableData = res.data.newsInfoList
        this.pageInfo.total = res.data.total
      })
    },
    handleMenuClick(id) {
      this.activeMenu = id
    }
  }
}
</script>

<style lang="scss" scoped>
  .news-page {
    p {
      font-size: 14px;
    }
    .el-button {
      margin-left: 0;
    }
  }
</style>

<style lang="scss">
  .menu {
  .el-divider--horizontal {
    margin: 0;
    background-color: #f0bb6c;
  }
  .el-tabs__item {
    text-align: left !important;
    width: 200px !important;
    border-bottom: 1px solid #eee;
  }
}
.menu-button {
  margin-left: 0;
  width:100%; 
  background:#fbf8ea;
  border-color: #f5c680;
  color: #333;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  &:hover {
    background-color: #f0bb6c !important;
  }
  &:nth-last-child(1) {
    border-bottom-width: 0;
  }
}
</style>