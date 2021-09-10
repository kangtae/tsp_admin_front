<template>
  <div>
    <form action="">
      <fieldset class="fieldset">
        <legend class="legend">로그인</legend>

        <div class="login">
          <h1 class="login__tit">관리자 로그인</h1>
          <div class="login__column">
            <label for="loginId" class="login__label"
              ><i class="fa fa-user"></i></label
            ><input
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
              /><label class="checkbox1-label" for="loginPwSave"
                >비밀번호 저장</label
              >
            </div>
          </div>
          <a href="#" class="btn btn_color1 login__btn-submit">로그인</a>
          <a href="#" class="btn btn_color2 login__btn-submit">회원가입</a>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
