<template>
  <div class="deal-form">
    <div class="content">
    <div class="flex justify-content-space-between" style="margin-top: 30px;">
      <Back/>
      <p>产权交易备案详情</p>
      <p style="visibility: hidden">zw</p>
    </div>
    <el-divider/>
    <el-form :model="form" ref="form" label-width="140px">
      <div class="border-container">
        <el-row class="border-bottom">
          <el-col :span="24">
            <el-form-item label="项目名称" prop="name">
              <p>{{ form.name }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="项目编号" prop="code">
              <p>{{ form.code }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目类别" prop="projectType">
              <p>{{ form.projectType }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="24">
            <el-form-item label="项目所有方" prop="projectOwner">
              <p>{{ form.projectOwner }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="法人代表" prop="projectLegal">
              <p>{{ form.projectLegal }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证号" prop="projectOwnerIdCard">
              <p>{{ form.projectOwnerIdCard }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="联系电话" prop="projectOwnerPhone">
              <p>{{ form.projectOwnerPhone }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系地址" prop="projectOwnerAddress">
              <p>{{ form.projectOwnerAddress }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider/>
        <el-row class="border-bottom">
          <el-col :span="24">
            <el-form-item label="产权转出（委托）方" prop="transferor">
              <p>{{ form.transferor }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="法人代表" prop="transferorLegal">
              <p>{{ form.transferorLegal }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证号" prop="transferorIdCard">
              <p>{{ form.transferorIdCard }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="联系电话" prop="transferorPhone">
              <p>{{ form.transferorPhone }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系地址" prop="transferorAddress">
              <p>{{ form.transferorAddress }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider/>
        <el-row class="border-bottom">
          <el-col :span="24">
            <el-form-item label="产权受让方" prop="transferee">
              <p>{{ form.transferee }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="法人代表" prop="transfereeLegal">
              <p>{{ form.transfereeLegal }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证号" prop="transfereeIdCard">
              <p>{{ form.transfereeIdCard }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="联系电话" prop="transfereePhone">
              <p>{{ form.transfereePhone }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系地址" prop="transfereeAddress">
              <p>{{ form.transfereeAddress }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider/>
        <el-row class="border-bottom">
          <el-col :span="24">
            <el-form-item label="所在区域" prop="address">
              <p>{{ form.address }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="流转数量" prop="circulateCount">
              <p>{{ form.circulateCount }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="流转方式" prop="circulateType">
              <p>{{ form.circulateType }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="转出期限" prop="circulateTime">
              <p>{{ form.circulateTime }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="涉及农户" prop="farmerCount">
              <p>{{ form.farmerCount }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="24">
            <el-form-item label="成交价格" prop="price">
              <p>{{ form.price }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="合同签约日期" prop="contractSignDate">
              <p>{{ form.contractSignDate }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="备案登记日期" prop="recordSignDate">
              <p>{{ form.recordSignDate }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="鉴证人（机构）" prop="appraiser">
              <p>{{ form.appraiser }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="登记人" prop="registrant">
              <p>{{ form.registrant }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="说明" prop="description">
          <p>{{ form.description }}</p>
        </el-form-item>
        <el-form-item label="复印件" prop="contractImage" class="border-bottom">
           <div v-for="(item, index) in form.contractImage" :key="index">
             <img  :src="item"  />
           </div>
        </el-form-item>
      </div>
    </el-form>
    </div>
  </div>
</template>

<script>
import Back from '@/components/Back'
import { getDealDetail } from '@/api/deal'
export default {
  components: {
    Back
  },
  data() {
    return {
      form: { }
    }
  },
  computed: {
    isCreate() {
      return !this.$route.query.id
    }
  },
  created() {
    getDealDetail({
      id: this.$route.query.id
    }).then(res => {
      this.form = res.data
    })
  },
}
</script>

<style lang="scss">
.deal-form {
    width: 100%;
    padding: 10px;
    background: rgb(235,238,242);
    min-height: calc(100vh - 50px);
    .table-header-color {
      background: rgb(245,247,250)!important;
      color: #333 !important;
      
    }
  .content {
      background: #fff;
      padding: 20px;
      margin-top: 15px;
    }
  }
.deal-form {
  .el-divider--horizontal {
    margin: 0 0 10px 0;
  }
  p {
    margin: 0;
  }
  .border-container {
    border-top-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 0;
    border-color: #eee;
    border-style: solid;
    .border-bottom {
      border-bottom-width: 1px;
      border-left-width: 0;
      border-right-width: 0;
      border-top-width: 0;
      border-color: #eee;
      border-style: solid;
    }
  }
  .el-form-item {
    margin-bottom: 0;
    .el-form-item__label {
      background-color: #f3f3f3;
      color: #333;
    }
    .el-form-item__content {
      background-color: white;
    }
  }
}
</style>