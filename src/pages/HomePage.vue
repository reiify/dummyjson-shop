<template>
    <div class="container">
        <AppBar />

        <div class="products__item">
            <Card />
        </div>

        <Pagination />
    </div>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue';
import Card from '@/components/Card.vue';
import Pagination from '@/components/Pagination.vue';
</script>

<style lang="scss">
.products__item {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px 32px;
}
</style>