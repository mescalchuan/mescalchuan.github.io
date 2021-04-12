<template>
  <div class="detail-page">
    <back></back>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>编号： {{ basicInfo.id }}</span>
        <span>组织代码: {{ basicInfo.groupCode }}</span>
        <span>组织名称: {{ basicInfo.groupName }}</span>
        <span>法人: {{ basicInfo.legal }}</span>
      </div>
      <div style="padding: 10px">
        <el-row :gutter="20">
          <el-col :span="18">
            <el-table
              header-cell-class-name="table-header-color"
              :data="tableData"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="totalAmount"
                label="总资产"
              >
                <template slot-scope="scope">
                  <p>¥{{scope.row.totalAmount}}</p>
                </template>
              </el-table-column>
              <el-table-column
                prop="shareholderCount"
                label="股东数"
              />
              <el-table-column
                prop="stockRightCount"
                label="股权总数"
              />
              <el-table-column
                prop="stockRightTotalAmount"
                label="股权总价"
              >
                <template slot-scope="scope">
                  <p>¥{{scope.row.stockRightTotalAmount}}</p>
                </template>
              </el-table-column>
              <el-table-column
                prop="groupStockRightCount"
                label="集体持股总数"
              />
              <el-table-column
                prop="groupStockRightTotalAmount"
                label="集体持股总价"
              />
              <el-table-column
                prop="perStockRightAmount"
                label="每股作价"
              >
                <template slot-scope="scope">
                  <p>¥{{scope.row.perStockRightAmount}}</p>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="6">
            <el-table
              header-cell-class-name="table-header-color"
              :data="stockRightData"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="typeName"
                label="股权类型"
              />
              <el-table-column
                prop="factor"
                label="股权系数"
              />
            </el-table>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import FormItemLayout from '../../components/FormItemLayout'
import Back from '../../components/Back'
import { getDetail, getEconomicDetail } from '@/api/economic'
export default {
  name: 'OrganizationDetail',
  components: {
    FormItemLayout,
    Back
  },
  data() {
    return {
      tableData: [],
      basicInfo: {},
      stockRightData: [],
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
    getEconomicDetail({
      economicGroupId: this.$route.query.id
    }).then(res => {
      this.stockRightData = res.data.stockRightTypeList
      this.tableData = [{
        shareholderCount: res.data.shareholderCount,
        stockRightCount: res.data.stockRightCount,
        stockRightTotalAmount: res.data.stockRightTotalAmount,
        groupStockRightCount: res.data.groupStockRightCount,
        groupStockRightTotalAmount: res.data.groupStockRightTotalAmount,
        perStockRightAmount: res.data.perStockRightAmount,
        totalAmount: res.data.totalAmount
      }]
      this.basicInfo = {
        id : res.data.id,
        groupCode: res.data.groupCode,
        groupName: res.data.groupName,
        legal: res.data.legal
      }
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
