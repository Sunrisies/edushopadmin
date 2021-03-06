import { createRouter,createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        component:  () => import('@/views/Home.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name:'Login',
        meta: {
            title: '登录'
        }
    }
]

export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes
})
