<template>
  <div class="detail-page">
    <el-card class="box-card">
      <el-divider content-position="left">中心介绍</el-divider>
      <editor v-if="!loading" ref="editor" :value="content" />
      <el-button type="primary" style="width:100%;margin-top:20px;" @click="save">提交</el-button>
    </el-card>
  </div>
</template>

<script>
import Back from '../../components/Back'
import { introctionDetail, introctionUpdate } from '@/api/about'
import { fileUpload } from '@/api/carousel'
import editor from '@/components/vue-wangeditor/index1'
export default {
  components: {
    Back,
    editor
  },
  data() {
    return {
      loading: true,
      content: '',
      categoryList: [],
      childList: []
    }
  },
  mounted() {
    introctionDetail().then(res => {
      this.content = res.data.introduction
      this.loading = false
    })
  },
  methods: {
    save() {
      introctionUpdate({
        introduction: this.$refs.editor.$data.editor.$txt.html()
      }).then(res => {
        this.$message({
          type: 'success',
          message: '操作成功'
        })
      })
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

  
}
</style>