<template>
    <div class="container flex flex-center">
        <q-icon name="sym_r_error" class="cart__icon" />
        
        <h3 class="cart__title">That page doesn't exist</h3>
        
        <router-link to="/">
            <q-btn
                push
                rounded
                no-caps
                color="black"
                padding="12px 24px"
                size="large"
                label="Home"
            />
        </router-link>
    </div>
</template>

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
</style>