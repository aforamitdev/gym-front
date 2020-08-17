import api from "../../api";
const state = {
  allevents: [],
};

const getters = {};

const actions = {
  //! events managment
  async getEvents({ commit }) {
    const events = await api.get("/event/getcurrentevents/");
    commit("SET_ALL_EVENTS", events.data);
  },
  //! clubs managment
};

const mutations = {
  ["SET_ALL_EVENTS"](state, events) {
    state.allevents = events.data;
  },
};

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
};
