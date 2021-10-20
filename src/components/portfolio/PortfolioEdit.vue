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
                    <p class="error-message" v-show="!this.title">
                      제목을 입력해주세요.
                    </p>
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
                    <p class="error-message" v-show="!this.hash">
                      값을 입력해주세요.
                    </p>
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
                    <p class="error-message" v-show="!this.categoryCd">
                      카테고리를 선택해주세요.
                    </p>
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
                    <p class="error-message" v-show="!this.videoUrl">
                      동영상 URL을 입력해주세요.
                    </p>
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
                          :data-default-file="mainFilePath"
                          data-allowed-file-extensions="jpg png gif"
                          @change="imgChange"
                        />
                      </div>
                    </div>
                    <div class="xs-mt-5">
                      권장비율 00:00 <br />
                      권장사이즈 000x000
                    </div>
                    <p class="error-message" v-show="!this.mainImage">
                      이미지를 등록해주세요.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th class="active">첨부파일</th>
                  <td>
                    <div class="row">
                      <div
                        v-for="(item, idx) in updateImageFiles"
                        v-bind:key="idx"
                        class="col-xs-2 input-file-box"
                      >
                        <input
                          type="file"
                          class="dropify js-file-change"
                          data-height="100"
                          :data-default-file="item.fileMask"
                          @change="fileChange(idx, $event)"
                        />
                        <button
                          v-if="idx > 0"
                          class="btn btn-xs btn-danger btn-remove"
                          type="button"
                          @click="removeFile(item.idx, $event)"
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
                    <p class="error-message" v-show="this.imageFiles[0] == ''">
                      첫번째 이미지를 등록해주세요.
                    </p>
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
                      <p class="error-message" v-show="!this.editerValue">
                        값을 입력해주세요.
                      </p>
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
            <button class="btn btn-default" role="button" @click="cancelBtn">
              <i class="fa fa-times" aria-hidden="true"></i> 취소
            </button>
            <button type="submit" class="btn btn-success">
              <i class="fa fa-check" aria-hidden="true"></i> 수정
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
import { fetchPortfolio, editPortfolio } from "@/api/index";

export default {
  data() {
    return {
      pageTitle: "포트폴리오 수정",
      title: "",
      hash: "",
      videoUrl: "",
      categoryCd: "",
      imageFiles: [""],
      mainPortfolioImageList: "",
      subPortfolioImageList: "",
      editerValue: "",
      mainFilePath: "",
      mainImage: { file: "", state: "N" },
      copyArray: [],
    };
  },
  computed: {
    updateImageFiles() {
      let updateImages = this.imageFiles.filter(function (item) {
        return item.state !== "D";
      });
      return updateImages;
    },
  },
  components: { Editor, PageHeader },
  methods: {
    cancelBtn() {
      this.$router.push(`/admin/content/portfolio`);
    },
    editorChange() {
      this.editerValue = this.$refs.toastuiEditor.invoke("getMarkdown");
    },
    addFile() {
      this.imageFiles.push({});
      this.dropifyOtp();
    },
    removeFile(nowIdx) {
      // let previewImg = document.querySelectorAll(".dropify-render img");
      // console.log(previewImg);
      let imageIdx = this.imageFiles.map((item) => item.idx);
      let idx = imageIdx.indexOf(nowIdx);
      let deleteValueObj = {};
      deleteValueObj.state = "D";
      deleteValueObj.idx = nowIdx;
      this.$set(this.imageFiles, idx, deleteValueObj);
    },
    imgChange(e) {
      let file = e.target.files[0];
      this.mainImage.file = file;
      this.mainImage.state = "U";
      this.mainImage.idx = "0";
    },
    fileChange(idx, e) {
      let file = e.target.files[0];
      let updateValueObj = {};
      updateValueObj.file = file;
      updateValueObj.state = "U";
      updateValueObj.idx = "0";
      this.$set(this.imageFiles, idx, updateValueObj);
    },
    dropifyOtp() {
      const vm = this;
      $(document).ready(function () {
        var dropifyOtp = {
          tpl: {
            clearButton:
              '<button type="button" class="dropify-clear js-image-clear">{{ remove }}</button>',
            preview:
              '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">{{ replace }}</p></div></div></div>',
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
            e.preventDefault();
            vm.imageFile.file = "";
          });
        });
      });
    },
    async submitForm() {
      if (
        !this.title ||
        !this.hash ||
        !this.categoryCd ||
        !this.videoUrl ||
        this.imagesFiles == "" ||
        !this.imageFiles ||
        !this.editerValue
      ) {
        const errorElemAll = document.querySelectorAll(".error-message");
        for (let i = 0; i < errorElemAll.length; i++) {
          errorElemAll[i].classList.add("is-active");
        }
        return false;
      }
      this.$store.state.LoadingStatus = true;
      const idx = this.$route.params.idx;
      let copyImageFiles = this.imageFiles.slice();
      copyImageFiles.unshift(this.mainImage);
      const portfolioData = new FormData();
      portfolioData.append("title", this.title);
      portfolioData.append("hashTag", this.hash);
      portfolioData.append("categoryCd", this.categoryCd);
      portfolioData.append("videoUrl", this.videoUrl);
      portfolioData.append(
        "description",
        this.$refs.toastuiEditor.invoke("getMarkdown")
      );
      let imageState = copyImageFiles.map((item) => item.state);
      let idxState = copyImageFiles.map((item) => item.idx);
      let totalImageFiles = copyImageFiles.map((item) => item.file);
      portfolioData.append("idxState", idxState);
      portfolioData.append("imageState", imageState);

      if (totalImageFiles.length > -1) {
        for (let i = 0; i < totalImageFiles.length; i++) {
          portfolioData.append(`imageFiles`, totalImageFiles[i]);
        }
      }
      const { data } = await editPortfolio(idx, portfolioData);
      this.$store.state.LoadingStatus = false;

      if (data == "Y") {
        this.$router.push("/admin/content/portfolio");
      }
    },
  },

  async created() {
    const idx = this.$route.params.idx;
    this.$store.state.LoadingStatus = true;
    const { data } = await fetchPortfolio(idx);
    this.$store.state.LoadingStatus = false;
    console.log(data);
    this.videoUrl = data.portFolioInfo.video_url;
    this.categoryCd = data.portFolioInfo.category_cd;
    this.title = data.portFolioInfo.title;
    this.hash = data.portFolioInfo.hash_tag;
    this.$refs.toastuiEditor.invoke(
      "setMarkdown",
      data.portFolioInfo.description
    );
    let images = data.portFolioImageList;
    let mainImages = images.filter(function (item) {
      return item.imageType === "main";
    });
    let subImages = images.filter(function (item) {
      return item.imageType !== "main";
    });
    this.mainFilePath = mainImages[0].fileMask;
    this.mainImage.idx = mainImages[0].idx;
    for (let i = 0; i < subImages.length; i++) {
      subImages[i].state = "N";
      subImages[i].file = "";
    }
    this.imageFiles = subImages;

    this.dropifyOtp();
  },
};
</script>

<style>
.dropify-wrapper .dropify-message p {
  font-size: 14px;
}
</style>
