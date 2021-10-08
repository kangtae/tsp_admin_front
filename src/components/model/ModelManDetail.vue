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
                  <th class="active">나이</th>
                  <td colspan="5">{{ category_age }}</td>
                </tr>
                <tr>
                  <th class="active">국문 이름</th>
                  <td colspan="5">
                    {{ model_kor_name }}
                  </td>
                </tr>
                <tr>
                  <th class="active">영문 이름</th>
                  <td colspan="5">
                    {{ model_eng_name }}
                  </td>
                </tr>
                <tr>
                  <th class="active">height</th>
                  <td>
                    {{ height }}
                  </td>
                  <th class="active">3-size</th>
                  <td>
                    {{ size3 }}
                  </td>
                  <th class="active">shoes</th>
                  <td>
                    {{ shoes }}
                  </td>
                </tr>
                <tr>
                  <th class="active">대표 이미지</th>
                  <td colspan="5">
                    <div
                      class="row"
                      v-for="(modelImages, idx) in mainModelImageList"
                      :key="idx"
                    >
                      <div class="col-xs-2">
                        <img
                          class="img-w100"
                          :src="modelImages.fileMask"
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="active">첨부파일</th>
                  <td colspan="5">
                    <div class="row">
                      <div
                        class="col-xs-2"
                        v-for="(modelImages, idx) in subModelImageList"
                        :key="idx"
                      >
                        <img
                          class="img-w100"
                          :src="modelImages.fileMask"
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="active">노출 여부</th>
                  <td colspan="5">
                    {{ visibleTxt }}
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <div>
                      {{ model_description }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- //table -->
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 text-left">
            <a
              class="btn btn-danger"
              @click.self.prevent="ProductionDelete"
              role="button"
            >
              <i class="fa fa-trash" aria-hidden="true"></i> 삭제</a
            >
          </div>
          <div class="col-sm-4 text-center"></div>
          <div class="col-sm-4 text-right">
            <a
              class="btn btn-success"
              @click.self.prevent="ProductionEdit"
              role="button"
            >
              <i class="fa fa-wrench" aria-hidden="true"></i> 수정</a
            >
            <router-link
              class="btn btn-default"
              to="/admin/content/man"
              role="button"
            >
              <i class="fa fa-list" aria-hidden="true"></i> 목록</router-link
            >
          </div>
        </div>
      </div>
      <!-- //container-fluid -->
    </form>
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import PageHeader from "@/components/common/PageHeader";
import { deleteProduction, fetchModelMan } from "@/api/index";

export default {
  data() {
    return {
      pageTitle: "남자모델 상세",
      category_age: "",
      model_kor_name: "",
      model_eng_name: "",
      model_description: "",
      category_nm: "",
      category_cd: "",
      idx: "",
      height: "",
      shoes: "",
      imageFile: {},
      visible: "",
      filePath: "",
      mainModelImageList: "",
      subModelImageList: "",
      size3: "",
    };
  },
  components: { PageHeader },
  computed: {
    visibleTxt() {
      let txt;
      if (this.visible == "Y") {
        txt = "노출";
      } else {
        txt = "미노출";
      }
      return txt;
    },
  },
  methods: {
    ProductionEdit() {
      const seq = this.$route.params.idx;
      this.$router.push(`/admin/edit/production/${seq}`);
    },
    async ProductionDelete() {
      const seq = this.$route.params.idx;
      const { data } = await deleteProduction(seq);
      if (data == "Y") {
        this.$router.push(`/admin/content/production`);
      }
    },
  },
  async created() {
    this.$store.state.LoadingStatus = true;
    const idx = this.$route.params.idx;
    const { data } = await fetchModelMan(idx);
    this.$store.state.LoadingStatus = false;
    this.model_kor_name = data.modelMap.modelInfo.model_kor_name;
    this.model_eng_name = data.modelMap.modelInfo.model_eng_name;
    this.model_description = data.modelMap.modelInfo.model_description;
    this.category_nm = data.modelMap.modelInfo.category_nm;
    this.category_cd = data.modelMap.modelInfo.category_cd;
    this.idx = data.modelMap.modelInfo.idx;
    this.shoes = data.modelMap.modelInfo.shoes;
    this.height = data.modelMap.modelInfo.height;
    this.size3 = data.modelMap.modelInfo.size3;
    this.visible = data.modelMap.modelInfo.visible;
    //이미지 분리하기
    let images = data.modelMap.modelImageList;
    let mainImages = images.filter(function (item) {
      return item.imageType === "main";
    });
    let subImages = images.filter(function (item) {
      return item.imageType !== "main";
    });
    this.mainModelImageList = mainImages;
    this.subModelImageList = subImages;
  },
};
</script>

<style>
.dropify-wrapper .dropify-message p {
  font-size: 14px;
}
</style>
