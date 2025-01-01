<script setup>
import { onMounted, ref } from "vue"
import Product from "@/components/global/Product.vue"

const products = ref([])
const pending = ref(true)

const getData = async () => {
  pending.value = true
  const data = localStorage.getItem("cart")
  if (data) {
    setTimeout(() => {
      products.value.push(JSON.parse(data))
    }, 1000)
  }
  pending.value = false
}
onMounted(async () => {
  await getData()
})
</script>

<template>
  <div class="flex flex-col flex-wrap items-start w-full" v-if="!pending">
    <h1 class="font-bold text-2xl mr-auto mb-3">Корзина</h1>
    <Product class="w-1/4" v-for="product in products" :key="product.id" :item="product" />
  </div>
  <div class="self-center" v-else>
    <ProgressSpinner />
  </div>
</template>
