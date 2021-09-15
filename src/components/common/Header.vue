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
              <a
                href="../account/계정관리_01비밀번호변경.html"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                >모델관리
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <a href="../account/계정관리_01비밀번호변경.html" class=""
                    >비밀번호 변경</a
                  >
                </li>
              </ul>
            </li>
            <li role="presentation">
              <a href="../news/News관리_01목록.html">프로덕션 관리</a>
            </li>
            <li role="presentation">
              <a href="../notice/Notice관리_01목록.html">포트폴리오 관리</a>
            </li>
            <li role="presentation">
              <a href="../gallery/Gallery관리_01목록.html">지원서 관리</a>
            </li>
          </ul>
          <p class="navbar-text navbar-right">
            안녕하세요. 홍길동님
            <button type="submit" class="btn btn-default btn-xs">
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
export default {};
</script>

<style></style>
