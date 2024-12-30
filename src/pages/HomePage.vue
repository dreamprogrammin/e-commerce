<script setup>
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
