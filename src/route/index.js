import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/spash',
        name: 'spash',
        component: () => import(/* webpackChunkName: "about" */ '../components/Spash')

    },
    {
        path: '/edit',
        name: 'edit',
        component: () => import(/* webpackChunkName: "about" */ '../components/Editor')

    },
    {
        path: '/',
        redirect: '/edit'

    },
    {
        path: '/myimage',
        name: 'myimage',
        component: () => import(/* webpackChunkName: "about" */ '../components/MyImage1')

    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
