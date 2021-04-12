<template>
  <div class="add-member-container">
    <back></back>
    <el-card class="box-card">
      <div slot="header" class="clearfix">选择农户加入股东</div>
      <div class="info-box">
        <p class="label">组织编号： {{basicInfo.id}}</p>
        <p class="label">组织代码： {{basicInfo.groupCode}}</p>
        <p class="label">组织名称： {{basicInfo.groupName}}</p>
        <p class="label">法人： {{basicInfo.legal}}</p>
        <p class="label">地区： {{basicInfo.address}}</p>
      </div>
    </el-card>
    <el-card>
      <div class="search-box">
        <el-input
          v-model="searchKey"
          placeholder="可按户号、户主姓名、身份证搜索"
          class="search-input"
          clearable
        />
        <el-button type="primary" @click="search">搜索<i class="el-icon-search el-icon--right" /></el-button>
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
        />
        <el-table-column
          prop="memberName"
          label="户主"
        />
        <el-table-column
          prop="sexName"
          label="性别"
        />
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
          label="家庭住址"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="120"
        >
          <template slot-scope="scope">
            <el-button icon="el-icon-plus" type="success" size="small" @click="showVisible(scope.$index)">成为股东</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
    </el-card>
    <el-dialog
      title="请输入股权证号"
      :visible="dialogVisible"
      :show-close="false"
      width="30%">
      <el-input v-model="stockCode" placeholder="请输入"></el-input>
      <div style="margin-top: 20px;text-align: center">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCreate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getDetail } from '@/api/economic'
import { searchMembers } from '@/api/member'
import { createStock } from '@/api/stock'
import Pagination from '@/components/Pagination'
import Back from '../../../components/Back'
export default {
  name: 'Dashboard',
  components: {
    Pagination,
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
      basicInfo: {
        
      },
      dialogVisible: false,
      stockCode: '',
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
      searchKey: '',
      memberId: ''
    }
  },
  methods: {
    showVisible(index) {
      this.memberId = this.tableData[index].memberId
      this.dialogVisible = !this.dialogVisible
    },
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
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.search()
    },
    search() {
      searchMembers({
        economicGroupId: this.$route.query.id,
        keyword: this.searchKey,
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize
      }).then(res => {
        this.tableData = res.data.memberInfos
        this.pageInfo.total = res.data.total
      })
    },
  },
  created() {
    getDetail({
      economicGroupId: this.$route.query.id
    }).then(res => {
      this.basicInfo = res.data
      this.search()
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
      margin-bottom: 20px;
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
