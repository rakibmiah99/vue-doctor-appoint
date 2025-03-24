import './assets/main.css'
import 'vue3-toastify/dist/index.css';
import { createApp } from 'vue'
import AuthLayout from '@/components/AuthLayout.vue'
import App from "@/App.vue";
import {createRouter, createWebHistory} from "vue-router";
import {createPinia} from "pinia";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
const pinia = createPinia()
import Vue3Toastify from "vue3-toastify";
import DashboardLayout from "@/components/DashboardLayout.vue";
import Home from "@/components/Home.vue";
import {getLoggedInUser} from "@/lib/helper.js";

const routes = [
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login
            },
            {
                path: '/register',
                name: 'register',
                component: Register
            },
        ]

    },
    {
        path: '/',
        component: DashboardLayout,
        children: [
            {
                path: '/',
                component: Home,
                name: 'dashboard',
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if(to.name === "login" || to.name === "register") {
        return true
    }
    else{
        if(getLoggedInUser()){
            // next()
        }
        else{
            return {name: 'login'}
        }

    }

})

createApp(App)
    .use(router)
    .use(pinia)
    .use(Vue3Toastify, {
        autoClose: 1500,
        position: 'bottom-right',
    })
    .mount('#app')
