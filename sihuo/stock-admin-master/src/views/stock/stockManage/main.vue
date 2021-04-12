<template>
  <div class="stock-page">
    <area-selector @areaChange="areaChange" />
    <el-card v-if="economicGroupInfos.length" style="margin-top: 10px;">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in economicGroupInfos" :key="item.id" :label="item.groupName" :name="String(item.id)">
          <Index v-if="activeName === String(item.id)" :economic-id="item.id"/>
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

    }
  }
}
</script>

<style lang="scss" scoped>
  .stock-page {
    width: 100%;
    padding: 10px;
  }
</style>