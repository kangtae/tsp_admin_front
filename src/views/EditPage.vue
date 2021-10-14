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
import ProductionEdit from "@/components/production/ProductionEdit";
import ModelEdit from "@/components/model/ModelEdit";
import LodingSpinner from "@/components/common/LodingSpinner.vue";

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
    ModelEdit,
    LodingSpinner,
  },
  methods: {
    fetchData() {
      const page = this.$route.params.page;
      console.log(page);
      if (page == "production") {
        this.currentComponent = "ProductionEdit";
      } else if (page == "1" || page == "2" || page == "3") {
        this.currentComponent = "ModelEdit";
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
