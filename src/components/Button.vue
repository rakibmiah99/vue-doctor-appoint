<script setup>
defineEmits()


const props = defineProps({
   variant: {type: String, default: 'primary'},
   size: {type: String, default: 'md'},
   loading: {type: Boolean, default: false},
})

const {variant, size, loading} = props;

const buttonVariant = {
  common: 'transition-all cursor-pointer',
  size: {
    lg: 'py-[15px] px-[25px]',
    md: 'py-[10px] px-[20px]',
    sm: 'py-[7px] px-[10px]',
    xs: 'py-[5px] px-[8px]',
  },
  primary: 'bg-blue-700 hover:bg-blue-800 text-white',
  danger: 'bg-red-700 hover:bg-red-800 text-white',
  success: 'bg-green-700 hover:bg-green-800 text-white',
  info: 'bg-teal-700 hover:bg-teal-800 text-white',
  warning: 'bg-yellow-700 hover:bg-yellow-800 text-white',
  call: function (variantName, size) {
     return [this['common'], this[variantName], this.size[size]].join(' ')
  }
}


</script>

<template>
   <button  :class="buttonVariant.call(variant, size)">
     <span v-if="loading">Loading....</span>
     <slot v-else/>
   </button>
</template>

<style scoped>

</style>