import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('../views/code/index.vue')
    }
  ]
})

export default router
