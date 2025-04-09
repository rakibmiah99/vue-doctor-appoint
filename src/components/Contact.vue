<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 px-4 py-10">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
      <h2 class="text-3xl font-bold text-blue-700 mb-6 text-center">Contact Us</h2>

      <p class="text-center text-gray-600 mb-10">
        We'd love to hear from you! Fill out the form below and we’ll get back to you soon.
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block mb-1 font-medium text-gray-700">Name</label>
            <input
                v-model="form.name"
                type="text"
                placeholder="Your Name"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label class="block mb-1 font-medium text-gray-700">Email</label>
            <input
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label class="block mb-1 font-medium text-gray-700">Subject</label>
          <input
              v-model="form.subject"
              type="text"
              placeholder="Subject"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label class="block mb-1 font-medium text-gray-700">Message</label>
          <textarea
              v-model="form.message"
              rows="5"
              placeholder="Your message..."
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>

        <div class="text-center">
          <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Contact Form Data:', form.value)
  // You can send this data using Axios or Fetch to your backend.
  alert('Thank you for contacting us!')
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>
