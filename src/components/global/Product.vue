<script setup>
import { defineProps } from "vue"
import { useFavoritesStore } from "@/stores/favorites.js"

// Определение props для компонента
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const { toggleFavorites } = useFavoritesStore()

// Функция для добавления товара в корзину
const addCart = (item) => {
  // Получаем текущую корзину из localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  // Добавляем новый товар в корзину
  cart.push(item)
  // Обновляем корзину в localStorage
  localStorage.setItem("cart", JSON.stringify(cart))
}

// Функция для изменения статуса избранного
const changeValue = (item) => {
  if (item?.isFavorite) {
    item.isFavorite = false
  } else {
    item.isFavorite = true
  }
  toggleFavorites(item)
}
</script>

<template>
  <router-link :to="`/product/${item.id}`">
    <div class="flex flex-col justify-center items-start px-2 mb-4">
      <div class="w-full h-56 bg-white">
        <img
          class="w-full h-full object-contain rounded-lg mx-auto"
          :src="item.image"
          :alt="item.category"
        />
      </div>

      <div class="flex justify-center w-full flex-col items-start">
        <span class="font-semibold text-xl">{{ item.title }}</span>
        <span>{{ item.price }} $</span>

        <div class="flex justify-end w-full">
          <vue-feather
            @click.prevent="changeValue(item)"
            class="cursor-pointer"
            type="heart"
            :fill="item?.isFavorite ? 'white' : ''"
          ></vue-feather>
          <vue-feather
            @click.prevent="addCart(item)"
            class="cursor-pointer"
            type="shopping-cart"
          ></vue-feather>
        </div>
      </div>
    </div>
  </router-link>
</template>
