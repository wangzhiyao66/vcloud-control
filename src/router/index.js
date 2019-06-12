import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import Bus from '@/bus'
Vue.use(Router)
Vue.prototype.$bus = Bus;

export default new Router({
  mode: 'history',
  routes: routes
})
