import type { RouterScrollBehavior, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
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
]

export const scrollBehavior: RouterScrollBehavior = () => ({ top: 0 })
