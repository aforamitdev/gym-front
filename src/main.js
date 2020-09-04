import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "../src/assets/styles/styles.css";
import Vuelidate from "vuelidate";
import Vuemoment from "vue-moment";
import graphqlClient from "./utils/graphql";
Vue.use(Vuelidate);
Vue.use(Vuemoment);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  graphqlClient,
}).$mount("#app");
