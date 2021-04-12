<template>
	<div class="news-page">
    <div class="flex justify-content-space-between">
      <div style="width: 300px">
        <div class="flex align-items-center">
          <p>当前位置：</p>
          <breadcrumb/>
        </div>
        <el-divider content-position="left">供求信息</el-divider>
        <div class="supply-menu">
          <div class="supply-menu-child" :style="{backgroundColor: activeMenu == 1 ? '#71ceff' : '#E6F7FF', color: activeMenu == 1 ? 'white' : '#1790FF'}" @click="handleMenuClick(1)">供应信息</div>
          <div class="supply-menu-child" :style="{backgroundColor: activeMenu == 2 ? '#71ceff' : '#E6F7FF', color: activeMenu == 2 ? 'white' : '#1790FF'}" @click="handleMenuClick(2)">需求信息</div>
          <div class="supply-menu-child" :style="{backgroundColor: activeMenu == 3 ? '#71ceff' : '#E6F7FF', color: activeMenu == 3 ? 'white' : '#1790FF'}" @click="handleMenuClick(3)">登记供应</div>
          <div class="supply-menu-child" :style="{backgroundColor: activeMenu == 4 ? '#71ceff' : '#E6F7FF', color: activeMenu == 4 ? 'white' : '#1790FF'}" @click="handleMenuClick(4)">登记需求</div>
        </div>
      </div>
      <div style="margin-left: 20px;width:100%;">
        <el-card>
          <supply v-if="activeMenu == 1"/>
          <demand v-if="activeMenu == 2"/>
          <supply-form v-if="activeMenu == 3"/>
          <demand-form v-if="activeMenu == 4"/>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Supply from '@/views/supply/supply'
import Demand from '@/views/supply/demand'
import SupplyForm from '@/views/supply/supplyForm'
import DemandForm from '@/views/supply/demandForm'
export default {
  components: {
    Breadcrumb,
    Supply,
    Demand,
    SupplyForm,
    DemandForm
  },
	data() {
		return {
      activeMenu: 1,
		}
  },
  created() {
    if(this.$route.query.k) {
      this.activeMenu = Number(this.$route.query.k)
    }
  },
  methods: {
    handleMenuClick(id) {
      this.activeMenu = id
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
  .supply-menu {
    font-size: 14px;
    width: 200px;
    text-align: center;
    cursor: pointer;
    .supply-menu-child {
      color: #3fae5f;
      height: 50px;
      line-height: 50px;
      border: 1px solid #eee;
      font-weight: bold;
      margin-bottom: 5px;
      &:hover {
        background-color: #71ceff !important;
        color: white !important;
      }

    }
  }
</style>