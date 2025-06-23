```vue
<template>
  <div class="register-details">
    <h2>Complete Your Profile</h2>
    <form @submit.prevent="submitForm">
      <input v-model="fullName" placeholder="Full Name" required />
      <input v-model="username" placeholder="Username" required />
      <select v-model="gender" required>
        <option disabled value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input type="date" v-model="dob" required />
      <button type="submit">Continue</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const fullName = ref('')
const username = ref('')
const gender = ref('')
const dob = ref('')

const router = useRouter()
const db = getFirestore()
const auth = getAuth()

const submitForm = async () => {
  const user = auth.currentUser
  if (!user) return

  await setDoc(doc(db, "users", user.uid), {
    fullName: fullName.value,
    username: username.value,
    gender: gender.value,
dob: dob.value,
    phoneNumber: user.phoneNumber
  })

  router.push('/dashboard') // or next step
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
```
