<template>
  <div class="flex min-h-60 w-full flex-col">
    <h1 class="mb-3 mr-auto text-[36px] font-bold">Каталог</h1>

    <ProgressSpinner v-if="pending" />

    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <template v-if="products.length">
        <Product v-for="product in products" :key="product.id" :item="product" />
      </template>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue"
import { useProductsStore } from "@/stores/products.js"
import Product from "@/components/global/Product.vue"

export default {
  setup() {
    // data
    const productsStore = useProductsStore()

    // computed
    const products = computed(() => {
      return productsStore.products
    })

    const pending = computed(() => {
      return productsStore.pending
    })

    // methods
    const { getData } = productsStore

    // hooks
    onMounted(async () => {
      await getData()

      if (localStorage.getItem("favorites")) {
        const items = JSON.parse(localStorage.getItem("favorites"))

        products.value.forEach((element) => {
          element.isFavorite = !!items.find((el) => el.id === element.id)
        })
      }
    })

    return {
      products,
      pending,
    }
  },

  components: { Product },
}
</script>

<style lang="scss" scoped></style>
