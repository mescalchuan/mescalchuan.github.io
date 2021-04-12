<template>
  <div class="static-page">
    <area-selector @areaChange="areaChange" />
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-tag type="success" size="mini">{{ areaList.length ? areaList[1].name : 0 }}</el-tag><span>综合数据</span>
      </div>
      <div class="top-table">
        <el-table
          header-cell-class-name="table-header-color"
          :data="tableData"
          border
          class="none-line"
          style="flex: 2;"
        >
          <el-table-column
            prop="registerFamilyCount"
            label="在册农户（家庭)"
            width="130px"
          >
            <template slot-scope="scope">
              <p style="color:green">{{ scope.row.registerFamilyCount }}户</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="registerMemberCount"
            label="在册确认成员"
          >
            <template slot-scope="scope">
              <p style="color:green">{{ scope.row.registerMemberCount }}名</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="unConfirmMemberCount"
            label="未确认成员数"
          >
            <template slot-scope="scope">
              <p style="color:green">{{ scope.row.unConfirmMemberCount }}名</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="joinStockCount"
            label="入股成员"
          >
            <template slot-scope="scope">
              <p style="color:green">{{ scope.row.joinStockCount }}名({{ ((scope.row.joinStockCount / scope.row.registerMemberCount) * 100).toFixed(2) }}%)</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="economicGroupCount"
            label="经济组织"
          >
            <template slot-scope="scope">
              <p style="color:green">{{ scope.row.economicGroupCount }}个</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="totalAmount"
            label="经济组织资产总额"
            width="150px"
          >
            <template slot-scope="scope">
              <p style="color:green">￥{{ scope.row.totalAmount }}</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="allocatedAmount"
            label="已分配/未分配"
          >
            <template slot-scope="scope">
              <p style="color:green">￥{{ scope.row.allocatedAmount }}/￥{{ scope.row.unAllocatedAmount }}</p>
            </template>
          </el-table-column>
        </el-table>
        <el-table
          header-cell-class-name="table-header-color"
          :data="stockRightInfoList"
          border
          style="flex: 1; margin-left: 20px;"
        >
          <el-table-column
            prop="type"
            label="股权类型"
          />
          <el-table-column
            prop="count"
            label="配股数量"
          />
        </el-table>
      </div>
      <bonus-manage v-if="areaList.length > 1" is-static :village-id="areaList[1].value" from="/report/town"/>
    </el-card>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import AreaSelector from '@/components/AreaSelector'
import BonusManage from '@/views/stock/bonusManage/main'
import { getAllVillage } from '@/api/common'
import { villageStatistics } from '@/api/statistics'
export default {
  name: 'OrganizationDetail',
  components: {
    Pagination,
    AreaSelector,
    BonusManage
  },
  data() {
    return {
      showChart: false,
      areaList: [],
      tableData: [],
      stockRightInfoList: [],
    }
  },
  methods: {
    areaChange(val) {
      this.areaList = val
      villageStatistics({
        villageId: this.areaList[1].value
      }).then(res => {
        this.stockRightInfoList = res.data.stockRightInfoList
        this.tableData = [{
          allocatedAmount: res.data.allocatedAmount,
          economicGroupCount: res.data.economicGroupCount,
          joinStockCount: res.data.joinStockCount,
          registerFamilyCount: res.data.registerFamilyCount,
          registerMemberCount: res.data.registerMemberCount,
          unConfirmMemberCount: res.data.unConfirmMemberCount,
          totalAmount: res.data.totalAmount,
          unAllocatedAmount: res.data.unAllocatedAmount
        }]
      })
    },
  },
}
</script>

<style lang="scss">
.static-page {
  .none-line:before {
    height: 0;
  }
  .none-line:after {
    height: 0;
  }
  .top-table {
    display: flex;
  }
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
  #table thead tr th:nth-child(1) {
    color: red;
  }
}
</style>

<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
