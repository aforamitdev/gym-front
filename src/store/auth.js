import { getField, updateField } from "vuex-map-fields";
const state = {
  me: {},
  userDetail: {
    name: "",
    email: "",
    password: "",
  },
};

const getters = {
  getField,
};

const actions = {};

const mutations = {
  updateField,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
