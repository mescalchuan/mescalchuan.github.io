<template>
  <div class="error-page">
    <back></back>
    <el-card>
        <div slot="header">
          <span>检测报告</span>
        </div>
        <p style="margin: 0;white-space:pre;">{{ info }}</p>
      </el-card>
  </div>
</template>

<script>
import Back from '@/components/Back'
export default {
  components: {
    Back
  },
  data() {
    return {
      info: sessionStorage.getItem('ei')
    }
  },
  methods: {

  }
}
</script>

<style scope>
   .error-page {
    width: 100%;
    padding: 10px;
    background: rgb(235,238,242);
    min-height: calc(100vh - 50px);
  }

  .error-content {
    background: #fff;
    padding: 20px;
    margin-top: 15px;
  }
</style>