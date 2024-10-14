<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { User } from '@/models/UserModel'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

function logout() {
  authStore.logout()
}

const usersKey = 'vue-3-jwt-refresh-token-users'
const users = ref<User[]>([])

onMounted(() => {
  // Cargar usuarios desde localStorage
  const storedUsers = JSON.parse(localStorage.getItem(usersKey) || '[]')
  users.value = storedUsers // Asignar los usuarios al ref
})
</script>

<template>
  <div class="wrapper">
    <div class="welcome">
      <h2>Bienvenido: {{ authStore.auth.data?.firstName }}</h2>
    </div>
    <div class="user-data">
      <p>Nombre: {{ authStore.auth.data?.firstName }} {{ authStore.auth.data?.lastName }}</p>
      <p v-if="authStore.auth.data?.isAdmin">Rol: Administrador</p>
      <p v-else>Rol: Usuario Comun</p>
    </div>
    <div>
      <div>
        <ul class="users-list" v-if="users.length > 0">
          <li v-for="user in users" :key="user.id">{{ user.firstName }} {{ user.lastName }}</li>
        </ul>
        <button v-if="authStore.auth.data?.isAdmin" class="add-user">+</button>
        <p v-else></p>
      </div>
    </div>
    <button @click="logout">Logout</button>
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

.wrapper div {
  padding: 5px;
  border-bottom: 1px solid;
}

.wrapper h2 {
  font-size: 25px;
}
.wrapper h1 {
  font-size: 50px;
  justify-self: center;
  align-self: center;
}

.wrapper .add-user {
  display: flex;
  width: 20px;
  height: 30px;
  font-size: xx-large;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  border: transparent;
}

.wrapper .add-user:hover {
  color: dimgray;
}

.users-list {
  list-style-type: none;
}
</style>
