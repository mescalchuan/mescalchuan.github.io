<template>
  <div class="detail-page">
    <back></back>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ basicInfo.economicGroupAddress }}</span>
        <span style="margin-right: 0;">户号: {{ basicInfo.familyNo }}</span>
        <span>（{{ basicInfo.shareholderName }}，身份证号：{{ basicInfo.idCard }}）</span>
        <el-tag type="success" size="mini">股权所有情况</el-tag>
      </div>
      <el-table
        header-cell-class-name="table-header-color"
        :data="tableData"
        border
      >
        <el-table-column
          prop="economicGroupId"
          label="编号"
        />
        <el-table-column
          prop="economicGroupCode"
          label="组织代码"
        />
        <el-table-column
          prop="economicGroupName"
          label="组织名称"
        />
        <el-table-column
          prop="legal"
          label="法人代表"
        />
        <el-table-column
          prop="stockRightNo"
          label="股权证号"
        />
        <el-table-column
          prop="stockRightTotalCount"
          label="持股数（综合）"
        />
        <el-table-column
          prop="stockRightTotalAmount"
          label="股总价（综合）"
        />
        <el-table-column
          prop="operate"
          label="操作"
          width="220px"
        >
          <template slot-scope="scope">
            <el-button icon="el-icon-s-tools" type="success" size="small" @click="pledge">质押</el-button>
            <el-button icon="el-icon-s-tools" type="success" size="small" @click="cancelPledge">解除质押</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ basicInfo.economicGroupAddress }}</span>
        <span style="margin-right: 0;">户号: {{ basicInfo.familyNo }}</span>
        <span>（{{ basicInfo.shareholderName }}，身份证号：{{ basicInfo.idCard }}）</span>
        <el-tag type="success" size="mini">股权质押记录</el-tag>
      </div>
      <el-table
        header-cell-class-name="table-header-color"
        :data="historyList"
        border
      >
        <el-table-column
          prop="stockRightOperateDate"
          label="质押时间"
        >
          <template slot-scope="scope">
            <p>{{ moment(scope.row.stockRightOperateDate).format('yyyy-MM-DD') }}</p> 
          </template>
        </el-table-column>
        <el-table-column
          prop="shareholderName"
          label="质押目标股东"
        />
        <el-table-column
          prop="idCard"
          label="股东身份证"
        />
        <el-table-column
          prop="operateCount"
          label="质押股份份额"
        />
        <el-table-column
          prop="totalAmount"
          label="成交额"
        />
        <!-- <el-table-column
          prop="stockRightOperateType"
          label="成交方式"
        />
        <el-table-column
          prop="stockTotal"
          label="结算方式"
        /> -->
      </el-table>
    </el-card>
  </div>
</template>

<script>
import HistoryCard from '../../../components/HistoryCard'
import Back from '../../../components/Back'
import { shareHolderQuery, history } from '@/api/stock'
import moment from 'moment'
export default {
  name: 'OrganizationDetail',
  components: {
    HistoryCard,
    Back
  },
  data() {
    return {
      moment,
      tableData: [],
      basicInfo: {
        shareholderAddress: '',
        familyNo: '',
        shareholderName: '',
        legal: ''
      },
      historyList: []
    }
  },
  created() {
    this.searchList()
  },
  methods: {
    searchList() {
      shareHolderQuery({
        stockRightId: this.$route.query.stockRightId
      }).then(res => {
        this.basicInfo = res.data
        this.tableData = [{
          economicGroupId: res.data.economicGroupId,
          economicGroupCode: res.data.economicGroupCode,
          economicGroupName: res.data.economicGroupName,
          legal: res.data.legal,
          economicGroupAddress: res.data.economicGroupAddress,
          stockRightNo: res.data.stockRightNo,
          stockRightTotalCount: res.data.stockRightTotalCount,
          stockRightTotalAmount: res.data.stockRightTotalAmount
        }]
        //this.historyList = res.data.operateHistoryList
      })
      history({
        stockRightId: 8,//this.$route.query.stockRightId,
        operateTypes: [5]
      }).then(res => {
        this.historyList = res.data.operateHistoryList
      })
    },
    pledge() {
      this.$router.push({
        path: '/stock/share-pledge/pledge',
        query: {
          id: this.$route.query.id,
          stockRightId: this.$route.query.stockRightId
        }
      })
    },
    cancelPledge() {
      this.$router.push({
        path: '/stock/share-pledge/cancel-pledge',
        query: {
          id: this.$route.query.id,
          stockRightId: this.$route.query.stockRightId
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-page {
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
