<template>
  <div class="phone-frame">
    <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>

    <div class="input-group">
      <label>Phone (10 digits):</label>
      <input v-model="phone" maxlength="10" placeholder="e.g. 0712345678" />
    </div>

    <div class="input-group">
      <label>Password (6 digits):</label>
      <input v-model="password" maxlength="6" type="password" placeholder="6-digit password" />
    </div>

    <div class="input-group" v-if="!isLogin">
      <label>Repeat Password:</label>
      <input v-model="repeatPassword" maxlength="6" type="password" placeholder="Repeat password" />
    </div>

    <button @click="handleAction">{{ isLogin ? 'Login' : 'Register' }}</button>

    <p class="error">{{ errorMessage }}</p>

    <p @click="toggleMode" class="toggle">
      {{ isLogin ? 'No account? Register here.' : 'Already have an account? Login here.' }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth, db } from '@/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { ref as dbRef, set, get, child } from "firebase/database"

const phone = ref('')
const password = ref('')
const repeatPassword = ref('')
const isLogin = ref(true)
const errorMessage = ref('')

const toggleMode = () => {
  isLogin.value = !isLogin.value
  errorMessage.value = ''
}

const handleAction = async () => {
  errorMessage.value = ''

  if (!/^\d{10}$/.test(phone.value)) {
    errorMessage.value = 'Phone number must be exactly 10 digits.'
    return
  }

  if (!/^\d{6}$/.test(password.value)) {
    errorMessage.value = 'Password must be exactly 6 digits.'
    return
  }

  const email = `${phone.value}@tdj.com` // fake email for Firebase Email/Password method

  if (isLogin.value) {
    // LOGIN
    try {
      await signInWithEmailAndPassword(auth, email, password.value)
      alert('Login successful!')
      window.location.href = '/dashboard'
    } catch (error) {
      errorMessage.value = error.message
    }
  } else {
    // REGISTER
    if (password.value !== repeatPassword.value) {
      errorMessage.value = 'Passwords do not match.'
      return
    }

    try {
      // Generate Referral Code
      const snapshot = await get(child(dbRef(db), 'users'))
      const userCount = snapshot.exists() ? Object.keys(snapshot.val()).length : 0
      const referralCode = `TDJ${(userCount + 1).toString().padStart(3, '0')}`

      await createUserWithEmailAndPassword(auth, email, password.value)

      // Save to Realtime Database
      const userId = auth.currentUser.uid
      await set(dbRef(db, 'users/' + userId), {
        phone: phone.value,
        referralCode: referralCode,
        password: password.value // optional: remove/hide in real app
      })

      alert(`Registered! Your referral code is ${referralCode}`)
      window.location.href = '/dashboard'
    } catch (error) {
      errorMessage.value = error.message
    }
  }
}
</script>

<style scoped>
.phone-frame {
  width: 375px;
  margin: 20px auto;
  padding: 20px;
  background: #f4f8ff;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.input-group {
  margin: 10px 0;
}
input {
  width: 100%;
  padding: 8px;
}
button {
  width: 100%;
  padding: 10px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
}
.error {
  color: red;
  margin-top: 5px;
}
.toggle {
  color: blue;
  cursor: pointer;
  margin-top: 10px;
}
</style>
