<script setup>
const model = defineModel()
const props = defineProps({
  label: { type: String, required: true },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  name: { type: String, required: false },
})

const {label, disabled, readonly} = props;

</script>

<template>
  <div v-if="type === 'checkbox' || type === 'radio'" class="space-y-2 flex flex-col">
    <label :for="name">{{label}}</label>
    <input :name="name" :id="name" type="checkbox" :readonly="readonly" :disabled="disabled"  class="border p-1" v-model="model"/>
  </div>
</template>

<style scoped>

</style>