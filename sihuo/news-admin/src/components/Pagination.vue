<template>
  <div style="overflow: hidden;">
    <el-pagination
      layout="total, prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="val => $emit('on-change', val)" 
      @size-change="val => $emit('on-size-change', val)"
      @prev-click="val => $emit('on-change', val)"
      @next-click="val => $emit('on-change', val)"
      style="float: right;"
    >
  </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    }
  }
}
</script>