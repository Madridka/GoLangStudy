<script setup lang="ts">
import Button from 'primevue/button'

const hello = (): void => {
  console.log('settings')
}
</script>

<template>
  SETTINGS
  <Button label="hello" @click="hello"> </Button>
</template>

<style scoped></style>
