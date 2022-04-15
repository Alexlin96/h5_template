import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    // 匹配前面未匹配到的路由
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/home/index.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(), // createWebHashHistory:  hash模式 createWebHistory:  history模式
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router