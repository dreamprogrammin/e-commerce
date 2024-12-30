export default [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('@/pages/HomePage.vue'),
    },
    {
        path: '/cart',
        name: 'CartPage',
        component: () => import('@/pages/CartPage.vue'),
    },
    {
        path: '/favorite',
        name: 'FavoritePage',
        component: () => import('@/pages/FavoritePage.vue'),
    },
    {
        path: '/product/:id',
        name: 'ProductPage',
        component: () => import('@/pages/ProductPage.vue'),
    },
]