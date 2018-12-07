import Vue from "vue";
import App from "./demo/App.vue";

import "./assets/css/index.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
