<template>
  <div class="organization-page">
    <back></back>
    <area-selector @areaChange="areaChange" v-if="isEdit === 'new'" :initFold="true"/>
    <div class="content">
      <el-form ref="ruleForm" :model="form" :rules="rules" :disabled="isEdit === 'detail'" label-width="180px" class="demo-ruleForm">
        <el-form-item v-if="isEdit !== 'new'" label="户号">
          <el-input v-if="isEdit !== 'detail'" v-model="familyCount" disabled="disabled" />
          <p class="disable-text" v-else>{{ familyCount }}</p>
        </el-form-item>
        <el-form-item :label="(isEdit === 'addMember' || isEdit === 'editMember') ? '成员姓名' : '户主姓名'" prop="name">
          <el-input v-if="isEdit !== 'detail'" v-model="form.name"/>
          <p v-else class="disable-text">{{ form.name }}</p>
        </el-form-item>
        <el-form-item v-if="(isEdit === 'addMember' || (isEdit === 'editMember' && form.relationship !== 1))" label="与户主关系" prop="relationship">
          <el-select v-if="isEdit !== 'detail'" v-model="form.relationship" filterable placeholder="请选择与户主关系">
            <el-option
              v-for="item in relationshipList.filter(item => {
                if((isEdit === 'addMember' || isEdit === 'editMember')) {
                  if(form.status === 1) {
                    return item
                  }
                  else {
                    return item.relationshipId !== 1
                  }
                }
                else {
                  return item
                }
              }) || []"
              :key="item.relationshipId"
              :label="item.relationshipName"
              :value="item.relationshipId"
            />
          </el-select>
          <p class="disable-text" v-else>{{ form.relationShip }}</p>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-if="isEdit !== 'detail'" v-model="form.sex">
            <el-radio :label="0">保密</el-radio>
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
          <p v-else class="disable-text">{{ form.sexName }}</p>
        </el-form-item>
        <el-form-item label="身份证号" prop="idCard">
          <el-input v-if="isEdit !== 'detail'" v-model="form.idCard" @blur="getBirthDay"/>
          <p v-else class="disable-text">{{ form.idCard }}</p>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthDate">
          <el-date-picker v-if="isEdit !== 'detail'" v-model="form.birthDate" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%;" />
          <p v-else class="disable-text">{{ form.birthDate }}</p>
        </el-form-item>
        <el-form-item label="职务" prop="positionId">
          <el-select v-if="isEdit !== 'detail'" v-model="form.position" filterable placeholder="请选择职务">
            <el-option
              v-for="item in posiitonList"
              :key="item.positionId"
              :label="item.positionName"
              :value="item.positionId"
            />
          </el-select>
          <p v-else class="disable-text">{{ form.positionName }}</p>
        </el-form-item>
        <el-form-item label="所在社/组" prop="villageGroupId" v-if="isEdit === 'new'">
          <el-select v-model="form.villageGroupId" filterable placeholder="请选择所在社/组">
            <el-option
              v-for="item in groupOptions"
              :key="item.villageGroupId"
              :label="item.villageGroupName"
              :value="item.villageGroupId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="服务处所" prop="servicePlace">
          <el-input v-if="isEdit !== 'detail'" v-model="form.servicePlace" />
          <p v-else class="disable-text">{{ form.servicePlace }}</p>
        </el-form-item>
        <el-form-item label="现居住地址" prop="currentAddress">
          <el-input v-if="isEdit !== 'detail'"  v-model="form.currentAddress" />
          <p v-else class="disable-text">{{ form.currentAddress }}</p>
        </el-form-item>

        <el-form-item label="有无承包地及获得时间" prop="isHasLand">
          <el-radio-group v-if="isEdit !== 'detail'" v-model="form.isHasLand">
            <el-radio :label="0">无</el-radio>
            <el-radio :label="1">有</el-radio>
          </el-radio-group>
          <p v-else class="disable-text">{{ form.isHasLand ? '有' : '无' }}</p>
        </el-form-item>
        <el-form-item label="承包地及获得时间" v-if="form.isHasLand" prop="isHasLand">
          <el-date-picker v-if="isEdit !== 'detail'" v-model="form.getLandTime" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
          <p v-else class="disable-text">{{ form.getLandTime }}</p>
        </el-form-item>
        <el-form-item label="户口迁入时间" prop="accountInTime">
          <el-date-picker v-if="isEdit !== 'detail'" v-model="form.accountInTime" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%;" />
          <p v-else class="disable-text">{{ form.accountInTime }}</p>
        </el-form-item>
        <el-form-item label="户口迁入原因">
          <el-input v-if="isEdit !== 'detail'" v-model="form.accountInReason" />
          <p v-else class="disable-text">{{ form.accountInReason }}</p>
        </el-form-item>
        <el-form-item label="户口迁出时间">
          <el-date-picker v-if="isEdit !== 'detail'" v-model="form.accountOutTime" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%;" />
          <p v-else class="disable-text">{{ form.accountOutTime }}</p>
        </el-form-item>
        <el-form-item label="户口迁出原因" prop="accountOutReason">
          <el-input v-if="isEdit !== 'detail'" v-model="form.accountOutReason" />
          <p v-else class="disable-text">{{ form.accountOutReason }}</p>
        </el-form-item>
        <el-form-item  label="成员资格取得方式" prop="obtainWay">
          <el-input v-if="isEdit !== 'detail'" v-model="form.obtainWay" placeholder="第几条第几款，如 1.1"/>
          <p v-else class="disable-text">{{ form.obtainWay }}</p>
        </el-form-item>
        <el-form-item v-if="(isEdit === 'addMember' || isEdit === 'editMember' || isEdit=='detail')" label="是否已确认" prop="isConfirm">
          <el-radio-group v-if="isEdit !== 'detail'" v-model="form.isConfirm">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
          <p v-else-if="form.isConfirm === 0 || form.isConfirm === 1">{{ form.isConfirm == 0 ? '否' : '是' }}</p>
        </el-form-item>
        <el-form-item label="备注" prop="description">
          <el-input v-if="isEdit !== 'detail'" v-model="form.description" type="textarea" placeholder="备注描述" />
          <p v-else class="disable-text">{{ form.description }}</p>
        </el-form-item>
      </el-form>
      <el-button v-if="isEdit !== 'detail'" style="width: 100%" type="primary" @click="submit" :disabled="isEdit === 'detail'">提 交</el-button>
    </div>
  </div>
