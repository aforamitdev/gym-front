import api from "../../api";
import router from "../router/index";
import { createHelpers } from "vuex-map-fields";
const { getAuthFields, updateAuthFields } = createHelpers({
  getterType: "getAuthFields",
  mutationType: "updateAuthFields",
});
const state = {
  me: {},
  userData: {},
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
  getAuthFields,
  getUserData: (state) => {
    return state.userData;
  },
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
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);

        commit("SET_LOGIN_DATA", {
          token: res.data.token,
          role: res.data.role,
        });
        router.push({ name: res.data.role });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  updateAuthFields,
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
