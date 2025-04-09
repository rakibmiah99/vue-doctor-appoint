<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 class="text-3xl font-bold text-blue-700 mb-6 text-center">My Appointments</h2>

      <div v-if="appointments.length > 0" class="overflow-x-auto">
        <table class="w-full table-auto border-collapse">
          <thead>
          <tr class="bg-blue-100 text-left text-gray-700 text-sm uppercase">
            <th class="px-4 py-3">Doctor</th>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Time</th>
            <th class="px-4 py-3">Reason</th>
            <th class="px-4 py-3 text-center">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(appointment, index) in appointments"
              :key="index"
              :class="'border-b hover:bg-gray-50 ' + (appointment.status === 'cancelled' ? 'strike-through' : '')"
          >
            <td class="px-4 py-3">{{ appointment.doctor }}</td>
            <td class="px-4 py-3">{{ appointment.date }}</td>
            <td class="px-4 py-3">{{ appointment.time }}</td>
            <td class="px-4 py-3">{{ appointment.reason }}</td>
            <td v-if="appointment.status !== 'cancelled'" class="px-4 py-3 text-center">
              <button
                  class="text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded mr-2"
                  @click="cancelAppointment(appointment.id)"
              >
                Cancel
              </button>
              <button
                  class="text-sm text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded"
                  @click="rescheduleAppointment(appointment.id)"
              >
                Reschedule
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="text-center py-20 text-gray-500">
        <p class="text-xl">No appointments found.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
import {getAppointments, getLoggedInUser, updateAppointment} from "@/lib/helper.js";
import {toast} from "vue3-toastify";
import {ref} from "vue";

const appointments = ref([])
appointments.value = getAppointments().filter(appointment => appointment.email === getLoggedInUser().email)

const cancelAppointment = async (appointment_id) => {
  if (confirm('Are you sure you want to cancel this appointment?')) {
    const result = await updateAppointment(appointment_id, {
      status: "cancelled",
    });
    appointments.value = getAppointments().filter(appointment => appointment.email === getLoggedInUser().email);
    toast(result)
  }
}

const rescheduleAppointment = (appointment_id) => {
  router.push({name: 'reschedule-appointment' ,query: {reschedule_id: appointment_id}})
}
</script>
