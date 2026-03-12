import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/MainLayout.vue'),
      meta: {
        title: 'moneyBall',
      },
      children: [
        {
          path: '/menu',
          name: 'Menu',
          component: () => import('@/components/MenuApp.vue'),
          meta: {
            title: 'Menu',
          },
        },
        {
          path: '/test',
          name: 'Test',
          component: () => import('@/components/TestCard.vue'),
          meta: {
            title: 'Test',
          },
        },
        {
          path: '/settings',
          name: 'Settings',
          component: () => import('@/components/SettingsApp.vue'),
          meta: {
            title: 'Settings',
          },
        },
      ],
    },
  ],
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = String(to.meta.title)
  }
})

export default router
