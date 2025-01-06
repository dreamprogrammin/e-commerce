import { computed, ref } from "vue"
import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", () => {
  const products = ref([])
  const pending = ref(true)
  const counter = computed(() => {
    let total = 0

    products.value.map((el) => el.quantity = total)

    return total
  })

  const getDataCart = () => {
    setTimeout(() => {
      if (localStorage.getItem("favorites")) {
        products.value = JSON.parse(localStorage.getItem("favorites"))
      } else {
        products.value = []
      }
      pending.value = false
    }, 1500)
  }

  const addCart = (item) => {
    if (products.value.find((el) => el.id === item.id)) {
      const index = products.value.indexOf(item)

      products.value[index].quantity++
    } else {
      item.quantity = 1

      products.value.push(item)
    }
    localStorage.setItem("favorites", JSON.stringify(products.value))
  }

  const removeCart = (item) => {
      const index = products.value.indexOf(item)
      
      products.value.splice(index, 1)

      localStorage.setItem("favorites", JSON.stringify(products.value))
  }

  return { products, getDataCart, removeCart, addCart, counter, pending }
})
