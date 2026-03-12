<script setup lang="ts">
import { Card } from 'primevue'
import { Avatar } from 'primevue'

const myMoneyItems = [
  {
    label: 'Tinkoff',
    money: '12.900',
    icon: 'pi pi-credit-card',
  },
  {
    label: 'Sber',
    money: '5.700',
    icon: 'pi pi-credit-card',
  },
  {
    label: 'Save',
    money: '80.000',
    icon: 'pi pi-building-columns',
  },
  {
    label: 'Invest',
    money: '129.000',
    icon: 'pi pi-wallet',
  },
  {
    label: 'Crypto',
    money: '62.900',
    icon: 'pi pi-bitcoin',
  },
]
</script>

<template>
  <Card
    class="w-full flex flex-row overflow-auto hover:shadow-xl"
    :pt="{
      content: {
        class: 'flex justify-start p-0',
      },
      body: {
        class: 'flex justify-start p-0',
      },
    }"
  >
    <template #content>
      <div
        v-for="item in myMoneyItems"
        :key="item.label"
        class="flex flex-col justify-center w-20 items-center mx-4"
      >
        {{ item.label }}
        <Avatar :icon="item.icon" size="xlarge" shape="circle" />
        {{ item.money }}
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
