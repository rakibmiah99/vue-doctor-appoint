<template>
  <div class="min-h-screen bg-blue-50 py-10 px-4">
    <div class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 class="text-3xl font-bold text-blue-700 text-center mb-6">Reschedule an Appointment</h2>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Patient Information -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block mb-1 font-medium text-gray-700">Full Name</label>
            <input
                v-model="form.name"
                type="text"
                required
                placeholder="Your full name"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label class="block mb-1 font-medium text-gray-700">Email</label>
            <input
                v-model="form.email"
                type="email"
                required
                placeholder="you@example.com"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label class="block mb-1 font-medium text-gray-700">Phone</label>
            <input
                v-model="form.phone"
                type="text"
                required
                placeholder="+880123456789"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label class="block mb-1 font-medium text-gray-700">Doctor</label>
            <select
                v-model="form.doctor"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a doctor</option>
              <option v-for="doctor in doctors" :key="doctor" :value="doctor.name">{{ doctor.name }}</option>
            </select>
          </div>
        </div>

        <!-- Appointment Details -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block mb-1 font-medium text-gray-700">Date</label>
            <input
                v-model="form.date"
                type="date"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label class="block mb-1 font-medium text-gray-700">Time</label>
            <input
                v-model="form.time"
                type="time"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div>
          <label class="block mb-1 font-medium text-gray-700">Reason for Visit</label>
          <textarea
              v-model="form.reason"
              rows="4"
              placeholder="Describe your issue..."
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div class="text-center">
          <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Update Appointment
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useDoctorsStore} from "@/stores/doctors.js";
import {getAppointments, getLoggedInUser, setAppointment, updateAppointment} from "@/lib/helper.js";
import {AppointmentData} from "@/lib/data-prototype.js";
import {toast} from "vue3-toastify";
import {useRouter} from "vue-router";
const router = useRouter();

const form = ref({
  name:  '',
  email: '',
  phone: '',
  doctor: '',
  date: '',
  time: '',
  reason: '',
  status: 'pending',
  comment: '',
})





const user = getLoggedInUser();
const url = new URLSearchParams(window.location.search)

if(url.has('reschedule_id') && url.get('reschedule_id')) {
  const appointments = getAppointments()
  const current_appointment = appointments.filter((item) => item.id == url.get('reschedule_id') )
  if(current_appointment.length) {
     form.value = current_appointment[0]
  }
  else{
    toast.error("No reschedule found!")
    router.push({name: 'my-appointment'});
  }
}
else{
  toast.error("No reschedule found!")
  router.push({name: 'my-appointment'});
}



const {doctors} = useDoctorsStore();

const handleSubmit = async () => {
  const appointment = await AppointmentData(form.value)
  const result = await updateAppointment(appointment.id, appointment)
  console.log('Appointment Form:', appointment)
  toast.success(result)
}
</script>
