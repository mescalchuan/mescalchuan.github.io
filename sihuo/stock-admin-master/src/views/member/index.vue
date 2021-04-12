<template>
  <div class="organization-page">
    <area-selector @areaChange="areaChange" />
    <div class="content">
      <div class="option-box">
        <div class="search-box">
          <el-input
            v-model="searchKey"
            placeholder="可按户号、户主姓名、身份证搜索"
            class="search-input"
            clearable
          />
          <el-button type="primary" @click="searchMemberList">搜索<i class="el-icon-search el-icon--right" /></el-button>
        </div>
        <div>
          <el-button v-if="$hasAuth(7)" icon="el-icon-plus" type="primary" @click="handleEdit('new')">新增户主</el-button>
          <el-button v-if="$hasAuth(45)" icon="el-icon-download" type="primary" @click="download">下载信息</el-button>
        </div>
      </div>
      <el-table
        header-cell-class-name="table-header-color"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="familyNo"
          label="户号"
          width="100"
        />
        <el-table-column
          prop="adminMemberName"
          label="户主"
        />
        <el-table-column
          prop="sex"
          label="性别"
          width="80"
        >
          <template slot-scope="scope">
            <p v-if="scope.row.sex == 0">保密</p>
            <p v-else-if="scope.row.sex == 1">男</p>
            <p v-else-if="scope.row.sex == 2">女</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="idCard"
          label="身份证号"
        />
        <el-table-column
          prop="birthDate"
          label="出生日期"
        />
        <el-table-column
          prop="currentAddress"
          label="现居住地"
        />
        <el-table-column
          prop="familyMemberCount"
          label="家庭人数"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="200"
        >
          <template slot-scope="scope">
            <el-button v-if="$hasAuth(9)" icon="el-icon-s-tools" type="success" size="small" @click="handleEdit('edit', scope.row)">变更</el-button>
            <el-button v-if="$hasAuth(10)" icon="el-icon-warning" type="warning" size="small" @click="goDetail(scope.row)">详情</el-button>
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
  import { getMember, searchMember, memberDownload } from '@/api/member'

  export default {
    components: {
      AreaSelector,
      Pagination
    },
    data() {
      return {
        tableData: [],
        searchKey: '',
        form: {},
        pageInfo: {
          pageNum: 1,
          pageSize: 10,
          total: 0,
          current: 1
        },
        formLabelWidth: '100px',
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
        areaList: []
      }
    },
    created() {
      // this.searchMemberList()
      // this.getPositionList()
    },
    methods: {
      handleEdit(flag, item) {
        if (!item) {
          this.$router.push(`/member/edit?isEdit=${flag}`)
        } else {
          this.$router.push(`/member/edit?isEdit=${flag}&id=${item && item.adminMemberId}&familyCount=${item.familyNo}`)
        }
      },
      goDetail(item) {
        this.$router.push(`/member/detail?id=${item.familyId}&village=${this.areaList[0].name}${this.areaList[1].value}&name=${item.adminMemberName}&familyNo=${item.familyNo}`)
      },
      searchMemberList() {
        const params = {
          keyword: this.searchKey,
          pageNum: this.pageInfo.pageNum,
          pageSize: this.pageInfo.pageSize,
          villageId: this.form.villageGroupId,
        }
        searchMember(params).then(res => {
          this.tableData = res.data && res.data.familyInfos || []
          this.pageInfo.total = res.data.total
        })
      },
      areaChange(val) {
        this.areaList = val
        this.form.villageGroupId = val[1].value
        this.searchMemberList()
      },
      handlePageChange(v) {
        this.pageInfo.pageNum = v
        this.searchMemberList()
      },
      download() {
        memberDownload({
          villageId: this.areaList[1].value
        }).then(res => {
          // let a = document.createElement('a');
          // let url = window.URL.createObjectURL(res);
          // a.href = url;
          // //设置文件名称
          // a.download = '成员信息.xls';
          // a.click();
        })
        window.open('/api/v1/member/download?villageId=' + this.areaList[1].value)
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
</style>

<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
