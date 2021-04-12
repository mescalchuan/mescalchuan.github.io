<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>{{ activeName }}</span>
    </div>
    <div style="overflow:hidden">
      <el-button type="primary" @click="() => $emit('writeEmail')" style="float:right">我要写信</el-button>
    </div>
    <el-table
      :data="letterInfos"
      header-cell-class-name="table-header-color"
      style="width: 100%;">
      <el-table-column
        prop="subject"
        label="主题"
        align="center"
      >
        <template slot-scope="scope">
          <a class="link-hover" href="javascript:void(0)" @click="$router.push({
            path: '/contract/email',
            query: {
              id: scope.row.letterId
            }
          })">{{ scope.row.subject }}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="feedbackType"
        label="类型"
        width="100px"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="letterTime"
        label="来信时间"
         width="110px"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        width="100px"
        label="回复状况">
        <template slot-scope="scope">
          <p>{{ scope.row.isReply ? '已回复' : '未回复'}}</p>
        </template>
      </el-table-column>
    </el-table>
     <pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
  </el-card>
</template>

<script>
import { getEmailList } from '@/api/contact'
import Pagination from '@/components/Pagination'
export default {
  props: ['activeName'],
  components: {
    Pagination
  },
  data() {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
      letterInfos: []
    }
  },
  methods: {
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.getEmailList()
    },
    getEmailList() {
      getEmailList({
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize
      }).then(res => {
        this.letterInfos = res.data.letterInfos
        this.pageInfo.total = res.data.total
      })
    }
  },
  created() {
    this.getEmailList()
  }
}
</script>