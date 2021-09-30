<template>
  <div class="site-container">
    <form @submit.prevent="submitForm">
      <div class="container-fluid">
        <PageHeader :title="pageTitle"></PageHeader>
        <div class="row">
          <div class="col-sm-12">
            <table class="table table-bordered">
              <colgroup>
                <col style="width: 100px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th class="active">제목</th>
                  <td>
                    <input
                      type="text"
                      name=""
                      id=""
                      v-model="title"
                      class="form-control input-sm"
                    />
                  </td>
                </tr>
                <tr>
                  <th class="active">대표 이미지</th>
                  <td colspan="5">
                    <div class="row">
                      <div class="col-xs-2">
                        <input
                          type="file"
                          id="input-file-now"
                          class="dropify"
                          data-height="200"
                          data-default-file=""
                          data-allowed-file-extensions="jpg png gif"
                          @change="fileChange"
                        />
                      </div>
                    </div>
                    <div class="xs-mt-5">
                      권장비율 00:00 <br />
                      권장사이즈 000x000
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="active">노출 여부</th>
                  <td>
                    <label class="radio-inline">
                      <span class="form-radio">
                        <input
                          type="radio"
                          name="inlineRadioOptions"
                          value="Y"
                          v-model="visible"
                          checked
                        />
                        <i></i>
                      </span>
                      노출
                    </label>
                    <label class="radio-inline">
                      <span class="form-radio">
                        <input
                          type="radio"
                          name="inlineRadioOptions"
                          value="N"
                          v-model="visible"
                        />
                        <i></i>
                      </span>
                      미노출
                    </label>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div>
                      <Editor
                        @change="editorChange"
                        initialEditType="wysiwyg"
                        preview-style="tab"
                        ref="toastuiEditor"
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
            <a class="btn btn-default" href="자료실_01목록.html" role="button">
              <i class="fa fa-times" aria-hidden="true"></i> 취소</a
            >
            <button type="submit" class="btn btn-success">
              <i class="fa fa-check" aria-hidden="true"></i> 등록
            </button>
          </div>
          <div class="col-sm-4 text-right"></div>
        </div>
      </div>
      <!-- //container-fluid -->
    </form>
  </div>
</template>

<script>
import $ from "jquery";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";
import PageHeader from "@/components/common/PageHeader";
import { fetchProduction, editProduction } from "@/api/index";

export default {
  data() {
    return {
      pageTitle: "프로덕션 수정",
      title: "",
      imageFile: {},
      visible: "Y",
    };
  },
  components: { Editor, PageHeader },
  methods: {
    editorChange() {
      this.content = this.$refs.toastuiEditor.invoke("getMarkdown");
    },
    fileChange(e) {
      let file = e.target.files[0];
      console.log(file);
      this.imageFile = file;
    },
    dropifyOtp() {
      const vm = this;
      $(document).ready(function () {
        var dropifyOtp = {
          tpl: {
            clearButton:
              '<button type="button" class="dropify-clear js-image-clear">{{ remove }}</button>',
          },
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
            imageFormat:
              "이미지 형식이 허용되지 않습니다. ({{ value }}만 허용)",
            fileExtension: "허용되지 않는 파일형식입니다. ({{ value }}만 허용)",
          },
        };
        $(".dropify").dropify(dropifyOtp);
        const clearBtnAll = document.querySelectorAll(".js-image-clear");
        Array.prototype.forEach.call(clearBtnAll, function (clearBtn) {
          clearBtn.addEventListener("click", function (e) {
            console.log(vm);
            e.preventDefault();
            vm.imageFile.file = "";
          });
        });
      });
    },
    async submitForm() {
      const productionData = new FormData();
      productionData.append("title", this.title);
      productionData.append("visible", this.visible);
      productionData.append("imageFiles", this.imageFile);
      productionData.append(
        "description",
        this.$refs.toastuiEditor.invoke("getMarkdown")
      );
      const { data } = await editProduction(productionData);
      if (data == "Y") {
        this.$router.push("/admin/content/production");
      }
    },
  },
  async created() {
    this.dropifyOtp();
    const idx = this.$route.params.idx;
    const { data } = await fetchProduction(idx);
    // this.newsTitle = data.newsInfo.news_title;
    // this.visible = data.newsInfo.visible;
    // this.fileTitle = data.newsInfo.fileName;
    // this.$refs.toastuiEditor.invoke(
    //   "setMarkdown",
    //   data.newsInfo.news_description
    // );
    console.log(data);
  },
};
</script>

<style>
.dropify-wrapper .dropify-message p {
  font-size: 14px;
}
</style>
