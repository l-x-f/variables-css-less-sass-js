import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
import variables from "./variables";

console.log(variables, "main-variables");

new Vue({
  render: h => h(App)
}).$mount("#app");
