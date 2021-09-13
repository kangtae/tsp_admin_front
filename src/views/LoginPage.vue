<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <fieldset class="fieldset">
        <legend class="legend">로그인</legend>

        <div class="login">
          <h1 class="login__tit">관리자 로그인</h1>
          <div class="login__column">
            <label for="loginId" class="login__label"
              ><i class="fa fa-user"></i></label
            ><input
              v-model="userId"
              type="text"
              name=""
              id="loginId"
              class="input1 login__input"
            />
          </div>
          <div class="login__column">
            <label for="loginPw" class="login__label"
              ><i class="fa fa-key"></i></label
            ><input
              v-model="password"
              type="password"
              name=""
              id="loginPw"
              class="input1 login__input"
            />
          </div>
          <div class="login__column">
            <div class="login__chk">
              <input
                type="checkbox"
                name=""
                value=""
                id="loginIdSave"
                class="checkbox1"
                v-model="loginIdSave"
              /><label class="checkbox1-label" for="loginIdSave"
                >아이디 저장</label
              >
            </div>
            <div class="login__chk">
              <input
                type="checkbox"
                name=""
                value=""
                id="loginPwSave"
                class="checkbox1"
                v-model="loginPwSave"
              /><label class="checkbox1-label" for="loginPwSave"
                >비밀번호 저장</label
              >
            </div>
          </div>
          <button type="submit" class="btn btn_color1 login__btn-submit">
            로그인
          </button>
          <router-link
            to="/admin/signup"
            class="btn btn_color2 login__btn-submit"
            >회원가입</router-link
          >
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { loginUser } from "@/api/index";
export default {
  data() {
    return {
      userId: "",
      password: "",
      loginIdSave: false,
      loginPwSave: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        if (this.loginIdSave) {
          this.$cookies.set("id", this.userId, "1d");
        } else {
          this.$cookies.remove("id");
        }
        if (this.loginPwSave) {
          this.$cookies.set("pw", this.password, "1d");
        } else {
          this.$cookies.remove("pw");
        }
        console.log(loginUser);
        const userData = {
          userId: this.userId,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        if (data.loginYn == "Y") {
          this.$store.commit("setToken", data.token.body.token);
          this.$store.commit("setIsLogin", data.loginYn);
          this.$router.push("/admin/content/brand");
        } else {
          alert("비밀번호를 확인해주세요");
        }
      } catch (error) {
        // console.log(error)
      }
    },
  },
  created() {
    if (this.$cookies.isKey("id")) {
      this.userId = this.$cookies.get("id");
    }
    if (this.$cookies.isKey("pw")) {
      this.password = this.$cookies.get("pw");
    }
  },
};
</script>

<style></style>
