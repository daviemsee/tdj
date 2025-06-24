<template>
  <div class="phone-frame">
    <div class="container">
      <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>

      <form v-if="isLogin" @submit.prevent="validateLogin">
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="text" v-model="loginPhone" maxlength="10" required />
        </div>
        <div class="form-group toggle-password">
          <label>Password (6 digits):</label>
          <input :type="showLoginPass ? 'text' : 'password'" v-model="loginPassword" maxlength="6" required />
          <i @click="showLoginPass = !showLoginPass">👁️</i>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" v-model="rememberMeLogin" />
          <label>Remember Me</label>
        </div>
        <button type="submit">Login</button>
      </form>

      <form v-else @submit.prevent="validateRegister">
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="text" v-model="regPhone" maxlength="10" required />
        </div>
        <div class="form-group toggle-password">
          <label>Password (6 digits):</label>
          <input :type="showRegPass ? 'text' : 'password'" v-model="regPassword" maxlength="6" required />
          <i @click="showRegPass = !showRegPass">👁️</i>
        </div>
        <div class="form-group toggle-password">
          <label>Repeat Password:</label>
          <input :type="showRepeatPass ? 'text' : 'password'" v-model="repeatPassword" maxlength="6" required />
          <i @click="showRepeatPass = !showRepeatPass">👁️</i>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" v-model="rememberMeReg" />
          <label>Remember Me</label>
        </div>
        <div class="referral-note">
          Referral Code auto-generated during registration (e.g., TDJ001)
        </div>
        <button type="submit">Register</button>
      </form>

      <div class="toggle-link" @click="toggleForm">
        {{ isLogin ? "Don't have an account? Register here" : "Already have an account? Login here" }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isLogin = ref(true);

const loginPhone = ref('');
const loginPassword = ref('');
const rememberMeLogin = ref(false);
const showLoginPass = ref(false);

const regPhone = ref('');
const regPassword = ref('');
const repeatPassword = ref('');
const rememberMeReg = ref(false);
const showRegPass = ref(false);
const showRepeatPass = ref(false);

const toggleForm = () => { isLogin.value = !isLogin.value; };

const validateLogin = () => {
  if (!/^\d{10}$/.test(loginPhone.value)) return alert('Phone must be 10 digits!');
  if (!/^\d{6}$/.test(loginPassword.value)) return alert('Password must be 6 digits!');
  alert('Login success! (simulated)');
};

const validateRegister = () => {
  if (!/^\d{10}$/.test(regPhone.value)) return alert('Phone must be 10 digits!');
  if (regPassword.value !== repeatPassword.value) return alert('Passwords do not match!');
  if (!/^\d{6}$/.test(regPassword.value)) return alert('Password must be 6 digits!');
  alert('Registration success! (simulated)');
};
</script>

<style scoped>
.phone-frame { width: 375px; height: 700px; background: #e6f2ff; border: 8px solid #999; border-radius: 30px; box-shadow: 0 0 15px rgba(0,0,0,0.3); overflow: hidden; margin: 20px auto; }
.container { padding: 20px; overflow-y: auto; height: 100%; }
h2 { text-align: center; color: #333; }
.form-group { margin-bottom: 15px; }
input[type="text"], input[type="password"] { width: 100%; padding: 10px; margin-top: 5px; border: 1px solid #aaa; border-radius: 5px; }
.toggle-password { position: relative; }
.toggle-password i { position: absolute; right: 10px; top: 38px; cursor: pointer; }
button { width: 100%; padding: 12px; background-color: #4da6ff; color: white; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; }
button:hover { background-color: #2e8be6; }
.toggle-link { text-align: center; margin-top: 10px; color: #007bff; cursor: pointer; }
.checkbox-group { display: flex; align-items: center; margin-top: 10px; }
.checkbox-group input { margin-right: 5px; }
.referral-note { background: #fffae6; padding: 8px; margin-top: 10px; border: 1px dashed #ffa500; font-size: 12px; color: #333; border-radius: 5px; }
</style>
