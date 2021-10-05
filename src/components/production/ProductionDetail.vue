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
                    {{ title }}
                  </td>
                </tr>
                <tr>
                  <th class="active">대표 이미지</th>
                  <td colspan="5">
                    <div class="row">
                      <div class="col-xs-2">
                        <img :src="filePath" alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="active">노출 여부</th>
                  <td>
                    {{ visibleTxt }}
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
            <a class="btn btn-danger" href="" role="button">
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
              to="/admin/content/production"
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
import { fetchProduction } from "@/api/index";

export default {
  data() {
    return {
      pageTitle: "프로덕션 상세",
      title: "",
      imageFile: {},
      visible: "",
      filePath: "",
      description: "",
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
  },
  async created() {
    this.$store.state.LoadingStatus = true;
    const idx = this.$route.params.idx;
    const { data } = await fetchProduction(idx);
    this.$store.state.LoadingStatus = false;
    this.title = data.productionInfo.title;
    this.visible = data.productionInfo.visible;
    this.filePath = data.productionInfo.file_mask;
    this.description = data.productionInfo.description;
  },
};
</script>

<style>
.dropify-wrapper .dropify-message p {
  font-size: 14px;
}
</style>
