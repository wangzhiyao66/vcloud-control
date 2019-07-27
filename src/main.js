import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// if (process.env.NODE_ENV !== 'production') { require('./mock')}
// 更新服务端部署
require('./mock');

// Element 插件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
