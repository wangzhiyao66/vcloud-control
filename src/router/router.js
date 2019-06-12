export default [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        title: '登录',
        component: () => import('../common/Login.vue')
    },
    {
        path: '/',
        name: 'routerView',
        title: '主页',
        component: () => import('../common/router.vue'),
        children: [
            {
                path: '',
                redirect: 'home'
            },
            {
                path: 'home',
                name: 'home',
                title: '首页',
                component: () => import('../views/Home.vue'),
                children: []
            },
            {
                path: 'overview',
                name: 'overview',
                title: '概览',
                component: () => import('../views/Overview.vue')
            },
            {
                path: 'story',
                name: 'story',
                title: '故事',
                component: () => import('../views/Story.vue')
            },
            {
                path: 'task',
                name: 'task',
                title: '任务',
                component: () => import('../views/Task.vue')
            },
            {
                path: 'problem',
                name: 'problem',
                title: '问题',
                component: () => import('../views/Problem.vue')
            },
            {
                path: 'activity',
                name: 'activity',
                title: '活动',
                component: () => import('../views/Activity.vue')
            },
            {
                path: 'version',
                name: 'version',
                title: '版本',
                component: () => import('../views/Version.vue')
            },
            {
                path: 'setting',
                name: 'setting',
                title: '设置',
                component: () => import('../views/Setting.vue')
            },
            {
                path: 'usercenter',
                name: 'usercenter',
                title: '用户中心',
                component: () => import('../views/UserCenter.vue')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
            },
        ]
    },
    {
        path: '**',
        name: 'code404',
        component: () => import('../common/Code404.vue')
    }

]