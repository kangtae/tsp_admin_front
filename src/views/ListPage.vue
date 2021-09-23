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
import ModelManList from "@/components/model/ModelManList";
import PortfolioList from "@/components/portfolio/PortfolioList";
import ProductionList from "@/components/production/ProductionList";

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
    PortfolioList,
    ProductionList,
  },
  methods: {
    fetchData() {
      const page = this.$route.params.page;
      if (page == "man") {
        this.currentComponent = "ModelManList";
      } else if (page == "portfolio") {
        this.currentComponent = "PortfolioList";
      } else if (page == "production") {
        this.currentComponent = "ProductionList";
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
