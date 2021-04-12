<template>
  <div class="add-member-container">
    <back></back>
    <el-card class="box-card">
      <div slot="header" class="clearfix">股东入股</div>
      <div class="info-box">
        <p class="label"><strong>经济组织</strong></p> 
        <p class="label">组织编号： {{basicInfo.id}}</p>
        <p class="label">组织代码： {{basicInfo.groupCode}}</p>
        <p class="label">组织名称： {{basicInfo.groupName}}</p>
        <p class="label">地址： {{basicInfo.address}}</p>
        <p class="label">法人代表： {{basicInfo.legal}}</p>
      </div>
      <div class="info-box" style="background:#afde5c">
        <p class="label"><strong>入股农户</strong></p> 
        <p class="label">户主编号： {{stockInfo.familyNo}}</p>
        <p class="label">户主姓名： {{stockInfo.shareholderName}}</p>
        <p class="label">身份证号： {{stockInfo.idCard}}</p>
        <p class="label">地址： {{stockInfo.address}}</p>
        <p class="label">已持有总股数量： {{stockInfo.stockRightCount}}</p>
      </div>
    </el-card>
    <el-card>
      <el-form ref="ruleForm" :model="form" :rules="rules"  label-width="200px" style="margin-right:150px" class="demo-ruleForm">
        <el-form-item label="入股类型" prop="stockRightType">
          <el-select v-model="form.stockRightType" filterable placeholder="请选择股权类型" style="width:100%">
            <el-option
              v-for="item in stockRightTypes"
              :key="item.stockRightTypeId"
              :label="item.stockRightTypeName"
              :value="item.stockRightTypeId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="入股数量" prop="addCount">
          <el-input v-model="form.addCount" />
        </el-form-item>
        <el-form-item label="出资额" prop="contributeAmount">
          <el-input v-model="form.contributeAmount" />
        </el-form-item>
         <!-- <el-form-item label="入股方式" prop="groupCode">
          <el-select v-model="form.villageGroupId" filterable placeholder="请选择所在社/组" style="width:100%">
            <el-option
              v-for="item in groupOptions"
              :key="item.villageGroupId"
              :label="item.villageGroupName"
              :value="item.villageGroupId"
            />
          </el-select>
        </el-form-item> -->
         <el-form-item label="入股日期" prop="addTime">
          <el-date-picker v-model="form.addTime" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="登记员" prop="registrant">
          <el-input v-model="form.registrant" disabled/>
        </el-form-item>
        <el-form-item label="鉴证人" prop="appraiser">
          <el-input v-model="form.appraiser" />
        </el-form-item>
        <el-form-item label="备注" prop="description">
          <el-input v-model="form.description" type="textarea"/>
        </el-form-item>
      </el-form>
      <el-button type="primary" style="width:calc(100% - 300px);margin:0 150px;" @click="save">入股保存</el-button>
    </el-card>
  </div>
</template>

<script>
import { getDetail } from '@/api/economic'
import { searchMembers } from '@/api/member'
import { addStock, stockRightType, save, shareHolderInfoQuery } from '@/api/stock'
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
        addCount: 0,
        contributeAmount: 0,
        addTime: new Date()
      },
      rules: {
        addCount: { required: true, message: '请输入入股数量' },
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
    save() {
      this.form.stockRightId = this.$route.query.stockRightId
      this.$refs.ruleForm.validate(valid => {
        if(valid) {
          save(this.form).then(res => {
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
    stockRightType().then(res => {
      this.stockRightTypes = res.data.stockRightTypes
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
