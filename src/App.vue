<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.main-box {
  max-width: 100%;
  display: flex;
  height: 100%;
  overflow: hidden;
}

</style>
<script>

export default {
  name: "app",
};
</script>
