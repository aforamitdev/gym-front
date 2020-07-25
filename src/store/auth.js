import { getField, updateField } from "vuex-map-fields";
import api from "../../api";
const state = {
  me: {},
  userDate: {},
  userDetail: {
    name: "",
    email: "",
    password: "",
    clubname: "",
    role: "",
  },
  loginDetail: {
    email: "",
    password: "",
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
        console.log(res.data());
      })
      .catch((error) => console.log(error.response));
  },
  login({ commit }) {
    api
      .post("/auth/login", state.loginDetail)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        commit("SET_LOGIN_DATA", {
          token: res.data.token.token,
          role: res.data.role,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  updateField,
  ERROR(state, payload) {
    console.log(payload);
  },
  ["SET_LOGIN_DATA"](state, payload) {
    state.me = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
