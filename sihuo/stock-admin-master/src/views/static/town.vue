<template>
  <div class="static-page">
    <area-selector @areaChange="areaChange" hide-village />
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-tag type="success" size="mini">{{ areaList.length ? areaList[0].name : 0 }}</el-tag><span>综合数据</span>
      </div>
      <el-table
        header-cell-class-name="table-header-color"
        :data="tableData"
        border
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
        :data="townDatas"
        border
        style="margin-top: 20px;"
        id="table"
      >
        <el-table-column
          prop="name"
          label="村数据"
        >
          <template slot-scope="scope">
            <p style="color: red;">{{ scope.row.name }}</p>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(item, index) in townLists" :key="'town' + index"
          :prop="item.name"
          :label="item.name"
        />
      </el-table>
    </el-card>
    <el-card class="box-card">
      <chart v-if="showChart" id="static-1" color="#e5aa42" title="本乡镇股份经济合作社数量一览图" :x-axis="this.economicNums.map(item => item.x)" :datas="this.economicNums.map(item => item.y)"/>
    </el-card>
    <el-card class="box-card">
      <chart v-if="showChart" id="static-2" color="#52b9c8" title="本乡镇股份经济合作社参股农民数量一览图" :x-axis="this.memberNums.map(item => item.x)" :datas="this.memberNums.map(item => item.y)"/>
    </el-card>
    <el-card class="box-card">
      <chart v-if="showChart" id="static-3" color="#6cbf35" title="本乡镇股份经济合作社规模一览图" :x-axis="this.largeNums.map(item => item.x)" :datas="this.largeNums.map(item => item.y)"/>
    </el-card>
  </div>
</template>

<script>
import AreaSelector from '@/components/AreaSelector'
import chart from '@/components/chart'
import { townStatistics } from '@/api/statistics'
export default {
  name: 'OrganizationDetail',
  components: {
    chart,
    AreaSelector
  },
  data() {
    return {
      areaList: [],
      showChart: false,
      tableData: [],
      townLists: [],
      townDatas: [],
      economicNums: [],
      memberNums: [],
      largeNums: []
    }
  },
  methods: {
    areaChange(val) {
      this.areaList = val
      townStatistics({
        townshipId: this.areaList[0].value
      }).then(res => {
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
        this.townDatas = [{
          name: '在册农民数',
        }, {
          name: '在册股东数'
        }]
        res.data.villageStatisticsInfoList.map(item => {
          this.economicNums.push({
            x: item.villageName,
            y: item.economicGroupCount
          })
          this.memberNums.push({
            x: item.villageName,
            y: item.joinStockCount
          })
          this.largeNums.push({
            x: item.villageName,
            y: item.totalAmount
          })
          this.townLists.push({
            name: item.villageName,
            value: item.villageId
          })
          this.townDatas[0][item.villageName] = item.registerMemberCount
          this.townDatas[1][item.villageName] = item.joinStockCount
        })
        
        this.showChart = true
      })
    },
  },
}
</script>

<style lang="scss">
.static-page {
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
