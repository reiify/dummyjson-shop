<template>
    <nav class="nav">
        <ul class="nav__list">
            <router-link active-class="active" class="nav__list-link" to="/" exact>
                <q-icon name="sym_r_home" size="24px" />
                <span>Home</span>
            </router-link>

            <router-link active-class="active" class="nav__list-link" to="/cart" exact>
                <div class="nav__badge">
                    <q-icon name="sym_r_shopping_cart" size="24px" />
                    <q-badge rounded color="red-7" class="nav__badge-badge" :label="store.cart.length"
                        v-if="store.cart.length" />
                </div>
                <span>Cart</span>
            </router-link>

            <router-link active-class="active" class="nav__list-link" to="/info" exact>
                <q-icon name="sym_r_info" size="24px" />
                <span>Info</span>
            </router-link>
        </ul>
    </nav>
</template>

<script setup>
import { useProducts } from '../stores/products';

const store = useProducts();
</script>

<style lang="scss">
.nav {
    height: 100vw;
    position: fixed;

    padding: 32px 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;

    background: rgba($color: #000, $alpha: 1);

    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        &-link {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            gap: 4px;

            font-size: 14px;
            text-align: center;
            color: #fff;
            transition: .3s;

            &:hover:not(.active) .q-icon {
                scale: 1.1;
                background: rgba($color: #fff, $alpha: .25);
            }

            &:hover:not(.active) {
                color: rgba($color: #fff, $alpha: .75);
            }

            &:active {
                scale: .97;
            }
        }

        & .q-icon {
            display: flex;
            padding: 4px 16px;
            border-radius: 20px;
            background: transparent;
        }
    }


    &__badge {
        display: flex;
        position: relative;

        &-badge {
            position: absolute;
            top: 2px;
            right: 12px;
        }
    }
}

.active {
    color: #fff; // text

    & .q-icon {
        background: #fff;
        color: #000; // icon
        font-variation-settings:
            'FILL' 1,
            'GRAD' 200,
    }
}
</style>