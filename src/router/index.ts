import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const layout = () => import('@/layout/index.vue')

const constanRoutes: Array<RouteRecordRaw> = [{
    path: '/',
    name: '首页',
    redirect: '/dashboard',
    component: layout,
    children: [{
        path: 'dashboard',
        name: '仪表板',
        component: () => import('@/views/dashboard/index.vue')
    }, {
        path: 'AppMain',
        name: 'App主页',
        component: () => import('@/views/appMain/index.vue'),
        children: [{
            path: 'test',
            name: '测试页',
            component: () => import('@/views/test/index.vue')
        }]
    }]
}, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: constanRoutes
})

export default router
