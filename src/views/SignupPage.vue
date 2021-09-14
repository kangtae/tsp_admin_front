<template>
  <form v-on:submit.prevent="submitForm">
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
        <!-- //box1 -->
        <div class="btn-group box1">
          <div class="btn-group__center">
            <button type="submit" class="btn btn_color1 login__btn-submit">
              회원가입
            </button>
          </div>
        </div>
        <!-- //btn-group -->
      </div>
    </fieldset>
  </form>
</template>

<script>
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
