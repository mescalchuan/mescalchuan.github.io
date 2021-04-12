<template>
  <div class="organization-page">
    <area-selector @areaChange="areaChange" />
    <div class="content">
      <div class="option-box">
        <div class="search-box">
          <el-input v-model="searchKey" placeholder="组织代码、组织名称、法人信息输入" class="search-input" clearable />
          <el-button type="primary" @click="handleSearch">
            搜索
            <i class="el-icon-search el-icon--right" />
          </el-button>
        </div>
        <el-button icon="el-icon-plus" type="primary" v-if="$hasAuth(2)" @click="() => handleEdit()">添加经济组织</el-button>
      </div>
      <el-table
        header-cell-class-name="table-header-color"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column prop="id" label="编号" width="60" />
        <el-table-column prop="groupCode" label="组织代码" />
        <el-table-column prop="groupName" label="组织名称" />
        <el-table-column prop="legal" label="法人代表" />
        <el-table-column prop="establishTime" label="成立日期" />
        <el-table-column prop="address" label="地址"  width="200" />
        <!-- <el-table-column prop="legal" label="地址" /> -->
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button v-if="$hasAuth(4)" icon="el-icon-s-tools" type="success" size="small" @click="handleEdit(scope.row)">变更</el-button>
            <el-button v-if="$hasAuth(5)" icon="el-icon-warning" type="warning" size="small" @click="goDetail(scope.row.id)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
    </div>
  </div>
</template>

<script>
import AreaSelector from '@/components/AreaSelector'
import Pagination from '@/components/Pagination'
import { queryGroup } from '@/api/common'
import { economicGroup } from '@/api/economic'

export default {
  components: {
    AreaSelector,
    Pagination
  },
  data() {
    return {
      searchKey: '',
      form: {},
      formLabelWidth: '100px',
      dialogFormVisible: false,
      rules: {
        code: [{ required: true, message: '请输入组织代码', trigger: 'blur' }],
        name: [{ required: true, message: '请输入组织名称', trigger: 'blur' }],
        represent: [
          { required: true, message: '请输入法人代表', trigger: 'blur' }
        ],
        createdDate: [
          { type: 'date', message: '请选择成立日期', trigger: 'change' }
        ],
        desc: [{ message: '请填写组织介绍', trigger: 'blur' }]
      },
      groupOptions: [],
      areaList: [],
      isEdit: false,
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
      tableData: []
    }
  },
  computed: {
    villageId() {
      return this.villageId
    },
  },
  created() {
    
  },
  methods: {
    showDialog() {
      this.isEdit = false
      this.resetForm()
      this.dialogFormVisible = !this.dialogFormVisible
    },
    handleEdit(item) {
      if (item) {
        for (const key in this.form) {
          this.form[key] = item[key]
        }
        this.isEdit = true
        this.$router.push(`/organ/edit?isEdit=${this.isEdit}&id=${item && item.id}`)
      }
      else {
        this.$router.push(`/organ/edit`)
      }
    },
    goDetail(id) {
      this.$router.push({
        path: '/organ/detail',
        query: {
          id
        }
      })
    },
    areaChange(val) {
      this.areaList = val
      this.form.villageGroupId = val[1].value
      this.handleSearch()
      },
    handleSearch() {
      economicGroup({
        keyword: this.searchKey,
        villageId: this.form.villageGroupId,
        pageNum: this.pageInfo.pageNum
      }).then(res => {
        if (res && res.status === 0) {
          const data = res.data
          if (data) {
            this.tableData = data.economicGroupInfos
            this.pageInfo.total = res.data.total
          }
        }
      })
    },
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.handleSearch()
    },
    getGroupList(id) {
      queryGroup({villageId: id}).then(res => {
        this.groupOptions = res.data.villageGroupInfos || []
      })
    },
  }
}
</script>

<style scoped>
.organization-page {
  width: 100%;
  padding: 10px;
  background: rgb(235, 238, 242);
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
</style>

<style>
.table-header-color {
  background: rgb(245, 247, 250) !important;
  color: #333 !important;
}
</style>
