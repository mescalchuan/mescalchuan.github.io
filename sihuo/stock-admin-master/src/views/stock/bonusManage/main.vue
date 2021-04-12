<template>
  <div class="bonus-page">
    <area-selector @areaChange="areaChange" v-if="!isStatic" />
    <el-card :style="{padding: isStatic ? '10px' : 0, marginTop: '10px'}">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in economicGroupInfos" :key="item.id" :label="item.groupName" :name="String(item.id)">
          <Index v-if="activeName === String(item.id)" :economic-id="item.id" :is-static="isStatic" :from="from"/>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import AreaSelector from '@/components/AreaSelector'
import Index from './index'
import { economicQuery } from '@/api/economic'
export default {
  components: {
    AreaSelector,
    Index
  },
  props: {
    isStatic: {
      type: Boolean,
      default: false
    },
    villageId: {
      type: Number
    },
    from: {
      type: String
    }
  },
  data() {
    return {
      areaList: [],
      economicGroupInfos: [],
      activeName: ''
    }
  },
  methods: {
    areaChange(val) {
      this.areaList = val
      economicQuery({
        villageId: this.areaList[1].value
      }).then(res => {
        this.economicGroupInfos = res.data.economicGroupInfos
        this.activeName = this.economicGroupInfos.length ? this.economicGroupInfos[0].id + '' : ''
      })
    },
    handleClick() {

    },
  },
  created() {
    
  },
  watch: {
      villageId: {
        handler(nv, ov) {
          if(this.isStatic) {
            if(nv !== ov) {
              economicQuery({
                villageId: nv
              }).then(res => {
                this.economicGroupInfos = res.data.economicGroupInfos
                this.activeName = this.economicGroupInfos.length ? this.economicGroupInfos[0].id + '' : ''
              })
            }
          }
        },
        immediate: true
      }
    }
}
</script>

<style lang="scss" scoped>
  .bonus-page {
    width: 100%;
    padding: 10px;
  }
</style>