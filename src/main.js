import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import store from "./store/index";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
