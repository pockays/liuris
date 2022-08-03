import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginRegister.vue')
    },
    {
        path: '/forgotpassword',
        name: 'ForgotPassword',
        component: () => import('../views/ForgotPassword.vue')
    },
    {
        path: '/resetpassword/:id',
        name: 'ResetPassword',
        component: () => import('../views/forgotpassword.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '/404',
        component: () => import('../views/404.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('msToken')
    if (to.path === '/' && !token) {
        next('/login')
    } else {
        next()
    }
})
export default router