<template>
  <div class="phone-frame">
    <div class="top-banner">
      <span class="back-icon" @click="goBack">←</span>
      Withdrawal History
    </div>

    <div class="content-area">
      <div v-if="history.length">
        <div v-for="(item, index) in history" :key="index" class="history-item">
          <p><strong>Amount:</strong> KES {{ item.amount }}</p>
          <p><strong>Status:</strong> {{ item.status }}</p>
          <p><strong>Date:</strong> {{ item.date }}</p>
        </div>
      </div>
      <div v-else>
        <p>No withdrawals yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const history = ref([])

onMounted(() => {
  const storedHistory = JSON.parse(localStorage.getItem('withdrawHistory') || '[]')
  history.value = storedHistory
})

const goBack = () => {
  router.push('/withdraw')
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
.back-icon {
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 18px;
  cursor: pointer;
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
</style>
