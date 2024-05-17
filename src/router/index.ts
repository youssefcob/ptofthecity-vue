import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import  HomePage  from '@/components/HomePage/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          component:HomePage
        }
      ]
    },

  ]
})

export default router
