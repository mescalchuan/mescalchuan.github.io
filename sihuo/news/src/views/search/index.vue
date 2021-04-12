<template>
  <div>
    <div class="flex align-items-center">
      <p>当前位置：</p>
      <breadcrumb/>
    </div>
    <div class="flex align-items-center" style="margin-top:20px;">
      <el-select placeholder="乡镇" v-model="search.townshipId" style="width:150px;" @change="handleTownChange">
        <el-option v-for="(item, index) in towns" :key="index" :label="item.townshipName" :value="item.townshipId"/>
      </el-select>
      <el-select placeholder="村庄" v-model="search.villageId" style="width:150px;margin-left:10px;">
        <el-option v-for="(item, index) in villages" :key="index" :label="item.villageName" :value="item.villageId"/>
      </el-select>
      <el-select v-model="search.infoType" placeholder="请选择信息分类" style="width:150px;margin-left:10px;">
        <el-option v-for="(item, index) in infoType" :key="index" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select placeholder="项目类型" v-model="search.projectType" style="width:150px;margin-left:10px;">
        <el-option v-for="(item, index) in projectType" :key="index" :label="item.name" :value="item.id"/>
      </el-select>
      <div class="flex" style="margin-left:10px;">
        <el-input v-model="search.keyword" placeholder="全文检索" style="width:200px;"/>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </div>
    </div>
    <el-card style="margin-top:20px;">
      <el-table
        header-cell-class-name="table-header-color"
        :data="queryResultList"
        style="width: 100%">
        <el-table-column
          prop="projectName"
          label="项目名称"
          align="center"
        >
          <template slot-scope="scope">
            <a class="link-hover" href="javascript:void(0)" style="color: #3fae5f;" @click="handleRowClick(scope.row)">{{ scope.row.projectName }}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="transferor"
          label="转出方"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="transferee"
          align="center"
          label="转入方">
        </el-table-column>
        <el-table-column
          prop="projectType"
          align="center"
          width="150px"
          label="项目类型">
        </el-table-column>
        <el-table-column
          prop="transactionDate"
          align="center"
          width="100px"
          label="成交日期">
        </el-table-column>
      </el-table>
      <pagination style="margin-top:20px;" :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
    </el-card>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Pagination from '@/components/Pagination'
import { getAllVillage } from '@/api/common'
import { getProjectType } from '@/api/supply'
import { search, getInfoType } from '@/api/search'
export default {
  components: {
    Breadcrumb,
    Pagination
  },
  data() {
    return {
      tableData: [{
        name: 111
      }],
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
      projectType: [],
      villages: [],
      towns: [],
      infoType: [],
      search: {},
      queryResultList: []
    }
  },
  created() {
    getProjectType().then(res => {
      this.projectType = res.data.typeInfos
    })
    getInfoType().then(res => {
      this.infoType = res.data.typeInfos
      this.search.infoType = res.data.typeInfos[0].id
      this.handleSearch()
    })
    getAllVillage().then(res => {
      this.towns = res.data.townshipInfos
    })
  },
  methods: {
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.handleSearch()
    },
    handleTownChange(e) {
      this.villages = this.towns.filter(item => item.townshipId == e)[0].villageInfos
      delete this.search.villageId
    },
    handleSearch() {
      search({
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize,
        ...this.search
      }).then(res => {
        this.queryResultList = res.data.queryResultList
        this.pageInfo.total = res.data.total
      })
    },
    handleRowClick(row) {
      let router = ''
      switch(row.infoType) {
        case 1:
          router = '/deal/detail?id=' + row.id
          break
        case 2:
          router = '/supply/supply-info?id=' + row.id
          break
        case 3:
          router = '/supply/need-info?id=' + row.id
          break
      }
      this.$router.push({
        path: router
      })
    }
  }
}
</script>