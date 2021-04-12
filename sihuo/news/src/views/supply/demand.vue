<template>
  <div>
    <div class="flex align-items-center">
      <el-select placeholder="乡镇" v-model="search.townshipId" style="width:150px;" @change="handleTownChange">
        <el-option v-for="(item, index) in towns" :key="index" :label="item.townshipName" :value="item.townshipId"/>
      </el-select>
      <el-select placeholder="村庄" v-model="search.villageId" style="width:150px;margin-left:10px;">
        <el-option v-for="(item, index) in villages" :key="index" :label="item.villageName" :value="item.villageId"/>
      </el-select>
      <el-select placeholder="项目类型" v-model="search.projectType" style="width:150px;margin-left:10px;">
        <el-option v-for="(item, index) in projectType" :key="index" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select placeholder="面积" v-model="search.areaInterval" style="width:100px;margin-left:10px;">
        <el-option v-for="(item, index) in areaIntervalType" :key="index" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select placeholder="价格" v-model="search.priceInterval" style="width:100px;margin-left:10px;">
        <el-option v-for="(item, index) in priceIntervalType" :key="index" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select placeholder="方式" v-model="search.circulateType" style="width:100px;margin-left:10px;">
        <el-option v-for="(item, index) in circulateType" :key="index" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select placeholder="年限" v-model="search.timeInterval" style="width:100px;margin-left:10px;">
        <el-option v-for="(item, index) in timeIntervalType" :key="index" :label="item.name" :value="item.id"/>
      </el-select>
    </div>
    <div class="flex" style="margin-top:10px;">
      <el-input v-model="search.keyword" placeholder="全文检索" style="width:100%;"/>
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
        <template slot-scope="scope">
          <a class="link-hover" href="javascript:void(0)" style="color: #3fae5f;" @click="handleRowClick(scope.row)">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="circulationCompany"
        label="流转单位/个人"
        width="200px"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="circulateTime"
        align="center"
        width="100px"
        label="年限">
      </el-table-column>
      <el-table-column
        prop="circulateCount"
        align="center"
        width="150px"
        label="流转面积">
      </el-table-column>
      <el-table-column
        prop="price"
        align="center"
        width="100px"
        label="价格">
        <template slot-scope="scope">
          <p>{{ scope.row.price }} 元</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="publishDate"
        align="center"
        width="110px"
        label="发布日期">
      </el-table-column>
    </el-table>
    <pagination style="margin-top:20px;" :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getCirculateType, getProjectType, getAreaIntervalType, getPriceIntervalType, getTimeIntervalType, demandSearch } from '@/api/supply'
import { getAllVillage } from '@/api/common'
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
      circulateType: [],
      projectType: [],
      towns: [],
      villages: [],
      areaIntervalType: [],
      priceIntervalType: [],
      timeIntervalType: [],
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
    handleRowClick(row) {
      this.$router.push({
        path: '/supply/need-info',
        query: {
          id: row.id
        }
      })
    },
    handleTownChange(e) {
      this.villages = this.towns.filter(item => item.townshipId == e)[0].villageInfos
      delete this.search.villageId
    }
  },
  async created() {
    // getAllVillage()
    let circulateType = await getCirculateType()
    this.circulateType = circulateType.data.typeInfos

    let projectType = await getProjectType()
    this.projectType = projectType.data.typeInfos

    let areaIntervalType = await getAreaIntervalType()
    this.areaIntervalType = areaIntervalType.data.typeInfos

    let priceIntervalType = await getPriceIntervalType()
    this.priceIntervalType = priceIntervalType.data.typeInfos

    let timeIntervalType = await getTimeIntervalType()
    this.timeIntervalType = timeIntervalType.data.typeInfos

    let towns = await getAllVillage()
    this.towns = towns.data.townshipInfos

    let search = {}
    if(this.$route.query.townshipId) {
      search.townshipId = Number(this.$route.query.townshipId)
      this.handleTownChange(search.townshipId)
    }
    if(this.$route.query.projectType) {
      search.projectType = Number(this.$route.query.projectType)
    }
    if(this.$route.query.areaInterval) {
      search.areaInterval = Number(this.$route.query.areaInterval)
    }
    if(this.$route.query.keyword) {
      search.keyword = this.$route.query.keyword
    }
    this.search = search
    this.demandSearch()
  }
}
</script>