<template>
  <div class="stock-page">
    <back></back>
    <area-selector :initFold="true"/>
    <div class="stock-content">
      <el-form ref="ruleForm" :model="form" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="组织代码" prop="code">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="组织名称" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="法人代表" prop="represent">
          <el-input v-model="form.represent" />
        </el-form-item>
        <el-form-item label="成立日期" prop="createdDate">
          <el-date-picker v-model="form.createdDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="所在社/组">
          <el-select v-model="form.group" filterable placeholder="请选择所在社/组">
            <el-option
              v-for="item in groupOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="组织介绍" prop="desc">
          <el-input v-model="form.desc" type="textarea" placeholder="组织介绍" />
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
  </div>
    </div>
  </div>
</template>

<script>
import AreaSelector from '@/components/AreaSelector'
import Back from '../../../components/Back'

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
      form: {},
      formLabelWidth: '100px',
      dialogFormVisible: false,
      rules: {
        code: [
          { required: true, message: '请输入组织代码', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入组织名称', trigger: 'blur' }
        ],
        represent: [
          { required: true, message: '请输入法人代表', trigger: 'blur' }
        ],
        createdDate: [
          { type: 'date', message: '请选择成立日期', trigger: 'change' }
        ],
        desc: [
          { message: '请填写组织介绍', trigger: 'blur' }
        ]
      },
      groupOptions: [],
      isEdit: false
    }
  },
  methods: {
    handleEdit(item) {
      this.showDialog()
      for (const key in this.form) {
        this.form[key] = item[key]
      }
      this.isEdit = true
    }

  }
}
</script>

<style scoped>
  .stock-page {
    width: 100%;
    padding: 10px;
    background: rgb(235,238,242);
    min-height: calc(100vh - 50px);
  }

  .stock-content {
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
