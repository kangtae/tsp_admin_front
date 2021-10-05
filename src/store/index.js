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
    modelman: "",
    userId: "",
    LoadingStatus: false,
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
    setUserId(state, userId) {
      state.userId = userId;
    },
    clearIsLogin(state) {
      state.isLogin = "";
    },
    SET_PRODUCTION(state, production) {
      state.production = production;
    },
    SET_MODELMAN(state, modelman) {
      state.modelman = modelman;
    },
    startSpinner(state) {
      state.LoadingStatus = true;
    },
    endSpinner(state) {
      state.LoadingStatus = false;
    },
  },
  actions: {
    async LIST_PRODUCTION({ commit }, page) {
      const { data } = await ProductionList(page);
      commit("SET_PRODUCTION", data);
    },
    async LIST_MODELMAN({ commit }, page) {
      const { data } = await ProductionList(page);
      commit("SET_MODELMAN", data);
    },
  },
});
