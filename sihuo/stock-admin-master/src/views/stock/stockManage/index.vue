<template>
  <div class="manage-page">
    <div class="manage-content">
      <div class="option-box">
        <div class="search-box">
          <el-input
            v-model="searchKey"
            placeholder="可根据股东户号、股东姓名、股权证号、身份证号码搜索"
            class="search-input"
            clearable
          />
          <el-button type="primary"  @click="searchList">搜索<i class="el-icon-search el-icon--right" /></el-button>
        </div>
      </div>
      <el-card class="box-card">
         <div slot="header" class="clearfix">
          <el-tag type="success" size="mini" style="margin-bottom: 20px">{{ basicInfo.groupName }}</el-tag>
          <div>
            <span>编号： {{ basicInfo.id }}</span>
            <span>组织代码: {{ basicInfo.groupCode }}</span>
            <span>组织名称: {{ basicInfo.groupName }}</span>
            <span>法人: {{ basicInfo.legal }}</span>
            <el-button icon="el-icon-plus" type="success" size="small" @click="patchStock" style="float: right;">批量入股</el-button>
          </div>
        </div>
        <el-table
          header-cell-class-name="table-header-color"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="shareholderFamilyNo"
            label="股东户号"
            width="120"
          />
          <el-table-column
            prop="shareholderName"
            label="股东"
          />
          <el-table-column
            prop="stockRightNo"
            label="股权证号"
          />
          <el-table-column
            prop="idCard"
            label="身份证号"
            width="200"
            
          />
          <el-table-column
            prop="stockRightCount"
            label="综合股权份额"
          />
           <el-table-column
            prop="stockRightAmount"
            label="综合股权价值"
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="200"
          >
            <template slot-scope="scope">
              <el-button icon="el-icon-plus" size="small" type="success" @click="add(scope.row.stockRightId)">入股</el-button>
              <el-button icon="el-icon-minus" size="small" type="danger" @click="reduce(scope.row.stockRightId)">退股</el-button>
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
import { getStockList } from '@/api/stock'
import { getDetail } from '@/api/economic'
export default {
  components: {
    Pagination
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
      basicInfo: {
        index: 1,
        code: '323232',
        name: '张家口',
        represent: '酷酷酷'
      },
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
    getDetail({
      economicGroupId: this.economicId
    }).then(res => {
      this.basicInfo = res.data
    })
  },
  methods: {
    addShareholder(item) {
      this.$router.push({
        path: '/stock/share-holder/add',
        query: {
          id: this.economicId 
        }
      })
    },
    add(stockRightId) {
      this.$router.push({
        path: '/stock/group/add',
        query: {
          id: this.economicId,
          stockRightId
        }
      })
    },
    reduce(stockRightId) {
      this.$router.push({
        path: '/stock/group/reduce',
        query: {
          id: this.economicId,
          stockRightId
        }
      })
    },
    searchList() {
      let data = {
        economicGroupId: this.economicId,
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize,
        keyword: this.searchKey
      }
      getStockList(data).then(res => {
        this.tableData = res.data.shareholderInfos
        this.pageInfo.total = res.data.total
        this.res = res.data
      })
    },
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.searchList()
    },
    patchStock() {
      this.$router.push({
        path: '/stock/group/patch',
        query: {
          id: this.economicId,
          name: this.basicInfo.groupName
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .manage-page {
    width: 100%;
  }

  .manage-content {
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
