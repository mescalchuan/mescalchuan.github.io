<template>
  <div class="carousel-page">
    <div class="content">
      <el-alert
    title="系统首页最多只能展示 5 张图片，后台最多上传 5 张图片"
    :closable="false"
    type="warning">
  </el-alert>
    <div style="overflow: hidden;">
      <el-button type="primary" style="float: right; margin: 10px 0;" :disabled="carouselList.length >= 5" @click="handleAddCarousel">添加轮播图</el-button>
    </div>
    <el-table
      :data="carouselList"
      header-cell-class-name="table-header-color"
      style="width: 100%;">
      <el-table-column
        prop="name"
        label="文章名称"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="图片预览"
        align="center"
      >
        <template slot-scope="scope">
          <img :src="scope.row.imageUrl" style="max-width: 100px;"/>
        </template>
      </el-table-column>
       <el-table-column
        prop="sort"
        label="排序"
        align="center"
        width="150px"
      >
      </el-table-column>
      <el-table-column
        prop="isShow"
        label="是否展示"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <!-- <el-radio-group v-model="scope.row.isShow">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group> -->
          <p>{{ scope.row.isShow ? '是' : '否' }}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作"
        align="center"
        width="200px"
      >
        <template slot-scope="scope">
          <el-button size="small" type="warning" @click="handleChildShow(scope.row)">编辑</el-button>
          <!-- <el-button size="small" type="danger">删除</el-button> -->
          <el-button size="small" type="danger" style="margin-left:10px;" @click="handleDelete(scope.row.imageId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="(mode == 'add' ? '添加' : '编辑') + '轮播图'"
      :visible.sync="addShow"
      width="600px"
      @opened="() => {
        if(mode == 'add') {
          $set(form, 'sort', carouselList.length ? Number(carouselList.length) : 0)
        }
      }"
      @closed="() => form = {}"
    >
      <el-form label-width="100px">
        <el-form-item label="文章链接">
          <el-input v-model="form.link" placeholder="请输入文章标题" />
        </el-form-item>
        <el-form-item label="文章标题">
          <el-input v-model="form.name" placeholder="请输入文章链接" />
        </el-form-item>
        <el-alert
          title="请上传 600 * 400 分辨率的图片"
          :closable="false"
          type="warning">
        </el-alert>
        <el-form-item label="文章图片">
          <input ref="file" type="file" @change="handleChange" accept="image/*"/>
          <br/>
          <img v-if="form.imageUrl" :src="form.imageUrl" style="width: 100px;margin-top:10px;"/>
        </el-form-item>
         <el-form-item label="排序">
          <el-select v-model="form.sort">
            <el-option v-for="(item, index) in carouselList" :label="index" :value="index" :key="index"/>
          </el-select>
        </el-form-item>
        <el-form-item label="是否展示">
           <el-radio-group v-model="form.isShow">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addShow = false">取 消</el-button>
        <el-button type="primary" @click="saveNewCarousel" :disabled="uploading">确 定</el-button>
      </span>
    </el-dialog>
    </div>
  </div>
</template>

<script>
  import { getCarouselList, upload, addCarousel, editCarousel, deleteCarousel } from '@/api/carousel'
  export default {
    data() {
      return {
        carouselList: [],
        addShow: false,
        file: {},
        form: {},
        mode: 'add',
        uploading: false
      }
    },
    methods: {
      handleChildShow(row) {
        this.form = JSON.parse(JSON.stringify(row))
        this.form.link = window.location.origin + '/news#/article/' + this.form.linkArticleId
        this.addShow = true
        this.mode = 'edit'
      },
      handleAddCarousel() {
        this.addShow = true
        this.mode = 'add'
      },
      saveNewCarousel() {
        let linkUrl = (this.form.link || '').split('/')
        let linkArticleId = linkUrl[linkUrl.length - 1]
        if(this.mode == 'edit') {
          linkArticleId = this.form.linkArticleId
          if(isNaN(Number(linkArticleId)) || !linkArticleId) {
            this.$message.error('文章链接地址无效')
            return
          }
          editCarousel({
            imageUrl: this.form.imageUrl,
            linkArticleId,
            name: this.form.name,
            sort: this.form.sort,
            isShow: this.form.isShow,
            imageId: this.form.imageId
          }).then(res => {
              this.$message({
                type: 'success',
                message: '操作成功'
              })
              this.form = {}
              this.addShow = false
              this.getCarouselList()
            })
        }
        else {
          if(isNaN(Number(linkArticleId)) || !linkArticleId) {
            this.$message.error('文章链接地址无效')
            return
          }
          
          addCarousel({
          imageUrl: this.form.imageUrl,
          linkArticleId,
          name: this.form.name,
          sort: this.form.sort,
          isShow: this.form.isShow
        }).then(res => {
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.form = {}
            this.addShow = false
            this.getCarouselList()
          })
        }
        
      },
      handleChange() {
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
                  if(width / height != 1.5) {
                    self.$message({
                      type: 'warning',
                      message: '图片比例不正确'
                    })
                    return
                  }
                  else if(width < 600) {
                    self.$message({
                      type: 'warning',
                      message: '图片像素不能低于600px'
                    })
                    return
                  }
                  else {
                    let fd = new FormData()
                    fd.append('file', self.$refs.file.files[0])
                    self.uploading = true
                    upload(fd).then(res => {
                      self.uploading = false
                      self.$set(self.form, 'imageUrl', res.data.data[0])
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
      handleDelete(imageId) {
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteCarousel({
          imageId,
        }).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.getCarouselList()
        })
          
        })
        
      },
      getCarouselList() {
        getCarouselList().then(res => {
          this.carouselList = res.data.rotationImageInfos
        })
      }
    },
    created() {
      this.getCarouselList()
    }
  }
</script>

<style lang="scss" scoped>
  .carousel-page {
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