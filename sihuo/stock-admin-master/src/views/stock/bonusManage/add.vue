<template>
  <div class="detail-page">
    <back></back>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>组织代码: {{ basicInfo.groupCode }}</span>
            <span>组织名称: {{ basicInfo.groupName }}</span>
            <span>法人: {{ basicInfo.legal }}</span>
            <el-tag type="success" size="mini">经济组织分红</el-tag>
        </div>
        <el-form ref="ruleForm" :model="form" :rules="rules"  label-width="200px" style="margin-right:150px" class="demo-ruleForm">
            <el-form-item label="分红总额" prop="dividendAmount">
               <el-input v-model="form.dividendAmount" />
            </el-form-item>
            <el-form-item label="分红年份" prop="dividendYear">
                <el-date-picker v-model="form.dividendYear" value-format="yyyy" type="year" placeholder="选择分红年份" style="width: 100%;" />
            </el-form-item>
            <el-form-item label="分红日期" prop="dividendTime">
                <el-date-picker v-model="form.dividendTime" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-form-item>
            <el-form-item label="备注" prop="description">
                <el-input v-model="form.description" type="textarea"/>
            </el-form-item>
        </el-form>
        <el-button type="primary" style="width:calc(100% - 300px);margin:20px 150px;" @click="save">确认分红</el-button>
    </el-card>
  </div>
</template>

<script>
import Back from '../../../components/Back'
import { getDetail } from '@/api/economic'
import { bonusAdd } from '@/api/stock'
export default {
  components: {
    Back,
  },
  data() {
    return {
        basicInfo: {},
        form: {
            dividendAmount: 0,
            dividendYear: '',
            dividendTime: new Date()
        },
        rules: {
            dividendAmount: { required: true, message: '请输入分红总额' },
            dividendYear: { required: true, message: '请输入分红年份' },
            dividendTime: { required: true, message: '请选择分红日期' }
        }
    }
  },
  created() {
    getDetail({
      economicGroupId: this.$route.query.id
    }).then(res => {
      this.basicInfo = res.data
    })
  },
  methods:{
      save() {
          this.form.economicGroupId = this.$route.query.id
          this.$refs.ruleForm.validate(valid => {
            if(valid) {
            bonusAdd(this.form).then(res => {
                this.$message({
                type: 'success',
                message: '操作成功'
                })
                this.$router.go(-1)
            })
            }
        })
          
      }
  }
}
</script>

<style lang="scss" scoped>
.detail-page {
  .content {
    background: #fff;
    padding: 20px;
    margin-top: 15px;
  }
  .option-box {
    margin: 0;
    display: flex;
    justify-content: space-between;
    .search-box {
      display: flex;
    }
  }
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
