<template>
  <div class="main-box">
    <p>我是主页面</p>
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
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import side from "@/common/side.vue";
import contents from "@/common/contents.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
  }
};
</script>
