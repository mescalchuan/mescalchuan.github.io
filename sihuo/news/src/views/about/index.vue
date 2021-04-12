<template>
	<div class="news-page">
    <div class="flex justify-content-space-between">
      <div style="width: 300px">
        <div class="flex align-items-center">
          <p>当前位置：</p>
          <breadcrumb/>
        </div>
        <el-divider content-position="left">关于我们</el-divider>
        <news-menu :id="$route.meta.id" :active-menu="activeMenu + ''" @getList="id => {
          activeMenu = id
          getNewsDetail()
        }" @initMenu="e => activeMenu = e" @getListName="e => activeName = e"/>
      </div>
      <div style="margin-left: 20px;width:100%;">
        <el-card>
          <div slot="header" class="clearfix">
            <span v-if="activeName">{{ activeName }}</span>
          </div>
          <div v-html="article"></div>
         
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { getDetail } from '@/api/article'
import NewsMenu from '@/components/menu'
export default {
  components: {
    Breadcrumb,
    NewsMenu
  },
	data() {
		return {
      activeMenu: null,
      activeName: '',
      article: ''
		}
  },
  watch: {
    '$parent.$parent.$data.webInfo.introduction': {
      handler(nv) {
        this.article = nv
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    getNewsDetail(id) {
      // getDetail({
      //   newsId: this.activeMenu
      // }).then(res => {
      //   this.article = res.data
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
  .news-page {
    p {
      font-size: 14px;
    }
    .el-button {
      margin-left: 0;
    }
  }
</style>