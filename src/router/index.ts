import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/code',
      component: () => import('../views/home/index.vue'),
      children: []
    },
    {
      path: '/code/:code',
      name: 'code',
      component: () => import('../views/code/index.vue')
    }
  ]
})

export default router
