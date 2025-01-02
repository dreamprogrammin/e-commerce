// stores/product.js
import { ref } from "vue"
import { defineStore } from "pinia"
import { getProduct } from "@/api/products"

export const useProductStore = defineStore("product", () => {
  const product = ref(null) // Инициализация product как null
  const pending = ref(true)

  const getData = async (id) => {
    pending.value = true
    try {
      const data = await getProduct(id)
      product.value = data
    } catch (error) {
      console.log(error)
    } finally {
      pending.value = false
    }
  }

  return { product, getData, pending }
})
