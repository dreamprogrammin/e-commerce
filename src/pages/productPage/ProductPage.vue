<script setup>
import { onMounted, ref } from "vue"
import { getProduct } from "@/api/products.js"

import { useRoute } from "vue-router"

const product = ref([])
const pending = ref(true)
const route = useRoute()

const addFavorites = (product) => localStorage.setItem("favorites", JSON.stringify(product))
const addCart = (product) => localStorage.setItem("cart", JSON.stringify(product))

onMounted(async () => {
  pending.value = true
  try {
    product.value = await getProduct(route.params.id)
    console.log(product.value)
  } catch (error) {
    console.log(error)
  } finally {
    pending.value = false
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
            @click.prevent="addFavorites(product)"
            class="cursor-pointer"
            type="heart"
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
