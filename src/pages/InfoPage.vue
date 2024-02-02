<template>
    <div class="container">
        <q-card class="info-card" flat bordered>
            <q-card-section>
                <div class="text-h6">Diploma work</div>
                <a href="https://portfolio-krei.vercel.app" class="text-subtitle1">Abdulatif Ahmadov</a>
            </q-card-section>

            <q-separator inset />

            <q-list>
                <q-item clickable>
                    <q-item-section avatar>
                        <q-avatar square size="24px">
                            <img src="https://vuejs.org/logo.svg">
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Vue 3 (Composition API)</q-item-label>
                        <q-item-label caption>Framework</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable>
                    <q-item-section avatar>
                        <q-avatar square size="24px">
                            <img src="https://vitejs.dev/logo.svg">
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Vite</q-item-label>
                        <q-item-label caption>Builder</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable>
                    <q-item-section avatar>
                        <q-avatar square size="24px">
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Quasar, QNotify</q-item-label>
                        <q-item-label caption>Plugins</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable>
                    <q-item-section avatar>
                        <q-avatar square size="24px">
                            <img src="https://pinia.vuejs.org/logo.svg">
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Pinia</q-item-label>
                        <q-item-label caption>State management</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable>
                    <q-item-section avatar>
                        <q-avatar square size="24px">
                            <img src="https://static.deepl.com/img/logo/deepl-logo-blue.svg">
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>DeepL</q-item-label>
                        <q-item-label caption>Translation</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>
    </div>
</template>

<style lang="scss">
.info-card {
    width: 100%;
}
</style>