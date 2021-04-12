<template>
  <div class="email-detail"> 
    <div class="content">
      <Back/>
      <el-form :model="form" :rules="rules" ref="form" label-width="110px">
          <el-row>
            <el-col :span="24">
              <el-form-item label="信件主题" prop="subject">
                <p>{{ form.subject }}</p>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="信件内容" prop="content">
                <p>{{ form.content }}</p>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- <el-row v-for="(item, index) in form.letterReplyInfos || []" :key="index">
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
          </el-row> -->
          <el-row>
            <el-form-item label="回复">
              <el-input type="textarea" :rows="5" v-model="form.replyContent"/>
            </el-form-item>
          </el-row>
        </el-form>
        <el-button type="primary" style="width: 100%;" @click="replyEmail">回复信件</el-button>
    </div>
  </div>
</template>

<script>
import Back from '@/components/Back'
import Breadcrumb from '@/components/Breadcrumb'
import { emailDetail, replyEmail } from '@/api/contact'
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
    },
    replyEmail() {
      replyEmail({
        letterId: this.$route.query.id,
        replyContent: this.form.replyContent
      }).then(res => {
        this.$message({
          type: 'success',
          message: '操作成功'
        })
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
  .email-detail {
    width: 100%;
    padding: 10px;
    background: rgb(235,238,242);
    min-height: calc(100vh - 50px);
    .table-header-color {
      background: rgb(245,247,250)!important;
      color: #333 !important;
      
    }
  .content {
      background: #fff;
      padding: 20px;
      margin-top: 15px;
    }
  }
</style>