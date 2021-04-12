<template>
  <div class="need-page">
    <div class="content">
    <div class="flex align-items-center">
      <el-select placeholder="审核状态" v-model="search.checkStatus" style="width:150px;margin-left:10px;">
        <el-option v-for="(item, index) in statusType" :key="index" :label="item.name" :value="item.id"/>
      </el-select>
      <el-input v-model="search.keyword" placeholder="全文检索" style="width:300px;margin-left:10px;"/>
      <el-button type="primary" @click="demandSearch">搜索</el-button>
    </div>
    <el-table
      :data="demandInfos"
      header-cell-class-name="table-header-color"
      style="width: 100%;margin-top:20px;">
      <el-table-column
        prop="name"
        label="项目名称"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="code"
        label="项目编号"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="circulateCount"
        label="流转数量"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="circulateTime"
        label="流转期限"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="price"
        align="center"
        label="意向价格">
        <template slot-scope="scope">
          <p>{{ scope.row.price }} 元</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="contact"
        label="联系人"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="phoneNum"
        label="电话"
        align="center"
      >
      </el-table-column>
      <!-- <el-table-column
        prop="code"
        label="数量"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="circulateTime"
        align="center"
        width="100px"
        label="期限">
      </el-table-column> -->
      <el-table-column
        prop="checkStatus"
        label="审核状态"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="action"
        align="center"
        width="180px"
        label="操作">
        <template slot-scope="scope">
          <el-button type="danger" style="margin-right: 2px;" size="small" @click="handleDelete(scope.row.id)">删除</el-button>
          <el-button type="primary" size="small" @click="$router.push({
            path: '/need/detail',
            query: {
              id: scope.row.id
            }
          })">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination style="margin-top:20px;" :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
  </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { checkStatus, demandSearch, needDelete } from '@/api/supply'
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      demandInfos: [],
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
      statusType: [],
      search: {}
    }
  },
  methods: {
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.demandSearch()
    },
    demandSearch() {
      demandSearch({
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize,
        ...this.search
      }).then(res => {
        this.pageInfo.total = res.data.total
        this.demandInfos = res.data.needInfos
      })
    },
    handleDelete(id) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        needDelete({
          needId: id
        }).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.demandSearch()
        })
        
      })
    }
  },
  created() {
    checkStatus().then(res => {
      this.statusType = res.data.typeInfos
    })
    this.demandSearch()
  }
}
</script>

<style lang="scss">
.need-page {
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