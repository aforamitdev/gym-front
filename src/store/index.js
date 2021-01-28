import Vue from "vue"
import Vuex from "vuex"
import AdminStore from "./AdminStore"
import AuthStore from "./AuthStore"
import EventStore from "./EventStore"
import ClubStore from "./ClubsStore"
Vue.use(Vuex)

const store = new Vuex.Store({
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        )
      }
    }
  },
  modules: {
    AdminStore,
    AuthStore,
    EventStore,
    ClubStore
  }
})

store.subscribe((mutation, state) => {
  // let _state = {
  // 	token: state.token
  // };

  localStorage.setItem('store', JSON.stringify(state))
})






export default store