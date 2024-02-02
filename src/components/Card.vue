<template>
    <div
        class="card"
        v-for="product in store.products"
        :key="product.id"
        @click="goToProductPage(product.id)"
    >
        <div class="card__thumb">
            <img
                :src="product.thumbnail"
                alt="product's thumbnail"
                class="card__thumb-img"
            >
        </div>
        <div class="card__info">
            <div class="card__info-header">
                <h6 class="card__info-header__title">{{ product.title }}</h6>

                <div class="card__info-header__price">
                    <q-icon name="sym_r_attach_money" class="card__info-header__price-icon" />

                    <h6 class="card__info-header__title">{{ product.price - (product.price * (product.discountPercentage / 100)).toFixed(1) }}</h6>
                </div>
            </div>

            <p class="card__info__description">{{ product.description }}</p>

            <div class="card__info-details">
                <div class="card__info-details__trivia">
                    <q-icon name="sym_r_grade" class="card__info-details__trivia-icon" />
                    <p class="card__info-details__trivia-text">{{ product.rating.toFixed(1) }}</p>
                </div>

                <div class="card__info-details__trivia">
                    <q-icon name="sym_r_archive" class="card__info-details__trivia-icon" />
                    <p class="card__info-details__trivia-text">{{ product.stock }}</p>
                </div>

                <div class="card__info-details__trivia">
                    <q-icon name="sym_r_sell" class="card__info-details__trivia-icon" />
                    <h6 class="card__info-details__trivia-text" style="text-decoration: line-through; color: #777;">${{ product.price }}</h6>
                    <p class="card__info-details__trivia-text">-{{ product.discountPercentage.toFixed(0) }}%</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProducts } from '@/stores/products.js';
import { useRouter } from 'vue-router';

const store = useProducts(); 
const router = useRouter();

const goToProductPage = (id) => {
    router.push({ name: 'productsPage', params: { id } })
};

onMounted(() => {
    store.getProducts();
});
</script>

<style lang="scss">
.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    &__thumb {
        height: 275px;
        aspect-ratio: 1;
        position: relative;
        border-radius: 12px;

        background: #777;

        &-img {
            height: 100%;
            width: 100%;
            border-radius: 12px;
            backdrop-filter: opacity(.3);
            mix-blend-mode: multiply; // deleting white background
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 4px;

        &-header {
            display: flex;
            justify-content: space-between;
            width: 275px;

            &__title {
                color: #000;
                font-size: 16px;
                font-weight: 500;
                line-height: normal;
            }

            &__price {
                display: flex;
                flex-direction: row;
                align-items: center;

                &-icon {
                    font-size: 16px !important;
                    font-variation-settings:
                        'GRAD' 200,
                        'wght' 700;
                }
            }
        }

        &__description {
            font-size: 14px;
            width: 200px;
            color: #777;
            line-height: normal;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        &-details {
            display: flex;
            gap: 8px;

            &__trivia {
                display: flex;
                gap: 4px;

                &:nth-of-type(-n+2)::after {
                    content: '';
                    background: #000;
                    width: 1px;
                    height: 16px;
                    margin-left: 8px;
                }

                &-icon {
                    font-size: 16px !important;
                    font-variation-settings:
                        'FILL' 1;
                }

                &-text {
                    color: #000;
                    font-size: 14px;
                    line-height: normal;
                }
            }
        }
    }
}
</style>