<template>
    <div class="content-box">
        <p>我是content页面</p>
        <router-link to="/about">About</router-link>
        <router-view/>
    </div>
</template>
<style lang="less" scoped>
    .content-box {
        float: left;
        width: 100%;
        background: #F5F7F7;
    }
</style>
<script>
    export default {
        name: 'content',
        data () {
           return {
                name : '王治尧'
           }
        }
    }
</script>
