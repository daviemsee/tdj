<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc; /* consistent with your original dashboard background */
}

* {
  box-sizing: border-box;
}
</style>
