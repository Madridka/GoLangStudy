<script setup lang="ts">
import { useUserInfoStore } from '@/stores/userInfo/userInfo'
import { onMounted } from 'vue'
import { useValueStore } from '@/stores/value/value'

import MenuDock from '@/components/MenuDock.vue'

const userInfoStore = useUserInfoStore()
const valueStore = useValueStore()

onMounted(() => {
  userInfoStore.getUsers()
  valueStore.getValue()
  valueStore.getMobile()
})
</script>

<template>
  <div class="bg-gray-200 h-screen p-4">
    <!-- <router-view /> -->
    <!-- <div class="bg-red-500">
      {{ userInfoStore.users }}
      <div v-for="user in userInfoStore.users">
        {{ user.userId }}
        {{ user.id }}
        {{ user.title }}
        {{ user.completed }}
      </div>
    </div> -->

    <div class="bg-green-500">
      {{ 'value: ' + valueStore.valueFromServer }}
      <!-- {{ 'mobile: ' + valueStore.mobileString }}  -->
      {{ 'data: ' + valueStore.mobileData?.compensations }}
    </div>

    <MenuDock />
  </div>
</template>

<style scoped></style>
