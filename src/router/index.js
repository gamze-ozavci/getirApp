import { createRouter, createWebHistory } from 'vue-router';
import CategoryPage from '../views/CategoryPage.vue';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categories/:id',
        name: 'CategoryPage',
        component: CategoryPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;