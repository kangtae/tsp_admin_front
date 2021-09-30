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
import ProductionEdit from "@/components/production/ProductionEdit";

export default {
  data() {
    return {
      currentComponent: "ProductionEdit",
    };
  },
  components: {
    Header,
    Footer,
    Lnb,
    ProductionEdit,
  },
  methods: {
    fetchData() {
      const page = this.$route.params.page;
      if (page == "production") {
        this.currentComponent = "ProductionEdit";
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
