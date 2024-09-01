import { createApp } from "vue";
import "./assets/tailwind.css";
import "./assets/styles.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router).mount("#app");
