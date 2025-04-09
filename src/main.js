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
import Doctors from "@/components/Doctors.vue";
import Contact from "@/components/Contact.vue";
import Appointment from "@/components/Appointment.vue";
import MyAppointment from "@/components/MyAppointment.vue";
import RescheduleAppointment from "@/components/RescheduleAppointment.vue";

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
            },
            {
                path: '/doctors',
                component: Doctors,
                name: 'doctors',
            },
            {
                path: '/my-appointment',
                component: MyAppointment,
                name: 'my-appointment',
            },
            {
                path: '/reschedule-appointment',
                component: RescheduleAppointment,
                name: 'reschedule-appointment',
            },
            {
                path: '/appointment',
                component: Appointment,
                name: 'appointment',
            },
            {
                path: '/contact',
                component: Contact,
                name: 'contact',
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'text-blue-500 font-bold',
    routes
})

router.beforeEach((to, from) => {
    if(to.name === "login" || to.name === "register") {
        return true
    }
    else{
        if(getLoggedInUser()){
            return true
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
