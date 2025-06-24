<template>
  <div class="phone-frame">
    <h2>Deposit</h2>
    <p class="balance">Account Balance (KES)</p>
    <p class="amount">KES {{ balance }}</p>

    <div class="input-group">
      <label>Deposit Amount (KES):</label>
      <input type="number" v-model="depositAmount" placeholder="Enter amount" />
    </div>

    <div class="preset-buttons">
      <button v-for="preset in presets" :key="preset" @click="depositAmount = preset">
        {{ preset }}
      </button>
    </div>

    <div class="payment-methods">
      <div class="method" v-for="method in paymentMethods" :key="method.name">
        <div class="icon">💳</div>
        <div class="details">
          <p>{{ method.name }}</p>
          <p class="sub">{{ method.sub }}</p>
        </div>
      </div>
    </div>

    <p class="notice">
      The deposit will be automatically credited within 1-3 minutes after recharging.
      If not received, please contact support.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth, database } from '@/firebase'
import { ref as dbRef, get } from 'firebase/database'

const balance = ref(0)
const depositAmount = ref('')
const presets = [100, 500, 2900, 8000, 10000, 23000, 65000, 100000]
const paymentMethods = [
  { name: 'jypay', sub: 'jypay' },
  { name: 'ycpay', sub: 'ycpay' },
  { name: 'inpay', sub: 'inpay' },
  { name: 'wkpay', sub: 'wkpay' }
]

onMounted(async () => {
  const userId = auth.currentUser?.uid
  if (userId) {
    const snapshot = await get(dbRef(database, 'users/' + userId + '/balance'))
    if (snapshot.exists()) {
      balance.value = snapshot.val()
    }
  }
})
</script>

<style scoped>
.phone-frame {
  width: 375px;
  height: 700px;
  background: #e6f2ff;
  border: 8px solid #999;
  border-radius: 30px;
  padding: 20px;
  margin: 20px auto;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
  overflow-y: auto;
}
h2 { text-align: center; color: #333; }
.balance, .amount {
  text-align: center;
  margin: 5px 0;
}
.amount {
  color: #2196f3;
  font-size: 24px;
  font-weight: bold;
}
.input-group { margin: 10px 0; }
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 5px;
}
.preset-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px 0;
}
.preset-buttons button {
  flex: 1 1 30%;
  padding: 8px;
  background: #d9ecff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.payment-methods {
  margin-top: 10px;
}
.method {
  display: flex;
  align-items: center;
  padding: 8px;
  background: #fff;
  margin: 5px 0;
  border-radius: 5px;
}
.icon {
  font-size: 24px;
  margin-right: 10px;
}
.sub {
  color: #666;
  font-size: 12px;
}
.notice {
  margin-top: 10px;
  font-size: 12px;
  color: #333;
}
</style>
