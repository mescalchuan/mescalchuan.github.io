<template>
	<section class="app-main">
		<!-- <transition name="fade-transform" mode="out-in">
			<router-view :key="key" />
		</transition> -->
    <!-- <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tz&skin=gif" frameborder="0" width="100%" height="30" allowtransparency="true"></iframe> -->
    <div class="flex weather align-items-center justify-content-space-between" v-if="weatherShow" style="margin-bottom: 20px;">
      <div class="flex align-items-center">
        <span>{{ weather.date | timeformat }}</span>
        <span style="margin-left: 6px;">{{ weather.week }}</span>
        <span style="margin-left: 6px;">{{ weather.city }}县</span>
        <span style="margin-left: 6px;">{{ weather.wea }}</span>
        <img style="margin-left: 6px;" :src="'http://tq.daodaoim.com/tianqiapi/skin/pitaya/' + weather.wea_img + '.png'">
        <span style="margin-left: 6px;">{{weather.tem}}℃</span>
        <span class="air-level" :style="{backgroundColor: getAirColor(weather.air_level)}">{{ weather.air_level }}</span>
        <span style="margin-left: 6px;">{{ weather.win }} {{weather.win_speed}}</span>
      </div>
      <div @keyup.enter="handleKeydown" style="margin-left:20px;">
        <el-input v-model="keyword" placeholder="请输入文章标题"  class="input-with-select" style="width: 300px;"/>
        <el-button type="danger" @click="handleSearch">搜索</el-button>
      </div>
    </div>
    <router-view :key="key" />
	</section>
</template>

<script>
import request from '@/utils/request'
export default {
	name: 'AppMain',
	computed: {
		key() {
			return this.$route.path
		}
  },
  data() {
    return {
      weatherShow: false,
      weather: {},
      keyword: '',
    }
  },
  methods: {
    getAirColor(t) {
      switch(t) {
        case '优':
          return '#73BF41';
        case '良':
          return '#e3dc32';
        case '轻度污染':
          return '#F7A316';
        case '中度污染':
          return '#E83734';
        case '重度污染':
          return '#902790';
        case '严重污染':
          return '#6F4C2F'
      }
    },
    handleSearch() {
      if(!this.keyword) {
        return
      }
      window.open('/news#/result?k=' + this.keyword)
    },
    handleKeydown(e) {
      this.handleSearch()
    }
  },
  mounted() {
    request({
      url: 'https://yiketianqi.com/api?version=v61&appid=56147946&appsecret=JUqr4HFT&cityid=101161205',
      method: 'get'
    }).then(res => {
      this.weather = res
      this.weatherShow = true
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>

<style scoped>
.app-main {
	/*50 = navbar  */
	width: 100%;
}
.fixed-header+.app-main {
	padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
	.fixed-header {
		padding-right: 15px;
	}
}
.weather {
  span {
    font-size: 15px;
  }
  img {
    width: 20px;
  }
  .air-level {
    margin-left: 6px;
    color: white;
    padding: 2px 4px;
    border-radius: 3px;
  }
}
</style>
