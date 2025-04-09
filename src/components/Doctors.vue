<template>
  <!-- Search + Filter -->
  <section class="py-10 px-6 max-w-6xl mx-auto">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <input
          v-model="search"
          type="text"
          placeholder="Search doctors..."
          class="w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
          v-model="selectedSpecialty"
          class="w-full sm:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">All Specialties</option>
        <option v-for="spec in specialties" :key="spec" :value="spec">{{ spec }}</option>
      </select>
    </div>

    <!-- Doctors Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div
          v-for="doctor in filteredDoctors"
          :key="doctor.id"
          class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
      >
        <img :src="doctor.image" alt="Doctor" class="w-20 h-20 rounded-full mx-auto mb-4" />
        <h3 class="text-lg font-semibold text-center text-blue-800">{{ doctor.name }}</h3>
        <p class="text-center text-sm text-gray-500">{{ doctor.specialty }}</p>
        <p class="text-center text-xs text-gray-400">{{ doctor.location }}</p>
        <p class="text-center text-xs text-gray-400">{{ doctor.education }}</p>
        <p class="text-center text-xs text-gray-400 mb-4">{{ doctor.open.join(',') }}</p>
        <div class="text-center">
          <router-link :to="'/appointment?doctor='+doctor.name" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Book Now
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useDoctorsStore} from "@/stores/doctors.js";
import { ref, computed } from 'vue'

const search = ref('')
const selectedSpecialty = ref('')
const {doctors} = useDoctorsStore();

const specialties = [...new Set(doctors.map((doc) => doc.specialty))]

const filteredDoctors = computed(() => {
  return doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(search.value.toLowerCase())
    const matchesSpecialty = selectedSpecialty.value
        ? doctor.specialty === selectedSpecialty.value
        : true
    return matchesSearch && matchesSpecialty
  })
})
</script>
