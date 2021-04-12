<template>
  <div class="detail-page">
    <back></back>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        {{basicInfo.address}} 户 {{basicInfo.familyNo}} ({{basicInfo.name}})
        <el-button v-if="$hasAuth(11)" icon="el-icon-plus" type="primary" @click="addMember" style="float: right">新增家庭成员</el-button>
      </div>
      <div style="padding: 10px">
        <el-table
          header-cell-class-name="table-header-color"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="memberName"
            label="成员"
          />
          <el-table-column
            prop="relationship"
            label="与户主关系"
          >
            <template slot-scope="scope">
              <!-- <p v-if="relationshipList.length">{{ relationshipList.filter(item => item.relationshipId == scope.row.relationship)[0].relationshipName }}</p> -->
              <p>{{ scope.row.relationshipName }}</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
          >
            <template slot-scope="scope">
              <p v-if="scope.row.sex == 0">保密</p>
              <p v-else-if="scope.row.sex == 1">男</p>
              <p v-else-if="scope.row.sex == 2">女</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="idCard"
            label="身份证号"
            width="230"
          />
          <el-table-column
            prop="birthDate"
            label="出生日期"
          />
          <el-table-column
            prop="currentAddress"
            label="现居住地"
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="320"
          >
            <template slot-scope="scope">
              <el-button v-if="$hasAuth(12)" icon="el-icon-s-tools" type="success" @click="handleEdit('editMember', scope.row.memberId)">变更</el-button>
              <el-button v-if="$hasAuth(14)" icon="el-icon-warning" type="warning" @click="handleEdit('detail', scope.row.memberId)">详情</el-button>
              <el-button v-if="$hasAuth(13)" icon="el-icon-delete-solid" type="danger" @click="deleteMember(scope.row)">注销</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        {{basicInfo.address}} 户 {{basicInfo.familyNo}} ({{basicInfo.name}})
        <el-tag type="success" size="mini">变更记录</el-tag>
      </div>
      <div style="padding: 10px">
          <el-table
            header-cell-class-name="table-header-color"
            :data="memberUpdateHistoryInfos"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="updateTime"
              label="变更时间"
            />
            <el-table-column
              prop="memberName"
              label="成员名"
            />
            <el-table-column
              prop="updateDetail"
              label="变更详情"
            />
          </el-table>
        </div>
    </el-card>
    <el-dialog
      title="关系变更"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form label-width="80px">
        <el-form-item v-for="(item) in tableData.filter(item => item.relationship !== 1)" :key="item.memberId" :label="item.memberName">
          <el-select v-model="form[item.memberId]" filterable placeholder="更新关系">
            <el-option
              v-for="item in relationshipList"
              :key="item.relationshipId"
              :label="item.relationshipName"
              :value="item.relationshipId"
            />
          </el-select>
        </el-form-item>
      </el-form>
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button @click="changeRelationship(currentId)" type="primary">确 定</el-button>
    </el-dialog>
  </div>
</template>

<script>
import FormItemLayout from '../../components/FormItemLayout'
import Back from '../../components/Back'
import { familyMember, cancelMember, memberRelationship, history } from '../../api/member'

export default {
  name: 'OrganizationDetail',
  components: {
    FormItemLayout,
    Back
  },
  data() {
    return {
      memberUpdateHistoryInfos: [],
      tableData: [],
      basicInfo: {},
      form: {
      },
      dialogVisible: false,
      relationshipList: [],
      currentId: ''
    }
  },
  created() {
    this.basicInfo =  {
      address: this.$route.query.village,
      name: this.$route.query.name,
      familyNo: this.$route.query.familyNo
    }
    this.getFamilyMember()
    this.getRelationList()
    let fd = new FormData()
    fd.append('familyId', this.$route.query.id)
    history(fd).then(res => {
      this.memberUpdateHistoryInfos = res.data.memberUpdateHistoryInfos
    })
  },
  methods: {
    handleEdit(flag, id) {
      if(flag == 'detail') {
        this.$router.push(`/member/edit?isEdit=${flag}&memberId=${id}&familyCount=${this.basicInfo.familyNo}`)
      }
      else {
        const fid = this.$route.query.id
        this.$router.push(`/member/edit?isEdit=${flag}&id=${fid}&memberId=${id}&familyCount=${this.basicInfo.familyNo}`)
      }
    },
    addMember() {
      const id = this.$route.query.id
      this.$router.push(`/member/edit?isEdit=addMember&id=${id}&familyCount=${this.basicInfo.familyNo}`)
    },
    goDetail() {
      this.$router.push('/member/detail')
    },
    deleteMember(item) {
      this.$confirm('确认注销？', '系统提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const id = item.memberId
        if (item.relationship === 1 && this.tableData.length > 1) {
          this.dialogVisible = true
          this.currentId = id
        } else {
          this.cancleMember(id)
        }
      })
    },
    cancleMember(id, relationShip) {
      let params = {
        memberId: id
      }
      if(relationShip) {
        let farmer = relationShip.filter(item => item.relationship === 1)
        if(!farmer.length) {
          this.$message.error('必须有一成员为户主')
          return
        }
        params.memberRelationships = relationShip
        params.memberId = this.currentId
      }
      cancelMember(params).then(res => {
        this.$message(
          {
            type: 'success',
            message: '操作成功！'
          }
        )
        this.dialogVisible = false
        this.getFamilyMember()
      })
    },
    makeSureCancle(id) {
      // this.$message({
      //   type: 'warning',
      //   message: '暂不能修改'
      // })
      let numbers = Object.keys(this.form)
      let memberRelationships = []
      numbers.map(item => {
        memberRelationships.push({
          memberId: item,
          relationship: this.form[item]
        })
      })
      this.cancleMember(id, memberRelationships)
    },
    getFamilyMember() {
      const id = this.$route.query.id
      familyMember({ familyId: id }).then(res => {
        this.tableData = res.data.memberInfos
      })
    },
    getRelationList(id) {
      memberRelationship({villageId: id}).then(res => {
        this.relationshipList = res.data.relationshipInfos || []
      })
    },
    changeRelationship(id) {
      this.makeSureCancle(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-page {
  width: 100%;
  padding: 10px;
  background: rgb(235,238,242);
  min-height: calc(100vh - 50px);

  .content {
    background: #fff;
    padding: 20px;
    margin-top: 15px;
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

  .form-group {
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;

    .width-200 {
      width: 200px;
    }

    .add-btn {
      margin: 0 0 0 20px;
    }
  }
  .form-item-width {
    width: 40%;
    max-width: 400px;
  }
}
</style>

<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
