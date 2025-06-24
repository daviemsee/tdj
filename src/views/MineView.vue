<template>
  <div class="phone-frame">
    <div class="mine-page">
      <!-- Profile Section -->
      <div class="profile-section">
        <img class="avatar" src="https://via.placeholder.com/80" alt="User Avatar" />
        <div class="user-id">{{ userData.userId }}</div>
        <div class="credit-info">
          <span>Credit Score: <b>{{ userData.creditScore }}</b></span>
          <span>{{ userData.level }}</span>
        </div>
        <div class="user-level">{{ userData.title }}</div>
      </div>

      <!-- Wallet Balance -->
      <div class="wallet-section">
        <div>Wallet Balance (KES): <b>{{ userData.walletBalance.toFixed(2) }}</b></div>
      </div>

      <!-- Package Info -->
      <div class="package-info">
        <span>{{ userData.level }}</span>
        <span>Effective Date: {{ userData.effectiveDate }}</span>
      </div>

      <!-- Options List -->
      <div class="options-list">
        <div
          v-for="item in menuItems"
          :key="item.text"
          class="option-item"
          @click="handleOption(item.text)"
        >
          <span>{{ item.text }}</span>
          <span>></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getDoc, doc } from 'firebase/firestore'
import { database as db } from '@/firebase'
import { getAuth } from 'firebase/auth'

const router = useRouter()
const auth = getAuth()
const currentUser = auth.currentUser

const userData = reactive({
  userId: '',
  creditScore: 0,
  level: '',
  title: '',
  effectiveDate: '',
  walletBalance: 0
})

const fetchUserData = async () => {
  if (!currentUser) {
    router.push('/')
    return
  }

  const uid = currentUser.uid
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    const data = userSnap.data()
    userData.userId = data.userId
    userData.creditScore = data.creditScore || 0
    userData.level = data.level
    userData.title = data.userTitle || ''
    userData.effectiveDate = data.effectiveDate || ''
    userData.walletBalance = data.walletBalance || 0
  } else {
    console.log('No user data found.')
  }
}

const handleOption = async (text: string) => {
  if (text === 'Log Out') {
    await auth.signOut()
    router.push('/')
  } else {
    alert(`${text} clicked`)
  }
}

const menuItems = [
  { text: 'Settings' },
  { text: 'Financial Records' },
  { text: 'Transaction Records' },
  { text: 'Download App' },
  { text: 'Lucky Wheel' },
  { text: 'Message' },
  { text: 'Invite' },
  { text: 'Language' },
  { text: 'Log Out' }
]

onMounted(() => {
  fetchUserData()
})
</script>

<style scoped>
.phone-frame {
  width: 375px;
  height: 667px;
  background: #f4f8ff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 2px solid #333;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
.mine-page {
  padding: 10px;
  flex: 1;
  overflow-y: auto;
  background: #f5faff;
}
.profile-section {
  background: linear-gradient(to right, #a3d8f4, #e1f5fe);
  padding: 15px;
  text-align: center;
  border-radius: 10px;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.user-id {
  margin-top: 10px;
  font-weight: bold;
}
.credit-info {
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
}
.user-level {
  margin-top: 5px;
  font-size: 12px;
  color: #333;
}
.wallet-section {
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0;
  font-weight: bold;
}
.package-info {
  background: #e8f4fd;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.options-list {
  margin-top: 15px;
}
.option-item {
  background: #fff;
  padding: 12px 10px;
  margin-bottom: 8px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
</style>
