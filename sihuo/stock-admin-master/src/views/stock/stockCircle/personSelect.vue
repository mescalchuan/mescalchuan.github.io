<template>
  <div class="ps-page">
    <back></back>
    <div class="content">
      <div class="option-box">
        <div class="search-box">
          <el-input
            v-model="searchKey"
            placeholder="可根据股东户号、股东姓名、身份证号搜索"
            class="search-input"
            clearable
          />
          <el-button type="primary" @click="searchList">搜索<i class="el-icon-search el-icon--right" /></el-button>
        </div>
      </div>
      <el-card class="box-card">
        <el-table
          header-cell-class-name="table-header-color"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="familyNo"
            label="户号"
            width="120"
          />
          <el-table-column
            prop="shareholderName"
            label="股东"
          />
          <el-table-column
            prop="sex"
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
            prop="shareholderAddress"
            label="家庭住址"
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="160"
          >
            <template slot-scope="scope">
              <el-button icon="el-icon-warning" type="success" size="small" @click="add(scope.row.stockRightId)">选择转入目标</el-button>
            </template>
          </el-table-column>
        </el-table>
        <pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
      </el-card>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { otherShareHolderQuery } from '@/api/stock'
import { getDetail } from '@/api/economic'
import Back from '../../../components/Back'
export default {
  components: {
    Pagination,
    Back
  },
  props: {
    economicId: {
      type: Number
    }
  },
  data() {
    return {
      tableData: [],
      searchKey: '',
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
    }
  },
  created() {
    this.searchList()
  },
  methods: {
    add(stockRightId) {
      this.$router.push({
        path: '/stock/share-circulation/circle',
        query: {
          id: this.$route.query.id,
          stockRightId: this.$route.query.stockRightId,
          stockRightOutId: stockRightId
        }
      })
    },
    searchList() {
      let data = {
        keyword: this.searchKey,
        economicGroupId: this.$route.query.id,
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize
      }
      otherShareHolderQuery(data).then(res => {
        this.tableData = res.data.shareholderInfoList
        this.pageInfo.total = res.data.total
      })
    },
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.searchList()
    }

  }
}
</script>

<style lang="scss" scoped>
  .ps-page {
    width: 100%;
    padding: 20px;
  }

  .content {
    background: #fff;
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
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  .box-card {
    margin-top: 10px;
    .clearfix {
      span {
        font-size: 14px;
        font-weight: 600;
        display: inline-block;
        margin-right: 20px;
      }
    }
  }

  .search-input {
    width: 400px;
  }
</style>

<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
