<script setup>
import { onMounted, ref } from "vue"
import ProductCart from "./components/ProductCart.vue"
import { useCartStore } from "@/stores/cart"

const cartStore = useCartStore()
const { pending, products } = cartStore
</script>

<template>
  <div class="flex flex-col flex-wrap items-start w-full" v-if="!pending">
    <h1 class="font-bold text-2xl mr-auto mb-3">Корзина</h1>
    <ProductCart class="w-1/4" v-for="product in products" :key="product.id" :item="product" />
  </div>
  <div class="self-center" v-else>
    <ProgressSpinner />
  </div>
</template>
