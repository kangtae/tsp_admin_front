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
import LodingSpinner from "@/components/common/LodingSpinner.vue";

import ModelList from "@/components/model/ModelList";
import ModelWomanList from "@/components/model/ModelWomanList";
import ModelSeniorList from "@/components/model/ModelSeniorList";
import PortfolioList from "@/components/portfolio/PortfolioList";
import ProductionList from "@/components/production/ProductionList";
import ResumeList from "@/components/resume/ResumeList";

export default {
  data() {
    return {
      currentComponent: "ModelList",
    };
  },
  components: {
    Header,
    Footer,
    Lnb,
    ModelList,
    ModelWomanList,
    PortfolioList,
    ProductionList,
    ModelSeniorList,
    ResumeList,
    LodingSpinner,
  },
  methods: {
    fetchData() {
      const page = this.$route.params.page;
      if (page == "1" || page == "2" || page == "3") {
        this.currentComponent = "ModelList";
      } else if (page == "portfolio") {
        this.currentComponent = "PortfolioList";
      } else if (page == "production") {
        this.currentComponent = "ProductionList";
      } else if (page == "resume") {
        this.currentComponent = "ResumeList";
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
