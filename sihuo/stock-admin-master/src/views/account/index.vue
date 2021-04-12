<template>
	<div class="account-container">
		<el-card class="box-card">
			<div slot="header">
				<span>账户管理</span>
			</div>
			<div class="main">
				<el-button
          v-if="$hasAuth(18)"
					class="el-icon-plus"
					type="primary"
					style="margin-bottom: 5px"
					@click="addAccountBtn"
				>新增账户</el-button>
				<el-table :data="tableData" border style="width: 100%" header-cell-class-name="table-header-color">
					<el-table-column prop="accountNo" label="账号" min-width="15%" />
					<el-table-column prop="accountName" label="姓名" min-width="15%" />
					<el-table-column prop="rule" label="职务" min-width="15%" />
					<el-table-column prop="phoneNum" label="联系电话" min-width="20%" />
					<el-table-column prop="email" label="邮箱" min-width="20%" />
					<el-table-column prop="description" label="备注" min-width="30%" />
					<el-table-column label="操作" width="205px">
						<template slot-scope="scope">
							<el-button
              v-if="$hasAuth(19)"
								type="text"
								size="small"
								class="el-icon-setting"
								@click="handleClick(scope.row)"
                :disabled="scope.row.accountId === IS_ADMIN"
							>变更</el-button>
							<el-button v-if="$hasAuth(20)" type="text" size="small" class="el-icon-delete" :disabled="scope.row.accountId === IS_ADMIN" @click="logOffAccount(scope.row)">注销</el-button>
              <el-button v-if="isAdmin" :disabled="scope.row.accountId === IS_ADMIN" type="text" size="small" class="el-icon-setting" @click="changePasswordShow(scope.row)">修改密码</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div class="page_block" v-show="pageInfo.total">
					<pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
				</div>
			</div>
		</el-card>
    <el-dialog
      title="修改密码"
      :visible.sync="passwordShow"
      width="30%">
      <div class="password-form">
        <el-form ref="authForm"
          :model="passwordForm"
          label-width="80px"
          style="margin-right: 20px;"
        >
          <el-form-item label="账户" prop="account">
            <el-input v-model="passwordForm.account" disabled/>
          </el-form-item>
          <el-form-item label="新密码" prop="password">
            <el-input v-model="passwordForm.password" type="password"/>
          </el-form-item>
          <el-form-item label="确认密码" prop="epassword">
            <el-input v-model="passwordForm.epassword" type="password"/>
          </el-form-item>
        </el-form>
      </div>
    <el-button @click="passwordShow = false">取 消</el-button>
    <el-button @click="changePassword" type="primary">确 定</el-button>
    </el-dialog>
	</div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { updateAccount } from '@/api/account'
import Pagination from '@/components/Pagination'
import { IS_ADMIN } from '@/utils'
export default {
  components: {
    Pagination
  },
	data() {
		return {
			tableData: [],
			multipleSelection: [],
			pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        current: 1
      },
      row: {},
      passwordShow: false,
      passwordForm: {},
      IS_ADMIN
		}
  },
  computed: {
    isAdmin() {
      return localStorage.getItem('ai') == IS_ADMIN
    }
  },
	methods: {
    changePassword() {
      if(!this.passwordForm.account) {
        this.$message({
          type: 'warning',
          message: '账户不能为空'
        })
      }
      else if(!this.passwordForm.password || !this.passwordForm.epassword) {
        this.$message({
          type: 'warning',
          message: '密码不能为空'
        })
      }
      else if(!/^[0-9a-zA-Z]{6,}$/g.test(this.passwordForm.password)) {
        this.$message({
          type: 'warning',
          message: '密码为数字、字母，长度不能低于 6 个字'
        })
      }
      else if(this.passwordForm.password != this.passwordForm.epassword) {
        this.$message({
          type: 'warning',
          message: '两次密码不一致'
        })
      }
      else {
        updateAccount({
          accountId: this.row.accountId,
          password: this.passwordForm.password
        }).then(res => {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.passwordShow = false
        })
      }
    },
    changePasswordShow(row) {
      this.row = row
      this.passwordForm.account = row.accountNo
      this.passwordShow = true
    },
		handleClick(row) {
			this.$router.push({
				path:'/account/adminEdit',
				query:{
					isEdit:true,
					accountid:row.accountId
				}
			})
		},
		addAccountBtn() {
			this.$router.push('/account/adminAdd')
		},
		logOffAccount(row){
			this.$confirm('您是否确定要注销？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.deleteAccount(row)
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消操作'
				});
			});
		},
    handlePageChange(v) {
      this.pageInfo.pageNum = v
      this.listAccount();
    },
		deleteAccount(row){
			let temp=this;
			this.$http({
				method: 'post',
				url: '/api/v1/account/cancel',
				data:{
					"accountId": row.accountId,
					"accountGroupIds": row.accountGroupId,
					"accountName": row.accountName,
					"accountNo": row.accountNo,
					"description": row.description,
					"email": row.email,
					"manageVillages": row.manageVillages,
					"phone": row.phone,
					"rule": row.rule
				},
				headers: { 'Content-Type': 'application/json;charset=UTF-8',"login-token":getToken() }
			})
			.then(function (response) {
				if(response.msg=="操作成功"){
					temp.$message({
						type: 'success',
						message: '操作成功!'
					});
					temp.pageInfo.pageNum=1;
					temp.listAccount()
				}
			})
			.catch(function (error) {
			
			});
		},
		listAccount(){
			let temp=this;
			this.$http({
				method: 'post',
				url: '/api/v1/account/list',
				data:{
					'pageNum': temp.pageInfo.pageNum,
					'pageSize': temp.pageInfo.pageSize,
					'total': temp.pageInfo.total
				},
				headers: { 'Content-Type': 'application/json;charset=UTF-8',"login-token":getToken() }
			})
			.then(function (response) {
				temp.tableData=response.data.accountInfos;
				temp.pageInfo.total=response.data.total;
			})
			.catch(function (error) {
			
			});
		}
	},
	mounted(){
    this.listAccount()
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
.account-container .box-card .el-card__body {
	padding: 0;
}
.page_block{
	display: block;
	height: 37px;
	margin: 10px 0;
}
.right_page{
	float: right;
}
</style>
<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>