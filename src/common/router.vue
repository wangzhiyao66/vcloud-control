<template>
    <div class="main-box">
        <side></side>
        <content></content>
    </div>
</template>
<style lang="less" scoped>
    .main-box {
        max-width: 100%;
        display: flex;
        flex: 1;
        flex-direction: row;
        overflow: hidden;
    }
</style>
<script>
    import side from './side';
    import content from './content';

    export default {
        name: 'router',
        components: {
            side,
            content,
        },
        data () {
           return {
                menu: ['菜单','菜单','菜单','菜单','菜单','菜单']
           }
        }
    }
</script>
