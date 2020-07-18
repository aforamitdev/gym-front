import { getField, updateField } from "vuex-map-fields";
import api from "../../api";
const state = {
  me: {},
  userDetail: {
    name: "",
    email: "",
    password: "",
    clubname: "",
    role: "",
  },
};

const getters = {
  getField,
};

const actions = {
  register() {
    api
      .post("/auth/register", state.userDetail)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error.response));
  },
};

const mutations = {
  updateField,
  ERROR(state, payload) {
    console.log(payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
