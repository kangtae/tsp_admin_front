import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import { ProductionList } from "@/api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: "",
    isLogin: "",
    production: "",
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
    SET_PRODUCTION(state, production) {
      state.production = production;
    },
  },
  actions: {
    async LIST_PRODUCTION({ commit }, page) {
      const { data } = await ProductionList(page);
      commit("SET_PRODUCTION", data);
    },
  },
});
