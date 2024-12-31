<script setup>
import { onMounted } from 'vue'
import { getProduct, getProducts } from '@/api/products.js'

onMounted(async () => {
  try {
    const data = await getProducts()
    const product = await getProduct(1)

    console.log(data)
    console.log(product)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Запрос успешно отправлен')
  }
})
</script>

<template>
  <main>
    <h1 className="text-3xl font-bold underline">Домашняя стараница</h1>
    <vue-feather type="feather"></vue-feather>

    <router-link to="/cart">Корзина товара</router-link>
    <router-link to="/product/1">Продукт товара</router-link>
    <router-link to="/favorite">Избранное товара</router-link>
  </main>
</template>
