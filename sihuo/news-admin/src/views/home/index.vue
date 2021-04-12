<template>
  <div class="home">
    <p style="white-space:nowrap">欢迎使用 迭部县 农牧村产权交易中心后台管理系统</p>
    <div class="bk-img"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .home {
    height: calc(100vh - 50px);
    width: 100%;
    background-image: url(../../assets/timg.jpeg);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30px;
    font-weight: bold;
    position: relative;
    /* -webkit-filter:brightness(0.8);
    -o-filter:brightness(0.8);
    -moz-filter:brightness(0.8);
    filter:brightness(0.8); */
  }
  .home p {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  .home .bk-img {
    height: calc(100vh - 50px);
    width: 100%;
    background-image: url(../../assets/timg.jpeg);
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-filter:brightness(0.6);
  -o-filter:brightness(0.6);
  -moz-filter:brightness(0.6);
  filter:brightness(0.6);
    z-index: 1;
  }
</style>