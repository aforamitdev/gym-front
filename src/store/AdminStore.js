import api from "../../api";
import { createHelpers } from "vuex-map-fields";

const { getCreateEventFields, updateCreateEventFields } = createHelpers({
  getterType: "getCreateEventFields",
  mutationType: "updateCreateEventFields",
});
const state = {
  allevents: [],
  createEventData: {
    eventTitle: "",
    eventAddress: "",
    pin: "",
    eventDate: "",
    eventTime: "",
    level: "",
  },
};

const getters = {
  getCreateEventFields,
};

const actions = {
  //! events managment
  async getEvents({ commit }) {
    const events = await api.get("/event/getcurrentevents/");
    commit("SET_ALL_EVENTS", events.data);
  },
  //! clubs managment
};

const mutations = {
  updateCreateEventFields,
  ["SET_ALL_EVENTS"](state, events) {
    state.allevents = events.data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
