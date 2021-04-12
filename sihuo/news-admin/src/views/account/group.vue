<template>
  <div class="group-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户组管理</span>
      </div>
      <div class="main">
        <el-button
          v-if="$hasAuth(21)"
          class="el-icon-plus"
          type="primary"
          style="margin-bottom: 5px;margin-top:-10px;"
          @click="addGroup"
        >新增用户组</el-button>
        <el-table :data="tableData" border style="width: 100%" header-cell-class-name="table-header-color">
          <el-table-column prop="accountGroupName" label="用户组名称" min-width="25%" />
          <el-table-column prop="accountGroupDescription" label="用户组备注" min-width="55%" />
          <el-table-column label="操作" min-width="20%">
            <template slot-scope="scope">
              <el-button
                v-if="$hasAuth(22)"
                type="text"
                size="small"
                class="el-icon-setting"
                @click="handleClick(scope.row)"
                :disabled="scope.row.accountGroupId === IS_ADMIN"
              >变更</el-button>
              <el-button
                type="text"
                size="small"
                class="el-icon-delete"
                @click="handleDelete(scope.row)"
                :disabled="scope.row.accountGroupId === IS_ADMIN"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import { deleteGroup } from '@/api/account'
import { IS_ADMIN } from '@/utils'
export default {
  data() {
    return {
      IS_ADMIN
    }
  },
  computed: {
    tableData() {
      return this.$store.state.account.accountGroupList
    }
  },
  created() {
    this.$store.dispatch('getAccountGroup')
  },
  methods: {
    handleClick(row) {
      this.$router.push({
        path: '/account/groupAdminAdd',
        query: {
          accountGroupId: row.accountGroupId
        }
      })
    },
    handleDelete(row) {
      this.$confirm('确认删除该用户组？', '系统提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteGroup({
          accountGroupId: row.accountGroupId
        }).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.$store.dispatch('getAccountGroup')
        })
      })
    },
    addGroup() {
      this.$router.push('/account/groupAdminAdd')
    }
  }
}
</script>

<style scoped>
.page-container {
  padding: 0;
  margin: 10px;
}

.box-card {
  margin-top: 10px;
}

.main {
  padding: 10px;
}
</style>

<style>
.group-container .box-card .el-card__body {
  padding: 10px 0;
}
</style>
<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
