<template>
  <div>
  <Back/>
  <div class="flex align-items-center">
    <span style="font-size: 14px;">当前位置：</span><Breadcrumb/>
  </div>
  <el-card class="email-detail">
    <div slot="header" class="clearfix">
      <span>信件处理结果</span>
    </div>
    <el-form :model="form" :rules="rules" ref="form" label-width="110px" class="border-container" style="margin-top: -10px;">
      <el-row>
        <el-col class="border-bottom" :span="24">
          <el-form-item label="信件编号" prop="letterId">
            <p>{{ form.letterId }}</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="border-bottom" :span="24">
          <el-form-item label="信件类型" prop="feedbackType">
            <p>{{ form.feedbackType }}</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="border-bottom" :span="24">
          <el-form-item label="来信时间" prop="letterTime">
            <p>{{ form.letterTime }}</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="border-bottom" :span="24">
          <el-form-item label="信件主题" prop="subject">
            <p>{{ form.subject }}</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="border-bottom" :span="24">
          <el-form-item label="信件内容" prop="content">
            <p>{{ form.content }}</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-for="(item, index) in form.letterReplyInfos || []" :key="index">
        <el-col :span="18">
          <el-form-item label="回复">
            <p>{{ item.replyContent }}</p>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="回复时间">
            <p>{{ item.replyTime }}</p>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
  </div>
</template>

<script>
import Back from '@/components/Back'
import Breadcrumb from '@/components/Breadcrumb'
import { emailDetail } from '@/api/contact'
export default {
  components: {
    Back,
    Breadcrumb
  },
  data() {
    return {
      form: {

      },
      rules: {
       
      },

    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if(valid) {
          emailSubmit(this.form).then(res => {
            this.$message({
              type: 'success',
              message: '提交成功'
            })
            // this.$router.push({
            //   path: '/supply',
            //   query: {
            //     k: 1
            //   }
            // })
          })
        }
      })
    }
  },
  mounted() {
    // draw('1fd5')
    emailDetail({
      letterId: this.$route.query.id
    }).then(res => {
      this.form = res.data
    })
  }
}
</script>

<style lang="scss">
  .email-detail p {
    margin: 0;
  }
  .email-detail .border-container {
    // border-top-width: 1px;
    // border-left-width: 1px;
    // border-right-width: 1px;
    // border-bottom-width: 0;
    // border-color: #eee;
    // border-style: solid;
    .border-bottom {
      border-bottom-width: 1px;
      border-left-width: 0;
      border-right-width: 0;
      border-top-width: 0;
      border-color: #eee;
      border-style: solid;
    }
    .el-form-item {
      margin: 5px 0;
      .el-form-item__label {
        color: #333 !important;
      }
    }
  }
</style>