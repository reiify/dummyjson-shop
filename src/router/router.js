import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import InfoPage from "@/pages/InfoPage.vue";
import CartPage from "@/pages/CartPage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";
import ProductPage from "@/pages/ProductPage.vue";

const routes = [
  {
    path: "/",
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
