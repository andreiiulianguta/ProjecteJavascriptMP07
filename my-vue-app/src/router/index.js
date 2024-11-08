import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CalculatorPage from '../views/CalculatorPage.vue';
import FetchPage from '../views/FetchPage.vue';
import AxiosPage from '../views/AxiosPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: CalculatorPage
    },
    {
        path: '/fetch',
        name: 'Fetch',
        component: FetchPage
    },
    {
        path: '/axios',
        name: 'Axios',
        component: AxiosPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
