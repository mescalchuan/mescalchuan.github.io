<template>
  <div class="supply-form">
    <div class="content">
    <div v-if="!isCreate" class="flex justify-content-space-between">
      <Back/>
      <p style="font-weight:bold;font-size:18px;">迭部县农村土地流转供应信息发布详情</p>
      <p style="visibility: hidden">zw</p>
    </div>
    <el-divider/>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <div class="border-container">
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="项目名称" prop="name">
              <el-input v-if="isCreate" v-model="form.name" placeholder="请填写项目名称"></el-input>
              <p v-else>{{ form.name }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="流转数量" prop="circulateCount">
              <div class="flex">
                <el-input v-if="isCreate" v-model="form.circulateCount" placeholder="请填写流转数量"></el-input>
                <el-select v-if="isCreate" v-model="form.circulateCountUnit" placeholder="单位" style="width:160px;margin-left:10px;">
                  <el-option label="亩" value="亩"/>
                  <el-option label="平方米" value="平方米"/>
                  <el-option label="公顷" value="公顷"/>
                  <el-option label="其他" value="其他"/>
                </el-select>
                <p v-else>{{ form.circulateCount }}</p>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="项目编号" prop="code">
              <el-input v-if="isCreate" v-model="form.code" placeholder="请填写项目编号"></el-input>
              <p v-else>{{ form.code }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="流转期限" prop="circulateTime">
              <div class="flex">
                <el-input v-if="isCreate" v-model="form.circulateTime" placeholder="请填写流转期限"></el-input>
                <el-select v-if="isCreate" v-model="form.circulateTimeUnit" placeholder="单位" style="width:160px;margin-left:10px;">
                  <el-option label="年" value="年"/>
                  <el-option label="月" value="月"/>
                  <el-option label="日" value="日"/>
                  <el-option label="其他" value="其他"/>
                </el-select>
                <p v-else>{{ form.circulateTime }}</p>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="产权转出方" prop="propertyRightTransferor">
              <el-input v-if="isCreate" v-model="form.propertyRightTransferor" placeholder="请填写产权转出方"></el-input>
              <p v-else>{{ form.propertyRightTransferor }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="意向价格" prop="price">
              <el-input v-if="isCreate" v-model="form.price" placeholder="请填写意向价格"></el-input>
              <p v-else>{{ form.price }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="产权所有方" prop="propertyRightOwner">
              <el-input v-if="isCreate" v-model="form.propertyRightOwner" placeholder="请填写产权所有方"></el-input>
              <p v-else>{{ form.propertyRightOwner }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="联系人" prop="contact">
              <el-input v-if="isCreate" v-model="form.contact" placeholder="请填写联系人"></el-input>
              <p v-else>{{ form.contact }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="成交状态" prop="transactionStatus">
              <el-input v-if="isCreate" v-model="form.transactionStatus" placeholder="请填写成交状态"></el-input>
              <p v-else>{{ form.transactionStatus }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="电话" prop="phoneNum">
              <el-input v-if="isCreate" v-model="form.phoneNum" placeholder="请填写电话"></el-input>
              <p v-else>{{ form.phoneNum }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="所在区域" prop="villageId">
              <div class="flex justify-content-space-between">
                <el-select v-if="isCreate" v-model="form.town" placeholder="请选择乡镇" style="width:160px" @change="handleTownChange">
                  <el-option v-for="(item, index) in towns" :key="index" :label="item.townshipName" :value="item.townshipId"/>
                </el-select>
                <el-select v-if="isCreate" v-model="form.villageId" placeholder="请选择村" style="width:160px;">
                  <el-option v-for="(item, index) in villages" :key="index" :label="item.villageName" :value="item.villageId"/>
                </el-select>
                <p v-else>{{ form.address }}</p>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="联系地址" prop="contactAddress">
              <el-input v-if="isCreate" v-model="form.contactAddress" placeholder="请填写联系地址"></el-input>
              <p v-else>{{ form.contactAddress }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="土地种类" prop="projectType">
              <el-select v-if="isCreate" v-model="form.projectType" placeholder="请选择土地种类" style="width:100%">
                <el-option v-for="(item, index) in projectType" :key="index" :label="item.name" :value="item.id"/>
              </el-select>
              <p v-else>{{ form.projectType }}</p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="发布日期" prop="publishDate">
              <el-date-picker
                v-if="isCreate"
                style="width:100%;"
                v-model="form.publishDate"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="请选择发布日期">
              </el-date-picker>
              <p v-else>{{ form.publishDate }}</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="border-bottom">
          <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="流转方式" prop="circulateType">
              <el-select v-if="isCreate" v-model="form.circulateType" placeholder="请选择流转方式" style="width:100%">
                <el-option v-for="(item, index) in circulateType" :key="index" :label="item.name" :value="item.id"/>
              </el-select>
              <p v-else>{{ form.circulateType }}</p>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="12">
            <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="发布人" prop="publisher">
              <el-input v-if="isCreate" v-model="form.publisher" placeholder="请填写发布人"></el-input>
              <p v-else>{{ form.publisher }}</p>
            </el-form-item>
          </el-col> -->
        </el-row>
        <el-row class="border-bottom">
          <el-form-item :class="[isCreate ? 'no-bk-color': '']" label="说明" prop="description">
            <el-input
              v-if="isCreate"
              type="textarea"
              :rows="5"
              placeholder="请填写说明"
              v-model="form.description">
            </el-input>
            <p v-else>{{ form.description }}</p>
          </el-form-item>
        </el-row>
      </div>
      <div class="flex justify-content-flex-end" style="width: 100%; margin-top: 20px;">
        <el-button type="primary" @click="handleStatusChange(1)">通过</el-button>
        <el-button @click="handleStatusChange(2)">不通过</el-button>
      </div>
    </el-form>
    </div>
  </div>
</template>

<script>
import { getSupplyDetail, supplyStatusChange } from '@/api/supply'
import Back from '@/components/Back'
export default {
  components: {
    Back
  },
  data() {
    return {
      form: {
        circulateCountUnit: '亩',
        circulateTimeUnit: '年',
      },
      rules: {
        name: { required: true, message: '请填写项目名称' },
        circulateCount: { required: true, message: '请填写流转数量' },
        code: { required: true, message: '请填写项目编号' },
        circulateTime: { required: true, message: '请填写流转期限' },
        propertyRightTransferor: { required: true, message: '请填写产权转出方' },
        price: { required: true, message: '请填写意向价格' },
        propertyRightOwner: { required: true, message: '请填写产权所有方' },
        contact: { required: true, message: '请填写联系人' },
        transactionStatus: { required: true, message: '请填写成交状态' },
        phoneNum: { required: true, message: '请填写电话' },
        projectType: { required: true, message: '请选择土地种类' },
        publishDate: { required: true, message: '请选择发布日期' },
        circulateType: { required: true, message: '请选择流转方式' },
        publisher: { required: true, message: '请填写发布人' },
        description: { required: true, message: '请填写说明' },
        villageId: { required: true, message: '请选择村' },
        contactAddress: { required: true, message: '请填写联系地址' }
      },
    }
  },
  computed: {
    isCreate() {
      return !this.$route.query.id
    }
  },
  created() {
    // getAllVillage()
    if(!this.isCreate) {
      getSupplyDetail({
        id: this.$route.query.id
      }).then(res => {
        this.form = res.data
      })
    }
  },
  methods: {
    handleStatusChange(status) {
      supplyStatusChange({
        checkStatus: status,
        supplyId: this.$route.query.id
      }).then(res => {
        this.$message({
          type: 'success',
          message: '操作成功'
        })
      })
    }
  }
}
</script>

<style lang="scss">
.supply-form {
  width: 100%;
  padding: 10px;
  background: rgb(235,238,242);
  min-height: calc(100vh - 50px);
  .content {
    background: #fff;
    padding: 20px;
    margin-top: 15px;
  }
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
  .no-bk-color {
    margin-bottom: 22px;
    .el-form-item__label {
      background-color: transparent !important;
    }
    .el-form-item__content {
      background-color: transparent !important;
    } 
  }
}
</style>