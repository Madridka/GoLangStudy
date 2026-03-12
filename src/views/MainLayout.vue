<script setup lang="ts">
import { useUserInfoStore } from '@/stores/userInfo/userInfo'
import { onMounted } from 'vue'

import MenuDock from '@/components/MenuDock.vue'

const userInfoStore = useUserInfoStore()

onMounted(() => {
  userInfoStore.getUsers()
})
</script>

<template>
  <div class="bg-gray-200 h-screen p-4">
    <!-- <router-view /> -->
    {{ userInfoStore.users }}
    <div v-for="user in userInfoStore.users">
      {{ user.userId }}
      {{ user.id }}
      {{ user.title }}
      {{ user.completed }}
    </div>
    {{}}
    <MenuDock />
  </div>
</template>

<style scoped></style>
