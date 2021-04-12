<template>
  <div class="bottom-page">
    <div class="content" style="overflow:hidden">
      <el-alert
    title="请上传 1440 * 150 分辨率的图片"
    :closable="false"
    type="warning">
  </el-alert>
      <el-form :form="webInfo" label-width="120px">
        <el-divider content-position="left">网站信息</el-divider>
         <el-col :span="12">
          <el-form-item label="网站名称">
            <el-input v-model="webInfo.name"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="copyright">
            <el-input v-model="webInfo.copyright"/>
          </el-form-item>
        </el-col>
       <!-- <el-col :span="12">
          <el-form-item label="copyright 描述">
            <el-input v-model="webInfo.copyrightDescription"/>
          </el-form-item>
        </el-col> -->
        <el-col :span="12">
          <el-form-item label="备案号">
            <el-input v-model="webInfo.recordNo"/>
          </el-form-item>
        </el-col>
        <!-- <el-col :span="12">
          <el-form-item label="备案号">
            <el-input v-model="webInfo.publicSecurityRecordNo"/>
          </el-form-item>
        </el-col> -->
        <el-col :span="12">
          <el-form-item label="地址">
            <el-input v-model="webInfo.address"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电话">
            <el-input v-model="webInfo.phone"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="投稿">
            <el-input v-model="webInfo.email"/>
          </el-form-item>
        </el-col>
        <!-- <el-col :span="12">
          <el-form-item label="技术支持">
            <el-input v-model="webInfo.support"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系电话">
            <el-input v-model="webInfo.contact"/>
          </el-form-item>
        </el-col> -->
        <el-col :span="12">
           <el-form-item label="背景图片">
            <input ref="file" type="file" @change="handleChange" accept="image/*"/>
            <br/>
            <img v-if="webInfo.backgroundImageUrl" :src="webInfo.backgroundImageUrl" style="width: 100px;margin-top:10px;"/>
          </el-form-item>
        </el-col>
      </el-form>
      <el-button style="width:100%;margin-top:20px;" type="primary" :disabled="uploading" @click="save">提交</el-button>
    </div>
  </div>
</template>

<script>
import { getWebInfo, updateWebInfo } from '@/api/bottom'
import { upload } from '@/api/carousel'
export default {
  components: {
  },
  data() {
    return {
      webInfo: {},
      uploading: false
    }
  },
  created() {
    getWebInfo().then(res => {
      this.webInfo = res.data
    })
  },
  methods: {
    handleChange() {
      // if(this.$refs.file.files[0]) {
      //   let fd = new FormData()
      //   fd.append('file', this.$refs.file.files[0])
      //   upload(fd).then(res => {
      //     this.$set(this.webInfo, 'backgroundImageUrl', res.data.data[0])
      //   })
      // }
      let self = this
        if(this.$refs.file.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              var data = e.target.result;
              //加载图片获取图片真实宽度和高度
              var image = new Image();
              image.onload=function(){
                  var width = image.width;
                  var height = image.height;
                  if(width / height != 9.6) {
                    self.$message({
                      type: 'warning',
                      message: '图片比例不正确'
                    })
                    return
                  }
                  else if(width < 1440) {
                    self.$message({
                      type: 'warning',
                      message: '图片像素不能低于1440px'
                    })
                    return
                  }
                  else {
                    let fd = new FormData()
                    fd.append('file', self.$refs.file.files[0])
                    self.uploading = true
                    upload(fd).then(res => {
                      self.uploading = false
                      self.$set(self.webInfo, 'backgroundImageUrl', res.data.data[0])
                    }).catch(e => {
                      self.uploading = false
                    })
                  }
              };
              image.src= data;
          };
          reader.readAsDataURL(this.$refs.file.files[0]);
        }
    },
    save() {
      updateWebInfo(this.webInfo).then(res => {
        this.$message({
          type: 'success',
          message: '操作成功'
        })
      })
    }
  }
}
</script>

<style lang="scss" scope>
   .bottom-page {
    width: 100%;
    padding: 10px;
    background: rgb(235,238,242);
    min-height: calc(100vh - 50px);
    .content {
      background: #fff;
      padding: 20px;
      margin-top: 15px;
    }
  }
</style>