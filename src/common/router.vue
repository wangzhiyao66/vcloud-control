<template>
  <div class="main-box">
    <side></side>
    <contents></contents>
  </div>
</template>
<style lang="less" scoped>
.main-box {
  max-width: 100%;
  display: flex;
  height: 100%;
  overflow: hidden;
}
</style>
<script>
/* eslint-disable */
import side from "@/common/side.vue";
import contents from "@/common/contents.vue";
export default {
  name: "routerView",
  components: {
    side,
    contents
  }
};
</script>
