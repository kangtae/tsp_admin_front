<template>
  <div>
    <form>
      <div class="login-wrap">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h1 class="panel-title text-center">TSP 관리자</h1>
          </div>
          <div class="panel-body">
            <form class="form-horizontal">
              <div class="form-group">
                <div class="col-sm-12">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-user"></i>
                    </span>
                    <input
                      v-model="userId"
                      id="username"
                      type="text"
                      placeholder="ID"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-12">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-lock"></i>
                    </span>
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      v-model="password"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-4">
                  <div class="checkbox">
                    <label>
                      <input v-model="loginIdSave" type="checkbox" /> 아이디
                      저장
                    </label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="checkbox">
                    <label>
                      <input v-model="loginPwSave" type="checkbox" /> 비밀번호
                      저장
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-12">
                  <button
                    type="submit"
                    @click.self.prevent="submitForm"
                    class="btn btn-primary btn-block"
                  >
                    로그인
                  </button>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-12">
                  <router-link
                    to="/admin/signup"
                    class="btn btn-default btn-block"
                  >
                    회원가입
                  </router-link>
                </div>
              </div>
            </form>
            <!-- //form-horizontal -->
          </div>
          <!-- //panel-body -->
        </div>
        <!-- //panel -->
      </div>
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

<style scoped>
.login-wrap {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 400px;
  margin: auto;
  -webkit-animation: login-wrap 0.3s ease-out;
  animation: login-wrap 0.3s ease-out;
}

@-webkit-keyframes login-wrap {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 1;
  }
}

@keyframes login-wrap {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 1;
  }
}
</style>
