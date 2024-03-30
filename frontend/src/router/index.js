import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import FirstPage from '../views/FirstPage.vue';
import Settings from '@/views/Settings.vue';
import CategoryManager from '@/views/CategoryManager.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/firstPage',
    name: 'firstPage',
    component: FirstPage
  },
  {
    path: '/categoryManager',
    name: 'categoryManager',
    component: CategoryManager
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;