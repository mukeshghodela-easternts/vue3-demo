import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import ChangeDetectUsingVue2 from '../components/ChangeDetectUsingVue2.vue'
import SuspenseVue3 from '../components/SuspenseVue3.vue'
import ForRefs from '../components/ForRefs.vue'

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
    {
        path: '/suspense',
        name: 'suspense',
        component: SuspenseVue3
    },
    {
        path: '/for-refs',
        name: 'for-refs',
        component: ForRefs
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router