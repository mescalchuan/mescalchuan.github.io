<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>{{ activeName }}</span>
    </div>
    <ul style="margin-top: 10px;margin-left:20px;">
      <li v-for="(item, index) in tableData" :key="index">
        <div class="flex justify-content-space-between">
          <a href="javascript:void(0)" class="link-hover" @click="gotoDetail(item.newsId)">{{ item.newsName }}</a>
          <p style="margin:0;color:#666;white-space:nowrap">{{ item.publishDate }}</p>
        </div>
        <el-divider></el-divider>
      </li>
    </ul>
    <pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
  </el-card>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getNewsList } from '@/api/article'
export default {
  components: {
    Pagination
  },
  props: ['activeName', 'activeMenu'],
  data() {
    return {
      tableData: [],
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
    }
  },
  created() {
    this.getNewsList()
  },
  methods: {
    gotoDetail(id) {
      window.open('/news#/article-contract/' + id)
    },
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.getNewsList()
    },
    getNewsList() {
      getNewsList({
        categoryId: this.activeMenu,
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize,
      }).then(res => {
        this.tableData = res.data.newsInfoList
        this.pageInfo.total = res.data.total
      })
    },
  }
}
</script>