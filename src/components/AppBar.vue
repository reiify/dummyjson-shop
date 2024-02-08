<template>
    <div class="app-bar">
        <form class="sort-wrapper">
            <select id="sortBy" @change="sortProducts($event)">
                <option value="title">By name</option>
                <option value="price">By price</option>
                <option value="stock">By stock</option>
            </select>
        </form>

        <input placeholder="Search..." id="search-bar" v-model="store.query" />
        <form class="per-page-wrapper">
            <label for="contentLimit">Display</label>
            <select :value="store.limit" @change="store.setLimit($event.target.value)" id="contentLimit">
                <option value="12">by 12</option>
                <option value="24">by 24</option>
                <option value="36">by 36</option>
                <option value="48">by 48</option>
                <option value="100">all</option>
            </select>
        </form>
    </div>
</template>

<script setup>
import { useProducts } from '@/stores/products.js';
import { onMounted, ref, watch } from 'vue';

const store = useProducts();
const getLimit = localStorage.getItem('limit');

function sortProducts(event) {
    const { value } = event.target;
    if (value === 'title') {
        store.sortProductsByTitle();
    } else if (value === 'price') {
        store.sortProductsByPrice();
    } else if (value === 'stock') {
        store.sortProductsByStock();
    }
}

onMounted(() => {
    store.setLimit(getLimit || 12);
});
</script>

<style lang="scss">
.app-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 12px;
    border-radius: 8px;
    background: #DDD;

    width: 100%;
}

#sortBy {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 146px;
    height: 40px;

    padding: 8px 16px;
    border-radius: 8px;
    background: #fff;
    appearance: none; // отключаем стрелочку

    /* шрифт */
    color: #000;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
}

.sort-wrapper {
    position: relative;

    &::after {
        position: absolute;
        pointer-events: none;

        right: 16px;
        top: 12px;

        font-family: 'Material Symbols Rounded';
        font-size: 24px;
        content: 'sort';
    }
}

#search-bar {
    display: flex;
    align-items: center;
    flex: 1 0 0;
    padding: 8px;
    gap: 12px;
    border-radius: 8px;
    background: #FFF;
    font-size: 20px;

    &::placeholder {
        color: #777;
    }
}

.per-page-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    border-radius: 8px;
    background: #FFF;

    color: #000;
    font-size: 20px;
    line-height: normal;
}
</style>
