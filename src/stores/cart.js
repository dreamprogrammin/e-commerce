import { computed, ref } from "vue"
import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", () => {
  const products = ref([])
  const pending = ref(true)
  const counter = computed(() => {
    let total = 0
    products.value.map((el) => {
      total = total + el?.quantity
    })
    return total
  })

  const getDataCart = () => {
    setTimeout(() => {
      if (localStorage.getItem("cart")) {
        products.value = JSON.parse(localStorage.getItem("cart"))
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
      console.log(products.value[index])
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

  const addQty = (index) => {
    if (products.value[index]?.quantity !== 1) {
      products.value[index].quantity++
    }
  }

  const removeQty = (index) => {
    if (products.value[index]?.quantity !== 100) {
      products.value[index].quantity--
    }
  }

  return { products, getDataCart, counter, pending, removeCart, addQty, removeQty, addCart }
})
