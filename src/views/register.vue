<template>
  <div class="register">
    <h2>Step {{ step }}</h2>

    <form @submit.prevent="nextStep">
      <div v-if="step === 1">
        <input v-model="form.fullName" placeholder="Full Name" required />
        <input v-model="form.email" placeholder="Email" required type="email" />
        <input v-model="form.password" placeholder="Password" required type="password" />
      </div>

      <div v-if="step === 2">
        <input v-model="form.phone" placeholder="Phone Number" required />
        <input v-model="form.referralCode" placeholder="Referral Code (optional)" />
      </div>

      <div v-if="step === 3">
        <p>Review:</p>
        <ul>
          <li><strong>Name:</strong> {{ form.fullName }}</li>
          <li><strong>Email:</strong> {{ form.email }}</li>
          <li><strong>Phone:</strong> {{ form.phone }}</li>
        </ul>
      </div>

      <button type="submit">{{ step < 3 ? 'Next' : 'Submit' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, database as db } from '../firebase' // Adjust path if needed

const router = useRouter()

const step = ref(1)
const form = ref({
  fullName: '',
  email: '',
  password: '',
  phone: '',
  referralCode: '',
})

function nextStep() {
  if (step.value < 3) {
    step.value++
  } else {
    registerUser()
  }
}

async function registerUser() {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      form.value.email,
      form.value.password
    )
    const user = userCredential.user

    // ✅ Save user details to Firestore
    await setDoc(doc(db, 'users', user.uid), {
      userId: form.value.phone, // 👈 phone stored as userId for MineView
      fullName: form.value.fullName,
      email: form.value.email,
      referralCode: form.value.referralCode,
      creditScore: 0,
      level: 'Intern',
      userTitle: 'New User',
      effectiveDate: new Date().toISOString(),
      walletBalance: 0
    })

    console.log('User registered and data saved to Firestore!')
    router.push('/dashboard') // redirect to dashboard after registration
  } catch (error) {
    alert(error.message)
    console.error('Registration error:', error)
  }
}
</script>
