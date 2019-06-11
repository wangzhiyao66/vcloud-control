<template>
    <div class="content-box">
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
    // 禁止警告报错
    /* eslint-disable */
    export default {
        name: 'content',
    }
</script>
