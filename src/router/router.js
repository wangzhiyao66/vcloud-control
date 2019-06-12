
export default [

  {
    path: '/',
    name: 'home',
    title: '首页',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/overview',
    name: 'overview',
    title: '概览',
    component: () => import ('../views/Overview.vue')
  },
  {
    path: '/story',
    name: 'story',
    title: '故事',
    component: () => import ('../views/Story.vue')
  },
  {
    path: '/task',
    name: 'task',
    title: '任务',
    component: () => import ('../views/Task.vue')
  },
  {
    path: '/problem',
    name: 'problem',
    title: '问题',
    component: () => import ('../views/Problem.vue')
  },
  {
    path: '/activity',
    name: 'activity',
    title: '活动',
    component: () => import ('../views/Activity.vue')
  },
  {
    path: '/version',
    name: 'version',
    title: '版本',
    component: () => import ('../views/Version.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    title: '设置',
    component: () => import ('../views/Setting.vue')
  },
  {
    path: '/usercenter',
    name: 'usercenter',
    title: '用户中心',
    component: () => import ('../views/UserCenter.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]