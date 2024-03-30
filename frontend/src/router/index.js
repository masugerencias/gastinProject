import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import FirstPage from '../views/FirstPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/firstPage',
    name: 'firstPage',
    component: FirstPage
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;