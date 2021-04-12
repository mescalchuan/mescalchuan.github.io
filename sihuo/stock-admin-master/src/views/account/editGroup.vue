<template>
  <div class="editgroup-container">
    <back></back>
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>新建用户组</span>
        </div>
        <div style="margin-left: 25%; margin-bottom: 20px">
          <label style="font-size:14px">用户组名称
            <el-input v-model="groupName" style="width: 50%;"/>
          </label>
        </div>
        <div style="margin-left: 25%;margin-bottom:20px;">
          <label style="font-size:14px">用户组简介
            <el-input type="textarea" v-model="groupDesc" placeholder="请输入该用户组" style="width: 50%;"/>
          </label>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>权限设置</span>
        </div>

        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="menuName"
            label="模块"
            min-width="30%"
          />
          <el-table-column
            label="功能"
            min-width="70%"
          >
            <template slot-scope="scope">
              <el-checkbox v-for="item in scope.row.functions" :key="item.functionId" v-model="functionsMap[item.functionId]">{{item.functionName}}</el-checkbox>
            </template>
          </el-table-column>
        </el-table>

        <el-button style="width: 100%; background: #1482f0" @click="handleClick">保存</el-button>
      </el-card>
    </div>

  </div>
</template>

<script>
  import { saveGroup } from '@/api/account'
  import { getMenuFunctions } from '@/api/menu'
  import Back from '../../components/Back'
  export default {
    data() {
      return {
        showPage: true,
        addGroupPage: false,
        groupDesc: '',
        groupName: '',
        tableData: [],
        functionsMap: {}
      }
    },
    components: {
      Back
    },
    created() {
      this.getGroupDetailById()
      getMenuFunctions().then(res => {
        // console.log(res)
        if (res.status === 0) {
          const menuFunctions = res.data.menuFunctions || []
          this.tableData = menuFunctions
          const functionMap = {}
          menuFunctions.forEach(item => {
            if (item.functions && Array.isArray(item.functions) && item.functions.length) {
              item.functions.forEach(subItem => {
                functionMap[subItem.functionId] = false
              })
            }
          })
          this.functionsMap = functionMap
        }
      })
    },
    methods: {
      handleClick() {
        const functions = []
        for (const key in this.functionsMap) {
          if (this.functionsMap[key]) {
            functions.push(key)
          }
        }
        const params = {
          accountGroupName: this.groupName,
          description: this.groupDesc,
          functionIds: functions
        }
        let request = null
        if (this.isEdit) {
          // request = updateAccount(params)
        } else {
          request = saveGroup(params)
        }
        request.then(res => {
          history.back()
        })
      },
      addGroup() {
        this.showPage = false
        this.addGroupPage = true
      },
      getGroupDetailById(id) {
        // todo: 没接口
      }
    }
  }
</script>

<style scoped>
  .page-container {
    padding: 0;
    margin: 10px;
  }

 .page-container .box-card {
    margin-top: 10px;
  }

  .main {
    padding: 10px;
  }

</style>

<style>
 .editgroup-container .box-card .el-card__body {
    padding: 40px 0;
  }
</style>
