<template>
  <div class="back-container">
    <span class="custom-back"  @click="goBack">
      <i class="el-icon-back " @click="goBack"></i>返回
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Back',
  methods: {
    goBack() {
      history.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.back-container {
  font-size: 14px;
  font-weight: 600;
  margin: 10px 0;

  .custom-back {
    color: #333;
    cursor: pointer;
  }

  .custom-back:hover {
    color: #20a0ff;
  }
}
</style>
