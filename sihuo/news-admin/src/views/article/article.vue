<template>
  <div class="article-page">
    <div class="content">
      <div class="flex align-items-center">
        <el-select v-model="search.categoryId" placeholder="请选择分类" @change="handleCategoryChange">
          <el-option v-for="(item, index) in categoryList" :key="index" :label="item.name" :value="item.id"/>
        </el-select>
        <el-select v-model="search.childId" placeholder="请选择子分类" style="margin-left:10px;">
          <el-option v-for="(item, index) in childList" :key="index" :label="item.name" :value="item.id"/>
        </el-select>
        <el-input v-model="search.keyword" placeholder="请输入文章标题" style="width:300px;margin-left:10px;"/>
        <el-button type="primary" @click="getNewsList()">搜索</el-button>
        <el-button type="primary" @click="add()">添加文章</el-button>
      </div>
      <el-table
      :data="tableData"
      header-cell-class-name="table-header-color"
      style="width: 100%; margin-top:20px;">
      <el-table-column
        prop="newsName"
        label="文章标题"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="publishDate"
        label="发布日期"
        align="center"
        width="110px"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作"
        align="center"
        width="200px"
      >
        <template slot-scope="scope">
          <el-button size="small" type="warning" @click="$router.push({
            path: '/article-manage/article-form',
            query: {
              id: scope.row.newsId,
              type: 'edit'
            }
          })">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row.newsId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
      <pagination :total="pageInfo.total" :current-page="pageInfo.pageNum" @on-change="v => handlePageChange(v)"/>
    </div>
  </div>
</template>

<script>
  import Pagination from '@/components/Pagination'
  import { getArticleCategory, getChildCategory } from '@/api/menu'
  import { getNewsList, articleDelete } from '@/api/article'

  export default {
    components: {
      Pagination
    },
    data() {
      return {
        tableData: [],
        search: {
          categoryId: '',
          childId: '',
          keyword: ''
        },
        form: {},
        pageInfo: {
          pageNum: 1,
          pageSize: 10,
          total: 0,
          current: 1
        },
        categoryList: [],
        childList: []
      }
    },
    created() {
      // this.searchMemberList()
      getArticleCategory({
        parentId: ''
      }).then(res => {
        this.categoryList = res.data.categoryList
        this.search.categoryId = res.data.categoryList[0].id
        getChildCategory({
          parentId: this.search.categoryId
        }).then(res => {
          this.childList = res.data.categoryList
          this.search.childId = res.data.categoryList[0].id
          this.getNewsList()
        })
      })
      // this.getPositionList()
    },
    methods: {
      handleCategoryChange(e) {
        delete this.search.childId
        getChildCategory({
          parentId: this.categoryList.filter(item => item.id == e)[0].id
        }).then(res => {
          this.childList = res.data.categoryList
        })
      },
      getNewsList() {
        getNewsList({
          categoryId: this.search.childId,
          keyword: this.search.keyword,
          pageNum: this.pageInfo.pageNum,
          pageSize: this.pageInfo.pageSize
        }).then(res => {
          this.tableData = res.data.newsInfoList
          this.pageInfo.total = res.data.total
        })
      },
      handlePageChange(v) {
        this.pageInfo.pageNum = v
        this.gerNewsList()
      },
      add() {
        this.$router.push({
          path: '/article-manage/article-form',
          query: {
            type: 'new'
          }
        })
      },
      handleDelete(articleId) {
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          articleDelete({
            articleId
          }).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getNewsList()
          })
          
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .article-page {
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

<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
