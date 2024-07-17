import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import  HomePage  from '@/components/HomePage/HomePage.vue'
import ServicePage from '@/components/ServicesPage/ServicePage.vue'
import StaffPage from '@/components/StaffPage/StaffPage.vue'
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
        },
        {
          path: '/service/:id', 
          name: 'service',
          component: ServicePage,
          props: true
        },
        {
          path: '/staff/:id', 
          name: 'staff',
          component: StaffPage,
          props: true
        },
        {
          path: '/whoWeAre',
          name: 'whoWeAre',
          component: () => import('@/components/WhoWeArePage/WhoWeAre.vue')
        },
        {
          path: '/careers',
          name: 'careers',
          component: () => import('@/components/CareerPage/Career.vue')
        }
      ]
    },
    

  ]
})

export default router
