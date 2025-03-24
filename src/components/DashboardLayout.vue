<script setup>

</script>

<template>
    <div class="bg-gray-200 flex justify-between items-center py-3 px-2">
      <router-link class="text-blue hover:underline" :to="{name: 'dashboard'}">Home</router-link>
      <div class="space-x-2">
        <router-link class="text-blue hover:underline" to="">Book An Appointment</router-link>
        <router-link class="text-blue hover:underline" to="">Profile</router-link>
      </div>
    </div>
    <router-view/>
</template>

<style scoped>

</style>