<script setup>
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"
import { RouterView } from "vue-router"
</script>

<template>
  <TheHeader class="sticky top-0" />
  <main class="grow h-full min-h-full py-2 px-4 my-4 flex flex-col justify-start items-start">
    <RouterView />
  </main>
  <TheFooter />
</template>
