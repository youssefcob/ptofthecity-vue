import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/subViews/HomePage.vue'
import ServicePage from '@/components/ServicesPage/ServicePage.vue'
import StaffPage from '@/views/subViews/StaffPage.vue'
import Clinic from '@/components/ClinicPage/Clinic.vue'
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
          component: HomePage,
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
          path: '/clinic/:id',
          name: 'clinic',
          component: Clinic,
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
        },
        {
          path: '/FAQs',
          name: 'FAQs',
          component: () => import('@/components/FAQsPage/FAQsPage.vue')
        },
        {
          path: 'booking/:clinicName?/:serviceName?',
          name: 'booking',
          component: () => import('@/components/BookingPage/Booking.vue'),
          props: true

        },
        {
          path: 'clinics/:location?',
          name: 'clinics',
          component: () => import('@/views/subViews/ClinicsPage.vue'),
          props: true
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('@/views/subViews/BlogPage.vue'),
     

        }
      ]
    },


  ],
  async scrollBehavior(to, from, savedPosition) {
    const delay = (t: number) => new Promise((r) => setTimeout(r, t))

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100
      }
    };
    if (savedPosition) {
      return savedPosition;
    } else {
      await delay(0)
    return { top: 0, behavior: 'smooth' };

    }
  }
})

export default router
