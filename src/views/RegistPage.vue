<template>
  <div style="display: table; width: 100%">
    <Header></Header>
    <component :is="currentComponent"></component>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Lnb from "@/components/common/Lnb";
import ModelManRegist from "@/components/model/ModelManRegist";
import PortfolioRegist from "@/components/portfolio/PortfolioRegist";
import productionRegist from "@/components/production/ProductionRegist";

export default {
  data() {
    return {
      currentComponent: "ModelManRegist",
    };
  },
  components: {
    Header,
    Footer,
    Lnb,
    ModelManRegist,
    PortfolioRegist,
    productionRegist,
  },
  methods: {
    fetchData() {
      const page = this.$route.params.page;
      if (page == "man") {
        this.currentComponent = "ModelManRegist";
      } else if (page == "portfolio") {
        this.currentComponent = "PortfolioRegist";
      } else if (page == "production") {
        this.currentComponent = "productionRegist";
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
