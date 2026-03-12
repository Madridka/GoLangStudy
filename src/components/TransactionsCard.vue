<script setup lang="ts">
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'

const transactionsItems = [
  {
    label: 'еда',
    spend: '12.900',
    icon: 'pi pi-credit-card',
  },
  {
    label: 'ежемесячные',
    spend: '12.900',
    icon: 'pi pi-credit-card',
  },
  {
    label: 'бухло',
    spend: '12.900',
    icon: 'pi pi-credit-card',
  },
  {
    label: 'машина',
    spend: '12.900',
    icon: 'pi pi-credit-card',
  },
  {
    label: 'собака',
    spend: '12.900',
    icon: 'pi pi-credit-card',
  },
  {
    label: 'кредит',
    spend: '12.900',
    icon: 'pi pi-credit-card',
  },
]
</script>

<template>
  <Card
    class="w-full flex flex-row hover:shadow-xl"
    :pt="{
      body: {
        class: 'w-full flex p-0',
      },
    }"
  >
    <template #content>
      <Carousel :value="transactionsItems" :numVisible="4" :numScroll="1" circular>
        <template #item="slotProps">
          <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <i :class="slotProps.data.icon"></i>
            <div>
              {{ slotProps.data.label }}
            </div>
            <div>
              {{ slotProps.data.spend }}
            </div>
          </div>
        </template>
      </Carousel>
    </template>
  </Card>
</template>

<style scoped></style>
