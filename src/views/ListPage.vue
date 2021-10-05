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

import ModelManList from "@/components/model/ModelManList";
import ModelWomanList from "@/components/model/ModelWomanList";
import ModelSeniorList from "@/components/model/ModelSeniorList";
import PortfolioList from "@/components/portfolio/PortfolioList";
import ProductionList from "@/components/production/ProductionList";
import ResumeList from "@/components/resume/ResumeList";

export default {
  data() {
    return {
      currentComponent: "ModelManList",
    };
  },
  components: {
    Header,
    Footer,
    Lnb,
    ModelManList,
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
      if (page == "man") {
        this.currentComponent = "ModelManList";
      } else if (page == "woman") {
        this.currentComponent = "ModelWomanList";
      } else if (page == "senior") {
        this.currentComponent = "ModelSeniorList";
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
