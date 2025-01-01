<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const addFavorites = (item) => localStorage.setItem("favorites", JSON.stringify(item))
const addCart = (item) => localStorage.setItem("cart", JSON.stringify(item))
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
            @click.prevent="addFavorites(item)"
            class="cursor-pointer"
            type="heart"
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
