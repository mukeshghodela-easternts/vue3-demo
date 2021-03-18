import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import ChangeDetectUsingVue2 from '../components/ChangeDetectUsingVue2.vue'

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/change-detection',
        name: 'change-detection',
        component: ChangeDetectUsingVue2
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router