</template>

<script>
import AreaSelector from '@/components/AreaSelector'
import Back from '../../components/Back'
import { createFamily, familyDetail, memberDetail, updateMember, addMember, memberRelationship, getBirthDay } from '@/api/member'
import { queryPosition, queryGroup } from '@/api/common'

export default {
  components: {
    AreaSelector,
    Back
  },
  data() {
    return {
      form: {
        isConfirm: 1
        // villageGroupId: 0
      },
      familyCount: '',
      formLabelWidth: '100px',
      groupOptions: [],
      relationshipList: [],
      rules: {
        name: [
          { required: true, message: '请输入户主姓名', trigger: 'blur' }
        ],
        idCard: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { required: true, message: '请输入正确的身份证号', trigger: 'blur', pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ }
        ],
        currentAddress: [
          { required: true, message: '请输入居住地址', trigger: 'blur' }
        ],
        position: [ { required: true, message: '请选择职位', trigger: 'change' }],
        villageGroupId: [
          { required: true, message: '请选择组/社', trigger: 'change' }
        ],
        relationship: [
          { required: true, message: '请选择与户主关系', trigger: 'change' }
        ],
        birthDate: [
          { required: true, message: '请选择出生日期', trigger: 'change' }
        ],
        description: [
          { message: '请填写组织介绍', trigger: 'blur' }
        ],
        obtainWay: [{ required: true, message: '请填写成员资格取得方式' }]
      },
      isEdit: false,
      areaList: [],
      posiitonList: []
    }
  },
  watch: {
    areaList: {
      deep: true,
      handler() {
        const id = this.areaList[1].value
        this.getGroupList(id)
      }
    }
  },
  created() {
    this.isEdit = this.$route.query.isEdit
    this.familyCount = this.$route.query.familyCount
    this.getPositionList()
    this.getRelationList()
    if (this.isEdit !== 'new' && this.isEdit !== 'addMember') {
      this.getDetail()
    }
  },
  methods: {
    areaChange(val) {
      this.areaList = val
      if(this.form.villageGroupId) {
        this.form.villageGroupId = ''
      }
    },
    getBirthDay() {
      if(this.form.idCard && /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.form.idCard)) {
        let fd = new FormData()
        fd.append('idCard', this.form.idCard)
        getBirthDay(fd).then(res => {
          let d = new Date(res.data.birthDate)
          // console.log(res)
          // d.setFullYear(res.data.split('-')[0])
          // d.setMonth(Number(res.data.split('-')[1]) - 1)
          // d.setDate(res.data.split('-')[2])
          this.form.birthDate = d
          this.$forceUpdate()
        })
      }
    },
    submit() {
      this.$refs.ruleForm.validate(valid => {
        if(!valid) {
          return
        }
        let request = null
        const id = this.$route.query.id
        const memberId = this.$route.query.memberId
        if(!this.form.isHasLand) {
          delete this.form.getLandTime
        }
        switch(this.isEdit) {
          case 'new': {
            request = createFamily(this.form)
            break
          }
          case 'edit': {
            // todo： 变更农户
            request = updateMember(this.form)
            break
          }
          case 'addMember': {
            const params = {
              ...this.form,
              familyId: id
            }
            request = addMember(params)
            break
          }
          case 'editMember': {
            const params = {
              ...this.form,
              familyId: id,
              memberId
            }
            delete params.relationshipName
            request = updateMember(params)
          }
        }
        request.then(res => {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          if (id && this.isEdit === 'new') {
            this.$router.push('/member/index')
          } else {
            history.back()
          }
        })
      })
    },
    getDetail() {
      const id = this.$route.query.id
      const memberId = this.$route.query.memberId
      let request = null
      if(memberId) {
        request = memberDetail({ memberId: memberId})
      }
      else if(id) {
        request = familyDetail({ memberId: id})
      } 
      request.then(res => {
        this.form = {
          ...res.data,
          name: res.data.name || res.data.memberName
        }
        if (res.data.villageId) {
          this.getGroupList(res.data.villageId)
        }
        // this.form.name = res.data.name || res.data.memberName
      })
    },
    newFamily() {

    },
    getPositionList() {
      queryPosition().then(res => {
        this.posiitonList = res.data.positionInfos || []
      })
    },
    getGroupList(id) {
      queryGroup({villageId: id}).then(res => {
        this.groupOptions = res.data.villageGroupInfos || []
      })
    },
    getRelationList(id) {
      memberRelationship({villageId: id}).then(res => {
        this.relationshipList = res.data.relationshipInfos || []
      })
    },
  }
}
</script>

<style scoped>
  .organization-page {
    width: 100%;
    padding: 10px;
    background: rgb(235,238,242);
    min-height: calc(100vh - 50px);
  }

  .content {
    background: #fff;
    padding: 20px;
    margin-top: 15px;
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
    margin: 0 0 20px 0;
    display: flex;
    justify-content: space-between;
  }

  .search-input {
    width: 300px;
  }

  .dialog-footer {
    text-align: center;
  }
  .disable-text {
    margin: 0;
  }
</style>

<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
