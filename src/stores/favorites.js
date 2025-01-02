import { ref } from "vue"
import { defineStore } from "pinia"

export const useFavoritesStore = defineStore("favorite", () => {
  const products = ref([])
  const pending = ref(true)

  const getData = () => {
    setTimeout(() => {
      if (localStorage.getItem("favorites")) {
        products.value = JSON.parse(localStorage.getItem("favorites"))
      } else {
        products.value = []
      }
      pending.value = false
    }, 1500)
  }

  const toggleFavorites = (item) => {
    if (products.value.findIndex((el) => el.id === item.id)) {
      const index = products.value.indexOf(item.id)

      products.value.splice(index, 1)
    } else {
      item.isFavorite = true

      products.value.push(item)
    }
    localStorage.setItem("favorites", JSON.stringify(products.value))
  }

  return { products, getData, toggleFavorites, pending }
})
