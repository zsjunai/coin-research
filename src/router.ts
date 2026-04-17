import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/HomeView.vue'),
        },
        {
            path: '/company/:id',
            name: 'company',
            component: () => import('./views/CompanyView.vue'),
            props: true,
        },
        {
            path: '/methodology',
            name: 'methodology',
            component: () => import('./views/MethodologyView.vue'),
        },
    ],
    scrollBehavior() {
        return { top: 0 }
    },
})
