import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import { ProductionList, ModelList } from "@/api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: "",
    isLogin: "",
    production: "",
    model: "",
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
    clearToken(state) {
      state.token = "";
    },
    SET_PRODUCTION(state, production) {
      state.production = production;
    },
    SET_MODEL(state, model) {
      state.model = model;
    },
  },
  actions: {
    async LIST_PRODUCTION({ commit }, page) {
      this.state.LoadingStatus = true;
      const { data } = await ProductionList(page);
      this.state.LoadingStatus = false;
      commit("SET_PRODUCTION", data);
    },
    async LIST_MODEL({ commit }, page) {
      this.state.LoadingStatus = true;
      const { data } = await ModelList(page);
      this.state.LoadingStatus = false;
      commit("SET_MODEL", data);
    },
  },
});
