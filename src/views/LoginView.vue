<template>
  <div class="phone-frame">
    <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>

    <div class="input-group">
      <label>Phone Number (10 digits):</label>
      <input v-model="phone" maxlength="10" placeholder="e.g. 0712345678" />
    </div>

    <div class="input-group toggle-password">
      <label>Password (6 digits):</label>
      <input
        :type="showPassword ? 'text' : 'password'"
        v-model="password"
        maxlength="6"
        placeholder="6-digit password"
      />
      <i @click="showPassword = !showPassword">👁️</i>
    </div>

    <div v-if="!isLogin" class="input-group toggle-password">
      <label>Repeat Password:</label>
      <input
        :type="showRepeatPassword ? 'text' : 'password'"
        v-model="repeatPassword"
        maxlength="6"
        placeholder="Repeat password"
      />
      <i @click="showRepeatPassword = !showRepeatPassword">👁️</i>
    </div>

    <div v-if="!isLogin" class="input-group">
      <label>Your Referral Code:</label>
      <input :value="referralCode" disabled />
    </div>

    <button @click="handleAction">{{ isLogin ? 'Login' : 'Register' }}</button>

    <p class="error">{{ errorMessage }}</p>

    <p @click="toggleMode" class="toggle-link">
      {{ isLogin ? 'No account? Register here' : 'Already have an account? Login here' }}
    </p>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { auth, database } from '@/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { ref as dbRef, get, child, set } from 'firebase/database'

const phone = ref('')
const password = ref('')
const repeatPassword = ref('')
const isLogin = ref(true)
const showPassword = ref(false)
const showRepeatPassword = ref(false)
const errorMessage = ref('')
const referralCode = ref('Loading...')

const toggleMode = async () => {
  isLogin.value = !isLogin.value
  errorMessage.value = ''

  if (!isLogin.value) {
    // Generate next referral code only for registration
    const snapshot = await get(child(dbRef(database), 'users'))
    const userCount = snapshot.exists() ? Object.keys(snapshot.val()).length : 0
    referralCode.value = `TDJ${(userCount + 1).toString().padStart(3, '0')}`
  }
}

const handleAction = async () => {
  errorMessage.value = ''

  if (!/^\d{10}$/.test(phone.value)) {
    errorMessage.value = 'Phone must be exactly 10 digits.'
    return
  }

  if (!/^\d{6}$/.test(password.value)) {
    errorMessage.value = 'Password must be exactly 6 digits.'
    return
  }

  const email = `${phone.value}@tdj.com`

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
    if (password.value !== repeatPassword.value) {
      errorMessage.value = 'Passwords do not match.'
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password.value)

      // Save to DB
      const userId = auth.currentUser.uid
      await set(dbRef(database, 'users/' + userId), {
        phone: phone.value,
        referralCode: referralCode.value
      })

      alert(`Registered! Your referral code is ${referralCode.value}`)
      window.location.href = '/dashboard'
    } catch (error) {
      errorMessage.value = error.message
    }
  }
}
</script>

<style scoped>
body {
  background: #dfefff;
  font-family: Arial, sans-serif;
}
.phone-frame {
  width: 375px;
  height: 700px;
  background: #e6f2ff;
  border: 8px solid #999;
  border-radius: 30px;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
  padding: 20px;
  margin: 20px auto;
  overflow-y: auto;
}
h2 {
  text-align: center;
  color: #333;
}
.input-group {
  margin-bottom: 15px;
}
input[type="text"], input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #aaa;
  border-radius: 5px;
}
.toggle-password {
  position: relative;
}
.toggle-password i {
  position: absolute;
  right: 10px;
  top: 38px;
  cursor: pointer;
}
button {
  width: 100%;
  padding: 12px;
  background-color: #4da6ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background-color: #2e8be6;
}
.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
.toggle-link {
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  cursor: pointer;
}
</style>
