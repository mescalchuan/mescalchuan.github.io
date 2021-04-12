<template>
  <div>
    <div class="flex align-items-center">
      <p>当前位置：</p>
      <breadcrumb/>
    </div>
    <div class="result" v-for="(item, index) in newsInfoList" :key="index" style="cursor:pointer">
      <div style="padding: 5px 0;">
        <p class="link-hover" @click="gotoDetail(item.newsId, item.moduleId)">{{ handler(item.newsName).fn }}<span style="color:red;">{{ handler(item.newsName).n }}</span>{{ handler(item.newsName).bn }}</p>
      </div>
      <div class="flex align-items-center" style="margin-bottom: 10px;">
         <p style="color: #666; font-size: 14px; margin: 0;">来源：{{ item.source }}</p>
        <p style="color: #666; font-size: 14px; margin: 0;margin-left:20px;">{{ item.publishDate }}</p>
      </div>
      <el-divider/>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { articleSearch } from '@/api/common'
export default {
  components: {
    Breadcrumb
  },
  data() {
    return {
      newsInfoList: []
    }
  },
  created() {
    articleSearch({
      keyword: this.$route.query.k
    }).then(res => {
      this.newsInfoList = res.data.newsInfoList
    })
  },
  methods: {
    gotoDetail(id, moduleId) {
      let name = ''
      switch(moduleId) {
        case 2:
          name = 'article'
          break
        case 3:
          name = 'article-laws'
          break
        case 4:
          name = 'article-service'
          break
        case 8:
          name = 'article-contract'
          break
      }
      window.open('/news#/' + name + '/' + id)
    },
    handler(name) {
      let k = decodeURIComponent(this.$route.query.k)
      let names = name.split(k)
      return {
        fn: names[0],
        n: k,
        bn: names[1]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .result {
    .el-divider--horizontal {
      margin: 0;
    }
  }
</style>