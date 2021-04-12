<template>
  <el-card>
    <p style="color:red">注意事项</p>
    <p>1、请详细填写咨询人姓名、邮箱、电话等联系信息，以方便我们及时与您联系。</p>
    <p>2、信访标题应简明扼要，一目了然。</p>
    <p>3、信访内容中，请详细写明事件发生起因、经过、地点、双方当事人信息、是否有目击者等信息。</p>
    <p>4、请遵守中华人民共和国法律法规，禁止发表任何非法信息。</p>
    <el-form :model="form" :rules="rules" ref="form" label-width="110px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="writerName">
            <el-input v-model="form.writerName" placeholder="请填写姓名"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="性别" prop="writerSex">
            <el-radio-group v-model="form.writerSex">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="联系电话" prop="writerPhone">
            <el-input v-model="form.writerPhone" placeholder="请填写联系电话"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="电子邮箱" prop="writerEmail">
            <el-input v-model="form.writerEmail" placeholder="请填写电子邮箱"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="联系地址" prop="writerAddress">
        <el-input v-model="form.writerAddress" placeholder="请填写联系地址"></el-input>
      </el-form-item>
      <el-form-item label="反馈类别" prop="feedbackType">
        <el-select v-model="form.feedbackType" placeholder="请选择反馈类别" style="width:160px">
          <el-option v-for="(item, index) in feedbackType" :key="index" :label="item.name" :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="是否公开" prop="isOpen">
        <el-select v-model="form.isOpen" placeholder="请选择是否公开" style="width:160px">
          <el-option label="是" :value="true" />
          <el-option label="否" :value="false" />
        </el-select>
      </el-form-item>
      <el-form-item label="信件主题" prop="subject">
        <el-input v-model="form.subject" placeholder="请填写信件主题"></el-input>
      </el-form-item>
      <el-form-item label="信件内容" prop="content">
        <el-input
          type="textarea"
          :rows="5"
          placeholder="请填写信件内容"
          v-model="form.content">
        </el-input>
      </el-form-item>
      <!-- <el-form-item label="验证码" prop="name">
        <div class="flex align-items-center">
          <el-input v-model="form.name" style="width:100px;"></el-input>
          <canvas id="canvas" style="width:80px;height:40px;margin-left:10px;"/>
        </div>
      </el-form-item> -->
    </el-form>
    <el-button type="primary" style="width:100%;margin-top:10px;" @click="submit">提交</el-button>
  </el-card>
</template>

<script>
import { draw } from '@/utils/index'
import { getFeedbackType, emailSubmit } from '@/api/contact'
export default {
  data() {
    return {
      form: {
        writerSex: 0
      },
      rules: {
        writerName: { required: true, message: '请填写姓名' },
        writerSex: { required: true, message: '请选择性别' },
        writerPhone: { required: true, message: '请填写联系电话' },
        writerEmail: { required: true, message: '请填写电子邮箱' },
        writerAddress: { required: true, message: '请填写联系地址' },
        feedbackType: { required: true, message: '请选择反馈类别' },
        isOpen: { required: true, message: '请选择是否公开' },
        subject: { required: true, message: '请填写信件主题' },
        content: { required: true, message: '请填写信件内容' },
      },
      feedbackType: []
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
    getFeedbackType().then(res => {
      this.feedbackType = res.data.typeInfos
    })
  }
}
</script>