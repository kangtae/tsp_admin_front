<template>
  <div class="site-container">
    <div class="container-fluid">
      <PageHeader :title="건설"></PageHeader>
      <div class="row">
        <div class="col-sm-12">
          <div class="pull-right">
            <div class="form-inline">
              <div class="input-group">
                <select class="form-control">
                  <option value="">구분</option>
                  <option value="">토목</option>
                  <option value="">건축</option>
                  <option value="">플랜트</option>
                </select>
              </div>
              <div class="input-group">
                <input type="text" class="form-control" />
                <span class="input-group-btn">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onclick="window.location.href='건설_01목록.html'"
                  >
                    <span class="fa fa-search" aria-hidden="true"></span>
                    <span class="text-hide">검색</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="space-vertical"></div>
          <table class="table table-striped table-bordered">
            <thead>
              <th class="text-center" style="width: 60px">번호</th>
              <th class="text-center" style="width: 100px">구분</th>
              <th class="text-center">공사명</th>
              <th class="text-center" style="width: 100px">등록일</th>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">10</td>
                <td class="text-center">건축</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >종로구 평창동 타운하우스 신축공사</a
                  >
                </td>
                <td class="text-center">2018-11-21</td>
              </tr>
              <tr>
                <td class="text-center">9</td>
                <td class="text-center">건축</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >종로구 평창동 타운하우스 신축공사</a
                  >
                </td>
                <td class="text-center">2018-11-21</td>
              </tr>
              <tr>
                <td class="text-center">8</td>
                <td class="text-center">건축</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >종로구 평창동 타운하우스 신축공사</a
                  >
                </td>
                <td class="text-center">2018-11-21</td>
              </tr>
              <tr>
                <td class="text-center">7</td>
                <td class="text-center">건축</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >종로구 평창동 타운하우스 신축공사</a
                  >
                </td>
                <td class="text-center">2018-11-21</td>
              </tr>
              <tr>
                <td class="text-center">6</td>
                <td class="text-center">건축</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >종로구 평창동 타운하우스 신축공사</a
                  >
                </td>
                <td class="text-center">2018-11-21</td>
              </tr>
              <tr>
                <td class="text-center">5</td>
                <td class="text-center">건축</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >종로구 평창동 타운하우스 신축공사</a
                  >
                </td>
                <td class="text-center">2018-11-21</td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td class="text-center">건축</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >종로구 평창동 타운하우스 신축공사</a
                  >
                </td>
                <td class="text-center">2018-11-21</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">건축</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >종로구 평창동 타운하우스 신축공사</a
                  >
                </td>
                <td class="text-center">2018-11-21</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">건축</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >종로구 평창동 타운하우스 신축공사</a
                  >
                </td>
                <td class="text-center">2018-11-21</td>
              </tr>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">건축</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >종로구 평창동 타운하우스 신축공사</a
                  >
                </td>
                <td class="text-center">2018-11-21</td>
              </tr>
            </tbody>
          </table>
          <!-- //table -->
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="text-center">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li class="active">
                <a href="#"
                  >1
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <a href="#">7</a>
              </li>
              <li>
                <a href="#">8</a>
              </li>
              <li>
                <a href="#">9</a>
              </li>
              <li>
                <a href="#">10</a>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 text-left"></div>
        <div class="col-sm-4 text-center"></div>
        <div class="col-sm-4 text-right">
          <a class="btn btn-success" href="건설_03등록.html" role="button">
            <i class="fa fa-pencil" aria-hidden="true"></i> 등록</a
          >
        </div>
      </div>
    </div>
    <!-- //container-fluid -->
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";

export default {
  data() {
    return {};
  },
  components: {
    PageHeader,
  },
};
</script>

<style></style>
