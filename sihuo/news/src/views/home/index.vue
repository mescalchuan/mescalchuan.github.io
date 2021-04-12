<template>
  <div class="home">
    <el-divider content-position="left"><el-tag type="danger" effect="plain"><img style="width:15px;margin-right: 3px;vertical-align:middle;" :src="require('../../assets/hot.png')">热点推荐</el-tag></el-divider>
    <div class="flex align-items-center" style="margin-bottom:20px;margin-top:10px;background:#a0e759;">
      <img :src="require('../../assets/lb.png')" style="width:30px;margin-left:10px"/>
      <el-carousel height="50px" direction="vertical" :autoplay="true" loop style="width:100%;" indicator-position="none">
        <el-carousel-item v-for="(item, index) in home.headlineNews" :key="index">
          <h3 class="hot" @click="gotoDetail(item.newsId)">{{ item.newsName }}</h3>
        </el-carousel-item>
    </el-carousel>
    </div>
    <div class="flex justify-content-space-between" style="padding-bottom:20px;">
      <el-carousel ref="carousel" direction="vertical"  style="width:600px;" height="400px" loop @change="index => activeCIndex = index" :interval="5000">
        <el-carousel-item v-for="(item, index) in home.rotationImageInfos" :key="index">
          <img class="small" style="width: 100%;cursor:pointer" :src="item.imageUrl" @click="gotoDetail(item.linkArticleId)"/>
          <div class="carousel-title" @click="gotoDetail(item.linkArticleId)">
            <p>{{ item.name }}</p>
            <!-- <span>{{ item.briefContent }}</span> -->
          </div>
        </el-carousel-item>
      </el-carousel>
      <div style="width:120px;">
        <img v-for="(item, index) in home.rotationImageInfos" :src="item.imageUrl" :key="index" :style="{width: '100px', opacity: activeCIndex == index ? '1' : '0.4'}" @mouseover="() => {
          activeCIndex = index
          $refs.carousel.setActiveItem(index)
        }"/>
      </div>
      <div class="panel" style="width:420px;">
        <el-tabs v-model="activeName" ref="tab">
          <el-tab-pane v-for="(item, index) in home.categoryNews" :key="index" :label="item.categoryName" :name="item.categoryId + ''">
            <ul style="margin-left:20px;">
              <li v-for="(c, ci) in item.newsInfos" :key="ci">
                <div class="flex justify-content-space-between" @click="gotoDetail(c.newsId)">
                  <a href="javascript:void(0)" class="link-hover">{{c.newsName}}</a>
                  <p style="margin:0;color:#666;white-space:nowrap;">{{ c.publishDate }}</p>
                </div>
                <el-divider></el-divider>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="divider"></div>
    <div style="padding:20px 0;">
      <div class="flex justify-content-space-between">
        <el-divider content-position="left">
          <el-button type="success" disabled icon="el-icon-tickets">供求信息</el-button>
        </el-divider>
        <div class="flex justify-content-space-between align-items-center">
          <p class="link-hover-n-a" style="white-space:nowrap;margin-left:10px;cursor:pointer" @click="handleMoreClick('supply', 1)">更多 <i class="el-icon-caret-right"></i></p>
        </div>
      </div>
      <div class="flex">
        <div style="width:100%">
          <div class="flex justify-content-space-between" style="margin-top: 30px;">
            <div style="width: 980px;position:relative;">
              <el-table
                class="home-table"
                :data="home.supplyInfos || []"
                header-cell-class-name="home-table-header"
                border
                @row-click="row => gotoFormInfo(row)"
                style="width: 100%;">
                <el-table-column
                  prop="code"
                  label="编号"
                  align="center"
                  width="200px"
                >
                  <template slot-scope="scope">
                    <a class="link-hover" href="javascript:void(0)" style="color: #3fae5f;" @click="handleSupplyClick(scope.row, 'supply')">{{ scope.row.code }}</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="项目名称"
                  align="center"
                >
                  <template slot-scope="scope">
                    <a class="link-hover" href="javascript:void(0)" style="color: #3fae5f;" @click="handleSupplyClick(scope.row, 'supply')">{{ scope.row.name }}</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="circulateTime"
                  align="center"
                  width="100px"
                  label="年限">
                </el-table-column>
                <el-table-column
                  prop="circulateCount"
                  align="center"
                  width="150px"
                  label="流转面积">
                </el-table-column>
                <el-table-column
                  prop="price"
                  align="center"
                  width="100px"
                  label="价格">
                  <template slot-scope="scope">
                    <p>{{ scope.row.price }} 元</p>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="publishDate"
                  align="center"
                  width="120px"
                  label="发布日期">
                </el-table-column>
              </el-table>
              <div class="tab-label">
                <p>供应信息</p>
              </div>
            </div>
            <div class="flex flex-column">
              <!-- <p style="white-space:nowrap;margin-left:10px;cursor:pointer;margin-top:0;" @click="handleMoreClick('supply')">更多 <i class="el-icon-caret-right"></i></p> -->
              <el-card class="supply-card">
                <div class="flex flex-column justify-content-center align-items-center card" @click="handleMoreClick('supply', 3)">
                  <i class="el-icon-edit" style="font-size:40px;"></i>
                  <p style="font-size:16px;">供应信息发布</p>
                </div>
              </el-card>
              <!-- <el-card style="height:150px;width:150px;background:#54cf77;">
                <div class="flex flex-column justify-content-center align-items-center card">
                  <i class="el-icon-upload" style="font-size:30px;"></i>
                  <p style="font-size:16px;">需求信息发布</p>
                </div>
              </el-card> -->
            </div>
          </div>
          <div class="flex justify-content-space-between" style="margin-top: 30px;">
            <div style="width: 980px;position:relative;">
              <el-table
                class="home-table"
                :data="home.needInfos || []"
                header-cell-class-name="home-table-header"
                border
                @row-click="row => gotoFormInfo(row)"
                style="width: 100%;">
                <el-table-column
                  prop="code"
                  label="编号"
                  align="center"
                  width="200px"
                >
                  <template slot-scope="scope">
                    <a class="link-hover" href="javascript:void(0)" style="color: #3fae5f;" @click="handleSupplyClick(scope.row, 'need')">{{ scope.row.code }}</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="项目名称"
                  align="center"
                >
                  <template slot-scope="scope">
                    <a class="link-hover" href="javascript:void(0)" style="color: #3fae5f;" @click="handleSupplyClick(scope.row, 'need')">{{ scope.row.name }}</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="circulationCompany"
                  label="流转单位/个人"
                  width="140px"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="circulateTime"
                  align="center"
                  width="100px"
                  label="年限">
                </el-table-column>
                <el-table-column
                  prop="circulateCount"
                  align="center"
                  width="150px"
                  label="流转面积">
                </el-table-column>
                <el-table-column
                  prop="price"
                  align="center"
                  width="100px"
                  label="价格">
                  <template slot-scope="scope">
                    <p>{{ scope.row.price }} 元</p>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="publishDate"
                  align="center"
                  width="120px"
                  label="发布日期">
                </el-table-column>
              </el-table>
              <div class="tab-label">
                <p>需求信息</p>
              </div>
            </div>
            <div class="flex flex-column">
              <!-- <p style="white-space:nowrap;margin-left:10px;cursor:pointer;margin-top:0;" @click="handleMoreClick('supply', 2)">更多 <i class="el-icon-caret-right"></i></p> -->
              <el-card class="supply-card">
                <div class="flex flex-column justify-content-center align-items-center card" @click="handleMoreClick('supply', 4)">
                  <i class="el-icon-edit" style="font-size:40px;"></i>
                  <p style="font-size:16px;">需求信息发布</p>
                </div>
              </el-card>
              <!-- <el-card style="height:150px;width:150px;background:#54cf77;">
                <div class="flex flex-column justify-content-center align-items-center card">
                  <i class="el-icon-upload" style="font-size:30px;"></i>
                  <p style="font-size:16px;">需求信息发布</p>
                </div>
              </el-card> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="divider"></div> -->
    <div class="divider-img">
      <img :src="require('../../assets/home-bk.jpg')" alt="">
    </div>
    <div class="flex justify-content-space-between" style="padding:20px 0;">
      <div style="width:100%">
        <div>
          <div class="flex-1">
            <div class="flex justify-content-space-between">
              <el-divider content-position="left">
                <el-button type="danger" disabled icon="el-icon-tickets">政策法规</el-button>
              </el-divider>
              <div class="flex justify-content-space-between align-items-center">
                <p class="link-hover-n-a" style="white-space:nowrap;margin-left:10px;cursor:pointer" @click="handleMoreClick('laws', 1)">更多 <i class="el-icon-caret-right"></i></p>
              </div>
            </div>
            <ul style="margin-left:20px;">
              <li v-for="item in home.policyArticles" @click="gotoDetail(item.newsId)">
                <div class="flex justify-content-space-between">
                  <a href="javascript:void(0)" class="link-hover">{{ item.newsName }}</a>
                  <p style="margin:0;color:#666;white-space:nowrap;">{{ item.publishDate }}</p>
                </div>
                <el-divider></el-divider>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <div class="flex justify-content-space-between">
              <el-divider content-position="left">
                <el-button type="danger" disabled icon="el-icon-tickets">交易指南</el-button>
              </el-divider>
              <div class="flex justify-content-space-between align-items-center">
                <p class="link-hover-n-a" style="white-space:nowrap;margin-left:10px;cursor:pointer" @click="handleMoreClick('laws', 1)">更多 <i class="el-icon-caret-right"></i></p>
              </div>
            </div>
            <ul style="margin-left:20px;">
              <li v-for="item in home.tradeGuideList" @click="gotoDetail(item.newsId)">
                <div class="flex justify-content-space-between">
                  <a href="javascript:void(0)" class="link-hover">{{ item.newsName }}</a>
                  <p style="margin:0;color:#666;white-space:nowrap;">{{ item.publishDate }}</p>
                </div>
                <el-divider></el-divider>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style="margin-left:10px;padding-left: 10px;border-left:1px dashed #eee;text-align:center">
          <el-form label-width="70px">
            <el-form-item label="区域" style="margin-bottom:10px">
              <el-select placeholder="乡镇" v-model="search.townshipId" style="width:140px;">
                <el-option v-for="(item, index) in towns" :key="index" :label="item.townshipName" :value="item.townshipId"/>
              </el-select>
            </el-form-item>
            <el-form-item label="分类" style="margin-bottom:10px">
              <el-select placeholder="分类" v-model="search.category" style="width:140px;">
                <el-option v-for="(item, index) in [{
                  id: 'supply',
                  name: '供应信息'
                }, {
                  id: 'need',
                  name: '需求信息'
                }, {
                  id: 'deal',
                  name: '成交信息'
                }]" :key="index" :label="item.name" :value="item.id"/>
              </el-select>
            </el-form-item>
            <el-form-item label="类别" style="margin-bottom:10px">
              <el-select placeholder="项目类型" v-model="search.projectType" style="width:140px;">
                <el-option v-for="(item, index) in projectType" :key="index" :label="item.name" :value="item.id"/>
              </el-select>
            </el-form-item>
            <el-form-item label="面积" style="margin-bottom:10px">
              <el-select placeholder="面积" v-model="search.areaInterval" style="width:140px;">
                <el-option v-for="(item, index) in areaIntervalType" :key="index" :label="item.name" :value="item.id"/>
              </el-select>
            </el-form-item>
            <el-form-item label="关键字" style="margin-bottom:10px">
              <el-input v-model="search.keyword" placeholder="项目编号或关键字" style="width:140px"/>
            </el-form-item>
          </el-form>
          <div style="margin-left:70px;">
            <el-button style="width:90px" size="small" type="warning" @click="projectSearch">查询</el-button>
          </div>
        </div>
      <!-- <div style="width: 320px">
        <el-divider content-position="right">
          <el-button disabled icon="el-icon-guide">网站导航</el-button>
        </el-divider>
        <div class="flex flex-wrap">
          <el-card v-for="(item, index) in websites" :key="index" class="flex-shrink-0" style="width:156px;margin: 2px;">
            <div class="website" :style="{backgroundImage: 'url(' + item.url +')'}">
              
            </div>
          </el-card>
        </div>
      </div> -->
    </div>
    <div class="divider"></div>
    <div class="flex" style="padding:20px 0;">
      <div style="width: 100%">
        <div class="flex justify-content-space-between">
          <el-divider content-position="left">
            <el-button disabled type="success" icon="el-icon-s-claim">成交信息</el-button>
          </el-divider>
          <p class="link-hover-n-a" style="white-space:nowrap;margin-left:10px;cursor:pointer" @click="handleMoreClick('deal')">更多 <i class="el-icon-caret-right"></i></p>
        </div>
        <div style="margin-top:10px;">
          <!-- <el-tag
            v-for="(item, index) in projectType"
            :key="index"
            type="success"
            style="margin-left: 5px;margin-top:5px;cursor:pointer;font-size:14px;"
            :effect="item.id == activeDealId ? 'light' : 'plain'">
            <div @mouseover="handleDealHover(item.id)">{{ item.name }}</div>
          </el-tag> -->
          <div class="flex">
            <div class="category-container flex align-items-center justify-content-center flex-column" v-for="(item, index) in projectType" :key="index" style="margin-right: 10px;cursor:pointer;" @click="handleMoreClick('deal', item.id)">
              <img style="width:60px" :src="getCategoryImg(item.id)"/>
              <p style="font-size:12px;font-weight:bold;">{{ item.name }}</p>
            </div>
          </div>
          <!-- <el-table
            :data="transactionInfos"
            border
            header-cell-class-name="home-table-header"
            style="width: 100%;margin-top:20px;">
            <el-table-column
              prop="code"
              label="编号"
              align="center"
              width="150px"
            >
              <template slot-scope="scope">
                <a class="link-hover" href="javascript:void(0)" style="color: #3fae5f;" @click="handleRowClick(scope.row)">{{ scope.row.code }}</a>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="项目名称"
              align="center"
            >
              <template slot-scope="scope">
                <a class="link-hover" href="javascript:void(0)" style="color: #3fae5f;" @click="handleRowClick(scope.row)">{{ scope.row.name }}</a>
              </template>
            </el-table-column>
            <el-table-column
              prop="transferor"
              label="转出方"
              align="center"
              width="150px"
            >
            </el-table-column>
            <el-table-column
              prop="transferee"
              align="center"
              label="转入方">
            </el-table-column>
              <el-table-column
              prop="projectType"
              align="center"
              label="项目类型">
            </el-table-column>
            <el-table-column
              prop="circulateType"
              align="center"
              width="100px"
              label="成交类型">
            </el-table-column>
            <el-table-column
              prop="contractSignDate"
              align="center"
              width="120px"
              label="成交日期">
            </el-table-column>
          </el-table> -->
        </div>
      </div>
    </div> 
    <div class="divider"></div>
    <div class="flex flex-column" style="padding-top:20px;">
      <div class="flex">
        <div class="g-link-dt">网站导航</div>
        <div class="flex flex-wrap" style="margin-left:20px;">
          <el-card v-for="(item, index) in home.linkInfos" :key="index" class="flex-shrink-0" style="width:156px;margin: 2px;cursor:pointer;">
            <div class="website" :style="{backgroundImage: 'url(' + item.imageUrl +')'}" @click="handleWebsireClick(item.linkUrl)">
              
            </div>
          </el-card>
        </div>
      </div>
      <div class="flex" style="margin-top: 30px;">
        <div class="g-link-dt">友情链接</div>
        <!-- <p class="bottom-link">百度</p>
        <p class="bottom-link">百度</p>
        <p class="bottom-link">百度</p>
        <p class="bottom-link">百度</p> -->
        <div class="navigations">
          <!-- <el-tabs v-model="activeNavigation" ref="tabNavigation" type="card" style="width: 1000px;">
            <el-tab-pane v-for="(item, index) in navigations" :key="index" :label="item.categoryName" :name="item.categoryId + ''">
              <div style="padding:10px;">
                <a class="link-hover" :href="p.url" target="__blank" style="margin-right: 15px;margin-top; 15px; font-size: 14px;" v-for="(p, pi) in item.navigationInfos" :key="pi">{{ p.navigationName }}</a>
              </div>
            </el-tab-pane>
          </el-tabs> -->
          <div class="flex" style="border-bottom:1px solid #eee;width:100%;">
            <div :class="['custom-tab', activeNavigation == item.categoryId ? 'custom-tab-active' : '']" v-for="(item, index) in navigations" :key="index" :style="{ color: activeNavigation == item.categoryId ? '#3fae5f' : '#333'  }" @click="() => activeNavigation = item.categoryId" @mouseover="() => activeNavigation = item.categoryId">{{ item.categoryName }}</div>
          </div>
          <div v-if="navigations.length" style="padding:10px;border-left:1px solid #eee;border-right:1px solid #eee;border-bottom:1px solid #eee;">
            <a class="link-hover" :href="p.url" target="__blank" style="margin-right: 15px;margin-top; 15px; font-size: 14px;width:120px;display:inline-block;height:30px;line-height:30px;" v-for="(p, pi) in navigations.filter(item => item.categoryId == activeNavigation)[0].navigationInfos" :key="pi">{{ p.navigationName }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeData, getNavigation } from '@/api/home'
