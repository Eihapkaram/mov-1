import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import jQuery from "jquery";
import "../node_modules/jquery/dist/jquery.js";
window.jQuery = jQuery;
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
});
AOS.init();
createApp(App).use(vuetify).use(createPinia()).use(router).mount("#app");
