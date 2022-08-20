import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
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
        path: '/:pathMatch(.*)',
        name: '/404',
        component: () => import('../views/404.vue')
    },
    {
        path: '/notes',
        name: 'notes',
        component: () => import('../views/notes.vue')
    },
    {
        path: '/album',
        name: 'album',
        component: () => import('../views/album.vue')
    },
    {
        path: '/video',
        name: 'video',
        component: () => import('../views/video.vue')
    },
    {
        path: '/collection',
        name: 'collection',
        component: () => import('../views/collection.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
    const token = localStorage.getItem('msToken')
    if (to.path == '/' && !token) {
        return { name: 'Login' }
    }
    if(to.path == '/login'&&token){
        return false
    }
})
export default router