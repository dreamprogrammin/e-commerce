<script setup>
import { onMounted } from "vue"
import { useFavoritesStore } from "@/stores/favorites.js"

const favoriteStore = useFavoritesStore()

const { pending, products, getData } = favoriteStore

onMounted(async () => {
  await getData()
})
</script>

<template>
  <div class="flex flex-col flex-wrap items-start w-full" v-if="!pending">
    <h1 class="font-bold text-2xl mr-auto mb-3">Избранные товары</h1>
    <div class="flex">
      <Product class="w-1/4" v-for="product in products" :key="product.id" :item="product" />
    </div>
  </div>
  <div class="self-center" v-else>
    <ProgressSpinner />
  </div>
</template>
