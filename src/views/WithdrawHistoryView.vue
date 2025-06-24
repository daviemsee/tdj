<template>
  <div class="phone-frame">
    <div class="top-banner">
      <span class="back-icon" @click="goBack">←</span>
      Withdrawal History
    </div>

    <div class="history-list" v-if="withdrawals.length">
      <div v-for="(withdrawal, index) in withdrawals" :key="index" class="history-item">
        <p><strong>Amount:</strong> KES {{ withdrawal.amount }}</p>
        <p><strong>Status:</strong> {{ withdrawal.status }}</p>
        <p><strong>Date:</strong> {{ formatDate(withdrawal.timestamp) }}</p>
        <p><strong>Time:</strong> {{ formatTime(withdrawal.timestamp) }}</p>
      </div>
    </div>
    <p v-else class="no-records">No withdrawals found.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ref as dbRef, onValue } from "firebase/database";
import { database, auth } from '@/firebase';

const router = useRouter()
const withdrawals = ref([])

const fetchWithdrawals = () => {
  const userId = auth.currentUser?.uid;
  if (!userId) return;

  const userWithdrawalsRef = dbRef(database, `withdrawals/${userId}`);
  onValue(userWithdrawalsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      withdrawals.value = Object.values(data);
    } else {
      withdrawals.value = [];
    }
  });
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};

const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString();
};

const goBack = () => {
  router.push('/withdraw');
};

onMounted(fetchWithdrawals);
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
.back-icon {
  position: absolute;
  left: 10px;
  top: 10px;
  cursor: pointer;
  font-size: 18px;
}
.history-list {
  padding: 20px;
  flex: 1;
  overflow-y: auto;
}
.history-item {
  background: #e0f7fa;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}
.no-records {
  text-align: center;
  margin-top: 30px;
  color: #777;
}
</style>
