<script setup>
import FormInputGroup from "@/components/FormInputGroup.vue";
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();

import Button from "@/components/Button.vue";
import {findUser, setLoginInUser} from "@/lib/helper.js";
import {toast} from "vue3-toastify";
const data = reactive({
  email: 'rakib@mail.com',
  password: '1234',
  remember: false
})

const handleLogin = () => {
  const user = findUser(userInfo => {
    return (userInfo.email === data.email && userInfo.password === data.password);
  })
  if(user){
    toast.success('Login successfully')
    setLoginInUser(user)
    router.push({name: 'dashboard'})
  }
  else{
    toast.error('Login failed. Try again later')
  }
}


</script>

<template>
  <div class="flex h-[100vh] justify-center items-center">
    <div class="h-[400px] space-y-3 p-3 w-[400px] bg-slate-100 border">
      <h1 class="text-3xl font-bold">Login</h1>
      <h1 class="text-lg">Doctor appointment system</h1>

      <div class="flex flex-wrap flex-col space-y-2">
        <FormInputGroup
             label="Enter you email"
             v-model="data.email"
         />

        <FormInputGroup
            label="Password"
            type="password"
            v-model="data.password"
        />

        <div class="flex mb-3 justify-between items-center">
          <FormInputGroup
              label="Remember Me"
              type="checkbox"
              v-model="data.remember"
          />

          <router-link class="text-blue-700 hover:underline" :to="{name: 'register'}">Create new account</router-link>
        </div>

        <Button @click="handleLogin" variant="danger">Submit</Button>


      </div>
    </div>
  </div>
</template>