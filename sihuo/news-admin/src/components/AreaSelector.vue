<template>
  <el-card class="as-box-card">
    <div slot="header" class="clearfix">
      <span style="font-size:18px;font-weight:bold;">行政区域设置</span>
      <div style="float:right;" @click="isFold = !isFold">
        <el-button style="padding: 3px 0;font-size:16px !important;" type="text" >{{ isFold ? '折叠' : '展开' }}</el-button>
        <i :class="[isFold ? 'el-icon-caret-top' : 'el-icon-caret-bottom']" style="color:#66b1ff;cursor:pointer;font-size:18px;"/>
      </div> 
    </div>
    <div v-show="isFold" class="area-box">
      <p class="tag-title top" style="font-size:18px;">乡镇</p>
      <el-tag
        v-for="item in areaList"
        :key="'town' + item.townshipId"
        size="mini"
        :disable-transitions="true"
        :class="['tag-cursor', {'active': activeTownIndex === item.townshipId}]"
        type="info"
        style="font-size:15px;"
        @click="getTowns(item)"
      >{{ item.townshipName }}
      </el-tag>
      <p v-if="!hideVillage" class="tag-title" style="font-size:18px;">村</p>
      <span v-if="!hideVillage">
        <el-tag
        v-for="item in currentTownList"
        :key="'village' + item.villageId"
        size="mini"
        :disable-transitions="true"
        :class="['tag-cursor', {'active': activeVillageIndex === item.villageId}]"
        type="info"
        style="font-size:15px;"
        @click="selectTown(item)"
      >{{ item.villageName }}
      </el-tag>
      </span>
    </div>
  </el-card>
</template>

<script>
import { getVillage } from '@/api/common'
export default {
  data() {
    return {
      isFold: false,
      areaList: [],
      currentTownList: [],
      activeTownIndex: 0,
      activeTownName: '',
      activeVillageIndex: 0,
      activeVillageName: ''
    }
  },
  props: {
    initFold: {
      type: Boolean,
      default: true
    },
    hideVillage: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.isFold = this.initFold
    let tv = localStorage.getItem('tv')
    if(tv) {
      tv = JSON.parse(tv)
      this.activeTownIndex = tv[0].value
      this.activeTownName = tv[0].name
      this.activeVillageIndex = tv[1].value
      this.activeVillageName = tv[1].name
    }
    
    this.getVillageList(tv)
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    getTowns(item) {
      this.currentTownList = item && item.villageInfos || []
      this.init(item)
      this.areaChange()
    },
    selectTown(item) {
      this.activeVillageIndex = item.villageId
      this.activeVillageName = item.villageName
      this.areaChange()
      console.log(this.activeVillageIndex)
    },
    getVillageList(hasLocalStorage) {
      getVillage().then(res => {
        this.areaList = res.data.townshipInfos || []
        let i = 0
        if(hasLocalStorage) {
          this.areaList.map((item, index) => {
            if(item.townshipId === this.activeTownIndex) {
              i = index
            }
          })
        }
        this.init(this.areaList[i], hasLocalStorage)
        this.areaChange()
      })
    },
    areaChange(val) {
      const params = [
        {
          name: this.activeTownName,
          value: this.activeTownIndex
        },
        {
          name: this.activeVillageName,
          value: this.activeVillageIndex
        }
      ]
      localStorage.setItem('tv', JSON.stringify(params))
      this.$emit('areaChange', params)
    },
    init(item, hasLocalStorage) {
      this.activeTownIndex = item.townshipId
      this.currentTownList = item && item.villageInfos || []
      let i = 0
      if(hasLocalStorage) {
        this.currentTownList.map((item, index) => {
          if(item.villageId === this.activeVillageIndex) {
            i = index
          }
        })
      }
      this.activeVillageIndex = this.currentTownList[i].villageId
      this.activeTownName = item.townshipName
      this.activeVillageName = this.currentTownList[i].villageName
    }
  }
}
</script>

<style scoped>
    .tag-title {
        padding: 10px 0;
        margin: 10px 0 20px 0;
        border-bottom: 1px dashed #d4dfee;
    }

    .top {
        margin-top: 0;
        padding-top: 0;
    }

    .area-box {
        padding: 20px;
    }

    .tag-cursor {
        cursor: pointer;
        margin: 0 5px 5px 0;
    }

    .tag-cursor:hover {
        color: #fff;
        background: #e6a23c;
    }

    .active {
        color: #fff;
        background: #e6a23c;
    }
</style>

<style>
    .as-box-card .el-card__body {
        padding: 0;
    }
</style>
