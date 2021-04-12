<template>
	<div class="account-edit-container">
    <back v-if="!isModule"></back>
		<el-card class="box-card">
			<div slot="header">
				<span>变更账户</span>
			</div>
			<div class="addAccount-main">
				<el-card class="box-card-addAccount">
					<div slot="header" class="clearfix">
						<span>基本信息</span>
					</div>
					<!--表单-->
					<el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
						<el-form-item label="账号" prop="accountNo">
							<el-input v-model="ruleForm.accountNo" placeholder="请输入账号" disabled />
						</el-form-item>
            <!-- <el-form-item v-if="!hidePassword" label="密码" prop="password">
							<el-input v-model="ruleForm.password" placeholder="请输入密码" type="password" />
						</el-form-item> -->
						<el-form-item label="姓名" prop="accountName">
							<el-input v-model="ruleForm.accountName" placeholder="请输入姓名" />
						</el-form-item>
						<el-form-item label="电话" prop="phone">
							<el-input v-model="ruleForm.phone" placeholder="请输入电话" />
						</el-form-item>
						<el-form-item label="职务" prop="rule">
							<el-input v-model="ruleForm.rule" placeholder="请输入职务" />
						</el-form-item>
						<el-form-item label="邮箱" prop="email">
							<el-input v-model="ruleForm.email" placeholder="请输入邮箱" />
						</el-form-item>
						<el-form-item label="备注" prop="description">
							<el-input type="textarea" v-model="ruleForm.description" placeholder="请输入备注" />
						</el-form-item>
					</el-form>
          <el-button v-if="isModule ? $hasAuth(17) : true" class="demo-ruleForm" type="primary" style="margin-bottom: 20px;" @click="submitForm('ruleForm','authForm')">修改</el-button>
				</el-card>
				<el-card class="box-card-addAccount">
					<div slot="header" class="clearfix">
						<span>权限设置</span>
					</div>
					<div class="radio_check">
						<el-form
							ref="authForm"
							:model="authForm"
							:rules="rules"
							label-width="100px"
						>
							<el-form-item label="所辖乡镇" prop="manageVillages">
								<el-checkbox-group v-model="authForm.manageVillages" :disabled="disabled" @change="changeTown">
									<el-checkbox v-for="(item, index) in townLists" :key="'town' + index" :label="item.townshipId" name="type">{{item.townshipName}}</el-checkbox>
								</el-checkbox-group>
							</el-form-item>
							<el-form-item label="所辖村庄">
								<p style="margin: 0">目前共计选中{{villageModel.length}}个行政村！<el-button type="primary" size="mini" @click="showDrawer = !showDrawer;viewVillage()">查看详情</el-button></p>
							</el-form-item>
							<el-form-item label="组归属" prop="accountGroupId">
								<el-checkbox-group v-model="authForm.accountGroupId" :disabled="disabled">
									<el-checkbox v-for="(item, index) in group" :key="index" :label="item.accountGroupId" name="type">{{item.accountGroupName}}</el-checkbox>
								</el-checkbox-group>
							</el-form-item>
						</el-form>
					</div>
				</el-card>
			</div>
		</el-card>
		<el-drawer
			direction="ltr"
      :modal="false"
			:visible.sync="showDrawer">
			<p slot="title">所辖村庄</p>
			<el-checkbox-group v-model="villageModel" class="custom-check" :disabled="disabled">
				<el-checkbox v-for="(item, index) in villageList" :key="'town' + index" :label="item.villageId" name="type" style="width: 80px;">{{item.villageName}}</el-checkbox>
			</el-checkbox-group>
		</el-drawer>
	</div>
</template>

