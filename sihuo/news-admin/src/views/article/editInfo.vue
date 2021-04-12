<template>
  <div class="organization-page">
    <back></back>
    <area-selector v-if="isEdit != true" @areaChange="areaChange" :initFold="true"/>
    <div class="content">
      <el-form ref="ruleForm" :model="form" :rules="rules" label-width="130px" class="demo-ruleForm">
        <el-form-item label="组织代码" prop="groupCode">
          <el-input v-model="form.groupCode" />
        </el-form-item>
        <el-form-item label="组织名称" prop="groupName">
          <el-input v-model="form.groupName" />
        </el-form-item>
        <el-form-item label="法人代表" prop="legal">
          <el-input v-model="form.legal" />
        </el-form-item>
        <el-form-item label="成立日期" prop="establishTime">
          <el-date-picker v-model="form.establishTime" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-form-item>
        <el-divider content-position="left">经营性资产</el-divider>
        <el-form-item label="货币资金（万元）" prop="operationalCurrencyAmount">
          <el-input v-model="form.operationalCurrencyAmount" />
        </el-form-item>
        <el-form-item label="固定资产（万元）" prop="operationalFixedAmount">
          <el-input v-model="form.operationalFixedAmount" />
        </el-form-item>
        <el-form-item label="类型" prop="operationalType">
          <el-select v-model="form.operationalType" filterable placeholder="请选择类型" style="width:100%;q">
            <el-option
              v-for="item in operationType"
              :key="item.operationalType"
              :label="item.operationalTypeName"
              :value="item.operationalType"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="面积（m2）" prop="operationalArea">
          <el-input v-model="form.operationalArea" />
        </el-form-item>
        <el-divider content-position="left">非经营性资产</el-divider>
        <el-form-item label="总额（万元）" prop="noOperationalTotalAmount">
          <el-input v-model="form.noOperationalTotalAmount" />
        </el-form-item>
        <el-form-item label="面积" prop="noOperationalArea">
          <el-input v-model="form.noOperationalArea" />
        </el-form-item>
        <!-- <el-form-item label="所在社/组">
          <el-select v-model="form.villageGroupId" filterable placeholder="请选择所在社/组">
            <el-option
              v-for="item in groupOptions"
              :key="item.villageGroupId"
              :label="item.villageGroupName"
              :value="item.villageGroupId"
            />
          </el-select>
        </el-form-item> -->
        <el-form-item label="组织介绍" prop="groupDescription">
          <el-input v-model="form.groupDescription" type="textarea" placeholder="组织介绍" :rows="5" />
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button @click="$router.go(-1)">取 消</el-button>
        <el-button type="primary" @click="submit">提 交</el-button>
  </div>
    </div>
  </div>
</template>

<script>
import AreaSelector from '@/components/AreaSelector'
import Back from '../../components/Back'
import { queryPosition, queryGroup } from '@/api/common'
import { saveEconomic, updateEconomic, getDetail, operationType } from '@/api/economic'
export default {
  components: {
    AreaSelector,
    Back
  },
  data() {
    return {
      tableData: [
        {
          index: 1,
          code: 12,
          name: 'zhanah',
          represent: 'sdasas',
          address: 'lallallal',
          createdDate: '2018-09-29'
        }
      ],
      searchKey: '',
      form: {
        establishTime: ''
      },
      formLabelWidth: '100px',
      dialogFormVisible: false,
      rules: {
        groupCode: [
          { required: true, message: '请输入组织代码', trigger: 'blur' }
        ],
        groupName: [
          { required: true, message: '请输入组织名称', trigger: 'blur' }
        ],
        legal: [
          { required: true, message: '请输入法人代表', trigger: 'blur' }
        ],
        establishTime: [
          { type: 'date', message: '请选择成立日期', trigger: 'change' }
        ],
        groupDescription: [
          { message: '请填写组织介绍', trigger: 'blur' }
        ]
      },
      groupOptions: [],
      areaList: [],
      posiitonList: [],
      isEdit: false,
      operationType: []
    }
  },
  watch: {
    areaList: {
      deep: true,
      handler() {
        const id = this.areaList[1].value
        this.getGroupList(id)
      }
    }
  },
  created() {
    this.isEdit = this.$route.query.isEdit === 'true'
    this.getPositionList()
    operationType().then(res => {
      this.operationType = res.data.operationalTypeInfos
      if (this.isEdit) {
        this.getDetail({
          economicGroupId: this.$route.query.id
        })
      }
    })
  },
  methods: {
    handleEdit(item) {
      this.showDialog()
      for (const key in this.form) {
        this.form[key] = item[key]
      }
      this.isEdit = true
    },
    areaChange(val) {
      this.areaList = val
      // this.form.villageGroupId = val[1].value
      if(this.form.villageGroupId) {
        this.form.villageGroupId = ''
      }
    },
    getPositionList() {
      queryPosition().then(res => {
        this.posiitonList = res.data.positionInfos || []
      })
    },
    getGroupList(id) {
      queryGroup({villageId: id}).then(res => {
        this.groupOptions = res.data.villageGroupInfos || []
      })
    },
    getDetail(data) {
      getDetail(data).then(res => {
        this.form = {
          ...res.data
        }
        if (res.data.villageId) {
          this.getGroupList(res.data.villageId)
        }
        if(this.form.operationalCurrencyAmount) {
          this.form.operationalCurrencyAmount = this.form.operationalCurrencyAmount / 10000
        }
        if(this.form.noOperationalTotalAmount) {
          this.form.noOperationalTotalAmount = this.form.noOperationalTotalAmount / 10000
        }
        if(this.form.operationalFixedAmount) {
          this.form.operationalFixedAmount = this.form.operationalFixedAmount / 10000
        }
        // this.form.name = res.data.name || res.data.memberName
      })
    },
    submit() {
      const id = this.$route.query.id
      let request = this.isEdit ? updateEconomic : saveEconomic
      if(this.isEdit) {
        this.form.economicGroupId = id
      }
      else {
        this.form.villageId = this.areaList[1].value

      }
      if(this.form.operationalCurrencyAmount) {
          this.form.operationalCurrencyAmount = this.form.operationalCurrencyAmount * 10000
        }
        if(this.form.noOperationalTotalAmount) {
          this.form.noOperationalTotalAmount = this.form.noOperationalTotalAmount * 10000
        }
        if(this.form.operationalFixedAmount) {
          this.form.operationalFixedAmount = this.form.operationalFixedAmount * 10000
        }
      request(this.form).then(res => {
        this.$message({
          message: '操作成功',
          type: 'success'
        })
        if (id && this.isEdit) {
          this.$router.push('/organ-admin')
        } else {
          history.back()
        }
      })
    }
  }
}
</script>

<style scoped>
  .organization-page {
    width: 100%;
    padding: 10px;
    background: rgb(235,238,242);
    min-height: calc(100vh - 50px);
  }

  .content {
    background: #fff;
    padding: 20px;
    margin-top: 15px;
  }

  .tag-title {
      padding: 10px 0;
      margin: 10px 0 20px 0;
      border-bottom: 1px dashed #d4dfee;
  }

  .top {
      margin-top: 0;
      padding-top: 0;
  }

  .tag-cursor {
      cursor: pointer;
  }

  .option-box {
    margin: 0 0 20px 0;
    display: flex;
    justify-content: space-between;
  }

  .search-input {
    width: 300px;
  }

  .dialog-footer {
    text-align: center;
  }
</style>

<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
