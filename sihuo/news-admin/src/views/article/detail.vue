<template>
  <div class="detail-page">
    <back></back>
    <el-card class="box-card">
      <el-divider content-position="left">文章标题</el-divider>
      <el-input v-model="article.name" placeholder="请输入文章标题"/>
      <el-divider v-if="$route.query.type == 'new'" content-position="left">文章分类</el-divider>
      <el-select v-if="$route.query.type == 'new'" v-model="article.categoryId" placeholder="请选择分类" @change="handleCategoryChange" >
        <el-option v-for="(item, index) in categoryList" :key="index" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select v-if="$route.query.type == 'new'" v-model="article.childId" placeholder="请选择子分类" style="margin-left:10px;">
        <el-option v-for="(item, index) in childList" :key="index" :label="item.name" :value="item.id"/>
      </el-select>
      <el-divider v-if="isShow" content-position="left">是否显示</el-divider>
      <el-radio-group v-if="isShow" v-model="article.isShow">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
      <el-divider v-if="isShow" content-position="left">责任编辑</el-divider>
      <el-input v-if="isShow" disabled v-model="author" placeholder="请输入责任编辑"/>
      <!-- <p v-if="isShow">{{ author }}</p> -->
      <el-divider v-if="isShow" content-position="left">文章内容</el-divider>
      <editor v-if="isShow && !loading" :value="article.content"  ref="editor"/>
      <el-divider v-if="!isShow" content-position="left">资料上传</el-divider>
      <input v-if="!isShow" ref="file" type="file" @change="handleChange"/>
      <br/>
      <a v-if="article.fileUrl" :href="article.fileUrl" target="__blank">{{ article.fileUrl }}</a>
      <el-button type="primary" style="width:100%;margin-top:20px;" :disabled="uploading" @click="save">提交</el-button>
    </el-card>
  </div>
</template>

<script>
import Back from '../../components/Back'
import { getDetail, articleSave, articleUpdate } from '@/api/article'
import { fileUpload } from '@/api/carousel'
import editor from '@/components/vue-wangeditor/index1'
  import { getArticleCategory, getChildCategory } from '@/api/menu'
export default {
  components: {
    Back,
    editor
  },
  data() {
    return {
      loading: true,
      article: { },
      categoryList: [],
      childList: [],
      author: localStorage.getItem('un'),
      uploading: false
    }
  },
  computed: {
    isShow() {
      return this.$route.query.type == 'new' ? this.article.childId != 9 : !this.article.fileUrl
    }
  },
  mounted() {
    if(this.$route.query.type == 'new') {
      getArticleCategory({
        parentId: ''
      }).then(res => {
        this.categoryList = res.data.categoryList
        // this.article.categoryId = res.data.categoryList[0].id
        // getChildCategory({
        //   parentId: this.search.categoryId
        // }).then(res => {
        //   this.childList = res.data.categoryList
        //   this.article.childId = res.data.categoryList[0].id
        // })
        this.loading = false
      })
    }
    if(this.$route.query.type == 'edit') {
      getDetail({
        newsId: this.$route.query.id
      }).then(res => {
        this.article = res.data
        // document.title = this.article.name
        this.loading = false
      })
    }
    
  },
  methods: {
    handleCategoryChange(e) {
      delete this.article.childId
      getChildCategory({
        parentId: this.categoryList.filter(item => item.id == e)[0].id
      }).then(res => {
        this.childList = res.data.categoryList
      })
    },
    handleChange() {
      if(this.$refs.file.files[0]) {
        let fd = new FormData()
        fd.append('file', this.$refs.file.files[0])
        this.uploading = true
        fileUpload(fd).then(res => {
          this.$set(this.article, 'fileUrl', res.data.fileUrl)
          this.uploading = false
        }).catch(e => {
          this.uploading = false
        })
      }
    },
    save() {
      if(this.$route.query.type == 'new') {
        articleSave({
          author: this.author,
          categoryId: this.article.childId,
          content: this.isShow ? this.$refs.editor.$data.editor.$txt.html() : this.article.content,
          name: this.article.name,
          fileUrl: this.article.fileUrl,
          isShow: this.article.isShow
        }).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.$router.go(-1)
        })
      }
      else {
        articleUpdate({
          author: this.author,
          categoryId: this.article.childId,
          content: this.isShow ? this.$refs.editor.$data.editor.$txt.html() : this.article.content,
          name: this.article.name,
          articleId: this.$route.query.id,
          fileUrl: this.article.fileUrl,
          isShow: this.article.isShow
        }).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.$router.go(-1)
        })
      }
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