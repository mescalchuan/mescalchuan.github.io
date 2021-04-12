<template>
  <div class="category-page">
    <div class="content">
       <div style="overflow: hidden;">
        <el-button type="primary" style="float: right; margin-bottom: 10px;" @click="handleAddCategory">添加分类</el-button>
      </div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in categoryList" :label="item.name" :name="item.id + ''" :key="index"></el-tab-pane>
      </el-tabs>
    <!-- <div style="overflow: hidden;">
      <el-button type="primary" style="float: right; margin-bottom: 10px;" @click="handleAddCategory">添加分类</el-button>
    </div> -->
    <el-table
      :data="childList"
      header-cell-class-name="table-header-color"
      style="width: 100%;">
      <el-table-column
        prop="name"
        label="分类名称"
        align="center"
      >
        <!-- <template slot-scope="scope">
          <div class="flex align-items-center">
            <el-input v-model="scope.row.name" style="width: 600px;"/>
            <el-button size="small" type="warning" style="margin-left: 20px;">保存修改</el-button>
          </div>
        </template> -->
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        align="center"
        width="150px"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作"
        align="center"
        width="200px"
      >
        <template slot-scope="scope">
          <el-button size="small" type="warning" @click="handleChildShow(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" style="margin-left:10px;" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="(mode == 'add' ? '添加' : '编辑') + '分类'"
      :visible.sync="addShow"
      width="600px"
      @opened="() => {
        if(mode == 'add') {
          $set(form, 'sort', childList.length ? Number(childList.length) : 0)
        }
      }"
      @closed="() => form = {}"
    >
      <el-form label-width="100px">
        <el-form-item label="分类名称">
          <el-input v-model="form.name" placeholder="请输入分类名称" />
        </el-form-item>
        <el-form-item label="排序">
        <el-select v-model="form.sort">
          <el-option v-for="(item, index) in childList" :label="index" :value="index" :key="index"/>
        </el-select>
      </el-form-item>
      </el-form>
      
      <span slot="footer" class="dialog-footer">
        <el-button @click="addShow = false">取 消</el-button>
        <el-button type="primary" @click="saveNewCategory">确 定</el-button>
      </span>
    </el-dialog>
    </div>
  </div>
</template>

<script>
  import { getArticleCategory, getChildCategory, categorySave, categoryUpdate, categoryDelete } from '@/api/menu'
  export default {
    data() {
      return {
        categoryList: [],
        childList: [],
        addShow: false,
        activeName: '',
        mode: 'add',
        form: {}
      }
    },
    methods: {
      handleChildShow(row) {
        this.mode = 'edit'
        this.addShow = true
        this.form = JSON.parse(JSON.stringify(row))
      },
      handleAddCategory() {
        this.mode = 'add'
        this.addShow = true
      },
      saveNewCategory() {
        if(this.mode == 'add') {
          categorySave({
          name: this.form.name,
          parentId: this.activeName,
          sort: this.form.sort
        }).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.addShow = false
          this.getChildCategory()
        })
        }
        else {
          categoryUpdate({
          name: this.form.name,
          parentId: this.activeName,
          sort: this.form.sort,
          categoryId: this.form.id
        }).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.addShow = false
          this.getChildCategory()
        })
        }
      },
      handleDelete(categoryId) {
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          categoryDelete({
          categoryId,
        }).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.getChildCategory()
        })
          
        })
        
      },
      handleUpdate(name, categoryId) {
        categoryUpdate({
          categoryId,
          name
        }).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.getChildCategory()
        })
      },
      handleClick() {
        this.getChildCategory()
      },
      getChildCategory() {
        getChildCategory({
          parentId: this.activeName
        }).then(res => {
          this.childList = res.data.categoryList
        })
      }
    },
    created() {
      getArticleCategory({
        parentId: ''
      }).then(res => {
        this.categoryList = res.data.categoryList
        this.activeName = this.categoryList[0].id + ''
        this.getChildCategory()
      })
    }
  }
</script>

<style lang="scss" scoped>
  .category-page {
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