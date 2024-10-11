<script setup lang="ts">
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()
const userData = userStore.userData
</script>

<template>
  <div class="wrapper">
    <h2>Bienvenido:</h2>
    <h1>{{ userData.user }}</h1>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 400px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 30px 40px;
  border-radius: 15px;
}

.wrapper h2 {
  font-size: 25px;
}
.wrapper h1 {
  font-size: 50px;
  justify-self: center;
  align-self: center;
}
</style>
