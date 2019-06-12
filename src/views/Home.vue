<template>
  <div>
    <p> {{ appName }}, 我是主页面</p>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
// @ is an alias to /src
// 禁止警告报错
/* eslint-disable */
// import HelloWorld from "@/components/HelloWorld.vue";
import Service from '@/service'
import { mapState } from 'vuex'
export default {
  name: "home",
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
        name: '',
    }
  },
  methods: {

  },
  computed: {
    ...mapState({
      appName: state => state.appName,
    }),

    /* 另一种方式 */
    // ...mapState([
    //   'appName'
    // ]),

    /* 另一种方式 */
    // appName(){ 
    //   return this.$store.state.appName;
    // },
  },
  created() {
    // const user = Service.getUserData();
    // console.log('用户信息', user);
  }
};
</script>
