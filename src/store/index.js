import Vue from "vue";
import Vuex from "vuex";
import AdminStore from "./AdminStore";
import Auth from "./auth";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, //remove before deployin
  modules: {
    AdminStore,
    Auth,
  },
});
