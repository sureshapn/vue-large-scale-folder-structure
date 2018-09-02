/** When your routing table is too long, you can split it into small modules* */

import store from '@/store';
import DashboardPage from '@/views/dashboard/dashboard.vue';

const dashboardRouter = {
  path: '/dashboard',
  component: DashboardPage,
  beforeEnter(to, from, next) {
    if (store.state.idToken) {
      next();
    } else {
      next('/signin');
    }
  },
};

export default dashboardRouter;
