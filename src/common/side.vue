<template>
  <div class="side-box">
    <div class="icon-system">
      <img src="../../src/assets/logo.png" @click="showMenu()" alt="欢迎来到这里" title="欢迎来到这里">
    </div>
  
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>

            <el-menu-item-group>
            <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>

        </el-submenu> -->
         <!-- <template> -->
          <div v-for="(item,i) in menu" v-bind:key = i>
            
            <!-- 有三级导航 -->
            <div v-if="item.children.length != 0">
              <el-submenu :index="item.id">

                  <template slot="title">
                    <i :class="item.icon"></i>
                    <span v-if="!isCollapse" slot="title">{{ item.title }}</span>
                  </template>
                  

                  <div v-for="(itm,i) in item.children" v-bind:key = i>
                    <el-menu-item-group>
                      <el-menu-item :index="itm.id">
                        <i :class="item.icon"></i>
                        {{ itm.title }}
                      </el-menu-item>
                     </el-menu-item-group> 
                  </div>


              </el-submenu>
            </div>

            <!-- 没有三级导航 -->
            <div v-if="item.children.length == 0">
              <el-menu-item :index="item.id">
                  <i :class="item.icon"></i>
                  <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </div>
          </div>


    </el-menu>

  </div>
</template>
<style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .icon-system {
      margin: 20px 0;
    }
    .icon-system img {
      width: 35px;
      height: 35px;
      text-align: center;
    }
</style>
<script>
export default {
  name: "side",
  data() {
    return {
        isCollapse: true,
        menu: [
            { id:'1' ,icon: 'el-icon-location',title: '导航一', link: '' , falg: false ,children: [
              { id:'1.1' ,title: '主页', icon: '', link: ''},
              { id:'1.1' ,title: '概览', icon: '', link: ''},
            ]},
            { id:'2' ,icon: 'el-icon-menu',title: '导航二', link: '' , falg: false ,children: [
              { id:'1.1' ,title: '故事', icon: '', link: ''},
              { id:'1.1' ,title: '任务', icon: '', link: ''},
            ]},
            { id:'3' ,icon: 'el-icon-document',title: '导航三', link: '' , falg: false ,children: [
              { id:'1.1' ,title: '问题', icon: '', link: ''},
              { id:'1.1' ,title: '活动', icon: '', link: ''},
            ]},
            { id:'4' ,icon: 'el-icon-setting',title: '导航四', link: '' , falg: false ,children: []},
            { id:'5' ,icon: 'el-icon-collection',title: '导航五', link: '' , falg: false ,children: []},
        ]
    };
  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      showMenu() {
        this.isCollapse = !this.isCollapse;
      }
    }
};
</script>
