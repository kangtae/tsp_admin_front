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
                  <th class="active">해쉬 태그</th>
                  <td>
                    <input
                      type="text"
                      name=""
                      id=""
                      v-model="hash"
                      class="form-control input-sm"
                    />
                  </td>
                </tr>
                <tr>
                  <th class="active">카테고리</th>
                  <td>
                    <div class="input-group">
                      <select v-model="categoryCd" class="form-control">
                        <option value="0">광고</option>
                        <option value="1">패션쇼</option>
                        <option value="2">패션필름</option>
                        <option value="3">뮤직비디오</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="active">동영상 URL</th>
                  <td>
                    <input
                      type="text"
                      name=""
                      id=""
                      v-model="videoUrl"
                      class="form-control input-sm"
                    />
                  </td>
                </tr>
                <tr>
                  <th class="active">첨부파일</th>
                  <td>
                    <div class="row">
                      <div
                        v-for="(item, idx) in imageFiles"
                        v-bind:key="idx"
                        class="col-xs-2 input-file-box"
                      >
                        <input
                          type="file"
                          class="dropify js-file-change"
                          data-height="100"
                          data-default-file=""
                          @change="fileChange(idx, $event)"
                        />
                        <button
                          v-if="idx > 0"
                          class="btn btn-xs btn-danger btn-remove"
                          type="button"
                          @click="removeFile(idx, $event)"
                        >
                          <i class="fa fa-times" aria-hidden="true"></i>
                          <span class="sr-only">삭제</span>
                        </button>
                        <button
                          @click="addFile"
                          class="btn btn-xs btn-primary btn-duplicator"
                          type="button"
                        >
                          <i class="fa fa-plus" aria-hidden="true"></i>
                          <span class="sr-only">추가</span>
                        </button>
                      </div>
                    </div>
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
import { portfolioCreated } from "@/api/index";

export default {
  data() {
    return {
      pageTitle: "포트폴리오 등록",
      title: "",
      hash: "",
      categoryCd: 0,
      videoUrl: "",
      imageFiles: [{ file: "", fileName: "" }],
      editerValue: "",
    };
  },
  components: { Editor, PageHeader },
  methods: {
    editorChange() {
      this.content = this.$refs.toastuiEditor.invoke("getMarkdown");
    },
    addFile() {
      this.imageFiles.push({
        file: "",
        fileName: "",
      });
      this.dropifyOtp();
    },
    removeFile(idx) {
      console.log(idx);
      this.imageFiles.splice(idx, 1);
    },
    fileChange(idx, e) {
      console.log(idx);
      console.log(e);
      let file = e.target.files[0];
      console.log(this);
      this.$set(this.imageFiles, idx, { file: file, fileName: file.name });
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
        Array.prototype.forEach.call(clearBtnAll, function (clearBtn, idx) {
          clearBtn.addEventListener("click", function (e) {
            console.log(vm);
            e.preventDefault();
            vm.$set(vm.imageFiles, idx, { file: "", fileName: "" });
          });
        });
      });
    },
    async submitForm() {
      const portfolioData = new FormData();
      portfolioData.append("title", this.title);
      portfolioData.append("hashTag", this.hash);
      portfolioData.append("categoryCd", this.categoryCd);
      portfolioData.append("videoUrl", this.videoUrl);
      portfolioData.append("imageFiles", this.imageFiles);
      portfolioData.append(
        "editerValue",
        this.$refs.toastuiEditor.invoke("getMarkdown")
      );
      const { data } = await portfolioCreated(portfolioData);
      if (data == "Y") {
        this.$router.push("/admin/content/portfolio");
      }
    },
  },
  created() {
    this.dropifyOtp();
  },
};
</script>

<style>
.dropify-wrapper .dropify-message p {
  font-size: 14px;
}
</style>
