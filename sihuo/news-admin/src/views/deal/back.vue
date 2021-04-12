<template>
	<div class="deal-page">
    <div class="content">
      <el-select v-model="type" @change="handleChange">
        <el-option value="supply" label="供求信息"/>
        <el-option value="need" label="需求信息"/>
      </el-select>
    <div class="flex justify-content-space-between">
      <div style="margin-left: 20px;width:100%;">
          <el-table
            :data="tableData"
            header-cell-class-name="table-header-color"
            style="width: 100%">
            <el-table-column
              prop="code"
              label="编号"
              align="center"
              width="150px"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="项目名称"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="操作"
              align="center"
              width="150px"
            >
              <template slot-scope="scope">
                <el-button size="small" type="warning" @click="() => $router.push({
                  path: '/deal/form',
                  query: {
                    id: scope.row.id,
                    type
                  }
                })">备案</el-button>
              </template>
            </el-table-column>
          </el-table>
          <pagination style="margin-top:20px;" :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Pagination from '@/components/Pagination'
import { supplySearch, demandSearch } from '@/api/supply'
export default {
  components: {
    Breadcrumb,
    Pagination
  },
	data() {
		return {
      activeMenu: 1,
      tableData: [],
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
      search: {},
      type: 'supply',
		}
  },
  methods: {
    handleChange(e) {
      this.pageInfo.pageNum = 1
      if(e == 'supply') {
        this.supplySearch()
      }
      else {
        this.demandSearch()
      }
    },
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.type === 'supply' ? this.supplySearch() : this.demandSearch()
    },
    supplySearch() {
      supplySearch({
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize,
        ...this.search
      }).then(res => {
        this.pageInfo.total = res.data.total
        this.tableData = res.data.supplyInfos
      })
    },
    demandSearch() {
      demandSearch({
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize,
        ...this.search
      }).then(res => {
        this.pageInfo.total = res.data.total
        this.tableData = res.data.needInfos
      })
    },
  },
  created() {
    this.supplySearch()
  }
}
</script>

<style lang="scss" scoped>
  .deal-page {
    p {
      font-size: 14px;
    }
    .el-button {
      margin-left: 0;
    }
  }
  .supply-menu {
    font-size: 14px;
    width: 200px;
    text-align: center;
    cursor: pointer;
    .supply-menu-child {
      color: #3fae5f;
      height: 50px;
      line-height: 50px;
      border: 1px solid #eee;
      font-weight: bold;
      margin-bottom: 5px;
      &:hover {
        background-color: #71ceff !important;
        color: white !important;
      }

    }
  }
  .deal-page {
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
</style>