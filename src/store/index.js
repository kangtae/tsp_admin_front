import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    isLogin: "",
  },
  getters: {
    isLogin(state) {
      return state.isLogin !== "";
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setIsLogin(state, loginYn) {
      state.isLogin = loginYn;
    },
    clearIsLogin(state) {
      state.isLogin = "";
    },
  },
});
