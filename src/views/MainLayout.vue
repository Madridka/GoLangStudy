<script setup lang="ts">
import MenuDock from "@/components/MenuDock.vue";
</script>

<template>
  <div class="bg-gray-200 h-screen p-4">
    <router-view />
    <MenuDock />
  </div>
</template>

<style scoped></style>
