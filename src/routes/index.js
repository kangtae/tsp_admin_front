import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store/index";
// import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/admin",
      redirect: "/admin/login",
    },
    {
      path: "*",
      redirect: "/admin/login",
    },
    {
      //로그인
      path: "/admin/login",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      //로그인
      path: "/admin/signup",
      component: () => import("../views/SignupPage.vue"),
    },
  ],
});

export default router;
