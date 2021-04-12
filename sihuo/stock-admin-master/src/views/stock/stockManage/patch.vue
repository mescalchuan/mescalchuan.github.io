<template>
  <div class="patch-page">
     <back></back>
    <div class="patch-content">
      <div>
        <input type="file" ref="file">
      </div>
      <el-button type="primary" style="margin-top: 20px;" @click="upload">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      <el-divider></el-divider>
      <div>
        <h3>导入数据表结构说明：</h3>
        <p>1、批量入股前必须保证当前农户已经录入系统</p>
        <p>2、批量入股前请先增加经济组织</p>
        <p>3、结构如下：</p>
        <img :src="require('../../../assets/patch.jpg')" alt="" style="width: 100%;">
      </div>
    </div>
  </div>
</template>

<script>
import { stockImport } from '@/api/stock'
import Back from '../../../components/Back'
export default {
  components: {
    Back
  },
  data() {
    return {
      form: {}
    }
  },
  methods: {
    upload() {
      if(this.$refs.file.files.length) {
        this.$confirm(`当前即将给${this.$route.query.name}批量入股`, '系统提示', {
          confirmButtonText: '确认上传',
          cancelButtonText: '取消'
        }).then(action => {
            let fd = new FormData()
            fd.append('file', this.$refs.file.files[0])
            fd.append('economicGroupId', this.$route.query.id)
            let m = this.$message({
              message: '正在上传...',
              duration: 0
            });
            stockImport(fd).then(res => {
              m.close()
              this.$message({
                message: '操作成功',
                type: 'success'
              })
            }).catch(e => {
              m.close()
            })
            // this.$message({
            //   type: 'info',
            //   message: `action: ${ action }`
            // });
          }
        ).catch(() => {})
      }
      else {
        this.$message({
          type: 'warning',
          message: '请选择文件'
        })
      }
    }
  }
}
</script>

<style scope>
   .patch-page {
    width: 100%;
    padding: 10px;
  }

  .patch-content {
    background: #fff;
    padding: 20px;
  }
</style>