<template>
  <div class="site-container">
    <div class="container-fluid">
      <div class="page-header">
        <h1 class="h2 font-weight-light">남자 모델</h1>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <table class="table table-bordered">
            <colgroup>
              <col style="width: 100px" />
              <col />
              <col style="width: 100px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="active">제목</th>
                <td colspan="3">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control input-sm"
                  />
                </td>
              </tr>
              <tr>
                <th class="active">등록일</th>
                <td>2021-09-16</td>
                <th class="active">조회수</th>
                <td></td>
              </tr>
              <tr>
                <th class="active">첨부파일</th>
                <td colspan="3">
                  <div class="hidden">
                    <div class="col-xs-2 input-file-box model">
                      <input
                        type="file"
                        data-height="100"
                        data-default-file=""
                      />
                      <button class="btn btn-xs btn-danger btn-remove">
                        <i class="fa fa-times" aria-hidden="true"></i>
                        <span class="sr-only">삭제</span>
                      </button>
                      <button class="btn btn-xs btn-primary btn-duplicator">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <span class="sr-only">추가</span>
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-2 input-file-box">
                      <input
                        type="file"
                        class="dropify"
                        data-height="100"
                        data-default-file=""
                      />
                      <button class="btn btn-xs btn-primary btn-duplicator">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <span class="sr-only">추가</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <div>
                    <div
                      style="
                        padding: 200px;
                        background-color: skyblue;
                        text-align: center;
                      "
                    >
                      에디터
                    </div>
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
          <a class="btn btn-default" href="자료실_01목록.html" role="button">
            <i class="fa fa-times" aria-hidden="true"></i> 취소</a
          >
          <a class="btn btn-success" href="자료실_02상세.html" role="button">
            <i class="fa fa-check" aria-hidden="true"></i> 등록</a
          >
        </div>
        <div class="col-sm-4 text-right"></div>
      </div>
    </div>
    <!-- //container-fluid -->
  </div>
</template>

<script>
import $ from "jquery";
export default {
  created() {
    $(document).ready(function () {
      var dropifyOtp = {
        messages: {
          default: "파일을 여기 끌어다 놓거나 클릭하십시오.",
          replace: "파일을 바꾸려면 드래그 앤 드롭하거나 클릭하십시오.",
          remove: "삭제",
          error: "죄송합니다.",
        },
        error: {
          fileSize: "파일 크기가 너무 큽니다. (최대 {{ value }})",
          minWidth: "이미지가 너무 작습니다. (최고 {{ value }}px)",
          maxWidth: "이미지 너비가 너무 큽니다. (최대 {{ value }}px)",
          minHeight: "이미지 높이가 너무 작습니다. (최소 {{ value }}px)",
          maxHeight: "이미지 높이가 너무 큽니다. (최대 {{ value }}px )",
          imageFormat: "이미지 형식이 허용되지 않습니다. ({{ value }}만 허용)",
          fileExtension: "허용되지 않는 파일형식입니다. ({{ value }}만 허용)",
        },
      };

      $(".dropify").dropify(dropifyOtp);
      $("body").on("click", ".btn-duplicator", clone_model);
      $("body").on("click", ".btn-remove", remove);

      //Functions
      function clone_model() {
        var b = $(this).parent(".input-file-box"),
          c = $(".model").clone(true, true);

        c.removeClass("model");
        c.find("input").addClass("dropify");

        $(b).after(c);
        $(".dropify").dropify(dropifyOtp);
      }

      function remove() {
        $(this).closest(".input-file-box").remove();
      }
    });
  },
};
</script>

<style>
.dropify-wrapper .dropify-message p {
  font-size: 14px;
}
</style>
