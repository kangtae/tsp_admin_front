<template>
  <div style="display: table; width: 100%">
    <Header></Header>
    <LodingSpinner v-if="$store.state.LoadingStatus"></LodingSpinner>
    <component :is="currentComponent"></component>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Lnb from "@/components/common/Lnb";
import ResumeDetail from "@/components/resume/ResumeDetail";
import ProductionDetail from "@/components/production/ProductionDetail.vue";
import PortfolioDetail from "@/components/portfolio/PortfolioDetail.vue";
import ModelDetail from "@/components/model/ModelDetail.vue";
import LodingSpinner from "@/components/common/LodingSpinner.vue";

export default {
  data() {
    return {
      currentComponent: "ResumeDetail",
    };
  },
  components: {
    Header,
    Footer,
    Lnb,
    ResumeDetail,
    ProductionDetail,
    PortfolioDetail,
    LodingSpinner,
    ModelDetail,
  },
  methods: {
    fetchData() {
      const page = this.$route.params.page;
      console.log(page);
      if (page == "resume") {
        this.currentComponent = "ResumeDetail";
      } else if (page == "production") {
        this.currentComponent = "ProductionDetail";
      } else if (page == "1" || page == "2" || page == "3") {
        this.currentComponent = "ModelDetail";
      } else if (page == "portfolio") {
        this.currentComponent = "PortfolioDetail";
      }
    },
  },
  watch: {
    $route: "fetchData",
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
