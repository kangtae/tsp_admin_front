<template>
  <div style="display: table; width: 100%">
    <Header></Header>
    <div class="site-container">
      <div class="container-fluid">
        <div class="page-header">
          <h1 class="h2 font-weight-light">회원가입</h1>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <table class="table table-bordered">
              <colgroup>
                <col style="width: 150px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th class="active">
                    아이디
                    <small class="text-danger">
                      <i class="fa fa-asterisk" aria-hidden="true"></i>
                    </small>
                  </th>
                  <td>
                    <div class="form-inline">
                      <input
                        type="text"
                        v-model="userId"
                        name=""
                        id=""
                        class="form-control input-sm"
                        size="30"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="active">
                    비밀번호
                    <small class="text-danger">
                      <i class="fa fa-asterisk" aria-hidden="true"></i>
                    </small>
                  </th>
                  <td>
                    <div class="form-inline">
                      <input
                        type="password"
                        name=""
                        id=""
                        v-model="password"
                        class="form-control input-sm"
                        size="30"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="active">
                    비밀번호 확인
                    <small class="text-danger">
                      <i class="fa fa-asterisk" aria-hidden="true"></i>
                    </small>
                  </th>
                  <td>
                    <div class="form-inline">
                      <input
                        type="password"
                        name=""
                        id=""
                        v-model="confirmPassword"
                        class="form-control input-sm"
                        size="30"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="active">
                    이름
                    <small class="text-danger">
                      <i class="fa fa-asterisk" aria-hidden="true"></i>
                    </small>
                  </th>
                  <td>
                    <div class="form-inline">
                      <input
                        type="password"
                        name=""
                        id=""
                        v-model="userName"
                        class="form-control input-sm"
                        size="30"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- //table -->
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 text-left"></div>
          <div class="col-sm-4 text-center">
            <a class="btn btn-default" href="" role="button">취소</a>
            <button class="btn btn-success" @click.self.prevent="submitForm">
              회원가입
            </button>
          </div>
          <div class="col-sm-4 text-right"></div>
        </div>
      </div>
      <!-- //container-fluid -->
    </div>
    <Footer></Footer>
    <!-- <form v-on:submit.prevent="submitForm">
      <fieldset class="fieldset">
        <legend class="legend">회원가입</legend>

        <div class="login pw_change">
          <h1 class="login__tit">회원가입</h1>
          <div class="box1">
            <table class="table2">
              <colgroup>
                <col style="width: 150px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th class="table2__th">
                    아이디<span class="required-field">(필수)</span>
                  </th>
                  <td class="table2__td">
                    <input
                      type="text"
                      v-model="userId"
                      class="input1 input1_size-100p"
                    />
                    <p class="error-message" v-show="!this.userId">
                      필수입력항목입니다.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th class="table2__th">
                    비밀번호<span class="required-field">(필수)</span>
                  </th>
                  <td class="table2__td">
                    <input
                      type="password"
                      v-model="password"
                      class="input1 input1_size-100p"
                    />
                    <p class="error-message" v-show="!this.password">
                      필수입력항목입니다.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th class="table2__th">
                    비밀번호 확인<span class="required-field">(필수)</span>
                  </th>
                  <td class="table2__td">
                    <input
                      type="password"
                      v-model="confirmPassword"
                      class="input1 input1_size-100p"
                    />
                    <p class="error-message" v-show="!this.confirmPassword">
                      필수입력항목입니다.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th class="table2__th">
                    이름<span class="required-field">(필수)</span>
                  </th>
                  <td class="table2__td">
                    <input
                      type="text"
                      v-model="userName"
                      name=""
                      id=""
                      class="input1 input1_size-100p"
                    />
                    <p class="error-message" v-show="!this.userName">
                      필수입력항목입니다.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="btn-group box1">
            <div class="btn-group__center">
              <button type="submit" class="btn btn_color1 login__btn-submit">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </form> -->
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import { signUser } from "@/api/index";
export default {
  data() {
    return {
      userId: "",
      password: "",
      confirmPassword: "",
      userName: "",
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async submitForm() {
      try {
        if (
          !this.userId ||
          !this.password ||
          !this.confirmPassword ||
          !this.userName
        ) {
          const errorElemAll = document.querySelectorAll(".error-message");
          for (let i = 0; i < errorElemAll.length; i++) {
            errorElemAll[i].classList.add("is-active");
          }
          return false;
        }

        if (this.password !== this.confirmPassword) {
          alert("패스워드가 일치하지 않습니다.");
        }

        const userData = {
          userId: this.userId,
          password: this.password,
          userName: this.userName,
        };
        const { data } = await signUser(userData);
        if (data.loginYn == "Y") {
          alert("회원가입완료");
        } else {
          alert("비밀번호를 확인해주세요");
        }
      } catch (error) {
        // console.log(error)
      }
    },
  },
};
</script>

<style></style>
