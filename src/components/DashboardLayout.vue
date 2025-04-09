<script setup>
import {deleteLoggedInUser} from "@/lib/helper.js";
import {useRouter} from "vue-router";
const router= useRouter();

const logoutAction = () => {
  deleteLoggedInUser();
  router.push('/login')
}

</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Navbar -->
    <header class="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-blue-600">MediCare</h1>
      <nav class="space-x-4">
        <router-link to="/" class="hover:text-blue-500">Home</router-link>
        <router-link to="/doctors" class=" hover:text-blue-500">Doctors</router-link>
        <router-link to="/my-appointment" class=" hover:text-blue-500">My Appointment</router-link>
        <router-link to="/appointment" class=" hover:text-blue-500">Appointment</router-link>
        <router-link to="/contact" class=" hover:text-blue-500">Contact</router-link>
        <button @click="logoutAction" class=" hover:text-blue-500 cursor-pointer">Logout</button>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style scoped>

</style>