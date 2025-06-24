<template>
  <div class="phone-frame">
    <div class="top-banner">
      Admin Panel
    </div>
    <div class="content-area">
      <div v-if="pending.length">
        <div v-for="(item, index) in pending" :key="index" class="history-item">
          <p><strong>Amount:</strong> KES {{ item.amount }}</p>
          <p><strong>Status:</strong> {{ item.status }}</p>
          <p><strong>Date:</strong> {{ item.date }}</p>
          <button @click="updateStatus(index, 'Successful')">✅ Approve</button>
          <button @click="updateStatus(index, 'Rejected')">❌ Reject</button>
        </div>
      </div>
      <div v-else>
        <p>No pending withdrawals.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pending = ref([])

onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('withdrawHistory') || '[]')
  pending.value = stored.filter(item => item.status === 'Processing')
})

const updateStatus = (index, newStatus) => {
  const stored = JSON.parse(localStorage.getItem('withdrawHistory') || '[]')
  const pendingItem = pending.value[index]

  const matchIndex = stored.findIndex(item => 
    item.amount === pendingItem.amount &&
    item.status === 'Processing' &&
    item.date === pendingItem.date
  )

  if (matchIndex !== -1) {
    stored[matchIndex].status = newStatus
    localStorage.setItem('withdrawHistory', JSON.stringify(stored))
    pending.value.splice(index, 1)
  }
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
}
.content-area {
  flex: 1;
  padding: 20px;
}
.history-item {
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}
button {
  margin: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
