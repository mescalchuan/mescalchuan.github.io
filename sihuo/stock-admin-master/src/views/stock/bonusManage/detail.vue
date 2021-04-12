<template>
  <div class="detail-page">
    <back></back>
    <div class="option-box">
      <div class="search-box">
        <el-input
          v-model="searchKey"
          placeholder="可根据股东户号、股东姓名、股权证号搜索"
          class="search-input"
          style="width:400px;"
          clearable
        />
        <el-button type="primary" @click="searchList">搜索<i class="el-icon-search el-icon--right" /></el-button>
      </div>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>组织代码: {{ basicInfo.groupCode }}</span>
        <span>组织名称: {{ basicInfo.groupName }}</span>
        <span>法人: {{ basicInfo.legal }}</span>
        <el-tag type="success" size="mini">分红记录明细</el-tag>
      </div>
      <el-table
        header-cell-class-name="table-header-color"
        :data="tableData"
        border
        show-summary
        :summary-method="getSummaries"
      >
        <el-table-column
          prop="familyNo"
          label="股东户号"
        />
        <el-table-column
          prop="shareholderName"
          label="股东姓名"
        />
        <el-table-column
          prop="stockRightNo"
          label="股权证号"
        />
        <el-table-column
          prop="stockRightCount"
          label="股份数量(分红时)"
        />
        <el-table-column
          prop="stockRightTotalMoney"
          label="股份总价(分红时)"
        />
        <el-table-column
          prop="dividendAmount"
          label="分红金额"
        />
      </el-table>
       <pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
    </el-card>
  </div>
</template>

<script>
import HistoryCard from '../../../components/HistoryCard'
import Back from '../../../components/Back'
import Pagination from '@/components/Pagination'
import { getDetail } from '@/api/economic'
import { bonusDetail } from '@/api/stock'
export default {
  name: 'OrganizationDetail',
  components: {
    HistoryCard,
    Back,
    Pagination
  },
  data() {
    return {
      searchKey: '',
      tableData: [],
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
      economicGroupId: this.$route.query.id
    }).then(res => {
      this.basicInfo = res.data
    })
    this.searchList()
  },
  methods: {
    searchList() {
      bonusDetail({
        dividendId: this.$route.query.dividendId,
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize,
        keyword: this.searchKey
      }).then(res => {
        this.tableData = res.data.dividendDetailInfos
        this.pageInfo.total = res.data.total
      })
    },
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.searchList()
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计';
          return;
        }
        if(index === 1) {
          sums[index] = `股东共${data.length}名`
        }
        if(index === 3) {
          let result = 0
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            result = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] = `合计股份${result}份`
          } else {
            sums[index] = '合计股份N/A份';
          }
        }
        if(index === 4) {
          let result = 0
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            result = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] = `合计股价值￥${result}`
          } else {
            sums[index] = '合计股价值￥N/A';
        }
        }
        if(index === 5) {
          let result = 0
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            result = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] = `共计分红￥${result}`
          } else {
            sums[index] = '共计分红￥N/A';
          }
        }
      });
      return sums
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-page {
  .content {
    background: #fff;
    padding: 20px;
    margin-top: 15px;
  }
  .option-box {
    margin: 0;
    display: flex;
    justify-content: space-between;
    .search-box {
      display: flex;
    }
  }
  width: 100%;
  padding: 10px;
  background: rgb(235,238,242);
  min-height: calc(100vh - 50px);

  .content {
    background: #fff;
    padding: 20px;
    margin-top: 15px;
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

  .form-group {
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;

    .width-200 {
      width: 200px;
    }

    .add-btn {
      margin: 0 0 0 20px;
    }
  }
  .form-item-width {
    width: 40%;
    max-width: 400px;
  }
}
</style>

<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
