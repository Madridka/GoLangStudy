<script setup lang="ts">
import Button from 'primevue/button'

const hello = (): void => {
  console.log('hello')
}
</script>

<template>
  TEST CARD
  <Button label="hello" @click="hello"> </Button>

  <Button label="Secondary" severity="secondary" />
</template>

<style scoped></style>
