<script setup>
import { onMounted, watch } from "vue"
import Product from "@/components/global/Product.vue"
import { useProductsStore } from "@/stores/products"

const { pending, products, getData } = useProductsStore()
watch(products, (newValue) => {
  console.log("ok", newValue)
})
onMounted(async () => {
  await getData()

  setTimeout(() => {
    console.log(products)
  }, 500)
})
</script>

<template>
  <h1 class="font-bold text-2xl mr-auto mb-3">Каталог</h1>
  <div class="flex flex-row flex-wrap items-start" v-if="!pending">
    <Product
      class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
      v-for="product in products"
      :key="product.id"
      :item="product"
    />
  </div>
  <div class="self-center" v-else>
    <ProgressSpinner />
  </div>
</template>
