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
              <!-- <p>{{ form.name }}</p> -->
              <el-input v-model="form.name"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="项目编号" prop="code">
              <el-input v-model="form.code"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目类别" prop="projectType">
              <el-select  v-model="form.projectType"  style="width:100%">
                <el-option v-for="(item, index) in projectType" :key="index" :label="item.name" :value="item.id"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="24">
            <el-form-item label="项目所有方" prop="projectOwner">
              <el-input v-model="form.projectOwner"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="法人代表" prop="projectLegal">
              <el-input v-model="form.projectLegal"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证号" prop="projectOwnerIdCard">
              <el-input v-model="form.projectOwnerIdCard"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="联系电话" prop="projectOwnerPhone">
              <el-input v-model="form.projectOwnerPhone"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系地址" prop="projectOwnerAddress">
              <el-input v-model="form.projectOwnerAddress"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider/>
        <el-row class="border-bottom">
          <el-col :span="24">
            <el-form-item label="产权转出（委托）方" prop="transferor">
              <el-input v-model="form.transferor"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="法人代表" prop="transferorLegal">
              <el-input v-model="form.transferorLegal"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证号" prop="transferorIdCard">
              <el-input v-model="form.transferorIdCard"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="联系电话" prop="transferorPhone">
              <el-input v-model="form.transferorPhone"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系地址" prop="transferorAddress">
              <el-input v-model="form.transferorAddress"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider/>
        <el-row class="border-bottom">
          <el-col :span="24">
            <el-form-item label="产权受让方" prop="transferee">
              <el-input v-model="form.transferee"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="法人代表" prop="transfereeLegal">
              <el-input v-model="form.transfereeLegal"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证号" prop="transfereeIdCard">
              <el-input v-model="form.transfereeIdCard"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="联系电话" prop="transfereePhone">
              <el-input v-model="form.transfereePhone"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系地址" prop="transfereeAddress">
              <el-input v-model="form.transfereeAddress"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider/>
        <el-row class="border-bottom">
          <el-col :span="24">
            <el-form-item label="所在区域" prop="villageId">
              <!-- <el-input v-model="form.address"/> -->
              <div class="flex">
                <el-select v-model="form.town"  style="width:160px" @change="handleTownChange">
                  <el-option v-for="(item, index) in towns" :key="index" :label="item.townshipName" :value="item.townshipId"/>
                </el-select>
                <el-select v-model="form.villageId"  style="width:160px;">
                  <el-option v-for="(item, index) in villages" :key="index" :label="item.villageName" :value="item.villageId"/>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="流转数量" prop="circulateCount">
              <!-- <el-input v-model="form.circulateCount"/> -->
              <div class="flex">
                <el-input v-model="form.circulateCount" ></el-input>
                <el-select v-model="form.circulateCountUnit"  style="width:160px;margin-left:10px;">
                  <el-option label="亩" value="亩"/>
                  <el-option label="平方米" value="平方米"/>
                  <el-option label="公顷" value="公顷"/>
                  <el-option label="其他" value="其他"/>
                </el-select>
              </div>
            </el-form-item>
            
          </el-col>
          <el-col :span="12">
            <el-form-item label="流转方式" prop="circulateType">
              <el-select  v-model="form.circulateType" style="width:100%">
                <el-option v-for="(item, index) in circulateType" :key="index" :label="item.name" :value="item.id"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="转出期限" prop="circulateTime">
              <div class="flex">
                <!-- <el-date-picker v-model="form.circulateTime"  type="date"/> -->
                <el-input v-model="form.circulateTime" ></el-input>
                <el-select v-model="form.circulateTimeUnit"  style="width:160px;margin-left:10px;">
                  <el-option label="年" value="年"/>
                  <el-option label="月" value="月"/>
                  <el-option label="日" value="日"/>
                  <el-option label="其他" value="其他"/>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="涉及农户" prop="farmerCount">
              <el-input v-model="form.farmerCount"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="24">
            <el-form-item label="成交价格" prop="price">
              <el-input v-model="form.price"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="合同签约日期" prop="contractSignDate">
              <el-date-picker v-model="form.contractSignDate" type="date"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="备案登记日期" prop="recordSignDate">
              <el-date-picker v-model="form.recordSignDate" type="date"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item label="鉴证人（机构）" prop="appraiser">
              <el-input v-model="form.appraiser"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="登记人" prop="registrant">
              <el-input v-model="form.registrant"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="说明" prop="description">
          <el-input v-model="form.description"/>
        </el-form-item>
         <el-form-item label="复印件上传" prop="contractImage" class="border-bottom">
           <input ref="file" type="file" @change="handleChange" accept="image/*" multiple/>
           <div v-for="(item, index) in form.contractImage" :key="index">
             <img  :src="item"  />
           </div>
        </el-form-item>
      </div>
      <el-button type="primary" style="width:100%" :disabled="uploading" @click="submit">提交</el-button>
    </el-form>
    </div>
  </div>
</template>

<script>
import Back from '@/components/Back'
import { getSupplyDetail, getDemandDetail, getProjectType, getCirculateType } from '@/api/supply'
import { upload } from '@/api/carousel'
import { getAllVillage } from '@/api/common'
import { transactionSave } from '@/api/deal'
export default {
  components: {
    Back
  },
  data() {
    return {
      info: { },
      form: { 
        contractImage: []
      },
      towns: [],
      villages: [],
      projectType: [],
      circulateType: [],
      uploading: false
    }
  },
  computed: {
    isCreate() {
      return !this.$route.query.id
    }
  },
  methods: {
    async handleChange() {
      if(this.$refs.file.files.length) {
        for(let i = 0; i < this.$refs.file.files.length; i++) {
          try {
            let fd = new FormData()
            fd.append('file', this.$refs.file.files[i])
            this.uploading = true
            let res = await upload(fd)
            let contractImage = JSON.parse(JSON.stringify(this.form.contractImage))
            contractImage.push(res.data.data[0])
            this.$set(this.form, 'contractImage', contractImage)
            this.uploading = false
          }
          catch(e) {
            this.uploading = false
          }
        }
      }
    },
    handleTownChange(e) {
      this.villages = this.towns.filter(item => item.townshipId == e)[0].villageInfos
      delete this.form.villageId
    },
    submit() {
     
      if(this.$route.query.type == 'supply') {
        this.form.supplyId = Number(this.$route.query.id)
      }
      else {
        this.form.needId = Number(this.$route.query.id)
      }
       transactionSave(this.form).then(res => {
         this.$message({
           type: 'success',
           message: '操作成功'
         })
         this.$router.go(-1)
       })
    }
  },
  created() {
    let request = this.$route.query.type == 'supply' ? getSupplyDetail : getDemandDetail
    getProjectType().then(res => {
      this.projectType = res.data.typeInfos
    })
    getCirculateType().then(res => {
      this.circulateType = res.data.typeInfos
    })
    request({
      id: this.$route.query.id
    }).then(res => {
      this.info = res.data
      this.$set(this.form, 'name', this.info.name)
      this.$set(this.form, 'code', this.info.code)
      this.$set(this.form, 'projectType', Number(this.info.projectTypeId))
      if(this.$route.query.type == 'supply') {
        this.$set(this.form, 'transferor', this.info.propertyRightTransferor)
      }
      else {
        this.$set(this.form, 'transferee', this.info.circulationCompany)
      }
    })
    getAllVillage().then(res => {
      this.towns = res.data.townshipInfos
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
    // margin-bottom: 0;
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