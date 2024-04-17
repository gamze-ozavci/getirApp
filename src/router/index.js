import { createRouter, createWebHistory } from 'vue-router';
import CategoryPage from '../views/CategoryPage.vue';
import ProductPage from '../views/ProductPage.vue';
import BasketPage from '../views/BasketPage.vue';
import HomePage from '../views/HomePage.vue';
import CheckoutPage from '../views/CheckoutPage.vue';
import AddressPage from '../views/AddressPage.vue';
import AddAddress from '../components/molecules/AddAddress.vue';

export const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/categories/:id',
        name: 'CategoryPage',
        component: CategoryPage
    },
    {
        path: '/products/:id',
        name: 'ProductPage',
        component: ProductPage
    },
    {
        path: '/basket',
        name: 'BasketPage',
        component: BasketPage
    },
    {
        path: '/checkout',
        name: 'CheckoutPage',
        component: CheckoutPage
    },
    {
        path: '/addresses',
        name: 'AddressPage',
        component: AddressPage
    },
    {
        path: '/add/address',
        name: 'AddAddress',
        component: AddAddress
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;