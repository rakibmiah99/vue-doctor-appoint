<script setup>
import FormInputGroup from "@/components/FormInputGroup.vue";
import {reactive, ref} from "vue";
import {toast} from "vue3-toastify";
import Button from "@/components/Button.vue";
import {findUser, setUser} from "@/lib/helper.js";
import {UserData} from "@/lib/data-prototype.js";
const data = reactive({
  name: 'Rakib',
  email: 'rakib@mail.com',
  password: '1234',
  confirm_password: '12345',
  role: 'doctor',
  secure_key: 'abc',
})

const handleSubmit = async () => {
  const errors = [];
  if(!data.name){errors.push('Name is required');}
  if(!data.email){errors.push('Email is required');}
  if(!data.password){errors.push('Password is required');}
  if(!data.confirm_password){errors.push('Password is required');}
  if(!data.role){errors.push('Role is required');}
  if(!data.secure_key){errors.push('Secure key is required');}

  if(data.password !== data.confirm_password){errors.push('Password and confirm password is not match.');}

  errors.forEach((message) => {
    toast.error(message)
  })

  if (!errors.length){

    const user = findUser(userInfo => {
      return (userInfo.email === data.email)
    })

    if(!user){
      const user = await UserData(data);
      setUser(user).then(message => {
        toast.success(message);
        data.name = '';
        data.email = '';
        data.password = '';
        data.confirm_password = '';
        data.role = '';
        data.secure_key = '';
      }).catch(error => {
        toast.error(error);
      })
    }
    else{
      toast.error('User already exists!')
    }
  }
}


</script>

<template>
  <div class="flex h-[100vh] justify-center items-center">
    <div class=" space-y-3 p-3 w-[400px] bg-slate-100 border">
      <h1 class="text-3xl font-bold">Register</h1>
      <h1 class="text-lg">Doctor appointment system</h1>

      <div class="flex flex-wrap flex-col space-y-2">

        <FormInputGroup
            label="Enter your name"
            v-model="data.name"
        />

        <FormInputGroup
            label="Enter you email"
            v-model="data.email"
        />

        <FormInputGroup
            label="Password"
            type="password"
            v-model="data.password"
        />

        <FormInputGroup
            label="Password"
            type="password"
            v-model="data.confirm_password"
        />

        <FormInputGroup
            label="Secure key"
            type="text"
            v-model="data.secure_key"
        />

        <div class="flex mb-3 justify-between items-end">
          <div >
            <p>You are as:</p>
            <div class="flex space-x-2 items-center">
              <FormInputGroup
                  label="Doctor"
                  type="radio"
                  name="role"
                  :model-value="false"
                  value="doctor"
                  v-model="data.role"
              />

              <FormInputGroup
                  label="Patient"
                  type="radio"
                  name="role"
                  value="patinet"
                  v-model="data.role"
              />
            </div>
          </div>

          <router-link class="text-blue-700 hover:underline" :to="{name: 'login'}">Have an account?</router-link>
        </div>

        <Button @click="handleSubmit" variant="primary">Create</Button>


      </div>
    </div>
  </div>
</template>