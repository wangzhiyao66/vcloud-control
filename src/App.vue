<template>
  <div id="app">
    <div class="main-box">
      <side></side>
      <contents>
        <router-view/>
      </contents>
    </div>
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
a {
  text-decoration: none !important;
}
</style>
<script>

import side from "@/common/side.vue";
import contents from "@/common/contents.vue";
export default {
  name: "app",
  components: {
    side,
    contents
  }
};
</script>
