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
import ModelRegist from "@/components/model/ModelRegist";
import PortfolioRegist from "@/components/portfolio/PortfolioRegist";
import productionRegist from "@/components/production/ProductionRegist";

export default {
  data() {
    return {
      currentComponent: "ModelRegist",
    };
  },
  components: {
    Header,
    Footer,
    Lnb,
    ModelRegist,
    PortfolioRegist,
    productionRegist,
  },
  methods: {
    fetchData() {
      const page = this.$route.params.page;
      if (page == "model") {
        this.currentComponent = "ModelRegist";
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
