import { computed, ref } from "vue"
import { defineStore } from "pinia"

export const useFavoritesStore = defineStore("favorite", () => {
  const products = ref([])
  const pending = ref(true)
  const counter = computed(() => {
    return products.value.length
  })

  console.log(counter.value)

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
    if (products.value.find((el) => el.id === item.id)) {
      const index = products.value.indexOf(item)

      products.value.splice(index, 1)
    } else {
      item.isFavorite = true

      products.value.push(item)
    }
    localStorage.setItem("favorites", JSON.stringify(products.value))
  }

  return { products, getData, toggleFavorites, counter, pending }
})