<script>
	import { saveAccount, accountGroup, updateAccount, getAccountInfoById } from '@/api/account'
	import { getAllVillage, queryPosition } from '@/api/common'
  import { getToken } from '@/utils/auth'
  import Back from '../../components/Back'
	export default {
    name: 'AccountAdminEdit',
    components: {
      Back
    },
    props: {
      isModule: {
        type: Boolean,
        default: false
	  },
	  disabled: {
        type: Boolean,
        default: false
      },
      hidePassword: {
        type: Boolean,
        default: false
      }
    },
		data() {
			return {
				tableData: [],
				townLists: [],
				villageList: [],
				group: [],
				ruleForm: {},
				authForm: {
					manageVillages: [],
					accountGroupId: []
				},
				villageModel: [],
				rules: {
					accountNo: [
						{ required: true, message: '账户名不能为空', trigger: 'blur' }
					],
					accountName: [
						{ required: true, message: '姓名不能为空', trigger: 'blur' }
					],
					phone: [
						{ required: true, message: '电话不能为空', trigger: 'blur' }
					],
					manageVillages:[
						{ type: 'array', required: true, message: '请至少选择一个所辖村庄', trigger: 'change' }
					],
					accountGroupId:[
						{ type: 'array', required: true, message: '请至少选择一个组归属', trigger: 'change' }
					]
				},
				isEdit: false,
				showDrawer: false
			}
		},
		created() {
			this.getGroupList()
      this.getVillageList()
      this.isEdit = this.isModule ? true : this.$route.query.isEdit
      const accountid = this.isModule ? (this.$store.state.user.accountId || localStorage.getItem('ai')) : this.$route.query.accountid;
			if (this.isEdit && accountid) {
				this.getAccountInfo(accountid)
			}
		},
		methods: {
			submitForm(formName1,formName2) {
				let temp=this;
				const p1=new Promise((resolve,reject)=>{
					this.$refs[formName1].validate(valid=>{
						if(valid) resolve()
					})
				})

				const p2=new Promise((resolve,reject)=>{
					this.$refs[formName2].validate(valid=>{
						if(valid) resolve()
					})
				})
				Promise.all([p1,p2]).then(()=>{
					const params = {
						...this.ruleForm,
						...this.authForm,
						manageVillages: this.villageModel
					}
					let request = null
					if (this.isEdit) {
						request = updateAccount(params)
					} else {
						request = saveAccount(params)
					}
					request.then(res => {
						if(!this.isModule) {
              history.back()
            }
            else {
              this.$message({
                message: '操作成功',
                type: 'success'
              })
            }
					})
				})
			},
			addAccountBtn() {
				this.showPage = false
				this.addAccount = true
			},
			getVillageList() {
				getAllVillage().then(res => {
					this.townLists = res.data.townshipInfos || []
				})
			},
			viewVillage(){
				let temp=this;
				let tempArr=[];
				this.villageModel=[];
				for (var i = 0; i < temp.authForm.manageVillages.length; i++) {
					for (var j = 0; j < temp.townLists.length; j++) {
						if (temp.townLists[j].townshipId==temp.authForm.manageVillages[i]) {
							tempArr=tempArr.concat(temp.townLists[j].villageInfos)
						}
					}
				}
				this.villageList=tempArr;
				for (var i = 0; i < temp.villageList.length; i++) {
					temp.villageModel.push(temp.villageList[i].villageId)
				}
			},
			changeTown(val) {
				const village = []
				this.villageModel = []
				for (const item of val) {
					for (const subItem of this.townLists) {
						if (subItem.townshipId === item) {
							village.push(...subItem.villageInfos || [])
							const temp = (subItem.villageInfos || []).map(item => item.villageId)
							this.villageModel.push(...temp)
							break
						}
					}
				}
				this.villageList = village
			},
			getGroupList() {
				accountGroup().then(res => {
					this.group = res.data.accountGroupInfos;
				})
			},
			getAccountInfo(id) {
				// 从接口获取账户信息反填进ruleForm
				// todo: 需要一个loading让用户不要过早操作
				getAccountInfoById(id).then(res => {
					// console.log(res)
					const accountInfo = res.data
					accountInfo.phone = accountInfo.phoneNum
					this.ruleForm = accountInfo
					this.$set(this.authForm, 'accountGroupId', accountInfo.accountGroupIds)
					this.$set(this.authForm, 'manageVillages', accountInfo.manageTownships)
					this.villageModel=accountInfo.manageVillages;
				})
			}
		}
	}
</script>

<style>
	.account-edit-container {
		padding: 0;
		margin: 10px;
	}

	.account-edit-container .box-card {
		margin-top: 10px;
	}

	.account-edit-container .main {
		padding: 10px;
	}

	.account-edit-container .addAccount-main {
		display: flex;
		justify-content: space-between;
		margin: 10px;
	}

	.account-edit-container .box-card-addAccount {
		width: 49.5%;
	}

	.account-edit-container .demo-ruleForm {
		width: 80%;
		margin-left: 10%;
		margin-top: 2%;
	}

.account-edit-container .custom-check {
	margin: 0 20px;
}
.account-edit-container .el-drawer__header button {
  width: 32px;
  height: 32px;
}
</style>

<style>
	.account-edit-container .box-card .el-card__body {
		padding: 0;
	}
</style>
