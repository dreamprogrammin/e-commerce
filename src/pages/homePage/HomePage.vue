<script setup>
import { onMounted, ref } from "vue"
import { getProducts } from "@/api/products.js"
import Product from "@/components/global/Product.vue"

const products = ref([])
const pending = ref(true)

const getData = async () => {
  pending.value = true
  try {
    const data = await getProducts()

    products.value = data
  } catch (error) {
    console.log(error)
  } finally {
    pending.value = false
  }
}

onMounted(async () => {
  await getData()
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
