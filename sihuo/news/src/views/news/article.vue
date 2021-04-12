<template>
  <div :class="[hasMenu ? 'flex' : '']">
    <div v-if="hasMenu" style="width: 300px">
      <div class="flex align-items-center">
        <!-- <p>当前位置：</p> -->
        <breadcrumb/>
      </div>
      <el-divider content-position="left">便民服务</el-divider>
      <news-menu :id="4" :active-menu="am" @menuChange="(e) => $router.push({
          path: '/service',
          query: {
            ac: e
          }
        })"/>
    </div>
    <div v-if="!hasMenu" class="flex align-items-center">
      <p>当前位置：</p>
      <breadcrumb v-if="article" :level="2" :router-id="article.moduleId" :title-id="article.categoryId"/>
    </div>
    <div v-if="!loading" style="width: 100%;">
      <!-- <editor v-model="content" @change="handleChange"/> -->
      <h2 style="font-size: 25px;text-align:center">{{ article.name }}</h2>
      <el-divider/>
      <p style="text-align:center;color:#666">
        <span>发布时间：{{ article.publishDate }}</span>
        <span style="margin-left: 20px;">阅读次数：{{ article.readCount }}</span>
        <span v-if="!article.fileUrl" style="margin-left: 20px;">责任编辑：{{ article.author }}</span>
      </p>
      <div v-if="!article.fileUrl" v-html="article.content" style="min-height:500px"></div>
      <div class="flex align-items-center" v-else style="min-height:100px">
        <img :src="getFileInfo(article.fileUrl).ext" style="width:20px;"/><a class="link-hover-n-a" :href="article.fileUrl" target="__blank">{{ getFileInfo(article.fileUrl).url }}</a>
      </div>
      <div style="overflow:hidden;margin-bottom: -20px">
        <el-button style="float: right;" type="text" @click="back"><i class="el-icon-top"></i>返回顶部</el-button>
        <el-button style="float: right;margin-right:10px;" type="text" @click="close"><i class="el-icon-close"></i>关闭</el-button>
      </div>
      <el-divider/>
      <div class="flex justify-content-space-between" style="margin-top:-10px;">
        <div style="font-size:14px">
          <span v-if="article.previousNews" style="cursor:pointer" @click="gotoDetail(article.previousNews.newsId, hasMenu)">
            上一篇：<span class="link-hover-n-a">{{ article.previousNews.newsName }}</span>
          </span>
          <span v-else>上一篇：无</span>
          <span v-if="article.nextNews" style="margin-left:20px;cursor:pointer" @click="gotoDetail(article.nextNews.newsId, hasMenu)">
            下一篇：<span class="link-hover-n-a">{{ article.nextNews.newsName }}</span>
          </span>
          <span v-else style="margin-left:20px">下一篇：无</span>
        </div>
        <div>
          <a title="分享到微信" @click="shareToWeixin" href="javascript:void(0)" class="weixin"></a>
          <a title="分享到QQ空间" @click="shareToQq(article)" href="javascript:void(0)" class="qzone"></a>
          <a title="分享到微博" @click="shareToWeibo(article)" href="javascript:void(0)" class="weibo"></a>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="weixinvisible"
      width="300px"
    >
      <div id="qrcode"/>
    </el-dialog>
  </div>
</template>

<script>
import { getDetail } from '@/api/article'
import Breadcrumb from '@/components/Breadcrumb'
import editor from '@/components/vue-wangeditor'
import QRCode from '@/utils/qrcode'
import excel from '@/assets/excel.png'
import word from '@/assets/word.png'
import ppt from '@/assets/ppt.png'
import txt from '@/assets/txt.png'
import pdf from '@/assets/pdf.png'
import img from '@/assets/img.png'
import rar from '@/assets/rar.png'
import zip from '@/assets/zip.png'
import NewsMenu from '@/components/menu'
export default {
  components: {
    Breadcrumb,
    editor,
    NewsMenu
  },
  data() {
    return {
      am: '',
      loading: true,
      weixinvisible: false,
      hasMenu: false,
      content: '',
      article: '',
      url: window.location.href,
      html: '<p>deadadaedaededadea</p><p><a href="" target="_blank">deadead</a><img src="http://www.lxnjs.cn/e/upload/s1/fck/image/2018/09/19/1727447927.png"/><img src="http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png" alt="[坏笑]" data-w-e="1"><br></p><table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><th>&nbsp;dadaed</th><th>121&nbsp;</th><th>&nbsp;1</th><th>1&nbsp;</th><th>&nbsp;</th></tr><tr><td>dead&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table><p>1</p>'
    }
  },
  created() {
    if(this.$route.path.indexOf('article-service') > -1) {
      this.hasMenu = true
      this.am = location.href.split('?am=')[1]
    }
  },
  mounted() {
    getDetail({
      newsId: this.$route.params.id
    }).then(res => {
      this.article = res.data
      document.title = this.article.name
      this.loading = false
      localStorage.setItem('activeMenu', this.article.moduleId)
    })
  },
  methods: {
    getFileInfo(url = '') {
      let urls = url.split('/')
      let last = urls[urls.length - 1]
      let exts = last.split('.')
      let ext = ''
      switch(exts[1]) {
        case 'xls':
        case 'xlsx':
          ext = excel
          break
        case 'doc':
        case 'docx':
          ext = word
          break
        case 'ppt':
        case 'pptx':
          ext = ppt
          break
        case 'txt':
          ext = txt
          break
        case 'pdf':
          ext = pdf
          break
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':
          ext = img
          break
        case 'rar':
          ext = rar
          break
        case 'zip':
          ext = zip
          break
      }
      return {
        url: urls[urls.length - 1],
        ext
      }
    },
    gotoDetail(id, hasMenu) {
      if(hasMenu) {
        window.open('news#/article-service/' + id + '?am=' + this.am)
        return
      }
      window.open('/news#/article/' + id)
    },
    handleChange() {
      console.log(this.content)
    },
    close() {
      window.close()
    },
    back() {
      window.scrollTo(0, 0)
    },
    shareToQq(item) {
      var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+item.name+ '&title='+ item.name +'&url='+encodeURIComponent(this.url)
      window.open(shareqqzonestring);
    },
    shareToWeibo(item) {
      var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+item.name+'&url='+encodeURIComponent(this.url)+'&content=utf-8&sourceUrl='+encodeURIComponent(this.url)
      window.open(sharesinastring);
    },
    shareToWeixin() {
      this.weixinvisible = true
      this.$nextTick(() => {
        var qrcode = new QRCode(document.getElementById("qrcode"), {
          text: this.url,
          width: 260,
          height: 260,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
        });
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
      font-size: 14px;
    }
  .weixin, .qzone, .weibo {
    width: 19px;
    height: 16px;
    background: url("../../assets/weixin.png") no-repeat;
    display: inline-block;
    cursor: pointer;
  }
  .qzone {
    background: url("../../assets/top_logos_sprite.png") no-repeat 0 -234px;
  }
  .weibo {
    background: url("../../assets/top_logos_sprite.png") no-repeat 0 -270px;
  }
</style>