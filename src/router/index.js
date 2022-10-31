import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../layouts/Dashboard.vue';
import DashboardPage from '../pages/DashboardPage.vue';
import ReportPage from '../pages/ReportPage.vue';
import Game from '../pages/Game.vue';
import LoginPage from '../pages/LoginPage.vue';
import StatisticsPage from '../pages/StatisticsPage.vue';

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
        {
          path: '/report',
          component: ReportPage,
        },
        {
          path: '/statistics',
          component: StatisticsPage,
        },
      ],
    },
    {
      path: '/game',
      component: Game,
    },
    {
      path: '/login',
      component: LoginPage,
    },
  ],
});

export default router;
