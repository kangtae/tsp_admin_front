<template>
  <div class="site-header">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">TSP</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav" role="navigation">
            <li role="presentation" class="dropdown">
              <router-link to="#" @click.self.native="dropdownToggle"
                >모델관리
                <span class="caret"></span>
              </router-link>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <router-link to="/admin/content/woman">여자 모델</router-link>
                </li>
                <li>
                  <router-link to="/admin/content/man">남자 모델</router-link>
                </li>
                <li>
                  <router-link to="/admin/content/senior"
                    >시니어 모델</router-link
                  >
                </li>
              </ul>
            </li>
            <li role="presentation">
              <router-link to="/admin/content/production"
                >프로덕션 관리</router-link
              >
            </li>
            <li role="presentation">
              <router-link to="/admin/content/portfolio"
                >포트폴리오 관리</router-link
              >
            </li>
            <li role="presentation">
              <router-link to="/admin/content/resume">지원서 관리</router-link>
            </li>
          </ul>
          <p class="navbar-text navbar-right">
            안녕하세요. {{ this.$store.state.userId }}님
            <button
              type="submit"
              class="btn btn-default btn-xs"
              @click="logOutBtn"
            >
              <i class="fa fa-sign-out" aria-hidden="true"></i> 로그아웃
            </button>
          </p>
        </div>
        <!-- //collapse -->
      </div>
      <!-- //container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    dropdownToggle(e) {
      const navElem = e.target.parentNode;
      if (navElem.classList.contains("open")) {
        navElem.classList.remove("open");
      } else {
        navElem.classList.add("open");
      }
    },
    logOutBtn() {
      this.$store.commit("clearIsLogin");
      this.$store.commit("clearToken");
      this.$router.push("/admin/login");
    },
  },
  mounted() {
    const navElemAll = document.querySelectorAll(".navbar-nav li");
    Array.prototype.forEach.call(navElemAll, function (navElem, idx) {
      navElem.addEventListener("click", function () {
        if (idx == 0) return false;
        const dropdown = document.querySelector(".dropdown");
        if (dropdown.classList.contains("open")) {
          dropdown.classList.remove("open");
        }
      });
    });
  },
};
</script>

<style></style>
