<template>
  <div class="menu">
    <!-- <el-button v-for="(item, index) in menuList" :key="index" class="menu-button" :style="{backgroundColor: activeMenu == item.id ? '#f0bb6c' : '#fbf8ea'}" type="warning" @click="handleMenuClick(item.id)">
      <div class="flex align-items-center justify-content-space-between"><span style="visibility:hidden">_</span><span>{{ item.name }}</span><i class="el-icon-arrow-right"></i></div>
    </el-button> -->
    <el-tabs v-model="activeMenu" tab-position="left" @tab-click="handleMenuClick">
      <el-tab-pane v-for="(item, index) in menuList" :key="index" :name="item.id + ''" :label="item.name"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getMenu } from '@/api/menu'
export default {
  props: ['id', 'activeMenu'],
  data() {
    return {
      menuList: [],
    }
  },
  mounted() {
    getMenu({
      parentId: this.id
    }).then(res => {
      this.menuList = res.data.categoryList
      if(this.menuList.length) {
        this.$emit('getList', this.menuList[0].id)
        this.$emit('mounted')
      }
    })
  },
  methods: {
    handleMenuClick() {
      this.$emit('getList', this.activeMenu)
      this.$emit('menuChange', this.activeMenu)
    },
  },
  watch: {
    activeMenu: {
      handler(nv, ov) {
        this.$emit('getListName', this.menuList.filter(item => item.id == nv)[0].name)
      }
    }
  }
}
</script>

<style lang="scss">
.menu {
  .el-divider--horizontal {
    margin: 0;
    background-color: #f0bb6c;
  }
  .el-tabs__item {
    text-align: left !important;
    width: 200px !important;
    border-bottom: 1px solid #eee;
  }
}
.menu-button {
  margin-left: 0;
  width:100%; 
  background:#fbf8ea;
  border-color: #f5c680;
  color: #333;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  &:hover {
    background-color: #f0bb6c !important;
  }
  &:nth-last-child(1) {
    border-bottom-width: 0;
  }
}
</style>