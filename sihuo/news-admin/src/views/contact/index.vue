<template>
  <div class="contact-page">
    <div class="content">
        <el-table
          :data="letterInfos"
          header-cell-class-name="table-header-color"
          style="width: 100%;">
          <el-table-column
            prop="subject"
            label="主题"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="writerName"
            label="姓名"
            width="100px"
            align="center"
          >
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
            prop="isOpen"
            label="是否公开"
            width="110px"
            align="center"
          >
          <template slot-scope="scope">
              <p>{{ scope.row.isOpen ? '已回复' : '未回复'}}</p>
            </template>
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
           <el-table-column
              prop="name"
              label="操作"
              align="center"
              width="200px"
            >
              <template slot-scope="scope">
                <el-button size="small" type="primary" @click="() => $router.push({
                  path: '/contact/detail',
                  query: {
                    id: scope.row.letterId
                  }
                })">详情</el-button>
                <!-- <el-button size="small" type="danger">删除</el-button> -->
                <el-button size="small" type="danger" style="margin-left:10px;" @click="handleDelete(scope.row.letterId)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
        <pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
    </div>
  </div>
</template>

<script>
import { getEmailList, deleteEmail } from '@/api/contact'
import Pagination from '@/components/Pagination'
export default {
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
    },
    handleDelete(letterId) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteEmail({
        letterId,
      }).then(res => {
        this.$message({
          type: 'success',
          message: '操作成功'
        })
        this.getEmailList()
      })
        
      })
    }
  },
  created() {
    this.getEmailList()
  }
}
</script>

<style lang="scss">
  .contact-page {
    width: 100%;
    padding: 10px;
    background: rgb(235,238,242);
    min-height: calc(100vh - 50px);
    .table-header-color {
      background: rgb(245,247,250)!important;
      color: #333 !important;
      
    }
  .content {
      background: #fff;
      padding: 20px;
      margin-top: 15px;
    }
  }
</style>