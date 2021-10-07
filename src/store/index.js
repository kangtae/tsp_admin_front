import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import { ProductionList, ModelManList } from "@/api/index";

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
    clearToken(state) {
      state.token = "";
    },
    SET_PRODUCTION(state, production) {
      state.production = production;
    },
    SET_MODELMAN(state, modelman) {
      state.modelman = modelman;
    },
  },
  actions: {
    async LIST_PRODUCTION({ commit }, page) {
      this.state.LoadingStatus = true;
      const { data } = await ProductionList(page);
      this.state.LoadingStatus = false;
      commit("SET_PRODUCTION", data);
    },
    async LIST_MODELMAN({ commit }, page) {
      this.state.LoadingStatus = true;
      const { data } = await ModelManList(page);
      this.state.LoadingStatus = false;
      commit("SET_MODELMAN", data);
    },
  },
});
