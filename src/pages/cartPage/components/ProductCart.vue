<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
import { useCartStore } from "@/stores/cart"

const cartStore = useCartStore()
const { addQty, removeQty } = cartStore
</script>

<template>
  <div class="flex">
    <img :src="item.image" alt="photo" />

    <div class="flex flex-col gap-4">
      <span>{{ item.title }}</span>

      <span>{{ (item.price * item.quantity).toFixed(0) }}</span>
    </div>
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