import { getProjectType, getAreaIntervalType } from '@/api/supply'
import { dealSearch } from '@/api/deal'
import { getAllVillage } from '@/api/common'
export default {
  data() {
    return {
      towns: [],
      villages: [],
      search: {},
      activeName: '1',
      activeNavigation: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      home: {},
      tableData1: [{
        name: 111
      }, {
        name: 111
      }, {
        name: 111
      }],
      navigations: [],
      websites: [{
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2947221646,3651931115&fm=26&gp=0.jpg'
      }, {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596002374988&di=0d2e3b491519c46e0a34f63d24e3059e&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3441557305%2C159786167%26fm%3D214%26gp%3D0.jpg'
      }, {
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1382211987,3387800840&fm=26&gp=0.jpg'
      }, {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596002423922&di=732db0bed0eb4d24a381242770963983&imgtype=0&src=http%3A%2F%2Fwww.logobiaozhi.com%2Fimages%2Fimage%2F20140912173749334933.jpg'
      }],
      activeCIndex: 0,
      activeDealId: 0,
      projectType: [],
      transactionInfos: [],
      areaIntervalType: [],
    }
  },
  created() {
    getHomeData().then(res => {
      this.home = res.data
      this.$nextTick(()=>{
        this.$refs.tab.$refs.nav.$nextTick(() =>{ // 此时tab的nav才渲染dom 否则拿不到el-tabs__item
          var target = document.getElementsByClassName('el-tabs__item')
          for(let i = 0 ; i < target.length ; i++){
            target[i].addEventListener('mouseover',()=>{
              this.$refs.tab.handleTabClick(this.$refs.tab.$refs.nav.$refs.tabs[i], this.home.categoryNews[i].categoryId + '')
            })
          }
        })
      })
    })
    getAllVillage().then(res => {
      this.towns = res.data.townshipInfos
    })
    getAreaIntervalType().then(res => {
      this.areaIntervalType = res.data.typeInfos
    })
    getNavigation().then(res => {
      this.navigations = res.data.navigationCategoryList
      this.activeNavigation = res.data.navigationCategoryList[0].categoryId + ''
      // this.$nextTick(() => {
      //   this.$refs.tabNavigation.$refs.nav.$nextTick(() =>{ // 此时tab的nav才渲染dom 否则拿不到el-tabs__item
      //     var target = document.getElementsByClassName('el-tabs__item')
      //     for(let i = 0 ; i < target.length ; i++){
      //       target[i].addEventListener('mouseover',()=>{
      //         this.$refs.tabNavigation.handleTabClick(this.$refs.tabNavigation.$refs.nav.$refs.tabs[i], this.navigations[i].categoryId + '')
      //       })
      //     }
      //   })
      // })
    })
    getProjectType().then(res => {
      // this.projectType = [...[{
      //         id: '',
      //         name: '全部'
      //   }], ...res.data.typeInfos]
      this.projectType = res.data.typeInfos
      this.activeDealId = this.projectType[0].id
      dealSearch({
        projectType: this.activeDealId,
        pageNum: 1,
        pageSize: 5
      }).then(res => {
        this.transactionInfos = res.data.transactionInfos
      })
    })
  },
  methods: {
    gotoDetail(id, name = 'article') {
      window.open('/news#/' + name + '/' + id)
    },
    handleWebsireClick(url) {
      window.open(url)
    },
    handleMoreClick(name, key) {
      window.open('/news#/' + name + (key ? (name == 'deal' ? '?projectType=' : '?k=') + key : ''))
    },
    gotoFormInfo(row) {
      
    },
    handleSupplyClick(row, name) {
      // this.$router.push({
      //   path: '/supply' + '/' + name + '-info',
      //   query: {
      //     id: row.id
      //   }
      // })
      window.open('/news#supply' + '/' + name + '-info?id=' + row.id + '&p=1')
    },
    handleDealHover(id) {
      if(this.activeDealId != id) {
        this.activeDealId = id
        dealSearch({
          projectType: id,
          pageNum: 1,
          pageSize: 5
        }).then(res => {
          this.transactionInfos = res.data.transactionInfos
        })
      }
      
    },
    handleRowClick(row) {
      // this.$router.push({
      //   path: '/article/' + row.id,
      // })
      window.open('/news#deal/detail?id=' + row.id)
    },
    projectSearch() {
      if(!this.search.category) {
        this.$message({
          type: 'warning',
          message: '请选择分类'
        })
        return
      }
      let url = ''
      switch(this.search.category) {
        case 'supply':
          url = `/news#/supply?k=${1}`
          break
        case 'need':
          url = `/news#/supply?k=${2}`
          break
        case 'deal':
          url = '/news#/deal?'
      }
      let params = ''
      Object.keys(this.search).map(item => {
        if(this.search[item] != null) {
          params += `&${item}=${this.search[item]}`
        }
      })
      window.open(url + params)
    },
    getCategoryImg(id) {
      switch(id) {
        case 1:
          return require('../../assets/category/jitizichanguquan.png')
        case 2:
          return require('../../assets/category/nongyeleizhishichanquan.png')
        case 3:
          return require('../../assets/category/xiaoxingshuilisheshi.png')
        case 4:
          return require('../../assets/category/nongyeshengchansheshi.png')
        case 5:
          return require('../../assets/category/jitijingyingxingzichan.png')
        case 6:
          return require('../../assets/category/linquan.png')
        case 7:
          return require('../../assets/category/zhaijidishiyongquan.png')
        case 8:
          return require('../../assets/category/tudijingyingquan.png')
        default:
          return require('../../assets/category/quanbu.png')
      }
    }
  }
}

