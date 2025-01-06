<template>
  <div class="flex min-h-60 w-full flex-col">
    <h1 class="mb-3 mr-auto text-[36px] font-bold">Каталог</h1>

    <ProgressSpinner v-if="pending" />

    <div v-else class="grid grid-flow-col auto-cols-max">
      <template v-if="products.length">
        <Product v-for="product in products" :key="product.id" :item="product" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useProductsStore } from "@/stores/products.js"
import Product from "@/components/global/Product.vue"

const productsStore = useProductsStore()
const { pending, products, getData } = productsStore

onMounted(async () => {
  await getData()

  if (localStorage.getItem("favorites")) {
    const items = JSON.parse(localStorage.getItem("favorites"))

    products.forEach((element) => {
      element.isFavorite = !!items.find((el) => el.id === element.id)
    })
  }
})
</script>

<style lang="scss" scoped></style>
