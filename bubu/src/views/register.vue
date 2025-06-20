```vue
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

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

async function registerUser() {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      form.value.email,
      form.value.password
    )
    console.log('User registered:', userCredential.user)
    // Redirect or show success message
  } catch (error) {
    alert(error.message)
  }
}
</script>


---

Step 3: Add Route

In `src/router/index.js`, add:

js
{
  path: '/register',
  name: 'Register',
  component: () => import('../views/Register.vue')
}
```

---