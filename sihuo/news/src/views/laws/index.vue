<template>
	<div class="news-page">
    <div class="flex justify-content-space-between">
      <div style="width: 300px">
        <div class="flex align-items-center">
          <p>当前位置：</p>
          <breadcrumb/>
        </div>
        <el-divider content-position="left">政策法规</el-divider>
        <div class="menu">
          <el-tabs v-model="activeMenu" tab-position="left" @tab-click="handleMenuClick">
            <el-tab-pane v-for="(item, index) in menuList" :key="index" :name="item.id + ''" :label="item.name"></el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div style="margin-left: 20px;width:100%;">
        <el-card>
          <div slot="header" class="clearfix">
            <span v-if="menuList.filter(item => item.id == activeMenu).length">{{ menuList.filter(item => item.id == activeMenu)[0].name }}</span>
          </div>
          <div class="flex">
            <el-input v-model="searchKey" style="width:300px;"  placeholder="请输入标题"/>
            <el-button type="primary" @click="getNewsList">搜索</el-button>
          </div>
          <ul style="margin-top: 30px;margin-left:20px;">
            <li v-for="(item, index) in tableData" :key="index">
              <div class="flex justify-content-space-between">
                <a class="link-hover" href="javascript:void(0)" @click="gotoDetail(item.newsId)">{{ item.newsName }}</a>
                <p style="margin:0;color:#666;white-space:nowrap">{{ item.publishDate }}</p>
              </div>
              <el-divider></el-divider>
            </li>
          </ul>
          <pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Pagination from '@/components/Pagination'
import { getNewsList } from '@/api/article'
import { getMenu } from '@/api/menu'
export default {
  components: {
    Pagination,
    Breadcrumb,
  },
	data() {
		return {
      searchKey: '',
      tableData: [],
      activeMenu: null,
      activeName: '',
      menuList: [],
			pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
		}
  },
  created() {
    getMenu({
      parentId: this.$route.meta.id
    }).then(res => {
      this.menuList = res.data.categoryList
      if(this.menuList.length) {
        this.activeMenu = this.menuList[this.$route.query.k || 0].id + ''
        this.getNewsList()
      }
    })
  },
  methods: {
    gotoDetail(id) {
      window.open('/news#/article-laws/' + id)
    },
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.getNewsList()
    },
    handleMenuClick() {
      this.getNewsList()
    },
    getNewsList() {
      getNewsList({
        categoryId: this.activeMenu,
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize,
        keyword: this.searchKey
      }).then(res => {
        this.tableData = res.data.newsInfoList
        this.pageInfo.total = res.data.total
      })
    }
  }
}
</script>

<style lang="scss">
  .news-page {
    p {
      font-size: 14px;
    }
    .el-button {
      margin-left: 0;
    }
  }
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