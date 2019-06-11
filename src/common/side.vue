<template>
  <div class="side-box">
    <div class="icon-system">
      <img src="../../src/assets/logo.png" @click="showMenu()" alt="欢迎来到这里" title="欢迎来到这里">
    </div>

    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <div v-for="(item,i) in menu" v-bind:key="i">
        <!-- 有三级导航 -->
        <div v-if="item.children.length != 0">
          <el-submenu :index="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span v-if="!isCollapse" slot="title">{{ item.title }}</span>
            </template>
            <div v-for="(itm,i) in item.children" v-bind:key="i">
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

    <!-- user  -->
    <div class="user-icon" >
      <div class="login" @click="getMenu()">
        <el-tooltip class="item" effect="dark" content="退出登录" placement="right">
          <i class="el-icon-user" :class="{ mar10 : !isCollapse }"></i>
        </el-tooltip>
        <span v-if="!isCollapse">退出登录</span>
      </div>
      <!-- <img src="../../src/assets/logo.png" @click="showMenu()" alt="欢迎来到这里" title="欢迎来到这里"> -->
    </div>
  </div>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 450px;
}

.icon-system {
  margin: 20px 0;
}

.icon-system img {
  width: 35px;
  height: 35px;
  text-align: center;
}

.user-icon img {
  width: 35px;
  height: 35px;
  text-align: center;
}

.login {
  display: inline-block;
  text-align: center;
  max-width: 200px;
  height: 36px;
  line-height: 36px;
  cursor: pointer;
  margin-top: 10px;
}

.login i {
  display: inline-block;
  transform: scale(1.2);
  transition: transform 0s;
}

.login span {
  font-size: 14px;
  color: #303133;
  padding: 0 8px;
  cursor: pointer;
}

.mar10 {
  margin-left: 10px;
}
</style>
<script>
import axios from 'axios'; 
export default {
  name: "side",
  data() {
    return {
      isCollapse: true,
      isScroll: true,
      menu: [
        {
          id: "1",
          icon: "el-icon-location",
          title: "应用中心",
          link: "",
          falg: false,
          children: [
            { id: "1.1", title: "主页", icon: "", link: "" },
            { id: "1.2", title: "概览", icon: "", link: "" }
          ]
        },
        {
          id: "2",
          icon: "el-icon-menu",
          title: "节点管理",
          link: "",
          falg: false,
          children: [
            { id: "2.1", title: "故事", icon: "", link: "" },
            { id: "2.2", title: "任务", icon: "", link: "" }
          ]
        },
        {
          id: "3",
          icon: "el-icon-document",
          title: "活动记录",
          link: "",
          falg: false,
          children: [
            { id: "3.1", title: "问题", icon: "", link: "" },
            { id: "3.2", title: "活动", icon: "", link: "" }
          ]
        },
        {
          id: "4",
          icon: "el-icon-setting",
          title: "设置中心",
          link: "",
          falg: false,
          children: [
            { id: "4.1", title: "版本", icon: "", link: "" },
            { id: "4.2", title: "设置", icon: "", link: "" }
          ]
        },
        {
          id: "5",
          icon: "el-icon-collection",
          title: "用户中心",
          link: "",
          falg: false,
          children: []
        }
      ]
    };
  },
  methods: {
    // 禁止警告报错
    /* eslint-disable */
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    showMenu() {
      this.isCollapse = !this.isCollapse;
    },
    getMenu() {
      // axios.get('/src/assets/data/menu.json').then( res => {
      //   console.log(res);        
      // }).then( error => {
      //   console.error(error);
      // });
    }
  },
  created() {
    // 获取数据；
    this.getMenu();
  }
};
</script>
