```vue
<template>
  <div>
    <h2>{{ isLogin ? 'Login' : 'Sign Up' }}</h2>

    <form @submit.prevent="handleSubmit">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      
      <button type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
    </form>

    <button @click="toggleMode">
      {{ isLogin ? 'Need to create an account? Sign Up' : 'Already have an account? Login' }}
    </button>

    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const isLogin = ref(true)
const email = ref('')
const password = ref('')
const error = ref('')

const toggleMode = () => {
  isLogin.value = !isLogin.value
  error.value = ''
}

const handleSubmit = async () => {
  error.value = ''
  try {
    if (isLogin.value) {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      alert('Logged in successfully!')
    } else {
await createUserWithEmailAndPassword(auth, email.value, password.value)
      alert('Account created successfully!')
    }
  } catch (e) {
    error.value = e.message
  }
}
</script>


---