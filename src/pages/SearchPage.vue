<template>
    <div class="container">
        <AppBar />
        <div class="filtered__items" v-if="allProducts">
            <p>{{ filteredList }}</p>
        </div>
    </div>
</template>

<script setup>
import AppBar from "../components/AppBar.vue";
import { useProducts } from '@/stores/products.js';
import { computed, onMounted } from "vue";

const store = useProducts();
let searchData = computed(() => store.query);
let allProducts = computed(() => store.searchedProducts);

store.getSearch();

let filteredList = computed(() => {
    return searchData.value ? allProducts.value.filter(item => {
        return item.title?.toLowerCase().includes(searchData.value.toLowerCase());
    }) : allProducts;
});
</script>
