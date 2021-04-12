<template>
	<div class="group-add">
    <back></back>
   
      <el-button type="primary" style="position:absolute;right:10px;top:10px;" @click="submit">保存</el-button>
    
     <div style="margin:10px;margin-top:30px;">
    <el-row>
      <el-col :span="12">
        <el-card class="box-card" >
          <div slot="header" class="clearfix" >
            <span>新建用户组</span>
          </div>
          <div class="group-name">
            <label style="font-size:14px;font-weight:normal;">
              <span style="vertical-align: top;">用户组名称</span>
              <el-input v-model="form.accountGroupName" style="width: 350px;margin-left:20px;" />
            </label>
          </div>
          <div class="group-note">
            <label style="font-size:14px;font-weight:normal;">
              <span style="vertical-align: top;">用户组简介</span>
              <el-input type="textarea" v-model="form.description" placeholder="请输入该用户组" style="width: 350px;margin-left:20px;" :rows="5" @input="e => $forceUpdate()"/>
            </label>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>权限设置</span>
          </div>
          <el-table
            v-if="!visible"
              :data="tableData"
              border
              style="width: 100%"
            >
            <el-table-column
              prop="address"
              label="模块"
              min-width="30%"
            >
            <template slot-scope="scope">
              <el-checkbox v-model="menuIds[scope.$index]" @change="handleMenuCheck(scope.$index)">{{ scope.row.menuName }}</el-checkbox>
            </template>
            </el-table-column>
            <el-table-column
              prop="zip"
              label="功能"
              min-width="70%"
            >
              <template slot-scope="scope">
                <el-checkbox v-for="(item, index) in scope.row.functions" :key="index" v-model="functionIds[scope.$index][index]" @change="v => handleFunctionChange(v, scope.$index, index)">{{ item.functionName }}</el-checkbox>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    </div>
	</div>
</template>

<script>
  import { getAuthList, saveGroup, updateGroup, getGroup } from '@/api/account'
  import Back from '../../components/Back'
	export default {
		name: 'GroupAdminAdd',
		data() {
			return {
        tableData: [],
        menuIds: [],
        functionIds: {},
        visible: true,
        form: {
          description: ''
        },
        type: 'new',
        loading: true
			}
    },
    components: {
      Back
    },
    created() {
      if(this.$route.query.accountGroupId) {
        this.type = 'edit'
      }
      getAuthList().then(async res => {
        this.tableData = res.data.menuFunctions
        if(this.type === 'edit') {
          let detail = {}
          let fd = new FormData()
          fd.append('accountGroupId', this.$route.query.accountGroupId)
          detail = (await getGroup({
            accountGroupId: this.$route.query.accountGroupId
          })).data
          this.visible = false
          this.form = JSON.parse(JSON.stringify(detail))
          this.form.description = JSON.parse(JSON.stringify(detail)).accountGroupDescription
          this.loading = false
          this.tableData.map((item, index) => {
            let arr = []
            for(let i = 0; i < item.functions.length; i++) {
              if(detail.functions.indexOf(item.functions[i].functionId) > -1) {
                arr[i] = true
              }
              else {
                arr[i] = false
              }
            }
            let qc = [...new Set(arr)]
            if(qc.length === 1) {
              this.menuIds[index] = qc[0]
            }
            this.functionIds[index] = arr
          })
        }
        else {
          this.visible = false
          this.tableData.map((item, index) => {
            let arr = []
            for(let i = 0; i < item.functions.length; i++) {
              arr[i] = false
            }
            this.functionIds[index] = arr
          })
        } 
      })
    },
    methods: {
      handleMenuCheck(index) {
        this.functionIds[index] = this.functionIds[index].map(item => {
          item = this.menuIds[index]
          return item
        })
      },
      handleFunctionChange(v, fi, i) {
        this.functionIds[fi][i] = v
        let functionIds = JSON.parse(JSON.stringify(this.functionIds))
        functionIds[fi][i] = v
        this.functionIds = functionIds
        if(v) {
          this.menuIds[fi] = true
        }
        let qc = [...new Set(this.functionIds[fi])]
        if(qc.length === 1) {
          this.menuIds[fi] = qc[0]
        }
      },
      submit() {
        let functionIds = []
        for(let k in this.functionIds) {
          this.functionIds[k].map((item, index) => {
            if(item) {
              functionIds.push(this.tableData[k].functions[index].functionId)
            }
          })
        }
        let params = {
          ...this.form,
          functionIds
        }
        if(this.type === 'new') {
          saveGroup(params).then(res => {
            this.$message({
              message: '操作成功',
              type: 'success'
            })
            this.$router.go(-1)
          })
        }
        else {
          params.accountGroupId = this.$route.query.accountGroupId
          updateGroup(params).then(async res => {
            this.$message({
              message: '用户组变更成功，请重新登录',
              type: 'success'
            })
            await this.$store.dispatch('user/logout')
            this.$router.push(`/login?redirect=${this.$route.fullPath}`)
          })
        }
      }
    }
	}
</script>

<style>
	.group-add .group-name {
		/* margin-left: 25%; */
		margin-bottom: 2%
	}

	.group-add .group-note {
		/* margin-left: 25%; */
	}
  .group-add .el-card__header {
    background:rgb(245,247,250)
  }
</style>
