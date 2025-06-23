```vue
<script setup>
import { ref } from 'vue';
import { auth } from '@/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const phone = ref('');
const otp = ref('');
const confirmationResult = ref(null);
const message = ref('');
const step = ref(1); // 1: enter phone, 2: enter OTP

// Initialize recaptcha verifier once component is mounted
const setupRecaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: () => {
        // reCAPTCHA solved - will proceed with submit
      }
    }, auth);
  }
};

const sendOtp = async () => {
  message.value = '';
  setupRecaptcha();
  try {
    confirmationResult.value = await signInWithPhoneNumber(auth, phone.value, window.recaptchaVerifier);
    step.value = 2;
    message.value = 'OTP sent! Check your phone.';
  } catch (e) {
    message.value = 'Failed to send OTP: ' + e.message;
  }
};

const verifyOtp = async () => {
  try {
    await confirmationResult.value.confirm(otp.value);
    message.value = 'Phone number verified successfully!';
// You can redirect or update UI here
  } catch (e) {
    message.value = 'Invalid OTP, try again.';
  }
};
</script>

<template>
  <div>
    <div v-if="step === 1">
      <input v-model="phone" type="tel" placeholder="+1234567890" />
      <button @click="sendOtp">Send OTP</button>
    </div>

    <div v-if="step === 2">
      <input v-model="otp" type="text" placeholder="Enter OTP" />
      <button @click="verifyOtp">Verify OTP</button>
    </div>

    <div id="recaptcha-container"></div>

    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
input {
  margin: 0.5rem 0;
  padding: 0.5rem;
  font-size: 1rem;
}
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
```