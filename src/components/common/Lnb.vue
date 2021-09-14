<template>
  <div class="menu">
    <div class="menu_tit">
      <ul>
        <li>홍길동 님</li>
      </ul>
    </div>
    <div class="menu_lst">
      <ul>
        <li>
          <a href="#" class="on">모델 관리</a>
          <!-- 2016-05-16 활성화 시 on class 추가 -->
          <ul style="display: block">
            <!-- 2016-05-16 디폴트 활성화 상태 -->
            <li>
              <a href="#">여자모델</a>
            </li>
            <li>
              <a href="#">남자모델</a>
            </li>
            <li>
              <a href="#">시니어모델</a>
            </li>
          </ul>
        </li>
        <li><a href="#">프로덕션 관리</a></li>
        <li><a href="#">포트폴리오 관리</a></li>
        <li><a href="#">지원자 관리</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
