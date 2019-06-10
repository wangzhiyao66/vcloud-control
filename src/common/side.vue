<template>
    <div class="side-box">
        <p v-for="(item,i) in menu"> 
            <span>{{ item + i }}</span>
        </p>
    </div>
</template>
<style lang="less" scoped>
    .side-box {
        width: 125px;
        height: 100%;
        float: left;
        background: #ddd;
        border: none;
    }
</style>
<script>
    export default {
        name: 'side',
        data () {
           return {
                menu: ['菜单','菜单','菜单','菜单','菜单','菜单']
           }
        }
    }
</script>
