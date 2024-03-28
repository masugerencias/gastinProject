import { createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home';
import FirstPage from '../views/FirstPage';

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