</script>

<style lang="scss">
  .home {
    .el-tabs__item.is-active, .el-tabs__item:hover {
      color: #3fae5f;
    }
    .el-table td {
      padding: 5px !important;
      p {
        margin: 0;
      }
    }
    .el-table th {
      padding: 5px !important
    }
    .panel .el-tabs__item {
      font-size: 16px;
    }
    .el-tabs__active-bar {
      background-color: #3fae5f;
    }
    p {
      font-size: 14px;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .card {
      // width: 160px;
      // height: 120px;
      // background-color: #54cf77;
      // color: white;
      // p {
      //   font-size: 16px;
      //   font-weight: bold;
      // }
      // i {
      //   font-size: 40px;
      // }
      height: 110px;
      color: white;
      font-weight: bold;
    }
    .site-link {
      width: 158px;
      height: 158px;
      border: 1px solid #eee;
      color: #333;
      p {
        font-size: 16px;
      }
      i {
        font-size: 40px;
      }
    }
    .g-link-dt {
      min-width: 120px;
      height: 80px;
      line-height: 80px;
      font-size: 18px;
      color: #fff;
      background-color: #3fae5f;
      text-align: center;
      font-weight: bold;
      white-space: nowrap;
    }
    .divider {
      width: calc(100% + 40px);
      margin: 0 -20px;
      height: 20px;
      background: #eee;
    }
    .divider-img {
      width: calc(100% + 40px);
      background-color: #eee;
      margin: 0 -20px;
      padding: 10px 0;
      img {
        width: 100%;
      }
      
    }
    .bottom-link {
      margin-left: 20px;
    }
    .hot {
      width: 100%;
      height: 50px;
      // background-color: rgba(95, 238, 140, 0.3);
      margin: 0;
      color: #333 !important;
      line-height: 50px;
      padding-left: 20px;
      cursor: pointer;
    }
    .carousel-title {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      padding: 10px 10px;
      color: white;
      background-color: rgba(0,0,0,0.4);
      min-width: 400px;
      cursor: pointer;
      p {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      span {
        font-size: 14px;
        overflow:hidden; 
        text-overflow:ellipsis; 
        white-space:nowrap;
        display: block;
      }
    }
    .website {
      height:114px;
      text-align:center;
      line-height:114px;
      background-size: cover;
    }
    .tab-label {
      position: absolute;
      border-width: 40px;
      border-color: rgb(84, 207, 119) transparent transparent rgb(84, 207, 119);
      top: 0;
      left: 0;
      border-style: solid;
      z-index: 999;
      p {
        transform: rotate(-45deg);
        position: absolute;
        top: -50px;
        left: -50px;
        width: 100px;
        color: white;
        font-weight: bold;
      }
    }
    .navigations {
      margin-left: 20px;
      min-height: 150px;
      width: 100%;
    }
    .supply-card {
      height: 150px;
      width: 150px;
      margin-left: 10px;
      background: #54cf77;
      cursor: pointer;
    }
    .category-container {
      border: 1px solid #eee;
      padding: 10px;
      width: 110px;
    }
    .el-tag--light.el-tag--success {
      background-color: #dbf8ca !important;
    }
    .custom-tab {
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center; 
      font-size: 14px;
      cursor: pointer;
      border-top-width: 1px;
      border-left-width: 1px;
      border-right-width: 0;
      border-bottom-width: 0;
      border-color: #eee;
      border-style: solid;
      font-weight: bold;
      margin-bottom: -1px;
      position: relative;
      background-color: #faf9f9;
      &:nth-last-child(1) {
        border-right-width: 1px;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #eee;
      }
    }
    .custom-tab-active {
      &:after {
        content: '';
        background-color: #faf9f9;
      }
    }
  }
</style>