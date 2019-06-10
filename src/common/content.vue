<template>
    <div class="content-box">
        <p>我是主页面，由 {{ name }} 创建</p>
    </div>
</template>
<style lang="less" scoped>
    .content-box {
        float: left;
        height: 100%;
        max-width: calc(100%-125px);
        border: 1px solid dodgerblue;
        background: #999;
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
