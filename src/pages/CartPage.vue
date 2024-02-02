<template>
    <div class="container flex flex-center" v-if="!store.cart.length">
        <q-icon name="sym_r_shopping_cart" class="cart__icon" />

        <h3 class="cart__title">There are no items in your cart yet</h3>

        <h5 class="cart__sub-title">Start with the selections on the home page or find the product you want through search
        </h5>

        <router-link to="/">
            <q-btn push rounded no-caps color="black" padding="12px 24px" size="large" label="Home" />
        </router-link>
    </div>

    <div class="container" v-else>
        <div class="products__item">
            <div class="card" v-for="product in store.cart" :key="product.id">
                <div class="card__thumb">
                    <img :src="product.thumbnail" alt="product's thumbnail" class="card__thumb-img"
                        @click="goToProductPage(product.id)">
                </div>

                <div class="card__info">
                    <div class="card__info-header">
                        <h6 class="card__info-header__title">{{ product.title }}</h6>

                        <div class="card__info-header__price">
                            <q-icon name="sym_r_attach_money" class="card__info-header__price-icon" />

                            <h6 class="card__info-header__title">{{ product.price - (product.price *
                                (product.discountPercentage / 100)).toFixed(1) }}</h6>
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
                            <h6 class="card__info-details__trivia-text" style="text-decoration: line-through; color: #777;">
                                ${{ product.price }}</h6>
                            <p class="card__info-details__trivia-text">-{{ product.discountPercentage.toFixed(0) }}%</p>
                        </div>
                    </div>

                    <div class="card__btns">
                        <q-btn rounded outline no-caps color="red-9" label="Delete" @click="removeFromCart(product.id)" class="card__btns-btn" />
                        <q-btn rounded no-caps color="black" label="Buy Now" @click="buyNow(product.id)" class="card__btns-btn" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProducts } from '../stores/products';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const store = useProducts();
const router = useRouter();
const $q = useQuasar();

const goToProductPage = (id) => {
    router.push({ name: 'productsPage', params: { id } })
};

const removeFromCart = (id) => {
    store.removeFromCart(id);
};

const buyNow = (id) => {
    store.removeFromCart(id);

    $q.notify({
        progress: true,
        message: 'Thank you for your purchase!',
    })
};
</script>

<style lang="scss">
.cart__ {

    &icon {
        font-size: 3.75rem !important;
        font-variation-settings:
            'FILL' 1;
    }

    &title {
        font-weight: 500;
    }

    &sub-title {
        font-weight: 500;
    }
}

.card__btns {
    display: flex;
    gap: 20px;

    &-btn {
        display: flex;
        flex: 1 0 0;
    }
}
</style>