<template>
  <div class="site-container">
    <div class="container-fluid">
      <PageHeader :title="title"></PageHeader>
      <div class="row">
        <div class="col-sm-12">
          <div class="pull-right">
            <div class="form-inline">
              <div class="input-group">
                <select class="form-control">
                  <option value="">구분</option>
                  <option value="">이름</option>
                  <option value="">내용</option>
                </select>
              </div>
              <div class="input-group ml5">
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
              <th class="text-center">제목</th>
              <th class="text-center" style="width: 100px">등록일</th>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">광고</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >태고신이담:신의한수
                  </a>
                </td>
                <td class="text-center">2021-09-16</td>
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
          <router-link
            class="btn btn-success"
            to="/admin/regist/model"
            role="button"
          >
            <i class="fa fa-pencil" aria-hidden="true"></i> 등록
          </router-link>
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
    return {
      title: "포트폴리오",
    };
  },
  components: {
    PageHeader,
  },
};
</script>

<style></style>
