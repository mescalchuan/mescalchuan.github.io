<template>
  <div class="add-member-container">
    <back></back>
    <el-card class="box-card">
      <div slot="header" class="clearfix">股权质押登记</div>
      <div class="info-box">
        <p class="label"><strong>股质押组织</strong></p> 
        <p class="label">组织代码： {{basicInfo.groupCode}}</p>
        <p class="label">组织名称： {{basicInfo.groupName}}</p>
        <p class="label">法人： {{basicInfo.legal}}</p>
        <p class="label">组织地址： {{basicInfo.address}}</p>
      </div>
      <div class="info-box" style="background:#afde5c">
        <p class="label"><strong>质押方信息</strong></p> 
        <p class="label">户主： {{stockInfo.shareholderName}}</p>
        <p class="label">身份证号： {{stockInfo.idCard}}</p>
        <p class="label">地址： {{stockInfo.address}}</p>
        <p class="label">所持股数： {{stockInfo.stockRightCount}}</p>
      </div>
    </el-card>
    <el-card>
     <el-table
          header-cell-class-name="table-header-color"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="pledgeCompany"
            label="质押给单位(个人)名称"
            width="120"
          />
          <el-table-column
            prop="pledgeDate"
            label="质押时间"
          />
          <el-table-column
            prop="releaseDate"
            label="解除质押时间"
          />
          <el-table-column
            prop="dealCount"
            label="质押份额数量"
          />
          <el-table-column
            prop="dealAmount"
            label="质押金额"
          />
           <el-table-column
            prop="appraiser"
            label="见证人"
          />
          <el-table-column
            prop="pledgeDescription"
            label="备注"
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="100"
          >
            <template slot-scope="scope">
              <el-button icon="el-icon-s-tools" type="success" size="small" @click="release(scope.row)">解除质押</el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-card>
  </div>
</template>

<script>
import { getDetail } from '@/api/economic'
import { shareHolderInfoQuery, pledgeList, pledgeRelease } from '@/api/stock'
import Back from '@/components/Back'
import moment from 'moment'
export default {
  name: 'Dashboard',
  components: {
    Back
  },
  data() {
    return {
      moment,
      basicInfo: {
        
      },
      stockInfo: {},
      tableData: []
    }
  },
  methods: {
    getList() {
      pledgeList({
        stockRightId: this.$route.query.stockRightId
      }).then(res => this.tableData = res.data.pledgeInfoList)
    },
    release(row) {
      let pledgeId = row.pledgeId
      let rd = moment(row.releaseDate).valueOf()
      let nd = new Date()
      nd.setHours(0)
      nd.setMinutes(0)
      nd.setSeconds(0)
      nd.setMilliseconds(0)
      nd = moment(nd).valueOf()
      let text = '是否解除质押？'
      if(rd > nd) {
        text = '解除质押时间未到，是否继续解除？'
      }
      this.$confirm(text, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        pledgeRelease({
          pledgeId
        }).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
          this.getList()
        })
      }).catch(() => {
        
      })
    }
  },
  created() {
    getDetail({
      economicGroupId: this.$route.query.id
    }).then(res => {
      this.basicInfo = res.data
    })
    shareHolderInfoQuery({
      stockRightId: this.$route.query.stockRightId
    }).then(res => {
      this.stockInfo = res.data
    })
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.add-member-container {
  width: 100%;
  padding: 10px;
  background: rgb(235,238,242);
  min-height: calc(100vh - 50px);

  .box-card {
    margin-bottom: 20px;
  }
  .info-box {
    font-size: 14px;
    background-color: #5cafde;
    color: white;
    padding: 5px 100px 5px 10px;
    margin: 10px;
    display: inline-block;
    .label {
      margin-bottom: 10px;
    }
  }

  .search-box {
    display: flex;
    margin-bottom: 20px;
  }

  .search-input {
    width: 300px;
  }
}
</style>


<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
