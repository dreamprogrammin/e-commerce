<script setup>
import { onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import { useFavoritesStore } from "@/stores/favorites.js"
import { useProductStore } from "@/stores/product.js"

const route = useRoute()

const productStore = useProductStore()
const { pending, product, getData } = productStore

const favoritesStore = useFavoritesStore()
const { toggleFavorites } = favoritesStore

const changeValue = (item) => {
  if (item?.isFavorite) {
    item.isFavorite = false
  }
  toggleFavorites(item)
}
const addCart = (product) => localStorage.setItem("cart", JSON.stringify(product))

onMounted(async () => {
  await getData(route.params.id)

  if (localStorage.getItem("favorites")) {
    const items = JSON.parse(localStorage.getItem("favorites"))
    watch(product, (newValue) => {
      if (newValue) {
        if (items.find((el) => el.id === newValue.id)) {
          newValue.isFavorite = true
          console.log(newValue)
        }
      }
    })
  }
})
</script>

<template>
  <div class="flex flex-col justify-between gap-3 items-start" v-if="!pending">
    <h1 class="font-bold text-2xl mr-auto mb-3">{{ product.title }}</h1>

    <div class="flex justify-between gap-3 items-start">
      <div class="w-1/2 h-80 bg-white">
        <img class="w-full h-full object-contain" :src="product.image" :alt="product.category" />
      </div>

      <div class="w-1/2 flex flex-col justify-start">
        <span class="mb-5">
          {{ product.description }}
        </span>
        <div class="">
          <span class="text-2xl flex items-center gap-4"
            >{{ product.rating.rate }}
            <vue-feather type="star" stroke="yellow" fill="yellow "></vue-feather
          ></span>
          <span class="text-2xl">{{ product.price }} $</span>
        </div>

        <div class="flex justify-end">
          <vue-feather
            @click.prevent="changeValue(product)"
            class="cursor-pointer"
            type="heart"
            :fill="product?.isFavorite ? 'white' : ''"
          ></vue-feather>
          <vue-feather
            @click.prevent="addCart(product)"
            class="cursor-pointer"
            type="shopping-cart"
          ></vue-feather>
        </div>
      </div>
    </div>
  </div>
  <div class="self-center" v-else>
    <ProgressSpinner />
  </div>
</template>
