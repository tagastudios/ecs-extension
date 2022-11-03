import { createApp } from "vue";
// import App from "./App.vue";
import App from "../popup/Popup.vue";
import { createPinia } from "pinia";
import "../popup/assets/main.css";
import "../popup/assets/base.css";
import "./mods.css";

// Everything on this page would be to format the saved sites different mods
// Ex: the calling site to fix the box to the right

window.onload = async () => {
	const el = document.querySelector("body");
	if (el) {
		el.insertAdjacentHTML("beforebegin", '<div id="app">hello</div>');
		const app = createApp(App).use(createPinia());
		app.mount("#app");
	}
};

// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->
