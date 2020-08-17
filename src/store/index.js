import Vue from "vue";
import Vuex from "vuex";
import AdminStore from "./AdminStore";
import Auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AdminStore,
    Auth,
  },
});
