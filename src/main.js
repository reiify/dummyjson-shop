import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// vue add-ons
import router from "./router/router";
import { createPinia } from "pinia";

const pinia = createPinia();

// Quasar
import { Quasar, Notify } from "quasar";
import quasarIconSet from "quasar/icon-set/material-symbols-rounded";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-symbols-rounded/material-symbols-rounded.css";

// Import Quasar css
import "quasar/src/css/index.sass";

createApp(App)
  .use(Quasar, {
    plugins: {
      Notify,
    },
    iconSet: quasarIconSet,
  })
  .use(pinia)
  .use(router)
  .mount("#app");
