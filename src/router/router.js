import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import InfoPage from "@/pages/InfoPage.vue";
import CartPage from "@/pages/CartPage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import SearchPage from "@/pages/SearchPage.vue";

const routes = [
  {
    path: "/home",
    redirect: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
  {
    path: "/info",
    name: "infromation",
    component: InfoPage,
  },
  {
    path: "/product/:id",
    name: "productsPage",
    component: ProductPage,
  },
  {
    path: "/search",
    name: "searchPage",
    component: SearchPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
});

export default router;
