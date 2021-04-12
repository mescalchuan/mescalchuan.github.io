<template>
	<div class="news-page">
    <div class="flex justify-content-space-between">
      <div style="width: 300px">
        <div class="flex align-items-center">
          <p>当前位置：</p>
          <breadcrumb/>
        </div>
        <el-divider content-position="left">新闻中心</el-divider>
        <news-menu :id="$route.meta.id" :active-menu="activeMenu + ''" @getList="id => {
          activeMenu = id
          getNewsList()
        }" @initMenu="e => activeMenu = e" @getListName="e => activeName = e"/>
      </div>
      <div style="margin-left: 20px;width:100%;">
        <el-card>
          <div slot="header" class="clearfix">
            <span v-if="activeName">{{ activeName }}</span>
          </div>
          <ul style="margin-top: 10px;margin-left:20px;">
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
import NewsMenu from '@/components/menu'
import { getNewsList } from '@/api/article'
export default {
  components: {
    Pagination,
    Breadcrumb,
    NewsMenu
  },
	data() {
		return {
      tableData: [],
      activeMenu: null,
      activeName: '',
			pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
		}
  },
  methods: {
    gotoDetail(id) {
      window.open('/news#/article/' + id)
    },
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.getNewsList()
    },
    getNewsList() {
      getNewsList({
        categoryId: this.activeMenu,
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize
      }).then(res => {
        this.tableData = res.data.newsInfoList
        this.pageInfo.total = res.data.total
      })
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