import { createRouter, createWebHistory} from "vue-router";
import FirstPage from '../views/FirstPage';
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home';
Vue.use(Router)


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

]

const router = createRouter({history: createWebHistory('/'), routes})

export default router;