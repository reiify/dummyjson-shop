<template>
    <div class="container">
        <div class="content">
            <div class="left">
                <q-carousel v-model="slide" swipeable thumbnails infinite animated transition-prev="slide-right"
                    transition-next="slide-left">
                    <q-carousel-slide :name="0" :img-src="selectedProduct.images[0]" v-if="selectedProduct.images[0]" />
                    <q-carousel-slide :name="1" :img-src="selectedProduct.images[1]" v-if="selectedProduct.images[1]" />
                    <q-carousel-slide :name="2" :img-src="selectedProduct.images[2]" v-if="selectedProduct.images[2]" />
                    <q-carousel-slide :name="3" :img-src="selectedProduct.images[3]" v-if="selectedProduct.images[3]" />
                    <q-carousel-slide :name="4" :img-src="selectedProduct.images[4]" v-if="selectedProduct.images[4]" />
                    <q-carousel-slide :name="5" :img-src="selectedProduct.images[5]" v-if="selectedProduct.images[5]" />
                    <q-carousel-slide :name="6" :img-src="selectedProduct.images[6]" v-if="selectedProduct.images[6]" />
                </q-carousel>
            </div>

            <div class="right">
                <div class="right__head">
                    <h3 class="right__head-title">{{ selectedProduct.title }}</h3>
                    <p class="right__head-description">{{ selectedProduct.description }}</p>
                </div>

                <div class="right__details">
                    <p class="right__details-title">Brand: <span>{{ selectedProduct.brand }}</span></p>
                    <p class="right__details-title">Category: <span>{{ selectedProduct.category }}</span></p>
                    <p class="right__details-title">Rating: <span>{{ selectedProduct.rating }}</span></p>
                </div>

                <div class="right__price">
                    <h4 class="right__price-old">${{ selectedProduct.price }}</h4>
                    <q-icon name="sym_r_arrow_forward" size="36px"
                        style="font-variation-settings: 'wght' 700, 'GRAD' 200;" />
                    <h4 class="right__price-new">${{ selectedProduct.price - (selectedProduct.price *
                        (selectedProduct.discountPercentage / 100)).toFixed(1) }}
                    </h4>

                    <div class="right__price-discount">
                        <p class="right__price-discount-value">-{{ selectedProduct.discountPercentage }}%</p>
                    </div>
                </div>

                <div class="right__order">
                    <q-btn no-caps rounded padding="12px" color="black" label="Buy Now" @click="buyNow" style="flex: 1 0 0;" />
                    <q-btn no-caps outline rounded padding="12px" color="black" label="Add to Cart" @click="addToCart"
                        style="flex: 1 0 0;" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useProducts } from "@/stores/products.js";
import { useRoute } from "vue-router";

const $q = useQuasar();
const store = useProducts();
const route = useRoute();
const slide = ref(0);

const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === Number(route.params.id));
});

const addToCart = () => {
    store.addToCart(selectedProduct.value);
};

const buyNow = () => {
    $q.notify({
        progress: true,
        message: 'Thank you for your purchase!',
    })
}
</script>

<style lang="scss">
.q-carousel {
    width: 100% !important;
    height: 100% !important;
    border-radius: 16px;

    &__slide {
        opacity: .9;
    }
}

.q-panel {
    mix-blend-mode: multiply;
    background-color: #000;
}

.content {
    display: flex;
    gap: 32px;
}

.left {
    width: 620px;
    height: 620px;
}

.right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    flex: 1 0 0;

    &__head {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        gap: 8px;

        &-title {
            color: #000;
            font-size: 40px;
            font-weight: 700;
        }

        &-description {
            color: #000;
            font-size: 20px;
            align-self: stretch;
        }
    }

    &__details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        gap: 8px;

        &-title {
            color: #000;
            font-size: 20px;

            & span {
                font-weight: 600;
            }
        }
    }

    &__price {
        display: flex;
        align-items: center;
        align-self: stretch;
        gap: 8px;

        &-old {
            color: #777;
            font-size: 32px;
            font-weight: 600;
            text-decoration-line: line-through;
        }

        &-new {
            color: #000;
            font-size: 32px;
            font-weight: 600;
        }

        &-discount {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 6px 16px;
            border-radius: 20px;
            background: $red-9;

            &-value {
                color: #FFF;
                font-size: 20px;
                font-weight: 600;
            }
        }
    }

    &__order {
        display: flex;
        align-items: flex-start;
        align-self: stretch;
        gap: 8px;
    }
}
</style>