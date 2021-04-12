<template>
  <div class="log-page">
    <div class="content">
      <div class="search-box">
        <div>
          <el-select v-model="operateType" placeholder="请选择" @change="handleSearch">
            <el-option
              v-for="item in operateList"
              :key="item.operateType"
              :label="item.operateTypeName"
              :value="item.operateType">
            </el-option>
          </el-select>
        </div>
        <!-- <el-input v-model="searchKey" placeholder="请输入内容" class="search-input" clearable />
        <el-button type="primary" @click="handleSearch">
          搜索
          <i class="el-icon-search el-icon--right" />
        </el-button> -->
        <div style="margin-left: 20px;">
          <el-radio v-model="date" :label="1" @change="handleSearch">近三天</el-radio>
          <el-radio v-model="date" :label="2" @change="handleSearch">一周</el-radio>
          <el-radio v-model="date" :label="3" @change="handleSearch">一个月</el-radio>
          <el-radio v-model="date" :label="4" @change="handleSearch">三个月</el-radio>
        </div>
      </div>
      <el-table
        header-cell-class-name="table-header-color"
        :data="list"
        border
        style="width: 100%"
      >
        <el-table-column prop="operatorName" label="操作员" width="180" />
        <el-table-column prop="operateTime" label="操作时间" />
        <el-table-column prop="operateType" label="操作类型" />
        <el-table-column prop="operateContent" label="操作内容" />
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="goDetail(scope.row.operateDetail)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" :page-size="30" @on-change="v => handlePageChange(v)"/>
      <el-dialog
        title="操作详情"
        :visible.sync="visible"
        width="30%"
        center>
        <span>{{ detail }}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="visible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getLog, getOperateType } from '@/api/log'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      list: [],
      date: 1,
      operateList: [],
      operateType: 1,
      searchKey: '',
      visible: false,
      detail: '',
      pageInfo: {
        pageNum: 1,
        pageSize: 30,
        total: 0,
        current: 1
      },
    }
  },
  created() {
    getOperateType().then(res => {
      this.operateList = res.data.operateTypes
    })
    this.handleSearch()
  },
  methods: {
    handleSearch() {
      let fd = new FormData()
      fd.append('queryType', this.date)
      fd.append('operateType', this.operateType)
      fd.append('pageNum', this.pageInfo.pageNum)
      fd.append('pageSize', this.pageInfo.pageSize)
      getLog(fd).then(res => {
        this.list = res.data.operateLogInfos
        this.pageInfo.total = res.data.total
      })
    },
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.handleSearch()
    },
    goDetail(d) {
      this.detail = d
      this.visible = true
    }
  }
}
</script>

<style scoped>
.log-page {
  width: 100%;
  padding: 10px;
  background: rgb(235, 238, 242);
  min-height: calc(100vh - 50px);
}
.content {
  background: #fff;
  padding: 20px;
  margin-top: 15px;
}
.search-box {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.option-box {
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
}

.search-input {
  width: 300px;
}
.table-header-color {
  background: rgb(245, 247, 250) !important;
  color: #333 !important;
}
</style>