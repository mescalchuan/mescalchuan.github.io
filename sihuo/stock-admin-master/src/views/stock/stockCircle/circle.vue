<template>
  <div class="add-member-container">
    <back></back>
    <el-card class="box-card">
      <div slot="header" class="clearfix">股权流转登记</div>
      <div class="info-box">
        <p class="label"><strong>经济组织</strong></p>
        <p class="label">组织代码： {{basicInfo.groupCode}}</p>
        <p class="label">组织名称： {{basicInfo.groupName}}</p>
        <p class="label">法人： {{basicInfo.legal}}</p>
        <p class="label">组织地址： {{basicInfo.address}}</p>
      </div>
      <div class="info-box" style="background:#afde5c">
        <p class="label"><strong>转入方信息</strong></p> 
        <p class="label">股东： {{stockOutInfo.shareholderName}}</p>
        <p class="label">身份证号： {{stockOutInfo.idCard}}</p>
        <p class="label">地址： {{stockOutInfo.address}}</p>
        <p class="label">可流转股权数： {{stockOutInfo.stockRightCount}}</p>
      </div>
      <div class="info-box" style="background:#afde5c">
        <p class="label"><strong>转出方信息</strong></p> 
        <p class="label">股东： {{stockInfo.shareholderName}}</p>
        <p class="label">身份证号： {{stockInfo.idCard}}</p>
        <p class="label">地址： {{stockInfo.address}}</p>
        <p class="label">可流转股权数： {{stockInfo.stockRightCount}}</p>
      </div>
    </el-card>
    <el-card>
      <el-form ref="ruleForm" :model="form" :rules="rules"  label-width="200px" style="margin-right:150px" class="demo-ruleForm">
        <el-form-item label="成交股数" prop="transformCount">
          <el-input v-model="form.transformCount" />
        </el-form-item>
        <el-form-item label="成交额" prop="totalAmount">
          <el-input v-model="form.totalAmount" />
        </el-form-item>
        <el-form-item label="成交方式" prop="settleType">
          <el-select v-model="form.dealType" filterable placeholder="请选择成交方式" style="width:100%">
            <el-option
              v-for="item in dealTypes"
              :key="item.dealTypeId"
              :label="item.dealTypeName"
              :value="item.dealTypeId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="结算方式" prop="settleType">
          <el-select v-model="form.settleType" filterable placeholder="请选择结算方式" style="width:100%">
            <el-option
              v-for="item in settleTypes"
              :key="item.settleTypeId"
              :label="item.settleTypeName"
              :value="item.settleTypeId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="登记员" prop="registrant">
          <el-input v-model="form.registrant" disabled/>
        </el-form-item>
        <el-form-item label="鉴证人" prop="appraiser">
          <el-input v-model="form.appraiser" />
        </el-form-item>
        <el-form-item label="流转说明" prop="description">
          <el-input v-model="form.description" type="textarea"/>
        </el-form-item>
      </el-form>
      <el-button type="primary" style="width:calc(100% - 300px);margin:0 150px;" @click="transform">确认转出</el-button>
    </el-card>
  </div>
</template>

<script>
import { getDetail } from '@/api/economic'
import { searchMembers } from '@/api/member'
import { settleType, dealType, transform, shareHolderInfoQuery } from '@/api/stock'
import Back from '@/components/Back'
export default {
  name: 'Dashboard',
  components: {
    Back
  },
  data() {
    return {
      basicInfo: {
        
      },
      stockInfo: {},
      stockOutInfo: {},
      settleTypes: [],
      dealTypes: [],
      form: {
        transformCount: 0,
        totalAmount: 0,
      },
      rules: {
        transformCount: { required: true, message: '请输入成交股数' },
        totalAmount: { required: true, message: '请输入成交额' },
        registrant: { required: true, message: '请输入登记员' },
        appraiser: { required: true, message: '请输入鉴证人' }
      },
      memberId: ''
    }
  },
  methods: {
    handleCreate() {
      createStock({
        economicGroupId: this.$route.query.id,
        memberId: this.memberId,
        stockRightNo: this.stockCode
      }).then(res => {
        this.dialogVisible = false
        this.$message({
          type: 'success',
          message: '操作成功'
        })
        this.search()
      })
    },
    transform() {
      this.form.transferor = this.$route.query.stockRightId
      this.form.transferee = this.$route.query.stockRightOutId
      this.$refs.ruleForm.validate(valid => {
        if(valid) {
          transform(this.form).then(res => {
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.$router.go(-1)
          })
        }
      })
      
    }
  },
  created() {
    this.form.registrant = localStorage.getItem('un')
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
    shareHolderInfoQuery({
      stockRightId: this.$route.query.stockRightOutId
    }).then(res => {
      this.stockOutInfo = res.data
    })
    settleType().then(res => {
      this.settleTypes = res.data.settleTypes
    })
    dealType().then(res => {
      this.dealTypes = res.data.dealTypes
    })
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
