// stores/product.js
import { ref } from "vue"
import { defineStore } from "pinia"
import { getProduct } from "@/api/products.js"

export const useProductStore = defineStore("product", () => {
  const product = ref([])
  const pending = ref(true)

  const getData = async (id) => {
    pending.value = true
    try {
      product.value = await getProduct(id)
    } catch (error) {
      console.log(error)
    } finally {
      pending.value = false
    }
  }

  return { product, getData, pending }
})
