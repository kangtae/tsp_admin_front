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
                    <!-- <input
                      type="text"
                      name=""
                      id=""
                      v-model="title"
                      class="form-control input-sm"
                    /> -->
                    {{ title }}
                  </td>
                </tr>
                <tr>
                  <th class="active">해쉬 태그</th>
                  <td>
                    {{ hash_tag }}
                  </td>
                </tr>
                <tr>
                  <th class="active">카테고리</th>
                  <td>
                    {{ category_nm }}
                  </td>
                </tr>
                <tr>
                  <th class="active">동영상 URL</th>
                  <td>
                    {{ video_url }}
                  </td>
                </tr>
                <tr>
                  <th class="active">대표 이미지</th>
                  <td>
                    <div
                      class="row"
                      v-for="(portfolioImages, idx) in mainPortfolioImageList"
                      :key="idx"
                    >
                      <div class="col-xs-2">
                        <img
                          class="img-w100"
                          :src="portfolioImages.fileMask"
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="active">첨부파일</th>
                  <td>
                    <div class="row">
                      <div
                        class="col-xs-2"
                        v-for="(portfolioImages, idx) in subPortfolioImageList"
                        :key="idx"
                      >
                        <img
                          class="img-w100"
                          :src="portfolioImages.fileMask"
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div>
                      {{ description }}
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
              @click.self.prevent="PortfolioDelete"
              role="button"
            >
              <i class="fa fa-trash" aria-hidden="true"></i> 삭제</a
            >
          </div>
          <div class="col-sm-4 text-center"></div>
          <div class="col-sm-4 text-right">
            <a
              class="btn btn-success"
              @click.self.prevent="ModelEdit"
              role="button"
            >
              <i class="fa fa-wrench" aria-hidden="true"></i> 수정</a
            >
            <a @click.self.prevent="PortfolioListLink" class="btn btn-default">
              <i class="fa fa-list" aria-hidden="true"></i> 목록</a
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
import { deletePortfolio, fetchPortfolio } from "@/api/index";

export default {
  data() {
    return {
      pageTitle: "",
      title: "",
      hash_tag: "",
      video_url: "",
      category_nm: "",
      imageFile: {},
      mainPortfolioImageList: "",
      subPortfolioImageList: "",
      description: "",
    };
  },
  components: { PageHeader },
  methods: {
    PortfolioEdit() {
      const seq = this.$route.params.idx;
      this.$router.push(`/admin/edit/${this.page}/${seq}`);
    },
    PortfolioListLink() {
      this.$router.push(`/admin/content/portfolio`);
    },
    async PortfolioDelete() {
      const seq = this.$route.params.idx;
      const { data } = await deletePortfolio(seq);
      if (data == "Y") {
        this.$router.push(`/admin/content/portfolio`);
      }
    },
  },
  async created() {
    this.$store.state.LoadingStatus = true;
    const idx = this.$route.params.idx;
    this.page = this.$route.params.page;
    const { data } = await fetchPortfolio(idx);
    console.log(data);
    this.$store.state.LoadingStatus = false;
    this.hash_tag = data.portFolioInfo.hash_tag;
    this.video_url = data.portFolioInfo.video_url;
    this.category_nm = data.portFolioInfo.category_nm;
    this.description = data.portFolioInfo.description;

    this.title = data.portFolioInfo.title;

    this.pageTitle = "포트폴리오 상세";
    //이미지 분리하기
    let images = data.portFolioImageList;
    let mainImages = images.filter(function (item) {
      return item.imageType === "main";
    });
    let subImages = images.filter(function (item) {
      return item.imageType !== "main";
    });
    this.mainPortfolioImageList = mainImages;
    this.subPortfolioImageList = subImages;
  },
};
</script>

<style>
.dropify-wrapper .dropify-message p {
  font-size: 14px;
}
</style>
