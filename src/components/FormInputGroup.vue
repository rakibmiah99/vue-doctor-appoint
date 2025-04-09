<script setup>
  const model = defineModel()
  const props = defineProps({
     label: { type: String, required: false, default: null },
     type: { type: String, required: false, default: 'text' },
     disabled: { type: Boolean, required: false, default: false },
     readonly: { type: Boolean, required: false, default: false },
     name: { type: String, required: false, default: '' },
     value: { type: String, required: false, default: '' },
  })

  const {label, type, disabled, readonly, name, value} = props;

</script>

<template>
   <div v-if="type === 'checkbox' || type === 'radio'" class="space-x-2 items-center flex">
     <input :name="name" :value="value" :readonly="readonly" :disabled="disabled" :type="type" class="border" v-model="model"/>
     <label>{{label}}</label>
   </div>
  <div v-else-if="type === 'select'">

  </div>
   <div v-else class="space-y-2 flex flex-col">
     <label class="block mb-1 text-sm font-medium text-gray-700">{{label}}</label>
     <input
         :readonly="readonly"
          :disabled="disabled"
          :type="type"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          v-model="model"
     />
   </div>
</template>