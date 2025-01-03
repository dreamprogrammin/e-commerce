<script setup>
import { computed } from "vue"
import { useFavoritesStore } from "@/stores/favorites"

const favoriteStore = useFavoritesStore()

const favoriteCount = computed(() => favoriteStore.counter)
</script>

<template>
  <header class="flex justify-center items-center bg-[#252525] py-2 px-4">
    <div class="container flex justify-between items-center w-full">
      <router-link to="/">
        <img class="max-w-16 w-full" src="@/assets/icon/header-logo.svg" alt="logo" />
      </router-link>

      <div class="flex items-center gap-3">
        <router-link to="/favorite">
          {{ favoriteCount }}
          <vue-feather class="cursor-pointer" type="heart"></vue-feather
        ></router-link>
        <router-link to="/cart"
          ><vue-feather class="cursor-pointer" type="shopping-cart"></vue-feather
        ></router-link>
      </div>
    </div>
  </header>
</template>
