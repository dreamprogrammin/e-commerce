export default [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/homePage/HomePage.vue"),
  },
  {
    path: "/cart",
    name: "CartPage",
    component: () => import("@/pages/cartPage/CartPage.vue"),
  },
  {
    path: "/favorite",
    name: "FavoritePage",
    component: () => import("@/pages/favoritePage/FavoritePage.vue"),
  },
  {
    path: "/product/:id",
    name: "ProductPage",
    component: () => import("@/pages/productPage/ProductPage.vue"),
  },
]
