<template>
  <div class="organization-page">
    <area-selector @areaChange="areaChange" />
    <div class="content">
      <div>
        <input type="file" ref="file">
      </div>
      <el-button type="primary" style="margin-top: 20px;" @click="upload">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      <el-divider></el-divider>
      <div>
        <h3>导入数据表结构说明：</h3>
        <p>1、批量导入农户信息的表结构必须如下图</p>
        <p>2、导入前请确保组别信息为该户的第一行</p>
        <p>3、保证农户的身份证是合法的格式，否则导入不成功</p>
        <p>4、统一表头：迭部县XXX镇XXX村农村集体经济组织成员身份确认统计表</p>
        <img :src="require('../../assets/example.png')" alt="" style="width: 100%;">
      </div>
    </div>
  </div>
</template>

<script>
import AreaSelector from '@/components/AreaSelector'
import { importExcel } from '@/api/import'
export default {
  components: {
    AreaSelector
  },
  data() {
    return {
      form: {}
    }
  },
  methods: {
    areaChange(val) {
      this.areaList = val
      this.form.villageGroupId = val[1].value
    },
    upload() {
      if(this.$refs.file.files.length) {
        this.$confirm(`当前即将导入${this.areaList[1].name}农户信息`, '系统提示', {
          confirmButtonText: '确认上传',
          cancelButtonText: '取消'
        }).then(action => {
            let fd = new FormData()
            fd.append('file', this.$refs.file.files[0])
            fd.append('villageId', this.areaList[1].value)
            let m = this.$message({
              message: '正在上传...',
              duration: 0
            });
            importExcel(fd).then(res => {
              m.close()
              this.$message({
                message: '操作成功',
                type: 'success'
              })
            }).catch(e => {
              m.close()
              console.log(e)
              if(e.status === 50004) {
                sessionStorage.setItem('ei', e.msg)
                this.$router.push('/import-data/list')
              }
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
   .organization-page {
    width: 100%;
    padding: 10px;
    background: rgb(235,238,242);
    min-height: calc(100vh - 50px);
  }

  .content {
    background: #fff;
    padding: 20px;
    margin-top: 15px;
  }
</style>