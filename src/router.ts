import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import CompanyView from './views/CompanyView.vue'
import MethodologyView from './views/MethodologyView.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/company/:id', name: 'company', component: CompanyView, props: true },
        { path: '/methodology', name: 'methodology', component: MethodologyView },
    ],
    scrollBehavior() {
        return { top: 0 }
    },
})
