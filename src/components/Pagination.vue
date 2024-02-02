<template>
    <div class="pagination" v-if="store.limit < 100">
        <div class="pagination__bar">

            <q-pagination
                v-model="store.current"
                direction-links
                :max="total"
                color="black"
                @click="setSkip"
            />

        </div>
    </div>
</template>

<script setup>
import { useProducts } from '@/stores/products.js';

const store = useProducts();
const getLimit = localStorage.getItem('limit');

const total = Math.ceil(100 / getLimit || store.limit);

const setSkip = async () => {
    if(store.current == 1) {
        store.skip = 0
    }
    else if(store.current == 2) {
        store.skip = store.limit
    }
    else if(store.current == 3) {
        store.skip = (store.limit * 2)
    }
    else if(store.current == 4) {
        store.skip = (store.limit * 3)
    }
    else if(store.current == 5) {
        store.skip = (store.limit * 4)
    }
    else if(store.current == 6) {
        store.skip = (store.limit * 5)
    }
    else if(store.current == 7) {
        store.skip = (store.limit * 6)
    }
    else if(store.current == 8) {
        store.skip = (store.limit * 7)
    }
    else if(store.current == 9) {
        store.skip = (store.limit * 8)
    }
    await store.getProducts();
};
</script>

<style lang="scss">
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    padding: 8px;

    border-radius: 8px;
    background: #DDD;

    &__bar {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        flex: 1 0 0;
        gap: 12px;
        
        border-radius: 8px;
        background: #FFF;
    }
}

.page-btns {
    display: flex;
    width: 32px;
    height: 24px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: transparent;
}
</style>