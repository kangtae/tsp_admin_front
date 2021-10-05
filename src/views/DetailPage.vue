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
    LodingSpinner,
  },
  methods: {
    fetchData() {
      const page = this.$route.params.page;
      if (page == "resume") {
        this.currentComponent = "ResumeDetail";
      } else if (page == "production") {
        this.currentComponent = "ProductionDetail";
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
