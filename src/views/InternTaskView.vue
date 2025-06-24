<template>
  <div class="phone-frame">
    <div class="top-banner">Intern Package Tasks</div>
    <div class="content-area">
      <div class="earnings-box">Total Earned: KES {{ totalEarnings }}</div>
      <div 
        v-for="(task, index) in tasks" 
        :key="index" 
        :class="['task', { locked: !task.unlocked, completed: task.completed }]"
        @click="startTask(index)"
      >
        {{ task.title }}
      </div>
    </div>
    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/dashboard')">Home</div>
      <div class="nav-item">Wealth</div>
      <div class="nav-item">Team</div>
      <div class="nav-item">Task</div>
      <div class="nav-item">Mine</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tasks = ref([
  { title: 'Task 1 - Install', unlocked: true, completed: false },
  { title: 'Task 2 - Install', unlocked: false, completed: false },
  { title: 'Task 3 - Install', unlocked: false, completed: false }
]);

const totalEarnings = ref(0);
const taskReward = 50;

function startTask(index) {
  if (!tasks.value[index].unlocked || tasks.value[index].completed) return;

  tasks.value[index].title = `Task ${index + 1} - Installing...`;

  setTimeout(() => {
    tasks.value[index].title = `Task ${index + 1} - Completed!`;
    tasks.value[index].completed = true;
    totalEarnings.value += taskReward;

    if (index + 1 < tasks.value.length) {
      tasks.value[index + 1].unlocked = true;
    } else {
      alert(`All Intern tasks completed! Total Earned: KES ${totalEarnings.value}`);
    }
  }, 5000);
}
</script>

<style scoped>
.phone-frame {
  width: 375px;
  height: 667px;
  background: #f4f8ff;
  border-left: 2px solid #333;
  border-right: 2px solid #333;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
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
  overflow-y: auto;
  padding: 10px;
}
.task {
  background: #add8e6;
  padding: 15px;
  border-radius: 10px;
  margin: 10px 0;
  text-align: center;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  cursor: pointer;
}
.task.completed {
  background: #90ee90;
}
.task.locked {
  background: #ddd;
  pointer-events: none;
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
  text-align: center;
  flex: 1;
  font-size: 12px;
  cursor: pointer;
}
.earnings-box {
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}
</style>
