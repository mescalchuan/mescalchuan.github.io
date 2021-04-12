<template>
	<div class="news-page">
    <div class="flex justify-content-space-between">
      <div style="width: 300px">
        <div class="flex align-items-center">
          <p>当前位置：</p>
          <breadcrumb/>
        </div>
        <el-divider content-position="left">成交信息</el-divider>
        <div class="supply-menu">
          <div v-for="(item, index) in projectType" :key="index" class="supply-menu-child" :style="{backgroundColor: activeMenu == item.id ? '#71ceff' : '#E6F7FF', color: activeMenu == item.id ? 'white' : '#1790FF'}" @click="handleMenuClick(item.id)">{{ item.name }}</div>
        </div>
      </div>
      <div style="margin-left: 20px;width:100%;">
        <el-card>
          <div class="flex align-items-center">
            <el-select placeholder="乡镇" v-model="search.townshipId" style="width:150px;" @change="handleTownChange">
              <el-option v-for="(item, index) in towns" :key="index" :label="item.townshipName" :value="item.townshipId"/>
            </el-select>
            <el-select placeholder="村庄" v-model="search.villageId" style="width:150px;margin-left:10px;">
              <el-option v-for="(item, index) in villages" :key="index" :label="item.villageName" :value="item.villageId"/>
            </el-select>
            <el-select placeholder="方式" v-model="search.circulateType" style="width:100px;margin-left:10px;">
              <el-option v-for="(item, index) in circulateType" :key="index" :label="item.name" :value="item.id"/>
            </el-select>
            <el-select placeholder="年限" v-model="search.timeInterval" style="width:100px;margin-left:10px;">
              <el-option v-for="(item, index) in timeIntervalType" :key="index" :label="item.name" :value="item.id"/>
            </el-select>
            <div class="flex">
              <el-input v-model="search.keyword" placeholder="全文检索" style="width:200px;margin-left:10px;"/>
              <el-button type="primary" @click="dealSearch">搜索</el-button>
            </div>
          </div>
          <el-table
            :data="transactionInfos"
            header-cell-class-name="table-header-color"
            style="width: 100%;margin-top:20px;">
            <el-table-column
              prop="code"
              label="编号"
              align="center"
              width="100px"
            >
              <template slot-scope="scope">
                <a class="link-hover" href="javascript:void(0)" style="color: #3fae5f;" @click="handleRowClick(scope.row)">{{ scope.row.code }}</a>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="项目名称"
              align="center"
            >
              <template slot-scope="scope">
                <a class="link-hover" href="javascript:void(0)" style="color: #3fae5f;" @click="handleRowClick(scope.row)">{{ scope.row.name }}</a>
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
              prop="circulateType"
              align="center"
              width="100px"
              label="成交类型">
            </el-table-column>
            <el-table-column
              prop="contractSignDate"
              align="center"
              width="100px"
              label="成交日期">
            </el-table-column>
          </el-table>
          <pagination style="margin-top:20px;" :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Pagination from '@/components/Pagination'
import { getCirculateType, getProjectType, getTimeIntervalType } from '@/api/supply'
import { getAllVillage } from '@/api/common'
import { dealSearch } from '@/api/deal'
export default {
  components: {
    Breadcrumb,
    Pagination
  },
	data() {
		return {
      activeMenu: 1,
      tableData: [{
        name: 111,
        code: 111
      }],
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
      projectType: [],
      timeIntervalType: [],
      circulateType: [],
      towns: [],
      villages: [],
      search: {},
      transactionInfos: []
		}
  },
  methods: {
    handleMenuClick(id) {
      this.activeMenu = id
      this.search.projectType = id
      this.dealSearch()
    },
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.dealSearch()
    },
    handleTownChange(e) {
      this.villages = this.towns.filter(item => item.townshipId == e)[0].villageInfos
      delete this.search.villageId
    },
    handleRowClick(row) {
      this.$router.push({
        path: '/deal/detail',
        query: {
          id: row.id
        }
      })
    },
    dealSearch() {
      dealSearch({
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize,
        projectType: this.activeMenu,
        ...this.search
      }).then(res => {
        this.transactionInfos = res.data.transactionInfos
        this.pageInfo.total = res.data.total
      })
    }
  },
  async created() {
    let circulateType = await getCirculateType()
    this.circulateType = circulateType.data.typeInfos

    let timeIntervalType = await getTimeIntervalType()
    this.timeIntervalType = timeIntervalType.data.typeInfos

    let towns = await getAllVillage()
    this.towns = towns.data.townshipInfos

    let projectType = await getProjectType()
    this.projectType = projectType.data.typeInfos
    this.projectType = projectType.data.typeInfos
    this.activeMenu = projectType.data.typeInfos[0].id
    
    let search = {}
    if(this.$route.query.townshipId) {
      search.townshipId = Number(this.$route.query.townshipId)
      this.handleTownChange(search.townshipId)
    }
    if(this.$route.query.projectType) {
      search.projectType = Number(this.$route.query.projectType)
      this.activeMenu = search.projectType
    }
    if(this.$route.query.keyword) {
      search.keyword = this.$route.query.keyword
    }
    this.search = search
    this.dealSearch()
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
  .supply-menu {
    font-size: 14px;
    width: 200px;
    text-align: center;
    cursor: pointer;
    .supply-menu-child {
      color: #3fae5f;
      height: 50px;
      line-height: 50px;
      border: 1px solid #eee;
      font-weight: bold;
      margin-bottom: 5px;
      &:hover {
        background-color: #71ceff !important;
        color: white !important;
      }

    }
  }
</style>