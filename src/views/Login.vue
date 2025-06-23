vue
<template>
  <form @submit.prevent="login">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const auth = getAuth()

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    alert('Login successful!')
  } catch (err) {
    error.value = err.message
  }
}
</script>