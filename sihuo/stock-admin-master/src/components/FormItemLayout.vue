<template>
  <div class="form-item-box">
    <span :style="{display: 'inline-block', width: labelWidth + 'px'}">
      <span v-if="required" style="color: #f56c6c;">*</span>
      {{label}}
    </span>
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  props: {
    label: String,
    labelWidth: {
      type: Number,
      default: 100
    },
    required: Boolean
  }
}
</script>

<style lang="scss" scoped>
.form-item-box {
  display: flex;
  align-items: center;
}
</style>
