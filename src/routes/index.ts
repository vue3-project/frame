import A from '@/pages/A.vue'
import B from '@/pages/B.vue'
import Hello from '@/pages/Hello.vue'
import { createRouter, createWebHashHistory  } from 'vue-router'
const routes:any[] = [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Hello
    }, {
        path: '/a',
        component: A
    }, {
        path: '/b',
        component: B
    }
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
export default router