import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../layouts/Dashboard.vue';
import DashboardPage from '../pages/DashboardPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          path: '/',
          component: DashboardPage,
        },
      ],
    },
  ],
});

export default router;
