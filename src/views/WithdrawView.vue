<template>
  <div class="phone-frame">
    <div class="top-banner">
      <span class="back-icon" @click="goBack">←</span>
      Withdraw Funds
      <span class="history-icon" @click="goToHistory">🕒</span>
    </div>

    <div class="content-area">
      <div class="amount-options">
        <button
          v-for="option in amounts"
          :key="option"
          :class="{ selected: selectedAmount === option }"
          @click="selectAmount(option)"
        >
          KES {{ option }}
        </button>
      </div>

      <div class="password-input">
        <label for="fundPassword">Transaction Password (6 digits):</label>
        <div class="password-wrapper">
          <input
            id="fundPassword"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            maxlength="6"
            inputmode="numeric"
            pattern="\d*"
            placeholder="Enter 6-digit password"
          />
          <span class="eye-icon" @click="togglePassword">👁️</span>
        </div>
      </div>

      <button class="submit-btn" @click="submitWithdrawal">Submit</button>

      <p v-if="showPopup" class="popup">{{ statusMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const amounts = [500, 1000, 2000, 5000, 10000, 20000, 50000, 100000]
const selectedAmount = ref(null)
const password = ref('')
const showPassword = ref(false)
const statusMessage = ref('')
const showPopup = ref(false)

const selectAmount = (amount) => {
  selectedAmount.value = amount
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const submitWithdrawal = () => {
  if (!selectedAmount.value) {
    statusMessage.value = 'Please select an amount.'
    showPopup.value = true
    setTimeout(() => showPopup.value = false, 2000)
    return
  }
  if (!/^\d{6}$/.test(password.value)) {
    statusMessage.value = 'Transaction password must be exactly 6 digits.'
    showPopup.value = true
    setTimeout(() => showPopup.value = false, 2000)
    return
  }

  const historyRecord = {
    amount: selectedAmount.value,
    status: 'Processing',
    date: new Date().toLocaleString()
  }

  const existingHistory = JSON.parse(localStorage.getItem('withdrawHistory') || '[]')
  existingHistory.push(historyRecord)
  localStorage.setItem('withdrawHistory', JSON.stringify(existingHistory))

  statusMessage.value = 'Withdrawal submitted!'
  showPopup.value = true
  setTimeout(() => {
    showPopup.value = false
    statusMessage.value = ''
  }, 2000)
}

const goToHistory = () => {
  router.push('/withdraw-history')
}

const goBack = () => {
  router.push('/dashboard')
}
</script>

<style scoped>
.phone-frame {
  width: 375px;
  height: 667px;
  background: #f4f8ff;
  border: 2px solid #333;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
}
.top-banner {
  background: #fff;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  position: relative;
}
.back-icon, .history-icon {
  position: absolute;
  top: 10px;
  font-size: 18px;
  cursor: pointer;
}
.back-icon { left: 10px; }
.history-icon { right: 10px; }
.content-area { flex: 1; padding: 20px; }
.amount-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.amount-options button {
  flex: 1 0 45%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: #ddd;
}
.amount-options button.selected {
  background: #4caf50;
  color: white;
}
.password-input { margin: 20px 0; }
.password-input label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
.password-wrapper {
  position: relative;
}
.password-wrapper input {
  width: 100%;
  padding: 10px;
}
.eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.submit-btn {
  width: 100%;
  padding: 12px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 8px;
}
.popup {
  color: green;
  margin-top: 10px;
  text-align: center;
}
</style>
