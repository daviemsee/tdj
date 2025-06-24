<template>
  <div class="phone-frame">
    <div class="content-area">
      <div class="top-banner">
        <div class="logo">Dentsu</div>
      </div>
      <div class="hero-image">[Group Image Placeholder]</div>

      <div class="section-title">Main Actions</div>
      <div class="grid-actions">
        <div class="action-btn" @click="goDeposit">Deposit</div>
        <div class="action-btn" @click="goWithdraw">Withdraw</div>
        <div class="action-btn">Income</div>
      </div>

      <div class="section-title">Information</div>
      <div class="grid-actions">
        <div class="action-btn">News</div>
        <div class="action-btn">About Us</div>
        <div class="action-btn">Cash Gift</div>
      </div>

      <div class="grid-actions">
        <div class="action-btn">Lucky Wheel</div>
        <div class="action-btn">Invite</div>
        <div class="action-btn">Manual</div>
      </div>

      <div class="section-title">Packages</div>
      <div class="package-row intern" @click="goToTask('Intern')">
        <div>Intern Package</div>
        <div>3 days, 3 tasks/day<br>50 per task<br>Total: 150 daily, 450 total</div>
      </div>
      <div class="package-row silver" @click="goToTask('Silver')">
        <div>Silver Package</div>
        <div>365 days, 4 tasks/day<br>25 per task<br>KES 3000 Package<br>Total: 100 daily</div>
      </div>
      <div class="package-row gold" @click="goToTask('Gold')">
        <div>Gold Package</div>
        <div>365 days, 5 tasks/day<br>60 per task<br>KES 8300 Package</div>
      </div>
      <div class="package-row diamond" @click="goToTask('Diamond')">
        <div>Diamond Package</div>
        <div>365 days, 10 tasks/day<br>100 per task<br>KES 25000 Package</div>
      </div>
      <div class="package-row platinum" @click="comingSoon">
        <div>Platinum Package</div>
        <div>365 days, 15 tasks/day<br>170 per task<br>KES 65000 Package</div>
      </div>
      <div class="package-row elite" @click="comingSoon">
        <div>Elite Package</div>
        <div>365 days, 20 tasks/day<br>300 per task<br>KES 170000 Package</div>
      </div>
      <div class="package-row master" @click="comingSoon">
        <div>Master Package</div>
        <div>365 days, 25 tasks/day<br>500 per task<br>KES 370000 Package</div>
      </div>

      <div class="membership">Membership Level: <span style="color: gold;">Intern</span></div>
    </div>

    <div class="bottom-nav">
      <div class="nav-item" @click="goHome">Home</div>
      <div class="nav-item">Wealth</div>
      <div class="nav-item">Team</div>
      <div class="nav-item">Task</div>
      <div class="nav-item" @click="goMine">Mine</div> <!-- ✅ Fixed -->
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToTask(packageName) {
  if(packageName === 'Intern') {
    router.push('/intern');
  } else {
    alert(`${packageName} package is not yet available.`);
  }
}

function comingSoon() {
  alert("Opening soon, stay put.");
}

function goHome() {
  router.push('/dashboard');
}

function goWithdraw() {
  router.push('/withdraw');
}

function goDeposit() {
  router.push('/deposit');
}

function goMine() {        // ✅ Added function for Mine button
  router.push('/mine');
}
</script>

<style scoped>
/* Your existing style stays unchanged */
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
.top-banner {
  background: #fff;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}
.content-area {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}
.grid-actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
}
.action-btn {
  background: #e5f8ff;
  padding: 15px 0;
  border-radius: 50%;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  cursor: pointer;
}
.section-title {
  text-align: center;
  font-weight: bold;
  margin: 15px 0 5px;
}
.package-row {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  margin-bottom: 10px;
  font-size: 12px;
  cursor: pointer;
}
.intern { background: #add8e6; }
.silver { background: #90ee90; }
.gold { background: #d3d3d3; }
.diamond { background: #b0e0e6; }
.platinum { background: #dda0dd; }
.elite { background: #ffffff; }
.master { background: #fffacd; }
.membership {
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
}
.bottom-nav {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ccc;
}
.nav-item {
  padding: 10px 0;
  flex: 1;
  text-align: center;
  cursor: pointer;
}
</style>
