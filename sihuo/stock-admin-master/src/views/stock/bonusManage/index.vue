<template>
  <div class="bonus-page">
    <div class="bonus-content">
      <div class="option-box" v-if="!isStatic">
        <div class="search-box">
          <el-input
            v-model="searchKey"
            placeholder="可根据股东户号、股东姓名、股权证号、身份证号码搜索"
            class="search-input"
            clearable
          />
          <el-button type="primary">搜索<i class="el-icon-search el-icon--right" /></el-button>
        </div>
      </div>
      <el-card class="box-card" v-if="!isStatic">
        <div slot="header" class="clearfix">
          <span>组织代码: {{ basicInfo.groupCode }}</span>
          <span>组织名称: {{ basicInfo.groupName }}</span>
          <span>法人: {{ basicInfo.legal }}</span>
          <el-button icon="el-icon-plus" type="success" size="small" @click="addShareholder" style="float: right;">分红</el-button>
        </div>
        <el-table
          header-cell-class-name="table-header-color"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="shareholderCount"
            label="股东数量"
          />
          <el-table-column
            prop="stockRightCount"
            label="综合股权数量"
          />
          <el-table-column
            prop="frozenStockRightCount"
            label="综合冻结股权数量"
          />
          <el-table-column
            prop="stockRightTotalAmount"
            label="综合股权价值"
          />
          <el-table-column
            prop="frozenStockRightTotalAmount"
            label="冻结股权价值"
          />
        </el-table>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>组织代码: {{ basicInfo.groupCode }}</span>
          <span>组织名称: {{ basicInfo.groupName }}</span>
          <span>法人: {{ basicInfo.legal }}</span>
          <el-tag type="success" size="mini" v-if="!isStatic">分红记录</el-tag>
        </div>
        <el-table
          header-cell-class-name="table-header-color"
          :data="history"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="dividendYear"
            label="分红年份"
          />
          <el-table-column
            prop="dividendTime"
            label="	分红日期"
          />
          <el-table-column
            prop="dividendAmount"
            label="分红金额"
          />
          <el-table-column
            prop="shareholderCount"
            label="分红股东数量"
          />
          <el-table-column
            prop="perStockRightMoney"
            label="每股分红金额"
          />
          <el-table-column
            prop="description"
            label="备注信息"
            width="200px"
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="100"
          >
            <template slot-scope="scope">
              <el-button icon="el-icon-warning" type="warning" size="small" @click="goDetail(scope.row.dividendId)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
      </el-card>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getDetail } from '@/api/economic'
import { bonusRecord, bonusQuery } from '@/api/stock'
export default {
  components: {
    Pagination
  },
  props: {
    economicId: {
      type: Number
    },
    isStatic: {
      type: Boolean,
      default: false
    },
    from: {
      type: String
    }
  },
  data() {
    return {
      tableData: [],
      history: [],
      searchKey: '',
      basicInfo: {},
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
    }
  },
  created() {
    getDetail({
      economicGroupId: this.economicId
    }).then(res => {
      this.basicInfo = res.data
    })
    this.searchRecord()
    this.bonusQuery()
  },
  methods: {
    searchRecord() {
      bonusRecord({
        economicGroupId: this.economicId,
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize,
        keyword: this.searchKey
      }).then(res => {
        this.history = res.data.dividendInfos
        this.pageInfo.total = res.data.total
      })
    },
    bonusQuery() {
      bonusQuery({
        economicGroupId: this.economicId,
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize
      }).then(res => {
        this.tableData = [{
          stockRightCount: res.data.stockRightCount,
          stockRightTotalAmount: res.data.stockRightTotalAmount,
          frozenStockRightCount: res.data.frozenStockRightCount,
          frozenStockRightTotalAmount: res.data.frozenStockRightTotalAmount,
          shareholderCount: res.data.shareholderCount
        }]
      })
    },
    addShareholder(item) {
      this.$router.push({
        path: '/stock/bouns-admin/add',
        query: {
          id: this.economicId,
        }
      })
    },
    goDetail(dividendId) {
      this.$router.push({
        path: '/stock/bouns-admin/detail',
       query: {
          id: this.economicId,
          dividendId,
          from: this.from ? 'town' : 'bonus'
       },
      })
    },
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.searchRecord()
    }

  }
}
</script>

<style lang="scss" scoped>
  .bonus-page {
    width: 100%;
  }

  .bonus-content {
    background: #fff;
  }

  .tag-title {
      padding: 10px 0;
      margin: 10px 0 20px 0;
      border-bottom: 1px dashed #d4dfee;
  }

  .top {
      margin-top: 0;
      padding-top: 0;
  }

  .tag-cursor {
      cursor: pointer;
  }

  .option-box {
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  .box-card {
    margin-top: 10px;
    .clearfix {
      span {
        font-size: 14px;
        font-weight: 600;
        display: inline-block;
        margin-right: 20px;
      }
    }
  }

  .search-input {
    width: 400px;
  }
</style>

<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
