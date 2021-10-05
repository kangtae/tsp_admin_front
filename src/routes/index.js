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
      //컨텐츠
      path: "/admin/content/:page",
      component: () => import("../views/ListPage.vue"),
      meta: { auth: true },
    },
    {
      //상세
      path: "/admin/detail/:page",
      component: () => import("../views/DetailPage.vue"),
      meta: { auth: true },
    },
    {
      //등록
      path: "/admin/regist/:page",
      component: () => import("../views/RegistPage.vue"),
      meta: { auth: true },
    },
    {
      //수정
      path: "/admin/edit/:page/:idx",
      component: () => import("../views/EditPage.vue"),
      meta: { auth: true },
    },
    {
      //회원가입
      path: "/admin/signup",
      component: () => import("../views/SignupPage.vue"),
    },
  ],
});

export default router;
