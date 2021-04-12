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
      <el-form ref="ruleForm" :model="form" :rules="rules"  label-width="200px" style="margin-right:150px" class="demo-ruleForm">
        <el-form-item label="成交股数" prop="dealCount">
          <el-input v-model="form.dealCount" />
        </el-form-item>
        <el-form-item label="成交额" prop="dealAmount">
          <el-input v-model="form.dealAmount" />
        </el-form-item>
        <el-form-item label="质押给单位/个人" prop="pledgeCompany">
          <el-input v-model="form.pledgeCompany" />
        </el-form-item>
         <el-form-item label="质押日期" prop="pledgeDate">
          <el-date-picker v-model="form.pledgeDate" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="质押解除日期" prop="releaseDate">
          <el-date-picker v-model="form.releaseDate" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="登记员" prop="registrant">
          <el-input v-model="form.registrant" disabled/>
        </el-form-item>
        <el-form-item label="鉴证人" prop="appraiser">
          <el-input v-model="form.appraiser" />
        </el-form-item>
        <el-form-item label="质押说明" prop="pledgeDescription">
          <el-input v-model="form.pledgeDescription" type="textarea"/>
        </el-form-item>
      </el-form>
      <el-button type="primary" style="width:calc(100% - 300px);margin:0 150px;" @click="save">质押确认</el-button>
    </el-card>
  </div>
</template>

<script>
import { getDetail } from '@/api/economic'
import { dealSave, shareHolderInfoQuery } from '@/api/stock'
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
      form: {
        pledgeDate: new Date(),
        releaseDate: new Date()
      },
      rules: {
        dealCount: { required: true, message: '请输入成交股数' },
        dealAmount: { required: true, message: '请输入成交额' },
        pledgeCompany: {required: true, message: '请输入单位/个人'},
        registrant: { required: true, message: '请输入登记员' },
        appraiser: { required: true, message: '请输入鉴证人' }
      },
      memberId: ''
    }
  },
  methods: {
    save() {
      this.form.stockRightId = this.$route.query.stockRightId
      this.$refs.ruleForm.validate(valid => {
        if(valid) {
          dealSave(this.form).then(res => {
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
