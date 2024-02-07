import { defineStore } from "pinia";
import axios from "axios";
import { ref, reactive } from "vue";

export const useProducts = defineStore({
  id: "products",

  state: () => ({
    products: null,
    searchedProducts: null,
    cart: reactive([]),

    limit: ref(12),
    skip: ref(0),
    current: ref(1),

    query: ref(''),
  }),

  actions: {
    async setLimit(value) {
      this.limit = value;
      await this.getProducts();

      localStorage.setItem("limit", this.limit);
    },

    async sortProductsByTitle() {
      if (this.products) {
        this.products.sort((a, b) => a.title.localeCompare(b.title));
      }
    },
    async sortProductsByPrice() {
      if (this.products) {
        this.products.sort((a, b) => a.price - b.price);
      }
    },

    async sortProductsByStock() {
      if (this.products) {
        this.products.sort((a, b) => a.stock - b.stock);
      }
    },

    async addToCart(product) {
      this.cart.push(product);
    },
    async removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },

    async getProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products", {
          params: {
            limit: this.limit,
            skip: this.skip,
          },
        });
        const data = response.data;
        this.products = data.products;
      } catch (error) {
        console.error(error);
      }
    },

    async getSearch() {
      try {
        const searchResponse = await axios.get("https://dummyjson.com/products/search", {
          params: {
            q: this.query
          },
        });
        const searchData = await searchResponse.data;
        this.searchedProducts = searchData.products
      } catch (error) {
        console.error(error);
      }
    }
  },

  getters: {

  },
});
