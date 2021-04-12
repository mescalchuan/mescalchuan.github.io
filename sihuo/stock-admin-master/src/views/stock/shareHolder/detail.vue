<template>
  <div class="detail-page">
    <back></back>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>股东户号： {{ basicInfo.familyNo }}</span>
        <span>股东姓名: {{ basicInfo.shareholderName }}</span>
        <span>身份证号: {{ basicInfo.idCard }}</span>
        <span>股权证号: {{ basicInfo.stockRightNo }}</span>
        <span>入股经济组织: {{ basicInfo.economicGroupName }}</span>
      </div>
      <el-table
        header-cell-class-name="table-header-color"
        :data="assetData"
        border
      >
        <el-table-column
          prop="stockRightTypeName"
          label="股权类型"
        />
        <el-table-column
          prop="stockRightCount"
          label="股权份额"
        />
        <el-table-column
          prop="totalAmount"
          label="股权总价值"
        />
      </el-table>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-tag type="success" size="mini">变更记录</el-tag>
      </div>
      <div>
        <history-card v-for="(item, index) in historys" :datas="item" :basic-info="basicInfo" style="margin: 10px 0 0 0;"></history-card>
      </div>
    </el-card>
  </div>
</template>

<script>
import HistoryCard from '../../../components/HistoryCard'
import Back from '../../../components/Back'
import { history, getStockDetail } from '@/api/stock'
export default {
  name: 'OrganizationDetail',
  components: {
    HistoryCard,
    Back
  },
  data() {
    return {
      tableData: [
        {
          index: 1,
          code: 12,
          name: 'zhanah',
          represent: 'sdasas',
          address: 'lallallal',
          createdDate: '2018-09-29'
        }
      ],
      basicInfo: {
       
      },
      assetData: [
        
      ],
      stockRightData: [
        {
          type: '贡献股',
          price: '1.0'
        },
        {
          type: '贡献股',
          price: '1.0'
        },
        {
          type: '爱新股',
          price: '1.0'
        }
      ],
      form: {
        total: 1222,
        distribute: [
          {
            type: '',
            coefficient: 1.0
          }
        ]
      },
      typeList: [
        {
          label: 'kakkak',
          value: 'ssss'
        }
      ],
      historys: []
    }
  },
  methods: {
    addParam() {
      let temp = {
        type: '',
        coefficient: 1.0
      }
      this.form.distribute.push(temp)
    },
    deleteParam(index) {
      this.form.distribute.splice(index, 1)
    }
  },
  created() {
    getStockDetail({
       stockRightId: this.$route.query.stockRightId
    }).then(res => {
      this.basicInfo = res.data
      this.assetData = res.data.stockRightDetailInfos
    })
    history({
      stockRightId: this.$route.query.stockRightId,
      operateTypes: [1,2]
    }).then(res => {
      this.historys = res.data.operateHistoryList
    })
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
