<template>
  <div>
  <back></back>
	<el-card class="box-card">
    
		<div slot="header">
			<span>新建账户</span>
		</div>
		<div class="addAccount-main">
			<el-card class="box-card-addAccount" style="margin-right: 1%">
				<div slot="header" class="clearfix">
					<span>基本信息</span>
				</div>
				<!--表单-->
				<el-form
					ref="ruleForm"
					:model="ruleForm"
					:rules="rules"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="账号" prop="accountNo">
						<el-input v-model="ruleForm.accountNo" placeholder="请输入账号" />
					</el-form-item>
          <el-form-item label="密码" prop="password">
						<el-input v-model="ruleForm.password" placeholder="请输入密码" type="password"/>
					</el-form-item>
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
						<el-input v-model="ruleForm.description" type="textarea" :rows="5" placeholder="请输入备注" />
					</el-form-item>
					<el-form-item>
						<el-button style="width: 100%; " type="primary" @click="submitForm('ruleForm','authForm')">保存</el-button>
					</el-form-item>
				</el-form>
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
							<el-checkbox-group v-model="authForm.manageVillages" @change="handleVillagesChange">
								<el-checkbox
									v-for="(item, index) in townLists"
									:key="'town' + index"
									:label="item.townshipId"
									name="type"
								>{{ item.townshipName }}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="所辖村庄">
							<p style="margin: 0">
								目前共计选中{{ villageModel.length }}个行政村！
								<el-button type="primary" size="mini" @click="showDrawer = !showDrawer;viewVillage()" >查看详情</el-button>
							</p>
						</el-form-item>
						<el-form-item label="组归属" prop="accountGroupId">
							<el-checkbox-group v-model="authForm.accountGroupId">
								<el-checkbox
									v-for="(item, index) in group"
									:key="item.accountGroupId"
									:label="item.accountGroupId"
									:value="item.accountGroupId"
									name="type"
								>{{ item.accountGroupName }}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
					</el-form>
				</div>
			</el-card>

			<el-drawer direction="ltr" :visible.sync="showDrawer">
				<p slot="title">所辖村庄</p>
				<el-checkbox-group v-model="villageModel" class="custom-check">
					<el-checkbox
						v-for="(item, index) in villageList"
						:key="'town' + index"
						:label="item.villageId"
						name="type"
					>{{ item.villageName }}</el-checkbox>
				</el-checkbox-group>
			</el-drawer>
		</div>
	</el-card>
  </div>
</template>

<script>
import { compile } from 'path-to-regexp'
import { saveAccount, accountGroup, updateAccount, getAccountInfoById } from '@/api/account'
import { getAllVillage, queryPosition } from '@/api/common'
import Back from '../../components/Back'
import { getToken } from '@/utils/auth'
export default {
  name: 'AccountAdminAdd',
  components: {
    Back
  },
	data() {
		return {
			showDrawer: false,
			group: [],
			ruleForm: {
				accountNo: '',
				accountName: '',
				phone: '',
				email: '',
				description: '',
				rule: ''
			},
			authForm: {
				manageVillages: [],
				accountGroupId: []
			},
			townLists: [],
			villageList: [],
			villageModel: [],
			rules: {
				accountNo: [
					{ required: true, message: '账户名不能为空', trigger: 'blur' },
					{ min: 3, max: 100, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
					{ required: true, message: '密码为数字、字母，长度不能低于 6 个字', pattern: /^[0-9a-zA-Z]{6,}$/g, trigger: 'blur' }
				],
				accountName: [
					{ required: true, message: '姓名不能为空', trigger: 'blur' },
					// {
					// 	min: 3,
					// 	max: 100,
					// 	message: '长度在 2 到 10 个字符',
					// 	trigger: 'blur'
					// }
				],
				phone: [
					{
						required: true,
						message: '电话不能为空',
						trigger: 'blur'
					},
					{ min: 11, max: 11, message: '号码长度要为11', trigger: 'blur' }
				],
				manageVillages:[
					{ type: 'array', required: true, message: '请至少选择一个所辖村庄', trigger: 'change' }
				],
				accountGroupId:[
					{ type: 'array', required: true, message: '请至少选择一个组归属', trigger: 'change' }
				]
			}
		}
	},
	created() {
		this.getVillageList();
		this.getAccountGroup();
	},
	methods: {
		handleVillagesChange(){
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
		getVillageList() {
			getAllVillage().then(res => {
				this.townLists = res.data.townshipInfos || []
			})
		},
		getAccountGroup(){
			let temp=this;
			this.$http({
				method: 'post',
				url: '/api/v1/accountGroup/list',
				data:{},
				headers: { 'Content-Type': 'application/json;charset=UTF-8',"login-token":getToken() }
			})
			.then(function (response) {
				if(response.msg=="操作成功"){
					temp.group=response.data.accountGroupInfos
				}
			})
		},
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
				this.$http({
					method: 'post',
					url: '/api/v1/account/save',
					data:{
						"accountGroupIds": temp.authForm.accountGroupId,
						"accountName": temp.ruleForm.accountName,
						"accountNo": temp.ruleForm.accountNo,
						"description": temp.ruleForm.description,
						"email": temp.ruleForm.email,
						"manageVillages": temp.villageModel,
						"phone": temp.ruleForm.phone,
            "rule": temp.ruleForm.rule,
            "password": temp.ruleForm.password
					},
					headers: { 'Content-Type': 'application/json;charset=UTF-8',"login-token":getToken() }
				})
				.then(function (response) {
					if(response.msg=="操作成功"){
						temp.$message({
							type: 'success',
							message: '操作成功!'
						});
						temp.$router.push('/account/index')
					}
				})
				.catch(function (error) {
				
				});
			})
		}
	}
}
</script>

<style scoped>
.addAccount-main {
	display: flex;
	justify-content: flex-start;
}

.box-card-addAccount {
	width: 49.5%;
}

.radio_check {
	/*display: flex;*/
	/*align-items: flex-start;*/
}

.el-radio_check_town {
	padding: 20px;
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
}

.el-radio_check_town p {
	width: 20%;
	margin-left: 15%;
}

.el-radio_check_town div {
	width: 80%;
	margin-top: 2%;
}

.el-radio_check_town div label {
	margin-right: 10px;
}

.demo-ruleForm {
	width: 80%;
	margin-left: 10%;
	margin-top: 2%;
}

.el-radio_check_village {
	display: flex;
	align-items: flex-start;
}

.el-radio_check_village p:nth-child(1) {
	margin-left: 17%;
	margin-right: 7%;
}

.group {
	display: flex;
	align-items: flex-start;
}

.group p {
	width: 10%;
	margin-left: 19%;
	margin-right: 5%;
}

.group div {
	width: 80%;
	margin-top: 2%;
}

.group div label {
	margin-right: 10px;
}

.custom-check {
	margin: 0 20px;
}
</style>
