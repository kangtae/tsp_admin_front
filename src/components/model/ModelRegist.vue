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
                <col style="width: 100px" />
                <col style="width: 300px" />
                <col style="width: 100px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th class="active">구분</th>
                  <td colspan="5">
                    <label class="radio-inline">
                      <span class="form-radio">
                        <input
                          type="radio"
                          name="categoryCd"
                          value="man"
                          v-model="categoryCd"
                          checked
                        />
                        <i></i>
                      </span>
                      남자
                    </label>
                    <label class="radio-inline">
                      <span class="form-radio">
                        <input
                          type="radio"
                          name="categoryCd"
                          value="woman"
                          v-model="categoryCd"
                        />
                        <i></i>
                      </span>
                      여자
                    </label>
                    <label class="radio-inline">
                      <span class="form-radio">
                        <input
                          type="radio"
                          name="categoryCd"
                          value="senior"
                          v-model="categoryCd"
                        />
                        <i></i>
                      </span>
                      시니어
                    </label>
                  </td>
                </tr>
                <tr>
                  <th class="active">나이</th>
                  <td colspan="5">
                    <label class="radio-inline">
                      <span class="form-radio">
                        <input
                          type="radio"
                          name="categoryAge"
                          value="2"
                          v-model="categoryAge"
                          checked
                        />
                        <i></i>
                      </span>
                      20대
                    </label>
                    <label class="radio-inline">
                      <span class="form-radio">
                        <input
                          type="radio"
                          name="categoryAge"
                          value="3"
                          v-model="categoryAge"
                        />
                        <i></i>
                      </span>
                      30대
                    </label>
                    <label class="radio-inline">
                      <span class="form-radio">
                        <input
                          type="radio"
                          name="categoryAge"
                          value="4"
                          v-model="categoryAge"
                        />
                        <i></i>
                      </span>
                      40대
                    </label>
                    <label class="radio-inline">
                      <span class="form-radio">
                        <input
                          type="radio"
                          name="categoryAge"
                          value="5"
                          v-model="categoryAge"
                        />
                        <i></i>
                      </span>
                      50대
                    </label>
                    <label class="radio-inline">
                      <span class="form-radio">
                        <input
                          type="radio"
                          name="categoryAge"
                          value="6"
                          v-model="categoryAge"
                        />
                        <i></i>
                      </span>
                      60대
                    </label>
                    <label class="radio-inline">
                      <span class="form-radio">
                        <input
                          type="radio"
                          name="categoryAge"
                          value="7"
                          v-model="categoryAge"
                        />
                        <i></i>
                      </span>
                      70대
                    </label>
                  </td>
                </tr>
                <tr>
                  <th class="active">국문 이름</th>
                  <td colspan="5">
                    <input
                      type="text"
                      name=""
                      id=""
                      v-model="korTitle"
                      class="form-control input-sm"
                    />
                  </td>
                </tr>
                <tr>
                  <th class="active">영문 이름</th>
                  <td colspan="5">
                    <input
                      type="text"
                      name=""
                      id=""
                      v-model="engTitle"
                      class="form-control input-sm"
                    />
                  </td>
                </tr>
                <tr>
                  <th class="active">height</th>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      v-model="height"
                      class="form-control input-sm"
                    />
                  </td>
                  <th class="active">3-size</th>
                  <td>
                    <ul class="three-input">
                      <li class="three-input__item">
                        <input
                          type="number"
                          name=""
                          id=""
                          v-model="size1"
                          class="form-control input-sm"
                        />
                      </li>
                      <li class="three-input__item">
                        <input
                          type="number"
                          name=""
                          id=""
                          v-model="size2"
                          class="form-control input-sm"
                        />
                      </li>
                      <li class="three-input__item">
                        <input
                          type="number"
                          name=""
                          id=""
                          v-model="size3"
                          class="form-control input-sm"
                        />
                      </li>
                    </ul>
                  </td>
                  <th class="active">shoes</th>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      v-model="shoes"
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
                          class="dropifyMain"
                          data-height="200"
                          data-default-file=""
                          data-allowed-file-extensions="jpg png gif"
                          @change="imgChange"
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
                  <th class="active">첨부파일</th>
                  <td colspan="5">
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
                  <th class="active">노출 여부</th>
                  <td colspan="5">
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
                  <td colspan="6">
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
import { modelManCreated } from "@/api/index";
export default {
  data() {
    return {
      pageTitle: "모델 등록",
      categoryCd: "man",
      categoryAge: "2",
      korTitle: "",
      engTitle: "",
      height: "",
      size1: "",
      size2: "",
      size3: "",
      shoes: "",
      mainImage: "",
      imageFiles: [{}],
      editerValue: "",
      visible: "Y",
    };
  },
  components: { Editor, PageHeader },
  methods: {
    editorChange() {
      this.content = this.$refs.toastuiEditor.invoke("getMarkdown");
    },
    addFile() {
      this.imageFiles.push({});
      this.dropifyOtp();
    },
    removeFile(idx) {
      this.imageFiles.splice(idx, 1);
      const clearBtnAll = document.querySelectorAll(".js-image-clear");
      function triggerEvent(el, type) {
        var e = document.createEvent("HTMLEvents");
        e.initEvent(type, false, true);
        el.dispatchEvent(e);
      }
      if (clearBtnAll.length - 1 == idx) {
        return false;
      }
      triggerEvent(clearBtnAll[idx], "click");
    },
    imgChange(e) {
      let file = e.target.files[0];
      this.mainImage = file;
    },
    fileChange(idx, e) {
      let file = e.target.files[0];
      this.$set(this.imageFiles, idx, file);
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

        var dropifyOtpMain = {
          tpl: {
            clearButton:
              '<button type="button" class="dropify-clear js-mainimage-clear">{{ remove }}</button>',
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
            e.preventDefault();
            vm.$set(vm.imageFiles, idx, {});
          });
        });
        $(".dropifyMain").dropify(dropifyOtpMain);
        const clearBtnMain = document.querySelector(".js-mainimage-clear");
        clearBtnMain.addEventListener("click", function (e) {
          e.preventDefault();
          vm.mainImage = "";
        });
      });
    },
    async submitForm() {
      this.$store.state.LoadingStatus = true;
      let totalImageFiles = this.imageFiles.slice();
      totalImageFiles.unshift(this.mainImage);
      const totalSize3 = `${this.size1}-${this.size2}-${this.size3}`;
      const modelManData = new FormData();
      modelManData.append("modelKorName", this.korTitle);
      modelManData.append("modelEngName", this.engTitle);
      modelManData.append("categoryCd", this.categoryCd);
      modelManData.append("categoryAge", this.categoryAge);
      modelManData.append("shoes", this.shoes);
      modelManData.append("size3", totalSize3);
      modelManData.append("height", this.height);
      modelManData.append("visible", this.visible);
      if (totalImageFiles.length > -1) {
        for (let i = 0; i < totalImageFiles.length; i++) {
          modelManData.append(`imageFiles`, totalImageFiles[i]);
        }
      }
      modelManData.append(
        "modelDescription",
        this.$refs.toastuiEditor.invoke("getMarkdown")
      );
      const { data } = await modelManCreated(modelManData);
      this.$store.state.LoadingStatus = false;
      if (data == "Y") {
        this.$router.push("/admin/content/man");
      }
    },
  },
  created() {
    this.dropifyOtp();
  },
};
</script>

<style></style>
