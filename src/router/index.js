import Vue from 'vue';
import Router from 'vue-router';
import WelcomePage from '../views/welcome/welcome.vue';
import dashboardRouter from './modules/dashboard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: WelcomePage },
    { path: '/signup', component: () => import('../views/auth/signup.vue') },
    { path: '/signin', component: () => import('../views/auth/signin.vue') },
    dashboardRouter,
    { path: '*', redirect: '/', hidden: true },
  ],
});
