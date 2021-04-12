<template>
    <div :id="id" style="width: 100%;height:400px;"></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    xAxis: {
      type: Array,
      default: () => []
    },
    yAxis: {
      type: Array,
      default: () => []
    },
    datas: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: ''
    }
  },
  mounted() {
    let ec = this.$echarts.init(document.getElementById(this.id))
    ec.setOption({
      title: { text: this.title },
      xAxis: {
        data: this.xAxis
      },
      yAxis: {
        type: 'value',
        data: this.yAxis
      },
      series: [{
        name: '数据',
        type: 'bar',
        data: this.datas
      }],
      color: [this.color]
    })
  }
}
</script>