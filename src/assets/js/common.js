/* eslint-disable */
import $ from "jquery";

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
