
```vue
<template>
  <div class="register-container">
    <form @submit.prevent="handleSubmit">
      <div v-if="step === 1">
        <h2>Step 1: Personal Details</h2>
        <input v-model="form.name" type="text" placeholder="Full Name" required />
        <input v-model="form.email" type="email" placeholder="Email" required />
        <button type="button" @click="nextStep">Next</button>
      </div>

      <div v-if="step === 2">
        <h2>Step 2: Account Setup</h2>
        <input v-model="form.username" type="text" placeholder="Username" required />
        <input v-model="form.password" type="password" placeholder="Password" required />
        <input v-model="form.referralCode" type="text" placeholder="Referral Code (optional)" />
        <button type="button" @click="prevStep">Previous</button>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const step = ref(1)

const form = reactive({
  name: '',
  email: '',
  username: '',
  password: '',
  referralCode: ''
})

function nextStep() {
  if (step.value < 2) step.value++
}

function prevStep() {
  if (step.value > 1) step.value--
}
function handleSubmit() {
  alert(`Registered:
Name: form.name
Email:{form.email}
Username: form.username
Referral Code:{form.referralCode}`)
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

button {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
}
</style>
```