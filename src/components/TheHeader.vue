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
        <router-link class="relative h-10 w-10 flex items-end" to="/favorite">
          <span
            v-if="favoriteCount > 0"
            class="flex items-center justify-center rounded-full h-6 w-6 absolute top-1 right-0 text-[11px] text-[#262626] bg-white"
          >
            {{ favoriteCount }}
          </span>
          <vue-feather class="cursor-pointer" type="heart"></vue-feather
        ></router-link>
        <router-link class="relative h-10 w-10 flex items-end" to="/cart"
          ><vue-feather class="cursor-pointer" type="shopping-cart"></vue-feather
        ></router-link>
      </div>
    </div>
  </header>
</template>
