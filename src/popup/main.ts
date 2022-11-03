import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./Popup.vue";
import "./assets/main.css";
import "./assets/base.css";

const app = createApp(App).use(createPinia());
app.mount("#app");
